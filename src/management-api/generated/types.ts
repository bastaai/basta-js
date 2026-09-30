export default {
    "scalars": [
        3,
        9,
        12,
        27,
        33,
        39,
        44,
        57,
        60,
        64,
        67,
        73,
        74,
        80,
        93,
        94,
        95,
        98,
        100,
        102,
        103,
        104,
        106,
        109,
        112,
        119,
        120,
        121,
        123,
        165,
        166,
        169,
        194,
        202,
        205,
        217,
        219,
        220,
        222,
        234,
        237,
        239,
        243,
        268,
        274,
        279,
        286,
        291,
        295,
        301,
        303,
        305,
        307,
        310,
        311,
        314,
        316,
        319,
        325,
        327,
        329,
        330,
        342,
        343,
        348,
        350,
        356,
        362,
        363,
        366,
        368,
        395,
        396,
        397,
        410,
        414,
        419,
        444,
        445,
        446,
        470,
        471,
        490,
        494,
        498,
        535,
        536,
        540,
        551,
        553,
        603,
        618,
        625,
        626,
        630,
        631
    ],
    "types": {
        "AcceptSaleRegistrationInput": {
            "registrationId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Account": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "email": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "handle": [
                540
            ],
            "description": [
                540
            ],
            "imageUrl": [
                540
            ],
            "links": [
                287
            ],
            "paymentDetails": [
                357
            ],
            "bastaBidClient": [
                80
            ],
            "terms": [
                499
            ],
            "itemSchema": [
                286
            ],
            "bastaLiveStreamEnabled": [
                80
            ],
            "shopifyConfiguration": [
                530
            ],
            "aggregators": [
                32
            ],
            "metafields": [
                304,
                {
                    "input": [
                        227,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                304,
                {
                    "input": [
                        226,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "homeCountryCode": [
                123
            ],
            "auctionSymbols": [
                55
            ],
            "preferredAuctionFormat": [
                471
            ],
            "defaultCurrency": [
                166
            ],
            "organisationDetails": [
                344
            ],
            "defaultStartBidPercentage": [
                222
            ],
            "arrSettings": [
                48
            ],
            "charges": [
                96,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "options": [
                        99
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "AccountFee": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "type": [
                3
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "__typename": [
                540
            ]
        },
        "AccountFeeType": {},
        "AccountImageAssociation": {
            "accountId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ActionHookFilter": {
            "types": [
                12
            ],
            "statuses": [
                9
            ],
            "__typename": [
                540
            ]
        },
        "ActionHookLog": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "idempotencyKey": [
                540
            ],
            "action": [
                12
            ],
            "url": [
                540
            ],
            "headers": [
                232
            ],
            "requestPayload": [
                540
            ],
            "response": [
                540
            ],
            "status": [
                9
            ],
            "error": [
                540
            ],
            "retries": [
                243
            ],
            "createdAt": [
                540
            ],
            "executedAt": [
                540
            ],
            "nextRetryDate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ActionHookLogConnection": {
            "edges": [
                8
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ActionHookLogEdge": {
            "cursor": [
                540
            ],
            "node": [
                6
            ],
            "__typename": [
                540
            ]
        },
        "ActionHookStatus": {},
        "ActionHookSubscription": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "action": [
                12
            ],
            "url": [
                540
            ],
            "headers": [
                232
            ],
            "__typename": [
                540
            ]
        },
        "ActionHookSubscriptionInput": {
            "action": [
                12
            ],
            "url": [
                540
            ],
            "headers": [
                233
            ],
            "__typename": [
                540
            ]
        },
        "ActionType": {},
        "Activity": {
            "id": [
                234
            ],
            "entityType": [
                540
            ],
            "entityId": [
                540
            ],
            "activityType": [
                540
            ],
            "principalType": [
                540
            ],
            "principalId": [
                540
            ],
            "occurredAt": [
                540
            ],
            "changes": [
                221
            ],
            "principal": [
                367
            ],
            "__typename": [
                540
            ]
        },
        "AddConsignmentStaffInput": {
            "consignmentId": [
                540
            ],
            "consignmentStaffUserIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AddConsignorsInput": {
            "consignmentId": [
                540
            ],
            "consignorUserIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AddDashboardUserRoleInput": {
            "userId": [
                540
            ],
            "role": [
                169
            ],
            "__typename": [
                540
            ]
        },
        "AddFairWarningNotificationToItemInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AddItemToSaleInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "bidIncrementTable": [
                62
            ],
            "startingBid": [
                243
            ],
            "reserve": [
                243
            ],
            "lowEstimate": [
                243
            ],
            "highEstimate": [
                243
            ],
            "ItemNumber": [
                243
            ],
            "allowedBidTypes": [
                74
            ],
            "openDate": [
                540
            ],
            "closingDate": [
                540
            ],
            "slug": [
                540
            ],
            "hidden": [
                80
            ],
            "closingTimeCountdown": [
                243
            ],
            "externalId": [
                540
            ],
            "displayNumber": [
                540
            ],
            "highlight": [
                252
            ],
            "metafields": [
                306
            ],
            "reserveType": [
                397
            ],
            "__typename": [
                540
            ]
        },
        "AddLiveStreamToSaleInput": {
            "saleId": [
                540
            ],
            "url": [
                540
            ],
            "type": [
                295
            ],
            "__typename": [
                540
            ]
        },
        "AddMessageNotificationToItemInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "message": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AddPackagingInput": {
            "itemId": [
                540
            ],
            "packaging": [
                271
            ],
            "__typename": [
                540
            ]
        },
        "AddPaddleToSaleInput": {
            "saleId": [
                540
            ],
            "paddleIdentifier": [
                540
            ],
            "userId": [
                540
            ],
            "type": [
                348
            ],
            "__typename": [
                540
            ]
        },
        "AddSpecificationsInput": {
            "itemId": [
                540
            ],
            "specifications": [
                278
            ],
            "__typename": [
                540
            ]
        },
        "AddTagToItemInput": {
            "itemId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AddTagToSaleItemInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AddTagToUserInput": {
            "userId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AddressType": {},
        "Affiliate": {
            "id": [
                234
            ],
            "accountId": [
                234
            ],
            "firstName": [
                540
            ],
            "lastName": [
                540
            ],
            "email": [
                540
            ],
            "token": [
                540
            ],
            "createdBy": [
                540
            ],
            "updatedBy": [
                540
            ],
            "createdAt": [
                540
            ],
            "updatedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AffiliateConnection": {
            "edges": [
                30
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "AffiliateEdge": {
            "cursor": [
                540
            ],
            "node": [
                28
            ],
            "__typename": [
                540
            ]
        },
        "AffiliatesInput": {
            "first": [
                243
            ],
            "after": [
                540
            ],
            "direction": [
                350
            ],
            "__typename": [
                540
            ]
        },
        "Aggregator": {
            "name": [
                540
            ],
            "identifier": [
                540
            ],
            "type": [
                67
            ],
            "__typename": [
                540
            ]
        },
        "AmlRiskClass": {},
        "ApiKey": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "accountId": [
                540
            ],
            "created": [
                540
            ],
            "roles": [
                39
            ],
            "__typename": [
                540
            ]
        },
        "ApiKeyConnection": {
            "edges": [
                37
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ApiKeyCreated": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "generatedApiKey": [
                540
            ],
            "roles": [
                39
            ],
            "__typename": [
                540
            ]
        },
        "ApiKeyEdge": {
            "cursor": [
                540
            ],
            "node": [
                34
            ],
            "__typename": [
                540
            ]
        },
        "ApiKeyInput": {
            "name": [
                540
            ],
            "role": [
                39
            ],
            "__typename": [
                540
            ]
        },
        "ApiKeyRole": {},
        "ApiToken": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "accountId": [
                540
            ],
            "created": [
                540
            ],
            "roles": [
                44
            ],
            "__typename": [
                540
            ]
        },
        "ApiTokenConnection": {
            "edges": [
                45
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ApiTokenCreated": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "generatedApiKey": [
                540
            ],
            "roles": [
                44
            ],
            "__typename": [
                540
            ]
        },
        "ApiTokenInput": {
            "name": [
                540
            ],
            "role": [
                44
            ],
            "__typename": [
                540
            ]
        },
        "ApiTokenRole": {},
        "ApiTokensEdge": {
            "cursor": [
                540
            ],
            "node": [
                40
            ],
            "__typename": [
                540
            ]
        },
        "ArrBand": {
            "id": [
                234
            ],
            "lowerLimit": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "rateBps": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ArrBandInput": {
            "lowerLimit": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "rateBps": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ArrSettings": {
            "currency": [
                166
            ],
            "enabled": [
                80
            ],
            "thresholdAmount": [
                243
            ],
            "capAmount": [
                243
            ],
            "bands": [
                46
            ],
            "__typename": [
                540
            ]
        },
        "Asset": {
            "id": [
                540
            ],
            "url": [
                540
            ],
            "externalId": [
                540
            ],
            "on_Document": [
                196
            ],
            "on_Image": [
                235
            ],
            "on_Video": [
                624
            ],
            "__typename": [
                540
            ]
        },
        "AssetUploadUrl": {
            "assetId": [
                540
            ],
            "uploadUrl": [
                540
            ],
            "assetUrl": [
                540
            ],
            "headers": [
                232
            ],
            "__typename": [
                540
            ]
        },
        "AssociateUserToAccountInput": {
            "userId": [
                540
            ],
            "email": [
                540
            ],
            "role": [
                169
            ],
            "__typename": [
                540
            ]
        },
        "AttachSaleRegistrationPoliciesInput": {
            "saleId": [
                540
            ],
            "policyIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AttributionChannel": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "name": [
                540
            ],
            "archivedAt": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AttributionSource": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "name": [
                540
            ],
            "archivedAt": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AuctionSymbol": {
            "type": [
                57
            ],
            "glyph": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AuctionSymbolInput": {
            "type": [
                57
            ],
            "glyph": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "AuctionSymbolType": {},
        "BastaLiveStream": {
            "optionAvailable": [
                80
            ],
            "publicUrl": [
                540
            ],
            "ingestUrl": [
                540
            ],
            "channelId": [
                540
            ],
            "streamKey": [
                540
            ],
            "isLive": [
                80
            ],
            "currentViewers": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "Bid": {
            "bidId": [
                540
            ],
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "sale": [
                403
            ],
            "saleItem": [
                416
            ],
            "amount": [
                243
            ],
            "maxAmount": [
                243
            ],
            "userId": [
                540
            ],
            "user": [
                606
            ],
            "date": [
                540
            ],
            "bidStatus": [
                73
            ],
            "bidSequenceNumber": [
                243
            ],
            "bidderIdentifier": [
                540
            ],
            "paddle": [
                346
            ],
            "bidOrigin": [
                65
            ],
            "userProfile": [
                606
            ],
            "registrationId": [
                540
            ],
            "registration": [
                438
            ],
            "__typename": [
                540
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rules": [
                376
            ],
            "__typename": [
                540
            ]
        },
        "BidIncrementTableInput": {
            "rules": [
                377
            ],
            "__typename": [
                540
            ]
        },
        "BidOnBehalfInput": {
            "userId": [
                540
            ],
            "amount": [
                243
            ],
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "type": [
                74
            ],
            "bidOrigin": [
                66
            ],
            "registrationId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "BidOrderByField": {},
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                336
            ],
            "on_PaddleBidOrigin": [
                347
            ],
            "on_PhoneBidOrigin": [
                365
            ],
            "on_Aggregator": [
                32
            ],
            "__typename": [
                540
            ]
        },
        "BidOriginInput": {
            "type": [
                67
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                70
            ],
            "on_BidPlacedError": [
                69
            ],
            "__typename": [
                540
            ]
        },
        "BidPlacedError": {
            "error": [
                540
            ],
            "errorCode": [
                60
            ],
            "__typename": [
                540
            ]
        },
        "BidPlacedSuccess": {
            "bidId": [
                540
            ],
            "amount": [
                243
            ],
            "maxAmount": [
                243
            ],
            "date": [
                540
            ],
            "bidStatus": [
                73
            ],
            "bidType": [
                74
            ],
            "__typename": [
                540
            ]
        },
        "BidRestrictions": {
            "acceptedRegistrationRequired": [
                80
            ],
            "phoneRegistrationOpen": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "BidRestrictionsInput": {
            "acceptedRegistrationRequired": [
                80
            ],
            "phoneRegistrationOpen": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderToken": {
            "token": [
                540
            ],
            "expiration": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "BidderTokenInput": {
            "metadata": [
                552
            ],
            "__typename": [
                540
            ]
        },
        "BidsConnection": {
            "edges": [
                78
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "BidsEdge": {
            "cursor": [
                540
            ],
            "node": [
                59
            ],
            "__typename": [
                540
            ]
        },
        "BlockUserInput": {
            "userId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Boolean": {},
        "BuyItemInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "buyerUserId": [
                540
            ],
            "expectedPrice": [
                243
            ],
            "currency": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CancelLatestBidOnItemInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "sequenceNumber": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "CancelPaymentOrderInput": {
            "orderId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "CanceledLatestBidOnItem": {
            "removedBids": [
                59
            ],
            "__typename": [
                540
            ]
        },
        "Card": {
            "id": [
                540
            ],
            "brand": [
                540
            ],
            "last4": [
                540
            ],
            "expMonth": [
                243
            ],
            "expYear": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "Category": {
            "id": [
                234
            ],
            "accountId": [
                234
            ],
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "parentId": [
                234
            ],
            "parent": [
                86
            ],
            "children": [
                87,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "createdAt": [
                540
            ],
            "updatedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CategoryConnection": {
            "edges": [
                88
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "CategoryEdge": {
            "node": [
                86
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CategoryList": {
            "categories": [
                86
            ],
            "__typename": [
                540
            ]
        },
        "Charge": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "currency": [
                166
            ],
            "basedOn": [
                94
            ],
            "frequency": [
                98
            ],
            "outcome": [
                100
            ],
            "calculationType": [
                95
            ],
            "status": [
                103
            ],
            "minimum": [
                243
            ],
            "maximum": [
                243
            ],
            "bands": [
                91
            ],
            "appliesAt": [
                102
            ],
            "__typename": [
                540
            ]
        },
        "ChargeBand": {
            "id": [
                234
            ],
            "lowerLimit": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "type": [
                93
            ],
            "value": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ChargeBandInput": {
            "lowerLimit": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "type": [
                93
            ],
            "value": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ChargeBandType": {},
        "ChargeBasedOn": {},
        "ChargeCalculationType": {},
        "ChargeConnection": {
            "edges": [
                97
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ChargeEdge": {
            "node": [
                90
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ChargeFrequency": {},
        "ChargeOptions": {
            "currency": [
                166
            ],
            "__typename": [
                540
            ]
        },
        "ChargeOutcome": {},
        "ChargeScopeInput": {
            "type": [
                102
            ],
            "id": [
                234
            ],
            "saleId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "ChargeScopeType": {},
        "ChargeStatus": {},
        "ClientPermission": {},
        "CloseSaleInput": {
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ClosingMethod": {},
        "ConnectShopifyToAccountInput": {
            "shopId": [
                540
            ],
            "token": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Consignment": {
            "id": [
                234
            ],
            "cursor": [
                540
            ],
            "accountId": [
                540
            ],
            "shortId": [
                540
            ],
            "consignorUserId": [
                540
            ],
            "consignor": [
                595
            ],
            "consignors": [
                116
            ],
            "staff": [
                113
            ],
            "name": [
                540
            ],
            "description": [
                540
            ],
            "externalId": [
                540
            ],
            "feeRules": [
                110
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "createdByUserId": [
                540
            ],
            "modifiedByUserId": [
                540
            ],
            "charges": [
                96,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "options": [
                        99
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "ConsignmentFeeCalculationType": {},
        "ConsignmentFeeRule": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "type": [
                112
            ],
            "value": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "calculationType": [
                109
            ],
            "__typename": [
                540
            ]
        },
        "ConsignmentFeeRuleInput": {
            "name": [
                540
            ],
            "type": [
                112
            ],
            "value": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "calculationType": [
                109
            ],
            "__typename": [
                540
            ]
        },
        "ConsignmentFeeType": {},
        "ConsignmentStaff": {
            "userId": [
                540
            ],
            "isLead": [
                80
            ],
            "accountId": [
                540
            ],
            "name": [
                540
            ],
            "email": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ConsignmentsConnection": {
            "edges": [
                115
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ConsignmentsEdge": {
            "cursor": [
                540
            ],
            "node": [
                108
            ],
            "__typename": [
                540
            ]
        },
        "Consignor": {
            "userId": [
                540
            ],
            "isMain": [
                80
            ],
            "accountId": [
                540
            ],
            "user": [
                595
            ],
            "__typename": [
                540
            ]
        },
        "ContentDiff": {
            "targetKind": [
                120
            ],
            "saleId": [
                234
            ],
            "saleItemId": [
                234
            ],
            "variantId": [
                234
            ],
            "itemSchemaId": [
                234
            ],
            "targetSchemaId": [
                234
            ],
            "schemaIdMatches": [
                80
            ],
            "inSync": [
                80
            ],
            "entries": [
                118
            ],
            "removableKeys": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ContentDiffEntry": {
            "key": [
                540
            ],
            "status": [
                119
            ],
            "itemValue": [
                286
            ],
            "targetValue": [
                286
            ],
            "__typename": [
                540
            ]
        },
        "ContentDiffStatus": {},
        "ContentDiffTargetKind": {},
        "ContentSyncDirection": {},
        "ContinueOnboardPaymentAccountInput": {
            "returnUrl": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Country": {},
        "CountryInfo": {
            "code": [
                123
            ],
            "name": [
                540
            ],
            "enabled": [
                80
            ],
            "amlRiskClass": [
                33
            ],
            "isHomeCountry": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "CountryInfoConnection": {
            "edges": [
                126
            ],
            "__typename": [
                540
            ]
        },
        "CountryInfoEdge": {
            "node": [
                124
            ],
            "__typename": [
                540
            ]
        },
        "CreateAccountFeeInput": {
            "name": [
                540
            ],
            "type": [
                3
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "__typename": [
                540
            ]
        },
        "CreateAccountInput": {
            "name": [
                540
            ],
            "email": [
                540
            ],
            "handle": [
                540
            ],
            "description": [
                540
            ],
            "links": [
                290
            ],
            "__typename": [
                540
            ]
        },
        "CreateAffiliateInput": {
            "firstName": [
                540
            ],
            "lastName": [
                540
            ],
            "email": [
                540
            ],
            "token": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateAssetUploadUrlInput": {
            "contentType": [
                540
            ],
            "filename": [
                540
            ],
            "externalId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateAttributionChannelInput": {
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateAttributionSourceInput": {
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateCategoryInput": {
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "parentId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "CreateChargeInput": {
            "name": [
                540
            ],
            "currency": [
                166
            ],
            "basedOn": [
                94
            ],
            "frequency": [
                98
            ],
            "outcome": [
                100
            ],
            "calculationType": [
                95
            ],
            "minimum": [
                243
            ],
            "maximum": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "CreateConsignmentInput": {
            "consignorUserId": [
                540
            ],
            "idType": [
                603
            ],
            "name": [
                540
            ],
            "description": [
                540
            ],
            "externalId": [
                540
            ],
            "feeRules": [
                111
            ],
            "consignorUserIds": [
                540
            ],
            "consignmentStaffUserIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateCreatorInput": {
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "parentId": [
                234
            ],
            "type": [
                165
            ],
            "arr": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "CreateDutchItemForSaleInput": {
            "saleId": [
                540
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "availableUnits": [
                243
            ],
            "openTime": [
                540
            ],
            "closingTime": [
                540
            ],
            "schedule": [
                211
            ],
            "config": [
                201
            ],
            "__typename": [
                540
            ]
        },
        "CreateDutchSaleInput": {
            "dates": [
                408
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateInvoiceInput": {
            "orderId": [
                234
            ],
            "externalID": [
                540
            ],
            "url": [
                540
            ],
            "dueDate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateItemImage": {
            "itemId": [
                540
            ],
            "url": [
                540
            ],
            "order": [
                243
            ],
            "imageId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateItemInput": {
            "title": [
                540
            ],
            "description": [
                540
            ],
            "price": [
                273
            ],
            "externalId": [
                540
            ],
            "consignmentId": [
                540
            ],
            "siteId": [
                540
            ],
            "locationId": [
                540
            ],
            "metadata": [
                260
            ],
            "tags": [
                540
            ],
            "specifications": [
                278
            ],
            "valuationAmount": [
                243
            ],
            "valuationCurrency": [
                540
            ],
            "lowEstimate": [
                243
            ],
            "highEstimate": [
                243
            ],
            "location": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateItemNoteInput": {
            "itemId": [
                540
            ],
            "note": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateItemTypeInput": {
            "name": [
                540
            ],
            "schema": [
                286
            ],
            "parentId": [
                540
            ],
            "namespace": [
                540
            ],
            "titleTemplate": [
                540
            ],
            "subTitleTemplate": [
                540
            ],
            "descriptionTemplate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateLocationInput": {
            "siteId": [
                540
            ],
            "parentLocationId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateOrderInput": {
            "saleId": [
                540
            ],
            "userId": [
                540
            ],
            "title": [
                540
            ],
            "currency": [
                166
            ],
            "billingAddress": [
                300
            ],
            "shippingAddress": [
                300
            ],
            "orderLines": [
                146
            ],
            "__typename": [
                540
            ]
        },
        "CreateOrderLineForOrderInput": {
            "itemId": [
                540
            ],
            "amount": [
                243
            ],
            "description": [
                540
            ],
            "fees": [
                150
            ],
            "__typename": [
                540
            ]
        },
        "CreateOrderLineInput": {
            "orderId": [
                234
            ],
            "itemId": [
                540
            ],
            "amount": [
                243
            ],
            "description": [
                540
            ],
            "fees": [
                150
            ],
            "__typename": [
                540
            ]
        },
        "CreatePaymentInput": {
            "orderId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "CreatePaymentOrderInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "userId": [
                540
            ],
            "orderLines": [
                151
            ],
            "currency": [
                166
            ],
            "billingAddress": [
                300
            ],
            "shippingAddress": [
                300
            ],
            "__typename": [
                540
            ]
        },
        "CreatePaymentOrderLineFeeInput": {
            "description": [
                540
            ],
            "amount": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "CreatePaymentOrderLineInput": {
            "itemId": [
                540
            ],
            "amount": [
                243
            ],
            "description": [
                540
            ],
            "orderLineType": [
                342
            ],
            "fees": [
                150
            ],
            "__typename": [
                540
            ]
        },
        "CreateSaleFeeInput": {
            "saleId": [
                234
            ],
            "name": [
                540
            ],
            "type": [
                220
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "__typename": [
                540
            ]
        },
        "CreateSaleInput": {
            "dates": [
                408
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "currency": [
                540
            ],
            "bidIncrementTable": [
                62
            ],
            "closingMethod": [
                106
            ],
            "closingTimeCountdown": [
                243
            ],
            "saleItemClosingSchedule": [
                418
            ],
            "reserveAutoBidMethod": [
                395
            ],
            "themeType": [
                243
            ],
            "hidden": [
                80
            ],
            "type": [
                471
            ],
            "isTestSale": [
                80
            ],
            "printedCatalogue": [
                80
            ],
            "bidRestrictions": [
                72
            ],
            "externalId": [
                540
            ],
            "location": [
                540
            ],
            "slug": [
                540
            ],
            "metafields": [
                306
            ],
            "saleGenreId": [
                234
            ],
            "siteId": [
                234
            ],
            "viewingTimes": [
                540
            ],
            "buyersNotes": [
                540
            ],
            "feesApplyInfo": [
                540
            ],
            "saleContactUserId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "CreateSaleItemFeeInput": {
            "saleId": [
                234
            ],
            "itemId": [
                234
            ],
            "name": [
                540
            ],
            "type": [
                220
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "__typename": [
                540
            ]
        },
        "CreateSaleItemRegistrationInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "userId": [
                540
            ],
            "type": [
                446
            ],
            "identifier": [
                540
            ],
            "status": [
                445
            ],
            "preferredPhoneNumberId": [
                234
            ],
            "alternativePhoneNumberIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "CreateSaleRegistrationInput": {
            "saleId": [
                540
            ],
            "userId": [
                540
            ],
            "type": [
                446
            ],
            "identifier": [
                540
            ],
            "status": [
                445
            ],
            "preferredPhoneNumberId": [
                234
            ],
            "alternativePhoneNumberIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "CreateSaleRegistrationPolicyInput": {
            "code": [
                540
            ],
            "description": [
                540
            ],
            "rule": [
                540
            ],
            "isDefault": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "CreateSendGridNotificationIntegrationInput": {
            "apiKey": [
                540
            ],
            "fromEmail": [
                540
            ],
            "fromName": [
                540
            ],
            "replyToEmail": [
                540
            ],
            "accountNotificationEmail": [
                540
            ],
            "timezone": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateSiteInput": {
            "name": [
                540
            ],
            "addressLine1": [
                540
            ],
            "addressLine2": [
                540
            ],
            "addressCity": [
                540
            ],
            "addressPostalCode": [
                540
            ],
            "addressCountryIso": [
                540
            ],
            "addressState": [
                540
            ],
            "phone": [
                540
            ],
            "email": [
                540
            ],
            "openingHours": [
                540
            ],
            "collectionInstructions": [
                540
            ],
            "appointmentRequired": [
                80
            ],
            "timezone": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateTwilioNotificationIntegrationInput": {
            "accountSid": [
                540
            ],
            "authToken": [
                540
            ],
            "messagingServiceSid": [
                540
            ],
            "timezone": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreateUploadUrlInput": {
            "imageTypes": [
                239
            ],
            "contentType": [
                540
            ],
            "order": [
                243
            ],
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "externalId": [
                540
            ],
            "marketplaceEntityId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Creator": {
            "id": [
                234
            ],
            "accountId": [
                234
            ],
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "parentId": [
                234
            ],
            "parent": [
                162
            ],
            "children": [
                162
            ],
            "type": [
                165
            ],
            "arr": [
                80
            ],
            "createdAt": [
                540
            ],
            "updatedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreatorConnection": {
            "creators": [
                162
            ],
            "hasNextPage": [
                80
            ],
            "endCursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "CreatorList": {
            "creators": [
                162
            ],
            "__typename": [
                540
            ]
        },
        "CreatorType": {},
        "Currency": {},
        "CurrentUser": {
            "userId": [
                540
            ],
            "roles": [
                169
            ],
            "permissions": [
                363
            ],
            "__typename": [
                540
            ]
        },
        "DashboardMember": {
            "userId": [
                540
            ],
            "name": [
                540
            ],
            "email": [
                540
            ],
            "roles": [
                170
            ],
            "__typename": [
                540
            ]
        },
        "DashboardUserRole": {},
        "DashboardUserRoleAssignment": {
            "role": [
                169
            ],
            "assignedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteAccountFeeInput": {
            "id": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteActionHookSubscriptionInput": {
            "id": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "DeleteChargeAtScopeInput": {
            "chargeId": [
                234
            ],
            "scope": [
                101
            ],
            "__typename": [
                540
            ]
        },
        "DeleteImageInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "imageId": [
                540
            ],
            "imageTypes": [
                239
            ],
            "__typename": [
                540
            ]
        },
        "DeleteItemImageInput": {
            "itemId": [
                540
            ],
            "imageId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteItemInput": {
            "itemId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteLiveStreamFromSaleInput": {
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteMetafieldInput": {
            "entityType": [
                305
            ],
            "entityId": [
                540
            ],
            "key": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteOrderLineInput": {
            "orderId": [
                234
            ],
            "orderLineId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "DeletePaymentOrderInput": {
            "orderId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "DeleteSaleFeeInput": {
            "id": [
                234
            ],
            "saleId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "DeleteSaleInput": {
            "saleId": [
                540
            ],
            "confirmationSaleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteSaleItemFeeInput": {
            "id": [
                234
            ],
            "saleId": [
                234
            ],
            "itemId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "DeleteSaleItemRegistrationInput": {
            "itemRegistrationId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteSalePayload": {
            "saleId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "DeleteSaleRegistrationInput": {
            "registrationId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteUserAddressInput": {
            "userId": [
                540
            ],
            "idType": [
                603
            ],
            "addressId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DeleteUserPhoneInput": {
            "userId": [
                540
            ],
            "idType": [
                603
            ],
            "phoneId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Department": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DepartmentConnection": {
            "edges": [
                191
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "DepartmentEdge": {
            "node": [
                189
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DetachSaleRegistrationPoliciesInput": {
            "saleId": [
                540
            ],
            "policyIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DirectSell": {
            "accountId": [
                540
            ],
            "buyerId": [
                540
            ],
            "buyer": [
                606
            ],
            "amount": [
                243
            ],
            "currency": [
                540
            ],
            "source": [
                194
            ],
            "referenceId": [
                540
            ],
            "timestamp": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DirectSellSource": {},
        "DisassociateUserFromAccountInput": {
            "userId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Document": {
            "id": [
                540
            ],
            "accountId": [
                540
            ],
            "url": [
                540
            ],
            "contentType": [
                540
            ],
            "size": [
                243
            ],
            "filename": [
                540
            ],
            "externalId": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DutchBid": {
            "id": [
                234
            ],
            "userId": [
                540
            ],
            "amount": [
                243
            ],
            "quantityRequested": [
                243
            ],
            "quantityAllocated": [
                243
            ],
            "placedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "DutchBidConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "DutchBidEdge": {
            "cursor": [
                540
            ],
            "node": [
                197
            ],
            "__typename": [
                540
            ]
        },
        "DutchItemConfig": {
            "pricingMode": [
                205
            ],
            "maxBidsPerBidder": [
                243
            ],
            "maxUnitsPerBidder": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "DutchItemConfigInput": {
            "pricingMode": [
                205
            ],
            "maxBidsPerBidder": [
                243
            ],
            "maxUnitsPerBidder": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "DutchItemStatus": {},
        "DutchPriceDrop": {
            "at": [
                540
            ],
            "price": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "DutchPriceDropInput": {
            "at": [
                540
            ],
            "price": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "DutchPricingMode": {},
        "DutchSale": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "currency": [
                540
            ],
            "status": [
                470
            ],
            "dates": [
                407
            ],
            "saleFormat": [
                410
            ],
            "images": [
                235
            ],
            "items": [
                208,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "DutchSaleItem": {
            "id": [
                234
            ],
            "saleId": [
                540
            ],
            "status": [
                202
            ],
            "availableUnits": [
                243
            ],
            "openTime": [
                540
            ],
            "endTime": [
                540
            ],
            "schedule": [
                210
            ],
            "config": [
                200
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "images": [
                235
            ],
            "bids": [
                198,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "DutchSaleItemConnection": {
            "edges": [
                209
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "DutchSaleItemEdge": {
            "cursor": [
                540
            ],
            "node": [
                207
            ],
            "__typename": [
                540
            ]
        },
        "DutchSchedule": {
            "startingAmount": [
                243
            ],
            "drops": [
                203
            ],
            "__typename": [
                540
            ]
        },
        "DutchScheduleInput": {
            "startingAmount": [
                243
            ],
            "drops": [
                204
            ],
            "__typename": [
                540
            ]
        },
        "Estimate": {
            "low": [
                243
            ],
            "high": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ExternalLiveStream": {
            "url": [
                540
            ],
            "type": [
                295
            ],
            "created": [
                540
            ],
            "updated": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "FacetCount": {
            "fieldName": [
                540
            ],
            "counts": [
                216
            ],
            "stats": [
                215
            ],
            "__typename": [
                540
            ]
        },
        "FacetStats": {
            "avg": [
                222
            ],
            "max": [
                222
            ],
            "min": [
                222
            ],
            "sum": [
                222
            ],
            "totalValues": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "FacetValue": {
            "value": [
                540
            ],
            "count": [
                243
            ],
            "highlighted": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "FeeCalculationType": {},
        "FeeRule": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "type": [
                220
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "source": [
                219
            ],
            "__typename": [
                540
            ]
        },
        "FeeRuleSource": {},
        "FeeRuleType": {},
        "FieldChange": {
            "field": [
                540
            ],
            "oldValue": [
                286
            ],
            "newValue": [
                286
            ],
            "__typename": [
                540
            ]
        },
        "Float": {},
        "GeoLocation": {
            "countryIsoCode": [
                540
            ],
            "countryName": [
                540
            ],
            "cityName": [
                540
            ],
            "latitude": [
                222
            ],
            "longitude": [
                222
            ],
            "timezone": [
                540
            ],
            "found": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "GetItemInput": {
            "itemId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "GetItemsInput": {
            "userId": [
                540
            ],
            "first": [
                243
            ],
            "after": [
                540
            ],
            "direction": [
                350
            ],
            "itemsFilter": [
                285
            ],
            "__typename": [
                540
            ]
        },
        "GetMetafieldInput": {
            "key": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "GetMetafieldsInput": {
            "keys": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "HideItemsFromSaleInput": {
            "saleId": [
                540
            ],
            "includingAndFromItemNumber": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "HighestBidInfo": {
            "bidId": [
                540
            ],
            "itemId": [
                540
            ],
            "currentAmount": [
                243
            ],
            "maxAmount": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "HighlightedSaleItemConnection": {
            "edges": [
                231
            ],
            "__typename": [
                540
            ]
        },
        "HighlightedSaleItemEdge": {
            "node": [
                416
            ],
            "position": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "HttpHeader": {
            "key": [
                540
            ],
            "value": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "HttpHeaderInput": {
            "key": [
                540
            ],
            "value": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ID": {},
        "Image": {
            "id": [
                540
            ],
            "url": [
                540
            ],
            "order": [
                243
            ],
            "externalId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ImageAssociation": {
            "on_SaleItemImageAssociation": [
                421
            ],
            "on_ItemImageAssociation": [
                254
            ],
            "on_SaleImageAssociation": [
                415
            ],
            "on_AccountImageAssociation": [
                4
            ],
            "__typename": [
                540
            ]
        },
        "ImageIdType": {},
        "ImageOrderInput": {
            "imageId": [
                540
            ],
            "order": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ImageType": {},
        "ImageWithAssociations": {
            "image": [
                235
            ],
            "associations": [
                236
            ],
            "__typename": [
                540
            ]
        },
        "InstantNotificationConfiguration": {
            "channel": [
                314
            ],
            "status": [
                316
            ],
            "templates": [
                323
            ],
            "sender": [
                317
            ],
            "replyToEmail": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "InstantNotificationConfigurationInput": {
            "templates": [
                324
            ],
            "sender": [
                318
            ],
            "replyToEmail": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Int": {},
        "Invoice": {
            "invoiceId": [
                234
            ],
            "externalID": [
                540
            ],
            "dueDate": [
                540
            ],
            "url": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Item": {
            "id": [
                234
            ],
            "cursor": [
                540
            ],
            "title": [
                540
            ],
            "subTitle": [
                540
            ],
            "accountId": [
                540
            ],
            "description": [
                540
            ],
            "titleTemplateOverride": [
                540
            ],
            "subTitleTemplateOverride": [
                540
            ],
            "descriptionTemplateOverride": [
                540
            ],
            "price": [
                272
            ],
            "images": [
                235
            ],
            "externalId": [
                540
            ],
            "tags": [
                540
            ],
            "metadata": [
                259
            ],
            "itemType": [
                280
            ],
            "effectiveSchema": [
                286
            ],
            "attributes": [
                286
            ],
            "type": [
                280
            ],
            "schema": [
                286
            ],
            "itemNotes": [
                262,
                {
                    "take": [
                        243
                    ],
                    "cursor": [
                        540
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "specifications": [
                277
            ],
            "specificationsV2": [
                277
            ],
            "packaging": [
                270
            ],
            "estimates": [
                212
            ],
            "valuationAmount": [
                243
            ],
            "valuationCurrency": [
                540
            ],
            "saleId": [
                540
            ],
            "location": [
                540
            ],
            "metafields": [
                304,
                {
                    "input": [
                        227,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                304,
                {
                    "input": [
                        226,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "consignment": [
                108
            ],
            "site": [
                532
            ],
            "siteLocation": [
                296
            ],
            "categories": [
                86
            ],
            "creators": [
                162
            ],
            "arr": [
                80
            ],
            "arrOverride": [
                80
            ],
            "productVariants": [
                370,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "offerConfig": [
                266
            ],
            "offers": [
                331,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "status": [
                        330
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "contentDrift": [
                117,
                {
                    "targetKind": [
                        120
                    ]
                }
            ],
            "links": [
                256
            ],
            "__typename": [
                540
            ]
        },
        "ItemBanner": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "images": [
                235
            ],
            "price": [
                272
            ],
            "externalId": [
                540
            ],
            "location": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemBuyNowConfig": {
            "itemId": [
                540
            ],
            "accountId": [
                540
            ],
            "enabled": [
                80
            ],
            "price": [
                243
            ],
            "currency": [
                540
            ],
            "setAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemDates": {
            "openDate": [
                540
            ],
            "closingStart": [
                540
            ],
            "closingEnd": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                540
            ],
            "date": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemFilter": {
            "title": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemHighlight": {
            "enabled": [
                80
            ],
            "position": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ItemHighlightInput": {
            "enabled": [
                80
            ],
            "position": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "ItemImageAssociation": {
            "itemId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemLink": {
            "on_SaleItemLink": [
                423
            ],
            "on_ProductVariantLink": [
                372
            ],
            "__typename": [
                540
            ]
        },
        "ItemLinkConnection": {
            "edges": [
                257
            ],
            "__typename": [
                540
            ]
        },
        "ItemLinkEdge": {
            "node": [
                255
            ],
            "__typename": [
                540
            ]
        },
        "ItemMessageNotification": {
            "id": [
                540
            ],
            "message": [
                540
            ],
            "date": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemMetadata": {
            "data": [
                286
            ],
            "schema": [
                286
            ],
            "schemaId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "ItemMetadataInput": {
            "data": [
                286
            ],
            "schemaId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "ItemNote": {
            "id": [
                234
            ],
            "note": [
                540
            ],
            "userId": [
                540
            ],
            "user": [
                606
            ],
            "created": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemNoteConnection": {
            "edges": [
                263
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ItemNoteEdge": {
            "cursor": [
                540
            ],
            "node": [
                261
            ],
            "__typename": [
                540
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                258
            ],
            "on_ItemFairWarningNotification": [
                249
            ],
            "on_ItemOfferPlacedNotification": [
                267
            ],
            "on_ItemSoldNotification": [
                276
            ],
            "__typename": [
                540
            ]
        },
        "ItemNumberChangeInput": {
            "itemId": [
                540
            ],
            "itemNumber": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ItemOfferConfig": {
            "itemId": [
                540
            ],
            "accountId": [
                540
            ],
            "enabled": [
                80
            ],
            "autoAcceptAmount": [
                243
            ],
            "autoAcceptCurrency": [
                540
            ],
            "offerTtlSeconds": [
                243
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemOfferPlacedNotification": {
            "id": [
                540
            ],
            "amount": [
                243
            ],
            "currency": [
                540
            ],
            "buyerId": [
                540
            ],
            "referenceId": [
                540
            ],
            "date": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                268
            ],
            "direction": [
                350
            ],
            "__typename": [
                540
            ]
        },
        "ItemPackaging": {
            "id": [
                540
            ],
            "quantity": [
                243
            ],
            "boxedHeight": [
                222
            ],
            "boxedLength": [
                222
            ],
            "boxedDepth": [
                222
            ],
            "boxedMeasurementUnit": [
                303
            ],
            "boxedWeight": [
                222
            ],
            "boxedWeightUnit": [
                625
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemPackagingInput": {
            "quantity": [
                243
            ],
            "boxedHeight": [
                222
            ],
            "boxedLength": [
                222
            ],
            "boxedDepth": [
                222
            ],
            "boxedMeasurementUnit": [
                303
            ],
            "boxedWeight": [
                222
            ],
            "boxedWeightUnit": [
                625
            ],
            "__typename": [
                540
            ]
        },
        "ItemPrice": {
            "currency": [
                166
            ],
            "reserve": [
                243
            ],
            "startingBid": [
                243
            ],
            "lowEstimate": [
                243
            ],
            "highEstimate": [
                243
            ],
            "reserveType": [
                397
            ],
            "__typename": [
                540
            ]
        },
        "ItemPriceInput": {
            "currency": [
                166
            ],
            "reserve": [
                243
            ],
            "startingBid": [
                243
            ],
            "lowEstimate": [
                243
            ],
            "highEstimate": [
                243
            ],
            "reserveType": [
                397
            ],
            "__typename": [
                540
            ]
        },
        "ItemResult": {},
        "ItemSchema": {
            "schema": [
                286
            ],
            "metadataSchema": [
                286
            ],
            "__typename": [
                540
            ]
        },
        "ItemSoldNotification": {
            "id": [
                540
            ],
            "amount": [
                243
            ],
            "currency": [
                540
            ],
            "source": [
                194
            ],
            "buyerId": [
                540
            ],
            "referenceId": [
                540
            ],
            "date": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemSpecifications": {
            "id": [
                540
            ],
            "type": [
                536
            ],
            "subType": [
                535
            ],
            "height": [
                222
            ],
            "length": [
                222
            ],
            "depth": [
                222
            ],
            "diameter": [
                222
            ],
            "measurementUnit": [
                303
            ],
            "weight": [
                222
            ],
            "weightUnit": [
                625
            ],
            "quantity": [
                243
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemSpecificationsInput": {
            "type": [
                536
            ],
            "subType": [
                535
            ],
            "height": [
                222
            ],
            "length": [
                222
            ],
            "depth": [
                222
            ],
            "diameter": [
                222
            ],
            "measurementUnit": [
                303
            ],
            "weight": [
                222
            ],
            "weightUnit": [
                625
            ],
            "quantity": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "ItemStatus": {},
        "ItemType": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "name": [
                540
            ],
            "namespace": [
                540
            ],
            "schema": [
                286
            ],
            "parentId": [
                540
            ],
            "createdAt": [
                540
            ],
            "modifiedAt": [
                540
            ],
            "effectiveSchema": [
                286
            ],
            "titleTemplate": [
                540
            ],
            "subTitleTemplate": [
                540
            ],
            "descriptionTemplate": [
                540
            ],
            "charges": [
                96,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "options": [
                        99
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "ItemTypeEdge": {
            "node": [
                280
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ItemTypesConnection": {
            "edges": [
                281
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ItemsConnection": {
            "edges": [
                284
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ItemsEdge": {
            "cursor": [
                540
            ],
            "node": [
                245
            ],
            "__typename": [
                540
            ]
        },
        "ItemsFilter": {
            "onlyMyItems": [
                80
            ],
            "title": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "JSON": {},
        "Link": {
            "type": [
                291
            ],
            "url": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "LinkImageByExternalIdInput": {
            "externalId": [
                540
            ],
            "imageTypes": [
                239
            ],
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "order": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "LinkImageByIdInput": {
            "imageId": [
                540
            ],
            "imageTypes": [
                239
            ],
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "order": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "LinkInput": {
            "type": [
                291
            ],
            "url": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                416
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "LiveStream": {
            "on_ExternalLiveStream": [
                213
            ],
            "on_BastaLiveStream": [
                58
            ],
            "__typename": [
                540
            ]
        },
        "LiveStreamInput": {
            "url": [
                540
            ],
            "type": [
                295
            ],
            "__typename": [
                540
            ]
        },
        "LiveStreamType": {},
        "Location": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "site": [
                532
            ],
            "parent": [
                296
            ],
            "children": [
                296
            ],
            "name": [
                540
            ],
            "archivedAt": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "createdByUserId": [
                540
            ],
            "modifiedByUserId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "LocationConnection": {
            "edges": [
                298
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "LocationEdge": {
            "cursor": [
                540
            ],
            "node": [
                296
            ],
            "__typename": [
                540
            ]
        },
        "MailingAddress": {
            "id": [
                540
            ],
            "name": [
                540
            ],
            "company": [
                540
            ],
            "phone": [
                540
            ],
            "line1": [
                540
            ],
            "line2": [
                540
            ],
            "city": [
                540
            ],
            "state": [
                540
            ],
            "postalCode": [
                540
            ],
            "country": [
                123
            ],
            "isPrimary": [
                80
            ],
            "addressType": [
                27
            ],
            "label": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "MailingAddressInput": {
            "id": [
                540
            ],
            "name": [
                540
            ],
            "company": [
                540
            ],
            "phone": [
                540
            ],
            "line1": [
                540
            ],
            "line2": [
                540
            ],
            "city": [
                540
            ],
            "state": [
                540
            ],
            "postalCode": [
                540
            ],
            "country": [
                123
            ],
            "isPrimary": [
                80
            ],
            "addressType": [
                27
            ],
            "label": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "MarketplaceCurrencyCode": {},
        "MaxBidOnBehalfInput": {
            "userId": [
                540
            ],
            "maxAmount": [
                243
            ],
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "bidOrigin": [
                66
            ],
            "registrationId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "MeasurementUnit": {},
        "Metafield": {
            "id": [
                540
            ],
            "key": [
                540
            ],
            "value": [
                540
            ],
            "valueType": [
                307
            ],
            "entityType": [
                305
            ],
            "__typename": [
                540
            ]
        },
        "MetafieldEntityType": {},
        "MetafieldInput": {
            "key": [
                540
            ],
            "value": [
                540
            ],
            "valueType": [
                307
            ],
            "__typename": [
                540
            ]
        },
        "MetafieldValueType": {},
        "Mutation": {
            "updateAccount": [
                1,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        560,
                        "UpdateAccountInput!"
                    ]
                }
            ],
            "setAccountCountriesEnabled": [
                124,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "codes": [
                        123,
                        "[Country!]!"
                    ],
                    "enabled": [
                        80,
                        "Boolean!"
                    ]
                }
            ],
            "setAccountCountryAmlRiskClass": [
                124,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "code": [
                        123,
                        "Country!"
                    ],
                    "amlRiskClass": [
                        33,
                        "AmlRiskClass!"
                    ]
                }
            ],
            "setAuctionSymbols": [
                1,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        56,
                        "[AuctionSymbolInput!]!"
                    ]
                }
            ],
            "createSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        153,
                        "CreateSaleInput!"
                    ]
                }
            ],
            "createDutchSale": [
                206,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        138,
                        "CreateDutchSaleInput!"
                    ]
                }
            ],
            "updateDutchSale": [
                206,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        568,
                        "UpdateDutchSaleInput!"
                    ]
                }
            ],
            "updateSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "saleId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        584,
                        "UpdateSaleInput!"
                    ]
                }
            ],
            "addSaleDepartments": [
                403,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "saleId": [
                        234,
                        "ID!"
                    ],
                    "departmentIds": [
                        234,
                        "[ID!]!"
                    ]
                }
            ],
            "removeSaleDepartment": [
                403,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "saleId": [
                        234,
                        "ID!"
                    ],
                    "departmentId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "createDepartment": [
                189,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "name": [
                        540,
                        "String!"
                    ],
                    "slug": [
                        540
                    ]
                }
            ],
            "updateDepartment": [
                189,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ],
                    "name": [
                        540,
                        "String!"
                    ]
                }
            ],
            "deleteDepartment": [
                189,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "restoreDepartment": [
                189,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "createSaleGenre": [
                411,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "name": [
                        540,
                        "String!"
                    ],
                    "slug": [
                        540
                    ],
                    "isPublic": [
                        80
                    ]
                }
            ],
            "updateSaleGenre": [
                411,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ],
                    "name": [
                        540,
                        "String!"
                    ],
                    "isPublic": [
                        80
                    ]
                }
            ],
            "archiveSaleGenre": [
                411,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "restoreSaleGenre": [
                411,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "deleteSaleGenre": [
                411,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "setSectionMarker": [
                403,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "saleId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        526,
                        "SetSectionMarkerInput!"
                    ]
                }
            ],
            "removeSectionMarker": [
                403,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "saleId": [
                        234,
                        "ID!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "setSaleSlug": [
                450,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        524,
                        "SetSaleSlugInput!"
                    ]
                }
            ],
            "setSaleItemSlug": [
                429,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        522,
                        "SetSaleItemSlugInput!"
                    ]
                }
            ],
            "openSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        337,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "closeSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        105,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "setSaleStatus": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        525,
                        "SetSaleStatusInput!"
                    ]
                }
            ],
            "startClosingSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        539,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "forceOpenSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        337,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "forceCloseSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        105,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "forceStartClosingSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        539,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "publishSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        374,
                        "PublishSaleInput!"
                    ]
                }
            ],
            "deleteSale": [
                185,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        182,
                        "DeleteSaleInput!"
                    ]
                }
            ],
            "createItem": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        141,
                        "CreateItemInput!"
                    ]
                }
            ],
            "updateItem": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "itemId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        573,
                        "UpdateItemInput!"
                    ]
                }
            ],
            "addSpecifications": [
                277,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        23,
                        "AddSpecificationsInput!"
                    ]
                }
            ],
            "createConsignment": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        135,
                        "CreateConsignmentInput!"
                    ]
                }
            ],
            "updateConsignment": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        566,
                        "UpdateConsignmentInput!"
                    ]
                }
            ],
            "deleteConsignment": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "consignmentId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "setItemConsignment": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        509,
                        "SetItemConsignmentInput!"
                    ]
                }
            ],
            "clearItemConsignment": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "itemId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "createSite": [
                532,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        159,
                        "CreateSiteInput!"
                    ]
                }
            ],
            "updateSite": [
                532,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        589,
                        "UpdateSiteInput!"
                    ]
                }
            ],
            "archiveSite": [
                532,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "siteId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "unarchiveSite": [
                532,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "siteId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "deleteSite": [
                532,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "siteId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "createLocation": [
                296,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        144,
                        "CreateLocationInput!"
                    ]
                }
            ],
            "updateLocation": [
                296,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        576,
                        "UpdateLocationInput!"
                    ]
                }
            ],
            "archiveLocation": [
                296,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "locationId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "unarchiveLocation": [
                296,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "locationId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "deleteLocation": [
                296,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "locationId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "setItemSiteLocation": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        512,
                        "SetItemSiteLocationInput!"
                    ]
                }
            ],
            "clearItemSiteLocation": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "itemId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "addConsignors": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        15,
                        "AddConsignorsInput!"
                    ]
                }
            ],
            "removeConsignors": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        381,
                        "RemoveConsignorsInput!"
                    ]
                }
            ],
            "setMainConsignor": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        514,
                        "SetMainConsignorInput!"
                    ]
                }
            ],
            "addConsignmentStaff": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        14,
                        "AddConsignmentStaffInput!"
                    ]
                }
            ],
            "removeConsignmentStaff": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        380,
                        "RemoveConsignmentStaffInput!"
                    ]
                }
            ],
            "setConsignmentStaffLead": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        505,
                        "SetConsignmentStaffLeadInput!"
                    ]
                }
            ],
            "setItemOfferConfig": [
                266,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        511,
                        "SetItemOfferConfigInput!"
                    ]
                }
            ],
            "setItemBuyNowConfig": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        507,
                        "SetItemBuyNowConfigInput!"
                    ]
                }
            ],
            "buyItem": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        81,
                        "BuyItemInput!"
                    ]
                }
            ],
            "acceptOffer": [
                326,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "offerId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "rejectOffer": [
                326,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "offerId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "counterOffer": [
                326,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "offerId": [
                        540,
                        "String!"
                    ],
                    "amount": [
                        243,
                        "Int!"
                    ],
                    "currency": [
                        540,
                        "String!"
                    ],
                    "message": [
                        540
                    ]
                }
            ],
            "addPackaging": [
                270,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        21,
                        "AddPackagingInput!"
                    ]
                }
            ],
            "updateSpecification": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        590,
                        "UpdateSpecificationInput!"
                    ]
                }
            ],
            "updatePackaging": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        580,
                        "UpdatePackagingInput!"
                    ]
                }
            ],
            "removeSpecifications": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        386,
                        "RemoveSpecificationsInput!"
                    ]
                }
            ],
            "removePackaging": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        383,
                        "RemovePackagingInput!"
                    ]
                }
            ],
            "updateItemNumbers": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        574,
                        "UpdateItemNumbersInput!"
                    ]
                }
            ],
            "createItemForSale": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        422,
                        "SaleItemInput!"
                    ]
                }
            ],
            "createDutchItemForSale": [
                207,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        137,
                        "CreateDutchItemForSaleInput!"
                    ]
                }
            ],
            "updateDutchSaleItem": [
                207,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        569,
                        "UpdateDutchSaleItemInput!"
                    ]
                }
            ],
            "addItemToSale": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        18,
                        "AddItemToSaleInput!"
                    ]
                }
            ],
            "updateItemForSale": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        586,
                        "UpdateSaleItemInput!"
                    ]
                }
            ],
            "syncContent": [
                117,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        545,
                        "SyncContentInput!"
                    ]
                }
            ],
            "syncSchemaDataToSaleItem": [
                117,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        548,
                        "SyncSchemaDataToSaleItemInput!"
                    ]
                }
            ],
            "syncSchemaDataFromSaleItem": [
                117,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        546,
                        "SyncSchemaDataFromSaleItemInput!"
                    ]
                }
            ],
            "syncSchemaDataToProductVariant": [
                117,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        547,
                        "SyncSchemaDataToProductVariantInput!"
                    ]
                }
            ],
            "reorderHighlightedItems": [
                230,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        392,
                        "ReorderHighlightedItemsInput!"
                    ]
                }
            ],
            "setItemWinner": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        513,
                        "SetItemWinnerInput!"
                    ]
                }
            ],
            "setSaleItemStatus": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        523,
                        "SetSaleItemStatusInput!"
                    ]
                }
            ],
            "removeItemFromSale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        385,
                        "RemoveSaleItemInput!"
                    ]
                }
            ],
            "createApiKey": [
                36,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        38,
                        "ApiKeyInput!"
                    ]
                }
            ],
            "revokeApiKey": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        400,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "createApiToken": [
                42,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        43,
                        "ApiTokenInput!"
                    ]
                }
            ],
            "revokeApiToken": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        401,
                        "RevokeApiTokenInput!"
                    ]
                }
            ],
            "bidOnBehalf": [
                59,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        63,
                        "BidOnBehalfInput!"
                    ]
                }
            ],
            "maxBidOnBehalf": [
                59,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        302,
                        "MaxBidOnBehalfInput!"
                    ]
                }
            ],
            "cancelLatestBidOnItem": [
                84,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        82,
                        "CancelLatestBidOnItemInput!"
                    ]
                }
            ],
            "setUserIdOnBid": [
                59,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        528,
                        "SetUserIdOnBidInput!"
                    ]
                }
            ],
            "createBidderToken": [
                75,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        76,
                        "BidderTokenInput!"
                    ]
                }
            ],
            "createUserTokenV2": [
                621,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        622,
                        "UserTokenInput!"
                    ]
                }
            ],
            "addActionHookSubscription": [
                10,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        11,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "updateActionHookSubscription": [
                10,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        561,
                        "UpdateActionHookSubscriptionInput!"
                    ]
                }
            ],
            "deleteActionHookSubscription": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        172,
                        "DeleteActionHookSubscriptionInput!"
                    ]
                }
            ],
            "retryActionHook": [
                6,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        399,
                        "RetryActionHookInput!"
                    ]
                }
            ],
            "testActionHook": [
                550,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        11,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "onboardPaymentAccount": [
                335,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        334,
                        "OnboardPaymentAccountInput!"
                    ]
                }
            ],
            "continueOnboardPaymentAccount": [
                335,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        122,
                        "ContinueOnboardPaymentAccountInput!"
                    ]
                }
            ],
            "acceptTerms": [
                540,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "createItemImage": [
                235,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        140,
                        "CreateItemImage!"
                    ]
                }
            ],
            "reorderItemImages": [
                235,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        394,
                        "ReorderItemImages!"
                    ]
                }
            ],
            "reorderImages": [
                235,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        393,
                        "ReorderImagesInput!"
                    ]
                }
            ],
            "deleteItemImage": [
                235,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        175,
                        "DeleteItemImageInput!"
                    ]
                }
            ],
            "deleteImage": [
                235,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        174,
                        "DeleteImageInput!"
                    ]
                }
            ],
            "addPaddleToSale": [
                346,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        22,
                        "AddPaddleToSaleInput!"
                    ]
                }
            ],
            "removePaddleFromSale": [
                346,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        384,
                        "RemovePaddleFromSaleInput!"
                    ]
                }
            ],
            "registerUserPaddle": [
                346,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        378,
                        "RegisterUserPaddleInput!"
                    ]
                }
            ],
            "updateUser": [
                606,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        591,
                        "UpdateUserInput!"
                    ]
                }
            ],
            "setUserNotificationPreferences": [
                608,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "userId": [
                        540,
                        "String!"
                    ],
                    "preferences": [
                        609,
                        "[UserNotificationPreferenceInput!]!"
                    ]
                }
            ],
            "upsertUserAddress": [
                299,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        593,
                        "UpsertUserAddressInput!"
                    ]
                }
            ],
            "upsertUserPhone": [
                364,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        594,
                        "UpsertUserPhoneInput!"
                    ]
                }
            ],
            "deleteUserAddress": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        187,
                        "DeleteUserAddressInput!"
                    ]
                }
            ],
            "deleteUserPhone": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        188,
                        "DeleteUserPhoneInput!"
                    ]
                }
            ],
            "addMessageNotificationToItem": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        20,
                        "AddMessageNotificationToItemInput!"
                    ]
                }
            ],
            "addFairWarningNotificationToItem": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        17,
                        "AddFairWarningNotificationToItemInput!"
                    ]
                }
            ],
            "addLiveStreamToSale": [
                293,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        19,
                        "AddLiveStreamToSaleInput!"
                    ]
                }
            ],
            "deleteLiveStreamFromSale": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        177,
                        "DeleteLiveStreamFromSaleInput!"
                    ]
                }
            ],
            "addTagToItem": [
                549,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        24,
                        "AddTagToItemInput!"
                    ]
                }
            ],
            "removeTagFromItem": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        387,
                        "RemoveTagFromItemInput!"
                    ]
                }
            ],
            "addTagToSaleItem": [
                549,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        25,
                        "AddTagToSaleItemInput!"
                    ]
                }
            ],
            "removeTagFromSaleItem": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        388,
                        "RemoveTagFromSaleItemInput!"
                    ]
                }
            ],
            "addTagToUser": [
                549,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        26,
                        "AddTagToUserInput!"
                    ]
                }
            ],
            "removeTagFromUser": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        389,
                        "RemoveTagFromUserInput!"
                    ]
                }
            ],
            "blockUser": [
                595,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        79,
                        "BlockUserInput!"
                    ]
                }
            ],
            "unblockUser": [
                595,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        557,
                        "UnblockUserInput!"
                    ]
                }
            ],
            "setUserExternalId": [
                595,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        527,
                        "SetUserExternalIdInput!"
                    ]
                }
            ],
            "createItemNote": [
                261,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        142,
                        "CreateItemNoteInput!"
                    ]
                }
            ],
            "createUploadUrl": [
                592,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        161,
                        "CreateUploadUrlInput!"
                    ]
                }
            ],
            "createAssetUploadUrl": [
                50,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        130,
                        "CreateAssetUploadUrlInput!"
                    ]
                }
            ],
            "linkImageById": [
                240,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        289,
                        "LinkImageByIdInput!"
                    ]
                }
            ],
            "linkImageByExternalId": [
                240,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        288,
                        "LinkImageByExternalIdInput!"
                    ]
                }
            ],
            "createItemType": [
                280,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        143,
                        "CreateItemTypeInput!"
                    ]
                }
            ],
            "updateItemType": [
                280,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "itemTypeId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        575,
                        "UpdateItemTypeInput!"
                    ]
                }
            ],
            "reorderItemTypes": [
                280,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "parentId": [
                        234
                    ],
                    "itemTypeIds": [
                        234,
                        "[ID!]!"
                    ]
                }
            ],
            "createSchema": [
                280,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        143,
                        "CreateItemTypeInput!"
                    ]
                }
            ],
            "updateSchema": [
                280,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "schemaId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        575,
                        "UpdateItemTypeInput!"
                    ]
                }
            ],
            "updateGlobalIncrementTable": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        572,
                        "UpdateGlobalIncrementTableInput!"
                    ]
                }
            ],
            "updateGlobalDates": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        571,
                        "UpdateGlobalDatesInput!"
                    ]
                }
            ],
            "updateGlobalClosingTimeCountdown": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        570,
                        "UpdateGlobalClosingTimeCountdownInput!"
                    ]
                }
            ],
            "passLiveItem": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        354,
                        "PassLiveItemInput!"
                    ]
                }
            ],
            "sellLiveItem": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        492,
                        "SellLiveItemInput!"
                    ]
                }
            ],
            "sellLiveItemToBid": [
                496,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        495,
                        "SellLiveItemToBidInput!"
                    ]
                }
            ],
            "hideItemsFromSale": [
                243,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        228,
                        "HideItemsFromSaleInput!"
                    ]
                }
            ],
            "unhideItemsFromSale": [
                243,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        558,
                        "UnhideItemsFromSaleInput!"
                    ]
                }
            ],
            "connectShopifyToAccount": [
                531,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        107,
                        "ConnectShopifyToAccountInput!"
                    ]
                }
            ],
            "createPaymentOrder": [
                359,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        149,
                        "CreatePaymentOrderInput!"
                    ]
                }
            ],
            "createOrder": [
                359,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        145,
                        "CreateOrderInput!"
                    ]
                }
            ],
            "createOrderLine": [
                340,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        147,
                        "CreateOrderLineInput!"
                    ]
                }
            ],
            "updateOrderLine": [
                340,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        579,
                        "UpdateOrderLineInput!"
                    ]
                }
            ],
            "deleteOrderLine": [
                340,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        179,
                        "DeleteOrderLineInput!"
                    ]
                }
            ],
            "updatePaymentOrder": [
                359,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        581,
                        "UpdatePaymentOrderInput!"
                    ]
                }
            ],
            "updateOrder": [
                359,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        577,
                        "UpdateOrderInput!"
                    ]
                }
            ],
            "deletePaymentOrder": [
                359,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        180,
                        "DeletePaymentOrderInput!"
                    ]
                }
            ],
            "cancelPaymentOrder": [
                359,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        83,
                        "CancelPaymentOrderInput!"
                    ]
                }
            ],
            "publishPaymentOrder": [
                359,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        373,
                        "PublishPaymentOrderInput!"
                    ]
                }
            ],
            "createInvoice": [
                244,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        139,
                        "CreateInvoiceInput!"
                    ]
                }
            ],
            "createPayment": [
                355,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        148,
                        "CreatePaymentInput!"
                    ]
                }
            ],
            "createAccountFee": [
                2,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        127,
                        "CreateAccountFeeInput!"
                    ]
                }
            ],
            "updateAccountFee": [
                2,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        559,
                        "UpdateAccountFeeInput!"
                    ]
                }
            ],
            "deleteAccountFee": [
                234,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        171,
                        "DeleteAccountFeeInput!"
                    ]
                }
            ],
            "createSaleFee": [
                218,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        152,
                        "CreateSaleFeeInput!"
                    ]
                }
            ],
            "updateSaleFee": [
                218,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        583,
                        "UpdateSaleFeeInput!"
                    ]
                }
            ],
            "deleteSaleFee": [
                234,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        181,
                        "DeleteSaleFeeInput!"
                    ]
                }
            ],
            "resetSaleFees": [
                218,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        398,
                        "ResetSaleFeesInput!"
                    ]
                }
            ],
            "createSaleItemFee": [
                218,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        154,
                        "CreateSaleItemFeeInput!"
                    ]
                }
            ],
            "updateSaleItemFee": [
                218,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        585,
                        "UpdateSaleItemFeeInput!"
                    ]
                }
            ],
            "deleteSaleItemFee": [
                234,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        183,
                        "DeleteSaleItemFeeInput!"
                    ]
                }
            ],
            "createSaleRegistration": [
                438,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        156,
                        "CreateSaleRegistrationInput!"
                    ]
                }
            ],
            "acceptSaleRegistration": [
                438,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        0,
                        "AcceptSaleRegistrationInput!"
                    ]
                }
            ],
            "rejectSaleRegistration": [
                438,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        379,
                        "RejectSaleRegistrationInput!"
                    ]
                }
            ],
            "deleteSaleRegistration": [
                234,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        186,
                        "DeleteSaleRegistrationInput!"
                    ]
                }
            ],
            "createSaleItemRegistration": [
                425,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        155,
                        "CreateSaleItemRegistrationInput!"
                    ]
                }
            ],
            "deleteSaleItemRegistration": [
                234,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        184,
                        "DeleteSaleItemRegistrationInput!"
                    ]
                }
            ],
            "createSaleRegistrationPolicy": [
                441,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        157,
                        "CreateSaleRegistrationPolicyInput!"
                    ]
                }
            ],
            "updateSaleRegistrationPolicy": [
                441,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        587,
                        "UpdateSaleRegistrationPolicyInput!"
                    ]
                }
            ],
            "attachSaleRegistrationPolicies": [
                441,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        52,
                        "AttachSaleRegistrationPoliciesInput!"
                    ]
                }
            ],
            "detachSaleRegistrationPolicies": [
                441,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        192,
                        "DetachSaleRegistrationPoliciesInput!"
                    ]
                }
            ],
            "setMetafields": [
                304,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "metafields": [
                        515,
                        "[SetMetafieldInput!]!"
                    ]
                }
            ],
            "deleteMetafield": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        178,
                        "DeleteMetafieldInput!"
                    ]
                }
            ],
            "createUserPaymentProviderSession": [
                613,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        614,
                        "UserPaymentProviderSessionInput!"
                    ]
                }
            ],
            "createPaymentProviderSession": [
                361,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "addDashboardUserRole": [
                170,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        16,
                        "AddDashboardUserRoleInput!"
                    ]
                }
            ],
            "removeDashboardUserRole": [
                170,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        382,
                        "RemoveDashboardUserRoleInput!"
                    ]
                }
            ],
            "associateUserToAccount": [
                168,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        51,
                        "AssociateUserToAccountInput!"
                    ]
                }
            ],
            "disassociateUserFromAccount": [
                80,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        195,
                        "DisassociateUserFromAccountInput!"
                    ]
                }
            ],
            "createCategory": [
                86,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        133,
                        "CreateCategoryInput!"
                    ]
                }
            ],
            "updateCategory": [
                86,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        564,
                        "UpdateCategoryInput!"
                    ]
                }
            ],
            "deleteCategory": [
                80,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "categoryId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "setItemCategories": [
                89,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        508,
                        "SetItemCategoriesInput!"
                    ]
                }
            ],
            "setSaleCategories": [
                89,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        518,
                        "SetSaleCategoriesInput!"
                    ]
                }
            ],
            "setSaleItemCategories": [
                89,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        520,
                        "SetSaleItemCategoriesInput!"
                    ]
                }
            ],
            "createCreator": [
                162,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        136,
                        "CreateCreatorInput!"
                    ]
                }
            ],
            "updateCreator": [
                162,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        567,
                        "UpdateCreatorInput!"
                    ]
                }
            ],
            "deleteCreator": [
                80,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "creatorId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "setItemCreators": [
                164,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        510,
                        "SetItemCreatorsInput!"
                    ]
                }
            ],
            "setSaleItemCreators": [
                164,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        521,
                        "SetSaleItemCreatorsInput!"
                    ]
                }
            ],
            "updateArrSettings": [
                48,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        563,
                        "UpdateArrSettingsInput!"
                    ]
                }
            ],
            "setArrBands": [
                48,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        501,
                        "SetArrBandsInput!"
                    ]
                }
            ],
            "deleteArrSettings": [
                80,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "currency": [
                        166,
                        "Currency!"
                    ]
                }
            ],
            "createCharge": [
                90,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        134,
                        "CreateChargeInput!"
                    ]
                }
            ],
            "updateCharge": [
                90,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        565,
                        "UpdateChargeInput!"
                    ]
                }
            ],
            "setChargeStatus": [
                90,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        504,
                        "SetChargeStatusInput!"
                    ]
                }
            ],
            "setChargeBands": [
                90,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        503,
                        "SetChargeBandsInput!"
                    ]
                }
            ],
            "setChargeAtScope": [
                90,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        502,
                        "SetChargeAtScopeInput!"
                    ]
                }
            ],
            "deleteChargeAtScope": [
                90,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        173,
                        "DeleteChargeAtScopeInput!"
                    ]
                }
            ],
            "setItemArr": [
                245,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        506,
                        "SetItemArrInput!"
                    ]
                }
            ],
            "setSaleItemArr": [
                416,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        519,
                        "SetSaleItemArrInput!"
                    ]
                }
            ],
            "createAffiliate": [
                28,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        129,
                        "CreateAffiliateInput!"
                    ]
                }
            ],
            "updateAffiliate": [
                28,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "affiliateId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        562,
                        "UpdateAffiliateInput!"
                    ]
                }
            ],
            "createSendGridNotificationIntegration": [
                500,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        158,
                        "CreateSendGridNotificationIntegrationInput!"
                    ]
                }
            ],
            "updateSendGridNotificationIntegration": [
                500,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        588,
                        "UpdateSendGridNotificationIntegrationInput!"
                    ]
                }
            ],
            "rotateSendGridNotificationIntegrationApiKey": [
                500,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        402,
                        "RotateSendGridNotificationIntegrationApiKeyInput!"
                    ]
                }
            ],
            "createTwilioNotificationIntegration": [
                556,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        160,
                        "CreateTwilioNotificationIntegrationInput!"
                    ]
                }
            ],
            "setNotificationConfiguration": [
                313,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        516,
                        "SetNotificationConfigurationInput!"
                    ]
                }
            ],
            "setNotificationConfigurationStatus": [
                313,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        517,
                        "SetNotificationConfigurationStatusInput!"
                    ]
                }
            ],
            "createAttributionChannel": [
                53,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        131,
                        "CreateAttributionChannelInput!"
                    ]
                }
            ],
            "renameAttributionChannel": [
                53,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        390,
                        "RenameAttributionChannelInput!"
                    ]
                }
            ],
            "archiveAttributionChannel": [
                53,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        540,
                        "String!"
                    ]
                }
            ],
            "unarchiveAttributionChannel": [
                53,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        540,
                        "String!"
                    ]
                }
            ],
            "deleteAttributionChannel": [
                53,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        540,
                        "String!"
                    ]
                }
            ],
            "createAttributionSource": [
                54,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        132,
                        "CreateAttributionSourceInput!"
                    ]
                }
            ],
            "renameAttributionSource": [
                54,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "input": [
                        391,
                        "RenameAttributionSourceInput!"
                    ]
                }
            ],
            "archiveAttributionSource": [
                54,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        540,
                        "String!"
                    ]
                }
            ],
            "unarchiveAttributionSource": [
                54,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        540,
                        "String!"
                    ]
                }
            ],
            "deleteAttributionSource": [
                54,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        540,
                        "String!"
                    ]
                }
            ],
            "setWorkflowScheduleOffsets": [
                632,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        529,
                        "SetWorkflowScheduleOffsetsInput!"
                    ]
                }
            ],
            "setSaleWorkflowDateOverride": [
                403,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "saleId": [
                        234,
                        "ID!"
                    ],
                    "dateType": [
                        626,
                        "WorkflowDateType!"
                    ],
                    "overrideDate": [
                        551
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "Node": {
            "id": [
                234
            ],
            "on_AccountFee": [
                2
            ],
            "on_ActionHookLog": [
                6
            ],
            "on_ApiKey": [
                34
            ],
            "on_ApiToken": [
                40
            ],
            "on_Category": [
                86
            ],
            "on_Consignment": [
                108
            ],
            "on_Department": [
                189
            ],
            "on_DutchSale": [
                206
            ],
            "on_FeeRule": [
                218
            ],
            "on_Item": [
                245
            ],
            "on_Location": [
                296
            ],
            "on_Offer": [
                326
            ],
            "on_PaymentOrder": [
                359
            ],
            "on_Sale": [
                403
            ],
            "on_SaleGenre": [
                411
            ],
            "on_SaleItemRegistration": [
                425
            ],
            "on_SaleItemWatchlistEntry": [
                432
            ],
            "on_SaleRegistration": [
                438
            ],
            "on_SaleRegistrationPolicy": [
                441
            ],
            "on_SaleWatchlistEntry": [
                477
            ],
            "on_SectionMarker": [
                491
            ],
            "on_Site": [
                532
            ],
            "on_User": [
                595
            ],
            "__typename": [
                540
            ]
        },
        "NotificationAudience": {},
        "NotificationAudienceGroup": {},
        "NotificationCatalog": {
            "entries": [
                313
            ],
            "__typename": [
                540
            ]
        },
        "NotificationCatalogEntry": {
            "event": [
                319
            ],
            "audience": [
                310
            ],
            "displayName": [
                540
            ],
            "timing": [
                325
            ],
            "supportedChannels": [
                314
            ],
            "saleTypeVarying": [
                80
            ],
            "configurations": [
                315
            ],
            "__typename": [
                540
            ]
        },
        "NotificationChannel": {},
        "NotificationConfiguration": {
            "channel": [
                314
            ],
            "status": [
                316
            ],
            "on_InstantNotificationConfiguration": [
                241
            ],
            "on_ScheduledNotificationConfiguration": [
                482
            ],
            "__typename": [
                540
            ]
        },
        "NotificationConfigurationStatus": {},
        "NotificationEmailSender": {
            "fromEmail": [
                540
            ],
            "fromName": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "NotificationEmailSenderInput": {
            "fromEmail": [
                540
            ],
            "fromName": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "NotificationEvent": {},
        "NotificationIntegration": {
            "channel": [
                314
            ],
            "created": [
                540
            ],
            "timezone": [
                540
            ],
            "on_SendGridNotificationIntegration": [
                500
            ],
            "on_TwilioNotificationIntegration": [
                556
            ],
            "__typename": [
                540
            ]
        },
        "NotificationLeadTime": {
            "minutesBefore": [
                243
            ],
            "templates": [
                323
            ],
            "__typename": [
                540
            ]
        },
        "NotificationLeadTimeInput": {
            "minutesBefore": [
                243
            ],
            "templates": [
                324
            ],
            "__typename": [
                540
            ]
        },
        "NotificationTemplate": {
            "saleType": [
                471
            ],
            "templateId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "NotificationTemplateInput": {
            "saleType": [
                471
            ],
            "templateId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "NotificationTiming": {},
        "Offer": {
            "id": [
                234
            ],
            "cursor": [
                540
            ],
            "accountId": [
                540
            ],
            "itemId": [
                540
            ],
            "item": [
                246
            ],
            "buyerUserId": [
                540
            ],
            "buyer": [
                606
            ],
            "amount": [
                243
            ],
            "currency": [
                540
            ],
            "status": [
                330
            ],
            "message": [
                540
            ],
            "decidedByUserId": [
                540
            ],
            "decidedByActor": [
                327
            ],
            "awaitingParty": [
                329
            ],
            "counters": [
                328
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "expiresAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "OfferActor": {},
        "OfferCounter": {
            "id": [
                234
            ],
            "party": [
                329
            ],
            "amount": [
                243
            ],
            "currency": [
                540
            ],
            "message": [
                540
            ],
            "createdByUserId": [
                540
            ],
            "created": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "OfferParty": {},
        "OfferStatus": {},
        "OffersConnection": {
            "edges": [
                332
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "OffersEdge": {
            "cursor": [
                540
            ],
            "node": [
                326
            ],
            "__typename": [
                540
            ]
        },
        "OffersFilter": {
            "statuses": [
                330
            ],
            "itemId": [
                540
            ],
            "buyerUserId": [
                540
            ],
            "consignorUserId": [
                540
            ],
            "minAmount": [
                243
            ],
            "maxAmount": [
                243
            ],
            "createdAfter": [
                540
            ],
            "createdBefore": [
                540
            ],
            "query": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "OnboardPaymentAccountInput": {
            "sellerLocation": [
                498
            ],
            "type": [
                356
            ],
            "returnUrl": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "OnboardPaymentAccountResponse": {
            "onboardingUrl": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                67
            ],
            "__typename": [
                540
            ]
        },
        "OpenSaleInput": {
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "OrderConnection": {
            "edges": [
                339
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "OrderEdge": {
            "cursor": [
                540
            ],
            "node": [
                359
            ],
            "__typename": [
                540
            ]
        },
        "OrderLine": {
            "orderLineId": [
                234
            ],
            "amount": [
                243
            ],
            "description": [
                540
            ],
            "orderLineType": [
                342
            ],
            "fees": [
                341
            ],
            "sellerFees": [
                341
            ],
            "item": [
                424
            ],
            "__typename": [
                540
            ]
        },
        "OrderLineFee": {
            "id": [
                234
            ],
            "description": [
                540
            ],
            "name": [
                540
            ],
            "amount": [
                243
            ],
            "isSystemDefined": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "OrderLineType": {},
        "OrderStatus": {},
        "OrganisationDetails": {
            "legalName": [
                540
            ],
            "registrationNumber": [
                540
            ],
            "vatNumber": [
                540
            ],
            "addressLine1": [
                540
            ],
            "addressLine2": [
                540
            ],
            "city": [
                540
            ],
            "region": [
                540
            ],
            "postalCode": [
                540
            ],
            "countryName": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "OrganisationDetailsInput": {
            "legalName": [
                540
            ],
            "registrationNumber": [
                540
            ],
            "vatNumber": [
                540
            ],
            "addressLine1": [
                540
            ],
            "addressLine2": [
                540
            ],
            "city": [
                540
            ],
            "region": [
                540
            ],
            "postalCode": [
                540
            ],
            "countryName": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Paddle": {
            "identifier": [
                540
            ],
            "userId": [
                540
            ],
            "user": [
                606
            ],
            "type": [
                348
            ],
            "created": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                67
            ],
            "__typename": [
                540
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                234
            ],
            "endCursor": [
                234
            ],
            "hasNextPage": [
                80
            ],
            "hasPreviousPage": [
                80
            ],
            "totalRecords": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "PaginationDirection": {},
        "Participant": {
            "userId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ParticipantsConnection": {
            "edges": [
                353
            ],
            "totalCount": [
                243
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ParticipantsEdge": {
            "cursor": [
                540
            ],
            "node": [
                351
            ],
            "__typename": [
                540
            ]
        },
        "PassLiveItemInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "transitionToUpcomingLot": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "Payment": {
            "paymentId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "PaymentAccountType": {},
        "PaymentDetails": {
            "paymentProviderAccountId": [
                540
            ],
            "status": [
                362
            ],
            "accountFees": [
                2
            ],
            "__typename": [
                540
            ]
        },
        "PaymentMethod": {
            "on_Card": [
                85
            ],
            "__typename": [
                540
            ]
        },
        "PaymentOrder": {
            "id": [
                234
            ],
            "orderId": [
                234
            ],
            "title": [
                540
            ],
            "currency": [
                166
            ],
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "invoiceId": [
                540
            ],
            "invoice": [
                244
            ],
            "paymentId": [
                540
            ],
            "userId": [
                540
            ],
            "orderLines": [
                340
            ],
            "user": [
                606
            ],
            "billingAddress": [
                299
            ],
            "shippingAddress": [
                299
            ],
            "status": [
                343
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "PaymentProviderCustomerInput": {
            "stripe": [
                542
            ],
            "stripeApp": [
                541
            ],
            "__typename": [
                540
            ]
        },
        "PaymentProviderSession": {
            "on_StripePaymentProviderSession": [
                543
            ],
            "__typename": [
                540
            ]
        },
        "PaymentProviderStatus": {},
        "Permission": {},
        "PhoneAddress": {
            "id": [
                540
            ],
            "phoneType": [
                366
            ],
            "phoneNumber": [
                540
            ],
            "label": [
                540
            ],
            "isPrimary": [
                80
            ],
            "verifiedAt": [
                551
            ],
            "__typename": [
                540
            ]
        },
        "PhoneBidOrigin": {
            "type": [
                67
            ],
            "__typename": [
                540
            ]
        },
        "PhoneType": {},
        "Principal": {
            "id": [
                234
            ],
            "type": [
                368
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "PrincipalType": {},
        "ProductVariant": {
            "id": [
                234
            ],
            "productId": [
                234
            ],
            "name": [
                540
            ],
            "sku": [
                540
            ],
            "price": [
                243
            ],
            "currencyCode": [
                301
            ],
            "stockOnHand": [
                243
            ],
            "enabled": [
                80
            ],
            "itemId": [
                234
            ],
            "itemType": [
                280
            ],
            "effectiveSchema": [
                286
            ],
            "type": [
                280
            ],
            "schema": [
                286
            ],
            "schemaId": [
                234
            ],
            "schemaData": [
                286
            ],
            "attributes": [
                286
            ],
            "__typename": [
                540
            ]
        },
        "ProductVariantConnection": {
            "edges": [
                371
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "ProductVariantEdge": {
            "cursor": [
                540
            ],
            "node": [
                369
            ],
            "__typename": [
                540
            ]
        },
        "ProductVariantLink": {
            "variantId": [
                234
            ],
            "productId": [
                234
            ],
            "productName": [
                540
            ],
            "variantName": [
                540
            ],
            "sku": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "PublishPaymentOrderInput": {
            "orderId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "PublishSaleInput": {
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Query": {
            "account": [
                1,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "saleStatsDataCoverage": [
                456,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "saleStatsYoyGmv": [
                469,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "yearA": [
                        243,
                        "Int!"
                    ],
                    "yearB": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsMomGmv": [
                464,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "yearA": [
                        243,
                        "Int!"
                    ],
                    "monthA": [
                        243,
                        "Int!"
                    ],
                    "yearB": [
                        243,
                        "Int!"
                    ],
                    "monthB": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsSellThrough": [
                466,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "year": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsBidderEngagement": [
                453,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "year": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsDistinctWinners": [
                457,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "year": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsLotOutcomeSummary": [
                463,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "year": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsHammerVsEstimate": [
                460,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "year": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsClosingDayProfile": [
                454,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "year": [
                        243,
                        "Int!"
                    ]
                }
            ],
            "saleStatsTopSales": [
                468,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "year": [
                        243,
                        "Int!"
                    ],
                    "limit": [
                        243
                    ]
                }
            ],
            "accounts": [
                1
            ],
            "countries": [
                124,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "accountCountries": [
                125,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "sales": [
                406,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        409
                    ]
                }
            ],
            "sale": [
                403,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ],
                    "saleIdType": [
                        414
                    ]
                }
            ],
            "saleV2": [
                472,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        234,
                        "ID!"
                    ],
                    "saleIdType": [
                        414
                    ]
                }
            ],
            "salesV2": [
                473,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        409
                    ]
                }
            ],
            "departments": [
                190,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "saleGenres": [
                412,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "includeArchived": [
                        80
                    ]
                }
            ],
            "saleItem": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "saleId": [
                        540,
                        "String!"
                    ],
                    "itemId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "saleItemByExternalId": [
                416,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "externalId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "apiKeys": [
                35,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "searchKey": [
                485,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                41,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "actionHookSubscriptions": [
                10,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "attributionChannels": [
                53,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "includeArchived": [
                        80
                    ]
                }
            ],
            "attributionSources": [
                54,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "includeArchived": [
                        80
                    ]
                }
            ],
            "notificationIntegrations": [
                320,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "revealSendGridNotificationIntegrationApiKey": [
                540,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "notificationCatalog": [
                312,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "workflowScheduleOffsets": [
                632,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "actionHookLogs": [
                7,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        5
                    ]
                }
            ],
            "item": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "itemId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "itemByExternalId": [
                245,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "externalId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "items": [
                283,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "itemsFilter": [
                        285,
                        "ItemsFilter!"
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "consignment": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "consignmentId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "consignmentByShortId": [
                108,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "shortId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "consignments": [
                114,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "site": [
                532,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "siteId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "sites": [
                533,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "includeArchived": [
                        80
                    ]
                }
            ],
            "location": [
                296,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "locationId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "locations": [
                297,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "siteId": [
                        540
                    ],
                    "includeArchived": [
                        80
                    ]
                }
            ],
            "consignorItems": [
                283,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "consignorUserId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "itemOfferConfig": [
                266,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "itemId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "offer": [
                326,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "offerId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "itemOffers": [
                331,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "itemId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "status": [
                        330
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "offers": [
                331,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "filter": [
                        333
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "salesAggregate": [
                479,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "userBidActivity": [
                599,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "userId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        601
                    ],
                    "direction": [
                        350
                    ],
                    "orderBy": [
                        64
                    ]
                }
            ],
            "user": [
                595,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "userId": [
                        540,
                        "String!"
                    ],
                    "idType": [
                        603,
                        "UserIdType!"
                    ]
                }
            ],
            "orders": [
                338,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "before": [
                        540
                    ],
                    "last": [
                        243
                    ]
                }
            ],
            "userOrders": [
                338,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "userID": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "before": [
                        540
                    ],
                    "last": [
                        243
                    ]
                }
            ],
            "saleRegistrations": [
                447,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        449
                    ],
                    "direction": [
                        350
                    ],
                    "sortByField": [
                        444
                    ]
                }
            ],
            "image": [
                240,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "id": [
                        540,
                        "String!"
                    ],
                    "idType": [
                        237,
                        "ImageIdType!"
                    ]
                }
            ],
            "asset": [
                49,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "assetId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "users": [
                623,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "consignorFollowers": [
                623,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "consignorId": [
                        234,
                        "ID!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "userFollowing": [
                623,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "userId": [
                        234,
                        "ID!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "consignorFollowerCount": [
                243,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "consignorId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "saleRegistrationPolicies": [
                440,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "last": [
                        243
                    ],
                    "before": [
                        540
                    ]
                }
            ],
            "search": [
                487,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "type": [
                        490,
                        "SearchType!"
                    ],
                    "query": [
                        540,
                        "String!"
                    ],
                    "first": [
                        243
                    ],
                    "page": [
                        243
                    ],
                    "queryBy": [
                        540,
                        "[String!]"
                    ],
                    "orderBy": [
                        540
                    ],
                    "filterBy": [
                        540
                    ]
                }
            ],
            "geoLookup": [
                223,
                {
                    "ip": [
                        540
                    ]
                }
            ],
            "dashboardMembers": [
                168,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "dashboardUserRoles": [
                170,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "userId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "currentUser": [
                167,
                {
                    "accountId": [
                        540,
                        "String!"
                    ]
                }
            ],
            "category": [
                86,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "categoryId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "categories": [
                87,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "parentId": [
                        234
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "itemTypes": [
                282,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "parentId": [
                        234
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "schemas": [
                282,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "parentId": [
                        234
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "schemaNamespaces": [
                484,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "creator": [
                162,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "creatorId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "creators": [
                163,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "parentId": [
                        234
                    ],
                    "includeChildren": [
                        80
                    ],
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ]
                }
            ],
            "affiliate": [
                28,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "affiliateId": [
                        234,
                        "ID!"
                    ]
                }
            ],
            "affiliates": [
                29,
                {
                    "accountId": [
                        234,
                        "ID!"
                    ],
                    "input": [
                        31
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "RangeRule": {
            "highRange": [
                243
            ],
            "lowRange": [
                243
            ],
            "step": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "RangeRuleInput": {
            "highRange": [
                243
            ],
            "lowRange": [
                243
            ],
            "step": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "RegisterUserPaddleInput": {
            "saleId": [
                540
            ],
            "paddleIdentifier": [
                540
            ],
            "type": [
                348
            ],
            "email": [
                540
            ],
            "firstName": [
                540
            ],
            "lastName": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RejectSaleRegistrationInput": {
            "registrationId": [
                540
            ],
            "reason": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveConsignmentStaffInput": {
            "consignmentId": [
                540
            ],
            "consignmentStaffUserIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveConsignorsInput": {
            "consignmentId": [
                540
            ],
            "consignorUserIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveDashboardUserRoleInput": {
            "userId": [
                540
            ],
            "role": [
                169
            ],
            "__typename": [
                540
            ]
        },
        "RemovePackagingInput": {
            "itemId": [
                540
            ],
            "packagingIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemovePaddleFromSaleInput": {
            "saleId": [
                540
            ],
            "paddleIdentifier": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveSaleItemInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveSpecificationsInput": {
            "itemId": [
                540
            ],
            "specificationIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveTagFromItemInput": {
            "itemId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveTagFromSaleItemInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RemoveTagFromUserInput": {
            "userId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RenameAttributionChannelInput": {
            "id": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RenameAttributionSourceInput": {
            "id": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ReorderHighlightedItemsInput": {
            "saleId": [
                540
            ],
            "itemIds": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ReorderImagesInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "imageType": [
                239
            ],
            "imageOrderChanges": [
                238
            ],
            "__typename": [
                540
            ]
        },
        "ReorderItemImages": {
            "itemId": [
                540
            ],
            "imageOrderChanges": [
                238
            ],
            "__typename": [
                540
            ]
        },
        "ReserveAutoBidMethod": {},
        "ReserveStatus": {},
        "ReserveType": {},
        "ResetSaleFeesInput": {
            "saleId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "RetryActionHookInput": {
            "id": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "RevokeApiKeyInput": {
            "apiKeyId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RevokeApiTokenInput": {
            "apiTokenId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "RotateSendGridNotificationIntegrationApiKeyInput": {
            "apiKey": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Sale": {
            "id": [
                234
            ],
            "cursor": [
                540
            ],
            "type": [
                471
            ],
            "accountId": [
                540
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "currency": [
                540
            ],
            "status": [
                470
            ],
            "saleFormat": [
                410
            ],
            "items": [
                434,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        420
                    ],
                    "order": [
                        269
                    ]
                }
            ],
            "incrementTable": [
                61
            ],
            "dates": [
                407
            ],
            "participants": [
                352,
                {
                    "take": [
                        243
                    ],
                    "cursor": [
                        540
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "sequenceNumber": [
                243
            ],
            "closingMethod": [
                106
            ],
            "closingTimeCountdown": [
                243
            ],
            "images": [
                235
            ],
            "themeType": [
                243
            ],
            "slug": [
                540
            ],
            "reserveAutoBidMethod": [
                395
            ],
            "isTestSale": [
                80
            ],
            "printedCatalogue": [
                80
            ],
            "workflowSchedule": [
                629
            ],
            "bastaBidClient": [
                80
            ],
            "hidden": [
                80
            ],
            "paddles": [
                346
            ],
            "liveStream": [
                213
            ],
            "liveVideoStream": [
                293
            ],
            "liveItem": [
                292,
                {
                    "itemOrderInput": [
                        269
                    ]
                }
            ],
            "saleBidsCounts": [
                243
            ],
            "sumOfHighestBids": [
                243
            ],
            "statistics": [
                452
            ],
            "bidRestrictions": [
                71
            ],
            "registrations": [
                447,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        448
                    ],
                    "direction": [
                        350
                    ],
                    "sortByField": [
                        444
                    ]
                }
            ],
            "registrationPolicies": [
                440,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "last": [
                        243
                    ],
                    "before": [
                        540
                    ]
                }
            ],
            "orders": [
                338,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "before": [
                        540
                    ],
                    "last": [
                        243
                    ]
                }
            ],
            "externalId": [
                540
            ],
            "location": [
                540
            ],
            "metafields": [
                304,
                {
                    "input": [
                        227,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                304,
                {
                    "input": [
                        226,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "highlighted": [
                230
            ],
            "saleItemClosingSchedule": [
                417
            ],
            "feeRules": [
                218
            ],
            "hasDefaultSaleFees": [
                80
            ],
            "watchlist": [
                475,
                {
                    "input": [
                        478
                    ]
                }
            ],
            "categories": [
                86
            ],
            "departments": [
                189
            ],
            "saleGenre": [
                411
            ],
            "site": [
                532
            ],
            "viewingTimes": [
                540
            ],
            "buyersNotes": [
                540
            ],
            "feesApplyInfo": [
                540
            ],
            "saleContact": [
                168
            ],
            "sectionMarkers": [
                491
            ],
            "__typename": [
                540
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                403
            ],
            "on_SaleItem": [
                416
            ],
            "on_SaleLiveStreamUpdate": [
                436
            ],
            "on_Node": [
                309
            ],
            "on_SaleV2": [
                472
            ],
            "__typename": [
                540
            ]
        },
        "SaleBanner": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "status": [
                470
            ],
            "type": [
                471
            ],
            "currency": [
                540
            ],
            "closingMethod": [
                106
            ],
            "dates": [
                407
            ],
            "hidden": [
                80
            ],
            "slug": [
                540
            ],
            "createdTimestamp": [
                243
            ],
            "reserveAutoBidMethod": [
                395
            ],
            "bastaBidClient": [
                80
            ],
            "images": [
                235
            ],
            "externalId": [
                540
            ],
            "location": [
                540
            ],
            "isTestSale": [
                80
            ],
            "statistics": [
                452
            ],
            "__typename": [
                540
            ]
        },
        "SaleConnection": {
            "edges": [
                481
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleDates": {
            "closingDate": [
                540
            ],
            "openDate": [
                540
            ],
            "liveDate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleDatesInput": {
            "closingDate": [
                540
            ],
            "openDate": [
                540
            ],
            "liveDate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleFilter": {
            "statuses": [
                470
            ],
            "showTestSales": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SaleFormat": {},
        "SaleGenre": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "archivedAt": [
                540
            ],
            "isPublic": [
                80
            ],
            "charges": [
                96,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "options": [
                        99
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "SaleGenreConnection": {
            "edges": [
                413
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleGenreEdge": {
            "node": [
                411
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleIDType": {},
        "SaleImageAssociation": {
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleItem": {
            "id": [
                234
            ],
            "cursor": [
                540
            ],
            "accountId": [
                540
            ],
            "title": [
                540
            ],
            "subTitle": [
                540
            ],
            "totalBids": [
                243
            ],
            "description": [
                540
            ],
            "titleTemplateOverride": [
                540
            ],
            "subTitleTemplateOverride": [
                540
            ],
            "descriptionTemplateOverride": [
                540
            ],
            "currentBid": [
                243
            ],
            "currentMaxBid": [
                243
            ],
            "currency": [
                540
            ],
            "leaderId": [
                540
            ],
            "saleId": [
                540
            ],
            "bids": [
                59,
                {
                    "collapseSequentialUserBids": [
                        80
                    ]
                }
            ],
            "reserve": [
                243
            ],
            "startingBid": [
                243
            ],
            "incrementTable": [
                61
            ],
            "status": [
                279
            ],
            "estimates": [
                212
            ],
            "itemNumber": [
                243
            ],
            "dates": [
                248
            ],
            "allowedBidTypes": [
                74
            ],
            "images": [
                235
            ],
            "slug": [
                540
            ],
            "paymentOrder": [
                359
            ],
            "paymentOrders": [
                359
            ],
            "hidden": [
                80
            ],
            "nextAsks": [
                243,
                {
                    "iterations": [
                        243
                    ]
                }
            ],
            "reserveMet": [
                80
            ],
            "notifications": [
                264
            ],
            "tags": [
                540
            ],
            "tagsV2": [
                549
            ],
            "reserveStatus": [
                396
            ],
            "itemResult": [
                274
            ],
            "reserveType": [
                397
            ],
            "externalId": [
                540
            ],
            "displayNumber": [
                540
            ],
            "highlight": [
                251
            ],
            "metadata": [
                259
            ],
            "itemType": [
                280
            ],
            "effectiveSchema": [
                286
            ],
            "type": [
                280
            ],
            "schema": [
                286
            ],
            "schemaId": [
                234
            ],
            "schemaData": [
                286
            ],
            "attributes": [
                286
            ],
            "closingTimeCountdown": [
                243
            ],
            "specifications": [
                277
            ],
            "specificationsV2": [
                277
            ],
            "packaging": [
                270
            ],
            "registrations": [
                428,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "filter": [
                        427
                    ]
                }
            ],
            "feeRules": [
                218
            ],
            "location": [
                540
            ],
            "site": [
                532
            ],
            "siteLocation": [
                296
            ],
            "consignment": [
                108
            ],
            "metafields": [
                304,
                {
                    "input": [
                        227,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                304,
                {
                    "input": [
                        226,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "watchlist": [
                430,
                {
                    "input": [
                        433
                    ]
                }
            ],
            "categories": [
                86
            ],
            "creators": [
                162
            ],
            "arr": [
                80
            ],
            "offerConfig": [
                266
            ],
            "offers": [
                331,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "status": [
                        330
                    ],
                    "direction": [
                        350
                    ]
                }
            ],
            "buyNowConfig": [
                247
            ],
            "directSell": [
                193
            ],
            "charges": [
                96,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "options": [
                        99
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemClosingSchedule": {
            "type": [
                419
            ],
            "staggered": [
                537
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemClosingScheduleInput": {
            "type": [
                419
            ],
            "staggered": [
                538
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemClosingScheduleType": {},
        "SaleItemFilter": {
            "statuses": [
                279
            ],
            "showHiddenItems": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemImageAssociation": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemInput": {
            "saleId": [
                540
            ],
            "bidIncrementTable": [
                62
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "startingBid": [
                243
            ],
            "valuationAmount": [
                243
            ],
            "valuationCurrency": [
                540
            ],
            "reserve": [
                243
            ],
            "lowEstimate": [
                243
            ],
            "highEstimate": [
                243
            ],
            "ItemNumber": [
                243
            ],
            "allowedBidTypes": [
                74
            ],
            "openDate": [
                540
            ],
            "closingDate": [
                540
            ],
            "slug": [
                540
            ],
            "closingTimeCountdown": [
                243
            ],
            "hidden": [
                80
            ],
            "tags": [
                540
            ],
            "specifications": [
                278
            ],
            "externalId": [
                540
            ],
            "displayNumber": [
                540
            ],
            "highlight": [
                252
            ],
            "metafields": [
                306
            ],
            "reserveType": [
                397
            ],
            "schemaId": [
                234
            ],
            "schemaData": [
                286
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemLink": {
            "saleId": [
                234
            ],
            "saleItemId": [
                234
            ],
            "saleTitle": [
                540
            ],
            "saleStatus": [
                470
            ],
            "itemNumber": [
                243
            ],
            "displayNumber": [
                540
            ],
            "saleItemStatus": [
                279
            ],
            "saleItemTitle": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemOrItem": {
            "on_SaleItem": [
                416
            ],
            "on_Item": [
                245
            ],
            "on_Node": [
                309
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemRegistration": {
            "id": [
                234
            ],
            "saleRegistration": [
                438
            ],
            "saleItem": [
                416
            ],
            "createdAt": [
                540
            ],
            "preferredPhoneNumber": [
                364
            ],
            "alternativePhoneNumbers": [
                364
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemRegistrationEdge": {
            "node": [
                425
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemRegistrationFilter": {
            "types": [
                446
            ],
            "userId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemRegistrationsConnection": {
            "edges": [
                426
            ],
            "pageInfo": [
                349
            ],
            "totalCount": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemSlug": {
            "id": [
                234
            ],
            "slug": [
                540
            ],
            "accountHandle": [
                540
            ],
            "accountId": [
                540
            ],
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "sale": [
                403
            ],
            "saleItem": [
                416
            ],
            "account": [
                1
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemWatchlistConnection": {
            "edges": [
                431
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemWatchlistEdge": {
            "cursor": [
                540
            ],
            "node": [
                432
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemWatchlistEntry": {
            "id": [
                234
            ],
            "userId": [
                540
            ],
            "createdAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemWatchlistInput": {
            "first": [
                243
            ],
            "after": [
                540
            ],
            "direction": [
                350
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemsConnection": {
            "edges": [
                435
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleItemsEdge": {
            "cursor": [
                540
            ],
            "node": [
                416
            ],
            "__typename": [
                540
            ]
        },
        "SaleLiveStreamUpdate": {
            "currentViewers": [
                243
            ],
            "observedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleMetrics": {
            "totalItems": [
                243
            ],
            "itemsOverReserve": [
                243
            ],
            "itemsWithBids": [
                243
            ],
            "totalBids": [
                243
            ],
            "uniqueBidders": [
                243
            ],
            "highEstimateSum": [
                243
            ],
            "lowEstimateSum": [
                243
            ],
            "currentBidOverReserveTotal": [
                243
            ],
            "currentBidTotal": [
                243
            ],
            "maxBidsTotal": [
                243
            ],
            "itemsOverReservePercentage": [
                222
            ],
            "itemsWithBidsPercentage": [
                222
            ],
            "averageBidsPerItem": [
                222
            ],
            "hiddenItems": [
                243
            ],
            "highestBid": [
                229
            ],
            "bidderEngagement": [
                222
            ],
            "dailyBidCounts": [
                451
            ],
            "calculatedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistration": {
            "id": [
                234
            ],
            "account": [
                1
            ],
            "sale": [
                403
            ],
            "userId": [
                540
            ],
            "type": [
                446
            ],
            "identifier": [
                540
            ],
            "status": [
                445
            ],
            "rejectedReason": [
                540
            ],
            "createdAt": [
                540
            ],
            "userProfile": [
                606
            ],
            "policyResults": [
                443
            ],
            "preferredPhoneNumber": [
                364
            ],
            "alternativePhoneNumbers": [
                364
            ],
            "itemRegistrations": [
                428
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationEdge": {
            "node": [
                438
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationPoliciesConnection": {
            "edges": [
                442
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationPolicy": {
            "id": [
                234
            ],
            "code": [
                540
            ],
            "description": [
                540
            ],
            "rule": [
                540
            ],
            "isDefault": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationPolicyEdge": {
            "node": [
                441
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationPolicyResult": {
            "code": [
                540
            ],
            "passed": [
                80
            ],
            "description": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationSortByField": {},
        "SaleRegistrationStatus": {},
        "SaleRegistrationType": {},
        "SaleRegistrationsConnection": {
            "edges": [
                439
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationsForSaleFilter": {
            "types": [
                446
            ],
            "statuses": [
                445
            ],
            "userId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleRegistrationsQueryFilter": {
            "saleIds": [
                540
            ],
            "userIds": [
                540
            ],
            "types": [
                446
            ],
            "statuses": [
                445
            ],
            "__typename": [
                540
            ]
        },
        "SaleSlug": {
            "id": [
                234
            ],
            "slug": [
                540
            ],
            "accountHandle": [
                540
            ],
            "accountId": [
                540
            ],
            "saleId": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "sale": [
                403
            ],
            "account": [
                1
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatisticBidCounts": {
            "date": [
                540
            ],
            "bidCount": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatistics": {
            "saleMetrics": [
                437
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsBidderEngagement": {
            "lotCount": [
                243
            ],
            "avgUniqueBiddersPerLot": [
                222
            ],
            "maxUniqueBiddersPerLot": [
                243
            ],
            "avgBidsPerLot": [
                222
            ],
            "caveats": [
                540
            ],
            "dayOfYearCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsClosingDayProfile": {
            "rows": [
                455
            ],
            "caveats": [
                540
            ],
            "dayOfYearCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsClosingDayRow": {
            "dayOfWeek": [
                243
            ],
            "lotCount": [
                243
            ],
            "avgBidsPerLot": [
                222
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsDataCoverage": {
            "hasData": [
                80
            ],
            "minDateKey": [
                243
            ],
            "maxDateKey": [
                243
            ],
            "lotCount": [
                243
            ],
            "distinctCurrencies": [
                243
            ],
            "lastProjectedAt": [
                540
            ],
            "backfillDone": [
                80
            ],
            "caveats": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsDistinctWinners": {
            "rows": [
                458
            ],
            "caveats": [
                540
            ],
            "dayOfYearCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsDistinctWinnersRow": {
            "currency": [
                540
            ],
            "distinctWinners": [
                243
            ],
            "repeatWinners": [
                243
            ],
            "repeatBuyerShare": [
                222
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsGmvPoint": {
            "currency": [
                540
            ],
            "year": [
                243
            ],
            "gmv": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsHammerVsEstimate": {
            "rows": [
                461
            ],
            "caveats": [
                540
            ],
            "dayOfYearCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsHammerVsEstimateRow": {
            "currency": [
                540
            ],
            "scoredLots": [
                243
            ],
            "totalHammer": [
                243
            ],
            "totalMidEstimate": [
                243
            ],
            "avgHammerToMidRatio": [
                222
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsLotOutcomeRow": {
            "currency": [
                540
            ],
            "sold": [
                243
            ],
            "unsold": [
                243
            ],
            "total": [
                243
            ],
            "sellThrough": [
                222
            ],
            "reserveMetRate": [
                222
            ],
            "soldViaAuction": [
                243
            ],
            "soldViaOffer": [
                243
            ],
            "soldViaBuyNow": [
                243
            ],
            "auctionShare": [
                222
            ],
            "offerShare": [
                222
            ],
            "buyNowShare": [
                222
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsLotOutcomeSummary": {
            "rows": [
                462
            ],
            "caveats": [
                540
            ],
            "dayOfYearCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsMomGmv": {
            "rows": [
                465
            ],
            "caveats": [
                540
            ],
            "dayOfMonthCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsMonthlyGmvPoint": {
            "currency": [
                540
            ],
            "year": [
                243
            ],
            "month": [
                243
            ],
            "gmv": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsSellThrough": {
            "sold": [
                243
            ],
            "total": [
                243
            ],
            "sellThrough": [
                222
            ],
            "caveats": [
                540
            ],
            "dayOfYearCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsTopSaleRow": {
            "currency": [
                540
            ],
            "rank": [
                243
            ],
            "saleId": [
                234
            ],
            "title": [
                540
            ],
            "gmv": [
                243
            ],
            "sold": [
                243
            ],
            "total": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsTopSales": {
            "rows": [
                467
            ],
            "caveats": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatsYoyGmv": {
            "rows": [
                459
            ],
            "caveats": [
                540
            ],
            "dayOfYearCutoff": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SaleStatus": {},
        "SaleType": {},
        "SaleV2": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "currency": [
                540
            ],
            "status": [
                470
            ],
            "dates": [
                407
            ],
            "saleFormat": [
                410
            ],
            "on_DutchSale": [
                206
            ],
            "on_Sale": [
                403
            ],
            "__typename": [
                540
            ]
        },
        "SaleV2Connection": {
            "edges": [
                474
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleV2Edge": {
            "cursor": [
                540
            ],
            "node": [
                472
            ],
            "__typename": [
                540
            ]
        },
        "SaleWatchlistConnection": {
            "edges": [
                476
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SaleWatchlistEdge": {
            "cursor": [
                540
            ],
            "node": [
                477
            ],
            "__typename": [
                540
            ]
        },
        "SaleWatchlistEntry": {
            "id": [
                234
            ],
            "userId": [
                540
            ],
            "createdAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SaleWatchlistInput": {
            "first": [
                243
            ],
            "after": [
                540
            ],
            "direction": [
                350
            ],
            "__typename": [
                540
            ]
        },
        "SalesAggregate": {
            "open": [
                243
            ],
            "closing": [
                243
            ],
            "closed": [
                243
            ],
            "published": [
                243
            ],
            "unpublished": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SalesAggregateInput": {
            "accountId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SalesEdge": {
            "cursor": [
                540
            ],
            "node": [
                403
            ],
            "__typename": [
                540
            ]
        },
        "ScheduledNotificationConfiguration": {
            "channel": [
                314
            ],
            "status": [
                316
            ],
            "audienceGroups": [
                311
            ],
            "leadTimes": [
                321
            ],
            "sender": [
                317
            ],
            "replyToEmail": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ScheduledNotificationConfigurationInput": {
            "audienceGroups": [
                311
            ],
            "leadTimes": [
                322
            ],
            "sender": [
                318
            ],
            "replyToEmail": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SchemaNamespace": {
            "namespace": [
                540
            ],
            "accountId": [
                540
            ],
            "createdAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SearchKey": {
            "key": [
                540
            ],
            "collections": [
                540
            ],
            "expiration": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SearchPageInfo": {
            "currentPage": [
                243
            ],
            "perPage": [
                243
            ],
            "totalPages": [
                243
            ],
            "totalCount": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "SearchResultConnection": {
            "edges": [
                488
            ],
            "pageInfo": [
                486
            ],
            "resultCount": [
                243
            ],
            "facets": [
                214
            ],
            "__typename": [
                540
            ]
        },
        "SearchResultEdge": {
            "node": [
                489
            ],
            "__typename": [
                540
            ]
        },
        "SearchResultItem": {
            "on_User": [
                595
            ],
            "on_SaleRegistration": [
                438
            ],
            "on_SaleItem": [
                416
            ],
            "on_SaleBanner": [
                405
            ],
            "on_Item": [
                245
            ],
            "on_Offer": [
                326
            ],
            "on_Image": [
                235
            ],
            "on_Video": [
                624
            ],
            "on_Document": [
                196
            ],
            "on_Activity": [
                13
            ],
            "on_Node": [
                309
            ],
            "on_Asset": [
                49
            ],
            "__typename": [
                540
            ]
        },
        "SearchType": {},
        "SectionMarker": {
            "id": [
                234
            ],
            "title": [
                540
            ],
            "summary": [
                540
            ],
            "fromItemNumber": [
                243
            ],
            "toItemNumber": [
                243
            ],
            "imageAssetId": [
                540
            ],
            "imageUrl": [
                540
            ],
            "isFeaturedSelection": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SellLiveItemInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "transitionToUpcomingLot": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SellLiveItemToBidError": {
            "error": [
                540
            ],
            "errorCode": [
                494
            ],
            "__typename": [
                540
            ]
        },
        "SellLiveItemToBidErrorCode": {},
        "SellLiveItemToBidInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "bidId": [
                540
            ],
            "transitionToUpcomingLot": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SellLiveItemToBidResult": {
            "on_SellLiveItemToBidSuccess": [
                497
            ],
            "on_SellLiveItemToBidError": [
                493
            ],
            "__typename": [
                540
            ]
        },
        "SellLiveItemToBidSuccess": {
            "saleItem": [
                416
            ],
            "__typename": [
                540
            ]
        },
        "SellerLocation": {},
        "SellerTerms": {
            "accepted_by": [
                540
            ],
            "accepted_date": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SendGridNotificationIntegration": {
            "channel": [
                314
            ],
            "created": [
                540
            ],
            "timezone": [
                540
            ],
            "fromEmail": [
                540
            ],
            "fromName": [
                540
            ],
            "replyToEmail": [
                540
            ],
            "accountNotificationEmail": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetArrBandsInput": {
            "currency": [
                166
            ],
            "bands": [
                47
            ],
            "__typename": [
                540
            ]
        },
        "SetChargeAtScopeInput": {
            "chargeId": [
                234
            ],
            "scope": [
                101
            ],
            "basedOn": [
                94
            ],
            "frequency": [
                98
            ],
            "outcome": [
                100
            ],
            "calculationType": [
                95
            ],
            "status": [
                103
            ],
            "minimum": [
                243
            ],
            "maximum": [
                243
            ],
            "bands": [
                92
            ],
            "__typename": [
                540
            ]
        },
        "SetChargeBandsInput": {
            "chargeId": [
                234
            ],
            "bands": [
                92
            ],
            "__typename": [
                540
            ]
        },
        "SetChargeStatusInput": {
            "chargeId": [
                234
            ],
            "status": [
                103
            ],
            "__typename": [
                540
            ]
        },
        "SetConsignmentStaffLeadInput": {
            "consignmentId": [
                540
            ],
            "consignmentStaffUserId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetItemArrInput": {
            "itemId": [
                234
            ],
            "arr": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SetItemBuyNowConfigInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "enabled": [
                80
            ],
            "price": [
                243
            ],
            "currency": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetItemCategoriesInput": {
            "itemId": [
                234
            ],
            "categoryIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "SetItemConsignmentInput": {
            "itemId": [
                540
            ],
            "consignmentId": [
                540
            ],
            "reassign": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SetItemCreatorsInput": {
            "itemId": [
                234
            ],
            "creatorIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "SetItemOfferConfigInput": {
            "itemId": [
                540
            ],
            "enabled": [
                80
            ],
            "autoAcceptAmount": [
                243
            ],
            "autoAcceptCurrency": [
                540
            ],
            "clearAutoAccept": [
                80
            ],
            "offerTtlSeconds": [
                243
            ],
            "clearOfferTtl": [
                80
            ],
            "cancelPendingOffers": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SetItemSiteLocationInput": {
            "itemId": [
                540
            ],
            "siteId": [
                540
            ],
            "locationId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetItemWinnerInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "bidId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetMainConsignorInput": {
            "consignmentId": [
                540
            ],
            "consignorUserId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetMetafieldInput": {
            "entityType": [
                305
            ],
            "entityId": [
                540
            ],
            "key": [
                540
            ],
            "value": [
                540
            ],
            "valueType": [
                307
            ],
            "__typename": [
                540
            ]
        },
        "SetNotificationConfigurationInput": {
            "event": [
                319
            ],
            "audience": [
                310
            ],
            "channel": [
                314
            ],
            "instant": [
                242
            ],
            "scheduled": [
                483
            ],
            "__typename": [
                540
            ]
        },
        "SetNotificationConfigurationStatusInput": {
            "event": [
                319
            ],
            "audience": [
                310
            ],
            "channel": [
                314
            ],
            "status": [
                316
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleCategoriesInput": {
            "saleId": [
                234
            ],
            "categoryIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleItemArrInput": {
            "saleId": [
                234
            ],
            "itemId": [
                234
            ],
            "arr": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleItemCategoriesInput": {
            "saleId": [
                234
            ],
            "itemId": [
                234
            ],
            "categoryIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleItemCreatorsInput": {
            "saleId": [
                234
            ],
            "itemId": [
                234
            ],
            "creatorIds": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleItemSlugInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "slug": [
                540
            ],
            "overrideOnConflict": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleItemStatusInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "status": [
                279
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleSlugInput": {
            "saleId": [
                540
            ],
            "slug": [
                540
            ],
            "overrideOnConflict": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SetSaleStatusInput": {
            "saleId": [
                540
            ],
            "status": [
                470
            ],
            "__typename": [
                540
            ]
        },
        "SetSectionMarkerInput": {
            "id": [
                234
            ],
            "title": [
                540
            ],
            "summary": [
                540
            ],
            "fromItemNumber": [
                243
            ],
            "toItemNumber": [
                243
            ],
            "imageAssetId": [
                540
            ],
            "isFeaturedSelection": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SetUserExternalIdInput": {
            "id": [
                540
            ],
            "externalId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetUserIdOnBidInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "bidId": [
                540
            ],
            "userId": [
                540
            ],
            "bidOrigin": [
                66
            ],
            "registrationId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SetWorkflowScheduleOffsetsInput": {
            "rows": [
                634
            ],
            "__typename": [
                540
            ]
        },
        "ShopifyConfiguration": {
            "shopId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "ShopifyConnection": {
            "accountId": [
                540
            ],
            "shopId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Site": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "name": [
                540
            ],
            "addressLine1": [
                540
            ],
            "addressLine2": [
                540
            ],
            "addressCity": [
                540
            ],
            "addressPostalCode": [
                540
            ],
            "addressCountryIso": [
                540
            ],
            "addressState": [
                540
            ],
            "phone": [
                540
            ],
            "email": [
                540
            ],
            "openingHours": [
                540
            ],
            "collectionInstructions": [
                540
            ],
            "appointmentRequired": [
                80
            ],
            "timezone": [
                540
            ],
            "archivedAt": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "createdByUserId": [
                540
            ],
            "modifiedByUserId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SiteConnection": {
            "edges": [
                534
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "SiteEdge": {
            "cursor": [
                540
            ],
            "node": [
                532
            ],
            "__typename": [
                540
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "StaggeredSaleItemScheduleConfiguration": {
            "firstItemClosingDate": [
                540
            ],
            "spacingMs": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "StaggeredSaleItemScheduleConfigurationInput": {
            "firstItemClosingDate": [
                540
            ],
            "spacingMs": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "StartClosingSaleInput": {
            "saleId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "String": {},
        "StripeAppCustomerDetailsInput": {
            "id": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "StripeCustomerDetailsInput": {
            "id": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "StripePaymentProviderSession": {
            "publishableKey": [
                540
            ],
            "clientSecret": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "Subscription": {
            "saleActivity": [
                404,
                {
                    "accountId": [
                        540,
                        "String!"
                    ],
                    "saleId": [
                        234,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        253
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "SyncContentInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "direction": [
                121
            ],
            "keys": [
                540
            ],
            "deleteKeys": [
                540
            ],
            "syncSchemaId": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SyncSchemaDataFromSaleItemInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "keys": [
                540
            ],
            "deleteKeys": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "SyncSchemaDataToProductVariantInput": {
            "variantId": [
                540
            ],
            "keys": [
                540
            ],
            "deleteKeys": [
                540
            ],
            "syncSchemaId": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "SyncSchemaDataToSaleItemInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "keys": [
                540
            ],
            "deleteKeys": [
                540
            ],
            "syncSchemaId": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "Tag": {
            "id": [
                234
            ],
            "name": [
                540
            ],
            "created": [
                540
            ],
            "associated": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "TestActionHookResponse": {
            "requestHeaders": [
                232
            ],
            "requestPayload": [
                540
            ],
            "requestMethod": [
                540
            ],
            "responseHeaders": [
                232
            ],
            "responseBody": [
                540
            ],
            "statusCode": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "Time": {},
        "TokenMetadata": {
            "userId": [
                540
            ],
            "ttl": [
                243
            ],
            "permissions": [
                104
            ],
            "__typename": [
                540
            ]
        },
        "TrustLevel": {},
        "TrustLevelInfo": {
            "level": [
                553
            ],
            "modifiedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "TrustLevelInput": {
            "level": [
                553
            ],
            "__typename": [
                540
            ]
        },
        "TwilioNotificationIntegration": {
            "channel": [
                314
            ],
            "created": [
                540
            ],
            "timezone": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UnblockUserInput": {
            "userId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UnhideItemsFromSaleInput": {
            "saleId": [
                540
            ],
            "includingAndFromItemNumber": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "UpdateAccountFeeInput": {
            "id": [
                540
            ],
            "name": [
                540
            ],
            "type": [
                3
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "__typename": [
                540
            ]
        },
        "UpdateAccountInput": {
            "name": [
                540
            ],
            "email": [
                540
            ],
            "handle": [
                540
            ],
            "description": [
                540
            ],
            "links": [
                290
            ],
            "generateNewHandle": [
                80
            ],
            "enableBastaStreaming": [
                80
            ],
            "preferredAuctionFormat": [
                471
            ],
            "defaultCurrency": [
                166
            ],
            "homeCountryCode": [
                123
            ],
            "organisationDetails": [
                345
            ],
            "defaultStartBidPercentage": [
                222
            ],
            "__typename": [
                540
            ]
        },
        "UpdateActionHookSubscriptionInput": {
            "id": [
                234
            ],
            "url": [
                540
            ],
            "headers": [
                233
            ],
            "__typename": [
                540
            ]
        },
        "UpdateAffiliateInput": {
            "firstName": [
                540
            ],
            "lastName": [
                540
            ],
            "email": [
                540
            ],
            "token": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateArrSettingsInput": {
            "currency": [
                166
            ],
            "enabled": [
                80
            ],
            "thresholdAmount": [
                243
            ],
            "capAmount": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "UpdateCategoryInput": {
            "categoryId": [
                234
            ],
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateChargeInput": {
            "chargeId": [
                234
            ],
            "name": [
                540
            ],
            "basedOn": [
                94
            ],
            "frequency": [
                98
            ],
            "outcome": [
                100
            ],
            "calculationType": [
                95
            ],
            "minimum": [
                243
            ],
            "maximum": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "UpdateConsignmentInput": {
            "consignmentId": [
                540
            ],
            "name": [
                540
            ],
            "description": [
                540
            ],
            "externalId": [
                540
            ],
            "feeRules": [
                111
            ],
            "__typename": [
                540
            ]
        },
        "UpdateCreatorInput": {
            "creatorId": [
                234
            ],
            "name": [
                540
            ],
            "slug": [
                540
            ],
            "type": [
                165
            ],
            "arr": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "UpdateDutchSaleInput": {
            "saleId": [
                540
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateDutchSaleItemInput": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "schedule": [
                211
            ],
            "openTime": [
                540
            ],
            "closingTime": [
                540
            ],
            "availableUnits": [
                243
            ],
            "title": [
                540
            ],
            "subTitle": [
                540
            ],
            "description": [
                540
            ],
            "titleTemplateOverride": [
                540
            ],
            "subTitleTemplateOverride": [
                540
            ],
            "descriptionTemplateOverride": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateGlobalClosingTimeCountdownInput": {
            "saleId": [
                540
            ],
            "closingTimeCountdown": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "UpdateGlobalDatesInput": {
            "saleId": [
                540
            ],
            "openDate": [
                540
            ],
            "closingDate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateGlobalIncrementTableInput": {
            "saleId": [
                540
            ],
            "incrementTable": [
                62
            ],
            "__typename": [
                540
            ]
        },
        "UpdateItemInput": {
            "title": [
                540
            ],
            "subTitle": [
                540
            ],
            "description": [
                540
            ],
            "titleTemplateOverride": [
                540
            ],
            "subTitleTemplateOverride": [
                540
            ],
            "descriptionTemplateOverride": [
                540
            ],
            "price": [
                273
            ],
            "externalId": [
                540
            ],
            "metadata": [
                260
            ],
            "tags": [
                540
            ],
            "specifications": [
                278
            ],
            "valuationAmount": [
                243
            ],
            "valuationCurrency": [
                540
            ],
            "location": [
                540
            ],
            "syncContentToActiveSaleItems": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "UpdateItemNumbersInput": {
            "saleId": [
                540
            ],
            "itemNumberChanges": [
                265
            ],
            "__typename": [
                540
            ]
        },
        "UpdateItemTypeInput": {
            "name": [
                540
            ],
            "schema": [
                286
            ],
            "namespace": [
                540
            ],
            "titleTemplate": [
                540
            ],
            "subTitleTemplate": [
                540
            ],
            "descriptionTemplate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateLocationInput": {
            "locationId": [
                540
            ],
            "parentLocationId": [
                540
            ],
            "name": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateOrderInput": {
            "id": [
                234
            ],
            "title": [
                540
            ],
            "billingAddress": [
                300
            ],
            "shippingAddress": [
                300
            ],
            "__typename": [
                540
            ]
        },
        "UpdateOrderLineFeeInput": {
            "description": [
                540
            ],
            "amount": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "UpdateOrderLineInput": {
            "id": [
                234
            ],
            "orderId": [
                234
            ],
            "amount": [
                243
            ],
            "description": [
                540
            ],
            "fees": [
                578
            ],
            "__typename": [
                540
            ]
        },
        "UpdatePackagingInput": {
            "itemId": [
                540
            ],
            "packagingId": [
                540
            ],
            "quantity": [
                243
            ],
            "boxedHeight": [
                222
            ],
            "boxedLength": [
                222
            ],
            "boxedDepth": [
                222
            ],
            "boxedMeasurementUnit": [
                303
            ],
            "boxedWeight": [
                222
            ],
            "boxedWeightUnit": [
                625
            ],
            "__typename": [
                540
            ]
        },
        "UpdatePaymentOrderInput": {
            "orderId": [
                234
            ],
            "userId": [
                540
            ],
            "orderLines": [
                582
            ],
            "__typename": [
                540
            ]
        },
        "UpdatePaymentOrderLineInput": {
            "orderLineId": [
                234
            ],
            "amount": [
                243
            ],
            "description": [
                540
            ],
            "orderLineType": [
                342
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSaleFeeInput": {
            "id": [
                234
            ],
            "saleId": [
                234
            ],
            "name": [
                540
            ],
            "type": [
                220
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSaleInput": {
            "dates": [
                408
            ],
            "title": [
                540
            ],
            "description": [
                540
            ],
            "currency": [
                540
            ],
            "bidIncrementTable": [
                62
            ],
            "closingMethod": [
                106
            ],
            "closingTimeCountdown": [
                243
            ],
            "saleItemClosingSchedule": [
                418
            ],
            "themeType": [
                243
            ],
            "slug": [
                540
            ],
            "hidden": [
                80
            ],
            "liveStream": [
                294
            ],
            "saleType": [
                471
            ],
            "isTestSale": [
                80
            ],
            "printedCatalogue": [
                80
            ],
            "bidRestrictions": [
                72
            ],
            "externalId": [
                540
            ],
            "location": [
                540
            ],
            "metafields": [
                306
            ],
            "saleGenreId": [
                234
            ],
            "siteId": [
                234
            ],
            "viewingTimes": [
                540
            ],
            "buyersNotes": [
                540
            ],
            "feesApplyInfo": [
                540
            ],
            "saleContactUserId": [
                234
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSaleItemFeeInput": {
            "id": [
                234
            ],
            "saleId": [
                234
            ],
            "itemId": [
                234
            ],
            "name": [
                540
            ],
            "type": [
                220
            ],
            "value": [
                243
            ],
            "upperLteLimit": [
                243
            ],
            "lowerLimit": [
                243
            ],
            "calculationType": [
                217
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSaleItemInput": {
            "itemId": [
                540
            ],
            "saleId": [
                540
            ],
            "bidIncrementTable": [
                62
            ],
            "title": [
                540
            ],
            "subTitle": [
                540
            ],
            "description": [
                540
            ],
            "titleTemplateOverride": [
                540
            ],
            "subTitleTemplateOverride": [
                540
            ],
            "descriptionTemplateOverride": [
                540
            ],
            "startingBid": [
                243
            ],
            "valuationAmount": [
                243
            ],
            "valuationCurrency": [
                540
            ],
            "reserve": [
                243
            ],
            "lowEstimate": [
                243
            ],
            "highEstimate": [
                243
            ],
            "allowedBidTypes": [
                74
            ],
            "openDate": [
                540
            ],
            "closingDate": [
                540
            ],
            "slug": [
                540
            ],
            "hidden": [
                80
            ],
            "closingTimeCountdown": [
                243
            ],
            "tags": [
                540
            ],
            "specifications": [
                278
            ],
            "externalId": [
                540
            ],
            "displayNumber": [
                540
            ],
            "highlight": [
                252
            ],
            "metafields": [
                306
            ],
            "reserveType": [
                397
            ],
            "schemaId": [
                234
            ],
            "schemaData": [
                286
            ],
            "syncContent": [
                121
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSaleRegistrationPolicyInput": {
            "id": [
                540
            ],
            "code": [
                540
            ],
            "description": [
                540
            ],
            "rule": [
                540
            ],
            "isDefault": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSendGridNotificationIntegrationInput": {
            "fromEmail": [
                540
            ],
            "fromName": [
                540
            ],
            "replyToEmail": [
                540
            ],
            "accountNotificationEmail": [
                540
            ],
            "timezone": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSiteInput": {
            "siteId": [
                540
            ],
            "name": [
                540
            ],
            "addressLine1": [
                540
            ],
            "addressLine2": [
                540
            ],
            "addressCity": [
                540
            ],
            "addressPostalCode": [
                540
            ],
            "addressCountryIso": [
                540
            ],
            "addressState": [
                540
            ],
            "phone": [
                540
            ],
            "email": [
                540
            ],
            "openingHours": [
                540
            ],
            "collectionInstructions": [
                540
            ],
            "appointmentRequired": [
                80
            ],
            "timezone": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpdateSpecificationInput": {
            "itemId": [
                540
            ],
            "specificationId": [
                540
            ],
            "type": [
                536
            ],
            "subType": [
                535
            ],
            "height": [
                222
            ],
            "length": [
                222
            ],
            "depth": [
                222
            ],
            "diameter": [
                222
            ],
            "measurementUnit": [
                303
            ],
            "weight": [
                222
            ],
            "weightUnit": [
                625
            ],
            "quantity": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "UpdateUserInput": {
            "userId": [
                540
            ],
            "idType": [
                603
            ],
            "email": [
                540
            ],
            "firstName": [
                540
            ],
            "lastName": [
                540
            ],
            "username": [
                540
            ],
            "password": [
                540
            ],
            "passwordHash": [
                540
            ],
            "trustLevel": [
                555
            ],
            "addresses": [
                597
            ],
            "phones": [
                615
            ],
            "metadata": [
                607
            ],
            "idVerification": [
                604
            ],
            "status": [
                618
            ],
            "emailVerified": [
                80
            ],
            "role": [
                540
            ],
            "vip": [
                80
            ],
            "tags": [
                540
            ],
            "preferences": [
                616
            ],
            "paymentProviderDetails": [
                360
            ],
            "attributionChannelId": [
                540
            ],
            "attributionSourceId": [
                540
            ],
            "attributionSourceNote": [
                540
            ],
            "skipUpdateEvent": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "UploadUrl": {
            "imageId": [
                540
            ],
            "uploadUrl": [
                540
            ],
            "imageUrl": [
                540
            ],
            "headers": [
                232
            ],
            "order": [
                243
            ],
            "externalId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UpsertUserAddressInput": {
            "userId": [
                540
            ],
            "idType": [
                603
            ],
            "address": [
                597
            ],
            "__typename": [
                540
            ]
        },
        "UpsertUserPhoneInput": {
            "userId": [
                540
            ],
            "idType": [
                603
            ],
            "phone": [
                615
            ],
            "__typename": [
                540
            ]
        },
        "User": {
            "id": [
                234
            ],
            "accountId": [
                540
            ],
            "userId": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "profile": [
                606
            ],
            "tags": [
                549
            ],
            "blocked": [
                80
            ],
            "charges": [
                96,
                {
                    "first": [
                        243
                    ],
                    "after": [
                        540
                    ],
                    "options": [
                        99
                    ]
                }
            ],
            "__typename": [
                540
            ]
        },
        "UserAddress": {
            "id": [
                540
            ],
            "addressType": [
                27
            ],
            "line1": [
                540
            ],
            "line2": [
                540
            ],
            "city": [
                540
            ],
            "state": [
                540
            ],
            "postalCode": [
                540
            ],
            "country": [
                540
            ],
            "name": [
                540
            ],
            "company": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserAddressInput": {
            "id": [
                540
            ],
            "addressType": [
                27
            ],
            "isPrimary": [
                80
            ],
            "line1": [
                540
            ],
            "line2": [
                540
            ],
            "city": [
                540
            ],
            "state": [
                540
            ],
            "postalCode": [
                540
            ],
            "country": [
                540
            ],
            "name": [
                540
            ],
            "company": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserBidActivity": {
            "accountId": [
                540
            ],
            "bidId": [
                540
            ],
            "saleId": [
                540
            ],
            "sale": [
                403
            ],
            "itemId": [
                540
            ],
            "saleItem": [
                416
            ],
            "amount": [
                243
            ],
            "maxAmount": [
                243
            ],
            "userId": [
                540
            ],
            "date": [
                540
            ],
            "bidStatus": [
                73
            ],
            "bidSequenceNumber": [
                243
            ],
            "paddle": [
                346
            ],
            "__typename": [
                540
            ]
        },
        "UserBidActivityConnection": {
            "edges": [
                600
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "UserBidActivityEdge": {
            "cursor": [
                540
            ],
            "node": [
                598
            ],
            "__typename": [
                540
            ]
        },
        "UserBidActivityFilter": {
            "saleId": [
                540
            ],
            "itemId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserEdge": {
            "node": [
                595
            ],
            "cursor": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserIdType": {},
        "UserIdVerificationInput": {
            "verificationId": [
                540
            ],
            "verified": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "UserIdVerificationStatus": {
            "verificationId": [
                540
            ],
            "verified": [
                80
            ],
            "modifiedAt": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserInfo": {
            "userId": [
                540
            ],
            "identityProviderId": [
                540
            ],
            "status": [
                618
            ],
            "emailVerified": [
                80
            ],
            "name": [
                540
            ],
            "email": [
                540
            ],
            "role": [
                540
            ],
            "vip": [
                80
            ],
            "attributionChannelId": [
                540
            ],
            "attributionSourceId": [
                540
            ],
            "attributionSourceNote": [
                540
            ],
            "addresses": [
                596
            ],
            "addressesV2": [
                299
            ],
            "billingAddress": [
                299
            ],
            "shippingAddress": [
                299
            ],
            "paymentMethods": [
                358
            ],
            "paymentProviderDetails": [
                612
            ],
            "phones": [
                364
            ],
            "companyName": [
                540
            ],
            "salutation": [
                540
            ],
            "timezone": [
                540
            ],
            "nationality": [
                540
            ],
            "dateOfBirth": [
                540
            ],
            "preferredLanguage": [
                540
            ],
            "trustLevel": [
                554
            ],
            "idVerificationStatus": [
                605
            ],
            "username": [
                540
            ],
            "notificationSettings": [
                610
            ],
            "__typename": [
                540
            ]
        },
        "UserMetadataInput": {
            "dateOfBirth": [
                540
            ],
            "nationality": [
                540
            ],
            "preferredLanguage": [
                540
            ],
            "timezone": [
                540
            ],
            "companyName": [
                540
            ],
            "salutation": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserNotificationPreference": {
            "notification": [
                319
            ],
            "channel": [
                314
            ],
            "optedIn": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "UserNotificationPreferenceInput": {
            "notification": [
                319
            ],
            "channel": [
                314
            ],
            "optedIn": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "UserNotificationSettings": {
            "preferences": [
                608
            ],
            "__typename": [
                540
            ]
        },
        "UserNotificationsPreferenceInput": {
            "scheduled": [
                617
            ],
            "__typename": [
                540
            ]
        },
        "UserPaymentProviderDetails": {
            "id": [
                540
            ],
            "on_UserStripePaymentProviderDetails": [
                619
            ],
            "__typename": [
                540
            ]
        },
        "UserPaymentProviderSession": {
            "on_UserStripePaymentProviderSession": [
                620
            ],
            "__typename": [
                540
            ]
        },
        "UserPaymentProviderSessionInput": {
            "userId": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserPhoneInput": {
            "id": [
                540
            ],
            "phoneType": [
                366
            ],
            "isPrimary": [
                80
            ],
            "phoneNumber": [
                540
            ],
            "label": [
                540
            ],
            "verifiedAt": [
                551
            ],
            "__typename": [
                540
            ]
        },
        "UserPreferenceInput": {
            "notifications": [
                611
            ],
            "__typename": [
                540
            ]
        },
        "UserScheduledNotificationsPreferenceInput": {
            "channels": [
                314
            ],
            "__typename": [
                540
            ]
        },
        "UserStatus": {},
        "UserStripePaymentProviderDetails": {
            "id": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserStripePaymentProviderSession": {
            "publishableKey": [
                540
            ],
            "customerSessionClientSecret": [
                540
            ],
            "setupIntentClientSecret": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserToken": {
            "token": [
                540
            ],
            "expirationDate": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "UserTokenInput": {
            "userID": [
                540
            ],
            "ttlMinutes": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "UsersConnection": {
            "edges": [
                602
            ],
            "pageInfo": [
                349
            ],
            "__typename": [
                540
            ]
        },
        "Video": {
            "id": [
                540
            ],
            "accountId": [
                540
            ],
            "url": [
                540
            ],
            "contentType": [
                540
            ],
            "size": [
                243
            ],
            "filename": [
                540
            ],
            "externalId": [
                540
            ],
            "created": [
                540
            ],
            "modified": [
                540
            ],
            "__typename": [
                540
            ]
        },
        "WeightUnit": {},
        "WorkflowDateType": {},
        "WorkflowDimensionOffset": {
            "dimension": [
                631
            ],
            "offsetDays": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "WorkflowDimensionOffsetInput": {
            "dimension": [
                631
            ],
            "offsetDays": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "WorkflowScheduleDate": {
            "dateType": [
                626
            ],
            "effectiveDate": [
                540
            ],
            "source": [
                630
            ],
            "dimension": [
                631
            ],
            "offsetDays": [
                243
            ],
            "__typename": [
                540
            ]
        },
        "WorkflowScheduleDateSource": {},
        "WorkflowScheduleDimension": {},
        "WorkflowScheduleOffsets": {
            "rows": [
                633
            ],
            "__typename": [
                540
            ]
        },
        "WorkflowScheduleRow": {
            "dateType": [
                626
            ],
            "enabled": [
                80
            ],
            "sortOrder": [
                243
            ],
            "offsets": [
                627
            ],
            "modified": [
                80
            ],
            "__typename": [
                540
            ]
        },
        "WorkflowScheduleRowInput": {
            "dateType": [
                626
            ],
            "enabled": [
                80
            ],
            "sortOrder": [
                243
            ],
            "offsets": [
                628
            ],
            "__typename": [
                540
            ]
        }
    }
}