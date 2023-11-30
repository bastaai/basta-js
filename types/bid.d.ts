import { BidStatus } from '../src/enums';

/**
 * Range rule explains increments in the table.
 * Each amount should be in its minor currency unit.
 * The range rule [highRange: $1000, lowRange: $0, step: $25] would be
 *   [highRange: 100000, lowRange: 0, step: 2500]
 */
export type RangeRule = {
  /** High range of the rule */
  highRange: number;
  /** Low range of the rule */
  lowRange: number;
  /** Step of the rule */
  step: number;
};

/**
 * Bid increment table represent how increments behave for a
 * specific item or an sale.
 */
export type BidIncrementTable = {
  /** Range rules in the table. */
  rangeRules: RangeRule[];
};

/** Bid represents a bid that has been placed. */
export type Bid = {
  /** Amount of bid in minor currency unit. */
  amount: number;
  /** Bid status of for the bid */
  bidStatus?: BidStatus | null | undefined;
  /**
   * User Identifier.
   * Controlled in ManagementAPI for the SaleItem owning the bid.
   * Can be userID, randomIdentifier or null.
   * Default null
   */
  bidderIdentifier?: string | null | undefined;
  /** Date of when the bid was placed. */
  date: string;
  /** Id of the item */
  itemId: string;
  /** Max amount placed with the bid in minor currency unit. */
  maxAmount?: number | null | undefined;
  /** Id of the sale */
  saleId: string;
};

export type BidResponse =
  | {
      bid: Bid;
      success: true;
    }
  | {
      bid: undefined;
      success: false;
    };
