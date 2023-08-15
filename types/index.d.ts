import {
  BidStatus,
  ClosingMethod,
  ItemStatus,
  SaleStatus,
} from '../src/gql/generated/types';
import { IBasta } from './sdk';

export { Account } from './account';
export { Sale } from './sale';
export { Item } from './item';
export { Bid } from './bid';

export { SaleStatus, ItemStatus, BidStatus, ClosingMethod };

export const initBasta: (staging: boolean) => IBasta;
