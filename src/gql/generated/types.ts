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
  /** Indicates whether account is using basta's bid client */
  bastaBidClient: boolean;
  /** Description for account */
  description?: Maybe<string>;
  /** Account handle, identifier for the account */
  handle?: Maybe<string>;
  /** ID of the account */
  id: string;
  /** Url for the profile image */
  imageUrl?: Maybe<string>;
  /**
   * Is logged-in user subscribed to account ?
   * Only applies to sales running on basta.app (false for all api clients)
   */
  isUserSubscribed: boolean;
  /** Links associated with account */
  links: Array<Link>;
  /** Name associated with account */
  name: string;
  /** PaymentDetails set by account */
  paymentDetails?: Maybe<PaymentDetails>;
};

export type BastaLiveStream = {
  __typename?: 'BastaLiveStream';
  /** LiveStream channel ID */
  channelId?: Maybe<string>;
  /** Current viewers */
  currentViewers?: Maybe<number>;
  /** Is live stream enabled */
  enabled: boolean;
  /**
   * Is stream live
   * @deprecated use our partner sdk instead, currently always true
   */
  isLive: boolean;
  /** LiveStream URL */
  publicUrl?: Maybe<string>;
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
  /** Bid ID */
  id: string;
  /** Id of the item */
  itemId: string;
  /** Max amount placed with the bid in minor currency unit. */
  maxAmount?: Maybe<number>;
  /** Optional paddle if bid is associated with a paddle. */
  paddle?: Maybe<Paddle>;
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
  ItemAlreadyClosed = 'ITEM_ALREADY_CLOSED',
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
  /** bidId */
  id: string;
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

export type BidderVerificationInput = {
  /** failed verification or if session is left wil send user to the cancelUrl */
  cancelUrl: string;
  /** Verification mode. Defaults to 'REDIRECT' to maintain backwards compatability. */
  renderMode?: InputMaybe<RenderMode>;
  /** successful verification is redirected to this url */
  successUrl: string;
};

export type BidderVerificationLink = {
  __typename?: 'BidderVerificationLink';
  /** Client secret for embaddable ui */
  clientSecret: string;
  /** Redirection link to verification url */
  url: string;
};

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
   * @deprecated use OVERLAPPING, will be removed in the near future
   */
  OneByOne = 'ONE_BY_ONE',
  /**
   * Each item has a precalculated closing time.
   * Items may be in closing at the same time.
   */
  Overlapping = 'OVERLAPPING',
}

export type CurrentItem = {
  __typename?: 'CurrentItem';
  cursor: string;
  item: Item;
};

export type Estimate = {
  __typename?: 'Estimate';
  /** Item high estimate */
  high?: Maybe<number>;
  /** Item low estimate */
  low?: Maybe<number>;
};

export type ExternalLiveStream = {
  __typename?: 'ExternalLiveStream';
  /** LiveStream Created */
  created: string;
  /** LiveStream Title */
  type: LiveStreamType;
  /** LiveStream Updated */
  updated: string;
  /** LiveStream URL */
  url: string;
};

/** Input parameters to get all bids for userId */
export type GetUserBidsInput = {
  __typename?: 'GetUserBidsInput';
  after?: Maybe<string>;
  first: number;
  userId: string;
};

