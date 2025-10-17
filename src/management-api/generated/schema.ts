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
     * Item schema used to construct Basta UI
     * TODO: hide
     */
    itemSchema: (Scalars['JSON'] | null)
    /** Basta Live Stream Enabled */
    bastaLiveStreamEnabled: Scalars['Boolean']
    /** Shopify Enabled Store Id */
    shopifyConfiguration: (ShopifyConfiguration | null)
    /** Auction Aggregators associated with the account */
    aggregators: Aggregator[]
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
    __typename: 'AccountFee'
}

export type AccountFeeType = 'NOT_SET' | 'PERCENTAGE' | 'AMOUNT'


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
    /** Number of HTTP request retries. */
    retries: (Scalars['Int'] | null)
    /** Log creation timestamp. */
    createdAt: (Scalars['String'] | null)
    /** Latest request execution timestamp. */
    executedAt: (Scalars['String'] | null)
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
export type ActionType = 'BID_ON_ITEM' | 'ITEMS_STATUS_CHANGED' | 'SALE_STATUS_CHANGED' | 'SALE_CREATED' | 'ITEM_ADDED_TO_SALE' | 'SALE_ITEM_UPDATED' | 'SALE_ITEM_REMOVED' | 'CANCEL_BID_ON_ITEM' | 'ORDER_CREATED' | 'ORDER_UPDATED' | 'ORDER_CANCELLED' | 'SALE_UPDATED'

export type AddressType = 'BILLING' | 'SHIPPING'

export interface Aggregator {
    name: Scalars['String']
    type: BidOriginType
    __typename: 'Aggregator'
}


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

export type ClientPermission = 'BID_ON_ITEM' | 'ACCESS_PRIVATE'


/** ClosingMethod represents how SaleItems are moved into CLOSING status and when they are CLOSED */
export type ClosingMethod = 'ONE_BY_ONE' | 'OVERLAPPING' | 'NONE'

export type Currency = 'USD' | 'ISK' | 'EUR' | 'GBP' | 'AUD' | 'SEK' | 'NOK' | 'DKK' | 'CHF' | 'CAD' | 'JPY' | 'HKD'


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
    __typename: 'Image'
}

export type ImageType = 'ACCOUNT' | 'SALE' | 'ITEM' | 'SALE_ITEM'

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
    /** Account ID */
    accountId: Scalars['String']
    /** Item description */
    description: (Scalars['String'] | null)
    /** Item pricing information */
    price: (ItemPrice | null)
    /** Images attached to item */
    images: Image[]
    /** Unique external identifier, e.g. Warehouse id, inventory id, etc. */
    externalId: (Scalars['String'] | null)
    /** Tags */
    tags: Scalars['String'][]
    /** Item Metadata */
    metadata: (ItemMetadata | null)
    /**
     * Item schema used to construct Basta UI
     * TODO: hide
     */
    schema: (Scalars['JSON'] | null)
    /** Item Notes. */
    itemNotes: ItemNoteConnection
    /** Item specifications (dimensions, weight, type, etc.) */
    specifications: (ItemSpecifications | null)
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
    __typename: 'Item'
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

export type ItemNotification = (ItemMessageNotification | ItemFairWarningNotification) & { __isUnion?: true }

export type ItemOrderField = 'ITEM_NUMBER' | 'CREATED'


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
    __typename: 'ItemPrice'
}

export interface ItemSchema {
    schema: Scalars['JSON']
    metadataSchema: Scalars['JSON']
    __typename: 'ItemSchema'
}


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
export type ItemStatus = 'ITEM_NOT_OPEN' | 'ITEM_OPEN' | 'ITEM_CLOSING' | 'ITEM_PROCESSING' | 'ITEM_CLOSED' | 'ITEM_PAUSED' | 'ITEM_LIVE'

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


/** Measurement unit enum */
export type MeasurementUnit = 'NOT_SET' | 'CM' | 'INCH'

export interface Mutation {
    /** Update Account */
    updateAccount: Account
    /** Create a sale */
    createSale: Sale
    /** Update a sale */
    updateSale: Sale
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
    /** Create item. This operation will create a standalone item that is not part of a sale. */
    createItem: Item
    /** Update item. This will update information about items for all sales that has not been closed. */
    updateItem: Item
    /** Update ItemNumbers input */
    updateItemNumbers: Sale
    /** Create item and add to a sale. This operation will automatically create an item and add it to the sale. */
    createItemForSale: SaleItem
    /** Add a currently existing item to a sale. */
    addItemToSale: SaleItem
    /** Update item associated with a sale. */
    updateItemForSale: SaleItem
    /** Sets sale item winner. Marks bid as won and closes item. Used in offer model. */
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
     * Delete image based on type.
     * Method only available through admin.
     */
    deleteImage: Image[]
    /** Add paddle to sale. */
    addPaddleToSale: Paddle[]
    /** Remove paddle from sale. */
    removePaddleFromSale: Paddle[]
    /** Register user to sale. */
    registerUserPaddle: Paddle[]
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
    createItemNote: ItemNote
    /** CreateUploadUrl */
    createUploadUrl: UploadUrl
    /**
     * Create Schema.
     * WARNING. DO NOT USE. Temporary method that is scheduled for removal
     */
    createItemSchema: ItemSchema
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
     * Connect a a shopify store to an account.
     * Only applicable accounts will work when connecting to shopify.
     */
    connectShopifyToAccount: ShopifyConnection
    /** Create a payment order */
    createPaymentOrder: PaymentOrder
    /** Update a payment order */
    updatePaymentOrder: PaymentOrder
    /**
     * @deprecated Use cancelPaymentOrder mutation
     * Delete a payment order, this will cancel order.
     */
    deletePaymentOrder: PaymentOrder
    /** Cancel a payment order */
    cancelPaymentOrder: PaymentOrder
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
    __typename: 'Mutation'
}

