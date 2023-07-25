import { Account, Me, Sale } from '../src/gql/generated/types';

export type BastaResponse<T> = {
  data: T;
};

export interface IBasta {
  account: IAccountService;
  sale: ISaleService;
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
