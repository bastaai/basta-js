import { createClient as createWSClient } from "graphql-ws";
import {
  cacheExchange,
  createClient as createUrqlClient,
  fetchExchange,
  subscriptionExchange,
  type Client as UrqlClient,
} from "urql";
import type { ApiConfig } from "../types";

/**
 * Creates a urql client with optional websocket support for subscriptions
 * @param config - API configuration including url, headers, and optional wsUrl
 * @returns Configured urql client
 */
export function createUrqlClientWithConfig(
  config: ApiConfig,
  defaultApiUrl: string,
): UrqlClient {
  const exchanges = [cacheExchange, fetchExchange];

  // Only add subscription exchange if wsUrl is provided
  if (config.wsUrl) {
    const wsClient = createWSClient({
      url: config.wsUrl,
      retryAttempts: Infinity,
      shouldRetry: () => true, // auto-reconnect on disconnect
      connectionParams: config.wsConnectionParams || (() => {
        // Default: pass HTTP headers as connection params
        // This allows auth headers to work for WS connections
        return config.headers || {};
      }),
    });

    exchanges.push(
      subscriptionExchange({
        forwardSubscription: (request) => {
          const input = { ...request, query: request.query || "" };
          return {
            subscribe: (sink) => {
              const unsubscribe = wsClient.subscribe(input, sink);
              return { unsubscribe };
            },
          };
        },
      }),
    );
  }

  return createUrqlClient({
    url: config.url || defaultApiUrl,
    fetchOptions: {
      method: "POST",
      headers: config.headers || {},
    },
    exchanges,
    preferGetMethod: false, // Explicitly disable GET method preference
  });
}
