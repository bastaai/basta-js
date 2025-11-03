export default {
    "scalars": [
        4,
        7,
        11,
        12,
        15,
        16,
        20,
        22,
        23,
        25,
        33,
        36,
        40,
        43,
        48,
        54,
        56,
        60,
        61,
        65,
        66,
        74,
        75,
        78,
        79,
        80,
        87
    ],
    "types": {
        "Account": {
            "id": [
                22
            ],
            "name": [
                80
            ],
            "handle": [
                80
            ],
            "description": [
                80
            ],
            "imageUrl": [
                80
            ],
            "links": [
                39
            ],
            "bastaBidClient": [
                15
            ],
            "isUserSubscribed": [
                15
            ],
            "paymentDetails": [
                57
            ],
            "__typename": [
                80
            ]
        },
        "Aggregator": {
            "name": [
                80
            ],
            "type": [
                7
            ],
            "__typename": [
                80
            ]
        },
        "BastaLiveStream": {
            "enabled": [
                15
            ],
            "channelId": [
                80
            ],
            "publicUrl": [
                80
            ],
            "isLive": [
                15
            ],
            "currentViewers": [
                25
            ],
            "__typename": [
                80
            ]
        },
        "Bid": {
            "id": [
                22
            ],
            "saleId": [
                80
            ],
            "itemId": [
                80
            ],
            "amount": [
                25
            ],
            "maxAmount": [
                25
            ],
            "date": [
                80
            ],
            "bidStatus": [
                11
            ],
            "bidderIdentifier": [
                80
            ],
            "paddle": [
                52
            ],
            "reactiveBid": [
                15
            ],
            "bidOrigin": [
                6
            ],
            "__typename": [
                80
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rangeRules": [
                64
            ],
            "__typename": [
                80
            ]
        },
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                51
            ],
            "on_PaddleBidOrigin": [
                53
            ],
            "on_PhoneBidOrigin": [
                62
            ],
            "on_Aggregator": [
                1
            ],
            "__typename": [
                80
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                10
            ],
            "on_MaxBidPlacedSuccess": [
                46
            ],
            "on_BidPlacedError": [
                9
            ],
            "__typename": [
                80
            ]
        },
        "BidPlacedError": {
            "error": [
                80
            ],
            "errorCode": [
                4
            ],
            "__typename": [
                80
            ]
        },
        "BidPlacedSuccess": {
            "id": [
                80
            ],
            "amount": [
                25
            ],
            "date": [
                80
            ],
            "bidStatus": [
                11
            ],
            "__typename": [
                80
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderVerificationInput": {
            "successUrl": [
                80
            ],
            "cancelUrl": [
                80
            ],
            "renderMode": [
                65
            ],
            "__typename": [
                80
            ]
        },
        "BidderVerificationLink": {
            "url": [
                80
            ],
            "clientSecret": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Boolean": {},
        "ClosingMethod": {},
        "CurrentItem": {
            "item": [
                26
            ],
            "cursor": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Estimate": {
            "low": [
                25
            ],
            "high": [
                25
            ],
            "__typename": [
                80
            ]
        },
        "ExternalLiveStream": {
            "url": [
                80
            ],
            "type": [
                43
            ],
            "created": [
                80
            ],
            "updated": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Float": {},
        "GetUserBidsInput": {
            "userId": [
                80
            ],
            "first": [
                25
            ],
            "after": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ID": {},
        "IdType": {},
        "Image": {
            "id": [
                80
            ],
            "url": [
                80
            ],
            "order": [
                25
            ],
            "__typename": [
                80
            ]
        },
        "Int": {},
        "Item": {
            "id": [
                22
            ],
            "cursor": [
                80
            ],
            "saleId": [
                80
            ],
            "accountId": [
                80
            ],
            "title": [
                80
            ],
            "description": [
                80
            ],
            "currency": [
                80
            ],
            "estimates": [
                18
            ],
            "currentBid": [
                25
            ],
            "bidStatus": [
                11
            ],
            "totalBids": [
                25
            ],
            "bids": [
                3,
                {
                    "collapseSequentialUserBids": [
                        15
                    ]
                }
            ],
            "userBids": [
                3
            ],
            "reserveMet": [
                15
            ],
            "reserveStatus": [
                66
            ],
            "nextAsks": [
                25,
                {
                    "iterations": [
                        25
                    ]
                }
            ],
            "incrementTable": [
                5
            ],
            "itemDates": [
                28
            ],
            "dates": [
                28
            ],
            "status": [
                36
            ],
            "startingBid": [
                25
            ],
            "images": [
                24
            ],
            "slug": [
                80
            ],
            "slugFullPath": [
                80
            ],
            "itemNumber": [
                25
            ],
            "notifications": [
                32
            ],
            "isUserSubscribed": [
                15
            ],
            "allowedBidTypes": [
                12
            ],
            "specifications": [
                35
            ],
            "__typename": [
                80
            ]
        },
        "ItemChanged": {
            "on_Item": [
                26
            ],
            "on_ServerTime": [
                77
            ],
            "on_Node": [
                50
            ],
            "__typename": [
                80
            ]
        },
        "ItemDates": {
            "openDate": [
                80
            ],
            "closingStart": [
                80
            ],
            "closingEnd": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                80
            ],
            "date": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                22
            ],
            "__typename": [
                80
            ]
        },
        "ItemMessageNotification": {
            "id": [
                80
            ],
            "message": [
                80
            ],
            "date": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                31
            ],
            "on_ItemFairWarningNotification": [
                29
            ],
            "__typename": [
                80
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                33
            ],
            "direction": [
                56
            ],
            "__typename": [
                80
            ]
        },
        "ItemSpecifications": {
            "type": [
                79
            ],
            "subType": [
                78
            ],
            "height": [
                20
            ],
            "length": [
                20
            ],
            "depth": [
                20
            ],
            "measurementUnit": [
                48
            ],
            "weight": [
                20
            ],
            "weightUnit": [
                87
            ],
            "__typename": [
                80
            ]
        },
        "ItemStatus": {},
        "ItemsConnection": {
            "edges": [
                38
            ],
            "pageInfo": [
                55
            ],
            "__typename": [
                80
            ]
        },
        "ItemsEdge": {
            "cursor": [
                80
            ],
            "node": [
                26
            ],
            "__typename": [
                80
            ]
        },
        "Link": {
            "type": [
                40
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                26
            ],
            "cursor": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "LiveStream": {
            "url": [
                80
            ],
            "type": [
                43
            ],
            "created": [
                80
            ],
            "updated": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "LiveStreamType": {},
        "LiveVideoStream": {
            "on_ExternalLiveStream": [
                19
            ],
            "on_BastaLiveStream": [
                2
            ],
            "__typename": [
                80
            ]
        },
        "MaxBidPlaced": {
            "on_MaxBidPlacedSuccess": [
                46
            ],
            "on_BidPlacedError": [
                9
            ],
            "__typename": [
                80
            ]
        },
        "MaxBidPlacedSuccess": {
            "id": [
                80
            ],
            "amount": [
                25
            ],
            "maxAmount": [
                25
            ],
            "bidStatus": [
                11
            ],
            "date": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Me": {
            "userId": [
                80
            ],
            "bids": [
                84,
                {
                    "first": [
                        25,
                        "Int!"
                    ],
                    "after": [
                        80
                    ]
                }
            ],
            "accounts": [
                0
            ],
            "verifiedAsBidder": [
                15
            ],
            "saleSubscriptions": [
                70
            ],
            "saleItemSubscriptions": [
                37
            ],
            "latestItemBids": [
                37,
                {
                    "first": [
                        25
                    ]
                }
            ],
            "__typename": [
                80
            ]
        },
        "MeasurementUnit": {},
        "Mutation": {
            "bidOnItem": [
                8,
                {
                    "saleId": [
                        80,
                        "String!"
                    ],
                    "itemId": [
                        80,
                        "String!"
                    ],
                    "amount": [
                        25,
                        "Int!"
                    ],
                    "type": [
                        12,
                        "BidType!"
                    ]
                }
            ],
            "maxBidOnItem": [
                45,
                {
                    "saleId": [
                        80,
                        "String!"
                    ],
                    "itemId": [
                        80,
                        "String!"
                    ],
                    "maxAmount": [
                        25,
                        "Int!"
                    ]
                }
            ],
            "createBidderVerification": [
                14,
                {
                    "input": [
                        13
                    ]
                }
            ],
            "acceptBidderTerms": [
                80
            ],
            "subscribeToAccount": [
                82,
                {
                    "accountId": [
                        80,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromAccount": [
                22,
                {
                    "accountId": [
                        80,
                        "String!"
                    ]
                }
            ],
            "subsribeToItem": [
                86,
                {
                    "saleId": [
                        80,
                        "String!"
                    ],
                    "itemId": [
                        80,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromItem": [
                22,
                {
                    "saleId": [
                        80,
                        "String!"
                    ],
                    "itemId": [
                        80,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                80
            ]
        },
        "Node": {
            "id": [
                22
            ],
            "on_Item": [
                26
            ],
            "on_Sale": [
                67
            ],
            "on_UserBid": [
                83
            ],
            "__typename": [
                80
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                7
            ],
            "__typename": [
                80
            ]
        },
        "Paddle": {
            "identifier": [
                80
            ],
            "type": [
                54
            ],
            "created": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                7
            ],
            "__typename": [
                80
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                22
            ],
            "endCursor": [
                22
            ],
            "hasNextPage": [
                15
            ],
            "totalRecords": [
                25
            ],
            "__typename": [
                80
            ]
        },
        "PaginationDirection": {},
        "PaymentDetails": {
            "bidderPremium": [
                20
            ],
            "__typename": [
                80
            ]
        },
        "PaymentSession": {
            "url": [
                80
            ],
            "status": [
                60
            ],
            "__typename": [
                80
            ]
        },
        "PaymentSessionInput": {
            "saleId": [
                80
            ],
            "itemId": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "PaymentSessionStatus": {},
        "Permission": {},
        "PhoneBidOrigin": {
            "type": [
                7
            ],
            "__typename": [
                80
            ]
        },
        "Query": {
            "account": [
                0,
                {
                    "id": [
                        80,
                        "String!"
                    ],
                    "idType": [
                        23
                    ]
                }
            ],
            "sales": [
                70,
                {
                    "accountId": [
                        80,
                        "String!"
                    ],
                    "first": [
                        25
                    ],
                    "after": [
                        80
                    ],
                    "filter": [
                        72
                    ],
                    "idType": [
                        23
                    ]
                }
            ],
            "sale": [
                67,
                {
                    "id": [
                        80,
                        "String!"
                    ],
                    "idType": [
                        23
                    ]
                }
            ],
            "saleItem": [
                26,
                {
                    "saleId": [
                        80,
                        "String!"
                    ],
                    "itemId": [
                        80,
                        "String!"
                    ]
                }
            ],
            "accountSaleItems": [
                37,
                {
                    "accountId": [
                        80,
                        "String!"
                    ],
                    "first": [
                        25
                    ],
                    "after": [
                        80
                    ],
                    "filter": [
                        73
                    ]
                }
            ],
            "saleItemByURI": [
                26,
                {
                    "uri": [
                        80,
                        "String!"
                    ]
                }
            ],
            "bids": [
                84,
                {
                    "userId": [
                        80,
                        "String!"
                    ],
                    "first": [
                        25,
                        "Int!"
                    ],
                    "after": [
                        80
                    ]
                }
            ],
            "me": [
                47
            ],
            "serverTime": [
                77
            ],
            "paymentSession": [
                58,
                {
                    "input": [
                        59
                    ]
                }
            ],
            "__typename": [
                80
            ]
        },
        "RangeRule": {
            "highRange": [
                25
            ],
            "lowRange": [
                25
            ],
            "step": [
                25
            ],
            "__typename": [
                80
            ]
        },
        "RenderMode": {},
        "ReserveStatus": {},
        "Sale": {
            "id": [
                22
            ],
            "cursor": [
                80
            ],
            "accountId": [
                80
            ],
            "title": [
                80
            ],
            "description": [
                80
            ],
            "currency": [
                80
            ],
            "status": [
                74
            ],
            "items": [
                37,
                {
                    "first": [
                        25
                    ],
                    "after": [
                        80
                    ],
                    "filter": [
                        73
                    ],
                    "order": [
                        34
                    ]
                }
            ],
            "incrementTable": [
                5
            ],
            "sequenceNumber": [
                25
            ],
            "dates": [
                71
            ],
            "closingMethod": [
                16
            ],
            "images": [
                24
            ],
            "themeType": [
                25
            ],
            "slug": [
                80
            ],
            "slugFullPath": [
                80
            ],
            "type": [
                75
            ],
            "liveStream": [
                42
            ],
            "liveVideoStream": [
                44
            ],
            "liveItem": [
                41
            ],
            "userPaddle": [
                52
            ],
            "__typename": [
                80
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                67
            ],
            "on_Item": [
                26
            ],
            "on_Node": [
                50
            ],
            "__typename": [
                80
            ]
        },
        "SaleChanged": {
            "on_Sale": [
                67
            ],
            "on_ServerTime": [
                77
            ],
            "on_Node": [
                50
            ],
            "__typename": [
                80
            ]
        },
        "SaleConnection": {
            "edges": [
                76
            ],
            "pageInfo": [
                55
            ],
            "__typename": [
                80
            ]
        },
        "SaleDates": {
            "closingDate": [
                80
            ],
            "openDate": [
                80
            ],
            "liveDate": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "SaleFilter": {
            "statuses": [
                74
            ],
            "__typename": [
                80
            ]
        },
        "SaleItemFilter": {
            "statuses": [
                36
            ],
            "itemIds": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "SaleStatus": {},
        "SaleType": {},
        "SalesEdge": {
            "cursor": [
                80
            ],
            "node": [
                67
            ],
            "__typename": [
                80
            ]
        },
        "ServerTime": {
            "currentTime": [
                25
            ],
            "__typename": [
                80
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "String": {},
        "Subscription": {
            "itemChanged": [
                27,
                {
                    "saleId": [
                        22,
                        "ID!"
                    ],
                    "itemIds": [
                        22,
                        "[ID!]!"
                    ]
                }
            ],
            "saleChanged": [
                69,
                {
                    "saleId": [
                        22,
                        "ID!"
                    ]
                }
            ],
            "salesChanged": [
                69,
                {
                    "saleIds": [
                        22,
                        "[ID!]!"
                    ]
                }
            ],
            "saleActivity": [
                68,
                {
                    "saleId": [
                        22,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        30
                    ]
                }
            ],
            "serverTimeChanged": [
                77
            ],
            "__typename": [
                80
            ]
        },
        "UserAccountSubscription": {
            "accountId": [
                80
            ],
            "userId": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "UserBid": {
            "id": [
                22
            ],
            "userId": [
                80
            ],
            "saleId": [
                80
            ],
            "itemId": [
                80
            ],
            "amount": [
                25
            ],
            "maxAmount": [
                25
            ],
            "bidDate": [
                80
            ],
            "reactiveBid": [
                15
            ],
            "__typename": [
                80
            ]
        },
        "UserBidsConnection": {
            "edges": [
                85
            ],
            "pageInfo": [
                55
            ],
            "__typename": [
                80
            ]
        },
        "UserBidsEdge": {
            "cursor": [
                80
            ],
            "node": [
                83
            ],
            "__typename": [
                80
            ]
        },
        "UserSaleItemSubscription": {
            "accountId": [
                80
            ],
            "saleId": [
                80
            ],
            "itemId": [
                80
            ],
            "userId": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "WeightUnit": {}
    }
}