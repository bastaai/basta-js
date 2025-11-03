// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    ID: string,
    Int: number,
    String: string,
}

export interface Account {
    /** ID of the account */
    id: Scalars['ID']
    /** Name associated with account */
    name: Scalars['String']
    /** Account handle, identifier for the account */
    handle: (Scalars['String'] | null)
    /** Description for account */
    description: (Scalars['String'] | null)
    /** Url for the profile image */
    imageUrl: (Scalars['String'] | null)
    /** Links associated with account */
    links: Link[]
    /** Indicates whether account is using basta's bid client */
    bastaBidClient: Scalars['Boolean']
    /**
     * Is logged-in user subscribed to account ?
     * Only applies to sales running on basta.app (false for all api clients)
     */
    isUserSubscribed: Scalars['Boolean']
    /** PaymentDetails set by account */
    paymentDetails: (PaymentDetails | null)
    __typename: 'Account'
}

export interface Aggregator {
    name: Scalars['String']
    type: BidOriginType
    __typename: 'Aggregator'
}

export interface BastaLiveStream {
    /** Is live stream enabled */
    enabled: Scalars['Boolean']
    /** LiveStream channel ID */
    channelId: (Scalars['String'] | null)
    /** LiveStream URL */
    publicUrl: (Scalars['String'] | null)
    /**
     * @deprecated use our partner sdk instead, currently always true
     * Is stream live
     */
    isLive: Scalars['Boolean']
    /** Current viewers */
    currentViewers: (Scalars['Int'] | null)
    __typename: 'BastaLiveStream'
}


/** Bid represents a bid that has been placed. */
export interface Bid {
    /** Bid ID */
    id: Scalars['ID']
    /** Id of the sale */
    saleId: Scalars['String']
    /** Id of the item */
    itemId: Scalars['String']
    /** Amount of bid in minor currency unit. */
    amount: Scalars['Int']
    /** Max amount placed with the bid in minor currency unit. */
    maxAmount: (Scalars['Int'] | null)
    /** Date of when the bid was placed. */
    date: Scalars['String']
    /** Bid status of for the bid */
    bidStatus: (BidStatus | null)
    /**
     * User Identifier.
     * Controlled in ManagementAPI for the SaleItem owning the bid.
     * Can be userID, randomIdentifier or null.
     * Default null
     */
    bidderIdentifier: (Scalars['String'] | null)
    /** Optional paddle if bid is associated with a paddle. */
    paddle: (Paddle | null)
    /** Reactive bid if bid was placed as a side effect of a max bid */
    reactiveBid: Scalars['Boolean']
    /** BidOrigin */
    bidOrigin: BidOrigin
    __typename: 'Bid'
}


/** Error code when failing to place a bid on an item */
export type BidErrorCode = 'NO_ERROR' | 'INTERNAL_ERROR' | 'MAX_BID_LOWER_THAN_CURRENT_MAX' | 'BID_LOWER_THAN_CURRENT_MAX' | 'BID_LOWER_THAN_CURRENT_BID' | 'ALREADY_HIGHER_MAX_BID' | 'OFF_INCREMENT' | 'STARTING_BID_HIGHER' | 'NOT_OPEN_FOR_BIDDING' | 'ITEM_CLOSING_PERIOD_PASSED' | 'BID_AMOUNT_UPPER_LIMIT_REACHED' | 'ITEM_ALREADY_CLOSED'


/**
 * Bid increment table represent how increments behave for a
 * specific item or an sale.
 */
export interface BidIncrementTable {
    /** Range rules in the table. */
    rangeRules: RangeRule[]
    __typename: 'BidIncrementTable'
}

export type BidOrigin = (OnlineBidOrigin | PaddleBidOrigin | PhoneBidOrigin | Aggregator) & { __isUnion?: true }

export type BidOriginType = 'ONLINE' | 'PADDLE' | 'PHONE' | 'AGGREGATOR'

export type BidPlaced = (BidPlacedSuccess | MaxBidPlacedSuccess | BidPlacedError) & { __isUnion?: true }

export interface BidPlacedError {
    /** Error description if an error occured. */
    error: Scalars['String']
    /** Error code if an error occured */
    errorCode: BidErrorCode
    __typename: 'BidPlacedError'
}


/**
 * Bid is placed response.
 * Error will only appear if there was an error placing a bid, such as off increment etc.
 */
export interface BidPlacedSuccess {
    /** bidId */
    id: Scalars['String']
    /** Amount of placed bid. */
    amount: Scalars['Int']
    /** Server time of when the bid was placed. */
    date: Scalars['String']
    /** Bid Status of the bid */
    bidStatus: BidStatus
    __typename: 'BidPlacedSuccess'
}


/** Bid statuses that calculates in what status the bid is. */
export type BidStatus = 'WINNING' | 'LOSING' | 'LOST' | 'WON' | 'NOT_BIDDING' | 'WITHDRAWN' | 'SUBMITTED'


/** Bid Type represent what kind of bid is being placed on an item. */
export type BidType = 'NORMAL' | 'MAX' | 'OFFER'

export interface BidderVerificationLink {
    /** Redirection link to verification url */
    url: Scalars['String']
    /** Client secret for embaddable ui */
    clientSecret: Scalars['String']
    __typename: 'BidderVerificationLink'
}


/** ClosingMethod represents how SaleItems are moved into CLOSING status and when they are CLOSED */
export type ClosingMethod = 'ONE_BY_ONE' | 'OVERLAPPING' | 'NONE'

export interface CurrentItem {
    item: Item
    cursor: Scalars['String']
    __typename: 'CurrentItem'
}

export interface Estimate {
    /** Item low estimate */
    low: (Scalars['Int'] | null)
    /** Item high estimate */
    high: (Scalars['Int'] | null)
    __typename: 'Estimate'
}

export interface ExternalLiveStream {
    /** LiveStream URL */
    url: Scalars['String']
    /** LiveStream Title */
    type: LiveStreamType
    /** LiveStream Created */
    created: Scalars['String']
    /** LiveStream Updated */
    updated: Scalars['String']
    __typename: 'ExternalLiveStream'
}


/** Input parameters to get all bids for userId */
export interface GetUserBidsInput {
    userId: Scalars['String']
    first: Scalars['Int']
    after: (Scalars['String'] | null)
    __typename: 'GetUserBidsInput'
}

export type IdType = 'ID' | 'URI'


/** Image object */
export interface Image {
    /** ID of the image, UUID string */
    id: Scalars['String']
    /** Image URL */
    url: Scalars['String']
    /** DisplayOrder for image */
    order: Scalars['Int']
    __typename: 'Image'
}


/** An item (can be associcated with a sale or not) */
export interface Item {
    /** Id of an item. */
    id: Scalars['ID']
    /** Item cursor is used in pagination. */
    cursor: Scalars['String']
    /** The id of the sale that this item is associated to. */
    saleId: Scalars['String']
    /** The id of the account that this item is associated to. */
    accountId: Scalars['String']
    /** Item title */
    title: (Scalars['String'] | null)
    /** Item Description */
    description: (Scalars['String'] | null)
    /** Currency. Capitalized string */
    currency: (Scalars['String'] | null)
    /** Item estimate in minor currency unit. */
    estimates: Estimate
    /** Current bid amount for the item in minor currency unit. */
    currentBid: (Scalars['Int'] | null)
    /** Bid status of currently logged in user for this item */
    bidStatus: (BidStatus | null)
    /** Number of bids that have been placed on the item */
    totalBids: Scalars['Int']
    /**
     * Get list of bids for this item.
     * Filters:
     *   - collapseSequentialUserBids: Collapses multiple sequential bids from same user to a single bid (only the newest one is then returned).
     */
    bids: Bid[]
    /** Get list of bids for this item that is placed by the logged in user. */
    userBids: Bid[]
    /**
     * @deprecated use reserveStatus instead
     * Was there an accepted bid that met the reserve price
     */
    reserveMet: Scalars['Boolean']
    /** Reserve status. */
    reserveStatus: ReserveStatus
    /** Next 10 asks for the item in minor currency unit. */
    nextAsks: Scalars['Int'][]
    /** Overridden increment table for the item. */
    incrementTable: (BidIncrementTable | null)
    /**
     * @deprecated itemDates is deprecated. Use dates instead.
     * DEPRECATED.
     * Closing timestamp if the item is closing
     */
    itemDates: (ItemDates | null)
    /** Closing start and end timestamps if the item is closing */
    dates: (ItemDates | null)
    /** Status of the item */
    status: ItemStatus
    /** Starting bid of the item in minor currency unit. */
    startingBid: (Scalars['Int'] | null)
    /** Images attached to sale */
    images: Image[]
    /**
     * Slug identifier for item.
     * Null/empty for integrating applications.
     */
    slug: (Scalars['String'] | null)
    /**
     * Full path for slug.
     * Null/emtpy for integrating applications.
     */
    slugFullPath: (Scalars['String'] | null)
    /** Item number */
    itemNumber: Scalars['Int']
    /** Item notifications if item is part of a live sale */
    notifications: ItemNotification[]
    /**
     * Is logged-in user subscribed to item ?
     * Only applies to sales running on basta.app (false for all api clients)
     */
    isUserSubscribed: Scalars['Boolean']
    /** Allowed BidTypes on the item. */
    allowedBidTypes: BidType[]
    /** Item specifications (dimensions, weight, type, etc.) */
    specifications: (ItemSpecifications | null)
    __typename: 'Item'
}

export type ItemChanged = (Item | ServerTime) & { __isUnion?: true }

export interface ItemDates {
    openDate: (Scalars['String'] | null)
    closingStart: (Scalars['String'] | null)
    closingEnd: (Scalars['String'] | null)
    __typename: 'ItemDates'
}

