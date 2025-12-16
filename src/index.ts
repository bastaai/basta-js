// Export types

// Export wrapped genql clients for Node.js/non-React usage
export {
  createClientApiClient,
  createManagementApiClient,
  getOrCreateClientApiClient,
  getOrCreateManagementApiClient,
} from "./base-client-wrappers";

// Export constants
export {
  DEFAULT_CLIENT_API_URL,
  DEFAULT_MANAGEMENT_API_URL,
} from "./constants";
// Export the query builders and types
export * from "./extras";
export type { ApiConfig } from "./types";
