import { createClient as createClientApi } from "./client-api/generated";
import { createUrqlClientWithConfig } from "./urql-client";
import { enhanceClient } from "./client/client-enhancer";
import type { ApiConfig, Client } from "./types";

// Singleton client instance
let clientApiInstance: Client | null = null;

/**
 * Creates a client API client that can be used outside of a React context.
 * Returns the same instance on subsequent calls (singleton pattern).
 *
 * NOTE: Only the first call's config is used. Subsequent calls with different
 * configs will return the existing instance without updating it.
 *
 * @param config - Optional client configuration including url, headers, and wsUrl
 * @returns Client instance for the client API
 *
 * @example
 * const client = createClientApiClient({ url: "https://api.example.com" });
 * await client.query({ users: { id: true, name: true } });
 */
export function createClientApiClient(config?: ApiConfig): Client {
  if (!clientApiInstance) {
    const baseClient = createClientApi(config || {});
    const urqlClient = createUrqlClientWithConfig(config || {});
    clientApiInstance = enhanceClient(baseClient, urqlClient);
  }
  return clientApiInstance;
}
