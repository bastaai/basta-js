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
    /** Metafields associated with the account */
    metafields: MetafieldsConnection[]
    /** Metafield associated with the account */
    metafield: (Metafield | null)
    /**
     * Departments of the account, ordered alphabetically by name.
     * Pass the previous page's endCursor as `after` to fetch the next page.
     */
    departments: DepartmentConnection
    __typename: 'Account'
}

export type AddressType = 'BILLING' | 'SHIPPING' | 'OTHER'

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
     * Masked identifier for the bidder. By default a stable per-sale-item hash of the
     * bidder; for accounts configured to do so, the bidder's username. Null when it
     * cannot be computed.
     */
    bidderIdentifier: (Scalars['String'] | null)
    /** Optional paddle if bid is associated with a paddle. */
    paddle: (Paddle | null)
    /** Reactive bid if bid was placed as a side effect of a max bid */
    reactiveBid: Scalars['Boolean']
    /** BidOrigin */
    bidOrigin: BidOrigin
    /**
     * Registration associated with this bid. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration: (UserSaleRegistration | null)
    __typename: 'Bid'
}


/** Error code when failing to place a bid on an item */
export type BidErrorCode = 'NO_ERROR' | 'INTERNAL_ERROR' | 'MAX_BID_LOWER_THAN_CURRENT_MAX' | 'BID_LOWER_THAN_CURRENT_MAX' | 'BID_LOWER_THAN_CURRENT_BID' | 'ALREADY_HIGHER_MAX_BID' | 'OFF_INCREMENT' | 'STARTING_BID_HIGHER' | 'NOT_OPEN_FOR_BIDDING' | 'ITEM_CLOSING_PERIOD_PASSED' | 'BID_AMOUNT_UPPER_LIMIT_REACHED' | 'ITEM_ALREADY_CLOSED' | 'USER_REQUIRED_TO_HAVE_ACCEPTED_REGISTRATION_FOR_SALE' | 'USER_REGISTRATION_REJECTED_FOR_SALE' | 'USER_REGISTRATION_PENDING_FOR_SALE'


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
    /**
     * Registration associated with this bid placement. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration: (UserSaleRegistration | null)
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


/** Card payment method */
export interface Card {
    /** Unique card id */
    id: Scalars['String']
    /** Card brand, e.g. Visa, Mastercard, Amex */
    brand: Scalars['String']
    /** Card expiration month */
    expirationMonth: Scalars['Int']
    /** Card expiration year */
    expirationYear: Scalars['Int']
    /** Last 4 digits of card number */
    last4: Scalars['String']
    __typename: 'Card'
}


/** ClosingMethod represents how SaleItems are moved into CLOSING status and when they are CLOSED */
export type ClosingMethod = 'ONE_BY_ONE' | 'OVERLAPPING' | 'NONE'


/** A consignor of an item — one of the parties selling it. */
export interface Consignor {
    /** The consignor's Basta user id. Not interchangeable with Me.userId. */
    userId: Scalars['String']
    /** Whether this consignor is the main consignor — the seller. */
    isMain: Scalars['Boolean']
    /** The consignor's username. Null when not set. */
    username: (Scalars['String'] | null)
    __typename: 'Consignor'
}


/** ISO 3166-1 alpha-2 country codes */
export type Country = 'AF' | 'AL' | 'AQ' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AG' | 'AZ' | 'AR' | 'AU' | 'AT' | 'BS' | 'BH' | 'BD' | 'AM' | 'BB' | 'BE' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'BZ' | 'IO' | 'SB' | 'VG' | 'BN' | 'BG' | 'MM' | 'BI' | 'BY' | 'KH' | 'CM' | 'CA' | 'CV' | 'KY' | 'CF' | 'LK' | 'TD' | 'CL' | 'CN' | 'TW' | 'CX' | 'CC' | 'CO' | 'KM' | 'YT' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CU' | 'CY' | 'CZ' | 'BJ' | 'DK' | 'DM' | 'DO' | 'EC' | 'SV' | 'GQ' | 'ET' | 'ER' | 'EE' | 'FO' | 'FK' | 'GS' | 'FJ' | 'FI' | 'AX' | 'FR' | 'GF' | 'PF' | 'TF' | 'DJ' | 'GA' | 'GE' | 'GM' | 'PS' | 'DE' | 'GH' | 'GI' | 'KI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GN' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IL' | 'IT' | 'CI' | 'JM' | 'JP' | 'KZ' | 'JO' | 'KE' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LB' | 'LS' | 'LV' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MQ' | 'MR' | 'MU' | 'MX' | 'MC' | 'MN' | 'MD' | 'ME' | 'MS' | 'MA' | 'MZ' | 'OM' | 'NA' | 'NR' | 'NP' | 'NL' | 'CW' | 'AW' | 'SX' | 'BQ' | 'NC' | 'VU' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'NO' | 'MP' | 'UM' | 'FM' | 'MH' | 'PW' | 'PK' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'GW' | 'TL' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'AI' | 'LC' | 'MF' | 'PM' | 'VC' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SK' | 'VN' | 'SI' | 'SO' | 'ZA' | 'ZW' | 'ES' | 'SS' | 'SD' | 'EH' | 'SR' | 'SJ' | 'SZ' | 'SE' | 'CH' | 'SY' | 'TJ' | 'TH' | 'TG' | 'TK' | 'TO' | 'TT' | 'AE' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'MK' | 'EG' | 'GB' | 'GG' | 'JE' | 'IM' | 'TZ' | 'US' | 'VI' | 'BF' | 'UY' | 'UZ' | 'VE' | 'WF' | 'WS' | 'YE' | 'ZM'

export interface CurrentItem {
    item: Item
    cursor: Scalars['String']
    __typename: 'CurrentItem'
}


/** A department groups an account's sales, e.g. "Paintings" or "Jewellery". */
export interface Department {
    /** ID of the department. Use it to filter search results by department. */
    id: Scalars['ID']
    /** Display name of the department. */
    name: Scalars['String']
    /** URL-friendly identifier. */
    slug: Scalars['String']
    __typename: 'Department'
}

export interface DepartmentConnection {
    edges: DepartmentEdge[]
    pageInfo: PageInfo
    __typename: 'DepartmentConnection'
}

export interface DepartmentEdge {
    cursor: Scalars['String']
    node: Department
    __typename: 'DepartmentEdge'
}


/** The terminal non-auction sale of an item — an accepted offer or a buy-now. */
export interface DirectSell {
    /** Amount paid in minor currency units. */
    amount: Scalars['Int']
    /** ISO-4217 currency code. */
    currency: Scalars['String']
    /** How the sale was initiated. */
    source: DirectSellSource
    /** When the sale was recorded (RFC3339). */
    timestamp: Scalars['String']
    __typename: 'DirectSell'
}


/** How a direct (non-auction) sale was initiated. */
export type DirectSellSource = 'OFFER' | 'BUY'


/** Relay-style connection of the authenticated buyer's direct sells. */
export interface DirectSellsConnection {
    edges: DirectSellsEdge[]
    pageInfo: PageInfo
    __typename: 'DirectSellsConnection'
}


/** Edge in a DirectSellsConnection. */
export interface DirectSellsEdge {
    cursor: Scalars['String']
    node: Item
    __typename: 'DirectSellsEdge'
}