export enum IdType {
  Id = 'ID',
  Uri = 'URI',
}

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
  /** The id of the account that this item is associated to. */
  accountId: string;
  /** Bid status of currently logged in user for this item */
  bidStatus?: Maybe<BidStatus>;
  /**
   * Get list of bids for this item.
   * Filters:
   *   - collapseSequentialUserBids: Collapses multiple sequential bids from same user to a single bid (only the newest one is then returned).
   */
  bids: Array<Bid>;
  /** Currency. Capitalized string */
  currency?: Maybe<string>;
  /** Current bid amount for the item in minor currency unit. */
  currentBid?: Maybe<number>;
  /** Item cursor is used in pagination. */
  cursor: string;
  /** Closing start and end timestamps if the item is closing */
  dates?: Maybe<ItemDates>;
  /** Item Description */
  description?: Maybe<string>;
  /** Item estimate in minor currency unit. */
  estimates: Estimate;
  /** Id of an item. */
  id: string;
  /** Images attached to sale */
  images: Array<Image>;
  /** Overridden increment table for the item. */
  incrementTable?: Maybe<BidIncrementTable>;
  /**
   * Is logged-in user subscribed to item ?
   * Only applies to sales running on basta.app (false for all api clients)
   */
  isUserSubscribed: boolean;
  /**
   * DEPRECATED.
   * Closing timestamp if the item is closing
   * @deprecated itemDates is deprecated. Use dates instead.
   */
  itemDates?: Maybe<ItemDates>;
  /** Item number */
  itemNumber: number;
  /** Next 10 asks for the item in minor currency unit. */
  nextAsks: Array<number>;
  /** Item notifications if item is part of a live sale */
  notifications: Array<ItemNotification>;
  /**
   * Was there an accepted bid that met the reserve price
   * @deprecated use reserveStatus instead
   */
  reserveMet: boolean;
  /** Reserve status. */
  reserveStatus: ReserveStatus;
  /** The id of the sale that this item is associated to. */
  saleId: string;
  /**
   * Slug identifier for item.
   * Null/empty for integrating applications.
   */
  slug?: Maybe<string>;
  /**
   * Full path for slug.
   * Null/emtpy for integrating applications.
   */
  slugFullPath?: Maybe<string>;
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
export type ItemBidsArgs = {
  collapseSequentialUserBids?: InputMaybe<boolean>;
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
  openDate?: Maybe<string>;
};

export type ItemFairWarningNotification = {
  __typename?: 'ItemFairWarningNotification';
  /**
   * Date timestamp when message was created.
   * RFC3339 formatted string
   */
  date: string;
  /** Id of the notification */
  id: string;
};

export type ItemIdsFilter = {
  itemIds?: InputMaybe<Array<string>>;
};

export type ItemMessageNotification = {
  __typename?: 'ItemMessageNotification';
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

export type ItemNotification =
  | ItemFairWarningNotification
  | ItemMessageNotification;

export enum ItemOrderField {
  /** Created date */
  Created = 'CREATED',
  /** Item Number */
  ItemNumber = 'ITEM_NUMBER',
}

export type ItemOrderInput = {
  /** Order direction */
  direction?: PaginationDirection;
  /** Field to order by */
  field?: ItemOrderField;
};

/** Item statuses for items in a sale */
export enum ItemStatus {
  ItemClosed = 'ITEM_CLOSED',
  ItemClosing = 'ITEM_CLOSING',
  ItemLive = 'ITEM_LIVE',
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
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  X = 'X',
  Youtube = 'YOUTUBE',
}

/** Live Item represents an item that is currently being auctioned in a live sale. */
export type LiveItem = {
  __typename?: 'LiveItem';
  cursor: string;
  item: Item;
};

/** deprecated type remove when everything is migrated to LiveVideoStream */
export type LiveStream = {
  __typename?: 'LiveStream';
  /** LiveStream Created */
  created: string;
  /** LiveStream Title */
  type: LiveStreamType;
  /** LiveStream Updated */
  updated: string;
  /** LiveStream URL */
  url: string;
};

/** LiveStreamType represents the type of live stream */
export enum LiveStreamType {
  /** Amazon IVS live stream */
  AmazonIvs = 'AMAZON_IVS',
  /**
   * Basta live stream
   * Built-in live stream for Basta
   */
  BastaLive = 'BASTA_LIVE',
  /** Generic live stream */
  Generic = 'GENERIC',
  /** YouTube live stream */
  YouTubeLive = 'YouTubeLive',
}

export type LiveVideoStream = BastaLiveStream | ExternalLiveStream;

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
  /** bidId */
  id: string;
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
  /** Latest items that user has placed a bid on. */
  latestItemBids: ItemsConnection;
  /**
   * SaleItems that user has added to their watchlist.
   * Only works for users with Basta cookie and applications running on basta.app domain.
   */
  saleItemSubscriptions?: Maybe<ItemsConnection>;
  /**
   * Sale that user has added to their watchlist.
   * Only works for users with Basta cookie and applications running on basta.app domain.
   */
  saleSubscriptions?: Maybe<SaleConnection>;
  /** Unique user id of the logged in user. */
  userId: string;
  /** True if logged in user is a verified Basta bidder */
  verifiedAsBidder: boolean;
};

