import { Item } from './item';
import { Image } from './image';
import { BidIncrementTable } from './bid';

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

/** Sale Status represent what status an sale is currently running in. */
export enum SaleStatus {
  /** Sale is closed for bidding. */
  Closed = 'CLOSED',
  /** Sale is closing. */
  Closing = 'CLOSING',
  /** Sale is opened for bidding. */
  Opened = 'OPENED',
  /** Sale is paused. */
  Paused = 'PAUSED',
  /** Sale is being processed. */
  Processing = 'PROCESSING',
  /** Sale has been published but is not opened for bidding. */
  Published = 'PUBLISHED',
  /** Sale has not been published. This status will never appear in the API expcept when you are previewing the sale. */
  Unpublished = 'UNPUBLISHED',
}

/** ClosingMethod represents how SaleItems are moved into CLOSING status and when they are CLOSED */
export enum ClosingMethod {
  /**
   * No sniping.
   * All items close at the same time as the sale
   */
  None = 'NONE',
  /**
   * Only one item is in status CLOSING at a time.
   * Other items wait in status OPEN.
   */
  OneByOne = 'ONE_BY_ONE',
  /**
   * Each item has a precalculated closing time.
   * Items may be in closing at the same time.
   */
  Overlapping = 'OVERLAPPING',
}

export enum LinkType {
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  Youtube = 'YOUTUBE',
}
