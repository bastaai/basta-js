import type { Client as UrqlClient } from "urql";
import {
  useQuery as useUrqlQuery,
  useMutation as useUrqlMutation,
  useSubscription as useUrqlSubscription,
} from "urql";
import {
  type Client as BaseClient,
  generateQueryOp,
  generateMutationOp,
  generateSubscriptionOp,
  type QueryGenqlSelection,
  type MutationGenqlSelection,
  type SubscriptionGenqlSelection,
  type QueryResult,
  type MutationResult,
  type SubscriptionResult,
} from "./client-api/generated";
import type { Client, TypedGraphqlOperation } from "./types";

/**
 * Enhances a base genql client with:
 * - Lowercase query/mutation/subscription methods with type preservation
 * - Bound urql hooks (useQuery, useMutation, useSubscription)
 * - Access to the underlying urql client
 */
export function enhanceClient(
  baseClient: BaseClient,
  urqlClient: UrqlClient,
): Client {
  // Type-preserving wrappers for query generators
  const query: Client["query"] = <Fields extends QueryGenqlSelection>(
    fields: Fields,
  ) => {
    return generateQueryOp(fields) satisfies TypedGraphqlOperation<
      QueryResult<Fields>
    >;
  };

  const mutation: Client["mutation"] = <Fields extends MutationGenqlSelection>(
    fields: Fields,
  ) => {
    return generateMutationOp(fields) satisfies TypedGraphqlOperation<
      MutationResult<Fields>
    >;
  };

  const subscription: Client["subscription"] = <
    Fields extends SubscriptionGenqlSelection,
  >(
    fields: Fields,
  ) => {
    return generateSubscriptionOp(fields) satisfies TypedGraphqlOperation<
      SubscriptionResult<Fields>
    >;
  };

  // Create bound hooks that use this specific urql client
  const useQuery: Client["useQuery"] = (args) => {
    // Extract the query string from GraphqlOperation
    const urqlArgs = {
      ...args,
      query: args.query.query,
      variables: args.query.variables,
    };
    return useUrqlQuery(urqlArgs);
  };

  const useMutation: Client["useMutation"] = (operation) => {
    return useUrqlMutation(operation.query);
  };

  const useSubscription: Client["useSubscription"] = (args, handler) => {
    // Extract the query string from GraphqlOperation
    const urqlArgs = {
      ...args,
      query: args.query.query,
      variables: args.query.variables,
    };
    return useUrqlSubscription(urqlArgs, handler);
  };

  const enhancedClient: Client = {
    ...baseClient,
    Query: generateQueryOp,
    Mutation: generateMutationOp,
    Subscription: generateSubscriptionOp,
    urqlClient,

    // Add lowercase aliases for convenient usage with type preservation
    query,
    mutation,
    subscription,

    // Bound urql hooks
    useQuery,
    useMutation,
    useSubscription,
  };

  return enhancedClient;
}