/** Me object keeps information about the logged in user. */
export type MeBidsArgs = {
  after?: InputMaybe<string>;
  first: number;
};

/** Me object keeps information about the logged in user. */
export type MeLatestItemBidsArgs = {
  first?: InputMaybe<number>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * AcceptBidderTerms.
   * This method is only available to basta users and front ends written by Basta.
   * Returns a RFC3339 timestamp of when bidder terms were accepted.
   */
  acceptBidderTerms: string;
  /**
   * Place bid on a item for some amount. Can be of type NORMAL, MAX and OFFER.
   * Amount will be the max amount when bid is of type MAX.
   */
  bidOnItem: BidPlaced;
  /**
   * CreateBidderVerification.
   * This method is only available to basta users and front ends written by Basta.
   */
  createBidderVerification: BidderVerificationLink;
  /**
   * DEPRECATED.
   * Use BidOnItem with type input = MAX.
   * Place max bid on a item for some amount.
   * @deprecated maxBidOnItem is deprecated. Use bidOnItem with type as MAX instead.
   */
  maxBidOnItem: MaxBidPlaced;
  /** Users with basta session can subscribe to creators running sales on basta.app. */
  subscribeToAccount: UserAccountSubscription;
  /** Users with basta session can subscribe to individual sale items running on basta.app. */
  subsribeToItem: UserSaleItemSubscription;
  /** Unsusbscribe from an account */
  unsubscribeFromAccount: string;
  /** Unsubscribe from item */
  unsubscribeFromItem: string;
};

export type MutationBidOnItemArgs = {
  amount: number;
  itemId: string;
  saleId: string;
  type: BidType;
};

export type MutationCreateBidderVerificationArgs = {
  input?: InputMaybe<BidderVerificationInput>;
};

export type MutationMaxBidOnItemArgs = {
  itemId: string;
  maxAmount: number;
  saleId: string;
};

export type MutationSubscribeToAccountArgs = {
  accountId: string;
};

export type MutationSubsribeToItemArgs = {
  itemId: string;
  saleId: string;
};

export type MutationUnsubscribeFromAccountArgs = {
  accountId: string;
};

export type MutationUnsubscribeFromItemArgs = {
  itemId: string;
  saleId: string;
};

export type Node = {
  /** Identification of the node. */
  id: string;
};

/** Paddle represent a paddle in a sale */
export type Paddle = {
  __typename?: 'Paddle';
  /** Paddle created date */
  created: string;
  /** Paddle identifier */
  identifier: string;
  /** Paddle type */
  type: PaddleType;
};

/** PaddleType represents the type of paddle */
export enum PaddleType {
  InRoom = 'IN_ROOM',
  NotSet = 'NOT_SET',
  Online = 'ONLINE',
  Other = 'OTHER',
  Phone = 'PHONE',
}

/** Page info for pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Ending cursor */
  endCursor: string;
  /** Has next page */
  hasNextPage: boolean;
  /** Starting cursor */
  startCursor: string;
  /** Total records */
  totalRecords: number;
};

/** Direction of pagination */
export enum PaginationDirection {
  /** Descending order */
  Backwards = 'BACKWARDS',
  /** Ascending order */
  Forward = 'FORWARD',
}

export type PaymentDetails = {
  __typename?: 'PaymentDetails';
  bidderPremium: number;
};

export type PaymentSession = {
  __typename?: 'PaymentSession';
  /** PaymentSession status */
  status: PaymentSessionStatus;
  /** Redirection link to payment session url */
  url: string;
};

export type PaymentSessionInput = {
  /** Item identifier. */
  itemId: string;
  /** Sale identifier. */
  saleId: string;
};

export enum PaymentSessionStatus {
  /** Invoice has been paid. */
  Done = 'DONE',
  /** Invoice is ready to be paid. */
  Ready = 'READY',
  /** Invoice is being generated. */
  Waiting = 'WAITING',
}

