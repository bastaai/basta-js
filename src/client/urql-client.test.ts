// biome-ignore-all lint/suspicious/noExplicitAny: graphql-ws is mocked; only its options are inspected.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const terminate = vi.fn();
vi.mock("graphql-ws", () => ({
  createClient: vi.fn(() => ({ subscribe: vi.fn(), terminate })),
}));

import { createClient as createWSClient } from "graphql-ws";
import {
  createUrqlClientWithConfig,
  WS_KEEP_ALIVE_MS,
  WS_PONG_TIMEOUT_MS,
} from "./urql-client";

function wsOptions() {
  createUrqlClientWithConfig(
    { wsUrl: "wss://client.api.test/graphql" } as any,
    "https://client.api.test/graphql",
  );
  return (createWSClient as any).mock.calls[0][0];
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("websocket keep-alive", () => {
  it("pings the server well inside a 60s load balancer idle timeout", () => {
    expect(wsOptions().keepAlive).toBe(WS_KEEP_ALIVE_MS);
    expect(WS_KEEP_ALIVE_MS).toBeLessThan(60_000);
  });

  it("terminates the socket when a ping gets no pong", () => {
    const { on } = wsOptions();

    on.ping(false);
    vi.advanceTimersByTime(WS_PONG_TIMEOUT_MS);

    expect(terminate).toHaveBeenCalledTimes(1);
  });

  it("keeps the socket when the pong arrives", () => {
    const { on } = wsOptions();

    on.ping(false);
    on.pong(true);
    vi.advanceTimersByTime(WS_PONG_TIMEOUT_MS * 2);

    expect(terminate).not.toHaveBeenCalled();
  });

  it("does not start a pong timer for pings the server sends", () => {
    const { on } = wsOptions();

    on.ping(true);
    vi.advanceTimersByTime(WS_PONG_TIMEOUT_MS * 2);

    expect(terminate).not.toHaveBeenCalled();
  });

  it("clears a pending pong timer when the socket closes", () => {
    const { on } = wsOptions();

    on.ping(false);
    on.closed();
    vi.advanceTimersByTime(WS_PONG_TIMEOUT_MS * 2);

    expect(terminate).not.toHaveBeenCalled();
  });

  it("opens no websocket without a wsUrl", () => {
    createUrqlClientWithConfig({} as any, "https://client.api.test/graphql");
    expect(createWSClient).not.toHaveBeenCalled();
  });
});
