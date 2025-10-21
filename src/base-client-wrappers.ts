import { createClient as createClientClient } from "./client-api/generated";
import type { ClientOptions as ClientApiOptions } from "./client-api/generated/runtime";
import { createClient as createManageClient } from "./management-api/generated";
import type { ClientOptions as ManagementApiOptions } from "./management-api/generated/runtime";
import { CLIENT_API_VERSION, MANAGEMENT_API_VERSION } from "./constants";

export function createClientApiClient(options?: ClientApiOptions) {
  return createClientClient({
    ...options,
    headers: {
      "X-BASTA-API-VERSION": CLIENT_API_VERSION,
      ...options?.headers,
    },
  });
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
