export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type Account = {
  __typename?: 'Account';
  /** Description for account */
  description?: Maybe<string>;
  /** Account handle, identifier for the account */
  handle?: Maybe<string>;
  /** ID of the account */
  id: string;
  /** Url for the profile image */
  imageUrl?: Maybe<string>;
  /** Links associated with account */
  links: Array<Link>;
  /** Name associated with account */
  name: string;
};

/** Bid represents a bid that has been placed. */
export type Bid = {
  __typename?: 'Bid';
  /** Amount of bid in minor currency unit. */
  amount: number;
  /** Bid status of for the bid */
  bidStatus?: Maybe<BidStatus>;
  /**
   * User Identifier.
   * Controlled in ManagementAPI for the SaleItem owning the bid.
   * Can be userID, randomIdentifier or null.
   * Default null
   */
  bidderIdentifier?: Maybe<string>;
  /** Date of when the bid was placed. */
  date: string;
  /** Id of the item */
  itemId: string;
  /** Max amount placed with the bid in minor currency unit. */
  maxAmount?: Maybe<number>;
  /** Id of the sale */
  saleId: string;
};

/** Error code when failing to place a bid on an item */
export enum BidErrorCode {
  AlreadyHigherMaxBid = 'ALREADY_HIGHER_MAX_BID',
  BidAmountUpperLimitReached = 'BID_AMOUNT_UPPER_LIMIT_REACHED',
  BidLowerThanCurrentBid = 'BID_LOWER_THAN_CURRENT_BID',
  BidLowerThanCurrentMax = 'BID_LOWER_THAN_CURRENT_MAX',
  InternalError = 'INTERNAL_ERROR',
  ItemClosingPeriodPassed = 'ITEM_CLOSING_PERIOD_PASSED',
  MaxBidLowerThanCurrentMax = 'MAX_BID_LOWER_THAN_CURRENT_MAX',
  NotOpenForBidding = 'NOT_OPEN_FOR_BIDDING',
  NoError = 'NO_ERROR',
  OffIncrement = 'OFF_INCREMENT',
  StartingBidHigher = 'STARTING_BID_HIGHER',
}

/**
 * Bid increment table represent how increments behave for a
 * specific item or an sale.
 */
export type BidIncrementTable = {
  __typename?: 'BidIncrementTable';
  /** Range rules in the table. */
  rangeRules: Array<RangeRule>;
};

export type BidPlaced = BidPlacedError | BidPlacedSuccess | MaxBidPlacedSuccess;

export type BidPlacedError = {
  __typename?: 'BidPlacedError';
  /** Error description if an error occured. */
  error: string;
  /** Error code if an error occured */
  errorCode: BidErrorCode;
};

/**
 * Bid is placed response.
 * Error will only appear if there was an error placing a bid, such as off increment etc.
 */
export type BidPlacedSuccess = {
  __typename?: 'BidPlacedSuccess';
  /** Amount of placed bid. */
  amount: number;
  /** Bid Status of the bid */
  bidStatus: BidStatus;
  /** Server time of when the bid was placed. */
  date: string;
};

/** Bid statuses that calculates in what status the bid is. */
export enum BidStatus {
  /** User is losing the item. */
  Losing = 'LOSING',
  /** User has lost the item. */
  Lost = 'LOST',
  /** User is not bidding on the item. */
  NotBidding = 'NOT_BIDDING',
  /** User has submitted an offer for the item. */
  Submitted = 'SUBMITTED',
  /** User is winning the item. */
  Winning = 'WINNING',
  /** User has withdrawn an offer for the item. */
  Withdrawn = 'WITHDRAWN',
  /** User has won the item. */
  Won = 'WON',
}

