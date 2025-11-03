// Export types
export type { ApiConfig } from "./types";

// Export constants
export {
  DEFAULT_CLIENT_API_URL,
  DEFAULT_MANAGEMENT_API_URL,
} from "./constants";

// Export React provider and hooks
export {
  BastaProvider,
  useClientApi,
  useManagementApi,
  useBasta,
} from "./provider";

// Export wrapped genql clients for Node.js/non-React usage
export {
  createClientApiClient,
  createManagementApiClient,
} from "./base-client-wrappers";
