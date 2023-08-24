import {
  Bid,
  BidIncrementTable,
  BidStatus,
  ItemDates,
  ItemStatus,
  Maybe,
  Image,
} from '../src/gql/generated/types';

/** An item (can be associcated with a sale or not) */
export type Item = {
  /** Bid status of currently logged in user for this item */
  bidStatus?: Maybe<BidStatus>;
  /** Get list of bids for this item */
  bids: Array<Bid>;
  /** Current bid amount for the item in minor currency unit. */
  currentBid?: Maybe<number>;
  /** Item Description */
  description?: Maybe<string>;
  /** Id of an item. */
  id: string;
  /** Images attached to sale */
  images: Array<Image>;
  /** Overridden increment table for the item. */
  incrementTable?: Maybe<BidIncrementTable>;
  /** Closing timestamp if the item is closing */
  itemDates?: Maybe<ItemDates>;
  /** Next 10 asks for the item in minor currency unit. */
  nextAsks: Array<number>;
  /** Was there an accepted bid that met the reserve price */
  reserveMet: boolean;
  /** The id of the sale that this item is associated to. */
  saleId: string;
  /** Starting bid of the item in minor currency unit. */
  startingBid?: Maybe<number>;
  /** Status of the item */
  status: ItemStatus;
  /** Item title */
  title?: Maybe<string>;
  /** Number of bids that have been placed on the item */
  totalBids: number;
  /** Get list of bids for this item that is placed by the logged in user. */
  userBids: Array<Bid>;
};
