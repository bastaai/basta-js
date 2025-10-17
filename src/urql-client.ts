import {
  createClient as createUrqlClient,
  type Client as UrqlClient,
  cacheExchange,
  fetchExchange,
  subscriptionExchange,
} from "urql";
import { createClient as createWSClient } from "graphql-ws";
import type { ApiConfig } from "./types";
import { DEFAULT_CLIENT_API_URL } from "./constants";

/**
 * Creates a urql client with optional websocket support for subscriptions
 * @param config - API configuration including url, headers, and optional wsUrl
 * @returns Configured urql client
 */
export function createUrqlClientWithConfig(config: ApiConfig): UrqlClient {
  const exchanges = [cacheExchange];

  // Only add subscription exchange if wsUrl is provided
  if (config.wsUrl) {
    const wsClient = createWSClient({
      url: config.wsUrl,
      retryAttempts: Infinity,
      shouldRetry: () => true, // auto-reconnect on disconnect
    });

    exchanges.push(
      subscriptionExchange({
        forwardSubscription: (request) => {
          const input = { ...request, query: request.query || "" };
          return {
            subscribe: (sink) => {
              // Type mismatch between urql and graphql-ws is unavoidable here
              const unsubscribe = wsClient.subscribe(input as any, sink as any);
              return { unsubscribe };
            },
          };
        },
      }),
    );
  }

  exchanges.push(fetchExchange);

  return createUrqlClient({
    url: config.url || DEFAULT_CLIENT_API_URL,
    fetchOptions: {
      method: "POST",
      headers: config.headers || {},
    },
    exchanges,
    preferGetMethod: false, // Explicitly disable GET method preference
  });
}