export interface ItemFairWarningNotification {
    /** Id of the notification */
    id: Scalars['String']
    /**
     * Date timestamp when message was created.
     * RFC3339 formatted string
     */
    date: Scalars['String']
    __typename: 'ItemFairWarningNotification'
}

export interface ItemMessageNotification {
    /** Id of the notification */
    id: Scalars['String']
    /** Message */
    message: Scalars['String']
    /**
     * Date timestamp when message was created.
     * RFC3339 formatted string
     */
    date: Scalars['String']
    __typename: 'ItemMessageNotification'
}

export type ItemNotification = (ItemMessageNotification | ItemFairWarningNotification) & { __isUnion?: true }

export type ItemOrderField = 'ITEM_NUMBER' | 'CREATED'


/** Item specifications containing dimensions, weight, type, etc. */
export interface ItemSpecifications {
    /** Type of specification (Art, Furniture, Jewelry, etc.) */
    type: (SpecificationType | null)
    /** Sub-type of specification (PaintingUnframed, Table, Ring, etc.) */
    subType: (SpecificationSubType | null)
    /** Height of the item */
    height: (Scalars['Float'] | null)
    /** Length of the item */
    length: (Scalars['Float'] | null)
    /** Depth of the item */
    depth: (Scalars['Float'] | null)
    /** Unit of measurement for dimensions */
    measurementUnit: (MeasurementUnit | null)
    /** Weight of the item */
    weight: (Scalars['Float'] | null)
    /** Unit of measurement for weight */
    weightUnit: (WeightUnit | null)
    __typename: 'ItemSpecifications'
}


/** Item statuses for items in a sale */
export type ItemStatus = 'ITEM_NOT_OPEN' | 'ITEM_OPEN' | 'ITEM_CLOSING' | 'ITEM_CLOSED' | 'ITEM_PAUSED' | 'ITEM_PROCESSING' | 'ITEM_LIVE'

export interface ItemsConnection {
    /** Item edges */
    edges: ItemsEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'ItemsConnection'
}

export interface ItemsEdge {
    /** Current item cursor */
    cursor: Scalars['String']
    /** Item node */
    node: Item
    __typename: 'ItemsEdge'
}

export interface Link {
    type: LinkType
    url: Scalars['String']
    __typename: 'Link'
}

export type LinkType = 'WEBSITE' | 'INSTAGRAM' | 'YOUTUBE' | 'TIKTOK' | 'FACEBOOK' | 'X'


/** Live Item represents an item that is currently being auctioned in a live sale. */
export interface LiveItem {
    item: Item
    cursor: Scalars['String']
    __typename: 'LiveItem'
}


/** deprecated type remove when everything is migrated to LiveVideoStream */
export interface LiveStream {
    /** LiveStream URL */
    url: Scalars['String']
    /** LiveStream Title */
    type: LiveStreamType
    /** LiveStream Created */
    created: Scalars['String']
    /** LiveStream Updated */
    updated: Scalars['String']
    __typename: 'LiveStream'
}


/** LiveStreamType represents the type of live stream */
export type LiveStreamType = 'GENERIC' | 'AMAZON_IVS' | 'YouTubeLive' | 'BASTA_LIVE'

export type LiveVideoStream = (ExternalLiveStream | BastaLiveStream) & { __isUnion?: true }

export type MaxBidPlaced = (MaxBidPlacedSuccess | BidPlacedError) & { __isUnion?: true }


/**
 * Bid is placed response.
 * Error will only appear if there was an error placing a bid, such as off increment etc.
 */
export interface MaxBidPlacedSuccess {
    /** bidId */
    id: Scalars['String']
    /** Current amount of placed bid in minor currency unit. */
    amount: Scalars['Int']
    /** Max amount of placed bid in minor currency unit. */
    maxAmount: Scalars['Int']
    /** Bid Status of the bid */
    bidStatus: BidStatus
    /** Server time of when the bid was placed. */
    date: Scalars['String']
    __typename: 'MaxBidPlacedSuccess'
}


/** Me object keeps information about the logged in user. */
export interface Me {
    /** Unique user id of the logged in user. */
    userId: Scalars['String']
    /** Get all bids that a user has placed on sales */
    bids: UserBidsConnection
    /** Accounts for logged in user */
    accounts: Account[]
    /** True if logged in user is a verified Basta bidder */
    verifiedAsBidder: Scalars['Boolean']
    /**
     * Sale that user has added to their watchlist.
     * Only works for users with Basta cookie and applications running on basta.app domain.
     */
    saleSubscriptions: (SaleConnection | null)
    /**
     * SaleItems that user has added to their watchlist.
     * Only works for users with Basta cookie and applications running on basta.app domain.
     */
    saleItemSubscriptions: (ItemsConnection | null)
    /** Latest items that user has placed a bid on. */
    latestItemBids: ItemsConnection
    __typename: 'Me'
}


/** Measurement unit enum */
export type MeasurementUnit = 'NOT_SET' | 'CM' | 'INCH'

export interface Mutation {
    /**
     * Place bid on a item for some amount. Can be of type NORMAL, MAX and OFFER.
     * Amount will be the max amount when bid is of type MAX.
     */
    bidOnItem: BidPlaced
    /**
     * @deprecated maxBidOnItem is deprecated. Use bidOnItem with type as MAX instead.
     * DEPRECATED.
     * Use BidOnItem with type input = MAX.
     * Place max bid on a item for some amount.
     */
    maxBidOnItem: MaxBidPlaced
    /**
     * CreateBidderVerification.
     * This method is only available to basta users and front ends written by Basta.
     */
    createBidderVerification: BidderVerificationLink
    /**
     * AcceptBidderTerms.
     * This method is only available to basta users and front ends written by Basta.
     * Returns a RFC3339 timestamp of when bidder terms were accepted.
     */
    acceptBidderTerms: Scalars['String']
    /** Users with basta session can subscribe to creators running sales on basta.app. */
    subscribeToAccount: UserAccountSubscription
    /** Unsusbscribe from an account */
    unsubscribeFromAccount: Scalars['ID']
    /** Users with basta session can subscribe to individual sale items running on basta.app. */
    subsribeToItem: UserSaleItemSubscription
    /** Unsubscribe from item */
    unsubscribeFromItem: Scalars['ID']
    __typename: 'Mutation'
}

export type Node = (Item | Sale | UserBid) & { __isUnion?: true }

export interface OnlineBidOrigin {
    type: BidOriginType
    __typename: 'OnlineBidOrigin'
}


/** Paddle represent a paddle in a sale */
export interface Paddle {
    /** Paddle identifier */
    identifier: Scalars['String']
    /** Paddle type */
    type: PaddleType
    /** Paddle created date */
    created: Scalars['String']
    __typename: 'Paddle'
}

export interface PaddleBidOrigin {
    type: BidOriginType
    __typename: 'PaddleBidOrigin'
}


/** PaddleType represents the type of paddle */
export type PaddleType = 'NOT_SET' | 'IN_ROOM' | 'PHONE' | 'ONLINE' | 'OTHER'


/** Page info for pagination */
export interface PageInfo {
    /** Starting cursor */
    startCursor: Scalars['ID']
    /** Ending cursor */
    endCursor: Scalars['ID']
    /** Has next page */
    hasNextPage: Scalars['Boolean']
    /** Total records */
    totalRecords: Scalars['Int']
    __typename: 'PageInfo'
}


/** Direction of pagination */
export type PaginationDirection = 'FORWARD' | 'BACKWARDS'

export interface PaymentDetails {
    bidderPremium: Scalars['Float']
    __typename: 'PaymentDetails'
}

export interface PaymentSession {
    /** Redirection link to payment session url */
    url: Scalars['String']
    /** PaymentSession status */
    status: PaymentSessionStatus
    __typename: 'PaymentSession'
}

export type PaymentSessionStatus = 'WAITING' | 'READY' | 'DONE'

export type Permission = 'BID_ON_ITEM' | 'ACCESS_PRIVATE'

export interface PhoneBidOrigin {
    type: BidOriginType
    __typename: 'PhoneBidOrigin'
}

export interface Query {
    /** Get account information given an accountId */
    account: Account
    /** Get all sales that have been created. */
    sales: SaleConnection
    /** Get information about an sale. */
    sale: Sale
    /** Get item information. */
    saleItem: Item
    /**
     * SaleItems for an account.
     * Defaults to 20 items if not specified.
     * Max allowed batch size is 50. Anything above that will be downgraded to 20 items.
     */
    accountSaleItems: ItemsConnection
    /** Get item information by URI. */
    saleItemByURI: Item
    /**
     * @deprecated use me query
     * Get all bids that a user has placed on sales
     */
    bids: UserBidsConnection
    /** Get information about the logged in user. */
    me: Me
    /** Get current server time. */
    serverTime: ServerTime
    /** This method is only available to basta users and front ends written by Basta */
    paymentSession: PaymentSession
    __typename: 'Query'
}


/**
 * Range rule explains increments in the table.
 * Each amount should be in its minor currency unit.
 * The range rule [highRange: $1000, lowRange: $0, step: $25] would be
 *   [highRange: 100000, lowRange: 0, step: 2500]
 */
export interface RangeRule {
    /** High range of the rule */
    highRange: Scalars['Int']
    /** Low range of the rule */
    lowRange: Scalars['Int']
    /** Step of the rule */
    step: Scalars['Int']
    __typename: 'RangeRule'
}

export type RenderMode = 'REDIRECT' | 'EMBED'

export type ReserveStatus = 'NOT_MET' | 'MET' | 'NO_RESERVE'


