export interface IBasta {
  account: IAccountService;
}

export interface IAccountService {
  /** Fetches an account by id */
  get(id: string): Promise<boolean>;
}
