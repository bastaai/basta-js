// biome-ignore-all lint/suspicious/noExplicitAny: Using any for mocks here, we're just looking at invocation of underlying mocks.
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./client-api/generated", () => ({
  createClient: vi.fn(),
}));

vi.mock("./management-api/generated", () => ({
  createClient: vi.fn(),
}));

// IMPORTANT: import *after* mocks
import {
  _resetClientApiSingleton,
  _resetManagementApiSingleton,
  getOrCreateClientApiClient,
  getOrCreateManagementApiClient,
} from "./base-client-wrappers";

import { createClient as createClientClient } from "./client-api/generated";
import { createClient as createManageClient } from "./management-api/generated";

function mockClientApiClient(id: number) {
  return { __clientId: id } as any;
}

function mockManagementApiClient(id: number) {
  return { __clientId: id } as any;
}

// Reset module-level singletons between tests
beforeEach(async () => {
  vi.clearAllMocks();
  _resetClientApiSingleton();
  _resetManagementApiSingleton();
});

describe("getOrCreateClientApiClient", () => {
  it("creates a client on first call", () => {
    const client = mockClientApiClient(1);
    (createClientClient as any).mockReturnValue(client);

    const result = getOrCreateClientApiClient({
      baseUrl: "https://api.test",
    });

    expect(result).toBe(client);
    expect(createClientClient).toHaveBeenCalledTimes(1);
  });

  it("returns the same client for deeply equal options", () => {
    const client1 = mockClientApiClient(1);

    (createClientClient as any).mockReturnValueOnce(client1);

    const result1 = getOrCreateClientApiClient({
      baseUrl: "https://api.test",
      headers: { Authorization: "token" },
    });

    const result2 = getOrCreateClientApiClient({
      baseUrl: "https://api.test",
      headers: { Authorization: "token" },
    });

    expect(result1).toBe(client1);
    expect(result2).toBe(client1);
    expect(createClientClient).toHaveBeenCalledTimes(1);
  });

  it("creates a new client when options change", () => {
    const client1 = mockClientApiClient(1);
    const client2 = mockClientApiClient(2);

    (createClientClient as any)
      .mockReturnValueOnce(client1)
      .mockReturnValueOnce(client2);

    const result1 = getOrCreateClientApiClient({
      baseUrl: "https://api.a",
    });

    const result2 = getOrCreateClientApiClient({
      baseUrl: "https://api.b",
    });

    expect(result1).toBe(client1);
    expect(result2).toBe(client2);
    expect(createClientClient).toHaveBeenCalledTimes(2);
  });

  it("reuses the client when called with undefined options", () => {
    const client = mockClientApiClient(1);
    (createClientClient as any).mockReturnValue(client);

    const result1 = getOrCreateClientApiClient();
    const result2 = getOrCreateClientApiClient();

    expect(result1).toBe(client);
    expect(result2).toBe(client);
    expect(createClientClient).toHaveBeenCalledTimes(1);
  });

  it("recreates the client when headers change", () => {
    const client1 = mockClientApiClient(1);
    const client2 = mockClientApiClient(2);

    (createClientClient as any)
      .mockReturnValueOnce(client1)
      .mockReturnValueOnce(client2);

    getOrCreateClientApiClient({
      headers: { Authorization: "token-a" },
    });

    getOrCreateClientApiClient({
      headers: { Authorization: "token-b" },
    });

    expect(createClientClient).toHaveBeenCalledTimes(2);
  });

  it("passes version header when creating client", () => {
    const client = mockClientApiClient(1);
    (createClientClient as any).mockReturnValue(client);

    getOrCreateClientApiClient({
      headers: { Authorization: "token" },
    });

    expect(createClientClient).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "token",
          "X-BASTA-API-VERSION": expect.any(String),
        }),
      }),
    );
  });
});

describe("getOrCreateManagementApiClient", () => {
  it("creates a client on first call", () => {
    const client = mockManagementApiClient(1);
    (createManageClient as any).mockReturnValue(client);

    const result = getOrCreateManagementApiClient({
      baseUrl: "https://api.test",
    });

    expect(result).toBe(client);
    expect(createManageClient).toHaveBeenCalledTimes(1);
  });

  it("returns the same client for deeply equal options", () => {
    const client1 = mockManagementApiClient(1);

    (createManageClient as any).mockReturnValueOnce(client1);

    const result1 = getOrCreateManagementApiClient({
      baseUrl: "https://api.test",
      headers: { Authorization: "token" },
    });

    const result2 = getOrCreateManagementApiClient({
      baseUrl: "https://api.test",
      headers: { Authorization: "token" },
    });

    expect(result1).toBe(client1);
    expect(result2).toBe(client1);
    expect(createManageClient).toHaveBeenCalledTimes(1);
  });

  it("creates a new client when options change", () => {
    const client1 = mockManagementApiClient(1);
    const client2 = mockManagementApiClient(2);

    (createManageClient as any)
      .mockReturnValueOnce(client1)
      .mockReturnValueOnce(client2);

    const result1 = getOrCreateManagementApiClient({
      baseUrl: "https://api.a",
    });

    const result2 = getOrCreateManagementApiClient({
      baseUrl: "https://api.b",
    });

    expect(result1).toBe(client1);
    expect(result2).toBe(client2);
    expect(createManageClient).toHaveBeenCalledTimes(2);
  });

  it("reuses the client when called with undefined options", () => {
    const client = mockManagementApiClient(1);
    (createManageClient as any).mockReturnValue(client);

    const result1 = getOrCreateManagementApiClient();
    const result2 = getOrCreateManagementApiClient();

    expect(result1).toBe(client);
    expect(result2).toBe(client);
    expect(createManageClient).toHaveBeenCalledTimes(1);
  });

  it("recreates the client when headers change", () => {
    const client1 = mockManagementApiClient(1);
    const client2 = mockManagementApiClient(2);

    (createManageClient as any)
      .mockReturnValueOnce(client1)
      .mockReturnValueOnce(client2);

    getOrCreateManagementApiClient({
      headers: { Authorization: "token-a" },
    });

    getOrCreateManagementApiClient({
      headers: { Authorization: "token-b" },
    });

    expect(createManageClient).toHaveBeenCalledTimes(2);
  });

  it("passes version header when creating client", () => {
    const client = mockManagementApiClient(1);
    (createManageClient as any).mockReturnValue(client);

    getOrCreateManagementApiClient({
      headers: { Authorization: "token" },
    });

    expect(createManageClient).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "token",
          "X-BASTA-API-VERSION": expect.any(String),
        }),
      }),
    );
  });
});
