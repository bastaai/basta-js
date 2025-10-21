import { type ReactNode, createContext, useContext, useMemo } from "react";
import { Provider as UrqlProvider } from "urql";
import { match, P } from "ts-pattern";
import { createClient as createClientApi } from "./client-api/generated";
import { createUrqlClientWithConfig } from "./urql-client";
import { enhanceClient } from "./client-enhancer";
import type { ApiConfig, BastaContextValue, Client } from "./types";
import {
  DEFAULT_CLIENT_API_URL,
  DEFAULT_MANAGEMENT_API_URL,
  CLIENT_API_VERSION,
  MANAGEMENT_API_VERSION,
} from "./constants";

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
  const { clientApi, managementApi } = useMemo<BastaContextValue>(() => {
    const clientApi = clientConfig
      ? (() => {
          const headersWithVersion = {
            "X-BASTA-API-VERSION": CLIENT_API_VERSION,
            ...clientConfig.headers,
          };

          const baseClient = createClientApi({
            url: clientConfig.url,
            headers: headersWithVersion,
          });
          const urqlClient = createUrqlClientWithConfig(
            { ...clientConfig, headers: headersWithVersion },
            DEFAULT_CLIENT_API_URL,
          );
          return enhanceClient(baseClient, urqlClient);
        })()
      : null;

    const managementApi = managementConfig
      ? (() => {
          const headersWithVersion = {
            "X-BASTA-API-VERSION": MANAGEMENT_API_VERSION,
            ...managementConfig.headers,
          };

          const baseClient = createClientApi({
            url: managementConfig.url,
            headers: headersWithVersion,
          });
          const urqlClient = createUrqlClientWithConfig(
            { ...managementConfig, headers: headersWithVersion },
            DEFAULT_MANAGEMENT_API_URL,
          );
          return enhanceClient(baseClient, urqlClient);
        })()
      : null;

    return { clientApi, managementApi };
  }, [clientConfig, managementConfig]);

  return (
    <BastaContext.Provider value={{ clientApi, managementApi }}>
      {match({
        clientApi,
        managementApi,
      })
        .with(
          { clientApi: P.nonNullable, managementApi: P.nonNullable },
          ({ clientApi, managementApi }) => (
            <UrqlProvider value={clientApi.urqlClient}>
              <UrqlProvider value={managementApi.urqlClient}>
                {children}
              </UrqlProvider>
            </UrqlProvider>
          ),
        )
        .with(
          { clientApi: P.nonNullable, managementApi: null },
          ({ clientApi }) => (
            <UrqlProvider value={clientApi.urqlClient}>{children}</UrqlProvider>
          ),
        )
        .with(
          { clientApi: null, managementApi: P.nonNullable },
          ({ managementApi }) => (
            <UrqlProvider value={managementApi.urqlClient}>
              {children}
            </UrqlProvider>
          ),
        )
        .otherwise(() => children)}
    </BastaContext.Provider>
  );
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
