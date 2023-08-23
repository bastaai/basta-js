import {
  BidIncrementTable,
  ClosingMethod,
  Maybe,
  SaleDates,
  SaleStatus,
  Image,
} from '../src/gql/generated/types';
import { Item } from './item';

/** Sale */
export type Sale = {
  /** Account ID associated with the sale */
  accountId: string;
  /** Closing method. */
  closingMethod: ClosingMethod;
  /**
   * Currency of the sale (capital letters: EUR, USD, etc.)
   * This is the default currency.
   * Item currency overrides sale currency, at least one of them needs to be defined.
   */
  currency?: Maybe<string>;
  /** Sale Dates */
  dates: SaleDates;
  /** Sale Description */
  description?: Maybe<string>;
  /** Sale ID */
  id: string;
  /** Images attached to sale */
  images: Array<Image>;
  /**
   * Default increment table for the sale.
   * If an increment table is associated with any items in the sale
   * this will be overidden.
   */
  incrementTable?: Maybe<BidIncrementTable>;
  /** Items that have been associated with this sale. */
  items: Item[];
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /** Sale status. */
  status: SaleStatus;
  /** Sale Title */
  title?: Maybe<string>;
};