export type Node = (AccountFee | ActionHookLog | ApiKey | ApiToken | Item | PaymentOrder | Sale) & { __isUnion?: true }

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
    /** Type of the order line */
    orderLineType: OrderLineType
    __typename: 'OrderLine'
}

export type OrderLineType = 'BidAmount' | 'DirectSale'

export type OrderStatus = 'DRAFT' | 'OPEN' | 'CANCELLED' | 'INVOICE_ISSUED' | 'PAID'


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

export interface PaymentOrder {
    /** ID */
    id: Scalars['ID']
    /**
     * @deprecated use id
     * OrderID
     */
    orderId: Scalars['ID']
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
    /** UserInfo for payment order */
    user: (UserInfo | null)
    /** Status of the order */
    status: OrderStatus
    /** Created */
    created: Scalars['String']
    /** Modified */
    modified: Scalars['String']
    __typename: 'PaymentOrder'
}

export type PaymentProviderStatus = 'STARTED' | 'PROCESSING' | 'ENABLED' | 'DISABLED'

export type Permission = 'READ_SALE' | 'WRITE_SALE' | 'WRITE_ITEM' | 'READ_ITEM' | 'READ_ACCOUNT' | 'WRITE_ACCOUNT' | 'READ_API_TOKENS' | 'WRITE_API_TOKENS' | 'READ_API_KEYS' | 'WRITE_API_KEYS' | 'READ_ACTION_HOOKS' | 'WRITE_ACTION_HOOKS' | 'WRITE_BIDDER_TOKEN' | 'WRITE_CANCEL_BID' | 'WRITE_SHOPIFY_CONFIGURATION' | 'READ_ORDER'

export interface PhoneBidOrigin {
    type: BidOriginType
    __typename: 'PhoneBidOrigin'
}

export interface Query {
    /** Fetch information about an account */
    account: Account
    /** Fetch information about accessable accounts */
    accounts: Account[]
    /** Get all sales that have been created. You can at most fetch 50 sales at a time. */
    sales: SaleConnection
    /** Get a single sale. */
    sale: Sale
    /** Get SaleItem */
    saleItem: (SaleItem | null)
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
    /** Get all Action Hook logs. */
    actionHookLogs: ActionHookLogConnection
    /** Fetch information about an Item */
    item: Item
    /**
     * Get all items for accountId
     * 
     * onlyMyItems if true filters items belonging to the current user
     */
    items: ItemsConnection
    salesAggregate: SalesAggregate
    /** User Bid Activity */
    userBidActivity: UserBidActivityConnection
    orders: OrderConnection
    /** Orders associated with a user */
    userOrders: OrderConnection
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
    /**
     * Sale slug. Only set on basta created sales.
     * Null/empty for integrating applications.
     */
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
    __typename: 'Sale'
}

export type SaleActivity = (Sale | SaleItem) & { __isUnion?: true }

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
    /** Number of bids that have been placed on the item */
    totalBids: Scalars['Int']
    /** Item description */
    description: (Scalars['String'] | null)
    /** Current bid amount for the item as minor currency unit. */
    currentBid: (Scalars['Int'] | null)
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
    /** Overridden increment table for the item. */
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
     * Currently only a single BidType is allowed per item.
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
    /** External ID */
    externalId: (Scalars['String'] | null)
    /** Metadata associated with the item */
    metadata: (ItemMetadata | null)
    /** closingTimeCountdown for the item. */
    closingTimeCountdown: Scalars['Int']
    /** Item specifications */
    specifications: (ItemSpecifications | null)
    __typename: 'SaleItem'
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


/** Sale Status represent what status a sale is currently running in. */
export type SaleStatus = 'UNPUBLISHED' | 'PUBLISHED' | 'OPENED' | 'CLOSED' | 'CLOSING' | 'PAUSED' | 'PROCESSING' | 'LIVE'


/** SaleType represents the type of sale */
export type SaleType = 'LIVE' | 'ONLINE_TIMED'

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


