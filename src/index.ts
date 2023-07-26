import { BastaRequest } from '../types/request';
import {
  IAccountService,
  IBasta,
  ISaleService,
  ISubscriptionService,
} from '../types/sdk';
import { AccountService } from './services/account-service';
import { SaleService } from './services/sale-service';
import { SubscriptionService } from './services/subscription-service';

export const initBasta = () => {
  return new Basta();
};

class Basta implements IBasta {
  readonly account: IAccountService;
  readonly sale: ISaleService;
  readonly subscription: ISubscriptionService;

  private readonly _bastaReq: BastaRequest;

  constructor() {
    this._bastaReq = {
      url: 'https://client.api.basta.wtf/graphql',
      socketUrl: 'wss://client.api.basta.wtf/graphql',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.account = new AccountService(this._bastaReq);
    this.sale = new SaleService(this._bastaReq);
    this.subscription = new SubscriptionService(this._bastaReq);
  }
}
