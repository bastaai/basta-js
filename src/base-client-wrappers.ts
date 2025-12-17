import isEqual from "fast-deep-equal";

import {
  type Client as ClientApiClient,
  createClient as createClientClient,
} from "./client-api/generated";
import type { ClientOptions as ClientApiOptions } from "./client-api/generated/runtime";
import { CLIENT_API_VERSION, MANAGEMENT_API_VERSION } from "./constants";
import {
  createClient as createManageClient,
  type Client as ManagementApiClient,
} from "./management-api/generated";
import type { ClientOptions as ManagementApiOptions } from "./management-api/generated/runtime";

export function createClientApiClient(options?: ClientApiOptions) {
  return createClientClient({
    ...options,
    headers: {
      "X-BASTA-API-VERSION": CLIENT_API_VERSION,
      ...options?.headers,
    },
  });
}

let singletonClientApi: ClientApiClient | null = null;
let singletonClientApiOptions: ClientApiOptions | undefined;

export function _resetClientApiSingleton() {
  singletonClientApi = null;
  singletonClientApiOptions = undefined;
}

export function getOrCreateClientApiClient(options?: ClientApiOptions) {
  if (singletonClientApi && isEqual(options, singletonClientApiOptions)) {
    return singletonClientApi;
  }
  const newClient = createClientApiClient(options);
  singletonClientApi = newClient;
  singletonClientApiOptions = options;
  return newClient;
}

export function createManagementApiClient(options?: ManagementApiOptions) {
  return createManageClient({
    ...options,
    headers: {
      "X-BASTA-API-VERSION": MANAGEMENT_API_VERSION,
      ...options?.headers,
    },
  });
}

let singletonManagementApi: ManagementApiClient | null = null;
let singletonManagementApiOptions: ManagementApiOptions | undefined;

export function _resetManagementApiSingleton() {
  singletonManagementApi = null;
  singletonManagementApiOptions = undefined;
}

export function getOrCreateManagementApiClient(options?: ManagementApiOptions) {
  if (
    singletonManagementApi &&
    isEqual(options, singletonManagementApiOptions)
  ) {
    return singletonManagementApi;
  }
  const newClient = createManagementApiClient(options);
  singletonManagementApi = newClient;
  singletonManagementApiOptions = options;
  return newClient;
}
