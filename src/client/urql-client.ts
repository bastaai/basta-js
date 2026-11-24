import { createClient as createWSClient } from "graphql-ws";
import {
  cacheExchange,
  createClient as createUrqlClient,
  fetchExchange,
  subscriptionExchange,
  type Client as UrqlClient,
} from "urql";
import type { ApiConfig } from "../types";

export const WS_KEEP_ALIVE_MS = 10_000;
export const WS_PONG_TIMEOUT_MS = 5_000;

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
    // A ping with no pong in time means the socket died without a close; terminate forces a retry.
    let pongTimer: ReturnType<typeof setTimeout> | undefined;
    const wsClient = createWSClient({
      url: config.wsUrl,
      keepAlive: WS_KEEP_ALIVE_MS,
      on: {
        ping: (received) => {
          if (received) return;
          clearTimeout(pongTimer);
          pongTimer = setTimeout(
            () => wsClient.terminate(),
            WS_PONG_TIMEOUT_MS,
          );
        },
        pong: (received) => {
          if (received) clearTimeout(pongTimer);
        },
        closed: () => clearTimeout(pongTimer),
      },
      retryAttempts: Infinity,
      shouldRetry: () => true, // auto-reconnect on disconnect
      connectionParams:
        config.wsConnectionParams ||
        (() => {
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
