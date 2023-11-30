import { Item } from './item';
import { Image } from './image';
import { BidIncrementTable } from './bid';
import { ClosingMethod, SaleStatus } from '../src/enums';

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
  currency?: string | null | undefined;
  /** Sale Dates */
  dates: SaleDates;
  /** Sale Description */
  description?: string | null | undefined;
  /** Sale ID */
  id: string;
  /** Images attached to sale */
  images: Image[];
  /**
   * Default increment table for the sale.
   * If an increment table is associated with any items in the sale
   * this will be overidden.
   */
  incrementTable?: BidIncrementTable | null | undefined;
  /** Items that have been associated with this sale. */
  items: Item[];
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /** Sale status. */
  status: SaleStatus;
  /** Sale Title */
  title?: string | null | undefined;
};

/** Sale Dates */
export type SaleDates = {
  /** Date of when the sale is supposed to be automatically closed. */
  closingDate?: string | null | undefined;
  /** Date of when the sale is supposed to be automatically opened. */
  openDate?: string | null | undefined;
};