export enum Permission {
  AccessPrivate = 'ACCESS_PRIVATE',
  BidOnItem = 'BID_ON_ITEM',
}

export type Query = {
  __typename?: 'Query';
  /** Get account information given an accountId */
  account: Account;
  /**
   * SaleItems for an account.
   * Defaults to 20 items if not specified.
   * Max allowed batch size is 50. Anything above that will be downgraded to 20 items.
   */
  accountSaleItems: ItemsConnection;
  /**
   * Get all bids that a user has placed on sales
   * @deprecated use me query
   */
  bids: UserBidsConnection;
  /** Get information about the logged in user. */
  me: Me;
  /** This method is only available to basta users and front ends written by Basta */
  paymentSession: PaymentSession;
  /** Get information about an sale. */
  sale: Sale;
  /** Get item information. */
  saleItem: Item;
  /** Get item information by URI. */
  saleItemByURI: Item;
  /** Get all sales that have been created. */
  sales: SaleConnection;
  /** Get current server time. */
  serverTime: ServerTime;
};

export type QueryAccountArgs = {
  id: string;
  idType?: InputMaybe<IdType>;
};

export type QueryAccountSaleItemsArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  filter?: InputMaybe<SaleItemFilter>;
  first?: InputMaybe<number>;
};

export type QueryBidsArgs = {
  after?: InputMaybe<string>;
  first: number;
  userId: string;
};

export type QueryPaymentSessionArgs = {
  input?: InputMaybe<PaymentSessionInput>;
};

export type QuerySaleArgs = {
  id: string;
  idType?: InputMaybe<IdType>;
};

export type QuerySaleItemArgs = {
  itemId: string;
  saleId: string;
};

export type QuerySaleItemByUriArgs = {
  uri: string;
};