/** Alpha2 country code for seller location */
export type SellerLocation = 'US' | 'IS' | 'AU' | 'AT' | 'BE' | 'HR' | 'CY' | 'DK' | 'EE' | 'FI' | 'FR' | 'DE' | 'GR' | 'IE' | 'IT' | 'XK' | 'LV' | 'LT' | 'LU' | 'MT' | 'MC' | 'ME' | 'NL' | 'PT' | 'SM' | 'SK' | 'SI' | 'ES' | 'VA' | 'CH' | 'NO' | 'SE' | 'GB'


/** Terms information, who and when terms were accepted */
export interface SellerTerms {
    accepted_by: Scalars['String']
    accepted_date: Scalars['String']
    __typename: 'SellerTerms'
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


/** Specification sub-type enum */
export type SpecificationSubType = 'NOT_SET' | 'PAINTING_UNFRAMED' | 'PAINTING_FRAMED' | 'PAINTING_FRAMED_PLEXI' | 'PAINTING_FRAMED_GLASS' | 'WORK_ON_PAPER_UNFRAMED' | 'WORK_ON_PAPER_FRAMED' | 'WORK_ON_PAPER_FRAMED_PLEXI' | 'WORK_ON_PAPER_FRAMED_GLASS' | 'MIXED_MEDIA_UNFRAMED' | 'MIXED_MEDIA_FRAMED' | 'MIXED_MEDIA_FRAMED_PLEXI' | 'MIXED_MEDIA_FRAMED_GLASS' | 'PHOTOGRAPH_UNFRAMED' | 'PHOTOGRAPH_FRAMED' | 'PHOTOGRAPH_FRAMED_PLEXI' | 'PHOTOGRAPH_FRAMED_GLASS' | 'NEW_MEDIA' | 'SCULPTURE' | 'PEDESTAL' | 'PEDESTAL_CASE_GLASS' | 'PEDESTAL_CASE_PLEXI' | 'CERAMIC' | 'NEON' | 'TAPESTRY' | 'OTHER_ART' | 'TABLE' | 'CHAIR' | 'SOFA_LOVESEAT_CHAISE' | 'FLOOR_LAMP' | 'FLOOR_LAMP_SHADE' | 'TABLE_LAMP' | 'TABLE_LAMP_SHADE' | 'SCONCE' | 'OTTOMAN' | 'BOOKCASE_STORAGE' | 'NIGHTSTAND' | 'ARMOIRE_DRESSER' | 'CARPET_RUG' | 'MIRROR' | 'CHANDELIER' | 'BEDFRAME' | 'HEADBOARD' | 'DESK_VANITY' | 'MEDIA_CONSOLE' | 'OTHER_FURNITURE' | 'EARRINGS' | 'NECKLACE' | 'BRACELET' | 'RING' | 'BROOCH' | 'WATCH' | 'CUFFLINKS' | 'EYEGLASSES' | 'SET' | 'PRECIOUS_STONES' | 'SNUFF_BOX_CIGARETTE_CASE' | 'OTHER_JEWELRY' | 'VASE_VESSEL' | 'BOWL' | 'PLAQUE' | 'OBJECT_OF_VERTU' | 'CANDELABRA_CANDLESTICK' | 'DINNERWARE' | 'FLATWARE' | 'GLASSWARE' | 'SERVEWARE' | 'PORCELAIN_PLATE' | 'PORCELAIN_BOWL' | 'TABLETOP_ACCESSORY' | 'CLOCK' | 'OTHER_DECORATIVE_ARTS' | 'STAMP' | 'BOOK' | 'COIN' | 'DOCUMENT_MANUSCRIPT' | 'TOY' | 'MINIATURE_MODEL' | 'FIGURINE_DOLL' | 'NEON_SIGN' | 'MEMORABILIA' | 'CAMERA_ELECTRICAL' | 'OTHER_COLLECTIBLES' | 'WINE_BOTTLE' | 'SPIRITS_BOTTLE' | 'BEER_BOTTLE' | 'WINE_CASE' | 'SPIRITS_CASE' | 'BEER_CASE' | 'WINE_BARREL' | 'SPIRITS_BARREL' | 'BEER_BARREL' | 'OTHER_ALCOHOLS' | 'CAR' | 'MOTORCYCLE' | 'BUS' | 'VAN' | 'LIMOUSINE' | 'CARRIAGE' | 'TRAILER' | 'SIDECAR' | 'OTHER_AUTOMOTIVE' | 'CLOTHING' | 'FOOTWEAR' | 'HANDBAG' | 'ACCESSORIES' | 'OTHER_FASHION' | 'MUSICAL_INSTRUMENT' | 'FIREARM_WEAPON' | 'HUNTING_FISHING' | 'MEDICAL_EQUIPMENT' | 'OTHER'


/** Specification type enum */
export type SpecificationType = 'NOT_SET' | 'ART' | 'FURNITURE' | 'JEWELRY' | 'DECORATIVE_ARTS' | 'COLLECTIBLES' | 'ALCOHOL' | 'AUTOMOTIVE' | 'FASHION' | 'OTHER'

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
    __typename: 'UploadUrl'
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
    __typename: 'UserAddress'
}

