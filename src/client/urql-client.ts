import {
  createClient as createUrqlClient,
  type Client as UrqlClient,
  cacheExchange,
  fetchExchange,
  subscriptionExchange,
} from "urql";
import { createClient as createWSClient } from "graphql-ws";
import type { ApiConfig } from "./types";

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