/** Sale */
export interface Sale {
    /** Sale ID */
    id: Scalars['ID']
    /** Sale cursor is used in pagination. */
    cursor: Scalars['String']
    /** Account ID associated with the sale */
    accountId: Scalars['String']
    /** Sale Title */
    title: (Scalars['String'] | null)
    /** Sale Description */
    description: (Scalars['String'] | null)
    /**
     * Currency of the sale as capitalized string
     * Currently supported currencies:
     *   - "USD"
     *   - "ISK"
     *   - "EUR"
     */
    currency: (Scalars['String'] | null)
    /** Sale status. */
    status: SaleStatus
    /** Items that have been associated with this sale. */
    items: ItemsConnection
    /**
     * Default increment table for the sale.
     * If an increment table is associated with any items in the sale
     * this will be overidden.
     */
    incrementTable: (BidIncrementTable | null)
    /** Sequence number of this sale. */
    sequenceNumber: Scalars['Int']
    /** Sale Dates */
    dates: SaleDates
    /** Closing method. */
    closingMethod: ClosingMethod
    /** Images attached to sale */
    images: Image[]
    /**
     * Sale theme type.
     * Null/empty for integrating applications.
     */
    themeType: (Scalars['Int'] | null)
    /**
     * Slug identifier for sale.
     * Null/empty for integrating applications.
     */
    slug: (Scalars['String'] | null)
    /**
     * Full path for slug.
     * Null/emtpy for integrating applications.
     */
    slugFullPath: (Scalars['String'] | null)
    /** Sale type. */
    type: SaleType
    /**
     * @deprecated use liveVideoStreams instead
     * Live stream for the sale
     */
    liveStream: (LiveStream | null)
    /** Live stream for the sale */
    liveVideoStream: (LiveVideoStream | null)
    /** Live Item in the Sale (only applicable for live sales) */
    liveItem: (LiveItem | null)
    /** Paddle assigned to authenticated user */
    userPaddle: (Paddle | null)
    __typename: 'Sale'
}

export type SaleActivity = (Sale | Item) & { __isUnion?: true }

export type SaleChanged = (Sale | ServerTime) & { __isUnion?: true }

export interface SaleConnection {
    /** Sale edges */
    edges: SalesEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'SaleConnection'
}


/** Sale Dates */
export interface SaleDates {
    /** Date of when the sale is supposed to be automatically closed. */
    closingDate: (Scalars['String'] | null)
    /** Date of when the sale is supposed to be automatically opened. */
    openDate: (Scalars['String'] | null)
    /** Date of when the sale is supposed to be live. */
    liveDate: (Scalars['String'] | null)
    __typename: 'SaleDates'
}


/** Sale Status represent what status an sale is currently running in. */
export type SaleStatus = 'UNPUBLISHED' | 'PUBLISHED' | 'OPENED' | 'CLOSED' | 'CLOSING' | 'PAUSED' | 'PROCESSING' | 'LIVE'


/** SaleType represents the type of sale */
export type SaleType = 'LIVE' | 'ONLINE_TIMED'

export interface SalesEdge {
    /** Current sale cursor */
    cursor: Scalars['String']
    /** Sale node */
    node: Sale
    __typename: 'SalesEdge'
}

export interface ServerTime {
    /** Current Time */
    currentTime: Scalars['Int']
    __typename: 'ServerTime'
}


/** Specification sub-type enum */
export type SpecificationSubType = 'NOT_SET' | 'PAINTING_UNFRAMED' | 'PAINTING_FRAMED' | 'PAINTING_FRAMED_PLEXI' | 'PAINTING_FRAMED_GLASS' | 'WORK_ON_PAPER_UNFRAMED' | 'WORK_ON_PAPER_FRAMED' | 'WORK_ON_PAPER_FRAMED_PLEXI' | 'WORK_ON_PAPER_FRAMED_GLASS' | 'MIXED_MEDIA_UNFRAMED' | 'MIXED_MEDIA_FRAMED' | 'MIXED_MEDIA_FRAMED_PLEXI' | 'MIXED_MEDIA_FRAMED_GLASS' | 'PHOTOGRAPH_UNFRAMED' | 'PHOTOGRAPH_FRAMED' | 'PHOTOGRAPH_FRAMED_PLEXI' | 'PHOTOGRAPH_FRAMED_GLASS' | 'NEW_MEDIA' | 'SCULPTURE' | 'PEDESTAL' | 'PEDESTAL_CASE_GLASS' | 'PEDESTAL_CASE_PLEXI' | 'CERAMIC' | 'NEON' | 'TAPESTRY' | 'OTHER_ART' | 'TABLE' | 'CHAIR' | 'SOFA_LOVESEAT_CHAISE' | 'FLOOR_LAMP' | 'FLOOR_LAMP_SHADE' | 'TABLE_LAMP' | 'TABLE_LAMP_SHADE' | 'SCONCE' | 'OTTOMAN' | 'BOOKCASE_STORAGE' | 'NIGHTSTAND' | 'ARMOIRE_DRESSER' | 'CARPET_RUG' | 'MIRROR' | 'CHANDELIER' | 'BEDFRAME' | 'HEADBOARD' | 'DESK_VANITY' | 'MEDIA_CONSOLE' | 'OTHER_FURNITURE' | 'EARRINGS' | 'NECKLACE' | 'BRACELET' | 'RING' | 'BROOCH' | 'WATCH' | 'CUFFLINKS' | 'EYEGLASSES' | 'SET' | 'PRECIOUS_STONES' | 'SNUFF_BOX_CIGARETTE_CASE' | 'OTHER_JEWELRY' | 'VASE_VESSEL' | 'BOWL' | 'PLAQUE' | 'OBJECT_OF_VERTU' | 'CANDELABRA_CANDLESTICK' | 'DINNERWARE' | 'FLATWARE' | 'GLASSWARE' | 'SERVEWARE' | 'PORCELAIN_PLATE' | 'PORCELAIN_BOWL' | 'TABLETOP_ACCESSORY' | 'CLOCK' | 'OTHER_DECORATIVE_ARTS' | 'STAMP' | 'BOOK' | 'COIN' | 'DOCUMENT_MANUSCRIPT' | 'TOY' | 'MINIATURE_MODEL' | 'FIGURINE_DOLL' | 'NEON_SIGN' | 'MEMORABILIA' | 'CAMERA_ELECTRICAL' | 'OTHER_COLLECTIBLES' | 'WINE_BOTTLE' | 'SPIRITS_BOTTLE' | 'BEER_BOTTLE' | 'WINE_CASE' | 'SPIRITS_CASE' | 'BEER_CASE' | 'WINE_BARREL' | 'SPIRITS_BARREL' | 'BEER_BARREL' | 'OTHER_ALCOHOLS' | 'CAR' | 'MOTORCYCLE' | 'BUS' | 'VAN' | 'LIMOUSINE' | 'CARRIAGE' | 'TRAILER' | 'SIDECAR' | 'OTHER_AUTOMOTIVE' | 'CLOTHING' | 'FOOTWEAR' | 'HANDBAG' | 'ACCESSORIES' | 'OTHER_FASHION' | 'MUSICAL_INSTRUMENT' | 'FIREARM_WEAPON' | 'HUNTING_FISHING' | 'MEDICAL_EQUIPMENT' | 'OTHER'


/** Specification type enum */
export type SpecificationType = 'NOT_SET' | 'ART' | 'FURNITURE' | 'JEWELRY' | 'DECORATIVE_ARTS' | 'COLLECTIBLES' | 'ALCOHOL' | 'AUTOMOTIVE' | 'FASHION' | 'OTHER'

export interface Subscription {
    /**
     * @deprecated use saleActivity instead
     * Item changed subscription sends real-time information about changes
     * that happen to a item:
     * * When a bid is placed on a item
     * Server time will be sent also for syncronizing clocks with clients and server.
     */
    itemChanged: ItemChanged
    /**
     * Sale changed subscription send real-time information about changes
     * that happen on a sale:
     * * Changes to information for an sale such as dates, states, or a item is assigned to an sale or reordering has taken place.
     * Server time will be sent also for syncronizing clocks with clients and server.
     * Note: items will not be populated with those events.
     */
    saleChanged: SaleChanged
    /** Subscription for multiple sales. */
    salesChanged: SaleChanged
    /** Subscription for Sale and Item updates. */
    saleActivity: (SaleActivity | null)
    /** Periodic server time updates to syncronize clocks in applications using Basta. */
    serverTimeChanged: ServerTime
    __typename: 'Subscription'
}

export interface UserAccountSubscription {
    accountId: Scalars['String']
    userId: Scalars['String']
    __typename: 'UserAccountSubscription'
}


/** A UserBid represents a single bid */
export interface UserBid {
    id: Scalars['ID']
    userId: Scalars['String']
    saleId: Scalars['String']
    itemId: Scalars['String']
    amount: Scalars['Int']
    maxAmount: Scalars['Int']
    bidDate: Scalars['String']
    reactiveBid: Scalars['Boolean']
    __typename: 'UserBid'
}

export interface UserBidsConnection {
    /** UserBids edges */
    edges: UserBidsEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'UserBidsConnection'
}

export interface UserBidsEdge {
    /** Current UserBid cursor */
    cursor: Scalars['String']
    /** UserBid node */
    node: UserBid
    __typename: 'UserBidsEdge'
}

export interface UserSaleItemSubscription {
    accountId: Scalars['String']
    saleId: Scalars['String']
    itemId: Scalars['String']
    userId: Scalars['String']
    __typename: 'UserSaleItemSubscription'
}


/** Weight unit enum */
export type WeightUnit = 'NOT_SET' | 'KG' | 'LB'

