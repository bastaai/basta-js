import {
  Account,
  Item,
  Item_Changed_SubscriptionSubscriptionVariables,
  Me,
  Sale,
  ServerTime,
} from '../src/gql/generated/types';

export type BastaResponse<T> = {
  data: T;
};

export interface IBasta {
  account: IAccountService;
  sale: ISaleService;
  subscribeTo: ISubscriptionService;
}

export interface IAccountService {
  /** Fetches an account by id */
  get(id: string): Promise<Account>;
  getByHandle(handle: string): Promise<Account>;
  getMe(): Promise<Me>;
}

export interface ISaleService {
  /** Gets a Basta sale. */
  get(saleId: string): Promise<Sale>;
}

type SubscriptionCallbacksType<T> = {
  onData: (data: T) => void;
  onError: (errors: string[]) => void;
  onComplete: () => void;
};

type SubscriptionVariablesMapped<T> = T extends Item
  ? Item_Changed_SubscriptionSubscriptionVariables
  : T extends Sale
  ? object // TODO
  : T extends ServerTime
  ? object // TODO
  : never;

export interface ISubscriptionService {
  itemChanged(
    variables: SubscriptionVariablesMapped<Item>,
    callbacks: SubscriptionCallbacksType<Item>
  ): void;
  saleChanged(
    variables: string,
    callbacks: SubscriptionCallbacksType<Sale>
  ): void;
}
