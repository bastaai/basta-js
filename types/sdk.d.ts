import { Item_ChangedSubscriptionVariables } from '../src/gql/generated/types';
import { Account } from './account';
import { Item } from './item';
import { Sale } from './sale';

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
}

export interface ISaleService {
  /** Gets a Basta sale. */
  get(saleId: string): Promise<Sale>;
}

export type SubscriptionCallbacksType<T> = {
  onData: (data: T) => void;
  onError: (errors: string[]) => void;
  onComplete: () => void;
};

export type SubscriptionVariablesMapped<T> = T extends Item
  ? Item_ChangedSubscriptionVariables
  : T extends Sale
  ? object // TODO
  : never;

export interface ISubscriptionService {
  item(
    variables: SubscriptionVariablesMapped<Item>,
    callbacks: SubscriptionCallbacksType<Item>,
    userToken?: string | undefined
  ): void;
  sale(variables: string, callbacks: SubscriptionCallbacksType<Sale>): void;
}