export interface UserBidActivity {
    /** BidId UUID string */
    bidId: Scalars['String']
    /** Sale ID of the sale that includes the item in scope. */
    saleId: Scalars['String']
    /** ItemId */
    itemId: Scalars['String']
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


/** The user info */
export interface UserInfo {
    /** UserId */
    userId: Scalars['String']
    /** Name */
    name: Scalars['String']
    /** Email */
    email: Scalars['String']
    /** Addresses */
    addresses: UserAddress[]
    __typename: 'UserInfo'
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


/** Weight unit enum */
export type WeightUnit = 'NOT_SET' | 'KG' | 'LB'


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
     * Item schema used to construct Basta UI
     * TODO: hide
     */
    itemSchema?: boolean | number
    /** Basta Live Stream Enabled */
    bastaLiveStreamEnabled?: boolean | number
    /** Shopify Enabled Store Id */
    shopifyConfiguration?: ShopifyConfigurationGenqlSelection
    /** Auction Aggregators associated with the account */
    aggregators?: AggregatorGenqlSelection
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
    /** Number of HTTP request retries. */
    retries?: boolean | number
    /** Log creation timestamp. */
    createdAt?: boolean | number
    /** Latest request execution timestamp. */
    executedAt?: boolean | number
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
 * Currently only a single BidType is allowed per item.
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
/** Should item be hidden from public view. */
hidden?: (Scalars['Boolean'] | null),
/**
 * ClosingTime countdown is the sniping duration in milliseconds.
 * If not provided it defaults to 120000ms (2 minutes).
 */
closingTimeCountdown?: (Scalars['Int'] | null)}

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

export interface AddPaddleToSaleInput {
/** Sale ID */
saleId: Scalars['String'],
/** Paddle ID */
paddleIdentifier: Scalars['String'],
/** Paddle User ID */
userId: Scalars['String'],
/** Paddle Type */
type: PaddleType}

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

export interface AggregatorGenqlSelection{
    name?: boolean | number
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
bidOrigin?: (BidOriginInput | null)}

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


/** Input object for when forcing sale to close. */
export interface CloseSaleInput {saleId: Scalars['String']}


/**
 * Input type for connecting a Shopify store to an account.
 * Include all required details for Shopify authentication.
 */
export interface ConnectShopifyToAccountInput {shopId: Scalars['String'],token: Scalars['String']}

export interface ContinueOnboardPaymentAccountInput {returnUrl: Scalars['String']}

export interface CreateAccountFeeInput {name: Scalars['String'],type: AccountFeeType,value: Scalars['Int'],upperLteLimit?: (Scalars['Int'] | null),lowerLimit: Scalars['Int']}

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
/** Custom data associated with the item */
metadata?: (ItemMetadataInput | null),
/** Tags for the item */
tags?: (Scalars['String'][] | null),
/** Item specifications (dimensions, weight, type, etc.) */
specifications?: (ItemSpecificationsInput | null),valuationAmount?: (Scalars['Int'] | null),valuationCurrency?: (Scalars['String'] | null),lowEstimate?: (Scalars['Int'] | null),highEstimate?: (Scalars['Int'] | null)}

export interface CreateItemNoteInput {itemId: Scalars['String'],note: Scalars['String']}

export interface CreateItemSchemaInput {schema: Scalars['JSON'],metadataSchema: Scalars['JSON']}

export interface CreatePaymentInput {
/** OrderId that payment belongs to */
orderId: Scalars['ID']}

export interface CreatePaymentOrderInput {
/** SaleId that order belongs to */
saleId: Scalars['String'],
/** ItemId that order belongs to */
itemId: Scalars['String'],
/** UserId of user that will pay for the order */
userId: Scalars['String'],
/** OrderLines */
orderLines: CreatePaymentOrderLineInput[]}

export interface CreatePaymentOrderLineInput {
/** Amount of the order line in minor currency unit */
amount: Scalars['Int'],
/** Description of the order line */
description: Scalars['String'],
/** Type of the order line */
orderLineType: OrderLineType}


/** Input for creating or modifying sales. */
export interface CreateSaleInput {dates?: (SaleDatesInput | null),title?: (Scalars['String'] | null),description?: (Scalars['String'] | null),currency?: (Scalars['String'] | null),bidIncrementTable?: (BidIncrementTableInput | null),closingMethod?: (ClosingMethod | null),closingTimeCountdown?: (Scalars['Int'] | null),
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
isTestSale?: (Scalars['Boolean'] | null)}

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
itemId?: (Scalars['String'] | null)}

export interface DeleteAccountFeeInput {id: Scalars['String']}


