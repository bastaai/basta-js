import { Account } from './account';
import { BidResponse } from './bid';
import { Item, Item_ChangedSubscriptionVariables } from './item';
import { Sale } from './sale';

export type BastaResponse<T> = {
  data: T;
};

export interface IBasta {
  account: IAccountService;
  sale: ISaleService;
  subscribeTo: ISubscriptionService;
  bid: IBidService;
}

export interface IAccountService {
  /** Fetches an account by id */
  get(id: string): Promise<Account>;
}

export interface ISaleService {
  /** Gets a Basta sale. */
  get(saleId: string): Promise<Sale>;
}

export interface IBidService {
  /** Places a bid on a Basta item. */
  placeBid(
    params: {
      saleId: string;
      itemId: string;
      amount: number;
    },
    userToken: string
  ): Promise<BidResponse>;
  /** Places a max bid on a Basta item. */
  placeMaxBid(
    params: {
      saleId: string;
      itemId: string;
      amount: number;
    },
    userToken: string
  ): Promise<BidResponse>;
}

export type SubscriptionVariablesMapped<T> = T extends Item
  ? Item_ChangedSubscriptionVariables
  : T extends Sale
  ? object
  : never;

export type SubscriptionStatus = 'CONNECTING' | 'CONNECTED' | 'DISCONNECTED';

export type OnUpdateType<T> = (
  data: T | null,
  status: SubscriptionStatus,
  errors?: string[]
) => void;

export type SubscriptionProps<T> = {
  onUpdate: OnUpdateType<T>;
  userToken?: string | undefined | null;
  variables: SubscriptionVariablesMapped<T>;
};

export interface ISubscriptionService {
  item(props: SubscriptionProps<Item>): () => void;
  sale(props: SubscriptionProps<Sale>): () => void;
}
