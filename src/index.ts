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

// Re-export the raw genql client for Node.js/non-React usage
export { createClient as createClientApiClient } from "./client-api/generated";