/** Input to delete an Action Hook subscription. */
export interface DeleteActionHookSubscriptionInput {
/** Event that triggers the action. */
action: ActionType}


/** Delete image input */
export interface DeleteImageInput {
/** The sale identifier */
saleId?: (Scalars['String'] | null),
/** The item identifier */
itemId?: (Scalars['String'] | null),
/** The image identifier */
imageId: Scalars['String'],
/** The entities that the image belongs to */
imageTypes: ImageType[]}


/** Delete item image input */
export interface DeleteItemImageInput {itemId: Scalars['String'],imageId: Scalars['String']}


/** Input object for when deleting an item (including un-associating from a sale) */
export interface DeleteItemInput {itemId: Scalars['String']}

export interface DeleteLiveStreamFromSaleInput {
/** Sale ID */
saleId: Scalars['String']}

export interface DeletePaymentOrderInput {
/** OrderId to delete */
orderId: Scalars['ID']}


/** Input object for when deleting a sale. */
export interface DeleteSaleInput {saleId: Scalars['String']}


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

export interface GetItemInputGenqlSelection{
    itemId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetItemsInput {userId?: (Scalars['String'] | null),first?: (Scalars['Int'] | null),after?: (Scalars['String'] | null),direction?: (PaginationDirection | null),itemsFilter: ItemsFilter}


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
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Image reordering input */
export interface ImageOrderInput {
/** The image identifier */
imageId: Scalars['String'],
/** The new image order */
order: Scalars['Int']}

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
    /** Account ID */
    accountId?: boolean | number
    /** Item description */
    description?: boolean | number
    /** Item pricing information */
    price?: ItemPriceGenqlSelection
    /** Images attached to item */
    images?: ImageGenqlSelection
    /** Unique external identifier, e.g. Warehouse id, inventory id, etc. */
    externalId?: boolean | number
    /** Tags */
    tags?: boolean | number
    /** Item Metadata */
    metadata?: ItemMetadataGenqlSelection
    /**
     * Item schema used to construct Basta UI
     * TODO: hide
     */
    schema?: boolean | number
    /** Item Notes. */
    itemNotes?: (ItemNoteConnectionGenqlSelection & { __args?: {take?: (Scalars['Int'] | null), cursor?: (Scalars['String'] | null), direction?: (PaginationDirection | null)} })
    /** Item specifications (dimensions, weight, type, etc.) */
    specifications?: ItemSpecificationsGenqlSelection
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


/** Custom data defined by each account */
export interface ItemMetadataGenqlSelection{
    /** Data */
    data?: boolean | number
    /** JSON Schema */
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Item additional data input */
export interface ItemMetadataInput {
/** JSON */
data?: (Scalars['JSON'] | null)}

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
    __typename?: boolean | number
}

export interface ItemNumberChangeInput {itemId: Scalars['String'],itemNumber: Scalars['Int']}

export interface ItemOrderInput {
/** Field to order by */
field?: ItemOrderField,
/** Order direction */
direction?: PaginationDirection}


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
highEstimate?: (Scalars['Int'] | null)}

export interface ItemSchemaGenqlSelection{
    schema?: boolean | number
    metadataSchema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


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
/** Unit of measurement for dimensions */
measurementUnit?: (MeasurementUnit | null),
/** Weight of the item */
weight?: (Scalars['Float'] | null),
/** Unit of measurement for weight */
weightUnit?: (WeightUnit | null)}

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
bidOrigin?: (BidOriginInput | null)}

