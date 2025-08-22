export const BID_ON_ITEM = `mutation BID_ON_ITEM($saleId: String!, $itemId: String!, $amount: Int!, $type: BidType!) {
  bidOnItem(saleId: $saleId, itemId: $itemId, amount: $amount, type: $type) {
    ... on BidPlacedSuccess {
      id
      bidStatus
      date
      amount
    }
    ... on MaxBidPlacedSuccess {
      id
      bidStatus
      date
      amount
    }
    ... on BidPlacedError {
      errorCode
      error
    }
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
      __typename
      type
      url
    }
  }
}`;

export const GET_SALE = `query GET_SALE($id: String!) {
  sale(id: $id) {
    id
    cursor
    accountId
    title
    description
    currency
    status
    items {
      edges {
        cursor
        node {
          id
          cursor
          saleId
          accountId
          title
          description
          currency
          estimates {
            low
            high
          }
          currentBid
          bidStatus
          totalBids
          bids {
            id
            saleId
            itemId
            amount
            maxAmount
            date
            bidStatus
            bidderIdentifier
            paddle {
              identifier
              type
              created
            }
            reactiveBid
          }
          userBids {
            id
            saleId
            itemId
            amount
            maxAmount
            date
            bidStatus
            bidderIdentifier
            paddle {
              identifier
              type
              created
            }
            reactiveBid
          }
          reserveStatus
          nextAsks
          incrementTable {
            rangeRules {
              highRange
              lowRange
              step
            }
          }
          dates {
            openDate
            closingStart
            closingEnd
          }
          status
          startingBid
          images {
            id
            url
            order
          }
          itemNumber
          notifications {
            ... on ItemMessageNotification {
              id
              message
              date
            }
            ... on ItemFairWarningNotification {
              id
              date
            }
          }
          reserveMet
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        totalRecords
      }
    }
    incrementTable {
      rangeRules {
        highRange
        lowRange
        step
      }
    }
    sequenceNumber
    dates {
      openDate
      closingDate
      liveDate
    }
    closingMethod
    images {
      id
      url
      order
    }
    type
    liveVideoStream {
      ... on ExternalLiveStream {
        url
        type
        created
        updated
      }
      ... on BastaLiveStream {
        enabled
        channelId
        publicUrl
        currentViewers
      }
    }
    liveItem {
      cursor
      item {
        id
        cursor
        saleId
        accountId
        title
        description
        currency
        estimates {
          low
          high
        }
        currentBid
        bidStatus
        totalBids
        bids {
          id
          saleId
          itemId
          amount
          maxAmount
          date
          bidStatus
          bidderIdentifier
          paddle {
            identifier
            type
            created
          }
          reactiveBid
        }
        userBids {
          id
          saleId
          itemId
          amount
          maxAmount
          date
          bidStatus
          bidderIdentifier
          paddle {
            identifier
            type
            created
          }
          reactiveBid
        }
        reserveStatus
        nextAsks
        incrementTable {
          rangeRules {
            highRange
            lowRange
            step
          }
        }
        dates {
          openDate
          closingStart
          closingEnd
        }
        status
        startingBid
        images {
          id
          url
          order
        }
        itemNumber
        notifications {
          ... on ItemMessageNotification {
            id
            message
            date
          }
          ... on ItemFairWarningNotification {
            id
            date
          }
        }
        reserveMet
      }
    }
    userPaddle {
      identifier
      type
      created
    }
  }
}`;

export const ITEM_CHANGED = `subscription ITEM_CHANGED($saleId: ID!, $itemIds: [ID!]!, $nextAsksIterations: Int) {
  itemChanged(saleId: $saleId, itemIds: $itemIds) {
    ... on Item {
      id
      cursor
      saleId
      accountId
      title
      description
      currency
      estimates {
        low
        high
      }
      currentBid
      bidStatus
      totalBids
      bids {
        id
        saleId
        itemId
        amount
        maxAmount
        date
        bidStatus
        bidderIdentifier
        paddle {
          identifier
          type
          created
        }
        reactiveBid
      }
      userBids {
        id
        saleId
        itemId
        amount
        maxAmount
        date
        bidStatus
        bidderIdentifier
        paddle {
          identifier
          type
          created
        }
        reactiveBid
      }
      reserveStatus
      nextAsks(iterations: $nextAsksIterations)
      incrementTable {
        rangeRules {
          highRange
          lowRange
          step
        }
      }
      dates {
        openDate
        closingStart
        closingEnd
      }
      status
      startingBid
      images {
        id
        url
        order
      }
      itemNumber
      notifications {
        ... on ItemMessageNotification {
          id
          message
          date
        }
        ... on ItemFairWarningNotification {
          id
          date
        }
      }
      reserveMet
    }
    ... on ServerTime {
      currentTime
    }
  }
}`;
