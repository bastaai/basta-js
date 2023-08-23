import {
  BidStatus,
  ClosingMethod,
  ItemStatus,
  SaleStatus,
} from './src/gql/generated/types';
import { IBasta } from './src/types/sdk';

export type { Account } from './src/types/account';
export type { Sale } from './src/types/sale';
export type { Item } from './src/types/item';
export type { Bid } from './src/types/bid';

export { SaleStatus, ItemStatus, BidStatus, ClosingMethod };

export const initBasta: (staging: boolean) => IBasta;