export interface MutationGenqlSelection{
    /** Update Account */
    updateAccount?: (AccountGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateAccountInput} })
    /** Create a sale */
    createSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateSaleInput} })
    /** Update a sale */
    updateSale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], saleId: Scalars['String'], input: UpdateSaleInput} })
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
    /** Create item. This operation will create a standalone item that is not part of a sale. */
    createItem?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateItemInput} })
    /** Update item. This will update information about items for all sales that has not been closed. */
    updateItem?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String'], input: UpdateItemInput} })
    /** Update ItemNumbers input */
    updateItemNumbers?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateItemNumbersInput} })
    /** Create item and add to a sale. This operation will automatically create an item and add it to the sale. */
    createItemForSale?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: SaleItemInput} })
    /** Add a currently existing item to a sale. */
    addItemToSale?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: AddItemToSaleInput} })
    /** Update item associated with a sale. */
    updateItemForSale?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdateSaleItemInput} })
    /** Sets sale item winner. Marks bid as won and closes item. Used in offer model. */
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
     * Delete image based on type.
     * Method only available through admin.
     */
    deleteImage?: (ImageGenqlSelection & { __args: {accountId: Scalars['String'], input: DeleteImageInput} })
    /** Add paddle to sale. */
    addPaddleToSale?: (PaddleGenqlSelection & { __args: {accountId: Scalars['String'], input: AddPaddleToSaleInput} })
    /** Remove paddle from sale. */
    removePaddleFromSale?: (PaddleGenqlSelection & { __args: {accountId: Scalars['String'], input: RemovePaddleFromSaleInput} })
    /** Register user to sale. */
    registerUserPaddle?: (PaddleGenqlSelection & { __args: {accountId: Scalars['String'], input: RegisterUserPaddleInput} })
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
    createItemNote?: (ItemNoteGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateItemNoteInput} })
    /** CreateUploadUrl */
    createUploadUrl?: (UploadUrlGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateUploadUrlInput} })
    /**
     * Create Schema.
     * WARNING. DO NOT USE. Temporary method that is scheduled for removal
     */
    createItemSchema?: (ItemSchemaGenqlSelection & { __args: {accountId: Scalars['String'], input: CreateItemSchemaInput} })
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
     * Connect a a shopify store to an account.
     * Only applicable accounts will work when connecting to shopify.
     */
    connectShopifyToAccount?: (ShopifyConnectionGenqlSelection & { __args: {accountId: Scalars['String'], input: ConnectShopifyToAccountInput} })
    /** Create a payment order */
    createPaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: CreatePaymentOrderInput} })
    /** Update a payment order */
    updatePaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: UpdatePaymentOrderInput} })
    /**
     * @deprecated Use cancelPaymentOrder mutation
     * Delete a payment order, this will cancel order.
     */
    deletePaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: DeletePaymentOrderInput} })
    /** Cancel a payment order */
    cancelPaymentOrder?: (PaymentOrderGenqlSelection & { __args: {accountId: Scalars['String'], input: CancelPaymentOrderInput} })
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
    on_Item?: ItemGenqlSelection
    on_PaymentOrder?: PaymentOrderGenqlSelection
    on_Sale?: SaleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

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
    /** Type of the order line */
    orderLineType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


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

export interface PaymentOrderGenqlSelection{
    /** ID */
    id?: boolean | number
    /**
     * @deprecated use id
     * OrderID
     */
    orderId?: boolean | number
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
    /** UserInfo for payment order */
    user?: UserInfoGenqlSelection
    /** Status of the order */
    status?: boolean | number
    /** Created */
    created?: boolean | number
    /** Modified */
    modified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PhoneBidOriginGenqlSelection{
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input object for when forcing sale to published. */
export interface PublishSaleInput {saleId: Scalars['String']}

export interface QueryGenqlSelection{
    /** Fetch information about an account */
    account?: (AccountGenqlSelection & { __args: {accountId: Scalars['String']} })
    /** Fetch information about accessable accounts */
    accounts?: AccountGenqlSelection
    /** Get all sales that have been created. You can at most fetch 50 sales at a time. */
    sales?: (SaleConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleFilter | null)} })
    /** Get a single sale. */
    sale?: (SaleGenqlSelection & { __args: {accountId: Scalars['String'], id: Scalars['ID']} })
    /** Get SaleItem */
    saleItem?: (SaleItemGenqlSelection & { __args: {accountId: Scalars['String'], saleId: Scalars['String'], itemId: Scalars['String']} })
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
    /** Get all Action Hook logs. */
    actionHookLogs?: (ActionHookLogConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (ActionHookFilter | null)} })
    /** Fetch information about an Item */
    item?: (ItemGenqlSelection & { __args: {accountId: Scalars['String'], itemId: Scalars['String']} })
    /**
     * Get all items for accountId
     * 
     * onlyMyItems if true filters items belonging to the current user
     */
    items?: (ItemsConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), itemsFilter: ItemsFilter, direction?: (PaginationDirection | null)} })
    salesAggregate?: (SalesAggregateGenqlSelection & { __args: {accountId: Scalars['String']} })
    /** User Bid Activity */
    userBidActivity?: (UserBidActivityConnectionGenqlSelection & { __args: {accountId: Scalars['String'], userId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (UserBidActivityFilter | null), direction?: (PaginationDirection | null), orderBy?: (BidOrderByField | null)} })
    orders?: (OrderConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), last?: (Scalars['Int'] | null)} })
    /** Orders associated with a user */
    userOrders?: (OrderConnectionGenqlSelection & { __args: {accountId: Scalars['String'], userID: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), last?: (Scalars['Int'] | null)} })
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
    /**
     * Sale slug. Only set on basta created sales.
     * Null/empty for integrating applications.
     */
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
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleActivityGenqlSelection{
    on_Sale?:SaleGenqlSelection,
    on_SaleItem?:SaleItemGenqlSelection,
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
    /** Number of bids that have been placed on the item */
    totalBids?: boolean | number
    /** Item description */
    description?: boolean | number
    /** Current bid amount for the item as minor currency unit. */
    currentBid?: boolean | number
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
    /** Overridden increment table for the item. */
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
     * Currently only a single BidType is allowed per item.
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
    /** External ID */
    externalId?: boolean | number
    /** Metadata associated with the item */
    metadata?: ItemMetadataGenqlSelection
    /** closingTimeCountdown for the item. */
    closingTimeCountdown?: boolean | number
    /** Item specifications */
    specifications?: ItemSpecificationsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Item filter for sale items. */
export interface SaleItemFilter {
/** Filter by item status */
statuses: ItemStatus[],
/** Show hidden items */
showHiddenItems?: (Scalars['Boolean'] | null)}


/** Item input when creating an item */
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
 * Currently only a single BidType is allowed per item.
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
 * ClosingTime countdown is the sniping duration in milliseconds.
 * If not provided it defaults to 120000ms (2 minutes).
 */
closingTimeCountdown?: (Scalars['Int'] | null),
/** Should item be hidden from public view. Default false. */
hidden?: (Scalars['Boolean'] | null),
/** Tags for the item */
tags?: (Scalars['String'][] | null),
/** Item Specifications (dimensions, weight, type, etc.) */
specifications?: (ItemSpecificationsInput | null)}

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

