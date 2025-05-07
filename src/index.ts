import type { BastaRequest } from '../types/request';
import {
  IBasta,
  IAccountService,
  ISaleService,
  ISubscriptionService,
  IBidService,
} from '../types/sdk';
import {
  BidStatus,
  ClosingMethod,
  ItemStatus,
  SaleStatus,
  LinkType,
} from './gql/generated/types';
import { AccountService } from './services/account-service';
import { BidService } from './services/bid-service';
import { SaleService } from './services/sale-service';
import { SubscriptionService } from './services/subscription-service';

export { SaleStatus, ItemStatus, BidStatus, ClosingMethod, LinkType };

export const initBasta = () => {
  return new Basta();
};

class Basta implements IBasta {
  readonly account: IAccountService;
  readonly sale: ISaleService;
  readonly subscribeTo: ISubscriptionService;
  readonly bid: IBidService;

  private readonly _bastaReq: BastaRequest;

  constructor() {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASTA_SDK_GRAPHQL || 'client.api.basta.app';

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
    this.bid = new BidService(this._bastaReq);
  }
}
