import { Account } from '../src/gql/generated/types';

export type BastaResponse<T> = {
  data: T;
};

export interface IBasta {
  account: IAccountService;
}

export interface IAccountService {
  /** Fetches an account by id */
  get(id: string): Promise<Account>;
}
