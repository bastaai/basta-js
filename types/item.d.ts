import { Bid, BidIncrementTable, BidStatus } from './bid';
import { Image } from './image';

/** An item (can be associcated with a sale or not) */
export type Item = {
  /** Id of an item. */
  id: string;
  /** Item cursor is used in pagination. */
  cursor: string;
  /** The id of the sale that this item is associated to. */
  saleId: string;
  /** The id of the account that this item is associated to. */
  accountId: string;
  /** Item title */
  title?: string | null | undefined;
  /** Item Description */
  description?: string | null | undefined;
  /** Currency. Capitalized string */
  currency?: string | null | undefined;
  /** Item estimate in minor currency unit. */
  estimates: Estimate;
  /** Current bid amount for the item in minor currency unit. */
  currentBid?: number | null | undefined;
  /** Bid status of currently logged in user for this item */
  bidStatus?: BidStatus | null | undefined;
  /** Number of bids that have been placed on the item */
  totalBids: number;
  /** Get list of bids for this item */
  bids: Bid[];
  /** Get list of bids for this item that is placed by the logged in user. */
  userBids: Bid[];
  /** Reserve status. */
  reserveStatus: ReserveStatus;
  /** Next 10 asks for the item in minor currency unit. */
  nextAsks: number[];
  /** Overridden increment table for the item. */
  incrementTable?: BidIncrementTable | null | undefined;
  /** Closing start and end timestamps if the item is closing */
  dates?: ItemDates | null | undefined;
  /** Status of the item */
  status: ItemStatus;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: number | null | undefined;
  /** Images attached to sale */
  images: Image[];
  /** Item number */
  itemNumber: number;
  /** Item notifications if item is part of a live sale */
  notifications: ItemNotification[];

  /**
   * DEPRECATED.
   * Closing timestamp if the item is closing
   * @deprecated itemDates is deprecated. Use dates instead.
   */
  itemDates?: ItemDates | null | undefined;

  /**
   * DEPRECATED.
   * Was there an accepted bid that met the reserve price
   */
  reserveMet: boolean;
};

export type ItemNotification =
  | ItemFairWarningNotification
  | ItemMessageNotification;

export type ItemFairWarningNotification = {
  /**
   * Date timestamp when message was created.
   * RFC3339 formatted string
   */
  date: string;
  /** Id of the notification */
  id: string;
};

export type ItemMessageNotification = {
  /**
   * Date timestamp when message was created.
   * RFC3339 formatted string
   */
  date: string;
  /** Id of the notification */
  id: string;
  /** Message */
  message: string;
};

export type Estimate = {
  /** Item high estimate */
  high?: number | null | undefined;
  /** Item low estimate */
  low?: number | null | undefined;
};

export enum ReserveStatus {
  /** Reserve has been met */
  NotMet = 'NOT_MET',
  /** Reserve has been met */
  Met = 'MET',
  /** The item has no reserve */
  NoReserve = 'NO_RESERVE',
}

export type ItemDates = {
  closingEnd?: string | null | undefined;
  closingStart?: string | null | undefined;
  openDate?: string | null | undefined;
};

export type Item_ChangedSubscriptionVariables = {
  saleId: string;
  itemIds: Array<string> | string;
  nextAsksIterations?: number | null | undefined;
};

/** Item statuses for items in a sale */
export enum ItemStatus {
  ItemClosed = 'ITEM_CLOSED',
  ItemClosing = 'ITEM_CLOSING',
  ItemNotOpen = 'ITEM_NOT_OPEN',
  ItemOpen = 'ITEM_OPEN',
  ItemPaused = 'ITEM_PAUSED',
  ItemProcessing = 'ITEM_PROCESSING',
  ItemLive = 'ITEM_LIVE',
}