/** Bid Type represent what kind of bid is being placed on an item. */
export enum BidType {
  /**
   * Bid is the highest amount a user is willing to pay. The auction
   * engine will automatically place the lowest bid necessary on behalf
   * of the user until the max amount is reached.
   */
  Max = 'MAX',
  /** Bid is a normal bid. */
  Normal = 'NORMAL',
  /** Bid is an offer that the user commits to buying the item for. */
  Offer = 'OFFER',
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

/** Input parameters to get all bids for userId */
export type GetUserBidsInput = {
  __typename?: 'GetUserBidsInput';
  after?: Maybe<string>;
  first: number;
  userId: string;
};

/** Image object */
export type Image = {
  __typename?: 'Image';
  /** ID of the image, UUID string */
  id: string;
  /** DisplayOrder for image */
  order: number;
  /** Image URL */
  url: string;
};

/** An item (can be associcated with a sale or not) */
export type Item = {
  __typename?: 'Item';
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

/** An item (can be associcated with a sale or not) */
export type ItemNextAsksArgs = {
  iterations?: InputMaybe<number>;
};

export type ItemChanged = Item | ServerTime;

export type ItemDates = {
  __typename?: 'ItemDates';
  closingEnd?: Maybe<string>;
  closingStart?: Maybe<string>;
};

/** Item statuses for items in a sale */
export enum ItemStatus {
  ItemClosed = 'ITEM_CLOSED',
  ItemClosing = 'ITEM_CLOSING',
  ItemNotOpen = 'ITEM_NOT_OPEN',
  ItemOpen = 'ITEM_OPEN',
  ItemPaused = 'ITEM_PAUSED',
  ItemProcessing = 'ITEM_PROCESSING',
}

export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  /** Item edges */
  edges: Array<ItemsEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

export type ItemsEdge = {
  __typename?: 'ItemsEdge';
  /** Current item cursor */
  cursor: string;
  /** Item node */
  node: Item;
};

export type Link = {
  __typename?: 'Link';
  type: LinkType;
  url: string;
};

export enum LinkType {
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  Youtube = 'YOUTUBE',
}

export type MaxBidPlaced = BidPlacedError | MaxBidPlacedSuccess;

/**
 * Bid is placed response.
 * Error will only appear if there was an error placing a bid, such as off increment etc.
 */
export type MaxBidPlacedSuccess = {
  __typename?: 'MaxBidPlacedSuccess';
  /** Current amount of placed bid in minor currency unit. */
  amount: number;
  /** Bid Status of the bid */
  bidStatus: BidStatus;
  /** Server time of when the bid was placed. */
  date: string;
  /** Max amount of placed bid in minor currency unit. */
  maxAmount: number;
};

/** Me object keeps information about the logged in user. */
export type Me = {
  __typename?: 'Me';
  /** Accounts for logged in user */
  accounts: Array<Account>;
  /** Get all bids that a user has placed on sales */
  bids: UserBidsConnection;
  /** Unique user id of the logged in user. */
  userId: string;
};

/** Me object keeps information about the logged in user. */
export type MeBidsArgs = {
  after?: InputMaybe<string>;
  first: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Place bid on a item for some amount. Can be of type NORMAL, MAX and OFFER.
   * Amount will be the max amount when bid is of type MAX.
   */
  bidOnItem: BidPlaced;
  /**
   * DEPRECATED.
   * Use BidOnItem with type input = MAX.
   * Place max bid on a item for some amount.
   */
  maxBidOnItem: MaxBidPlaced;
};

export type MutationBidOnItemArgs = {
  amount: number;
  itemId: string;
  saleId: string;
  type: BidType;
};

export type MutationMaxBidOnItemArgs = {
  itemId: string;
  maxAmount: number;
  saleId: string;
};

export type Node = {
  /** Identification of the node. */
  id: string;
};

/** Page info for pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Ending cursor */
  endCursor: string;
  /** Has next page */
  hasNextPage: boolean;
  /** Starting cursor */
  startCursor: string;
};

export enum Permission {
  AccessPrivate = 'ACCESS_PRIVATE',
  BidOnItem = 'BID_ON_ITEM',
}

export type Query = {
  __typename?: 'Query';
  /** Get account information given an accountId */
  account: Account;
  /** Get account information given an account handle. */
  accountByHandle: Account;
  /** Get all bids that a user has placed on sales */
  bids: UserBidsConnection;
  /** Get information about the logged in user. */
  me: Me;
  /** Get information about an sale. */
  sale: Sale;
  /** Get current server time. */
  serverTime: ServerTime;
};

export type QueryAccountArgs = {
  id: string;
};

export type QueryAccountByHandleArgs = {
  handle: string;
};

export type QueryBidsArgs = {
  after?: InputMaybe<string>;
  first: number;
  userId: string;
};

export type QuerySaleArgs = {
  id: string;
};

/**
 * Range rule explains increments in the table.
 * Each amount should be in its minor currency unit.
 * The range rule [highRange: $1000, lowRange: $0, step: $25] would be
 *   [highRange: 100000, lowRange: 0, step: 2500]
 */
export type RangeRule = {
  __typename?: 'RangeRule';
  /** High range of the rule */
  highRange: number;
  /** Low range of the rule */
  lowRange: number;
  /** Step of the rule */
  step: number;
};

/** Sale */
export type Sale = {
  __typename?: 'Sale';
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
  items: ItemsConnection;
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /** Sale status. */
  status: SaleStatus;
  /** Sale Title */
  title?: Maybe<string>;
};

/** Sale */
export type SaleItemsArgs = {
  after?: InputMaybe<string>;
  first?: InputMaybe<number>;
};

export type SaleChanged = Sale | ServerTime;

/** Sale Dates */
export type SaleDates = {
  __typename?: 'SaleDates';
  /** Date of when the sale is supposed to be automatically closed. */
  closingDate?: Maybe<string>;
  /** Date of when the sale is supposed to be automatically opened. */
  openDate?: Maybe<string>;
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

export type ServerTime = {
  __typename?: 'ServerTime';
  /** Current Time */
  currentTime: number;
};

export type Subscription = {
  __typename?: 'Subscription';
  /**
   * Item changed subscription sends real-time information about changes
   * that happen to a item:
   * * When a bid is placed on a item
   * Server time will be sent also for syncronizing clocks with clients and server.
   */
  itemChanged: ItemChanged;
  /**
   * Sale changed subscription send real-time information about changes
   * that happen on a sale:
   * * Changes to information for an sale such as dates, states, or a item is assigned to an sale or reordering has taken place.
   * Server time will be sent also for syncronizing clocks with clients and server.
   * Note: items will not be populated with those events.
   */
  saleChanged: SaleChanged;
  /** Periodic server time updates to syncronize clocks in applications using Basta. */
  serverTimeChanged: ServerTime;
};

export type SubscriptionItemChangedArgs = {
  itemIds: Array<string>;
  saleId: string;
};

export type SubscriptionSaleChangedArgs = {
  saleId: string;
};

/** A UserBid represents a single bid */
export type UserBid = {
  __typename?: 'UserBid';
  amount: number;
  bidDate: string;
  id: string;
  itemId: string;
  maxAmount: number;
  saleId: string;
  userId: string;
};

export type UserBidsConnection = {
  __typename?: 'UserBidsConnection';
  /** UserBids edges */
  edges: Array<UserBidsEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

export type UserBidsEdge = {
  __typename?: 'UserBidsEdge';
  /** Current UserBid cursor */
  cursor: string;
  /** UserBid node */
  node: UserBid;
};

export type Get_Account_By_HandleQueryVariables = Exact<{
  handle: string;
}>;

export type Get_Account_By_HandleQuery = {
  __typename?: 'Query';
  accountByHandle: {
    __typename: 'Account';
    id: string;
    name: string;
    handle?: string | null;
    description?: string | null;
    imageUrl?: string | null;
    links: Array<{ __typename: 'Link'; type: LinkType; url: string }>;
  };
};

export type Get_Account_By_IdQueryVariables = Exact<{
  accountId: string;
}>;

export type Get_Account_By_IdQuery = {
  __typename?: 'Query';
  account: {
    __typename: 'Account';
    id: string;
    name: string;
    handle?: string | null;
    description?: string | null;
    imageUrl?: string | null;
    links: Array<{ __typename: 'Link'; type: LinkType; url: string }>;
  };
};

export type Get_SaleQueryVariables = Exact<{
  id: string;
}>;

export type Get_SaleQuery = {
  __typename?: 'Query';
  sale: {
    __typename: 'Sale';
    id: string;
    accountId: string;
    title?: string | null;
    description?: string | null;
    currency?: string | null;
    status: SaleStatus;
    sequenceNumber: number;
    closingMethod: ClosingMethod;
    images: Array<{
      __typename: 'Image';
      id: string;
      url: string;
      order: number;
    }>;
    items: {
      __typename: 'ItemsConnection';
      edges: Array<{
        __typename: 'ItemsEdge';
        cursor: string;
        node: {
          __typename: 'Item';
          id: string;
          saleId: string;
          title?: string | null;
          description?: string | null;
          status: ItemStatus;
          startingBid?: number | null;
          currentBid?: number | null;
          bidStatus?: BidStatus | null;
          totalBids: number;
          nextAsks: Array<number>;
          reserveMet: boolean;
          images: Array<{
            __typename: 'Image';
            id: string;
            url: string;
            order: number;
          }>;
          bids: Array<{
            __typename: 'Bid';
            saleId: string;
            itemId: string;
            amount: number;
            maxAmount?: number | null;
            date: string;
            bidStatus?: BidStatus | null;
            bidderIdentifier?: string | null;
          }>;
          userBids: Array<{
            __typename: 'Bid';
            saleId: string;
            itemId: string;
            amount: number;
            maxAmount?: number | null;
            date: string;
            bidStatus?: BidStatus | null;
            bidderIdentifier?: string | null;
          }>;
          itemDates?: {
            __typename: 'ItemDates';
            closingStart?: string | null;
            closingEnd?: string | null;
          } | null;
        };
      }>;
      pageInfo: {
        __typename: 'PageInfo';
        startCursor: string;
        endCursor: string;
        hasNextPage: boolean;
      };
    };
    incrementTable?: {
      __typename?: 'BidIncrementTable';
      rangeRules: Array<{
        __typename: 'RangeRule';
        highRange: number;
        lowRange: number;
        step: number;
      }>;
    } | null;
    dates: {
      __typename: 'SaleDates';
      openDate?: string | null;
      closingDate?: string | null;
    };
  };
};

export type Item_ChangedSubscriptionVariables = Exact<{
  saleId: string;
  itemIds: Array<string> | string;
}>;

export type Item_ChangedSubscription = {
  __typename?: 'Subscription';
  itemChanged:
    | {
        __typename?: 'Item';
        id: string;
        saleId: string;
        currentBid?: number | null;
        bidStatus?: BidStatus | null;
        totalBids: number;
        status: ItemStatus;
        nextAsks: Array<number>;
        reserveMet: boolean;
        itemDates?: {
          __typename?: 'ItemDates';
          closingStart?: string | null;
          closingEnd?: string | null;
        } | null;
        bids: Array<{
          __typename?: 'Bid';
          amount: number;
          maxAmount?: number | null;
          date: string;
          bidStatus?: BidStatus | null;
          saleId: string;
          itemId: string;
          bidderIdentifier?: string | null;
        }>;
        userBids: Array<{
          __typename?: 'Bid';
          amount: number;
          maxAmount?: number | null;
          date: string;
          bidStatus?: BidStatus | null;
          saleId: string;
          itemId: string;
          bidderIdentifier?: string | null;
        }>;
      }
    | { __typename?: 'ServerTime'; currentTime: number };
};
