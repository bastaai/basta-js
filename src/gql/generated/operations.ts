export const BID_ON_ITEM = `mutation BID_ON_ITEM($saleId: String!, $itemId: String!, $amount: Int!, $type: BidType!) {
  bidOnItem(saleId: $saleId, itemId: $itemId, amount: $amount, type: $type) {
    __typename
    ... on BidPlacedSuccess {
      __typename
      bidStatus
      date
      amount
    }
    ... on MaxBidPlacedSuccess {
      __typename
      bidStatus
      date
      amount
    }
    ... on BidPlacedError {
      __typename
      errorCode
      error
    }
  }
}`;

export const GET_ACCOUNT_BY_ID = `query GET_ACCOUNT_BY_ID($accountId: String!) {
  account(id: $accountId) {
    __typename
    id
    name
    handle
    description
    imageUrl
    links {
      __typename
      type
      url
    }
  }
}`;

export const GET_SALE = `query GET_SALE($id: String!) {
  sale(id: $id) {
    __typename
    id
    accountId
    title
    description
    currency
    status
    sequenceNumber
    closingMethod
    images {
      __typename
      id
      url
      order
    }
    items {
      __typename
      edges {
        __typename
        cursor
        node {
          __typename
          id
          saleId
          title
          description
          status
          startingBid
          currentBid
          bidStatus
          totalBids
          nextAsks
          reserveMet
          reserveStatus
          images {
            __typename
            id
            url
            order
          }
          bids {
            __typename
            saleId
            itemId
            amount
            maxAmount
            date
            bidStatus
            bidderIdentifier
          }
          userBids {
            __typename
            saleId
            itemId
            amount
            maxAmount
            date
            bidStatus
            bidderIdentifier
          }
          dates {
            __typename
            openDate
            closingStart
            closingEnd
          }
        }
      }
      pageInfo {
        __typename
        startCursor
        endCursor
        hasNextPage
      }
    }
    incrementTable {
      rangeRules {
        __typename
        highRange
        lowRange
        step
      }
    }
    dates {
      __typename
      openDate
      closingDate
    }
  }
}`;

export const ITEM_CHANGED = `subscription ITEM_CHANGED($saleId: ID!, $itemIds: [ID!]!, $nextAsksIterations: Int) {
  itemChanged(saleId: $saleId, itemIds: $itemIds) {
    ... on Item {
      id
      saleId
      currentBid
      bidStatus
      totalBids
      status
      nextAsks(iterations: $nextAsksIterations)
      reserveMet
      reserveStatus
      dates {
        openDate
        closingStart
        closingEnd
      }
      bids {
        amount
        maxAmount
        date
        bidStatus
        saleId
        itemId
        bidderIdentifier
      }
      userBids {
        amount
        maxAmount
        date
        bidStatus
        saleId
        itemId
        bidderIdentifier
      }
    }
    ... on ServerTime {
      currentTime
    }
  }
}`;