/** A bid accepted on a Dutch lot at the clock price at acceptance time. */
export interface DutchBid {
    id: Scalars['ID']
    /** The clock price at which this bid was accepted. */
    amount: Scalars['Int']
    placedAt: Scalars['String']
    /** Whether this bid belongs to the requesting user. */
    mine: Scalars['Boolean']
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


/** Why a Dutch bid was rejected. Exactly one code is returned per rejected bid. */
export type DutchBidErrorCode = 'NOT_OPEN' | 'ENDED' | 'SOLD_OUT' | 'BIDDER_LIMIT_REACHED' | 'CLOSED' | 'PRICE_MISMATCH'

export type DutchBidPlaced = (DutchBidPlacedSuccess | DutchBidPlacedError) & { __isUnion?: true }


/** A rejected Dutch bid. errorCode says why the bid was not accepted. */
export interface DutchBidPlacedError {
    errorCode: DutchBidErrorCode
    __typename: 'DutchBidPlacedError'
}


/**
 * A successfully placed Dutch bid. The price is the clock price at acceptance time; under a
 * partial-fill policy quantityAllocated may be less than quantityRequested. To read the lot's
 * remaining inventory after the bid, re-read the lot's DutchSaleItem.unitsRemaining.
 */
export interface DutchBidPlacedSuccess {
    id: Scalars['String']
    /** Clock price at which the bid was accepted (sale currency minor unit). */
    amount: Scalars['Int']
    quantityRequested: Scalars['Int']
    /** Units actually allocated; may be less than requested under a partial-fill policy. */
    quantityAllocated: Scalars['Int']
    placedAt: Scalars['String']
    __typename: 'DutchBidPlacedSuccess'
}


/** DutchItemStatus is the lifecycle of a Dutch lot. */
export type DutchItemStatus = 'NOT_OPEN' | 'OPEN' | 'CLOSED'


/** A single scheduled price drop on a Dutch lot. */
export interface DutchNextDrop {
    /** The price after this drop, clamped to the floor. */
    price: Scalars['Int']
    /** When the drop happens (RFC3339). */
    at: Scalars['String']
    __typename: 'DutchNextDrop'
}


/** The live price for a Dutch lot: the current clock price and the next scheduled drop. */
export interface DutchPrice {
    /** The current clock price. */
    current: Scalars['Int']
    /**
     * The next scheduled drop, or null when the price is not descending — the lot has not
     * opened yet or has reached its floor.
     */
    nextDrop: (DutchNextDrop | null)
    __typename: 'DutchPrice'
}


/** A single dated price drop in a Dutch lot's schedule. */
export interface DutchPriceDrop {
    /** When the drop takes effect (RFC3339). */
    at: Scalars['String']
    /** The price in effect from this drop until the next one (or the floor). */
    price: Scalars['Int']
    __typename: 'DutchPriceDrop'
}


/**
 * A Dutch (descending-clock) sale. Each lot's price drops on a fixed schedule until a
 * bidder accepts.
 */
export interface DutchSale {
    id: Scalars['ID']
    accountId: Scalars['String']
    title: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    currency: (Scalars['String'] | null)
    status: SaleStatus
    dates: SaleDates
    saleFormat: SaleFormat
    /** Images attached to the sale. */
    images: Image[]
    /** The Dutch lots in this sale. */
    items: DutchSaleItemConnection
    __typename: 'DutchSale'
}


/** A Dutch lot, with its price schedule and live price. */
export interface DutchSaleItem {
    id: Scalars['ID']
    saleId: Scalars['String']
    status: DutchItemStatus
    /** Total units offered for this lot, fixed at creation. */
    availableUnits: Scalars['Int']
    /** Units still available after all accepted bids. */
    unitsRemaining: Scalars['Int']
    /** Total number of accepted bids on this lot. */
    totalBids: Scalars['Int']
    openTime: (Scalars['String'] | null)
    endTime: (Scalars['String'] | null)
    /** The live price: current clock price and the next scheduled drop. */
    price: DutchPrice
    /**
     * The full price-drop schedule for this lot. Null when the schedule is not exposed to
     * clients — today it is always present.
     */
    schedule: (DutchSchedule | null)
    title: (Scalars['String'] | null)
    subTitle: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    /** Images attached to the lot. */
    images: Image[]
    /** Accepted bids on this lot. */
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


/**
 * The full descending-price schedule for a Dutch lot: the opening price and every dated
 * drop from openTime onward. Nullable so the schedule can be withheld from clients in the
 * future without a breaking schema change — today it is always populated.
 */
export interface DutchSchedule {
    /** The opening price, in effect from openTime until the first drop. */
    startingAmount: Scalars['Int']
    /**
     * The dated drops, ordered by time. Each is at or after openTime, strictly later than the
     * previous drop, and strictly lower in price.
     */
    drops: DutchPriceDrop[]
    __typename: 'DutchSchedule'
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


/** Facet count for a specific field, containing all unique values and their counts. */
export interface FacetCount {
    /** The field name this facet represents (e.g., "status", "tags", "reserveMet") */
    fieldName: Scalars['String']
    /** Individual value counts for this field */
    counts: FacetValue[]
    /** Statistical information for numeric fields (optional) */
    stats: (FacetStats | null)
    __typename: 'FacetCount'
}


/** Statistical information for numeric facet fields */
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
    /**
     * The value to filter by (pass it back in filterBy). Usually human-readable
     * (e.g. "OPEN", "EUR"), but for some facets it is an opaque id — e.g. the
     * departmentIds facet's value is a department id.
     */
    value: Scalars['String']
    /** Number of items with this value */
    count: Scalars['Int']
    /** Highlighted value (may include search term highlighting) */
    highlighted: (Scalars['String'] | null)
    /**
     * A friendly value to render to clients. Equals value for most facets; it
     * differs only when value is an opaque id (e.g. the departmentIds facet resolves
     * each id to its department name). Render this, filter by value.
     */
    label: (Scalars['String'] | null)
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
     * PROGRESSIVE applies the rate only to the portion of the amount within each bracket.
     */
    calculationType: FeeCalculationType
    __typename: 'FeeRule'
}

export type FeeRuleType = 'NOT_SET' | 'PERCENTAGE' | 'AMOUNT'


/**
 * Result of a follow/unfollow-consignor mutation. Idempotent; reflects the terminal follow state.
 * consignorId is the consignor User's internal User.id.
 */
export interface FollowConsignorResult {
    consignorId: Scalars['ID']
    following: Scalars['Boolean']
    __typename: 'FollowConsignorResult'
}


/**
 * A consignor (User) that the current bidder follows.
 * consignorId is the consignor's internal User.id.
 */
export interface FollowedConsignor {
    consignorId: Scalars['ID']
    __typename: 'FollowedConsignor'
}

export interface FollowedConsignorsConnection {
    edges: FollowedConsignorsEdge[]
    pageInfo: PageInfo
    __typename: 'FollowedConsignorsConnection'
}

export interface FollowedConsignorsEdge {
    cursor: Scalars['String']
    node: FollowedConsignor
    __typename: 'FollowedConsignorsEdge'
}


/** Input parameters to get all bids for userId */
export interface GetUserBidsInput {
    userId: Scalars['String']
    first: Scalars['Int']
    after: (Scalars['String'] | null)
    __typename: 'GetUserBidsInput'
}


/** A connection wrapper for highlighted items. */
export interface HighlightedItemConnection {
    /** The list of highlighted item edges. */
    edges: HighlightedItemEdge[]
    __typename: 'HighlightedItemConnection'
}


/** An edge in the highlighted items connection, pairing an item with its display position. */
export interface HighlightedItemEdge {
    /** The item. */
    node: Item
    /** Display position of the highlighted item (lower numbers appear first). */
    position: Scalars['Int']
    __typename: 'HighlightedItemEdge'
}

export type IdType = 'ID' | 'URI'


/** Identity verification status of the logged-in user. */
export interface IdVerificationStatus {
    /** True when the user's identity has been verified. */
    verified: Scalars['Boolean']
    /** When the verification status was last modified, in RFC 3339 format. */
    modifiedAt: Scalars['String']
    __typename: 'IdVerificationStatus'
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
    /** Item sub-title */
    subTitle: (Scalars['String'] | null)
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
    /**
     * Effective bid increment table for this item — the item's override if set,
     * otherwise the parent sale's default, otherwise null.
     */
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
    /** Result of the item (sold or passed). Null if the item has not reached a terminal state. */
    itemResult: (ItemResult | null)
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
    /** Optional lot display number. */
    displayNumber: (Scalars['String'] | null)
    /**
     * Highlight configuration for featuring this item on the sale page.
     * Null if the item is not highlighted.
     */
    highlight: (ItemHighlight | null)
    /** Item notifications if item is part of a live sale */
    notifications: ItemNotification[]
    /**
     * Is logged-in user subscribed to item ?
     * Only applies to sales running on basta.app (false for all api clients)
     */
    isUserSubscribed: Scalars['Boolean']
    /** Allowed BidTypes on the item. */
    allowedBidTypes: BidType[]
    /**
     * @deprecated Use specificationsV2
     * Item specifications (dimensions, weight, type, etc.) - first specification only. Use specificationsV2 for full list.
     */
    specifications: (ItemSpecifications | null)
    /** Item specifications v2 (list with id, quantity, diameter, etc.) */
    specificationsV2: ItemSpecifications[]
    /** Item packaging (boxed dimensions and weight) */
    packaging: ItemPackaging[]
    /** Previous item */
    prevItem: (Item | null)
    /** Next item */
    nextItem: (Item | null)
    /**
     * Unique external identifier for the item, typically utilized for integration with third-party systems.
     * Note: Inherited from the underlying item if not set specifically for the item in the sale.
     */
    externalId: (Scalars['String'] | null)
    /** Location of the item */
    location: (Scalars['String'] | null)
    /** ClosingTimeCountdown. Should be interpreted as milliseconds. */
    closingTimeCountdown: Scalars['Int']
    /** Metafields associated with the item */
    metafields: MetafieldsConnection[]
    /** Metafield associated with the item */
    metafield: (Metafield | null)
    /** Item registration for authenticated user */
    userItemRegistrations: UserItemRegistration[]
    /** Effective fee rules for this item. */
    feeRules: FeeRule[]
    /** Whether the item is hidden from public view. */
    hidden: Scalars['Boolean']
    /**
     * Schema information associated with the item: the effective JSON Schema
     * definition, its identifier, and the user-supplied values matching it.
     * Read-only — set via managementapi. Null when no schema is linked to the
     * underlying sale-item content.
     */
    schema: (ItemSchema | null)
    /** Tags associated with the item. */
    tags: Tag[]
    /**
     * Offers the currently authenticated buyer has made on this item.
     * Returns only the caller's own offers; other buyers' offers are never exposed.
     * An unauthenticated caller receives an empty connection.
     */
    offers: OffersConnection
    /** Whether this item is accepting offers. False when offers are disabled or not configured. */
    offerEnabled: Scalars['Boolean']
    /**
     * Whether this item can be bought outright at a fixed price. False when buy-now is
     * disabled or not configured.
     */
    buyNowEnabled: Scalars['Boolean']
    /**
     * Fixed buy-now price in minor currency unit. Revealed only once the item has
     * closed unsold. Null while the auction is still open, once the item has sold, or
     * when buy-now is disabled or not configured.
     */
    buyNowPrice: (Scalars['Int'] | null)
    /**
     * The terminal non-auction sale of this item (an accepted offer or a buy-now),
     * if any. Null when the item has no direct sell.
     */
    directSell: (DirectSell | null)
    /** Consignors of this item. Returns null unless an account has explicitly opted in to have consignors visible. Empty when none are recorded. */
    consignors: (Consignor[] | null)
    /** The site this item currently resides at, if any. Read-through from the underlying item. Null when the item has no site. */
    site: (Site | null)
    /** The location within its site this item currently resides at, if any. Read-through from the underlying item. Null when the item has no location. */
    siteLocation: (SiteLocation | null)
    /** Section markers of this item's sale whose item-number range covers this item's item number. */
    sectionMarkers: SectionMarker[]
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


/** Configuration for highlighting an item on the sale page. */
export interface ItemHighlight {
    /** Whether the item is highlighted. */
    enabled: Scalars['Boolean']
    /** Display position of the highlighted item (lower numbers appear first). */
    position: Scalars['Int']
    __typename: 'ItemHighlight'
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

export type ItemNotification = (ItemMessageNotification | ItemFairWarningNotification | ItemOfferPlacedNotification | ItemSoldNotification) & { __isUnion?: true }

export interface ItemOfferPlacedNotification {
    /** Id of the notification */
    id: Scalars['String']
    /** Offer amount in minor currency units. */
    amount: Scalars['Int']
    /** ISO-4217 currency code. */
    currency: Scalars['String']
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
    /** Masked identifier of the buyer. By default a stable per-sale-item hash (matches that buyer's Bid.bidderIdentifier on the same item); the buyer's username for accounts configured to expose it. Null when it cannot be computed. */
    buyerIdentifier: (Scalars['String'] | null)
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


/** Result of an item after it has been sold or passed by the auctioneer. */
export type ItemResult = 'WON' | 'PASSED'


/**
 * Schema linkage for an Item. The definition is the effective JSON Schema
 * (including inherited ancestors); data is the user-supplied values matching
 * that schema.
 */
export interface ItemSchema {
    /**
     * Schema id referencing the schemas table. Use to dedupe schema definitions
     * across items that share the same schema.
     */
    id: Scalars['ID']
    /** Effective JSON Schema definition (including inherited ancestors). */
    definition: Scalars['JSON']
    /**
     * User-supplied JSON values matching the schema. Null when no values have
     * been set on the underlying sale-item content.
     */
    data: (Scalars['JSON'] | null)
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
    /** Masked identifier of the buyer. By default a stable per-sale-item hash (matches that buyer's Bid.bidderIdentifier on the same item); the buyer's username for accounts configured to expose it. Null when it cannot be computed. */
    buyerIdentifier: (Scalars['String'] | null)
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


/** Mailing address */
export interface MailingAddress {
    id: Scalars['String']
    name: Scalars['String']
    company: Scalars['String']
    phone: Scalars['String']
    line1: Scalars['String']
    line2: Scalars['String']
    city: Scalars['String']
    state: Scalars['String']
    postalCode: Scalars['String']
    country: Country
    isPrimary: Scalars['Boolean']
    addressType: AddressType
    label: (Scalars['String'] | null)
    __typename: 'MailingAddress'
}

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
    /**
     * Registration associated with this max bid placement. Null when no registration ID
     * is present on the bid.
     */
    registration: (UserSaleRegistration | null)
    __typename: 'MaxBidPlacedSuccess'
}


/** Me object keeps information about the logged in user. */
export interface Me {
    /** Unique user id of the logged in user. Not interchangeable with Consignor.userId. */
    userId: Scalars['String']
    /** First name of the logged in user. */
    firstName: Scalars['String']
    /** Last name of the logged in user. */
    lastName: Scalars['String']
    /** Email of the logged in user. */
    email: Scalars['String']
    /** Username of the logged in user. Null when the user has not set a username. */
    username: (Scalars['String'] | null)
    /** Whether the logged in user's email has been verified. */
    emailVerified: Scalars['Boolean']
    /** Get all bids that a user has placed on sales */
    bids: UserBidsConnection
    /** Offers the authenticated buyer has made, most recent first. */
    offers: OffersConnection
    /** Items the authenticated buyer bought outside the auction (accepted offers / buy-nows), most recent purchase first. */
    directSells: DirectSellsConnection
    /** Consignors the logged in user follows. consignorId is the consignor's internal User.id. */
    followedConsignors: FollowedConsignorsConnection
    /** Accounts for logged in user */
    accounts: Account[]
    /** True if logged in user is a verified Basta bidder */
    verifiedAsBidder: Scalars['Boolean']
    /** Sales the logged in user has added to their watchlist, most recently added first. */
    saleSubscriptions: SaleConnection
    /** Sale items the logged in user has added to their watchlist, most recently added first. */
    saleItemSubscriptions: ItemsConnection
    /** Notification settings for the logged in user. */
    notificationSettings: UserNotificationSettings
    /** Latest items that user has placed a bid on. */
    latestItemBids: ItemsConnection
    /**
     * @deprecated use addresses
     * Primary Billing address
     */
    billingAddress: MailingAddress
    /**
     * @deprecated use addresses
     * Primary Shipping address
     */
    shippingAddress: MailingAddress
    /** Addresses */
    addresses: MailingAddress[]
    /** Phones */
    phoneAddresses: PhoneAddress[]
    /** Default payment method */
    defaultPaymentMethod: (PaymentMethod | null)
    /** True if the logged-in user is blocked from participating in sales. */
    blocked: Scalars['Boolean']
    /**
     * Identity verification status of the logged-in user.
     * Null when the user has never submitted identity verification.
     */
    idVerificationStatus: (IdVerificationStatus | null)
    __typename: 'Me'
}


/** Measurement unit enum */
export type MeasurementUnit = 'NOT_SET' | 'CM' | 'INCH'


/** Object for a metafield */
export interface Metafield {
    id: Scalars['ID']
    key: Scalars['String']
    value: Scalars['String']
    valueType: MetafieldValueType
    __typename: 'Metafield'
}


/** Enum for the value type of a metafield */
export type MetafieldValueType = 'METAFIELD_VALUE_TYPE_SINGLE_LINE_TEXT' | 'METAFIELD_VALUE_TYPE_RICH_TEXT'

export interface MetafieldsConnection {
    /** Metafields edges */
    edges: MetafieldsEdge[]
    /** Metafields nodes */
    nodes: Metafield[]
    /** Current page information */
    pageInfo: PageInfo
    __typename: 'MetafieldsConnection'
}

export interface MetafieldsEdge {
    /** Current metafield cursor */
    cursor: Scalars['String']
    /** Metafield node */
    node: Metafield
    __typename: 'MetafieldsEdge'
}

export interface Mutation {
    /**
     * Place bid on a item for some amount. Can be of type NORMAL, MAX and OFFER.
     * Amount will be the max amount when bid is of type MAX.
     */
    bidOnItem: BidPlaced
    /**
     * Set the user's notification preferences for one account. Only the entries
     * given are changed. The returned list covers what the account sends on, so an
     * entry outside it is stored but not returned.
     */
    setMyNotificationPreferences: UserNotificationPreference[]
    /**
     * Place a bid on a Dutch lot, requesting `quantity` units at the declared per-unit `amount`.
     * `amount` must equal the lot's current clock price exactly; if the clock has ticked since the
     * client read it, the bid is rejected with PRICE_MISMATCH and the client should re-read the
     * current price and retry.
     */
    placeDutchBid: DutchBidPlaced
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
    /** Follow a consignor (User). Idempotent. consignorId is the consignor's internal User.id. */
    followConsignor: FollowConsignorResult
    /** Unfollow a consignor. Idempotent. consignorId is the consignor's internal User.id. */
    unfollowConsignor: FollowConsignorResult
    /** Users can subscribe / favourite an item */
    subsribeToItem: UserSaleItemSubscription
    /** Unsubscribe from item */
    unsubscribeFromItem: Scalars['ID']
    /** Users can subscribe / favourite a sale. */
    subscribeToSale: UserSaleSubscription
    /** Unsubscribe from sale */
    unsubscribeFromSale: Scalars['ID']
    /**
     * Returns session credentials for selected payment provider, e.g. Stripe Customer Session
     * A Customer Session allows you to grant Stripe’s frontend SDKs (like Stripe.js) client-side access control over a Customer.
     */
    createPaymentProviderSession: PaymentProviderSession
    /** Update user information. */
    updateUser: Me
    /** Add a phone number to the logged-in user. */
    createPhone: PhoneAddress
    /** Update one of the logged-in user's phone numbers. */
    updatePhone: PhoneAddress
    /** Delete one of the logged-in user's phone numbers. */
    deletePhone: Scalars['Boolean']
    /** Set default payment method */
    setDefaultPaymentMethod: PaymentMethod
    /**
     * Submit an offer on an item as the authenticated buyer. The buyer identity is
     * derived server-side from the session; it is never taken from client input.
     */
    makeOffer: Offer
    /** Counter an outstanding offer as the buyer. */
    counterOffer: Offer
    /** Accept the seller's outstanding counter on an offer. */
    acceptCounter: Offer
    /** Withdraw an offer the authenticated buyer previously made. */
    withdrawOffer: Offer
    /**
     * Register the authenticated user for a sale. ONLINE and PHONE registrations
     * are supported. The resulting status is decided by the sale's registration
     * rules. If the user is already registered for the sale with the given type,
     * the existing registration is returned unchanged.
     */
    createSaleRegistration: UserSaleRegistration
    /**
     * Register the authenticated user for a single item in a sale. A sale
     * registration of the same type is created for the user when they do not have
     * one yet. If the user is already registered for the item with the given type,
     * the existing registration is returned unchanged.
     */
    createSaleItemRegistration: UserItemRegistration
    __typename: 'Mutation'
}

export type Node = (Department | DutchSale | FeeRule | Item | Metafield | Sale | UserBid) & { __isUnion?: true }


/** Channel a notification can be delivered on. */
export type NotificationChannel = 'EMAIL' | 'SMS'


/** What a notification is about. */
export type NotificationEvent = 'BID_CONFIRMATION' | 'BID_CONFIRMATION_OUTBID' | 'OUTBID' | 'AUTO_BID_PLACED' | 'SALE_REGISTRATION_PENDING' | 'SALE_REGISTRATION_ACCEPTED' | 'SALE_REGISTRATION_REJECTED' | 'SALE_ITEM_REGISTRATION_PHONE' | 'SALE_ITEM_WON' | 'CONSIGNOR_SALE_ITEM_OPENED' | 'SALE_ABOUT_TO_CLOSE' | 'BUY_NOW_PRICE_REDUCED' | 'OFFER_PLACED_CONFIRMATION' | 'OFFER_COUNTERED' | 'OFFER_REJECTED' | 'DIRECT_SELL_WON'


/**
 * A buyer offer on an item. This buyer-facing type never exposes other buyers'
 * identities or the internal deciding user.
 */
export interface Offer {
    /** Offer id. */
    id: Scalars['ID']
    /** Id of the item the offer is on. */
    itemId: Scalars['String']
    /** Offer amount in minor currency units. */
    amount: Scalars['Int']
    /** ISO-4217 currency code. */
    currency: Scalars['String']
    /** Current status of the offer. */
    status: OfferStatus
    /** Optional buyer note attached to the offer. */
    message: (Scalars['String'] | null)
    /** Whose turn it is to respond. Null when the offer is in a terminal state. */
    awaitingParty: (OfferParty | null)
    /** Negotiation history, oldest first. */
    counters: OfferCounter[]
    /** Creation timestamp (RFC3339). */
    created: Scalars['String']
    /** Last-modified timestamp (RFC3339). */
    modified: Scalars['String']
    /** When the offer auto-expires (RFC3339). Null when the offer has no TTL. */
    expiresAt: (Scalars['String'] | null)
    __typename: 'Offer'
}


/** A single counter within an offer negotiation. */
export interface OfferCounter {
    /** Counter id. */
    id: Scalars['ID']
    /** Party that made this counter. */
    party: OfferParty
    /** Counter amount in minor currency units. */
    amount: Scalars['Int']
    /** ISO-4217 currency code. */
    currency: Scalars['String']
    /** Optional note attached to the counter. */
    message: (Scalars['String'] | null)
    /** Creation timestamp (RFC3339). */
    created: Scalars['String']
    __typename: 'OfferCounter'
}


/** Party in an offer negotiation. */
export type OfferParty = 'BUYER' | 'SELLER'


/** Status of an offer. */
export type OfferStatus = 'OFFER_STATUS_PENDING' | 'OFFER_STATUS_ACCEPTED' | 'OFFER_STATUS_REJECTED' | 'OFFER_STATUS_CANCELED' | 'OFFER_STATUS_COUNTERED' | 'OFFER_STATUS_EXPIRED'


/** Relay-style connection of offers. */
export interface OffersConnection {
    edges: OffersEdge[]
    pageInfo: PageInfo
    __typename: 'OffersConnection'
}


/** Edge in an OffersConnection. */
export interface OffersEdge {
    cursor: Scalars['String']
    node: Offer
    __typename: 'OffersEdge'
}

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


/** Payment method union */
export type PaymentMethod = (Card) & { __isUnion?: true }


/** PaymentProviderSession is a union of all possible payment provider sessions. */
export type PaymentProviderSession = (StripePaymentProviderSession) & { __isUnion?: true }

export interface PaymentSession {
    /** Redirection link to payment session url */
    url: Scalars['String']
    /** PaymentSession status */
    status: PaymentSessionStatus
    __typename: 'PaymentSession'
}

export type PaymentSessionStatus = 'WAITING' | 'READY' | 'DONE'

export type Permission = 'BID_ON_ITEM' | 'ACCESS_PRIVATE'

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
     * When this number was confirmed to belong to the account holder (RFC3339).
     * Null means it has not been confirmed. Read-only.
     */
    verifiedAt: (Scalars['String'] | null)
    __typename: 'PhoneAddress'
}

export interface PhoneBidOrigin {
    type: BidOriginType
    __typename: 'PhoneBidOrigin'
}

export type PhoneType = 'UNSPECIFIED' | 'MOBILE' | 'HOME' | 'WORK' | 'FAX'

export interface Query {
    /** Get account information given an accountId */
    account: Account
    /** Get all sales that have been created. */
    sales: SaleConnection
    /** Get information about an sale. */
    sale: Sale
    /**
     * Get information about a sale of any auction format (English or Dutch).
     * Use an inline fragment (e.g. `... on DutchSale`) to read format-specific fields.
     */
    saleV2: SaleV2
    /** Get all sales of any auction format for an account. */
    salesV2: SaleV2Connection
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
    /** Whether the current bidder follows the given consignor. consignorId is the consignor's internal User.id. */
    isFollowingConsignor: Scalars['Boolean']
    /** Public follower count for a consignor. consignorId is the consignor's internal User.id. */
    consignorFollowerCount: Scalars['Int']
    /** Get current server time. */
    serverTime: ServerTime
    /** This method is only available to basta users and front ends written by Basta */
    paymentSession: PaymentSession
    /**
     * Search across different node types in the graph (items and sales).
     * 
     * Using search uses a search index that is eventually consistent, this means we cannot guarantee that the results are always up to date, even though the search index is updated in almost real time.
     * 
     * SALE search only ever returns public sales — hidden and unpublished sales are excluded server-side and cannot be surfaced via any filter.
     * 
     * Example queries:
     *   - Search for items: search(type: ITEM, query: "vintage watch", first: 20)
     *   - Search for sales: search(type: SALE, query: "estate auction", first: 20)
     *   - Next 5 upcoming live sales: search(type: SALE, query: "", filterBy: "status:=PUBLISHED && liveDateEpoch:>1718726400", orderBy: "liveDateEpoch:asc", first: 5)
     */
    search: SearchResultConnection
    /**
     * Get a single offer by id. Returns null when the offer does not belong to the
     * authenticated caller.
     */
    offer: (Offer | null)
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
    /** Currency of the sale as a capitalized ISO-4217 code (e.g. "USD"). */
    currency: (Scalars['String'] | null)
    /** Sale status. */
    status: SaleStatus
    /**
     * Items that have been associated with this sale.
     * Uses cursor-based pagination.
     */
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
    /** Sale format of this sale. Always ENGLISH for this type. */
    saleFormat: SaleFormat
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
    /** Sale registration for authenticated user */
    userSaleRegistrations: UserSaleRegistration[]
    /** True if user has subscribed/favourited the sale */
    isUserSubscribed: Scalars['Boolean']
    /** Unique external identifier for the sale, typically utilized for integration with third-party systems. */
    externalId: (Scalars['String'] | null)
    /** Location of the sale */
    location: (Scalars['String'] | null)
    /** Metafields associated with the sale */
    metafields: MetafieldsConnection[]
    /** Metafield associated with the sale */
    metafield: (Metafield | null)
    /** Restrictions for bidding on a sale */
    bidRestrictions: BidRestrictions
    /** Items that are highlighted for this sale, ordered by position. */
    highlighted: HighlightedItemConnection
    /** Effective fee rules for this sale. */
    feeRules: FeeRule[]
    /** Section markers for this sale, ordered by fromItemNumber. Ranges may overlap. */
    sectionMarkers: SectionMarker[]
    /** The site the sale is held at, if any. */
    site: (Site | null)
    /** Viewing times for the sale. Rich text encoded by the client. */
    viewingTimes: (Scalars['String'] | null)
    /** Buyers notes for the sale. Rich text encoded by the client. */
    buyersNotes: (Scalars['String'] | null)
    /** Fees-apply information for the sale. Rich text encoded by the client. */
    feesApplyInfo: (Scalars['String'] | null)
    __typename: 'Sale'
}

export type SaleActivity = (Sale | Item) & { __isUnion?: true }


/**
 * Polymorphic successor to SaleActivity. Serves both English and Dutch sales keyed by saleId:
 * English sales emit Sale | Item, Dutch sales emit DutchSale | DutchSaleItem.
 */
export type SaleActivityV2 = (Sale | Item | DutchSale | DutchSaleItem) & { __isUnion?: true }

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
    /** Unified closing date across sale types (liveDate for Live, closingDate for Online Timed). Sort/filter with the "effectiveClosingDateEpoch" epoch field. */
    effectiveClosingDate: (Scalars['String'] | null)
    __typename: 'SaleDates'
}


/** The format a sale runs under. */
export type SaleFormat = 'ENGLISH' | 'DUTCH'


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

export type SaleRegistrationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED'

export type SaleRegistrationType = 'ONLINE' | 'PHONE' | 'PADDLE' | 'AGGREGATOR'


/** Sale Status represent what status an sale is currently running in. */
export type SaleStatus = 'UNPUBLISHED' | 'PUBLISHED' | 'OPENED' | 'CLOSED' | 'CLOSING' | 'PAUSED' | 'PROCESSING' | 'LIVE'


/** SaleType represents the type of sale */
export type SaleType = 'LIVE' | 'ONLINE_TIMED'


/**
 * SaleV2 is the polymorphic sale interface spanning every auction format. Use an
 * inline fragment (e.g. `... on DutchSale`) to read format-specific fields.
 */
export type SaleV2 = (DutchSale | Sale) & { __isUnion?: true }

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

export interface SalesEdge {
    /** Current sale cursor */
    cursor: Scalars['String']
    /** Sale node */
    node: Sale
    __typename: 'SalesEdge'
}


/** Page info for search results using page-based pagination. */
export interface SearchPageInfo {
    /** Current page number (1-based) */
    page: Scalars['Int']
    /** Number of results per page */
    pageSize: Scalars['Int']
    /** Total number of pages */
    totalPages: Scalars['Int']
    /** Whether there is a next page */
    hasNextPage: Scalars['Boolean']
    /** Whether there is a previous page */
    hasPreviousPage: Scalars['Boolean']
    /** Total number of results across all pages */
    totalRecords: Scalars['Int']
    __typename: 'SearchPageInfo'
}


/**
 * Connection type for search results.
 * Includes pagination info and facets for filtering.
 */
export interface SearchResultConnection {
    /** Search result edges */
    edges: SearchResultEdge[]
    /** Page-based pagination info */
    pageInfo: SearchPageInfo
    /** Total number of results found */
    resultCount: Scalars['Int']
    /**
     * Facet counts for building filter UIs.
     * Available facets depend on the search type.
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


/**
 * Union type representing a search result item.
 * Depending on the SearchType, this will be an Item, Sale, or other supported nodes.
 */
export type SearchResultItem = (Item | Sale) & { __isUnion?: true }


/** Search type enum specifies what type of node to search for. */
export type SearchType = 'ITEM' | 'SALE'


/**
 * A section marker within a sale. isFeaturedSelection distinguishes a featured
 * selection (summary and an inclusive item-number range) from an editorial
 * section card (may carry an image and an open-ended range).
 */
export interface SectionMarker {
    /** Marker identifier. */
    id: Scalars['ID']
    /** Display title. */
    title: Scalars['String']
    /** Optional rich-text summary. Null when unset. */
    summary: (Scalars['String'] | null)
    /** Lowest item number covered, inclusive. */
    fromItemNumber: Scalars['Int']
    /** Highest item number covered, inclusive. Null when open-ended. */
    toItemNumber: (Scalars['Int'] | null)
    /** Asset id of the marker image, if any. */
    imageAssetId: (Scalars['String'] | null)
    /** URL of the marker image, if any. */
    imageUrl: (Scalars['String'] | null)
    /** True for a featured selection, false for an editorial section card. */
    isFeaturedSelection: Scalars['Boolean']
    __typename: 'SectionMarker'
}

export interface ServerTime {
    /** Current Time */
    currentTime: Scalars['Int']
    __typename: 'ServerTime'
}


/** A physical site where an item resides, exposed to buyers for arranging collection. */
export interface Site {
    /** Display name of the site. */
    name: Scalars['String']
    /** First line of the site address. Null when not set. */
    addressLine1: (Scalars['String'] | null)
    /** Second line of the site address. Null when not set. */
    addressLine2: (Scalars['String'] | null)
    /** City of the site address. Null when not set. */
    addressCity: (Scalars['String'] | null)
    /** Postal code of the site address. Null when not set. */
    addressPostalCode: (Scalars['String'] | null)
    /** ISO country code of the site address. Null when not set. */
    addressCountryIso: (Scalars['String'] | null)
    /** State, province, region, or area of the site address. Null when not set. */
    addressState: (Scalars['String'] | null)
    /** Free-text opening hours of the site. Null when not set. */
    openingHours: (Scalars['String'] | null)
    /** Whether an appointment is required before collecting from the site. */
    appointmentRequired: Scalars['Boolean']
    /**
     * Case-sensitive canonical IANA timezone name of the site (e.g. Europe/London,
     * not europe/london). Null when not set.
     */
    timezone: (Scalars['String'] | null)
    __typename: 'Site'
}


/** A location within a site where an item resides. */
export interface SiteLocation {
    /** Location id. */
    id: Scalars['ID']
    /** Display name of the location. */
    name: Scalars['String']
    __typename: 'SiteLocation'
}


/** Specification sub-type enum */
export type SpecificationSubType = 'NOT_SET' | 'PAINTING_UNFRAMED' | 'PAINTING_FRAMED' | 'PAINTING_FRAMED_PLEXI' | 'PAINTING_FRAMED_GLASS' | 'WORK_ON_PAPER_UNFRAMED' | 'WORK_ON_PAPER_FRAMED' | 'WORK_ON_PAPER_FRAMED_PLEXI' | 'WORK_ON_PAPER_FRAMED_GLASS' | 'MIXED_MEDIA_UNFRAMED' | 'MIXED_MEDIA_FRAMED' | 'MIXED_MEDIA_FRAMED_PLEXI' | 'MIXED_MEDIA_FRAMED_GLASS' | 'PHOTOGRAPH_UNFRAMED' | 'PHOTOGRAPH_FRAMED' | 'PHOTOGRAPH_FRAMED_PLEXI' | 'PHOTOGRAPH_FRAMED_GLASS' | 'NEW_MEDIA' | 'SCULPTURE' | 'PEDESTAL' | 'PEDESTAL_CASE_GLASS' | 'PEDESTAL_CASE_PLEXI' | 'CERAMIC' | 'NEON' | 'TAPESTRY' | 'OTHER_ART' | 'GLASS_SCULPTURE' | 'TABLE' | 'CHAIR' | 'SOFA_LOVESEAT_CHAISE' | 'FLOOR_LAMP' | 'FLOOR_LAMP_SHADE' | 'TABLE_LAMP' | 'TABLE_LAMP_SHADE' | 'SCONCE' | 'OTTOMAN' | 'BOOKCASE_STORAGE' | 'NIGHTSTAND' | 'ARMOIRE_DRESSER' | 'CARPET_RUG' | 'MIRROR' | 'CHANDELIER' | 'BEDFRAME' | 'HEADBOARD' | 'DESK_VANITY' | 'MEDIA_CONSOLE' | 'OTHER_FURNITURE' | 'FOLDING_SCREEN' | 'LIGHTING_FIXTURE' | 'EARRINGS' | 'NECKLACE' | 'BRACELET' | 'RING' | 'BROOCH' | 'WATCH' | 'CUFFLINKS' | 'EYEGLASSES' | 'SET' | 'PRECIOUS_STONES' | 'SNUFF_BOX_CIGARETTE_CASE' | 'OTHER_JEWELRY' | 'VASE_VESSEL' | 'BOWL' | 'PLAQUE' | 'OBJECT_OF_VERTU' | 'CANDELABRA_CANDLESTICK' | 'DINNERWARE' | 'FLATWARE' | 'GLASSWARE' | 'SERVEWARE' | 'PORCELAIN_PLATE' | 'PORCELAIN_BOWL' | 'TABLETOP_ACCESSORY' | 'CLOCK' | 'OTHER_DECORATIVE_ARTS' | 'STAMP' | 'BOOK' | 'COIN' | 'DOCUMENT_MANUSCRIPT' | 'TOY' | 'MINIATURE_MODEL' | 'FIGURINE_DOLL' | 'NEON_SIGN' | 'MEMORABILIA' | 'CAMERA_ELECTRICAL' | 'OTHER_COLLECTIBLES' | 'DECOY' | 'TRADING_CARD' | 'FOSSIL' | 'MINERAL' | 'COLLECTIBLE_APPAREL' | 'WINE_BOTTLE' | 'SPIRITS_BOTTLE' | 'BEER_BOTTLE' | 'WINE_CASE' | 'SPIRITS_CASE' | 'BEER_CASE' | 'WINE_BARREL' | 'SPIRITS_BARREL' | 'BEER_BARREL' | 'OTHER_ALCOHOLS' | 'CAR' | 'MOTORCYCLE' | 'BUS' | 'VAN' | 'LIMOUSINE' | 'CARRIAGE' | 'TRAILER' | 'SIDECAR' | 'OTHER_AUTOMOTIVE' | 'CLOTHING' | 'FOOTWEAR' | 'HANDBAG' | 'ACCESSORIES' | 'OTHER_FASHION' | 'MUSICAL_INSTRUMENT' | 'FIREARM_WEAPON' | 'HUNTING_FISHING' | 'MEDICAL_EQUIPMENT' | 'OTHER' | 'PREPACKED_BOX'


/** Specification type enum */
export type SpecificationType = 'NOT_SET' | 'ART' | 'FURNITURE' | 'JEWELRY' | 'DECORATIVE_ARTS' | 'COLLECTIBLES' | 'ALCOHOL' | 'AUTOMOTIVE' | 'FASHION' | 'OTHER' | 'CLIENT_PACKAGE'


/**
 * StripePaymentProviderSession provides credentials for client-side Stripe integration.
 * A Customer Session allows you to grant Stripe’s frontend SDKs (like Stripe.js) client-side access control over a Customer.
 */
export interface StripePaymentProviderSession {
    /** Publishable Key */
    publishableKey: Scalars['String']
    /** Customer Session Client Secret */
    customerSessionClientSecret: Scalars['String']
    /** Setup Intent Client Secret */
    setupIntentClientSecret: Scalars['String']
    __typename: 'StripePaymentProviderSession'
}

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
    /**
     * Subscription for Sale and Item updates, supporting both English and Dutch sales.
     * English sales emit Sale | Item; Dutch sales emit DutchSale | DutchSaleItem.
     */
    saleActivityV2: (SaleActivityV2 | null)
    /** Periodic server time updates to syncronize clocks in applications using Basta. */
    serverTimeChanged: ServerTime
    __typename: 'Subscription'
}


/** A tag associated with an item. */
export interface Tag {
    /** id of tag */
    id: Scalars['ID']
    /** Tag name */
    name: Scalars['String']
    __typename: 'Tag'
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
    /**
     * Registration associated with this bid. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration: (UserSaleRegistration | null)
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


/** Item registration */
export interface UserItemRegistration {
    /** Id of the item registration */
    id: Scalars['ID']
    /** Sale registration ID this item registration belongs to */
    saleRegistration: UserSaleRegistration
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber: (PhoneAddress | null)
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers: (PhoneAddress[] | null)
    __typename: 'UserItemRegistration'
}


/** Whether the user has opted in to one notification on one delivery channel. */
export interface UserNotificationPreference {
    notification: NotificationEvent
    channel: NotificationChannel
    optedIn: Scalars['Boolean']
    __typename: 'UserNotificationPreference'
}


/** Notification settings for the logged in user. */
export interface UserNotificationSettings {
    /**
     * One preference per notification and delivery channel the account sends on.
     * Empty when preferences do not apply to this user.
     */
    preferences: UserNotificationPreference[]
    __typename: 'UserNotificationSettings'
}

export interface UserSaleItemSubscription {
    accountId: Scalars['String']
    saleId: Scalars['String']
    itemId: Scalars['String']
    userId: Scalars['String']
    __typename: 'UserSaleItemSubscription'
}

export interface UserSaleRegistration {
    /** Id of the registration */
    id: Scalars['ID']
    /** Sale ID that the user is registering for */
    saleId: Scalars['String']
    /** User ID of the person registering */
    userId: Scalars['String']
    /** Type of registration */
    registrationType: SaleRegistrationType
    /** Status of the registration */
    status: SaleRegistrationStatus
    /** Policy results */
    policyResults: SaleRegistrationPolicyResult[]
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber: (PhoneAddress | null)
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers: (PhoneAddress[] | null)
    /**
     * Registration identifier. Paddle number for paddle registrations,
     * assigned identifier for online/phone/aggregator registrations.
     */
    identifier: (Scalars['String'] | null)
    __typename: 'UserSaleRegistration'
}

export interface UserSaleSubscription {
    accountId: Scalars['String']
    saleId: Scalars['String']
    userId: Scalars['String']
    __typename: 'UserSaleSubscription'
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
    /** Metafields associated with the account */
    metafields?: (MetafieldsConnectionGenqlSelection & { __args?: {input?: (GetMetafieldsInput | null)} })
    /** Metafield associated with the account */
    metafield?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldInput} })
    /**
     * Departments of the account, ordered alphabetically by name.
     * Pass the previous page's endCursor as `after` to fetch the next page.
     */
    departments?: (DepartmentConnectionGenqlSelection & { __args?: {
    /** Number of departments to return, at most 200. */
    first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
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
     * Masked identifier for the bidder. By default a stable per-sale-item hash of the
     * bidder; for accounts configured to do so, the bidder's username. Null when it
     * cannot be computed.
     */
    bidderIdentifier?: boolean | number
    /** Optional paddle if bid is associated with a paddle. */
    paddle?: PaddleGenqlSelection
    /** Reactive bid if bid was placed as a side effect of a max bid */
    reactiveBid?: boolean | number
    /** BidOrigin */
    bidOrigin?: BidOriginGenqlSelection
    /**
     * Registration associated with this bid. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration?: UserSaleRegistrationGenqlSelection
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
    /**
     * Registration associated with this bid placement. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration?: UserSaleRegistrationGenqlSelection
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


/** Card payment method */
export interface CardGenqlSelection{
    /** Unique card id */
    id?: boolean | number
    /** Card brand, e.g. Visa, Mastercard, Amex */
    brand?: boolean | number
    /** Card expiration month */
    expirationMonth?: boolean | number
    /** Card expiration year */
    expirationYear?: boolean | number
    /** Last 4 digits of card number */
    last4?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A consignor of an item — one of the parties selling it. */
export interface ConsignorGenqlSelection{
    /** The consignor's Basta user id. Not interchangeable with Me.userId. */
    userId?: boolean | number
    /** Whether this consignor is the main consignor — the seller. */
    isMain?: boolean | number
    /** The consignor's username. Null when not set. */
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the buyer countering an outstanding offer. */
export interface CounterOfferInput {offerId: Scalars['ID'],amount: Scalars['Int'],currency: Scalars['String'],message?: (Scalars['String'] | null)}


/** Input for adding a phone number to the logged-in user. */
export interface CreatePhoneInput {
/**
 * Full phone number in E.164 format (e.g., +15551234567)
 * Includes country code, number, and optional extension using RFC 3966 format
 * Example: +1-555-123-4567;ext=1234
 */
phoneNumber: Scalars['String'],
/** Phone type (mobile, home, work, fax) */
phoneType: PhoneType,
/**
 * When true, this becomes the primary phone of its type, replacing any phone
 * that is currently primary for that type.
 */
isPrimary: Scalars['Boolean'],
/** Label */
label?: (Scalars['String'] | null)}


/** Input for registering the authenticated user for a single item in a sale. */
export interface CreateSaleItemRegistrationInput {
/** Sale the item belongs to. */
saleId: Scalars['String'],
/** Item to register for. */
itemId: Scalars['String'],
/** Type of registration. ONLINE and PHONE are supported. */
type: SaleRegistrationType,
/** Phone number to call when bidding by phone. Only valid when type is PHONE. */
identifier?: (Scalars['String'] | null),
/**
 * Preferred phone number to call, referencing one of the authenticated user's
 * own phone numbers. Only valid when type is PHONE.
 */
preferredPhoneNumberId?: (Scalars['ID'] | null),
/**
 * Fallback phone numbers to call, referencing the authenticated user's own
 * phone numbers. Only valid when type is PHONE.
 */
alternativePhoneNumberIds?: (Scalars['ID'][] | null)}


/** Input for registering the authenticated user for a sale. */
export interface CreateSaleRegistrationInput {
/** Sale to register for. */
saleId: Scalars['String'],
/** Type of registration. ONLINE and PHONE are supported. */
type: SaleRegistrationType,
/** Phone number to call when bidding by phone. Only valid when type is PHONE. */
identifier?: (Scalars['String'] | null),
/**
 * Preferred phone number to call, referencing one of the authenticated user's
 * own phone numbers. Only valid when type is PHONE.
 */
preferredPhoneNumberId?: (Scalars['ID'] | null),
/**
 * Fallback phone numbers to call, referencing the authenticated user's own
 * phone numbers. Only valid when type is PHONE.
 */
alternativePhoneNumberIds?: (Scalars['ID'][] | null)}

export interface CurrentItemGenqlSelection{
    item?: ItemGenqlSelection
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A department groups an account's sales, e.g. "Paintings" or "Jewellery". */
export interface DepartmentGenqlSelection{
    /** ID of the department. Use it to filter search results by department. */
    id?: boolean | number
    /** Display name of the department. */
    name?: boolean | number
    /** URL-friendly identifier. */
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DepartmentConnectionGenqlSelection{
    edges?: DepartmentEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DepartmentEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DepartmentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The terminal non-auction sale of an item — an accepted offer or a buy-now. */
export interface DirectSellGenqlSelection{
    /** Amount paid in minor currency units. */
    amount?: boolean | number
    /** ISO-4217 currency code. */
    currency?: boolean | number
    /** How the sale was initiated. */
    source?: boolean | number
    /** When the sale was recorded (RFC3339). */
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Relay-style connection of the authenticated buyer's direct sells. */
export interface DirectSellsConnectionGenqlSelection{
    edges?: DirectSellsEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge in a DirectSellsConnection. */
export interface DirectSellsEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A bid accepted on a Dutch lot at the clock price at acceptance time. */
export interface DutchBidGenqlSelection{
    id?: boolean | number
    /** The clock price at which this bid was accepted. */
    amount?: boolean | number
    placedAt?: boolean | number
    /** Whether this bid belongs to the requesting user. */
    mine?: boolean | number
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

export interface DutchBidPlacedGenqlSelection{
    on_DutchBidPlacedSuccess?:DutchBidPlacedSuccessGenqlSelection,
    on_DutchBidPlacedError?:DutchBidPlacedErrorGenqlSelection,
    __typename?: boolean | number
}


/** A rejected Dutch bid. errorCode says why the bid was not accepted. */
export interface DutchBidPlacedErrorGenqlSelection{
    errorCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A successfully placed Dutch bid. The price is the clock price at acceptance time; under a
 * partial-fill policy quantityAllocated may be less than quantityRequested. To read the lot's
 * remaining inventory after the bid, re-read the lot's DutchSaleItem.unitsRemaining.
 */
export interface DutchBidPlacedSuccessGenqlSelection{
    id?: boolean | number
    /** Clock price at which the bid was accepted (sale currency minor unit). */
    amount?: boolean | number
    quantityRequested?: boolean | number
    /** Units actually allocated; may be less than requested under a partial-fill policy. */
    quantityAllocated?: boolean | number
    placedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single scheduled price drop on a Dutch lot. */
export interface DutchNextDropGenqlSelection{
    /** The price after this drop, clamped to the floor. */
    price?: boolean | number
    /** When the drop happens (RFC3339). */
    at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The live price for a Dutch lot: the current clock price and the next scheduled drop. */
export interface DutchPriceGenqlSelection{
    /** The current clock price. */
    current?: boolean | number
    /**
     * The next scheduled drop, or null when the price is not descending — the lot has not
     * opened yet or has reached its floor.
     */
    nextDrop?: DutchNextDropGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single dated price drop in a Dutch lot's schedule. */
export interface DutchPriceDropGenqlSelection{
    /** When the drop takes effect (RFC3339). */
    at?: boolean | number
    /** The price in effect from this drop until the next one (or the floor). */
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A Dutch (descending-clock) sale. Each lot's price drops on a fixed schedule until a
 * bidder accepts.
 */
export interface DutchSaleGenqlSelection{
    id?: boolean | number
    accountId?: boolean | number
    title?: boolean | number
    description?: boolean | number
    currency?: boolean | number
    status?: boolean | number
    dates?: SaleDatesGenqlSelection
    saleFormat?: boolean | number
    /** Images attached to the sale. */
    images?: ImageGenqlSelection
    /** The Dutch lots in this sale. */
    items?: (DutchSaleItemConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Dutch lot, with its price schedule and live price. */
export interface DutchSaleItemGenqlSelection{
    id?: boolean | number
    saleId?: boolean | number
    status?: boolean | number
    /** Total units offered for this lot, fixed at creation. */
    availableUnits?: boolean | number
    /** Units still available after all accepted bids. */
    unitsRemaining?: boolean | number
    /** Total number of accepted bids on this lot. */
    totalBids?: boolean | number
    openTime?: boolean | number
    endTime?: boolean | number
    /** The live price: current clock price and the next scheduled drop. */
    price?: DutchPriceGenqlSelection
    /**
     * The full price-drop schedule for this lot. Null when the schedule is not exposed to
     * clients — today it is always present.
     */
    schedule?: DutchScheduleGenqlSelection
    title?: boolean | number
    subTitle?: boolean | number
    description?: boolean | number
    /** Images attached to the lot. */
    images?: ImageGenqlSelection
    /** Accepted bids on this lot. */
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


/**
 * The full descending-price schedule for a Dutch lot: the opening price and every dated
 * drop from openTime onward. Nullable so the schedule can be withheld from clients in the
 * future without a breaking schema change — today it is always populated.
 */
export interface DutchScheduleGenqlSelection{
    /** The opening price, in effect from openTime until the first drop. */
    startingAmount?: boolean | number
    /**
     * The dated drops, ordered by time. Each is at or after openTime, strictly later than the
     * previous drop, and strictly lower in price.
     */
    drops?: DutchPriceDropGenqlSelection
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


/** Facet count for a specific field, containing all unique values and their counts. */
export interface FacetCountGenqlSelection{
    /** The field name this facet represents (e.g., "status", "tags", "reserveMet") */
    fieldName?: boolean | number
    /** Individual value counts for this field */
    counts?: FacetValueGenqlSelection
    /** Statistical information for numeric fields (optional) */
    stats?: FacetStatsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Statistical information for numeric facet fields */
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
    /**
     * The value to filter by (pass it back in filterBy). Usually human-readable
     * (e.g. "OPEN", "EUR"), but for some facets it is an opaque id — e.g. the
     * departmentIds facet's value is a department id.
     */
    value?: boolean | number
    /** Number of items with this value */
    count?: boolean | number
    /** Highlighted value (may include search term highlighting) */
    highlighted?: boolean | number
    /**
     * A friendly value to render to clients. Equals value for most facets; it
     * differs only when value is an opaque id (e.g. the departmentIds facet resolves
     * each id to its department name). Render this, filter by value.
     */
    label?: boolean | number
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
     * PROGRESSIVE applies the rate only to the portion of the amount within each bracket.
     */
    calculationType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Result of a follow/unfollow-consignor mutation. Idempotent; reflects the terminal follow state.
 * consignorId is the consignor User's internal User.id.
 */
export interface FollowConsignorResultGenqlSelection{
    consignorId?: boolean | number
    following?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A consignor (User) that the current bidder follows.
 * consignorId is the consignor's internal User.id.
 */
export interface FollowedConsignorGenqlSelection{
    consignorId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FollowedConsignorsConnectionGenqlSelection{
    edges?: FollowedConsignorsEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FollowedConsignorsEdgeGenqlSelection{
    cursor?: boolean | number
    node?: FollowedConsignorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for getting a single metafield connected to a specific entity */
export interface GetMetafieldInput {key: Scalars['String']}


/** Input for getting multiple metafields connected to a specific entity, we return at max 10 metafields */
export interface GetMetafieldsInput {keys?: (Scalars['String'][] | null)}


/** Input parameters to get all bids for userId */
export interface GetUserBidsInputGenqlSelection{
    userId?: boolean | number
    first?: boolean | number
    after?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection wrapper for highlighted items. */
export interface HighlightedItemConnectionGenqlSelection{
    /** The list of highlighted item edges. */
    edges?: HighlightedItemEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in the highlighted items connection, pairing an item with its display position. */
export interface HighlightedItemEdgeGenqlSelection{
    /** The item. */
    node?: ItemGenqlSelection
    /** Display position of the highlighted item (lower numbers appear first). */
    position?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Identity verification status of the logged-in user. */
export interface IdVerificationStatusGenqlSelection{
    /** True when the user's identity has been verified. */
    verified?: boolean | number
    /** When the verification status was last modified, in RFC 3339 format. */
    modifiedAt?: boolean | number
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
    /** Item sub-title */
    subTitle?: boolean | number
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
    /**
     * Effective bid increment table for this item — the item's override if set,
     * otherwise the parent sale's default, otherwise null.
     */
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
    /** Result of the item (sold or passed). Null if the item has not reached a terminal state. */
    itemResult?: boolean | number
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
    /** Optional lot display number. */
    displayNumber?: boolean | number
    /**
     * Highlight configuration for featuring this item on the sale page.
     * Null if the item is not highlighted.
     */
    highlight?: ItemHighlightGenqlSelection
    /** Item notifications if item is part of a live sale */
    notifications?: ItemNotificationGenqlSelection
    /**
     * Is logged-in user subscribed to item ?
     * Only applies to sales running on basta.app (false for all api clients)
     */
    isUserSubscribed?: boolean | number
    /** Allowed BidTypes on the item. */
    allowedBidTypes?: boolean | number
    /**
     * @deprecated Use specificationsV2
     * Item specifications (dimensions, weight, type, etc.) - first specification only. Use specificationsV2 for full list.
     */
    specifications?: ItemSpecificationsGenqlSelection
    /** Item specifications v2 (list with id, quantity, diameter, etc.) */
    specificationsV2?: ItemSpecificationsGenqlSelection
    /** Item packaging (boxed dimensions and weight) */
    packaging?: ItemPackagingGenqlSelection
    /** Previous item */
    prevItem?: (ItemGenqlSelection & { __args?: {sortBy?: (ItemOrderField | null)} })
    /** Next item */
    nextItem?: (ItemGenqlSelection & { __args?: {sortBy?: (ItemOrderField | null)} })
    /**
     * Unique external identifier for the item, typically utilized for integration with third-party systems.
     * Note: Inherited from the underlying item if not set specifically for the item in the sale.
     */
    externalId?: boolean | number
    /** Location of the item */
    location?: boolean | number
    /** ClosingTimeCountdown. Should be interpreted as milliseconds. */
    closingTimeCountdown?: boolean | number
    /** Metafields associated with the item */
    metafields?: (MetafieldsConnectionGenqlSelection & { __args?: {input?: (GetMetafieldsInput | null)} })
    /** Metafield associated with the item */
    metafield?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldInput} })
    /** Item registration for authenticated user */
    userItemRegistrations?: UserItemRegistrationGenqlSelection
    /** Effective fee rules for this item. */
    feeRules?: FeeRuleGenqlSelection
    /** Whether the item is hidden from public view. */
    hidden?: boolean | number
    /**
     * Schema information associated with the item: the effective JSON Schema
     * definition, its identifier, and the user-supplied values matching it.
     * Read-only — set via managementapi. Null when no schema is linked to the
     * underlying sale-item content.
     */
    schema?: ItemSchemaGenqlSelection
    /** Tags associated with the item. */
    tags?: TagGenqlSelection
    /**
     * Offers the currently authenticated buyer has made on this item.
     * Returns only the caller's own offers; other buyers' offers are never exposed.
     * An unauthenticated caller receives an empty connection.
     */
    offers?: (OffersConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), status?: (OfferStatus | null)} })
    /** Whether this item is accepting offers. False when offers are disabled or not configured. */
    offerEnabled?: boolean | number
    /**
     * Whether this item can be bought outright at a fixed price. False when buy-now is
     * disabled or not configured.
     */
    buyNowEnabled?: boolean | number
    /**
     * Fixed buy-now price in minor currency unit. Revealed only once the item has
     * closed unsold. Null while the auction is still open, once the item has sold, or
     * when buy-now is disabled or not configured.
     */
    buyNowPrice?: boolean | number
    /**
     * The terminal non-auction sale of this item (an accepted offer or a buy-now),
     * if any. Null when the item has no direct sell.
     */
    directSell?: DirectSellGenqlSelection
    /** Consignors of this item. Returns null unless an account has explicitly opted in to have consignors visible. Empty when none are recorded. */
    consignors?: ConsignorGenqlSelection
    /** The site this item currently resides at, if any. Read-through from the underlying item. Null when the item has no site. */
    site?: SiteGenqlSelection
    /** The location within its site this item currently resides at, if any. Read-through from the underlying item. Null when the item has no location. */
    siteLocation?: SiteLocationGenqlSelection
    /** Section markers of this item's sale whose item-number range covers this item's item number. */
    sectionMarkers?: SectionMarkerGenqlSelection
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


/** Configuration for highlighting an item on the sale page. */
export interface ItemHighlightGenqlSelection{
    /** Whether the item is highlighted. */
    enabled?: boolean | number
    /** Display position of the highlighted item (lower numbers appear first). */
    position?: boolean | number
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
    on_ItemOfferPlacedNotification?:ItemOfferPlacedNotificationGenqlSelection,
    on_ItemSoldNotification?:ItemSoldNotificationGenqlSelection,
    __typename?: boolean | number
}

export interface ItemOfferPlacedNotificationGenqlSelection{
    /** Id of the notification */
    id?: boolean | number
    /** Offer amount in minor currency units. */
    amount?: boolean | number
    /** ISO-4217 currency code. */
    currency?: boolean | number
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
    /** Masked identifier of the buyer. By default a stable per-sale-item hash (matches that buyer's Bid.bidderIdentifier on the same item); the buyer's username for accounts configured to expose it. Null when it cannot be computed. */
    buyerIdentifier?: boolean | number
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


/**
 * Schema linkage for an Item. The definition is the effective JSON Schema
 * (including inherited ancestors); data is the user-supplied values matching
 * that schema.
 */
export interface ItemSchemaGenqlSelection{
    /**
     * Schema id referencing the schemas table. Use to dedupe schema definitions
     * across items that share the same schema.
     */
    id?: boolean | number
    /** Effective JSON Schema definition (including inherited ancestors). */
    definition?: boolean | number
    /**
     * User-supplied JSON values matching the schema. Null when no values have
     * been set on the underlying sale-item content.
     */
    data?: boolean | number
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
    /** Masked identifier of the buyer. By default a stable per-sale-item hash (matches that buyer's Bid.bidderIdentifier on the same item); the buyer's username for accounts configured to expose it. Null when it cannot be computed. */
    buyerIdentifier?: boolean | number
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


/** Mailing address */
export interface MailingAddressGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    company?: boolean | number
    phone?: boolean | number
    line1?: boolean | number
    line2?: boolean | number
    city?: boolean | number
    state?: boolean | number
    postalCode?: boolean | number
    country?: boolean | number
    isPrimary?: boolean | number
    addressType?: boolean | number
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for mailing address. */
export interface MailingAddressInput {
/** Address ID (optional for create, required for update) */
id?: (Scalars['String'] | null),name: Scalars['String'],company: Scalars['String'],phone: Scalars['String'],line1: Scalars['String'],line2: Scalars['String'],city: Scalars['String'],state: Scalars['String'],postalCode?: (Scalars['String'] | null),country: Country,isPrimary?: (Scalars['Boolean'] | null),label?: (Scalars['String'] | null)}


/** Input for making an offer on an item. */
export interface MakeOfferInput {itemId: Scalars['String'],amount: Scalars['Int'],currency: Scalars['String'],message?: (Scalars['String'] | null),
/**
 * Id of the sale the item belongs to. Carries the sale context so the offer is
 * scoped to the original auction and surfaces in that sale's bid feed.
 */
saleId: Scalars['String']}

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
    /**
     * Registration associated with this max bid placement. Null when no registration ID
     * is present on the bid.
     */
    registration?: UserSaleRegistrationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Me object keeps information about the logged in user. */
export interface MeGenqlSelection{
    /** Unique user id of the logged in user. Not interchangeable with Consignor.userId. */
    userId?: boolean | number
    /** First name of the logged in user. */
    firstName?: boolean | number
    /** Last name of the logged in user. */
    lastName?: boolean | number
    /** Email of the logged in user. */
    email?: boolean | number
    /** Username of the logged in user. Null when the user has not set a username. */
    username?: boolean | number
    /** Whether the logged in user's email has been verified. */
    emailVerified?: boolean | number
    /** Get all bids that a user has placed on sales */
    bids?: (UserBidsConnectionGenqlSelection & { __args: {first: Scalars['Int'], after?: (Scalars['String'] | null)} })
    /** Offers the authenticated buyer has made, most recent first. */
    offers?: (OffersConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), status?: (OfferStatus | null)} })
    /** Items the authenticated buyer bought outside the auction (accepted offers / buy-nows), most recent purchase first. */
    directSells?: (DirectSellsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Consignors the logged in user follows. consignorId is the consignor's internal User.id. */
    followedConsignors?: (FollowedConsignorsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Accounts for logged in user */
    accounts?: AccountGenqlSelection
    /** True if logged in user is a verified Basta bidder */
    verifiedAsBidder?: boolean | number
    /** Sales the logged in user has added to their watchlist, most recently added first. */
    saleSubscriptions?: (SaleConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Sale items the logged in user has added to their watchlist, most recently added first. */
    saleItemSubscriptions?: (ItemsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null)} })
    /** Notification settings for the logged in user. */
    notificationSettings?: UserNotificationSettingsGenqlSelection
    /** Latest items that user has placed a bid on. */
    latestItemBids?: (ItemsConnectionGenqlSelection & { __args?: {first?: (Scalars['Int'] | null)} })
    /**
     * @deprecated use addresses
     * Primary Billing address
     */
    billingAddress?: MailingAddressGenqlSelection
    /**
     * @deprecated use addresses
     * Primary Shipping address
     */
    shippingAddress?: MailingAddressGenqlSelection
    /** Addresses */
    addresses?: MailingAddressGenqlSelection
    /** Phones */
    phoneAddresses?: PhoneAddressGenqlSelection
    /** Default payment method */
    defaultPaymentMethod?: PaymentMethodGenqlSelection
    /** True if the logged-in user is blocked from participating in sales. */
    blocked?: boolean | number
    /**
     * Identity verification status of the logged-in user.
     * Null when the user has never submitted identity verification.
     */
    idVerificationStatus?: IdVerificationStatusGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Object for a metafield */
export interface MetafieldGenqlSelection{
    id?: boolean | number
    key?: boolean | number
    value?: boolean | number
    valueType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetafieldsConnectionGenqlSelection{
    /** Metafields edges */
    edges?: MetafieldsEdgeGenqlSelection
    /** Metafields nodes */
    nodes?: MetafieldGenqlSelection
    /** Current page information */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetafieldsEdgeGenqlSelection{
    /** Current metafield cursor */
    cursor?: boolean | number
    /** Metafield node */
    node?: MetafieldGenqlSelection
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
     * Set the user's notification preferences for one account. Only the entries
     * given are changed. The returned list covers what the account sends on, so an
     * entry outside it is stored but not returned.
     */
    setMyNotificationPreferences?: (UserNotificationPreferenceGenqlSelection & { __args: {preferences: UserNotificationPreferenceInput[]} })
    /**
     * Place a bid on a Dutch lot, requesting `quantity` units at the declared per-unit `amount`.
     * `amount` must equal the lot's current clock price exactly; if the clock has ticked since the
     * client read it, the bid is rejected with PRICE_MISMATCH and the client should re-read the
     * current price and retry.
     */
    placeDutchBid?: (DutchBidPlacedGenqlSelection & { __args: {saleId: Scalars['String'], itemId: Scalars['String'], quantity: Scalars['Int'], amount: Scalars['Int']} })
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
    /** Follow a consignor (User). Idempotent. consignorId is the consignor's internal User.id. */
    followConsignor?: (FollowConsignorResultGenqlSelection & { __args: {consignorId: Scalars['ID']} })
    /** Unfollow a consignor. Idempotent. consignorId is the consignor's internal User.id. */
    unfollowConsignor?: (FollowConsignorResultGenqlSelection & { __args: {consignorId: Scalars['ID']} })
    /** Users can subscribe / favourite an item */
    subsribeToItem?: (UserSaleItemSubscriptionGenqlSelection & { __args: {saleId: Scalars['String'], itemId: Scalars['String']} })
    /** Unsubscribe from item */
    unsubscribeFromItem?: { __args: {saleId: Scalars['String'], itemId: Scalars['String']} }
    /** Users can subscribe / favourite a sale. */
    subscribeToSale?: (UserSaleSubscriptionGenqlSelection & { __args: {saleId: Scalars['String']} })
    /** Unsubscribe from sale */
    unsubscribeFromSale?: { __args: {saleId: Scalars['String']} }
    /**
     * Returns session credentials for selected payment provider, e.g. Stripe Customer Session
     * A Customer Session allows you to grant Stripe’s frontend SDKs (like Stripe.js) client-side access control over a Customer.
     */
    createPaymentProviderSession?: (PaymentProviderSessionGenqlSelection & { __args: {input: PaymentProviderSessionInput} })
    /** Update user information. */
    updateUser?: (MeGenqlSelection & { __args: {input: UpdateUserInput} })
    /** Add a phone number to the logged-in user. */
    createPhone?: (PhoneAddressGenqlSelection & { __args: {input: CreatePhoneInput} })
    /** Update one of the logged-in user's phone numbers. */
    updatePhone?: (PhoneAddressGenqlSelection & { __args: {input: UpdatePhoneInput} })
    /** Delete one of the logged-in user's phone numbers. */
    deletePhone?: { __args: {phoneId: Scalars['String']} }
    /** Set default payment method */
    setDefaultPaymentMethod?: (PaymentMethodGenqlSelection & { __args: {input: SetDefaultPaymentMethodInput} })
    /**
     * Submit an offer on an item as the authenticated buyer. The buyer identity is
     * derived server-side from the session; it is never taken from client input.
     */
    makeOffer?: (OfferGenqlSelection & { __args: {input: MakeOfferInput} })
    /** Counter an outstanding offer as the buyer. */
    counterOffer?: (OfferGenqlSelection & { __args: {input: CounterOfferInput} })
    /** Accept the seller's outstanding counter on an offer. */
    acceptCounter?: (OfferGenqlSelection & { __args: {offerId: Scalars['ID']} })
    /** Withdraw an offer the authenticated buyer previously made. */
    withdrawOffer?: (OfferGenqlSelection & { __args: {offerId: Scalars['ID']} })
    /**
     * Register the authenticated user for a sale. ONLINE and PHONE registrations
     * are supported. The resulting status is decided by the sale's registration
     * rules. If the user is already registered for the sale with the given type,
     * the existing registration is returned unchanged.
     */
    createSaleRegistration?: (UserSaleRegistrationGenqlSelection & { __args: {input: CreateSaleRegistrationInput} })
    /**
     * Register the authenticated user for a single item in a sale. A sale
     * registration of the same type is created for the user when they do not have
     * one yet. If the user is already registered for the item with the given type,
     * the existing registration is returned unchanged.
     */
    createSaleItemRegistration?: (UserItemRegistrationGenqlSelection & { __args: {input: CreateSaleItemRegistrationInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeGenqlSelection{
    /** Identification of the node. */
    id?: boolean | number
    on_Department?: DepartmentGenqlSelection
    on_DutchSale?: DutchSaleGenqlSelection
    on_FeeRule?: FeeRuleGenqlSelection
    on_Item?: ItemGenqlSelection
    on_Metafield?: MetafieldGenqlSelection
    on_Sale?: SaleGenqlSelection
    on_UserBid?: UserBidGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A buyer offer on an item. This buyer-facing type never exposes other buyers'
 * identities or the internal deciding user.
 */
export interface OfferGenqlSelection{
    /** Offer id. */
    id?: boolean | number
    /** Id of the item the offer is on. */
    itemId?: boolean | number
    /** Offer amount in minor currency units. */
    amount?: boolean | number
    /** ISO-4217 currency code. */
    currency?: boolean | number
    /** Current status of the offer. */
    status?: boolean | number
    /** Optional buyer note attached to the offer. */
    message?: boolean | number
    /** Whose turn it is to respond. Null when the offer is in a terminal state. */
    awaitingParty?: boolean | number
    /** Negotiation history, oldest first. */
    counters?: OfferCounterGenqlSelection
    /** Creation timestamp (RFC3339). */
    created?: boolean | number
    /** Last-modified timestamp (RFC3339). */
    modified?: boolean | number
    /** When the offer auto-expires (RFC3339). Null when the offer has no TTL. */
    expiresAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single counter within an offer negotiation. */
export interface OfferCounterGenqlSelection{
    /** Counter id. */
    id?: boolean | number
    /** Party that made this counter. */
    party?: boolean | number
    /** Counter amount in minor currency units. */
    amount?: boolean | number
    /** ISO-4217 currency code. */
    currency?: boolean | number
    /** Optional note attached to the counter. */
    message?: boolean | number
    /** Creation timestamp (RFC3339). */
    created?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Relay-style connection of offers. */
export interface OffersConnectionGenqlSelection{
    edges?: OffersEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge in an OffersConnection. */
export interface OffersEdgeGenqlSelection{
    cursor?: boolean | number
    node?: OfferGenqlSelection
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


/** Payment method union */
export interface PaymentMethodGenqlSelection{
    on_Card?:CardGenqlSelection,
    __typename?: boolean | number
}


/** PaymentProviderSession is a union of all possible payment provider sessions. */
export interface PaymentProviderSessionGenqlSelection{
    on_StripePaymentProviderSession?:StripePaymentProviderSessionGenqlSelection,
    __typename?: boolean | number
}

export interface PaymentProviderSessionInput {
/** Account identifier */
accountId: Scalars['String']}

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
     * When this number was confirmed to belong to the account holder (RFC3339).
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

export interface QueryGenqlSelection{
    /** Get account information given an accountId */
    account?: (AccountGenqlSelection & { __args: {id: Scalars['String'], idType?: (IdType | null)} })
    /** Get all sales that have been created. */
    sales?: (SaleConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleFilter | null), idType?: (IdType | null)} })
    /** Get information about an sale. */
    sale?: (SaleGenqlSelection & { __args: {id: Scalars['String'], idType?: (IdType | null)} })
    /**
     * Get information about a sale of any auction format (English or Dutch).
     * Use an inline fragment (e.g. `... on DutchSale`) to read format-specific fields.
     */
    saleV2?: (SaleV2GenqlSelection & { __args: {id: Scalars['String'], idType?: (IdType | null)} })
    /** Get all sales of any auction format for an account. */
    salesV2?: (SaleV2ConnectionGenqlSelection & { __args: {accountId: Scalars['String'], first?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), filter?: (SaleFilter | null), idType?: (IdType | null)} })
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
    /** Whether the current bidder follows the given consignor. consignorId is the consignor's internal User.id. */
    isFollowingConsignor?: { __args: {consignorId: Scalars['ID']} }
    /** Public follower count for a consignor. consignorId is the consignor's internal User.id. */
    consignorFollowerCount?: { __args: {accountId: Scalars['String'], consignorId: Scalars['ID']} }
    /** Get current server time. */
    serverTime?: ServerTimeGenqlSelection
    /** This method is only available to basta users and front ends written by Basta */
    paymentSession?: (PaymentSessionGenqlSelection & { __args?: {input?: (PaymentSessionInput | null)} })
    /**
     * Search across different node types in the graph (items and sales).
     * 
     * Using search uses a search index that is eventually consistent, this means we cannot guarantee that the results are always up to date, even though the search index is updated in almost real time.
     * 
     * SALE search only ever returns public sales — hidden and unpublished sales are excluded server-side and cannot be surfaced via any filter.
     * 
     * Example queries:
     *   - Search for items: search(type: ITEM, query: "vintage watch", first: 20)
     *   - Search for sales: search(type: SALE, query: "estate auction", first: 20)
     *   - Next 5 upcoming live sales: search(type: SALE, query: "", filterBy: "status:=PUBLISHED && liveDateEpoch:>1718726400", orderBy: "liveDateEpoch:asc", first: 5)
     */
    search?: (SearchResultConnectionGenqlSelection & { __args: {
    /** Account ID to search within. */
    accountId: Scalars['String'], 
    /** The type of node to search for (ITEM or SALE) */
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
     * For ITEM: title, description, tags
     * For SALE: saleTitle, description
     */
    queryBy?: (Scalars['String'][] | null), 
    /**
     * Sort results by field and direction.
     * Format: "field:direction" (e.g., "title:asc", "createdAt:desc")
     * If not provided, results are sorted by relevance.
     * 
     * For SALE, sort on the epoch (Unix-seconds) date fields, not the display date strings:
     * "liveDateEpoch:asc", "openDateEpoch:asc", "closingDateEpoch:desc", "createdTimestamp:desc".
     * Use "effectiveClosingDateEpoch:asc" to order a mixed list of all sale types by their unified closing date.
     */
    orderBy?: (Scalars['String'] | null), 
    /**
     * Additional filter conditions specific to the search type.
     * 
     * For ITEM filters, examples:
     *   - "saleId:=xyz789"
     *   - "reserveMet:true"
     *   - "currentBid:>= 10000"
     * 
     * For SALE filters, examples:
     *   - "status:=PUBLISHED"                  (sale status vocabulary: LIVE, PUBLISHED, OPENED, CLOSING, CLOSED, PAUSED, PROCESSING — NOT the ITEM_* item statuses)
     *   - "liveDateEpoch:>1718726400"          (date filters use epoch seconds, not the display date strings)
     *   - "effectiveClosingDateEpoch:>1718726400" (unified closing date across sale types, e.g. upcoming only)
     *   - "watchedByUserIds:=[user-id]"        (sales on a user's watchlist)
     * 
     * Multiple conditions can be combined with AND using &&.
     * Note: filtering on hidden/accountId and the || operator are rejected. For SALE, visibility (public-only) is enforced server-side and cannot be widened via filterBy.
     */
    filterBy?: (Scalars['String'] | null), 
    /**
     * Facet fields to compute counts for. Only used when the `facets` field is selected.
     * If omitted, the server facets on its full default allowlist for the type.
     * Naming a subset narrows faceting to those fields; fields outside the allowlist are ignored.
     */
    facetBy?: (Scalars['String'][] | null)} })
    /**
     * Get a single offer by id. Returns null when the offer does not belong to the
     * authenticated caller.
     */
    offer?: (OfferGenqlSelection & { __args: {id: Scalars['ID']} })
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
    /** Currency of the sale as a capitalized ISO-4217 code (e.g. "USD"). */
    currency?: boolean | number
    /** Sale status. */
    status?: boolean | number
    /**
     * Items that have been associated with this sale.
     * Uses cursor-based pagination.
     */
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
    /** Sale format of this sale. Always ENGLISH for this type. */
    saleFormat?: boolean | number
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
    /** Sale registration for authenticated user */
    userSaleRegistrations?: UserSaleRegistrationGenqlSelection
    /** True if user has subscribed/favourited the sale */
    isUserSubscribed?: boolean | number
    /** Unique external identifier for the sale, typically utilized for integration with third-party systems. */
    externalId?: boolean | number
    /** Location of the sale */
    location?: boolean | number
    /** Metafields associated with the sale */
    metafields?: (MetafieldsConnectionGenqlSelection & { __args?: {input?: (GetMetafieldsInput | null)} })
    /** Metafield associated with the sale */
    metafield?: (MetafieldGenqlSelection & { __args: {input: GetMetafieldInput} })
    /** Restrictions for bidding on a sale */
    bidRestrictions?: BidRestrictionsGenqlSelection
    /** Items that are highlighted for this sale, ordered by position. */
    highlighted?: HighlightedItemConnectionGenqlSelection
    /** Effective fee rules for this sale. */
    feeRules?: FeeRuleGenqlSelection
    /** Section markers for this sale, ordered by fromItemNumber. Ranges may overlap. */
    sectionMarkers?: SectionMarkerGenqlSelection
    /** The site the sale is held at, if any. */
    site?: SiteGenqlSelection
    /** Viewing times for the sale. Rich text encoded by the client. */
    viewingTimes?: boolean | number
    /** Buyers notes for the sale. Rich text encoded by the client. */
    buyersNotes?: boolean | number
    /** Fees-apply information for the sale. Rich text encoded by the client. */
    feesApplyInfo?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SaleActivityGenqlSelection{
    on_Sale?:SaleGenqlSelection,
    on_Item?:ItemGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_SaleV2?: SaleV2GenqlSelection,
    __typename?: boolean | number
}


/**
 * Polymorphic successor to SaleActivity. Serves both English and Dutch sales keyed by saleId:
 * English sales emit Sale | Item, Dutch sales emit DutchSale | DutchSaleItem.
 */
export interface SaleActivityV2GenqlSelection{
    on_Sale?:SaleGenqlSelection,
    on_Item?:ItemGenqlSelection,
    on_DutchSale?:DutchSaleGenqlSelection,
    on_DutchSaleItem?:DutchSaleItemGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_SaleV2?: SaleV2GenqlSelection,
    __typename?: boolean | number
}

export interface SaleChangedGenqlSelection{
    on_Sale?:SaleGenqlSelection,
    on_ServerTime?:ServerTimeGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_SaleV2?: SaleV2GenqlSelection,
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
    /** Unified closing date across sale types (liveDate for Live, closingDate for Online Timed). Sort/filter with the "effectiveClosingDateEpoch" epoch field. */
    effectiveClosingDate?: boolean | number
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


/**
 * SaleV2 is the polymorphic sale interface spanning every auction format. Use an
 * inline fragment (e.g. `... on DutchSale`) to read format-specific fields.
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

export interface SalesEdgeGenqlSelection{
    /** Current sale cursor */
    cursor?: boolean | number
    /** Sale node */
    node?: SaleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page info for search results using page-based pagination. */
export interface SearchPageInfoGenqlSelection{
    /** Current page number (1-based) */
    page?: boolean | number
    /** Number of results per page */
    pageSize?: boolean | number
    /** Total number of pages */
    totalPages?: boolean | number
    /** Whether there is a next page */
    hasNextPage?: boolean | number
    /** Whether there is a previous page */
    hasPreviousPage?: boolean | number
    /** Total number of results across all pages */
    totalRecords?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Connection type for search results.
 * Includes pagination info and facets for filtering.
 */
export interface SearchResultConnectionGenqlSelection{
    /** Search result edges */
    edges?: SearchResultEdgeGenqlSelection
    /** Page-based pagination info */
    pageInfo?: SearchPageInfoGenqlSelection
    /** Total number of results found */
    resultCount?: boolean | number
    /**
     * Facet counts for building filter UIs.
     * Available facets depend on the search type.
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


/**
 * Union type representing a search result item.
 * Depending on the SearchType, this will be an Item, Sale, or other supported nodes.
 */
export interface SearchResultItemGenqlSelection{
    on_Item?:ItemGenqlSelection,
    on_Sale?:SaleGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_SaleV2?: SaleV2GenqlSelection,
    __typename?: boolean | number
}


/**
 * A section marker within a sale. isFeaturedSelection distinguishes a featured
 * selection (summary and an inclusive item-number range) from an editorial
 * section card (may carry an image and an open-ended range).
 */
export interface SectionMarkerGenqlSelection{
    /** Marker identifier. */
    id?: boolean | number
    /** Display title. */
    title?: boolean | number
    /** Optional rich-text summary. Null when unset. */
    summary?: boolean | number
    /** Lowest item number covered, inclusive. */
    fromItemNumber?: boolean | number
    /** Highest item number covered, inclusive. Null when open-ended. */
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

export interface ServerTimeGenqlSelection{
    /** Current Time */
    currentTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for setting default payment method. */
export interface SetDefaultPaymentMethodInput {
/** Payment method identifier. */
paymentMethodId: Scalars['String']}


/** A physical site where an item resides, exposed to buyers for arranging collection. */
export interface SiteGenqlSelection{
    /** Display name of the site. */
    name?: boolean | number
    /** First line of the site address. Null when not set. */
    addressLine1?: boolean | number
    /** Second line of the site address. Null when not set. */
    addressLine2?: boolean | number
    /** City of the site address. Null when not set. */
    addressCity?: boolean | number
    /** Postal code of the site address. Null when not set. */
    addressPostalCode?: boolean | number
    /** ISO country code of the site address. Null when not set. */
    addressCountryIso?: boolean | number
    /** State, province, region, or area of the site address. Null when not set. */
    addressState?: boolean | number
    /** Free-text opening hours of the site. Null when not set. */
    openingHours?: boolean | number
    /** Whether an appointment is required before collecting from the site. */
    appointmentRequired?: boolean | number
    /**
     * Case-sensitive canonical IANA timezone name of the site (e.g. Europe/London,
     * not europe/london). Null when not set.
     */
    timezone?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A location within a site where an item resides. */
export interface SiteLocationGenqlSelection{
    /** Location id. */
    id?: boolean | number
    /** Display name of the location. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * StripePaymentProviderSession provides credentials for client-side Stripe integration.
 * A Customer Session allows you to grant Stripe’s frontend SDKs (like Stripe.js) client-side access control over a Customer.
 */
export interface StripePaymentProviderSessionGenqlSelection{
    /** Publishable Key */
    publishableKey?: boolean | number
    /** Customer Session Client Secret */
    customerSessionClientSecret?: boolean | number
    /** Setup Intent Client Secret */
    setupIntentClientSecret?: boolean | number
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
    /**
     * Subscription for Sale and Item updates, supporting both English and Dutch sales.
     * English sales emit Sale | Item; Dutch sales emit DutchSale | DutchSaleItem.
     */
    saleActivityV2?: (SaleActivityV2GenqlSelection & { __args: {saleId: Scalars['ID'], itemIdFilter?: (ItemIdsFilter | null)} })
    /** Periodic server time updates to syncronize clocks in applications using Basta. */
    serverTimeChanged?: ServerTimeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A tag associated with an item. */
export interface TagGenqlSelection{
    /** id of tag */
    id?: boolean | number
    /** Tag name */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for updating one of the logged-in user's phone numbers. */
export interface UpdatePhoneInput {
/** ID of the phone to update */
id: Scalars['String'],
/**
 * Full phone number in E.164 format (e.g., +15551234567)
 * Includes country code, number, and optional extension using RFC 3966 format
 * Example: +1-555-123-4567;ext=1234
 */
phoneNumber: Scalars['String'],
/** Phone type (mobile, home, work, fax) */
phoneType: PhoneType,
/**
 * When true, this becomes the primary phone of its type, replacing any phone
 * that is currently primary for that type.
 */
isPrimary: Scalars['Boolean'],
/** Label */
label?: (Scalars['String'] | null)}


/** Input for updating user information. */
export interface UpdateUserInput {
/** Set Primary Billing address */
billingAddress?: (MailingAddressInput | null),
/** Set Primary Shipping address */
shippingAddress?: (MailingAddressInput | null),
/** Update the signed-in user's primary mobile phone number. */
phone?: (Scalars['String'] | null),
/** Update first name. B2B-only; must be supplied together with lastName. */
firstName?: (Scalars['String'] | null),
/** Update last name. B2B-only; must be supplied together with firstName. */
lastName?: (Scalars['String'] | null)}

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
    /**
     * Registration associated with this bid. Null when no registration ID
     * is present on the bid (e.g. pre-registration bids).
     */
    registration?: UserSaleRegistrationGenqlSelection
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


/** Item registration */
export interface UserItemRegistrationGenqlSelection{
    /** Id of the item registration */
    id?: boolean | number
    /** Sale registration ID this item registration belongs to */
    saleRegistration?: UserSaleRegistrationGenqlSelection
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber?: PhoneAddressGenqlSelection
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers?: PhoneAddressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Whether the user has opted in to one notification on one delivery channel. */
export interface UserNotificationPreferenceGenqlSelection{
    notification?: boolean | number
    channel?: boolean | number
    optedIn?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserNotificationPreferenceInput {notification: NotificationEvent,channel: NotificationChannel,optedIn: Scalars['Boolean']}


/** Notification settings for the logged in user. */
export interface UserNotificationSettingsGenqlSelection{
    /**
     * One preference per notification and delivery channel the account sends on.
     * Empty when preferences do not apply to this user.
     */
    preferences?: UserNotificationPreferenceGenqlSelection
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

export interface UserSaleRegistrationGenqlSelection{
    /** Id of the registration */
    id?: boolean | number
    /** Sale ID that the user is registering for */
    saleId?: boolean | number
    /** User ID of the person registering */
    userId?: boolean | number
    /** Type of registration */
    registrationType?: boolean | number
    /** Status of the registration */
    status?: boolean | number
    /** Policy results */
    policyResults?: SaleRegistrationPolicyResultGenqlSelection
    /** Preferred phonenumber for the registration of type PHONE */
    preferredPhoneNumber?: PhoneAddressGenqlSelection
    /** Alternative phonenumbers for the registration of type PHONE */
    alternativePhoneNumbers?: PhoneAddressGenqlSelection
    /**
     * Registration identifier. Paddle number for paddle registrations,
     * assigned identifier for online/phone/aggregator registrations.
     */
    identifier?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserSaleSubscriptionGenqlSelection{
    accountId?: boolean | number
    saleId?: boolean | number
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
    


    const BidRestrictions_possibleTypes: string[] = ['BidRestrictions']
    export const isBidRestrictions = (obj?: { __typename?: any } | null): obj is BidRestrictions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidRestrictions"')
      return BidRestrictions_possibleTypes.includes(obj.__typename)
    }
    


    const BidderVerificationLink_possibleTypes: string[] = ['BidderVerificationLink']
    export const isBidderVerificationLink = (obj?: { __typename?: any } | null): obj is BidderVerificationLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBidderVerificationLink"')
      return BidderVerificationLink_possibleTypes.includes(obj.__typename)
    }
    


    const Card_possibleTypes: string[] = ['Card']
    export const isCard = (obj?: { __typename?: any } | null): obj is Card => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCard"')
      return Card_possibleTypes.includes(obj.__typename)
    }
    


    const Consignor_possibleTypes: string[] = ['Consignor']
    export const isConsignor = (obj?: { __typename?: any } | null): obj is Consignor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConsignor"')
      return Consignor_possibleTypes.includes(obj.__typename)
    }
    


    const CurrentItem_possibleTypes: string[] = ['CurrentItem']
    export const isCurrentItem = (obj?: { __typename?: any } | null): obj is CurrentItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrentItem"')
      return CurrentItem_possibleTypes.includes(obj.__typename)
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
    


    const DirectSellsConnection_possibleTypes: string[] = ['DirectSellsConnection']
    export const isDirectSellsConnection = (obj?: { __typename?: any } | null): obj is DirectSellsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDirectSellsConnection"')
      return DirectSellsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const DirectSellsEdge_possibleTypes: string[] = ['DirectSellsEdge']
    export const isDirectSellsEdge = (obj?: { __typename?: any } | null): obj is DirectSellsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDirectSellsEdge"')
      return DirectSellsEdge_possibleTypes.includes(obj.__typename)
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
    


    const DutchBidPlaced_possibleTypes: string[] = ['DutchBidPlacedSuccess','DutchBidPlacedError']
    export const isDutchBidPlaced = (obj?: { __typename?: any } | null): obj is DutchBidPlaced => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchBidPlaced"')
      return DutchBidPlaced_possibleTypes.includes(obj.__typename)
    }
    


    const DutchBidPlacedError_possibleTypes: string[] = ['DutchBidPlacedError']
    export const isDutchBidPlacedError = (obj?: { __typename?: any } | null): obj is DutchBidPlacedError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchBidPlacedError"')
      return DutchBidPlacedError_possibleTypes.includes(obj.__typename)
    }
    


    const DutchBidPlacedSuccess_possibleTypes: string[] = ['DutchBidPlacedSuccess']
    export const isDutchBidPlacedSuccess = (obj?: { __typename?: any } | null): obj is DutchBidPlacedSuccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchBidPlacedSuccess"')
      return DutchBidPlacedSuccess_possibleTypes.includes(obj.__typename)
    }
    


    const DutchNextDrop_possibleTypes: string[] = ['DutchNextDrop']
    export const isDutchNextDrop = (obj?: { __typename?: any } | null): obj is DutchNextDrop => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchNextDrop"')
      return DutchNextDrop_possibleTypes.includes(obj.__typename)
    }
    


    const DutchPrice_possibleTypes: string[] = ['DutchPrice']
    export const isDutchPrice = (obj?: { __typename?: any } | null): obj is DutchPrice => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDutchPrice"')
      return DutchPrice_possibleTypes.includes(obj.__typename)
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
    


    const FollowConsignorResult_possibleTypes: string[] = ['FollowConsignorResult']
    export const isFollowConsignorResult = (obj?: { __typename?: any } | null): obj is FollowConsignorResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFollowConsignorResult"')
      return FollowConsignorResult_possibleTypes.includes(obj.__typename)
    }
    


    const FollowedConsignor_possibleTypes: string[] = ['FollowedConsignor']
    export const isFollowedConsignor = (obj?: { __typename?: any } | null): obj is FollowedConsignor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFollowedConsignor"')
      return FollowedConsignor_possibleTypes.includes(obj.__typename)
    }
    


    const FollowedConsignorsConnection_possibleTypes: string[] = ['FollowedConsignorsConnection']
    export const isFollowedConsignorsConnection = (obj?: { __typename?: any } | null): obj is FollowedConsignorsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFollowedConsignorsConnection"')
      return FollowedConsignorsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const FollowedConsignorsEdge_possibleTypes: string[] = ['FollowedConsignorsEdge']
    export const isFollowedConsignorsEdge = (obj?: { __typename?: any } | null): obj is FollowedConsignorsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFollowedConsignorsEdge"')
      return FollowedConsignorsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const GetUserBidsInput_possibleTypes: string[] = ['GetUserBidsInput']
    export const isGetUserBidsInput = (obj?: { __typename?: any } | null): obj is GetUserBidsInput => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUserBidsInput"')
      return GetUserBidsInput_possibleTypes.includes(obj.__typename)
    }
    


    const HighlightedItemConnection_possibleTypes: string[] = ['HighlightedItemConnection']
    export const isHighlightedItemConnection = (obj?: { __typename?: any } | null): obj is HighlightedItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHighlightedItemConnection"')
      return HighlightedItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const HighlightedItemEdge_possibleTypes: string[] = ['HighlightedItemEdge']
    export const isHighlightedItemEdge = (obj?: { __typename?: any } | null): obj is HighlightedItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHighlightedItemEdge"')
      return HighlightedItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const IdVerificationStatus_possibleTypes: string[] = ['IdVerificationStatus']
    export const isIdVerificationStatus = (obj?: { __typename?: any } | null): obj is IdVerificationStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIdVerificationStatus"')
      return IdVerificationStatus_possibleTypes.includes(obj.__typename)
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
    


    const ItemHighlight_possibleTypes: string[] = ['ItemHighlight']
    export const isItemHighlight = (obj?: { __typename?: any } | null): obj is ItemHighlight => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemHighlight"')
      return ItemHighlight_possibleTypes.includes(obj.__typename)
    }
    


    const ItemMessageNotification_possibleTypes: string[] = ['ItemMessageNotification']
    export const isItemMessageNotification = (obj?: { __typename?: any } | null): obj is ItemMessageNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemMessageNotification"')
      return ItemMessageNotification_possibleTypes.includes(obj.__typename)
    }
    


    const ItemNotification_possibleTypes: string[] = ['ItemMessageNotification','ItemFairWarningNotification','ItemOfferPlacedNotification','ItemSoldNotification']
    export const isItemNotification = (obj?: { __typename?: any } | null): obj is ItemNotification => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItemNotification"')
      return ItemNotification_possibleTypes.includes(obj.__typename)
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
    


    const MailingAddress_possibleTypes: string[] = ['MailingAddress']
    export const isMailingAddress = (obj?: { __typename?: any } | null): obj is MailingAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMailingAddress"')
      return MailingAddress_possibleTypes.includes(obj.__typename)
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
    


    const Metafield_possibleTypes: string[] = ['Metafield']
    export const isMetafield = (obj?: { __typename?: any } | null): obj is Metafield => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafield"')
      return Metafield_possibleTypes.includes(obj.__typename)
    }
    


    const MetafieldsConnection_possibleTypes: string[] = ['MetafieldsConnection']
    export const isMetafieldsConnection = (obj?: { __typename?: any } | null): obj is MetafieldsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafieldsConnection"')
      return MetafieldsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MetafieldsEdge_possibleTypes: string[] = ['MetafieldsEdge']
    export const isMetafieldsEdge = (obj?: { __typename?: any } | null): obj is MetafieldsEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafieldsEdge"')
      return MetafieldsEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Department','DutchSale','FeeRule','Item','Metafield','Sale','UserBid']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
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
    


    const PaymentMethod_possibleTypes: string[] = ['Card']
    export const isPaymentMethod = (obj?: { __typename?: any } | null): obj is PaymentMethod => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentMethod"')
      return PaymentMethod_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentProviderSession_possibleTypes: string[] = ['StripePaymentProviderSession']
    export const isPaymentProviderSession = (obj?: { __typename?: any } | null): obj is PaymentProviderSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentProviderSession"')
      return PaymentProviderSession_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentSession_possibleTypes: string[] = ['PaymentSession']
    export const isPaymentSession = (obj?: { __typename?: any } | null): obj is PaymentSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentSession"')
      return PaymentSession_possibleTypes.includes(obj.__typename)
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
    


    const SaleActivityV2_possibleTypes: string[] = ['Sale','Item','DutchSale','DutchSaleItem']
    export const isSaleActivityV2 = (obj?: { __typename?: any } | null): obj is SaleActivityV2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleActivityV2"')
      return SaleActivityV2_possibleTypes.includes(obj.__typename)
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
    


    const SaleRegistrationPolicyResult_possibleTypes: string[] = ['SaleRegistrationPolicyResult']
    export const isSaleRegistrationPolicyResult = (obj?: { __typename?: any } | null): obj is SaleRegistrationPolicyResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSaleRegistrationPolicyResult"')
      return SaleRegistrationPolicyResult_possibleTypes.includes(obj.__typename)
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
    


    const SalesEdge_possibleTypes: string[] = ['SalesEdge']
    export const isSalesEdge = (obj?: { __typename?: any } | null): obj is SalesEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSalesEdge"')
      return SalesEdge_possibleTypes.includes(obj.__typename)
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
    


    const SearchResultItem_possibleTypes: string[] = ['Item','Sale']
    export const isSearchResultItem = (obj?: { __typename?: any } | null): obj is SearchResultItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchResultItem"')
      return SearchResultItem_possibleTypes.includes(obj.__typename)
    }
    


    const SectionMarker_possibleTypes: string[] = ['SectionMarker']
    export const isSectionMarker = (obj?: { __typename?: any } | null): obj is SectionMarker => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSectionMarker"')
      return SectionMarker_possibleTypes.includes(obj.__typename)
    }
    


    const ServerTime_possibleTypes: string[] = ['ServerTime']
    export const isServerTime = (obj?: { __typename?: any } | null): obj is ServerTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServerTime"')
      return ServerTime_possibleTypes.includes(obj.__typename)
    }
    


    const Site_possibleTypes: string[] = ['Site']
    export const isSite = (obj?: { __typename?: any } | null): obj is Site => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSite"')
      return Site_possibleTypes.includes(obj.__typename)
    }
    


    const SiteLocation_possibleTypes: string[] = ['SiteLocation']
    export const isSiteLocation = (obj?: { __typename?: any } | null): obj is SiteLocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSiteLocation"')
      return SiteLocation_possibleTypes.includes(obj.__typename)
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
    


    const UserItemRegistration_possibleTypes: string[] = ['UserItemRegistration']
    export const isUserItemRegistration = (obj?: { __typename?: any } | null): obj is UserItemRegistration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserItemRegistration"')
      return UserItemRegistration_possibleTypes.includes(obj.__typename)
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
    


    const UserSaleItemSubscription_possibleTypes: string[] = ['UserSaleItemSubscription']
    export const isUserSaleItemSubscription = (obj?: { __typename?: any } | null): obj is UserSaleItemSubscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSaleItemSubscription"')
      return UserSaleItemSubscription_possibleTypes.includes(obj.__typename)
    }
    


    const UserSaleRegistration_possibleTypes: string[] = ['UserSaleRegistration']
    export const isUserSaleRegistration = (obj?: { __typename?: any } | null): obj is UserSaleRegistration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSaleRegistration"')
      return UserSaleRegistration_possibleTypes.includes(obj.__typename)
    }
    


    const UserSaleSubscription_possibleTypes: string[] = ['UserSaleSubscription']
    export const isUserSaleSubscription = (obj?: { __typename?: any } | null): obj is UserSaleSubscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserSaleSubscription"')
      return UserSaleSubscription_possibleTypes.includes(obj.__typename)
    }
    

export const enumAddressType = {
   BILLING: 'BILLING' as const,
   SHIPPING: 'SHIPPING' as const,
   OTHER: 'OTHER' as const
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
   ITEM_ALREADY_CLOSED: 'ITEM_ALREADY_CLOSED' as const,
   USER_REQUIRED_TO_HAVE_ACCEPTED_REGISTRATION_FOR_SALE: 'USER_REQUIRED_TO_HAVE_ACCEPTED_REGISTRATION_FOR_SALE' as const,
   USER_REGISTRATION_REJECTED_FOR_SALE: 'USER_REGISTRATION_REJECTED_FOR_SALE' as const,
   USER_REGISTRATION_PENDING_FOR_SALE: 'USER_REGISTRATION_PENDING_FOR_SALE' as const
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

export const enumDirectSellSource = {
   OFFER: 'OFFER' as const,
   BUY: 'BUY' as const
}

export const enumDutchBidErrorCode = {
   NOT_OPEN: 'NOT_OPEN' as const,
   ENDED: 'ENDED' as const,
   SOLD_OUT: 'SOLD_OUT' as const,
   BIDDER_LIMIT_REACHED: 'BIDDER_LIMIT_REACHED' as const,
   CLOSED: 'CLOSED' as const,
   PRICE_MISMATCH: 'PRICE_MISMATCH' as const
}

export const enumDutchItemStatus = {
   NOT_OPEN: 'NOT_OPEN' as const,
   OPEN: 'OPEN' as const,
   CLOSED: 'CLOSED' as const
}

export const enumFeeCalculationType = {
   FLAT: 'FLAT' as const,
   PROGRESSIVE: 'PROGRESSIVE' as const
}

export const enumFeeRuleType = {
   NOT_SET: 'NOT_SET' as const,
   PERCENTAGE: 'PERCENTAGE' as const,
   AMOUNT: 'AMOUNT' as const
}

export const enumIdType = {
   ID: 'ID' as const,
   URI: 'URI' as const
}

export const enumItemOrderField = {
   ITEM_NUMBER: 'ITEM_NUMBER' as const,
   CREATED: 'CREATED' as const
}

export const enumItemResult = {
   WON: 'WON' as const,
   PASSED: 'PASSED' as const
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

export const enumMetafieldValueType = {
   METAFIELD_VALUE_TYPE_SINGLE_LINE_TEXT: 'METAFIELD_VALUE_TYPE_SINGLE_LINE_TEXT' as const,
   METAFIELD_VALUE_TYPE_RICH_TEXT: 'METAFIELD_VALUE_TYPE_RICH_TEXT' as const
}

export const enumNotificationChannel = {
   EMAIL: 'EMAIL' as const,
   SMS: 'SMS' as const
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
   CONSIGNOR_SALE_ITEM_OPENED: 'CONSIGNOR_SALE_ITEM_OPENED' as const,
   SALE_ABOUT_TO_CLOSE: 'SALE_ABOUT_TO_CLOSE' as const,
   BUY_NOW_PRICE_REDUCED: 'BUY_NOW_PRICE_REDUCED' as const,
   OFFER_PLACED_CONFIRMATION: 'OFFER_PLACED_CONFIRMATION' as const,
   OFFER_COUNTERED: 'OFFER_COUNTERED' as const,
   OFFER_REJECTED: 'OFFER_REJECTED' as const,
   DIRECT_SELL_WON: 'DIRECT_SELL_WON' as const
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

export const enumPhoneType = {
   UNSPECIFIED: 'UNSPECIFIED' as const,
   MOBILE: 'MOBILE' as const,
   HOME: 'HOME' as const,
   WORK: 'WORK' as const,
   FAX: 'FAX' as const
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

export const enumSaleFormat = {
   ENGLISH: 'ENGLISH' as const,
   DUTCH: 'DUTCH' as const
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
   ITEM: 'ITEM' as const,
   SALE: 'SALE' as const
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

export const enumWeightUnit = {
   NOT_SET: 'NOT_SET' as const,
   KG: 'KG' as const,
   LB: 'LB' as const
}
