// Export types
export type { ApiConfig } from "./types";

// Export constants
export {
  DEFAULT_CLIENT_API_URL,
  DEFAULT_MANAGEMENT_API_URL,
} from "./constants";

// Export wrapped genql clients for Node.js/non-React usage
export {
  createClientApiClient,
  createManagementApiClient,
} from "./base-client-wrappers";

// Export the query builders and types
export * from "./extras";
