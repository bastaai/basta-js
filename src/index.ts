import { BastaRequest } from '../types/request';
import { IAccountService, IBasta } from '../types/sdk';
import { AccountService } from './services/account-service';

export const initBasta = () => {
  return new Basta();
};

class Basta implements IBasta {
  readonly account: IAccountService;

  private readonly _bastaReq: BastaRequest;

  constructor() {
    this._bastaReq = {
      url: 'https://client.api.basta.ai/graphql',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.account = new AccountService(this._bastaReq);
  }
}
