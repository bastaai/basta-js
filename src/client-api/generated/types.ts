export default {
    "scalars": [
        1,
        8,
        10,
        11,
        16,
        19,
        24,
        25,
        28,
        33,
        41,
        49,
        55,
        62,
        66,
        80,
        82,
        83,
        94,
        95,
        96,
        100,
        112,
        115,
        119,
        122,
        124,
        127,
        135,
        137,
        142,
        143,
        146,
        147,
        156,
        159,
        161,
        168,
        169,
        172,
        175,
        179,
        188,
        191,
        192,
        193,
        194,
        203,
        212,
        213,
        217,
        241,
        242
    ],
    "types": {
        "Account": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "handle": [
                217
            ],
            "description": [
                217
            ],
            "imageUrl": [
                217
            ],
            "links": [
                123
            ],
            "bastaBidClient": [
                28
            ],
            "conditionReportsRequireLogin": [
                28
            ],
            "isUserSubscribed": [
                28
            ],
            "paymentDetails": [
                162
            ],
            "metafields": [
                138,
                {
                    "input": [
                        89
                    ]
                }
            ],
            "metafield": [
                136,
                {
                    "input": [
                        88,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "departments": [
                52,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "staffProfiles": [
                215,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "departmentId": [
                        94
                    ]
                }
            ],
            "__typename": [
                217
            ]
        },
        "AddressType": {},
        "Aggregator": {
            "name": [
                217
            ],
            "type": [
                19
            ],
            "__typename": [
                217
            ]
        },
        "Appointment": {
            "id": [
                94
            ],
            "type": [
                11
            ],
            "status": [
                10
            ],
            "site": [
                209
            ],
            "preferredStart": [
                217
            ],
            "preferredEnd": [
                217
            ],
            "scheduledStart": [
                217
            ],
            "scheduledEnd": [
                217
            ],
            "note": [
                217
            ],
            "cancelledByHouse": [
                28
            ],
            "cancellationReason": [
                217
            ],
            "documents": [
                6
            ],
            "created": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "AppointmentBookingOptions": {
            "enabled": [
                28
            ],
            "sites": [
                209
            ],
            "earliestStart": [
                217
            ],
            "latestStart": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "AppointmentConnection": {
            "edges": [
                9
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "AppointmentDocument": {
            "type": [
                8
            ],
            "documentId": [
                94
            ],
            "number": [
                217
            ],
            "saleId": [
                94
            ],
            "itemIds": [
                94
            ],
            "__typename": [
                217
            ]
        },
        "AppointmentDocumentInput": {
            "type": [
                8
            ],
            "documentId": [
                94
            ],
            "itemIds": [
                94
            ],
            "__typename": [
                217
            ]
        },
        "AppointmentDocumentType": {},
        "AppointmentEdge": {
            "cursor": [
                217
            ],
            "node": [
                3
            ],
            "__typename": [
                217
            ]
        },
        "AppointmentStatus": {},
        "AppointmentType": {},
        "BankDetails": {
            "accountName": [
                217
            ],
            "accountNumber": [
                217
            ],
            "sortCode": [
                217
            ],
            "country": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "BankDetailsInput": {
            "accountName": [
                217
            ],
            "accountNumber": [
                217
            ],
            "sortCode": [
                217
            ],
            "country": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "BastaLiveStream": {
            "enabled": [
                28
            ],
            "channelId": [
                217
            ],
            "publicUrl": [
                217
            ],
            "isLive": [
                28
            ],
            "currentViewers": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "Bid": {
            "id": [
                94
            ],
            "saleId": [
                217
            ],
            "itemId": [
                217
            ],
            "amount": [
                100
            ],
            "maxAmount": [
                100
            ],
            "date": [
                217
            ],
            "bidStatus": [
                24
            ],
            "bidderIdentifier": [
                217
            ],
            "paddle": [
                157
            ],
            "reactiveBid": [
                28
            ],
            "bidOrigin": [
                18
            ],
            "registration": [
                236
            ],
            "__typename": [
                217
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rangeRules": [
                174
            ],
            "__typename": [
                217
            ]
        },
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                150
            ],
            "on_PaddleBidOrigin": [
                158
            ],
            "on_PhoneBidOrigin": [
                171
            ],
            "on_Aggregator": [
                2
            ],
            "__typename": [
                217
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                22
            ],
            "on_MaxBidPlacedSuccess": [
                133
            ],
            "on_BidPlacedError": [
                21
            ],
            "__typename": [
                217
            ]
        },
        "BidPlacedError": {
            "error": [
                217
            ],
            "errorCode": [
                16
            ],
            "__typename": [
                217
            ]
        },
        "BidPlacedSuccess": {
            "id": [
                217
            ],
            "amount": [
                100
            ],
            "date": [
                217
            ],
            "bidStatus": [
                24
            ],
            "registration": [
                236
            ],
            "__typename": [
                217
            ]
        },
        "BidRestrictions": {
            "acceptedRegistrationRequired": [
                28
            ],
            "phoneRegistrationOpen": [
                28
            ],
            "phoneRegistrationClosesAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderVerificationInput": {
            "successUrl": [
                217
            ],
            "cancelUrl": [
                217
            ],
            "renderMode": [
                175
            ],
            "__typename": [
                217
            ]
        },
        "BidderVerificationLink": {
            "url": [
                217
            ],
            "clientSecret": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "Boolean": {},
        "BuyerPremium": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "currency": [
                217
            ],
            "calculationType": [
                80
            ],
            "minimum": [
                100
            ],
            "maximum": [
                100
            ],
            "bands": [
                30
            ],
            "__typename": [
                217
            ]
        },
        "BuyerPremiumBand": {
            "lowerLimit": [
                100
            ],
            "upperLteLimit": [
                100
            ],
            "type": [
                82
            ],
            "value": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "CancelAppointmentInput": {
            "appointmentId": [
                94
            ],
            "reason": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "Card": {
            "id": [
                217
            ],
            "brand": [
                217
            ],
            "expirationMonth": [
                100
            ],
            "expirationYear": [
                100
            ],
            "last4": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ClosingMethod": {},
        "ConditionReport": {
            "text": [
                122
            ],
            "images": [
                99
            ],
            "__typename": [
                217
            ]
        },
        "ConsignmentContractSigning": {
            "consignorName": [
                217
            ],
            "houseName": [
                217
            ],
            "houseLogoUrl": [
                217
            ],
            "consignmentReference": [
                217
            ],
            "revision": [
                100
            ],
            "documentUrl": [
                217
            ],
            "documentUrlExpiresAt": [
                217
            ],
            "expiresAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "Consignor": {
            "userId": [
                217
            ],
            "isMain": [
                28
            ],
            "username": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ConsignorPresaleAdvice": {
            "id": [
                94
            ],
            "saleId": [
                217
            ],
            "saleTitle": [
                217
            ],
            "saleDate": [
                217
            ],
            "sentAt": [
                217
            ],
            "download": [
                58
            ],
            "__typename": [
                217
            ]
        },
        "ConsignorPresaleAdviceConnection": {
            "edges": [
                39
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "ConsignorPresaleAdviceEdge": {
            "cursor": [
                217
            ],
            "node": [
                37
            ],
            "__typename": [
                217
            ]
        },
        "CounterOfferInput": {
            "offerId": [
                94
            ],
            "amount": [
                100
            ],
            "currency": [
                217
            ],
            "message": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "Country": {},
        "CreatePhoneInput": {
            "phoneNumber": [
                217
            ],
            "phoneType": [
                172
            ],
            "isPrimary": [
                28
            ],
            "label": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "CreateSaleItemRegistrationInput": {
            "saleId": [
                217
            ],
            "itemId": [
                217
            ],
            "type": [
                192
            ],
            "identifier": [
                217
            ],
            "preferredPhoneNumberId": [
                94
            ],
            "alternativePhoneNumberIds": [
                94
            ],
            "__typename": [
                217
            ]
        },
        "CreateSaleRegistrationInput": {
            "saleId": [
                217
            ],
            "type": [
                192
            ],
            "identifier": [
                217
            ],
            "preferredPhoneNumberId": [
                94
            ],
            "alternativePhoneNumberIds": [
                94
            ],
            "__typename": [
                217
            ]
        },
        "CreateValuationPhotoUploadUrlInput": {
            "accountId": [
                94
            ],
            "contentType": [
                217
            ],
            "filename": [
                217
            ],
            "size": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "Creator": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "slug": [
                217
            ],
            "parentId": [
                94
            ],
            "parent": [
                46
            ],
            "children": [
                46
            ],
            "type": [
                49
            ],
            "path": [
                217
            ],
            "yearFrom": [
                217
            ],
            "yearTo": [
                217
            ],
            "nationality": [
                217
            ],
            "biography": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "CreatorConnection": {
            "edges": [
                48
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "CreatorEdge": {
            "cursor": [
                217
            ],
            "node": [
                46
            ],
            "__typename": [
                217
            ]
        },
        "CreatorType": {},
        "CurrentItem": {
            "item": [
                103
            ],
            "cursor": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "Department": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "slug": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "DepartmentConnection": {
            "edges": [
                53
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "DepartmentEdge": {
            "cursor": [
                217
            ],
            "node": [
                51
            ],
            "__typename": [
                217
            ]
        },
        "DirectSell": {
            "amount": [
                100
            ],
            "currency": [
                217
            ],
            "source": [
                55
            ],
            "timestamp": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "DirectSellSource": {},
        "DirectSellsConnection": {
            "edges": [
                57
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "DirectSellsEdge": {
            "cursor": [
                217
            ],
            "node": [
                103
            ],
            "__typename": [
                217
            ]
        },
        "DocumentDownload": {
            "url": [
                217
            ],
            "expiresAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "DutchBid": {
            "id": [
                94
            ],
            "amount": [
                100
            ],
            "placedAt": [
                217
            ],
            "mine": [
                28
            ],
            "__typename": [
                217
            ]
        },
        "DutchBidConnection": {
            "edges": [
                61
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "DutchBidEdge": {
            "cursor": [
                217
            ],
            "node": [
                59
            ],
            "__typename": [
                217
            ]
        },
        "DutchBidErrorCode": {},
        "DutchBidPlaced": {
            "on_DutchBidPlacedSuccess": [
                65
            ],
            "on_DutchBidPlacedError": [
                64
            ],
            "__typename": [
                217
            ]
        },
        "DutchBidPlacedError": {
            "errorCode": [
                62
            ],
            "__typename": [
                217
            ]
        },
        "DutchBidPlacedSuccess": {
            "id": [
                217
            ],
            "amount": [
                100
            ],
            "quantityRequested": [
                100
            ],
            "quantityAllocated": [
                100
            ],
            "placedAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "DutchItemStatus": {},
        "DutchNextDrop": {
            "price": [
                100
            ],
            "at": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "DutchPrice": {
            "current": [
                100
            ],
            "nextDrop": [
                67
            ],
            "__typename": [
                217
            ]
        },
        "DutchPriceDrop": {
            "at": [
                217
            ],
            "price": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "DutchSale": {
            "id": [
                94
            ],
            "accountId": [
                217
            ],
            "title": [
                217
            ],
            "description": [
                217
            ],
            "currency": [
                217
            ],
            "status": [
                193
            ],
            "dates": [
                186
            ],
            "saleFormat": [
                188
            ],
            "images": [
                99
            ],
            "items": [
                72,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "__typename": [
                217
            ]
        },
        "DutchSaleItem": {
            "id": [
                94
            ],
            "saleId": [
                217
            ],
            "status": [
                66
            ],
            "availableUnits": [
                100
            ],
            "unitsRemaining": [
                100
            ],
            "totalBids": [
                100
            ],
            "openTime": [
                217
            ],
            "endTime": [
                217
            ],
            "price": [
                68
            ],
            "schedule": [
                74
            ],
            "title": [
                217
            ],
            "subTitle": [
                217
            ],
            "conditionReport": [
                34
            ],
            "description": [
                217
            ],
            "images": [
                99
            ],
            "bids": [
                60,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "__typename": [
                217
            ]
        },
        "DutchSaleItemConnection": {
            "edges": [
                73
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "DutchSaleItemEdge": {
            "cursor": [
                217
            ],
            "node": [
                71
            ],
            "__typename": [
                217
            ]
        },
        "DutchSchedule": {
            "startingAmount": [
                100
            ],
            "drops": [
                69
            ],
            "__typename": [
                217
            ]
        },
        "Estimate": {
            "low": [
                100
            ],
            "high": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "ExternalLiveStream": {
            "url": [
                217
            ],
            "type": [
                127
            ],
            "created": [
                217
            ],
            "updated": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "FacetCount": {
            "fieldName": [
                217
            ],
            "counts": [
                79
            ],
            "stats": [
                78
            ],
            "__typename": [
                217
            ]
        },
        "FacetStats": {
            "avg": [
                83
            ],
            "max": [
                83
            ],
            "min": [
                83
            ],
            "sum": [
                83
            ],
            "totalValues": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "FacetValue": {
            "value": [
                217
            ],
            "count": [
                100
            ],
            "highlighted": [
                217
            ],
            "label": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "FeeCalculationType": {},
        "FeeRule": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "type": [
                82
            ],
            "value": [
                100
            ],
            "upperLteLimit": [
                100
            ],
            "lowerLimit": [
                100
            ],
            "calculationType": [
                80
            ],
            "__typename": [
                217
            ]
        },
        "FeeRuleType": {},
        "Float": {},
        "FollowConsignorResult": {
            "consignorId": [
                94
            ],
            "following": [
                28
            ],
            "__typename": [
                217
            ]
        },
        "FollowedConsignor": {
            "consignorId": [
                94
            ],
            "__typename": [
                217
            ]
        },
        "FollowedConsignorsConnection": {
            "edges": [
                87
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "FollowedConsignorsEdge": {
            "cursor": [
                217
            ],
            "node": [
                85
            ],
            "__typename": [
                217
            ]
        },
        "GetMetafieldInput": {
            "key": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "GetMetafieldsInput": {
            "keys": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "GetUserBidsInput": {
            "userId": [
                217
            ],
            "first": [
                100
            ],
            "after": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "HighlightedItemConnection": {
            "edges": [
                92
            ],
            "__typename": [
                217
            ]
        },
        "HighlightedItemEdge": {
            "node": [
                103
            ],
            "position": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "HttpHeader": {
            "key": [
                217
            ],
            "value": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ID": {},
        "IdType": {},
        "IdVerificationState": {},
        "IdVerificationStatus": {
            "verified": [
                28
            ],
            "modifiedAt": [
                217
            ],
            "status": [
                96
            ],
            "failureReason": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "IdentityVerificationSession": {
            "on_StripeIdentityVerificationSession": [
                218
            ],
            "__typename": [
                217
            ]
        },
        "Image": {
            "id": [
                217
            ],
            "url": [
                217
            ],
            "order": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "Int": {},
        "Invoice": {
            "revision": [
                100
            ],
            "issuedAt": [
                217
            ],
            "dueDate": [
                217
            ],
            "download": [
                58
            ],
            "__typename": [
                217
            ]
        },
        "InvoiceTaxBand": {
            "name": [
                217
            ],
            "rateBps": [
                100
            ],
            "basisTotal": [
                100
            ],
            "taxTotal": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "Item": {
            "id": [
                94
            ],
            "cursor": [
                217
            ],
            "saleId": [
                217
            ],
            "accountId": [
                217
            ],
            "title": [
                217
            ],
            "subTitle": [
                217
            ],
            "conditionReport": [
                34
            ],
            "description": [
                217
            ],
            "currency": [
                217
            ],
            "estimates": [
                75
            ],
            "currentBid": [
                100
            ],
            "bidStatus": [
                24
            ],
            "totalBids": [
                100
            ],
            "bids": [
                15,
                {
                    "collapseSequentialUserBids": [
                        28
                    ]
                }
            ],
            "userBids": [
                15
            ],
            "reserveMet": [
                28
            ],
            "reserveStatus": [
                179
            ],
            "nextAsks": [
                100,
                {
                    "iterations": [
                        100
                    ]
                }
            ],
            "incrementTable": [
                17
            ],
            "itemDates": [
                105
            ],
            "dates": [
                105
            ],
            "status": [
                119
            ],
            "itemResult": [
                115
            ],
            "startingBid": [
                100
            ],
            "images": [
                99
            ],
            "slug": [
                217
            ],
            "slugFullPath": [
                217
            ],
            "itemNumber": [
                100
            ],
            "displayNumber": [
                217
            ],
            "highlight": [
                107
            ],
            "notifications": [
                110
            ],
            "isUserSubscribed": [
                28
            ],
            "subscriberCount": [
                100
            ],
            "allowedBidTypes": [
                25
            ],
            "specifications": [
                118
            ],
            "specificationsV2": [
                118
            ],
            "packaging": [
                114
            ],
            "prevItem": [
                103,
                {
                    "sortBy": [
                        112
                    ]
                }
            ],
            "nextItem": [
                103,
                {
                    "sortBy": [
                        112
                    ]
                }
            ],
            "externalId": [
                217
            ],
            "location": [
                217
            ],
            "closingTimeCountdown": [
                100
            ],
            "metafields": [
                138,
                {
                    "input": [
                        89
                    ]
                }
            ],
            "metafield": [
                136,
                {
                    "input": [
                        88,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "userItemRegistrations": [
                231
            ],
            "feeRules": [
                81
            ],
            "buyerPremiums": [
                29
            ],
            "hidden": [
                28
            ],
            "schema": [
                116
            ],
            "tags": [
                224
            ],
            "offers": [
                148,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "status": [
                        147
                    ]
                }
            ],
            "offerEnabled": [
                28
            ],
            "buyNowEnabled": [
                28
            ],
            "buyNowPrice": [
                100
            ],
            "directSell": [
                54
            ],
            "consignors": [
                36
            ],
            "site": [
                209
            ],
            "siteLocation": [
                211
            ],
            "sectionMarkers": [
                204
            ],
            "citesLicenceNumber": [
                217
            ],
            "creators": [
                46
            ],
            "__typename": [
                217
            ]
        },
        "ItemChanged": {
            "on_Item": [
                103
            ],
            "on_ServerTime": [
                205
            ],
            "on_Node": [
                141
            ],
            "__typename": [
                217
            ]
        },
        "ItemDates": {
            "openDate": [
                217
            ],
            "closingStart": [
                217
            ],
            "closingEnd": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                217
            ],
            "date": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ItemHighlight": {
            "enabled": [
                28
            ],
            "position": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                94
            ],
            "__typename": [
                217
            ]
        },
        "ItemMessageNotification": {
            "id": [
                217
            ],
            "message": [
                217
            ],
            "date": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                109
            ],
            "on_ItemFairWarningNotification": [
                106
            ],
            "on_ItemOfferPlacedNotification": [
                111
            ],
            "on_ItemSoldNotification": [
                117
            ],
            "__typename": [
                217
            ]
        },
        "ItemOfferPlacedNotification": {
            "id": [
                217
            ],
            "amount": [
                100
            ],
            "currency": [
                217
            ],
            "referenceId": [
                217
            ],
            "date": [
                217
            ],
            "buyerIdentifier": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                112
            ],
            "direction": [
                161
            ],
            "__typename": [
                217
            ]
        },
        "ItemPackaging": {
            "id": [
                217
            ],
            "quantity": [
                100
            ],
            "boxedHeight": [
                83
            ],
            "boxedLength": [
                83
            ],
            "boxedDepth": [
                83
            ],
            "boxedMeasurementUnit": [
                135
            ],
            "boxedWeight": [
                83
            ],
            "boxedWeightUnit": [
                242
            ],
            "created": [
                217
            ],
            "modified": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ItemResult": {},
        "ItemSchema": {
            "id": [
                94
            ],
            "definition": [
                122
            ],
            "data": [
                122
            ],
            "__typename": [
                217
            ]
        },
        "ItemSoldNotification": {
            "id": [
                217
            ],
            "amount": [
                100
            ],
            "currency": [
                217
            ],
            "source": [
                55
            ],
            "referenceId": [
                217
            ],
            "date": [
                217
            ],
            "buyerIdentifier": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ItemSpecifications": {
            "id": [
                217
            ],
            "type": [
                213
            ],
            "subType": [
                212
            ],
            "height": [
                83
            ],
            "length": [
                83
            ],
            "depth": [
                83
            ],
            "diameter": [
                83
            ],
            "measurementUnit": [
                135
            ],
            "weight": [
                83
            ],
            "weightUnit": [
                242
            ],
            "quantity": [
                100
            ],
            "created": [
                217
            ],
            "modified": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ItemStatus": {},
        "ItemsConnection": {
            "edges": [
                121
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "ItemsEdge": {
            "cursor": [
                217
            ],
            "node": [
                103
            ],
            "__typename": [
                217
            ]
        },
        "JSON": {},
        "Link": {
            "type": [
                124
            ],
            "url": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                103
            ],
            "cursor": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "LiveStream": {
            "url": [
                217
            ],
            "type": [
                127
            ],
            "created": [
                217
            ],
            "updated": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "LiveStreamType": {},
        "LiveVideoStream": {
            "on_ExternalLiveStream": [
                76
            ],
            "on_BastaLiveStream": [
                14
            ],
            "__typename": [
                217
            ]
        },
        "MailingAddress": {
            "id": [
                217
            ],
            "name": [
                217
            ],
            "company": [
                217
            ],
            "phone": [
                217
            ],
            "line1": [
                217
            ],
            "line2": [
                217
            ],
            "city": [
                217
            ],
            "state": [
                217
            ],
            "postalCode": [
                217
            ],
            "country": [
                41
            ],
            "isPrimary": [
                28
            ],
            "addressType": [
                1
            ],
            "label": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "MailingAddressInput": {
            "id": [
                217
            ],
            "name": [
                217
            ],
            "company": [
                217
            ],
            "phone": [
                217
            ],
            "line1": [
                217
            ],
            "line2": [
                217
            ],
            "city": [
                217
            ],
            "state": [
                217
            ],
            "postalCode": [
                217
            ],
            "country": [
                41
            ],
            "isPrimary": [
                28
            ],
            "label": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "MakeOfferInput": {
            "itemId": [
                217
            ],
            "amount": [
                100
            ],
            "currency": [
                217
            ],
            "message": [
                217
            ],
            "saleId": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "MaxBidPlaced": {
            "on_MaxBidPlacedSuccess": [
                133
            ],
            "on_BidPlacedError": [
                21
            ],
            "__typename": [
                217
            ]
        },
        "MaxBidPlacedSuccess": {
            "id": [
                217
            ],
            "amount": [
                100
            ],
            "maxAmount": [
                100
            ],
            "bidStatus": [
                24
            ],
            "date": [
                217
            ],
            "registration": [
                236
            ],
            "__typename": [
                217
            ]
        },
        "Me": {
            "userId": [
                217
            ],
            "firstName": [
                217
            ],
            "lastName": [
                217
            ],
            "email": [
                217
            ],
            "username": [
                217
            ],
            "emailVerified": [
                28
            ],
            "bids": [
                229,
                {
                    "first": [
                        100,
                        "Int!"
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "offers": [
                148,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "status": [
                        147
                    ]
                }
            ],
            "directSells": [
                56,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "followedConsignors": [
                86,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "accounts": [
                0
            ],
            "verifiedAsBidder": [
                28
            ],
            "saleSubscriptions": [
                184,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "saleItemSubscriptions": [
                120,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "notificationSettings": [
                234
            ],
            "latestItemBids": [
                120,
                {
                    "first": [
                        100
                    ]
                }
            ],
            "billingAddress": [
                129
            ],
            "shippingAddress": [
                129
            ],
            "addresses": [
                129
            ],
            "phoneAddresses": [
                170
            ],
            "defaultPaymentMethod": [
                163
            ],
            "blocked": [
                28
            ],
            "idVerificationStatus": [
                97
            ],
            "bankDetails": [
                12
            ],
            "presaleAdvices": [
                38,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "appointments": [
                5,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "upcomingOnly": [
                        28
                    ]
                }
            ],
            "appointmentBookingOptions": [
                4
            ],
            "orders": [
                152,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "order": [
                151,
                {
                    "id": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                217
            ]
        },
        "MeasurementUnit": {},
        "Metafield": {
            "id": [
                94
            ],
            "key": [
                217
            ],
            "value": [
                217
            ],
            "valueType": [
                137
            ],
            "__typename": [
                217
            ]
        },
        "MetafieldValueType": {},
        "MetafieldsConnection": {
            "edges": [
                139
            ],
            "nodes": [
                136
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "MetafieldsEdge": {
            "cursor": [
                217
            ],
            "node": [
                136
            ],
            "__typename": [
                217
            ]
        },
        "Mutation": {
            "bidOnItem": [
                20,
                {
                    "saleId": [
                        217,
                        "String!"
                    ],
                    "itemId": [
                        217,
                        "String!"
                    ],
                    "amount": [
                        100,
                        "Int!"
                    ],
                    "type": [
                        25,
                        "BidType!"
                    ]
                }
            ],
            "setMyNotificationPreferences": [
                232,
                {
                    "preferences": [
                        233,
                        "[UserNotificationPreferenceInput!]!"
                    ]
                }
            ],
            "placeDutchBid": [
                63,
                {
                    "saleId": [
                        217,
                        "String!"
                    ],
                    "itemId": [
                        217,
                        "String!"
                    ],
                    "quantity": [
                        100,
                        "Int!"
                    ],
                    "amount": [
                        100,
                        "Int!"
                    ]
                }
            ],
            "maxBidOnItem": [
                132,
                {
                    "saleId": [
                        217,
                        "String!"
                    ],
                    "itemId": [
                        217,
                        "String!"
                    ],
                    "maxAmount": [
                        100,
                        "Int!"
                    ]
                }
            ],
            "createBidderVerification": [
                27,
                {
                    "input": [
                        26
                    ]
                }
            ],
            "createIdentityVerificationSession": [
                98
            ],
            "acceptBidderTerms": [
                217
            ],
            "subscribeToAccount": [
                227,
                {
                    "accountId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromAccount": [
                94,
                {
                    "accountId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "followConsignor": [
                84,
                {
                    "consignorId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "unfollowConsignor": [
                84,
                {
                    "consignorId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "subsribeToItem": [
                235,
                {
                    "saleId": [
                        217,
                        "String!"
                    ],
                    "itemId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromItem": [
                94,
                {
                    "saleId": [
                        217,
                        "String!"
                    ],
                    "itemId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "subscribeToSale": [
                237,
                {
                    "saleId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "unsubscribeFromSale": [
                94,
                {
                    "saleId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "createPaymentProviderSession": [
                164,
                {
                    "input": [
                        165,
                        "PaymentProviderSessionInput!"
                    ]
                }
            ],
            "updateUser": [
                134,
                {
                    "input": [
                        226,
                        "UpdateUserInput!"
                    ]
                }
            ],
            "updateMyBankDetails": [
                12,
                {
                    "input": [
                        13,
                        "BankDetailsInput!"
                    ]
                }
            ],
            "deleteMyBankDetails": [
                28
            ],
            "createPhone": [
                170,
                {
                    "input": [
                        42,
                        "CreatePhoneInput!"
                    ]
                }
            ],
            "updatePhone": [
                170,
                {
                    "input": [
                        225,
                        "UpdatePhoneInput!"
                    ]
                }
            ],
            "deletePhone": [
                28,
                {
                    "phoneId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "setDefaultPaymentMethod": [
                163,
                {
                    "input": [
                        206,
                        "SetDefaultPaymentMethodInput!"
                    ]
                }
            ],
            "makeOffer": [
                144,
                {
                    "input": [
                        131,
                        "MakeOfferInput!"
                    ]
                }
            ],
            "counterOffer": [
                144,
                {
                    "input": [
                        40,
                        "CounterOfferInput!"
                    ]
                }
            ],
            "acceptCounter": [
                144,
                {
                    "offerId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "withdrawOffer": [
                144,
                {
                    "offerId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "createSaleRegistration": [
                236,
                {
                    "input": [
                        44,
                        "CreateSaleRegistrationInput!"
                    ]
                }
            ],
            "createSaleItemRegistration": [
                231,
                {
                    "input": [
                        43,
                        "CreateSaleItemRegistrationInput!"
                    ]
                }
            ],
            "signConsignmentContract": [
                208,
                {
                    "input": [
                        207,
                        "SignConsignmentContractInput!"
                    ]
                }
            ],
            "createValuationPhotoUploadUrl": [
                240,
                {
                    "input": [
                        45,
                        "CreateValuationPhotoUploadUrlInput!"
                    ]
                }
            ],
            "submitValuationRequest": [
                222,
                {
                    "input": [
                        220,
                        "SubmitValuationRequestInput!"
                    ]
                }
            ],
            "requestAppointment": [
                3,
                {
                    "input": [
                        176,
                        "RequestAppointmentInput!"
                    ]
                }
            ],
            "cancelAppointment": [
                3,
                {
                    "input": [
                        31,
                        "CancelAppointmentInput!"
                    ]
                }
            ],
            "requestConditionReport": [
                178,
                {
                    "input": [
                        177,
                        "RequestConditionReportInput!"
                    ]
                }
            ],
            "__typename": [
                217
            ]
        },
        "Node": {
            "id": [
                94
            ],
            "on_Department": [
                51
            ],
            "on_DutchSale": [
                70
            ],
            "on_FeeRule": [
                81
            ],
            "on_Item": [
                103
            ],
            "on_Metafield": [
                136
            ],
            "on_Sale": [
                180
            ],
            "on_StaffProfile": [
                214
            ],
            "on_UserBid": [
                228
            ],
            "__typename": [
                217
            ]
        },
        "NotificationChannel": {},
        "NotificationEvent": {},
        "Offer": {
            "id": [
                94
            ],
            "itemId": [
                217
            ],
            "amount": [
                100
            ],
            "currency": [
                217
            ],
            "status": [
                147
            ],
            "message": [
                217
            ],
            "awaitingParty": [
                146
            ],
            "counters": [
                145
            ],
            "created": [
                217
            ],
            "modified": [
                217
            ],
            "expiresAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "OfferCounter": {
            "id": [
                94
            ],
            "party": [
                146
            ],
            "amount": [
                100
            ],
            "currency": [
                217
            ],
            "message": [
                217
            ],
            "created": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "OfferParty": {},
        "OfferStatus": {},
        "OffersConnection": {
            "edges": [
                149
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "OffersEdge": {
            "cursor": [
                217
            ],
            "node": [
                144
            ],
            "__typename": [
                217
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                19
            ],
            "__typename": [
                217
            ]
        },
        "Order": {
            "id": [
                94
            ],
            "saleId": [
                94
            ],
            "title": [
                217
            ],
            "currency": [
                217
            ],
            "status": [
                156
            ],
            "lines": [
                154
            ],
            "billingAddress": [
                129
            ],
            "shippingAddress": [
                129
            ],
            "total": [
                100
            ],
            "amountPaid": [
                100
            ],
            "amountDue": [
                100
            ],
            "taxTotal": [
                100
            ],
            "taxBands": [
                102
            ],
            "dueAt": [
                217
            ],
            "invoiceNumber": [
                217
            ],
            "invoice": [
                101
            ],
            "created": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "OrderConnection": {
            "edges": [
                153
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "OrderEdge": {
            "cursor": [
                217
            ],
            "node": [
                151
            ],
            "__typename": [
                217
            ]
        },
        "OrderLine": {
            "itemId": [
                94
            ],
            "description": [
                217
            ],
            "hammer": [
                100
            ],
            "fees": [
                155
            ],
            "total": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "OrderLineFee": {
            "name": [
                217
            ],
            "amount": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "OrderStatus": {},
        "Paddle": {
            "identifier": [
                217
            ],
            "type": [
                159
            ],
            "created": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                19
            ],
            "__typename": [
                217
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                94
            ],
            "endCursor": [
                94
            ],
            "hasNextPage": [
                28
            ],
            "totalRecords": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "PaginationDirection": {},
        "PaymentDetails": {
            "bidderPremium": [
                83
            ],
            "__typename": [
                217
            ]
        },
        "PaymentMethod": {
            "on_Card": [
                32
            ],
            "__typename": [
                217
            ]
        },
        "PaymentProviderSession": {
            "on_StripePaymentProviderSession": [
                219
            ],
            "__typename": [
                217
            ]
        },
        "PaymentProviderSessionInput": {
            "accountId": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "PaymentSession": {
            "url": [
                217
            ],
            "status": [
                168
            ],
            "__typename": [
                217
            ]
        },
        "PaymentSessionInput": {
            "saleId": [
                217
            ],
            "itemId": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "PaymentSessionStatus": {},
        "Permission": {},
        "PhoneAddress": {
            "id": [
                217
            ],
            "phoneType": [
                172
            ],
            "phoneNumber": [
                217
            ],
            "label": [
                217
            ],
            "isPrimary": [
                28
            ],
            "verifiedAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "PhoneBidOrigin": {
            "type": [
                19
            ],
            "__typename": [
                217
            ]
        },
        "PhoneType": {},
        "Query": {
            "account": [
                0,
                {
                    "id": [
                        217,
                        "String!"
                    ],
                    "idType": [
                        95
                    ]
                }
            ],
            "sales": [
                184,
                {
                    "accountId": [
                        217,
                        "String!"
                    ],
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "filter": [
                        187
                    ],
                    "idType": [
                        95
                    ]
                }
            ],
            "sale": [
                180,
                {
                    "id": [
                        217,
                        "String!"
                    ],
                    "idType": [
                        95
                    ]
                }
            ],
            "saleV2": [
                195,
                {
                    "id": [
                        217,
                        "String!"
                    ],
                    "idType": [
                        95
                    ]
                }
            ],
            "salesV2": [
                196,
                {
                    "accountId": [
                        217,
                        "String!"
                    ],
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "filter": [
                        187
                    ],
                    "idType": [
                        95
                    ]
                }
            ],
            "saleItem": [
                103,
                {
                    "saleId": [
                        217,
                        "String!"
                    ],
                    "itemId": [
                        217,
                        "String!"
                    ]
                }
            ],
            "accountSaleItems": [
                120,
                {
                    "accountId": [
                        217,
                        "String!"
                    ],
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "filter": [
                        189
                    ]
                }
            ],
            "creators": [
                47,
                {
                    "accountId": [
                        217,
                        "String!"
                    ],
                    "parentId": [
                        94
                    ],
                    "includeChildren": [
                        28
                    ],
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "saleItemByURI": [
                103,
                {
                    "uri": [
                        217,
                        "String!"
                    ]
                }
            ],
            "bids": [
                229,
                {
                    "userId": [
                        217,
                        "String!"
                    ],
                    "first": [
                        100,
                        "Int!"
                    ],
                    "after": [
                        217
                    ]
                }
            ],
            "me": [
                134
            ],
            "isFollowingConsignor": [
                28,
                {
                    "consignorId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "consignorFollowerCount": [
                100,
                {
                    "accountId": [
                        217,
                        "String!"
                    ],
                    "consignorId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "serverTime": [
                205
            ],
            "paymentSession": [
                166,
                {
                    "input": [
                        167
                    ]
                }
            ],
            "search": [
                200,
                {
                    "accountId": [
                        217,
                        "String!"
                    ],
                    "type": [
                        203,
                        "SearchType!"
                    ],
                    "query": [
                        217,
                        "String!"
                    ],
                    "first": [
                        100
                    ],
                    "page": [
                        100
                    ],
                    "queryBy": [
                        217,
                        "[String!]"
                    ],
                    "orderBy": [
                        217
                    ],
                    "filterBy": [
                        217
                    ],
                    "facetBy": [
                        217,
                        "[String!]"
                    ]
                }
            ],
            "offer": [
                144,
                {
                    "id": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "consignmentContractSigning": [
                35,
                {
                    "code": [
                        217,
                        "String!"
                    ]
                }
            ],
            "valuationForm": [
                238,
                {
                    "accountId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                217
            ]
        },
        "RangeRule": {
            "highRange": [
                100
            ],
            "lowRange": [
                100
            ],
            "step": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "RenderMode": {},
        "RequestAppointmentInput": {
            "appointmentId": [
                94
            ],
            "type": [
                11
            ],
            "siteId": [
                94
            ],
            "preferredStart": [
                217
            ],
            "preferredEnd": [
                217
            ],
            "note": [
                217
            ],
            "documents": [
                7
            ],
            "__typename": [
                217
            ]
        },
        "RequestConditionReportInput": {
            "accountId": [
                94
            ],
            "requestId": [
                94
            ],
            "saleId": [
                94
            ],
            "itemId": [
                94
            ],
            "name": [
                217
            ],
            "email": [
                217
            ],
            "phone": [
                217
            ],
            "message": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "RequestConditionReportPayload": {
            "reference": [
                217
            ],
            "submittedAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ReserveStatus": {},
        "Sale": {
            "id": [
                94
            ],
            "cursor": [
                217
            ],
            "accountId": [
                217
            ],
            "title": [
                217
            ],
            "description": [
                217
            ],
            "currency": [
                217
            ],
            "status": [
                193
            ],
            "items": [
                120,
                {
                    "first": [
                        100
                    ],
                    "after": [
                        217
                    ],
                    "filter": [
                        189
                    ],
                    "order": [
                        113
                    ]
                }
            ],
            "incrementTable": [
                17
            ],
            "sequenceNumber": [
                100
            ],
            "saleNumber": [
                100
            ],
            "saleCode": [
                217
            ],
            "dates": [
                186
            ],
            "saleFormat": [
                188
            ],
            "closingMethod": [
                33
            ],
            "images": [
                99
            ],
            "themeType": [
                100
            ],
            "slug": [
                217
            ],
            "slugFullPath": [
                217
            ],
            "type": [
                194
            ],
            "liveStream": [
                126
            ],
            "liveVideoStream": [
                128
            ],
            "liveItem": [
                125
            ],
            "userPaddle": [
                157
            ],
            "userSaleRegistrations": [
                236
            ],
            "isUserSubscribed": [
                28
            ],
            "externalId": [
                217
            ],
            "location": [
                217
            ],
            "metafields": [
                138,
                {
                    "input": [
                        89
                    ]
                }
            ],
            "metafield": [
                136,
                {
                    "input": [
                        88,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "bidRestrictions": [
                23
            ],
            "highlighted": [
                91
            ],
            "feeRules": [
                81
            ],
            "sectionMarkers": [
                204
            ],
            "site": [
                209
            ],
            "viewingTimes": [
                217
            ],
            "buyersNotes": [
                217
            ],
            "feesApplyInfo": [
                217
            ],
            "saleContact": [
                185
            ],
            "__typename": [
                217
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                180
            ],
            "on_Item": [
                103
            ],
            "on_Node": [
                141
            ],
            "on_SaleV2": [
                195
            ],
            "__typename": [
                217
            ]
        },
        "SaleActivityV2": {
            "on_Sale": [
                180
            ],
            "on_Item": [
                103
            ],
            "on_DutchSale": [
                70
            ],
            "on_DutchSaleItem": [
                71
            ],
            "on_Node": [
                141
            ],
            "on_SaleV2": [
                195
            ],
            "__typename": [
                217
            ]
        },
        "SaleChanged": {
            "on_Sale": [
                180
            ],
            "on_ServerTime": [
                205
            ],
            "on_Node": [
                141
            ],
            "on_SaleV2": [
                195
            ],
            "__typename": [
                217
            ]
        },
        "SaleConnection": {
            "edges": [
                198
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "SaleContact": {
            "name": [
                217
            ],
            "email": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SaleDates": {
            "closingDate": [
                217
            ],
            "openDate": [
                217
            ],
            "liveDate": [
                217
            ],
            "effectiveClosingDate": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SaleFilter": {
            "statuses": [
                193
            ],
            "__typename": [
                217
            ]
        },
        "SaleFormat": {},
        "SaleItemFilter": {
            "statuses": [
                119
            ],
            "itemIds": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SaleRegistrationPolicyResult": {
            "code": [
                217
            ],
            "passed": [
                28
            ],
            "description": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SaleRegistrationStatus": {},
        "SaleRegistrationType": {},
        "SaleStatus": {},
        "SaleType": {},
        "SaleV2": {
            "id": [
                94
            ],
            "accountId": [
                217
            ],
            "title": [
                217
            ],
            "description": [
                217
            ],
            "currency": [
                217
            ],
            "status": [
                193
            ],
            "dates": [
                186
            ],
            "saleFormat": [
                188
            ],
            "on_DutchSale": [
                70
            ],
            "on_Sale": [
                180
            ],
            "__typename": [
                217
            ]
        },
        "SaleV2Connection": {
            "edges": [
                197
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "SaleV2Edge": {
            "cursor": [
                217
            ],
            "node": [
                195
            ],
            "__typename": [
                217
            ]
        },
        "SalesEdge": {
            "cursor": [
                217
            ],
            "node": [
                180
            ],
            "__typename": [
                217
            ]
        },
        "SearchPageInfo": {
            "page": [
                100
            ],
            "pageSize": [
                100
            ],
            "totalPages": [
                100
            ],
            "hasNextPage": [
                28
            ],
            "hasPreviousPage": [
                28
            ],
            "totalRecords": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "SearchResultConnection": {
            "edges": [
                201
            ],
            "pageInfo": [
                199
            ],
            "resultCount": [
                100
            ],
            "facets": [
                77
            ],
            "__typename": [
                217
            ]
        },
        "SearchResultEdge": {
            "node": [
                202
            ],
            "__typename": [
                217
            ]
        },
        "SearchResultItem": {
            "on_Item": [
                103
            ],
            "on_Sale": [
                180
            ],
            "on_Node": [
                141
            ],
            "on_SaleV2": [
                195
            ],
            "__typename": [
                217
            ]
        },
        "SearchType": {},
        "SectionMarker": {
            "id": [
                94
            ],
            "title": [
                217
            ],
            "summary": [
                217
            ],
            "fromItemNumber": [
                100
            ],
            "toItemNumber": [
                100
            ],
            "imageAssetId": [
                217
            ],
            "imageUrl": [
                217
            ],
            "isFeaturedSelection": [
                28
            ],
            "__typename": [
                217
            ]
        },
        "ServerTime": {
            "currentTime": [
                100
            ],
            "__typename": [
                217
            ]
        },
        "SetDefaultPaymentMethodInput": {
            "paymentMethodId": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SignConsignmentContractInput": {
            "code": [
                217
            ],
            "fullName": [
                217
            ],
            "consent": [
                28
            ],
            "__typename": [
                217
            ]
        },
        "SignConsignmentContractPayload": {
            "signedAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "Site": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "addressLine1": [
                217
            ],
            "addressLine2": [
                217
            ],
            "addressCity": [
                217
            ],
            "addressPostalCode": [
                217
            ],
            "addressCountryIso": [
                217
            ],
            "addressState": [
                217
            ],
            "openingHours": [
                217
            ],
            "appointmentRequired": [
                28
            ],
            "timezone": [
                217
            ],
            "bookingHours": [
                210
            ],
            "__typename": [
                217
            ]
        },
        "SiteBookingHours": {
            "weekdays": [
                241
            ],
            "opens": [
                217
            ],
            "closes": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SiteLocation": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "StaffProfile": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "photo": [
                99
            ],
            "departments": [
                51
            ],
            "attributes": [
                122
            ],
            "effectiveSchema": [
                122
            ],
            "__typename": [
                217
            ]
        },
        "StaffProfileConnection": {
            "edges": [
                216
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "StaffProfileEdge": {
            "cursor": [
                217
            ],
            "node": [
                214
            ],
            "__typename": [
                217
            ]
        },
        "String": {},
        "StripeIdentityVerificationSession": {
            "clientSecret": [
                217
            ],
            "publishableKey": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "StripePaymentProviderSession": {
            "publishableKey": [
                217
            ],
            "customerSessionClientSecret": [
                217
            ],
            "setupIntentClientSecret": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "SubmitValuationRequestInput": {
            "accountId": [
                94
            ],
            "requestId": [
                94
            ],
            "name": [
                217
            ],
            "email": [
                217
            ],
            "phone": [
                217
            ],
            "items": [
                221
            ],
            "__typename": [
                217
            ]
        },
        "SubmitValuationRequestItemInput": {
            "itemTypeId": [
                94
            ],
            "fields": [
                122
            ],
            "description": [
                217
            ],
            "photoIds": [
                94
            ],
            "__typename": [
                217
            ]
        },
        "SubmitValuationRequestPayload": {
            "reference": [
                217
            ],
            "submittedAt": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "Subscription": {
            "itemChanged": [
                104,
                {
                    "saleId": [
                        94,
                        "ID!"
                    ],
                    "itemIds": [
                        94,
                        "[ID!]!"
                    ]
                }
            ],
            "saleChanged": [
                183,
                {
                    "saleId": [
                        94,
                        "ID!"
                    ]
                }
            ],
            "salesChanged": [
                183,
                {
                    "saleIds": [
                        94,
                        "[ID!]!"
                    ]
                }
            ],
            "saleActivity": [
                181,
                {
                    "saleId": [
                        94,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        108
                    ]
                }
            ],
            "saleActivityV2": [
                182,
                {
                    "saleId": [
                        94,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        108
                    ]
                }
            ],
            "serverTimeChanged": [
                205
            ],
            "__typename": [
                217
            ]
        },
        "Tag": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "UpdatePhoneInput": {
            "id": [
                217
            ],
            "phoneNumber": [
                217
            ],
            "phoneType": [
                172
            ],
            "isPrimary": [
                28
            ],
            "label": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "UpdateUserInput": {
            "billingAddress": [
                130
            ],
            "shippingAddress": [
                130
            ],
            "phone": [
                217
            ],
            "firstName": [
                217
            ],
            "lastName": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "UserAccountSubscription": {
            "accountId": [
                217
            ],
            "userId": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "UserBid": {
            "id": [
                94
            ],
            "userId": [
                217
            ],
            "saleId": [
                217
            ],
            "itemId": [
                217
            ],
            "amount": [
                100
            ],
            "maxAmount": [
                100
            ],
            "bidDate": [
                217
            ],
            "reactiveBid": [
                28
            ],
            "registration": [
                236
            ],
            "__typename": [
                217
            ]
        },
        "UserBidsConnection": {
            "edges": [
                230
            ],
            "pageInfo": [
                160
            ],
            "__typename": [
                217
            ]
        },
        "UserBidsEdge": {
            "cursor": [
                217
            ],
            "node": [
                228
            ],
            "__typename": [
                217
            ]
        },
        "UserItemRegistration": {
            "id": [
                94
            ],
            "saleRegistration": [
                236
            ],
            "preferredPhoneNumber": [
                170
            ],
            "alternativePhoneNumbers": [
                170
            ],
            "__typename": [
                217
            ]
        },
        "UserNotificationPreference": {
            "notification": [
                143
            ],
            "channel": [
                142
            ],
            "optedIn": [
                28
            ],
            "__typename": [
                217
            ]
        },
        "UserNotificationPreferenceInput": {
            "notification": [
                143
            ],
            "channel": [
                142
            ],
            "optedIn": [
                28
            ],
            "__typename": [
                217
            ]
        },
        "UserNotificationSettings": {
            "preferences": [
                232
            ],
            "__typename": [
                217
            ]
        },
        "UserSaleItemSubscription": {
            "accountId": [
                217
            ],
            "saleId": [
                217
            ],
            "itemId": [
                217
            ],
            "userId": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "UserSaleRegistration": {
            "id": [
                94
            ],
            "saleId": [
                217
            ],
            "userId": [
                217
            ],
            "registrationType": [
                192
            ],
            "status": [
                191
            ],
            "policyResults": [
                190
            ],
            "preferredPhoneNumber": [
                170
            ],
            "alternativePhoneNumbers": [
                170
            ],
            "identifier": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "UserSaleSubscription": {
            "accountId": [
                217
            ],
            "saleId": [
                217
            ],
            "userId": [
                217
            ],
            "__typename": [
                217
            ]
        },
        "ValuationForm": {
            "accountId": [
                94
            ],
            "houseName": [
                217
            ],
            "houseLogoUrl": [
                217
            ],
            "requiredPhotoCount": [
                100
            ],
            "maxPhotoCount": [
                100
            ],
            "maxItemCount": [
                100
            ],
            "itemTypes": [
                239
            ],
            "__typename": [
                217
            ]
        },
        "ValuationItemType": {
            "id": [
                94
            ],
            "name": [
                217
            ],
            "schema": [
                122
            ],
            "__typename": [
                217
            ]
        },
        "ValuationPhotoUploadUrl": {
            "photoId": [
                94
            ],
            "uploadUrl": [
                217
            ],
            "headers": [
                93
            ],
            "__typename": [
                217
            ]
        },
        "Weekday": {},
        "WeightUnit": {}
    }
}