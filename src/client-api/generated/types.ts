export default {
    "scalars": [
        4,
        7,
        11,
        12,
        15,
        16,
        17,
        24,
        28,
        29,
        31,
        39,
        42,
        46,
        49,
        56,
        58,
        66,
        68,
        74,
        75,
        79,
        80,
        88,
        89,
        90,
        91,
        97,
        99,
        100,
        101,
        111
    ],
    "types": {
        "Account": {
            "id": [
                28
            ],
            "name": [
                101
            ],
            "handle": [
                101
            ],
            "description": [
                101
            ],
            "imageUrl": [
                101
            ],
            "links": [
                45
            ],
            "bastaBidClient": [
                15
            ],
            "isUserSubscribed": [
                15
            ],
            "paymentDetails": [
                69
            ],
            "metafields": [
                59,
                {
                    "input": [
                        26
                    ]
                }
            ],
            "metafield": [
                57,
                {
                    "input": [
                        25,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                101
            ]
        },
        "Aggregator": {
            "name": [
                101
            ],
            "type": [
                7
            ],
            "__typename": [
                101
            ]
        },
        "BastaLiveStream": {
            "enabled": [
                15
            ],
            "channelId": [
                101
            ],
            "publicUrl": [
                101
            ],
            "isLive": [
                15
            ],
            "currentViewers": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "Bid": {
            "id": [
                28
            ],
            "saleId": [
                101
            ],
            "itemId": [
                101
            ],
            "amount": [
                31
            ],
            "maxAmount": [
                31
            ],
            "date": [
                101
            ],
            "bidStatus": [
                11
            ],
            "bidderIdentifier": [
                101
            ],
            "paddle": [
                64
            ],
            "reactiveBid": [
                15
            ],
            "bidOrigin": [
                6
            ],
            "__typename": [
                101
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rangeRules": [
                78
            ],
            "__typename": [
                101
            ]
        },
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                63
            ],
            "on_PaddleBidOrigin": [
                65
            ],
            "on_PhoneBidOrigin": [
                76
            ],
            "on_Aggregator": [
                1
            ],
            "__typename": [
                101
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                10
            ],
            "on_MaxBidPlacedSuccess": [
                54
            ],
            "on_BidPlacedError": [
                9
            ],
            "__typename": [
                101
            ]
        },
        "BidPlacedError": {
            "error": [
                101
            ],
            "errorCode": [
                4
            ],
            "__typename": [
                101
            ]
        },
        "BidPlacedSuccess": {
            "id": [
                101
            ],
            "amount": [
                31
            ],
            "date": [
                101
            ],
            "bidStatus": [
                11
            ],
            "__typename": [
                101
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderVerificationInput": {
            "successUrl": [
                101
            ],
            "cancelUrl": [
                101
            ],
            "renderMode": [
                79
            ],
            "__typename": [
                101
            ]
        },
        "BidderVerificationLink": {
            "url": [
                101
            ],
            "clientSecret": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "Boolean": {},
        "ClosingMethod": {},
        "Country": {},
        "CurrentItem": {
            "item": [
                32
            ],
            "cursor": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "Estimate": {
            "low": [
                31
            ],
            "high": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "ExternalLiveStream": {
            "url": [
                101
            ],
            "type": [
                49
            ],
            "created": [
                101
            ],
            "updated": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "FacetCount": {
            "fieldName": [
                101
            ],
            "counts": [
                23
            ],
            "stats": [
                22
            ],
            "__typename": [
                101
            ]
        },
        "FacetStats": {
            "avg": [
                24
            ],
            "max": [
                24
            ],
            "min": [
                24
            ],
            "sum": [
                24
            ],
            "totalValues": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "FacetValue": {
            "value": [
                101
            ],
            "count": [
                31
            ],
            "highlighted": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "Float": {},
        "GetMetafieldInput": {
            "key": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "GetMetafieldsInput": {
            "keys": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "GetUserBidsInput": {
            "userId": [
                101
            ],
            "first": [
                31
            ],
            "after": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "ID": {},
        "IdType": {},
        "Image": {
            "id": [
                101
            ],
            "url": [
                101
            ],
            "order": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "Int": {},
        "Item": {
            "id": [
                28
            ],
            "cursor": [
                101
            ],
            "saleId": [
                101
            ],
            "accountId": [
                101
            ],
            "title": [
                101
            ],
            "description": [
                101
            ],
            "currency": [
                101
            ],
            "estimates": [
                19
            ],
            "currentBid": [
                31
            ],
            "bidStatus": [
                11
            ],
            "totalBids": [
                31
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
                80
            ],
            "nextAsks": [
                31,
                {
                    "iterations": [
                        31
                    ]
                }
            ],
            "incrementTable": [
                5
            ],
            "itemDates": [
                34
            ],
            "dates": [
                34
            ],
            "status": [
                42
            ],
            "startingBid": [
                31
            ],
            "images": [
                30
            ],
            "slug": [
                101
            ],
            "slugFullPath": [
                101
            ],
            "itemNumber": [
                31
            ],
            "notifications": [
                38
            ],
            "isUserSubscribed": [
                15
            ],
            "allowedBidTypes": [
                12
            ],
            "specifications": [
                41
            ],
            "prevItem": [
                32,
                {
                    "sortBy": [
                        39
                    ]
                }
            ],
            "nextItem": [
                32,
                {
                    "sortBy": [
                        39
                    ]
                }
            ],
            "externalId": [
                101
            ],
            "location": [
                101
            ],
            "closingTimeCountdown": [
                31
            ],
            "metafields": [
                59,
                {
                    "input": [
                        26
                    ]
                }
            ],
            "metafield": [
                57,
                {
                    "input": [
                        25,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                101
            ]
        },
        "ItemChanged": {
            "on_Item": [
                32
            ],
            "on_ServerTime": [
                98
            ],
            "on_Node": [
                62
            ],
            "__typename": [
                101
            ]
        },
        "ItemDates": {
            "openDate": [
                101
            ],
            "closingStart": [
                101
            ],
            "closingEnd": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                101
            ],
            "date": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                28
            ],
            "__typename": [
                101
            ]
        },
        "ItemMessageNotification": {
            "id": [
                101
            ],
            "message": [
                101
            ],
            "date": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                37
            ],
            "on_ItemFairWarningNotification": [
                35
            ],
            "__typename": [
                101
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                39
            ],
            "direction": [
                68
            ],
            "__typename": [
                101
            ]
        },
        "ItemSpecifications": {
            "type": [
                100
            ],
            "subType": [
                99
            ],
            "height": [
                24
            ],
            "length": [
                24
            ],
            "depth": [
                24
            ],
            "measurementUnit": [
                56
            ],
            "weight": [
                24
            ],
            "weightUnit": [
                111
            ],
            "__typename": [
                101
            ]
        },
        "ItemStatus": {},
        "ItemsConnection": {
            "edges": [
                44
            ],
            "pageInfo": [
                67
            ],
            "__typename": [
                101
            ]
        },
        "ItemsEdge": {
            "cursor": [
                101
            ],
            "node": [
                32
            ],
            "__typename": [
                101
            ]
        },
        "Link": {
            "type": [
                46
            ],
            "url": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                32
            ],
            "cursor": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "LiveStream": {
            "url": [
                101
            ],
            "type": [
                49
            ],
            "created": [
                101
            ],
            "updated": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "LiveStreamType": {},
        "LiveVideoStream": {
            "on_ExternalLiveStream": [
                20
            ],
            "on_BastaLiveStream": [
                2
            ],
            "__typename": [
                101
            ]
        },
        "MailingAddress": {
            "name": [
                101
            ],
            "company": [
                101
            ],
            "phone": [
                101
            ],
            "line1": [
                101
            ],
            "line2": [
                101
            ],
            "city": [
                101
            ],
            "state": [
                101
            ],
            "postalCode": [
                101
            ],
            "country": [
                17
            ],
            "__typename": [
                101
            ]
        },
        "MailingAddressInput": {
            "name": [
                101
            ],
            "company": [
                101
            ],
            "phone": [
                101
            ],
            "line1": [
                101
            ],
            "line2": [
                101
            ],
            "city": [
                101
            ],
            "state": [
                101
            ],
            "postalCode": [
                101
            ],
            "country": [
                17
            ],
            "__typename": [
                101
            ]
        },
        "MaxBidPlaced": {
            "on_MaxBidPlacedSuccess": [
                54
            ],
            "on_BidPlacedError": [
                9
            ],
            "__typename": [
                101
            ]
        },
        "MaxBidPlacedSuccess": {
            "id": [
                101
            ],
            "amount": [
                31
            ],
            "maxAmount": [
                31
            ],
            "bidStatus": [
                11
            ],
            "date": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "Me": {
            "userId": [
                101
            ],
            "bids": [
                107,
                {
                    "first": [
                        31,
                        "Int!"
                    ],
                    "after": [
                        101
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
                84
            ],
            "saleItemSubscriptions": [
                43
            ],
            "latestItemBids": [
                43,
                {
                    "first": [
                        31
                    ]
                }
            ],
            "billingAddress": [
                51
            ],
            "shippingAddress": [
                51
            ],
            "__typename": [
                101
            ]
        },
        "MeasurementUnit": {},
        "Metafield": {
            "id": [
                28
            ],
            "key": [
                101
            ],
            "value": [
                101
            ],
            "valueType": [
                58
            ],
            "__typename": [
                101
            ]
        },
        "MetafieldValueType": {},
        "MetafieldsConnection": {
            "edges": [
                60
            ],
            "nodes": [
                57
            ],
            "pageInfo": [
                67
            ],
            "__typename": [
                101
            ]
        },
        "MetafieldsEdge": {
            "cursor": [
                101
            ],
            "node": [
                57
            ],
            "__typename": [
                101
            ]
        },
        "Mutation": {
            "bidOnItem": [
                8,
                {
                    "saleId": [
                        101,
                        "String!"
                    ],
                    "itemId": [
                        101,
                        "String!"
                    ],
                    "amount": [
                        31,
                        "Int!"
                    ],
                    "type": [
                        12,
                        "BidType!"
                    ]
                }
            ],
            "maxBidOnItem": [
                53,
                {
                    "saleId": [
                        101,
                        "String!"
                    ],
                    "itemId": [
                        101,
                        "String!"
                    ],
                    "maxAmount": [
                        31,
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
                101
            ],
            "subscribeToAccount": [
                105,
                {
                    "accountId": [
                        101,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromAccount": [
                28,
                {
                    "accountId": [
                        101,
                        "String!"
                    ]
                }
            ],
            "subsribeToItem": [
                109,
                {
                    "saleId": [
                        101,
                        "String!"
                    ],
                    "itemId": [
                        101,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromItem": [
                28,
                {
                    "saleId": [
                        101,
                        "String!"
                    ],
                    "itemId": [
                        101,
                        "String!"
                    ]
                }
            ],
            "createPaymentProviderSession": [
                70,
                {
                    "input": [
                        71,
                        "PaymentProviderSessionInput!"
                    ]
                }
            ],
            "updateUser": [
                55,
                {
                    "input": [
                        104,
                        "UpdateUserInput!"
                    ]
                }
            ],
            "__typename": [
                101
            ]
        },
        "Node": {
            "id": [
                28
            ],
            "on_Item": [
                32
            ],
            "on_Metafield": [
                57
            ],
            "on_Sale": [
                81
            ],
            "on_UserBid": [
                106
            ],
            "__typename": [
                101
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                7
            ],
            "__typename": [
                101
            ]
        },
        "Paddle": {
            "identifier": [
                101
            ],
            "type": [
                66
            ],
            "created": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                7
            ],
            "__typename": [
                101
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                28
            ],
            "endCursor": [
                28
            ],
            "hasNextPage": [
                15
            ],
            "totalRecords": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "PaginationDirection": {},
        "PaymentDetails": {
            "bidderPremium": [
                24
            ],
            "__typename": [
                101
            ]
        },
        "PaymentProviderSession": {
            "on_StripePaymentProviderSession": [
                102
            ],
            "__typename": [
                101
            ]
        },
        "PaymentProviderSessionInput": {
            "accountId": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "PaymentSession": {
            "url": [
                101
            ],
            "status": [
                74
            ],
            "__typename": [
                101
            ]
        },
        "PaymentSessionInput": {
            "saleId": [
                101
            ],
            "itemId": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "PaymentSessionStatus": {},
        "Permission": {},
        "PhoneBidOrigin": {
            "type": [
                7
            ],
            "__typename": [
                101
            ]
        },
        "Query": {
            "account": [
                0,
                {
                    "id": [
                        101,
                        "String!"
                    ],
                    "idType": [
                        29
                    ]
                }
            ],
            "sales": [
                84,
                {
                    "accountId": [
                        101,
                        "String!"
                    ],
                    "first": [
                        31
                    ],
                    "after": [
                        101
                    ],
                    "filter": [
                        86
                    ],
                    "idType": [
                        29
                    ]
                }
            ],
            "sale": [
                81,
                {
                    "id": [
                        101,
                        "String!"
                    ],
                    "idType": [
                        29
                    ]
                }
            ],
            "saleItem": [
                32,
                {
                    "saleId": [
                        101,
                        "String!"
                    ],
                    "itemId": [
                        101,
                        "String!"
                    ]
                }
            ],
            "accountSaleItems": [
                43,
                {
                    "accountId": [
                        101,
                        "String!"
                    ],
                    "first": [
                        31
                    ],
                    "after": [
                        101
                    ],
                    "filter": [
                        87
                    ]
                }
            ],
            "saleItemByURI": [
                32,
                {
                    "uri": [
                        101,
                        "String!"
                    ]
                }
            ],
            "bids": [
                107,
                {
                    "userId": [
                        101,
                        "String!"
                    ],
                    "first": [
                        31,
                        "Int!"
                    ],
                    "after": [
                        101
                    ]
                }
            ],
            "me": [
                55
            ],
            "serverTime": [
                98
            ],
            "paymentSession": [
                72,
                {
                    "input": [
                        73
                    ]
                }
            ],
            "search": [
                94,
                {
                    "accountId": [
                        101,
                        "String!"
                    ],
                    "type": [
                        97,
                        "SearchType!"
                    ],
                    "query": [
                        101,
                        "String!"
                    ],
                    "first": [
                        31
                    ],
                    "page": [
                        31
                    ],
                    "queryBy": [
                        101,
                        "[String!]"
                    ],
                    "orderBy": [
                        101
                    ],
                    "filterBy": [
                        101
                    ]
                }
            ],
            "__typename": [
                101
            ]
        },
        "RangeRule": {
            "highRange": [
                31
            ],
            "lowRange": [
                31
            ],
            "step": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "RenderMode": {},
        "ReserveStatus": {},
        "Sale": {
            "id": [
                28
            ],
            "cursor": [
                101
            ],
            "accountId": [
                101
            ],
            "title": [
                101
            ],
            "description": [
                101
            ],
            "currency": [
                101
            ],
            "status": [
                90
            ],
            "items": [
                43,
                {
                    "first": [
                        31
                    ],
                    "after": [
                        101
                    ],
                    "filter": [
                        87
                    ],
                    "order": [
                        40
                    ]
                }
            ],
            "incrementTable": [
                5
            ],
            "sequenceNumber": [
                31
            ],
            "dates": [
                85
            ],
            "closingMethod": [
                16
            ],
            "images": [
                30
            ],
            "themeType": [
                31
            ],
            "slug": [
                101
            ],
            "slugFullPath": [
                101
            ],
            "type": [
                91
            ],
            "liveStream": [
                48
            ],
            "liveVideoStream": [
                50
            ],
            "liveItem": [
                47
            ],
            "userPaddle": [
                64
            ],
            "userSaleRegistrations": [
                110
            ],
            "externalId": [
                101
            ],
            "location": [
                101
            ],
            "metafields": [
                59,
                {
                    "input": [
                        26
                    ]
                }
            ],
            "metafield": [
                57,
                {
                    "input": [
                        25,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                101
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                81
            ],
            "on_Item": [
                32
            ],
            "on_Node": [
                62
            ],
            "__typename": [
                101
            ]
        },
        "SaleChanged": {
            "on_Sale": [
                81
            ],
            "on_ServerTime": [
                98
            ],
            "on_Node": [
                62
            ],
            "__typename": [
                101
            ]
        },
        "SaleConnection": {
            "edges": [
                92
            ],
            "pageInfo": [
                67
            ],
            "__typename": [
                101
            ]
        },
        "SaleDates": {
            "closingDate": [
                101
            ],
            "openDate": [
                101
            ],
            "liveDate": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "SaleFilter": {
            "statuses": [
                90
            ],
            "__typename": [
                101
            ]
        },
        "SaleItemFilter": {
            "statuses": [
                42
            ],
            "itemIds": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "SaleRegistrationStatus": {},
        "SaleRegistrationType": {},
        "SaleStatus": {},
        "SaleType": {},
        "SalesEdge": {
            "cursor": [
                101
            ],
            "node": [
                81
            ],
            "__typename": [
                101
            ]
        },
        "SearchPageInfo": {
            "page": [
                31
            ],
            "pageSize": [
                31
            ],
            "totalPages": [
                31
            ],
            "hasNextPage": [
                15
            ],
            "hasPreviousPage": [
                15
            ],
            "totalRecords": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "SearchResultConnection": {
            "edges": [
                95
            ],
            "pageInfo": [
                93
            ],
            "resultCount": [
                31
            ],
            "facets": [
                21
            ],
            "__typename": [
                101
            ]
        },
        "SearchResultEdge": {
            "node": [
                96
            ],
            "__typename": [
                101
            ]
        },
        "SearchResultItem": {
            "on_Item": [
                32
            ],
            "on_Sale": [
                81
            ],
            "on_Node": [
                62
            ],
            "__typename": [
                101
            ]
        },
        "SearchType": {},
        "ServerTime": {
            "currentTime": [
                31
            ],
            "__typename": [
                101
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "String": {},
        "StripePaymentProviderSession": {
            "publishableKey": [
                101
            ],
            "customerSessionClientSecret": [
                101
            ],
            "setupIntentClientSecret": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "Subscription": {
            "itemChanged": [
                33,
                {
                    "saleId": [
                        28,
                        "ID!"
                    ],
                    "itemIds": [
                        28,
                        "[ID!]!"
                    ]
                }
            ],
            "saleChanged": [
                83,
                {
                    "saleId": [
                        28,
                        "ID!"
                    ]
                }
            ],
            "salesChanged": [
                83,
                {
                    "saleIds": [
                        28,
                        "[ID!]!"
                    ]
                }
            ],
            "saleActivity": [
                82,
                {
                    "saleId": [
                        28,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        36
                    ]
                }
            ],
            "serverTimeChanged": [
                98
            ],
            "__typename": [
                101
            ]
        },
        "UpdateUserInput": {
            "billingAddress": [
                52
            ],
            "shippingAddress": [
                52
            ],
            "__typename": [
                101
            ]
        },
        "UserAccountSubscription": {
            "accountId": [
                101
            ],
            "userId": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "UserBid": {
            "id": [
                28
            ],
            "userId": [
                101
            ],
            "saleId": [
                101
            ],
            "itemId": [
                101
            ],
            "amount": [
                31
            ],
            "maxAmount": [
                31
            ],
            "bidDate": [
                101
            ],
            "reactiveBid": [
                15
            ],
            "__typename": [
                101
            ]
        },
        "UserBidsConnection": {
            "edges": [
                108
            ],
            "pageInfo": [
                67
            ],
            "__typename": [
                101
            ]
        },
        "UserBidsEdge": {
            "cursor": [
                101
            ],
            "node": [
                106
            ],
            "__typename": [
                101
            ]
        },
        "UserSaleItemSubscription": {
            "accountId": [
                101
            ],
            "saleId": [
                101
            ],
            "itemId": [
                101
            ],
            "userId": [
                101
            ],
            "__typename": [
                101
            ]
        },
        "UserSaleRegistration": {
            "id": [
                28
            ],
            "saleId": [
                101
            ],
            "userId": [
                101
            ],
            "registrationType": [
                89
            ],
            "status": [
                88
            ],
            "__typename": [
                101
            ]
        },
        "WeightUnit": {}
    }
}