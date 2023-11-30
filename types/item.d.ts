import { BidStatus, ItemStatus } from '../src/enums';
import { Bid, BidIncrementTable } from './bid';
import { Image } from './image';

/** An item (can be associcated with a sale or not) */
export type Item = {
  /** Bid status of currently logged in user for this item */
  bidStatus?: BidStatus | null | undefined;
  /** Get list of bids for this item */
  bids: Bid[];
  /** Current bid amount for the item in minor currency unit. */
  currentBid?: number | null | undefined;
  /** Item Description */
  description?: string | null | undefined;
  /** Id of an item. */
  id: string;
  /** Images attached to sale */
  images: Image[];
  /** Overridden increment table for the item. */
  incrementTable?: BidIncrementTable | null | undefined;
  /** Closing timestamp if the item is closing */
  itemDates?: ItemDates | null | undefined;
  /** Next 10 asks for the item in minor currency unit. */
  nextAsks: number[];
  /** Was there an accepted bid that met the reserve price */
  reserveMet: boolean;
  /** The id of the sale that this item is associated to. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: number | null | undefined;
  /** Status of the item */
  status: ItemStatus;
  /** Item title */
  title?: string | null | undefined;
  /** Number of bids that have been placed on the item */
  totalBids: number;
  /** Get list of bids for this item that is placed by the logged in user. */
  userBids: Bid[];
};

export type ItemDates = {
  closingEnd?: string | null | undefined;
  closingStart?: string | null | undefined;
};

export type Item_ChangedSubscriptionVariables = {
  saleId: string;
  itemIds: Array<string> | string;
};
