// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    ID: string,
    Int: number,
    JSON: any,
    String: string,
    Time: any,
}


/** Account Information */
export interface Account {
    /** ID of the account */
    id: Scalars['ID']
    /** Name of the account */
    name: Scalars['String']
    /** Contact email address */
    email: Scalars['String']
    /** created */
    created: Scalars['String']
    /** modified */
    modified: (Scalars['String'] | null)
    /** account handle, identifier for the account */
    handle: (Scalars['String'] | null)
    /** description */
    description: (Scalars['String'] | null)
    /** account image url */
    imageUrl: (Scalars['String'] | null)
    /** account description (bio) */
    links: Link[]
    /**
     * Payment details associated with account.
     * Integrating businesses will have null in this field
     */
    paymentDetails: (PaymentDetails | null)
    /** Basta Bid Client */
    bastaBidClient: Scalars['Boolean']
    /**
     * Populated with Seller terms have been accepted for account.
     * Integrating businesses will have null in this field.
     */
    terms: (SellerTerms | null)
    /**
     * @deprecated Use schemas instead
     * Item schema
     */
    itemSchema: (Scalars['JSON'] | null)
    /** Basta Live Stream Enabled */
    bastaLiveStreamEnabled: Scalars['Boolean']
    /** Shopify Enabled Store Id */
    shopifyConfiguration: (ShopifyConfiguration | null)
    /** Auction Aggregators associated with the account */
    aggregators: Aggregator[]
    /** Metafields associated with the account */
    metafields: Metafield[]
    /** Metafield associated with the account */
    metafield: (Metafield | null)
    /** Home country of the account as an ISO 3166-1 alpha-2 code. Null when unset. */
    homeCountryCode: (Country | null)
    /**
     * Auction symbols configured for the account. Always emits one entry per
     * AuctionSymbolType; glyph is null when unset.
     */
    auctionSymbols: AuctionSymbol[]
    /** Default auction format for the organisation. Null when no default is set. */
    preferredAuctionFormat: (SaleType | null)
    /** Default currency for the organisation. Null when no default is set. */
    defaultCurrency: (Currency | null)
    /** Registered company address and legal details for the organisation. Null when none are set. */
    organisationDetails: (OrganisationDetails | null)
    /** Default start bid as a percentage of the estimate. Null when no default is set. */
    defaultStartBidPercentage: (Scalars['Float'] | null)
    /**
     * Artist's Resale Right configuration for this account, one entry per
     * currency. Empty when the account has no configuration.
     */
    arrSettings: ArrSettings[]
    /**
     * Every charge configured for this account, disabled ones included. These are
     * the charges as the account set them, before any narrower level restates
     * them, so `appliesAt` is always ACCOUNT here. Empty when there are none.
     */
    charges: ChargeConnection
    __typename: 'Account'
}

export interface AccountFee {
    /** ID of the account fee record */
    id: Scalars['ID']
    /** Name of the account fee which is used in orders */
    name: Scalars['String']
    /** Account Fee type influences how the value is calculated */
    type: AccountFeeType
    /**
     * Value of the account fee interpreted based on the type
     * * 500 means 5% if type is percentage
     * * 1000 means $10 if type is amount
     */
    value: Scalars['Int']
    /**
     * Upper limit of the account fee.
     * If empty then there is no upper limit.
     */
    upperLteLimit: (Scalars['Int'] | null)
    /** Lower limit of the account fee. */
    lowerLimit: Scalars['Int']
    /**
     * How this fee rule is calculated. FLAT applies the rate to the full amount.
     * PROGRESSIVE applies the rate only to the portion of the amount within each bracket
     * (defined by lowerLimit and upperLteLimit). For PERCENTAGE+PROGRESSIVE the rate is
     * applied to the taxable portion within the bracket. For AMOUNT+PROGRESSIVE the fixed
     * charge is applied once as soon as the transaction amount exceeds the bracket's
     * lowerLimit — it does not prorate or repeat up to upperLteLimit.
     */
    calculationType: FeeCalculationType
    __typename: 'AccountFee'
}

export type AccountFeeType = 'NOT_SET' | 'PERCENTAGE' | 'AMOUNT'

export interface AccountImageAssociation {
    /** The ID of the associated account */
    accountId: Scalars['String']
    __typename: 'AccountImageAssociation'
}


/**
 * Action Hook Log represents a recorded Action Hook HTTP request to a customers web servers.
 * Log entry may contain information about a pending, successful or failed request.
 */
export interface ActionHookLog {
    /** Action Hook log entry identifier. */
    id: Scalars['ID']
    /** Account identifier. */
    accountId: Scalars['String']
    /** Idempotency key */
    idempotencyKey: Scalars['String']
    /** Action triggering the Action Hook. */
    action: ActionType
    /** Action Hook receiver endpoint. */
    url: Scalars['String']
    /** Headers sent with the Action Hook request. */
    headers: ((HttpHeader | null)[] | null)
    /** Request Payload as stringified json */
    requestPayload: Scalars['String']
    /** Response from Action Hook receiver. */
    response: (Scalars['String'] | null)
    /** Status of the Action Hook request. */
    status: (ActionHookStatus | null)
    /** Error message returned by receiver. */
    error: (Scalars['String'] | null)
    /** Number of HTTP request attempts. */
    retries: (Scalars['Int'] | null)
    /** Log creation timestamp. */
    createdAt: (Scalars['String'] | null)
    /** Latest request execution timestamp. */
    executedAt: (Scalars['String'] | null)
    /** Next retry date. */
    nextRetryDate: (Scalars['String'] | null)
    __typename: 'ActionHookLog'
}


/**
 * Datatype to group together 'connected' Action Hook logs
 * based on page information.
 */
export interface ActionHookLogConnection {
    /** Action Hook log edges */
    edges: ActionHookLogEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'ActionHookLogConnection'
}


/** Datatype encapsulating an Action Hook log entry and its cursor. */
export interface ActionHookLogEdge {
    /** Current Action Hook log cursor */
    cursor: Scalars['String']
    /** Action Hook log node */
    node: ActionHookLog
    __typename: 'ActionHookLogEdge'
}


/** Status of the Action Hook request. */
export type ActionHookStatus = 'PENDING' | 'SUCCESS' | 'FAILED' | 'RETRY'


/**
 * Action Hook subscription contains subscriber registration information.
 * Action Hook is an action that occurs when an event happens.
 * Action can be an HTTP POST request that will be triggered to customers web servers.
 */
export interface ActionHookSubscription {
    /** Unique identifier for the subscription. Use this ID when updating or deleting the subscription. */
    id: Scalars['ID']
    /** Account identifier. */
    accountId: Scalars['String']
    /** Name of the basta action that is being subscribed to. */
    action: ActionType
    /** Action Hook receiver endpoint. */
    url: Scalars['String']
    /** Custom HTTP header values sent with the action Action Hook. */
    headers: ((HttpHeader | null)[] | null)
    __typename: 'ActionHookSubscription'
}


/** Action types (events) that can trigger Action Hooks. */
export type ActionType = 'BID_ON_ITEM' | 'ITEMS_STATUS_CHANGED' | 'SALE_STATUS_CHANGED' | 'SALE_CREATED' | 'ITEM_ADDED_TO_SALE' | 'SALE_ITEM_UPDATED' | 'SALE_ITEM_REMOVED' | 'CANCEL_BID_ON_ITEM' | 'ORDER_CREATED' | 'ORDER_UPDATED' | 'ORDER_CANCELLED' | 'SALE_UPDATED' | 'SALE_REGISTRATION_CREATED' | 'SALE_REGISTRATION_UPDATED' | 'SALE_REGISTRATION_DELETED' | 'SALE_ITEM_REGISTRATION_CREATED' | 'SALE_ITEM_REGISTRATION_DELETED' | 'USER_CREATED' | 'USER_UPDATED' | 'SALE_ITEM_WATCHLIST_ENTRY_CREATED' | 'SALE_ITEM_WATCHLIST_ENTRY_DELETED' | 'SALE_WATCHLIST_ENTRY_CREATED' | 'SALE_WATCHLIST_ENTRY_DELETED' | 'BID_USER_ID_CHANGED' | 'MARKETPLACE_ORDER_PLACED' | 'MARKETPLACE_ORDER_STATE_CHANGED' | 'MARKETPLACE_ORDER_CANCELLED' | 'MARKETPLACE_PRODUCT_CREATED' | 'MARKETPLACE_PRODUCT_UPDATED' | 'MARKETPLACE_PRODUCT_DELETED' | 'MARKETPLACE_PRODUCT_VARIANT_CREATED' | 'MARKETPLACE_PRODUCT_VARIANT_UPDATED' | 'MARKETPLACE_PRODUCT_VARIANT_DELETED' | 'DUTCH_SALE_CREATED' | 'DUTCH_ITEM_CREATED' | 'DUTCH_ITEM_UPDATED' | 'DUTCH_ITEM_STATUS_CHANGED' | 'DUTCH_BID_PLACED'


/** A tracked change to an entity (sale, sale-item, item). */
export interface Activity {
    id: Scalars['ID']
    entityType: Scalars['String']
    entityId: Scalars['String']
    activityType: Scalars['String']
    /** @deprecated Use principal.type */
    principalType: Scalars['String']
    /** @deprecated Use principal.id */
    principalId: Scalars['String']
    occurredAt: Scalars['String']
    changes: FieldChange[]
    principal: (Principal | null)
    __typename: 'Activity'
}

export type AddressType = 'BILLING' | 'SHIPPING' | 'OTHER'


/**
 * An affiliate of an account. Affiliates can be invited to refer traffic and sales
 * back to the account, and event attribution is tracked against them.
 */
export interface Affiliate {
    /** Affiliate ID. */
    id: Scalars['ID']
    /** Owning account ID. */
    accountId: Scalars['ID']
    /** First name of the affiliate. */
    firstName: Scalars['String']
    /** Last name of the affiliate. May be empty when only a first name was provided. */
    lastName: Scalars['String']
    /** Contact email for the affiliate. */
    email: Scalars['String']
    /**
     * Referral token used to attribute traffic and conversions to this affiliate.
     * Unique within an account.
     */
    token: Scalars['String']
    /** User ID that originally created the affiliate. */
    createdBy: Scalars['String']
    /** User ID that last updated the affiliate. */
    updatedBy: Scalars['String']
    /** RFC3339 timestamp of creation. */
    createdAt: Scalars['String']
    /** RFC3339 timestamp of last update. */
    updatedAt: Scalars['String']
    __typename: 'Affiliate'
}

export interface AffiliateConnection {
    /** Affiliate edges. */
    edges: AffiliateEdge[]
    /** Page information. */
    pageInfo: PageInfo
    __typename: 'AffiliateConnection'
}

export interface AffiliateEdge {
    /** Cursor for this affiliate edge. */
    cursor: Scalars['String']
    /** Affiliate node. */
    node: Affiliate
    __typename: 'AffiliateEdge'
}

export interface Aggregator {
    name: Scalars['String']
    /** Identifier is chosen by the account and is used as a userId for bids placed on behalf of the aggregator. */
    identifier: (Scalars['String'] | null)
    type: BidOriginType
    __typename: 'Aggregator'
}


/** Anti-money-laundering risk classification of a country for an account. */
export type AmlRiskClass = 'LOW' | 'HIGH'


/**
 * API key represent a secret key that allows
 * software to access the API on behalf of customer.
 */
export interface ApiKey {
    id: Scalars['ID']
    name: Scalars['String']
    accountId: Scalars['String']
    created: Scalars['String']
    roles: ApiKeyRole[]
    __typename: 'ApiKey'
}

export interface ApiKeyConnection {
    /** Edges */
    edges: ApiKeyEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'ApiKeyConnection'
}


/**
 * Created API key represent a secret key that allows
 * software programs to access the API on behalf of customers to access the API.
 * Make sure to copy api key now as it will not shown again.
 */
export interface ApiKeyCreated {
    id: Scalars['ID']
    name: Scalars['String']
    generatedApiKey: Scalars['String']
    roles: ApiKeyRole[]
    __typename: 'ApiKeyCreated'
}

export interface ApiKeyEdge {
    /** Current cursor */
    cursor: Scalars['String']
    /** Current node */
    node: ApiKey
    __typename: 'ApiKeyEdge'
}


/** Role that authorize api keys */
export type ApiKeyRole = 'ADMIN' | 'READ'


/**
 * API token represent a token that allows
 * customers to access the API in machine and machine manner.
 */
export interface ApiToken {
    id: Scalars['ID']
    name: Scalars['String']
    accountId: Scalars['String']
    created: Scalars['String']
    roles: ApiTokenRole[]
    __typename: 'ApiToken'
}


/** DEPRECATED. */
export interface ApiTokenConnection {
    /** Edges */
    edges: ApiTokensEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'ApiTokenConnection'
}


/**
 * Created API token represent a token that allows
 * customers to access the API in machine and machine manner and includes
 * the API key that the caller needs to write down (not able to see the key again)
 */
export interface ApiTokenCreated {
    id: Scalars['ID']
    name: Scalars['String']
    generatedApiKey: Scalars['String']
    roles: ApiTokenRole[]
    __typename: 'ApiTokenCreated'
}


/**
 * DEPRECATED.
 * Role that authorize api keys
 */
export type ApiTokenRole = 'ADMIN' | 'READ'


/** DEPRECATED. */
export interface ApiTokensEdge {
    /** Current cursor */
    cursor: Scalars['String']
    /** Current node */
    node: ApiToken
    __typename: 'ApiTokensEdge'
}


/**
 * One rung of the Artist's Resale Right royalty ladder. The portion of the sale
 * price between lowerLimit and upperLteLimit is charged at rate.
 */
export interface ArrBand {
    /** Id of the band. */
    id: Scalars['ID']
    /** Lower bound of the portion this band covers, in minor currency units. */
    lowerLimit: Scalars['Int']
    /**
     * Upper bound of the portion this band covers, in minor currency units.
     * Null on the highest band, which has no upper bound.
     */
    upperLteLimit: (Scalars['Int'] | null)
    /** Rate charged on this portion, in basis points: 400 is 4%, 25 is 0.25%. */
    rateBps: Scalars['Int']
    __typename: 'ArrBand'
}


/**
 * Artist's Resale Right configuration for one currency. The royalty is charged to
 * the buyer on the sale price, excluding buyer's premium.
 */
export interface ArrSettings {
    /**
     * Currency the amounts below are in. An account configures each currency it
     * sells in separately.
     */
    currency: Currency
    /** Whether the royalty is charged at all in this currency. */
    enabled: Scalars['Boolean']
    /**
     * Sale price at or above which the royalty applies, in minor currency units.
     * Below it nothing is charged; at or above it the bands apply to the whole
     * price, not only the part above the threshold.
     */
    thresholdAmount: Scalars['Int']
    /**
     * Upper bound on the total royalty for a single lot, in minor currency units.
     * Null means the royalty is uncapped.
     */
    capAmount: (Scalars['Int'] | null)
    /**
     * The royalty ladder, ordered from the lowest portion upwards. Each band
     * charges its own rate on its own portion and the results are summed.
     */
    bands: ArrBand[]
    __typename: 'ArrSettings'
}


/**
 * A file uploaded via createAssetUploadUrl. One of three variants: Image, Video,
 * or Document. The variant is chosen from the file's MIME type. Fields common to
 * every variant (id, url, externalId) can be queried directly; variant-specific
 * fields require an `... on Image` / `... on Video` / `... on Document` fragment.
 */
export type Asset = (Document | Image | Video) & { __isUnion?: true }


/**
 * The signed URL and metadata returned by createAssetUploadUrl. The client PUTs
 * the file bytes to uploadUrl within its expiry window; assetUrl becomes fetchable
 * once the upload completes.
 */
export interface AssetUploadUrl {
    /** The newly created asset's ID (UUID). */
    assetId: Scalars['String']
    /** Signed URL to PUT the file bytes to. Expires 15 minutes after issuance. */
    uploadUrl: Scalars['String']
    /** URL to fetch the uploaded file. Becomes fetchable once the upload completes. */
    assetUrl: Scalars['String']
    /** Headers the client must send with the PUT request (e.g. Content-Type). */
    headers: (HttpHeader[] | null)
    __typename: 'AssetUploadUrl'
}


/**
 * An account-scoped attribution channel: how a client reached the auction house
 * (e.g. website, phone, walk-in).
 */
export interface AttributionChannel {
    id: Scalars['ID']
    accountId: Scalars['String']
    name: Scalars['String']
    /** When the channel was archived (RFC3339). Null means active. */
    archivedAt: (Scalars['String'] | null)
    /** When the channel was created (RFC3339). */
    created: Scalars['String']
    /** When the channel was last modified (RFC3339). */
    modified: Scalars['String']
    __typename: 'AttributionChannel'
}


/**
 * An account-scoped attribution source: what prompted a client to reach the
 * auction house (e.g. web search, referral).
 */
export interface AttributionSource {
    id: Scalars['ID']
    accountId: Scalars['String']
    name: Scalars['String']
    /** When the source was archived (RFC3339). Null means active. */
    archivedAt: (Scalars['String'] | null)
    /** When the source was created (RFC3339). */
    created: Scalars['String']
    /** When the source was last modified (RFC3339). */
    modified: Scalars['String']
    __typename: 'AttributionSource'
}


/**
 * A per-account auction symbol: the fixed type and its configured glyph.
 * glyph is null when the account has not configured one.
 */
export interface AuctionSymbol {
    type: AuctionSymbolType
    glyph: (Scalars['String'] | null)
    __typename: 'AuctionSymbol'
}


/** Fixed set of auction symbol types an account can define a glyph for. */
export type AuctionSymbolType = 'ARR' | 'VAT' | 'CITES'

export interface BastaLiveStream {
    /**
     * Is this option available for the account,
     * if not the account has to enable it in account settings.
     */
    optionAvailable: Scalars['Boolean']
    /** LiveStream URL */
    publicUrl: (Scalars['String'] | null)
    ingestUrl: Scalars['String']
    /** Channel ID */
    channelId: (Scalars['String'] | null)
    /** Stream key */
    streamKey: (Scalars['String'] | null)
    /** Is stream live */
    isLive: Scalars['Boolean']
    /** Current viewers */
    currentViewers: (Scalars['Int'] | null)
    __typename: 'BastaLiveStream'
}


/** A bid on a item */
export interface Bid {
    /** BidId UUID string */
    bidId: Scalars['String']
    /** Sale ID of the sale that includes the item in scope. */
    saleId: Scalars['String']
    /** Item ID of the item that includes the bid in scope. */
    itemId: Scalars['String']
    /** Sale */
    sale: Sale
    /** Item */
    saleItem: SaleItem
    /** Amount of the bid in minor currency unit. */
    amount: Scalars['Int']
    /** Max amount of the bid in minor currency unit. */
    maxAmount: Scalars['Int']
    /** Users id that placed the bid */
    userId: Scalars['String']
    /** User Info */
    user: (UserInfo | null)
    /** Date of when the bid was placed. */
    date: Scalars['String']
    /** Bid status of currently logged in user for this item */
    bidStatus: (BidStatus | null)
    /**
     * Bids sequence number tells us how bids are connected.
     * Bids with the same bid sequence number happend during the same Bid/Max-bid request.
     * Mainly used for cancelling bids.
     */
    bidSequenceNumber: Scalars['Int']
    /** A unique hash composed of SaleId, ItemId and UserId */
    bidderIdentifier: Scalars['String']
    /** Optional paddle id if bid was placed with a paddle */
    paddle: (Paddle | null)
    /** BidOrigin */
    bidOrigin: BidOrigin
    /** User Profile, will only resolve if the user exists in configured identity provider. */
    userProfile: (UserInfo | null)
    /** Registration ID associated with this bid. */
    registrationId: (Scalars['String'] | null)
    /**
     * Registration associated with this bid. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration: (SaleRegistration | null)
    __typename: 'Bid'
}


/** Error code when failing to place a bid on an item */
export type BidErrorCode = 'NO_ERROR' | 'INTERNAL_ERROR' | 'MAX_BID_LOWER_THAN_CURRENT_MAX' | 'BID_LOWER_THAN_CURRENT_MAX' | 'BID_LOWER_THAN_CURRENT_BID' | 'ALREADY_HIGHER_MAX_BID' | 'OFF_INCREMENT' | 'STARTING_BID_HIGHER' | 'NOT_OPEN_FOR_BIDDING' | 'ITEM_CLOSING_PERIOD_PASSED' | 'BID_AMOUNT_UPPER_LIMIT_REACHED'


/**
 * Bid increment table represent how increments behave for a
 * specific item or a sale.
 */
export interface BidIncrementTable {
    /** All increments in the table. */
    rules: RangeRule[]
    __typename: 'BidIncrementTable'
}

export type BidOrderByField = 'BID_DATE'

export type BidOrigin = (OnlineBidOrigin | PaddleBidOrigin | PhoneBidOrigin | Aggregator) & { __isUnion?: true }

export type BidOriginType = 'ONLINE' | 'PADDLE' | 'PHONE' | 'AGGREGATOR'


/** A bid is either successful or there was an error */
export type BidPlaced = (BidPlacedSuccess | BidPlacedError) & { __isUnion?: true }


/** Error response for bidOnItem */
export interface BidPlacedError {
    /** Error description. */
    error: Scalars['String']
    /** Error code if an error occured. */
    errorCode: BidErrorCode
    __typename: 'BidPlacedError'
}


/** Bid was successfully placed */
export interface BidPlacedSuccess {
    /** BidId */
    bidId: Scalars['String']
    /** Amount of placed bid. Minor currency units. */
    amount: Scalars['Int']
    /**
     * MaxAmount, only set if bid was of type MaxBid.
     * Should be kept secret and never rendered to clients.
     */
    maxAmount: Scalars['Int']
    /** Server time of when the bid was recorded. */
    date: Scalars['String']
    /** Bid Status of the bid */
    bidStatus: BidStatus
    /** BidType */
    bidType: BidType
    __typename: 'BidPlacedSuccess'
}


/** Restrictions for bidding on a sale */
export interface BidRestrictions {
    /** Users need to have an accepted registration to bid on this sale */
    acceptedRegistrationRequired: Scalars['Boolean']
    /** When true, phone registrations are open/enabled for this sale */
    phoneRegistrationOpen: Scalars['Boolean']
    __typename: 'BidRestrictions'
}


/** Bid statuses that calculates in what status the bid is. */
export type BidStatus = 'WINNING' | 'LOSING' | 'LOST' | 'WON' | 'NOT_BIDDING' | 'SUBMITTED' | 'WITHDRAWN'


/** Bid Type represent what kind of bid is being placed on an item. */
export type BidType = 'NORMAL' | 'MAX' | 'OFFER'


/**
 * Bidder token is a token that is signed on behalf a user.
 * The token returned will allow users to bid on items.
 */
export interface BidderToken {
    token: Scalars['String']
    expiration: Scalars['String']
    __typename: 'BidderToken'
}

export interface BidsConnection {
    edges: BidsEdge[]
    pageInfo: PageInfo
    __typename: 'BidsConnection'
}

export interface BidsEdge {
    cursor: Scalars['String']
    node: Bid
    __typename: 'BidsEdge'
}


/** Response when canceling latest bid on item */
export interface CanceledLatestBidOnItem {
    removedBids: Bid[]
    __typename: 'CanceledLatestBidOnItem'
}


/**
 * Card is a payment card on file for a user. Only non-sensitive identifying
 * details are exposed — never a full card number.
 */
export interface Card {
    /** Card identifier */
    id: Scalars['String']
    /** Card brand (e.g. "visa" or "mastercard") */
    brand: Scalars['String']
    /** Last four digits of the card number */
    last4: Scalars['String']
    /** Expiry month, 1-12 */
    expMonth: Scalars['Int']
    /** Expiry year, four digits */
    expYear: Scalars['Int']
    __typename: 'Card'
}


/** A hierarchical category that can be applied to items, sales, or sale items. */
export interface Category {
    /** Id of the category. */
    id: Scalars['ID']
    /** Account that owns the category. */
    accountId: Scalars['ID']
    /** Human-readable category name. */
    name: Scalars['String']
    /** URL-friendly slug. */
    slug: Scalars['String']
    /** Parent category id, if this category is nested. */
    parentId: (Scalars['ID'] | null)
    /** Parent category, if this category is nested. */
    parent: (Category | null)
    /** Direct children of this category, paginated. */
    children: CategoryConnection
    /** Timestamp when the category was created. */
    createdAt: Scalars['String']
    /** Timestamp when the category was last updated. */
    updatedAt: Scalars['String']
    __typename: 'Category'
}


/** A paginated connection of categories. */
export interface CategoryConnection {
    edges: CategoryEdge[]
    pageInfo: PageInfo
    __typename: 'CategoryConnection'
}


/** An edge in a category connection. */
export interface CategoryEdge {
    node: Category
    cursor: Scalars['String']
    __typename: 'CategoryEdge'
}


/** A flat list of categories returned from association mutations. */
export interface CategoryList {
    categories: Category[]
    __typename: 'CategoryList'
}


/**
 * A charge the account applies to lots, in one currency. An account that sells in
 * several currencies configures the same charge once per currency, and a lot is
 * only ever charged in the currency it settles in.
 * 
 * Read from a sale item, consignment, user, item type or sale genre, a charge
 * comes back already restated for that level. `appliesAt` says which level the
 * values came from.
 */
export interface Charge {
    /** The catalogue id, the same at every level the charge is read from. */
    id: Scalars['ID']
    /** Name shown to buyers, unique per currency within the account. */
    name: Scalars['String']
    /** Currency of every amount below. Cannot be changed once the charge exists. */
    currency: Currency
    /** The lot amount the bands are measured against. */
    basedOn: ChargeBasedOn
    /** How often the charge is raised. See the enum values for what counts. */
    frequency: ChargeFrequency
    /** The sale result that triggers the charge. */
    outcome: ChargeOutcome
    /** How the ladder is applied to the amount. */
    calculationType: ChargeCalculationType
    /**
     * Whether the charge is currently raised. Charges are disabled, never
     * deleted, because settled statements reference them.
     */
    status: ChargeStatus
    /**
     * Lower bound on the amount charged, in minor currency units. 0 means the
     * amount is not raised to a floor.
     */
    minimum: Scalars['Int']
    /**
     * Upper bound on the amount charged, in minor currency units. 0 means the
     * amount is not capped.
     */
    maximum: Scalars['Int']
    /**
     * The ladder, ordered from the lowest portion upwards. Empty when no ladder
     * has been set yet, in which case the charge produces nothing.
     */
    bands: ChargeBand[]
    /**
     * The level these values came from. ACCOUNT means the charge applies here
     * exactly as the account configured it.
     */
    appliesAt: ChargeScopeType
    __typename: 'Charge'
}


/**
 * One rung of a charge ladder. The portion of the amount between lowerLimit and
 * upperLteLimit is charged at value.
 */
export interface ChargeBand {
    /** Stable for as long as the ladder is not replaced. */
    id: Scalars['ID']
    /** Lower bound of the portion this band covers, in minor currency units. */
    lowerLimit: Scalars['Int']
    /**
     * Upper bound of the portion this band covers, in minor currency units. Null
     * on the highest band, which has no upper bound.
     */
    upperLteLimit: (Scalars['Int'] | null)
    /** Whether `value` is a rate or a fixed sum. */
    type: ChargeBandType
    /**
     * Basis points when type is PERCENTAGE — 2600 is 26%. Minor currency units
     * when type is AMOUNT.
     */
    value: Scalars['Int']
    __typename: 'ChargeBand'
}


/** Whether a band charges a rate or a fixed sum. */
export type ChargeBandType = 'PERCENTAGE' | 'AMOUNT'


/** What a charge's bands are measured against. */
export type ChargeBasedOn = 'HAMMER' | 'LOW_ESTIMATE'


/** How a charge's bands combine into one amount. */
export type ChargeCalculationType = 'FLAT' | 'PROGRESSIVE'


/** A paginated connection of charges, oldest first. */
export interface ChargeConnection {
    /** The charges on this page, oldest first. Empty when there are none. */
    edges: ChargeEdge[]
    /**
     * Cursors for this page, and whether another one follows. Charges page
     * forward only, so hasPreviousPage is always false.
     */
    pageInfo: PageInfo
    __typename: 'ChargeConnection'
}


/** An edge in a charge connection. */
export interface ChargeEdge {
    /** The charge, already restated for whichever level it was read at. */
    node: Charge
    /** Opaque. Pass it as `after` to resume reading from just past this charge. */
    cursor: Scalars['String']
    __typename: 'ChargeEdge'
}


/** How often a charge applies to a given buyer. */
export type ChargeFrequency = 'FIRST_TIME' | 'ALWAYS'


/** Which result a charge applies to. */
export type ChargeOutcome = 'ITEM_WON' | 'ITEM_LOST' | 'ANY'


/**
 * The level a charge is set at. A level restates a charge whole rather than
 * patching parts of it, so when more than one level matches, the most specific
 * one wins outright.
 */
export type ChargeScopeType = 'SALE_ITEM' | 'CONSIGNMENT' | 'USER' | 'ITEM_TYPE' | 'SALE_GENRE' | 'ACCOUNT'


/**
 * Whether a charge is applied. Charges are disabled rather than deleted, so that
 * anything already settled against them keeps its meaning.
 */
export type ChargeStatus = 'ENABLED' | 'DISABLED'

export type ClientPermission = 'BID_ON_ITEM' | 'ACCESS_PRIVATE'


/** ClosingMethod represents how SaleItems are moved into CLOSING status and when they are CLOSED */
export type ClosingMethod = 'ONE_BY_ONE' | 'OVERLAPPING' | 'NONE'


/**
 * A consignment groups one or many items under a single consignor and carries the
 * agreed fee rules.
 */
export interface Consignment {
    /** Id of the consignment. */
    id: Scalars['ID']
    /** Cursor is used in pagination. */
    cursor: Scalars['String']
    /** Account ID */
    accountId: Scalars['String']
    /** Human-facing short code for the consignment (format CN<YY><M><D><SUFFIX>), unique per account. */
    shortId: Scalars['String']
    /**
     * @deprecated Use consignors
     * Id of the consignor (a user-service user).
     */
    consignorUserId: Scalars['String']
    /**
     * @deprecated Use consignors
     * The consignor's user, resolved from consignorUserId.
     */
    consignor: (User | null)
    /** All consignors for this consignment, including the main one (isMain = true). */
    consignors: Consignor[]
    /** All staff (team members) for this consignment, including the lead one (isLead = true). */
    staff: ConsignmentStaff[]
    /** Consignment name. */
    name: Scalars['String']
    /** Optional consignment description. */
    description: (Scalars['String'] | null)
    /**
     * Optional identifier for this consignment in an external system, e.g. "GRS-12345".
     * Unique per account.
     */
    externalId: (Scalars['String'] | null)
    /** The consignment's fee rules. */
    feeRules: ConsignmentFeeRule[]
    /** When the consignment was created (RFC3339). */
    created: Scalars['String']
    /** When the consignment was last modified (RFC3339). */
    modified: Scalars['String']
    /** Id of the user that created the consignment. */
    createdByUserId: Scalars['String']
    /** Id of the user that last modified the consignment. */
    modifiedByUserId: (Scalars['String'] | null)
    /**
     * The charges that apply to lots in this consignment, already restated for
     * it. Falls back to the account when this consignment does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges: ChargeConnection
    __typename: 'Consignment'
}


/**
 * How a consignment fee rule's value is applied. FLAT applies the rate/amount to the
 * whole amount; PROGRESSIVE applies it per bracket defined by lowerLimit (exclusive)
 * and upperLteLimit (inclusive).
 */
export type ConsignmentFeeCalculationType = 'NOT_SET' | 'FLAT' | 'PROGRESSIVE'


/** A single fee rule in a consignment's fee-rule set. */
export interface ConsignmentFeeRule {
    id: Scalars['ID']
    name: (Scalars['String'] | null)
    type: ConsignmentFeeType
    value: Scalars['Int']
    /** Exclusive lower bound of the bracket this rule applies to. */
    lowerLimit: Scalars['Int']
    /** Inclusive upper bound of the bracket; null means unbounded. */
    upperLteLimit: (Scalars['Int'] | null)
    /** How the value is applied (FLAT or PROGRESSIVE). */
    calculationType: ConsignmentFeeCalculationType
    __typename: 'ConsignmentFeeRule'
}


/**
 * Type of a consignment fee rule. PERCENTAGE is basis points (2000 = 20.00%);
 * AMOUNT is minor currency units.
 */
export type ConsignmentFeeType = 'NOT_SET' | 'PERCENTAGE' | 'AMOUNT'


/** A member of a consignment's staff (team) set. Exactly one is lead when the set is non-empty. */
export interface ConsignmentStaff {
    /**
     * The staff member's identity id, as issued by the dashboard identity provider
     * (Ory Kratos). This is the same id space as DashboardMember.userId, and is not
     * a client-user id.
     */
    userId: Scalars['String']
    /** Whether this staff member is the lead. */
    isLead: Scalars['Boolean']
    /** Account the staff member belongs to. */
    accountId: Scalars['String']
    /**
     * The staff member's display name, from the identity provider.
     * Null if the identity could not be resolved.
     */
    name: (Scalars['String'] | null)
    /**
     * The staff member's email address, from the identity provider.
     * Null if the identity could not be resolved.
     */
    email: (Scalars['String'] | null)
    __typename: 'ConsignmentStaff'
}

export interface ConsignmentsConnection {
    /** Consignment edges */
    edges: ConsignmentsEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'ConsignmentsConnection'
}

export interface ConsignmentsEdge {
    /** Current consignment cursor */
    cursor: Scalars['String']
    /** Consignment node */
    node: Consignment
    __typename: 'ConsignmentsEdge'
}


/** A member of a consignment's consignor set. Exactly one is main when the set is non-empty. */
export interface Consignor {
    /** Id of the consignor (a user-service user). */
    userId: Scalars['String']
    /** Whether this consignor is the main consignor. */
    isMain: Scalars['Boolean']
    /** Account the consignor belongs to (used to resolve the user). */
    accountId: Scalars['String']
    /** The consignor's user, resolved from userId. */
    user: (User | null)
    __typename: 'Consignor'
}


/** schemaData drift between an item and one target (a sale item). */
export interface ContentDiff {
    /** The kind of target compared. */
    targetKind: ContentDiffTargetKind
    /** Sale id, when targetKind is SALE_ITEM. */
    saleId: (Scalars['ID'] | null)
    /** Sale item id, when targetKind is SALE_ITEM. */
    saleItemId: (Scalars['ID'] | null)
    /** Variant id, when targetKind is PRODUCT_VARIANT. */
    variantId: (Scalars['ID'] | null)
    /** The item's schema_id. */
    itemSchemaId: (Scalars['ID'] | null)
    /** The target's schema_id. */
    targetSchemaId: (Scalars['ID'] | null)
    /** Whether the item and target reference the same schema_id. */
    schemaIdMatches: Scalars['Boolean']
    /** True when schemaIdMatches is true and there are no drifting entries. */
    inSync: Scalars['Boolean']
    /** The drifting keys. Empty when in sync. */
    entries: ContentDiffEntry[]
    /** Target keys not present as public fields in the item's schema. Names only. */
    removableKeys: Scalars['String'][]
    __typename: 'ContentDiff'
}


/** A single drifting schema_data key. */
export interface ContentDiffEntry {
    /** The schema_data property name. */
    key: Scalars['String']
    /** How this key differs between the item and the target. */
    status: ContentDiffStatus
    /** The item's value for this key. Null when status is ONLY_ON_TARGET. */
    itemValue: (Scalars['JSON'] | null)
    /** The target's value for this key. Null when status is ONLY_ON_ITEM. */
    targetValue: (Scalars['JSON'] | null)
    __typename: 'ContentDiffEntry'
}


/** How a schema_data key differs between an item and a target. */
export type ContentDiffStatus = 'ONLY_ON_ITEM' | 'ONLY_ON_TARGET' | 'CHANGED'


/** The kind of target a ContentDiff compares against. */
export type ContentDiffTargetKind = 'SALE_ITEM' | 'PRODUCT_VARIANT'


/** Direction to sync content drift between an item and a sale item. */
export type ContentSyncDirection = 'PROMOTE_TO_ITEM' | 'REFRESH_FROM_ITEM'


/** ISO 3166-1 alpha-2 country codes */
export type Country = 'AF' | 'AL' | 'AQ' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AG' | 'AZ' | 'AR' | 'AU' | 'AT' | 'BS' | 'BH' | 'BD' | 'AM' | 'BB' | 'BE' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'BZ' | 'IO' | 'SB' | 'VG' | 'BN' | 'BG' | 'MM' | 'BI' | 'BY' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'LK' | 'TD' | 'CL' | 'CN' | 'TW' | 'CX' | 'CC' | 'CO' | 'KM' | 'YT' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CU' | 'CY' | 'CZ' | 'BJ' | 'DK' | 'DM' | 'DO' | 'EC' | 'SV' | 'GQ' | 'ET' | 'ER' | 'EE' | 'FO' | 'FK' | 'GS' | 'FJ' | 'FI' | 'AX' | 'FR' | 'GF' | 'PF' | 'TF' | 'DJ' | 'GA' | 'GE' | 'GM' | 'PS' | 'DE' | 'GH' | 'GI' | 'KI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GN' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IL' | 'IT' | 'CI' | 'JM' | 'JP' | 'KZ' | 'JO' | 'KE' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LB' | 'LS' | 'LV' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MQ' | 'MR' | 'MU' | 'MX' | 'MC' | 'MN' | 'MD' | 'ME' | 'MS' | 'MA' | 'MZ' | 'OM' | 'NA' | 'NR' | 'NP' | 'NL' | 'CW' | 'AW' | 'SX' | 'BQ' | 'NC' | 'VU' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'NO' | 'MP' | 'UM' | 'FM' | 'MH' | 'PW' | 'PK' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'GW' | 'TL' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'AI' | 'LC' | 'MF' | 'PM' | 'VC' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SK' | 'VN' | 'SI' | 'SO' | 'ZA' | 'ZW' | 'ES' | 'SS' | 'SD' | 'EH' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TJ' | 'TH' | 'TG' | 'TK' | 'TO' | 'TT' | 'AE' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'MK' | 'EG' | 'GB' | 'GG' | 'JE' | 'IM' | 'TZ' | 'US' | 'VI' | 'BF' | 'UY' | 'UZ' | 'VE' | 'WF' | 'WS' | 'YE' | 'ZM'


/**
 * A country in the catalog: its ISO 3166-1 alpha-2 code and display name, together
 * with the account's effective enabled state and AML risk classification.
 */
export interface CountryInfo {
    code: Country
    name: Scalars['String']
    enabled: Scalars['Boolean']
    amlRiskClass: AmlRiskClass
    /** True if this is the account's home country. */
    isHomeCountry: Scalars['Boolean']
    __typename: 'CountryInfo'
}


/** A connection wrapper for the account's countries. */
export interface CountryInfoConnection {
    /** The list of country edges. */
    edges: CountryInfoEdge[]
    __typename: 'CountryInfoConnection'
}


/** An edge in the countries connection. */
export interface CountryInfoEdge {
    /** The country. */
    node: CountryInfo
    __typename: 'CountryInfoEdge'
}


/**
 * A hierarchical creator (Maker / Artist / Brand) describing who or what made an
 * item. A parallel taxonomy to Category, applied to items and sale items.
 */
export interface Creator {
    /** Id of the creator. */
    id: Scalars['ID']
    /** Account that owns the creator. */
    accountId: Scalars['ID']
    /** Human-readable creator name. */
    name: Scalars['String']
    /** URL-friendly slug. */
    slug: Scalars['String']
    /** Parent creator id, if this creator is nested. */
    parentId: (Scalars['ID'] | null)
    /** Parent creator, if this creator is nested. */
    parent: (Creator | null)
    /** Direct children of this creator. */
    children: Creator[]
    /**
     * The creator's type. Set on the root and inherited by descendants, so a child
     * resolves to the same type as its root.
     */
    type: CreatorType
    /**
     * Whether the Artist's Resale Right applies to works by this creator. Items
     * linked to the creator inherit this unless they set their own value.
     */
    arr: Scalars['Boolean']
    /** Timestamp when the creator was created. */
    createdAt: Scalars['String']
    /** Timestamp when the creator was last updated. */
    updatedAt: Scalars['String']
    __typename: 'Creator'
}


/** A paginated connection of creators. */
export interface CreatorConnection {
    creators: Creator[]
    hasNextPage: Scalars['Boolean']
    endCursor: (Scalars['String'] | null)
    __typename: 'CreatorConnection'
}


/** A flat list of creators returned from association mutations. */
export interface CreatorList {
    creators: Creator[]
    __typename: 'CreatorList'
}


/**
 * The kind of creator a root node represents. A creator's type is fixed on its
 * root and inherited by every descendant in the tree.
 */
export type CreatorType = 'ARTIST' | 'PHOTOGRAPHER' | 'SCULPTOR' | 'POTTER' | 'JEWELER' | 'TEXTILE_ARTIST' | 'GLASS_ARTIST' | 'FURNITURE_DESIGNER' | 'MANUFACTURER'

export type Currency = 'USD' | 'ISK' | 'EUR' | 'GBP' | 'AUD' | 'SEK' | 'NOK' | 'DKK' | 'CHF' | 'CAD' | 'JPY' | 'HKD' | 'AED'


/**
 * The current authenticated user's roles and effective permissions for the account.
 * Used by the UI to determine what features to show/hide.
 */
export interface CurrentUser {
    /** The user's identity ID. */
    userId: Scalars['String']
    /** The dashboard roles assigned to this user in the account. */
    roles: DashboardUserRole[]
    /** The effective permissions granted by the user's roles. */
    permissions: Permission[]
    __typename: 'CurrentUser'
}


/** A dashboard user (team member) within an account, with their assigned roles. */
export interface DashboardMember {
    /** The user's identity ID. */
    userId: Scalars['String']
    /**
     * The user's display name (from identity provider).
     * May be null if the identity could not be resolved.
     */
    name: (Scalars['String'] | null)
    /**
     * The user's email address (from identity provider).
     * May be null if the identity could not be resolved.
     */
    email: (Scalars['String'] | null)
    /** Roles assigned to this user in the account. */
    roles: DashboardUserRoleAssignment[]
    __typename: 'DashboardMember'
}


/** Roles assignable to dashboard users within an account. */
export type DashboardUserRole = 'OWNER' | 'ADMIN' | 'MANAGER' | 'CATALOGUER' | 'CLIENT_SERVICES' | 'VIEWER'


/** A role assigned to a dashboard user within an account. */
export interface DashboardUserRoleAssignment {
    /** The role assigned. */
    role: DashboardUserRole
    /** When this role was assigned. */
    assignedAt: Scalars['String']
    __typename: 'DashboardUserRoleAssignment'
}


/** Payload returned after deleting a sale. */
export interface DeleteSalePayload {
    saleId: Scalars['ID']
    __typename: 'DeleteSalePayload'
}


/** Department is an account-scoped grouping a sale can belong to. */
export interface Department {
    /** Id of the department. */
    id: Scalars['ID']
    /** Human-readable department name. */
    name: Scalars['String']
    /** URL-friendly slug. */
    slug: Scalars['String']
    __typename: 'Department'
}


/** A paginated connection of departments. */
export interface DepartmentConnection {
    edges: DepartmentEdge[]
    pageInfo: PageInfo
    __typename: 'DepartmentConnection'
}


/** An edge in a department connection. */
export interface DepartmentEdge {
    node: Department
    cursor: Scalars['String']
    __typename: 'DepartmentEdge'
}


/** The terminal non-auction sale of an item — an accepted offer or a buy-now. */
export interface DirectSell {
    /** Account that owns the sold item. */
    accountId: Scalars['String']
    /** Basta user id (`User.id`) of the buyer. */
    buyerId: Scalars['String']
    /** The user that bought the item, resolved from the direct sell's accountId and buyerId. */
    buyer: (UserInfo | null)
    /** Amount paid in minor currency units. */
    amount: Scalars['Int']
    /** ISO-4217 currency code. */
    currency: Scalars['String']
    /** How the sale was initiated. */
    source: DirectSellSource
    /** For an accepted offer, the offer_id; for a buy-now, a generated id for the direct sell. */
    referenceId: Scalars['String']
    /** When the sale was recorded (RFC3339). */
    timestamp: Scalars['String']
    __typename: 'DirectSell'
}


/** How a direct (non-auction) sale was initiated. */
export type DirectSellSource = 'OFFER' | 'BUY'


/** An Asset that is neither an image nor a video (PDF, Word, plain text, etc.). */
export interface Document {
    id: Scalars['String']
    accountId: Scalars['String']
    url: Scalars['String']
    contentType: Scalars['String']
    size: Scalars['Int']
    filename: Scalars['String']
    /** Optional client-assigned external identifier. */
    externalId: (Scalars['String'] | null)
    created: Scalars['String']
    modified: Scalars['String']
    __typename: 'Document'
}

export interface DutchBid {
    id: Scalars['ID']
    userId: Scalars['String']
    amount: Scalars['Int']
    quantityRequested: Scalars['Int']
    quantityAllocated: Scalars['Int']
    placedAt: Scalars['String']
    __typename: 'DutchBid'
}

export interface DutchBidConnection {
    edges: DutchBidEdge[]
    pageInfo: PageInfo
    __typename: 'DutchBidConnection'
}

export interface DutchBidEdge {
    cursor: Scalars['String']
    node: DutchBid
    __typename: 'DutchBidEdge'
}


/** Bid/pricing configuration for a Dutch item. */
export interface DutchItemConfig {
    pricingMode: DutchPricingMode
    maxBidsPerBidder: Scalars['Int']
    maxUnitsPerBidder: Scalars['Int']
    __typename: 'DutchItemConfig'
}


/** Lifecycle status of a Dutch item. */
export type DutchItemStatus = 'NOT_OPEN' | 'OPEN' | 'CLOSED'


/** A dated price drop: at RFC3339 time `at` the price becomes `price`. */
export interface DutchPriceDrop {
    at: Scalars['String']
    price: Scalars['Int']
    __typename: 'DutchPriceDrop'
}


/** How winners are priced when a Dutch item settles. */
export type DutchPricingMode = 'UNIFORM_CLEARING'


/** A Dutch (descending-clock) sale. Distinct from the English Sale type. */
export interface DutchSale {
    id: Scalars['ID']
    accountId: Scalars['String']
    title: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    currency: (Scalars['String'] | null)
    status: SaleStatus
    dates: SaleDates
    saleFormat: SaleFormat
    images: Image[]
    items: DutchSaleItemConnection
    __typename: 'DutchSale'
}


/** A multi-unit Dutch (descending-price) item. endTime is the closing time. */
export interface DutchSaleItem {
    id: Scalars['ID']
    saleId: Scalars['String']
    status: DutchItemStatus
    /** Total units offered for this lot, set at creation — the fixed maximum that can ever be accepted; not a live remaining count. */
    availableUnits: Scalars['Int']
    openTime: (Scalars['String'] | null)
    endTime: (Scalars['String'] | null)
    schedule: DutchSchedule
    config: DutchItemConfig
    title: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    images: Image[]
    bids: DutchBidConnection
    __typename: 'DutchSaleItem'
}

export interface DutchSaleItemConnection {
    edges: DutchSaleItemEdge[]
    pageInfo: PageInfo
    __typename: 'DutchSaleItemConnection'
}

export interface DutchSaleItemEdge {
    cursor: Scalars['String']
    node: DutchSaleItem
    __typename: 'DutchSaleItemEdge'
}


/** The opening price plus dated drops. The bidding window (openTime/endTime) lives on DutchSaleItem. */
export interface DutchSchedule {
    startingAmount: Scalars['Int']
    drops: DutchPriceDrop[]
    __typename: 'DutchSchedule'
}


/** Estimates for an item */
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


/** Facet count information for a field */
export interface FacetCount {
    /** The field name this facet represents (e.g., "trust_level", "id_verification_status") */
    fieldName: Scalars['String']
    /** Individual value counts for this field */
    counts: FacetValue[]
    /** Statistical information for numeric fields (optional) */
    stats: (FacetStats | null)
    __typename: 'FacetCount'
}


/** Statistical information for numeric facets */
export interface FacetStats {
    /** Average value */
    avg: (Scalars['Float'] | null)
    /** Maximum value */
    max: (Scalars['Float'] | null)
    /** Minimum value */
    min: (Scalars['Float'] | null)
    /** Sum of all values */
    sum: (Scalars['Float'] | null)
    /** Total number of values */
    totalValues: (Scalars['Int'] | null)
    __typename: 'FacetStats'
}


/** Individual facet value and its count */
export interface FacetValue {
    /** The facet value (e.g., "VERIFIED", "HIGH") */
    value: Scalars['String']
    /** Number of results with this value */
    count: Scalars['Int']
    /** Highlighted version of the value for display (optional) */
    highlighted: (Scalars['String'] | null)
    __typename: 'FacetValue'
}


/**
 * Determines how a fee rule is calculated. All brackets are evaluated against
 * the bid/order-line amount. A bracket is active when the bid/order-line amount
 * is strictly greater than lower_limit (amount > lower_limit, not >=).
 * 
 * FLAT: the bracket must fully contain the bid (lower_limit < amount <=
 * upper_lte_limit, or no upper_lte_limit). For Percentage fees the rate is
 * applied to the entire bid/order-line amount. For Amount fees the fixed charge
 * applies once when the bracket matches.
 * 
 * PROGRESSIVE: every bracket is evaluated independently. For Percentage fees
 * the rate applies only to the slice of the bid that falls within the bracket
 * (min(amount, upper_lte_limit) - lower_limit). For Amount fees the fixed
 * charge applies once whenever amount > lower_limit, regardless of upper_lte_limit.
 */
export type FeeCalculationType = 'FLAT' | 'PROGRESSIVE'

export interface FeeRule {
    /** ID of the fee rule record */
    id: Scalars['ID']
    /** Name of the fee rule which is used in orders */
    name: Scalars['String']
    /** Fee Rule type influences how the value is calculated */
    type: FeeRuleType
    /**
     * Value of the fee rule interpreted based on the type
     * * 500 means 5% if type is percentage
     * * 1000 means $10 if type is amount
     */
    value: Scalars['Int']
    /**
     * Upper limit of the fee rule.
     * If empty then there is no upper limit.
     */
    upperLteLimit: (Scalars['Int'] | null)
    /** Lower limit of the fee rule. */
    lowerLimit: Scalars['Int']
    /**
     * How this fee rule is calculated. FLAT applies the rate to the full amount.
     * PROGRESSIVE applies the rate only to the portion of the amount within each bracket
     * (defined by lowerLimit and upperLteLimit). For PERCENTAGE+PROGRESSIVE the rate is
     * applied to the taxable portion within the bracket. For AMOUNT+PROGRESSIVE the fixed
     * charge is applied once as soon as the transaction amount exceeds the bracket's
     * lowerLimit — it does not prorate or repeat up to upperLteLimit.
     */
    calculationType: FeeCalculationType
    /** Source indicates which level in the cascade hierarchy this fee originates from. */
    source: FeeRuleSource
    __typename: 'FeeRule'
}


/**
 * Indicates which level in the cascade hierarchy the fee originates from.
 * When querying effective fees, item-level overrides sale-level which overrides account-level.
 */
export type FeeRuleSource = 'ACCOUNT' | 'SALE' | 'ITEM'

export type FeeRuleType = 'NOT_SET' | 'PERCENTAGE' | 'AMOUNT'


/** A single field change within an activity. */
export interface FieldChange {
    field: Scalars['String']
    oldValue: (Scalars['JSON'] | null)
    newValue: (Scalars['JSON'] | null)
    __typename: 'FieldChange'
}

export interface GeoLocation {
    countryIsoCode: Scalars['String']
    countryName: Scalars['String']
    cityName: Scalars['String']
    latitude: Scalars['Float']
    longitude: Scalars['Float']
    timezone: Scalars['String']
    found: Scalars['Boolean']
    __typename: 'GeoLocation'
}

export interface GetItemInput {
    itemId: (Scalars['String'] | null)
    __typename: 'GetItemInput'
}


/** Information about the highest bid in a sale. */
export interface HighestBidInfo {
    /** Unique identifier for the bid. */
    bidId: Scalars['String']
    /** ID of the item that had the highest bid. */
    itemId: Scalars['String']
    /** The current bid amount (in minor currency). */
    currentAmount: Scalars['Int']
    /** The maximum bid amount (in minor currency). 0 for normal bids. */
    maxAmount: Scalars['Int']
    __typename: 'HighestBidInfo'
}


/** A connection wrapper for highlighted sale items. */
export interface HighlightedSaleItemConnection {
    /** The list of highlighted sale item edges. */
    edges: HighlightedSaleItemEdge[]
    __typename: 'HighlightedSaleItemConnection'
}


/** An edge in the highlighted sale items connection, pairing a sale item with its display position. */
export interface HighlightedSaleItemEdge {
    /** The sale item. */
    node: SaleItem
    /** Display position of the highlighted item (lower numbers appear first). */
    position: Scalars['Int']
    __typename: 'HighlightedSaleItemEdge'
}


/**
 * HttpHeader contains custom http request header information to be included in Action Hooks.
 * All Action Hooks are sent with the {"Content-Type": "application/json"} header by default.
 */
export interface HttpHeader {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'HttpHeader'
}


/** Image object */
export interface Image {
    /** ID of the image, UUID string */
    id: Scalars['String']
    /** Image URL */
    url: Scalars['String']
    /** DisplayOrder for image */
    order: Scalars['Int']
    /** Optional unique external identifier. */
    externalId: (Scalars['String'] | null)
    __typename: 'Image'
}

export type ImageAssociation = (SaleItemImageAssociation | ItemImageAssociation | SaleImageAssociation | AccountImageAssociation) & { __isUnion?: true }

export type ImageIdType = 'ID' | 'EXTERNAL_ID'

export type ImageType = 'ACCOUNT' | 'SALE' | 'ITEM' | 'SALE_ITEM' | 'PRODUCT' | 'PRODUCT_VARIANT' | 'COLLECTION'

export interface ImageWithAssociations {
    image: Image
    associations: ImageAssociation[]
    __typename: 'ImageWithAssociations'
}


/** Configuration for a notification sent in response to an event. */
export interface InstantNotificationConfiguration {
    /** Channel this configuration delivers on. */
    channel: NotificationChannel
    /**
     * Whether this configuration is currently sending. Change it with
     * `setNotificationConfigurationStatus`.
     */
    status: NotificationConfigurationStatus
    /** Branch on each entry's `saleType`, not on `saleTypeVarying`. */
    templates: NotificationTemplate[]
    /**
     * Sender used instead of the account's for this notification. Null means the
     * account's own sender is used. Email only.
     */
    sender: (NotificationEmailSender | null)
    /**
     * Reply-to used instead of the account's for this notification. Null means the
     * account's own is used. Email only.
     */
    replyToEmail: (Scalars['String'] | null)
    __typename: 'InstantNotificationConfiguration'
}

export interface Invoice {
    /** InvoiceId */
    invoiceId: Scalars['ID']
    /** ExternalID */
    externalID: Scalars['String']
    /** Due date in RFC3339 format */
    dueDate: Scalars['String']
    /** Link to the invoice */
    url: Scalars['String']
    __typename: 'Invoice'
}

export interface Item {
    /** Id of an item. */
    id: Scalars['ID']
    /** Cursor is used in pagination. */
    cursor: Scalars['String']
    /** Item title */
    title: (Scalars['String'] | null)
    /** Item sub-title */
    subTitle: (Scalars['String'] | null)
    /** Account ID */
    accountId: Scalars['String']
    /** Item description */
    description: (Scalars['String'] | null)
    /** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
    titleTemplateOverride: (Scalars['String'] | null)
    subTitleTemplateOverride: (Scalars['String'] | null)
    descriptionTemplateOverride: (Scalars['String'] | null)
    /** Item pricing information */
    price: (ItemPrice | null)
    /** Images attached to item */
    images: Image[]
    /** Unique external identifier, e.g. Warehouse id, inventory id, etc. */
    externalId: (Scalars['String'] | null)
    /** Tags */
    tags: Scalars['String'][]
    /**
     * @deprecated Use `itemType` and `attributes` instead.
     * Item Metadata
     */
    metadata: ItemMetadata
    /**
     * The item type this item is assigned to, if any. Its `effectiveSchema`
     * gives the field definitions.
     */
    itemType: (ItemType | null)
    /** The effective schema (field definitions) for this item's item type. */
    effectiveSchema: (Scalars['JSON'] | null)
    /** The item's filled-in field values, conforming to `effectiveSchema`. */
    attributes: (Scalars['JSON'] | null)
    /**
     * @deprecated Renamed to itemType.
     * The item type this item is assigned to, if any.
     */
    type: (ItemType | null)
    /**
     * @deprecated Renamed to effectiveSchema.
     * The effective schema (field definitions) for this item's item type.
     */
    schema: (Scalars['JSON'] | null)
    /** Item Notes. */
    itemNotes: ItemNoteConnection
    /**
     * @deprecated Use specificationsV2
     * Item specifications (dimensions, weight, type, etc.) - first specification only. Use specificationsV2 for full list.
     */
    specifications: (ItemSpecifications | null)
    /** Item specifications v2 (list with id, quantity, diameter, etc.) */
    specificationsV2: ItemSpecifications[]
    /** Item packaging (boxed dimensions and weight) */
    packaging: ItemPackaging[]
    /**
     * @deprecated Use price
     * Item estimate in minor currency unit.
     */
    estimates: Estimate
    /**
     * @deprecated Will be removed in the future
     * Valuation of the item in minor currency units.
     */
    valuationAmount: (Scalars['Int'] | null)
    /**
     * @deprecated Will be removed in the future
     * Valuation currency
     */
    valuationCurrency: (Scalars['String'] | null)
    /**
     * @deprecated Will be removed in the future
     * Sale Id, if the item is linked to a sale
     */
    saleId: (Scalars['String'] | null)
    /** Location of the item */
    location: (Scalars['String'] | null)
    /** Metafields associated with the item */
    metafields: Metafield[]
    /** Metafield associated with the item */
    metafield: (Metafield | null)
    /** The consignment this item belongs to, if any. */
    consignment: (Consignment | null)
    /** The site this item currently resides at, if any. */
    site: (Site | null)
    /** The location within its site this item currently resides at, if any. */
    siteLocation: (Location | null)
    /** Categories assigned to the item */
    categories: Category[]
    /** Creators assigned to the item */
    creators: Creator[]
    /**
     * Whether the Artist's Resale Right applies to this item. Follows the item's
     * creators unless arrOverride is set.
     */
    arr: Scalars['Boolean']
    /**
     * The value set directly on this item, if any. Null means the item follows its
     * creators.
     */
    arrOverride: (Scalars['Boolean'] | null)
    /** Marketplace product variants (buy-now items) linked to this inventory item. */
    productVariants: ProductVariantConnection
    /** Offer configuration for this item; null when the item does not accept offers. */
    offerConfig: (ItemOfferConfig | null)
    /** Offers placed on this item. */
    offers: OffersConnection
    /**
     * schemaData drift between this item and its targets. targetKind selects
     * sale items or product variants; omitted defaults to sale items.
     */
    contentDrift: ContentDiff[]
    /**
     * Everywhere this item's content is linked: auction sale items and
     * marketplace product variants.
     */
    links: ItemLinkConnection
    __typename: 'Item'
}


/**
 * Lightweight item projection for display in lists and banners, such as an offer row.
 * Does not include tags, metadata, schema, notes, specifications, or packaging; use the
 * item() query with the returned id to fetch the full Item.
 */
export interface ItemBanner {
    /** Item ID */
    id: Scalars['ID']
    /** Account ID */
    accountId: Scalars['String']
    /** Item title */
    title: (Scalars['String'] | null)
    /** Item description */
    description: (Scalars['String'] | null)
    /** Images attached to the item */
    images: Image[]
    /** Item pricing information */
    price: (ItemPrice | null)
    /** Unique external identifier, e.g. warehouse id, inventory id. */
    externalId: (Scalars['String'] | null)
    /** Item location */
    location: (Scalars['String'] | null)
    __typename: 'ItemBanner'
}


/**
 * Per-item buy-now configuration. A missing config (or enabled = false) means the
 * item cannot be bought outright.
 */
export interface ItemBuyNowConfig {
    itemId: Scalars['String']
    accountId: Scalars['String']
    enabled: Scalars['Boolean']
    /** Buy-now price in minor currency units. */
    price: Scalars['Int']
    /** Buy-now price currency (ISO-4217). */
    currency: Scalars['String']
    /** When the config was last set (RFC3339); null when never set. */
    setAt: (Scalars['String'] | null)
    __typename: 'ItemBuyNowConfig'
}

export interface ItemDates {
    /** UTC+0 RFC3339 formatted date and time when item will open. */
    openDate: (Scalars['String'] | null)
    /** UTC+0 RFC3339 formatted date and time when item will start closing (start of sniping period). */
    closingStart: (Scalars['String'] | null)
    /**
     * UTC+0 RFC3339 formatted date and time when item should move to status CLOSED.
     * This property is extend each time a bid is received during sniping.
     * Sniping is defined as the period between closingStart and closingEnd.
     */
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


/** Configuration for highlighting a sale item on the sale page. */
export interface ItemHighlight {
    /** Whether the item is highlighted. */
    enabled: Scalars['Boolean']
    /** Display position of the highlighted item (lower numbers appear first). */
    position: Scalars['Int']
    __typename: 'ItemHighlight'
}

export interface ItemImageAssociation {
    /** The ID of the associated item */
    itemId: Scalars['String']
    __typename: 'ItemImageAssociation'
}


/**
 * A link from this item to a downstream target — an auction sale item or a
 * marketplace product variant.
 */
export type ItemLink = (SaleItemLink | ProductVariantLink) & { __isUnion?: true }


/** A non-paginated collection of an item's downstream links. */
export interface ItemLinkConnection {
    edges: ItemLinkEdge[]
    __typename: 'ItemLinkConnection'
}

export interface ItemLinkEdge {
    node: ItemLink
    __typename: 'ItemLinkEdge'
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


/** Custom data defined by each account */
export interface ItemMetadata {
    /** Data */
    data: (Scalars['JSON'] | null)
    /** JSON Schema */
    schema: (Scalars['JSON'] | null)
    /** Schema ID */
    schemaId: (Scalars['ID'] | null)
    __typename: 'ItemMetadata'
}

export interface ItemNote {
    /** ID */
    id: Scalars['ID']
    /** Note */
    note: Scalars['String']
    /** UserID */
    userId: Scalars['String']
    /** The user that wrote the note */
    user: UserInfo
    /** Created time */
    created: Scalars['String']
    __typename: 'ItemNote'
}

export interface ItemNoteConnection {
    /** ItemNote edges */
    edges: ItemNoteEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'ItemNoteConnection'
}

export interface ItemNoteEdge {
    /** Current ItemNote Cursor */
    cursor: Scalars['String']
    /** ItemNote node */
    node: ItemNote
    __typename: 'ItemNoteEdge'
}

export type ItemNotification = (ItemMessageNotification | ItemFairWarningNotification | ItemOfferPlacedNotification | ItemSoldNotification) & { __isUnion?: true }


/**
 * Per-item offer configuration. A missing config (or enabled = false) means the
 * item does not accept offers.
 */
export interface ItemOfferConfig {
    itemId: Scalars['String']
    accountId: Scalars['String']
    enabled: Scalars['Boolean']
    /** Auto-accept threshold in minor currency units; null = no auto-accept. */
    autoAcceptAmount: (Scalars['Int'] | null)
    /** Auto-accept threshold currency (ISO-4217); null iff autoAcceptAmount is null. */
    autoAcceptCurrency: (Scalars['String'] | null)
    /** Default TTL in seconds applied to offers on this item; null = no expiry. */
    offerTtlSeconds: (Scalars['Int'] | null)
    /** When the config was created (RFC3339). */
    created: Scalars['String']
    /** When the config was last modified (RFC3339). */
    modified: Scalars['String']
    __typename: 'ItemOfferConfig'
}

export interface ItemOfferPlacedNotification {
    /** Id of the notification */
    id: Scalars['String']
    /** Offer amount in minor currency units. */
    amount: Scalars['Int']
    /** ISO-4217 currency code. */
    currency: Scalars['String']
    /** Basta user id (`User.id`) of the buyer. */
    buyerId: Scalars['String']
    /**
     * offer_id of the placed offer. Match against ItemSoldNotification.referenceId
     * to know which offer became the sale.
     */
    referenceId: Scalars['String']
    /**
     * Date timestamp when the offer was placed.
     * RFC3339 formatted string
     */
    date: Scalars['String']
    __typename: 'ItemOfferPlacedNotification'
}

export type ItemOrderField = 'ITEM_NUMBER' | 'CREATED'


/** Item packaging: boxed dimensions and weight for shipping. */
export interface ItemPackaging {
    /** Unique identifier for the packaging record */
    id: Scalars['String']
    /** Quantity of this packaging configuration */
    quantity: Scalars['Int']
    /** Boxed height */
    boxedHeight: (Scalars['Float'] | null)
    /** Boxed length */
    boxedLength: (Scalars['Float'] | null)
    /** Boxed depth */
    boxedDepth: (Scalars['Float'] | null)
    /** Unit of measurement for boxed dimensions */
    boxedMeasurementUnit: (MeasurementUnit | null)
    /** Boxed weight */
    boxedWeight: (Scalars['Float'] | null)
    /** Unit of measurement for boxed weight */
    boxedWeightUnit: (WeightUnit | null)
    /** When the packaging was created (RFC3339) */
    created: Scalars['String']
    /** When the packaging was last modified (RFC3339) */
    modified: Scalars['String']
    __typename: 'ItemPackaging'
}


/** Item pricing information */
export interface ItemPrice {
    /** Currency for pricing information */
    currency: Currency
    /** Reserve in minor currency */
    reserve: Scalars['Int']
    /** Starting bid in minor currency */
    startingBid: Scalars['Int']
    /** Item low estimate */
    lowEstimate: (Scalars['Int'] | null)
    /** Item high estimate */
    highEstimate: (Scalars['Int'] | null)
    /** Reserve type for the item. */
    reserveType: (ReserveType | null)
    __typename: 'ItemPrice'
}


/** Result of an item after it has been sold or passed by the auctioneer. */
export type ItemResult = 'NOT_SET' | 'WON' | 'WON_UNDER_THE_RESERVE' | 'PASSED_OVER_THE_RESERVE' | 'PASSED'

export interface ItemSchema {
    schema: Scalars['JSON']
    metadataSchema: Scalars['JSON']
    __typename: 'ItemSchema'
}

export interface ItemSoldNotification {
    /** Id of the notification */
    id: Scalars['String']
    /** Sold amount in minor currency units. */
    amount: Scalars['Int']
    /** ISO-4217 currency code. */
    currency: Scalars['String']
    /** How the sale was initiated. */
    source: DirectSellSource
    /** Basta user id (`User.id`) of the buyer. */
    buyerId: Scalars['String']
    /**
     * For an accepted offer, the offer_id; when the offer was placed pending, this matches that
     * offer's ItemOfferPlacedNotification.referenceId. For a buy-now, a generated id for the direct sell.
     */
    referenceId: Scalars['String']
    /**
     * Date timestamp when the item was sold.
     * RFC3339 formatted string
     */
    date: Scalars['String']
    __typename: 'ItemSoldNotification'
}


/** Item specifications containing dimensions, weight, type, etc. */
export interface ItemSpecifications {
    /** Unique identifier for the specification */
    id: Scalars['String']
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
    /** Diameter of the item */
    diameter: (Scalars['Float'] | null)
    /** Unit of measurement for dimensions */
    measurementUnit: (MeasurementUnit | null)
    /** Weight of the item */
    weight: (Scalars['Float'] | null)
    /** Unit of measurement for weight */
    weightUnit: (WeightUnit | null)
    /** Quantity */
    quantity: Scalars['Int']
    /** When the specification was created (RFC3339) */
    created: Scalars['String']
    /** When the specification was last modified (RFC3339) */
    modified: Scalars['String']
    __typename: 'ItemSpecifications'
}


/** Item statuses for items in a sale */
export type ItemStatus = 'ITEM_NOT_OPEN' | 'ITEM_OPEN' | 'ITEM_CLOSING' | 'ITEM_PROCESSING' | 'ITEM_CLOSED' | 'ITEM_PAUSED' | 'ITEM_LIVE'

export interface ItemType {
    id: Scalars['ID']
    accountId: Scalars['String']
    name: Scalars['String']
    /** Globally unique namespace used to build search filter paths for this item type's properties. */
    namespace: Scalars['String']
    schema: Scalars['JSON']
    parentId: (Scalars['String'] | null)
    createdAt: Scalars['String']
    modifiedAt: Scalars['String']
    effectiveSchema: Scalars['JSON']
    /** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
    titleTemplate: (Scalars['String'] | null)
    subTitleTemplate: (Scalars['String'] | null)
    descriptionTemplate: (Scalars['String'] | null)
    /**
     * The charges that apply to lots of this item type, already restated for it.
     * Falls back to the account when this item type does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges: ChargeConnection
    __typename: 'ItemType'
}


/** An edge in an item types connection. */
export interface ItemTypeEdge {
    node: ItemType
    cursor: Scalars['String']
    __typename: 'ItemTypeEdge'
}


/** A paginated connection of item types. */
export interface ItemTypesConnection {
    edges: ItemTypeEdge[]
    pageInfo: PageInfo
    __typename: 'ItemTypesConnection'
}

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
    item: SaleItem
    cursor: Scalars['String']
    __typename: 'LiveItem'
}

export type LiveStream = (ExternalLiveStream | BastaLiveStream) & { __isUnion?: true }


/** LiveStreamType represents the type of live stream */
export type LiveStreamType = 'GENERIC' | 'AMAZON_IVS' | 'YouTubeLive' | 'BASTA_LIVE'


/**
 * A place within a Site, up to 2 levels deep. A top-level location has no parent; a
 * level-2 location's parent is a top-level location in the same site.
 */
export interface Location {
    /** Id of the location. */
    id: Scalars['ID']
    /** Account the location belongs to. */
    accountId: Scalars['String']
    /** The site this location belongs to. */
    site: Site
    /** The parent location, or null when this is a top-level location. */
    parent: (Location | null)
    /** The child locations directly under this location. */
    children: Location[]
    /** Location name. */
    name: Scalars['String']
    /** When the location was archived (RFC3339), or null when active. */
    archivedAt: (Scalars['String'] | null)
    /** When the location was created (RFC3339). */
    created: Scalars['String']
    /** When the location was last modified (RFC3339). */
    modified: Scalars['String']
    /** Id of the user that created the location. */
    createdByUserId: Scalars['String']
    /** Id of the user that last modified the location. */
    modifiedByUserId: (Scalars['String'] | null)
    __typename: 'Location'
}

export interface LocationConnection {
    /** Location edges. */
    edges: LocationEdge[]
    /** Current page information. */
    pageInfo: PageInfo
    __typename: 'LocationConnection'
}

export interface LocationEdge {
    /** Current location cursor. */
    cursor: Scalars['String']
    /** Location node. */
    node: Location
    __typename: 'LocationEdge'
}

export interface MailingAddress {
    /** Address ID */
    id: Scalars['String']
    /** Name */
    name: Scalars['String']
    /** Company */
    company: Scalars['String']
    /** Phone */
    phone: Scalars['String']
    /** Line 1 */
    line1: Scalars['String']
    /** Line 2 */
    line2: Scalars['String']
    /** City */
    city: Scalars['String']
    /** State */
    state: Scalars['String']
    /** Postal code */
    postalCode: Scalars['String']
    /** Country */
    country: Country
    /** Is this the primary address for this type */
    isPrimary: Scalars['Boolean']
    /** Type of address (shipping, billing) */
    addressType: AddressType
    /** Label */
    label: (Scalars['String'] | null)
    __typename: 'MailingAddress'
}


/** ISO 4217 currency codes supported by the marketplace. */
export type MarketplaceCurrencyCode = 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW' | 'ZWL'


/** Measurement unit enum */
export type MeasurementUnit = 'NOT_SET' | 'CM' | 'INCH'


/** Object for a metafield */
export interface Metafield {
    id: Scalars['String']
    key: Scalars['String']
    value: Scalars['String']
    valueType: MetafieldValueType
    entityType: MetafieldEntityType
    __typename: 'Metafield'
}


/** Enum for the type of entity a metafield is connected to */
export type MetafieldEntityType = 'METAFIELD_ENTITY_TYPE_SALE' | 'METAFIELD_ENTITY_TYPE_ITEM' | 'METAFIELD_ENTITY_TYPE_SALE_ITEM' | 'METAFIELD_ENTITY_TYPE_ACCOUNT'


/** Enum for the value type of a metafield */
export type MetafieldValueType = 'METAFIELD_VALUE_TYPE_SINGLE_LINE_TEXT' | 'METAFIELD_VALUE_TYPE_RICH_TEXT'

export interface Mutation {
    /** Update Account */
    updateAccount: Account
    /** Enable or disable countries for the account. Returns the refreshed country list. */
    setAccountCountriesEnabled: CountryInfo[]
    /** Set a country's AML risk class for the account. Returns the refreshed country list. */
    setAccountCountryAmlRiskClass: CountryInfo[]
    /**
     * Set the per-account auction symbol glyphs for ARR / VAT / CITES.
     * Replaces all glyphs at once; an empty glyph clears that symbol.
     */
    setAuctionSymbols: Account
    /** Create a sale */
    createSale: Sale
    /** Create a Dutch sale */
    createDutchSale: DutchSale
    /**
     * Update a Dutch sale's content (title / description).
     * null leaves a field unchanged; empty string clears it.
     */
    updateDutchSale: DutchSale
    /** Update a sale */
    updateSale: Sale
    /**
     * Attach one or more departments to a sale (add-only; already-assigned
     * departments are ignored). Returns the updated sale.
     */
    addSaleDepartments: Sale
    /** Remove a single department from a sale. Returns the updated sale. */
    removeSaleDepartment: Sale
    /**
     * Create a department for an account. The slug is derived from the name
     * when omitted; supply slug to override it. Returns the created department.
     */
    createDepartment: Department
    /** Rename an existing department. Returns the updated department. */
    updateDepartment: Department
    /**
     * Soft-delete a department. The record is retained and can be brought back
     * with restoreDepartment. Returns the deleted department.
     */
    deleteDepartment: Department
    /** Restore a previously soft-deleted department. Returns the restored department. */
    restoreDepartment: Department
    /**
     * Create an auction genre for an account. The slug is derived from the name
     * when omitted; supply slug to override it. Returns the created auction genre.
     */
    createSaleGenre: SaleGenre
    /**
     * Update an existing auction genre's name and visibility. Returns the updated
     * auction genre.
     */
    updateSaleGenre: SaleGenre
    /**
     * Archive an auction genre. The record is retained and can be brought back
     * with restoreSaleGenre. Returns the archived auction genre.
     */
    archiveSaleGenre: SaleGenre
    /** Restore a previously archived auction genre. Returns the restored auction genre. */
    restoreSaleGenre: SaleGenre
    /**
     * Hard-delete an auction genre. Rejected when the genre is assigned to any
     * sale. Returns the deleted auction genre.
     */
    deleteSaleGenre: SaleGenre
    /**
     * Create or edit a section marker on a sale. Omit input.id to create; supply a
     * known id to edit in place. Returns the updated sale.
     */
    setSectionMarker: Sale
    /** Remove a section marker from a sale by id. Returns the updated sale. */
    removeSectionMarker: Sale
    /** Set or update the sale slug (pretty URL) for a sale. Creates if none exists; updates otherwise. */
    setSaleSlug: SaleSlug
    /** Set or update the sale item slug (pretty URL) for an item in a sale. Creates if none exists; updates otherwise. */
    setSaleItemSlug: SaleItemSlug
    /** Open a sale, non forcefully. */
    openSale: Sale
    /** Close a sale, non forcefully. */
    closeSale: Sale
    /** Set Sale State unforcefully */
    setSaleStatus: Sale
    /** Start to close the sale, non forcefully */
    startClosingSale: Sale
    /** Open a sale, forcefully. */
    forceOpenSale: Sale
    /** Close a sale, forcefully. */
    forceCloseSale: Sale
    /** Start to close the sale, forcefully */
    forceStartClosingSale: Sale
    /** Publish a sale, forcefully. */
    publishSale: Sale
    /** Delete a sale permanently. */
    deleteSale: DeleteSalePayload
    /** Create item. This operation will create a standalone item that is not part of a sale. */
    createItem: Item
    /** Update item. This will update information about items for all sales that has not been closed. */
    updateItem: Item
    /** Add specifications to an existing item. */
    addSpecifications: ItemSpecifications[]
    /** Create a consignment. */
    createConsignment: Consignment
    /** Update a consignment. Replaces the whole record: a field left out is cleared. */
    updateConsignment: Consignment
    /** Delete a consignment. Rejected if items are still linked to it. */
    deleteConsignment: Consignment
    /** Link an item to a consignment. */
    setItemConsignment: Item
    /** Clear an item's consignment link. No-op if the item is not linked. */
    clearItemConsignment: Item
    /** Create a site. */
    createSite: Site
    /** Update a site. Replaces the whole record: a field left out is cleared. */
    updateSite: Site
    /** Archive a site, hiding it from default lists while keeping existing item references. */
    archiveSite: Site
    /** Unarchive a previously archived site. */
    unarchiveSite: Site
    /** Delete a site. Rejected if any item still references it, or if it has any locations. */
    deleteSite: Site
    /** Create a location under a site. */
    createLocation: Location
    /** Update a location. Replaces the whole record: a field left out is cleared. */
    updateLocation: Location
    /** Archive a location, hiding it from default lists while keeping existing item references. */
    archiveLocation: Location
    /** Unarchive a previously archived location. */
    unarchiveLocation: Location
    /** Delete a location. Rejected if any item still references it, or if it has any child locations. */
    deleteLocation: Location
    /** Set an item's site and location. The location must belong to the given site. */
    setItemSiteLocation: Item
    /** Clear an item's site and location. No-op if the item has none set. */
    clearItemSiteLocation: Item
    /** Add one or more consignors to a consignment. Existing consignors are ignored. */
    addConsignors: Consignment
    /** Remove one or more consignors from a consignment. Removing all is allowed. */
    removeConsignors: Consignment
    /** Set the main consignor for a consignment (auto-adds the user if needed). */
    setMainConsignor: Consignment
    /**
     * Add one or more staff (team members) to a consignment. Ids already on the staff
     * set are ignored. When the consignment has no staff yet, one of the added members
     * becomes the lead.
     */
    addConsignmentStaff: Consignment
    /**
     * Remove one or more staff from a consignment. Removing all is allowed, and
     * removing the current lead promotes one of the remaining members in its place.
     */
    removeConsignmentStaff: Consignment
    /** Set the lead staff member for a consignment (auto-adds the user if needed). */
    setConsignmentStaffLead: Consignment
    /** Enable/disable offers on an item and set or clear its auto-accept threshold. */
    setItemOfferConfig: ItemOfferConfig
    /**
     * Enable/disable buy-now on a sale item and set its fixed price. Returns the
     * updated sale item.
     */
    setItemBuyNowConfig: SaleItem
    /**
     * Buy an item outright on behalf of a buyer at its fixed buy-now price. This is a
     * terminal action: it closes the sale item, marks it sold, and creates a payments
     * order. The buyer is taken from input.buyerUserId; the acting admin is never the
     * buyer. Returns the updated sale item.
     */
    buyItem: SaleItem
    /** Accept a pending offer as an admin. */
    acceptOffer: Offer
    /** Reject a pending offer as an admin. */
    rejectOffer: Offer
    /** Counter a pending offer as the seller with a new amount. */
    counterOffer: Offer
    /** Add packaging to an existing item. */
    addPackaging: ItemPackaging[]
    /** Update a single specification by id. */
    updateSpecification: Item
    /** Update a single packaging record by id. */
    updatePackaging: Item
    /** Remove specifications from an item. Empty or omitted specificationIds removes none (item unchanged). */
    removeSpecifications: Item
    /** Remove packaging from an item. Empty or omitted packagingIds removes none (item unchanged). */
    removePackaging: Item
    /** Update ItemNumbers input */
    updateItemNumbers: Sale
    /** Create item and add to a sale. This operation will automatically create an item and add it to the sale. */
    createItemForSale: SaleItem
    /** Create a Dutch item in a sale */
    createDutchItemForSale: DutchSaleItem
    /** Update the sale properties of a Dutch item. */
    updateDutchSaleItem: DutchSaleItem
    /** Add a currently existing item to a sale. */
    addItemToSale: SaleItem
    /** Update item associated with a sale. */
    updateItemForSale: SaleItem
    /**
     * Reconcile content drift between an inventory item and one of its sale items in the
     * given direction. Returns the recomputed diff. Both directions are treated as
     * sale-scoped edits gated on WRITE_SALE; PROMOTE_TO_ITEM writes the item under that
     * same grant.
     */
    syncContent: ContentDiff
    /**
     * @deprecated use syncContent with direction REFRESH_FROM_ITEM
     * Copy schemaData (and schemaId) from an inventory item to one of its sale items. Returns the recomputed diff.
     */
    syncSchemaDataToSaleItem: ContentDiff
    /**
     * @deprecated use syncContent with direction PROMOTE_TO_ITEM
     * Copy public schemaData from one of an item's sale items back onto the inventory item. Returns the recomputed diff.
     */
    syncSchemaDataFromSaleItem: ContentDiff
    /** Copy schemaData (and schemaId) from an inventory item to one of its product variants. Returns the recomputed diff. */
    syncSchemaDataToProductVariant: ContentDiff
    /**
     * Reorder highlighted items for a sale. Atomically updates positions for all
     * highlighted items based on the order of item IDs in the input.
     * Returns the updated highlighted items connection.
     */
    reorderHighlightedItems: HighlightedSaleItemConnection
    /**
     * @deprecated not supported
     * Sets sale item winner. Marks bid as won and closes item. Used in offer model.
     */
    setItemWinner: SaleItem
    /** Sets sale item status. Used in offer model to close item with no winner. */
    setSaleItemStatus: SaleItem
    /** Remove an item from the sale. This will not delete the item completely. */
    removeItemFromSale: Sale
    /** Create an API key, that can access all functions in the API on behalf of the account. */
    createApiKey: ApiKeyCreated
    /** Revoke the API key by id. */
    revokeApiKey: Scalars['Boolean']
    /**
     * @deprecated Use createApiKey mutation
     * DEPRECATED.
     * Create an API key, that can access all functions in the API on behalf of the logged in customer.
     */
    createApiToken: ApiTokenCreated
    /**
     * @deprecated Use revokeApiKey mutation
     * DEPRECATED.
     * Revoke the API key by id.
     */
    revokeApiToken: Scalars['Boolean']
    /** Bid on behalf of a user */
    bidOnBehalf: Bid
    /**
     * @deprecated Use bidOnBehalf with type as MAX
     * Max bid on behalf of a user
     */
    maxBidOnBehalf: Bid
    /** Cancel the latest bid on item (including reactive bids that were placed as a side-effect) */
    cancelLatestBidOnItem: CanceledLatestBidOnItem
    setUserIdOnBid: Bid
    /** Create and sign a token that can be used to bid on behalf of a user (unique user id needs to be provided) */
    createBidderToken: BidderToken
    /**
     * Will replace createBidderToken(accountId: String!, input: BidderTokenInput!): BidderToken!
     * Only accessible for SDK users at the moment
     */
    createUserTokenV2: UserToken
    /** Add action hook subscription */
    addActionHookSubscription: ActionHookSubscription
    /** Update action hook subscription */
    updateActionHookSubscription: ActionHookSubscription
    /** Delete action hook subscription */
    deleteActionHookSubscription: Scalars['Boolean']
    /** Retry action hook log */
    retryActionHook: ActionHookLog
    /** Test ActionHook configuration. This will trigger an action hook to be sent. */
    testActionHook: TestActionHookResponse
    /**
     * Onboard Basta Sellers onto supported payment provider/s.
     * Not available for integrating applications.
     */
    onboardPaymentAccount: OnboardPaymentAccountResponse
    /**
     * If payment provider onboarding was not finished then this mutation can be called to regenerate onboarding link.
     * Not available for integration applications. Only accesible via admin.
     */
    continueOnboardPaymentAccount: OnboardPaymentAccountResponse
    /**
     * Not available for integrating applications.
     * Accepts seller terms on behalf of account.
     * Returns a RFC399 timestamp of when seller terms were accepted.
     */
    acceptTerms: Scalars['String']
    /**
     * Create Item Image.
     * Method only available through admin.
     */
    createItemImage: Image[]
    /**
     * @deprecated Use reorderImages mutation
     * Reorder item images.
     * Method only available through admin.
     */
    reorderItemImages: Image[]
    /**
     * Reorder images based on type.
     * Method only available through admin.
     */
    reorderImages: Image[]
    /**
     * @deprecated Use deleteImage mutation
     * Delete item image.
     * Method only available through admin.
     */
    deleteItemImage: Image[]
    /**
     * Delete image associations and remove the image.
     * Method only available through admin.
     * 
     * If ImageTypes are specified:
     *   - Validates that required IDs (saleID/itemID) are provided for the specified types
     *   - Removes associations for the specified types (Account, Sale, Item, or SaleItem)
     * 
     * If ImageTypes is empty/nil:
     *   - Removes all associations for the image (Account, Sale, Item, and SaleItem)
     *   - Removes the image record
     *   - This completely removes an image from the system
     */
    deleteImage: Image[]
    /** Add paddle to sale. */
    addPaddleToSale: Paddle[]
    /** Remove paddle from sale. */
    removePaddleFromSale: Paddle[]
    /** Register user to sale. */
    registerUserPaddle: Paddle[]
    /**
     * Update user profile, including addresses, phones, metadata, and verification.
     * This mutation will upsert the user if they don't exist.
     */
    updateUser: UserInfo
    /**
     * Set a user's notification preferences. Only the entries given are changed.
     * The returned list covers what the account sends on, so an entry outside it is
     * stored but not returned.
     */
    setUserNotificationPreferences: UserNotificationPreference[]
    /** Create or update a new address for a user */
    upsertUserAddress: MailingAddress
    /** Create or update a new phone for a user */
    upsertUserPhone: PhoneAddress
    /** Delete a user address */
    deleteUserAddress: Scalars['Boolean']
    /** Delete a user phone */
    deleteUserPhone: Scalars['Boolean']
    /** Add notification to an item */
    addMessageNotificationToItem: SaleItem
    /** Add fair warning notification to an item */
    addFairWarningNotificationToItem: SaleItem
    /** Add live stream to a sale, this operation is idempotent. */
    addLiveStreamToSale: LiveStream
    /** Delete live stream from a sale */
    deleteLiveStreamFromSale: Scalars['Boolean']
    /** Add tag to an item */
    addTagToItem: Tag
    /** Remove tag from an item */
    removeTagFromItem: Scalars['Boolean']
    /** Add tag to a sale item */
    addTagToSaleItem: Tag
    /** Remove tag from a sale item */
    removeTagFromSaleItem: Scalars['Boolean']
    /** Add tag to a user */
    addTagToUser: Tag
    /** Remove tag from a user */
    removeTagFromUser: Scalars['Boolean']
    /** Block a user from participating in sales */
    blockUser: User
    /** Unblock a user, allowing them to participate in sales again */
    unblockUser: User
    /** Assign a user's external id (user_id). Write-once: fails if it is already set. */
    setUserExternalId: User
    createItemNote: ItemNote
    /** CreateUploadUrl */
    createUploadUrl: UploadUrl
    /**
     * Request a signed URL for uploading a new asset. The client PUTs the file
     * bytes to the returned uploadUrl; the asset becomes fetchable once the
     * upload completes.
     */
    createAssetUploadUrl: AssetUploadUrl
    /**
     * Link an existing image (by Basta image id) to one or more resources without re-uploading.
     * Returns NOT_FOUND if the image does not exist.
     * Returns FAILED_PRECONDITION if the image is still uploading.
     * Idempotent: re-linking an existing connection is a no-op.
     */
    linkImageById: ImageWithAssociations
    /**
     * Link an existing image (by client-assigned externalId) to one or more resources without re-uploading.
     * Same error semantics as linkImageById.
     */
    linkImageByExternalId: ImageWithAssociations
    /** Create a new item type for an account, optionally as a child of another item type. */
    createItemType: ItemType
    /** Partially update an existing item type. Only the fields present in `input` are updated. */
    updateItemType: ItemType
    /**
     * Reorder an item type's children (or the root item types when `parentId` is null).
     * The complete, ordered set of the parent's child IDs must be supplied; a type's
     * position in the list becomes its order. Rejects a partial/mismatched set.
     */
    reorderItemTypes: ItemType[]
    /**
     * @deprecated Renamed to createItemType.
     * Deprecated alias for createItemType. Kept for backward compatibility.
     */
    createSchema: ItemType
    /**
     * @deprecated Renamed to updateItemType.
     * Deprecated alias for updateItemType. Kept for backward compatibility
     * (the id arg is still named schemaId here; use updateItemType's itemTypeId).
     */
    updateSchema: ItemType
    /** Update increment table globally for a sale, this will update all items in the sale. */
    updateGlobalIncrementTable: Sale
    /** Update dates globally for a sale, this will update all items in the sale. */
    updateGlobalDates: Sale
    /** Update closing time countdown globally for a sale, this will update all items in the sale. */
    updateGlobalClosingTimeCountdown: Sale
    /**
     * PassLiveItem. Mutation only available with valid session cookie.
     * Moves item to status processing and raises the reserve if it has been met.
     * Only works on "LIVE" sale type
     */
    passLiveItem: SaleItem
    /**
     * SellLiveItem. Mutation only available with valid session cookie.
     * Moves item to status processing and lowers the reserve if it has not been met.
     * Only works on "LIVE" sale type
     */
    sellLiveItem: SaleItem
    /**
     * sellLiveItemToBid is like sellLiveItem but pins the bid id the caller
     * intends to sell to. Only works on items in "ITEM_LIVE" status in sales of
     * type "LIVE". Returns a typed error if the pinned bid is not on the item or
     * is not the current leader, so the UI can recover without polling.
     */
    sellLiveItemToBid: SellLiveItemToBidResult
    /** Hide items from a sale from a given item number onwards */
    hideItemsFromSale: Scalars['Int']
    /** Unhide items from a sale from a given item number onwards */
    unhideItemsFromSale: Scalars['Int']
    /**
     * Connect a a shopify store to an account.
     * Only applicable accounts will work when connecting to shopify.
     */
    connectShopifyToAccount: ShopifyConnection
    /**
     * @deprecated Use createOrder mutation
     * Create a payment order
     */
    createPaymentOrder: PaymentOrder
    /** Create an order */
    createOrder: PaymentOrder
    /** Create an order line for a payment order */
    createOrderLine: OrderLine
    /** Update an order line for a payment order */
    updateOrderLine: OrderLine
    /** Delete an order line for a payment order */
    deleteOrderLine: OrderLine
    /**
     * @deprecated Use updateOrder mutation
     * Update a payment order
     */
    updatePaymentOrder: PaymentOrder
    /** Update an order */
    updateOrder: PaymentOrder
    /**
     * @deprecated Use cancelPaymentOrder mutation
     * Delete a payment order, this will cancel order.
     */
    deletePaymentOrder: PaymentOrder
    /** Cancel a payment order */
    cancelPaymentOrder: PaymentOrder
    /** Publish a payment order */
    publishPaymentOrder: PaymentOrder
    /** Create Invoice for order */
    createInvoice: Invoice
    /** Create a payment for an order */
    createPayment: Payment
    /** Create an account fee */
    createAccountFee: AccountFee
    /** Update an account fee */
    updateAccountFee: AccountFee
    /** Delete an account fee */
    deleteAccountFee: Scalars['ID']
    /** Create a sale-level fee rule for a specific sale. */
    createSaleFee: FeeRule
    /** Update a sale-level fee rule. */
    updateSaleFee: FeeRule
    /** Delete a sale-level fee rule. */
    deleteSaleFee: Scalars['ID']
    /** Reset sale fees to the account defaults, discarding any customizations. */
    resetSaleFees: FeeRule[]
    /** Create an item-level fee rule for a specific sale item. */
    createSaleItemFee: FeeRule
    /** Update an item-level fee rule. */
    updateSaleItemFee: FeeRule
    /** Delete an item-level fee rule. */
    deleteSaleItemFee: Scalars['ID']
    /** Create a sale registration */
    createSaleRegistration: SaleRegistration
    /** Accept a sale registration */
    acceptSaleRegistration: SaleRegistration
    /** Reject a sale registration */
    rejectSaleRegistration: SaleRegistration
    /** Delete a sale registration */
    deleteSaleRegistration: Scalars['ID']
    /** Create a sale item registration */
    createSaleItemRegistration: SaleItemRegistration
    /** Delete a sale item registration */
    deleteSaleItemRegistration: Scalars['ID']
    /** Create a sale registration policy */
    createSaleRegistrationPolicy: SaleRegistrationPolicy
    /** Update a sale registration policy */
    updateSaleRegistrationPolicy: SaleRegistrationPolicy
    /** Attach policies to sale */
    attachSaleRegistrationPolicies: SaleRegistrationPolicy[]
    /** Detach policies from sale */
    detachSaleRegistrationPolicies: SaleRegistrationPolicy[]
    /**
     * Set one or more metafields (create or update),
     * you can at most set 10 metafields at a time for a single entity.
     */
    setMetafields: Metafield[]
    /** Delete a metafield */
    deleteMetafield: Scalars['Boolean']
    /**
     * Returns session credentials for selected payment provider for a specific user, e.g. Stripe Customer Session
     * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access control over a Customer.
     */
    createUserPaymentProviderSession: UserPaymentProviderSession
    /** Returns session credentials for the payment provider for an account, e.g. Stripe Account Session. */
    createPaymentProviderSession: PaymentProviderSession
    /**
     * Add a role to a dashboard user in the account.
     * If the user already has this role, the operation is idempotent.
     */
    addDashboardUserRole: DashboardUserRoleAssignment[]
    /**
     * Remove a role from a dashboard user in the account.
     * Cannot remove the last OWNER from an account.
     */
    removeDashboardUserRole: DashboardUserRoleAssignment[]
    /**
     * Associate a user to the account.
     * Assigns a default OWNER role unless a specific role is provided.
     */
    associateUserToAccount: DashboardMember
    /**
     * Disassociate a user from the account.
     * Removes all their roles and the account association.
     * Cannot disassociate the last OWNER.
     */
    disassociateUserFromAccount: Scalars['Boolean']
    /** Create a new category. */
    createCategory: Category
    /** Update an existing category. */
    updateCategory: Category
    /** Delete a category. Returns true on success. */
    deleteCategory: Scalars['Boolean']
    /** Replace the categories assigned to an item. */
    setItemCategories: CategoryList
    /** Replace the categories assigned to a sale. */
    setSaleCategories: CategoryList
    /** Replace the categories assigned to a sale item. */
    setSaleItemCategories: CategoryList
    /** Create a new creator. */
    createCreator: Creator
    /** Update an existing creator. */
    updateCreator: Creator
    /** Delete a creator. Returns true on success. */
    deleteCreator: Scalars['Boolean']
    /** Replace the creators assigned to an item. */
    setItemCreators: CreatorList
    /** Replace the creators assigned to a sale item. */
    setSaleItemCreators: CreatorList
    /**
     * Update the account's Artist's Resale Right settings. Does not touch the
     * royalty bands — use setArrBands for those.
     */
    updateArrSettings: ArrSettings
    /**
     * Replace the whole Artist's Resale Right royalty ladder. Rejected unless the
     * bands start at 0, join end to end, and finish with one unbounded band.
     */
    setArrBands: ArrSettings
    /**
     * Remove the Artist's Resale Right configuration for one currency, including
     * its royalty bands. Returns true whether or not the currency was configured.
     */
    deleteArrSettings: Scalars['Boolean']
    /**
     * Create a charge. It produces nothing until its ladder is set with
     * setChargeBands.
     */
    createCharge: Charge
    /** Update a charge's settings. Does not touch its ladder or its status. */
    updateCharge: Charge
    /**
     * Enable or disable a charge. There is no way to delete one: anything already
     * settled against a charge has to keep its meaning.
     */
    setChargeStatus: Charge
    /**
     * Replace a charge's whole ladder. Rejected unless the bands start at 0, join
     * end to end, and finish with one unbounded band.
     */
    setChargeBands: Charge
    /**
     * Set what a charge does at one level, ladder included, replacing whatever
     * that level said before. Returns the charge as it now applies there.
     */
    setChargeAtScope: Charge
    /**
     * Remove what a charge does at one level, dropping its ladder with it, so the
     * next level out applies there instead. Returns the charge that now applies.
     * Succeeds whether or not the level was set.
     */
    deleteChargeAtScope: Charge
    /** Set or clear an item's Artist's Resale Right flag. */
    setItemArr: Item
    /**
     * Set or clear a lot's Artist's Resale Right flag. Rejected once the lot has
     * sold and its value is fixed.
     */
    setSaleItemArr: SaleItem
    /** Create a new affiliate for an account. The affiliate is created in an active state. */
    createAffiliate: Affiliate
    /** Update an existing affiliate. Only fields present on the input are changed. */
    updateAffiliate: Affiliate
    /**
     * Set up email notification delivery for an account through SendGrid. An
     * account has at most one integration per channel, so this fails with
     * `resource already exists` if email is already set up — read
     * `notificationIntegrations` first to find out.
     */
    createSendGridNotificationIntegration: SendGridNotificationIntegration
    /**
     * Change an account's SendGrid email integration. Only the fields given on the
     * input are changed; the rest are left as they are, so at least one field must
     * be given. Fails with `not found` if email is not set up for the account. Use
     * `rotateSendGridNotificationIntegrationApiKey` to replace the API key.
     */
    updateSendGridNotificationIntegration: SendGridNotificationIntegration
    /**
     * Replace the SendGrid API key an account's email integration sends with. The
     * old key stops being used as soon as this succeeds, and nothing else about the
     * integration changes. Fails with `not found` if email is not set up for the
     * account.
     */
    rotateSendGridNotificationIntegrationApiKey: SendGridNotificationIntegration
    /**
     * Set up text message notification delivery for an account through Twilio. An
     * account has at most one integration per channel, so this fails with
     * `resource already exists` if text messages are already set up.
     */
    createTwilioNotificationIntegration: TwilioNotificationIntegration
    /**
     * Configure what one notification sends on one channel, replacing that channel
     * wholesale and leaving the others untouched. Fails unless the account has an
     * integration on the channel. Already-scheduled sends are not re-planned.
     */
    setNotificationConfiguration: NotificationCatalogEntry
    /**
     * Switch one already-configured notification on or off, keeping its
     * configuration. Fails unless that channel is already configured for the
     * notification: this changes a configuration, it does not create one.
     * Switching a scheduled notification on also plans the sends its open sales
     * are owed, including sales that opened while it was off.
     */
    setNotificationConfigurationStatus: NotificationCatalogEntry
    /** Create an attribution channel for an account. */
    createAttributionChannel: AttributionChannel
    /** Rename an attribution channel. */
    renameAttributionChannel: AttributionChannel
    /** Archive an attribution channel, hiding it from active lists while preserving history. */
    archiveAttributionChannel: AttributionChannel
    /** Unarchive a previously archived attribution channel. */
    unarchiveAttributionChannel: AttributionChannel
    /** Delete an attribution channel. Fails if the channel is in use; archive it instead. */
    deleteAttributionChannel: AttributionChannel
    /** Create an attribution source for an account. */
    createAttributionSource: AttributionSource
    /** Rename an attribution source. */
    renameAttributionSource: AttributionSource
    /** Archive an attribution source, hiding it from active lists while preserving history. */
    archiveAttributionSource: AttributionSource
    /** Unarchive a previously archived attribution source. */
    unarchiveAttributionSource: AttributionSource
    /** Delete an attribution source. Fails if the source is in use; archive it instead. */
    deleteAttributionSource: AttributionSource
    /** Replaces this account's workflow schedule offsets and returns the resulting set. */
    setWorkflowScheduleOffsets: WorkflowScheduleOffsets
    /** Sets or clears one per-sale key-date override. A non-null overrideDate sets/upserts the override; a null overrideDate clears it so the date reverts to the account-computed value. */
    setSaleWorkflowDateOverride: Sale
    __typename: 'Mutation'
}

export type Node = (AccountFee | ActionHookLog | ApiKey | ApiToken | Category | Consignment | Department | DutchSale | FeeRule | Item | Location | Offer | PaymentOrder | Sale | SaleGenre | SaleItemRegistration | SaleItemWatchlistEntry | SaleRegistration | SaleRegistrationPolicy | SaleWatchlistEntry | SectionMarker | Site | User) & { __isUnion?: true }


/** Who a notification is addressed to. */
export type NotificationAudience = 'BIDDER' | 'CONSIGNOR' | 'IDENTITY'


/**
 * Which people in the audience a scheduled notification is looked up for.
 * Configuring more than one group reaches the union of them, and someone in
 * several groups is sent one notification rather than one per group.
 */
export type NotificationAudienceGroup = 'SALE_REGISTRATIONS' | 'SALE_BIDDERS' | 'SALE_WATCHLIST' | 'SALE_ITEM_WATCHERS' | 'SALE_CONSIGNORS'


/** Every notification the platform can send, with this account's configuration. */
export interface NotificationCatalog {
    /**
     * Presentation order: one contiguous block per audience, so sections can be
     * rendered by walking the list. Render in the order given rather than sorting.
     */
    entries: NotificationCatalogEntry[]
    __typename: 'NotificationCatalog'
}


/**
 * One notification the platform can send, with how this account has configured it.
 * Identified by the stable pair (`event`, `audience`); there is no `id`.
 */
export interface NotificationCatalogEntry {
    event: NotificationEvent
    audience: NotificationAudience
    /**
     * Admin-facing English label. Recipient-facing copy belongs to the client,
     * keyed off `event` and `audience`.
     */
    displayName: Scalars['String']
    timing: NotificationTiming
    /**
     * Channels the platform can deliver this notification on, regardless of what
     * the account has set up. What is actually sent is in `configurations`.
     */
    supportedChannels: NotificationChannel[]
    /**
     * Whether the copy differs by sale type, so configuration takes one template
     * per sale type rather than one.
     */
    saleTypeVarying: Scalars['Boolean']
    /** Keyed by `channel`, not position. Empty means it is never sent. */
    configurations: NotificationConfiguration[]
    __typename: 'NotificationCatalogEntry'
}

export type NotificationChannel = 'EMAIL' | 'SMS'


/**
 * How one account has configured one notification on one channel. The concrete
 * type follows the notification's `timing`.
 */
export type NotificationConfiguration = (InstantNotificationConfiguration | ScheduledNotificationConfiguration) & { __isUnion?: true }


/**
 * Whether a configured notification is being delivered. A notification the account
 * has never configured has no status at all: it is absent from `configurations`.
 */
export type NotificationConfigurationStatus = 'ACTIVE' | 'INACTIVE'


/**
 * The address outgoing email is sent from and the display name shown beside it.
 * The two are one unit: configuring a sender for a notification replaces both, so
 * a notification sent from another address never shows the account's name.
 */
export interface NotificationEmailSender {
    fromEmail: Scalars['String']
    /** Null means the address is shown bare. */
    fromName: (Scalars['String'] | null)
    __typename: 'NotificationEmailSender'
}


/** What a notification is about. The pair (`event`, `audience`) identifies it. */
export type NotificationEvent = 'BID_CONFIRMATION' | 'BID_CONFIRMATION_OUTBID' | 'OUTBID' | 'AUTO_BID_PLACED' | 'SALE_REGISTRATION_PENDING' | 'SALE_REGISTRATION_ACCEPTED' | 'SALE_REGISTRATION_REJECTED' | 'SALE_ITEM_REGISTRATION_PHONE' | 'SALE_ITEM_WON' | 'SALE_ABOUT_TO_CLOSE' | 'CONSIGNOR_SALE_ITEM_OPENED' | 'CONSIGNOR_SALE_ABOUT_TO_CLOSE' | 'CONSIGNOR_SALE_ITEM_RESERVE_MET' | 'CONSIGNOR_SALE_ITEM_RESERVE_NOT_MET' | 'CONSIGNOR_SALE_ITEM_SOLD' | 'BUY_NOW_PRICE_REDUCED' | 'OFFER_PLACED_CONFIRMATION' | 'OFFER_RECEIVED' | 'OFFER_COUNTERED' | 'OFFER_REJECTED' | 'OFFER_WITHDRAWN' | 'DIRECT_SELL_WON' | 'DIRECT_SELL_SOLD' | 'IDENTITY_EMAIL_VERIFICATION' | 'IDENTITY_PASSWORD_RECOVERY' | 'IDENTITY_LOGIN_CODE' | 'IDENTITY_REGISTRATION_CODE'


/**
 * An account's notification delivery setup for one channel, at most one per channel.
 * The concrete type is the provider it was set up with.
 */
export type NotificationIntegration = (SendGridNotificationIntegration | TwilioNotificationIntegration) & { __isUnion?: true }


/** One firing offset before a sale event, and the template it sends. */
export interface NotificationLeadTime {
    /** How long before the sale event the notification is sent, in minutes. */
    minutesBefore: Scalars['Int']
    /** Branch on each entry's `saleType`, not on `saleTypeVarying`. */
    templates: NotificationTemplate[]
    __typename: 'NotificationLeadTime'
}


/**
 * The template one configured notification renders with, and the sales it serves.
 * There is no fallback between sale types and no default.
 */
export interface NotificationTemplate {
    /** Null when a single template serves every sale. */
    saleType: (SaleType | null)
    /**
     * The provider's own id — a SendGrid dynamic template id on email, a Twilio
     * content SID on SMS. Null when this sale type has no template, in which case
     * its sales send nothing.
     */
    templateId: (Scalars['String'] | null)
    __typename: 'NotificationTemplate'
}


/**
 * When a notification is sent. Determines which concrete
 * `NotificationConfiguration` type its configurations have.
 */
export type NotificationTiming = 'INSTANT' | 'SCHEDULED'


/** A buyer's offer on an item. */
export interface Offer {
    id: Scalars['ID']
    cursor: Scalars['String']
    accountId: Scalars['String']
    itemId: Scalars['String']
    /** The offered item's display content, resolved from the offer's accountId and itemId. */
    item: (ItemBanner | null)
    buyerUserId: Scalars['String']
    /** The user that placed the offer, resolved from the offer's accountId and buyerUserId. */
    buyer: (UserInfo | null)
    /** Offer amount in minor currency units. */
    amount: Scalars['Int']
    currency: Scalars['String']
    status: OfferStatus
    message: (Scalars['String'] | null)
    decidedByUserId: (Scalars['String'] | null)
    decidedByActor: (OfferActor | null)
    /**
     * Which party the offer is currently awaiting a response from; null when the
     * offer is no longer in an actionable state.
     */
    awaitingParty: (OfferParty | null)
    /** Full counter-offer history for this offer, oldest first. */
    counters: OfferCounter[]
    /** When the offer was created (RFC3339). */
    created: Scalars['String']
    /** When the offer was last modified (RFC3339). */
    modified: Scalars['String']
    /** When the offer auto-expires (RFC3339). Null when the offer has no TTL. */
    expiresAt: (Scalars['String'] | null)
    __typename: 'Offer'
}


/** Role of the user that decided (accepted/rejected) an offer. */
export type OfferActor = 'OFFER_ACTOR_ADMIN' | 'OFFER_ACTOR_CONSIGNOR'


/** A single counter-offer made during the negotiation of an offer. */
export interface OfferCounter {
    id: Scalars['ID']
    party: OfferParty
    /** Counter amount in minor currency units. */
    amount: Scalars['Int']
    currency: Scalars['String']
    message: (Scalars['String'] | null)
    createdByUserId: Scalars['String']
    /** When the counter was created (RFC3339). */
    created: Scalars['String']
    __typename: 'OfferCounter'
}


/** Which side of a negotiation a party represents. */
export type OfferParty = 'BUYER' | 'SELLER'


/** Lifecycle status of an offer. */
export type OfferStatus = 'OFFER_STATUS_PENDING' | 'OFFER_STATUS_ACCEPTED' | 'OFFER_STATUS_REJECTED' | 'OFFER_STATUS_CANCELED' | 'OFFER_STATUS_COUNTERED' | 'OFFER_STATUS_EXPIRED'

export interface OffersConnection {
    edges: OffersEdge[]
    pageInfo: PageInfo
    __typename: 'OffersConnection'
}

export interface OffersEdge {
    cursor: Scalars['String']
    node: Offer
    __typename: 'OffersEdge'
}

export interface OnboardPaymentAccountResponse {
    /** Client should redirect Basta sellers to this url to finish onboarding. */
    onboardingUrl: Scalars['String']
    __typename: 'OnboardPaymentAccountResponse'
}

export interface OnlineBidOrigin {
    type: BidOriginType
    __typename: 'OnlineBidOrigin'
}

export interface OrderConnection {
    /** Order edges */
    edges: OrderEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'OrderConnection'
}

export interface OrderEdge {
    /** Current order cursor */
    cursor: Scalars['String']
    /** Order node */
    node: PaymentOrder
    __typename: 'OrderEdge'
}

export interface OrderLine {
    /** OrderLineId */
    orderLineId: Scalars['ID']
    /** Amount */
    amount: Scalars['Int']
    /** Description */
    description: Scalars['String']
    /**
     * @deprecated will be removed in the future
     * Type of the order line
     */
    orderLineType: OrderLineType
    /** Fees associated with the order line, e.g. Buyer's Premium. */
    fees: OrderLineFee[]
    /** Seller fees associated with the order line to be paid by the seller, e.g. Platform Fee. */
    sellerFees: OrderLineFee[]
    /** Item associated with the order line. */
    item: (SaleItemOrItem | null)
    __typename: 'OrderLine'
}


/** Fee associated with an order line */
export interface OrderLineFee {
    /** Unique identifier for the fee. */
    id: Scalars['ID']
    /** Fee description. */
    description: Scalars['String']
    /**
     * @deprecated use description
     * Fee name.
     */
    name: Scalars['String']
    /** Fee amount in minor currency unit. */
    amount: Scalars['Int']
    /** Is system defined, cannot be edited. */
    isSystemDefined: Scalars['Boolean']
    __typename: 'OrderLineFee'
}

export type OrderLineType = 'BidAmount' | 'DirectSale'

export type OrderStatus = 'DRAFT' | 'OPEN' | 'CANCELLED' | 'INVOICE_ISSUED' | 'PAID'


/** Registered company address and legal details for an organisation. */
export interface OrganisationDetails {
    /** Registered legal name of the company. */
    legalName: (Scalars['String'] | null)
    /** Company registration number. */
    registrationNumber: (Scalars['String'] | null)
    /** VAT number. */
    vatNumber: (Scalars['String'] | null)
    /** First line of the registered address. */
    addressLine1: (Scalars['String'] | null)
    /** Second line of the registered address. */
    addressLine2: (Scalars['String'] | null)
    /** City of the registered address. */
    city: (Scalars['String'] | null)
    /** Region, state, or province of the registered address. */
    region: (Scalars['String'] | null)
    /** Postal or ZIP code of the registered address. */
    postalCode: (Scalars['String'] | null)
    /** Country name of the registered address. */
    countryName: (Scalars['String'] | null)
    __typename: 'OrganisationDetails'
}


/** Paddle represent a paddle in a sale */
export interface Paddle {
    /** Paddle identifier */
    identifier: Scalars['String']
    /** User Id of the paddle owner */
    userId: Scalars['String']
    /** The user info, only populated for Basta users. */
    user: (UserInfo | null)
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
    /** Has previous page */
    hasPreviousPage: Scalars['Boolean']
    /** Total records */
    totalRecords: Scalars['Int']
    __typename: 'PageInfo'
}


/** Direction of pagination */
export type PaginationDirection = 'FORWARD' | 'BACKWARDS'


/**
 * Participant represent a bidder in a sale, it will be automatically created
 * when the user starts bidding on a sale.
 */
export interface Participant {
    /** User Id */
    userId: Scalars['String']
    __typename: 'Participant'
}

export interface ParticipantsConnection {
    edges: ParticipantsEdge[]
    totalCount: Scalars['Int']
    pageInfo: PageInfo
    __typename: 'ParticipantsConnection'
}

export interface ParticipantsEdge {
    cursor: Scalars['String']
    node: Participant
    __typename: 'ParticipantsEdge'
}

export interface Payment {
    /** PaymentId */
    paymentId: Scalars['ID']
    __typename: 'Payment'
}

export type PaymentAccountType = 'Standard' | 'Express'

export interface PaymentDetails {
    /** External account id from payment provider */
    paymentProviderAccountId: Scalars['String']
    /** Payment Setup Status */
    status: PaymentProviderStatus
    /** Account Fees */
    accountFees: AccountFee[]
    __typename: 'PaymentDetails'
}


/** PaymentMethod is a union of all supported payment method types. */
export type PaymentMethod = (Card) & { __isUnion?: true }

export interface PaymentOrder {
    /** ID */
    id: Scalars['ID']
    /**
     * @deprecated use id
     * OrderID
     */
    orderId: Scalars['ID']
    /** Title */
    title: Scalars['String']
    /** Currency */
    currency: Currency
    /** SaleID */
    saleId: Scalars['String']
    /** ItemID */
    itemId: Scalars['String']
    /** InvoiceID of invoice sent to winner */
    invoiceId: (Scalars['String'] | null)
    /** Invoice details */
    invoice: (Invoice | null)
    /** PaymentID set if payment has been made on invoice */
    paymentId: (Scalars['String'] | null)
    /** UserID */
    userId: Scalars['String']
    /** OrderLines */
    orderLines: OrderLine[]
    /**
     * @deprecated use billing and/or shipping address
     * UserInfo for payment order
     */
    user: (UserInfo | null)
    /** Billing address for the order */
    billingAddress: (MailingAddress | null)
    /** Shipping address for the order */
    shippingAddress: (MailingAddress | null)
    /** Status of the order */
    status: OrderStatus
    /** Created */
    created: Scalars['String']
    /** Modified */
    modified: Scalars['String']
    __typename: 'PaymentOrder'
}


/** PaymentProviderSession is a union of all possible account-level payment provider sessions. */
export type PaymentProviderSession = (StripePaymentProviderSession) & { __isUnion?: true }

export type PaymentProviderStatus = 'STARTED' | 'PROCESSING' | 'ENABLED' | 'DISABLED'

export type Permission = 'READ_SALE' | 'WRITE_SALE' | 'WRITE_ITEM' | 'READ_ITEM' | 'WRITE_PRODUCT' | 'READ_CONSIGNMENT' | 'WRITE_CONSIGNMENT' | 'READ_SITE' | 'WRITE_SITE' | 'READ_ACCOUNT' | 'WRITE_ACCOUNT' | 'READ_API_TOKENS' | 'WRITE_API_TOKENS' | 'READ_API_KEYS' | 'WRITE_API_KEYS' | 'READ_ACTION_HOOKS' | 'WRITE_ACTION_HOOKS' | 'WRITE_BIDDER_TOKEN' | 'WRITE_CANCEL_BID' | 'WRITE_SHOPIFY_CONFIGURATION' | 'READ_ORDER' | 'READ_USER' | 'WRITE_USER' | 'READ_METAFIELDS' | 'WRITE_METAFIELDS' | 'READ_AFFILIATE' | 'WRITE_AFFILIATE'

export interface PhoneAddress {
    /** Phone ID */
    id: Scalars['String']
    /** Phone type (mobile, home, work, fax) */
    phoneType: PhoneType
    /**
     * Full phone number in E.164 format (e.g., +15551234567)
     * Includes country code, number, and optional extension using RFC 3966 format
     * Example: +1-555-123-4567;ext=1234
     */
    phoneNumber: Scalars['String']
    /** Label */
    label: (Scalars['String'] | null)
    /** Is primary phone */
    isPrimary: Scalars['Boolean']
    /**
     * When this number was confirmed to belong to the account holder.
     * Null means it has not been confirmed. Read-only.
     */
    verifiedAt: (Scalars['Time'] | null)
    __typename: 'PhoneAddress'
}

export interface PhoneBidOrigin {
    type: BidOriginType
    __typename: 'PhoneBidOrigin'
}

export type PhoneType = 'UNSPECIFIED' | 'MOBILE' | 'HOME' | 'WORK' | 'FAX'


/** The resolved identity of whoever performed an action. */
export interface Principal {
    id: Scalars['ID']
    type: PrincipalType
    name: (Scalars['String'] | null)
    __typename: 'Principal'
}

export type PrincipalType = 'PERSON' | 'API_CLIENT' | 'SYSTEM' | 'UNKNOWN'


/** A marketplace product variant linked to an inventory item (a buy-now item). */
export interface ProductVariant {
    /** Variant id */
    id: Scalars['ID']
    /** Parent product id */
    productId: Scalars['ID']
    /** Variant name */
    name: Scalars['String']
    /** Stock keeping unit */
    sku: Scalars['String']
    /** Price in minor currency units */
    price: Scalars['Int']
    /** Currency code (ISO 4217) */
    currencyCode: MarketplaceCurrencyCode
    /** Stock available on hand */
    stockOnHand: Scalars['Int']
    /** Whether the variant is enabled */
    enabled: Scalars['Boolean']
    /** The inventory item this variant is linked to, if any. */
    itemId: (Scalars['ID'] | null)
    /**
     * The item type this variant is assigned to, if any. Its `effectiveSchema`
     * gives the field definitions.
     */
    itemType: (ItemType | null)
    /** JSON Schema (effective) for this variant's schema_data. Read-only. */
    effectiveSchema: (Scalars['JSON'] | null)
    /**
     * @deprecated Renamed to itemType.
     * The item type this variant is assigned to, if any.
     */
    type: (ItemType | null)
    /**
     * @deprecated Renamed to effectiveSchema.
     * JSON Schema (effective) for this variant's schema_data. Read-only.
     */
    schema: (Scalars['JSON'] | null)
    /**
     * @deprecated Use `itemType` (or `itemType.id`) instead.
     * Schema id referencing the schemas table.
     */
    schemaId: (Scalars['ID'] | null)
    /**
     * @deprecated Use `attributes` instead.
     * User-supplied JSON values matching the schema referenced by schemaId.
     */
    schemaData: (Scalars['JSON'] | null)
    /** The variant's filled-in field values, conforming to `effectiveSchema`. */
    attributes: (Scalars['JSON'] | null)
    __typename: 'ProductVariant'
}

export interface ProductVariantConnection {
    /** Product variant edges */
    edges: ProductVariantEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'ProductVariantConnection'
}

export interface ProductVariantEdge {
    /** Current product variant cursor */
    cursor: Scalars['String']
    /** Product variant node */
    node: ProductVariant
    __typename: 'ProductVariantEdge'
}


/** A link from this item to a marketplace product variant. */
export interface ProductVariantLink {
    variantId: Scalars['ID']
    productId: Scalars['ID']
    /** Name of the parent product. */
    productName: Scalars['String']
    variantName: Scalars['String']
    sku: Scalars['String']
    __typename: 'ProductVariantLink'
}

export interface Query {
    /** Fetch information about an account */
    account: Account
    /**
     * What auction data exists for the account: earliest/latest dates, lot count,
     * distinct currencies, projection freshness, and whether the historical
     * backfill is complete. Use it to render a "data through <date>" label.
     */
    saleStatsDataCoverage: SaleStatsDataCoverage
    /**
     * Year-over-year GMV (hammer over SOLD lots), one row per currency per year. A
     * like-for-like day-of-year cutoff is applied to both years automatically.
     */
    saleStatsYoyGmv: SaleStatsYoyGmv
    /**
     * Month-over-month GMV (hammer over SOLD lots), one row per currency per month.
     * A like-for-like day-of-month cutoff is applied to both months automatically.
     */
    saleStatsMomGmv: SaleStatsMomGmv
    /**
     * Sell-through for a year: sold lots, total lots, and the ratio.
     * Currency-independent.
     */
    saleStatsSellThrough: SaleStatsSellThrough
    /**
     * Per-lot bidder engagement for a year: lot count, average unique bidders per
     * lot, and the max unique bidders on any lot.
     */
    saleStatsBidderEngagement: SaleStatsBidderEngagement
    /**
     * Distinct and repeat winners for a year, one row per currency, with the
     * repeat-buyer share.
     */
    saleStatsDistinctWinners: SaleStatsDistinctWinners
    /**
     * Lot outcome summary for a year, one row per currency: sold/unsold/total,
     * sell-through, reserve-met rate, and the split of sold lots across the
     * auction/offer/buy-now channels.
     */
    saleStatsLotOutcomeSummary: SaleStatsLotOutcomeSummary
    /**
     * Hammer vs mid-estimate for a year, one row per currency: scored lots, total
     * hammer, total mid-estimate, and the average hammer-to-mid ratio.
     */
    saleStatsHammerVsEstimate: SaleStatsHammerVsEstimate
    /**
     * Closing-day profile for a year: for each ISO day of week (1=Monday..7=Sunday),
     * the lot count and the average bids per lot.
     */
    saleStatsClosingDayProfile: SaleStatsClosingDayProfile
    /**
     * Top sales of a year ranked by GMV (hammer over SOLD lots), one row per
     * (currency, rank). Ranked within each currency; never blended across currencies.
     * limit is the top N per currency (default 10, capped server-side).
     */
    saleStatsTopSales: SaleStatsTopSales
    /** Fetch information about accessable accounts */
    accounts: Account[]
    /** List the account's enabled countries, with its home country first, then in alphabetical order. */
    countries: CountryInfo[]
    /** List every country with the account's enabled state and AML risk class, including disabled ones, in alphabetical order. */
    accountCountries: CountryInfoConnection
    /** Get all sales that have been created. You can at most fetch 50 sales at a time. */
    sales: SaleConnection
    /** Get a single sale. */
    sale: Sale
    /** Get a single sale, polymorphic over sale format (English Sale or DutchSale). */
    saleV2: SaleV2
    /** Get all sales for an account, polymorphic over sale format (each node is an English Sale or a DutchSale). You can at most fetch 50 sales at a time. */
    salesV2: SaleV2Connection
    /**
     * List the departments belonging to an account, ordered alphabetically by
     * name. Paginated: pass the previous page's endCursor as `after`.
     */
    departments: DepartmentConnection
    /**
     * List the auction genres belonging to an account, ordered alphabetically by
     * name. Paginated: pass the previous page's endCursor as `after`. Archived
     * genres are excluded unless includeArchived is true.
     */
    saleGenres: SaleGenreConnection
    /** Get SaleItem */
    saleItem: (SaleItem | null)
    /** Get SaleItem by external id */
    saleItemByExternalId: SaleItem
    /** Get API Keys that have created. */
    apiKeys: ApiKeyConnection
    /** Get API key for searching collection */
    searchKey: SearchKey
    /**
     * @deprecated Use apiKeys query
     * DEPRECATED.
     * Get API Keys that have created.
     */
    apiTokens: ApiTokenConnection
    /** Get account action hook subscriptions */
    actionHookSubscriptions: ActionHookSubscription[]
    /**
     * List an account's attribution channels. By default only active channels are
     * returned; pass includeArchived: true to include archived ones.
     */
    attributionChannels: AttributionChannel[]
    /**
     * List an account's attribution sources. By default only active sources are
     * returned; pass includeArchived: true to include archived ones.
     */
    attributionSources: AttributionSource[]
    /**
     * List the notification integrations an account has set up, at most one per channel
     * — key entries by `channel`, not by position. An empty list means nothing is set up
     * on any channel this API version describes, and nothing is sent on those channels.
     */
    notificationIntegrations: NotificationIntegration[]
    /**
     * Return the SendGrid API key an account's email integration sends with, in
     * plain text. Fails with `not found` if email is not set up for the account.
     * Do not cache the result.
     */
    revealSendGridNotificationIntegrationApiKey: Scalars['String']
    /**
     * List every notification the platform can send, with how this account has
     * configured each one. An entry with no `configurations` is not sent at all;
     * if that is true of every entry, the account most likely has no delivery
     * integration yet — read `notificationIntegrations` to tell the two apart.
     */
    notificationCatalog: NotificationCatalog
    /** This account's full workflow schedule grid: platform defaults overlaid with the account's stored modifications. Each row's `modified` flag is true when it differs from the default. */
    workflowScheduleOffsets: WorkflowScheduleOffsets
    /** Get all Action Hook logs. */
    actionHookLogs: ActionHookLogConnection
    /** Fetch information about an Item */
    item: Item
    /** Fetch information about an Item by external identifier */
    itemByExternalId: Item
    /**
     * Get all items for accountId
     * 
     * onlyMyItems if true filters items belonging to the current user
     */
    items: ItemsConnection
    /** Get a single consignment by id. */
    consignment: Consignment
    /** Get a single consignment by its human-facing short id. */
    consignmentByShortId: Consignment
    /** List consignments for an account. */
    consignments: ConsignmentsConnection
    /** Get a single site by id. */
    site: Site
    /** List sites for an account. Archived sites are excluded unless includeArchived is true. */
    sites: SiteConnection
    /** Get a single location by id. */
    location: Location
    /**
     * List locations for an account, optionally restricted to one site. Archived
     * locations are excluded unless includeArchived is true.
     */
    locations: LocationConnection
    /** List the items belonging to a consignor (by user-service consignor user id). */
    consignorItems: ItemsConnection
    /** Offer configuration for an item; null when the item does not accept offers. */
    itemOfferConfig: (ItemOfferConfig | null)
    /** Get a single offer by id. */
    offer: Offer
    /** List offers on a single item. */
    itemOffers: OffersConnection
    /** List offers across an account's items, with optional filters. */
    offers: OffersConnection
    salesAggregate: SalesAggregate
    /** User Bid Activity */
    userBidActivity: UserBidActivityConnection
    /**
     * Get a user node for a given account and user ID.
     * If idType is USER_ID_TYPE_IDENTITY_PROVIDER_ID, the user ID is an identity provider ID.
     * If idType is USER_ID_TYPE_USER_ID, the user ID is a user ID.
     */
    user: User
    /** Orders associated with an account */
    orders: OrderConnection
    /** Orders associated with a user */
    userOrders: OrderConnection
    /** Get all sale registrations for a sale */
    saleRegistrations: SaleRegistrationsConnection
    /** Get image for an account, by id or external id */
    image: ImageWithAssociations
    /** Get an Asset by id. Returns null when the asset does not exist for this account. */
    asset: (Asset | null)
    /** Get all users for an account */
    users: UsersConnection
    /** List the followers of a consignor (by internal User.id) within an account. */
    consignorFollowers: UsersConnection
    /** List the consignors a user (by internal User.id) follows within an account. */
    userFollowing: UsersConnection
    /** Follower count for a consignor (by internal User.id) within an account. */
    consignorFollowerCount: Scalars['Int']
    /** Get all sale registration policies for an account */
    saleRegistrationPolicies: SaleRegistrationPoliciesConnection
    /**
     * Search across different node types in the graph.
     * 
     * Using search uses a search index that is eventually consistent.
     * 
     * The required permission depends on the type being searched.
     * 
     * For ASSET: READ_ITEM
     * For every other type: READ_SALE
     * 
     * Example queries:
     *   - Search for users: search(accountId: "123", type: USER, query: "john@example.com", first: 20)
     *   - Search for sale items: search(accountId: "123", type: SALE_ITEM, query: "vintage watch", first: 20)
     */
    search: SearchResultConnection
    /**
     * Look up geographic location for an IP address.
     * If no IP is provided, uses the caller's IP address.
     */
    geoLookup: GeoLocation
    /** List all dashboard users (team members) in the account with their assigned roles. */
    dashboardMembers: DashboardMember[]
    /** Get the roles assigned to a specific dashboard user in the account. */
    dashboardUserRoles: DashboardUserRoleAssignment[]
    /**
     * Get the current user's roles and effective permissions for the account.
     * Used by the UI to decide what features to show or hide.
     */
    currentUser: CurrentUser
    /** Get a single category by id. */
    category: (Category | null)
    /** List categories for an account, optionally scoped to a parent. */
    categories: CategoryConnection
    /** List item types for an account, optionally scoped to a parent. */
    itemTypes: ItemTypesConnection
    /**
     * @deprecated Renamed to itemTypes.
     * Deprecated alias for itemTypes. Kept for backward compatibility.
     */
    schemas: ItemTypesConnection
    /** List the namespaces an account owns, so schemas can reuse an existing one. */
    schemaNamespaces: SchemaNamespace[]
    /** Get a single creator by id. */
    creator: (Creator | null)
    /** List creators for an account, optionally scoped to a parent. */
    creators: CreatorConnection
    /** Fetch a single affiliate by ID. */
    affiliate: Affiliate
    /** List affiliates for an account, paginated. */
    affiliates: AffiliateConnection
    __typename: 'Query'
}


/**
 * Range rule explains increments in the table.
 * Represented as minor currency units.
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

export type ReserveAutoBidMethod = 'STANDARD' | 'MAX_BID_BELOW_RESERVE_IS_MET'

export type ReserveStatus = 'NOT_MET' | 'MET' | 'NO_RESERVE'


/** Reserve type for an item. */
export type ReserveType = 'FIRM' | 'SELL' | 'DISCRETION'


/** Sale */
export interface Sale {
    /** Id of a sale. */
    id: Scalars['ID']
    /** Cursor is used in pagination. */
    cursor: Scalars['String']
    /** Sale type */
    type: SaleType
    /** Account ID associated with the sale */
    accountId: Scalars['String']
    /** Sale Title */
    title: (Scalars['String'] | null)
    /** Sale Description */
    description: (Scalars['String'] | null)
    /** Currency of the sale (capital letters: EUR, USD, etc.) */
    currency: (Scalars['String'] | null)
    /** Sale status */
    status: SaleStatus
    /** Sale format of the sale. Always ENGLISH for this type. */
    saleFormat: SaleFormat
    /** Items that have been associated with this sale. You can at most get 50 items at a time. */
    items: SaleItemsConnection
    /**
     * Default increment table for the sale.
     * If an increment table is associated with any items in the sale
     * this will be overidden.
     */
    incrementTable: (BidIncrementTable | null)
    /** Sale Dates */
    dates: SaleDates
    /** Get list of participants for this sale */
    participants: ParticipantsConnection
    /** Sequence number of this sale. */
    sequenceNumber: Scalars['Int']
    /** Chosen ClosingMethod */
    closingMethod: (ClosingMethod | null)
    /**
     * ClosingTime countdown is the sniping duration in milliseconds.
     * If not provided it defaults to 120000 (2 minutes).
     * If a sale has an OVERLAPPING closing method it also assigns the item's closing time in asceding order.
     */
    closingTimeCountdown: Scalars['Int']
    /** Images attached to sale */
    images: Image[]
    /**
     * Sale theme type.
     * Only used for sales owned by basta
     */
    themeType: (Scalars['Int'] | null)
    /** Slug for the sale (pretty URL). Present when the account has sale slugs (e.g. Basta bid client or B2B with slug). Null when no slug exists. */
    slug: (Scalars['String'] | null)
    /**
     * This setting governs the auction's reserve bid logic.
     * By default, it is set to STANDARD, meaning the reserve must be met or exceeded through standard bidding.
     * When configured to MAX_BID_BELOW_RESERVE_IS_MET, any maximum bid that matches or surpasses the reserve price automatically meets the reserve of the item or the max bid amount if below reserve.
     * Note, this setting cannot be changed after the sale is created.
     */
    reserveAutoBidMethod: ReserveAutoBidMethod
    /**
     * Indicates whether this is a test sale.
     * Test sales are used for testing purposes and should be filtered out from production data.
     */
    isTestSale: Scalars['Boolean']
    /** Whether the auction is to have a printed catalogue. */
    printedCatalogue: Scalars['Boolean']
    /** Effective key workflow dates for this sale, one per account-enabled date type, in display order. Each is either an explicit override or computed from the account offset and the sale's auction date. */
    workflowSchedule: WorkflowScheduleDate[]
    /** Is sale available on the basta bid client ? */
    bastaBidClient: Scalars['Boolean']
    /** Is sale hidden for public, and not shown on your profile. */
    hidden: Scalars['Boolean']
    /** Sale paddles created for the sale */
    paddles: Paddle[]
    /**
     * @deprecated old livestream link, use liveVideoStream instead
     * Live Stream
     */
    liveStream: (ExternalLiveStream | null)
    liveVideoStream: (LiveStream | null)
    /** Live Item in the Sale (only applicable for live sales) */
    liveItem: (LiveItem | null)
    /** Count of all bids in sale accross all items */
    saleBidsCounts: (Scalars['Int'] | null)
    /** Sum Of all highest bids per item */
    sumOfHighestBids: (Scalars['Int'] | null)
    /** Statistics for a sale providing insights into bidding activity, item performance, and auction dynamics. */
    statistics: SaleStatistics
    /** Restrictions for bidding on a sale */
    bidRestrictions: BidRestrictions
    /** Get list of registrations for this sale */
    registrations: SaleRegistrationsConnection
    /** Get list of sale registration policies for sale */
    registrationPolicies: SaleRegistrationPoliciesConnection
    /** All Orders associated with the sale. */
    orders: OrderConnection
    /** Unique external identifier, e.g. external system's id, inventory id, etc. */
    externalId: (Scalars['String'] | null)
    /** Location of the sale */
    location: (Scalars['String'] | null)
    /** Metafields associated with the sale */
    metafields: Metafield[]
    /** Metafield associated with the sale */
    metafield: (Metafield | null)
    /** Items that are highlighted for this sale, ordered by position. */
    highlighted: HighlightedSaleItemConnection
    /** Sale item closing schedule */
    saleItemClosingSchedule: SaleItemClosingSchedule
    /**
     * Effective fee rules for this sale. Returns sale-level fees if configured,
     * otherwise falls back to account-level fees. Only empty if no fees are
     * configured at any level. Check the source field on each rule to see which
     * level was used.
     */
    feeRules: FeeRule[]
    /**
     * Whether the sale's fee rules are the default snapshot from account fees,
     * meaning they have not been customized.
     */
    hasDefaultSaleFees: Scalars['Boolean']
    /** Users who have favourited (watchlisted) this sale, paginated. */
    watchlist: SaleWatchlistConnection
    /** Categories assigned to the sale */
    categories: Category[]
    /** Departments assigned to the sale */
    departments: Department[]
    /** The single auction genre assigned to the sale, if any. */
    saleGenre: (SaleGenre | null)
    /** The site the sale is held at, if any. */
    site: (Site | null)
    /** Viewing times for the sale. Rich text encoded by the client. */
    viewingTimes: (Scalars['String'] | null)
    /** Buyers notes for the sale. Rich text encoded by the client. */
    buyersNotes: (Scalars['String'] | null)
    /** Fees-apply information for the sale. Rich text encoded by the client. */
    feesApplyInfo: (Scalars['String'] | null)
    /** The member who is the sale contact, if any. */
    saleContact: (DashboardMember | null)
    /**
     * Section markers for the sale, ordered by fromItemNumber. Ranges may overlap
     * and titles may repeat.
     */
    sectionMarkers: SectionMarker[]
    __typename: 'Sale'
}

export type SaleActivity = (Sale | SaleItem | SaleLiveStreamUpdate) & { __isUnion?: true }


/**
 * Lightweight sale type containing only sale-level metadata.
 * Does not include items, registrations, or other heavy nested data.
 * To fetch the full Sale with all nested data, use the sale() query with the returned id.
 */
export interface SaleBanner {
    /** Sale ID */
    id: Scalars['ID']
    /** Account ID */
    accountId: Scalars['String']
    /** Sale title */
    title: (Scalars['String'] | null)
    /** Sale description */
    description: (Scalars['String'] | null)
    /** Sale status */
    status: SaleStatus
    /** Sale type */
    type: SaleType
    /** Currency */
    currency: (Scalars['String'] | null)
    /** Closing method */
    closingMethod: (ClosingMethod | null)
    /** Sale dates */
    dates: (SaleDates | null)
    /** Whether the sale is hidden */
    hidden: Scalars['Boolean']
    /** URL slug */
    slug: (Scalars['String'] | null)
    /** Unix timestamp when the sale was created */
    createdTimestamp: Scalars['Int']
    /** Reserve auto-bid method */
    reserveAutoBidMethod: ReserveAutoBidMethod
    /** Whether the sale uses the Basta bid client */
    bastaBidClient: Scalars['Boolean']
    /** Sale images */
    images: ((Image | null)[] | null)
    /** External ID */
    externalId: (Scalars['String'] | null)
    /** Location */
    location: (Scalars['String'] | null)
    /** Whether the sale is a test sale */
    isTestSale: Scalars['Boolean']
    /** Sale statistics */
    statistics: (SaleStatistics | null)
    __typename: 'SaleBanner'
}

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
    /** Date of when the sale is supposed to be manually put to live. */
    liveDate: (Scalars['String'] | null)
    __typename: 'SaleDates'
}


/** Sale format of a sale. */
export type SaleFormat = 'ENGLISH' | 'DUTCH'


/** SaleGenre is an account-scoped named grouping a sale can belong to. */
export interface SaleGenre {
    /** Id of the auction genre. */
    id: Scalars['ID']
    /** Human-readable auction genre name. */
    name: Scalars['String']
    /** URL-friendly slug. */
    slug: Scalars['String']
    /** When the genre was archived (RFC3339), or null when live. */
    archivedAt: (Scalars['String'] | null)
    /** Whether the genre is public. */
    isPublic: Scalars['Boolean']
    /**
     * The charges that apply to lots in sales of this genre, already restated for
     * it. Falls back to the account when this genre does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges: ChargeConnection
    __typename: 'SaleGenre'
}


/** A paginated connection of auction genres. */
export interface SaleGenreConnection {
    edges: SaleGenreEdge[]
    pageInfo: PageInfo
    __typename: 'SaleGenreConnection'
}


/** An edge in an auction genre connection. */
export interface SaleGenreEdge {
    node: SaleGenre
    cursor: Scalars['String']
    __typename: 'SaleGenreEdge'
}

export type SaleIDType = 'ID' | 'EXTERNAL_ID'

export interface SaleImageAssociation {
    /** The ID of the associated sale */
    saleId: Scalars['String']
    __typename: 'SaleImageAssociation'
}


/** A sale item (item that has been added to a sale) */
export interface SaleItem {
    /** Id of an item. */
    id: Scalars['ID']
    /** Cursor is used in pagination. */
    cursor: Scalars['String']
    /** AccountId that owns the item */
    accountId: Scalars['String']
    /** Item title */
    title: (Scalars['String'] | null)
    /** Item sub-title */
    subTitle: (Scalars['String'] | null)
    /** Number of bids that have been placed on the item */
    totalBids: Scalars['Int']
    /** Item description */
    description: (Scalars['String'] | null)
    /** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
    titleTemplateOverride: (Scalars['String'] | null)
    subTitleTemplateOverride: (Scalars['String'] | null)
    descriptionTemplateOverride: (Scalars['String'] | null)
    /** Current bid amount for the item as minor currency unit. */
    currentBid: (Scalars['Int'] | null)
    /** Current max bid amount for the item in minor currency unit. Only set when the leading bid is a max bid. */
    currentMaxBid: (Scalars['Int'] | null)
    /** Currency for pricing information which is set on auction level. */
    currency: Scalars['String']
    /**
     * Current leader (user id) for the item.
     * If SaleItem is closed then this is the user id holding the highest bid.
     */
    leaderId: (Scalars['String'] | null)
    /** Sale id, as items can be created without having to be associated to a sale. */
    saleId: Scalars['String']
    /** Get list of bids for this item */
    bids: Bid[]
    /** Reserve on the item in minor currency unit. */
    reserve: (Scalars['Int'] | null)
    /** Starting bid for the item in minor currency unit. */
    startingBid: (Scalars['Int'] | null)
    /**
     * Effective bid increment table for this item — the item's override if set,
     * otherwise the parent sale's default, otherwise null.
     */
    incrementTable: (BidIncrementTable | null)
    /** Status of the item */
    status: ItemStatus
    /** Item estimate in minor currency unit. */
    estimates: Estimate
    /** Item number */
    itemNumber: Scalars['Int']
    /** Scheduled closing timestamp for the item. */
    dates: ItemDates
    /**
     * Allowed BidTypes on the item.
     * Defaults to allowing only Max bids if not supplied.
     */
    allowedBidTypes: (BidType[] | null)
    /** Images attached to saleItem */
    images: Image[]
    /**
     * Item slug. Only set on basta created items.
     * Null/empty for integrating applications
     */
    slug: (Scalars['String'] | null)
    /** Active Order information associated with item. */
    paymentOrder: (PaymentOrder | null)
    /** All Orders associated with the item. */
    paymentOrders: (PaymentOrder[] | null)
    /** Is item hidden for public, and not shown on your sale page. */
    hidden: Scalars['Boolean']
    /** Next asks for the item in minor currency units. */
    nextAsks: Scalars['Int'][]
    /**
     * @deprecated use reserveStatus instead
     * Reserve met
     */
    reserveMet: Scalars['Boolean']
    /** SaleItem notifications if item is part of a live sale */
    notifications: ItemNotification[]
    /**
     * @deprecated use tagsV2
     * Tags
     */
    tags: Scalars['String'][]
    /** Tags v2 */
    tagsV2: Tag[]
    /** Reserve status. */
    reserveStatus: ReserveStatus
    /** Result of the item after sale processing. Only set when item has been sold or passed. */
    itemResult: ItemResult
    /** Reserve type for the item. */
    reserveType: (ReserveType | null)
    /** Unique external identifier, e.g. external system's id, inventory id, etc. */
    externalId: (Scalars['String'] | null)
    /** Optional lot display number. */
    displayNumber: (Scalars['String'] | null)
    /** Highlight configuration for featuring this item on the sale page. */
    highlight: (ItemHighlight | null)
    /**
     * @deprecated Use `itemType` and `attributes` instead.
     * Metadata associated with the item
     */
    metadata: (ItemMetadata | null)
    /**
     * The item type this sale item is assigned to, if any. Its `effectiveSchema`
     * gives the field definitions.
     */
    itemType: (ItemType | null)
    /**
     * JSON Schema (effective, including inherited ancestors) currently associated
     * with this sale item. Mirrors ItemMetadata.schema and is read-only —
     * set schemaId on the input mutations to change it.
     */
    effectiveSchema: (Scalars['JSON'] | null)
    /**
     * @deprecated Renamed to itemType.
     * The item type this sale item is assigned to, if any.
     */
    type: (ItemType | null)
    /**
     * @deprecated Renamed to effectiveSchema.
     * JSON Schema (effective, including inherited ancestors) currently associated
     * with this sale item. Read-only.
     */
    schema: (Scalars['JSON'] | null)
    /**
     * @deprecated Use `itemType` (or `itemType.id`) instead.
     * Schema id referencing the schemas table. Settable on
     * SaleItemInput / UpdateSaleItemInput.
     */
    schemaId: (Scalars['ID'] | null)
    /**
     * @deprecated Use `attributes` instead.
     * User-supplied JSON values matching the schema referenced by schemaId.
     * Settable on SaleItemInput / UpdateSaleItemInput.
     */
    schemaData: (Scalars['JSON'] | null)
    /** The sale item's filled-in field values, conforming to `effectiveSchema`. */
    attributes: (Scalars['JSON'] | null)
    /** closingTimeCountdown for the item. */
    closingTimeCountdown: Scalars['Int']
    /**
     * @deprecated Use specificationsV2
     * Item specifications - first specification only. Use specificationsV2 for full list.
     */
    specifications: (ItemSpecifications | null)
    /** Item specifications v2 (list with id, quantity, diameter, etc.) */
    specificationsV2: ItemSpecifications[]
    /** Item packaging (boxed dimensions and weight) */
    packaging: ItemPackaging[]
    /** Get list of registrations for this sale item */
    registrations: SaleItemRegistrationsConnection
    /**
     * Effective fee rules for this item. Returns item-level fees if configured,
     * then sale-level fees, otherwise falls back to account-level fees. Only empty
     * if no fees are configured at any level. Check the source field on each rule
     * to see which level was used.
     */
    feeRules: FeeRule[]
    /** Location of the item */
    location: (Scalars['String'] | null)
    /** The site this item currently resides at, if any. Read-through from the underlying item. */
    site: (Site | null)
    /** The location within its site this item currently resides at, if any. Read-through from the underlying item. */
    siteLocation: (Location | null)
    /** The consignment this lot belongs to, if any. Read-through from the underlying item. */
    consignment: (Consignment | null)
    /** Metafields associated with the sale item */
    metafields: Metafield[]
    /** Metafield associated with the sale item */
    metafield: (Metafield | null)
    /** Users who have favourited (watchlisted) this sale item, paginated. */
    watchlist: SaleItemWatchlistConnection
    /** Categories assigned to the sale item */
    categories: Category[]
    /** Creators assigned to the sale item */
    creators: Creator[]
    /**
     * Whether the Artist's Resale Right applies to this lot. Follows the
     * underlying item until the lot sells, after which the value is fixed.
     */
    arr: Scalars['Boolean']
    /** Offer configuration for this item; null when the item does not accept offers. */
    offerConfig: (ItemOfferConfig | null)
    /** Offers placed on this item. */
    offers: OffersConnection
    /** Buy-now configuration for this item; null when the item cannot be bought outright. */
    buyNowConfig: (ItemBuyNowConfig | null)
    /**
     * The terminal non-auction sale of this item (an accepted offer or a buy-now),
     * if any. Sourced from the sale aggregate.
     */
    directSell: (DirectSell | null)
    /**
     * The charges that apply to this lot, already restated for it. Resolved from
     * the lot, then its consignment, item type and sale genre, then the account;
     * `appliesAt` on each says which one supplied the values.
     * 
     * A lot has no buyer until it sells, so charges set on a user are not
     * considered here. Defaults to the lot's own currency.
     */
    charges: ChargeConnection
    __typename: 'SaleItem'
}

export interface SaleItemClosingSchedule {
    /** The type of closing schedule to use. */
    type: SaleItemClosingScheduleType
    /**
     * The staggered closing schedule to use.
     * Must be provided if type is STAGGERED.
     */
    staggered: (StaggeredSaleItemScheduleConfiguration | null)
    __typename: 'SaleItemClosingSchedule'
}

export type SaleItemClosingScheduleType = 'PER_ITEM' | 'STAGGERED'

export interface SaleItemImageAssociation {
    /** The ID of the associated item */
    itemId: Scalars['String']
    /** The ID of the associated sale */
    saleId: Scalars['String']
    __typename: 'SaleItemImageAssociation'
}


/** A link from this item to an auction sale item. */
export interface SaleItemLink {
    saleId: Scalars['ID']
    saleItemId: Scalars['ID']
    /** Sale title; sales may be untitled, so nullable. */
    saleTitle: (Scalars['String'] | null)
    /** Auction-wide status of the sale. */
    saleStatus: SaleStatus
    /** Lot/position number of the item within the sale. */
    itemNumber: Scalars['Int']
    /** Human lot label, e.g. "Lot 12A"; nullable when unset. */
    displayNumber: (Scalars['String'] | null)
    /** The item's own status within the sale (distinct from saleStatus). */
    saleItemStatus: ItemStatus
    /** Per-sale-item title; may override the inventory item title, nullable. */
    saleItemTitle: (Scalars['String'] | null)
    __typename: 'SaleItemLink'
}

export type SaleItemOrItem = (SaleItem | Item) & { __isUnion?: true }


/** Sale item registration for a specific item */
export interface SaleItemRegistration {
    /** Id of the SaleItem registration */
    id: Scalars['ID']
    /** Sale registration ID this item registration belongs to */
    saleRegistration: SaleRegistration
    /** Item that the user is registering for */
    saleItem: SaleItem
    /** When the SaleItem registration was created */
    createdAt: Scalars['String']
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber: (PhoneAddress | null)
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers: (PhoneAddress[] | null)
    __typename: 'SaleItemRegistration'
}


/** Sale item registration edge for connection */
export interface SaleItemRegistrationEdge {
    /** The item registration node */
    node: SaleItemRegistration
    /** Cursor for pagination */
    cursor: Scalars['String']
    __typename: 'SaleItemRegistrationEdge'
}


/** Sale item registration connection for pagination */
export interface SaleItemRegistrationsConnection {
    /** Sale item registration edges */
    edges: SaleItemRegistrationEdge[]
    /** Current page information */
    pageInfo: PageInfo
    /** Total number of item registrations */
    totalCount: Scalars['Int']
    __typename: 'SaleItemRegistrationsConnection'
}


/**
 * Item slug (pretty URL path segment) for a sale item under an account/sale.
 * Can resolve the underlying item and account when requested.
 */
export interface SaleItemSlug {
    /** ID */
    id: Scalars['ID']
    /** The URL-friendly slug string for the item. */
    slug: Scalars['String']
    /** Account handle (used in pretty URLs). */
    accountHandle: Scalars['String']
    /** Account id that owns this item slug. */
    accountId: Scalars['String']
    /** Sale id this item slug belongs to. */
    saleId: Scalars['String']
    /** Item id this slug refers to. */
    itemId: Scalars['String']
    /** The sale this item slug belongs to. Resolved when requested. */
    sale: Sale
    /** The item this slug refers to. Resolved when requested. */
    saleItem: SaleItem
    /** The account that owns this item slug. Resolved when requested. */
    account: Account
    __typename: 'SaleItemSlug'
}


/** A connection wrapper for sale item watchlist entries. */
export interface SaleItemWatchlistConnection {
    /** The list of sale item watchlist entry edges. */
    edges: SaleItemWatchlistEdge[]
    /** Pagination information. */
    pageInfo: PageInfo
    __typename: 'SaleItemWatchlistConnection'
}


/** An edge in the sale item watchlist connection. */
export interface SaleItemWatchlistEdge {
    /** Cursor for this edge. */
    cursor: Scalars['String']
    /** The sale item watchlist entry node. */
    node: SaleItemWatchlistEntry
    __typename: 'SaleItemWatchlistEdge'
}


/** A sale item watchlist entry represents a user who has favourited a sale item. */
export interface SaleItemWatchlistEntry {
    /** Unique identifier for the watchlist entry. */
    id: Scalars['ID']
    /** User ID of the user who favourited the sale item. */
    userId: Scalars['String']
    /** Timestamp when the entry was created. */
    createdAt: Scalars['String']
    __typename: 'SaleItemWatchlistEntry'
}

export interface SaleItemsConnection {
    /** Sale Item edges */
    edges: SaleItemsEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'SaleItemsConnection'
}

export interface SaleItemsEdge {
    /** Current item cursor */
    cursor: Scalars['String']
    /** Sale Item node */
    node: SaleItem
    __typename: 'SaleItemsEdge'
}

export interface SaleLiveStreamUpdate {
    currentViewers: Scalars['Int']
    observedAt: Scalars['String']
    __typename: 'SaleLiveStreamUpdate'
}


/** Comprehensive metrics for auction/sale performance. */
export interface SaleMetrics {
    /** Total number of items in the sale. */
    totalItems: Scalars['Int']
    /** Number of items that have received bids at or above their reserve price. */
    itemsOverReserve: Scalars['Int']
    /** Number of items that have received at least one bid. */
    itemsWithBids: Scalars['Int']
    /** Total number of bids placed across all items in the sale. */
    totalBids: Scalars['Int']
    /** Number of unique bidders who have placed at least one bid in the sale. */
    uniqueBidders: Scalars['Int']
    /** Sum of high estimates for all items in the sale (in minor currency). */
    highEstimateSum: Scalars['Int']
    /** Sum of low estimates for all items in the sale (in minor currency). */
    lowEstimateSum: Scalars['Int']
    /** Total amount from items that sold (items with bids at or above reserve price) (in minor currency). */
    currentBidOverReserveTotal: Scalars['Int']
    /** Sum of current highest bids across all items in the sale (in minor currency). */
    currentBidTotal: Scalars['Int']
    /** Sum of maximum bid amounts across all items in the sale (in minor currency). */
    maxBidsTotal: Scalars['Int']
    /** Percentage of items that have received bids at or above their reserve price. */
    itemsOverReservePercentage: Scalars['Float']
    /** Percentage of items that have received at least one bid. */
    itemsWithBidsPercentage: Scalars['Float']
    /** Average number of bids per item across all items in the sale. */
    averageBidsPerItem: Scalars['Float']
    /** Number of items that are hidden from public view. */
    hiddenItems: Scalars['Int']
    /** Information about the highest bid placed in the sale. */
    highestBid: (HighestBidInfo | null)
    /** Percentage of bidders who placed bids on multiple items, indicating bidder engagement across the auction. */
    bidderEngagement: Scalars['Float']
    /** Time series data showing the number of bids placed each day during the sale period. */
    dailyBidCounts: SaleStatisticBidCounts[]
    /** Timestamp when the sale metrics were last calculated. */
    calculatedAt: Scalars['String']
    __typename: 'SaleMetrics'
}


/** Sale registration for a user */
export interface SaleRegistration {
    /** Id of the registration */
    id: Scalars['ID']
    /** Account ID associated with the registration */
    account: Account
    /** Sale ID that the user is registering for */
    sale: Sale
    /** User ID of the person registering */
    userId: Scalars['String']
    /** Type of registration (online, phone, paddle, aggregator) */
    type: SaleRegistrationType
    /** Registration identifier (phone number, paddle number, etc.) */
    identifier: (Scalars['String'] | null)
    /** Current status of the registration */
    status: SaleRegistrationStatus
    /** Reason for rejection if status is REJECTED */
    rejectedReason: (Scalars['String'] | null)
    /** When the registration was created */
    createdAt: Scalars['String']
    /** User Profile, will only resolve if the user exists in configured identity provider. */
    userProfile: (UserInfo | null)
    /** Policy results for the registration */
    policyResults: SaleRegistrationPolicyResult[]
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber: (PhoneAddress | null)
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers: (PhoneAddress[] | null)
    /**
     * Item registrations for this sale registration.
     * Returns all item registrations -- no pagination arguments are accepted.
     */
    itemRegistrations: SaleItemRegistrationsConnection
    __typename: 'SaleRegistration'
}


/** Sale registration edge for connection */
export interface SaleRegistrationEdge {
    /** The registration node */
    node: SaleRegistration
    /** Cursor for pagination */
    cursor: Scalars['String']
    __typename: 'SaleRegistrationEdge'
}


/** Sale registration policies connection for pagination */
export interface SaleRegistrationPoliciesConnection {
    /** Sale registration policy edges */
    edges: SaleRegistrationPolicyEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'SaleRegistrationPoliciesConnection'
}


/** Sale registration policy */
export interface SaleRegistrationPolicy {
    /** Id of the SaleRegistrationPolicy */
    id: Scalars['ID']
    /** Policy code can be used in client code to identify the policy */
    code: Scalars['String']
    /** Policy description human readable description that can be displayed to the user */
    description: Scalars['String']
    /** Policy rule defined as a CEL (Common Expression Language) expression */
    rule: Scalars['String']
    /** If true, the policy will be applied to all sales created for this account */
    isDefault: Scalars['Boolean']
    __typename: 'SaleRegistrationPolicy'
}


/** Sale registration policy edge for connection */
export interface SaleRegistrationPolicyEdge {
    /** The policy node */
    node: SaleRegistrationPolicy
    /** Cursor for pagination */
    cursor: Scalars['String']
    __typename: 'SaleRegistrationPolicyEdge'
}


/** Sale Registration Policy result */
export interface SaleRegistrationPolicyResult {
    /** Policy code */
    code: Scalars['String']
    /** Policy passed */
    passed: Scalars['Boolean']
    /** Policy description */
    description: Scalars['String']
    __typename: 'SaleRegistrationPolicyResult'
}

export type SaleRegistrationSortByField = 'CREATED_AT'

export type SaleRegistrationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED'

export type SaleRegistrationType = 'ONLINE' | 'PHONE' | 'PADDLE' | 'AGGREGATOR'


/** Sale registration connection for pagination */
export interface SaleRegistrationsConnection {
    /** Sale registration edges */
    edges: SaleRegistrationEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'SaleRegistrationsConnection'
}


/** Sale slug (pretty URL) for a sale under an account. Can resolve the underlying sale and account when requested. */
export interface SaleSlug {
    /** ID */
    id: Scalars['ID']
    /** The URL-friendly slug string for the sale. */
    slug: Scalars['String']
    /** Account handle (used in pretty URLs). */
    accountHandle: Scalars['String']
    /** Account id that owns this sale slug. */
    accountId: Scalars['String']
    /** Sale id this slug refers to. */
    saleId: Scalars['String']
    /** When the sale slug was created. RFC3339. */
    created: Scalars['String']
    /** When the sale slug was last modified. RFC3339. */
    modified: Scalars['String']
    /** The sale this slug refers to. Resolved when requested. */
    sale: Sale
    /** The account that owns this sale slug. Resolved when requested. */
    account: Account
    __typename: 'SaleSlug'
}


/** Daily bid count data for a specific date in the sale. */
export interface SaleStatisticBidCounts {
    /** Date in YYYY-MM-DD format when the bids were placed. */
    date: Scalars['String']
    /** Number of bids placed on this specific date. */
    bidCount: Scalars['Int']
    __typename: 'SaleStatisticBidCounts'
}


/** Statistics for a sale providing insights into bidding activity, item performance, and auction dynamics. */
export interface SaleStatistics {
    /** Core sale performance metrics. */
    saleMetrics: SaleMetrics
    __typename: 'SaleStatistics'
}


/** Per-lot bidder engagement for a year. unique_bidders is per-lot and NON-ADDITIVE — not an account-level distinct-bidder count. */
export interface SaleStatsBidderEngagement {
    lotCount: Scalars['Int']
    avgUniqueBiddersPerLot: Scalars['Float']
    maxUniqueBiddersPerLot: Scalars['Int']
    avgBidsPerLot: Scalars['Float']
    caveats: Scalars['String'][]
    dayOfYearCutoff: Scalars['Int']
    __typename: 'SaleStatsBidderEngagement'
}


/** Closing-day profile for a year, one row per ISO day of week. */
export interface SaleStatsClosingDayProfile {
    rows: SaleStatsClosingDayRow[]
    caveats: Scalars['String'][]
    dayOfYearCutoff: Scalars['Int']
    __typename: 'SaleStatsClosingDayProfile'
}


/** Closing-day profile for one ISO day of week (1=Monday..7=Sunday). */
export interface SaleStatsClosingDayRow {
    dayOfWeek: Scalars['Int']
    lotCount: Scalars['Int']
    avgBidsPerLot: Scalars['Float']
    __typename: 'SaleStatsClosingDayRow'
}


/**
 * What auction data exists for an account. Read this to render a "data through
 * <date>" freshness label and to decide whether the other metrics are answerable.
 */
export interface SaleStatsDataCoverage {
    /** False when the account has no facts yet; the date/count fields are then zero and lastProjectedAt is null. */
    hasData: Scalars['Boolean']
    /** Earliest fact date as an integer date key (YYYYMMDD). Zero when there is no data. */
    minDateKey: Scalars['Int']
    /** Latest fact date as an integer date key (YYYYMMDD). Zero when there is no data. */
    maxDateKey: Scalars['Int']
    /** Number of terminal lots covered. */
    lotCount: Scalars['Int']
    /** Number of distinct currencies present in the data. */
    distinctCurrencies: Scalars['Int']
    /** Projection freshness (when rows were last written), RFC3339. Null when the account has no facts. This is not the latest sale close. */
    lastProjectedAt: (Scalars['String'] | null)
    /** False means the historical backfill has not finished, so early periods may be incomplete. */
    backfillDone: Scalars['Boolean']
    /** Business-rule caveats attached to this metric. */
    caveats: Scalars['String'][]
    __typename: 'SaleStatsDataCoverage'
}


/** Distinct winners for a year, one row per currency. */
export interface SaleStatsDistinctWinners {
    rows: SaleStatsDistinctWinnersRow[]
    caveats: Scalars['String'][]
    dayOfYearCutoff: Scalars['Int']
    __typename: 'SaleStatsDistinctWinners'
}


/** Distinct and repeat winners for one currency in a year. */
export interface SaleStatsDistinctWinnersRow {
    currency: Scalars['String']
    distinctWinners: Scalars['Int']
    repeatWinners: Scalars['Int']
    /** Repeat winners divided by distinct winners, in the range 0..1. */
    repeatBuyerShare: Scalars['Float']
    __typename: 'SaleStatsDistinctWinnersRow'
}


/** One currency/year GMV point. GMV is hammer price over SOLD lots only, in minor currency units. */
export interface SaleStatsGmvPoint {
    currency: Scalars['String']
    year: Scalars['Int']
    /** Hammer price over SOLD lots, minor currency units. Never sum across currencies. */
    gmv: Scalars['Int']
    __typename: 'SaleStatsGmvPoint'
}


/** Hammer vs mid-estimate for a year, one row per currency. */
export interface SaleStatsHammerVsEstimate {
    rows: SaleStatsHammerVsEstimateRow[]
    caveats: Scalars['String'][]
    dayOfYearCutoff: Scalars['Int']
    __typename: 'SaleStatsHammerVsEstimate'
}


/** Hammer vs mid-estimate for one currency in a year. */
export interface SaleStatsHammerVsEstimateRow {
    currency: Scalars['String']
    scoredLots: Scalars['Int']
    /** Total hammer over scored lots, minor currency units. */
    totalHammer: Scalars['Int']
    /** Total mid-estimate over scored lots, minor currency units. */
    totalMidEstimate: Scalars['Int']
    /** Average per-lot hammer-to-mid ratio. Greater than 1 means hammer beat mid-estimate on average. */
    avgHammerToMidRatio: Scalars['Float']
    __typename: 'SaleStatsHammerVsEstimateRow'
}


/** Lot outcome for one currency in a year: sold/unsold split, reserve-met rate, and the channel the sold lots closed through. */
export interface SaleStatsLotOutcomeRow {
    currency: Scalars['String']
    sold: Scalars['Int']
    unsold: Scalars['Int']
    total: Scalars['Int']
    sellThrough: Scalars['Float']
    /** Share of SOLD lots that met their reserve, in the range 0..1. */
    reserveMetRate: Scalars['Float']
    soldViaAuction: Scalars['Int']
    soldViaOffer: Scalars['Int']
    soldViaBuyNow: Scalars['Int']
    /** Share of SOLD lots closed via auction. The three *Share fields sum to 1 within a currency. */
    auctionShare: Scalars['Float']
    offerShare: Scalars['Float']
    buyNowShare: Scalars['Float']
    __typename: 'SaleStatsLotOutcomeRow'
}


/** Lot outcome summary for a year, one row per currency. */
export interface SaleStatsLotOutcomeSummary {
    rows: SaleStatsLotOutcomeRow[]
    caveats: Scalars['String'][]
    dayOfYearCutoff: Scalars['Int']
    __typename: 'SaleStatsLotOutcomeSummary'
}


/** Month-over-month GMV, one row per currency per month, with a like-for-like day-of-month cutoff applied to both months. */
export interface SaleStatsMomGmv {
    rows: SaleStatsMonthlyGmvPoint[]
    caveats: Scalars['String'][]
    /** Server-computed like-for-like day-of-month cutoff applied to both months. */
    dayOfMonthCutoff: Scalars['Int']
    __typename: 'SaleStatsMomGmv'
}


/** One currency/year/month GMV point. GMV is hammer price over SOLD lots only, in minor currency units. */
export interface SaleStatsMonthlyGmvPoint {
    currency: Scalars['String']
    year: Scalars['Int']
    month: Scalars['Int']
    /** Hammer price over SOLD lots, minor currency units. Never sum across currencies. */
    gmv: Scalars['Int']
    __typename: 'SaleStatsMonthlyGmvPoint'
}


/** Sell-through for a year. Currency-independent (a count ratio). */
export interface SaleStatsSellThrough {
    sold: Scalars['Int']
    total: Scalars['Int']
    /** Sold divided by total, in the range 0..1. */
    sellThrough: Scalars['Float']
    caveats: Scalars['String'][]
    /** Server-computed like-for-like day-of-year cutoff. */
    dayOfYearCutoff: Scalars['Int']
    __typename: 'SaleStatsSellThrough'
}


/** One ranked sale within a currency. GMV is hammer over SOLD lots, minor currency units. */
export interface SaleStatsTopSaleRow {
    currency: Scalars['String']
    /** 1-based rank within the currency (1 = highest GMV). */
    rank: Scalars['Int']
    saleId: Scalars['ID']
    /** Sale title from the sale dimension; null when the sale has no dimension row. */
    title: (Scalars['String'] | null)
    /** Hammer over SOLD lots, minor currency units. Never sum across currencies. */
    gmv: Scalars['Int']
    sold: Scalars['Int']
    total: Scalars['Int']
    __typename: 'SaleStatsTopSaleRow'
}


/** Top sales of a year, one row per (currency, rank). Ranked within a currency, never blended across currencies. */
export interface SaleStatsTopSales {
    rows: SaleStatsTopSaleRow[]
    caveats: Scalars['String'][]
    __typename: 'SaleStatsTopSales'
}


/** Year-over-year GMV, one row per currency per year, with a like-for-like day-of-year cutoff applied to both years. */
export interface SaleStatsYoyGmv {
    rows: SaleStatsGmvPoint[]
    caveats: Scalars['String'][]
    /** Server-computed like-for-like day-of-year cutoff applied to both years. */
    dayOfYearCutoff: Scalars['Int']
    __typename: 'SaleStatsYoyGmv'
}


/** Sale Status represent what status a sale is currently running in. */
export type SaleStatus = 'UNPUBLISHED' | 'PUBLISHED' | 'OPENED' | 'CLOSED' | 'CLOSING' | 'PAUSED' | 'PROCESSING' | 'LIVE'


/** SaleType represents the type of sale */
export type SaleType = 'LIVE' | 'ONLINE_TIMED'


/**
 * The shared identity of a sale, regardless of sale format. Implemented by the
 * English `Sale` and the `DutchSale`; future formats implement it too. Select common
 * fields directly and use `... on DutchSale` for format-specific data.
 */
export type SaleV2 = (DutchSale | Sale) & { __isUnion?: true }


/** A page of sales, polymorphic over sale format (each node is an English Sale or a DutchSale). */
export interface SaleV2Connection {
    edges: SaleV2Edge[]
    pageInfo: PageInfo
    __typename: 'SaleV2Connection'
}

export interface SaleV2Edge {
    cursor: Scalars['String']
    node: SaleV2
    __typename: 'SaleV2Edge'
}


/** A connection wrapper for sale watchlist entries. */
export interface SaleWatchlistConnection {
    /** The list of sale watchlist entry edges. */
    edges: SaleWatchlistEdge[]
    /** Pagination information. */
    pageInfo: PageInfo
    __typename: 'SaleWatchlistConnection'
}


/** An edge in the sale watchlist connection. */
export interface SaleWatchlistEdge {
    /** Cursor for this edge. */
    cursor: Scalars['String']
    /** The sale watchlist entry node. */
    node: SaleWatchlistEntry
    __typename: 'SaleWatchlistEdge'
}


/** A sale watchlist entry represents a user who has favourited a sale. */
export interface SaleWatchlistEntry {
    /** Unique identifier for the watchlist entry. */
    id: Scalars['ID']
    /** User ID of the user who favourited the sale. */
    userId: Scalars['String']
    /** Timestamp when the entry was created. */
    createdAt: Scalars['String']
    __typename: 'SaleWatchlistEntry'
}

export interface SalesAggregate {
    /** Number of open sales */
    open: Scalars['Int']
    /** Number of sales in a closing state */
    closing: Scalars['Int']
    /** Number of closed sales */
    closed: Scalars['Int']
    /** Number of published sales */
    published: Scalars['Int']
    /** Number of unpublished sales */
    unpublished: Scalars['Int']
    __typename: 'SalesAggregate'
}

export interface SalesEdge {
    /** Current sale cursor */
    cursor: Scalars['String']
    /** Sale node */
    node: Sale
    __typename: 'SalesEdge'
}


/** Configuration for a notification sent at a lead time before a sale event. */
export interface ScheduledNotificationConfiguration {
    /** Channel this configuration delivers on. */
    channel: NotificationChannel
    /**
     * Whether this configuration is currently sending. Change it with
     * `setNotificationConfigurationStatus`.
     */
    status: NotificationConfigurationStatus
    /** Which people are looked up when the notification is sent. Never empty. */
    audienceGroups: NotificationAudienceGroup[]
    /** When the notification fires. Never empty. */
    leadTimes: NotificationLeadTime[]
    /**
     * Sender used instead of the account's for this notification. Null means the
     * account's own sender is used. Email only.
     */
    sender: (NotificationEmailSender | null)
    /**
     * Reply-to used instead of the account's for this notification. Null means the
     * account's own is used. Email only.
     */
    replyToEmail: (Scalars['String'] | null)
    __typename: 'ScheduledNotificationConfiguration'
}


/** A namespace an account owns, reusable across that account's schemas. */
export interface SchemaNamespace {
    namespace: Scalars['String']
    accountId: Scalars['String']
    createdAt: Scalars['String']
    __typename: 'SchemaNamespace'
}


/** Search Key allows you to search our collections */
export interface SearchKey {
    /** Key value */
    key: Scalars['String']
    /** Collections */
    collections: Scalars['String'][]
    /** Expiration */
    expiration: Scalars['String']
    __typename: 'SearchKey'
}


/** Page info for search results using page-based pagination. */
export interface SearchPageInfo {
    /** Current page number (1-based) */
    currentPage: Scalars['Int']
    /** Number of results per page */
    perPage: Scalars['Int']
    /** Total number of pages */
    totalPages: Scalars['Int']
    /** Total number of results across all pages */
    totalCount: Scalars['Int']
    __typename: 'SearchPageInfo'
}


/** Connection type for search results */
export interface SearchResultConnection {
    /** Search result edges */
    edges: SearchResultEdge[]
    /** Page information */
    pageInfo: SearchPageInfo
    /** Total number of results found */
    resultCount: Scalars['Int']
    /**
     * Facet counts for building filter UIs.
     * Available facets depend on the search type.
     * 
     * For USER searches, facets may include:
     *   - trust_level: Distribution of trust levels
     *   - id_verification_status: Distribution of verification statuses
     */
    facets: FacetCount[]
    __typename: 'SearchResultConnection'
}


/** Edge for search results */
export interface SearchResultEdge {
    /** The search result node */
    node: SearchResultItem
    __typename: 'SearchResultEdge'
}


/** Union type representing a search result item. */
export type SearchResultItem = (User | SaleRegistration | SaleItem | SaleBanner | Item | Offer | Image | Video | Document | Activity) & { __isUnion?: true }


/** Search type enum specifies what type of node to search for. */
export type SearchType = 'USER' | 'SALE_REGISTRATION' | 'SALE_ITEM' | 'SALE' | 'ITEM' | 'OFFER' | 'ASSET' | 'ACTIVITY'


/**
 * A section marker within a sale. isFeaturedSelection distinguishes a featured
 * selection (carries a summary and an inclusive item-number range) from an
 * editorial section card (may carry an image and an open-ended range).
 */
export interface SectionMarker {
    /** Id of the section marker. */
    id: Scalars['ID']
    /** Heading. */
    title: Scalars['String']
    /** HTML summary, or null when unset. */
    summary: (Scalars['String'] | null)
    /** Inclusive lower item-number bound (matches Item.itemNumber). */
    fromItemNumber: Scalars['Int']
    /** Inclusive upper item-number bound, or null when open-ended. */
    toItemNumber: (Scalars['Int'] | null)
    /** Asset id of the marker image, if any. */
    imageAssetId: (Scalars['String'] | null)
    /** URL of the marker image, if any. */
    imageUrl: (Scalars['String'] | null)
    /** True for a featured selection, false for an editorial section card. */
    isFeaturedSelection: Scalars['Boolean']
    __typename: 'SectionMarker'
}

export interface SellLiveItemToBidError {
    error: Scalars['String']
    errorCode: SellLiveItemToBidErrorCode
    __typename: 'SellLiveItemToBidError'
}


/**
 * Keep this enum narrow: only add a code when the UI has a meaningfully
 * different recovery path than "show a generic error." Internal failures and
 * malformed input surface as generic GraphQL errors, not typed ones.
 */
export type SellLiveItemToBidErrorCode = 'BID_NOT_HIGHEST'


/**
 * Result of sellLiveItemToBid. Union of success (returns the updated SaleItem)
 * and a typed error describing why selling to the pinned bid was rejected.
 */
export type SellLiveItemToBidResult = (SellLiveItemToBidSuccess | SellLiveItemToBidError) & { __isUnion?: true }

export interface SellLiveItemToBidSuccess {
    saleItem: SaleItem
    __typename: 'SellLiveItemToBidSuccess'
}


/** Alpha2 country code for seller location */
export type SellerLocation = 'US' | 'IS' | 'AU' | 'AT' | 'BE' | 'HR' | 'CY' | 'DK' | 'EE' | 'FI' | 'FR' | 'DE' | 'GR' | 'IE' | 'IT' | 'XK' | 'LV' | 'LT' | 'LU' | 'MT' | 'MC' | 'ME' | 'NL' | 'PT' | 'SM' | 'SK' | 'SI' | 'ES' | 'VA' | 'CH' | 'NO' | 'SE' | 'GB'


/** Terms information, who and when terms were accepted */
export interface SellerTerms {
    accepted_by: Scalars['String']
    accepted_date: Scalars['String']
    __typename: 'SellerTerms'
}


/** An email integration delivering through SendGrid. */
export interface SendGridNotificationIntegration {
    /** Always `EMAIL`. */
    channel: NotificationChannel
    /** When the integration was set up, RFC 3339. */
    created: Scalars['String']
    /**
     * IANA timezone name used to render dates in notifications. Null means none was
     * configured, in which case dates render in GMT unless the sale's location
     * resolves to a known timezone.
     */
    timezone: (Scalars['String'] | null)
    /** Address outgoing email is sent from. */
    fromEmail: (Scalars['String'] | null)
    /** Display name shown beside `fromEmail`. Null means the address is shown bare. */
    fromName: (Scalars['String'] | null)
    /** Address replies are delivered to. Null means replies go to `fromEmail`. */
    replyToEmail: (Scalars['String'] | null)
    /**
     * Address that notifications about the account itself are delivered to, as
     * opposed to those delivered to one of its users.
     */
    accountNotificationEmail: (Scalars['String'] | null)
    __typename: 'SendGridNotificationIntegration'
}

export interface ShopifyConfiguration {
    /** Shopify Shop Id */
    shopId: (Scalars['String'] | null)
    __typename: 'ShopifyConfiguration'
}


/** Type representing a successful connection between an account and a Shopify store. */
export interface ShopifyConnection {
    accountId: Scalars['String']
    shopId: Scalars['String']
    __typename: 'ShopifyConnection'
}


/**
 * A physical building or office, account-scoped, where items reside. Address is
 * stored as structured fields; openingHours is free text.
 */
export interface Site {
    /** Id of the site. */
    id: Scalars['ID']
    /** Account the site belongs to. */
    accountId: Scalars['String']
    /** Site name. */
    name: Scalars['String']
    /** Address line 1. */
    addressLine1: (Scalars['String'] | null)
    /** Address line 2. */
    addressLine2: (Scalars['String'] | null)
    /** Address city. */
    addressCity: (Scalars['String'] | null)
    /** Address postal code. */
    addressPostalCode: (Scalars['String'] | null)
    /** Address country as an ISO code. */
    addressCountryIso: (Scalars['String'] | null)
    /** Address state, province, region, or area. */
    addressState: (Scalars['String'] | null)
    /** Contact phone number. */
    phone: (Scalars['String'] | null)
    /** Contact email address. */
    email: (Scalars['String'] | null)
    /** Free-text opening hours. */
    openingHours: (Scalars['String'] | null)
    /** Free-text collection instructions. */
    collectionInstructions: (Scalars['String'] | null)
    /** Whether an appointment is required to collect from this site. */
    appointmentRequired: Scalars['Boolean']
    /**
     * Case-sensitive canonical IANA timezone name for the site (e.g.
     * Europe/London, not europe/london), or null when unset.
     */
    timezone: (Scalars['String'] | null)
    /** When the site was archived (RFC3339), or null when active. */
    archivedAt: (Scalars['String'] | null)
    /** When the site was created (RFC3339). */
    created: Scalars['String']
    /** When the site was last modified (RFC3339). */
    modified: Scalars['String']
    /** Id of the user that created the site. */
    createdByUserId: Scalars['String']
    /** Id of the user that last modified the site. */
    modifiedByUserId: (Scalars['String'] | null)
    __typename: 'Site'
}

export interface SiteConnection {
    /** Site edges. */
    edges: SiteEdge[]
    /** Current page information. */
    pageInfo: PageInfo
    __typename: 'SiteConnection'
}

export interface SiteEdge {
    /** Current site cursor. */
    cursor: Scalars['String']
    /** Site node. */
    node: Site
    __typename: 'SiteEdge'
}


/** Specification sub-type enum */
export type SpecificationSubType = 'NOT_SET' | 'PAINTING_UNFRAMED' | 'PAINTING_FRAMED' | 'PAINTING_FRAMED_PLEXI' | 'PAINTING_FRAMED_GLASS' | 'WORK_ON_PAPER_UNFRAMED' | 'WORK_ON_PAPER_FRAMED' | 'WORK_ON_PAPER_FRAMED_PLEXI' | 'WORK_ON_PAPER_FRAMED_GLASS' | 'MIXED_MEDIA_UNFRAMED' | 'MIXED_MEDIA_FRAMED' | 'MIXED_MEDIA_FRAMED_PLEXI' | 'MIXED_MEDIA_FRAMED_GLASS' | 'PHOTOGRAPH_UNFRAMED' | 'PHOTOGRAPH_FRAMED' | 'PHOTOGRAPH_FRAMED_PLEXI' | 'PHOTOGRAPH_FRAMED_GLASS' | 'NEW_MEDIA' | 'SCULPTURE' | 'PEDESTAL' | 'PEDESTAL_CASE_GLASS' | 'PEDESTAL_CASE_PLEXI' | 'CERAMIC' | 'NEON' | 'TAPESTRY' | 'OTHER_ART' | 'GLASS_SCULPTURE' | 'TABLE' | 'CHAIR' | 'SOFA_LOVESEAT_CHAISE' | 'FLOOR_LAMP' | 'FLOOR_LAMP_SHADE' | 'TABLE_LAMP' | 'TABLE_LAMP_SHADE' | 'SCONCE' | 'OTTOMAN' | 'BOOKCASE_STORAGE' | 'NIGHTSTAND' | 'ARMOIRE_DRESSER' | 'CARPET_RUG' | 'MIRROR' | 'CHANDELIER' | 'BEDFRAME' | 'HEADBOARD' | 'DESK_VANITY' | 'MEDIA_CONSOLE' | 'OTHER_FURNITURE' | 'FOLDING_SCREEN' | 'LIGHTING_FIXTURE' | 'EARRINGS' | 'NECKLACE' | 'BRACELET' | 'RING' | 'BROOCH' | 'WATCH' | 'CUFFLINKS' | 'EYEGLASSES' | 'SET' | 'PRECIOUS_STONES' | 'SNUFF_BOX_CIGARETTE_CASE' | 'OTHER_JEWELRY' | 'VASE_VESSEL' | 'BOWL' | 'PLAQUE' | 'OBJECT_OF_VERTU' | 'CANDELABRA_CANDLESTICK' | 'DINNERWARE' | 'FLATWARE' | 'GLASSWARE' | 'SERVEWARE' | 'PORCELAIN_PLATE' | 'PORCELAIN_BOWL' | 'TABLETOP_ACCESSORY' | 'CLOCK' | 'OTHER_DECORATIVE_ARTS' | 'STAMP' | 'BOOK' | 'COIN' | 'DOCUMENT_MANUSCRIPT' | 'TOY' | 'MINIATURE_MODEL' | 'FIGURINE_DOLL' | 'NEON_SIGN' | 'MEMORABILIA' | 'CAMERA_ELECTRICAL' | 'OTHER_COLLECTIBLES' | 'DECOY' | 'TRADING_CARD' | 'FOSSIL' | 'MINERAL' | 'COLLECTIBLE_APPAREL' | 'WINE_BOTTLE' | 'SPIRITS_BOTTLE' | 'BEER_BOTTLE' | 'WINE_CASE' | 'SPIRITS_CASE' | 'BEER_CASE' | 'WINE_BARREL' | 'SPIRITS_BARREL' | 'BEER_BARREL' | 'OTHER_ALCOHOLS' | 'CAR' | 'MOTORCYCLE' | 'BUS' | 'VAN' | 'LIMOUSINE' | 'CARRIAGE' | 'TRAILER' | 'SIDECAR' | 'OTHER_AUTOMOTIVE' | 'CLOTHING' | 'FOOTWEAR' | 'HANDBAG' | 'ACCESSORIES' | 'OTHER_FASHION' | 'MUSICAL_INSTRUMENT' | 'FIREARM_WEAPON' | 'HUNTING_FISHING' | 'MEDICAL_EQUIPMENT' | 'OTHER' | 'PREPACKED_BOX'


/** Specification type enum */
export type SpecificationType = 'NOT_SET' | 'ART' | 'FURNITURE' | 'JEWELRY' | 'DECORATIVE_ARTS' | 'COLLECTIBLES' | 'ALCOHOL' | 'AUTOMOTIVE' | 'FASHION' | 'OTHER' | 'CLIENT_PACKAGE'

export interface StaggeredSaleItemScheduleConfiguration {
    /** The date and time when the first item should start closing. */
    firstItemClosingDate: Scalars['String']
    /**
     * The time between the start of each item's closing period, in milliseconds.
     * A value of 0 means all items close simultaneously.
     * For example, with spacingMs = 180000 (3 minutes) and closingTimeCountdown = 120000 (2 minutes),
     * there will be 1 minute between each item closing (if time is not extended by late bids).
     */
    spacingMs: Scalars['Int']
    __typename: 'StaggeredSaleItemScheduleConfiguration'
}


/**
 * StripePaymentProviderSession provides credentials for Stripe Connect embedded components.
 * An Account Session allows you to use Stripe's embedded components to build UIs for your connected accounts.
 */
export interface StripePaymentProviderSession {
    /** Publishable Key */
    publishableKey: Scalars['String']
    /** Account Session Client Secret */
    clientSecret: Scalars['String']
    __typename: 'StripePaymentProviderSession'
}

export interface Subscription {
    /**
     * Real-time information for sale related events.
     * Both Sale and SaleItem data is sent to the socket
     */
    saleActivity: SaleActivity
    __typename: 'Subscription'
}

export interface Tag {
    /** id of tag */
    id: Scalars['ID']
    /** Tag name */
    name: Scalars['String']
    /** Created date */
    created: Scalars['String']
    /** Associated date */
    associated: Scalars['String']
    __typename: 'Tag'
}


/**
 * Action Hook response from test message.
 * Contains the status code received.
 */
export interface TestActionHookResponse {
    requestHeaders: (HttpHeader | null)[]
    requestPayload: Scalars['String']
    requestMethod: Scalars['String']
    responseHeaders: ((HttpHeader | null)[] | null)
    responseBody: (Scalars['String'] | null)
    statusCode: Scalars['Int']
    __typename: 'TestActionHookResponse'
}

export type TrustLevel = 'TRUST_LEVEL_NONE' | 'TRUST_LEVEL_LOW' | 'TRUST_LEVEL_MEDIUM' | 'TRUST_LEVEL_HIGH' | 'TRUST_LEVEL_FULL'


/** Trust level information with modification tracking */
export interface TrustLevelInfo {
    /** Trust level */
    level: TrustLevel
    /** When the trust level was last modified */
    modifiedAt: Scalars['String']
    __typename: 'TrustLevelInfo'
}


/** An SMS integration delivering through Twilio. */
export interface TwilioNotificationIntegration {
    /** Always `SMS`. */
    channel: NotificationChannel
    /** When the integration was set up, RFC 3339. */
    created: Scalars['String']
    /**
     * IANA timezone name used to render dates in notifications. Null means none was
     * configured, in which case dates render in GMT unless the sale's location
     * resolves to a known timezone.
     */
    timezone: (Scalars['String'] | null)
    __typename: 'TwilioNotificationIntegration'
}

export interface UploadUrl {
    /** Image ID */
    imageId: Scalars['String']
    /** The signed upload url. */
    uploadUrl: Scalars['String']
    /** Image url to render the image after upload */
    imageUrl: Scalars['String']
    /** Headers that should be sent with upload */
    headers: (HttpHeader[] | null)
    /** Order */
    order: Scalars['Int']
    /** Optional unique external identifier. */
    externalId: (Scalars['String'] | null)
    __typename: 'UploadUrl'
}


/** The `User` type represents a user node in the system, including metadata such as account ID, user ID, creation and modification timestamps, and a profile from a connected identity provider and PII store of Basta. */
export interface User {
    /** Id of the user node */
    id: Scalars['ID']
    /** Account ID */
    accountId: Scalars['String']
    /** UserId */
    userId: Scalars['String']
    /** Created */
    created: Scalars['String']
    /** Modified */
    modified: Scalars['String']
    /** User Profile fetch information from identity provider and PII store of Basta */
    profile: (UserInfo | null)
    /** Tags */
    tags: Tag[]
    /** Whether the user is blocked from transacting on the platform */
    blocked: Scalars['Boolean']
    /**
     * The charges that apply to lots bought by this user, already restated for
     * them. Falls back to the account when this user does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges: ChargeConnection
    __typename: 'User'
}

export interface UserAddress {
    id: Scalars['String']
    addressType: AddressType
    line1: Scalars['String']
    line2: (Scalars['String'] | null)
    city: Scalars['String']
    state: (Scalars['String'] | null)
    postalCode: (Scalars['String'] | null)
    country: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    company: (Scalars['String'] | null)
    __typename: 'UserAddress'
}

export interface UserBidActivity {
    /** Account ID */
    accountId: Scalars['String']
    /** BidId UUID string */
    bidId: Scalars['String']
    /** Sale ID of the sale that includes the item in scope. */
    saleId: Scalars['String']
    /** Sale */
    sale: Sale
    /** ItemId */
    itemId: Scalars['String']
    /** Item */
    saleItem: SaleItem
    /** Amount of the bid in minor currency unit. */
    amount: Scalars['Int']
    /** Max amount of the bid in minor currency unit. */
    maxAmount: Scalars['Int']
    /** Users id that placed the bid */
    userId: Scalars['String']
    /** Date of when the bid was placed. */
    date: Scalars['String']
    /** Bid status of currently logged in user for this item */
    bidStatus: (BidStatus | null)
    /**
     * Bids sequence number tells us how bids are connected.
     * Bids with the same bid sequence number happend during the same Bid/Max-bid request.
     * Mainly used for cancelling bids.
     */
    bidSequenceNumber: Scalars['Int']
    /** Optional paddle id if bid was placed with a paddle */
    paddle: (Paddle | null)
    __typename: 'UserBidActivity'
}

export interface UserBidActivityConnection {
    edges: UserBidActivityEdge[]
    pageInfo: PageInfo
    __typename: 'UserBidActivityConnection'
}

export interface UserBidActivityEdge {
    cursor: Scalars['String']
    node: UserBidActivity
    __typename: 'UserBidActivityEdge'
}

export interface UserEdge {
    /** User */
    node: User
    /** Cursor */
    cursor: Scalars['String']
    __typename: 'UserEdge'
}


/** Type of user ID to get */
export type UserIdType = 'USER_ID' | 'IDENTITY_PROVIDER_ID' | 'BASTA_USER_ID'


/** User ID verification status with modification tracking */
export interface UserIdVerificationStatus {
    /** Verification ID */
    verificationId: Scalars['String']
    /** Is the user verified */
    verified: Scalars['Boolean']
    /** When the verification status was last modified */
    modifiedAt: Scalars['String']
    __typename: 'UserIdVerificationStatus'
}


/** The user info */
export interface UserInfo {
    /** UserId */
    userId: Scalars['String']
    /** Identity provider ID */
    identityProviderId: Scalars['String']
    /** User status (active or inactive) */
    status: UserStatus
    /** Whether the user's email address has been verified */
    emailVerified: Scalars['Boolean']
    /** Name */
    name: Scalars['String']
    /** Email */
    email: Scalars['String']
    /**
     * Free-form user role (e.g. "admin" or "store"). Null when unset. Mirrored from the
     * user record (source of truth) and Ory public_metadata.
     */
    role: (Scalars['String'] | null)
    /** Whether this client is flagged as a VIP. */
    vip: Scalars['Boolean']
    /** Attribution channel id the client came in through. Null when unset. */
    attributionChannelId: (Scalars['String'] | null)
    /** Attribution source id the client came in through. Null when unset. */
    attributionSourceId: (Scalars['String'] | null)
    /** Free-text note about how the client was attributed. Null when unset. */
    attributionSourceNote: (Scalars['String'] | null)
    /**
     * @deprecated Use addressesV2 instead, this will be removed in the next version of the schema
     * Addresses
     */
    addresses: UserAddress[]
    /** Addresses V2 */
    addressesV2: MailingAddress[]
    /** Primary Billing address */
    billingAddress: MailingAddress
    /** Primary Shipping address */
    shippingAddress: MailingAddress
    /**
     * Payment methods the user has on file. Currently contains the user's default
     * payment method only, and is empty when the user has none.
     */
    paymentMethods: PaymentMethod[]
    /**
     * The user's customer record at their payment provider. Null when the user has
     * no such record.
     */
    paymentProviderDetails: (UserPaymentProviderDetails | null)
    /** Phone numbers */
    phones: PhoneAddress[]
    /** Company name */
    companyName: (Scalars['String'] | null)
    /** Salutation */
    salutation: (Scalars['String'] | null)
    /** Timezone */
    timezone: (Scalars['String'] | null)
    /** Nationality */
    nationality: (Scalars['String'] | null)
    /** Date of birth */
    dateOfBirth: (Scalars['String'] | null)
    /** Preferred language */
    preferredLanguage: (Scalars['String'] | null)
    /** Trust level with modification tracking */
    trustLevel: TrustLevelInfo
    /** ID verification status with modification tracking */
    idVerificationStatus: UserIdVerificationStatus
    /** Username (optional) */
    username: (Scalars['String'] | null)
    /** Notification settings for the user on this account. */
    notificationSettings: UserNotificationSettings
    __typename: 'UserInfo'
}


/** Whether the user has opted in to one notification on one delivery channel. */
export interface UserNotificationPreference {
    notification: NotificationEvent
    channel: NotificationChannel
    optedIn: Scalars['Boolean']
    __typename: 'UserNotificationPreference'
}


/** A user's notification settings for one account. */
export interface UserNotificationSettings {
    /**
     * One preference per notification and delivery channel the account sends on.
     * Empty when preferences do not apply to this user.
     */
    preferences: UserNotificationPreference[]
    __typename: 'UserNotificationSettings'
}


/**
 * UserPaymentProviderDetails is a user's customer record at a payment provider.
 * The concrete type identifies the provider; select `__typename` to tell them apart.
 */
export type UserPaymentProviderDetails = (UserStripePaymentProviderDetails) & { __isUnion?: true }


/** UserPaymentProviderSession is a union of all possible payment provider sessions. */
export type UserPaymentProviderSession = (UserStripePaymentProviderSession) & { __isUnion?: true }


/** User account status */
export type UserStatus = 'ACTIVE' | 'INACTIVE'


/** A user's customer record with Stripe. */
export interface UserStripePaymentProviderDetails {
    /** The user's Stripe customer id. */
    id: Scalars['String']
    __typename: 'UserStripePaymentProviderDetails'
}


/**
 * UserStripePaymentProviderSession provides credentials for client-side Stripe integration.
 * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access control over a Customer.
 */
export interface UserStripePaymentProviderSession {
    /** Publishable Key */
    publishableKey: Scalars['String']
    /** Customer Session Client Secret */
    customerSessionClientSecret: Scalars['String']
    /** Setup Intent Client Secret */
    setupIntentClientSecret: Scalars['String']
    __typename: 'UserStripePaymentProviderSession'
}


/**
 * A signed jwt token from Basta that is inteded to authenticate a
 * single user for a websocket connection to get updates based on user context.
 */
export interface UserToken {
    /** Signed JWT token that can be used for websocket authentication */
    token: Scalars['String']
    /** Expiration date as string. */
    expirationDate: Scalars['String']
    __typename: 'UserToken'
}


/** Users connection for pagination */
export interface UsersConnection {
    /** User edges */
    edges: UserEdge[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'UsersConnection'
}


/** An Asset with a video MIME type. */
export interface Video {
    id: Scalars['String']
    accountId: Scalars['String']
    url: Scalars['String']
    contentType: Scalars['String']
    size: Scalars['Int']
    filename: Scalars['String']
    /** Optional client-assigned external identifier. */
    externalId: (Scalars['String'] | null)
    created: Scalars['String']
    modified: Scalars['String']
    __typename: 'Video'
}


/** Weight unit enum */
export type WeightUnit = 'NOT_SET' | 'KG' | 'LB'

export type WorkflowDateType = 'CONSIGNMENT_DEADLINE' | 'SETTLEMENT' | 'INVOICE_REMINDER_1' | 'INVOICE_REMINDER_2' | 'INVOICE_REMINDER_3' | 'PHOTOGRAPHY_DEADLINE' | 'CATALOGUING_DEADLINE' | 'PROOFING_DEADLINE' | 'LAUNCH_DATE'


/** A signed-day offset for one dimension cell of a workflow date row. */
export interface WorkflowDimensionOffset {
    dimension: WorkflowScheduleDimension
    /** Signed day count relative to the auction date; negative is before, positive is after. */
    offsetDays: Scalars['Int']
    __typename: 'WorkflowDimensionOffset'
}


/** One effective key date for a sale: either overridden or computed from the account offset and the sale's auction date. */
export interface WorkflowScheduleDate {
    dateType: WorkflowDateType
    /** Effective date (RFC3339). Null when computed but the sale has no auction date yet, or the applied dimension has no offset cell. */
    effectiveDate: (Scalars['String'] | null)
    source: WorkflowScheduleDateSource
    /** Dimension column used for the computed date; null for an override. */
    dimension: (WorkflowScheduleDimension | null)
    /** Signed day offset used for the computed date; null for an override. */
    offsetDays: (Scalars['Int'] | null)
    __typename: 'WorkflowScheduleDate'
}


/** Whether a sale's effective key date is an explicit override or computed from the account offset. */
export type WorkflowScheduleDateSource = 'OVERRIDE' | 'COMPUTED'

export type WorkflowScheduleDimension = 'LIVE' | 'TIMED' | 'PRINTED_CATALOGUE'


/** This account's workflow schedule grid, one row per configured date type, in display order. */
export interface WorkflowScheduleOffsets {
    rows: WorkflowScheduleRow[]
    __typename: 'WorkflowScheduleOffsets'
}


/** One workflow date row: its enabled state, display order, and per-dimension offsets. */
export interface WorkflowScheduleRow {
    dateType: WorkflowDateType
    enabled: Scalars['Boolean']
    sortOrder: Scalars['Int']
    offsets: WorkflowDimensionOffset[]
    /** True when this row differs from the platform default; false when it is the platform default. */
    modified: Scalars['Boolean']
    __typename: 'WorkflowScheduleRow'
}


/** Input for accepting a sale registration */
export interface AcceptSaleRegistrationInput {
/** Registration ID to accept */
registrationId: Scalars['String']}


/** Account Information */
export interface AccountGenqlSelection{
    /** ID of the account */
    id?: boolean | number
    /** Name of the account */
    name?: boolean | number
    /** Contact email address */
    email?: boolean | number
    /** created */
    created?: boolean | number
    /** modified */
    modified?: boolean | number
    /** account handle, identifier for the account */
    handle?: boolean | number
    /** description */
    description?: boolean | number
    /** account image url */
    imageUrl?: boolean | number
    /** account description (bio) */
    links?: LinkGenqlSelection
    /**
     * Payment details associated with account.
     * Integrating businesses will have null in this field
     */
    paymentDetails?: PaymentDetailsGenqlSelection
    /** Basta Bid Client */
    bastaBidClient?: boolean | number
    /**
     * Populated with Seller terms have been accepted for account.
     * Integrating businesses will have null in this field.
     */
    terms?: SellerTermsGenqlSelection
    /**
     * @deprecated Use schemas instead
     * Item schema
     */
    itemSchema?: boolean | number
    /** Basta Live Stream Enabled */
    bastaLiveStreamEnabled?: boolean | number
    /** Shopify Enabled Store Id */
    shopifyConfiguration?: ShopifyConfigurationGenqlSelection
    /** Auction Aggregators associated with the account */
    aggregators?: AggregatorGenqlSelection
    /** Metafields associated with the account */
    metafields?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldsInput} })
    /** Metafield associated with the account */
    metafield?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldInput} })
    /** Home country of the account as an ISO 3166-1 alpha-2 code. Null when unset. */
    homeCountryCode?: boolean | number
    /**
     * Auction symbols configured for the account. Always emits one entry per
     * AuctionSymbolType; glyph is null when unset.
     */
    auctionSymbols?: AuctionSymbolGenqlSelection
    /** Default auction format for the organisation. Null when no default is set. */
    preferredAuctionFormat?: boolean | number
    /** Default currency for the organisation. Null when no default is set. */
    defaultCurrency?: boolean | number
    /** Registered company address and legal details for the organisation. Null when none are set. */
    organisationDetails?: OrganisationDetailsGenqlSelection
    /** Default start bid as a percentage of the estimate. Null when no default is set. */
    defaultStartBidPercentage?: boolean | number
    /**
     * Artist's Resale Right configuration for this account, one entry per
     * currency. Empty when the account has no configuration.
     */
    arrSettings?: ArrSettingsGenqlSelection
    /**
     * Every charge configured for this account, disabled ones included. These are
     * the charges as the account set them, before any narrower level restates
     * them, so `appliesAt` is always ACCOUNT here. Empty when there are none.
     */
    charges?: (ChargeConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), options?: (ChargeOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountFeeGenqlSelection{
    /** ID of the account fee record */
    id?: boolean | number
    /** Name of the account fee which is used in orders */
    name?: boolean | number
    /** Account Fee type influences how the value is calculated */
    type?: boolean | number
    /**
     * Value of the account fee interpreted based on the type
     * * 500 means 5% if type is percentage
     * * 1000 means $10 if type is amount
     */
    value?: boolean | number
    /**
     * Upper limit of the account fee.
     * If empty then there is no upper limit.
     */
    upperLteLimit?: boolean | number
    /** Lower limit of the account fee. */
    lowerLimit?: boolean | number
    /**
     * How this fee rule is calculated. FLAT applies the rate to the full amount.
     * PROGRESSIVE applies the rate only to the portion of the amount within each bracket
     * (defined by lowerLimit and upperLteLimit). For PERCENTAGE+PROGRESSIVE the rate is
     * applied to the taxable portion within the bracket. For AMOUNT+PROGRESSIVE the fixed
     * charge is applied once as soon as the transaction amount exceeds the bracket's
     * lowerLimit — it does not prorate or repeat up to upperLteLimit.
     */
    calculationType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountImageAssociationGenqlSelection{
    /** The ID of the associated account */
    accountId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Filter for the Action Hook log. */
export interface ActionHookFilter {
/** Filter by Action Hook types */
types?: ((ActionType | null)[] | null),
/** Filter by Action Hook status */
statuses?: ((ActionHookStatus | null)[] | null)}


/**
 * Action Hook Log represents a recorded Action Hook HTTP request to a customers web servers.
 * Log entry may contain information about a pending, successful or failed request.
 */
export interface ActionHookLogGenqlSelection{
    /** Action Hook log entry identifier. */
    id?: boolean | number
    /** Account identifier. */
    accountId?: boolean | number
    /** Idempotency key */
    idempotencyKey?: boolean | number
    /** Action triggering the Action Hook. */
    action?: boolean | number
    /** Action Hook receiver endpoint. */
    url?: boolean | number
    /** Headers sent with the Action Hook request. */
    headers?: HttpHeaderGenqlSelection
    /** Request Payload as stringified json */
    requestPayload?: boolean | number
    /** Response from Action Hook receiver. */
    response?: boolean | number
    /** Status of the Action Hook request. */
    status?: boolean | number
    /** Error message returned by receiver. */
    error?: boolean | number
    /** Number of HTTP request attempts. */
    retries?: boolean | number
    /** Log creation timestamp. */
    createdAt?: boolean | number
    /** Latest request execution timestamp. */
    executedAt?: boolean | number
    /** Next retry date. */
    nextRetryDate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Datatype to group together 'connected' Action Hook logs
 * based on page information.
 */
export interface ActionHookLogConnectionGenqlSelection{
    /** Action Hook log edges */
    edges?: ActionHookLogEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Datatype encapsulating an Action Hook log entry and its cursor. */
export interface ActionHookLogEdgeGenqlSelection{
    /** Current Action Hook log cursor */
    cursor?: boolean | number
    /** Action Hook log node */
    node?: ActionHookLogGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Action Hook subscription contains subscriber registration information.
 * Action Hook is an action that occurs when an event happens.
 * Action can be an HTTP POST request that will be triggered to customers web servers.
 */
export interface ActionHookSubscriptionGenqlSelection{
    /** Unique identifier for the subscription. Use this ID when updating or deleting the subscription. */
    id?: boolean | number
    /** Account identifier. */
    accountId?: boolean | number
    /** Name of the basta action that is being subscribed to. */
    action?: boolean | number
    /** Action Hook receiver endpoint. */
    url?: boolean | number
    /** Custom HTTP header values sent with the action Action Hook. */
    headers?: HttpHeaderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input to create an Action Hook subscription. */
export interface ActionHookSubscriptionInput {
/** Events that trigger the action. */
action: ActionType,
/** Webhook URL that is called when Action Hook is triggered. */
url: Scalars['String'],
/** Custom HTTP header values sent with the action. */
headers?: ((HttpHeaderInput | null)[] | null)}


/** A tracked change to an entity (sale, sale-item, item). */
export interface ActivityGenqlSelection{
    id?: boolean | number
    entityType?: boolean | number
    entityId?: boolean | number
    activityType?: boolean | number
    /** @deprecated Use principal.type */
    principalType?: boolean | number
    /** @deprecated Use principal.id */
    principalId?: boolean | number
    occurredAt?: boolean | number
    changes?: FieldChangeGenqlSelection
    principal?: PrincipalGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddConsignmentStaffInput {consignmentId: Scalars['String'],
/**
 * Staff identity ids (Ory Kratos) to add to the staff set. Each must be a member
 * of the account. Added as non-lead, except that when the consignment has no
 * staff yet one of them is promoted to lead.
 */
consignmentStaffUserIds: Scalars['String'][]}

export interface AddConsignorsInput {consignmentId: Scalars['String'],
/** Basta user UUIDs to add as (non-main) consignors. */
consignorUserIds: Scalars['String'][]}

export interface AddDashboardUserRoleInput {
/** The user ID to assign the role to. */
userId: Scalars['String'],
/** The role to assign. */
role: DashboardUserRole}

export interface AddFairWarningNotificationToItemInput {
/** Item ID */
itemId: Scalars['String'],
/** Sale ID */
saleId: Scalars['String']}


/** Add a current item to a sale. */
export interface AddItemToSaleInput {
/** Id of the sale that is associated with the item. */
saleId: Scalars['String'],
/** Item id of the item that you are adding to the sale. */
itemId: Scalars['String'],
/** Optional bid increment table for this item. */
bidIncrementTable?: (BidIncrementTableInput | null),
/** Starting bid of the item in minor currency unit. */
startingBid?: (Scalars['Int'] | null),
/** Reserve of the item in minor currency unit. */
reserve?: (Scalars['Int'] | null),
/** Low estimate of the item (optional) in minor currency unit. */
lowEstimate?: (Scalars['Int'] | null),
/** High estimate of the item (optional) in minor currency unit. */
highEstimate?: (Scalars['Int'] | null),
/** Item number is used to order items (optional) */
ItemNumber?: (Scalars['Int'] | null),
/**
 * Allowed BidTypes on the item.
 * Defaults to allowing only Max bids if not supplied.
 */
allowedBidTypes?: (BidType[] | null),
/**
 * Date and time when item should open up for bidding.
 * Format: RFC3339 timestamp.
 * Example: "2019-10-12T07:20:50.52Z"
 */
openDate?: (Scalars['String'] | null),
/**
 * Date and time when item should close.
 * Format: RFC3339 timestamp.
 * Example: "2019-10-12T07:20:50.52Z"
 */
closingDate?: (Scalars['String'] | null),
/** Optional slug for the sale item (pretty URL segment). */
slug?: (Scalars['String'] | null),
/** Should item be hidden from public view. */
hidden?: (Scalars['Boolean'] | null),
/**
 * ClosingTime countdown is the sniping duration in milliseconds.
 * If not provided it defaults to 120000ms (2 minutes).
 */
closingTimeCountdown?: (Scalars['Int'] | null),
/**
 * Unique external identifier, e.g. external system's id, inventory id, etc.
 * If set, this overrides the external_id for the sale item, but does not update the external_id on the underlying item itself. Setting this to an empty string will clear the external_id for the sale item.
 */
externalId?: (Scalars['String'] | null),
/** Optional lot display number. */
displayNumber?: (Scalars['String'] | null),
/** Optional highlight configuration for the item. */
highlight?: (ItemHighlightInput | null),
/** Metafields for the sale item, this is optional and will only trigger a metafield update if provided. To remove a metafield use the deleteMetafield input. */
metafields?: (MetafieldInput[] | null),
/** Reserve type for the item. */
reserveType?: (ReserveType | null)}

export interface AddLiveStreamToSaleInput {
/** Sale ID */
saleId: Scalars['String'],
/** Live Stream URL */
url: Scalars['String'],
/** Live Stream Type */
type: LiveStreamType}

export interface AddMessageNotificationToItemInput {
/** Item ID */
itemId: Scalars['String'],
/** Sale ID */
saleId: Scalars['String'],
/** Message */
message: Scalars['String']}


/** Input for adding packaging to an existing item */
export interface AddPackagingInput {itemId: Scalars['String'],packaging: ItemPackagingInput[]}

export interface AddPaddleToSaleInput {
/** Sale ID */
saleId: Scalars['String'],
/** Paddle ID */
paddleIdentifier: Scalars['String'],
/** Paddle User ID */
userId: Scalars['String'],
/** Paddle Type */
type: PaddleType}


/** Input for adding specifications to an existing item */
export interface AddSpecificationsInput {itemId: Scalars['String'],specifications: ItemSpecificationsInput[]}

export interface AddTagToItemInput {
/** Item ID */
itemId: Scalars['String'],
/** Tag Name */
name: Scalars['String']}

export interface AddTagToSaleItemInput {
/** Sale ID */
saleId: Scalars['String'],
/** Item ID */
itemId: Scalars['String'],
/** Tag Name */
name: Scalars['String']}

export interface AddTagToUserInput {
/** User ID */
userId: Scalars['String'],
/** Tag Name */
name: Scalars['String']}


/**
 * An affiliate of an account. Affiliates can be invited to refer traffic and sales
 * back to the account, and event attribution is tracked against them.
 */
export interface AffiliateGenqlSelection{
    /** Affiliate ID. */
    id?: boolean | number
    /** Owning account ID. */
    accountId?: boolean | number
    /** First name of the affiliate. */
    firstName?: boolean | number
    /** Last name of the affiliate. May be empty when only a first name was provided. */
    lastName?: boolean | number
    /** Contact email for the affiliate. */
    email?: boolean | number
    /**
     * Referral token used to attribute traffic and conversions to this affiliate.
     * Unique within an account.
     */
    token?: boolean | number
    /** User ID that originally created the affiliate. */
    createdBy?: boolean | number
    /** User ID that last updated the affiliate. */
    updatedBy?: boolean | number
    /** RFC3339 timestamp of creation. */
    createdAt?: boolean | number
    /** RFC3339 timestamp of last update. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AffiliateConnectionGenqlSelection{
    /** Affiliate edges. */
    edges?: AffiliateEdgeGenqlSelection
    /** Page information. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AffiliateEdgeGenqlSelection{
    /** Cursor for this affiliate edge. */
    cursor?: boolean | number
    /** Affiliate node. */
    node?: AffiliateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Filter/pagination input for listing affiliates. */
export interface AffiliatesInput {
/** Page size. */
first?: (Scalars['Int'] | null),
/** Cursor returned from a previous page. */
after?: (Scalars['String'] | null),
/** Pagination direction (default FORWARD). */
direction?: (PaginationDirection | null)}

export interface AggregatorGenqlSelection{
    name?: boolean | number
    /** Identifier is chosen by the account and is used as a userId for bids placed on behalf of the aggregator. */
    identifier?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * API key represent a secret key that allows
 * software to access the API on behalf of customer.
 */
export interface ApiKeyGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    accountId?: boolean | number
    created?: boolean | number
    roles?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiKeyConnectionGenqlSelection{
    /** Edges */
    edges?: ApiKeyEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Created API key represent a secret key that allows
 * software programs to access the API on behalf of customers to access the API.
 * Make sure to copy api key now as it will not shown again.
 */
export interface ApiKeyCreatedGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    generatedApiKey?: boolean | number
    roles?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiKeyEdgeGenqlSelection{
    /** Current cursor */
    cursor?: boolean | number
    /** Current node */
    node?: ApiKeyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input object for when creating a API key */
export interface ApiKeyInput {
/** Name of the API key */
name: Scalars['String'],
/** Role associated to API key */
role: ApiKeyRole[]}


/**
 * API token represent a token that allows
 * customers to access the API in machine and machine manner.
 */
export interface ApiTokenGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    accountId?: boolean | number
    created?: boolean | number
    roles?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** DEPRECATED. */
export interface ApiTokenConnectionGenqlSelection{
    /** Edges */
    edges?: ApiTokensEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Created API token represent a token that allows
 * customers to access the API in machine and machine manner and includes
 * the API key that the caller needs to write down (not able to see the key again)
 */
export interface ApiTokenCreatedGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    generatedApiKey?: boolean | number
    roles?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * DEPRECATED.
 * Input object for when creating a API token
 */
export interface ApiTokenInput {
/** Name of the API token */
name: Scalars['String'],
/** Role associated to API token */
role: ApiTokenRole[]}


/** DEPRECATED. */
export interface ApiTokensEdgeGenqlSelection{
    /** Current cursor */
    cursor?: boolean | number
    /** Current node */
    node?: ApiTokenGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * One rung of the Artist's Resale Right royalty ladder. The portion of the sale
 * price between lowerLimit and upperLteLimit is charged at rate.
 */
export interface ArrBandGenqlSelection{
    /** Id of the band. */
    id?: boolean | number
    /** Lower bound of the portion this band covers, in minor currency units. */
    lowerLimit?: boolean | number
    /**
     * Upper bound of the portion this band covers, in minor currency units.
     * Null on the highest band, which has no upper bound.
     */
    upperLteLimit?: boolean | number
    /** Rate charged on this portion, in basis points: 400 is 4%, 25 is 0.25%. */
    rateBps?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One band of a replacement royalty ladder. */
export interface ArrBandInput {lowerLimit: Scalars['Int'],
/** Omit on the highest band to leave it unbounded. */
upperLteLimit?: (Scalars['Int'] | null),
/** Rate in basis points: 400 is 4%, 25 is 0.25%. */
rateBps: Scalars['Int']}


/**
 * Artist's Resale Right configuration for one currency. The royalty is charged to
 * the buyer on the sale price, excluding buyer's premium.
 */
export interface ArrSettingsGenqlSelection{
    /**
     * Currency the amounts below are in. An account configures each currency it
     * sells in separately.
     */
    currency?: boolean | number
    /** Whether the royalty is charged at all in this currency. */
    enabled?: boolean | number
    /**
     * Sale price at or above which the royalty applies, in minor currency units.
     * Below it nothing is charged; at or above it the bands apply to the whole
     * price, not only the part above the threshold.
     */
    thresholdAmount?: boolean | number
    /**
     * Upper bound on the total royalty for a single lot, in minor currency units.
     * Null means the royalty is uncapped.
     */
    capAmount?: boolean | number
    /**
     * The royalty ladder, ordered from the lowest portion upwards. Each band
     * charges its own rate on its own portion and the results are summed.
     */
    bands?: ArrBandGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A file uploaded via createAssetUploadUrl. One of three variants: Image, Video,
 * or Document. The variant is chosen from the file's MIME type. Fields common to
 * every variant (id, url, externalId) can be queried directly; variant-specific
 * fields require an `... on Image` / `... on Video` / `... on Document` fragment.
 */
export interface AssetGenqlSelection{
    /** Asset ID (UUID). */
    id?: boolean | number
    /** URL to fetch the uploaded file. Becomes fetchable once the upload completes. */
    url?: boolean | number
    /** Optional client-assigned external identifier. */
    externalId?: boolean | number
    on_Document?: DocumentGenqlSelection
    on_Image?: ImageGenqlSelection
    on_Video?: VideoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The signed URL and metadata returned by createAssetUploadUrl. The client PUTs
 * the file bytes to uploadUrl within its expiry window; assetUrl becomes fetchable
 * once the upload completes.
 */
export interface AssetUploadUrlGenqlSelection{
    /** The newly created asset's ID (UUID). */
    assetId?: boolean | number
    /** Signed URL to PUT the file bytes to. Expires 15 minutes after issuance. */
    uploadUrl?: boolean | number
    /** URL to fetch the uploaded file. Becomes fetchable once the upload completes. */
    assetUrl?: boolean | number
    /** Headers the client must send with the PUT request (e.g. Content-Type). */
    headers?: HttpHeaderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AssociateUserToAccountInput {
/**
 * The user ID to associate to the account.
 * Exactly one of userId or email must be provided.
 */
userId?: (Scalars['String'] | null),
/**
 * The email address of the user to associate.
 * The user must already exist in the system.
 * Exactly one of userId or email must be provided.
 */
email?: (Scalars['String'] | null),
/** The role to assign. Defaults to OWNER if not provided. */
role?: (DashboardUserRole | null)}

export interface AttachSaleRegistrationPoliciesInput {
/** Sale ID that the policies should be attached to */
saleId: Scalars['String'],
/** Policy IDs to attach */
policyIds: Scalars['String'][]}


/**
 * An account-scoped attribution channel: how a client reached the auction house
 * (e.g. website, phone, walk-in).
 */
export interface AttributionChannelGenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    name?: boolean | number
    /** When the channel was archived (RFC3339). Null means active. */
    archivedAt?: boolean | number
    /** When the channel was created (RFC3339). */
    created?: boolean | number
    /** When the channel was last modified (RFC3339). */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An account-scoped attribution source: what prompted a client to reach the
 * auction house (e.g. web search, referral).
 */
export interface AttributionSourceGenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    name?: boolean | number
    /** When the source was archived (RFC3339). Null means active. */
    archivedAt?: boolean | number
    /** When the source was created (RFC3339). */
    created?: boolean | number
    /** When the source was last modified (RFC3339). */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A per-account auction symbol: the fixed type and its configured glyph.
 * glyph is null when the account has not configured one.
 */
export interface AuctionSymbolGenqlSelection{
    type?: boolean | number
    glyph?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for a single auction symbol glyph. */
export interface AuctionSymbolInput {type: AuctionSymbolType,glyph?: (Scalars['String'] | null)}

export interface BastaLiveStreamGenqlSelection{
    /**
     * Is this option available for the account,
     * if not the account has to enable it in account settings.
     */
    optionAvailable?: boolean | number
    /** LiveStream URL */
    publicUrl?: boolean | number
    ingestUrl?: boolean | number
    /** Channel ID */
    channelId?: boolean | number
    /** Stream key */
    streamKey?: boolean | number
    /** Is stream live */
    isLive?: boolean | number
    /** Current viewers */
    currentViewers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A bid on a item */
export interface BidGenqlSelection{
    /** BidId UUID string */
    bidId?: boolean | number
    /** Sale ID of the sale that includes the item in scope. */
    saleId?: boolean | number
    /** Item ID of the item that includes the bid in scope. */
    itemId?: boolean | number
    /** Sale */
    sale?: SaleGenqlSelection
    /** Item */
    saleItem?: SaleItemGenqlSelection
    /** Amount of the bid in minor currency unit. */
    amount?: boolean | number
    /** Max amount of the bid in minor currency unit. */
    maxAmount?: boolean | number
    /** Users id that placed the bid */
    userId?: boolean | number
    /** User Info */
    user?: UserInfoGenqlSelection
    /** Date of when the bid was placed. */
    date?: boolean | number
    /** Bid status of currently logged in user for this item */
    bidStatus?: boolean | number
    /**
     * Bids sequence number tells us how bids are connected.
     * Bids with the same bid sequence number happend during the same Bid/Max-bid request.
     * Mainly used for cancelling bids.
     */
    bidSequenceNumber?: boolean | number
    /** A unique hash composed of SaleId, ItemId and UserId */
    bidderIdentifier?: boolean | number
    /** Optional paddle id if bid was placed with a paddle */
    paddle?: PaddleGenqlSelection
    /** BidOrigin */
    bidOrigin?: BidOriginGenqlSelection
    /** User Profile, will only resolve if the user exists in configured identity provider. */
    userProfile?: UserInfoGenqlSelection
    /** Registration ID associated with this bid. */
    registrationId?: boolean | number
    /**
     * Registration associated with this bid. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration?: SaleRegistrationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Bid increment table represent how increments behave for a
 * specific item or a sale.
 */
export interface BidIncrementTableGenqlSelection{
    /** All increments in the table. */
    rules?: RangeRuleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bid increment table input, to control increments in a sale. */
export interface BidIncrementTableInput {rules: RangeRuleInput[]}


/** Bid on behalf of a user in a sale. */
export interface BidOnBehalfInput {
/** user id of the user that bid is being placed for. */
userId: Scalars['String'],
/** bid amount of the bid in minor currency unit. */
amount: Scalars['Int'],
/** item id of the item */
itemId: Scalars['String'],
/** The sale id which the item belongs that is being bidded on */
saleId: Scalars['String'],
/** The type represent what kind of bid is being placed on an item. */
type: BidType,
/** BidOrigin */
bidOrigin?: (BidOriginInput | null),
/**
 * Optional registration ID for this bid. When omitted, it will be looked up by userId and bidOrigin.
 * If none is found, a registration will be automatically created for the (user, origin) and attached to the bid.
 */
registrationId?: (Scalars['String'] | null)}

export interface BidOriginGenqlSelection{
    on_OnlineBidOrigin?:OnlineBidOriginGenqlSelection,
    on_PaddleBidOrigin?:PaddleBidOriginGenqlSelection,
    on_PhoneBidOrigin?:PhoneBidOriginGenqlSelection,
    on_Aggregator?:AggregatorGenqlSelection,
    __typename?: boolean | number
}

export interface BidOriginInput {type: BidOriginType,
/** Only use if type is Aggregator then pass in the name of the aggregator. */
name?: (Scalars['String'] | null)}


/** A bid is either successful or there was an error */
export interface BidPlacedGenqlSelection{
    on_BidPlacedSuccess?:BidPlacedSuccessGenqlSelection,
    on_BidPlacedError?:BidPlacedErrorGenqlSelection,
    __typename?: boolean | number
}


/** Error response for bidOnItem */
export interface BidPlacedErrorGenqlSelection{
    /** Error description. */
    error?: boolean | number
    /** Error code if an error occured. */
    errorCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bid was successfully placed */
export interface BidPlacedSuccessGenqlSelection{
    /** BidId */
    bidId?: boolean | number
    /** Amount of placed bid. Minor currency units. */
    amount?: boolean | number
    /**
     * MaxAmount, only set if bid was of type MaxBid.
     * Should be kept secret and never rendered to clients.
     */
    maxAmount?: boolean | number
    /** Server time of when the bid was recorded. */
    date?: boolean | number
    /** Bid Status of the bid */
    bidStatus?: boolean | number
    /** BidType */
    bidType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Restrictions for bidding on a sale */
export interface BidRestrictionsGenqlSelection{
    /** Users need to have an accepted registration to bid on this sale */
    acceptedRegistrationRequired?: boolean | number
    /** When true, phone registrations are open/enabled for this sale */
    phoneRegistrationOpen?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input object for restrictions for bidding on a sale */
export interface BidRestrictionsInput {
/** Users need to have an accepted registration to bid on this sale */
acceptedRegistrationRequired: Scalars['Boolean'],
/**
 * When true, phone registrations are open/enabled for this sale.
 * Defaults to true if not specified (backwards compatible).
 */
phoneRegistrationOpen?: (Scalars['Boolean'] | null)}


/**
 * Bidder token is a token that is signed on behalf a user.
 * The token returned will allow users to bid on items.
 */
export interface BidderTokenGenqlSelection{
    token?: boolean | number
    expiration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bidder token input, when generating a bidder token. */
export interface BidderTokenInput {
/** Required metadata that needs to be included to generate a bidder token. */
metadata: TokenMetadata}

export interface BidsConnectionGenqlSelection{
    edges?: BidsEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BidsEdgeGenqlSelection{
    cursor?: boolean | number
    node?: BidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockUserInput {
/** User ID */
userId: Scalars['String']}


/**
 * Input for buying an item outright on behalf of a buyer at its fixed buy-now price.
 * The buyer is identified explicitly by buyerUserId; the acting admin never becomes
 * the buyer. The expectedPrice and currency echo the item's current buy-now config
 * and are rejected when stale.
 */
export interface BuyItemInput {itemId: Scalars['String'],saleId: Scalars['String'],
/** Basta user id (`User.id`) of the buyer the buy is made on behalf of. */
buyerUserId: Scalars['String'],expectedPrice: Scalars['Int'],currency: Scalars['String']}


/**
 * Cancel latest bid on an item.
 * Caution: Be careful when using this operation. Multiple requests will end in multiple
 * placed bids to be cancelled.
 * Cancel latest bid will remove the latest bid and any reactive bid placed.
 * This results in 1 or 2 bids being cancelled per call.
 */
export interface CancelLatestBidOnItemInput {
/** Item ID of the item */
itemId: Scalars['String'],
/** Sale ID of the sale that includes the item in scope. */
saleId: Scalars['String'],
/** Bid sequence number of the latest bid. */
sequenceNumber: Scalars['Int']}

export interface CancelPaymentOrderInput {
/** OrderId to cancel */
orderId: Scalars['ID']}


/** Response when canceling latest bid on item */
export interface CanceledLatestBidOnItemGenqlSelection{
    removedBids?: BidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Card is a payment card on file for a user. Only non-sensitive identifying
 * details are exposed — never a full card number.
 */
export interface CardGenqlSelection{
    /** Card identifier */
    id?: boolean | number
    /** Card brand (e.g. "visa" or "mastercard") */
    brand?: boolean | number
    /** Last four digits of the card number */
    last4?: boolean | number
    /** Expiry month, 1-12 */
    expMonth?: boolean | number
    /** Expiry year, four digits */
    expYear?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A hierarchical category that can be applied to items, sales, or sale items. */
export interface CategoryGenqlSelection{
    /** Id of the category. */
    id?: boolean | number
    /** Account that owns the category. */
    accountId?: boolean | number
    /** Human-readable category name. */
    name?: boolean | number
    /** URL-friendly slug. */
    slug?: boolean | number
    /** Parent category id, if this category is nested. */
    parentId?: boolean | number
    /** Parent category, if this category is nested. */
    parent?: CategoryGenqlSelection
    /** Direct children of this category, paginated. */
    children?: (CategoryConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Timestamp when the category was created. */
    createdAt?: boolean | number
    /** Timestamp when the category was last updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A paginated connection of categories. */
export interface CategoryConnectionGenqlSelection{
    edges?: CategoryEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a category connection. */
export interface CategoryEdgeGenqlSelection{
    node?: CategoryGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A flat list of categories returned from association mutations. */
export interface CategoryListGenqlSelection{
    categories?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A charge the account applies to lots, in one currency. An account that sells in
 * several currencies configures the same charge once per currency, and a lot is
 * only ever charged in the currency it settles in.
 * 
 * Read from a sale item, consignment, user, item type or sale genre, a charge
 * comes back already restated for that level. `appliesAt` says which level the
 * values came from.
 */
export interface ChargeGenqlSelection{
    /** The catalogue id, the same at every level the charge is read from. */
    id?: boolean | number
    /** Name shown to buyers, unique per currency within the account. */
    name?: boolean | number
    /** Currency of every amount below. Cannot be changed once the charge exists. */
    currency?: boolean | number
    /** The lot amount the bands are measured against. */
    basedOn?: boolean | number
    /** How often the charge is raised. See the enum values for what counts. */
    frequency?: boolean | number
    /** The sale result that triggers the charge. */
    outcome?: boolean | number
    /** How the ladder is applied to the amount. */
    calculationType?: boolean | number
    /**
     * Whether the charge is currently raised. Charges are disabled, never
     * deleted, because settled statements reference them.
     */
    status?: boolean | number
    /**
     * Lower bound on the amount charged, in minor currency units. 0 means the
     * amount is not raised to a floor.
     */
    minimum?: boolean | number
    /**
     * Upper bound on the amount charged, in minor currency units. 0 means the
     * amount is not capped.
     */
    maximum?: boolean | number
    /**
     * The ladder, ordered from the lowest portion upwards. Empty when no ladder
     * has been set yet, in which case the charge produces nothing.
     */
    bands?: ChargeBandGenqlSelection
    /**
     * The level these values came from. ACCOUNT means the charge applies here
     * exactly as the account configured it.
     */
    appliesAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * One rung of a charge ladder. The portion of the amount between lowerLimit and
 * upperLteLimit is charged at value.
 */
export interface ChargeBandGenqlSelection{
    /** Stable for as long as the ladder is not replaced. */
    id?: boolean | number
    /** Lower bound of the portion this band covers, in minor currency units. */
    lowerLimit?: boolean | number
    /**
     * Upper bound of the portion this band covers, in minor currency units. Null
     * on the highest band, which has no upper bound.
     */
    upperLteLimit?: boolean | number
    /** Whether `value` is a rate or a fixed sum. */
    type?: boolean | number
    /**
     * Basis points when type is PERCENTAGE — 2600 is 26%. Minor currency units
     * when type is AMOUNT.
     */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One band of a replacement ladder. */
export interface ChargeBandInput {
/**
 * Lower bound of the portion this band covers, in minor currency units. The
 * lowest band must start at 0.
 */
lowerLimit: Scalars['Int'],
/** Omit on the highest band to leave it unbounded. */
upperLteLimit?: (Scalars['Int'] | null),
/** Whether `value` is a rate or a fixed sum. */
type: ChargeBandType,
/** Basis points when type is PERCENTAGE, minor currency units when AMOUNT. */
value: Scalars['Int']}


/** A paginated connection of charges, oldest first. */
export interface ChargeConnectionGenqlSelection{
    /** The charges on this page, oldest first. Empty when there are none. */
    edges?: ChargeEdgeGenqlSelection
    /**
     * Cursors for this page, and whether another one follows. Charges page
     * forward only, so hasPreviousPage is always false.
     */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a charge connection. */
export interface ChargeEdgeGenqlSelection{
    /** The charge, already restated for whichever level it was read at. */
    node?: ChargeGenqlSelection
    /** Opaque. Pass it as `after` to resume reading from just past this charge. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Optional settings applied when reading charges. */
export interface ChargeOptions {
/**
 * Read only the charges in this currency. Omit to read every currency the
 * account has configured.
 */
currency?: (Currency | null)}


/** Identifies the level a charge is being set at. */
export interface ChargeScopeInput {
/** Which level `id` refers to. */
type: ChargeScopeType,
/** The consignment, user, item type or sale genre. For SALE_ITEM, the item. */
id: Scalars['ID'],
/** Required for SALE_ITEM and rejected on every other level. */
saleId?: (Scalars['ID'] | null)}


/** Input object for when forcing sale to close. */
export interface CloseSaleInput {saleId: Scalars['String']}


/**
 * Input type for connecting a Shopify store to an account.
 * Include all required details for Shopify authentication.
 */
export interface ConnectShopifyToAccountInput {shopId: Scalars['String'],token: Scalars['String']}


/**
 * A consignment groups one or many items under a single consignor and carries the
 * agreed fee rules.
 */
export interface ConsignmentGenqlSelection{
    /** Id of the consignment. */
    id?: boolean | number
    /** Cursor is used in pagination. */
    cursor?: boolean | number
    /** Account ID */
    accountId?: boolean | number
    /** Human-facing short code for the consignment (format CN<YY><M><D><SUFFIX>), unique per account. */
    shortId?: boolean | number
    /**
     * @deprecated Use consignors
     * Id of the consignor (a user-service user).
     */
    consignorUserId?: boolean | number
    /**
     * @deprecated Use consignors
     * The consignor's user, resolved from consignorUserId.
     */
    consignor?: UserGenqlSelection
    /** All consignors for this consignment, including the main one (isMain = true). */
    consignors?: ConsignorGenqlSelection
    /** All staff (team members) for this consignment, including the lead one (isLead = true). */
    staff?: ConsignmentStaffGenqlSelection
    /** Consignment name. */
    name?: boolean | number
    /** Optional consignment description. */
    description?: boolean | number
    /**
     * Optional identifier for this consignment in an external system, e.g. "GRS-12345".
     * Unique per account.
     */
    externalId?: boolean | number
    /** The consignment's fee rules. */
    feeRules?: ConsignmentFeeRuleGenqlSelection
    /** When the consignment was created (RFC3339). */
    created?: boolean | number
    /** When the consignment was last modified (RFC3339). */
    modified?: boolean | number
    /** Id of the user that created the consignment. */
    createdByUserId?: boolean | number
    /** Id of the user that last modified the consignment. */
    modifiedByUserId?: boolean | number
    /**
     * The charges that apply to lots in this consignment, already restated for
     * it. Falls back to the account when this consignment does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges?: (ChargeConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), options?: (ChargeOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single fee rule in a consignment's fee-rule set. */
export interface ConsignmentFeeRuleGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    type?: boolean | number
    value?: boolean | number
    /** Exclusive lower bound of the bracket this rule applies to. */
    lowerLimit?: boolean | number
    /** Inclusive upper bound of the bracket; null means unbounded. */
    upperLteLimit?: boolean | number
    /** How the value is applied (FLAT or PROGRESSIVE). */
    calculationType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A single fee rule supplied when creating or updating a consignment. An update
 * replaces the entire fee-rule set.
 */
export interface ConsignmentFeeRuleInput {name?: (Scalars['String'] | null),type: ConsignmentFeeType,value: Scalars['Int'],
/** Exclusive lower bound of the bracket this rule applies to. */
lowerLimit: Scalars['Int'],
/** Inclusive upper bound of the bracket; null means unbounded. */
upperLteLimit?: (Scalars['Int'] | null),
/** How the value is applied (FLAT or PROGRESSIVE). */
calculationType?: (ConsignmentFeeCalculationType | null)}


/** A member of a consignment's staff (team) set. Exactly one is lead when the set is non-empty. */
export interface ConsignmentStaffGenqlSelection{
    /**
     * The staff member's identity id, as issued by the dashboard identity provider
     * (Ory Kratos). This is the same id space as DashboardMember.userId, and is not
     * a client-user id.
     */
    userId?: boolean | number
    /** Whether this staff member is the lead. */
    isLead?: boolean | number
    /** Account the staff member belongs to. */
    accountId?: boolean | number
    /**
     * The staff member's display name, from the identity provider.
     * Null if the identity could not be resolved.
     */
    name?: boolean | number
    /**
     * The staff member's email address, from the identity provider.
     * Null if the identity could not be resolved.
     */
    email?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConsignmentsConnectionGenqlSelection{
    /** Consignment edges */
    edges?: ConsignmentsEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ConsignmentsEdgeGenqlSelection{
    /** Current consignment cursor */
    cursor?: boolean | number
    /** Consignment node */
    node?: ConsignmentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A member of a consignment's consignor set. Exactly one is main when the set is non-empty. */
export interface ConsignorGenqlSelection{
    /** Id of the consignor (a user-service user). */
    userId?: boolean | number
    /** Whether this consignor is the main consignor. */
    isMain?: boolean | number
    /** Account the consignor belongs to (used to resolve the user). */
    accountId?: boolean | number
    /** The consignor's user, resolved from userId. */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** schemaData drift between an item and one target (a sale item). */
export interface ContentDiffGenqlSelection{
    /** The kind of target compared. */
    targetKind?: boolean | number
    /** Sale id, when targetKind is SALE_ITEM. */
    saleId?: boolean | number
    /** Sale item id, when targetKind is SALE_ITEM. */
    saleItemId?: boolean | number
    /** Variant id, when targetKind is PRODUCT_VARIANT. */
    variantId?: boolean | number
    /** The item's schema_id. */
    itemSchemaId?: boolean | number
    /** The target's schema_id. */
    targetSchemaId?: boolean | number
    /** Whether the item and target reference the same schema_id. */
    schemaIdMatches?: boolean | number
    /** True when schemaIdMatches is true and there are no drifting entries. */
    inSync?: boolean | number
    /** The drifting keys. Empty when in sync. */
    entries?: ContentDiffEntryGenqlSelection
    /** Target keys not present as public fields in the item's schema. Names only. */
    removableKeys?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single drifting schema_data key. */
export interface ContentDiffEntryGenqlSelection{
    /** The schema_data property name. */
    key?: boolean | number
    /** How this key differs between the item and the target. */
    status?: boolean | number
    /** The item's value for this key. Null when status is ONLY_ON_TARGET. */
    itemValue?: boolean | number
    /** The target's value for this key. Null when status is ONLY_ON_ITEM. */
    targetValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContinueOnboardPaymentAccountInput {returnUrl: Scalars['String']}


/**
 * A country in the catalog: its ISO 3166-1 alpha-2 code and display name, together
 * with the account's effective enabled state and AML risk classification.
 */
export interface CountryInfoGenqlSelection{
    code?: boolean | number
    name?: boolean | number
    enabled?: boolean | number
    amlRiskClass?: boolean | number
    /** True if this is the account's home country. */
    isHomeCountry?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection wrapper for the account's countries. */
export interface CountryInfoConnectionGenqlSelection{
    /** The list of country edges. */
    edges?: CountryInfoEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in the countries connection. */
export interface CountryInfoEdgeGenqlSelection{
    /** The country. */
    node?: CountryInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateAccountFeeInput {name: Scalars['String'],type: AccountFeeType,value: Scalars['Int'],upperLteLimit?: (Scalars['Int'] | null),
/** Lower limit (exclusive) the fee applies from. */
lowerLimit: Scalars['Int'],
/** How this fee rule is calculated. */
calculationType?: (FeeCalculationType | null)}

export interface CreateAccountInput {
/** name for the account */
name: Scalars['String'],
/** email for the account */
email: Scalars['String'],
/**
 * Autogenerated if left empty.
 * If provided then it has to between 3-20 charachters long.
 * Accepted symbols for handles:
 *   * lowercase alphabetical letters a-z
 *   * numbers 0-9
 *   * special charachter _ (underscore)
 */
handle?: (Scalars['String'] | null),
/** description to be displayed on account profile as bio */
description?: (Scalars['String'] | null),
/** links associated with the account */
links?: ((LinkInput | null)[] | null)}


/** Input for creating an affiliate. The affiliate is created in an active state. */
export interface CreateAffiliateInput {
/** First name of the affiliate. */
firstName: Scalars['String'],
/** Last name of the affiliate. Defaults to empty when omitted. */
lastName?: (Scalars['String'] | null),
/** Contact email for the affiliate. */
email: Scalars['String'],
/** Referral token. Must be unique within the account. */
token: Scalars['String']}

export interface CreateAssetUploadUrlInput {
/** MIME type of the file being uploaded. Unsupported types are rejected. */
contentType: Scalars['String'],
/** The original filename, used for the download's Content-Disposition. */
filename: Scalars['String'],
/** Optional client-assigned external identifier. */
externalId?: (Scalars['String'] | null)}

export interface CreateAttributionChannelInput {name: Scalars['String']}

export interface CreateAttributionSourceInput {name: Scalars['String']}


/** Input for creating a new category. */
export interface CreateCategoryInput {name: Scalars['String'],slug?: (Scalars['String'] | null),parentId?: (Scalars['ID'] | null)}


/**
 * Input for creating a charge. Bands are set separately via setChargeBands, so a
 * new charge produces nothing until its ladder is in place.
 */
export interface CreateChargeInput {
/** Must be unique among this account's charges in the same currency. */
name: Scalars['String'],
/**
 * Cannot be changed later. To charge the same thing in another currency,
 * create a second charge in that currency.
 */
currency: Currency,basedOn: ChargeBasedOn,frequency: ChargeFrequency,outcome: ChargeOutcome,calculationType: ChargeCalculationType,
/**
 * Lower bound on the amount charged, in minor currency units. Omit or pass 0
 * for no floor.
 */
minimum?: (Scalars['Int'] | null),
/**
 * Upper bound on the amount charged, in minor currency units. Omit or pass 0
 * for no cap.
 */
maximum?: (Scalars['Int'] | null)}

export interface CreateConsignmentInput {
/**
 * Deprecated in favor of `consignorUserIds`. Id of the consignor; by default
 * this is the Basta user UUID (`User.id`), use `idType` to pass an
 * external user_id or an identity-provider id instead. Ignored when
 * `consignorUserIds` is set.
 */
consignorUserId?: (Scalars['String'] | null),
/**
 * How to interpret `consignorUserId`. Defaults to `BASTA_USER_ID`
 * (the internal Basta user UUID) for backward compatibility.
 */
idType?: (UserIdType | null),
/** Optional consignment name. Omitted or null stores an empty name. */
name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/**
 * Optional identifier for this consignment in an external system, e.g. "GRS-12345".
 * Unique per account.
 * Not unique: one external consignment may be split across several here.
 */
externalId?: (Scalars['String'] | null),feeRules: ConsignmentFeeRuleInput[],
/**
 * Consignor user IDs; the first is the main consignor. Basta user UUIDs, with
 * the rest as co-consignors. When set, this replaces (and overrides) the
 * deprecated consignorUserId.
 */
consignorUserIds?: (Scalars['String'][] | null),
/**
 * Staff identity ids (Ory Kratos, same id space as DashboardMember.userId); the
 * first is the lead staff member, the rest are non-lead. Each must be a member of
 * the account.
 */
consignmentStaffUserIds?: (Scalars['String'][] | null)}


/**
 * Input for creating a new creator. A type is required when creating a root
 * (no parentId) and must be omitted when creating a child.
 */
export interface CreateCreatorInput {name: Scalars['String'],slug?: (Scalars['String'] | null),parentId?: (Scalars['ID'] | null),type?: (CreatorType | null),
/** Whether the Artist's Resale Right applies to works by this creator. */
arr?: (Scalars['Boolean'] | null)}


/** Input for creating a Dutch item in a sale. */
export interface CreateDutchItemForSaleInput {saleId: Scalars['String'],title?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/** Total units offered for this lot — the fixed maximum that can ever be accepted. */
availableUnits: Scalars['Int'],openTime: Scalars['String'],closingTime: Scalars['String'],schedule: DutchScheduleInput,config: DutchItemConfigInput}


/** Input for creating a Dutch sale. */
export interface CreateDutchSaleInput {dates?: (SaleDatesInput | null),title?: (Scalars['String'] | null),description?: (Scalars['String'] | null)}

export interface CreateInvoiceInput {
/** OrderId that invoice belongs to */
orderId: Scalars['ID'],
/** ExternalID for the invoice */
externalID: Scalars['String'],
/** Link to the invoice */
url: Scalars['String'],
/** Due date in RFC3339 format */
dueDate: Scalars['String']}


/** Create Item Image */
export interface CreateItemImage {itemId: Scalars['String'],url: Scalars['String'],order: Scalars['Int'],imageId?: (Scalars['String'] | null)}


/** Item input when creating an item */
export interface CreateItemInput {
/** Title for describing the item */
title?: (Scalars['String'] | null),
/** Item description */
description?: (Scalars['String'] | null),
/** Item price information */
price?: (ItemPriceInput | null),
/** Unique external identifier, e.g. warehouse id, inventory id, etc. */
externalId?: (Scalars['String'] | null),
/**
 * If provided, the created item is linked directly to this consignment.
 * The consignment must exist and belong to the same account.
 */
consignmentId?: (Scalars['String'] | null),
/**
 * If provided, the created item is located at this site. Required when
 * locationId is provided.
 */
siteId?: (Scalars['String'] | null),
/**
 * If provided, the created item is located at this location. The location
 * must belong to the given siteId.
 */
locationId?: (Scalars['String'] | null),
/** Custom data associated with the item */
metadata?: (ItemMetadataInput | null),
/** Tags for the item */
tags?: (Scalars['String'][] | null),
/** Item specifications (dimensions, weight, type, etc.) */
specifications?: (ItemSpecificationsInput | null),valuationAmount?: (Scalars['Int'] | null),valuationCurrency?: (Scalars['String'] | null),lowEstimate?: (Scalars['Int'] | null),highEstimate?: (Scalars['Int'] | null),
/** Location of the item */
location?: (Scalars['String'] | null)}

export interface CreateItemNoteInput {itemId: Scalars['String'],note: Scalars['String']}


/**
 * Input for createItemType mutation. `parentId` is optional and references another item type
 * in the same account; when omitted the new item type is a root.
 */
export interface CreateItemTypeInput {name: Scalars['String'],schema: Scalars['JSON'],parentId?: (Scalars['String'] | null),
/** Globally unique namespace for the item type. When omitted, one is generated automatically. */
namespace?: (Scalars['String'] | null),
/** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
titleTemplate?: (Scalars['String'] | null),subTitleTemplate?: (Scalars['String'] | null),descriptionTemplate?: (Scalars['String'] | null)}

export interface CreateLocationInput {siteId: Scalars['String'],
/** Parent location id. Omitted or null creates a top-level location. */
parentLocationId?: (Scalars['String'] | null),name: Scalars['String']}

export interface CreateOrderInput {
/** SaleId that order belongs to */
saleId: Scalars['String'],
/** UserId of user that will pay for the order */
userId: Scalars['String'],
/** Order title */
title: Scalars['String'],
/** Currency for the order, optional to be backwards compatible. */
currency?: (Currency | null),
/** Billing address for the order */
billingAddress?: (MailingAddressInput | null),
/** Shipping address for the order */
shippingAddress?: (MailingAddressInput | null),
/** OrderLines */
orderLines?: (CreateOrderLineForOrderInput[] | null)}

export interface CreateOrderLineForOrderInput {
/** ItemId that order line belongs to */
itemId: Scalars['String'],
/** Amount of the order line in minor currency unit */
amount: Scalars['Int'],
/** Description of the order line */
description: Scalars['String'],
/** Fees associated with the order line, e.g. Buyer's Premium. */
fees?: (CreatePaymentOrderLineFeeInput[] | null)}

export interface CreateOrderLineInput {
/** OrderId that order line belongs to */
orderId: Scalars['ID'],
/** ItemId that order line belongs to */
itemId: Scalars['String'],
/** Amount of the order line in minor currency unit */
amount: Scalars['Int'],
/** Description of the order line */
description: Scalars['String'],
/** Fees associated with the order line, e.g. Buyer's Premium. */
fees?: (CreatePaymentOrderLineFeeInput[] | null)}

export interface CreatePaymentInput {
/** OrderId that payment belongs to */
orderId: Scalars['ID']}

export interface CreatePaymentOrderInput {
/** SaleId that order belongs to */
saleId: Scalars['String'],
/** ItemId that order belongs to */
itemId?: (Scalars['String'] | null),
/** UserId of user that will pay for the order */
userId: Scalars['String'],
/** OrderLines */
orderLines: CreatePaymentOrderLineInput[],
/** Currency for the order, optional to be backwards compatible. */
currency?: (Currency | null),
/** Billing address for the order */
billingAddress?: (MailingAddressInput | null),
/** Shipping address for the order */
shippingAddress?: (MailingAddressInput | null)}

export interface CreatePaymentOrderLineFeeInput {
/** Fee description */
description: Scalars['String'],
/** Fee amount in minor currency unit */
amount: Scalars['Int']}

export interface CreatePaymentOrderLineInput {
/** ItemId that order line belongs to (optional to be backwards compatible) */
itemId?: (Scalars['String'] | null),
/** Amount of the order line in minor currency unit */
amount: Scalars['Int'],
/** Description of the order line */
description: Scalars['String'],
/** Type of the order line */
orderLineType?: (OrderLineType | null),
/** Fees associated with the order line, e.g. Buyer's Premium. */
fees?: (CreatePaymentOrderLineFeeInput[] | null)}

export interface CreateSaleFeeInput {saleId: Scalars['ID'],name: Scalars['String'],type: FeeRuleType,
/**
 * Value of the fee interpreted based on the type.
 * * 500 means 5% if type is percentage
 * * 1000 means $10 if type is amount
 */
value: Scalars['Int'],
/** Upper inclusive limit the fee applies to. If omitted there is no upper limit. */
upperLteLimit?: (Scalars['Int'] | null),
/** Lower limit (exclusive) the fee applies from. */
lowerLimit: Scalars['Int'],
/** How this fee rule is calculated. */
calculationType?: (FeeCalculationType | null)}


/** Input for creating or modifying sales. */
export interface CreateSaleInput {dates?: (SaleDatesInput | null),title?: (Scalars['String'] | null),description?: (Scalars['String'] | null),currency?: (Scalars['String'] | null),bidIncrementTable?: (BidIncrementTableInput | null),closingMethod?: (ClosingMethod | null),closingTimeCountdown?: (Scalars['Int'] | null),
/**
 * Optional closing schedule for sale items.
 * If omitted, existing defaults/behavior are used.
 */
saleItemClosingSchedule?: (SaleItemClosingScheduleInput | null),
/**
 * This setting governs the auction's reserve bid logic.
 * By default, it is set to STANDARD, meaning the reserve must be met or exceeded through standard bidding.
 * When configured to MAX_BID_BELOW_RESERVE_IS_MET, any maximum bid that matches or surpasses the reserve price automatically meets the reserve of the item or the max bid amount if below reserve.
 * Note, this setting cannot be changed after the sale is created.
 */
reserveAutoBidMethod?: (ReserveAutoBidMethod | null),themeType?: (Scalars['Int'] | null),
/** Should sale be hidden from public view. Default false. */
hidden?: (Scalars['Boolean'] | null),
/** Sale type (defaults to ONLINE_TIMED) */
type?: (SaleType | null),
/** Sale Is Test */
isTestSale?: (Scalars['Boolean'] | null),
/** Whether the auction is to have a printed catalogue. */
printedCatalogue?: (Scalars['Boolean'] | null),
/** Restrictions for bidding on a sale */
bidRestrictions?: (BidRestrictionsInput | null),
/** Unique external identifier, e.g. external system's id, inventory id, etc. */
externalId?: (Scalars['String'] | null),
/** Location of the sale */
location?: (Scalars['String'] | null),
/** Optional slug for the sale (pretty URL). */
slug?: (Scalars['String'] | null),
/** Metafields for the sale, this is optional and will only trigger a metafield update if provided. To remove a metafield use the deleteMetafield input. */
metafields?: (MetafieldInput[] | null),
/** Auction genre assignment. Omit/null leaves it unset, an id sets it. */
saleGenreId?: (Scalars['ID'] | null),
/** Site assignment. Omit/null leaves it unset, an id sets it. */
siteId?: (Scalars['ID'] | null),
/** Viewing times. Omit/null leaves it unset, a value sets it. */
viewingTimes?: (Scalars['String'] | null),
/** Buyers notes. Omit/null leaves it unset, a value sets it. */
buyersNotes?: (Scalars['String'] | null),
/** Fees-apply information. Omit/null leaves it unset, a value sets it. */
feesApplyInfo?: (Scalars['String'] | null),
/** Sale contact member id. Omit/null leaves it unset, an id sets it. */
saleContactUserId?: (Scalars['ID'] | null)}

export interface CreateSaleItemFeeInput {saleId: Scalars['ID'],itemId: Scalars['ID'],name: Scalars['String'],type: FeeRuleType,
/**
 * Value of the fee interpreted based on the type.
 * * 500 means 5% if type is percentage
 * * 1000 means $10 if type is amount
 */
value: Scalars['Int'],
/** Upper inclusive limit the fee applies to. If omitted there is no upper limit. */
upperLteLimit?: (Scalars['Int'] | null),
/** Lower limit (exclusive) the fee applies from. */
lowerLimit: Scalars['Int'],
/** How this fee rule is calculated. */
calculationType?: (FeeCalculationType | null)}


/**
 * Input for creating a sale item registration.
 * Creates Sale Registration for user-id and type if it doesn't exist
 */
export interface CreateSaleItemRegistrationInput {
/** Sale ID that the item belongs to */
saleId: Scalars['String'],
/** Item ID that the user is registering for */
itemId: Scalars['String'],
/** User ID of the person registering */
userId: Scalars['String'],
/** Type of registration */
type: SaleRegistrationType,
/** Registration identifier */
identifier?: (Scalars['String'] | null),
/** Registration status (defaults to PENDING) */
status?: (SaleRegistrationStatus | null),
/** Preferred phonenumber for the registration of type PHONE */
preferredPhoneNumberId?: (Scalars['ID'] | null),
/** Alternative phonenumbers for the registration of type PHONE */
alternativePhoneNumberIds?: (Scalars['ID'][] | null)}


/** Input for creating a sale registration */
export interface CreateSaleRegistrationInput {
/** Sale ID that the user is registering for */
saleId: Scalars['String'],
/** User ID of the person registering */
userId: Scalars['String'],
/** Type of registration (online, phone, paddle, aggregator) */
type: SaleRegistrationType,
/** Registration identifier (phone number, paddle number, etc.) */
identifier?: (Scalars['String'] | null),
/** Initial status of the registration (defaults to PENDING) */
status?: (SaleRegistrationStatus | null),
/** Preferred phonenumber for the registration of type PHONE */
preferredPhoneNumberId?: (Scalars['ID'] | null),
/** Alternative phonenumbers for the registration of type PHONE */
alternativePhoneNumberIds?: (Scalars['ID'][] | null)}

export interface CreateSaleRegistrationPolicyInput {
/** Code of the policy can be used by client code to identify the policy */
code: Scalars['String'],
/** Description of the policy can be displayed to users */
description: Scalars['String'],
/** CEL expression for the policy */
rule: Scalars['String'],
/** If true, the policy will be applied to all sales created for this account */
isDefault: Scalars['Boolean']}


/** Credentials and addresses needed to deliver email through SendGrid. */
export interface CreateSendGridNotificationIntegrationInput {
/**
 * SendGrid API key with the Mail Send permission. Stored encrypted and carried
 * on no type; `revealSendGridNotificationIntegrationApiKey` returns it.
 */
apiKey: Scalars['String'],
/**
 * Address outgoing email is sent from. Must be a verified sender on the
 * SendGrid account, or SendGrid rejects every send.
 */
fromEmail: Scalars['String'],
/** Display name shown beside `fromEmail`. Omit to show the address bare. */
fromName?: (Scalars['String'] | null),
/** Address replies are delivered to. Omit to let replies go to `fromEmail`. */
replyToEmail?: (Scalars['String'] | null),
/**
 * Address that notifications about the account itself are delivered to, as
 * opposed to those delivered to one of its users.
 */
accountNotificationEmail: Scalars['String'],
/**
 * IANA timezone name used to render dates in notifications, for example
 * `America/Chicago`. Defaults to GMT. A sale whose location resolves to a
 * known timezone uses that instead.
 */
timezone?: (Scalars['String'] | null)}

export interface CreateSiteInput {name: Scalars['String'],addressLine1?: (Scalars['String'] | null),addressLine2?: (Scalars['String'] | null),addressCity?: (Scalars['String'] | null),addressPostalCode?: (Scalars['String'] | null),addressCountryIso?: (Scalars['String'] | null),addressState?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),email?: (Scalars['String'] | null),openingHours?: (Scalars['String'] | null),collectionInstructions?: (Scalars['String'] | null),appointmentRequired?: Scalars['Boolean'],
/**
 * Case-sensitive canonical IANA timezone name (e.g. Europe/London, not
 * europe/london).
 */
timezone?: (Scalars['String'] | null)}


/** Credentials and identifiers needed to deliver text messages through Twilio. */
export interface CreateTwilioNotificationIntegrationInput {
/** Twilio Account SID. Write-only — no query returns it. */
accountSid: Scalars['String'],
/** Twilio Auth Token. Write-only — no query returns it. */
authToken: Scalars['String'],
/** Twilio Messaging Service SID outgoing text messages are sent through. */
messagingServiceSid: Scalars['String'],
/**
 * IANA timezone name used to render dates in notifications, for example
 * `America/New_York`. Applies to text messages only — each channel's
 * integration carries its own timezone.
 */
timezone?: (Scalars['String'] | null)}

export interface CreateUploadUrlInput {
/** The entities that the image belongs to */
imageTypes: ImageType[],
/** Image Content-Type */
contentType: Scalars['String'],
/** Image Order */
order: Scalars['Int'],
/** Conditional. Must be set if imageType is Sale or SaleItem */
saleId?: (Scalars['String'] | null),
/** Conditional. Must be set if imageType is Item or SaleItem */
itemId?: (Scalars['String'] | null),
/** Optional unique external identifier. */
externalId?: (Scalars['String'] | null),
/**
 * Conditional. Must be set if imageType is PRODUCT, PRODUCT_VARIANT, or COLLECTION.
 * Opaque entity ID from the marketplace system (e.g. Vendure product/variant/collection ID).
 */
marketplaceEntityId?: (Scalars['String'] | null)}


/**
 * A hierarchical creator (Maker / Artist / Brand) describing who or what made an
 * item. A parallel taxonomy to Category, applied to items and sale items.
 */
export interface CreatorGenqlSelection{
    /** Id of the creator. */
    id?: boolean | number
    /** Account that owns the creator. */
    accountId?: boolean | number
    /** Human-readable creator name. */
    name?: boolean | number
    /** URL-friendly slug. */
    slug?: boolean | number
    /** Parent creator id, if this creator is nested. */
    parentId?: boolean | number
    /** Parent creator, if this creator is nested. */
    parent?: CreatorGenqlSelection
    /** Direct children of this creator. */
    children?: CreatorGenqlSelection
    /**
     * The creator's type. Set on the root and inherited by descendants, so a child
     * resolves to the same type as its root.
     */
    type?: boolean | number
    /**
     * Whether the Artist's Resale Right applies to works by this creator. Items
     * linked to the creator inherit this unless they set their own value.
     */
    arr?: boolean | number
    /** Timestamp when the creator was created. */
    createdAt?: boolean | number
    /** Timestamp when the creator was last updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A paginated connection of creators. */
export interface CreatorConnectionGenqlSelection{
    creators?: CreatorGenqlSelection
    hasNextPage?: boolean | number
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A flat list of creators returned from association mutations. */
export interface CreatorListGenqlSelection{
    creators?: CreatorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The current authenticated user's roles and effective permissions for the account.
 * Used by the UI to determine what features to show/hide.
 */
export interface CurrentUserGenqlSelection{
    /** The user's identity ID. */
    userId?: boolean | number
    /** The dashboard roles assigned to this user in the account. */
    roles?: boolean | number
    /** The effective permissions granted by the user's roles. */
    permissions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A dashboard user (team member) within an account, with their assigned roles. */
export interface DashboardMemberGenqlSelection{
    /** The user's identity ID. */
    userId?: boolean | number
    /**
     * The user's display name (from identity provider).
     * May be null if the identity could not be resolved.
     */
    name?: boolean | number
    /**
     * The user's email address (from identity provider).
     * May be null if the identity could not be resolved.
     */
    email?: boolean | number
    /** Roles assigned to this user in the account. */
    roles?: DashboardUserRoleAssignmentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A role assigned to a dashboard user within an account. */
export interface DashboardUserRoleAssignmentGenqlSelection{
    /** The role assigned. */
    role?: boolean | number
    /** When this role was assigned. */
    assignedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeleteAccountFeeInput {id: Scalars['String']}


/** Input to delete an Action Hook subscription. */
export interface DeleteActionHookSubscriptionInput {id: Scalars['ID']}


/**
 * Input for removing what a charge does at one level, so that the next level out
 * applies there instead. A level that was never set is accepted unchanged.
 */
export interface DeleteChargeAtScopeInput {
/** The catalogue charge whose restatement is being removed. */
chargeId: Scalars['ID'],
/**
 * The level to stop restating at. Removing a level that was never set is a
 * no-op, so a target that has since been deleted can still be cleaned up.
 */
scope: ChargeScopeInput}


/** Delete image input */
export interface DeleteImageInput {
/** The sale identifier, needed if image belongs to a sale and you are specifying sale image type. */
saleId?: (Scalars['String'] | null),
/** The item identifier, needed if image belongs to an item or sale item and you are specifying item or sale item image type. */
itemId?: (Scalars['String'] | null),
/** The image identifier */
imageId: Scalars['String'],
/**
 * The entities that the image belongs to.
 * If empty or not provided, all associations will be removed and the image will be deleted.
 */
imageTypes?: (ImageType[] | null)}


/** Delete item image input */
export interface DeleteItemImageInput {itemId: Scalars['String'],imageId: Scalars['String']}


/** Input object for when deleting an item (including un-associating from a sale) */
export interface DeleteItemInput {itemId: Scalars['String']}

export interface DeleteLiveStreamFromSaleInput {
/** Sale ID */
saleId: Scalars['String']}


/** Input for deleting a single metafield */
export interface DeleteMetafieldInput {
/** The type of entity the metafield is connected to */
entityType: MetafieldEntityType,
/** The ID of the entity the metafield is connected to */
entityId: Scalars['String'],
/** The key of the metafield to delete */
key: Scalars['String']}

export interface DeleteOrderLineInput {
/** OrderId that order line belongs to */
orderId: Scalars['ID'],
/** OrderLineId to delete */
orderLineId: Scalars['ID']}

export interface DeletePaymentOrderInput {
/** OrderId to delete */
orderId: Scalars['ID']}

export interface DeleteSaleFeeInput {id: Scalars['ID'],saleId: Scalars['ID']}


/** Input object for when deleting a sale. */
export interface DeleteSaleInput {saleId: Scalars['String'],
/**
 * Base64-encoded sale ID. Must match saleId when decoded.
 * Acts as a confirmation guard to prevent accidental deletion.
 */
confirmationSaleId: Scalars['String']}

export interface DeleteSaleItemFeeInput {id: Scalars['ID'],saleId: Scalars['ID'],itemId: Scalars['ID']}


/** Input for deleting a sale item registration */
export interface DeleteSaleItemRegistrationInput {
/** Item registration ID to delete */
itemRegistrationId: Scalars['String']}


/** Payload returned after deleting a sale. */
export interface DeleteSalePayloadGenqlSelection{
    saleId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for deleting a sale registration */
export interface DeleteSaleRegistrationInput {
/** Registration ID to delete */
registrationId: Scalars['String']}


/** Input for deleting a user address */
export interface DeleteUserAddressInput {
/** User ID (Basta user ID or identity provider ID depending on idType) */
userId: Scalars['String'],
/** Type of user ID provided (USER_ID or IDENTITY_PROVIDER_ID) */
idType: UserIdType,
/** Address ID to delete */
addressId: Scalars['String']}


/** Input for deleting a user phone */
export interface DeleteUserPhoneInput {
/** User ID (Basta user ID or identity provider ID depending on idType) */
userId: Scalars['String'],
/** Type of user ID provided (USER_ID or IDENTITY_PROVIDER_ID) */
idType: UserIdType,
/** Phone ID to delete */
phoneId: Scalars['String']}


/** Department is an account-scoped grouping a sale can belong to. */
export interface DepartmentGenqlSelection{
    /** Id of the department. */
    id?: boolean | number
    /** Human-readable department name. */
    name?: boolean | number
    /** URL-friendly slug. */
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A paginated connection of departments. */
export interface DepartmentConnectionGenqlSelection{
    edges?: DepartmentEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a department connection. */
export interface DepartmentEdgeGenqlSelection{
    node?: DepartmentGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DetachSaleRegistrationPoliciesInput {
/** Sale ID that the policies should be detached from */
saleId: Scalars['String'],
/** Policy IDs to detach */
policyIds: Scalars['String'][]}


/** The terminal non-auction sale of an item — an accepted offer or a buy-now. */
export interface DirectSellGenqlSelection{
    /** Account that owns the sold item. */
    accountId?: boolean | number
    /** Basta user id (`User.id`) of the buyer. */
    buyerId?: boolean | number
    /** The user that bought the item, resolved from the direct sell's accountId and buyerId. */
    buyer?: UserInfoGenqlSelection
    /** Amount paid in minor currency units. */
    amount?: boolean | number
    /** ISO-4217 currency code. */
    currency?: boolean | number
    /** How the sale was initiated. */
    source?: boolean | number
    /** For an accepted offer, the offer_id; for a buy-now, a generated id for the direct sell. */
    referenceId?: boolean | number
    /** When the sale was recorded (RFC3339). */
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DisassociateUserFromAccountInput {
/** The user ID to disassociate from the account. */
userId: Scalars['String']}


/** An Asset that is neither an image nor a video (PDF, Word, plain text, etc.). */
export interface DocumentGenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    url?: boolean | number
    contentType?: boolean | number
    size?: boolean | number
    filename?: boolean | number
    /** Optional client-assigned external identifier. */
    externalId?: boolean | number
    created?: boolean | number
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchBidGenqlSelection{
    id?: boolean | number
    userId?: boolean | number
    amount?: boolean | number
    quantityRequested?: boolean | number
    quantityAllocated?: boolean | number
    placedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchBidConnectionGenqlSelection{
    edges?: DutchBidEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchBidEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DutchBidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bid/pricing configuration for a Dutch item. */
export interface DutchItemConfigGenqlSelection{
    pricingMode?: boolean | number
    maxBidsPerBidder?: boolean | number
    maxUnitsPerBidder?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchItemConfigInput {pricingMode: DutchPricingMode,maxBidsPerBidder?: (Scalars['Int'] | null),maxUnitsPerBidder?: (Scalars['Int'] | null)}


/** A dated price drop: at RFC3339 time `at` the price becomes `price`. */
export interface DutchPriceDropGenqlSelection{
    at?: boolean | number
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchPriceDropInput {at: Scalars['String'],price: Scalars['Int']}


/** A Dutch (descending-clock) sale. Distinct from the English Sale type. */
export interface DutchSaleGenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    title?: boolean | number
    description?: boolean | number
    currency?: boolean | number
    status?: boolean | number
    dates?: SaleDatesGenqlSelection
    saleFormat?: boolean | number
    images?: ImageGenqlSelection
    items?: (DutchSaleItemConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A multi-unit Dutch (descending-price) item. endTime is the closing time. */
export interface DutchSaleItemGenqlSelection{
    id?: boolean | number
    saleId?: boolean | number
    status?: boolean | number
    /** Total units offered for this lot, set at creation — the fixed maximum that can ever be accepted; not a live remaining count. */
    availableUnits?: boolean | number
    openTime?: boolean | number
    endTime?: boolean | number
    schedule?: DutchScheduleGenqlSelection
    config?: DutchItemConfigGenqlSelection
    title?: boolean | number
    description?: boolean | number
    images?: ImageGenqlSelection
    bids?: (DutchBidConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchSaleItemConnectionGenqlSelection{
    edges?: DutchSaleItemEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DutchSaleItemEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DutchSaleItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The opening price plus dated drops. The bidding window (openTime/endTime) lives on DutchSaleItem. */
export interface DutchScheduleGenqlSelection{
    startingAmount?: boolean | number
    drops?: DutchPriceDropGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Opening price (from openTime) and dated drops. Each drop must be at or after openTime,
 * strictly later than the previous drop, and strictly lower in price.
 */
export interface DutchScheduleInput {startingAmount: Scalars['Int'],drops: DutchPriceDropInput[]}


/** Estimates for an item */
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


/** Facet count information for a field */
export interface FacetCountGenqlSelection{
    /** The field name this facet represents (e.g., "trust_level", "id_verification_status") */
    fieldName?: boolean | number
    /** Individual value counts for this field */
    counts?: FacetValueGenqlSelection
    /** Statistical information for numeric fields (optional) */
    stats?: FacetStatsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Statistical information for numeric facets */
export interface FacetStatsGenqlSelection{
    /** Average value */
    avg?: boolean | number
    /** Maximum value */
    max?: boolean | number
    /** Minimum value */
    min?: boolean | number
    /** Sum of all values */
    sum?: boolean | number
    /** Total number of values */
    totalValues?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Individual facet value and its count */
export interface FacetValueGenqlSelection{
    /** The facet value (e.g., "VERIFIED", "HIGH") */
    value?: boolean | number
    /** Number of results with this value */
    count?: boolean | number
    /** Highlighted version of the value for display (optional) */
    highlighted?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeeRuleGenqlSelection{
    /** ID of the fee rule record */
    id?: boolean | number
    /** Name of the fee rule which is used in orders */
    name?: boolean | number
    /** Fee Rule type influences how the value is calculated */
    type?: boolean | number
    /**
     * Value of the fee rule interpreted based on the type
     * * 500 means 5% if type is percentage
     * * 1000 means $10 if type is amount
     */
    value?: boolean | number
    /**
     * Upper limit of the fee rule.
     * If empty then there is no upper limit.
     */
    upperLteLimit?: boolean | number
    /** Lower limit of the fee rule. */
    lowerLimit?: boolean | number
    /**
     * How this fee rule is calculated. FLAT applies the rate to the full amount.
     * PROGRESSIVE applies the rate only to the portion of the amount within each bracket
     * (defined by lowerLimit and upperLteLimit). For PERCENTAGE+PROGRESSIVE the rate is
     * applied to the taxable portion within the bracket. For AMOUNT+PROGRESSIVE the fixed
     * charge is applied once as soon as the transaction amount exceeds the bracket's
     * lowerLimit — it does not prorate or repeat up to upperLteLimit.
     */
    calculationType?: boolean | number
    /** Source indicates which level in the cascade hierarchy this fee originates from. */
    source?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single field change within an activity. */
export interface FieldChangeGenqlSelection{
    field?: boolean | number
    oldValue?: boolean | number
    newValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeoLocationGenqlSelection{
    countryIsoCode?: boolean | number
    countryName?: boolean | number
    cityName?: boolean | number
    latitude?: boolean | number
    longitude?: boolean | number
    timezone?: boolean | number
    found?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetItemInputGenqlSelection{
    itemId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetItemsInput {userId?: (Scalars['String'] | null),first?: (Scalars['Int'] | null),after?: (Scalars['String'] | null),direction?: (PaginationDirection | null),itemsFilter: ItemsFilter}


/** Input for getting a single metafield connected to a specific entity */
export interface GetMetafieldInput {key: Scalars['String']}


/** Input for getting multiple metafields connected to a specific entity, we return at max 10 metafields */
export interface GetMetafieldsInput {keys?: (Scalars['String'][] | null)}


/** Input to hide items from a sale */
export interface HideItemsFromSaleInput {saleId: Scalars['String'],includingAndFromItemNumber: Scalars['Int']}


/** Information about the highest bid in a sale. */
export interface HighestBidInfoGenqlSelection{
    /** Unique identifier for the bid. */
    bidId?: boolean | number
    /** ID of the item that had the highest bid. */
    itemId?: boolean | number
    /** The current bid amount (in minor currency). */
    currentAmount?: boolean | number
    /** The maximum bid amount (in minor currency). 0 for normal bids. */
    maxAmount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection wrapper for highlighted sale items. */
export interface HighlightedSaleItemConnectionGenqlSelection{
    /** The list of highlighted sale item edges. */
    edges?: HighlightedSaleItemEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in the highlighted sale items connection, pairing a sale item with its display position. */
export interface HighlightedSaleItemEdgeGenqlSelection{
    /** The sale item. */
    node?: SaleItemGenqlSelection
    /** Display position of the highlighted item (lower numbers appear first). */
    position?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * HttpHeader contains custom http request header information to be included in Action Hooks.
 * All Action Hooks are sent with the {"Content-Type": "application/json"} header by default.
 */
export interface HttpHeaderGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input to include custom header key-value pairs with Action Hook requests. */
export interface HttpHeaderInput {key: Scalars['String'],value: Scalars['String']}


/** Image object */
export interface ImageGenqlSelection{
    /** ID of the image, UUID string */
    id?: boolean | number
    /** Image URL */
    url?: boolean | number
    /** DisplayOrder for image */
    order?: boolean | number
    /** Optional unique external identifier. */
    externalId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageAssociationGenqlSelection{
    on_SaleItemImageAssociation?:SaleItemImageAssociationGenqlSelection,
    on_ItemImageAssociation?:ItemImageAssociationGenqlSelection,
    on_SaleImageAssociation?:SaleImageAssociationGenqlSelection,
    on_AccountImageAssociation?:AccountImageAssociationGenqlSelection,
    __typename?: boolean | number
}


/** Image reordering input */
export interface ImageOrderInput {
/** The image identifier */
imageId: Scalars['String'],
/** The new image order */
order: Scalars['Int']}

export interface ImageWithAssociationsGenqlSelection{
    image?: ImageGenqlSelection
    associations?: ImageAssociationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a notification sent in response to an event. */
export interface InstantNotificationConfigurationGenqlSelection{
    /** Channel this configuration delivers on. */
    channel?: boolean | number
    /**
     * Whether this configuration is currently sending. Change it with
     * `setNotificationConfigurationStatus`.
     */
    status?: boolean | number
    /** Branch on each entry's `saleType`, not on `saleTypeVarying`. */
    templates?: NotificationTemplateGenqlSelection
    /**
     * Sender used instead of the account's for this notification. Null means the
     * account's own sender is used. Email only.
     */
    sender?: NotificationEmailSenderGenqlSelection
    /**
     * Reply-to used instead of the account's for this notification. Null means the
     * account's own is used. Email only.
     */
    replyToEmail?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface InstantNotificationConfigurationInput {templates: NotificationTemplateInput[],
/**
 * Sender to use instead of the account's. Omitting it leaves the current sender
 * unchanged; a notification that has none uses the account's. Email only.
 */
sender?: (NotificationEmailSenderInput | null),
/**
 * Reply-to to use instead of the account's. Omitting it leaves the current
 * reply-to unchanged. Resolves independently of `sender`. Email only.
 */
replyToEmail?: (Scalars['String'] | null)}

export interface InvoiceGenqlSelection{
    /** InvoiceId */
    invoiceId?: boolean | number
    /** ExternalID */
    externalID?: boolean | number
    /** Due date in RFC3339 format */
    dueDate?: boolean | number
    /** Link to the invoice */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemGenqlSelection{
    /** Id of an item. */
    id?: boolean | number
    /** Cursor is used in pagination. */
    cursor?: boolean | number
    /** Item title */
    title?: boolean | number
    /** Item sub-title */
    subTitle?: boolean | number
    /** Account ID */
    accountId?: boolean | number
    /** Item description */
    description?: boolean | number
    /** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
    titleTemplateOverride?: boolean | number
    subTitleTemplateOverride?: boolean | number
    descriptionTemplateOverride?: boolean | number
    /** Item pricing information */
    price?: ItemPriceGenqlSelection
    /** Images attached to item */
    images?: ImageGenqlSelection
    /** Unique external identifier, e.g. Warehouse id, inventory id, etc. */
    externalId?: boolean | number
    /** Tags */
    tags?: boolean | number
    /**
     * @deprecated Use `itemType` and `attributes` instead.
     * Item Metadata
     */
    metadata?: ItemMetadataGenqlSelection
    /**
     * The item type this item is assigned to, if any. Its `effectiveSchema`
     * gives the field definitions.
     */
    itemType?: ItemTypeGenqlSelection
    /** The effective schema (field definitions) for this item's item type. */
    effectiveSchema?: boolean | number
    /** The item's filled-in field values, conforming to `effectiveSchema`. */
    attributes?: boolean | number
    /**
     * @deprecated Renamed to itemType.
     * The item type this item is assigned to, if any.
     */
    type?: ItemTypeGenqlSelection
    /**
     * @deprecated Renamed to effectiveSchema.
     * The effective schema (field definitions) for this item's item type.
     */
    schema?: boolean | number
    /** Item Notes. */
    itemNotes?: (ItemNoteConnectionGenqlSelection & { __args?: {take?: (Scalars['Int'] | null), cursor?: (Scalars['String'] | null), direction?: (PaginationDirection | null)} })
    /**
     * @deprecated Use specificationsV2
     * Item specifications (dimensions, weight, type, etc.) - first specification only. Use specificationsV2 for full list.
     */
    specifications?: ItemSpecificationsGenqlSelection
    /** Item specifications v2 (list with id, quantity, diameter, etc.) */
    specificationsV2?: ItemSpecificationsGenqlSelection
    /** Item packaging (boxed dimensions and weight) */
    packaging?: ItemPackagingGenqlSelection
    /**
     * @deprecated Use price
     * Item estimate in minor currency unit.
     */
    estimates?: EstimateGenqlSelection
    /**
     * @deprecated Will be removed in the future
     * Valuation of the item in minor currency units.
     */
    valuationAmount?: boolean | number
    /**
     * @deprecated Will be removed in the future
     * Valuation currency
     */
    valuationCurrency?: boolean | number
    /**
     * @deprecated Will be removed in the future
     * Sale Id, if the item is linked to a sale
     */
    saleId?: boolean | number
    /** Location of the item */
    location?: boolean | number
    /** Metafields associated with the item */
    metafields?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldsInput} })
    /** Metafield associated with the item */
    metafield?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldInput} })
    /** The consignment this item belongs to, if any. */
    consignment?: ConsignmentGenqlSelection
    /** The site this item currently resides at, if any. */
    site?: SiteGenqlSelection
    /** The location within its site this item currently resides at, if any. */
    siteLocation?: LocationGenqlSelection
    /** Categories assigned to the item */
    categories?: CategoryGenqlSelection
    /** Creators assigned to the item */
    creators?: CreatorGenqlSelection
    /**
     * Whether the Artist's Resale Right applies to this item. Follows the item's
     * creators unless arrOverride is set.
     */
    arr?: boolean | number
    /**
     * The value set directly on this item, if any. Null means the item follows its
     * creators.
     */
    arrOverride?: boolean | number
    /** Marketplace product variants (buy-now items) linked to this inventory item. */
    productVariants?: (ProductVariantConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Offer configuration for this item; null when the item does not accept offers. */
    offerConfig?: ItemOfferConfigGenqlSelection
    /** Offers placed on this item. */
    offers?: (OffersConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), status?: (OfferStatus | null), direction?: (PaginationDirection | null)} })
    /**
     * schemaData drift between this item and its targets. targetKind selects
     * sale items or product variants; omitted defaults to sale items.
     */
    contentDrift?: (ContentDiffGenqlSelection & { __args?: {targetKind?: (ContentDiffTargetKind | null)} })
    /**
     * Everywhere this item's content is linked: auction sale items and
     * marketplace product variants.
     */
    links?: ItemLinkConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Lightweight item projection for display in lists and banners, such as an offer row.
 * Does not include tags, metadata, schema, notes, specifications, or packaging; use the
 * item() query with the returned id to fetch the full Item.
 */
export interface ItemBannerGenqlSelection{
    /** Item ID */
    id?: boolean | number
    /** Account ID */
    accountId?: boolean | number
    /** Item title */
    title?: boolean | number
    /** Item description */
    description?: boolean | number
    /** Images attached to the item */
    images?: ImageGenqlSelection
    /** Item pricing information */
    price?: ItemPriceGenqlSelection
    /** Unique external identifier, e.g. warehouse id, inventory id. */
    externalId?: boolean | number
    /** Item location */
    location?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Per-item buy-now configuration. A missing config (or enabled = false) means the
 * item cannot be bought outright.
 */
export interface ItemBuyNowConfigGenqlSelection{
    itemId?: boolean | number
    accountId?: boolean | number
    enabled?: boolean | number
    /** Buy-now price in minor currency units. */
    price?: boolean | number
    /** Buy-now price currency (ISO-4217). */
    currency?: boolean | number
    /** When the config was last set (RFC3339); null when never set. */
    setAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemDatesGenqlSelection{
    /** UTC+0 RFC3339 formatted date and time when item will open. */
    openDate?: boolean | number
    /** UTC+0 RFC3339 formatted date and time when item will start closing (start of sniping period). */
    closingStart?: boolean | number
    /**
     * UTC+0 RFC3339 formatted date and time when item should move to status CLOSED.
     * This property is extend each time a bid is received during sniping.
     * Sniping is defined as the period between closingStart and closingEnd.
     */
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


/** Item filter */
export interface ItemFilter {
/** Filter by item title */
title?: (Scalars['String'] | null)}


/** Configuration for highlighting a sale item on the sale page. */
export interface ItemHighlightGenqlSelection{
    /** Whether the item is highlighted. */
    enabled?: boolean | number
    /** Display position of the highlighted item (lower numbers appear first). */
    position?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for setting the highlight configuration on a sale item. */
export interface ItemHighlightInput {
/** Whether the item should be highlighted. */
enabled: Scalars['Boolean'],
/** Display position of the highlighted item (lower numbers appear first). */
position: Scalars['Int']}

export interface ItemIdsFilter {itemIds?: (Scalars['ID'][] | null)}

export interface ItemImageAssociationGenqlSelection{
    /** The ID of the associated item */
    itemId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A link from this item to a downstream target — an auction sale item or a
 * marketplace product variant.
 */
export interface ItemLinkGenqlSelection{
    on_SaleItemLink?:SaleItemLinkGenqlSelection,
    on_ProductVariantLink?:ProductVariantLinkGenqlSelection,
    __typename?: boolean | number
}


/** A non-paginated collection of an item's downstream links. */
export interface ItemLinkConnectionGenqlSelection{
    edges?: ItemLinkEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemLinkEdgeGenqlSelection{
    node?: ItemLinkGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

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


/** Custom data defined by each account */
export interface ItemMetadataGenqlSelection{
    /** Data */
    data?: boolean | number
    /** JSON Schema */
    schema?: boolean | number
    /** Schema ID */
    schemaId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Item additional data input */
export interface ItemMetadataInput {
/** JSON */
data?: (Scalars['JSON'] | null),
/** Schema ID referencing the schemas table */
schemaId?: (Scalars['ID'] | null)}

export interface ItemNoteGenqlSelection{
    /** ID */
    id?: boolean | number
    /** Note */
    note?: boolean | number
    /** UserID */
    userId?: boolean | number
    /** The user that wrote the note */
    user?: UserInfoGenqlSelection
    /** Created time */
    created?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemNoteConnectionGenqlSelection{
    /** ItemNote edges */
    edges?: ItemNoteEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemNoteEdgeGenqlSelection{
    /** Current ItemNote Cursor */
    cursor?: boolean | number
    /** ItemNote node */
    node?: ItemNoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemNotificationGenqlSelection{
    on_ItemMessageNotification?:ItemMessageNotificationGenqlSelection,
    on_ItemFairWarningNotification?:ItemFairWarningNotificationGenqlSelection,
    on_ItemOfferPlacedNotification?:ItemOfferPlacedNotificationGenqlSelection,
    on_ItemSoldNotification?:ItemSoldNotificationGenqlSelection,
    __typename?: boolean | number
}

export interface ItemNumberChangeInput {itemId: Scalars['String'],itemNumber: Scalars['Int']}


/**
 * Per-item offer configuration. A missing config (or enabled = false) means the
 * item does not accept offers.
 */
export interface ItemOfferConfigGenqlSelection{
    itemId?: boolean | number
    accountId?: boolean | number
    enabled?: boolean | number
    /** Auto-accept threshold in minor currency units; null = no auto-accept. */
    autoAcceptAmount?: boolean | number
    /** Auto-accept threshold currency (ISO-4217); null iff autoAcceptAmount is null. */
    autoAcceptCurrency?: boolean | number
    /** Default TTL in seconds applied to offers on this item; null = no expiry. */
    offerTtlSeconds?: boolean | number
    /** When the config was created (RFC3339). */
    created?: boolean | number
    /** When the config was last modified (RFC3339). */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemOfferPlacedNotificationGenqlSelection{
    /** Id of the notification */
    id?: boolean | number
    /** Offer amount in minor currency units. */
    amount?: boolean | number
    /** ISO-4217 currency code. */
    currency?: boolean | number
    /** Basta user id (`User.id`) of the buyer. */
    buyerId?: boolean | number
    /**
     * offer_id of the placed offer. Match against ItemSoldNotification.referenceId
     * to know which offer became the sale.
     */
    referenceId?: boolean | number
    /**
     * Date timestamp when the offer was placed.
     * RFC3339 formatted string
     */
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemOrderInput {
/** Field to order by */
field?: ItemOrderField,
/** Order direction */
direction?: PaginationDirection}


/** Item packaging: boxed dimensions and weight for shipping. */
export interface ItemPackagingGenqlSelection{
    /** Unique identifier for the packaging record */
    id?: boolean | number
    /** Quantity of this packaging configuration */
    quantity?: boolean | number
    /** Boxed height */
    boxedHeight?: boolean | number
    /** Boxed length */
    boxedLength?: boolean | number
    /** Boxed depth */
    boxedDepth?: boolean | number
    /** Unit of measurement for boxed dimensions */
    boxedMeasurementUnit?: boolean | number
    /** Boxed weight */
    boxedWeight?: boolean | number
    /** Unit of measurement for boxed weight */
    boxedWeightUnit?: boolean | number
    /** When the packaging was created (RFC3339) */
    created?: boolean | number
    /** When the packaging was last modified (RFC3339) */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Item packaging input for adding packaging to an item */
export interface ItemPackagingInput {
/** Quantity of this packaging configuration */
quantity?: (Scalars['Int'] | null),
/** Boxed height */
boxedHeight?: (Scalars['Float'] | null),
/** Boxed length */
boxedLength?: (Scalars['Float'] | null),
/** Boxed depth */
boxedDepth?: (Scalars['Float'] | null),
/** Unit of measurement for boxed dimensions */
boxedMeasurementUnit?: (MeasurementUnit | null),
/** Boxed weight */
boxedWeight?: (Scalars['Float'] | null),
/** Unit of measurement for boxed weight */
boxedWeightUnit?: (WeightUnit | null)}


/** Item pricing information */
export interface ItemPriceGenqlSelection{
    /** Currency for pricing information */
    currency?: boolean | number
    /** Reserve in minor currency */
    reserve?: boolean | number
    /** Starting bid in minor currency */
    startingBid?: boolean | number
    /** Item low estimate */
    lowEstimate?: boolean | number
    /** Item high estimate */
    highEstimate?: boolean | number
    /** Reserve type for the item. */
    reserveType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Item price information input */
export interface ItemPriceInput {
/** Currency for pricing information */
currency?: (Currency | null),
/** Reserve in minor currency */
reserve?: (Scalars['Int'] | null),
/** Starting bid in minor currency */
startingBid?: (Scalars['Int'] | null),
/** Item low estimate */
lowEstimate?: (Scalars['Int'] | null),
/** Item high estimate */
highEstimate?: (Scalars['Int'] | null),
/** Reserve type for the item. */
reserveType?: (ReserveType | null)}

export interface ItemSchemaGenqlSelection{
    schema?: boolean | number
    metadataSchema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItemSoldNotificationGenqlSelection{
    /** Id of the notification */
    id?: boolean | number
    /** Sold amount in minor currency units. */
    amount?: boolean | number
    /** ISO-4217 currency code. */
    currency?: boolean | number
    /** How the sale was initiated. */
    source?: boolean | number
    /** Basta user id (`User.id`) of the buyer. */
    buyerId?: boolean | number
    /**
     * For an accepted offer, the offer_id; when the offer was placed pending, this matches that
     * offer's ItemOfferPlacedNotification.referenceId. For a buy-now, a generated id for the direct sell.
     */
    referenceId?: boolean | number
    /**
     * Date timestamp when the item was sold.
     * RFC3339 formatted string
     */
    date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Item specifications containing dimensions, weight, type, etc. */
export interface ItemSpecificationsGenqlSelection{
    /** Unique identifier for the specification */
    id?: boolean | number
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
    /** Diameter of the item */
    diameter?: boolean | number
    /** Unit of measurement for dimensions */
    measurementUnit?: boolean | number
    /** Weight of the item */
    weight?: boolean | number
    /** Unit of measurement for weight */
    weightUnit?: boolean | number
    /** Quantity */
    quantity?: boolean | number
    /** When the specification was created (RFC3339) */
    created?: boolean | number
    /** When the specification was last modified (RFC3339) */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Item specifications input for creating or updating items */
export interface ItemSpecificationsInput {
/** Type of specification (Art, Furniture, Jewelry, etc.) */
type?: (SpecificationType | null),
/** Sub-type of specification (PaintingUnframed, Table, Ring, etc.) */
subType?: (SpecificationSubType | null),
/** Height of the item */
height?: (Scalars['Float'] | null),
/** Length of the item */
length?: (Scalars['Float'] | null),
/** Depth of the item */
depth?: (Scalars['Float'] | null),
/** Diameter of the item */
diameter?: (Scalars['Float'] | null),
/** Unit of measurement for dimensions */
measurementUnit?: (MeasurementUnit | null),
/** Weight of the item */
weight?: (Scalars['Float'] | null),
/** Unit of measurement for weight */
weightUnit?: (WeightUnit | null),
/** Quantity */
quantity?: (Scalars['Int'] | null)}

export interface ItemTypeGenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    name?: boolean | number
    /** Globally unique namespace used to build search filter paths for this item type's properties. */
    namespace?: boolean | number
    schema?: boolean | number
    parentId?: boolean | number
    createdAt?: boolean | number
    modifiedAt?: boolean | number
    effectiveSchema?: boolean | number
    /** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
    titleTemplate?: boolean | number
    subTitleTemplate?: boolean | number
    descriptionTemplate?: boolean | number
    /**
     * The charges that apply to lots of this item type, already restated for it.
     * Falls back to the account when this item type does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges?: (ChargeConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), options?: (ChargeOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in an item types connection. */
export interface ItemTypeEdgeGenqlSelection{
    node?: ItemTypeGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A paginated connection of item types. */
export interface ItemTypesConnectionGenqlSelection{
    edges?: ItemTypeEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
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

export interface ItemsFilter {onlyMyItems: Scalars['Boolean'],title?: (Scalars['String'] | null)}

export interface LinkGenqlSelection{
    type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LinkImageByExternalIdInput {
/** Client-assigned external id of an existing image. */
externalId: Scalars['String'],
/**
 * The entities the image should be linked to. Marketplace types
 * (PRODUCT, PRODUCT_VARIANT, COLLECTION) are not supported here.
 */
imageTypes: ImageType[],
/** Conditional. Must be set if imageType is Sale or SaleItem. */
saleId?: (Scalars['String'] | null),
/** Conditional. Must be set if imageType is Item or SaleItem. */
itemId?: (Scalars['String'] | null),
/** Optional display order within the new connection. */
order?: (Scalars['Int'] | null)}

export interface LinkImageByIdInput {
/** Basta image id (UUID) of an existing image to link. */
imageId: Scalars['String'],
/**
 * The entities the image should be linked to. Marketplace types
 * (PRODUCT, PRODUCT_VARIANT, COLLECTION) are not supported here —
 * ImageWithAssociations cannot represent marketplace associations, so the
 * response would silently drop them. Use createUploadUrl for marketplace
 * images for now.
 */
imageTypes: ImageType[],
/** Conditional. Must be set if imageType is Sale or SaleItem. */
saleId?: (Scalars['String'] | null),
/** Conditional. Must be set if imageType is Item or SaleItem. */
itemId?: (Scalars['String'] | null),
/** Optional display order within the new connection. */
order?: (Scalars['Int'] | null)}

export interface LinkInput {type: LinkType,url: Scalars['String']}


/** Live Item represents an item that is currently being auctioned in a live sale. */
export interface LiveItemGenqlSelection{
    item?: SaleItemGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LiveStreamGenqlSelection{
    on_ExternalLiveStream?:ExternalLiveStreamGenqlSelection,
    on_BastaLiveStream?:BastaLiveStreamGenqlSelection,
    __typename?: boolean | number
}

export interface LiveStreamInput {
/** LiveStream URL */
url: Scalars['String'],
/** LiveStream Title */
type: LiveStreamType}


/**
 * A place within a Site, up to 2 levels deep. A top-level location has no parent; a
 * level-2 location's parent is a top-level location in the same site.
 */
export interface LocationGenqlSelection{
    /** Id of the location. */
    id?: boolean | number
    /** Account the location belongs to. */
    accountId?: boolean | number
    /** The site this location belongs to. */
    site?: SiteGenqlSelection
    /** The parent location, or null when this is a top-level location. */
    parent?: LocationGenqlSelection
    /** The child locations directly under this location. */
    children?: LocationGenqlSelection
    /** Location name. */
    name?: boolean | number
    /** When the location was archived (RFC3339), or null when active. */
    archivedAt?: boolean | number
    /** When the location was created (RFC3339). */
    created?: boolean | number
    /** When the location was last modified (RFC3339). */
    modified?: boolean | number
    /** Id of the user that created the location. */
    createdByUserId?: boolean | number
    /** Id of the user that last modified the location. */
    modifiedByUserId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LocationConnectionGenqlSelection{
    /** Location edges. */
    edges?: LocationEdgeGenqlSelection
    /** Current page information. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LocationEdgeGenqlSelection{
    /** Current location cursor. */
    cursor?: boolean | number
    /** Location node. */
    node?: LocationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MailingAddressGenqlSelection{
    /** Address ID */
    id?: boolean | number
    /** Name */
    name?: boolean | number
    /** Company */
    company?: boolean | number
    /** Phone */
    phone?: boolean | number
    /** Line 1 */
    line1?: boolean | number
    /** Line 2 */
    line2?: boolean | number
    /** City */
    city?: boolean | number
    /** State */
    state?: boolean | number
    /** Postal code */
    postalCode?: boolean | number
    /** Country */
    country?: boolean | number
    /** Is this the primary address for this type */
    isPrimary?: boolean | number
    /** Type of address (shipping, billing) */
    addressType?: boolean | number
    /** Label */
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MailingAddressInput {
/** Address ID (optional for create, required for update) */
id?: (Scalars['String'] | null),
/** Name */
name: Scalars['String'],
/** Company */
company: Scalars['String'],
/** Phone */
phone: Scalars['String'],
/** Line 1 */
line1: Scalars['String'],
/** Line 2 */
line2: Scalars['String'],
/** City */
city: Scalars['String'],
/** State */
state: Scalars['String'],
/** Postal code (optional) */
postalCode?: (Scalars['String'] | null),
/** Country */
country: Country,
/** Is this the primary address for this type */
isPrimary: Scalars['Boolean'],
/** Type of address (shipping, billing) */
addressType: AddressType,
/** Label */
label?: (Scalars['String'] | null)}


/** Max bid on behalf of a user in a sale. */
export interface MaxBidOnBehalfInput {
/** user id of the user that bid is being placed for. */
userId: Scalars['String'],
/** max bid amount of the bid in minor currency unit. */
maxAmount: Scalars['Int'],
/** item id of the item */
itemId: Scalars['String'],
/** The sale id which the item belongs that is being bidded on */
saleId: Scalars['String'],
/** BidOrigin */
bidOrigin?: (BidOriginInput | null),
/**
 * Optional registration ID for this bid. When omitted, it will be looked up by userId and bidOrigin.
 * If none is found, a registration will be automatically created for the (user, origin) and attached to the bid.
 */
registrationId?: (Scalars['String'] | null)}


/** Object for a metafield */
export interface MetafieldGenqlSelection{
    id?: boolean | number
    key?: boolean | number
    value?: boolean | number
    valueType?: boolean | number
    entityType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for setting a single metafield connected to a specific entity */
export interface MetafieldInput {key: Scalars['String'],value: Scalars['String'],valueType: MetafieldValueType}

export interface MutationGenqlSelection{
    /** Update Account */
    updateAccount?: (AccountGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateAccountInput} })
    /** Enable or disable countries for the account. Returns the refreshed country list. */
    setAccountCountriesEnabled?: (CountryInfoGenqlSelection & { __args: {accountId: Scalars['ID'], codes: Country[], enabled: Scalars['Boolean']} })
    /** Set a country's AML risk class for the account. Returns the refreshed country list. */
    setAccountCountryAmlRiskClass?: (CountryInfoGenqlSelection & { __args: {accountId: Scalars['ID'], code: Country, amlRiskClass: AmlRiskClass} })
    /**
     * Set the per-account auction symbol glyphs for ARR / VAT / CITES.
     * Replaces all glyphs at once; an empty glyph clears that symbol.
     */
    setAuctionSymbols?: (AccountGenqlSelection & { __args: {accountId: Scalars['String'], input: AuctionSymbolInput[]} })
    /** Create a sale */
    createSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSaleInput} })
    /** Create a Dutch sale */
    createDutchSale?: (DutchSaleGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateDutchSaleInput} })
    /**
     * Update a Dutch sale's content (title / description).
     * null leaves a field unchanged; empty string clears it.
     */
    updateDutchSale?: (DutchSaleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateDutchSaleInput} })
    /** Update a sale */
    updateSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], saleId: Scalars['String'], input: UpdateSaleInput} })
    /**
     * Attach one or more departments to a sale (add-only; already-assigned
     * departments are ignored). Returns the updated sale.
     */
    addSaleDepartments?: (SaleGenqlSelection & { __args: {accountId: Scalars['ID'], saleId: Scalars['ID'], departmentIds: Scalars['ID'][]} })
    /** Remove a single department from a sale. Returns the updated sale. */
    removeSaleDepartment?: (SaleGenqlSelection & { __args: {accountId: Scalars['ID'], saleId: Scalars['ID'], departmentId: Scalars['ID']} })
    /**
     * Create a department for an account. The slug is derived from the name
     * when omitted; supply slug to override it. Returns the created department.
     */
    createDepartment?: (DepartmentGenqlSelection & { __args: {accountId: Scalars['ID'], name: Scalars['String'], slug?: (Scalars['String'] | null)} })
    /** Rename an existing department. Returns the updated department. */
    updateDepartment?: (DepartmentGenqlSelection & { __args: {accountId: Scalars['ID'], id: Scalars['ID'], name: Scalars['String']} })
    /**
     * Soft-delete a department. The record is retained and can be brought back
     * with restoreDepartment. Returns the deleted department.
     */
    deleteDepartment?: (DepartmentGenqlSelection & { __args: {accountId: Scalars['ID'], id: Scalars['ID']} })
    /** Restore a previously soft-deleted department. Returns the restored department. */
    restoreDepartment?: (DepartmentGenqlSelection & { __args: {accountId: Scalars['ID'], id: Scalars['ID']} })
    /**
     * Create an auction genre for an account. The slug is derived from the name
     * when omitted; supply slug to override it. Returns the created auction genre.
     */
    createSaleGenre?: (SaleGenreGenqlSelection & { __args: {accountId: Scalars['ID'], name: Scalars['String'], slug?: (Scalars['String'] | null), 
    /** Defaults to true when omitted. */
    isPublic?: (Scalars['Boolean'] | null)} })
    /**
     * Update an existing auction genre's name and visibility. Returns the updated
     * auction genre.
     */
    updateSaleGenre?: (SaleGenreGenqlSelection & { __args: {accountId: Scalars['ID'], id: Scalars['ID'], name: Scalars['String'], 
    /** Omit to leave the current value unchanged. */
    isPublic?: (Scalars['Boolean'] | null)} })
    /**
     * Archive an auction genre. The record is retained and can be brought back
     * with restoreSaleGenre. Returns the archived auction genre.
     */
    archiveSaleGenre?: (SaleGenreGenqlSelection & { __args: {accountId: Scalars['ID'], id: Scalars['ID']} })
    /** Restore a previously archived auction genre. Returns the restored auction genre. */
    restoreSaleGenre?: (SaleGenreGenqlSelection & { __args: {accountId: Scalars['ID'], id: Scalars['ID']} })
    /**
     * Hard-delete an auction genre. Rejected when the genre is assigned to any
     * sale. Returns the deleted auction genre.
     */
    deleteSaleGenre?: (SaleGenreGenqlSelection & { __args: {accountId: Scalars['ID'], id: Scalars['ID']} })
    /**
     * Create or edit a section marker on a sale. Omit input.id to create; supply a
     * known id to edit in place. Returns the updated sale.
     */
    setSectionMarker?: (SaleGenqlSelection & { __args: {accountId: Scalars['ID'], saleId: Scalars['ID'], input: SetSectionMarkerInput} })
    /** Remove a section marker from a sale by id. Returns the updated sale. */
    removeSectionMarker?: (SaleGenqlSelection & { __args: {accountId: Scalars['ID'], saleId: Scalars['ID'], id: Scalars['ID']} })
    /** Set or update the sale slug (pretty URL) for a sale. Creates if none exists; updates otherwise. */
    setSaleSlug?: (SaleSlugGenqlSelection & { __args: {accountId: Scalars['String'], input: SetSaleSlugInput} })
    /** Set or update the sale item slug (pretty URL) for an item in a sale. Creates if none exists; updates otherwise. */
    setSaleItemSlug?: (SaleItemSlugGenqlSelection & { __args: {accountId: Scalars['String'], input: SetSaleItemSlugInput} })
    /** Open a sale, non forcefully. */
    openSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: OpenSaleInput} })
    /** Close a sale, non forcefully. */
    closeSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: CloseSaleInput} })
    /** Set Sale State unforcefully */
    setSaleStatus?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: SetSaleStatusInput} })
    /** Start to close the sale, non forcefully */
    startClosingSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: StartClosingSaleInput} })
    /** Open a sale, forcefully. */
    forceOpenSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: OpenSaleInput} })
    /** Close a sale, forcefully. */
    forceCloseSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: CloseSaleInput} })
    /** Start to close the sale, forcefully */
    forceStartClosingSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: StartClosingSaleInput} })
    /** Publish a sale, forcefully. */
    publishSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: PublishSaleInput} })
    /** Delete a sale permanently. */
    deleteSale?: (DeleteSalePayloadGenqlSelection & { __args: {accountId: Scalars['String'], input: DeleteSaleInput} })
    /** Create item. This operation will create a standalone item that is not part of a sale. */
    createItem?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateItemInput} })
    /** Update item. This will update information about items for all sales that has not been closed. */
    updateItem?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String'], input: UpdateItemInput} })
    /** Add specifications to an existing item. */
    addSpecifications?: (ItemSpecificationsGenqlSelection & { __args: {accountId: Scalars['String'], input: AddSpecificationsInput} })
    /** Create a consignment. */
    createConsignment?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateConsignmentInput} })
    /** Update a consignment. Replaces the whole record: a field left out is cleared. */
    updateConsignment?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateConsignmentInput} })
    /** Delete a consignment. Rejected if items are still linked to it. */
    deleteConsignment?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], consignmentId: Scalars['String']} })
    /** Link an item to a consignment. */
    setItemConsignment?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SetItemConsignmentInput} })
    /** Clear an item's consignment link. No-op if the item is not linked. */
    clearItemConsignment?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String']} })
    /** Create a site. */
    createSite?: (SiteGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSiteInput} })
    /** Update a site. Replaces the whole record: a field left out is cleared. */
    updateSite?: (SiteGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateSiteInput} })
    /** Archive a site, hiding it from default lists while keeping existing item references. */
    archiveSite?: (SiteGenqlSelection & { __args: {accountId: Scalars['String'], siteId: Scalars['String']} })
    /** Unarchive a previously archived site. */
    unarchiveSite?: (SiteGenqlSelection & { __args: {accountId: Scalars['String'], siteId: Scalars['String']} })
    /** Delete a site. Rejected if any item still references it, or if it has any locations. */
    deleteSite?: (SiteGenqlSelection & { __args: {accountId: Scalars['String'], siteId: Scalars['String']} })
    /** Create a location under a site. */
    createLocation?: (LocationGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateLocationInput} })
    /** Update a location. Replaces the whole record: a field left out is cleared. */
    updateLocation?: (LocationGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateLocationInput} })
    /** Archive a location, hiding it from default lists while keeping existing item references. */
    archiveLocation?: (LocationGenqlSelection & { __args: {accountId: Scalars['String'], locationId: Scalars['String']} })
    /** Unarchive a previously archived location. */
    unarchiveLocation?: (LocationGenqlSelection & { __args: {accountId: Scalars['String'], locationId: Scalars['String']} })
    /** Delete a location. Rejected if any item still references it, or if it has any child locations. */
    deleteLocation?: (LocationGenqlSelection & { __args: {accountId: Scalars['String'], locationId: Scalars['String']} })
    /** Set an item's site and location. The location must belong to the given site. */
    setItemSiteLocation?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SetItemSiteLocationInput} })
    /** Clear an item's site and location. No-op if the item has none set. */
    clearItemSiteLocation?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String']} })
    /** Add one or more consignors to a consignment. Existing consignors are ignored. */
    addConsignors?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: AddConsignorsInput} })
    /** Remove one or more consignors from a consignment. Removing all is allowed. */
    removeConsignors?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: RemoveConsignorsInput} })
    /** Set the main consignor for a consignment (auto-adds the user if needed). */
    setMainConsignor?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: SetMainConsignorInput} })
    /**
     * Add one or more staff (team members) to a consignment. Ids already on the staff
     * set are ignored. When the consignment has no staff yet, one of the added members
     * becomes the lead.
     */
    addConsignmentStaff?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: AddConsignmentStaffInput} })
    /**
     * Remove one or more staff from a consignment. Removing all is allowed, and
     * removing the current lead promotes one of the remaining members in its place.
     */
    removeConsignmentStaff?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: RemoveConsignmentStaffInput} })
    /** Set the lead staff member for a consignment (auto-adds the user if needed). */
    setConsignmentStaffLead?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: SetConsignmentStaffLeadInput} })
    /** Enable/disable offers on an item and set or clear its auto-accept threshold. */
    setItemOfferConfig?: (ItemOfferConfigGenqlSelection & { __args: {accountId: Scalars['String'], input: SetItemOfferConfigInput} })
    /**
     * Enable/disable buy-now on a sale item and set its fixed price. Returns the
     * updated sale item.
     */
    setItemBuyNowConfig?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SetItemBuyNowConfigInput} })
    /**
     * Buy an item outright on behalf of a buyer at its fixed buy-now price. This is a
     * terminal action: it closes the sale item, marks it sold, and creates a payments
     * order. The buyer is taken from input.buyerUserId; the acting admin is never the
     * buyer. Returns the updated sale item.
     */
    buyItem?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: BuyItemInput} })
    /** Accept a pending offer as an admin. */
    acceptOffer?: (OfferGenqlSelection & { __args: {accountId: Scalars['String'], offerId: Scalars['String']} })
    /** Reject a pending offer as an admin. */
    rejectOffer?: (OfferGenqlSelection & { __args: {accountId: Scalars['String'], offerId: Scalars['String']} })
    /** Counter a pending offer as the seller with a new amount. */
    counterOffer?: (OfferGenqlSelection & { __args: {accountId: Scalars['String'], offerId: Scalars['String'], amount: Scalars['Int'], currency: Scalars['String'], message?: (Scalars['String'] | null)} })
    /** Add packaging to an existing item. */
    addPackaging?: (ItemPackagingGenqlSelection & { __args: {accountId: Scalars['String'], input: AddPackagingInput} })
    /** Update a single specification by id. */
    updateSpecification?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateSpecificationInput} })
    /** Update a single packaging record by id. */
    updatePackaging?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdatePackagingInput} })
    /** Remove specifications from an item. Empty or omitted specificationIds removes none (item unchanged). */
    removeSpecifications?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: RemoveSpecificationsInput} })
    /** Remove packaging from an item. Empty or omitted packagingIds removes none (item unchanged). */
    removePackaging?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: RemovePackagingInput} })
    /** Update ItemNumbers input */
    updateItemNumbers?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateItemNumbersInput} })
    /** Create item and add to a sale. This operation will automatically create an item and add it to the sale. */
    createItemForSale?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SaleItemInput} })
    /** Create a Dutch item in a sale */
    createDutchItemForSale?: (DutchSaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateDutchItemForSaleInput} })
    /** Update the sale properties of a Dutch item. */
    updateDutchSaleItem?: (DutchSaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateDutchSaleItemInput} })
    /** Add a currently existing item to a sale. */
    addItemToSale?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: AddItemToSaleInput} })
    /** Update item associated with a sale. */
    updateItemForSale?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateSaleItemInput} })
    /**
     * Reconcile content drift between an inventory item and one of its sale items in the
     * given direction. Returns the recomputed diff. Both directions are treated as
     * sale-scoped edits gated on WRITE_SALE; PROMOTE_TO_ITEM writes the item under that
     * same grant.
     */
    syncContent?: (ContentDiffGenqlSelection & { __args: {accountId: Scalars['String'], input: SyncContentInput} })
    /**
     * @deprecated use syncContent with direction REFRESH_FROM_ITEM
     * Copy schemaData (and schemaId) from an inventory item to one of its sale items. Returns the recomputed diff.
     */
    syncSchemaDataToSaleItem?: (ContentDiffGenqlSelection & { __args: {accountId: Scalars['String'], input: SyncSchemaDataToSaleItemInput} })
    /**
     * @deprecated use syncContent with direction PROMOTE_TO_ITEM
     * Copy public schemaData from one of an item's sale items back onto the inventory item. Returns the recomputed diff.
     */
    syncSchemaDataFromSaleItem?: (ContentDiffGenqlSelection & { __args: {accountId: Scalars['String'], input: SyncSchemaDataFromSaleItemInput} })
    /** Copy schemaData (and schemaId) from an inventory item to one of its product variants. Returns the recomputed diff. */
    syncSchemaDataToProductVariant?: (ContentDiffGenqlSelection & { __args: {accountId: Scalars['String'], input: SyncSchemaDataToProductVariantInput} })
    /**
     * Reorder highlighted items for a sale. Atomically updates positions for all
     * highlighted items based on the order of item IDs in the input.
     * Returns the updated highlighted items connection.
     */
    reorderHighlightedItems?: (HighlightedSaleItemConnectionGenqlSelection & { __args: {accountId: Scalars['String'], input: ReorderHighlightedItemsInput} })
    /**
     * @deprecated not supported
     * Sets sale item winner. Marks bid as won and closes item. Used in offer model.
     */
    setItemWinner?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SetItemWinnerInput} })
    /** Sets sale item status. Used in offer model to close item with no winner. */
    setSaleItemStatus?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SetSaleItemStatusInput} })
    /** Remove an item from the sale. This will not delete the item completely. */
    removeItemFromSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: RemoveSaleItemInput} })
    /** Create an API key, that can access all functions in the API on behalf of the account. */
    createApiKey?: (ApiKeyCreatedGenqlSelection & { __args: {accountId: Scalars['String'], input: ApiKeyInput} })
    /** Revoke the API key by id. */
    revokeApiKey?: { __args: {accountId: Scalars['String'], input: RevokeApiKeyInput} }
    /**
     * @deprecated Use createApiKey mutation
     * DEPRECATED.
     * Create an API key, that can access all functions in the API on behalf of the logged in customer.
     */
    createApiToken?: (ApiTokenCreatedGenqlSelection & { __args: {accountId: Scalars['String'], input: ApiTokenInput} })
    /**
     * @deprecated Use revokeApiKey mutation
     * DEPRECATED.
     * Revoke the API key by id.
     */
    revokeApiToken?: { __args: {accountId: Scalars['String'], input: RevokeApiTokenInput} }
    /** Bid on behalf of a user */
    bidOnBehalf?: (BidGenqlSelection & { __args: {accountId: Scalars['String'], input: BidOnBehalfInput} })
    /**
     * @deprecated Use bidOnBehalf with type as MAX
     * Max bid on behalf of a user
     */
    maxBidOnBehalf?: (BidGenqlSelection & { __args: {accountId: Scalars['String'], input: MaxBidOnBehalfInput} })
    /** Cancel the latest bid on item (including reactive bids that were placed as a side-effect) */
    cancelLatestBidOnItem?: (CanceledLatestBidOnItemGenqlSelection & { __args: {accountId: Scalars['String'], input: CancelLatestBidOnItemInput} })
    setUserIdOnBid?: (BidGenqlSelection & { __args: {accountId: Scalars['String'], input: SetUserIdOnBidInput} })
    /** Create and sign a token that can be used to bid on behalf of a user (unique user id needs to be provided) */
    createBidderToken?: (BidderTokenGenqlSelection & { __args: {accountId: Scalars['String'], input: BidderTokenInput} })
    /**
     * Will replace createBidderToken(accountId: String!, input: BidderTokenInput!): BidderToken!
     * Only accessible for SDK users at the moment
     */
    createUserTokenV2?: (UserTokenGenqlSelection & { __args: {accountId: Scalars['String'], input: UserTokenInput} })
    /** Add action hook subscription */
    addActionHookSubscription?: (ActionHookSubscriptionGenqlSelection & { __args: {accountId: Scalars['String'], input: ActionHookSubscriptionInput} })
    /** Update action hook subscription */
    updateActionHookSubscription?: (ActionHookSubscriptionGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateActionHookSubscriptionInput} })
    /** Delete action hook subscription */
    deleteActionHookSubscription?: { __args: {accountId: Scalars['String'], input: DeleteActionHookSubscriptionInput} }
    /** Retry action hook log */
    retryActionHook?: (ActionHookLogGenqlSelection & { __args: {accountId: Scalars['String'], input: RetryActionHookInput} })
    /** Test ActionHook configuration. This will trigger an action hook to be sent. */
    testActionHook?: (TestActionHookResponseGenqlSelection & { __args: {accountId: Scalars['String'], input: ActionHookSubscriptionInput} })
    /**
     * Onboard Basta Sellers onto supported payment provider/s.
     * Not available for integrating applications.
     */
    onboardPaymentAccount?: (OnboardPaymentAccountResponseGenqlSelection & { __args: {accountId: Scalars['String'], input: OnboardPaymentAccountInput} })
    /**
     * If payment provider onboarding was not finished then this mutation can be called to regenerate onboarding link.
     * Not available for integration applications. Only accesible via admin.
     */
    continueOnboardPaymentAccount?: (OnboardPaymentAccountResponseGenqlSelection & { __args: {accountId: Scalars['String'], input: ContinueOnboardPaymentAccountInput} })
    /**
     * Not available for integrating applications.
     * Accepts seller terms on behalf of account.
     * Returns a RFC399 timestamp of when seller terms were accepted.
     */
    acceptTerms?: { __args: {accountId: Scalars['String']} }
    /**
     * Create Item Image.
     * Method only available through admin.
     */
    createItemImage?: (ImageGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateItemImage} })
    /**
     * @deprecated Use reorderImages mutation
     * Reorder item images.
     * Method only available through admin.
     */
    reorderItemImages?: (ImageGenqlSelection & { __args: {accountId: Scalars['String'], input: ReorderItemImages} })
    /**
     * Reorder images based on type.
     * Method only available through admin.
     */
    reorderImages?: (ImageGenqlSelection & { __args: {accountId: Scalars['String'], input: ReorderImagesInput} })
    /**
     * @deprecated Use deleteImage mutation
     * Delete item image.
     * Method only available through admin.
     */
    deleteItemImage?: (ImageGenqlSelection & { __args: {accountId: Scalars['String'], input: DeleteItemImageInput} })
    /**
     * Delete image associations and remove the image.
     * Method only available through admin.
     * 
     * If ImageTypes are specified:
     *   - Validates that required IDs (saleID/itemID) are provided for the specified types
     *   - Removes associations for the specified types (Account, Sale, Item, or SaleItem)
     * 
     * If ImageTypes is empty/nil:
     *   - Removes all associations for the image (Account, Sale, Item, and SaleItem)
     *   - Removes the image record
     *   - This completely removes an image from the system
     */
    deleteImage?: (ImageGenqlSelection & { __args: {accountId: Scalars['String'], input: DeleteImageInput} })
    /** Add paddle to sale. */
    addPaddleToSale?: (PaddleGenqlSelection & { __args: {accountId: Scalars['String'], input: AddPaddleToSaleInput} })
    /** Remove paddle from sale. */
    removePaddleFromSale?: (PaddleGenqlSelection & { __args: {accountId: Scalars['String'], input: RemovePaddleFromSaleInput} })
    /** Register user to sale. */
    registerUserPaddle?: (PaddleGenqlSelection & { __args: {accountId: Scalars['String'], input: RegisterUserPaddleInput} })
    /**
     * Update user profile, including addresses, phones, metadata, and verification.
     * This mutation will upsert the user if they don't exist.
     */
    updateUser?: (UserInfoGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateUserInput} })
    /**
     * Set a user's notification preferences. Only the entries given are changed.
     * The returned list covers what the account sends on, so an entry outside it is
     * stored but not returned.
     */
    setUserNotificationPreferences?: (UserNotificationPreferenceGenqlSelection & { __args: {accountId: Scalars['String'], userId: Scalars['String'], preferences: UserNotificationPreferenceInput[]} })
    /** Create or update a new address for a user */
    upsertUserAddress?: (MailingAddressGenqlSelection & { __args: {accountId: Scalars['String'], input: UpsertUserAddressInput} })
    /** Create or update a new phone for a user */
    upsertUserPhone?: (PhoneAddressGenqlSelection & { __args: {accountId: Scalars['String'], input: UpsertUserPhoneInput} })
    /** Delete a user address */
    deleteUserAddress?: { __args: {accountId: Scalars['String'], input: DeleteUserAddressInput} }
    /** Delete a user phone */
    deleteUserPhone?: { __args: {accountId: Scalars['String'], input: DeleteUserPhoneInput} }
    /** Add notification to an item */
    addMessageNotificationToItem?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: AddMessageNotificationToItemInput} })
    /** Add fair warning notification to an item */
    addFairWarningNotificationToItem?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: AddFairWarningNotificationToItemInput} })
    /** Add live stream to a sale, this operation is idempotent. */
    addLiveStreamToSale?: (LiveStreamGenqlSelection & { __args: {accountId: Scalars['String'], input: AddLiveStreamToSaleInput} })
    /** Delete live stream from a sale */
    deleteLiveStreamFromSale?: { __args: {accountId: Scalars['String'], input: DeleteLiveStreamFromSaleInput} }
    /** Add tag to an item */
    addTagToItem?: (TagGenqlSelection & { __args: {accountId: Scalars['String'], input: AddTagToItemInput} })
    /** Remove tag from an item */
    removeTagFromItem?: { __args: {accountId: Scalars['String'], input: RemoveTagFromItemInput} }
    /** Add tag to a sale item */
    addTagToSaleItem?: (TagGenqlSelection & { __args: {accountId: Scalars['String'], input: AddTagToSaleItemInput} })
    /** Remove tag from a sale item */
    removeTagFromSaleItem?: { __args: {accountId: Scalars['String'], input: RemoveTagFromSaleItemInput} }
    /** Add tag to a user */
    addTagToUser?: (TagGenqlSelection & { __args: {accountId: Scalars['String'], input: AddTagToUserInput} })
    /** Remove tag from a user */
    removeTagFromUser?: { __args: {accountId: Scalars['String'], input: RemoveTagFromUserInput} }
    /** Block a user from participating in sales */
    blockUser?: (UserGenqlSelection & { __args: {accountId: Scalars['String'], input: BlockUserInput} })
    /** Unblock a user, allowing them to participate in sales again */
    unblockUser?: (UserGenqlSelection & { __args: {accountId: Scalars['String'], input: UnblockUserInput} })
    /** Assign a user's external id (user_id). Write-once: fails if it is already set. */
    setUserExternalId?: (UserGenqlSelection & { __args: {accountId: Scalars['String'], input: SetUserExternalIdInput} })
    createItemNote?: (ItemNoteGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateItemNoteInput} })
    /** CreateUploadUrl */
    createUploadUrl?: (UploadUrlGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateUploadUrlInput} })
    /**
     * Request a signed URL for uploading a new asset. The client PUTs the file
     * bytes to the returned uploadUrl; the asset becomes fetchable once the
     * upload completes.
     */
    createAssetUploadUrl?: (AssetUploadUrlGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateAssetUploadUrlInput} })
    /**
     * Link an existing image (by Basta image id) to one or more resources without re-uploading.
     * Returns NOT_FOUND if the image does not exist.
     * Returns FAILED_PRECONDITION if the image is still uploading.
     * Idempotent: re-linking an existing connection is a no-op.
     */
    linkImageById?: (ImageWithAssociationsGenqlSelection & { __args: {accountId: Scalars['String'], input: LinkImageByIdInput} })
    /**
     * Link an existing image (by client-assigned externalId) to one or more resources without re-uploading.
     * Same error semantics as linkImageById.
     */
    linkImageByExternalId?: (ImageWithAssociationsGenqlSelection & { __args: {accountId: Scalars['String'], input: LinkImageByExternalIdInput} })
    /** Create a new item type for an account, optionally as a child of another item type. */
    createItemType?: (ItemTypeGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateItemTypeInput} })
    /** Partially update an existing item type. Only the fields present in `input` are updated. */
    updateItemType?: (ItemTypeGenqlSelection & { __args: {accountId: Scalars['ID'], itemTypeId: Scalars['ID'], input: UpdateItemTypeInput} })
    /**
     * Reorder an item type's children (or the root item types when `parentId` is null).
     * The complete, ordered set of the parent's child IDs must be supplied; a type's
     * position in the list becomes its order. Rejects a partial/mismatched set.
     */
    reorderItemTypes?: (ItemTypeGenqlSelection & { __args: {accountId: Scalars['ID'], parentId?: (Scalars['ID'] | null), itemTypeIds: Scalars['ID'][]} })
    /**
     * @deprecated Renamed to createItemType.
     * Deprecated alias for createItemType. Kept for backward compatibility.
     */
    createSchema?: (ItemTypeGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateItemTypeInput} })
    /**
     * @deprecated Renamed to updateItemType.
     * Deprecated alias for updateItemType. Kept for backward compatibility
     * (the id arg is still named schemaId here; use updateItemType's itemTypeId).
     */
    updateSchema?: (ItemTypeGenqlSelection & { __args: {accountId: Scalars['ID'], schemaId: Scalars['ID'], input: UpdateItemTypeInput} })
    /** Update increment table globally for a sale, this will update all items in the sale. */
    updateGlobalIncrementTable?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateGlobalIncrementTableInput} })
    /** Update dates globally for a sale, this will update all items in the sale. */
    updateGlobalDates?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateGlobalDatesInput} })
    /** Update closing time countdown globally for a sale, this will update all items in the sale. */
    updateGlobalClosingTimeCountdown?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateGlobalClosingTimeCountdownInput} })
    /**
     * PassLiveItem. Mutation only available with valid session cookie.
     * Moves item to status processing and raises the reserve if it has been met.
     * Only works on "LIVE" sale type
     */
    passLiveItem?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: PassLiveItemInput} })
    /**
     * SellLiveItem. Mutation only available with valid session cookie.
     * Moves item to status processing and lowers the reserve if it has not been met.
     * Only works on "LIVE" sale type
     */
    sellLiveItem?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SellLiveItemInput} })
    /**
     * sellLiveItemToBid is like sellLiveItem but pins the bid id the caller
     * intends to sell to. Only works on items in "ITEM_LIVE" status in sales of
     * type "LIVE". Returns a typed error if the pinned bid is not on the item or
     * is not the current leader, so the UI can recover without polling.
     */
    sellLiveItemToBid?: (SellLiveItemToBidResultGenqlSelection & { __args: {accountId: Scalars['String'], input: SellLiveItemToBidInput} })
    /** Hide items from a sale from a given item number onwards */
    hideItemsFromSale?: { __args: {accountId: Scalars['String'], input: HideItemsFromSaleInput} }
    /** Unhide items from a sale from a given item number onwards */
    unhideItemsFromSale?: { __args: {accountId: Scalars['String'], input: UnhideItemsFromSaleInput} }
    /**
     * Connect a a shopify store to an account.
     * Only applicable accounts will work when connecting to shopify.
     */
    connectShopifyToAccount?: (ShopifyConnectionGenqlSelection & { __args: {accountId: Scalars['String'], input: ConnectShopifyToAccountInput} })
    /**
     * @deprecated Use createOrder mutation
     * Create a payment order
     */
    createPaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: CreatePaymentOrderInput} })
    /** Create an order */
    createOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateOrderInput} })
    /** Create an order line for a payment order */
    createOrderLine?: (OrderLineGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateOrderLineInput} })
    /** Update an order line for a payment order */
    updateOrderLine?: (OrderLineGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateOrderLineInput} })
    /** Delete an order line for a payment order */
    deleteOrderLine?: (OrderLineGenqlSelection & { __args: {accountId: Scalars['String'], input: DeleteOrderLineInput} })
    /**
     * @deprecated Use updateOrder mutation
     * Update a payment order
     */
    updatePaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdatePaymentOrderInput} })
    /** Update an order */
    updateOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateOrderInput} })
    /**
     * @deprecated Use cancelPaymentOrder mutation
     * Delete a payment order, this will cancel order.
     */
    deletePaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: DeletePaymentOrderInput} })
    /** Cancel a payment order */
    cancelPaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: CancelPaymentOrderInput} })
    /** Publish a payment order */
    publishPaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: PublishPaymentOrderInput} })
    /** Create Invoice for order */
    createInvoice?: (InvoiceGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateInvoiceInput} })
    /** Create a payment for an order */
    createPayment?: (PaymentGenqlSelection & { __args: {accountId: Scalars['String'], input: CreatePaymentInput} })
    /** Create an account fee */
    createAccountFee?: (AccountFeeGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateAccountFeeInput} })
    /** Update an account fee */
    updateAccountFee?: (AccountFeeGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateAccountFeeInput} })
    /** Delete an account fee */
    deleteAccountFee?: { __args: {accountId: Scalars['String'], input: DeleteAccountFeeInput} }
    /** Create a sale-level fee rule for a specific sale. */
    createSaleFee?: (FeeRuleGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSaleFeeInput} })
    /** Update a sale-level fee rule. */
    updateSaleFee?: (FeeRuleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateSaleFeeInput} })
    /** Delete a sale-level fee rule. */
    deleteSaleFee?: { __args: {accountId: Scalars['String'], input: DeleteSaleFeeInput} }
    /** Reset sale fees to the account defaults, discarding any customizations. */
    resetSaleFees?: (FeeRuleGenqlSelection & { __args: {accountId: Scalars['String'], input: ResetSaleFeesInput} })
    /** Create an item-level fee rule for a specific sale item. */
    createSaleItemFee?: (FeeRuleGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSaleItemFeeInput} })
    /** Update an item-level fee rule. */
    updateSaleItemFee?: (FeeRuleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateSaleItemFeeInput} })
    /** Delete an item-level fee rule. */
    deleteSaleItemFee?: { __args: {accountId: Scalars['String'], input: DeleteSaleItemFeeInput} }
    /** Create a sale registration */
    createSaleRegistration?: (SaleRegistrationGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSaleRegistrationInput} })
    /** Accept a sale registration */
    acceptSaleRegistration?: (SaleRegistrationGenqlSelection & { __args: {accountId: Scalars['String'], input: AcceptSaleRegistrationInput} })
    /** Reject a sale registration */
    rejectSaleRegistration?: (SaleRegistrationGenqlSelection & { __args: {accountId: Scalars['String'], input: RejectSaleRegistrationInput} })
    /** Delete a sale registration */
    deleteSaleRegistration?: { __args: {accountId: Scalars['String'], input: DeleteSaleRegistrationInput} }
    /** Create a sale item registration */
    createSaleItemRegistration?: (SaleItemRegistrationGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSaleItemRegistrationInput} })
    /** Delete a sale item registration */
    deleteSaleItemRegistration?: { __args: {accountId: Scalars['String'], input: DeleteSaleItemRegistrationInput} }
    /** Create a sale registration policy */
    createSaleRegistrationPolicy?: (SaleRegistrationPolicyGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSaleRegistrationPolicyInput} })
    /** Update a sale registration policy */
    updateSaleRegistrationPolicy?: (SaleRegistrationPolicyGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateSaleRegistrationPolicyInput} })
    /** Attach policies to sale */
    attachSaleRegistrationPolicies?: (SaleRegistrationPolicyGenqlSelection & { __args: {accountId: Scalars['String'], input: AttachSaleRegistrationPoliciesInput} })
    /** Detach policies from sale */
    detachSaleRegistrationPolicies?: (SaleRegistrationPolicyGenqlSelection & { __args: {accountId: Scalars['String'], input: DetachSaleRegistrationPoliciesInput} })
    /**
     * Set one or more metafields (create or update),
     * you can at most set 10 metafields at a time for a single entity.
     */
    setMetafields?: (MetafieldGenqlSelection & { __args: {accountId: Scalars['String'], metafields: SetMetafieldInput[]} })
    /** Delete a metafield */
    deleteMetafield?: { __args: {accountId: Scalars['String'], input: DeleteMetafieldInput} }
    /**
     * Returns session credentials for selected payment provider for a specific user, e.g. Stripe Customer Session
     * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access control over a Customer.
     */
    createUserPaymentProviderSession?: (UserPaymentProviderSessionGenqlSelection & { __args: {accountId: Scalars['String'], input: UserPaymentProviderSessionInput} })
    /** Returns session credentials for the payment provider for an account, e.g. Stripe Account Session. */
    createPaymentProviderSession?: (PaymentProviderSessionGenqlSelection & { __args: {accountId: Scalars['String']} })
    /**
     * Add a role to a dashboard user in the account.
     * If the user already has this role, the operation is idempotent.
     */
    addDashboardUserRole?: (DashboardUserRoleAssignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: AddDashboardUserRoleInput} })
    /**
     * Remove a role from a dashboard user in the account.
     * Cannot remove the last OWNER from an account.
     */
    removeDashboardUserRole?: (DashboardUserRoleAssignmentGenqlSelection & { __args: {accountId: Scalars['String'], input: RemoveDashboardUserRoleInput} })
    /**
     * Associate a user to the account.
     * Assigns a default OWNER role unless a specific role is provided.
     */
    associateUserToAccount?: (DashboardMemberGenqlSelection & { __args: {accountId: Scalars['String'], input: AssociateUserToAccountInput} })
    /**
     * Disassociate a user from the account.
     * Removes all their roles and the account association.
     * Cannot disassociate the last OWNER.
     */
    disassociateUserFromAccount?: { __args: {accountId: Scalars['String'], input: DisassociateUserFromAccountInput} }
    /** Create a new category. */
    createCategory?: (CategoryGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateCategoryInput} })
    /** Update an existing category. */
    updateCategory?: (CategoryGenqlSelection & { __args: {accountId: Scalars['ID'], input: UpdateCategoryInput} })
    /** Delete a category. Returns true on success. */
    deleteCategory?: { __args: {accountId: Scalars['ID'], categoryId: Scalars['ID']} }
    /** Replace the categories assigned to an item. */
    setItemCategories?: (CategoryListGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetItemCategoriesInput} })
    /** Replace the categories assigned to a sale. */
    setSaleCategories?: (CategoryListGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetSaleCategoriesInput} })
    /** Replace the categories assigned to a sale item. */
    setSaleItemCategories?: (CategoryListGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetSaleItemCategoriesInput} })
    /** Create a new creator. */
    createCreator?: (CreatorGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateCreatorInput} })
    /** Update an existing creator. */
    updateCreator?: (CreatorGenqlSelection & { __args: {accountId: Scalars['ID'], input: UpdateCreatorInput} })
    /** Delete a creator. Returns true on success. */
    deleteCreator?: { __args: {accountId: Scalars['ID'], creatorId: Scalars['ID']} }
    /** Replace the creators assigned to an item. */
    setItemCreators?: (CreatorListGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetItemCreatorsInput} })
    /** Replace the creators assigned to a sale item. */
    setSaleItemCreators?: (CreatorListGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetSaleItemCreatorsInput} })
    /**
     * Update the account's Artist's Resale Right settings. Does not touch the
     * royalty bands — use setArrBands for those.
     */
    updateArrSettings?: (ArrSettingsGenqlSelection & { __args: {accountId: Scalars['ID'], input: UpdateArrSettingsInput} })
    /**
     * Replace the whole Artist's Resale Right royalty ladder. Rejected unless the
     * bands start at 0, join end to end, and finish with one unbounded band.
     */
    setArrBands?: (ArrSettingsGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetArrBandsInput} })
    /**
     * Remove the Artist's Resale Right configuration for one currency, including
     * its royalty bands. Returns true whether or not the currency was configured.
     */
    deleteArrSettings?: { __args: {accountId: Scalars['ID'], currency: Currency} }
    /**
     * Create a charge. It produces nothing until its ladder is set with
     * setChargeBands.
     */
    createCharge?: (ChargeGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateChargeInput} })
    /** Update a charge's settings. Does not touch its ladder or its status. */
    updateCharge?: (ChargeGenqlSelection & { __args: {accountId: Scalars['ID'], input: UpdateChargeInput} })
    /**
     * Enable or disable a charge. There is no way to delete one: anything already
     * settled against a charge has to keep its meaning.
     */
    setChargeStatus?: (ChargeGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetChargeStatusInput} })
    /**
     * Replace a charge's whole ladder. Rejected unless the bands start at 0, join
     * end to end, and finish with one unbounded band.
     */
    setChargeBands?: (ChargeGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetChargeBandsInput} })
    /**
     * Set what a charge does at one level, ladder included, replacing whatever
     * that level said before. Returns the charge as it now applies there.
     */
    setChargeAtScope?: (ChargeGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetChargeAtScopeInput} })
    /**
     * Remove what a charge does at one level, dropping its ladder with it, so the
     * next level out applies there instead. Returns the charge that now applies.
     * Succeeds whether or not the level was set.
     */
    deleteChargeAtScope?: (ChargeGenqlSelection & { __args: {accountId: Scalars['ID'], input: DeleteChargeAtScopeInput} })
    /** Set or clear an item's Artist's Resale Right flag. */
    setItemArr?: (ItemGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetItemArrInput} })
    /**
     * Set or clear a lot's Artist's Resale Right flag. Rejected once the lot has
     * sold and its value is fixed.
     */
    setSaleItemArr?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetSaleItemArrInput} })
    /** Create a new affiliate for an account. The affiliate is created in an active state. */
    createAffiliate?: (AffiliateGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateAffiliateInput} })
    /** Update an existing affiliate. Only fields present on the input are changed. */
    updateAffiliate?: (AffiliateGenqlSelection & { __args: {accountId: Scalars['ID'], affiliateId: Scalars['ID'], input: UpdateAffiliateInput} })
    /**
     * Set up email notification delivery for an account through SendGrid. An
     * account has at most one integration per channel, so this fails with
     * `resource already exists` if email is already set up — read
     * `notificationIntegrations` first to find out.
     */
    createSendGridNotificationIntegration?: (SendGridNotificationIntegrationGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateSendGridNotificationIntegrationInput} })
    /**
     * Change an account's SendGrid email integration. Only the fields given on the
     * input are changed; the rest are left as they are, so at least one field must
     * be given. Fails with `not found` if email is not set up for the account. Use
     * `rotateSendGridNotificationIntegrationApiKey` to replace the API key.
     */
    updateSendGridNotificationIntegration?: (SendGridNotificationIntegrationGenqlSelection & { __args: {accountId: Scalars['ID'], input: UpdateSendGridNotificationIntegrationInput} })
    /**
     * Replace the SendGrid API key an account's email integration sends with. The
     * old key stops being used as soon as this succeeds, and nothing else about the
     * integration changes. Fails with `not found` if email is not set up for the
     * account.
     */
    rotateSendGridNotificationIntegrationApiKey?: (SendGridNotificationIntegrationGenqlSelection & { __args: {accountId: Scalars['ID'], input: RotateSendGridNotificationIntegrationApiKeyInput} })
    /**
     * Set up text message notification delivery for an account through Twilio. An
     * account has at most one integration per channel, so this fails with
     * `resource already exists` if text messages are already set up.
     */
    createTwilioNotificationIntegration?: (TwilioNotificationIntegrationGenqlSelection & { __args: {accountId: Scalars['ID'], input: CreateTwilioNotificationIntegrationInput} })
    /**
     * Configure what one notification sends on one channel, replacing that channel
     * wholesale and leaving the others untouched. Fails unless the account has an
     * integration on the channel. Already-scheduled sends are not re-planned.
     */
    setNotificationConfiguration?: (NotificationCatalogEntryGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetNotificationConfigurationInput} })
    /**
     * Switch one already-configured notification on or off, keeping its
     * configuration. Fails unless that channel is already configured for the
     * notification: this changes a configuration, it does not create one.
     * Switching a scheduled notification on also plans the sends its open sales
     * are owed, including sales that opened while it was off.
     */
    setNotificationConfigurationStatus?: (NotificationCatalogEntryGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetNotificationConfigurationStatusInput} })
    /** Create an attribution channel for an account. */
    createAttributionChannel?: (AttributionChannelGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateAttributionChannelInput} })
    /** Rename an attribution channel. */
    renameAttributionChannel?: (AttributionChannelGenqlSelection & { __args: {accountId: Scalars['String'], input: RenameAttributionChannelInput} })
    /** Archive an attribution channel, hiding it from active lists while preserving history. */
    archiveAttributionChannel?: (AttributionChannelGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['String']} })
    /** Unarchive a previously archived attribution channel. */
    unarchiveAttributionChannel?: (AttributionChannelGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['String']} })
    /** Delete an attribution channel. Fails if the channel is in use; archive it instead. */
    deleteAttributionChannel?: (AttributionChannelGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['String']} })
    /** Create an attribution source for an account. */
    createAttributionSource?: (AttributionSourceGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateAttributionSourceInput} })
    /** Rename an attribution source. */
    renameAttributionSource?: (AttributionSourceGenqlSelection & { __args: {accountId: Scalars['String'], input: RenameAttributionSourceInput} })
    /** Archive an attribution source, hiding it from active lists while preserving history. */
    archiveAttributionSource?: (AttributionSourceGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['String']} })
    /** Unarchive a previously archived attribution source. */
    unarchiveAttributionSource?: (AttributionSourceGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['String']} })
    /** Delete an attribution source. Fails if the source is in use; archive it instead. */
    deleteAttributionSource?: (AttributionSourceGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['String']} })
    /** Replaces this account's workflow schedule offsets and returns the resulting set. */
    setWorkflowScheduleOffsets?: (WorkflowScheduleOffsetsGenqlSelection & { __args: {accountId: Scalars['ID'], input: SetWorkflowScheduleOffsetsInput} })
    /** Sets or clears one per-sale key-date override. A non-null overrideDate sets/upserts the override; a null overrideDate clears it so the date reverts to the account-computed value. */
    setSaleWorkflowDateOverride?: (SaleGenqlSelection & { __args: {accountId: Scalars['ID'], saleId: Scalars['ID'], dateType: WorkflowDateType, overrideDate?: (Scalars['Time'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeGenqlSelection{
    /** Identification of the node. */
    id?: boolean | number
    on_AccountFee?: AccountFeeGenqlSelection
    on_ActionHookLog?: ActionHookLogGenqlSelection
    on_ApiKey?: ApiKeyGenqlSelection
    on_ApiToken?: ApiTokenGenqlSelection
    on_Category?: CategoryGenqlSelection
    on_Consignment?: ConsignmentGenqlSelection
    on_Department?: DepartmentGenqlSelection
    on_DutchSale?: DutchSaleGenqlSelection
    on_FeeRule?: FeeRuleGenqlSelection
    on_Item?: ItemGenqlSelection
    on_Location?: LocationGenqlSelection
    on_Offer?: OfferGenqlSelection
    on_PaymentOrder?: PaymentOrderGenqlSelection
    on_Sale?: SaleGenqlSelection
    on_SaleGenre?: SaleGenreGenqlSelection
    on_SaleItemRegistration?: SaleItemRegistrationGenqlSelection
    on_SaleItemWatchlistEntry?: SaleItemWatchlistEntryGenqlSelection
    on_SaleRegistration?: SaleRegistrationGenqlSelection
    on_SaleRegistrationPolicy?: SaleRegistrationPolicyGenqlSelection
    on_SaleWatchlistEntry?: SaleWatchlistEntryGenqlSelection
    on_SectionMarker?: SectionMarkerGenqlSelection
    on_Site?: SiteGenqlSelection
    on_User?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Every notification the platform can send, with this account's configuration. */
export interface NotificationCatalogGenqlSelection{
    /**
     * Presentation order: one contiguous block per audience, so sections can be
     * rendered by walking the list. Render in the order given rather than sorting.
     */
    entries?: NotificationCatalogEntryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * One notification the platform can send, with how this account has configured it.
 * Identified by the stable pair (`event`, `audience`); there is no `id`.
 */
export interface NotificationCatalogEntryGenqlSelection{
    event?: boolean | number
    audience?: boolean | number
    /**
     * Admin-facing English label. Recipient-facing copy belongs to the client,
     * keyed off `event` and `audience`.
     */
    displayName?: boolean | number
    timing?: boolean | number
    /**
     * Channels the platform can deliver this notification on, regardless of what
     * the account has set up. What is actually sent is in `configurations`.
     */
    supportedChannels?: boolean | number
    /**
     * Whether the copy differs by sale type, so configuration takes one template
     * per sale type rather than one.
     */
    saleTypeVarying?: boolean | number
    /** Keyed by `channel`, not position. Empty means it is never sent. */
    configurations?: NotificationConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * How one account has configured one notification on one channel. The concrete
 * type follows the notification's `timing`.
 */
export interface NotificationConfigurationGenqlSelection{
    /** Channel this configuration delivers on. */
    channel?: boolean | number
    /**
     * Whether this configuration is currently sending. Change it with
     * `setNotificationConfigurationStatus`.
     */
    status?: boolean | number
    on_InstantNotificationConfiguration?: InstantNotificationConfigurationGenqlSelection
    on_ScheduledNotificationConfiguration?: ScheduledNotificationConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The address outgoing email is sent from and the display name shown beside it.
 * The two are one unit: configuring a sender for a notification replaces both, so
 * a notification sent from another address never shows the account's name.
 */
export interface NotificationEmailSenderGenqlSelection{
    fromEmail?: boolean | number
    /** Null means the address is shown bare. */
    fromName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A sender to use for one notification instead of the account's. Both parts are
 * replaced together — omitting `fromName` shows `fromEmail` bare rather than
 * keeping the account's display name.
 */
export interface NotificationEmailSenderInput {
/**
 * Must be a verified sender on the SendGrid account, or SendGrid rejects every
 * send of this one notification while the rest keep working.
 */
fromEmail: Scalars['String'],fromName?: (Scalars['String'] | null)}


/**
 * An account's notification delivery setup for one channel, at most one per channel.
 * The concrete type is the provider it was set up with.
 */
export interface NotificationIntegrationGenqlSelection{
    /** Channel this integration delivers on. */
    channel?: boolean | number
    /** When the integration was set up, RFC 3339. */
    created?: boolean | number
    /**
     * IANA timezone name used to render dates in notifications. Null means none was
     * configured, in which case dates render in GMT unless the sale's location
     * resolves to a known timezone.
     */
    timezone?: boolean | number
    on_SendGridNotificationIntegration?: SendGridNotificationIntegrationGenqlSelection
    on_TwilioNotificationIntegration?: TwilioNotificationIntegrationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One firing offset before a sale event, and the template it sends. */
export interface NotificationLeadTimeGenqlSelection{
    /** How long before the sale event the notification is sent, in minutes. */
    minutesBefore?: boolean | number
    /** Branch on each entry's `saleType`, not on `saleTypeVarying`. */
    templates?: NotificationTemplateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NotificationLeadTimeInput {minutesBefore: Scalars['Int'],templates: NotificationTemplateInput[]}


/**
 * The template one configured notification renders with, and the sales it serves.
 * There is no fallback between sale types and no default.
 */
export interface NotificationTemplateGenqlSelection{
    /** Null when a single template serves every sale. */
    saleType?: boolean | number
    /**
     * The provider's own id — a SendGrid dynamic template id on email, a Twilio
     * content SID on SMS. Null when this sale type has no template, in which case
     * its sales send nothing.
     */
    templateId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * One template, and the sale type it serves. Omit `saleType` only when a single
 * template serves every sale type; otherwise give just the sale types to configure
 * — those left out send nothing.
 */
export interface NotificationTemplateInput {saleType?: (SaleType | null),
/** The provider's own id — a SendGrid dynamic template id, a Twilio content SID. */
templateId: Scalars['String']}


/** A buyer's offer on an item. */
export interface OfferGenqlSelection{
    id?: boolean | number
    cursor?: boolean | number
    accountId?: boolean | number
    itemId?: boolean | number
    /** The offered item's display content, resolved from the offer's accountId and itemId. */
    item?: ItemBannerGenqlSelection
    buyerUserId?: boolean | number
    /** The user that placed the offer, resolved from the offer's accountId and buyerUserId. */
    buyer?: UserInfoGenqlSelection
    /** Offer amount in minor currency units. */
    amount?: boolean | number
    currency?: boolean | number
    status?: boolean | number
    message?: boolean | number
    decidedByUserId?: boolean | number
    decidedByActor?: boolean | number
    /**
     * Which party the offer is currently awaiting a response from; null when the
     * offer is no longer in an actionable state.
     */
    awaitingParty?: boolean | number
    /** Full counter-offer history for this offer, oldest first. */
    counters?: OfferCounterGenqlSelection
    /** When the offer was created (RFC3339). */
    created?: boolean | number
    /** When the offer was last modified (RFC3339). */
    modified?: boolean | number
    /** When the offer auto-expires (RFC3339). Null when the offer has no TTL. */
    expiresAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single counter-offer made during the negotiation of an offer. */
export interface OfferCounterGenqlSelection{
    id?: boolean | number
    party?: boolean | number
    /** Counter amount in minor currency units. */
    amount?: boolean | number
    currency?: boolean | number
    message?: boolean | number
    createdByUserId?: boolean | number
    /** When the counter was created (RFC3339). */
    created?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OffersConnectionGenqlSelection{
    edges?: OffersEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OffersEdgeGenqlSelection{
    cursor?: boolean | number
    node?: OfferGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Optional, AND-combined filters for the account-wide offers query. */
export interface OffersFilter {statuses?: (OfferStatus[] | null),itemId?: (Scalars['String'] | null),buyerUserId?: (Scalars['String'] | null),consignorUserId?: (Scalars['String'] | null),minAmount?: (Scalars['Int'] | null),maxAmount?: (Scalars['Int'] | null),createdAfter?: (Scalars['String'] | null),createdBefore?: (Scalars['String'] | null),query?: (Scalars['String'] | null)}

export interface OnboardPaymentAccountInput {sellerLocation: SellerLocation,type: PaymentAccountType,returnUrl: Scalars['String']}

export interface OnboardPaymentAccountResponseGenqlSelection{
    /** Client should redirect Basta sellers to this url to finish onboarding. */
    onboardingUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OnlineBidOriginGenqlSelection{
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input object for when forcing sale to open. */
export interface OpenSaleInput {saleId: Scalars['String']}

export interface OrderConnectionGenqlSelection{
    /** Order edges */
    edges?: OrderEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderEdgeGenqlSelection{
    /** Current order cursor */
    cursor?: boolean | number
    /** Order node */
    node?: PaymentOrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderLineGenqlSelection{
    /** OrderLineId */
    orderLineId?: boolean | number
    /** Amount */
    amount?: boolean | number
    /** Description */
    description?: boolean | number
    /**
     * @deprecated will be removed in the future
     * Type of the order line
     */
    orderLineType?: boolean | number
    /** Fees associated with the order line, e.g. Buyer's Premium. */
    fees?: OrderLineFeeGenqlSelection
    /** Seller fees associated with the order line to be paid by the seller, e.g. Platform Fee. */
    sellerFees?: OrderLineFeeGenqlSelection
    /** Item associated with the order line. */
    item?: SaleItemOrItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Fee associated with an order line */
export interface OrderLineFeeGenqlSelection{
    /** Unique identifier for the fee. */
    id?: boolean | number
    /** Fee description. */
    description?: boolean | number
    /**
     * @deprecated use description
     * Fee name.
     */
    name?: boolean | number
    /** Fee amount in minor currency unit. */
    amount?: boolean | number
    /** Is system defined, cannot be edited. */
    isSystemDefined?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Registered company address and legal details for an organisation. */
export interface OrganisationDetailsGenqlSelection{
    /** Registered legal name of the company. */
    legalName?: boolean | number
    /** Company registration number. */
    registrationNumber?: boolean | number
    /** VAT number. */
    vatNumber?: boolean | number
    /** First line of the registered address. */
    addressLine1?: boolean | number
    /** Second line of the registered address. */
    addressLine2?: boolean | number
    /** City of the registered address. */
    city?: boolean | number
    /** Region, state, or province of the registered address. */
    region?: boolean | number
    /** Postal or ZIP code of the registered address. */
    postalCode?: boolean | number
    /** Country name of the registered address. */
    countryName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Registered company address and legal details for an organisation.
 * Replaces the stored organisation details in full. Omitted fields are cleared, not preserved.
 */
export interface OrganisationDetailsInput {
/** Registered legal name of the company. */
legalName?: (Scalars['String'] | null),
/** Company registration number. */
registrationNumber?: (Scalars['String'] | null),
/** VAT number. */
vatNumber?: (Scalars['String'] | null),
/** First line of the registered address. */
addressLine1?: (Scalars['String'] | null),
/** Second line of the registered address. */
addressLine2?: (Scalars['String'] | null),
/** City of the registered address. */
city?: (Scalars['String'] | null),
/** Region, state, or province of the registered address. */
region?: (Scalars['String'] | null),
/** Postal or ZIP code of the registered address. */
postalCode?: (Scalars['String'] | null),
/** Country name of the registered address. */
countryName?: (Scalars['String'] | null)}


/** Paddle represent a paddle in a sale */
export interface PaddleGenqlSelection{
    /** Paddle identifier */
    identifier?: boolean | number
    /** User Id of the paddle owner */
    userId?: boolean | number
    /** The user info, only populated for Basta users. */
    user?: UserInfoGenqlSelection
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
    /** Has previous page */
    hasPreviousPage?: boolean | number
    /** Total records */
    totalRecords?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Participant represent a bidder in a sale, it will be automatically created
 * when the user starts bidding on a sale.
 */
export interface ParticipantGenqlSelection{
    /** User Id */
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ParticipantsConnectionGenqlSelection{
    edges?: ParticipantsEdgeGenqlSelection
    totalCount?: boolean | number
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ParticipantsEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ParticipantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PassLiveItemInput {saleId: Scalars['String'],itemId: Scalars['String'],transitionToUpcomingLot?: (Scalars['Boolean'] | null)}

export interface PaymentGenqlSelection{
    /** PaymentId */
    paymentId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentDetailsGenqlSelection{
    /** External account id from payment provider */
    paymentProviderAccountId?: boolean | number
    /** Payment Setup Status */
    status?: boolean | number
    /** Account Fees */
    accountFees?: AccountFeeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** PaymentMethod is a union of all supported payment method types. */
export interface PaymentMethodGenqlSelection{
    on_Card?:CardGenqlSelection,
    __typename?: boolean | number
}

export interface PaymentOrderGenqlSelection{
    /** ID */
    id?: boolean | number
    /**
     * @deprecated use id
     * OrderID
     */
    orderId?: boolean | number
    /** Title */
    title?: boolean | number
    /** Currency */
    currency?: boolean | number
    /** SaleID */
    saleId?: boolean | number
    /** ItemID */
    itemId?: boolean | number
    /** InvoiceID of invoice sent to winner */
    invoiceId?: boolean | number
    /** Invoice details */
    invoice?: InvoiceGenqlSelection
    /** PaymentID set if payment has been made on invoice */
    paymentId?: boolean | number
    /** UserID */
    userId?: boolean | number
    /** OrderLines */
    orderLines?: OrderLineGenqlSelection
    /**
     * @deprecated use billing and/or shipping address
     * UserInfo for payment order
     */
    user?: UserInfoGenqlSelection
    /** Billing address for the order */
    billingAddress?: MailingAddressGenqlSelection
    /** Shipping address for the order */
    shippingAddress?: MailingAddressGenqlSelection
    /** Status of the order */
    status?: boolean | number
    /** Created */
    created?: boolean | number
    /** Modified */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Payment provider customer details. Provide exactly one field to indicate
 * which integration to associate the customer ID with.
 */
export interface PaymentProviderCustomerInput {
/** Stripe (direct) integration customer ID. */
stripe?: (StripeCustomerDetailsInput | null),
/** Stripe App (OAuth) integration customer ID. */
stripeApp?: (StripeAppCustomerDetailsInput | null)}


/** PaymentProviderSession is a union of all possible account-level payment provider sessions. */
export interface PaymentProviderSessionGenqlSelection{
    on_StripePaymentProviderSession?:StripePaymentProviderSessionGenqlSelection,
    __typename?: boolean | number
}

export interface PhoneAddressGenqlSelection{
    /** Phone ID */
    id?: boolean | number
    /** Phone type (mobile, home, work, fax) */
    phoneType?: boolean | number
    /**
     * Full phone number in E.164 format (e.g., +15551234567)
     * Includes country code, number, and optional extension using RFC 3966 format
     * Example: +1-555-123-4567;ext=1234
     */
    phoneNumber?: boolean | number
    /** Label */
    label?: boolean | number
    /** Is primary phone */
    isPrimary?: boolean | number
    /**
     * When this number was confirmed to belong to the account holder.
     * Null means it has not been confirmed. Read-only.
     */
    verifiedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PhoneBidOriginGenqlSelection{
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The resolved identity of whoever performed an action. */
export interface PrincipalGenqlSelection{
    id?: boolean | number
    type?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A marketplace product variant linked to an inventory item (a buy-now item). */
export interface ProductVariantGenqlSelection{
    /** Variant id */
    id?: boolean | number
    /** Parent product id */
    productId?: boolean | number
    /** Variant name */
    name?: boolean | number
    /** Stock keeping unit */
    sku?: boolean | number
    /** Price in minor currency units */
    price?: boolean | number
    /** Currency code (ISO 4217) */
    currencyCode?: boolean | number
    /** Stock available on hand */
    stockOnHand?: boolean | number
    /** Whether the variant is enabled */
    enabled?: boolean | number
    /** The inventory item this variant is linked to, if any. */
    itemId?: boolean | number
    /**
     * The item type this variant is assigned to, if any. Its `effectiveSchema`
     * gives the field definitions.
     */
    itemType?: ItemTypeGenqlSelection
    /** JSON Schema (effective) for this variant's schema_data. Read-only. */
    effectiveSchema?: boolean | number
    /**
     * @deprecated Renamed to itemType.
     * The item type this variant is assigned to, if any.
     */
    type?: ItemTypeGenqlSelection
    /**
     * @deprecated Renamed to effectiveSchema.
     * JSON Schema (effective) for this variant's schema_data. Read-only.
     */
    schema?: boolean | number
    /**
     * @deprecated Use `itemType` (or `itemType.id`) instead.
     * Schema id referencing the schemas table.
     */
    schemaId?: boolean | number
    /**
     * @deprecated Use `attributes` instead.
     * User-supplied JSON values matching the schema referenced by schemaId.
     */
    schemaData?: boolean | number
    /** The variant's filled-in field values, conforming to `effectiveSchema`. */
    attributes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductVariantConnectionGenqlSelection{
    /** Product variant edges */
    edges?: ProductVariantEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductVariantEdgeGenqlSelection{
    /** Current product variant cursor */
    cursor?: boolean | number
    /** Product variant node */
    node?: ProductVariantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A link from this item to a marketplace product variant. */
export interface ProductVariantLinkGenqlSelection{
    variantId?: boolean | number
    productId?: boolean | number
    /** Name of the parent product. */
    productName?: boolean | number
    variantName?: boolean | number
    sku?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublishPaymentOrderInput {
/** OrderId to publish */
orderId: Scalars['ID']}


/** Input object for when forcing sale to published. */
export interface PublishSaleInput {saleId: Scalars['String']}

export interface QueryGenqlSelection{
    /** Fetch information about an account */
    account?: (AccountGenqlSelection & { __args: {accountId: Scalars['String']} })
    /**
     * What auction data exists for the account: earliest/latest dates, lot count,
     * distinct currencies, projection freshness, and whether the historical
     * backfill is complete. Use it to render a "data through <date>" label.
     */
    saleStatsDataCoverage?: (SaleStatsDataCoverageGenqlSelection & { __args: {accountId: Scalars['ID']} })
    /**
     * Year-over-year GMV (hammer over SOLD lots), one row per currency per year. A
     * like-for-like day-of-year cutoff is applied to both years automatically.
     */
    saleStatsYoyGmv?: (SaleStatsYoyGmvGenqlSelection & { __args: {accountId: Scalars['ID'], yearA: Scalars['Int'], yearB: Scalars['Int']} })
    /**
     * Month-over-month GMV (hammer over SOLD lots), one row per currency per month.
     * A like-for-like day-of-month cutoff is applied to both months automatically.
     */
    saleStatsMomGmv?: (SaleStatsMomGmvGenqlSelection & { __args: {accountId: Scalars['ID'], yearA: Scalars['Int'], monthA: Scalars['Int'], yearB: Scalars['Int'], monthB: Scalars['Int']} })
    /**
     * Sell-through for a year: sold lots, total lots, and the ratio.
     * Currency-independent.
     */
    saleStatsSellThrough?: (SaleStatsSellThroughGenqlSelection & { __args: {accountId: Scalars['ID'], year: Scalars['Int']} })
    /**
     * Per-lot bidder engagement for a year: lot count, average unique bidders per
     * lot, and the max unique bidders on any lot.
     */
    saleStatsBidderEngagement?: (SaleStatsBidderEngagementGenqlSelection & { __args: {accountId: Scalars['ID'], year: Scalars['Int']} })
    /**
     * Distinct and repeat winners for a year, one row per currency, with the
     * repeat-buyer share.
     */
    saleStatsDistinctWinners?: (SaleStatsDistinctWinnersGenqlSelection & { __args: {accountId: Scalars['ID'], year: Scalars['Int']} })
    /**
     * Lot outcome summary for a year, one row per currency: sold/unsold/total,
     * sell-through, reserve-met rate, and the split of sold lots across the
     * auction/offer/buy-now channels.
     */
    saleStatsLotOutcomeSummary?: (SaleStatsLotOutcomeSummaryGenqlSelection & { __args: {accountId: Scalars['ID'], year: Scalars['Int']} })
    /**
     * Hammer vs mid-estimate for a year, one row per currency: scored lots, total
     * hammer, total mid-estimate, and the average hammer-to-mid ratio.
     */
    saleStatsHammerVsEstimate?: (SaleStatsHammerVsEstimateGenqlSelection & { __args: {accountId: Scalars['ID'], year: Scalars['Int']} })
    /**
     * Closing-day profile for a year: for each ISO day of week (1=Monday..7=Sunday),
     * the lot count and the average bids per lot.
     */
    saleStatsClosingDayProfile?: (SaleStatsClosingDayProfileGenqlSelection & { __args: {accountId: Scalars['ID'], year: Scalars['Int']} })
    /**
     * Top sales of a year ranked by GMV (hammer over SOLD lots), one row per
     * (currency, rank). Ranked within each currency; never blended across currencies.
     * limit is the top N per currency (default 10, capped server-side).
     */
    saleStatsTopSales?: (SaleStatsTopSalesGenqlSelection & { __args: {accountId: Scalars['ID'], year: Scalars['Int'], limit?: (Scalars['Int'] | null)} })
    /** Fetch information about accessable accounts */
    accounts?: AccountGenqlSelection
    /** List the account's enabled countries, with its home country first, then in alphabetical order. */
    countries?: (CountryInfoGenqlSelection & { __args: {accountId: Scalars['ID']} })
    /** List every country with the account's enabled state and AML risk class, including disabled ones, in alphabetical order. */
    accountCountries?: (CountryInfoConnectionGenqlSelection & { __args: {accountId: Scalars['ID']} })
    /** Get all sales that have been created. You can at most fetch 50 sales at a time. */
    sales?: (SaleConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleFilter | null)} })
    /** Get a single sale. */
    sale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['ID'], saleIdType?: (SaleIDType | null)} })
    /** Get a single sale, polymorphic over sale format (English Sale or DutchSale). */
    saleV2?: (SaleV2GenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['ID'], saleIdType?: (SaleIDType | null)} })
    /** Get all sales for an account, polymorphic over sale format (each node is an English Sale or a DutchSale). You can at most fetch 50 sales at a time. */
    salesV2?: (SaleV2ConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleFilter | null)} })
    /**
     * List the departments belonging to an account, ordered alphabetically by
     * name. Paginated: pass the previous page's endCursor as `after`.
     */
    departments?: (DepartmentConnectionGenqlSelection & { __args: {accountId: Scalars['ID'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /**
     * List the auction genres belonging to an account, ordered alphabetically by
     * name. Paginated: pass the previous page's endCursor as `after`. Archived
     * genres are excluded unless includeArchived is true.
     */
    saleGenres?: (SaleGenreConnectionGenqlSelection & { __args: {accountId: Scalars['ID'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), includeArchived?: (Scalars['Boolean'] | null)} })
    /** Get SaleItem */
    saleItem?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], saleId: Scalars['String'], itemId: Scalars['String']} })
    /** Get SaleItem by external id */
    saleItemByExternalId?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], externalId: Scalars['String']} })
    /** Get API Keys that have created. */
    apiKeys?: (ApiKeyConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Get API key for searching collection */
    searchKey?: (SearchKeyGenqlSelection & { __args: {accountId: Scalars['String']} })
    /**
     * @deprecated Use apiKeys query
     * DEPRECATED.
     * Get API Keys that have created.
     */
    apiTokens?: (ApiTokenConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Get account action hook subscriptions */
    actionHookSubscriptions?: (ActionHookSubscriptionGenqlSelection & { __args: {accountId: Scalars['String']} })
    /**
     * List an account's attribution channels. By default only active channels are
     * returned; pass includeArchived: true to include archived ones.
     */
    attributionChannels?: (AttributionChannelGenqlSelection & { __args: {accountId: Scalars['String'], includeArchived?: (Scalars['Boolean'] | null)} })
    /**
     * List an account's attribution sources. By default only active sources are
     * returned; pass includeArchived: true to include archived ones.
     */
    attributionSources?: (AttributionSourceGenqlSelection & { __args: {accountId: Scalars['String'], includeArchived?: (Scalars['Boolean'] | null)} })
    /**
     * List the notification integrations an account has set up, at most one per channel
     * — key entries by `channel`, not by position. An empty list means nothing is set up
     * on any channel this API version describes, and nothing is sent on those channels.
     */
    notificationIntegrations?: (NotificationIntegrationGenqlSelection & { __args: {accountId: Scalars['ID']} })
    /**
     * Return the SendGrid API key an account's email integration sends with, in
     * plain text. Fails with `not found` if email is not set up for the account.
     * Do not cache the result.
     */
    revealSendGridNotificationIntegrationApiKey?: { __args: {accountId: Scalars['ID']} }
    /**
     * List every notification the platform can send, with how this account has
     * configured each one. An entry with no `configurations` is not sent at all;
     * if that is true of every entry, the account most likely has no delivery
     * integration yet — read `notificationIntegrations` to tell the two apart.
     */
    notificationCatalog?: (NotificationCatalogGenqlSelection & { __args: {accountId: Scalars['ID']} })
    /** This account's full workflow schedule grid: platform defaults overlaid with the account's stored modifications. Each row's `modified` flag is true when it differs from the default. */
    workflowScheduleOffsets?: (WorkflowScheduleOffsetsGenqlSelection & { __args: {accountId: Scalars['ID']} })
    /** Get all Action Hook logs. */
    actionHookLogs?: (ActionHookLogConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (ActionHookFilter | null)} })
    /** Fetch information about an Item */
    item?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String']} })
    /** Fetch information about an Item by external identifier */
    itemByExternalId?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], externalId: Scalars['String']} })
    /**
     * Get all items for accountId
     * 
     * onlyMyItems if true filters items belonging to the current user
     */
    items?: (ItemsConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), itemsFilter: ItemsFilter, direction?: (PaginationDirection | null)} })
    /** Get a single consignment by id. */
    consignment?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], consignmentId: Scalars['String']} })
    /** Get a single consignment by its human-facing short id. */
    consignmentByShortId?: (ConsignmentGenqlSelection & { __args: {accountId: Scalars['String'], shortId: Scalars['String']} })
    /** List consignments for an account. */
    consignments?: (ConsignmentsConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), direction?: (PaginationDirection | null)} })
    /** Get a single site by id. */
    site?: (SiteGenqlSelection & { __args: {accountId: Scalars['String'], siteId: Scalars['String']} })
    /** List sites for an account. Archived sites are excluded unless includeArchived is true. */
    sites?: (SiteConnectionGenqlSelection & { __args: {accountId: Scalars['String'], includeArchived?: (Scalars['Boolean'] | null)} })
    /** Get a single location by id. */
    location?: (LocationGenqlSelection & { __args: {accountId: Scalars['String'], locationId: Scalars['String']} })
    /**
     * List locations for an account, optionally restricted to one site. Archived
     * locations are excluded unless includeArchived is true.
     */
    locations?: (LocationConnectionGenqlSelection & { __args: {accountId: Scalars['String'], siteId?: (Scalars['String'] | null), includeArchived?: (Scalars['Boolean'] | null)} })
    /** List the items belonging to a consignor (by user-service consignor user id). */
    consignorItems?: (ItemsConnectionGenqlSelection & { __args: {accountId: Scalars['String'], consignorUserId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), direction?: (PaginationDirection | null)} })
    /** Offer configuration for an item; null when the item does not accept offers. */
    itemOfferConfig?: (ItemOfferConfigGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String']} })
    /** Get a single offer by id. */
    offer?: (OfferGenqlSelection & { __args: {accountId: Scalars['String'], offerId: Scalars['String']} })
    /** List offers on a single item. */
    itemOffers?: (OffersConnectionGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), status?: (OfferStatus | null), direction?: (PaginationDirection | null)} })
    /** List offers across an account's items, with optional filters. */
    offers?: (OffersConnectionGenqlSelection & { __args: {accountId: Scalars['String'], filter?: (OffersFilter | null), first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), direction?: (PaginationDirection | null)} })
    salesAggregate?: (SalesAggregateGenqlSelection & { __args: {accountId: Scalars['String']} })
    /** User Bid Activity */
    userBidActivity?: (UserBidActivityConnectionGenqlSelection & { __args: {accountId: Scalars['String'], userId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (UserBidActivityFilter | null), direction?: (PaginationDirection | null), orderBy?: (BidOrderByField | null)} })
    /**
     * Get a user node for a given account and user ID.
     * If idType is USER_ID_TYPE_IDENTITY_PROVIDER_ID, the user ID is an identity provider ID.
     * If idType is USER_ID_TYPE_USER_ID, the user ID is a user ID.
     */
    user?: (UserGenqlSelection & { __args: {accountId: Scalars['String'], userId: Scalars['String'], idType: UserIdType} })
    /** Orders associated with an account */
    orders?: (OrderConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), last?: (Scalars['Int'] | null)} })
    /** Orders associated with a user */
    userOrders?: (OrderConnectionGenqlSelection & { __args: {accountId: Scalars['String'], userID: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), last?: (Scalars['Int'] | null)} })
    /** Get all sale registrations for a sale */
    saleRegistrations?: (SaleRegistrationsConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleRegistrationsQueryFilter | null), direction?: (PaginationDirection | null), sortByField?: (SaleRegistrationSortByField | null)} })
    /** Get image for an account, by id or external id */
    image?: (ImageWithAssociationsGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['String'], idType: ImageIdType} })
    /** Get an Asset by id. Returns null when the asset does not exist for this account. */
    asset?: (AssetGenqlSelection & { __args: {accountId: Scalars['String'], assetId: Scalars['String']} })
    /** Get all users for an account */
    users?: (UsersConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** List the followers of a consignor (by internal User.id) within an account. */
    consignorFollowers?: (UsersConnectionGenqlSelection & { __args: {accountId: Scalars['String'], consignorId: Scalars['ID'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** List the consignors a user (by internal User.id) follows within an account. */
    userFollowing?: (UsersConnectionGenqlSelection & { __args: {accountId: Scalars['String'], userId: Scalars['ID'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Follower count for a consignor (by internal User.id) within an account. */
    consignorFollowerCount?: { __args: {accountId: Scalars['String'], consignorId: Scalars['ID']} }
    /** Get all sale registration policies for an account */
    saleRegistrationPolicies?: (SaleRegistrationPoliciesConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['String'] | null)} })
    /**
     * Search across different node types in the graph.
     * 
     * Using search uses a search index that is eventually consistent.
     * 
     * The required permission depends on the type being searched.
     * 
     * For ASSET: READ_ITEM
     * For every other type: READ_SALE
     * 
     * Example queries:
     *   - Search for users: search(accountId: "123", type: USER, query: "john@example.com", first: 20)
     *   - Search for sale items: search(accountId: "123", type: SALE_ITEM, query: "vintage watch", first: 20)
     */
    search?: (SearchResultConnectionGenqlSelection & { __args: {
    /** Account ID to search within. */
    accountId: Scalars['String'], 
    /** The type of node to search for (USER) */
    type: SearchType, 
    /** Search query text */
    query: Scalars['String'], 
    /** Number of results to return per page */
    first?: (Scalars['Int'] | null), 
    /** Page number for pagination (1-based) */
    page?: (Scalars['Int'] | null), 
    /**
     * Fields to search in. If not specified, searches across default fields for the type.
     * 
     * For USER: email, name
     * For SALE_ITEM: title, description, displayNumber, itemNumberSearchable
     * For SALE: saleTitle, description
     */
    queryBy?: (Scalars['String'][] | null), 
    /**
     * Sort results by field and direction.
     * Format: "field:direction" (e.g., "email:asc", "name:desc")
     * If not provided, results are sorted by relevance.
     */
    orderBy?: (Scalars['String'] | null), 
    /**
     * Additional filter conditions specific to the search type.
     * 
     * Multiple conditions can be combined with AND using &&
     */
    filterBy?: (Scalars['String'] | null)} })
    /**
     * Look up geographic location for an IP address.
     * If no IP is provided, uses the caller's IP address.
     */
    geoLookup?: (GeoLocationGenqlSelection & { __args?: {ip?: (Scalars['String'] | null)} })
    /** List all dashboard users (team members) in the account with their assigned roles. */
    dashboardMembers?: (DashboardMemberGenqlSelection & { __args: {accountId: Scalars['String']} })
    /** Get the roles assigned to a specific dashboard user in the account. */
    dashboardUserRoles?: (DashboardUserRoleAssignmentGenqlSelection & { __args: {accountId: Scalars['String'], userId: Scalars['String']} })
    /**
     * Get the current user's roles and effective permissions for the account.
     * Used by the UI to decide what features to show or hide.
     */
    currentUser?: (CurrentUserGenqlSelection & { __args: {accountId: Scalars['String']} })
    /** Get a single category by id. */
    category?: (CategoryGenqlSelection & { __args: {accountId: Scalars['ID'], categoryId: Scalars['ID']} })
    /** List categories for an account, optionally scoped to a parent. */
    categories?: (CategoryConnectionGenqlSelection & { __args: {accountId: Scalars['ID'], parentId?: (Scalars['ID'] | null), first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** List item types for an account, optionally scoped to a parent. */
    itemTypes?: (ItemTypesConnectionGenqlSelection & { __args: {accountId: Scalars['ID'], parentId?: (Scalars['ID'] | null), first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /**
     * @deprecated Renamed to itemTypes.
     * Deprecated alias for itemTypes. Kept for backward compatibility.
     */
    schemas?: (ItemTypesConnectionGenqlSelection & { __args: {accountId: Scalars['ID'], parentId?: (Scalars['ID'] | null), first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** List the namespaces an account owns, so schemas can reuse an existing one. */
    schemaNamespaces?: (SchemaNamespaceGenqlSelection & { __args: {accountId: Scalars['ID']} })
    /** Get a single creator by id. */
    creator?: (CreatorGenqlSelection & { __args: {accountId: Scalars['ID'], creatorId: Scalars['ID']} })
    /** List creators for an account, optionally scoped to a parent. */
    creators?: (CreatorConnectionGenqlSelection & { __args: {accountId: Scalars['ID'], parentId?: (Scalars['ID'] | null), includeChildren?: (Scalars['Boolean'] | null), first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Fetch a single affiliate by ID. */
    affiliate?: (AffiliateGenqlSelection & { __args: {accountId: Scalars['ID'], affiliateId: Scalars['ID']} })
    /** List affiliates for an account, paginated. */
    affiliates?: (AffiliateConnectionGenqlSelection & { __args: {accountId: Scalars['ID'], input?: (AffiliatesInput | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Range rule explains increments in the table.
 * Represented as minor currency units.
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


/**
 * Range rules input in an increment table.
 * Values should be in minor currency units.
 * If a sale has USD as currency then the minor currency unit is cents.
 * The rule [hihgRange: $1000, lowRange: $0, step: $25] should be sent as
 *   [highRange: 100000, lowRange: 0, step: 2500]
 */
export interface RangeRuleInput {
/** High range of the rule in minor currency units. */
highRange: Scalars['Int'],
/** Low range of the rule in minor currency units. */
lowRange: Scalars['Int'],
/** Step of the rule in minor currency units. */
step: Scalars['Int']}

export interface RegisterUserPaddleInput {
/** Sale ID */
saleId: Scalars['String'],
/** Paddle ID */
paddleIdentifier: Scalars['String'],
/** Paddle Type */
type: PaddleType,
/** User email address */
email: Scalars['String'],
/** User first name */
firstName: Scalars['String'],
/** User last name */
lastName: Scalars['String']}


/** Input for rejecting a sale registration */
export interface RejectSaleRegistrationInput {
/** Registration ID to reject */
registrationId: Scalars['String'],
/** Reason for rejection */
reason?: (Scalars['String'] | null)}

export interface RemoveConsignmentStaffInput {consignmentId: Scalars['String'],
/**
 * Staff identity ids (Ory Kratos) to remove from the staff set. Not checked for
 * account membership, so a stale entry can always be removed.
 */
consignmentStaffUserIds: Scalars['String'][]}

export interface RemoveConsignorsInput {consignmentId: Scalars['String'],
/** Basta user UUIDs to remove from the consignor set. */
consignorUserIds: Scalars['String'][]}

export interface RemoveDashboardUserRoleInput {
/** The user ID to remove the role from. */
userId: Scalars['String'],
/** The role to remove. */
role: DashboardUserRole}


/** Input for removing packaging from an item. Empty or omitted packagingIds removes none (item unchanged). */
export interface RemovePackagingInput {itemId: Scalars['String'],packagingIds?: (Scalars['String'][] | null)}

export interface RemovePaddleFromSaleInput {
/** Sale ID */
saleId: Scalars['String'],
/** Paddle ID */
paddleIdentifier: Scalars['String']}


/** Input to remove an item from a sale */
export interface RemoveSaleItemInput {
/** Id of the sale that is associated with the item. */
saleId: Scalars['String'],
/** Item id of the item that you are removing from the sale. */
itemId: Scalars['String']}


/** Input for removing specifications from an item. Empty or omitted specificationIds removes none (item unchanged). */
export interface RemoveSpecificationsInput {itemId: Scalars['String'],specificationIds?: (Scalars['String'][] | null)}

export interface RemoveTagFromItemInput {
/** Item ID */
itemId: Scalars['String'],
/** Tag Name */
name: Scalars['String']}

export interface RemoveTagFromSaleItemInput {
/** Sale ID */
saleId: Scalars['String'],
/** Item ID */
itemId: Scalars['String'],
/** Tag Name */
name: Scalars['String']}

export interface RemoveTagFromUserInput {
/** User ID */
userId: Scalars['String'],
/** Tag Name */
name: Scalars['String']}

export interface RenameAttributionChannelInput {id: Scalars['String'],name: Scalars['String']}

export interface RenameAttributionSourceInput {id: Scalars['String'],name: Scalars['String']}


/**
 * Input for reordering highlighted items within a sale.
 * The list must contain exactly all currently highlighted item IDs for the sale.
 * Positions are assigned sequentially starting from 0 based on list order.
 */
export interface ReorderHighlightedItemsInput {
/** The sale whose highlighted items should be reordered. */
saleId: Scalars['String'],
/**
 * Ordered list of item IDs. First item gets position 0, second gets position 1, etc.
 * Must contain exactly the set of currently highlighted items for the sale.
 */
itemIds: Scalars['String'][]}

export interface ReorderImagesInput {
/** The sale identifier, required for Sale and SaleItem image types */
saleId?: (Scalars['String'] | null),
/** The item identifier, required for Item and SaleItem image types. */
itemId?: (Scalars['String'] | null),
/** The entity that the images belong to */
imageType: ImageType,
/** The new image order */
imageOrderChanges: ImageOrderInput[]}

export interface ReorderItemImages {itemId: Scalars['String'],imageOrderChanges: ImageOrderInput[]}

export interface ResetSaleFeesInput {saleId: Scalars['ID']}


/** Input to retry an Action Hook log. */
export interface RetryActionHookInput {
/** Action Hook log id. */
id: Scalars['ID']}


/** Input object for when revoking a API key */
export interface RevokeApiKeyInput {
/** API key Id that needs to be revoked */
apiKeyId: Scalars['String']}


/**
 * DEPRECATED.
 * Input object for when revoking a API token
 */
export interface RevokeApiTokenInput {
/** API token Id that needs to be revoked */
apiTokenId: Scalars['String']}


/** The replacement SendGrid API key. */
export interface RotateSendGridNotificationIntegrationApiKeyInput {
/**
 * SendGrid API key with the Mail Send permission. Stored encrypted and carried
 * on no type; `revealSendGridNotificationIntegrationApiKey` returns it.
 */
apiKey: Scalars['String']}


/** Sale */
export interface SaleGenqlSelection{
    /** Id of a sale. */
    id?: boolean | number
    /** Cursor is used in pagination. */
    cursor?: boolean | number
    /** Sale type */
    type?: boolean | number
    /** Account ID associated with the sale */
    accountId?: boolean | number
    /** Sale Title */
    title?: boolean | number
    /** Sale Description */
    description?: boolean | number
    /** Currency of the sale (capital letters: EUR, USD, etc.) */
    currency?: boolean | number
    /** Sale status */
    status?: boolean | number
    /** Sale format of the sale. Always ENGLISH for this type. */
    saleFormat?: boolean | number
    /** Items that have been associated with this sale. You can at most get 50 items at a time. */
    items?: (SaleItemsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleItemFilter | null), order?: (ItemOrderInput | null)} })
    /**
     * Default increment table for the sale.
     * If an increment table is associated with any items in the sale
     * this will be overidden.
     */
    incrementTable?: BidIncrementTableGenqlSelection
    /** Sale Dates */
    dates?: SaleDatesGenqlSelection
    /** Get list of participants for this sale */
    participants?: (ParticipantsConnectionGenqlSelection & { __args?: {take?: (Scalars['Int'] | null), cursor?: (Scalars['String'] | null), direction?: (PaginationDirection | null)} })
    /** Sequence number of this sale. */
    sequenceNumber?: boolean | number
    /** Chosen ClosingMethod */
    closingMethod?: boolean | number
    /**
     * ClosingTime countdown is the sniping duration in milliseconds.
     * If not provided it defaults to 120000 (2 minutes).
     * If a sale has an OVERLAPPING closing method it also assigns the item's closing time in asceding order.
     */
    closingTimeCountdown?: boolean | number
    /** Images attached to sale */
    images?: ImageGenqlSelection
    /**
     * Sale theme type.
     * Only used for sales owned by basta
     */
    themeType?: boolean | number
    /** Slug for the sale (pretty URL). Present when the account has sale slugs (e.g. Basta bid client or B2B with slug). Null when no slug exists. */
    slug?: boolean | number
    /**
     * This setting governs the auction's reserve bid logic.
     * By default, it is set to STANDARD, meaning the reserve must be met or exceeded through standard bidding.
     * When configured to MAX_BID_BELOW_RESERVE_IS_MET, any maximum bid that matches or surpasses the reserve price automatically meets the reserve of the item or the max bid amount if below reserve.
     * Note, this setting cannot be changed after the sale is created.
     */
    reserveAutoBidMethod?: boolean | number
    /**
     * Indicates whether this is a test sale.
     * Test sales are used for testing purposes and should be filtered out from production data.
     */
    isTestSale?: boolean | number
    /** Whether the auction is to have a printed catalogue. */
    printedCatalogue?: boolean | number
    /** Effective key workflow dates for this sale, one per account-enabled date type, in display order. Each is either an explicit override or computed from the account offset and the sale's auction date. */
    workflowSchedule?: WorkflowScheduleDateGenqlSelection
    /** Is sale available on the basta bid client ? */
    bastaBidClient?: boolean | number
    /** Is sale hidden for public, and not shown on your profile. */
    hidden?: boolean | number
    /** Sale paddles created for the sale */
    paddles?: PaddleGenqlSelection
    /**
     * @deprecated old livestream link, use liveVideoStream instead
     * Live Stream
     */
    liveStream?: ExternalLiveStreamGenqlSelection
    liveVideoStream?: LiveStreamGenqlSelection
    /** Live Item in the Sale (only applicable for live sales) */
    liveItem?: (LiveItemGenqlSelection & { __args?: {itemOrderInput?: (ItemOrderInput | null)} })
    /** Count of all bids in sale accross all items */
    saleBidsCounts?: boolean | number
    /** Sum Of all highest bids per item */
    sumOfHighestBids?: boolean | number
    /** Statistics for a sale providing insights into bidding activity, item performance, and auction dynamics. */
    statistics?: SaleStatisticsGenqlSelection
    /** Restrictions for bidding on a sale */
    bidRestrictions?: BidRestrictionsGenqlSelection
    /** Get list of registrations for this sale */
    registrations?: (SaleRegistrationsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleRegistrationsForSaleFilter | null), direction?: (PaginationDirection | null), sortByField?: (SaleRegistrationSortByField | null)} })
    /** Get list of sale registration policies for sale */
    registrationPolicies?: (SaleRegistrationPoliciesConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['String'] | null)} })
    /** All Orders associated with the sale. */
    orders?: (OrderConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), last?: (Scalars['Int'] | null)} })
    /** Unique external identifier, e.g. external system's id, inventory id, etc. */
    externalId?: boolean | number
    /** Location of the sale */
    location?: boolean | number
    /** Metafields associated with the sale */
    metafields?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldsInput} })
    /** Metafield associated with the sale */
    metafield?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldInput} })
    /** Items that are highlighted for this sale, ordered by position. */
    highlighted?: HighlightedSaleItemConnectionGenqlSelection
    /** Sale item closing schedule */
    saleItemClosingSchedule?: SaleItemClosingScheduleGenqlSelection
    /**
     * Effective fee rules for this sale. Returns sale-level fees if configured,
     * otherwise falls back to account-level fees. Only empty if no fees are
     * configured at any level. Check the source field on each rule to see which
     * level was used.
     */
    feeRules?: FeeRuleGenqlSelection
    /**
     * Whether the sale's fee rules are the default snapshot from account fees,
     * meaning they have not been customized.
     */
    hasDefaultSaleFees?: boolean | number
    /** Users who have favourited (watchlisted) this sale, paginated. */
    watchlist?: (SaleWatchlistConnectionGenqlSelection & { __args?: {input?: (SaleWatchlistInput | null)} })
    /** Categories assigned to the sale */
    categories?: CategoryGenqlSelection
    /** Departments assigned to the sale */
    departments?: DepartmentGenqlSelection
    /** The single auction genre assigned to the sale, if any. */
    saleGenre?: SaleGenreGenqlSelection
    /** The site the sale is held at, if any. */
    site?: SiteGenqlSelection
    /** Viewing times for the sale. Rich text encoded by the client. */
    viewingTimes?: boolean | number
    /** Buyers notes for the sale. Rich text encoded by the client. */
    buyersNotes?: boolean | number
    /** Fees-apply information for the sale. Rich text encoded by the client. */
    feesApplyInfo?: boolean | number
    /** The member who is the sale contact, if any. */
    saleContact?: DashboardMemberGenqlSelection
    /**
     * Section markers for the sale, ordered by fromItemNumber. Ranges may overlap
     * and titles may repeat.
     */
    sectionMarkers?: SectionMarkerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleActivityGenqlSelection{
    on_Sale?:SaleGenqlSelection,
    on_SaleItem?:SaleItemGenqlSelection,
    on_SaleLiveStreamUpdate?:SaleLiveStreamUpdateGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_SaleV2?: SaleV2GenqlSelection,
    __typename?: boolean | number
}


/**
 * Lightweight sale type containing only sale-level metadata.
 * Does not include items, registrations, or other heavy nested data.
 * To fetch the full Sale with all nested data, use the sale() query with the returned id.
 */
export interface SaleBannerGenqlSelection{
    /** Sale ID */
    id?: boolean | number
    /** Account ID */
    accountId?: boolean | number
    /** Sale title */
    title?: boolean | number
    /** Sale description */
    description?: boolean | number
    /** Sale status */
    status?: boolean | number
    /** Sale type */
    type?: boolean | number
    /** Currency */
    currency?: boolean | number
    /** Closing method */
    closingMethod?: boolean | number
    /** Sale dates */
    dates?: SaleDatesGenqlSelection
    /** Whether the sale is hidden */
    hidden?: boolean | number
    /** URL slug */
    slug?: boolean | number
    /** Unix timestamp when the sale was created */
    createdTimestamp?: boolean | number
    /** Reserve auto-bid method */
    reserveAutoBidMethod?: boolean | number
    /** Whether the sale uses the Basta bid client */
    bastaBidClient?: boolean | number
    /** Sale images */
    images?: ImageGenqlSelection
    /** External ID */
    externalId?: boolean | number
    /** Location */
    location?: boolean | number
    /** Whether the sale is a test sale */
    isTestSale?: boolean | number
    /** Sale statistics */
    statistics?: SaleStatisticsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
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
    /** Date of when the sale is supposed to be manually put to live. */
    liveDate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input arguments for when creating or modifying a sale. */
export interface SaleDatesInput {
/** Closing Date */
closingDate?: (Scalars['String'] | null),
/** Opening Date */
openDate?: (Scalars['String'] | null),
/** Live Date */
liveDate?: (Scalars['String'] | null)}


/** Sale filter for sales. */
export interface SaleFilter {
/** Filter by sale status */
statuses: SaleStatus[],
/** Show test sales filter: null = all sales, true = only test sales, false = only regular sales */
showTestSales?: (Scalars['Boolean'] | null)}


/** SaleGenre is an account-scoped named grouping a sale can belong to. */
export interface SaleGenreGenqlSelection{
    /** Id of the auction genre. */
    id?: boolean | number
    /** Human-readable auction genre name. */
    name?: boolean | number
    /** URL-friendly slug. */
    slug?: boolean | number
    /** When the genre was archived (RFC3339), or null when live. */
    archivedAt?: boolean | number
    /** Whether the genre is public. */
    isPublic?: boolean | number
    /**
     * The charges that apply to lots in sales of this genre, already restated for
     * it. Falls back to the account when this genre does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges?: (ChargeConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), options?: (ChargeOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A paginated connection of auction genres. */
export interface SaleGenreConnectionGenqlSelection{
    edges?: SaleGenreEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in an auction genre connection. */
export interface SaleGenreEdgeGenqlSelection{
    node?: SaleGenreGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleImageAssociationGenqlSelection{
    /** The ID of the associated sale */
    saleId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A sale item (item that has been added to a sale) */
export interface SaleItemGenqlSelection{
    /** Id of an item. */
    id?: boolean | number
    /** Cursor is used in pagination. */
    cursor?: boolean | number
    /** AccountId that owns the item */
    accountId?: boolean | number
    /** Item title */
    title?: boolean | number
    /** Item sub-title */
    subTitle?: boolean | number
    /** Number of bids that have been placed on the item */
    totalBids?: boolean | number
    /** Item description */
    description?: boolean | number
    /** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
    titleTemplateOverride?: boolean | number
    subTitleTemplateOverride?: boolean | number
    descriptionTemplateOverride?: boolean | number
    /** Current bid amount for the item as minor currency unit. */
    currentBid?: boolean | number
    /** Current max bid amount for the item in minor currency unit. Only set when the leading bid is a max bid. */
    currentMaxBid?: boolean | number
    /** Currency for pricing information which is set on auction level. */
    currency?: boolean | number
    /**
     * Current leader (user id) for the item.
     * If SaleItem is closed then this is the user id holding the highest bid.
     */
    leaderId?: boolean | number
    /** Sale id, as items can be created without having to be associated to a sale. */
    saleId?: boolean | number
    /** Get list of bids for this item */
    bids?: (BidGenqlSelection & { __args?: {collapseSequentialUserBids?: (Scalars['Boolean'] | null)} })
    /** Reserve on the item in minor currency unit. */
    reserve?: boolean | number
    /** Starting bid for the item in minor currency unit. */
    startingBid?: boolean | number
    /**
     * Effective bid increment table for this item — the item's override if set,
     * otherwise the parent sale's default, otherwise null.
     */
    incrementTable?: BidIncrementTableGenqlSelection
    /** Status of the item */
    status?: boolean | number
    /** Item estimate in minor currency unit. */
    estimates?: EstimateGenqlSelection
    /** Item number */
    itemNumber?: boolean | number
    /** Scheduled closing timestamp for the item. */
    dates?: ItemDatesGenqlSelection
    /**
     * Allowed BidTypes on the item.
     * Defaults to allowing only Max bids if not supplied.
     */
    allowedBidTypes?: boolean | number
    /** Images attached to saleItem */
    images?: ImageGenqlSelection
    /**
     * Item slug. Only set on basta created items.
     * Null/empty for integrating applications
     */
    slug?: boolean | number
    /** Active Order information associated with item. */
    paymentOrder?: PaymentOrderGenqlSelection
    /** All Orders associated with the item. */
    paymentOrders?: PaymentOrderGenqlSelection
    /** Is item hidden for public, and not shown on your sale page. */
    hidden?: boolean | number
    /** Next asks for the item in minor currency units. */
    nextAsks?: { __args: {iterations?: (Scalars['Int'] | null)} } | boolean | number
    /**
     * @deprecated use reserveStatus instead
     * Reserve met
     */
    reserveMet?: boolean | number
    /** SaleItem notifications if item is part of a live sale */
    notifications?: ItemNotificationGenqlSelection
    /**
     * @deprecated use tagsV2
     * Tags
     */
    tags?: boolean | number
    /** Tags v2 */
    tagsV2?: TagGenqlSelection
    /** Reserve status. */
    reserveStatus?: boolean | number
    /** Result of the item after sale processing. Only set when item has been sold or passed. */
    itemResult?: boolean | number
    /** Reserve type for the item. */
    reserveType?: boolean | number
    /** Unique external identifier, e.g. external system's id, inventory id, etc. */
    externalId?: boolean | number
    /** Optional lot display number. */
    displayNumber?: boolean | number
    /** Highlight configuration for featuring this item on the sale page. */
    highlight?: ItemHighlightGenqlSelection
    /**
     * @deprecated Use `itemType` and `attributes` instead.
     * Metadata associated with the item
     */
    metadata?: ItemMetadataGenqlSelection
    /**
     * The item type this sale item is assigned to, if any. Its `effectiveSchema`
     * gives the field definitions.
     */
    itemType?: ItemTypeGenqlSelection
    /**
     * JSON Schema (effective, including inherited ancestors) currently associated
     * with this sale item. Mirrors ItemMetadata.schema and is read-only —
     * set schemaId on the input mutations to change it.
     */
    effectiveSchema?: boolean | number
    /**
     * @deprecated Renamed to itemType.
     * The item type this sale item is assigned to, if any.
     */
    type?: ItemTypeGenqlSelection
    /**
     * @deprecated Renamed to effectiveSchema.
     * JSON Schema (effective, including inherited ancestors) currently associated
     * with this sale item. Read-only.
     */
    schema?: boolean | number
    /**
     * @deprecated Use `itemType` (or `itemType.id`) instead.
     * Schema id referencing the schemas table. Settable on
     * SaleItemInput / UpdateSaleItemInput.
     */
    schemaId?: boolean | number
    /**
     * @deprecated Use `attributes` instead.
     * User-supplied JSON values matching the schema referenced by schemaId.
     * Settable on SaleItemInput / UpdateSaleItemInput.
     */
    schemaData?: boolean | number
    /** The sale item's filled-in field values, conforming to `effectiveSchema`. */
    attributes?: boolean | number
    /** closingTimeCountdown for the item. */
    closingTimeCountdown?: boolean | number
    /**
     * @deprecated Use specificationsV2
     * Item specifications - first specification only. Use specificationsV2 for full list.
     */
    specifications?: ItemSpecificationsGenqlSelection
    /** Item specifications v2 (list with id, quantity, diameter, etc.) */
    specificationsV2?: ItemSpecificationsGenqlSelection
    /** Item packaging (boxed dimensions and weight) */
    packaging?: ItemPackagingGenqlSelection
    /** Get list of registrations for this sale item */
    registrations?: (SaleItemRegistrationsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleItemRegistrationFilter | null)} })
    /**
     * Effective fee rules for this item. Returns item-level fees if configured,
     * then sale-level fees, otherwise falls back to account-level fees. Only empty
     * if no fees are configured at any level. Check the source field on each rule
     * to see which level was used.
     */
    feeRules?: FeeRuleGenqlSelection
    /** Location of the item */
    location?: boolean | number
    /** The site this item currently resides at, if any. Read-through from the underlying item. */
    site?: SiteGenqlSelection
    /** The location within its site this item currently resides at, if any. Read-through from the underlying item. */
    siteLocation?: LocationGenqlSelection
    /** The consignment this lot belongs to, if any. Read-through from the underlying item. */
    consignment?: ConsignmentGenqlSelection
    /** Metafields associated with the sale item */
    metafields?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldsInput} })
    /** Metafield associated with the sale item */
    metafield?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldInput} })
    /** Users who have favourited (watchlisted) this sale item, paginated. */
    watchlist?: (SaleItemWatchlistConnectionGenqlSelection & { __args?: {input?: (SaleItemWatchlistInput | null)} })
    /** Categories assigned to the sale item */
    categories?: CategoryGenqlSelection
    /** Creators assigned to the sale item */
    creators?: CreatorGenqlSelection
    /**
     * Whether the Artist's Resale Right applies to this lot. Follows the
     * underlying item until the lot sells, after which the value is fixed.
     */
    arr?: boolean | number
    /** Offer configuration for this item; null when the item does not accept offers. */
    offerConfig?: ItemOfferConfigGenqlSelection
    /** Offers placed on this item. */
    offers?: (OffersConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), status?: (OfferStatus | null), direction?: (PaginationDirection | null)} })
    /** Buy-now configuration for this item; null when the item cannot be bought outright. */
    buyNowConfig?: ItemBuyNowConfigGenqlSelection
    /**
     * The terminal non-auction sale of this item (an accepted offer or a buy-now),
     * if any. Sourced from the sale aggregate.
     */
    directSell?: DirectSellGenqlSelection
    /**
     * The charges that apply to this lot, already restated for it. Resolved from
     * the lot, then its consignment, item type and sale genre, then the account;
     * `appliesAt` on each says which one supplied the values.
     * 
     * A lot has no buyer until it sells, so charges set on a user are not
     * considered here. Defaults to the lot's own currency.
     */
    charges?: (ChargeConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), options?: (ChargeOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleItemClosingScheduleGenqlSelection{
    /** The type of closing schedule to use. */
    type?: boolean | number
    /**
     * The staggered closing schedule to use.
     * Must be provided if type is STAGGERED.
     */
    staggered?: StaggeredSaleItemScheduleConfigurationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleItemClosingScheduleInput {
/** The type of closing schedule to use. */
type: SaleItemClosingScheduleType,
/**
 * The staggered closing schedule to use.
 * Must be provided if type is STAGGERED.
 */
staggered?: (StaggeredSaleItemScheduleConfigurationInput | null)}


/** Item filter for sale items. */
export interface SaleItemFilter {
/** Filter by item status */
statuses: ItemStatus[],
/** Show hidden items */
showHiddenItems?: (Scalars['Boolean'] | null)}

export interface SaleItemImageAssociationGenqlSelection{
    /** The ID of the associated item */
    itemId?: boolean | number
    /** The ID of the associated sale */
    saleId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Item input when creating an item
 * Use for creating item and associating it with a sale.
 */
export interface SaleItemInput {
/** Id of the sale that is associated with the item. */
saleId: Scalars['String'],
/** Optional bid increment table for this item. */
bidIncrementTable?: (BidIncrementTableInput | null),
/** Title for describing the item */
title?: (Scalars['String'] | null),
/** Description for describing the item */
description?: (Scalars['String'] | null),
/** Starting bid of the item in minor currency unit. */
startingBid?: (Scalars['Int'] | null),
/** Valuation of the item in minor currency unit. */
valuationAmount?: (Scalars['Int'] | null),
/** Valuation currency */
valuationCurrency?: (Scalars['String'] | null),
/**
 * The reserve is the minimum amount that an item will sell for.
 * Reserve should be in minor currency units.
 * A reserve of 0 is treated like a no reserve sale.
 */
reserve?: (Scalars['Int'] | null),
/** Low estimate of the item (optional) in minor currency unit. */
lowEstimate?: (Scalars['Int'] | null),
/** High estimate of the item (optional) in minor currency unit. */
highEstimate?: (Scalars['Int'] | null),
/** Item number is used to order items (optional) */
ItemNumber?: (Scalars['Int'] | null),
/**
 * Allowed BidTypes on the item.
 * Defaults to allowing only Max bids if not supplied.
 */
allowedBidTypes?: (BidType[] | null),
/**
 * Date and time when item should open up for bidding.
 * Format: RFC3339 timestamp.
 * Example: "2019-10-12T07:20:50.52Z"
 */
openDate?: (Scalars['String'] | null),
/**
 * Date and time when item should close.
 * Format: RFC3339 timestamp.
 * Example: "2019-10-12T07:20:50.52Z"
 */
closingDate?: (Scalars['String'] | null),
/** Optional slug for the sale item (pretty URL segment). */
slug?: (Scalars['String'] | null),
/**
 * ClosingTime countdown is the sniping duration in milliseconds.
 * If not provided it defaults to 120000ms (2 minutes).
 */
closingTimeCountdown?: (Scalars['Int'] | null),
/** Should item be hidden from public view. Default false. */
hidden?: (Scalars['Boolean'] | null),
/** Tags for the item */
tags?: (Scalars['String'][] | null),
/** Item Specifications (dimensions, weight, type, etc.) */
specifications?: (ItemSpecificationsInput | null),
/**
 * Unique external identifier, e.g. external system's id, inventory id, etc.
 * Note: this will set the externalId on the underlying item itself.
 */
externalId?: (Scalars['String'] | null),
/** Optional lot display number. */
displayNumber?: (Scalars['String'] | null),
/** Optional highlight configuration for the item. */
highlight?: (ItemHighlightInput | null),
/** Metafields for the sale item, this is optional and will only trigger a metafield update if provided. To remove a metafield use the deleteMetafield input. */
metafields?: (MetafieldInput[] | null),
/** Reserve type for the item. */
reserveType?: (ReserveType | null),
/**
 * Optional schema id. Sets the schema linked to this sale item.
 * Empty string clears the link.
 */
schemaId?: (Scalars['ID'] | null),
/**
 * Optional schema data. User-supplied JSON values matching the schema
 * referenced by schemaId.
 */
schemaData?: (Scalars['JSON'] | null)}


/** A link from this item to an auction sale item. */
export interface SaleItemLinkGenqlSelection{
    saleId?: boolean | number
    saleItemId?: boolean | number
    /** Sale title; sales may be untitled, so nullable. */
    saleTitle?: boolean | number
    /** Auction-wide status of the sale. */
    saleStatus?: boolean | number
    /** Lot/position number of the item within the sale. */
    itemNumber?: boolean | number
    /** Human lot label, e.g. "Lot 12A"; nullable when unset. */
    displayNumber?: boolean | number
    /** The item's own status within the sale (distinct from saleStatus). */
    saleItemStatus?: boolean | number
    /** Per-sale-item title; may override the inventory item title, nullable. */
    saleItemTitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleItemOrItemGenqlSelection{
    on_SaleItem?:SaleItemGenqlSelection,
    on_Item?:ItemGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}


/** Sale item registration for a specific item */
export interface SaleItemRegistrationGenqlSelection{
    /** Id of the SaleItem registration */
    id?: boolean | number
    /** Sale registration ID this item registration belongs to */
    saleRegistration?: SaleRegistrationGenqlSelection
    /** Item that the user is registering for */
    saleItem?: SaleItemGenqlSelection
    /** When the SaleItem registration was created */
    createdAt?: boolean | number
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber?: PhoneAddressGenqlSelection
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers?: PhoneAddressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale item registration edge for connection */
export interface SaleItemRegistrationEdgeGenqlSelection{
    /** The item registration node */
    node?: SaleItemRegistrationGenqlSelection
    /** Cursor for pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Filter for sale item registrations */
export interface SaleItemRegistrationFilter {
/** Filter by registration type */
types?: (SaleRegistrationType[] | null),
/** Filter by user ID */
userId?: (Scalars['String'] | null)}


/** Sale item registration connection for pagination */
export interface SaleItemRegistrationsConnectionGenqlSelection{
    /** Sale item registration edges */
    edges?: SaleItemRegistrationEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    /** Total number of item registrations */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Item slug (pretty URL path segment) for a sale item under an account/sale.
 * Can resolve the underlying item and account when requested.
 */
export interface SaleItemSlugGenqlSelection{
    /** ID */
    id?: boolean | number
    /** The URL-friendly slug string for the item. */
    slug?: boolean | number
    /** Account handle (used in pretty URLs). */
    accountHandle?: boolean | number
    /** Account id that owns this item slug. */
    accountId?: boolean | number
    /** Sale id this item slug belongs to. */
    saleId?: boolean | number
    /** Item id this slug refers to. */
    itemId?: boolean | number
    /** The sale this item slug belongs to. Resolved when requested. */
    sale?: SaleGenqlSelection
    /** The item this slug refers to. Resolved when requested. */
    saleItem?: SaleItemGenqlSelection
    /** The account that owns this item slug. Resolved when requested. */
    account?: AccountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection wrapper for sale item watchlist entries. */
export interface SaleItemWatchlistConnectionGenqlSelection{
    /** The list of sale item watchlist entry edges. */
    edges?: SaleItemWatchlistEdgeGenqlSelection
    /** Pagination information. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in the sale item watchlist connection. */
export interface SaleItemWatchlistEdgeGenqlSelection{
    /** Cursor for this edge. */
    cursor?: boolean | number
    /** The sale item watchlist entry node. */
    node?: SaleItemWatchlistEntryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A sale item watchlist entry represents a user who has favourited a sale item. */
export interface SaleItemWatchlistEntryGenqlSelection{
    /** Unique identifier for the watchlist entry. */
    id?: boolean | number
    /** User ID of the user who favourited the sale item. */
    userId?: boolean | number
    /** Timestamp when the entry was created. */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for paginating sale item watchlist entries. */
export interface SaleItemWatchlistInput {
/** Number of entries to return. Defaults to 20. */
first?: (Scalars['Int'] | null),
/** Cursor to start pagination from. */
after?: (Scalars['String'] | null),
/** Direction of pagination. Defaults to BACKWARDS (newest first). */
direction?: (PaginationDirection | null)}

export interface SaleItemsConnectionGenqlSelection{
    /** Sale Item edges */
    edges?: SaleItemsEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleItemsEdgeGenqlSelection{
    /** Current item cursor */
    cursor?: boolean | number
    /** Sale Item node */
    node?: SaleItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleLiveStreamUpdateGenqlSelection{
    currentViewers?: boolean | number
    observedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Comprehensive metrics for auction/sale performance. */
export interface SaleMetricsGenqlSelection{
    /** Total number of items in the sale. */
    totalItems?: boolean | number
    /** Number of items that have received bids at or above their reserve price. */
    itemsOverReserve?: boolean | number
    /** Number of items that have received at least one bid. */
    itemsWithBids?: boolean | number
    /** Total number of bids placed across all items in the sale. */
    totalBids?: boolean | number
    /** Number of unique bidders who have placed at least one bid in the sale. */
    uniqueBidders?: boolean | number
    /** Sum of high estimates for all items in the sale (in minor currency). */
    highEstimateSum?: boolean | number
    /** Sum of low estimates for all items in the sale (in minor currency). */
    lowEstimateSum?: boolean | number
    /** Total amount from items that sold (items with bids at or above reserve price) (in minor currency). */
    currentBidOverReserveTotal?: boolean | number
    /** Sum of current highest bids across all items in the sale (in minor currency). */
    currentBidTotal?: boolean | number
    /** Sum of maximum bid amounts across all items in the sale (in minor currency). */
    maxBidsTotal?: boolean | number
    /** Percentage of items that have received bids at or above their reserve price. */
    itemsOverReservePercentage?: boolean | number
    /** Percentage of items that have received at least one bid. */
    itemsWithBidsPercentage?: boolean | number
    /** Average number of bids per item across all items in the sale. */
    averageBidsPerItem?: boolean | number
    /** Number of items that are hidden from public view. */
    hiddenItems?: boolean | number
    /** Information about the highest bid placed in the sale. */
    highestBid?: HighestBidInfoGenqlSelection
    /** Percentage of bidders who placed bids on multiple items, indicating bidder engagement across the auction. */
    bidderEngagement?: boolean | number
    /** Time series data showing the number of bids placed each day during the sale period. */
    dailyBidCounts?: SaleStatisticBidCountsGenqlSelection
    /** Timestamp when the sale metrics were last calculated. */
    calculatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale registration for a user */
export interface SaleRegistrationGenqlSelection{
    /** Id of the registration */
    id?: boolean | number
    /** Account ID associated with the registration */
    account?: AccountGenqlSelection
    /** Sale ID that the user is registering for */
    sale?: SaleGenqlSelection
    /** User ID of the person registering */
    userId?: boolean | number
    /** Type of registration (online, phone, paddle, aggregator) */
    type?: boolean | number
    /** Registration identifier (phone number, paddle number, etc.) */
    identifier?: boolean | number
    /** Current status of the registration */
    status?: boolean | number
    /** Reason for rejection if status is REJECTED */
    rejectedReason?: boolean | number
    /** When the registration was created */
    createdAt?: boolean | number
    /** User Profile, will only resolve if the user exists in configured identity provider. */
    userProfile?: UserInfoGenqlSelection
    /** Policy results for the registration */
    policyResults?: SaleRegistrationPolicyResultGenqlSelection
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber?: PhoneAddressGenqlSelection
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers?: PhoneAddressGenqlSelection
    /**
     * Item registrations for this sale registration.
     * Returns all item registrations -- no pagination arguments are accepted.
     */
    itemRegistrations?: SaleItemRegistrationsConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale registration edge for connection */
export interface SaleRegistrationEdgeGenqlSelection{
    /** The registration node */
    node?: SaleRegistrationGenqlSelection
    /** Cursor for pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale registration policies connection for pagination */
export interface SaleRegistrationPoliciesConnectionGenqlSelection{
    /** Sale registration policy edges */
    edges?: SaleRegistrationPolicyEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale registration policy */
export interface SaleRegistrationPolicyGenqlSelection{
    /** Id of the SaleRegistrationPolicy */
    id?: boolean | number
    /** Policy code can be used in client code to identify the policy */
    code?: boolean | number
    /** Policy description human readable description that can be displayed to the user */
    description?: boolean | number
    /** Policy rule defined as a CEL (Common Expression Language) expression */
    rule?: boolean | number
    /** If true, the policy will be applied to all sales created for this account */
    isDefault?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale registration policy edge for connection */
export interface SaleRegistrationPolicyEdgeGenqlSelection{
    /** The policy node */
    node?: SaleRegistrationPolicyGenqlSelection
    /** Cursor for pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale Registration Policy result */
export interface SaleRegistrationPolicyResultGenqlSelection{
    /** Policy code */
    code?: boolean | number
    /** Policy passed */
    passed?: boolean | number
    /** Policy description */
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sale registration connection for pagination */
export interface SaleRegistrationsConnectionGenqlSelection{
    /** Sale registration edges */
    edges?: SaleRegistrationEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Filter for sale registrations */
export interface SaleRegistrationsForSaleFilter {
/** Filter by registration type */
types?: (SaleRegistrationType[] | null),
/** Filter by registration status */
statuses?: (SaleRegistrationStatus[] | null),
/** Filter by user ID */
userId?: (Scalars['String'] | null)}

export interface SaleRegistrationsQueryFilter {saleIds?: (Scalars['String'][] | null),userIds?: (Scalars['String'][] | null),types?: (SaleRegistrationType[] | null),statuses?: (SaleRegistrationStatus[] | null)}


/** Sale slug (pretty URL) for a sale under an account. Can resolve the underlying sale and account when requested. */
export interface SaleSlugGenqlSelection{
    /** ID */
    id?: boolean | number
    /** The URL-friendly slug string for the sale. */
    slug?: boolean | number
    /** Account handle (used in pretty URLs). */
    accountHandle?: boolean | number
    /** Account id that owns this sale slug. */
    accountId?: boolean | number
    /** Sale id this slug refers to. */
    saleId?: boolean | number
    /** When the sale slug was created. RFC3339. */
    created?: boolean | number
    /** When the sale slug was last modified. RFC3339. */
    modified?: boolean | number
    /** The sale this slug refers to. Resolved when requested. */
    sale?: SaleGenqlSelection
    /** The account that owns this sale slug. Resolved when requested. */
    account?: AccountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Daily bid count data for a specific date in the sale. */
export interface SaleStatisticBidCountsGenqlSelection{
    /** Date in YYYY-MM-DD format when the bids were placed. */
    date?: boolean | number
    /** Number of bids placed on this specific date. */
    bidCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Statistics for a sale providing insights into bidding activity, item performance, and auction dynamics. */
export interface SaleStatisticsGenqlSelection{
    /** Core sale performance metrics. */
    saleMetrics?: SaleMetricsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Per-lot bidder engagement for a year. unique_bidders is per-lot and NON-ADDITIVE — not an account-level distinct-bidder count. */
export interface SaleStatsBidderEngagementGenqlSelection{
    lotCount?: boolean | number
    avgUniqueBiddersPerLot?: boolean | number
    maxUniqueBiddersPerLot?: boolean | number
    avgBidsPerLot?: boolean | number
    caveats?: boolean | number
    dayOfYearCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Closing-day profile for a year, one row per ISO day of week. */
export interface SaleStatsClosingDayProfileGenqlSelection{
    rows?: SaleStatsClosingDayRowGenqlSelection
    caveats?: boolean | number
    dayOfYearCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Closing-day profile for one ISO day of week (1=Monday..7=Sunday). */
export interface SaleStatsClosingDayRowGenqlSelection{
    dayOfWeek?: boolean | number
    lotCount?: boolean | number
    avgBidsPerLot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * What auction data exists for an account. Read this to render a "data through
 * <date>" freshness label and to decide whether the other metrics are answerable.
 */
export interface SaleStatsDataCoverageGenqlSelection{
    /** False when the account has no facts yet; the date/count fields are then zero and lastProjectedAt is null. */
    hasData?: boolean | number
    /** Earliest fact date as an integer date key (YYYYMMDD). Zero when there is no data. */
    minDateKey?: boolean | number
    /** Latest fact date as an integer date key (YYYYMMDD). Zero when there is no data. */
    maxDateKey?: boolean | number
    /** Number of terminal lots covered. */
    lotCount?: boolean | number
    /** Number of distinct currencies present in the data. */
    distinctCurrencies?: boolean | number
    /** Projection freshness (when rows were last written), RFC3339. Null when the account has no facts. This is not the latest sale close. */
    lastProjectedAt?: boolean | number
    /** False means the historical backfill has not finished, so early periods may be incomplete. */
    backfillDone?: boolean | number
    /** Business-rule caveats attached to this metric. */
    caveats?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Distinct winners for a year, one row per currency. */
export interface SaleStatsDistinctWinnersGenqlSelection{
    rows?: SaleStatsDistinctWinnersRowGenqlSelection
    caveats?: boolean | number
    dayOfYearCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Distinct and repeat winners for one currency in a year. */
export interface SaleStatsDistinctWinnersRowGenqlSelection{
    currency?: boolean | number
    distinctWinners?: boolean | number
    repeatWinners?: boolean | number
    /** Repeat winners divided by distinct winners, in the range 0..1. */
    repeatBuyerShare?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One currency/year GMV point. GMV is hammer price over SOLD lots only, in minor currency units. */
export interface SaleStatsGmvPointGenqlSelection{
    currency?: boolean | number
    year?: boolean | number
    /** Hammer price over SOLD lots, minor currency units. Never sum across currencies. */
    gmv?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Hammer vs mid-estimate for a year, one row per currency. */
export interface SaleStatsHammerVsEstimateGenqlSelection{
    rows?: SaleStatsHammerVsEstimateRowGenqlSelection
    caveats?: boolean | number
    dayOfYearCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Hammer vs mid-estimate for one currency in a year. */
export interface SaleStatsHammerVsEstimateRowGenqlSelection{
    currency?: boolean | number
    scoredLots?: boolean | number
    /** Total hammer over scored lots, minor currency units. */
    totalHammer?: boolean | number
    /** Total mid-estimate over scored lots, minor currency units. */
    totalMidEstimate?: boolean | number
    /** Average per-lot hammer-to-mid ratio. Greater than 1 means hammer beat mid-estimate on average. */
    avgHammerToMidRatio?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Lot outcome for one currency in a year: sold/unsold split, reserve-met rate, and the channel the sold lots closed through. */
export interface SaleStatsLotOutcomeRowGenqlSelection{
    currency?: boolean | number
    sold?: boolean | number
    unsold?: boolean | number
    total?: boolean | number
    sellThrough?: boolean | number
    /** Share of SOLD lots that met their reserve, in the range 0..1. */
    reserveMetRate?: boolean | number
    soldViaAuction?: boolean | number
    soldViaOffer?: boolean | number
    soldViaBuyNow?: boolean | number
    /** Share of SOLD lots closed via auction. The three *Share fields sum to 1 within a currency. */
    auctionShare?: boolean | number
    offerShare?: boolean | number
    buyNowShare?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Lot outcome summary for a year, one row per currency. */
export interface SaleStatsLotOutcomeSummaryGenqlSelection{
    rows?: SaleStatsLotOutcomeRowGenqlSelection
    caveats?: boolean | number
    dayOfYearCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Month-over-month GMV, one row per currency per month, with a like-for-like day-of-month cutoff applied to both months. */
export interface SaleStatsMomGmvGenqlSelection{
    rows?: SaleStatsMonthlyGmvPointGenqlSelection
    caveats?: boolean | number
    /** Server-computed like-for-like day-of-month cutoff applied to both months. */
    dayOfMonthCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One currency/year/month GMV point. GMV is hammer price over SOLD lots only, in minor currency units. */
export interface SaleStatsMonthlyGmvPointGenqlSelection{
    currency?: boolean | number
    year?: boolean | number
    month?: boolean | number
    /** Hammer price over SOLD lots, minor currency units. Never sum across currencies. */
    gmv?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sell-through for a year. Currency-independent (a count ratio). */
export interface SaleStatsSellThroughGenqlSelection{
    sold?: boolean | number
    total?: boolean | number
    /** Sold divided by total, in the range 0..1. */
    sellThrough?: boolean | number
    caveats?: boolean | number
    /** Server-computed like-for-like day-of-year cutoff. */
    dayOfYearCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One ranked sale within a currency. GMV is hammer over SOLD lots, minor currency units. */
export interface SaleStatsTopSaleRowGenqlSelection{
    currency?: boolean | number
    /** 1-based rank within the currency (1 = highest GMV). */
    rank?: boolean | number
    saleId?: boolean | number
    /** Sale title from the sale dimension; null when the sale has no dimension row. */
    title?: boolean | number
    /** Hammer over SOLD lots, minor currency units. Never sum across currencies. */
    gmv?: boolean | number
    sold?: boolean | number
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Top sales of a year, one row per (currency, rank). Ranked within a currency, never blended across currencies. */
export interface SaleStatsTopSalesGenqlSelection{
    rows?: SaleStatsTopSaleRowGenqlSelection
    caveats?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Year-over-year GMV, one row per currency per year, with a like-for-like day-of-year cutoff applied to both years. */
export interface SaleStatsYoyGmvGenqlSelection{
    rows?: SaleStatsGmvPointGenqlSelection
    caveats?: boolean | number
    /** Server-computed like-for-like day-of-year cutoff applied to both years. */
    dayOfYearCutoff?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The shared identity of a sale, regardless of sale format. Implemented by the
 * English `Sale` and the `DutchSale`; future formats implement it too. Select common
 * fields directly and use `... on DutchSale` for format-specific data.
 */
export interface SaleV2GenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    title?: boolean | number
    description?: boolean | number
    currency?: boolean | number
    status?: boolean | number
    dates?: SaleDatesGenqlSelection
    saleFormat?: boolean | number
    on_DutchSale?: DutchSaleGenqlSelection
    on_Sale?: SaleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A page of sales, polymorphic over sale format (each node is an English Sale or a DutchSale). */
export interface SaleV2ConnectionGenqlSelection{
    edges?: SaleV2EdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleV2EdgeGenqlSelection{
    cursor?: boolean | number
    node?: SaleV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection wrapper for sale watchlist entries. */
export interface SaleWatchlistConnectionGenqlSelection{
    /** The list of sale watchlist entry edges. */
    edges?: SaleWatchlistEdgeGenqlSelection
    /** Pagination information. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in the sale watchlist connection. */
export interface SaleWatchlistEdgeGenqlSelection{
    /** Cursor for this edge. */
    cursor?: boolean | number
    /** The sale watchlist entry node. */
    node?: SaleWatchlistEntryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A sale watchlist entry represents a user who has favourited a sale. */
export interface SaleWatchlistEntryGenqlSelection{
    /** Unique identifier for the watchlist entry. */
    id?: boolean | number
    /** User ID of the user who favourited the sale. */
    userId?: boolean | number
    /** Timestamp when the entry was created. */
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for paginating sale watchlist entries. */
export interface SaleWatchlistInput {
/** Number of entries to return. Defaults to 20. */
first?: (Scalars['Int'] | null),
/** Cursor to start pagination from. */
after?: (Scalars['String'] | null),
/** Direction of pagination. Defaults to BACKWARDS (newest first). */
direction?: (PaginationDirection | null)}

export interface SalesAggregateGenqlSelection{
    /** Number of open sales */
    open?: boolean | number
    /** Number of sales in a closing state */
    closing?: boolean | number
    /** Number of closed sales */
    closed?: boolean | number
    /** Number of published sales */
    published?: boolean | number
    /** Number of unpublished sales */
    unpublished?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SalesAggregateInput {
/** Account ID the sales belong to */
accountId: Scalars['String']}

export interface SalesEdgeGenqlSelection{
    /** Current sale cursor */
    cursor?: boolean | number
    /** Sale node */
    node?: SaleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Configuration for a notification sent at a lead time before a sale event. */
export interface ScheduledNotificationConfigurationGenqlSelection{
    /** Channel this configuration delivers on. */
    channel?: boolean | number
    /**
     * Whether this configuration is currently sending. Change it with
     * `setNotificationConfigurationStatus`.
     */
    status?: boolean | number
    /** Which people are looked up when the notification is sent. Never empty. */
    audienceGroups?: boolean | number
    /** When the notification fires. Never empty. */
    leadTimes?: NotificationLeadTimeGenqlSelection
    /**
     * Sender used instead of the account's for this notification. Null means the
     * account's own sender is used. Email only.
     */
    sender?: NotificationEmailSenderGenqlSelection
    /**
     * Reply-to used instead of the account's for this notification. Null means the
     * account's own is used. Email only.
     */
    replyToEmail?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduledNotificationConfigurationInput {audienceGroups: NotificationAudienceGroup[],leadTimes: NotificationLeadTimeInput[],
/**
 * Sender to use instead of the account's. Omitting it leaves the current sender
 * unchanged; a notification that has none uses the account's. Email only.
 */
sender?: (NotificationEmailSenderInput | null),
/**
 * Reply-to to use instead of the account's. Omitting it leaves the current
 * reply-to unchanged. Resolves independently of `sender`. Email only.
 */
replyToEmail?: (Scalars['String'] | null)}


/** A namespace an account owns, reusable across that account's schemas. */
export interface SchemaNamespaceGenqlSelection{
    namespace?: boolean | number
    accountId?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Search Key allows you to search our collections */
export interface SearchKeyGenqlSelection{
    /** Key value */
    key?: boolean | number
    /** Collections */
    collections?: boolean | number
    /** Expiration */
    expiration?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page info for search results using page-based pagination. */
export interface SearchPageInfoGenqlSelection{
    /** Current page number (1-based) */
    currentPage?: boolean | number
    /** Number of results per page */
    perPage?: boolean | number
    /** Total number of pages */
    totalPages?: boolean | number
    /** Total number of results across all pages */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection type for search results */
export interface SearchResultConnectionGenqlSelection{
    /** Search result edges */
    edges?: SearchResultEdgeGenqlSelection
    /** Page information */
    pageInfo?: SearchPageInfoGenqlSelection
    /** Total number of results found */
    resultCount?: boolean | number
    /**
     * Facet counts for building filter UIs.
     * Available facets depend on the search type.
     * 
     * For USER searches, facets may include:
     *   - trust_level: Distribution of trust levels
     *   - id_verification_status: Distribution of verification statuses
     */
    facets?: FacetCountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge for search results */
export interface SearchResultEdgeGenqlSelection{
    /** The search result node */
    node?: SearchResultItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Union type representing a search result item. */
export interface SearchResultItemGenqlSelection{
    on_User?:UserGenqlSelection,
    on_SaleRegistration?:SaleRegistrationGenqlSelection,
    on_SaleItem?:SaleItemGenqlSelection,
    on_SaleBanner?:SaleBannerGenqlSelection,
    on_Item?:ItemGenqlSelection,
    on_Offer?:OfferGenqlSelection,
    on_Image?:ImageGenqlSelection,
    on_Video?:VideoGenqlSelection,
    on_Document?:DocumentGenqlSelection,
    on_Activity?:ActivityGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_Asset?: AssetGenqlSelection,
    __typename?: boolean | number
}


/**
 * A section marker within a sale. isFeaturedSelection distinguishes a featured
 * selection (carries a summary and an inclusive item-number range) from an
 * editorial section card (may carry an image and an open-ended range).
 */
export interface SectionMarkerGenqlSelection{
    /** Id of the section marker. */
    id?: boolean | number
    /** Heading. */
    title?: boolean | number
    /** HTML summary, or null when unset. */
    summary?: boolean | number
    /** Inclusive lower item-number bound (matches Item.itemNumber). */
    fromItemNumber?: boolean | number
    /** Inclusive upper item-number bound, or null when open-ended. */
    toItemNumber?: boolean | number
    /** Asset id of the marker image, if any. */
    imageAssetId?: boolean | number
    /** URL of the marker image, if any. */
    imageUrl?: boolean | number
    /** True for a featured selection, false for an editorial section card. */
    isFeaturedSelection?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SellLiveItemInput {saleId: Scalars['String'],itemId: Scalars['String'],transitionToUpcomingLot?: (Scalars['Boolean'] | null)}

export interface SellLiveItemToBidErrorGenqlSelection{
    error?: boolean | number
    errorCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SellLiveItemToBidInput {saleId: Scalars['String'],itemId: Scalars['String'],bidId: Scalars['String'],transitionToUpcomingLot?: (Scalars['Boolean'] | null)}


/**
 * Result of sellLiveItemToBid. Union of success (returns the updated SaleItem)
 * and a typed error describing why selling to the pinned bid was rejected.
 */
export interface SellLiveItemToBidResultGenqlSelection{
    on_SellLiveItemToBidSuccess?:SellLiveItemToBidSuccessGenqlSelection,
    on_SellLiveItemToBidError?:SellLiveItemToBidErrorGenqlSelection,
    __typename?: boolean | number
}

export interface SellLiveItemToBidSuccessGenqlSelection{
    saleItem?: SaleItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Terms information, who and when terms were accepted */
export interface SellerTermsGenqlSelection{
    accepted_by?: boolean | number
    accepted_date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An email integration delivering through SendGrid. */
export interface SendGridNotificationIntegrationGenqlSelection{
    /** Always `EMAIL`. */
    channel?: boolean | number
    /** When the integration was set up, RFC 3339. */
    created?: boolean | number
    /**
     * IANA timezone name used to render dates in notifications. Null means none was
     * configured, in which case dates render in GMT unless the sale's location
     * resolves to a known timezone.
     */
    timezone?: boolean | number
    /** Address outgoing email is sent from. */
    fromEmail?: boolean | number
    /** Display name shown beside `fromEmail`. Null means the address is shown bare. */
    fromName?: boolean | number
    /** Address replies are delivered to. Null means replies go to `fromEmail`. */
    replyToEmail?: boolean | number
    /**
     * Address that notifications about the account itself are delivered to, as
     * opposed to those delivered to one of its users.
     */
    accountNotificationEmail?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Input for replacing the whole royalty ladder. The bands must start at 0, join
 * end to end without gaps or overlaps, and finish with exactly one unbounded band.
 * An empty list clears the ladder.
 */
export interface SetArrBandsInput {
/** Currency whose ladder is being replaced. */
currency: Currency,bands: ArrBandInput[]}


/**
 * Input for setting what a charge does at one level. A level restates the charge
 * whole, so every field is required and the ladder goes down with it — there is
 * nothing to leave unset and nothing inherited from a wider level.
 * 
 * `scope` may not be ACCOUNT; use `updateCharge` and `setChargeBands` for that.
 */
export interface SetChargeAtScopeInput {
/** The catalogue charge being restated. It must already exist on the account. */
chargeId: Scalars['ID'],
/**
 * The level to restate it at. ACCOUNT is rejected; edit the catalogue entry
 * with `updateCharge` instead.
 */
scope: ChargeScopeInput,
/** The lot amount the bands are measured against. */
basedOn: ChargeBasedOn,
/** How often the charge is raised. See the enum values for what counts. */
frequency: ChargeFrequency,
/** The sale result that triggers the charge. */
outcome: ChargeOutcome,
/** How the ladder is applied to the amount. */
calculationType: ChargeCalculationType,
/** Whether the charge is raised at this level. */
status: ChargeStatus,
/**
 * Lower bound on the amount charged, in minor currency units. Omit or pass 0
 * to leave the amount unraised.
 */
minimum?: (Scalars['Int'] | null),
/**
 * Upper bound on the amount charged, in minor currency units. Omit or pass 0
 * to leave the amount uncapped.
 */
maximum?: (Scalars['Int'] | null),
/**
 * The ladder for this level. Must start at 0, join end to end without gaps or
 * overlaps, and finish with exactly one unbounded band. Cannot be empty.
 */
bands: ChargeBandInput[]}


/**
 * Input for replacing a charge's whole ladder. The bands must start at 0, join end
 * to end without gaps or overlaps, and finish with exactly one unbounded band. An
 * empty list clears the ladder.
 */
export interface SetChargeBandsInput {chargeId: Scalars['ID'],bands: ChargeBandInput[]}


/** Input for enabling or disabling a charge. */
export interface SetChargeStatusInput {chargeId: Scalars['ID'],status: ChargeStatus}

export interface SetConsignmentStaffLeadInput {consignmentId: Scalars['String'],
/**
 * Staff identity id (Ory Kratos) to become the lead staff member. Must be a member
 * of the account; auto-added to the staff set if not already on it.
 */
consignmentStaffUserId: Scalars['String']}


/**
 * Input for setting an item's Artist's Resale Right flag. Omit arr to clear the
 * value and return the item to following its creators.
 */
export interface SetItemArrInput {itemId: Scalars['ID'],arr?: (Scalars['Boolean'] | null)}


/** Enable/disable buy-now on a sale item and set its fixed price. */
export interface SetItemBuyNowConfigInput {itemId: Scalars['String'],saleId: Scalars['String'],enabled: Scalars['Boolean'],
/** Buy-now price in minor currency units. */
price: Scalars['Int'],
/** Buy-now price currency (ISO-4217). */
currency: Scalars['String']}


/** Input for replacing the categories assigned to an item. */
export interface SetItemCategoriesInput {itemId: Scalars['ID'],categoryIds: Scalars['ID'][]}

export interface SetItemConsignmentInput {itemId: Scalars['String'],consignmentId: Scalars['String'],
/**
 * When true, an item already linked to another consignment is moved to this one.
 * When false (default) linking an already-linked item is rejected.
 */
reassign?: (Scalars['Boolean'] | null)}


/** Input for replacing the creators assigned to an item. */
export interface SetItemCreatorsInput {itemId: Scalars['ID'],creatorIds: Scalars['ID'][]}


/**
 * Enable/disable offers on an item and set or clear its auto-accept threshold.
 * clearAutoAccept and a supplied autoAcceptAmount/autoAcceptCurrency are mutually exclusive.
 * clearOfferTtl and a supplied offerTtlSeconds are mutually exclusive.
 */
export interface SetItemOfferConfigInput {itemId: Scalars['String'],enabled: Scalars['Boolean'],autoAcceptAmount?: (Scalars['Int'] | null),autoAcceptCurrency?: (Scalars['String'] | null),clearAutoAccept?: (Scalars['Boolean'] | null),offerTtlSeconds?: (Scalars['Int'] | null),clearOfferTtl?: (Scalars['Boolean'] | null),
/**
 * With enabled = false, cancel the item's live pending and countered offers
 * instead of blocking the change; an accepted offer is left in place. Ignored
 * when enabled = true.
 */
cancelPendingOffers?: (Scalars['Boolean'] | null)}

export interface SetItemSiteLocationInput {itemId: Scalars['String'],siteId: Scalars['String'],
/** When omitted or null the item is placed at the site with no location. */
locationId?: (Scalars['String'] | null)}


/** Input to set an item winner and close the item. */
export interface SetItemWinnerInput {saleId: Scalars['String'],itemId: Scalars['String'],bidId: Scalars['String']}

export interface SetMainConsignorInput {consignmentId: Scalars['String'],
/** Basta user UUID to become the main consignor (auto-added if not already a consignor). */
consignorUserId: Scalars['String']}


/** Input for setting a single metafield connected to a specific entity */
export interface SetMetafieldInput {
/** The type of entity the metafield is connected to */
entityType: MetafieldEntityType,
/** The ID of the entity the metafield is connected to */
entityId: Scalars['String'],
/** The key of the metafield */
key: Scalars['String'],
/** The value of the metafield */
value: Scalars['String'],
/** The value type of the metafield */
valueType: MetafieldValueType}


/**
 * Exactly one of `instant` and `scheduled` is required, matching the notification's
 * `timing`. `event` and `audience` come from a `NotificationCatalogEntry`.
 */
export interface SetNotificationConfigurationInput {event: NotificationEvent,audience: NotificationAudience,channel: NotificationChannel,instant?: (InstantNotificationConfigurationInput | null),scheduled?: (ScheduledNotificationConfigurationInput | null)}


/**
 * Identifies one already-configured notification on one channel, and the status to
 * put it in.
 */
export interface SetNotificationConfigurationStatusInput {event: NotificationEvent,audience: NotificationAudience,channel: NotificationChannel,status: NotificationConfigurationStatus}


/** Input for replacing the categories assigned to a sale. */
export interface SetSaleCategoriesInput {saleId: Scalars['ID'],categoryIds: Scalars['ID'][]}


/**
 * Input for setting a lot's Artist's Resale Right flag. Omit arr to clear the
 * value and return the lot to following its item.
 */
export interface SetSaleItemArrInput {saleId: Scalars['ID'],itemId: Scalars['ID'],arr?: (Scalars['Boolean'] | null)}


/** Input for replacing the categories assigned to a sale item. */
export interface SetSaleItemCategoriesInput {saleId: Scalars['ID'],itemId: Scalars['ID'],categoryIds: Scalars['ID'][]}


/** Input for replacing the creators assigned to a sale item. */
export interface SetSaleItemCreatorsInput {saleId: Scalars['ID'],itemId: Scalars['ID'],creatorIds: Scalars['ID'][]}


/** Input to set or update a sale item slug. Creates the slug if none exists for the item/sale/account; updates otherwise. */
export interface SetSaleItemSlugInput {
/** Id of the sale that item belongs to. */
saleId: Scalars['String'],
/** Id of the item to set the slug for. */
itemId: Scalars['String'],
/** URL-friendly slug string. */
slug: Scalars['String'],
/** If true the slug will be modified to satisfy uniqueness constraints. */
overrideOnConflict?: (Scalars['Boolean'] | null)}


/** Input object for when setting sale item status */
export interface SetSaleItemStatusInput {saleId: Scalars['String'],itemId: Scalars['String'],status: ItemStatus}


/** Input to set or update a sale slug. Creates the slug if none exists for the sale/account; updates otherwise. */
export interface SetSaleSlugInput {
/** Id of the sale to set the slug for. */
saleId: Scalars['String'],
/** URL-friendly slug string. */
slug: Scalars['String'],
/** If true the slug will be modified to satisfy uniqueness constraints. */
overrideOnConflict?: (Scalars['Boolean'] | null)}


/** Input object for when setting sale status */
export interface SetSaleStatusInput {saleId: Scalars['String'],status: SaleStatus}


/**
 * Input for creating or editing a section marker. Omit id to create; supply a
 * known id to edit in place. toItemNumber must be >= fromItemNumber when set, and
 * is required when isFeaturedSelection is true; otherwise it may be omitted for an
 * open-ended range.
 */
export interface SetSectionMarkerInput {id?: (Scalars['ID'] | null),title: Scalars['String'],summary?: (Scalars['String'] | null),fromItemNumber: Scalars['Int'],toItemNumber?: (Scalars['Int'] | null),imageAssetId?: (Scalars['String'] | null),isFeaturedSelection: Scalars['Boolean']}

export interface SetUserExternalIdInput {
/** Internal Basta user id (User.id), delivered in the user webhook payload. */
id: Scalars['String'],
/** The client's external id to assign (stored in the user's user_id column). */
externalId: Scalars['String']}

export interface SetUserIdOnBidInput {
/** Sale ID of the sale that includes the item in scope. */
saleId: Scalars['String'],
/** Item ID of the item that includes the bid in scope. */
itemId: Scalars['String'],
/** Bid ID of the item that includes the bid in scope. */
bidId: Scalars['String'],
/** Updated user ID. */
userId: Scalars['String'],
/** Optional: Update the bid's origin. If not provided, the existing bid origin is preserved. */
bidOrigin?: (BidOriginInput | null),
/**
 * Optional: Registration ID to link to this bid assignment. If omitted, the system
 * will look up an ACCEPTED registration for (saleId, userId) matching the bid origin.
 * If none exists, one will be auto-created with ACCEPTED status. If a non-ACCEPTED
 * registration exists, an error is returned.
 */
registrationId?: (Scalars['String'] | null)}


/** Full replacement of the account's workflow schedule grid. Rows equal to the platform default are stored as modifications only when they differ; omitted date types fall back to their platform default. */
export interface SetWorkflowScheduleOffsetsInput {rows: WorkflowScheduleRowInput[]}

export interface ShopifyConfigurationGenqlSelection{
    /** Shopify Shop Id */
    shopId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Type representing a successful connection between an account and a Shopify store. */
export interface ShopifyConnectionGenqlSelection{
    accountId?: boolean | number
    shopId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A physical building or office, account-scoped, where items reside. Address is
 * stored as structured fields; openingHours is free text.
 */
export interface SiteGenqlSelection{
    /** Id of the site. */
    id?: boolean | number
    /** Account the site belongs to. */
    accountId?: boolean | number
    /** Site name. */
    name?: boolean | number
    /** Address line 1. */
    addressLine1?: boolean | number
    /** Address line 2. */
    addressLine2?: boolean | number
    /** Address city. */
    addressCity?: boolean | number
    /** Address postal code. */
    addressPostalCode?: boolean | number
    /** Address country as an ISO code. */
    addressCountryIso?: boolean | number
    /** Address state, province, region, or area. */
    addressState?: boolean | number
    /** Contact phone number. */
    phone?: boolean | number
    /** Contact email address. */
    email?: boolean | number
    /** Free-text opening hours. */
    openingHours?: boolean | number
    /** Free-text collection instructions. */
    collectionInstructions?: boolean | number
    /** Whether an appointment is required to collect from this site. */
    appointmentRequired?: boolean | number
    /**
     * Case-sensitive canonical IANA timezone name for the site (e.g.
     * Europe/London, not europe/london), or null when unset.
     */
    timezone?: boolean | number
    /** When the site was archived (RFC3339), or null when active. */
    archivedAt?: boolean | number
    /** When the site was created (RFC3339). */
    created?: boolean | number
    /** When the site was last modified (RFC3339). */
    modified?: boolean | number
    /** Id of the user that created the site. */
    createdByUserId?: boolean | number
    /** Id of the user that last modified the site. */
    modifiedByUserId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SiteConnectionGenqlSelection{
    /** Site edges. */
    edges?: SiteEdgeGenqlSelection
    /** Current page information. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SiteEdgeGenqlSelection{
    /** Current site cursor. */
    cursor?: boolean | number
    /** Site node. */
    node?: SiteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StaggeredSaleItemScheduleConfigurationGenqlSelection{
    /** The date and time when the first item should start closing. */
    firstItemClosingDate?: boolean | number
    /**
     * The time between the start of each item's closing period, in milliseconds.
     * A value of 0 means all items close simultaneously.
     * For example, with spacingMs = 180000 (3 minutes) and closingTimeCountdown = 120000 (2 minutes),
     * there will be 1 minute between each item closing (if time is not extended by late bids).
     */
    spacingMs?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StaggeredSaleItemScheduleConfigurationInput {
/** The date and time when the first item should start closing. */
firstItemClosingDate: Scalars['String'],
/**
 * The time between the start of each item's closing period, in milliseconds.
 * A value of 0 means all items close simultaneously.
 * For example, with spacingMs = 180000 (3 minutes) and closingTimeCountdown = 120000 (2 minutes),
 * there will be 1 minute between each item closing (if time is not extended by late bids).
 */
spacingMs: Scalars['Int']}


/** Input object for when starting to close a sale. */
export interface StartClosingSaleInput {saleId: Scalars['String']}


/** Stripe App customer details for associating a customer ID with a user. */
export interface StripeAppCustomerDetailsInput {
/** Stripe customer ID (must start with cus_). */
id: Scalars['String']}


/** Stripe customer details for associating a customer ID with a user. */
export interface StripeCustomerDetailsInput {
/** Stripe customer ID (must start with cus_). */
id: Scalars['String']}


/**
 * StripePaymentProviderSession provides credentials for Stripe Connect embedded components.
 * An Account Session allows you to use Stripe's embedded components to build UIs for your connected accounts.
 */
export interface StripePaymentProviderSessionGenqlSelection{
    /** Publishable Key */
    publishableKey?: boolean | number
    /** Account Session Client Secret */
    clientSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionGenqlSelection{
    /**
     * Real-time information for sale related events.
     * Both Sale and SaleItem data is sent to the socket
     */
    saleActivity?: (SaleActivityGenqlSelection & { __args: {accountId: Scalars['String'], saleId: Scalars['ID'], itemIdFilter?: (ItemIdsFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Input for syncContent — reconcile content drift between an item and one of its sale
 * items in the given direction.
 */
export interface SyncContentInput {
/** Inventory item. */
itemId: Scalars['String'],
/** Sale of the target/source sale item. */
saleId: Scalars['String'],
/** Direction of the sync. */
direction: ContentSyncDirection,
/** Public schema fields to copy. Empty copies all; other keys on the target are preserved. */
keys?: (Scalars['String'][] | null),
/** Keys to delete from the target's schema_data, applied after the copy. */
deleteKeys?: (Scalars['String'][] | null),
/** Also copy the source's schemaId onto the target. Only applies to REFRESH_FROM_ITEM. */
syncSchemaId?: (Scalars['Boolean'] | null)}


/** Input for syncSchemaDataFromSaleItem. */
export interface SyncSchemaDataFromSaleItemInput {
/** Inventory item to copy schema_data onto. */
itemId: Scalars['String'],
/** Sale of the source sale item. */
saleId: Scalars['String'],
/** Public schema fields to copy from the sale item. Empty copies all; other item keys are preserved. */
keys?: (Scalars['String'][] | null),
/** Keys to delete from the item's schema_data, applied after the copy. */
deleteKeys?: (Scalars['String'][] | null)}


/** Input for syncSchemaDataToProductVariant. */
export interface SyncSchemaDataToProductVariantInput {
/** Product variant to sync. */
variantId: Scalars['String'],
/** Public schema fields to copy from the linked item. Empty copies all; other variant keys are preserved. */
keys?: (Scalars['String'][] | null),
/** Keys to delete from the variant's schema_data, applied after the copy. */
deleteKeys?: (Scalars['String'][] | null),
/** Also copy the item's schemaId onto the variant. */
syncSchemaId?: (Scalars['Boolean'] | null)}


/** Input for syncSchemaDataToSaleItem. */
export interface SyncSchemaDataToSaleItemInput {
/** Inventory item to copy schema_data from. */
itemId: Scalars['String'],
/** Sale of the target sale item. */
saleId: Scalars['String'],
/** Public schema fields to copy from the item. Empty copies all; other sale-item keys are preserved. */
keys?: (Scalars['String'][] | null),
/** Keys to delete from the sale item's schema_data, applied after the copy. */
deleteKeys?: (Scalars['String'][] | null),
/** Also copy the item's schemaId onto the sale item. */
syncSchemaId?: (Scalars['Boolean'] | null)}

export interface TagGenqlSelection{
    /** id of tag */
    id?: boolean | number
    /** Tag name */
    name?: boolean | number
    /** Created date */
    created?: boolean | number
    /** Associated date */
    associated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Action Hook response from test message.
 * Contains the status code received.
 */
export interface TestActionHookResponseGenqlSelection{
    requestHeaders?: HttpHeaderGenqlSelection
    requestPayload?: boolean | number
    requestMethod?: boolean | number
    responseHeaders?: HttpHeaderGenqlSelection
    responseBody?: boolean | number
    statusCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Token metadata is mandatory information that needs to be included
 * to create a signed bidder token.
 */
export interface TokenMetadata {
/** Unique User ID that represents a user in customer's user database. */
userId: Scalars['String'],
/** Time to live of the bidders token, represented minutes. */
ttl: Scalars['Int'],
/** User permissions granted by the token, if left empty token will include all permissions. */
permissions?: (ClientPermission[] | null)}


/** Trust level information with modification tracking */
export interface TrustLevelInfoGenqlSelection{
    /** Trust level */
    level?: boolean | number
    /** When the trust level was last modified */
    modifiedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for setting trust level */
export interface TrustLevelInput {
/** Trust level to set */
level: TrustLevel}


/** An SMS integration delivering through Twilio. */
export interface TwilioNotificationIntegrationGenqlSelection{
    /** Always `SMS`. */
    channel?: boolean | number
    /** When the integration was set up, RFC 3339. */
    created?: boolean | number
    /**
     * IANA timezone name used to render dates in notifications. Null means none was
     * configured, in which case dates render in GMT unless the sale's location
     * resolves to a known timezone.
     */
    timezone?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UnblockUserInput {
/** User ID */
userId: Scalars['String']}


/** Input to unhide items from a sale */
export interface UnhideItemsFromSaleInput {saleId: Scalars['String'],includingAndFromItemNumber: Scalars['Int']}

export interface UpdateAccountFeeInput {id: Scalars['String'],name: Scalars['String'],type: AccountFeeType,value: Scalars['Int'],upperLteLimit?: (Scalars['Int'] | null),
/** Lower limit (exclusive) the fee applies from. */
lowerLimit: Scalars['Int'],
/** How this fee rule is calculated. */
calculationType?: (FeeCalculationType | null)}


/**
 * Update Account properties.
 * Only provided values will be applied.
 * Null/Nil values are ignored.
 */
export interface UpdateAccountInput {
/** name */
name?: (Scalars['String'] | null),
/** email */
email?: (Scalars['String'] | null),
/** handle */
handle?: (Scalars['String'] | null),
/** description to be displayed on account profile as bio */
description?: (Scalars['String'] | null),
/** links associated with the account */
links?: ((LinkInput | null)[] | null),
/** Autogenerate a new handle as part of the update */
generateNewHandle?: (Scalars['Boolean'] | null),
/** Enable basta streaming for the account (charges will apply) */
enableBastaStreaming?: (Scalars['Boolean'] | null),
/** Default auction format for the organisation. */
preferredAuctionFormat?: (SaleType | null),
/** Default currency for the organisation. */
defaultCurrency?: (Currency | null),
/** ISO 3166-1 alpha-2 home country for the account. Omitted leaves it unchanged. */
homeCountryCode?: (Country | null),
/**
 * Registered company address and legal details for the organisation.
 * When provided, replaces the stored details in full; omitted fields are cleared.
 */
organisationDetails?: (OrganisationDetailsInput | null),
/** Default start bid as a percentage of the estimate. */
defaultStartBidPercentage?: (Scalars['Float'] | null)}


/** Input to update an Action Hook subscription. */
export interface UpdateActionHookSubscriptionInput {id: Scalars['ID'],
/** Webhook URL that is called when Action Hook is triggered. */
url: Scalars['String'],
/** Custom HTTP header values sent with the action. */
headers?: ((HttpHeaderInput | null)[] | null)}


/** Input for updating an affiliate. Only fields that are set will be updated. */
export interface UpdateAffiliateInput {
/** New first name. */
firstName?: (Scalars['String'] | null),
/** New last name. Use empty string to clear. */
lastName?: (Scalars['String'] | null),
/** New contact email. */
email?: (Scalars['String'] | null),
/** New referral token. Must remain unique within the account. */
token?: (Scalars['String'] | null)}


/**
 * Input for updating the Artist's Resale Right settings. Bands are replaced
 * separately via setArrBands.
 */
export interface UpdateArrSettingsInput {
/** Currency to configure. Creates the configuration if it does not exist yet. */
currency: Currency,enabled: Scalars['Boolean'],
/** Sale price at or above which the royalty applies, in minor currency units. */
thresholdAmount: Scalars['Int'],
/**
 * Upper bound on the total royalty per lot, in minor currency units. Omit for
 * an uncapped royalty.
 */
capAmount?: (Scalars['Int'] | null)}


/** Input for updating an existing category. Omitted fields are left unchanged. */
export interface UpdateCategoryInput {categoryId: Scalars['ID'],name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null)}


/**
 * Input for updating a charge. Replaces every field given here. Does not touch the
 * ladder or the status — use setChargeBands and setChargeStatus for those.
 */
export interface UpdateChargeInput {chargeId: Scalars['ID'],name: Scalars['String'],basedOn: ChargeBasedOn,frequency: ChargeFrequency,outcome: ChargeOutcome,calculationType: ChargeCalculationType,minimum?: (Scalars['Int'] | null),maximum?: (Scalars['Int'] | null)}


/** Replaces the whole consignment record: a field left out is cleared. */
export interface UpdateConsignmentInput {consignmentId: Scalars['String'],
/** Optional consignment name. Omitted or null stores an empty name. */
name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/**
 * Optional identifier for this consignment in an external system, e.g. "GRS-12345".
 * Unique per account.
 * Not unique: one external consignment may be split across several here.
 */
externalId?: (Scalars['String'] | null),feeRules: ConsignmentFeeRuleInput[]}


/**
 * Input for updating an existing creator. Omitted fields are left unchanged.
 * Reparenting is not supported — a creator's position is fixed at creation. A
 * type may only be changed on a root creator.
 */
export interface UpdateCreatorInput {creatorId: Scalars['ID'],name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),type?: (CreatorType | null),
/** Whether the Artist's Resale Right applies to works by this creator. */
arr?: (Scalars['Boolean'] | null)}


/** Input for updating a Dutch sale's content. */
export interface UpdateDutchSaleInput {saleId: Scalars['String'],
/** null = leave unchanged, empty string = clear */
title?: (Scalars['String'] | null),
/** null = leave unchanged, empty string = clear */
description?: (Scalars['String'] | null)}


/** Input for updating the sale properties of a Dutch item. */
export interface UpdateDutchSaleItemInput {saleId: Scalars['String'],itemId: Scalars['String'],schedule?: (DutchScheduleInput | null),openTime?: (Scalars['String'] | null),closingTime?: (Scalars['String'] | null),availableUnits?: (Scalars['Int'] | null),title?: (Scalars['String'] | null),subTitle?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
titleTemplateOverride?: (Scalars['String'] | null),subTitleTemplateOverride?: (Scalars['String'] | null),descriptionTemplateOverride?: (Scalars['String'] | null)}


/** Input object for global updates of closing time countdown for a sale */
export interface UpdateGlobalClosingTimeCountdownInput {saleId: Scalars['String'],closingTimeCountdown: Scalars['Int']}


/** Input object for global updates of dates for a sale */
export interface UpdateGlobalDatesInput {saleId: Scalars['String'],openDate: Scalars['String'],closingDate: Scalars['String']}


/** Input object for global updates of increment table for a sale */
export interface UpdateGlobalIncrementTableInput {saleId: Scalars['String'],incrementTable: BidIncrementTableInput}


/** Item input when modifying an item */
export interface UpdateItemInput {
/** Title for describing the item */
title?: (Scalars['String'] | null),
/** Item sub-title */
subTitle?: (Scalars['String'] | null),
/** Item description */
description?: (Scalars['String'] | null),
/** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
titleTemplateOverride?: (Scalars['String'] | null),subTitleTemplateOverride?: (Scalars['String'] | null),descriptionTemplateOverride?: (Scalars['String'] | null),
/** Item price information */
price?: (ItemPriceInput | null),
/** Unique external identifier, e.g. warehouse id, inventory id, etc. */
externalId?: (Scalars['String'] | null),
/** Custom data associated with the item */
metadata?: (ItemMetadataInput | null),
/** Tags for the item */
tags?: (Scalars['String'][] | null),
/** Item specifications (dimensions, weight, type, etc.) */
specifications?: (ItemSpecificationsInput | null),valuationAmount?: (Scalars['Int'] | null),valuationCurrency?: (Scalars['String'] | null),
/** Location of the item */
location?: (Scalars['String'] | null),
/** Also copy this item's public content onto its sale items, except those in PROCESSING or CLOSED sales. Absent runs no sync. */
syncContentToActiveSaleItems?: (Scalars['Boolean'] | null)}

export interface UpdateItemNumbersInput {saleId: Scalars['String'],itemNumberChanges: ItemNumberChangeInput[]}


/**
 * Input for updateItemType mutation. All fields are optional; only the fields actually
 * supplied by the caller will be updated server-side (the BFF derives the proto update_mask
 * from the present fields).
 */
export interface UpdateItemTypeInput {name?: (Scalars['String'] | null),schema?: (Scalars['JSON'] | null),
/**
 * Globally unique namespace for the item type. Changing it moves the type's items
 * to the new namespace in the search index. Must not be blank.
 */
namespace?: (Scalars['String'] | null),
/**
 * Field Output token templates for an item's output fields. Supplying one (including an
 * empty string, which clears it) marks that field for update.
 */
titleTemplate?: (Scalars['String'] | null),subTitleTemplate?: (Scalars['String'] | null),descriptionTemplate?: (Scalars['String'] | null)}


/** Replaces the whole location record: a field left out is cleared. */
export interface UpdateLocationInput {locationId: Scalars['String'],parentLocationId?: (Scalars['String'] | null),name: Scalars['String']}

export interface UpdateOrderInput {
/** Order identifier */
id: Scalars['ID'],
/** Order title */
title?: (Scalars['String'] | null),
/** Billing address for the order */
billingAddress?: (MailingAddressInput | null),
/** Shipping address for the order */
shippingAddress?: (MailingAddressInput | null)}

export interface UpdateOrderLineFeeInput {
/** Fee description */
description: Scalars['String'],
/** Fee amount in minor currency unit */
amount: Scalars['Int']}

export interface UpdateOrderLineInput {id: Scalars['ID'],orderId: Scalars['ID'],amount?: (Scalars['Int'] | null),description?: (Scalars['String'] | null),fees?: (UpdateOrderLineFeeInput[] | null)}


/** Input for updating a single packaging record (by id) */
export interface UpdatePackagingInput {itemId: Scalars['String'],packagingId: Scalars['String'],quantity?: (Scalars['Int'] | null),boxedHeight?: (Scalars['Float'] | null),boxedLength?: (Scalars['Float'] | null),boxedDepth?: (Scalars['Float'] | null),boxedMeasurementUnit?: (MeasurementUnit | null),boxedWeight?: (Scalars['Float'] | null),boxedWeightUnit?: (WeightUnit | null)}

export interface UpdatePaymentOrderInput {
/** OrderId that order belongs to */
orderId: Scalars['ID'],
/**
 * UserId of user that will pay for the order.
 * Optional. If not provided, the order will be updated for the current user.
 */
userId?: (Scalars['String'] | null),orderLines?: (UpdatePaymentOrderLineInput[] | null)}

export interface UpdatePaymentOrderLineInput {
/** OrderLineId */
orderLineId: Scalars['ID'],
/**
 * Amount of the order line in minor currency unit.
 * Optional. If not provided, the order line amount will not be updated.
 */
amount?: (Scalars['Int'] | null),
/**
 * Description of the order line
 * Optional. If not provided, the order line description will not be updated.
 */
description?: (Scalars['String'] | null),
/**
 * Type of the order line
 * Optional. If not provided, the order line type will not be updated.
 */
orderLineType?: (OrderLineType | null)}

export interface UpdateSaleFeeInput {id: Scalars['ID'],saleId: Scalars['ID'],name: Scalars['String'],type: FeeRuleType,
/**
 * Value of the fee interpreted based on the type.
 * * 500 means 5% if type is percentage
 * * 1000 means $10 if type is amount
 */
value: Scalars['Int'],
/** Upper inclusive limit the fee applies to. If omitted there is no upper limit. */
upperLteLimit?: (Scalars['Int'] | null),
/** Lower limit (exclusive) the fee applies from. */
lowerLimit: Scalars['Int'],
/** How this fee rule is calculated. */
calculationType?: (FeeCalculationType | null)}


/**
 * Input for updating a sale.
 * All fields are mandatory. If something shouldn't change then
 * the provided value should be the same as it was before.
 */
export interface UpdateSaleInput {dates?: (SaleDatesInput | null),title: Scalars['String'],description: Scalars['String'],currency: Scalars['String'],bidIncrementTable: BidIncrementTableInput,closingMethod: ClosingMethod,closingTimeCountdown: Scalars['Int'],
/**
 * Optional sale item closing schedule.
 * If null, existing sale item closing schedule is preserved.
 * If provided, it replaces the existing sale item closing schedule.
 */
saleItemClosingSchedule?: (SaleItemClosingScheduleInput | null),themeType?: (Scalars['Int'] | null),slug?: (Scalars['String'] | null),
/** Should sale be hidden from public view. Default false. */
hidden?: (Scalars['Boolean'] | null),
/** optional live stream information */
liveStream?: (LiveStreamInput | null),
/** sale Type */
saleType?: (SaleType | null),
/** Sale Is Test */
isTestSale?: (Scalars['Boolean'] | null),
/** Whether the auction is to have a printed catalogue. */
printedCatalogue?: (Scalars['Boolean'] | null),
/** Restrictions for bidding on a sale */
bidRestrictions?: (BidRestrictionsInput | null),
/** Unique external identifier, e.g. external system's id, inventory id, etc. */
externalId?: (Scalars['String'] | null),
/** Location of the sale */
location?: (Scalars['String'] | null),
/** Metafields for the sale, this is optional and will only trigger a metafield update if provided. To remove a metafield use the deleteMetafield input. */
metafields?: (MetafieldInput[] | null),
/** Auction genre assignment. Omit/null leaves it unchanged, "" clears it, an id sets it. */
saleGenreId?: (Scalars['ID'] | null),
/** Site assignment. Omit/null leaves it unchanged, "" clears it, an id sets it. */
siteId?: (Scalars['ID'] | null),
/** Viewing times. Omit/null leaves it unchanged, "" clears it, a value sets it. */
viewingTimes?: (Scalars['String'] | null),
/** Buyers notes. Omit/null leaves it unchanged, "" clears it, a value sets it. */
buyersNotes?: (Scalars['String'] | null),
/** Fees-apply information. Omit/null leaves it unchanged, "" clears it, a value sets it. */
feesApplyInfo?: (Scalars['String'] | null),
/** Sale contact member id. Omit/null leaves it unchanged, "" clears it, an id sets it. */
saleContactUserId?: (Scalars['ID'] | null)}

export interface UpdateSaleItemFeeInput {id: Scalars['ID'],saleId: Scalars['ID'],itemId: Scalars['ID'],name: Scalars['String'],type: FeeRuleType,
/**
 * Value of the fee interpreted based on the type.
 * * 500 means 5% if type is percentage
 * * 1000 means $10 if type is amount
 */
value: Scalars['Int'],
/** Upper inclusive limit the fee applies to. If omitted there is no upper limit. */
upperLteLimit?: (Scalars['Int'] | null),
/** Lower limit (exclusive) the fee applies from. */
lowerLimit: Scalars['Int'],
/** How this fee rule is calculated. */
calculationType?: (FeeCalculationType | null)}


/**
 * Update SaleItem input when modifying an item.
 * All inputs should be set
 */
export interface UpdateSaleItemInput {
/** Id of the item that should be updated */
itemId: Scalars['String'],
/** Id of the sale that the item belongs to */
saleId: Scalars['String'],
/** Optional bid increment table for this item. */
bidIncrementTable?: (BidIncrementTableInput | null),
/** Title for describing the item */
title?: (Scalars['String'] | null),
/** Sub-title for describing the item */
subTitle?: (Scalars['String'] | null),
/** Description for describing the item */
description?: (Scalars['String'] | null),
/** Field Output token templates for an item's output fields, e.g. `{brand} {model}`. */
titleTemplateOverride?: (Scalars['String'] | null),subTitleTemplateOverride?: (Scalars['String'] | null),descriptionTemplateOverride?: (Scalars['String'] | null),
/** Starting bid of the item in minor currency unit. */
startingBid?: (Scalars['Int'] | null),
/** Valuation of the item in minor currency unit. */
valuationAmount?: (Scalars['Int'] | null),
/** Valuation currency in minor currency unit. */
valuationCurrency?: (Scalars['String'] | null),
/** Reserve of the item in minor currency unit. */
reserve?: (Scalars['Int'] | null),
/** Low estimate of the item (optional) in minor currency unit. */
lowEstimate?: (Scalars['Int'] | null),
/** High estimate of the item (optional) in minor currency unit. */
highEstimate?: (Scalars['Int'] | null),
/**
 * Allowed BidTypes on the item.
 * 
 * Defaults to allowing only Max bids if not supplied.
 */
allowedBidTypes?: (BidType[] | null),
/**
 * Date and time when item should open up for bidding.
 * Format: RFC3339 timestamp.
 * Example: "2019-10-12T07:20:50.52Z"
 */
openDate?: (Scalars['String'] | null),
/**
 * Date and time when item should close.
 * Format: RFC3339 timestamp.
 * Example: "2019-10-12T07:20:50.52Z"
 */
closingDate?: (Scalars['String'] | null),
/**
 * Update SaleSlug.
 * Only applies to sales hosted by Basta.
 */
slug?: (Scalars['String'] | null),
/** Should item be hidden from public view. */
hidden?: (Scalars['Boolean'] | null),
/** ClosingTime countdown is the sniping duration in milliseconds. */
closingTimeCountdown?: (Scalars['Int'] | null),
/** Tags for the sale item */
tags?: (Scalars['String'][] | null),
/** Specifications for the sale item(dimensions, weight, type, etc.) */
specifications?: (ItemSpecificationsInput | null),
/**
 * Unique external identifier, e.g. external system's id, inventory id, etc.
 * Note: If set, this overrides the external_id for the sale item, but does not update the external_id on the underlying item itself. Setting this to an empty string will clear the external_id for the sale item.
 */
externalId?: (Scalars['String'] | null),
/** Optional lot display number. */
displayNumber?: (Scalars['String'] | null),
/** Optional highlight configuration for the item. */
highlight?: (ItemHighlightInput | null),
/** Metafields for the sale item, this is optional and will only trigger a metafield update if provided. To remove a metafield use the deleteMetafield input. */
metafields?: (MetafieldInput[] | null),
/** Reserve type for the item. */
reserveType?: (ReserveType | null),
/**
 * Optional schema id. Sets the schema linked to this sale item.
 * Empty string clears the link. Omit to leave unchanged.
 */
schemaId?: (Scalars['ID'] | null),
/**
 * Optional schema data. User-supplied JSON values matching the schema
 * referenced by schemaId. Omit to leave unchanged.
 */
schemaData?: (Scalars['JSON'] | null),
/** Direction to sync content drift as part of the save. Absent runs no sync. */
syncContent?: (ContentSyncDirection | null)}

export interface UpdateSaleRegistrationPolicyInput {
/** ID of the policy to update */
id: Scalars['String'],
/** Code of the policy can be used by client code to identify the policy */
code?: (Scalars['String'] | null),
/** Description of the policy can be displayed to users */
description?: (Scalars['String'] | null),
/** CEL expression for the policy */
rule?: (Scalars['String'] | null),
/** If true, the policy will be applied to all sales created for this account */
isDefault?: (Scalars['Boolean'] | null)}


/**
 * Changes to an existing SendGrid email integration. Every field is optional and
 * only the ones given are changed. There is no way to unset a field.
 */
export interface UpdateSendGridNotificationIntegrationInput {
/**
 * Address outgoing email is sent from. Must be a verified sender on the
 * SendGrid account, or SendGrid rejects every send.
 */
fromEmail?: (Scalars['String'] | null),
/** Display name shown beside `fromEmail`. */
fromName?: (Scalars['String'] | null),
/** Address replies are delivered to. */
replyToEmail?: (Scalars['String'] | null),
/**
 * Address that notifications about the account itself are delivered to, as
 * opposed to those delivered to one of its users.
 */
accountNotificationEmail?: (Scalars['String'] | null),
/**
 * IANA timezone name used to render dates in notifications, for example
 * `America/Chicago`. Applies to email only — each channel's integration
 * carries its own timezone. Cannot be returned to unset once it is set.
 */
timezone?: (Scalars['String'] | null)}


/** Replaces the whole site record: a field left out is cleared. */
export interface UpdateSiteInput {siteId: Scalars['String'],name: Scalars['String'],addressLine1?: (Scalars['String'] | null),addressLine2?: (Scalars['String'] | null),addressCity?: (Scalars['String'] | null),addressPostalCode?: (Scalars['String'] | null),addressCountryIso?: (Scalars['String'] | null),addressState?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),email?: (Scalars['String'] | null),openingHours?: (Scalars['String'] | null),collectionInstructions?: (Scalars['String'] | null),appointmentRequired?: Scalars['Boolean'],
/**
 * Case-sensitive canonical IANA timezone name (e.g. Europe/London, not
 * europe/london).
 */
timezone?: (Scalars['String'] | null)}


/** Input for updating a single specification (by id) */
export interface UpdateSpecificationInput {itemId: Scalars['String'],specificationId: Scalars['String'],type?: (SpecificationType | null),subType?: (SpecificationSubType | null),height?: (Scalars['Float'] | null),length?: (Scalars['Float'] | null),depth?: (Scalars['Float'] | null),diameter?: (Scalars['Float'] | null),measurementUnit?: (MeasurementUnit | null),weight?: (Scalars['Float'] | null),weightUnit?: (WeightUnit | null),quantity?: (Scalars['Int'] | null)}


/** Input for updating a user profile */
export interface UpdateUserInput {
/** User ID (Basta user ID or identity provider ID depending on idType) */
userId: Scalars['String'],
/** Type of user ID provided (USER_ID or IDENTITY_PROVIDER_ID) */
idType: UserIdType,
/** Email (optional) */
email?: (Scalars['String'] | null),
/** First name (optional) */
firstName?: (Scalars['String'] | null),
/** Last name (optional) */
lastName?: (Scalars['String'] | null),
/** Username (optional). Synced to the identity provider. */
username?: (Scalars['String'] | null),
/** Password (optional, plain text - will be hashed in the IDP connected to the account) */
password?: (Scalars['String'] | null),
/** Password hash (optional, pre-hashed password) */
passwordHash?: (Scalars['String'] | null),
/** Trust level (optional) */
trustLevel?: (TrustLevelInput | null),
/** Addresses to set (optional, replaces all existing addresses if provided) */
addresses?: (UserAddressInput[] | null),
/** Phones to set (optional, replaces all existing phones if provided) */
phones?: (UserPhoneInput[] | null),
/** Metadata (optional) */
metadata?: (UserMetadataInput | null),
/** ID verification status (optional) */
idVerification?: (UserIdVerificationInput | null),
/** User status (optional, set to ACTIVE or INACTIVE) */
status?: (UserStatus | null),
/**
 * Email verification state (optional). Absent leaves it unchanged on update / defaults to
 * verified on create. Set to false to provision/keep the email unverified; the identity
 * provider's verification flow then applies (subject to IDP config).
 */
emailVerified?: (Scalars['Boolean'] | null),
/**
 * Free-form user role (optional, e.g. "admin" or "store"). Absent leaves it unchanged;
 * empty string clears it. Stored on the user record (source of truth) and pushed to
 * Ory public_metadata.
 */
role?: (Scalars['String'] | null),
/** Whether this client is flagged as a VIP (optional). Absent leaves it unchanged. */
vip?: (Scalars['Boolean'] | null),
/** Tags to set (optional, replaces all existing tags if provided) */
tags?: (Scalars['String'][] | null),
/** Preferences to set (optional, replaces all existing preferences if provided) */
preferences?: (UserPreferenceInput | null),
/**
 * Payment provider customer details to associate with this user (optional).
 * Provide exactly one option.
 */
paymentProviderDetails?: (PaymentProviderCustomerInput | null),
/**
 * Attribution channel id the client came in through (optional). Absent leaves it
 * unchanged; empty string clears it. Must reference a non-archived attribution channel
 * on the account.
 */
attributionChannelId?: (Scalars['String'] | null),
/**
 * Attribution source id the client came in through (optional). Absent leaves it
 * unchanged; empty string clears it. Must reference a non-archived attribution source
 * on the account.
 */
attributionSourceId?: (Scalars['String'] | null),
/**
 * Free-text note about how the client was attributed (optional). Absent leaves it
 * unchanged; empty string clears it.
 */
attributionSourceNote?: (Scalars['String'] | null),
/**
 * When true (the default), suppress the UserUpdated event normally emitted by the
 * user-service UpdateUserProfile RPC for this dashboard-initiated update. While
 * suppressed, no webhooks (action hooks) will fire for this change. Set to false to
 * emit the event and trigger webhooks as usual.
 */
skipUpdateEvent?: (Scalars['Boolean'] | null)}

export interface UploadUrlGenqlSelection{
    /** Image ID */
    imageId?: boolean | number
    /** The signed upload url. */
    uploadUrl?: boolean | number
    /** Image url to render the image after upload */
    imageUrl?: boolean | number
    /** Headers that should be sent with upload */
    headers?: HttpHeaderGenqlSelection
    /** Order */
    order?: boolean | number
    /** Optional unique external identifier. */
    externalId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for creating a user address */
export interface UpsertUserAddressInput {
/** User ID (Basta user ID or identity provider ID depending on idType) */
userId: Scalars['String'],
/** Type of user ID provided (USER_ID or IDENTITY_PROVIDER_ID) */
idType: UserIdType,
/** Address to create */
address: UserAddressInput}


/** Input for creating a user phone */
export interface UpsertUserPhoneInput {
/** User ID (Basta user ID or identity provider ID depending on idType) */
userId: Scalars['String'],
/** Type of user ID provided (USER_ID or IDENTITY_PROVIDER_ID) */
idType: UserIdType,
/** Phone to create */
phone: UserPhoneInput}


/** The `User` type represents a user node in the system, including metadata such as account ID, user ID, creation and modification timestamps, and a profile from a connected identity provider and PII store of Basta. */
export interface UserGenqlSelection{
    /** Id of the user node */
    id?: boolean | number
    /** Account ID */
    accountId?: boolean | number
    /** UserId */
    userId?: boolean | number
    /** Created */
    created?: boolean | number
    /** Modified */
    modified?: boolean | number
    /** User Profile fetch information from identity provider and PII store of Basta */
    profile?: UserInfoGenqlSelection
    /** Tags */
    tags?: TagGenqlSelection
    /** Whether the user is blocked from transacting on the platform */
    blocked?: boolean | number
    /**
     * The charges that apply to lots bought by this user, already restated for
     * them. Falls back to the account when this user does not restate one;
     * `appliesAt` on each says which level supplied the values.
     */
    charges?: (ChargeConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), options?: (ChargeOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserAddressGenqlSelection{
    id?: boolean | number
    addressType?: boolean | number
    line1?: boolean | number
    line2?: boolean | number
    city?: boolean | number
    state?: boolean | number
    postalCode?: boolean | number
    country?: boolean | number
    name?: boolean | number
    company?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for creating or updating a user address */
export interface UserAddressInput {
/** Address ID (optional for create, required for update) */
id?: (Scalars['String'] | null),
/** Address type (shipping or billing) */
addressType: AddressType,
/** Is this the primary address for this type */
isPrimary: Scalars['Boolean'],
/** Street address line 1 */
line1: Scalars['String'],
/** Street address line 2 (optional) */
line2?: (Scalars['String'] | null),
/** City */
city: Scalars['String'],
/** State or province (optional) */
state?: (Scalars['String'] | null),
/** Postal code (optional) */
postalCode?: (Scalars['String'] | null),
/** Country code (ISO 3166-1 alpha-2) */
country: Scalars['String'],
/** Name associated with the address (optional) */
name?: (Scalars['String'] | null),
/** Company name associated with the address (optional) */
company?: (Scalars['String'] | null)}

export interface UserBidActivityGenqlSelection{
    /** Account ID */
    accountId?: boolean | number
    /** BidId UUID string */
    bidId?: boolean | number
    /** Sale ID of the sale that includes the item in scope. */
    saleId?: boolean | number
    /** Sale */
    sale?: SaleGenqlSelection
    /** ItemId */
    itemId?: boolean | number
    /** Item */
    saleItem?: SaleItemGenqlSelection
    /** Amount of the bid in minor currency unit. */
    amount?: boolean | number
    /** Max amount of the bid in minor currency unit. */
    maxAmount?: boolean | number
    /** Users id that placed the bid */
    userId?: boolean | number
    /** Date of when the bid was placed. */
    date?: boolean | number
    /** Bid status of currently logged in user for this item */
    bidStatus?: boolean | number
    /**
     * Bids sequence number tells us how bids are connected.
     * Bids with the same bid sequence number happend during the same Bid/Max-bid request.
     * Mainly used for cancelling bids.
     */
    bidSequenceNumber?: boolean | number
    /** Optional paddle id if bid was placed with a paddle */
    paddle?: PaddleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBidActivityConnectionGenqlSelection{
    edges?: UserBidActivityEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBidActivityEdgeGenqlSelection{
    cursor?: boolean | number
    node?: UserBidActivityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBidActivityFilter {saleId?: (Scalars['String'] | null),itemId?: (Scalars['String'] | null)}

export interface UserEdgeGenqlSelection{
    /** User */
    node?: UserGenqlSelection
    /** Cursor */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for user ID verification status */
export interface UserIdVerificationInput {
/** Verification ID */
verificationId: Scalars['String'],
/** Is the user verified */
verified: Scalars['Boolean']}


/** User ID verification status with modification tracking */
export interface UserIdVerificationStatusGenqlSelection{
    /** Verification ID */
    verificationId?: boolean | number
    /** Is the user verified */
    verified?: boolean | number
    /** When the verification status was last modified */
    modifiedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The user info */
export interface UserInfoGenqlSelection{
    /** UserId */
    userId?: boolean | number
    /** Identity provider ID */
    identityProviderId?: boolean | number
    /** User status (active or inactive) */
    status?: boolean | number
    /** Whether the user's email address has been verified */
    emailVerified?: boolean | number
    /** Name */
    name?: boolean | number
    /** Email */
    email?: boolean | number
    /**
     * Free-form user role (e.g. "admin" or "store"). Null when unset. Mirrored from the
     * user record (source of truth) and Ory public_metadata.
     */
    role?: boolean | number
    /** Whether this client is flagged as a VIP. */
    vip?: boolean | number
    /** Attribution channel id the client came in through. Null when unset. */
    attributionChannelId?: boolean | number
    /** Attribution source id the client came in through. Null when unset. */
    attributionSourceId?: boolean | number
    /** Free-text note about how the client was attributed. Null when unset. */
    attributionSourceNote?: boolean | number
    /**
     * @deprecated Use addressesV2 instead, this will be removed in the next version of the schema
     * Addresses
     */
    addresses?: UserAddressGenqlSelection
    /** Addresses V2 */
    addressesV2?: MailingAddressGenqlSelection
    /** Primary Billing address */
    billingAddress?: MailingAddressGenqlSelection
    /** Primary Shipping address */
    shippingAddress?: MailingAddressGenqlSelection
    /**
     * Payment methods the user has on file. Currently contains the user's default
     * payment method only, and is empty when the user has none.
     */
    paymentMethods?: PaymentMethodGenqlSelection
    /**
     * The user's customer record at their payment provider. Null when the user has
     * no such record.
     */
    paymentProviderDetails?: UserPaymentProviderDetailsGenqlSelection
    /** Phone numbers */
    phones?: PhoneAddressGenqlSelection
    /** Company name */
    companyName?: boolean | number
    /** Salutation */
    salutation?: boolean | number
    /** Timezone */
    timezone?: boolean | number
    /** Nationality */
    nationality?: boolean | number
    /** Date of birth */
    dateOfBirth?: boolean | number
    /** Preferred language */
    preferredLanguage?: boolean | number
    /** Trust level with modification tracking */
    trustLevel?: TrustLevelInfoGenqlSelection
    /** ID verification status with modification tracking */
    idVerificationStatus?: UserIdVerificationStatusGenqlSelection
    /** Username (optional) */
    username?: boolean | number
    /** Notification settings for the user on this account. */
    notificationSettings?: UserNotificationSettingsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for user metadata */
export interface UserMetadataInput {
/** Date of birth */
dateOfBirth?: (Scalars['String'] | null),
/** Nationality */
nationality?: (Scalars['String'] | null),
/** Preferred language */
preferredLanguage?: (Scalars['String'] | null),
/** Timezone */
timezone?: (Scalars['String'] | null),
/** Company name */
companyName?: (Scalars['String'] | null),
/** Salutation */
salutation?: (Scalars['String'] | null)}


/** Whether the user has opted in to one notification on one delivery channel. */
export interface UserNotificationPreferenceGenqlSelection{
    notification?: boolean | number
    channel?: boolean | number
    optedIn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserNotificationPreferenceInput {notification: NotificationEvent,channel: NotificationChannel,optedIn: Scalars['Boolean']}


/** A user's notification settings for one account. */
export interface UserNotificationSettingsGenqlSelection{
    /**
     * One preference per notification and delivery channel the account sends on.
     * Empty when preferences do not apply to this user.
     */
    preferences?: UserNotificationPreferenceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserNotificationsPreferenceInput {scheduled: UserScheduledNotificationsPreferenceInput}


/**
 * UserPaymentProviderDetails is a user's customer record at a payment provider.
 * The concrete type identifies the provider; select `__typename` to tell them apart.
 */
export interface UserPaymentProviderDetailsGenqlSelection{
    /** The user's customer id at the payment provider. */
    id?: boolean | number
    on_UserStripePaymentProviderDetails?: UserStripePaymentProviderDetailsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** UserPaymentProviderSession is a union of all possible payment provider sessions. */
export interface UserPaymentProviderSessionGenqlSelection{
    on_UserStripePaymentProviderSession?:UserStripePaymentProviderSessionGenqlSelection,
    __typename?: boolean | number
}


/** Input for creating a user payment provider session */
export interface UserPaymentProviderSessionInput {
/** User identifier */
userId: Scalars['String']}


/** Input for creating or updating a user phone */
export interface UserPhoneInput {
/** Phone ID (optional for create, required for update) */
id?: (Scalars['String'] | null),
/** Phone type (mobile, home, work, fax) */
phoneType: PhoneType,
/** Is this the primary phone for this type */
isPrimary: Scalars['Boolean'],
/**
 * Full phone number in E.164 format (e.g., +15551234567)
 * Includes country code, number, and optional extension using RFC 3966 format
 * Example: +1-555-123-4567;ext=1234
 * The system will parse and validate this using libphonenumber
 */
phoneNumber: Scalars['String'],
/** Label for this phone (optional) */
label?: (Scalars['String'] | null),
/**
 * When this number was confirmed to belong to the account holder.
 * Omit to leave the current value untouched.
 */
verifiedAt?: (Scalars['Time'] | null)}

export interface UserPreferenceInput {notifications: UserNotificationsPreferenceInput}

export interface UserScheduledNotificationsPreferenceInput {channels: NotificationChannel[]}


/** A user's customer record with Stripe. */
export interface UserStripePaymentProviderDetailsGenqlSelection{
    /** The user's Stripe customer id. */
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * UserStripePaymentProviderSession provides credentials for client-side Stripe integration.
 * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access control over a Customer.
 */
export interface UserStripePaymentProviderSessionGenqlSelection{
    /** Publishable Key */
    publishableKey?: boolean | number
    /** Customer Session Client Secret */
    customerSessionClientSecret?: boolean | number
    /** Setup Intent Client Secret */
    setupIntentClientSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A signed jwt token from Basta that is inteded to authenticate a
 * single user for a websocket connection to get updates based on user context.
 */
export interface UserTokenGenqlSelection{
    /** Signed JWT token that can be used for websocket authentication */
    token?: boolean | number
    /** Expiration date as string. */
    expirationDate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserTokenInput {
/** Unique UserID that represents a user in your system. */
userID: Scalars['String'],
/** Time to live for the user token, represented as minutes */
ttlMinutes: Scalars['Int']}


/** Users connection for pagination */
export interface UsersConnectionGenqlSelection{
    /** User edges */
    edges?: UserEdgeGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An Asset with a video MIME type. */
export interface VideoGenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    url?: boolean | number
    contentType?: boolean | number
    size?: boolean | number
    filename?: boolean | number
    /** Optional client-assigned external identifier. */
    externalId?: boolean | number
    created?: boolean | number
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A signed-day offset for one dimension cell of a workflow date row. */
export interface WorkflowDimensionOffsetGenqlSelection{
    dimension?: boolean | number
    /** Signed day count relative to the auction date; negative is before, positive is after. */
    offsetDays?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorkflowDimensionOffsetInput {dimension: WorkflowScheduleDimension,offsetDays: Scalars['Int']}


/** One effective key date for a sale: either overridden or computed from the account offset and the sale's auction date. */
export interface WorkflowScheduleDateGenqlSelection{
    dateType?: boolean | number
    /** Effective date (RFC3339). Null when computed but the sale has no auction date yet, or the applied dimension has no offset cell. */
    effectiveDate?: boolean | number
    source?: boolean | number
    /** Dimension column used for the computed date; null for an override. */
    dimension?: boolean | number
    /** Signed day offset used for the computed date; null for an override. */
    offsetDays?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** This account's workflow schedule grid, one row per configured date type, in display order. */
export interface WorkflowScheduleOffsetsGenqlSelection{
    rows?: WorkflowScheduleRowGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** One workflow date row: its enabled state, display order, and per-dimension offsets. */
export interface WorkflowScheduleRowGenqlSelection{
    dateType?: boolean | number
    enabled?: boolean | number
    sortOrder?: boolean | number
    offsets?: WorkflowDimensionOffsetGenqlSelection
    /** True when this row differs from the platform default; false when it is the platform default. */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorkflowScheduleRowInput {dateType: WorkflowDateType,enabled: Scalars['Boolean'],sortOrder: Scalars['Int'],offsets: WorkflowDimensionOffsetInput[]}


    const Account_possibleTypes: string[] = ['Account']
    export const isAccount = (obj?: { __typename?: any } | null): obj is Account => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccount"')
      return Account_possibleTypes.includes(obj.__typename)
    }
    


    const AccountFee_possibleTypes: string[] = ['AccountFee']
    export const isAccountFee = (obj?: { __typename?: any } | null): obj is AccountFee => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountFee"')
      return AccountFee_possibleTypes.includes(obj.__typename)
    }
    


    const AccountImageAssociation_possibleTypes: string[] = ['AccountImageAssociation']
    export const isAccountImageAssociation = (obj?: { __typename?: any } | null): obj is AccountImageAssociation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccountImageAssociation"')
      return AccountImageAssociation_possibleTypes.includes(obj.__typename)
    }
    


    const ActionHookLog_possibleTypes: string[] = ['ActionHookLog']
    export const isActionHookLog = (obj?: { __typename?: any } | null): obj is ActionHookLog => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionHookLog"')
      return ActionHookLog_possibleTypes.includes(obj.__typename)
    }
    


    const ActionHookLogConnection_possibleTypes: string[] = ['ActionHookLogConnection']
    export const isActionHookLogConnection = (obj?: { __typename?: any } | null): obj is ActionHookLogConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionHookLogConnection"')
      return ActionHookLogConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ActionHookLogEdge_possibleTypes: string[] = ['ActionHookLogEdge']
    export const isActionHookLogEdge = (obj?: { __typename?: any } | null): obj is ActionHookLogEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionHookLogEdge"')
      return ActionHookLogEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ActionHookSubscription_possibleTypes: string[] = ['ActionHookSubscription']
    export const isActionHookSubscription = (obj?: { __typename?: any } | null): obj is ActionHookSubscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActionHookSubscription"')
      return ActionHookSubscription_possibleTypes.includes(obj.__typename)
    }
    


    const Activity_possibleTypes: string[] = ['Activity']
    export const isActivity = (obj?: { __typename?: any } | null): obj is Activity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isActivity"')
      return Activity_possibleTypes.includes(obj.__typename)
    }
    


    const Affiliate_possibleTypes: string[] = ['Affiliate']
    export const isAffiliate = (obj?: { __typename?: any } | null): obj is Affiliate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAffiliate"')
      return Affiliate_possibleTypes.includes(obj.__typename)
    }
    


    const AffiliateConnection_possibleTypes: string[] = ['AffiliateConnection']
    export const isAffiliateConnection = (obj?: { __typename?: any } | null): obj is AffiliateConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAffiliateConnection"')
      return AffiliateConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AffiliateEdge_possibleTypes: string[] = ['AffiliateEdge']
    export const isAffiliateEdge = (obj?: { __typename?: any } | null): obj is AffiliateEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAffiliateEdge"')
      return AffiliateEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Aggregator_possibleTypes: string[] = ['Aggregator']
    export const isAggregator = (obj?: { __typename?: any } | null): obj is Aggregator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAggregator"')
      return Aggregator_possibleTypes.includes(obj.__typename)
    }
    


    const ApiKey_possibleTypes: string[] = ['ApiKey']
    export const isApiKey = (obj?: { __typename?: any } | null): obj is ApiKey => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiKey"')
      return ApiKey_possibleTypes.includes(obj.__typename)
    }
    


    const ApiKeyConnection_possibleTypes: string[] = ['ApiKeyConnection']
    export const isApiKeyConnection = (obj?: { __typename?: any } | null): obj is ApiKeyConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiKeyConnection"')
      return ApiKeyConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ApiKeyCreated_possibleTypes: string[] = ['ApiKeyCreated']
    export const isApiKeyCreated = (obj?: { __typename?: any } | null): obj is ApiKeyCreated => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiKeyCreated"')
      return ApiKeyCreated_possibleTypes.includes(obj.__typename)
    }
    


    const ApiKeyEdge_possibleTypes: string[] = ['ApiKeyEdge']
    export const isApiKeyEdge = (obj?: { __typename?: any } | null): obj is ApiKeyEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiKeyEdge"')
      return ApiKeyEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ApiToken_possibleTypes: string[] = ['ApiToken']
    export const isApiToken = (obj?: { __typename?: any } | null): obj is ApiToken => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiToken"')
      return ApiToken_possibleTypes.includes(obj.__typename)
    }
    


    const ApiTokenConnection_possibleTypes: string[] = ['ApiTokenConnection']
    export const isApiTokenConnection = (obj?: { __typename?: any } | null): obj is ApiTokenConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiTokenConnection"')
      return ApiTokenConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ApiTokenCreated_possibleTypes: string[] = ['ApiTokenCreated']
    export const isApiTokenCreated = (obj?: { __typename?: any } | null): obj is ApiTokenCreated => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiTokenCreated"')
      return ApiTokenCreated_possibleTypes.includes(obj.__typename)
    }
    


    const ApiTokensEdge_possibleTypes: string[] = ['ApiTokensEdge']
    export const isApiTokensEdge = (obj?: { __typename?: any } | null): obj is ApiTokensEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiTokensEdge"')
      return ApiTokensEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ArrBand_possibleTypes: string[] = ['ArrBand']
    export const isArrBand = (obj?: { __typename?: any } | null): obj is ArrBand => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isArrBand"')
      return ArrBand_possibleTypes.includes(obj.__typename)
    }
    


    const ArrSettings_possibleTypes: string[] = ['ArrSettings']
    export const isArrSettings = (obj?: { __typename?: any } | null): obj is ArrSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isArrSettings"')
      return ArrSettings_possibleTypes.includes(obj.__typename)
    }
    


    const Asset_possibleTypes: string[] = ['Document','Image','Video']
    export const isAsset = (obj?: { __typename?: any } | null): obj is Asset => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAsset"')
      return Asset_possibleTypes.includes(obj.__typename)
    }
    


    const AssetUploadUrl_possibleTypes: string[] = ['AssetUploadUrl']
    export const isAssetUploadUrl = (obj?: { __typename?: any } | null): obj is AssetUploadUrl => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAssetUploadUrl"')
      return AssetUploadUrl_possibleTypes.includes(obj.__typename)
    }
    


    const AttributionChannel_possibleTypes: string[] = ['AttributionChannel']
    export const isAttributionChannel = (obj?: { __typename?: any } | null): obj is AttributionChannel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAttributionChannel"')
      return AttributionChannel_possibleTypes.includes(obj.__typename)
    }
    


    const AttributionSource_possibleTypes: string[] = ['AttributionSource']
    export const isAttributionSource = (obj?: { __typename?: any } | null): obj is AttributionSource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAttributionSource"')
      return AttributionSource_possibleTypes.includes(obj.__typename)
    }
    


    const AuctionSymbol_possibleTypes: string[] = ['AuctionSymbol']
    export const isAuctionSymbol = (obj?: { __typename?: any } | null): obj is AuctionSymbol => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuctionSymbol"')
      return AuctionSymbol_possibleTypes.includes(obj.__typename)
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
    


    const BidPlaced_possibleTypes: string[] = ['BidPlacedSuccess','BidPlacedError']
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
    


    const BidRestrictions_possibleTypes: string[] = ['BidRestrictions']
    export const isBidRestrictions = (obj?: { __typename?: any } | null): obj is BidRestrictions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidRestrictions"')
      return BidRestrictions_possibleTypes.includes(obj.__typename)
    }
    


    const BidderToken_possibleTypes: string[] = ['BidderToken']
    export const isBidderToken = (obj?: { __typename?: any } | null): obj is BidderToken => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidderToken"')
      return BidderToken_possibleTypes.includes(obj.__typename)
    }
    


    const BidsConnection_possibleTypes: string[] = ['BidsConnection']
    export const isBidsConnection = (obj?: { __typename?: any } | null): obj is BidsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidsConnection"')
      return BidsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const BidsEdge_possibleTypes: string[] = ['BidsEdge']
    export const isBidsEdge = (obj?: { __typename?: any } | null): obj is BidsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidsEdge"')
      return BidsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CanceledLatestBidOnItem_possibleTypes: string[] = ['CanceledLatestBidOnItem']
    export const isCanceledLatestBidOnItem = (obj?: { __typename?: any } | null): obj is CanceledLatestBidOnItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCanceledLatestBidOnItem"')
      return CanceledLatestBidOnItem_possibleTypes.includes(obj.__typename)
    }
    


    const Card_possibleTypes: string[] = ['Card']
    export const isCard = (obj?: { __typename?: any } | null): obj is Card => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCard"')
      return Card_possibleTypes.includes(obj.__typename)
    }
    


    const Category_possibleTypes: string[] = ['Category']
    export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
      return Category_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryConnection_possibleTypes: string[] = ['CategoryConnection']
    export const isCategoryConnection = (obj?: { __typename?: any } | null): obj is CategoryConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryConnection"')
      return CategoryConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryEdge_possibleTypes: string[] = ['CategoryEdge']
    export const isCategoryEdge = (obj?: { __typename?: any } | null): obj is CategoryEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryEdge"')
      return CategoryEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryList_possibleTypes: string[] = ['CategoryList']
    export const isCategoryList = (obj?: { __typename?: any } | null): obj is CategoryList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryList"')
      return CategoryList_possibleTypes.includes(obj.__typename)
    }
    


    const Charge_possibleTypes: string[] = ['Charge']
    export const isCharge = (obj?: { __typename?: any } | null): obj is Charge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCharge"')
      return Charge_possibleTypes.includes(obj.__typename)
    }
    


    const ChargeBand_possibleTypes: string[] = ['ChargeBand']
    export const isChargeBand = (obj?: { __typename?: any } | null): obj is ChargeBand => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChargeBand"')
      return ChargeBand_possibleTypes.includes(obj.__typename)
    }
    


    const ChargeConnection_possibleTypes: string[] = ['ChargeConnection']
    export const isChargeConnection = (obj?: { __typename?: any } | null): obj is ChargeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChargeConnection"')
      return ChargeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ChargeEdge_possibleTypes: string[] = ['ChargeEdge']
    export const isChargeEdge = (obj?: { __typename?: any } | null): obj is ChargeEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChargeEdge"')
      return ChargeEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Consignment_possibleTypes: string[] = ['Consignment']
    export const isConsignment = (obj?: { __typename?: any } | null): obj is Consignment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConsignment"')
      return Consignment_possibleTypes.includes(obj.__typename)
    }
    


    const ConsignmentFeeRule_possibleTypes: string[] = ['ConsignmentFeeRule']
    export const isConsignmentFeeRule = (obj?: { __typename?: any } | null): obj is ConsignmentFeeRule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConsignmentFeeRule"')
      return ConsignmentFeeRule_possibleTypes.includes(obj.__typename)
    }
    


    const ConsignmentStaff_possibleTypes: string[] = ['ConsignmentStaff']
    export const isConsignmentStaff = (obj?: { __typename?: any } | null): obj is ConsignmentStaff => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConsignmentStaff"')
      return ConsignmentStaff_possibleTypes.includes(obj.__typename)
    }
    


    const ConsignmentsConnection_possibleTypes: string[] = ['ConsignmentsConnection']
    export const isConsignmentsConnection = (obj?: { __typename?: any } | null): obj is ConsignmentsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConsignmentsConnection"')
      return ConsignmentsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ConsignmentsEdge_possibleTypes: string[] = ['ConsignmentsEdge']
    export const isConsignmentsEdge = (obj?: { __typename?: any } | null): obj is ConsignmentsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConsignmentsEdge"')
      return ConsignmentsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Consignor_possibleTypes: string[] = ['Consignor']
    export const isConsignor = (obj?: { __typename?: any } | null): obj is Consignor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConsignor"')
      return Consignor_possibleTypes.includes(obj.__typename)
    }
    


    const ContentDiff_possibleTypes: string[] = ['ContentDiff']
    export const isContentDiff = (obj?: { __typename?: any } | null): obj is ContentDiff => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentDiff"')
      return ContentDiff_possibleTypes.includes(obj.__typename)
    }
    


    const ContentDiffEntry_possibleTypes: string[] = ['ContentDiffEntry']
    export const isContentDiffEntry = (obj?: { __typename?: any } | null): obj is ContentDiffEntry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentDiffEntry"')
      return ContentDiffEntry_possibleTypes.includes(obj.__typename)
    }
    


    const CountryInfo_possibleTypes: string[] = ['CountryInfo']
    export const isCountryInfo = (obj?: { __typename?: any } | null): obj is CountryInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCountryInfo"')
      return CountryInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CountryInfoConnection_possibleTypes: string[] = ['CountryInfoConnection']
    export const isCountryInfoConnection = (obj?: { __typename?: any } | null): obj is CountryInfoConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCountryInfoConnection"')
      return CountryInfoConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CountryInfoEdge_possibleTypes: string[] = ['CountryInfoEdge']
    export const isCountryInfoEdge = (obj?: { __typename?: any } | null): obj is CountryInfoEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCountryInfoEdge"')
      return CountryInfoEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Creator_possibleTypes: string[] = ['Creator']
    export const isCreator = (obj?: { __typename?: any } | null): obj is Creator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreator"')
      return Creator_possibleTypes.includes(obj.__typename)
    }
    


    const CreatorConnection_possibleTypes: string[] = ['CreatorConnection']
    export const isCreatorConnection = (obj?: { __typename?: any } | null): obj is CreatorConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreatorConnection"')
      return CreatorConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CreatorList_possibleTypes: string[] = ['CreatorList']
    export const isCreatorList = (obj?: { __typename?: any } | null): obj is CreatorList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreatorList"')
      return CreatorList_possibleTypes.includes(obj.__typename)
    }
    


    const CurrentUser_possibleTypes: string[] = ['CurrentUser']
    export const isCurrentUser = (obj?: { __typename?: any } | null): obj is CurrentUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrentUser"')
      return CurrentUser_possibleTypes.includes(obj.__typename)
    }
    


    const DashboardMember_possibleTypes: string[] = ['DashboardMember']
    export const isDashboardMember = (obj?: { __typename?: any } | null): obj is DashboardMember => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDashboardMember"')
      return DashboardMember_possibleTypes.includes(obj.__typename)
    }
    


    const DashboardUserRoleAssignment_possibleTypes: string[] = ['DashboardUserRoleAssignment']
    export const isDashboardUserRoleAssignment = (obj?: { __typename?: any } | null): obj is DashboardUserRoleAssignment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDashboardUserRoleAssignment"')
      return DashboardUserRoleAssignment_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteSalePayload_possibleTypes: string[] = ['DeleteSalePayload']
    export const isDeleteSalePayload = (obj?: { __typename?: any } | null): obj is DeleteSalePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteSalePayload"')
      return DeleteSalePayload_possibleTypes.includes(obj.__typename)
    }
    


    const Department_possibleTypes: string[] = ['Department']
    export const isDepartment = (obj?: { __typename?: any } | null): obj is Department => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDepartment"')
      return Department_possibleTypes.includes(obj.__typename)
    }
    


    const DepartmentConnection_possibleTypes: string[] = ['DepartmentConnection']
    export const isDepartmentConnection = (obj?: { __typename?: any } | null): obj is DepartmentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDepartmentConnection"')
      return DepartmentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const DepartmentEdge_possibleTypes: string[] = ['DepartmentEdge']
    export const isDepartmentEdge = (obj?: { __typename?: any } | null): obj is DepartmentEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDepartmentEdge"')
      return DepartmentEdge_possibleTypes.includes(obj.__typename)
    }
    


    const DirectSell_possibleTypes: string[] = ['DirectSell']
    export const isDirectSell = (obj?: { __typename?: any } | null): obj is DirectSell => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDirectSell"')
      return DirectSell_possibleTypes.includes(obj.__typename)
    }
    


    const Document_possibleTypes: string[] = ['Document']
    export const isDocument = (obj?: { __typename?: any } | null): obj is Document => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocument"')
      return Document_possibleTypes.includes(obj.__typename)
    }
    


    const DutchBid_possibleTypes: string[] = ['DutchBid']
    export const isDutchBid = (obj?: { __typename?: any } | null): obj is DutchBid => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchBid"')
      return DutchBid_possibleTypes.includes(obj.__typename)
    }
    


    const DutchBidConnection_possibleTypes: string[] = ['DutchBidConnection']
    export const isDutchBidConnection = (obj?: { __typename?: any } | null): obj is DutchBidConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchBidConnection"')
      return DutchBidConnection_possibleTypes.includes(obj.__typename)
    }
    


    const DutchBidEdge_possibleTypes: string[] = ['DutchBidEdge']
    export const isDutchBidEdge = (obj?: { __typename?: any } | null): obj is DutchBidEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchBidEdge"')
      return DutchBidEdge_possibleTypes.includes(obj.__typename)
    }
    


    const DutchItemConfig_possibleTypes: string[] = ['DutchItemConfig']
    export const isDutchItemConfig = (obj?: { __typename?: any } | null): obj is DutchItemConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchItemConfig"')
      return DutchItemConfig_possibleTypes.includes(obj.__typename)
    }
    


    const DutchPriceDrop_possibleTypes: string[] = ['DutchPriceDrop']
    export const isDutchPriceDrop = (obj?: { __typename?: any } | null): obj is DutchPriceDrop => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchPriceDrop"')
      return DutchPriceDrop_possibleTypes.includes(obj.__typename)
    }
    


    const DutchSale_possibleTypes: string[] = ['DutchSale']
    export const isDutchSale = (obj?: { __typename?: any } | null): obj is DutchSale => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchSale"')
      return DutchSale_possibleTypes.includes(obj.__typename)
    }
    


    const DutchSaleItem_possibleTypes: string[] = ['DutchSaleItem']
    export const isDutchSaleItem = (obj?: { __typename?: any } | null): obj is DutchSaleItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchSaleItem"')
      return DutchSaleItem_possibleTypes.includes(obj.__typename)
    }
    


    const DutchSaleItemConnection_possibleTypes: string[] = ['DutchSaleItemConnection']
    export const isDutchSaleItemConnection = (obj?: { __typename?: any } | null): obj is DutchSaleItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchSaleItemConnection"')
      return DutchSaleItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const DutchSaleItemEdge_possibleTypes: string[] = ['DutchSaleItemEdge']
    export const isDutchSaleItemEdge = (obj?: { __typename?: any } | null): obj is DutchSaleItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchSaleItemEdge"')
      return DutchSaleItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const DutchSchedule_possibleTypes: string[] = ['DutchSchedule']
    export const isDutchSchedule = (obj?: { __typename?: any } | null): obj is DutchSchedule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchSchedule"')
      return DutchSchedule_possibleTypes.includes(obj.__typename)
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
    


    const FacetCount_possibleTypes: string[] = ['FacetCount']
    export const isFacetCount = (obj?: { __typename?: any } | null): obj is FacetCount => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFacetCount"')
      return FacetCount_possibleTypes.includes(obj.__typename)
    }
    


    const FacetStats_possibleTypes: string[] = ['FacetStats']
    export const isFacetStats = (obj?: { __typename?: any } | null): obj is FacetStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFacetStats"')
      return FacetStats_possibleTypes.includes(obj.__typename)
    }
    


    const FacetValue_possibleTypes: string[] = ['FacetValue']
    export const isFacetValue = (obj?: { __typename?: any } | null): obj is FacetValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFacetValue"')
      return FacetValue_possibleTypes.includes(obj.__typename)
    }
    


    const FeeRule_possibleTypes: string[] = ['FeeRule']
    export const isFeeRule = (obj?: { __typename?: any } | null): obj is FeeRule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeeRule"')
      return FeeRule_possibleTypes.includes(obj.__typename)
    }
    


    const FieldChange_possibleTypes: string[] = ['FieldChange']
    export const isFieldChange = (obj?: { __typename?: any } | null): obj is FieldChange => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFieldChange"')
      return FieldChange_possibleTypes.includes(obj.__typename)
    }
    


    const GeoLocation_possibleTypes: string[] = ['GeoLocation']
    export const isGeoLocation = (obj?: { __typename?: any } | null): obj is GeoLocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeoLocation"')
      return GeoLocation_possibleTypes.includes(obj.__typename)
    }
    


    const GetItemInput_possibleTypes: string[] = ['GetItemInput']
    export const isGetItemInput = (obj?: { __typename?: any } | null): obj is GetItemInput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetItemInput"')
      return GetItemInput_possibleTypes.includes(obj.__typename)
    }
    


    const HighestBidInfo_possibleTypes: string[] = ['HighestBidInfo']
    export const isHighestBidInfo = (obj?: { __typename?: any } | null): obj is HighestBidInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHighestBidInfo"')
      return HighestBidInfo_possibleTypes.includes(obj.__typename)
    }
    


    const HighlightedSaleItemConnection_possibleTypes: string[] = ['HighlightedSaleItemConnection']
    export const isHighlightedSaleItemConnection = (obj?: { __typename?: any } | null): obj is HighlightedSaleItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHighlightedSaleItemConnection"')
      return HighlightedSaleItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const HighlightedSaleItemEdge_possibleTypes: string[] = ['HighlightedSaleItemEdge']
    export const isHighlightedSaleItemEdge = (obj?: { __typename?: any } | null): obj is HighlightedSaleItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHighlightedSaleItemEdge"')
      return HighlightedSaleItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const HttpHeader_possibleTypes: string[] = ['HttpHeader']
    export const isHttpHeader = (obj?: { __typename?: any } | null): obj is HttpHeader => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHttpHeader"')
      return HttpHeader_possibleTypes.includes(obj.__typename)
    }
    


    const Image_possibleTypes: string[] = ['Image']
    export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
      return Image_possibleTypes.includes(obj.__typename)
    }
    


    const ImageAssociation_possibleTypes: string[] = ['SaleItemImageAssociation','ItemImageAssociation','SaleImageAssociation','AccountImageAssociation']
    export const isImageAssociation = (obj?: { __typename?: any } | null): obj is ImageAssociation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageAssociation"')
      return ImageAssociation_possibleTypes.includes(obj.__typename)
    }
    


    const ImageWithAssociations_possibleTypes: string[] = ['ImageWithAssociations']
    export const isImageWithAssociations = (obj?: { __typename?: any } | null): obj is ImageWithAssociations => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageWithAssociations"')
      return ImageWithAssociations_possibleTypes.includes(obj.__typename)
    }
    


    const InstantNotificationConfiguration_possibleTypes: string[] = ['InstantNotificationConfiguration']
    export const isInstantNotificationConfiguration = (obj?: { __typename?: any } | null): obj is InstantNotificationConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInstantNotificationConfiguration"')
      return InstantNotificationConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const Invoice_possibleTypes: string[] = ['Invoice']
    export const isInvoice = (obj?: { __typename?: any } | null): obj is Invoice => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInvoice"')
      return Invoice_possibleTypes.includes(obj.__typename)
    }
    


    const Item_possibleTypes: string[] = ['Item']
    export const isItem = (obj?: { __typename?: any } | null): obj is Item => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItem"')
      return Item_possibleTypes.includes(obj.__typename)
    }
    


    const ItemBanner_possibleTypes: string[] = ['ItemBanner']
    export const isItemBanner = (obj?: { __typename?: any } | null): obj is ItemBanner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemBanner"')
      return ItemBanner_possibleTypes.includes(obj.__typename)
    }
    


    const ItemBuyNowConfig_possibleTypes: string[] = ['ItemBuyNowConfig']
    export const isItemBuyNowConfig = (obj?: { __typename?: any } | null): obj is ItemBuyNowConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemBuyNowConfig"')
      return ItemBuyNowConfig_possibleTypes.includes(obj.__typename)
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
    


    const ItemHighlight_possibleTypes: string[] = ['ItemHighlight']
    export const isItemHighlight = (obj?: { __typename?: any } | null): obj is ItemHighlight => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemHighlight"')
      return ItemHighlight_possibleTypes.includes(obj.__typename)
    }
    


    const ItemImageAssociation_possibleTypes: string[] = ['ItemImageAssociation']
    export const isItemImageAssociation = (obj?: { __typename?: any } | null): obj is ItemImageAssociation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemImageAssociation"')
      return ItemImageAssociation_possibleTypes.includes(obj.__typename)
    }
    


    const ItemLink_possibleTypes: string[] = ['SaleItemLink','ProductVariantLink']
    export const isItemLink = (obj?: { __typename?: any } | null): obj is ItemLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemLink"')
      return ItemLink_possibleTypes.includes(obj.__typename)
    }
    


    const ItemLinkConnection_possibleTypes: string[] = ['ItemLinkConnection']
    export const isItemLinkConnection = (obj?: { __typename?: any } | null): obj is ItemLinkConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemLinkConnection"')
      return ItemLinkConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ItemLinkEdge_possibleTypes: string[] = ['ItemLinkEdge']
    export const isItemLinkEdge = (obj?: { __typename?: any } | null): obj is ItemLinkEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemLinkEdge"')
      return ItemLinkEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ItemMessageNotification_possibleTypes: string[] = ['ItemMessageNotification']
    export const isItemMessageNotification = (obj?: { __typename?: any } | null): obj is ItemMessageNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemMessageNotification"')
      return ItemMessageNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemMetadata_possibleTypes: string[] = ['ItemMetadata']
    export const isItemMetadata = (obj?: { __typename?: any } | null): obj is ItemMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemMetadata"')
      return ItemMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const ItemNote_possibleTypes: string[] = ['ItemNote']
    export const isItemNote = (obj?: { __typename?: any } | null): obj is ItemNote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemNote"')
      return ItemNote_possibleTypes.includes(obj.__typename)
    }
    


    const ItemNoteConnection_possibleTypes: string[] = ['ItemNoteConnection']
    export const isItemNoteConnection = (obj?: { __typename?: any } | null): obj is ItemNoteConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemNoteConnection"')
      return ItemNoteConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ItemNoteEdge_possibleTypes: string[] = ['ItemNoteEdge']
    export const isItemNoteEdge = (obj?: { __typename?: any } | null): obj is ItemNoteEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemNoteEdge"')
      return ItemNoteEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ItemNotification_possibleTypes: string[] = ['ItemMessageNotification','ItemFairWarningNotification','ItemOfferPlacedNotification','ItemSoldNotification']
    export const isItemNotification = (obj?: { __typename?: any } | null): obj is ItemNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemNotification"')
      return ItemNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemOfferConfig_possibleTypes: string[] = ['ItemOfferConfig']
    export const isItemOfferConfig = (obj?: { __typename?: any } | null): obj is ItemOfferConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemOfferConfig"')
      return ItemOfferConfig_possibleTypes.includes(obj.__typename)
    }
    


    const ItemOfferPlacedNotification_possibleTypes: string[] = ['ItemOfferPlacedNotification']
    export const isItemOfferPlacedNotification = (obj?: { __typename?: any } | null): obj is ItemOfferPlacedNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemOfferPlacedNotification"')
      return ItemOfferPlacedNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemPackaging_possibleTypes: string[] = ['ItemPackaging']
    export const isItemPackaging = (obj?: { __typename?: any } | null): obj is ItemPackaging => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemPackaging"')
      return ItemPackaging_possibleTypes.includes(obj.__typename)
    }
    


    const ItemPrice_possibleTypes: string[] = ['ItemPrice']
    export const isItemPrice = (obj?: { __typename?: any } | null): obj is ItemPrice => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemPrice"')
      return ItemPrice_possibleTypes.includes(obj.__typename)
    }
    


    const ItemSchema_possibleTypes: string[] = ['ItemSchema']
    export const isItemSchema = (obj?: { __typename?: any } | null): obj is ItemSchema => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemSchema"')
      return ItemSchema_possibleTypes.includes(obj.__typename)
    }
    


    const ItemSoldNotification_possibleTypes: string[] = ['ItemSoldNotification']
    export const isItemSoldNotification = (obj?: { __typename?: any } | null): obj is ItemSoldNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemSoldNotification"')
      return ItemSoldNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemSpecifications_possibleTypes: string[] = ['ItemSpecifications']
    export const isItemSpecifications = (obj?: { __typename?: any } | null): obj is ItemSpecifications => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemSpecifications"')
      return ItemSpecifications_possibleTypes.includes(obj.__typename)
    }
    


    const ItemType_possibleTypes: string[] = ['ItemType']
    export const isItemType = (obj?: { __typename?: any } | null): obj is ItemType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemType"')
      return ItemType_possibleTypes.includes(obj.__typename)
    }
    


    const ItemTypeEdge_possibleTypes: string[] = ['ItemTypeEdge']
    export const isItemTypeEdge = (obj?: { __typename?: any } | null): obj is ItemTypeEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemTypeEdge"')
      return ItemTypeEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ItemTypesConnection_possibleTypes: string[] = ['ItemTypesConnection']
    export const isItemTypesConnection = (obj?: { __typename?: any } | null): obj is ItemTypesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemTypesConnection"')
      return ItemTypesConnection_possibleTypes.includes(obj.__typename)
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
    


    const LiveStream_possibleTypes: string[] = ['ExternalLiveStream','BastaLiveStream']
    export const isLiveStream = (obj?: { __typename?: any } | null): obj is LiveStream => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLiveStream"')
      return LiveStream_possibleTypes.includes(obj.__typename)
    }
    


    const Location_possibleTypes: string[] = ['Location']
    export const isLocation = (obj?: { __typename?: any } | null): obj is Location => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocation"')
      return Location_possibleTypes.includes(obj.__typename)
    }
    


    const LocationConnection_possibleTypes: string[] = ['LocationConnection']
    export const isLocationConnection = (obj?: { __typename?: any } | null): obj is LocationConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocationConnection"')
      return LocationConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LocationEdge_possibleTypes: string[] = ['LocationEdge']
    export const isLocationEdge = (obj?: { __typename?: any } | null): obj is LocationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocationEdge"')
      return LocationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MailingAddress_possibleTypes: string[] = ['MailingAddress']
    export const isMailingAddress = (obj?: { __typename?: any } | null): obj is MailingAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMailingAddress"')
      return MailingAddress_possibleTypes.includes(obj.__typename)
    }
    


    const Metafield_possibleTypes: string[] = ['Metafield']
    export const isMetafield = (obj?: { __typename?: any } | null): obj is Metafield => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafield"')
      return Metafield_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['AccountFee','ActionHookLog','ApiKey','ApiToken','Category','Consignment','Department','DutchSale','FeeRule','Item','Location','Offer','PaymentOrder','Sale','SaleGenre','SaleItemRegistration','SaleItemWatchlistEntry','SaleRegistration','SaleRegistrationPolicy','SaleWatchlistEntry','SectionMarker','Site','User']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationCatalog_possibleTypes: string[] = ['NotificationCatalog']
    export const isNotificationCatalog = (obj?: { __typename?: any } | null): obj is NotificationCatalog => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationCatalog"')
      return NotificationCatalog_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationCatalogEntry_possibleTypes: string[] = ['NotificationCatalogEntry']
    export const isNotificationCatalogEntry = (obj?: { __typename?: any } | null): obj is NotificationCatalogEntry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationCatalogEntry"')
      return NotificationCatalogEntry_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationConfiguration_possibleTypes: string[] = ['InstantNotificationConfiguration','ScheduledNotificationConfiguration']
    export const isNotificationConfiguration = (obj?: { __typename?: any } | null): obj is NotificationConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationConfiguration"')
      return NotificationConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationEmailSender_possibleTypes: string[] = ['NotificationEmailSender']
    export const isNotificationEmailSender = (obj?: { __typename?: any } | null): obj is NotificationEmailSender => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationEmailSender"')
      return NotificationEmailSender_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationIntegration_possibleTypes: string[] = ['SendGridNotificationIntegration','TwilioNotificationIntegration']
    export const isNotificationIntegration = (obj?: { __typename?: any } | null): obj is NotificationIntegration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationIntegration"')
      return NotificationIntegration_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationLeadTime_possibleTypes: string[] = ['NotificationLeadTime']
    export const isNotificationLeadTime = (obj?: { __typename?: any } | null): obj is NotificationLeadTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationLeadTime"')
      return NotificationLeadTime_possibleTypes.includes(obj.__typename)
    }
    


    const NotificationTemplate_possibleTypes: string[] = ['NotificationTemplate']
    export const isNotificationTemplate = (obj?: { __typename?: any } | null): obj is NotificationTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNotificationTemplate"')
      return NotificationTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const Offer_possibleTypes: string[] = ['Offer']
    export const isOffer = (obj?: { __typename?: any } | null): obj is Offer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOffer"')
      return Offer_possibleTypes.includes(obj.__typename)
    }
    


    const OfferCounter_possibleTypes: string[] = ['OfferCounter']
    export const isOfferCounter = (obj?: { __typename?: any } | null): obj is OfferCounter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOfferCounter"')
      return OfferCounter_possibleTypes.includes(obj.__typename)
    }
    


    const OffersConnection_possibleTypes: string[] = ['OffersConnection']
    export const isOffersConnection = (obj?: { __typename?: any } | null): obj is OffersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOffersConnection"')
      return OffersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const OffersEdge_possibleTypes: string[] = ['OffersEdge']
    export const isOffersEdge = (obj?: { __typename?: any } | null): obj is OffersEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOffersEdge"')
      return OffersEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OnboardPaymentAccountResponse_possibleTypes: string[] = ['OnboardPaymentAccountResponse']
    export const isOnboardPaymentAccountResponse = (obj?: { __typename?: any } | null): obj is OnboardPaymentAccountResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOnboardPaymentAccountResponse"')
      return OnboardPaymentAccountResponse_possibleTypes.includes(obj.__typename)
    }
    


    const OnlineBidOrigin_possibleTypes: string[] = ['OnlineBidOrigin']
    export const isOnlineBidOrigin = (obj?: { __typename?: any } | null): obj is OnlineBidOrigin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOnlineBidOrigin"')
      return OnlineBidOrigin_possibleTypes.includes(obj.__typename)
    }
    


    const OrderConnection_possibleTypes: string[] = ['OrderConnection']
    export const isOrderConnection = (obj?: { __typename?: any } | null): obj is OrderConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderConnection"')
      return OrderConnection_possibleTypes.includes(obj.__typename)
    }
    


    const OrderEdge_possibleTypes: string[] = ['OrderEdge']
    export const isOrderEdge = (obj?: { __typename?: any } | null): obj is OrderEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderEdge"')
      return OrderEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrderLine_possibleTypes: string[] = ['OrderLine']
    export const isOrderLine = (obj?: { __typename?: any } | null): obj is OrderLine => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderLine"')
      return OrderLine_possibleTypes.includes(obj.__typename)
    }
    


    const OrderLineFee_possibleTypes: string[] = ['OrderLineFee']
    export const isOrderLineFee = (obj?: { __typename?: any } | null): obj is OrderLineFee => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderLineFee"')
      return OrderLineFee_possibleTypes.includes(obj.__typename)
    }
    


    const OrganisationDetails_possibleTypes: string[] = ['OrganisationDetails']
    export const isOrganisationDetails = (obj?: { __typename?: any } | null): obj is OrganisationDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrganisationDetails"')
      return OrganisationDetails_possibleTypes.includes(obj.__typename)
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
    


    const Participant_possibleTypes: string[] = ['Participant']
    export const isParticipant = (obj?: { __typename?: any } | null): obj is Participant => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParticipant"')
      return Participant_possibleTypes.includes(obj.__typename)
    }
    


    const ParticipantsConnection_possibleTypes: string[] = ['ParticipantsConnection']
    export const isParticipantsConnection = (obj?: { __typename?: any } | null): obj is ParticipantsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParticipantsConnection"')
      return ParticipantsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ParticipantsEdge_possibleTypes: string[] = ['ParticipantsEdge']
    export const isParticipantsEdge = (obj?: { __typename?: any } | null): obj is ParticipantsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParticipantsEdge"')
      return ParticipantsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Payment_possibleTypes: string[] = ['Payment']
    export const isPayment = (obj?: { __typename?: any } | null): obj is Payment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPayment"')
      return Payment_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentDetails_possibleTypes: string[] = ['PaymentDetails']
    export const isPaymentDetails = (obj?: { __typename?: any } | null): obj is PaymentDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentDetails"')
      return PaymentDetails_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentMethod_possibleTypes: string[] = ['Card']
    export const isPaymentMethod = (obj?: { __typename?: any } | null): obj is PaymentMethod => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentMethod"')
      return PaymentMethod_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentOrder_possibleTypes: string[] = ['PaymentOrder']
    export const isPaymentOrder = (obj?: { __typename?: any } | null): obj is PaymentOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentOrder"')
      return PaymentOrder_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentProviderSession_possibleTypes: string[] = ['StripePaymentProviderSession']
    export const isPaymentProviderSession = (obj?: { __typename?: any } | null): obj is PaymentProviderSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentProviderSession"')
      return PaymentProviderSession_possibleTypes.includes(obj.__typename)
    }
    


    const PhoneAddress_possibleTypes: string[] = ['PhoneAddress']
    export const isPhoneAddress = (obj?: { __typename?: any } | null): obj is PhoneAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPhoneAddress"')
      return PhoneAddress_possibleTypes.includes(obj.__typename)
    }
    


    const PhoneBidOrigin_possibleTypes: string[] = ['PhoneBidOrigin']
    export const isPhoneBidOrigin = (obj?: { __typename?: any } | null): obj is PhoneBidOrigin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPhoneBidOrigin"')
      return PhoneBidOrigin_possibleTypes.includes(obj.__typename)
    }
    


    const Principal_possibleTypes: string[] = ['Principal']
    export const isPrincipal = (obj?: { __typename?: any } | null): obj is Principal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrincipal"')
      return Principal_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariant_possibleTypes: string[] = ['ProductVariant']
    export const isProductVariant = (obj?: { __typename?: any } | null): obj is ProductVariant => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariant"')
      return ProductVariant_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariantConnection_possibleTypes: string[] = ['ProductVariantConnection']
    export const isProductVariantConnection = (obj?: { __typename?: any } | null): obj is ProductVariantConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariantConnection"')
      return ProductVariantConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariantEdge_possibleTypes: string[] = ['ProductVariantEdge']
    export const isProductVariantEdge = (obj?: { __typename?: any } | null): obj is ProductVariantEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariantEdge"')
      return ProductVariantEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariantLink_possibleTypes: string[] = ['ProductVariantLink']
    export const isProductVariantLink = (obj?: { __typename?: any } | null): obj is ProductVariantLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariantLink"')
      return ProductVariantLink_possibleTypes.includes(obj.__typename)
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
    


    const SaleActivity_possibleTypes: string[] = ['Sale','SaleItem','SaleLiveStreamUpdate']
    export const isSaleActivity = (obj?: { __typename?: any } | null): obj is SaleActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleActivity"')
      return SaleActivity_possibleTypes.includes(obj.__typename)
    }
    


    const SaleBanner_possibleTypes: string[] = ['SaleBanner']
    export const isSaleBanner = (obj?: { __typename?: any } | null): obj is SaleBanner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleBanner"')
      return SaleBanner_possibleTypes.includes(obj.__typename)
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
    


    const SaleGenre_possibleTypes: string[] = ['SaleGenre']
    export const isSaleGenre = (obj?: { __typename?: any } | null): obj is SaleGenre => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleGenre"')
      return SaleGenre_possibleTypes.includes(obj.__typename)
    }
    


    const SaleGenreConnection_possibleTypes: string[] = ['SaleGenreConnection']
    export const isSaleGenreConnection = (obj?: { __typename?: any } | null): obj is SaleGenreConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleGenreConnection"')
      return SaleGenreConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleGenreEdge_possibleTypes: string[] = ['SaleGenreEdge']
    export const isSaleGenreEdge = (obj?: { __typename?: any } | null): obj is SaleGenreEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleGenreEdge"')
      return SaleGenreEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleImageAssociation_possibleTypes: string[] = ['SaleImageAssociation']
    export const isSaleImageAssociation = (obj?: { __typename?: any } | null): obj is SaleImageAssociation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleImageAssociation"')
      return SaleImageAssociation_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItem_possibleTypes: string[] = ['SaleItem']
    export const isSaleItem = (obj?: { __typename?: any } | null): obj is SaleItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItem"')
      return SaleItem_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemClosingSchedule_possibleTypes: string[] = ['SaleItemClosingSchedule']
    export const isSaleItemClosingSchedule = (obj?: { __typename?: any } | null): obj is SaleItemClosingSchedule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemClosingSchedule"')
      return SaleItemClosingSchedule_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemImageAssociation_possibleTypes: string[] = ['SaleItemImageAssociation']
    export const isSaleItemImageAssociation = (obj?: { __typename?: any } | null): obj is SaleItemImageAssociation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemImageAssociation"')
      return SaleItemImageAssociation_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemLink_possibleTypes: string[] = ['SaleItemLink']
    export const isSaleItemLink = (obj?: { __typename?: any } | null): obj is SaleItemLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemLink"')
      return SaleItemLink_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemOrItem_possibleTypes: string[] = ['SaleItem','Item']
    export const isSaleItemOrItem = (obj?: { __typename?: any } | null): obj is SaleItemOrItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemOrItem"')
      return SaleItemOrItem_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemRegistration_possibleTypes: string[] = ['SaleItemRegistration']
    export const isSaleItemRegistration = (obj?: { __typename?: any } | null): obj is SaleItemRegistration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemRegistration"')
      return SaleItemRegistration_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemRegistrationEdge_possibleTypes: string[] = ['SaleItemRegistrationEdge']
    export const isSaleItemRegistrationEdge = (obj?: { __typename?: any } | null): obj is SaleItemRegistrationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemRegistrationEdge"')
      return SaleItemRegistrationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemRegistrationsConnection_possibleTypes: string[] = ['SaleItemRegistrationsConnection']
    export const isSaleItemRegistrationsConnection = (obj?: { __typename?: any } | null): obj is SaleItemRegistrationsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemRegistrationsConnection"')
      return SaleItemRegistrationsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemSlug_possibleTypes: string[] = ['SaleItemSlug']
    export const isSaleItemSlug = (obj?: { __typename?: any } | null): obj is SaleItemSlug => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemSlug"')
      return SaleItemSlug_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemWatchlistConnection_possibleTypes: string[] = ['SaleItemWatchlistConnection']
    export const isSaleItemWatchlistConnection = (obj?: { __typename?: any } | null): obj is SaleItemWatchlistConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemWatchlistConnection"')
      return SaleItemWatchlistConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemWatchlistEdge_possibleTypes: string[] = ['SaleItemWatchlistEdge']
    export const isSaleItemWatchlistEdge = (obj?: { __typename?: any } | null): obj is SaleItemWatchlistEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemWatchlistEdge"')
      return SaleItemWatchlistEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemWatchlistEntry_possibleTypes: string[] = ['SaleItemWatchlistEntry']
    export const isSaleItemWatchlistEntry = (obj?: { __typename?: any } | null): obj is SaleItemWatchlistEntry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemWatchlistEntry"')
      return SaleItemWatchlistEntry_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemsConnection_possibleTypes: string[] = ['SaleItemsConnection']
    export const isSaleItemsConnection = (obj?: { __typename?: any } | null): obj is SaleItemsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemsConnection"')
      return SaleItemsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleItemsEdge_possibleTypes: string[] = ['SaleItemsEdge']
    export const isSaleItemsEdge = (obj?: { __typename?: any } | null): obj is SaleItemsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItemsEdge"')
      return SaleItemsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleLiveStreamUpdate_possibleTypes: string[] = ['SaleLiveStreamUpdate']
    export const isSaleLiveStreamUpdate = (obj?: { __typename?: any } | null): obj is SaleLiveStreamUpdate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleLiveStreamUpdate"')
      return SaleLiveStreamUpdate_possibleTypes.includes(obj.__typename)
    }
    


    const SaleMetrics_possibleTypes: string[] = ['SaleMetrics']
    export const isSaleMetrics = (obj?: { __typename?: any } | null): obj is SaleMetrics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleMetrics"')
      return SaleMetrics_possibleTypes.includes(obj.__typename)
    }
    


    const SaleRegistration_possibleTypes: string[] = ['SaleRegistration']
    export const isSaleRegistration = (obj?: { __typename?: any } | null): obj is SaleRegistration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistration"')
      return SaleRegistration_possibleTypes.includes(obj.__typename)
    }
    


    const SaleRegistrationEdge_possibleTypes: string[] = ['SaleRegistrationEdge']
    export const isSaleRegistrationEdge = (obj?: { __typename?: any } | null): obj is SaleRegistrationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistrationEdge"')
      return SaleRegistrationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleRegistrationPoliciesConnection_possibleTypes: string[] = ['SaleRegistrationPoliciesConnection']
    export const isSaleRegistrationPoliciesConnection = (obj?: { __typename?: any } | null): obj is SaleRegistrationPoliciesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistrationPoliciesConnection"')
      return SaleRegistrationPoliciesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleRegistrationPolicy_possibleTypes: string[] = ['SaleRegistrationPolicy']
    export const isSaleRegistrationPolicy = (obj?: { __typename?: any } | null): obj is SaleRegistrationPolicy => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistrationPolicy"')
      return SaleRegistrationPolicy_possibleTypes.includes(obj.__typename)
    }
    


    const SaleRegistrationPolicyEdge_possibleTypes: string[] = ['SaleRegistrationPolicyEdge']
    export const isSaleRegistrationPolicyEdge = (obj?: { __typename?: any } | null): obj is SaleRegistrationPolicyEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistrationPolicyEdge"')
      return SaleRegistrationPolicyEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleRegistrationPolicyResult_possibleTypes: string[] = ['SaleRegistrationPolicyResult']
    export const isSaleRegistrationPolicyResult = (obj?: { __typename?: any } | null): obj is SaleRegistrationPolicyResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistrationPolicyResult"')
      return SaleRegistrationPolicyResult_possibleTypes.includes(obj.__typename)
    }
    


    const SaleRegistrationsConnection_possibleTypes: string[] = ['SaleRegistrationsConnection']
    export const isSaleRegistrationsConnection = (obj?: { __typename?: any } | null): obj is SaleRegistrationsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistrationsConnection"')
      return SaleRegistrationsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleSlug_possibleTypes: string[] = ['SaleSlug']
    export const isSaleSlug = (obj?: { __typename?: any } | null): obj is SaleSlug => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleSlug"')
      return SaleSlug_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatisticBidCounts_possibleTypes: string[] = ['SaleStatisticBidCounts']
    export const isSaleStatisticBidCounts = (obj?: { __typename?: any } | null): obj is SaleStatisticBidCounts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatisticBidCounts"')
      return SaleStatisticBidCounts_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatistics_possibleTypes: string[] = ['SaleStatistics']
    export const isSaleStatistics = (obj?: { __typename?: any } | null): obj is SaleStatistics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatistics"')
      return SaleStatistics_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsBidderEngagement_possibleTypes: string[] = ['SaleStatsBidderEngagement']
    export const isSaleStatsBidderEngagement = (obj?: { __typename?: any } | null): obj is SaleStatsBidderEngagement => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsBidderEngagement"')
      return SaleStatsBidderEngagement_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsClosingDayProfile_possibleTypes: string[] = ['SaleStatsClosingDayProfile']
    export const isSaleStatsClosingDayProfile = (obj?: { __typename?: any } | null): obj is SaleStatsClosingDayProfile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsClosingDayProfile"')
      return SaleStatsClosingDayProfile_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsClosingDayRow_possibleTypes: string[] = ['SaleStatsClosingDayRow']
    export const isSaleStatsClosingDayRow = (obj?: { __typename?: any } | null): obj is SaleStatsClosingDayRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsClosingDayRow"')
      return SaleStatsClosingDayRow_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsDataCoverage_possibleTypes: string[] = ['SaleStatsDataCoverage']
    export const isSaleStatsDataCoverage = (obj?: { __typename?: any } | null): obj is SaleStatsDataCoverage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsDataCoverage"')
      return SaleStatsDataCoverage_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsDistinctWinners_possibleTypes: string[] = ['SaleStatsDistinctWinners']
    export const isSaleStatsDistinctWinners = (obj?: { __typename?: any } | null): obj is SaleStatsDistinctWinners => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsDistinctWinners"')
      return SaleStatsDistinctWinners_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsDistinctWinnersRow_possibleTypes: string[] = ['SaleStatsDistinctWinnersRow']
    export const isSaleStatsDistinctWinnersRow = (obj?: { __typename?: any } | null): obj is SaleStatsDistinctWinnersRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsDistinctWinnersRow"')
      return SaleStatsDistinctWinnersRow_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsGmvPoint_possibleTypes: string[] = ['SaleStatsGmvPoint']
    export const isSaleStatsGmvPoint = (obj?: { __typename?: any } | null): obj is SaleStatsGmvPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsGmvPoint"')
      return SaleStatsGmvPoint_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsHammerVsEstimate_possibleTypes: string[] = ['SaleStatsHammerVsEstimate']
    export const isSaleStatsHammerVsEstimate = (obj?: { __typename?: any } | null): obj is SaleStatsHammerVsEstimate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsHammerVsEstimate"')
      return SaleStatsHammerVsEstimate_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsHammerVsEstimateRow_possibleTypes: string[] = ['SaleStatsHammerVsEstimateRow']
    export const isSaleStatsHammerVsEstimateRow = (obj?: { __typename?: any } | null): obj is SaleStatsHammerVsEstimateRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsHammerVsEstimateRow"')
      return SaleStatsHammerVsEstimateRow_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsLotOutcomeRow_possibleTypes: string[] = ['SaleStatsLotOutcomeRow']
    export const isSaleStatsLotOutcomeRow = (obj?: { __typename?: any } | null): obj is SaleStatsLotOutcomeRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsLotOutcomeRow"')
      return SaleStatsLotOutcomeRow_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsLotOutcomeSummary_possibleTypes: string[] = ['SaleStatsLotOutcomeSummary']
    export const isSaleStatsLotOutcomeSummary = (obj?: { __typename?: any } | null): obj is SaleStatsLotOutcomeSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsLotOutcomeSummary"')
      return SaleStatsLotOutcomeSummary_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsMomGmv_possibleTypes: string[] = ['SaleStatsMomGmv']
    export const isSaleStatsMomGmv = (obj?: { __typename?: any } | null): obj is SaleStatsMomGmv => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsMomGmv"')
      return SaleStatsMomGmv_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsMonthlyGmvPoint_possibleTypes: string[] = ['SaleStatsMonthlyGmvPoint']
    export const isSaleStatsMonthlyGmvPoint = (obj?: { __typename?: any } | null): obj is SaleStatsMonthlyGmvPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsMonthlyGmvPoint"')
      return SaleStatsMonthlyGmvPoint_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsSellThrough_possibleTypes: string[] = ['SaleStatsSellThrough']
    export const isSaleStatsSellThrough = (obj?: { __typename?: any } | null): obj is SaleStatsSellThrough => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsSellThrough"')
      return SaleStatsSellThrough_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsTopSaleRow_possibleTypes: string[] = ['SaleStatsTopSaleRow']
    export const isSaleStatsTopSaleRow = (obj?: { __typename?: any } | null): obj is SaleStatsTopSaleRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsTopSaleRow"')
      return SaleStatsTopSaleRow_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsTopSales_possibleTypes: string[] = ['SaleStatsTopSales']
    export const isSaleStatsTopSales = (obj?: { __typename?: any } | null): obj is SaleStatsTopSales => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsTopSales"')
      return SaleStatsTopSales_possibleTypes.includes(obj.__typename)
    }
    


    const SaleStatsYoyGmv_possibleTypes: string[] = ['SaleStatsYoyGmv']
    export const isSaleStatsYoyGmv = (obj?: { __typename?: any } | null): obj is SaleStatsYoyGmv => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleStatsYoyGmv"')
      return SaleStatsYoyGmv_possibleTypes.includes(obj.__typename)
    }
    


    const SaleV2_possibleTypes: string[] = ['DutchSale','Sale']
    export const isSaleV2 = (obj?: { __typename?: any } | null): obj is SaleV2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleV2"')
      return SaleV2_possibleTypes.includes(obj.__typename)
    }
    


    const SaleV2Connection_possibleTypes: string[] = ['SaleV2Connection']
    export const isSaleV2Connection = (obj?: { __typename?: any } | null): obj is SaleV2Connection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleV2Connection"')
      return SaleV2Connection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleV2Edge_possibleTypes: string[] = ['SaleV2Edge']
    export const isSaleV2Edge = (obj?: { __typename?: any } | null): obj is SaleV2Edge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleV2Edge"')
      return SaleV2Edge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleWatchlistConnection_possibleTypes: string[] = ['SaleWatchlistConnection']
    export const isSaleWatchlistConnection = (obj?: { __typename?: any } | null): obj is SaleWatchlistConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleWatchlistConnection"')
      return SaleWatchlistConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SaleWatchlistEdge_possibleTypes: string[] = ['SaleWatchlistEdge']
    export const isSaleWatchlistEdge = (obj?: { __typename?: any } | null): obj is SaleWatchlistEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleWatchlistEdge"')
      return SaleWatchlistEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SaleWatchlistEntry_possibleTypes: string[] = ['SaleWatchlistEntry']
    export const isSaleWatchlistEntry = (obj?: { __typename?: any } | null): obj is SaleWatchlistEntry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleWatchlistEntry"')
      return SaleWatchlistEntry_possibleTypes.includes(obj.__typename)
    }
    


    const SalesAggregate_possibleTypes: string[] = ['SalesAggregate']
    export const isSalesAggregate = (obj?: { __typename?: any } | null): obj is SalesAggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSalesAggregate"')
      return SalesAggregate_possibleTypes.includes(obj.__typename)
    }
    


    const SalesEdge_possibleTypes: string[] = ['SalesEdge']
    export const isSalesEdge = (obj?: { __typename?: any } | null): obj is SalesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSalesEdge"')
      return SalesEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledNotificationConfiguration_possibleTypes: string[] = ['ScheduledNotificationConfiguration']
    export const isScheduledNotificationConfiguration = (obj?: { __typename?: any } | null): obj is ScheduledNotificationConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledNotificationConfiguration"')
      return ScheduledNotificationConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const SchemaNamespace_possibleTypes: string[] = ['SchemaNamespace']
    export const isSchemaNamespace = (obj?: { __typename?: any } | null): obj is SchemaNamespace => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSchemaNamespace"')
      return SchemaNamespace_possibleTypes.includes(obj.__typename)
    }
    


    const SearchKey_possibleTypes: string[] = ['SearchKey']
    export const isSearchKey = (obj?: { __typename?: any } | null): obj is SearchKey => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchKey"')
      return SearchKey_possibleTypes.includes(obj.__typename)
    }
    


    const SearchPageInfo_possibleTypes: string[] = ['SearchPageInfo']
    export const isSearchPageInfo = (obj?: { __typename?: any } | null): obj is SearchPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchPageInfo"')
      return SearchPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const SearchResultConnection_possibleTypes: string[] = ['SearchResultConnection']
    export const isSearchResultConnection = (obj?: { __typename?: any } | null): obj is SearchResultConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchResultConnection"')
      return SearchResultConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SearchResultEdge_possibleTypes: string[] = ['SearchResultEdge']
    export const isSearchResultEdge = (obj?: { __typename?: any } | null): obj is SearchResultEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchResultEdge"')
      return SearchResultEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SearchResultItem_possibleTypes: string[] = ['User','SaleRegistration','SaleItem','SaleBanner','Item','Offer','Image','Video','Document','Activity']
    export const isSearchResultItem = (obj?: { __typename?: any } | null): obj is SearchResultItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchResultItem"')
      return SearchResultItem_possibleTypes.includes(obj.__typename)
    }
    


    const SectionMarker_possibleTypes: string[] = ['SectionMarker']
    export const isSectionMarker = (obj?: { __typename?: any } | null): obj is SectionMarker => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSectionMarker"')
      return SectionMarker_possibleTypes.includes(obj.__typename)
    }
    


    const SellLiveItemToBidError_possibleTypes: string[] = ['SellLiveItemToBidError']
    export const isSellLiveItemToBidError = (obj?: { __typename?: any } | null): obj is SellLiveItemToBidError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellLiveItemToBidError"')
      return SellLiveItemToBidError_possibleTypes.includes(obj.__typename)
    }
    


    const SellLiveItemToBidResult_possibleTypes: string[] = ['SellLiveItemToBidSuccess','SellLiveItemToBidError']
    export const isSellLiveItemToBidResult = (obj?: { __typename?: any } | null): obj is SellLiveItemToBidResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellLiveItemToBidResult"')
      return SellLiveItemToBidResult_possibleTypes.includes(obj.__typename)
    }
    


    const SellLiveItemToBidSuccess_possibleTypes: string[] = ['SellLiveItemToBidSuccess']
    export const isSellLiveItemToBidSuccess = (obj?: { __typename?: any } | null): obj is SellLiveItemToBidSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellLiveItemToBidSuccess"')
      return SellLiveItemToBidSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const SellerTerms_possibleTypes: string[] = ['SellerTerms']
    export const isSellerTerms = (obj?: { __typename?: any } | null): obj is SellerTerms => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellerTerms"')
      return SellerTerms_possibleTypes.includes(obj.__typename)
    }
    


    const SendGridNotificationIntegration_possibleTypes: string[] = ['SendGridNotificationIntegration']
    export const isSendGridNotificationIntegration = (obj?: { __typename?: any } | null): obj is SendGridNotificationIntegration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSendGridNotificationIntegration"')
      return SendGridNotificationIntegration_possibleTypes.includes(obj.__typename)
    }
    


    const ShopifyConfiguration_possibleTypes: string[] = ['ShopifyConfiguration']
    export const isShopifyConfiguration = (obj?: { __typename?: any } | null): obj is ShopifyConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopifyConfiguration"')
      return ShopifyConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const ShopifyConnection_possibleTypes: string[] = ['ShopifyConnection']
    export const isShopifyConnection = (obj?: { __typename?: any } | null): obj is ShopifyConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopifyConnection"')
      return ShopifyConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Site_possibleTypes: string[] = ['Site']
    export const isSite = (obj?: { __typename?: any } | null): obj is Site => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSite"')
      return Site_possibleTypes.includes(obj.__typename)
    }
    


    const SiteConnection_possibleTypes: string[] = ['SiteConnection']
    export const isSiteConnection = (obj?: { __typename?: any } | null): obj is SiteConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSiteConnection"')
      return SiteConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SiteEdge_possibleTypes: string[] = ['SiteEdge']
    export const isSiteEdge = (obj?: { __typename?: any } | null): obj is SiteEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSiteEdge"')
      return SiteEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StaggeredSaleItemScheduleConfiguration_possibleTypes: string[] = ['StaggeredSaleItemScheduleConfiguration']
    export const isStaggeredSaleItemScheduleConfiguration = (obj?: { __typename?: any } | null): obj is StaggeredSaleItemScheduleConfiguration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStaggeredSaleItemScheduleConfiguration"')
      return StaggeredSaleItemScheduleConfiguration_possibleTypes.includes(obj.__typename)
    }
    


    const StripePaymentProviderSession_possibleTypes: string[] = ['StripePaymentProviderSession']
    export const isStripePaymentProviderSession = (obj?: { __typename?: any } | null): obj is StripePaymentProviderSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStripePaymentProviderSession"')
      return StripePaymentProviderSession_possibleTypes.includes(obj.__typename)
    }
    


    const Subscription_possibleTypes: string[] = ['Subscription']
    export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
      return Subscription_possibleTypes.includes(obj.__typename)
    }
    


    const Tag_possibleTypes: string[] = ['Tag']
    export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTag"')
      return Tag_possibleTypes.includes(obj.__typename)
    }
    


    const TestActionHookResponse_possibleTypes: string[] = ['TestActionHookResponse']
    export const isTestActionHookResponse = (obj?: { __typename?: any } | null): obj is TestActionHookResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestActionHookResponse"')
      return TestActionHookResponse_possibleTypes.includes(obj.__typename)
    }
    


    const TrustLevelInfo_possibleTypes: string[] = ['TrustLevelInfo']
    export const isTrustLevelInfo = (obj?: { __typename?: any } | null): obj is TrustLevelInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTrustLevelInfo"')
      return TrustLevelInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TwilioNotificationIntegration_possibleTypes: string[] = ['TwilioNotificationIntegration']
    export const isTwilioNotificationIntegration = (obj?: { __typename?: any } | null): obj is TwilioNotificationIntegration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTwilioNotificationIntegration"')
      return TwilioNotificationIntegration_possibleTypes.includes(obj.__typename)
    }
    


    const UploadUrl_possibleTypes: string[] = ['UploadUrl']
    export const isUploadUrl = (obj?: { __typename?: any } | null): obj is UploadUrl => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUploadUrl"')
      return UploadUrl_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserAddress_possibleTypes: string[] = ['UserAddress']
    export const isUserAddress = (obj?: { __typename?: any } | null): obj is UserAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserAddress"')
      return UserAddress_possibleTypes.includes(obj.__typename)
    }
    


    const UserBidActivity_possibleTypes: string[] = ['UserBidActivity']
    export const isUserBidActivity = (obj?: { __typename?: any } | null): obj is UserBidActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBidActivity"')
      return UserBidActivity_possibleTypes.includes(obj.__typename)
    }
    


    const UserBidActivityConnection_possibleTypes: string[] = ['UserBidActivityConnection']
    export const isUserBidActivityConnection = (obj?: { __typename?: any } | null): obj is UserBidActivityConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBidActivityConnection"')
      return UserBidActivityConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserBidActivityEdge_possibleTypes: string[] = ['UserBidActivityEdge']
    export const isUserBidActivityEdge = (obj?: { __typename?: any } | null): obj is UserBidActivityEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserBidActivityEdge"')
      return UserBidActivityEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserEdge_possibleTypes: string[] = ['UserEdge']
    export const isUserEdge = (obj?: { __typename?: any } | null): obj is UserEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserEdge"')
      return UserEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserIdVerificationStatus_possibleTypes: string[] = ['UserIdVerificationStatus']
    export const isUserIdVerificationStatus = (obj?: { __typename?: any } | null): obj is UserIdVerificationStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserIdVerificationStatus"')
      return UserIdVerificationStatus_possibleTypes.includes(obj.__typename)
    }
    


    const UserInfo_possibleTypes: string[] = ['UserInfo']
    export const isUserInfo = (obj?: { __typename?: any } | null): obj is UserInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserInfo"')
      return UserInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserNotificationPreference_possibleTypes: string[] = ['UserNotificationPreference']
    export const isUserNotificationPreference = (obj?: { __typename?: any } | null): obj is UserNotificationPreference => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserNotificationPreference"')
      return UserNotificationPreference_possibleTypes.includes(obj.__typename)
    }
    


    const UserNotificationSettings_possibleTypes: string[] = ['UserNotificationSettings']
    export const isUserNotificationSettings = (obj?: { __typename?: any } | null): obj is UserNotificationSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserNotificationSettings"')
      return UserNotificationSettings_possibleTypes.includes(obj.__typename)
    }
    


    const UserPaymentProviderDetails_possibleTypes: string[] = ['UserStripePaymentProviderDetails']
    export const isUserPaymentProviderDetails = (obj?: { __typename?: any } | null): obj is UserPaymentProviderDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPaymentProviderDetails"')
      return UserPaymentProviderDetails_possibleTypes.includes(obj.__typename)
    }
    


    const UserPaymentProviderSession_possibleTypes: string[] = ['UserStripePaymentProviderSession']
    export const isUserPaymentProviderSession = (obj?: { __typename?: any } | null): obj is UserPaymentProviderSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserPaymentProviderSession"')
      return UserPaymentProviderSession_possibleTypes.includes(obj.__typename)
    }
    


    const UserStripePaymentProviderDetails_possibleTypes: string[] = ['UserStripePaymentProviderDetails']
    export const isUserStripePaymentProviderDetails = (obj?: { __typename?: any } | null): obj is UserStripePaymentProviderDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStripePaymentProviderDetails"')
      return UserStripePaymentProviderDetails_possibleTypes.includes(obj.__typename)
    }
    


    const UserStripePaymentProviderSession_possibleTypes: string[] = ['UserStripePaymentProviderSession']
    export const isUserStripePaymentProviderSession = (obj?: { __typename?: any } | null): obj is UserStripePaymentProviderSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserStripePaymentProviderSession"')
      return UserStripePaymentProviderSession_possibleTypes.includes(obj.__typename)
    }
    


    const UserToken_possibleTypes: string[] = ['UserToken']
    export const isUserToken = (obj?: { __typename?: any } | null): obj is UserToken => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToken"')
      return UserToken_possibleTypes.includes(obj.__typename)
    }
    


    const UsersConnection_possibleTypes: string[] = ['UsersConnection']
    export const isUsersConnection = (obj?: { __typename?: any } | null): obj is UsersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsersConnection"')
      return UsersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Video_possibleTypes: string[] = ['Video']
    export const isVideo = (obj?: { __typename?: any } | null): obj is Video => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVideo"')
      return Video_possibleTypes.includes(obj.__typename)
    }
    


    const WorkflowDimensionOffset_possibleTypes: string[] = ['WorkflowDimensionOffset']
    export const isWorkflowDimensionOffset = (obj?: { __typename?: any } | null): obj is WorkflowDimensionOffset => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorkflowDimensionOffset"')
      return WorkflowDimensionOffset_possibleTypes.includes(obj.__typename)
    }
    


    const WorkflowScheduleDate_possibleTypes: string[] = ['WorkflowScheduleDate']
    export const isWorkflowScheduleDate = (obj?: { __typename?: any } | null): obj is WorkflowScheduleDate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorkflowScheduleDate"')
      return WorkflowScheduleDate_possibleTypes.includes(obj.__typename)
    }
    


    const WorkflowScheduleOffsets_possibleTypes: string[] = ['WorkflowScheduleOffsets']
    export const isWorkflowScheduleOffsets = (obj?: { __typename?: any } | null): obj is WorkflowScheduleOffsets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorkflowScheduleOffsets"')
      return WorkflowScheduleOffsets_possibleTypes.includes(obj.__typename)
    }
    


    const WorkflowScheduleRow_possibleTypes: string[] = ['WorkflowScheduleRow']
    export const isWorkflowScheduleRow = (obj?: { __typename?: any } | null): obj is WorkflowScheduleRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorkflowScheduleRow"')
      return WorkflowScheduleRow_possibleTypes.includes(obj.__typename)
    }
    

export const enumAccountFeeType = {
   NOT_SET: 'NOT_SET' as const,
   PERCENTAGE: 'PERCENTAGE' as const,
   AMOUNT: 'AMOUNT' as const
}

export const enumActionHookStatus = {
   PENDING: 'PENDING' as const,
   SUCCESS: 'SUCCESS' as const,
   FAILED: 'FAILED' as const,
   RETRY: 'RETRY' as const
}

export const enumActionType = {
   BID_ON_ITEM: 'BID_ON_ITEM' as const,
   ITEMS_STATUS_CHANGED: 'ITEMS_STATUS_CHANGED' as const,
   SALE_STATUS_CHANGED: 'SALE_STATUS_CHANGED' as const,
   SALE_CREATED: 'SALE_CREATED' as const,
   ITEM_ADDED_TO_SALE: 'ITEM_ADDED_TO_SALE' as const,
   SALE_ITEM_UPDATED: 'SALE_ITEM_UPDATED' as const,
   SALE_ITEM_REMOVED: 'SALE_ITEM_REMOVED' as const,
   CANCEL_BID_ON_ITEM: 'CANCEL_BID_ON_ITEM' as const,
   ORDER_CREATED: 'ORDER_CREATED' as const,
   ORDER_UPDATED: 'ORDER_UPDATED' as const,
   ORDER_CANCELLED: 'ORDER_CANCELLED' as const,
   SALE_UPDATED: 'SALE_UPDATED' as const,
   SALE_REGISTRATION_CREATED: 'SALE_REGISTRATION_CREATED' as const,
   SALE_REGISTRATION_UPDATED: 'SALE_REGISTRATION_UPDATED' as const,
   SALE_REGISTRATION_DELETED: 'SALE_REGISTRATION_DELETED' as const,
   SALE_ITEM_REGISTRATION_CREATED: 'SALE_ITEM_REGISTRATION_CREATED' as const,
   SALE_ITEM_REGISTRATION_DELETED: 'SALE_ITEM_REGISTRATION_DELETED' as const,
   USER_CREATED: 'USER_CREATED' as const,
   USER_UPDATED: 'USER_UPDATED' as const,
   SALE_ITEM_WATCHLIST_ENTRY_CREATED: 'SALE_ITEM_WATCHLIST_ENTRY_CREATED' as const,
   SALE_ITEM_WATCHLIST_ENTRY_DELETED: 'SALE_ITEM_WATCHLIST_ENTRY_DELETED' as const,
   SALE_WATCHLIST_ENTRY_CREATED: 'SALE_WATCHLIST_ENTRY_CREATED' as const,
   SALE_WATCHLIST_ENTRY_DELETED: 'SALE_WATCHLIST_ENTRY_DELETED' as const,
   BID_USER_ID_CHANGED: 'BID_USER_ID_CHANGED' as const,
   MARKETPLACE_ORDER_PLACED: 'MARKETPLACE_ORDER_PLACED' as const,
   MARKETPLACE_ORDER_STATE_CHANGED: 'MARKETPLACE_ORDER_STATE_CHANGED' as const,
   MARKETPLACE_ORDER_CANCELLED: 'MARKETPLACE_ORDER_CANCELLED' as const,
   MARKETPLACE_PRODUCT_CREATED: 'MARKETPLACE_PRODUCT_CREATED' as const,
   MARKETPLACE_PRODUCT_UPDATED: 'MARKETPLACE_PRODUCT_UPDATED' as const,
   MARKETPLACE_PRODUCT_DELETED: 'MARKETPLACE_PRODUCT_DELETED' as const,
   MARKETPLACE_PRODUCT_VARIANT_CREATED: 'MARKETPLACE_PRODUCT_VARIANT_CREATED' as const,
   MARKETPLACE_PRODUCT_VARIANT_UPDATED: 'MARKETPLACE_PRODUCT_VARIANT_UPDATED' as const,
   MARKETPLACE_PRODUCT_VARIANT_DELETED: 'MARKETPLACE_PRODUCT_VARIANT_DELETED' as const,
   DUTCH_SALE_CREATED: 'DUTCH_SALE_CREATED' as const,
   DUTCH_ITEM_CREATED: 'DUTCH_ITEM_CREATED' as const,
   DUTCH_ITEM_UPDATED: 'DUTCH_ITEM_UPDATED' as const,
   DUTCH_ITEM_STATUS_CHANGED: 'DUTCH_ITEM_STATUS_CHANGED' as const,
   DUTCH_BID_PLACED: 'DUTCH_BID_PLACED' as const
}

export const enumAddressType = {
   BILLING: 'BILLING' as const,
   SHIPPING: 'SHIPPING' as const,
   OTHER: 'OTHER' as const
}

export const enumAmlRiskClass = {
   LOW: 'LOW' as const,
   HIGH: 'HIGH' as const
}

export const enumApiKeyRole = {
   ADMIN: 'ADMIN' as const,
   READ: 'READ' as const
}

export const enumApiTokenRole = {
   ADMIN: 'ADMIN' as const,
   READ: 'READ' as const
}

export const enumAuctionSymbolType = {
   ARR: 'ARR' as const,
   VAT: 'VAT' as const,
   CITES: 'CITES' as const
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
   BID_AMOUNT_UPPER_LIMIT_REACHED: 'BID_AMOUNT_UPPER_LIMIT_REACHED' as const
}

export const enumBidOrderByField = {
   BID_DATE: 'BID_DATE' as const
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
   SUBMITTED: 'SUBMITTED' as const,
   WITHDRAWN: 'WITHDRAWN' as const
}

export const enumBidType = {
   NORMAL: 'NORMAL' as const,
   MAX: 'MAX' as const,
   OFFER: 'OFFER' as const
}

export const enumChargeBandType = {
   PERCENTAGE: 'PERCENTAGE' as const,
   AMOUNT: 'AMOUNT' as const
}

export const enumChargeBasedOn = {
   HAMMER: 'HAMMER' as const,
   LOW_ESTIMATE: 'LOW_ESTIMATE' as const
}

export const enumChargeCalculationType = {
   FLAT: 'FLAT' as const,
   PROGRESSIVE: 'PROGRESSIVE' as const
}

export const enumChargeFrequency = {
   FIRST_TIME: 'FIRST_TIME' as const,
   ALWAYS: 'ALWAYS' as const
}

export const enumChargeOutcome = {
   ITEM_WON: 'ITEM_WON' as const,
   ITEM_LOST: 'ITEM_LOST' as const,
   ANY: 'ANY' as const
}

export const enumChargeScopeType = {
   SALE_ITEM: 'SALE_ITEM' as const,
   CONSIGNMENT: 'CONSIGNMENT' as const,
   USER: 'USER' as const,
   ITEM_TYPE: 'ITEM_TYPE' as const,
   SALE_GENRE: 'SALE_GENRE' as const,
   ACCOUNT: 'ACCOUNT' as const
}

export const enumChargeStatus = {
   ENABLED: 'ENABLED' as const,
   DISABLED: 'DISABLED' as const
}

export const enumClientPermission = {
   BID_ON_ITEM: 'BID_ON_ITEM' as const,
   ACCESS_PRIVATE: 'ACCESS_PRIVATE' as const
}

export const enumClosingMethod = {
   ONE_BY_ONE: 'ONE_BY_ONE' as const,
   OVERLAPPING: 'OVERLAPPING' as const,
   NONE: 'NONE' as const
}

export const enumConsignmentFeeCalculationType = {
   NOT_SET: 'NOT_SET' as const,
   FLAT: 'FLAT' as const,
   PROGRESSIVE: 'PROGRESSIVE' as const
}

export const enumConsignmentFeeType = {
   NOT_SET: 'NOT_SET' as const,
   PERCENTAGE: 'PERCENTAGE' as const,
   AMOUNT: 'AMOUNT' as const
}

export const enumContentDiffStatus = {
   ONLY_ON_ITEM: 'ONLY_ON_ITEM' as const,
   ONLY_ON_TARGET: 'ONLY_ON_TARGET' as const,
   CHANGED: 'CHANGED' as const
}

export const enumContentDiffTargetKind = {
   SALE_ITEM: 'SALE_ITEM' as const,
   PRODUCT_VARIANT: 'PRODUCT_VARIANT' as const
}

export const enumContentSyncDirection = {
   PROMOTE_TO_ITEM: 'PROMOTE_TO_ITEM' as const,
   REFRESH_FROM_ITEM: 'REFRESH_FROM_ITEM' as const
}

export const enumCountry = {
   AF: 'AF' as const,
   AL: 'AL' as const,
   AQ: 'AQ' as const,
   DZ: 'DZ' as const,
   AS: 'AS' as const,
   AD: 'AD' as const,
   AO: 'AO' as const,
   AG: 'AG' as const,
   AZ: 'AZ' as const,
   AR: 'AR' as const,
   AU: 'AU' as const,
   AT: 'AT' as const,
   BS: 'BS' as const,
   BH: 'BH' as const,
   BD: 'BD' as const,
   AM: 'AM' as const,
   BB: 'BB' as const,
   BE: 'BE' as const,
   BM: 'BM' as const,
   BT: 'BT' as const,
   BO: 'BO' as const,
   BA: 'BA' as const,
   BW: 'BW' as const,
   BV: 'BV' as const,
   BR: 'BR' as const,
   BZ: 'BZ' as const,
   IO: 'IO' as const,
   SB: 'SB' as const,
   VG: 'VG' as const,
   BN: 'BN' as const,
   BG: 'BG' as const,
   MM: 'MM' as const,
   BI: 'BI' as const,
   BY: 'BY' as const,
   KH: 'KH' as const,
   CM: 'CM' as const,
   CA: 'CA' as const,
   CV: 'CV' as const,
   KY: 'KY' as const,
   CF: 'CF' as const,
   LK: 'LK' as const,
   TD: 'TD' as const,
   CL: 'CL' as const,
   CN: 'CN' as const,
   TW: 'TW' as const,
   CX: 'CX' as const,
   CC: 'CC' as const,
   CO: 'CO' as const,
   KM: 'KM' as const,
   YT: 'YT' as const,
   CG: 'CG' as const,
   CD: 'CD' as const,
   CK: 'CK' as const,
   CR: 'CR' as const,
   HR: 'HR' as const,
   CU: 'CU' as const,
   CY: 'CY' as const,
   CZ: 'CZ' as const,
   BJ: 'BJ' as const,
   DK: 'DK' as const,
   DM: 'DM' as const,
   DO: 'DO' as const,
   EC: 'EC' as const,
   SV: 'SV' as const,
   GQ: 'GQ' as const,
   ET: 'ET' as const,
   ER: 'ER' as const,
   EE: 'EE' as const,
   FO: 'FO' as const,
   FK: 'FK' as const,
   GS: 'GS' as const,
   FJ: 'FJ' as const,
   FI: 'FI' as const,
   AX: 'AX' as const,
   FR: 'FR' as const,
   GF: 'GF' as const,
   PF: 'PF' as const,
   TF: 'TF' as const,
   DJ: 'DJ' as const,
   GA: 'GA' as const,
   GE: 'GE' as const,
   GM: 'GM' as const,
   PS: 'PS' as const,
   DE: 'DE' as const,
   GH: 'GH' as const,
   GI: 'GI' as const,
   KI: 'KI' as const,
   GR: 'GR' as const,
   GL: 'GL' as const,
   GD: 'GD' as const,
   GP: 'GP' as const,
   GU: 'GU' as const,
   GT: 'GT' as const,
   GN: 'GN' as const,
   GY: 'GY' as const,
   HT: 'HT' as const,
   HM: 'HM' as const,
   VA: 'VA' as const,
   HN: 'HN' as const,
   HK: 'HK' as const,
   HU: 'HU' as const,
   IS: 'IS' as const,
   IN: 'IN' as const,
   ID: 'ID' as const,
   IR: 'IR' as const,
   IQ: 'IQ' as const,
   IE: 'IE' as const,
   IL: 'IL' as const,
   IT: 'IT' as const,
   CI: 'CI' as const,
   JM: 'JM' as const,
   JP: 'JP' as const,
   KZ: 'KZ' as const,
   JO: 'JO' as const,
   KE: 'KE' as const,
   KP: 'KP' as const,
   KR: 'KR' as const,
   KW: 'KW' as const,
   KG: 'KG' as const,
   LA: 'LA' as const,
   LB: 'LB' as const,
   LS: 'LS' as const,
   LV: 'LV' as const,
   LR: 'LR' as const,
   LY: 'LY' as const,
   LI: 'LI' as const,
   LT: 'LT' as const,
   LU: 'LU' as const,
   MO: 'MO' as const,
   MG: 'MG' as const,
   MW: 'MW' as const,
   MY: 'MY' as const,
   MV: 'MV' as const,
   ML: 'ML' as const,
   MT: 'MT' as const,
   MQ: 'MQ' as const,
   MR: 'MR' as const,
   MU: 'MU' as const,
   MX: 'MX' as const,
   MC: 'MC' as const,
   MN: 'MN' as const,
   MD: 'MD' as const,
   ME: 'ME' as const,
   MS: 'MS' as const,
   MA: 'MA' as const,
   MZ: 'MZ' as const,
   OM: 'OM' as const,
   NA: 'NA' as const,
   NR: 'NR' as const,
   NP: 'NP' as const,
   NL: 'NL' as const,
   CW: 'CW' as const,
   AW: 'AW' as const,
   SX: 'SX' as const,
   BQ: 'BQ' as const,
   NC: 'NC' as const,
   VU: 'VU' as const,
   NZ: 'NZ' as const,
   NI: 'NI' as const,
   NE: 'NE' as const,
   NG: 'NG' as const,
   NU: 'NU' as const,
   NF: 'NF' as const,
   NO: 'NO' as const,
   MP: 'MP' as const,
   UM: 'UM' as const,
   FM: 'FM' as const,
   MH: 'MH' as const,
   PW: 'PW' as const,
   PK: 'PK' as const,
   PA: 'PA' as const,
   PG: 'PG' as const,
   PY: 'PY' as const,
   PE: 'PE' as const,
   PH: 'PH' as const,
   PN: 'PN' as const,
   PL: 'PL' as const,
   PT: 'PT' as const,
   GW: 'GW' as const,
   TL: 'TL' as const,
   PR: 'PR' as const,
   QA: 'QA' as const,
   RE: 'RE' as const,
   RO: 'RO' as const,
   RU: 'RU' as const,
   RW: 'RW' as const,
   BL: 'BL' as const,
   SH: 'SH' as const,
   KN: 'KN' as const,
   AI: 'AI' as const,
   LC: 'LC' as const,
   MF: 'MF' as const,
   PM: 'PM' as const,
   VC: 'VC' as const,
   SM: 'SM' as const,
   ST: 'ST' as const,
   SA: 'SA' as const,
   SN: 'SN' as const,
   RS: 'RS' as const,
   SC: 'SC' as const,
   SL: 'SL' as const,
   SG: 'SG' as const,
   SK: 'SK' as const,
   VN: 'VN' as const,
   SI: 'SI' as const,
   SO: 'SO' as const,
   ZA: 'ZA' as const,
   ZW: 'ZW' as const,
   ES: 'ES' as const,
   SS: 'SS' as const,
   SD: 'SD' as const,
   EH: 'EH' as const,
   SR: 'SR' as const,
   SJ: 'SJ' as const,
   SZ: 'SZ' as const,
   SE: 'SE' as const,
   CH: 'CH' as const,
   SY: 'SY' as const,
   TJ: 'TJ' as const,
   TH: 'TH' as const,
   TG: 'TG' as const,
   TK: 'TK' as const,
   TO: 'TO' as const,
   TT: 'TT' as const,
   AE: 'AE' as const,
   TN: 'TN' as const,
   TR: 'TR' as const,
   TM: 'TM' as const,
   TC: 'TC' as const,
   TV: 'TV' as const,
   UG: 'UG' as const,
   UA: 'UA' as const,
   MK: 'MK' as const,
   EG: 'EG' as const,
   GB: 'GB' as const,
   GG: 'GG' as const,
   JE: 'JE' as const,
   IM: 'IM' as const,
   TZ: 'TZ' as const,
   US: 'US' as const,
   VI: 'VI' as const,
   BF: 'BF' as const,
   UY: 'UY' as const,
   UZ: 'UZ' as const,
   VE: 'VE' as const,
   WF: 'WF' as const,
   WS: 'WS' as const,
   YE: 'YE' as const,
   ZM: 'ZM' as const
}

export const enumCreatorType = {
   ARTIST: 'ARTIST' as const,
   PHOTOGRAPHER: 'PHOTOGRAPHER' as const,
   SCULPTOR: 'SCULPTOR' as const,
   POTTER: 'POTTER' as const,
   JEWELER: 'JEWELER' as const,
   TEXTILE_ARTIST: 'TEXTILE_ARTIST' as const,
   GLASS_ARTIST: 'GLASS_ARTIST' as const,
   FURNITURE_DESIGNER: 'FURNITURE_DESIGNER' as const,
   MANUFACTURER: 'MANUFACTURER' as const
}

export const enumCurrency = {
   USD: 'USD' as const,
   ISK: 'ISK' as const,
   EUR: 'EUR' as const,
   GBP: 'GBP' as const,
   AUD: 'AUD' as const,
   SEK: 'SEK' as const,
   NOK: 'NOK' as const,
   DKK: 'DKK' as const,
   CHF: 'CHF' as const,
   CAD: 'CAD' as const,
   JPY: 'JPY' as const,
   HKD: 'HKD' as const,
   AED: 'AED' as const
}

export const enumDashboardUserRole = {
   OWNER: 'OWNER' as const,
   ADMIN: 'ADMIN' as const,
   MANAGER: 'MANAGER' as const,
   CATALOGUER: 'CATALOGUER' as const,
   CLIENT_SERVICES: 'CLIENT_SERVICES' as const,
   VIEWER: 'VIEWER' as const
}

export const enumDirectSellSource = {
   OFFER: 'OFFER' as const,
   BUY: 'BUY' as const
}

export const enumDutchItemStatus = {
   NOT_OPEN: 'NOT_OPEN' as const,
   OPEN: 'OPEN' as const,
   CLOSED: 'CLOSED' as const
}

export const enumDutchPricingMode = {
   UNIFORM_CLEARING: 'UNIFORM_CLEARING' as const
}

export const enumFeeCalculationType = {
   FLAT: 'FLAT' as const,
   PROGRESSIVE: 'PROGRESSIVE' as const
}

export const enumFeeRuleSource = {
   ACCOUNT: 'ACCOUNT' as const,
   SALE: 'SALE' as const,
   ITEM: 'ITEM' as const
}

export const enumFeeRuleType = {
   NOT_SET: 'NOT_SET' as const,
   PERCENTAGE: 'PERCENTAGE' as const,
   AMOUNT: 'AMOUNT' as const
}

export const enumImageIdType = {
   ID: 'ID' as const,
   EXTERNAL_ID: 'EXTERNAL_ID' as const
}

export const enumImageType = {
   ACCOUNT: 'ACCOUNT' as const,
   SALE: 'SALE' as const,
   ITEM: 'ITEM' as const,
   SALE_ITEM: 'SALE_ITEM' as const,
   PRODUCT: 'PRODUCT' as const,
   PRODUCT_VARIANT: 'PRODUCT_VARIANT' as const,
   COLLECTION: 'COLLECTION' as const
}

export const enumItemOrderField = {
   ITEM_NUMBER: 'ITEM_NUMBER' as const,
   CREATED: 'CREATED' as const
}

export const enumItemResult = {
   NOT_SET: 'NOT_SET' as const,
   WON: 'WON' as const,
   WON_UNDER_THE_RESERVE: 'WON_UNDER_THE_RESERVE' as const,
   PASSED_OVER_THE_RESERVE: 'PASSED_OVER_THE_RESERVE' as const,
   PASSED: 'PASSED' as const
}

export const enumItemStatus = {
   ITEM_NOT_OPEN: 'ITEM_NOT_OPEN' as const,
   ITEM_OPEN: 'ITEM_OPEN' as const,
   ITEM_CLOSING: 'ITEM_CLOSING' as const,
   ITEM_PROCESSING: 'ITEM_PROCESSING' as const,
   ITEM_CLOSED: 'ITEM_CLOSED' as const,
   ITEM_PAUSED: 'ITEM_PAUSED' as const,
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

export const enumMarketplaceCurrencyCode = {
   AED: 'AED' as const,
   AFN: 'AFN' as const,
   ALL: 'ALL' as const,
   AMD: 'AMD' as const,
   ANG: 'ANG' as const,
   AOA: 'AOA' as const,
   ARS: 'ARS' as const,
   AUD: 'AUD' as const,
   AWG: 'AWG' as const,
   AZN: 'AZN' as const,
   BAM: 'BAM' as const,
   BBD: 'BBD' as const,
   BDT: 'BDT' as const,
   BGN: 'BGN' as const,
   BHD: 'BHD' as const,
   BIF: 'BIF' as const,
   BMD: 'BMD' as const,
   BND: 'BND' as const,
   BOB: 'BOB' as const,
   BRL: 'BRL' as const,
   BSD: 'BSD' as const,
   BTN: 'BTN' as const,
   BWP: 'BWP' as const,
   BYN: 'BYN' as const,
   BZD: 'BZD' as const,
   CAD: 'CAD' as const,
   CDF: 'CDF' as const,
   CHF: 'CHF' as const,
   CLP: 'CLP' as const,
   CNY: 'CNY' as const,
   COP: 'COP' as const,
   CRC: 'CRC' as const,
   CUC: 'CUC' as const,
   CUP: 'CUP' as const,
   CVE: 'CVE' as const,
   CZK: 'CZK' as const,
   DJF: 'DJF' as const,
   DKK: 'DKK' as const,
   DOP: 'DOP' as const,
   DZD: 'DZD' as const,
   EGP: 'EGP' as const,
   ERN: 'ERN' as const,
   ETB: 'ETB' as const,
   EUR: 'EUR' as const,
   FJD: 'FJD' as const,
   FKP: 'FKP' as const,
   GBP: 'GBP' as const,
   GEL: 'GEL' as const,
   GHS: 'GHS' as const,
   GIP: 'GIP' as const,
   GMD: 'GMD' as const,
   GNF: 'GNF' as const,
   GTQ: 'GTQ' as const,
   GYD: 'GYD' as const,
   HKD: 'HKD' as const,
   HNL: 'HNL' as const,
   HRK: 'HRK' as const,
   HTG: 'HTG' as const,
   HUF: 'HUF' as const,
   IDR: 'IDR' as const,
   ILS: 'ILS' as const,
   INR: 'INR' as const,
   IQD: 'IQD' as const,
   IRR: 'IRR' as const,
   ISK: 'ISK' as const,
   JMD: 'JMD' as const,
   JOD: 'JOD' as const,
   JPY: 'JPY' as const,
   KES: 'KES' as const,
   KGS: 'KGS' as const,
   KHR: 'KHR' as const,
   KMF: 'KMF' as const,
   KPW: 'KPW' as const,
   KRW: 'KRW' as const,
   KWD: 'KWD' as const,
   KYD: 'KYD' as const,
   KZT: 'KZT' as const,
   LAK: 'LAK' as const,
   LBP: 'LBP' as const,
   LKR: 'LKR' as const,
   LRD: 'LRD' as const,
   LSL: 'LSL' as const,
   LYD: 'LYD' as const,
   MAD: 'MAD' as const,
   MDL: 'MDL' as const,
   MGA: 'MGA' as const,
   MKD: 'MKD' as const,
   MMK: 'MMK' as const,
   MNT: 'MNT' as const,
   MOP: 'MOP' as const,
   MRU: 'MRU' as const,
   MUR: 'MUR' as const,
   MVR: 'MVR' as const,
   MWK: 'MWK' as const,
   MXN: 'MXN' as const,
   MYR: 'MYR' as const,
   MZN: 'MZN' as const,
   NAD: 'NAD' as const,
   NGN: 'NGN' as const,
   NIO: 'NIO' as const,
   NOK: 'NOK' as const,
   NPR: 'NPR' as const,
   NZD: 'NZD' as const,
   OMR: 'OMR' as const,
   PAB: 'PAB' as const,
   PEN: 'PEN' as const,
   PGK: 'PGK' as const,
   PHP: 'PHP' as const,
   PKR: 'PKR' as const,
   PLN: 'PLN' as const,
   PYG: 'PYG' as const,
   QAR: 'QAR' as const,
   RON: 'RON' as const,
   RSD: 'RSD' as const,
   RUB: 'RUB' as const,
   RWF: 'RWF' as const,
   SAR: 'SAR' as const,
   SBD: 'SBD' as const,
   SCR: 'SCR' as const,
   SDG: 'SDG' as const,
   SEK: 'SEK' as const,
   SGD: 'SGD' as const,
   SHP: 'SHP' as const,
   SLL: 'SLL' as const,
   SOS: 'SOS' as const,
   SRD: 'SRD' as const,
   SSP: 'SSP' as const,
   STN: 'STN' as const,
   SVC: 'SVC' as const,
   SYP: 'SYP' as const,
   SZL: 'SZL' as const,
   THB: 'THB' as const,
   TJS: 'TJS' as const,
   TMT: 'TMT' as const,
   TND: 'TND' as const,
   TOP: 'TOP' as const,
   TRY: 'TRY' as const,
   TTD: 'TTD' as const,
   TWD: 'TWD' as const,
   TZS: 'TZS' as const,
   UAH: 'UAH' as const,
   UGX: 'UGX' as const,
   USD: 'USD' as const,
   UYU: 'UYU' as const,
   UZS: 'UZS' as const,
   VES: 'VES' as const,
   VND: 'VND' as const,
   VUV: 'VUV' as const,
   WST: 'WST' as const,
   XAF: 'XAF' as const,
   XCD: 'XCD' as const,
   XOF: 'XOF' as const,
   XPF: 'XPF' as const,
   YER: 'YER' as const,
   ZAR: 'ZAR' as const,
   ZMW: 'ZMW' as const,
   ZWL: 'ZWL' as const
}

export const enumMeasurementUnit = {
   NOT_SET: 'NOT_SET' as const,
   CM: 'CM' as const,
   INCH: 'INCH' as const
}

export const enumMetafieldEntityType = {
   METAFIELD_ENTITY_TYPE_SALE: 'METAFIELD_ENTITY_TYPE_SALE' as const,
   METAFIELD_ENTITY_TYPE_ITEM: 'METAFIELD_ENTITY_TYPE_ITEM' as const,
   METAFIELD_ENTITY_TYPE_SALE_ITEM: 'METAFIELD_ENTITY_TYPE_SALE_ITEM' as const,
   METAFIELD_ENTITY_TYPE_ACCOUNT: 'METAFIELD_ENTITY_TYPE_ACCOUNT' as const
}

export const enumMetafieldValueType = {
   METAFIELD_VALUE_TYPE_SINGLE_LINE_TEXT: 'METAFIELD_VALUE_TYPE_SINGLE_LINE_TEXT' as const,
   METAFIELD_VALUE_TYPE_RICH_TEXT: 'METAFIELD_VALUE_TYPE_RICH_TEXT' as const
}

export const enumNotificationAudience = {
   BIDDER: 'BIDDER' as const,
   CONSIGNOR: 'CONSIGNOR' as const,
   IDENTITY: 'IDENTITY' as const
}

export const enumNotificationAudienceGroup = {
   SALE_REGISTRATIONS: 'SALE_REGISTRATIONS' as const,
   SALE_BIDDERS: 'SALE_BIDDERS' as const,
   SALE_WATCHLIST: 'SALE_WATCHLIST' as const,
   SALE_ITEM_WATCHERS: 'SALE_ITEM_WATCHERS' as const,
   SALE_CONSIGNORS: 'SALE_CONSIGNORS' as const
}

export const enumNotificationChannel = {
   EMAIL: 'EMAIL' as const,
   SMS: 'SMS' as const
}

export const enumNotificationConfigurationStatus = {
   ACTIVE: 'ACTIVE' as const,
   INACTIVE: 'INACTIVE' as const
}

export const enumNotificationEvent = {
   BID_CONFIRMATION: 'BID_CONFIRMATION' as const,
   BID_CONFIRMATION_OUTBID: 'BID_CONFIRMATION_OUTBID' as const,
   OUTBID: 'OUTBID' as const,
   AUTO_BID_PLACED: 'AUTO_BID_PLACED' as const,
   SALE_REGISTRATION_PENDING: 'SALE_REGISTRATION_PENDING' as const,
   SALE_REGISTRATION_ACCEPTED: 'SALE_REGISTRATION_ACCEPTED' as const,
   SALE_REGISTRATION_REJECTED: 'SALE_REGISTRATION_REJECTED' as const,
   SALE_ITEM_REGISTRATION_PHONE: 'SALE_ITEM_REGISTRATION_PHONE' as const,
   SALE_ITEM_WON: 'SALE_ITEM_WON' as const,
   SALE_ABOUT_TO_CLOSE: 'SALE_ABOUT_TO_CLOSE' as const,
   CONSIGNOR_SALE_ITEM_OPENED: 'CONSIGNOR_SALE_ITEM_OPENED' as const,
   CONSIGNOR_SALE_ABOUT_TO_CLOSE: 'CONSIGNOR_SALE_ABOUT_TO_CLOSE' as const,
   CONSIGNOR_SALE_ITEM_RESERVE_MET: 'CONSIGNOR_SALE_ITEM_RESERVE_MET' as const,
   CONSIGNOR_SALE_ITEM_RESERVE_NOT_MET: 'CONSIGNOR_SALE_ITEM_RESERVE_NOT_MET' as const,
   CONSIGNOR_SALE_ITEM_SOLD: 'CONSIGNOR_SALE_ITEM_SOLD' as const,
   BUY_NOW_PRICE_REDUCED: 'BUY_NOW_PRICE_REDUCED' as const,
   OFFER_PLACED_CONFIRMATION: 'OFFER_PLACED_CONFIRMATION' as const,
   OFFER_RECEIVED: 'OFFER_RECEIVED' as const,
   OFFER_COUNTERED: 'OFFER_COUNTERED' as const,
   OFFER_REJECTED: 'OFFER_REJECTED' as const,
   OFFER_WITHDRAWN: 'OFFER_WITHDRAWN' as const,
   DIRECT_SELL_WON: 'DIRECT_SELL_WON' as const,
   DIRECT_SELL_SOLD: 'DIRECT_SELL_SOLD' as const,
   IDENTITY_EMAIL_VERIFICATION: 'IDENTITY_EMAIL_VERIFICATION' as const,
   IDENTITY_PASSWORD_RECOVERY: 'IDENTITY_PASSWORD_RECOVERY' as const,
   IDENTITY_LOGIN_CODE: 'IDENTITY_LOGIN_CODE' as const,
   IDENTITY_REGISTRATION_CODE: 'IDENTITY_REGISTRATION_CODE' as const
}

export const enumNotificationTiming = {
   INSTANT: 'INSTANT' as const,
   SCHEDULED: 'SCHEDULED' as const
}

export const enumOfferActor = {
   OFFER_ACTOR_ADMIN: 'OFFER_ACTOR_ADMIN' as const,
   OFFER_ACTOR_CONSIGNOR: 'OFFER_ACTOR_CONSIGNOR' as const
}

export const enumOfferParty = {
   BUYER: 'BUYER' as const,
   SELLER: 'SELLER' as const
}

export const enumOfferStatus = {
   OFFER_STATUS_PENDING: 'OFFER_STATUS_PENDING' as const,
   OFFER_STATUS_ACCEPTED: 'OFFER_STATUS_ACCEPTED' as const,
   OFFER_STATUS_REJECTED: 'OFFER_STATUS_REJECTED' as const,
   OFFER_STATUS_CANCELED: 'OFFER_STATUS_CANCELED' as const,
   OFFER_STATUS_COUNTERED: 'OFFER_STATUS_COUNTERED' as const,
   OFFER_STATUS_EXPIRED: 'OFFER_STATUS_EXPIRED' as const
}

export const enumOrderLineType = {
   BidAmount: 'BidAmount' as const,
   DirectSale: 'DirectSale' as const
}

export const enumOrderStatus = {
   DRAFT: 'DRAFT' as const,
   OPEN: 'OPEN' as const,
   CANCELLED: 'CANCELLED' as const,
   INVOICE_ISSUED: 'INVOICE_ISSUED' as const,
   PAID: 'PAID' as const
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

export const enumPaymentAccountType = {
   Standard: 'Standard' as const,
   Express: 'Express' as const
}

export const enumPaymentProviderStatus = {
   STARTED: 'STARTED' as const,
   PROCESSING: 'PROCESSING' as const,
   ENABLED: 'ENABLED' as const,
   DISABLED: 'DISABLED' as const
}

export const enumPermission = {
   READ_SALE: 'READ_SALE' as const,
   WRITE_SALE: 'WRITE_SALE' as const,
   WRITE_ITEM: 'WRITE_ITEM' as const,
   READ_ITEM: 'READ_ITEM' as const,
   WRITE_PRODUCT: 'WRITE_PRODUCT' as const,
   READ_CONSIGNMENT: 'READ_CONSIGNMENT' as const,
   WRITE_CONSIGNMENT: 'WRITE_CONSIGNMENT' as const,
   READ_SITE: 'READ_SITE' as const,
   WRITE_SITE: 'WRITE_SITE' as const,
   READ_ACCOUNT: 'READ_ACCOUNT' as const,
   WRITE_ACCOUNT: 'WRITE_ACCOUNT' as const,
   READ_API_TOKENS: 'READ_API_TOKENS' as const,
   WRITE_API_TOKENS: 'WRITE_API_TOKENS' as const,
   READ_API_KEYS: 'READ_API_KEYS' as const,
   WRITE_API_KEYS: 'WRITE_API_KEYS' as const,
   READ_ACTION_HOOKS: 'READ_ACTION_HOOKS' as const,
   WRITE_ACTION_HOOKS: 'WRITE_ACTION_HOOKS' as const,
   WRITE_BIDDER_TOKEN: 'WRITE_BIDDER_TOKEN' as const,
   WRITE_CANCEL_BID: 'WRITE_CANCEL_BID' as const,
   WRITE_SHOPIFY_CONFIGURATION: 'WRITE_SHOPIFY_CONFIGURATION' as const,
   READ_ORDER: 'READ_ORDER' as const,
   READ_USER: 'READ_USER' as const,
   WRITE_USER: 'WRITE_USER' as const,
   READ_METAFIELDS: 'READ_METAFIELDS' as const,
   WRITE_METAFIELDS: 'WRITE_METAFIELDS' as const,
   READ_AFFILIATE: 'READ_AFFILIATE' as const,
   WRITE_AFFILIATE: 'WRITE_AFFILIATE' as const
}

export const enumPhoneType = {
   UNSPECIFIED: 'UNSPECIFIED' as const,
   MOBILE: 'MOBILE' as const,
   HOME: 'HOME' as const,
   WORK: 'WORK' as const,
   FAX: 'FAX' as const
}

export const enumPrincipalType = {
   PERSON: 'PERSON' as const,
   API_CLIENT: 'API_CLIENT' as const,
   SYSTEM: 'SYSTEM' as const,
   UNKNOWN: 'UNKNOWN' as const
}

export const enumReserveAutoBidMethod = {
   STANDARD: 'STANDARD' as const,
   MAX_BID_BELOW_RESERVE_IS_MET: 'MAX_BID_BELOW_RESERVE_IS_MET' as const
}

export const enumReserveStatus = {
   NOT_MET: 'NOT_MET' as const,
   MET: 'MET' as const,
   NO_RESERVE: 'NO_RESERVE' as const
}

export const enumReserveType = {
   FIRM: 'FIRM' as const,
   SELL: 'SELL' as const,
   DISCRETION: 'DISCRETION' as const
}

export const enumSaleFormat = {
   ENGLISH: 'ENGLISH' as const,
   DUTCH: 'DUTCH' as const
}

export const enumSaleIdType = {
   ID: 'ID' as const,
   EXTERNAL_ID: 'EXTERNAL_ID' as const
}

export const enumSaleItemClosingScheduleType = {
   PER_ITEM: 'PER_ITEM' as const,
   STAGGERED: 'STAGGERED' as const
}

export const enumSaleRegistrationSortByField = {
   CREATED_AT: 'CREATED_AT' as const
}

export const enumSaleRegistrationStatus = {
   PENDING: 'PENDING' as const,
   ACCEPTED: 'ACCEPTED' as const,
   REJECTED: 'REJECTED' as const
}

export const enumSaleRegistrationType = {
   ONLINE: 'ONLINE' as const,
   PHONE: 'PHONE' as const,
   PADDLE: 'PADDLE' as const,
   AGGREGATOR: 'AGGREGATOR' as const
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

export const enumSearchType = {
   USER: 'USER' as const,
   SALE_REGISTRATION: 'SALE_REGISTRATION' as const,
   SALE_ITEM: 'SALE_ITEM' as const,
   SALE: 'SALE' as const,
   ITEM: 'ITEM' as const,
   OFFER: 'OFFER' as const,
   ASSET: 'ASSET' as const,
   ACTIVITY: 'ACTIVITY' as const
}

export const enumSellLiveItemToBidErrorCode = {
   BID_NOT_HIGHEST: 'BID_NOT_HIGHEST' as const
}

export const enumSellerLocation = {
   US: 'US' as const,
   IS: 'IS' as const,
   AU: 'AU' as const,
   AT: 'AT' as const,
   BE: 'BE' as const,
   HR: 'HR' as const,
   CY: 'CY' as const,
   DK: 'DK' as const,
   EE: 'EE' as const,
   FI: 'FI' as const,
   FR: 'FR' as const,
   DE: 'DE' as const,
   GR: 'GR' as const,
   IE: 'IE' as const,
   IT: 'IT' as const,
   XK: 'XK' as const,
   LV: 'LV' as const,
   LT: 'LT' as const,
   LU: 'LU' as const,
   MT: 'MT' as const,
   MC: 'MC' as const,
   ME: 'ME' as const,
   NL: 'NL' as const,
   PT: 'PT' as const,
   SM: 'SM' as const,
   SK: 'SK' as const,
   SI: 'SI' as const,
   ES: 'ES' as const,
   VA: 'VA' as const,
   CH: 'CH' as const,
   NO: 'NO' as const,
   SE: 'SE' as const,
   GB: 'GB' as const
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
   GLASS_SCULPTURE: 'GLASS_SCULPTURE' as const,
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
   FOLDING_SCREEN: 'FOLDING_SCREEN' as const,
   LIGHTING_FIXTURE: 'LIGHTING_FIXTURE' as const,
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
   DECOY: 'DECOY' as const,
   TRADING_CARD: 'TRADING_CARD' as const,
   FOSSIL: 'FOSSIL' as const,
   MINERAL: 'MINERAL' as const,
   COLLECTIBLE_APPAREL: 'COLLECTIBLE_APPAREL' as const,
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
   OTHER: 'OTHER' as const,
   PREPACKED_BOX: 'PREPACKED_BOX' as const
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
   OTHER: 'OTHER' as const,
   CLIENT_PACKAGE: 'CLIENT_PACKAGE' as const
}

export const enumTrustLevel = {
   TRUST_LEVEL_NONE: 'TRUST_LEVEL_NONE' as const,
   TRUST_LEVEL_LOW: 'TRUST_LEVEL_LOW' as const,
   TRUST_LEVEL_MEDIUM: 'TRUST_LEVEL_MEDIUM' as const,
   TRUST_LEVEL_HIGH: 'TRUST_LEVEL_HIGH' as const,
   TRUST_LEVEL_FULL: 'TRUST_LEVEL_FULL' as const
}

export const enumUserIdType = {
   USER_ID: 'USER_ID' as const,
   IDENTITY_PROVIDER_ID: 'IDENTITY_PROVIDER_ID' as const,
   BASTA_USER_ID: 'BASTA_USER_ID' as const
}

export const enumUserStatus = {
   ACTIVE: 'ACTIVE' as const,
   INACTIVE: 'INACTIVE' as const
}

export const enumWeightUnit = {
   NOT_SET: 'NOT_SET' as const,
   KG: 'KG' as const,
   LB: 'LB' as const
}

export const enumWorkflowDateType = {
   CONSIGNMENT_DEADLINE: 'CONSIGNMENT_DEADLINE' as const,
   SETTLEMENT: 'SETTLEMENT' as const,
   INVOICE_REMINDER_1: 'INVOICE_REMINDER_1' as const,
   INVOICE_REMINDER_2: 'INVOICE_REMINDER_2' as const,
   INVOICE_REMINDER_3: 'INVOICE_REMINDER_3' as const,
   PHOTOGRAPHY_DEADLINE: 'PHOTOGRAPHY_DEADLINE' as const,
   CATALOGUING_DEADLINE: 'CATALOGUING_DEADLINE' as const,
   PROOFING_DEADLINE: 'PROOFING_DEADLINE' as const,
   LAUNCH_DATE: 'LAUNCH_DATE' as const
}

export const enumWorkflowScheduleDateSource = {
   OVERRIDE: 'OVERRIDE' as const,
   COMPUTED: 'COMPUTED' as const
}

export const enumWorkflowScheduleDimension = {
   LIVE: 'LIVE' as const,
   TIMED: 'TIMED' as const,
   PRINTED_CATALOGUE: 'PRINTED_CATALOGUE' as const
}
