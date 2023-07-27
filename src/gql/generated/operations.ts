export const GET_ACCOUNT_BY_HANDLE = `query GET_ACCOUNT_BY_HANDLE($handle: String!) {
  accountByHandle(handle: $handle) {
    id
    name
    handle
    description
    imageUrl
    links {
      type
      url
      __typename
    }
    __typename
  }
}`;

export const GET_ACCOUNT_BY_ID = `query GET_ACCOUNT_BY_ID($accountId: String!) {
  account(id: $accountId) {
    id
    name
    handle
    description
    imageUrl
    links {
      type
      url
      __typename
    }
    __typename
  }
}`;

export const GET_ME = `query GET_ME {
  me {
    userId
    bids(first: 0) {
      edges {
        cursor
        node {
          id
          userId
          saleId
          itemId
          amount
          maxAmount
          bidDate
          __typename
        }
        __typename
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        __typename
      }
      __typename
    }
    accounts {
      id
      name
      handle
      description
      imageUrl
      links {
        type
        url
        __typename
      }
      __typename
    }
    __typename
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
          itemDates {
            __typename
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

export const ITEM_CHANGED = `subscription ITEM_CHANGED($saleId: ID!, $itemIds: [ID!]!) {
  itemChanged(saleId: $saleId, itemIds: $itemIds) {
    ... on Item {
      id
      saleId
      currentBid
      bidStatus
      totalBids
      status
      nextAsks
      reserveMet
      itemDates {
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
