// Export the query builders
import {
  type Query as ClientApiQuery,
  type Mutation as ClientApiMutation,
  type Subscription as ClientApiSubscription,
  generateQueryOp as clientQueryOp,
  generateMutationOp as clientMutationOp,
  generateSubscriptionOp as clientSubscriptionOp,
} from "./client-api/generated";
import * as clientApiSchema from "./client-api/generated/schema";

type ClientApi = {
  Query: ClientApiQuery;
  Mutation: ClientApiMutation;
  Subscription: ClientApiSubscription;
};

const clientApiGql = {
  query: clientQueryOp,
  mutation: clientMutationOp,
  subscription: clientSubscriptionOp,
};

import {
  generateQueryOp as managementQueryOp,
  generateMutationOp as managementMutationOp,
  generateSubscriptionOp as managementSubscriptionOp,
} from "./management-api/generated";
import * as managementApiSchema from "./management-api/generated/schema";

type ManagementApi = {
  Query: ClientApiQuery;
  Mutation: ClientApiMutation;
  Subscription: ClientApiSubscription;
};

const managementApiGql = {
  query: managementQueryOp,
  mutation: managementMutationOp,
  subscription: managementSubscriptionOp,
};

export {
  clientApiGql,
  type ClientApi,
  clientApiSchema,
  managementApiGql,
  type ManagementApi,
  managementApiSchema,
};