export interface SellLiveItemInput {saleId: Scalars['String'],itemId: Scalars['String'],transitionToUpcomingLot?: (Scalars['Boolean'] | null)}


/** Terms information, who and when terms were accepted */
export interface SellerTermsGenqlSelection{
    accepted_by?: boolean | number
    accepted_date?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input to set an item winner and close the item. */
export interface SetItemWinnerInput {saleId: Scalars['String'],itemId: Scalars['String'],bidId: Scalars['String']}


/** Input object for when setting sale item status */
export interface SetSaleItemStatusInput {saleId: Scalars['String'],itemId: Scalars['String'],status: ItemStatus}


/** Input object for when setting sale status */
export interface SetSaleStatusInput {saleId: Scalars['String'],status: SaleStatus}

export interface SetUserIdOnBidInput {
/** Sale ID of the sale that includes the item in scope. */
saleId: Scalars['String'],
/** Item ID of the item that includes the bid in scope. */
itemId: Scalars['String'],
/** Bid ID of the item that includes the bid in scope. */
bidId: Scalars['String'],
/** Updated user ID. */
userId: Scalars['String']}

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


/** Input object for when starting to close a sale. */
export interface StartClosingSaleInput {saleId: Scalars['String']}

export interface SubscriptionGenqlSelection{
    /**
     * Real-time information for sale related events.
     * Both Sale and SaleItem data is sent to the socket
     */
    saleActivity?: (SaleActivityGenqlSelection & { __args: {accountId: Scalars['String'], saleId: Scalars['ID'], itemIdFilter?: (ItemIdsFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

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

export interface UpdateAccountFeeInput {id: Scalars['String'],name: Scalars['String'],type: AccountFeeType,value: Scalars['Int'],upperLteLimit?: (Scalars['Int'] | null),lowerLimit: Scalars['Int']}


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
enableBastaStreaming?: (Scalars['Boolean'] | null)}


/** Input to update an Action Hook subscription. */
export interface UpdateActionHookSubscriptionInput {
/** Event that triggers the action. */
action: ActionType,
/** Webhook URL that is called when Action Hook is triggered. */
url: Scalars['String'],
/** Custom HTTP header values sent with the action. */
headers?: ((HttpHeaderInput | null)[] | null)}


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
/** Item description */
description?: (Scalars['String'] | null),
/** Item price information */
price?: (ItemPriceInput | null),
/** Unique external identifier, e.g. warehouse id, inventory id, etc. */
externalId?: (Scalars['String'] | null),
/** Custom data associated with the item */
metadata?: (ItemMetadataInput | null),
/** Tags for the item */
tags?: (Scalars['String'][] | null),
/** Item specifications (dimensions, weight, type, etc.) */
specifications?: (ItemSpecificationsInput | null),valuationAmount?: (Scalars['Int'] | null),valuationCurrency?: (Scalars['String'] | null)}

export interface UpdateItemNumbersInput {saleId: Scalars['String'],itemNumberChanges: ItemNumberChangeInput[]}

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


/**
 * Input for updating a sale.
 * All fields are mandatory. If something shouldn't change then
 * the provided value should be the same as it was before.
 */
export interface UpdateSaleInput {dates?: (SaleDatesInput | null),title: Scalars['String'],description: Scalars['String'],currency: Scalars['String'],bidIncrementTable: BidIncrementTableInput,closingMethod: ClosingMethod,closingTimeCountdown: Scalars['Int'],themeType?: (Scalars['Int'] | null),slug?: (Scalars['String'] | null),
/** Should sale be hidden from public view. Default false. */
hidden?: (Scalars['Boolean'] | null),
/** optional live stream information */
liveStream?: (LiveStreamInput | null),
/** sale Type */
saleType?: (SaleType | null),
/** Sale Is Test */
isTestSale?: (Scalars['Boolean'] | null)}


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
/** Description for describing the item */
description?: (Scalars['String'] | null),
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
 * Currently only a single BidType is allowed per item.
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
specifications?: (ItemSpecificationsInput | null)}

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
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserBidActivityGenqlSelection{
    /** BidId UUID string */
    bidId?: boolean | number
    /** Sale ID of the sale that includes the item in scope. */
    saleId?: boolean | number
    /** ItemId */
    itemId?: boolean | number
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


/** The user info */
export interface UserInfoGenqlSelection{
    /** UserId */
    userId?: boolean | number
    /** Name */
    name?: boolean | number
    /** Email */
    email?: boolean | number
    /** Addresses */
    addresses?: UserAddressGenqlSelection
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
    


    const ItemNotification_possibleTypes: string[] = ['ItemMessageNotification','ItemFairWarningNotification']
    export const isItemNotification = (obj?: { __typename?: any } | null): obj is ItemNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemNotification"')
      return ItemNotification_possibleTypes.includes(obj.__typename)
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
    


    const LiveStream_possibleTypes: string[] = ['ExternalLiveStream','BastaLiveStream']
    export const isLiveStream = (obj?: { __typename?: any } | null): obj is LiveStream => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLiveStream"')
      return LiveStream_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['AccountFee','ActionHookLog','ApiKey','ApiToken','Item','PaymentOrder','Sale']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
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
    


    const PaymentOrder_possibleTypes: string[] = ['PaymentOrder']
    export const isPaymentOrder = (obj?: { __typename?: any } | null): obj is PaymentOrder => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentOrder"')
      return PaymentOrder_possibleTypes.includes(obj.__typename)
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
    


    const SaleActivity_possibleTypes: string[] = ['Sale','SaleItem']
    export const isSaleActivity = (obj?: { __typename?: any } | null): obj is SaleActivity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleActivity"')
      return SaleActivity_possibleTypes.includes(obj.__typename)
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
    


    const SaleItem_possibleTypes: string[] = ['SaleItem']
    export const isSaleItem = (obj?: { __typename?: any } | null): obj is SaleItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleItem"')
      return SaleItem_possibleTypes.includes(obj.__typename)
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
    


    const SaleMetrics_possibleTypes: string[] = ['SaleMetrics']
    export const isSaleMetrics = (obj?: { __typename?: any } | null): obj is SaleMetrics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleMetrics"')
      return SaleMetrics_possibleTypes.includes(obj.__typename)
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
    


    const SearchKey_possibleTypes: string[] = ['SearchKey']
    export const isSearchKey = (obj?: { __typename?: any } | null): obj is SearchKey => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchKey"')
      return SearchKey_possibleTypes.includes(obj.__typename)
    }
    


    const SellerTerms_possibleTypes: string[] = ['SellerTerms']
    export const isSellerTerms = (obj?: { __typename?: any } | null): obj is SellerTerms => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellerTerms"')
      return SellerTerms_possibleTypes.includes(obj.__typename)
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
    


    const UploadUrl_possibleTypes: string[] = ['UploadUrl']
    export const isUploadUrl = (obj?: { __typename?: any } | null): obj is UploadUrl => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUploadUrl"')
      return UploadUrl_possibleTypes.includes(obj.__typename)
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
    


    const UserInfo_possibleTypes: string[] = ['UserInfo']
    export const isUserInfo = (obj?: { __typename?: any } | null): obj is UserInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserInfo"')
      return UserInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToken_possibleTypes: string[] = ['UserToken']
    export const isUserToken = (obj?: { __typename?: any } | null): obj is UserToken => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToken"')
      return UserToken_possibleTypes.includes(obj.__typename)
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
   SALE_UPDATED: 'SALE_UPDATED' as const
}

export const enumAddressType = {
   BILLING: 'BILLING' as const,
   SHIPPING: 'SHIPPING' as const
}

export const enumApiKeyRole = {
   ADMIN: 'ADMIN' as const,
   READ: 'READ' as const
}

export const enumApiTokenRole = {
   ADMIN: 'ADMIN' as const,
   READ: 'READ' as const
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

export const enumClientPermission = {
   BID_ON_ITEM: 'BID_ON_ITEM' as const,
   ACCESS_PRIVATE: 'ACCESS_PRIVATE' as const
}

export const enumClosingMethod = {
   ONE_BY_ONE: 'ONE_BY_ONE' as const,
   OVERLAPPING: 'OVERLAPPING' as const,
   NONE: 'NONE' as const
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
   HKD: 'HKD' as const
}

export const enumImageType = {
   ACCOUNT: 'ACCOUNT' as const,
   SALE: 'SALE' as const,
   ITEM: 'ITEM' as const,
   SALE_ITEM: 'SALE_ITEM' as const
}

export const enumItemOrderField = {
   ITEM_NUMBER: 'ITEM_NUMBER' as const,
   CREATED: 'CREATED' as const
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

export const enumMeasurementUnit = {
   NOT_SET: 'NOT_SET' as const,
   CM: 'CM' as const,
   INCH: 'INCH' as const
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
   READ_ORDER: 'READ_ORDER' as const
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
