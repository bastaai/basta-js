import type {
  Client as UrqlClient,
  UseQueryArgs,
  UseSubscriptionArgs,
  AnyVariables,
} from "urql";
import type {
  Client as BaseClient,
  generateQueryOp,
  generateMutationOp,
  generateSubscriptionOp,
  QueryGenqlSelection,
  MutationGenqlSelection,
  SubscriptionGenqlSelection,
  QueryResult,
  MutationResult,
  SubscriptionResult,
} from "./client-api/generated";
import type { useQuery, useMutation, useSubscription } from "urql";

// Define API configuration types
export interface ApiConfig {
  url?: string;
  headers?: Record<string, string>;
  wsUrl?: string;
}

// Type-safe wrapper for GraphqlOperation that preserves the field selection type
export type TypedGraphqlOperation<TResult> = ReturnType<
  typeof generateQueryOp
> & {
  __result?: TResult;
};

// Helper type to extract the result type from a TypedGraphqlOperation
export type ExtractResultType<T> = T extends TypedGraphqlOperation<infer R>
  ? R
  : never;

// Extended client interface that includes operation generators with shorter names
// and urql hooks bound to the client's context
export interface Client
  extends Omit<BaseClient, "query" | "mutation" | "subscription"> {
  Query: typeof generateQueryOp;
  Mutation: typeof generateMutationOp;
  Subscription: typeof generateSubscriptionOp;
  urqlClient: UrqlClient;

  // Convenience methods that match the mock usage (replaces the BaseClient versions)
  query: <Fields extends QueryGenqlSelection>(
    fields: Fields,
  ) => TypedGraphqlOperation<QueryResult<Fields>>;

  mutation: <Fields extends MutationGenqlSelection>(
    fields: Fields,
  ) => TypedGraphqlOperation<MutationResult<Fields>>;

  subscription: <Fields extends SubscriptionGenqlSelection>(
    fields: Fields,
  ) => TypedGraphqlOperation<SubscriptionResult<Fields>>;

  // urql hooks bound to this client's context
  // biome-ignore lint/suspicious/noExplicitAny: We don't really care about this type
  useQuery: <TQuery extends TypedGraphqlOperation<any>>(
    args: Omit<
      UseQueryArgs<AnyVariables, ExtractResultType<TQuery>>,
      "query"
    > & {
      query: TQuery;
    },
  ) => ReturnType<typeof useQuery<ExtractResultType<TQuery>, AnyVariables>>;

  // biome-ignore lint/suspicious/noExplicitAny: We don't really care about this type
  useMutation: <TMutation extends TypedGraphqlOperation<any>>(
    query: TMutation,
  ) => ReturnType<
    typeof useMutation<ExtractResultType<TMutation>, AnyVariables>
  >;

  // biome-ignore lint/suspicious/noExplicitAny: We don't really care about this type
  useSubscription: <TSubscription extends TypedGraphqlOperation<any>>(
    args: Omit<
      UseSubscriptionArgs<AnyVariables, ExtractResultType<TSubscription>>,
      "query"
    > & {
      query: TSubscription;
    },
    handler?: (
      prev: ExtractResultType<TSubscription> | undefined,
      data: ExtractResultType<TSubscription>,
    ) => ExtractResultType<TSubscription>,
  ) => ReturnType<
    typeof useSubscription<
      ExtractResultType<TSubscription>,
      ExtractResultType<TSubscription>,
      AnyVariables
    >
  >;
}

export interface BastaContextValue {
  clientApi: Client | null;
  managementApi: Client | null;
}
