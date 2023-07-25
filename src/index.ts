import { BastaRequest } from '../types/request';
import { IAccountService, IBasta, ISaleService } from '../types/sdk';
import { AccountService } from './services/account-service';
import { SaleService } from './services/sale-service';

export const initBasta = () => {
  return new Basta();
};

class Basta implements IBasta {
  readonly account: IAccountService;
  readonly sale: ISaleService;

  private readonly _bastaReq: BastaRequest;

  constructor() {
    this._bastaReq = {
      url: 'https://client.api.stage.basta.ai/graphql',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.account = new AccountService(this._bastaReq);
    this.sale = new SaleService(this._bastaReq);
  }
}
