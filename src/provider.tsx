import { type ReactNode, createContext, useContext, useMemo } from "react";
import { Provider as UrqlProvider } from "urql";
import { match } from "ts-pattern";
import { createClient as createClientApi } from "./client-api/generated";
import { createUrqlClientWithConfig } from "./urql-client";
import { enhanceClient } from "./client-enhancer";
import type { ApiConfig, BastaContextValue, Client } from "./types";

const BastaContext = createContext<BastaContextValue | null>(null);

export interface BastaProviderProps {
  children: ReactNode;
  clientApi?: ApiConfig;
  managementApi?: ApiConfig;
}

export function BastaProvider({
  children,
  clientApi: clientConfig,
  managementApi: managementConfig,
}: BastaProviderProps) {
  // Create urql clients and enhanced clients
  const value = useMemo<BastaContextValue>(() => {
    const clientApi = clientConfig
      ? (() => {
          const baseClient = createClientApi({
            url: clientConfig.url,
            headers: clientConfig.headers,
          });
          const urqlClient = createUrqlClientWithConfig(clientConfig);
          return enhanceClient(baseClient, urqlClient);
        })()
      : null;

    const managementApi = managementConfig
      ? (() => {
          const baseClient = createClientApi({
            url: managementConfig.url,
            headers: managementConfig.headers,
          });
          const urqlClient = createUrqlClientWithConfig(managementConfig);
          return enhanceClient(baseClient, urqlClient);
        })()
      : null;

    return { clientApi, managementApi };
  }, [clientConfig, managementConfig]);

  // Use ts-pattern to conditionally render urql providers
  const content = match({
    clientApi: !!value.clientApi,
    managementApi: !!value.managementApi,
  })
    .with({ clientApi: true, managementApi: true }, () => (
      <UrqlProvider value={value.clientApi!.urqlClient}>
        <UrqlProvider value={value.managementApi!.urqlClient}>
          {children}
        </UrqlProvider>
      </UrqlProvider>
    ))
    .with({ clientApi: true, managementApi: false }, () => (
      <UrqlProvider value={value.clientApi!.urqlClient}>
        {children}
      </UrqlProvider>
    ))
    .with({ clientApi: false, managementApi: true }, () => (
      <UrqlProvider value={value.managementApi!.urqlClient}>
        {children}
      </UrqlProvider>
    ))
    .otherwise(() => children);

  return <BastaContext.Provider value={value}>{content}</BastaContext.Provider>;
}

// Hook to use the client API - returns Client (non-null) if configured
export function useClientApi(): Client {
  const context = useContext(BastaContext);
  if (!context) {
    throw new Error("useClientApi must be used within a BastaProvider");
  }
  if (!context.clientApi) {
    throw new Error(
      "useClientApi: clientApi is not configured in BastaProvider. Make sure you pass the clientApi prop to BastaProvider.",
    );
  }
  return context.clientApi;
}

// Hook to use the management API - returns Client (non-null) if configured
export function useManagementApi(): Client {
  const context = useContext(BastaContext);
  if (!context) {
    throw new Error("useManagementApi must be used within a BastaProvider");
  }
  if (!context.managementApi) {
    throw new Error(
      "useManagementApi: managementApi is not configured in BastaProvider. Make sure you pass the managementApi prop to BastaProvider.",
    );
  }
  return context.managementApi;
}

// Hook that returns both (original behavior with nullable types)
export function useBasta(): BastaContextValue {
  const context = useContext(BastaContext);
  if (!context) {
    throw new Error("useBasta must be used within a BastaProvider");
  }
  return context;
}