export interface AccountGenqlSelection{
    /** ID of the account */
    id?: boolean | number
    /** Name associated with account */
    name?: boolean | number
    /** Account handle, identifier for the account */
    handle?: boolean | number
    /** Description for account */
    description?: boolean | number
    /** Url for the profile image */
    imageUrl?: boolean | number
    /** Links associated with account */
    links?: LinkGenqlSelection
    /** Indicates whether account is using basta's bid client */
    bastaBidClient?: boolean | number
    /**
     * Is logged-in user subscribed to account ?
     * Only applies to sales running on basta.app (false for all api clients)
     */
    isUserSubscribed?: boolean | number
    /** PaymentDetails set by account */
    paymentDetails?: PaymentDetailsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AggregatorGenqlSelection{
    name?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BastaLiveStreamGenqlSelection{
    /** Is live stream enabled */
    enabled?: boolean | number
    /** LiveStream channel ID */
    channelId?: boolean | number
    /** LiveStream URL */
    publicUrl?: boolean | number
    /**
     * @deprecated use our partner sdk instead, currently always true
     * Is stream live
     */
    isLive?: boolean | number
    /** Current viewers */
    currentViewers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bid represents a bid that has been placed. */
export interface BidGenqlSelection{
    /** Bid ID */
    id?: boolean | number
    /** Id of the sale */
    saleId?: boolean | number
    /** Id of the item */
    itemId?: boolean | number
    /** Amount of bid in minor currency unit. */
    amount?: boolean | number
    /** Max amount placed with the bid in minor currency unit. */
    maxAmount?: boolean | number
    /** Date of when the bid was placed. */
    date?: boolean | number
    /** Bid status of for the bid */
    bidStatus?: boolean | number
    /**
     * User Identifier.
     * Controlled in ManagementAPI for the SaleItem owning the bid.
     * Can be userID, randomIdentifier or null.
     * Default null
     */
    bidderIdentifier?: boolean | number
    /** Optional paddle if bid is associated with a paddle. */
    paddle?: PaddleGenqlSelection
    /** Reactive bid if bid was placed as a side effect of a max bid */
    reactiveBid?: boolean | number
    /** BidOrigin */
    bidOrigin?: BidOriginGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Bid increment table represent how increments behave for a
 * specific item or an sale.
 */
export interface BidIncrementTableGenqlSelection{
    /** Range rules in the table. */
    rangeRules?: RangeRuleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BidOriginGenqlSelection{
    on_OnlineBidOrigin?:OnlineBidOriginGenqlSelection,
    on_PaddleBidOrigin?:PaddleBidOriginGenqlSelection,
    on_PhoneBidOrigin?:PhoneBidOriginGenqlSelection,
    on_Aggregator?:AggregatorGenqlSelection,
    __typename?: boolean | number
}

export interface BidPlacedGenqlSelection{
    on_BidPlacedSuccess?:BidPlacedSuccessGenqlSelection,
    on_MaxBidPlacedSuccess?:MaxBidPlacedSuccessGenqlSelection,
    on_BidPlacedError?:BidPlacedErrorGenqlSelection,
    __typename?: boolean | number
}

export interface BidPlacedErrorGenqlSelection{
    /** Error description if an error occured. */
    error?: boolean | number
    /** Error code if an error occured */
    errorCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Bid is placed response.
 * Error will only appear if there was an error placing a bid, such as off increment etc.
 */
export interface BidPlacedSuccessGenqlSelection{
    /** bidId */
    id?: boolean | number
    /** Amount of placed bid. */
    amount?: boolean | number
    /** Server time of when the bid was placed. */
    date?: boolean | number
    /** Bid Status of the bid */
    bidStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BidderVerificationInput {
/** successful verification is redirected to this url */
successUrl: Scalars['String'],
/** failed verification or if session is left wil send user to the cancelUrl */
cancelUrl: Scalars['String'],
/** Verification mode. Defaults to 'REDIRECT' to maintain backwards compatability. */
renderMode?: (RenderMode | null)}

export interface BidderVerificationLinkGenqlSelection{
    /** Redirection link to verification url */
    url?: boolean | number
    /** Client secret for embaddable ui */
    clientSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrentItemGenqlSelection{
    item?: ItemGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EstimateGenqlSelection{
    /** Item low estimate */
    low?: boolean | number
    /** Item high estimate */
    high?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ExternalLiveStreamGenqlSelection{
    /** LiveStream URL */
    url?: boolean | number
    /** LiveStream Title */
    type?: boolean | number
    /** LiveStream Created */
    created?: boolean | number
    /** LiveStream Updated */
    updated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input parameters to get all bids for userId */
export interface GetUserBidsInputGenqlSelection{
    userId?: boolean | number
    first?: boolean | number
    after?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Image object */
export interface ImageGenqlSelection{
    /** ID of the image, UUID string */
    id?: boolean | number
    /** Image URL */
    url?: boolean | number
    /** DisplayOrder for image */
    order?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An item (can be associcated with a sale or not) */
export interface ItemGenqlSelection{
    /** Id of an item. */
    id?: boolean | number
    /** Item cursor is used in pagination. */
    cursor?: boolean | number
    /** The id of the sale that this item is associated to. */
    saleId?: boolean | number
    /** The id of the account that this item is associated to. */
    accountId?: boolean | number
    /** Item title */
    title?: boolean | number
    /** Item Description */
    description?: boolean | number
    /** Currency. Capitalized string */
    currency?: boolean | number
    /** Item estimate in minor currency unit. */
    estimates?: EstimateGenqlSelection
    /** Current bid amount for the item in minor currency unit. */
    currentBid?: boolean | number
    /** Bid status of currently logged in user for this item */
    bidStatus?: boolean | number
    /** Number of bids that have been placed on the item */
    totalBids?: boolean | number
    /**
     * Get list of bids for this item.
     * Filters:
     *   - collapseSequentialUserBids: Collapses multiple sequential bids from same user to a single bid (only the newest one is then returned).
     */
    bids?: (BidGenqlSelection & { __args?: {collapseSequentialUserBids?: (Scalars['Boolean'] | null)} })
    /** Get list of bids for this item that is placed by the logged in user. */
    userBids?: BidGenqlSelection
    /**
     * @deprecated use reserveStatus instead
     * Was there an accepted bid that met the reserve price
     */
    reserveMet?: boolean | number
    /** Reserve status. */
    reserveStatus?: boolean | number
    /** Next 10 asks for the item in minor currency unit. */
    nextAsks?: { __args: {iterations?: (Scalars['Int'] | null)} } | boolean | number
    /** Overridden increment table for the item. */
    incrementTable?: BidIncrementTableGenqlSelection
    /**
     * @deprecated itemDates is deprecated. Use dates instead.
     * DEPRECATED.
     * Closing timestamp if the item is closing
     */
    itemDates?: ItemDatesGenqlSelection
    /** Closing start and end timestamps if the item is closing */
    dates?: ItemDatesGenqlSelection
    /** Status of the item */
    status?: boolean | number
    /** Starting bid of the item in minor currency unit. */
    startingBid?: boolean | number
    /** Images attached to sale */
    images?: ImageGenqlSelection
    /**
     * Slug identifier for item.
     * Null/empty for integrating applications.
     */
    slug?: boolean | number
    /**
     * Full path for slug.
     * Null/emtpy for integrating applications.
     */
    slugFullPath?: boolean | number
    /** Item number */
    itemNumber?: boolean | number
    /** Item notifications if item is part of a live sale */
    notifications?: ItemNotificationGenqlSelection
    /**
     * Is logged-in user subscribed to item ?
     * Only applies to sales running on basta.app (false for all api clients)
     */
    isUserSubscribed?: boolean | number
    /** Allowed BidTypes on the item. */
    allowedBidTypes?: boolean | number
    /** Item specifications (dimensions, weight, type, etc.) */
    specifications?: ItemSpecificationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemChangedGenqlSelection{
    on_Item?:ItemGenqlSelection,
    on_ServerTime?:ServerTimeGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}

export interface ItemDatesGenqlSelection{
    openDate?: boolean | number
    closingStart?: boolean | number
    closingEnd?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemFairWarningNotificationGenqlSelection{
    /** Id of the notification */
    id?: boolean | number
    /**
     * Date timestamp when message was created.
     * RFC3339 formatted string
     */
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemIdsFilter {itemIds?: (Scalars['ID'][] | null)}

export interface ItemMessageNotificationGenqlSelection{
    /** Id of the notification */
    id?: boolean | number
    /** Message */
    message?: boolean | number
    /**
     * Date timestamp when message was created.
     * RFC3339 formatted string
     */
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemNotificationGenqlSelection{
    on_ItemMessageNotification?:ItemMessageNotificationGenqlSelection,
    on_ItemFairWarningNotification?:ItemFairWarningNotificationGenqlSelection,
    __typename?: boolean | number
}

export interface ItemOrderInput {
/** Field to order by */
field?: ItemOrderField,
/** Order direction */
direction?: PaginationDirection}


/** Item specifications containing dimensions, weight, type, etc. */
export interface ItemSpecificationsGenqlSelection{
    /** Type of specification (Art, Furniture, Jewelry, etc.) */
    type?: boolean | number
    /** Sub-type of specification (PaintingUnframed, Table, Ring, etc.) */
    subType?: boolean | number
    /** Height of the item */
    height?: boolean | number
    /** Length of the item */
    length?: boolean | number
    /** Depth of the item */
    depth?: boolean | number
    /** Unit of measurement for dimensions */
    measurementUnit?: boolean | number
    /** Weight of the item */
    weight?: boolean | number
    /** Unit of measurement for weight */
    weightUnit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemsConnectionGenqlSelection{
    /** Item edges */
    edges?: ItemsEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemsEdgeGenqlSelection{
    /** Current item cursor */
    cursor?: boolean | number
    /** Item node */
    node?: ItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LinkGenqlSelection{
    type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Live Item represents an item that is currently being auctioned in a live sale. */
export interface LiveItemGenqlSelection{
    item?: ItemGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** deprecated type remove when everything is migrated to LiveVideoStream */
export interface LiveStreamGenqlSelection{
    /** LiveStream URL */
    url?: boolean | number
    /** LiveStream Title */
    type?: boolean | number
    /** LiveStream Created */
    created?: boolean | number
    /** LiveStream Updated */
    updated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LiveVideoStreamGenqlSelection{
    on_ExternalLiveStream?:ExternalLiveStreamGenqlSelection,
    on_BastaLiveStream?:BastaLiveStreamGenqlSelection,
    __typename?: boolean | number
}

export interface MaxBidPlacedGenqlSelection{
    on_MaxBidPlacedSuccess?:MaxBidPlacedSuccessGenqlSelection,
    on_BidPlacedError?:BidPlacedErrorGenqlSelection,
    __typename?: boolean | number
}


/**
 * Bid is placed response.
 * Error will only appear if there was an error placing a bid, such as off increment etc.
 */
export interface MaxBidPlacedSuccessGenqlSelection{
    /** bidId */
    id?: boolean | number
    /** Current amount of placed bid in minor currency unit. */
    amount?: boolean | number
    /** Max amount of placed bid in minor currency unit. */
    maxAmount?: boolean | number
    /** Bid Status of the bid */
    bidStatus?: boolean | number
    /** Server time of when the bid was placed. */
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Me object keeps information about the logged in user. */
export interface MeGenqlSelection{
    /** Unique user id of the logged in user. */
    userId?: boolean | number
    /** Get all bids that a user has placed on sales */
    bids?: (UserBidsConnectionGenqlSelection & { __args: {first: Scalars['Int'], after?: (Scalars['String'] | null)} })
    /** Accounts for logged in user */
    accounts?: AccountGenqlSelection
    /** True if logged in user is a verified Basta bidder */
    verifiedAsBidder?: boolean | number
    /**
     * Sale that user has added to their watchlist.
     * Only works for users with Basta cookie and applications running on basta.app domain.
     */
    saleSubscriptions?: SaleConnectionGenqlSelection
    /**
     * SaleItems that user has added to their watchlist.
     * Only works for users with Basta cookie and applications running on basta.app domain.
     */
    saleItemSubscriptions?: ItemsConnectionGenqlSelection
    /** Latest items that user has placed a bid on. */
    latestItemBids?: (ItemsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    /**
     * Place bid on a item for some amount. Can be of type NORMAL, MAX and OFFER.
     * Amount will be the max amount when bid is of type MAX.
     */
    bidOnItem?: (BidPlacedGenqlSelection & { __args: {saleId: Scalars['String'], itemId: Scalars['String'], amount: Scalars['Int'], type: BidType} })
    /**
     * @deprecated maxBidOnItem is deprecated. Use bidOnItem with type as MAX instead.
     * DEPRECATED.
     * Use BidOnItem with type input = MAX.
     * Place max bid on a item for some amount.
     */
    maxBidOnItem?: (MaxBidPlacedGenqlSelection & { __args: {saleId: Scalars['String'], itemId: Scalars['String'], maxAmount: Scalars['Int']} })
    /**
     * CreateBidderVerification.
     * This method is only available to basta users and front ends written by Basta.
     */
    createBidderVerification?: (BidderVerificationLinkGenqlSelection & { __args?: {input?: (BidderVerificationInput | null)} })
    /**
     * AcceptBidderTerms.
     * This method is only available to basta users and front ends written by Basta.
     * Returns a RFC3339 timestamp of when bidder terms were accepted.
     */
    acceptBidderTerms?: boolean | number
    /** Users with basta session can subscribe to creators running sales on basta.app. */
    subscribeToAccount?: (UserAccountSubscriptionGenqlSelection & { __args: {accountId: Scalars['String']} })
    /** Unsusbscribe from an account */
    unsubscribeFromAccount?: { __args: {accountId: Scalars['String']} }
    /** Users with basta session can subscribe to individual sale items running on basta.app. */
    subsribeToItem?: (UserSaleItemSubscriptionGenqlSelection & { __args: {saleId: Scalars['String'], itemId: Scalars['String']} })
    /** Unsubscribe from item */
    unsubscribeFromItem?: { __args: {saleId: Scalars['String'], itemId: Scalars['String']} }
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeGenqlSelection{
    /** Identification of the node. */
    id?: boolean | number
    on_Item?: ItemGenqlSelection
    on_Sale?: SaleGenqlSelection
    on_UserBid?: UserBidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OnlineBidOriginGenqlSelection{
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Paddle represent a paddle in a sale */
export interface PaddleGenqlSelection{
    /** Paddle identifier */
    identifier?: boolean | number
    /** Paddle type */
    type?: boolean | number
    /** Paddle created date */
    created?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaddleBidOriginGenqlSelection{
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page info for pagination */
export interface PageInfoGenqlSelection{
    /** Starting cursor */
    startCursor?: boolean | number
    /** Ending cursor */
    endCursor?: boolean | number
    /** Has next page */
    hasNextPage?: boolean | number
    /** Total records */
    totalRecords?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentDetailsGenqlSelection{
    bidderPremium?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentSessionGenqlSelection{
    /** Redirection link to payment session url */
    url?: boolean | number
    /** PaymentSession status */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentSessionInput {
/** Sale identifier. */
saleId: Scalars['String'],
/** Item identifier. */
itemId: Scalars['String']}

export interface PhoneBidOriginGenqlSelection{
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    /** Get account information given an accountId */
    account?: (AccountGenqlSelection & { __args: {id: Scalars['String'], idType?: (IdType | null)} })
    /** Get all sales that have been created. */
    sales?: (SaleConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleFilter | null), idType?: (IdType | null)} })
    /** Get information about an sale. */
    sale?: (SaleGenqlSelection & { __args: {id: Scalars['String'], idType?: (IdType | null)} })
    /** Get item information. */
    saleItem?: (ItemGenqlSelection & { __args: {saleId: Scalars['String'], itemId: Scalars['String']} })
    /**
     * SaleItems for an account.
     * Defaults to 20 items if not specified.
     * Max allowed batch size is 50. Anything above that will be downgraded to 20 items.
     */
    accountSaleItems?: (ItemsConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleItemFilter | null)} })
    /** Get item information by URI. */
    saleItemByURI?: (ItemGenqlSelection & { __args: {uri: Scalars['String']} })
    /**
     * @deprecated use me query
     * Get all bids that a user has placed on sales
     */
    bids?: (UserBidsConnectionGenqlSelection & { __args: {userId: Scalars['String'], first: Scalars['Int'], after?: (Scalars['String'] | null)} })
    /** Get information about the logged in user. */
    me?: MeGenqlSelection
    /** Get current server time. */
    serverTime?: ServerTimeGenqlSelection
    /** This method is only available to basta users and front ends written by Basta */
    paymentSession?: (PaymentSessionGenqlSelection & { __args?: {input?: (PaymentSessionInput | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Range rule explains increments in the table.
 * Each amount should be in its minor currency unit.
 * The range rule [highRange: $1000, lowRange: $0, step: $25] would be
 *   [highRange: 100000, lowRange: 0, step: 2500]
 */
export interface RangeRuleGenqlSelection{
    /** High range of the rule */
    highRange?: boolean | number
    /** Low range of the rule */
    lowRange?: boolean | number
    /** Step of the rule */
    step?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale */
export interface SaleGenqlSelection{
    /** Sale ID */
    id?: boolean | number
    /** Sale cursor is used in pagination. */
    cursor?: boolean | number
    /** Account ID associated with the sale */
    accountId?: boolean | number
    /** Sale Title */
    title?: boolean | number
    /** Sale Description */
    description?: boolean | number
    /**
     * Currency of the sale as capitalized string
     * Currently supported currencies:
     *   - "USD"
     *   - "ISK"
     *   - "EUR"
     */
    currency?: boolean | number
    /** Sale status. */
    status?: boolean | number
    /** Items that have been associated with this sale. */
    items?: (ItemsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleItemFilter | null), order?: (ItemOrderInput | null)} })
    /**
     * Default increment table for the sale.
     * If an increment table is associated with any items in the sale
     * this will be overidden.
     */
    incrementTable?: BidIncrementTableGenqlSelection
    /** Sequence number of this sale. */
    sequenceNumber?: boolean | number
    /** Sale Dates */
    dates?: SaleDatesGenqlSelection
    /** Closing method. */
    closingMethod?: boolean | number
    /** Images attached to sale */
    images?: ImageGenqlSelection
    /**
     * Sale theme type.
     * Null/empty for integrating applications.
     */
    themeType?: boolean | number
    /**
     * Slug identifier for sale.
     * Null/empty for integrating applications.
     */
    slug?: boolean | number
    /**
     * Full path for slug.
     * Null/emtpy for integrating applications.
     */
    slugFullPath?: boolean | number
    /** Sale type. */
    type?: boolean | number
    /**
     * @deprecated use liveVideoStreams instead
     * Live stream for the sale
     */
    liveStream?: LiveStreamGenqlSelection
    /** Live stream for the sale */
    liveVideoStream?: LiveVideoStreamGenqlSelection
    /** Live Item in the Sale (only applicable for live sales) */
    liveItem?: LiveItemGenqlSelection
    /** Paddle assigned to authenticated user */
    userPaddle?: PaddleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleActivityGenqlSelection{
    on_Sale?:SaleGenqlSelection,
    on_Item?:ItemGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}

export interface SaleChangedGenqlSelection{
    on_Sale?:SaleGenqlSelection,
    on_ServerTime?:ServerTimeGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}

export interface SaleConnectionGenqlSelection{
    /** Sale edges */
    edges?: SalesEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale Dates */
export interface SaleDatesGenqlSelection{
    /** Date of when the sale is supposed to be automatically closed. */
    closingDate?: boolean | number
    /** Date of when the sale is supposed to be automatically opened. */
    openDate?: boolean | number
    /** Date of when the sale is supposed to be live. */
    liveDate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale filter for sales. */
export interface SaleFilter {
/** Filter by sale status */
statuses: SaleStatus[]}


/** Item filter for sale items. */
export interface SaleItemFilter {
/** Filter by item status */
statuses?: (ItemStatus[] | null),
/** Item IDs */
itemIds?: (Scalars['String'][] | null)}

export interface SalesEdgeGenqlSelection{
    /** Current sale cursor */
    cursor?: boolean | number
    /** Sale node */
    node?: SaleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServerTimeGenqlSelection{
    /** Current Time */
    currentTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionGenqlSelection{
    /**
     * @deprecated use saleActivity instead
     * Item changed subscription sends real-time information about changes
     * that happen to a item:
     * * When a bid is placed on a item
     * Server time will be sent also for syncronizing clocks with clients and server.
     */
    itemChanged?: (ItemChangedGenqlSelection & { __args: {saleId: Scalars['ID'], itemIds: Scalars['ID'][]} })
    /**
     * Sale changed subscription send real-time information about changes
     * that happen on a sale:
     * * Changes to information for an sale such as dates, states, or a item is assigned to an sale or reordering has taken place.
     * Server time will be sent also for syncronizing clocks with clients and server.
     * Note: items will not be populated with those events.
     */
    saleChanged?: (SaleChangedGenqlSelection & { __args: {saleId: Scalars['ID']} })
    /** Subscription for multiple sales. */
    salesChanged?: (SaleChangedGenqlSelection & { __args: {saleIds: Scalars['ID'][]} })
    /** Subscription for Sale and Item updates. */
    saleActivity?: (SaleActivityGenqlSelection & { __args: {saleId: Scalars['ID'], itemIdFilter?: (ItemIdsFilter | null)} })
    /** Periodic server time updates to syncronize clocks in applications using Basta. */
    serverTimeChanged?: ServerTimeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserAccountSubscriptionGenqlSelection{
    accountId?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A UserBid represents a single bid */
export interface UserBidGenqlSelection{
    id?: boolean | number
    userId?: boolean | number
    saleId?: boolean | number
    itemId?: boolean | number
    amount?: boolean | number
    maxAmount?: boolean | number
    bidDate?: boolean | number
    reactiveBid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBidsConnectionGenqlSelection{
    /** UserBids edges */
    edges?: UserBidsEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBidsEdgeGenqlSelection{
    /** Current UserBid cursor */
    cursor?: boolean | number
    /** UserBid node */
    node?: UserBidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSaleItemSubscriptionGenqlSelection{
    accountId?: boolean | number
    saleId?: boolean | number
    itemId?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Account_possibleTypes: string[] = ['Account']
    export const isAccount = (obj?: { __typename?: any } | null): obj is Account => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccount"')
      return Account_possibleTypes.includes(obj.__typename)
    }
    


    const Aggregator_possibleTypes: string[] = ['Aggregator']
    export const isAggregator = (obj?: { __typename?: any } | null): obj is Aggregator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAggregator"')
      return Aggregator_possibleTypes.includes(obj.__typename)
    }
    


    const BastaLiveStream_possibleTypes: string[] = ['BastaLiveStream']
    export const isBastaLiveStream = (obj?: { __typename?: any } | null): obj is BastaLiveStream => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBastaLiveStream"')
      return BastaLiveStream_possibleTypes.includes(obj.__typename)
    }
    


    const Bid_possibleTypes: string[] = ['Bid']
    export const isBid = (obj?: { __typename?: any } | null): obj is Bid => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBid"')
      return Bid_possibleTypes.includes(obj.__typename)
    }
    


    const BidIncrementTable_possibleTypes: string[] = ['BidIncrementTable']
    export const isBidIncrementTable = (obj?: { __typename?: any } | null): obj is BidIncrementTable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidIncrementTable"')
      return BidIncrementTable_possibleTypes.includes(obj.__typename)
    }
    


    const BidOrigin_possibleTypes: string[] = ['OnlineBidOrigin','PaddleBidOrigin','PhoneBidOrigin','Aggregator']
    export const isBidOrigin = (obj?: { __typename?: any } | null): obj is BidOrigin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidOrigin"')
      return BidOrigin_possibleTypes.includes(obj.__typename)
    }
    


    const BidPlaced_possibleTypes: string[] = ['BidPlacedSuccess','MaxBidPlacedSuccess','BidPlacedError']
    export const isBidPlaced = (obj?: { __typename?: any } | null): obj is BidPlaced => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidPlaced"')
      return BidPlaced_possibleTypes.includes(obj.__typename)
    }
    


    const BidPlacedError_possibleTypes: string[] = ['BidPlacedError']
    export const isBidPlacedError = (obj?: { __typename?: any } | null): obj is BidPlacedError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidPlacedError"')
      return BidPlacedError_possibleTypes.includes(obj.__typename)
    }
    


    const BidPlacedSuccess_possibleTypes: string[] = ['BidPlacedSuccess']
    export const isBidPlacedSuccess = (obj?: { __typename?: any } | null): obj is BidPlacedSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidPlacedSuccess"')
      return BidPlacedSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const BidderVerificationLink_possibleTypes: string[] = ['BidderVerificationLink']
    export const isBidderVerificationLink = (obj?: { __typename?: any } | null): obj is BidderVerificationLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidderVerificationLink"')
      return BidderVerificationLink_possibleTypes.includes(obj.__typename)
    }
    


    const CurrentItem_possibleTypes: string[] = ['CurrentItem']
    export const isCurrentItem = (obj?: { __typename?: any } | null): obj is CurrentItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrentItem"')
      return CurrentItem_possibleTypes.includes(obj.__typename)
    }
    


    const Estimate_possibleTypes: string[] = ['Estimate']
    export const isEstimate = (obj?: { __typename?: any } | null): obj is Estimate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEstimate"')
      return Estimate_possibleTypes.includes(obj.__typename)
    }
    


    const ExternalLiveStream_possibleTypes: string[] = ['ExternalLiveStream']
    export const isExternalLiveStream = (obj?: { __typename?: any } | null): obj is ExternalLiveStream => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExternalLiveStream"')
      return ExternalLiveStream_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserBidsInput_possibleTypes: string[] = ['GetUserBidsInput']
    export const isGetUserBidsInput = (obj?: { __typename?: any } | null): obj is GetUserBidsInput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserBidsInput"')
      return GetUserBidsInput_possibleTypes.includes(obj.__typename)
    }
    


    const Image_possibleTypes: string[] = ['Image']
    export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
      return Image_possibleTypes.includes(obj.__typename)
    }
    


    const Item_possibleTypes: string[] = ['Item']
    export const isItem = (obj?: { __typename?: any } | null): obj is Item => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItem"')
      return Item_possibleTypes.includes(obj.__typename)
    }
    


    const ItemChanged_possibleTypes: string[] = ['Item','ServerTime']
    export const isItemChanged = (obj?: { __typename?: any } | null): obj is ItemChanged => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemChanged"')
      return ItemChanged_possibleTypes.includes(obj.__typename)
    }
    


    const ItemDates_possibleTypes: string[] = ['ItemDates']
    export const isItemDates = (obj?: { __typename?: any } | null): obj is ItemDates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemDates"')
      return ItemDates_possibleTypes.includes(obj.__typename)
    }
    


    const ItemFairWarningNotification_possibleTypes: string[] = ['ItemFairWarningNotification']
    export const isItemFairWarningNotification = (obj?: { __typename?: any } | null): obj is ItemFairWarningNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemFairWarningNotification"')
      return ItemFairWarningNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemMessageNotification_possibleTypes: string[] = ['ItemMessageNotification']
    export const isItemMessageNotification = (obj?: { __typename?: any } | null): obj is ItemMessageNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemMessageNotification"')
      return ItemMessageNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemNotification_possibleTypes: string[] = ['ItemMessageNotification','ItemFairWarningNotification']
    export const isItemNotification = (obj?: { __typename?: any } | null): obj is ItemNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemNotification"')
      return ItemNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemSpecifications_possibleTypes: string[] = ['ItemSpecifications']
    export const isItemSpecifications = (obj?: { __typename?: any } | null): obj is ItemSpecifications => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemSpecifications"')
      return ItemSpecifications_possibleTypes.includes(obj.__typename)
    }
    


    const ItemsConnection_possibleTypes: string[] = ['ItemsConnection']
    export const isItemsConnection = (obj?: { __typename?: any } | null): obj is ItemsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemsConnection"')
      return ItemsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ItemsEdge_possibleTypes: string[] = ['ItemsEdge']
    export const isItemsEdge = (obj?: { __typename?: any } | null): obj is ItemsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemsEdge"')
      return ItemsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Link_possibleTypes: string[] = ['Link']
    export const isLink = (obj?: { __typename?: any } | null): obj is Link => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLink"')
      return Link_possibleTypes.includes(obj.__typename)
    }
    


    const LiveItem_possibleTypes: string[] = ['LiveItem']
    export const isLiveItem = (obj?: { __typename?: any } | null): obj is LiveItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLiveItem"')
      return LiveItem_possibleTypes.includes(obj.__typename)
    }
    


    const LiveStream_possibleTypes: string[] = ['LiveStream']
    export const isLiveStream = (obj?: { __typename?: any } | null): obj is LiveStream => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLiveStream"')
      return LiveStream_possibleTypes.includes(obj.__typename)
    }
    


    const LiveVideoStream_possibleTypes: string[] = ['ExternalLiveStream','BastaLiveStream']
    export const isLiveVideoStream = (obj?: { __typename?: any } | null): obj is LiveVideoStream => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLiveVideoStream"')
      return LiveVideoStream_possibleTypes.includes(obj.__typename)
    }
    


    const MaxBidPlaced_possibleTypes: string[] = ['MaxBidPlacedSuccess','BidPlacedError']
    export const isMaxBidPlaced = (obj?: { __typename?: any } | null): obj is MaxBidPlaced => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMaxBidPlaced"')
      return MaxBidPlaced_possibleTypes.includes(obj.__typename)
    }
    


    const MaxBidPlacedSuccess_possibleTypes: string[] = ['MaxBidPlacedSuccess']
    export const isMaxBidPlacedSuccess = (obj?: { __typename?: any } | null): obj is MaxBidPlacedSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMaxBidPlacedSuccess"')
      return MaxBidPlacedSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const Me_possibleTypes: string[] = ['Me']
    export const isMe = (obj?: { __typename?: any } | null): obj is Me => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMe"')
      return Me_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Item','Sale','UserBid']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const OnlineBidOrigin_possibleTypes: string[] = ['OnlineBidOrigin']
    export const isOnlineBidOrigin = (obj?: { __typename?: any } | null): obj is OnlineBidOrigin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOnlineBidOrigin"')
      return OnlineBidOrigin_possibleTypes.includes(obj.__typename)
    }
    


    const Paddle_possibleTypes: string[] = ['Paddle']
    export const isPaddle = (obj?: { __typename?: any } | null): obj is Paddle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaddle"')
      return Paddle_possibleTypes.includes(obj.__typename)
    }
    


    const PaddleBidOrigin_possibleTypes: string[] = ['PaddleBidOrigin']
    export const isPaddleBidOrigin = (obj?: { __typename?: any } | null): obj is PaddleBidOrigin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaddleBidOrigin"')
      return PaddleBidOrigin_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentDetails_possibleTypes: string[] = ['PaymentDetails']
    export const isPaymentDetails = (obj?: { __typename?: any } | null): obj is PaymentDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentDetails"')
      return PaymentDetails_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentSession_possibleTypes: string[] = ['PaymentSession']
    export const isPaymentSession = (obj?: { __typename?: any } | null): obj is PaymentSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentSession"')
      return PaymentSession_possibleTypes.includes(obj.__typename)
    }
    


    const PhoneBidOrigin_possibleTypes: string[] = ['PhoneBidOrigin']
    export const isPhoneBidOrigin = (obj?: { __typename?: any } | null): obj is PhoneBidOrigin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPhoneBidOrigin"')
      return PhoneBidOrigin_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const RangeRule_possibleTypes: string[] = ['RangeRule']
    export const isRangeRule = (obj?: { __typename?: any } | null): obj is RangeRule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRangeRule"')
      return RangeRule_possibleTypes.includes(obj.__typename)
    }
    


    const Sale_possibleTypes: string[] = ['Sale']
    export const isSale = (obj?: { __typename?: any } | null): obj is Sale => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSale"')
      return Sale_possibleTypes.includes(obj.__typename)
    }
    


    const SaleActivity_possibleTypes: string[] = ['Sale','Item']
    export const isSaleActivity = (obj?: { __typename?: any } | null): obj is SaleActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleActivity"')
      return SaleActivity_possibleTypes.includes(obj.__typename)
    }
    


    const SaleChanged_possibleTypes: string[] = ['Sale','ServerTime']
    export const isSaleChanged = (obj?: { __typename?: any } | null): obj is SaleChanged => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleChanged"')
      return SaleChanged_possibleTypes.includes(obj.__typename)
    }
    


    const SaleConnection_possibleTypes: string[] = ['SaleConnection']
    export const isSaleConnection = (obj?: { __typename?: any } | null): obj is SaleConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleConnection"')
      return SaleConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleDates_possibleTypes: string[] = ['SaleDates']
    export const isSaleDates = (obj?: { __typename?: any } | null): obj is SaleDates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleDates"')
      return SaleDates_possibleTypes.includes(obj.__typename)
    }
    


    const SalesEdge_possibleTypes: string[] = ['SalesEdge']
    export const isSalesEdge = (obj?: { __typename?: any } | null): obj is SalesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSalesEdge"')
      return SalesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ServerTime_possibleTypes: string[] = ['ServerTime']
    export const isServerTime = (obj?: { __typename?: any } | null): obj is ServerTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServerTime"')
      return ServerTime_possibleTypes.includes(obj.__typename)
    }
    


    const Subscription_possibleTypes: string[] = ['Subscription']
    export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
      return Subscription_possibleTypes.includes(obj.__typename)
    }
    


    const UserAccountSubscription_possibleTypes: string[] = ['UserAccountSubscription']
    export const isUserAccountSubscription = (obj?: { __typename?: any } | null): obj is UserAccountSubscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserAccountSubscription"')
      return UserAccountSubscription_possibleTypes.includes(obj.__typename)
    }
    


    const UserBid_possibleTypes: string[] = ['UserBid']
    export const isUserBid = (obj?: { __typename?: any } | null): obj is UserBid => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBid"')
      return UserBid_possibleTypes.includes(obj.__typename)
    }
    


    const UserBidsConnection_possibleTypes: string[] = ['UserBidsConnection']
    export const isUserBidsConnection = (obj?: { __typename?: any } | null): obj is UserBidsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBidsConnection"')
      return UserBidsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserBidsEdge_possibleTypes: string[] = ['UserBidsEdge']
    export const isUserBidsEdge = (obj?: { __typename?: any } | null): obj is UserBidsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBidsEdge"')
      return UserBidsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserSaleItemSubscription_possibleTypes: string[] = ['UserSaleItemSubscription']
    export const isUserSaleItemSubscription = (obj?: { __typename?: any } | null): obj is UserSaleItemSubscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSaleItemSubscription"')
      return UserSaleItemSubscription_possibleTypes.includes(obj.__typename)
    }
    

export const enumBidErrorCode = {
   NO_ERROR: 'NO_ERROR' as const,
   INTERNAL_ERROR: 'INTERNAL_ERROR' as const,
   MAX_BID_LOWER_THAN_CURRENT_MAX: 'MAX_BID_LOWER_THAN_CURRENT_MAX' as const,
   BID_LOWER_THAN_CURRENT_MAX: 'BID_LOWER_THAN_CURRENT_MAX' as const,
   BID_LOWER_THAN_CURRENT_BID: 'BID_LOWER_THAN_CURRENT_BID' as const,
   ALREADY_HIGHER_MAX_BID: 'ALREADY_HIGHER_MAX_BID' as const,
   OFF_INCREMENT: 'OFF_INCREMENT' as const,
   STARTING_BID_HIGHER: 'STARTING_BID_HIGHER' as const,
   NOT_OPEN_FOR_BIDDING: 'NOT_OPEN_FOR_BIDDING' as const,
   ITEM_CLOSING_PERIOD_PASSED: 'ITEM_CLOSING_PERIOD_PASSED' as const,
   BID_AMOUNT_UPPER_LIMIT_REACHED: 'BID_AMOUNT_UPPER_LIMIT_REACHED' as const,
   ITEM_ALREADY_CLOSED: 'ITEM_ALREADY_CLOSED' as const
}

export const enumBidOriginType = {
   ONLINE: 'ONLINE' as const,
   PADDLE: 'PADDLE' as const,
   PHONE: 'PHONE' as const,
   AGGREGATOR: 'AGGREGATOR' as const
}

export const enumBidStatus = {
   WINNING: 'WINNING' as const,
   LOSING: 'LOSING' as const,
   LOST: 'LOST' as const,
   WON: 'WON' as const,
   NOT_BIDDING: 'NOT_BIDDING' as const,
   WITHDRAWN: 'WITHDRAWN' as const,
   SUBMITTED: 'SUBMITTED' as const
}

export const enumBidType = {
   NORMAL: 'NORMAL' as const,
   MAX: 'MAX' as const,
   OFFER: 'OFFER' as const
}

export const enumClosingMethod = {
   ONE_BY_ONE: 'ONE_BY_ONE' as const,
   OVERLAPPING: 'OVERLAPPING' as const,
   NONE: 'NONE' as const
}

export const enumIdType = {
   ID: 'ID' as const,
   URI: 'URI' as const
}

export const enumItemOrderField = {
   ITEM_NUMBER: 'ITEM_NUMBER' as const,
   CREATED: 'CREATED' as const
}

export const enumItemStatus = {
   ITEM_NOT_OPEN: 'ITEM_NOT_OPEN' as const,
   ITEM_OPEN: 'ITEM_OPEN' as const,
   ITEM_CLOSING: 'ITEM_CLOSING' as const,
   ITEM_CLOSED: 'ITEM_CLOSED' as const,
   ITEM_PAUSED: 'ITEM_PAUSED' as const,
   ITEM_PROCESSING: 'ITEM_PROCESSING' as const,
   ITEM_LIVE: 'ITEM_LIVE' as const
}

export const enumLinkType = {
   WEBSITE: 'WEBSITE' as const,
   INSTAGRAM: 'INSTAGRAM' as const,
   YOUTUBE: 'YOUTUBE' as const,
   TIKTOK: 'TIKTOK' as const,
   FACEBOOK: 'FACEBOOK' as const,
   X: 'X' as const
}

export const enumLiveStreamType = {
   GENERIC: 'GENERIC' as const,
   AMAZON_IVS: 'AMAZON_IVS' as const,
   YouTubeLive: 'YouTubeLive' as const,
   BASTA_LIVE: 'BASTA_LIVE' as const
}

export const enumMeasurementUnit = {
   NOT_SET: 'NOT_SET' as const,
   CM: 'CM' as const,
   INCH: 'INCH' as const
}

export const enumPaddleType = {
   NOT_SET: 'NOT_SET' as const,
   IN_ROOM: 'IN_ROOM' as const,
   PHONE: 'PHONE' as const,
   ONLINE: 'ONLINE' as const,
   OTHER: 'OTHER' as const
}

export const enumPaginationDirection = {
   FORWARD: 'FORWARD' as const,
   BACKWARDS: 'BACKWARDS' as const
}

export const enumPaymentSessionStatus = {
   WAITING: 'WAITING' as const,
   READY: 'READY' as const,
   DONE: 'DONE' as const
}

export const enumPermission = {
   BID_ON_ITEM: 'BID_ON_ITEM' as const,
   ACCESS_PRIVATE: 'ACCESS_PRIVATE' as const
}

export const enumRenderMode = {
   REDIRECT: 'REDIRECT' as const,
   EMBED: 'EMBED' as const
}

export const enumReserveStatus = {
   NOT_MET: 'NOT_MET' as const,
   MET: 'MET' as const,
   NO_RESERVE: 'NO_RESERVE' as const
}

export const enumSaleStatus = {
   UNPUBLISHED: 'UNPUBLISHED' as const,
   PUBLISHED: 'PUBLISHED' as const,
   OPENED: 'OPENED' as const,
   CLOSED: 'CLOSED' as const,
   CLOSING: 'CLOSING' as const,
   PAUSED: 'PAUSED' as const,
   PROCESSING: 'PROCESSING' as const,
   LIVE: 'LIVE' as const
}

export const enumSaleType = {
   LIVE: 'LIVE' as const,
   ONLINE_TIMED: 'ONLINE_TIMED' as const
}

export const enumSpecificationSubType = {
   NOT_SET: 'NOT_SET' as const,
   PAINTING_UNFRAMED: 'PAINTING_UNFRAMED' as const,
   PAINTING_FRAMED: 'PAINTING_FRAMED' as const,
   PAINTING_FRAMED_PLEXI: 'PAINTING_FRAMED_PLEXI' as const,
   PAINTING_FRAMED_GLASS: 'PAINTING_FRAMED_GLASS' as const,
   WORK_ON_PAPER_UNFRAMED: 'WORK_ON_PAPER_UNFRAMED' as const,
   WORK_ON_PAPER_FRAMED: 'WORK_ON_PAPER_FRAMED' as const,
   WORK_ON_PAPER_FRAMED_PLEXI: 'WORK_ON_PAPER_FRAMED_PLEXI' as const,
   WORK_ON_PAPER_FRAMED_GLASS: 'WORK_ON_PAPER_FRAMED_GLASS' as const,
   MIXED_MEDIA_UNFRAMED: 'MIXED_MEDIA_UNFRAMED' as const,
   MIXED_MEDIA_FRAMED: 'MIXED_MEDIA_FRAMED' as const,
   MIXED_MEDIA_FRAMED_PLEXI: 'MIXED_MEDIA_FRAMED_PLEXI' as const,
   MIXED_MEDIA_FRAMED_GLASS: 'MIXED_MEDIA_FRAMED_GLASS' as const,
   PHOTOGRAPH_UNFRAMED: 'PHOTOGRAPH_UNFRAMED' as const,
   PHOTOGRAPH_FRAMED: 'PHOTOGRAPH_FRAMED' as const,
   PHOTOGRAPH_FRAMED_PLEXI: 'PHOTOGRAPH_FRAMED_PLEXI' as const,
   PHOTOGRAPH_FRAMED_GLASS: 'PHOTOGRAPH_FRAMED_GLASS' as const,
   NEW_MEDIA: 'NEW_MEDIA' as const,
   SCULPTURE: 'SCULPTURE' as const,
   PEDESTAL: 'PEDESTAL' as const,
   PEDESTAL_CASE_GLASS: 'PEDESTAL_CASE_GLASS' as const,
   PEDESTAL_CASE_PLEXI: 'PEDESTAL_CASE_PLEXI' as const,
   CERAMIC: 'CERAMIC' as const,
   NEON: 'NEON' as const,
   TAPESTRY: 'TAPESTRY' as const,
   OTHER_ART: 'OTHER_ART' as const,
   TABLE: 'TABLE' as const,
   CHAIR: 'CHAIR' as const,
   SOFA_LOVESEAT_CHAISE: 'SOFA_LOVESEAT_CHAISE' as const,
   FLOOR_LAMP: 'FLOOR_LAMP' as const,
   FLOOR_LAMP_SHADE: 'FLOOR_LAMP_SHADE' as const,
   TABLE_LAMP: 'TABLE_LAMP' as const,
   TABLE_LAMP_SHADE: 'TABLE_LAMP_SHADE' as const,
   SCONCE: 'SCONCE' as const,
   OTTOMAN: 'OTTOMAN' as const,
   BOOKCASE_STORAGE: 'BOOKCASE_STORAGE' as const,
   NIGHTSTAND: 'NIGHTSTAND' as const,
   ARMOIRE_DRESSER: 'ARMOIRE_DRESSER' as const,
   CARPET_RUG: 'CARPET_RUG' as const,
   MIRROR: 'MIRROR' as const,
   CHANDELIER: 'CHANDELIER' as const,
   BEDFRAME: 'BEDFRAME' as const,
   HEADBOARD: 'HEADBOARD' as const,
   DESK_VANITY: 'DESK_VANITY' as const,
   MEDIA_CONSOLE: 'MEDIA_CONSOLE' as const,
   OTHER_FURNITURE: 'OTHER_FURNITURE' as const,
   EARRINGS: 'EARRINGS' as const,
   NECKLACE: 'NECKLACE' as const,
   BRACELET: 'BRACELET' as const,
   RING: 'RING' as const,
   BROOCH: 'BROOCH' as const,
   WATCH: 'WATCH' as const,
   CUFFLINKS: 'CUFFLINKS' as const,
   EYEGLASSES: 'EYEGLASSES' as const,
   SET: 'SET' as const,
   PRECIOUS_STONES: 'PRECIOUS_STONES' as const,
   SNUFF_BOX_CIGARETTE_CASE: 'SNUFF_BOX_CIGARETTE_CASE' as const,
   OTHER_JEWELRY: 'OTHER_JEWELRY' as const,
   VASE_VESSEL: 'VASE_VESSEL' as const,
   BOWL: 'BOWL' as const,
   PLAQUE: 'PLAQUE' as const,
   OBJECT_OF_VERTU: 'OBJECT_OF_VERTU' as const,
   CANDELABRA_CANDLESTICK: 'CANDELABRA_CANDLESTICK' as const,
   DINNERWARE: 'DINNERWARE' as const,
   FLATWARE: 'FLATWARE' as const,
   GLASSWARE: 'GLASSWARE' as const,
   SERVEWARE: 'SERVEWARE' as const,
   PORCELAIN_PLATE: 'PORCELAIN_PLATE' as const,
   PORCELAIN_BOWL: 'PORCELAIN_BOWL' as const,
   TABLETOP_ACCESSORY: 'TABLETOP_ACCESSORY' as const,
   CLOCK: 'CLOCK' as const,
   OTHER_DECORATIVE_ARTS: 'OTHER_DECORATIVE_ARTS' as const,
   STAMP: 'STAMP' as const,
   BOOK: 'BOOK' as const,
   COIN: 'COIN' as const,
   DOCUMENT_MANUSCRIPT: 'DOCUMENT_MANUSCRIPT' as const,
   TOY: 'TOY' as const,
   MINIATURE_MODEL: 'MINIATURE_MODEL' as const,
   FIGURINE_DOLL: 'FIGURINE_DOLL' as const,
   NEON_SIGN: 'NEON_SIGN' as const,
   MEMORABILIA: 'MEMORABILIA' as const,
   CAMERA_ELECTRICAL: 'CAMERA_ELECTRICAL' as const,
   OTHER_COLLECTIBLES: 'OTHER_COLLECTIBLES' as const,
   WINE_BOTTLE: 'WINE_BOTTLE' as const,
   SPIRITS_BOTTLE: 'SPIRITS_BOTTLE' as const,
   BEER_BOTTLE: 'BEER_BOTTLE' as const,
   WINE_CASE: 'WINE_CASE' as const,
   SPIRITS_CASE: 'SPIRITS_CASE' as const,
   BEER_CASE: 'BEER_CASE' as const,
   WINE_BARREL: 'WINE_BARREL' as const,
   SPIRITS_BARREL: 'SPIRITS_BARREL' as const,
   BEER_BARREL: 'BEER_BARREL' as const,
   OTHER_ALCOHOLS: 'OTHER_ALCOHOLS' as const,
   CAR: 'CAR' as const,
   MOTORCYCLE: 'MOTORCYCLE' as const,
   BUS: 'BUS' as const,
   VAN: 'VAN' as const,
   LIMOUSINE: 'LIMOUSINE' as const,
   CARRIAGE: 'CARRIAGE' as const,
   TRAILER: 'TRAILER' as const,
   SIDECAR: 'SIDECAR' as const,
   OTHER_AUTOMOTIVE: 'OTHER_AUTOMOTIVE' as const,
   CLOTHING: 'CLOTHING' as const,
   FOOTWEAR: 'FOOTWEAR' as const,
   HANDBAG: 'HANDBAG' as const,
   ACCESSORIES: 'ACCESSORIES' as const,
   OTHER_FASHION: 'OTHER_FASHION' as const,
   MUSICAL_INSTRUMENT: 'MUSICAL_INSTRUMENT' as const,
   FIREARM_WEAPON: 'FIREARM_WEAPON' as const,
   HUNTING_FISHING: 'HUNTING_FISHING' as const,
   MEDICAL_EQUIPMENT: 'MEDICAL_EQUIPMENT' as const,
   OTHER: 'OTHER' as const
}

export const enumSpecificationType = {
   NOT_SET: 'NOT_SET' as const,
   ART: 'ART' as const,
   FURNITURE: 'FURNITURE' as const,
   JEWELRY: 'JEWELRY' as const,
   DECORATIVE_ARTS: 'DECORATIVE_ARTS' as const,
   COLLECTIBLES: 'COLLECTIBLES' as const,
   ALCOHOL: 'ALCOHOL' as const,
   AUTOMOTIVE: 'AUTOMOTIVE' as const,
   FASHION: 'FASHION' as const,
   OTHER: 'OTHER' as const
}

export const enumWeightUnit = {
   NOT_SET: 'NOT_SET' as const,
   KG: 'KG' as const,
   LB: 'LB' as const
}
