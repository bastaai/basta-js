import type { BastaRequest } from '../types/request';
import {
  IBasta,
  IAccountService,
  ISaleService,
  ISubscriptionService,
} from '../types/sdk';
import {
  SaleStatus,
  ItemStatus,
  BidStatus,
  ClosingMethod,
} from './gql/generated/types';
import { AccountService } from './services/account-service';
import { SaleService } from './services/sale-service';
import { SubscriptionService } from './services/subscription-service';

export { SaleStatus, ItemStatus, BidStatus, ClosingMethod };

export const initBasta = (isStaging: boolean) => {
  return new Basta(isStaging);
};

class Basta implements IBasta {
  readonly account: IAccountService;
  readonly sale: ISaleService;
  readonly subscribeTo: ISubscriptionService;

  private readonly _bastaReq: BastaRequest;

  constructor(isStaging: boolean) {
    const baseUrl = isStaging ? 'client.api.basta.wtf' : 'client.api.basta.ai';

    this._bastaReq = {
      url: `https://${baseUrl}/graphql`,
      socketUrl: `wss://${baseUrl}/graphql`,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.account = new AccountService(this._bastaReq);
    this.sale = new SaleService(this._bastaReq);
    this.subscribeTo = new SubscriptionService(this._bastaReq);
  }
}
