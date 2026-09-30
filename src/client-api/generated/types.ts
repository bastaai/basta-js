export default {
    "scalars": [
        1,
        5,
        8,
        13,
        14,
        17,
        19,
        22,
        31,
        37,
        41,
        55,
        57,
        58,
        68,
        69,
        72,
        82,
        85,
        89,
        92,
        94,
        97,
        105,
        107,
        112,
        113,
        116,
        117,
        123,
        125,
        132,
        133,
        136,
        139,
        140,
        148,
        151,
        152,
        153,
        154,
        163,
        169,
        170,
        171,
        188
    ],
    "types": {
        "Account": {
            "id": [
                68
            ],
            "name": [
                171
            ],
            "handle": [
                171
            ],
            "description": [
                171
            ],
            "imageUrl": [
                171
            ],
            "links": [
                93
            ],
            "bastaBidClient": [
                17
            ],
            "isUserSubscribed": [
                17
            ],
            "paymentDetails": [
                126
            ],
            "metafields": [
                108,
                {
                    "input": [
                        64
                    ]
                }
            ],
            "metafield": [
                106,
                {
                    "input": [
                        63,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "departments": [
                28,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "__typename": [
                171
            ]
        },
        "AddressType": {},
        "Aggregator": {
            "name": [
                171
            ],
            "type": [
                8
            ],
            "__typename": [
                171
            ]
        },
        "BastaLiveStream": {
            "enabled": [
                17
            ],
            "channelId": [
                171
            ],
            "publicUrl": [
                171
            ],
            "isLive": [
                17
            ],
            "currentViewers": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "Bid": {
            "id": [
                68
            ],
            "saleId": [
                171
            ],
            "itemId": [
                171
            ],
            "amount": [
                72
            ],
            "maxAmount": [
                72
            ],
            "date": [
                171
            ],
            "bidStatus": [
                13
            ],
            "bidderIdentifier": [
                171
            ],
            "paddle": [
                121
            ],
            "reactiveBid": [
                17
            ],
            "bidOrigin": [
                7
            ],
            "registration": [
                186
            ],
            "__typename": [
                171
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rangeRules": [
                138
            ],
            "__typename": [
                171
            ]
        },
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                120
            ],
            "on_PaddleBidOrigin": [
                122
            ],
            "on_PhoneBidOrigin": [
                135
            ],
            "on_Aggregator": [
                2
            ],
            "__typename": [
                171
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                11
            ],
            "on_MaxBidPlacedSuccess": [
                103
            ],
            "on_BidPlacedError": [
                10
            ],
            "__typename": [
                171
            ]
        },
        "BidPlacedError": {
            "error": [
                171
            ],
            "errorCode": [
                5
            ],
            "__typename": [
                171
            ]
        },
        "BidPlacedSuccess": {
            "id": [
                171
            ],
            "amount": [
                72
            ],
            "date": [
                171
            ],
            "bidStatus": [
                13
            ],
            "registration": [
                186
            ],
            "__typename": [
                171
            ]
        },
        "BidRestrictions": {
            "acceptedRegistrationRequired": [
                17
            ],
            "phoneRegistrationOpen": [
                17
            ],
            "__typename": [
                171
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderVerificationInput": {
            "successUrl": [
                171
            ],
            "cancelUrl": [
                171
            ],
            "renderMode": [
                139
            ],
            "__typename": [
                171
            ]
        },
        "BidderVerificationLink": {
            "url": [
                171
            ],
            "clientSecret": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "Boolean": {},
        "Card": {
            "id": [
                171
            ],
            "brand": [
                171
            ],
            "expirationMonth": [
                72
            ],
            "expirationYear": [
                72
            ],
            "last4": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ClosingMethod": {},
        "Consignor": {
            "userId": [
                171
            ],
            "isMain": [
                17
            ],
            "username": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "CounterOfferInput": {
            "offerId": [
                68
            ],
            "amount": [
                72
            ],
            "currency": [
                171
            ],
            "message": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "Country": {},
        "CreatePhoneInput": {
            "phoneNumber": [
                171
            ],
            "phoneType": [
                136
            ],
            "isPrimary": [
                17
            ],
            "label": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "CreateSaleItemRegistrationInput": {
            "saleId": [
                171
            ],
            "itemId": [
                171
            ],
            "type": [
                152
            ],
            "identifier": [
                171
            ],
            "preferredPhoneNumberId": [
                68
            ],
            "alternativePhoneNumberIds": [
                68
            ],
            "__typename": [
                171
            ]
        },
        "CreateSaleRegistrationInput": {
            "saleId": [
                171
            ],
            "type": [
                152
            ],
            "identifier": [
                171
            ],
            "preferredPhoneNumberId": [
                68
            ],
            "alternativePhoneNumberIds": [
                68
            ],
            "__typename": [
                171
            ]
        },
        "CurrentItem": {
            "item": [
                73
            ],
            "cursor": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "Department": {
            "id": [
                68
            ],
            "name": [
                171
            ],
            "slug": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "DepartmentConnection": {
            "edges": [
                29
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "DepartmentEdge": {
            "cursor": [
                171
            ],
            "node": [
                27
            ],
            "__typename": [
                171
            ]
        },
        "DirectSell": {
            "amount": [
                72
            ],
            "currency": [
                171
            ],
            "source": [
                31
            ],
            "timestamp": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "DirectSellSource": {},
        "DirectSellsConnection": {
            "edges": [
                33
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "DirectSellsEdge": {
            "cursor": [
                171
            ],
            "node": [
                73
            ],
            "__typename": [
                171
            ]
        },
        "DutchBid": {
            "id": [
                68
            ],
            "amount": [
                72
            ],
            "placedAt": [
                171
            ],
            "mine": [
                17
            ],
            "__typename": [
                171
            ]
        },
        "DutchBidConnection": {
            "edges": [
                36
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "DutchBidEdge": {
            "cursor": [
                171
            ],
            "node": [
                34
            ],
            "__typename": [
                171
            ]
        },
        "DutchBidErrorCode": {},
        "DutchBidPlaced": {
            "on_DutchBidPlacedSuccess": [
                40
            ],
            "on_DutchBidPlacedError": [
                39
            ],
            "__typename": [
                171
            ]
        },
        "DutchBidPlacedError": {
            "errorCode": [
                37
            ],
            "__typename": [
                171
            ]
        },
        "DutchBidPlacedSuccess": {
            "id": [
                171
            ],
            "amount": [
                72
            ],
            "quantityRequested": [
                72
            ],
            "quantityAllocated": [
                72
            ],
            "placedAt": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "DutchItemStatus": {},
        "DutchNextDrop": {
            "price": [
                72
            ],
            "at": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "DutchPrice": {
            "current": [
                72
            ],
            "nextDrop": [
                42
            ],
            "__typename": [
                171
            ]
        },
        "DutchPriceDrop": {
            "at": [
                171
            ],
            "price": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "DutchSale": {
            "id": [
                68
            ],
            "accountId": [
                171
            ],
            "title": [
                171
            ],
            "description": [
                171
            ],
            "currency": [
                171
            ],
            "status": [
                153
            ],
            "dates": [
                146
            ],
            "saleFormat": [
                148
            ],
            "images": [
                71
            ],
            "items": [
                47,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "__typename": [
                171
            ]
        },
        "DutchSaleItem": {
            "id": [
                68
            ],
            "saleId": [
                171
            ],
            "status": [
                41
            ],
            "availableUnits": [
                72
            ],
            "unitsRemaining": [
                72
            ],
            "totalBids": [
                72
            ],
            "openTime": [
                171
            ],
            "endTime": [
                171
            ],
            "price": [
                43
            ],
            "schedule": [
                49
            ],
            "title": [
                171
            ],
            "subTitle": [
                171
            ],
            "description": [
                171
            ],
            "images": [
                71
            ],
            "bids": [
                35,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "__typename": [
                171
            ]
        },
        "DutchSaleItemConnection": {
            "edges": [
                48
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "DutchSaleItemEdge": {
            "cursor": [
                171
            ],
            "node": [
                46
            ],
            "__typename": [
                171
            ]
        },
        "DutchSchedule": {
            "startingAmount": [
                72
            ],
            "drops": [
                44
            ],
            "__typename": [
                171
            ]
        },
        "Estimate": {
            "low": [
                72
            ],
            "high": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "ExternalLiveStream": {
            "url": [
                171
            ],
            "type": [
                97
            ],
            "created": [
                171
            ],
            "updated": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "FacetCount": {
            "fieldName": [
                171
            ],
            "counts": [
                54
            ],
            "stats": [
                53
            ],
            "__typename": [
                171
            ]
        },
        "FacetStats": {
            "avg": [
                58
            ],
            "max": [
                58
            ],
            "min": [
                58
            ],
            "sum": [
                58
            ],
            "totalValues": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "FacetValue": {
            "value": [
                171
            ],
            "count": [
                72
            ],
            "highlighted": [
                171
            ],
            "label": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "FeeCalculationType": {},
        "FeeRule": {
            "id": [
                68
            ],
            "name": [
                171
            ],
            "type": [
                57
            ],
            "value": [
                72
            ],
            "upperLteLimit": [
                72
            ],
            "lowerLimit": [
                72
            ],
            "calculationType": [
                55
            ],
            "__typename": [
                171
            ]
        },
        "FeeRuleType": {},
        "Float": {},
        "FollowConsignorResult": {
            "consignorId": [
                68
            ],
            "following": [
                17
            ],
            "__typename": [
                171
            ]
        },
        "FollowedConsignor": {
            "consignorId": [
                68
            ],
            "__typename": [
                171
            ]
        },
        "FollowedConsignorsConnection": {
            "edges": [
                62
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "FollowedConsignorsEdge": {
            "cursor": [
                171
            ],
            "node": [
                60
            ],
            "__typename": [
                171
            ]
        },
        "GetMetafieldInput": {
            "key": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "GetMetafieldsInput": {
            "keys": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "GetUserBidsInput": {
            "userId": [
                171
            ],
            "first": [
                72
            ],
            "after": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "HighlightedItemConnection": {
            "edges": [
                67
            ],
            "__typename": [
                171
            ]
        },
        "HighlightedItemEdge": {
            "node": [
                73
            ],
            "position": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "ID": {},
        "IdType": {},
        "IdVerificationStatus": {
            "verified": [
                17
            ],
            "modifiedAt": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "Image": {
            "id": [
                171
            ],
            "url": [
                171
            ],
            "order": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "Int": {},
        "Item": {
            "id": [
                68
            ],
            "cursor": [
                171
            ],
            "saleId": [
                171
            ],
            "accountId": [
                171
            ],
            "title": [
                171
            ],
            "subTitle": [
                171
            ],
            "description": [
                171
            ],
            "currency": [
                171
            ],
            "estimates": [
                50
            ],
            "currentBid": [
                72
            ],
            "bidStatus": [
                13
            ],
            "totalBids": [
                72
            ],
            "bids": [
                4,
                {
                    "collapseSequentialUserBids": [
                        17
                    ]
                }
            ],
            "userBids": [
                4
            ],
            "reserveMet": [
                17
            ],
            "reserveStatus": [
                140
            ],
            "nextAsks": [
                72,
                {
                    "iterations": [
                        72
                    ]
                }
            ],
            "incrementTable": [
                6
            ],
            "itemDates": [
                75
            ],
            "dates": [
                75
            ],
            "status": [
                89
            ],
            "itemResult": [
                85
            ],
            "startingBid": [
                72
            ],
            "images": [
                71
            ],
            "slug": [
                171
            ],
            "slugFullPath": [
                171
            ],
            "itemNumber": [
                72
            ],
            "displayNumber": [
                171
            ],
            "highlight": [
                77
            ],
            "notifications": [
                80
            ],
            "isUserSubscribed": [
                17
            ],
            "allowedBidTypes": [
                14
            ],
            "specifications": [
                88
            ],
            "specificationsV2": [
                88
            ],
            "packaging": [
                84
            ],
            "prevItem": [
                73,
                {
                    "sortBy": [
                        82
                    ]
                }
            ],
            "nextItem": [
                73,
                {
                    "sortBy": [
                        82
                    ]
                }
            ],
            "externalId": [
                171
            ],
            "location": [
                171
            ],
            "closingTimeCountdown": [
                72
            ],
            "metafields": [
                108,
                {
                    "input": [
                        64
                    ]
                }
            ],
            "metafield": [
                106,
                {
                    "input": [
                        63,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "userItemRegistrations": [
                181
            ],
            "feeRules": [
                56
            ],
            "hidden": [
                17
            ],
            "schema": [
                86
            ],
            "tags": [
                174
            ],
            "offers": [
                118,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ],
                    "status": [
                        117
                    ]
                }
            ],
            "offerEnabled": [
                17
            ],
            "buyNowEnabled": [
                17
            ],
            "buyNowPrice": [
                72
            ],
            "directSell": [
                30
            ],
            "consignors": [
                20
            ],
            "site": [
                167
            ],
            "siteLocation": [
                168
            ],
            "sectionMarkers": [
                164
            ],
            "__typename": [
                171
            ]
        },
        "ItemChanged": {
            "on_Item": [
                73
            ],
            "on_ServerTime": [
                165
            ],
            "on_Node": [
                111
            ],
            "__typename": [
                171
            ]
        },
        "ItemDates": {
            "openDate": [
                171
            ],
            "closingStart": [
                171
            ],
            "closingEnd": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                171
            ],
            "date": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ItemHighlight": {
            "enabled": [
                17
            ],
            "position": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                68
            ],
            "__typename": [
                171
            ]
        },
        "ItemMessageNotification": {
            "id": [
                171
            ],
            "message": [
                171
            ],
            "date": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                79
            ],
            "on_ItemFairWarningNotification": [
                76
            ],
            "on_ItemOfferPlacedNotification": [
                81
            ],
            "on_ItemSoldNotification": [
                87
            ],
            "__typename": [
                171
            ]
        },
        "ItemOfferPlacedNotification": {
            "id": [
                171
            ],
            "amount": [
                72
            ],
            "currency": [
                171
            ],
            "referenceId": [
                171
            ],
            "date": [
                171
            ],
            "buyerIdentifier": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                82
            ],
            "direction": [
                125
            ],
            "__typename": [
                171
            ]
        },
        "ItemPackaging": {
            "id": [
                171
            ],
            "quantity": [
                72
            ],
            "boxedHeight": [
                58
            ],
            "boxedLength": [
                58
            ],
            "boxedDepth": [
                58
            ],
            "boxedMeasurementUnit": [
                105
            ],
            "boxedWeight": [
                58
            ],
            "boxedWeightUnit": [
                188
            ],
            "created": [
                171
            ],
            "modified": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ItemResult": {},
        "ItemSchema": {
            "id": [
                68
            ],
            "definition": [
                92
            ],
            "data": [
                92
            ],
            "__typename": [
                171
            ]
        },
        "ItemSoldNotification": {
            "id": [
                171
            ],
            "amount": [
                72
            ],
            "currency": [
                171
            ],
            "source": [
                31
            ],
            "referenceId": [
                171
            ],
            "date": [
                171
            ],
            "buyerIdentifier": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ItemSpecifications": {
            "id": [
                171
            ],
            "type": [
                170
            ],
            "subType": [
                169
            ],
            "height": [
                58
            ],
            "length": [
                58
            ],
            "depth": [
                58
            ],
            "diameter": [
                58
            ],
            "measurementUnit": [
                105
            ],
            "weight": [
                58
            ],
            "weightUnit": [
                188
            ],
            "quantity": [
                72
            ],
            "created": [
                171
            ],
            "modified": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "ItemStatus": {},
        "ItemsConnection": {
            "edges": [
                91
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "ItemsEdge": {
            "cursor": [
                171
            ],
            "node": [
                73
            ],
            "__typename": [
                171
            ]
        },
        "JSON": {},
        "Link": {
            "type": [
                94
            ],
            "url": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                73
            ],
            "cursor": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "LiveStream": {
            "url": [
                171
            ],
            "type": [
                97
            ],
            "created": [
                171
            ],
            "updated": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "LiveStreamType": {},
        "LiveVideoStream": {
            "on_ExternalLiveStream": [
                51
            ],
            "on_BastaLiveStream": [
                3
            ],
            "__typename": [
                171
            ]
        },
        "MailingAddress": {
            "id": [
                171
            ],
            "name": [
                171
            ],
            "company": [
                171
            ],
            "phone": [
                171
            ],
            "line1": [
                171
            ],
            "line2": [
                171
            ],
            "city": [
                171
            ],
            "state": [
                171
            ],
            "postalCode": [
                171
            ],
            "country": [
                22
            ],
            "isPrimary": [
                17
            ],
            "addressType": [
                1
            ],
            "label": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "MailingAddressInput": {
            "id": [
                171
            ],
            "name": [
                171
            ],
            "company": [
                171
            ],
            "phone": [
                171
            ],
            "line1": [
                171
            ],
            "line2": [
                171
            ],
            "city": [
                171
            ],
            "state": [
                171
            ],
            "postalCode": [
                171
            ],
            "country": [
                22
            ],
            "isPrimary": [
                17
            ],
            "label": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "MakeOfferInput": {
            "itemId": [
                171
            ],
            "amount": [
                72
            ],
            "currency": [
                171
            ],
            "message": [
                171
            ],
            "saleId": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "MaxBidPlaced": {
            "on_MaxBidPlacedSuccess": [
                103
            ],
            "on_BidPlacedError": [
                10
            ],
            "__typename": [
                171
            ]
        },
        "MaxBidPlacedSuccess": {
            "id": [
                171
            ],
            "amount": [
                72
            ],
            "maxAmount": [
                72
            ],
            "bidStatus": [
                13
            ],
            "date": [
                171
            ],
            "registration": [
                186
            ],
            "__typename": [
                171
            ]
        },
        "Me": {
            "userId": [
                171
            ],
            "firstName": [
                171
            ],
            "lastName": [
                171
            ],
            "email": [
                171
            ],
            "username": [
                171
            ],
            "emailVerified": [
                17
            ],
            "bids": [
                179,
                {
                    "first": [
                        72,
                        "Int!"
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "offers": [
                118,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ],
                    "status": [
                        117
                    ]
                }
            ],
            "directSells": [
                32,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "followedConsignors": [
                61,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "accounts": [
                0
            ],
            "verifiedAsBidder": [
                17
            ],
            "saleSubscriptions": [
                145,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "saleItemSubscriptions": [
                90,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "notificationSettings": [
                184
            ],
            "latestItemBids": [
                90,
                {
                    "first": [
                        72
                    ]
                }
            ],
            "billingAddress": [
                99
            ],
            "shippingAddress": [
                99
            ],
            "addresses": [
                99
            ],
            "phoneAddresses": [
                134
            ],
            "defaultPaymentMethod": [
                127
            ],
            "blocked": [
                17
            ],
            "idVerificationStatus": [
                70
            ],
            "__typename": [
                171
            ]
        },
        "MeasurementUnit": {},
        "Metafield": {
            "id": [
                68
            ],
            "key": [
                171
            ],
            "value": [
                171
            ],
            "valueType": [
                107
            ],
            "__typename": [
                171
            ]
        },
        "MetafieldValueType": {},
        "MetafieldsConnection": {
            "edges": [
                109
            ],
            "nodes": [
                106
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "MetafieldsEdge": {
            "cursor": [
                171
            ],
            "node": [
                106
            ],
            "__typename": [
                171
            ]
        },
        "Mutation": {
            "bidOnItem": [
                9,
                {
                    "saleId": [
                        171,
                        "String!"
                    ],
                    "itemId": [
                        171,
                        "String!"
                    ],
                    "amount": [
                        72,
                        "Int!"
                    ],
                    "type": [
                        14,
                        "BidType!"
                    ]
                }
            ],
            "setMyNotificationPreferences": [
                182,
                {
                    "preferences": [
                        183,
                        "[UserNotificationPreferenceInput!]!"
                    ]
                }
            ],
            "placeDutchBid": [
                38,
                {
                    "saleId": [
                        171,
                        "String!"
                    ],
                    "itemId": [
                        171,
                        "String!"
                    ],
                    "quantity": [
                        72,
                        "Int!"
                    ],
                    "amount": [
                        72,
                        "Int!"
                    ]
                }
            ],
            "maxBidOnItem": [
                102,
                {
                    "saleId": [
                        171,
                        "String!"
                    ],
                    "itemId": [
                        171,
                        "String!"
                    ],
                    "maxAmount": [
                        72,
                        "Int!"
                    ]
                }
            ],
            "createBidderVerification": [
                16,
                {
                    "input": [
                        15
                    ]
                }
            ],
            "acceptBidderTerms": [
                171
            ],
            "subscribeToAccount": [
                177,
                {
                    "accountId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromAccount": [
                68,
                {
                    "accountId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "followConsignor": [
                59,
                {
                    "consignorId": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "unfollowConsignor": [
                59,
                {
                    "consignorId": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "subsribeToItem": [
                185,
                {
                    "saleId": [
                        171,
                        "String!"
                    ],
                    "itemId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromItem": [
                68,
                {
                    "saleId": [
                        171,
                        "String!"
                    ],
                    "itemId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "subscribeToSale": [
                187,
                {
                    "saleId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromSale": [
                68,
                {
                    "saleId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "createPaymentProviderSession": [
                128,
                {
                    "input": [
                        129,
                        "PaymentProviderSessionInput!"
                    ]
                }
            ],
            "updateUser": [
                104,
                {
                    "input": [
                        176,
                        "UpdateUserInput!"
                    ]
                }
            ],
            "createPhone": [
                134,
                {
                    "input": [
                        23,
                        "CreatePhoneInput!"
                    ]
                }
            ],
            "updatePhone": [
                134,
                {
                    "input": [
                        175,
                        "UpdatePhoneInput!"
                    ]
                }
            ],
            "deletePhone": [
                17,
                {
                    "phoneId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "setDefaultPaymentMethod": [
                127,
                {
                    "input": [
                        166,
                        "SetDefaultPaymentMethodInput!"
                    ]
                }
            ],
            "makeOffer": [
                114,
                {
                    "input": [
                        101,
                        "MakeOfferInput!"
                    ]
                }
            ],
            "counterOffer": [
                114,
                {
                    "input": [
                        21,
                        "CounterOfferInput!"
                    ]
                }
            ],
            "acceptCounter": [
                114,
                {
                    "offerId": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "withdrawOffer": [
                114,
                {
                    "offerId": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "createSaleRegistration": [
                186,
                {
                    "input": [
                        25,
                        "CreateSaleRegistrationInput!"
                    ]
                }
            ],
            "createSaleItemRegistration": [
                181,
                {
                    "input": [
                        24,
                        "CreateSaleItemRegistrationInput!"
                    ]
                }
            ],
            "__typename": [
                171
            ]
        },
        "Node": {
            "id": [
                68
            ],
            "on_Department": [
                27
            ],
            "on_DutchSale": [
                45
            ],
            "on_FeeRule": [
                56
            ],
            "on_Item": [
                73
            ],
            "on_Metafield": [
                106
            ],
            "on_Sale": [
                141
            ],
            "on_UserBid": [
                178
            ],
            "__typename": [
                171
            ]
        },
        "NotificationChannel": {},
        "NotificationEvent": {},
        "Offer": {
            "id": [
                68
            ],
            "itemId": [
                171
            ],
            "amount": [
                72
            ],
            "currency": [
                171
            ],
            "status": [
                117
            ],
            "message": [
                171
            ],
            "awaitingParty": [
                116
            ],
            "counters": [
                115
            ],
            "created": [
                171
            ],
            "modified": [
                171
            ],
            "expiresAt": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "OfferCounter": {
            "id": [
                68
            ],
            "party": [
                116
            ],
            "amount": [
                72
            ],
            "currency": [
                171
            ],
            "message": [
                171
            ],
            "created": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "OfferParty": {},
        "OfferStatus": {},
        "OffersConnection": {
            "edges": [
                119
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "OffersEdge": {
            "cursor": [
                171
            ],
            "node": [
                114
            ],
            "__typename": [
                171
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                8
            ],
            "__typename": [
                171
            ]
        },
        "Paddle": {
            "identifier": [
                171
            ],
            "type": [
                123
            ],
            "created": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                8
            ],
            "__typename": [
                171
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                68
            ],
            "endCursor": [
                68
            ],
            "hasNextPage": [
                17
            ],
            "totalRecords": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "PaginationDirection": {},
        "PaymentDetails": {
            "bidderPremium": [
                58
            ],
            "__typename": [
                171
            ]
        },
        "PaymentMethod": {
            "on_Card": [
                18
            ],
            "__typename": [
                171
            ]
        },
        "PaymentProviderSession": {
            "on_StripePaymentProviderSession": [
                172
            ],
            "__typename": [
                171
            ]
        },
        "PaymentProviderSessionInput": {
            "accountId": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "PaymentSession": {
            "url": [
                171
            ],
            "status": [
                132
            ],
            "__typename": [
                171
            ]
        },
        "PaymentSessionInput": {
            "saleId": [
                171
            ],
            "itemId": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "PaymentSessionStatus": {},
        "Permission": {},
        "PhoneAddress": {
            "id": [
                171
            ],
            "phoneType": [
                136
            ],
            "phoneNumber": [
                171
            ],
            "label": [
                171
            ],
            "isPrimary": [
                17
            ],
            "verifiedAt": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "PhoneBidOrigin": {
            "type": [
                8
            ],
            "__typename": [
                171
            ]
        },
        "PhoneType": {},
        "Query": {
            "account": [
                0,
                {
                    "id": [
                        171,
                        "String!"
                    ],
                    "idType": [
                        69
                    ]
                }
            ],
            "sales": [
                145,
                {
                    "accountId": [
                        171,
                        "String!"
                    ],
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ],
                    "filter": [
                        147
                    ],
                    "idType": [
                        69
                    ]
                }
            ],
            "sale": [
                141,
                {
                    "id": [
                        171,
                        "String!"
                    ],
                    "idType": [
                        69
                    ]
                }
            ],
            "saleV2": [
                155,
                {
                    "id": [
                        171,
                        "String!"
                    ],
                    "idType": [
                        69
                    ]
                }
            ],
            "salesV2": [
                156,
                {
                    "accountId": [
                        171,
                        "String!"
                    ],
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ],
                    "filter": [
                        147
                    ],
                    "idType": [
                        69
                    ]
                }
            ],
            "saleItem": [
                73,
                {
                    "saleId": [
                        171,
                        "String!"
                    ],
                    "itemId": [
                        171,
                        "String!"
                    ]
                }
            ],
            "accountSaleItems": [
                90,
                {
                    "accountId": [
                        171,
                        "String!"
                    ],
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ],
                    "filter": [
                        149
                    ]
                }
            ],
            "saleItemByURI": [
                73,
                {
                    "uri": [
                        171,
                        "String!"
                    ]
                }
            ],
            "bids": [
                179,
                {
                    "userId": [
                        171,
                        "String!"
                    ],
                    "first": [
                        72,
                        "Int!"
                    ],
                    "after": [
                        171
                    ]
                }
            ],
            "me": [
                104
            ],
            "isFollowingConsignor": [
                17,
                {
                    "consignorId": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "consignorFollowerCount": [
                72,
                {
                    "accountId": [
                        171,
                        "String!"
                    ],
                    "consignorId": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "serverTime": [
                165
            ],
            "paymentSession": [
                130,
                {
                    "input": [
                        131
                    ]
                }
            ],
            "search": [
                160,
                {
                    "accountId": [
                        171,
                        "String!"
                    ],
                    "type": [
                        163,
                        "SearchType!"
                    ],
                    "query": [
                        171,
                        "String!"
                    ],
                    "first": [
                        72
                    ],
                    "page": [
                        72
                    ],
                    "queryBy": [
                        171,
                        "[String!]"
                    ],
                    "orderBy": [
                        171
                    ],
                    "filterBy": [
                        171
                    ],
                    "facetBy": [
                        171,
                        "[String!]"
                    ]
                }
            ],
            "offer": [
                114,
                {
                    "id": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                171
            ]
        },
        "RangeRule": {
            "highRange": [
                72
            ],
            "lowRange": [
                72
            ],
            "step": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "RenderMode": {},
        "ReserveStatus": {},
        "Sale": {
            "id": [
                68
            ],
            "cursor": [
                171
            ],
            "accountId": [
                171
            ],
            "title": [
                171
            ],
            "description": [
                171
            ],
            "currency": [
                171
            ],
            "status": [
                153
            ],
            "items": [
                90,
                {
                    "first": [
                        72
                    ],
                    "after": [
                        171
                    ],
                    "filter": [
                        149
                    ],
                    "order": [
                        83
                    ]
                }
            ],
            "incrementTable": [
                6
            ],
            "sequenceNumber": [
                72
            ],
            "dates": [
                146
            ],
            "saleFormat": [
                148
            ],
            "closingMethod": [
                19
            ],
            "images": [
                71
            ],
            "themeType": [
                72
            ],
            "slug": [
                171
            ],
            "slugFullPath": [
                171
            ],
            "type": [
                154
            ],
            "liveStream": [
                96
            ],
            "liveVideoStream": [
                98
            ],
            "liveItem": [
                95
            ],
            "userPaddle": [
                121
            ],
            "userSaleRegistrations": [
                186
            ],
            "isUserSubscribed": [
                17
            ],
            "externalId": [
                171
            ],
            "location": [
                171
            ],
            "metafields": [
                108,
                {
                    "input": [
                        64
                    ]
                }
            ],
            "metafield": [
                106,
                {
                    "input": [
                        63,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "bidRestrictions": [
                12
            ],
            "highlighted": [
                66
            ],
            "feeRules": [
                56
            ],
            "sectionMarkers": [
                164
            ],
            "site": [
                167
            ],
            "viewingTimes": [
                171
            ],
            "buyersNotes": [
                171
            ],
            "feesApplyInfo": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                141
            ],
            "on_Item": [
                73
            ],
            "on_Node": [
                111
            ],
            "on_SaleV2": [
                155
            ],
            "__typename": [
                171
            ]
        },
        "SaleActivityV2": {
            "on_Sale": [
                141
            ],
            "on_Item": [
                73
            ],
            "on_DutchSale": [
                45
            ],
            "on_DutchSaleItem": [
                46
            ],
            "on_Node": [
                111
            ],
            "on_SaleV2": [
                155
            ],
            "__typename": [
                171
            ]
        },
        "SaleChanged": {
            "on_Sale": [
                141
            ],
            "on_ServerTime": [
                165
            ],
            "on_Node": [
                111
            ],
            "on_SaleV2": [
                155
            ],
            "__typename": [
                171
            ]
        },
        "SaleConnection": {
            "edges": [
                158
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "SaleDates": {
            "closingDate": [
                171
            ],
            "openDate": [
                171
            ],
            "liveDate": [
                171
            ],
            "effectiveClosingDate": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "SaleFilter": {
            "statuses": [
                153
            ],
            "__typename": [
                171
            ]
        },
        "SaleFormat": {},
        "SaleItemFilter": {
            "statuses": [
                89
            ],
            "itemIds": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "SaleRegistrationPolicyResult": {
            "code": [
                171
            ],
            "passed": [
                17
            ],
            "description": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "SaleRegistrationStatus": {},
        "SaleRegistrationType": {},
        "SaleStatus": {},
        "SaleType": {},
        "SaleV2": {
            "id": [
                68
            ],
            "accountId": [
                171
            ],
            "title": [
                171
            ],
            "description": [
                171
            ],
            "currency": [
                171
            ],
            "status": [
                153
            ],
            "dates": [
                146
            ],
            "saleFormat": [
                148
            ],
            "on_DutchSale": [
                45
            ],
            "on_Sale": [
                141
            ],
            "__typename": [
                171
            ]
        },
        "SaleV2Connection": {
            "edges": [
                157
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "SaleV2Edge": {
            "cursor": [
                171
            ],
            "node": [
                155
            ],
            "__typename": [
                171
            ]
        },
        "SalesEdge": {
            "cursor": [
                171
            ],
            "node": [
                141
            ],
            "__typename": [
                171
            ]
        },
        "SearchPageInfo": {
            "page": [
                72
            ],
            "pageSize": [
                72
            ],
            "totalPages": [
                72
            ],
            "hasNextPage": [
                17
            ],
            "hasPreviousPage": [
                17
            ],
            "totalRecords": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "SearchResultConnection": {
            "edges": [
                161
            ],
            "pageInfo": [
                159
            ],
            "resultCount": [
                72
            ],
            "facets": [
                52
            ],
            "__typename": [
                171
            ]
        },
        "SearchResultEdge": {
            "node": [
                162
            ],
            "__typename": [
                171
            ]
        },
        "SearchResultItem": {
            "on_Item": [
                73
            ],
            "on_Sale": [
                141
            ],
            "on_Node": [
                111
            ],
            "on_SaleV2": [
                155
            ],
            "__typename": [
                171
            ]
        },
        "SearchType": {},
        "SectionMarker": {
            "id": [
                68
            ],
            "title": [
                171
            ],
            "summary": [
                171
            ],
            "fromItemNumber": [
                72
            ],
            "toItemNumber": [
                72
            ],
            "imageAssetId": [
                171
            ],
            "imageUrl": [
                171
            ],
            "isFeaturedSelection": [
                17
            ],
            "__typename": [
                171
            ]
        },
        "ServerTime": {
            "currentTime": [
                72
            ],
            "__typename": [
                171
            ]
        },
        "SetDefaultPaymentMethodInput": {
            "paymentMethodId": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "Site": {
            "name": [
                171
            ],
            "addressLine1": [
                171
            ],
            "addressLine2": [
                171
            ],
            "addressCity": [
                171
            ],
            "addressPostalCode": [
                171
            ],
            "addressCountryIso": [
                171
            ],
            "addressState": [
                171
            ],
            "openingHours": [
                171
            ],
            "appointmentRequired": [
                17
            ],
            "timezone": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "SiteLocation": {
            "id": [
                68
            ],
            "name": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "String": {},
        "StripePaymentProviderSession": {
            "publishableKey": [
                171
            ],
            "customerSessionClientSecret": [
                171
            ],
            "setupIntentClientSecret": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "Subscription": {
            "itemChanged": [
                74,
                {
                    "saleId": [
                        68,
                        "ID!"
                    ],
                    "itemIds": [
                        68,
                        "[ID!]!"
                    ]
                }
            ],
            "saleChanged": [
                144,
                {
                    "saleId": [
                        68,
                        "ID!"
                    ]
                }
            ],
            "salesChanged": [
                144,
                {
                    "saleIds": [
                        68,
                        "[ID!]!"
                    ]
                }
            ],
            "saleActivity": [
                142,
                {
                    "saleId": [
                        68,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        78
                    ]
                }
            ],
            "saleActivityV2": [
                143,
                {
                    "saleId": [
                        68,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        78
                    ]
                }
            ],
            "serverTimeChanged": [
                165
            ],
            "__typename": [
                171
            ]
        },
        "Tag": {
            "id": [
                68
            ],
            "name": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "UpdatePhoneInput": {
            "id": [
                171
            ],
            "phoneNumber": [
                171
            ],
            "phoneType": [
                136
            ],
            "isPrimary": [
                17
            ],
            "label": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "UpdateUserInput": {
            "billingAddress": [
                100
            ],
            "shippingAddress": [
                100
            ],
            "phone": [
                171
            ],
            "firstName": [
                171
            ],
            "lastName": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "UserAccountSubscription": {
            "accountId": [
                171
            ],
            "userId": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "UserBid": {
            "id": [
                68
            ],
            "userId": [
                171
            ],
            "saleId": [
                171
            ],
            "itemId": [
                171
            ],
            "amount": [
                72
            ],
            "maxAmount": [
                72
            ],
            "bidDate": [
                171
            ],
            "reactiveBid": [
                17
            ],
            "registration": [
                186
            ],
            "__typename": [
                171
            ]
        },
        "UserBidsConnection": {
            "edges": [
                180
            ],
            "pageInfo": [
                124
            ],
            "__typename": [
                171
            ]
        },
        "UserBidsEdge": {
            "cursor": [
                171
            ],
            "node": [
                178
            ],
            "__typename": [
                171
            ]
        },
        "UserItemRegistration": {
            "id": [
                68
            ],
            "saleRegistration": [
                186
            ],
            "preferredPhoneNumber": [
                134
            ],
            "alternativePhoneNumbers": [
                134
            ],
            "__typename": [
                171
            ]
        },
        "UserNotificationPreference": {
            "notification": [
                113
            ],
            "channel": [
                112
            ],
            "optedIn": [
                17
            ],
            "__typename": [
                171
            ]
        },
        "UserNotificationPreferenceInput": {
            "notification": [
                113
            ],
            "channel": [
                112
            ],
            "optedIn": [
                17
            ],
            "__typename": [
                171
            ]
        },
        "UserNotificationSettings": {
            "preferences": [
                182
            ],
            "__typename": [
                171
            ]
        },
        "UserSaleItemSubscription": {
            "accountId": [
                171
            ],
            "saleId": [
                171
            ],
            "itemId": [
                171
            ],
            "userId": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "UserSaleRegistration": {
            "id": [
                68
            ],
            "saleId": [
                171
            ],
            "userId": [
                171
            ],
            "registrationType": [
                152
            ],
            "status": [
                151
            ],
            "policyResults": [
                150
            ],
            "preferredPhoneNumber": [
                134
            ],
            "alternativePhoneNumbers": [
                134
            ],
            "identifier": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "UserSaleSubscription": {
            "accountId": [
                171
            ],
            "saleId": [
                171
            ],
            "userId": [
                171
            ],
            "__typename": [
                171
            ]
        },
        "WeightUnit": {}
    }
}