export type QuerySalesArgs = {
  accountId: string;
  after?: InputMaybe<string>;
  filter?: InputMaybe<SaleFilter>;
  first?: InputMaybe<number>;
  idType?: InputMaybe<IdType>;
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

export enum RenderMode {
  /** When client wants a secret for embedded render */
  Embed = 'EMBED',
  /** When client wants a url to redirect to */
  Redirect = 'REDIRECT',
}

export enum ReserveStatus {
  /** Reserve has been met */
  Met = 'MET',
  /** Reserve has not been met */
  NotMet = 'NOT_MET',
  /** The item has no reserve */
  NoReserve = 'NO_RESERVE',
}

/** Sale */
export type Sale = {
  __typename?: 'Sale';
  /** Account ID associated with the sale */
  accountId: string;
  /** Closing method. */
  closingMethod: ClosingMethod;
  /**
   * Currency of the sale as capitalized string
   * Currently supported currencies:
   *   - "USD"
   *   - "ISK"
   *   - "EUR"
   */
  currency?: Maybe<string>;
  /** Sale cursor is used in pagination. */
  cursor: string;
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
  /** Live Item in the Sale (only applicable for live sales) */
  liveItem?: Maybe<LiveItem>;
  /**
   * Live stream for the sale
   * @deprecated use liveVideoStreams instead
   */
  liveStream?: Maybe<LiveStream>;
  /** Live stream for the sale */
  liveVideoStream?: Maybe<LiveVideoStream>;
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /**
   * Slug identifier for sale.
   * Null/empty for integrating applications.
   */
  slug?: Maybe<string>;
  /**
   * Full path for slug.
   * Null/emtpy for integrating applications.
   */
  slugFullPath?: Maybe<string>;
  /** Sale status. */
  status: SaleStatus;
  /**
   * Sale theme type.
   * Null/empty for integrating applications.
   */
  themeType?: Maybe<number>;
  /** Sale Title */
  title?: Maybe<string>;
  /** Sale type. */
  type: SaleType;
  /** Paddle assigned to authenticated user */
  userPaddle?: Maybe<Paddle>;
};

/** Sale */
export type SaleItemsArgs = {
  after?: InputMaybe<string>;
  filter?: InputMaybe<SaleItemFilter>;
  first?: InputMaybe<number>;
  order?: InputMaybe<ItemOrderInput>;
};

export type SaleActivity = Item | Sale;

export type SaleChanged = Sale | ServerTime;

export type SaleConnection = {
  __typename?: 'SaleConnection';
  /** Sale edges */
  edges: Array<SalesEdge>;
  /** Current page information */
  pageInfo: PageInfo;
};

/** Sale Dates */
export type SaleDates = {
  __typename?: 'SaleDates';
  /** Date of when the sale is supposed to be automatically closed. */
  closingDate?: Maybe<string>;
  /** Date of when the sale is supposed to be live. */
  liveDate?: Maybe<string>;
  /** Date of when the sale is supposed to be automatically opened. */
  openDate?: Maybe<string>;
};

/** Sale filter for sales. */
export type SaleFilter = {
  /** Filter by sale status */
  statuses: Array<SaleStatus>;
};

/** Item filter for sale items. */
export type SaleItemFilter = {
  /** Item IDs */
  itemIds?: InputMaybe<Array<string>>;
  /** Filter by item status */
  statuses?: InputMaybe<Array<ItemStatus>>;
};

/** Sale Status represent what status an sale is currently running in. */
export enum SaleStatus {
  /** Sale is closed for bidding. */
  Closed = 'CLOSED',
  /** Sale is closing. */
  Closing = 'CLOSING',
  /** Sale is now live. */
  Live = 'LIVE',
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

/** SaleType represents the type of sale */
export enum SaleType {
  /** Sale is a live auction */
  Live = 'LIVE',
  /** Sale is a online timed auction */
  OnlineTimed = 'ONLINE_TIMED',
}

export type SalesEdge = {
  __typename?: 'SalesEdge';
  /** Current sale cursor */
  cursor: string;
  /** Sale node */
  node: Sale;
};

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
   * @deprecated use saleActivity instead
   */
  itemChanged: ItemChanged;
  /** Subscription for Sale and Item updates. */
  saleActivity?: Maybe<SaleActivity>;
  /**
   * Sale changed subscription send real-time information about changes
   * that happen on a sale:
   * * Changes to information for an sale such as dates, states, or a item is assigned to an sale or reordering has taken place.
   * Server time will be sent also for syncronizing clocks with clients and server.
   * Note: items will not be populated with those events.
   */
  saleChanged: SaleChanged;
  /** Subscription for multiple sales. */
  salesChanged: SaleChanged;
  /** Periodic server time updates to syncronize clocks in applications using Basta. */
  serverTimeChanged: ServerTime;
};

export type SubscriptionItemChangedArgs = {
  itemIds: Array<string>;
  saleId: string;
};

export type SubscriptionSaleActivityArgs = {
  itemIdFilter?: InputMaybe<ItemIdsFilter>;
  saleId: string;
};

export type SubscriptionSaleChangedArgs = {
  saleId: string;
};

export type SubscriptionSalesChangedArgs = {
  saleIds: Array<string>;
};

export type UserAccountSubscription = {
  __typename?: 'UserAccountSubscription';
  accountId: string;
  userId: string;
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

export type UserSaleItemSubscription = {
  __typename?: 'UserSaleItemSubscription';
  accountId: string;
  itemId: string;
  saleId: string;
  userId: string;
};

export type Bid_On_ItemMutationVariables = Exact<{
  saleId: string;
  itemId: string;
  amount: number;
  type: BidType;
}>;

export type Bid_On_ItemMutation = {
  __typename?: 'Mutation';
  bidOnItem:
    | { __typename: 'BidPlacedError'; errorCode: BidErrorCode; error: string }
    | {
        __typename: 'BidPlacedSuccess';
        bidStatus: BidStatus;
        date: string;
        amount: number;
      }
    | {
        __typename: 'MaxBidPlacedSuccess';
        bidStatus: BidStatus;
        date: string;
        amount: number;
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
          reserveStatus: ReserveStatus;
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
          dates?: {
            __typename: 'ItemDates';
            openDate?: string | null;
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
  nextAsksIterations?: InputMaybe<number>;
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
        reserveStatus: ReserveStatus;
        dates?: {
          __typename?: 'ItemDates';
          openDate?: string | null;
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
