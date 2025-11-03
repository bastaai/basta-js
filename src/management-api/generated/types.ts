export default {
    "scalars": [
        2,
        7,
        10,
        18,
        25,
        30,
        34,
        38,
        41,
        45,
        46,
        51,
        55,
        57,
        72,
        83,
        89,
        92,
        93,
        108,
        115,
        119,
        122,
        126,
        128,
        138,
        139,
        142,
        144,
        150,
        153,
        154,
        167,
        168,
        185,
        186,
        192,
        200,
        201,
        203,
        229
    ],
    "types": {
        "Account": {
            "id": [
                89
            ],
            "name": [
                203
            ],
            "email": [
                203
            ],
            "created": [
                203
            ],
            "modified": [
                203
            ],
            "handle": [
                203
            ],
            "description": [
                203
            ],
            "imageUrl": [
                203
            ],
            "links": [
                120
            ],
            "paymentDetails": [
                151
            ],
            "bastaBidClient": [
                51
            ],
            "terms": [
                193
            ],
            "itemSchema": [
                119
            ],
            "bastaLiveStreamEnabled": [
                51
            ],
            "shopifyConfiguration": [
                198
            ],
            "aggregators": [
                19
            ],
            "__typename": [
                203
            ]
        },
        "AccountFee": {
            "id": [
                89
            ],
            "name": [
                203
            ],
            "type": [
                2
            ],
            "value": [
                93
            ],
            "upperLteLimit": [
                93
            ],
            "lowerLimit": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "AccountFeeType": {},
        "ActionHookFilter": {
            "types": [
                10
            ],
            "statuses": [
                7
            ],
            "__typename": [
                203
            ]
        },
        "ActionHookLog": {
            "id": [
                89
            ],
            "accountId": [
                203
            ],
            "idempotencyKey": [
                203
            ],
            "action": [
                10
            ],
            "url": [
                203
            ],
            "headers": [
                87
            ],
            "requestPayload": [
                203
            ],
            "response": [
                203
            ],
            "status": [
                7
            ],
            "error": [
                203
            ],
            "retries": [
                93
            ],
            "createdAt": [
                203
            ],
            "executedAt": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ActionHookLogConnection": {
            "edges": [
                6
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "ActionHookLogEdge": {
            "cursor": [
                203
            ],
            "node": [
                4
            ],
            "__typename": [
                203
            ]
        },
        "ActionHookStatus": {},
        "ActionHookSubscription": {
            "accountId": [
                203
            ],
            "action": [
                10
            ],
            "url": [
                203
            ],
            "headers": [
                87
            ],
            "__typename": [
                203
            ]
        },
        "ActionHookSubscriptionInput": {
            "action": [
                10
            ],
            "url": [
                203
            ],
            "headers": [
                88
            ],
            "__typename": [
                203
            ]
        },
        "ActionType": {},
        "AddFairWarningNotificationToItemInput": {
            "itemId": [
                203
            ],
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "AddItemToSaleInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "bidIncrementTable": [
                36
            ],
            "startingBid": [
                93
            ],
            "reserve": [
                93
            ],
            "lowEstimate": [
                93
            ],
            "highEstimate": [
                93
            ],
            "ItemNumber": [
                93
            ],
            "allowedBidTypes": [
                46
            ],
            "openDate": [
                203
            ],
            "closingDate": [
                203
            ],
            "hidden": [
                51
            ],
            "closingTimeCountdown": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "AddLiveStreamToSaleInput": {
            "saleId": [
                203
            ],
            "url": [
                203
            ],
            "type": [
                126
            ],
            "__typename": [
                203
            ]
        },
        "AddMessageNotificationToItemInput": {
            "itemId": [
                203
            ],
            "saleId": [
                203
            ],
            "message": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "AddPaddleToSaleInput": {
            "saleId": [
                203
            ],
            "paddleIdentifier": [
                203
            ],
            "userId": [
                203
            ],
            "type": [
                142
            ],
            "__typename": [
                203
            ]
        },
        "AddTagToItemInput": {
            "itemId": [
                203
            ],
            "name": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "AddTagToSaleItemInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "name": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "AddressType": {},
        "Aggregator": {
            "name": [
                203
            ],
            "type": [
                41
            ],
            "__typename": [
                203
            ]
        },
        "ApiKey": {
            "id": [
                89
            ],
            "name": [
                203
            ],
            "accountId": [
                203
            ],
            "created": [
                203
            ],
            "roles": [
                25
            ],
            "__typename": [
                203
            ]
        },
        "ApiKeyConnection": {
            "edges": [
                23
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "ApiKeyCreated": {
            "id": [
                89
            ],
            "name": [
                203
            ],
            "generatedApiKey": [
                203
            ],
            "roles": [
                25
            ],
            "__typename": [
                203
            ]
        },
        "ApiKeyEdge": {
            "cursor": [
                203
            ],
            "node": [
                20
            ],
            "__typename": [
                203
            ]
        },
        "ApiKeyInput": {
            "name": [
                203
            ],
            "role": [
                25
            ],
            "__typename": [
                203
            ]
        },
        "ApiKeyRole": {},
        "ApiToken": {
            "id": [
                89
            ],
            "name": [
                203
            ],
            "accountId": [
                203
            ],
            "created": [
                203
            ],
            "roles": [
                30
            ],
            "__typename": [
                203
            ]
        },
        "ApiTokenConnection": {
            "edges": [
                31
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "ApiTokenCreated": {
            "id": [
                89
            ],
            "name": [
                203
            ],
            "generatedApiKey": [
                203
            ],
            "roles": [
                30
            ],
            "__typename": [
                203
            ]
        },
        "ApiTokenInput": {
            "name": [
                203
            ],
            "role": [
                30
            ],
            "__typename": [
                203
            ]
        },
        "ApiTokenRole": {},
        "ApiTokensEdge": {
            "cursor": [
                203
            ],
            "node": [
                26
            ],
            "__typename": [
                203
            ]
        },
        "BastaLiveStream": {
            "optionAvailable": [
                51
            ],
            "publicUrl": [
                203
            ],
            "ingestUrl": [
                203
            ],
            "channelId": [
                203
            ],
            "streamKey": [
                203
            ],
            "isLive": [
                51
            ],
            "currentViewers": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "Bid": {
            "bidId": [
                203
            ],
            "saleId": [
                203
            ],
            "amount": [
                93
            ],
            "maxAmount": [
                93
            ],
            "userId": [
                203
            ],
            "user": [
                226
            ],
            "date": [
                203
            ],
            "bidStatus": [
                45
            ],
            "bidSequenceNumber": [
                93
            ],
            "bidderIdentifier": [
                203
            ],
            "paddle": [
                140
            ],
            "bidOrigin": [
                39
            ],
            "__typename": [
                203
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rules": [
                158
            ],
            "__typename": [
                203
            ]
        },
        "BidIncrementTableInput": {
            "rules": [
                159
            ],
            "__typename": [
                203
            ]
        },
        "BidOnBehalfInput": {
            "userId": [
                203
            ],
            "amount": [
                93
            ],
            "itemId": [
                203
            ],
            "saleId": [
                203
            ],
            "type": [
                46
            ],
            "bidOrigin": [
                40
            ],
            "__typename": [
                203
            ]
        },
        "BidOrderByField": {},
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                133
            ],
            "on_PaddleBidOrigin": [
                141
            ],
            "on_PhoneBidOrigin": [
                155
            ],
            "on_Aggregator": [
                19
            ],
            "__typename": [
                203
            ]
        },
        "BidOriginInput": {
            "type": [
                41
            ],
            "name": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                44
            ],
            "on_BidPlacedError": [
                43
            ],
            "__typename": [
                203
            ]
        },
        "BidPlacedError": {
            "error": [
                203
            ],
            "errorCode": [
                34
            ],
            "__typename": [
                203
            ]
        },
        "BidPlacedSuccess": {
            "bidId": [
                203
            ],
            "amount": [
                93
            ],
            "maxAmount": [
                93
            ],
            "date": [
                203
            ],
            "bidStatus": [
                45
            ],
            "bidType": [
                46
            ],
            "__typename": [
                203
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderToken": {
            "token": [
                203
            ],
            "expiration": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "BidderTokenInput": {
            "metadata": [
                207
            ],
            "__typename": [
                203
            ]
        },
        "BidsConnection": {
            "edges": [
                50
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "BidsEdge": {
            "cursor": [
                203
            ],
            "node": [
                33
            ],
            "__typename": [
                203
            ]
        },
        "Boolean": {},
        "CancelLatestBidOnItemInput": {
            "itemId": [
                203
            ],
            "saleId": [
                203
            ],
            "sequenceNumber": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "CancelPaymentOrderInput": {
            "orderId": [
                89
            ],
            "__typename": [
                203
            ]
        },
        "CanceledLatestBidOnItem": {
            "removedBids": [
                33
            ],
            "__typename": [
                203
            ]
        },
        "ClientPermission": {},
        "CloseSaleInput": {
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ClosingMethod": {},
        "ConnectShopifyToAccountInput": {
            "shopId": [
                203
            ],
            "token": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ContinueOnboardPaymentAccountInput": {
            "returnUrl": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "CreateAccountFeeInput": {
            "name": [
                203
            ],
            "type": [
                2
            ],
            "value": [
                93
            ],
            "upperLteLimit": [
                93
            ],
            "lowerLimit": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "CreateAccountInput": {
            "name": [
                203
            ],
            "email": [
                203
            ],
            "handle": [
                203
            ],
            "description": [
                203
            ],
            "links": [
                121
            ],
            "__typename": [
                203
            ]
        },
        "CreateInvoiceInput": {
            "orderId": [
                89
            ],
            "externalID": [
                203
            ],
            "url": [
                203
            ],
            "dueDate": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "CreateItemImage": {
            "itemId": [
                203
            ],
            "url": [
                203
            ],
            "order": [
                93
            ],
            "imageId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "CreateItemInput": {
            "title": [
                203
            ],
            "description": [
                203
            ],
            "price": [
                111
            ],
            "externalId": [
                203
            ],
            "metadata": [
                102
            ],
            "tags": [
                203
            ],
            "specifications": [
                114
            ],
            "valuationAmount": [
                93
            ],
            "valuationCurrency": [
                203
            ],
            "lowEstimate": [
                93
            ],
            "highEstimate": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "CreateItemNoteInput": {
            "itemId": [
                203
            ],
            "note": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "CreateItemSchemaInput": {
            "schema": [
                119
            ],
            "metadataSchema": [
                119
            ],
            "__typename": [
                203
            ]
        },
        "CreatePaymentInput": {
            "orderId": [
                89
            ],
            "__typename": [
                203
            ]
        },
        "CreatePaymentOrderInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "userId": [
                203
            ],
            "orderLines": [
                69
            ],
            "__typename": [
                203
            ]
        },
        "CreatePaymentOrderLineInput": {
            "amount": [
                93
            ],
            "description": [
                203
            ],
            "orderLineType": [
                138
            ],
            "__typename": [
                203
            ]
        },
        "CreateSaleInput": {
            "dates": [
                175
            ],
            "title": [
                203
            ],
            "description": [
                203
            ],
            "currency": [
                203
            ],
            "bidIncrementTable": [
                36
            ],
            "closingMethod": [
                57
            ],
            "closingTimeCountdown": [
                93
            ],
            "reserveAutoBidMethod": [
                167
            ],
            "themeType": [
                93
            ],
            "hidden": [
                51
            ],
            "type": [
                186
            ],
            "isTestSale": [
                51
            ],
            "__typename": [
                203
            ]
        },
        "CreateUploadUrlInput": {
            "imageTypes": [
                92
            ],
            "contentType": [
                203
            ],
            "order": [
                93
            ],
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "Currency": {},
        "DeleteAccountFeeInput": {
            "id": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "DeleteActionHookSubscriptionInput": {
            "action": [
                10
            ],
            "__typename": [
                203
            ]
        },
        "DeleteImageInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "imageId": [
                203
            ],
            "imageTypes": [
                92
            ],
            "__typename": [
                203
            ]
        },
        "DeleteItemImageInput": {
            "itemId": [
                203
            ],
            "imageId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "DeleteItemInput": {
            "itemId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "DeleteLiveStreamFromSaleInput": {
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "DeletePaymentOrderInput": {
            "orderId": [
                89
            ],
            "__typename": [
                203
            ]
        },
        "DeleteSaleInput": {
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "Estimate": {
            "low": [
                93
            ],
            "high": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "ExternalLiveStream": {
            "url": [
                203
            ],
            "type": [
                126
            ],
            "created": [
                203
            ],
            "updated": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "Float": {},
        "GetItemInput": {
            "itemId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "GetItemsInput": {
            "userId": [
                203
            ],
            "first": [
                93
            ],
            "after": [
                203
            ],
            "direction": [
                144
            ],
            "itemsFilter": [
                118
            ],
            "__typename": [
                203
            ]
        },
        "HighestBidInfo": {
            "bidId": [
                203
            ],
            "itemId": [
                203
            ],
            "currentAmount": [
                93
            ],
            "maxAmount": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "HttpHeader": {
            "key": [
                203
            ],
            "value": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "HttpHeaderInput": {
            "key": [
                203
            ],
            "value": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ID": {},
        "Image": {
            "id": [
                203
            ],
            "url": [
                203
            ],
            "order": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "ImageOrderInput": {
            "imageId": [
                203
            ],
            "order": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "ImageType": {},
        "Int": {},
        "Invoice": {
            "invoiceId": [
                89
            ],
            "externalID": [
                203
            ],
            "dueDate": [
                203
            ],
            "url": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "Item": {
            "id": [
                89
            ],
            "cursor": [
                203
            ],
            "title": [
                203
            ],
            "accountId": [
                203
            ],
            "description": [
                203
            ],
            "price": [
                110
            ],
            "images": [
                90
            ],
            "externalId": [
                203
            ],
            "tags": [
                203
            ],
            "metadata": [
                101
            ],
            "schema": [
                119
            ],
            "itemNotes": [
                104,
                {
                    "take": [
                        93
                    ],
                    "cursor": [
                        203
                    ],
                    "direction": [
                        144
                    ]
                }
            ],
            "specifications": [
                113
            ],
            "estimates": [
                81
            ],
            "valuationAmount": [
                93
            ],
            "valuationCurrency": [
                203
            ],
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ItemDates": {
            "openDate": [
                203
            ],
            "closingStart": [
                203
            ],
            "closingEnd": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                203
            ],
            "date": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ItemFilter": {
            "title": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                89
            ],
            "__typename": [
                203
            ]
        },
        "ItemMessageNotification": {
            "id": [
                203
            ],
            "message": [
                203
            ],
            "date": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ItemMetadata": {
            "data": [
                119
            ],
            "schema": [
                119
            ],
            "__typename": [
                203
            ]
        },
        "ItemMetadataInput": {
            "data": [
                119
            ],
            "__typename": [
                203
            ]
        },
        "ItemNote": {
            "id": [
                89
            ],
            "note": [
                203
            ],
            "userId": [
                203
            ],
            "user": [
                226
            ],
            "created": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ItemNoteConnection": {
            "edges": [
                105
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "ItemNoteEdge": {
            "cursor": [
                203
            ],
            "node": [
                103
            ],
            "__typename": [
                203
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                100
            ],
            "on_ItemFairWarningNotification": [
                97
            ],
            "__typename": [
                203
            ]
        },
        "ItemNumberChangeInput": {
            "itemId": [
                203
            ],
            "itemNumber": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                108
            ],
            "direction": [
                144
            ],
            "__typename": [
                203
            ]
        },
        "ItemPrice": {
            "currency": [
                72
            ],
            "reserve": [
                93
            ],
            "startingBid": [
                93
            ],
            "lowEstimate": [
                93
            ],
            "highEstimate": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "ItemPriceInput": {
            "currency": [
                72
            ],
            "reserve": [
                93
            ],
            "startingBid": [
                93
            ],
            "lowEstimate": [
                93
            ],
            "highEstimate": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "ItemSchema": {
            "schema": [
                119
            ],
            "metadataSchema": [
                119
            ],
            "__typename": [
                203
            ]
        },
        "ItemSpecifications": {
            "type": [
                201
            ],
            "subType": [
                200
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
            "measurementUnit": [
                128
            ],
            "weight": [
                83
            ],
            "weightUnit": [
                229
            ],
            "__typename": [
                203
            ]
        },
        "ItemSpecificationsInput": {
            "type": [
                201
            ],
            "subType": [
                200
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
            "measurementUnit": [
                128
            ],
            "weight": [
                83
            ],
            "weightUnit": [
                229
            ],
            "__typename": [
                203
            ]
        },
        "ItemStatus": {},
        "ItemsConnection": {
            "edges": [
                117
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "ItemsEdge": {
            "cursor": [
                203
            ],
            "node": [
                95
            ],
            "__typename": [
                203
            ]
        },
        "ItemsFilter": {
            "onlyMyItems": [
                51
            ],
            "title": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "JSON": {},
        "Link": {
            "type": [
                122
            ],
            "url": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "LinkInput": {
            "type": [
                122
            ],
            "url": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                177
            ],
            "cursor": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "LiveStream": {
            "on_ExternalLiveStream": [
                82
            ],
            "on_BastaLiveStream": [
                32
            ],
            "__typename": [
                203
            ]
        },
        "LiveStreamInput": {
            "url": [
                203
            ],
            "type": [
                126
            ],
            "__typename": [
                203
            ]
        },
        "LiveStreamType": {},
        "MaxBidOnBehalfInput": {
            "userId": [
                203
            ],
            "maxAmount": [
                93
            ],
            "itemId": [
                203
            ],
            "saleId": [
                203
            ],
            "bidOrigin": [
                40
            ],
            "__typename": [
                203
            ]
        },
        "MeasurementUnit": {},
        "Mutation": {
            "updateAccount": [
                0,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        209,
                        "UpdateAccountInput!"
                    ]
                }
            ],
            "createSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        70,
                        "CreateSaleInput!"
                    ]
                }
            ],
            "updateSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "saleId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        218,
                        "UpdateSaleInput!"
                    ]
                }
            ],
            "openSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        134,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "closeSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        56,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "setSaleStatus": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        196,
                        "SetSaleStatusInput!"
                    ]
                }
            ],
            "startClosingSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        202,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "forceOpenSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        134,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "forceCloseSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        56,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "forceStartClosingSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        202,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "publishSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        156,
                        "PublishSaleInput!"
                    ]
                }
            ],
            "createItem": [
                95,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        64,
                        "CreateItemInput!"
                    ]
                }
            ],
            "updateItem": [
                95,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "itemId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        214,
                        "UpdateItemInput!"
                    ]
                }
            ],
            "updateItemNumbers": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        215,
                        "UpdateItemNumbersInput!"
                    ]
                }
            ],
            "createItemForSale": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        179,
                        "SaleItemInput!"
                    ]
                }
            ],
            "addItemToSale": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        12,
                        "AddItemToSaleInput!"
                    ]
                }
            ],
            "updateItemForSale": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        219,
                        "UpdateSaleItemInput!"
                    ]
                }
            ],
            "setItemWinner": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        194,
                        "SetItemWinnerInput!"
                    ]
                }
            ],
            "setSaleItemStatus": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        195,
                        "SetSaleItemStatusInput!"
                    ]
                }
            ],
            "removeItemFromSale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        162,
                        "RemoveSaleItemInput!"
                    ]
                }
            ],
            "createApiKey": [
                22,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        24,
                        "ApiKeyInput!"
                    ]
                }
            ],
            "revokeApiKey": [
                51,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        169,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "createApiToken": [
                28,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        29,
                        "ApiTokenInput!"
                    ]
                }
            ],
            "revokeApiToken": [
                51,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        170,
                        "RevokeApiTokenInput!"
                    ]
                }
            ],
            "bidOnBehalf": [
                33,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        37,
                        "BidOnBehalfInput!"
                    ]
                }
            ],
            "maxBidOnBehalf": [
                33,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        127,
                        "MaxBidOnBehalfInput!"
                    ]
                }
            ],
            "cancelLatestBidOnItem": [
                54,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        52,
                        "CancelLatestBidOnItemInput!"
                    ]
                }
            ],
            "setUserIdOnBid": [
                33,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        197,
                        "SetUserIdOnBidInput!"
                    ]
                }
            ],
            "createBidderToken": [
                47,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        48,
                        "BidderTokenInput!"
                    ]
                }
            ],
            "createUserTokenV2": [
                227,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        228,
                        "UserTokenInput!"
                    ]
                }
            ],
            "addActionHookSubscription": [
                8,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        9,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "updateActionHookSubscription": [
                8,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        210,
                        "UpdateActionHookSubscriptionInput!"
                    ]
                }
            ],
            "deleteActionHookSubscription": [
                51,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        74,
                        "DeleteActionHookSubscriptionInput!"
                    ]
                }
            ],
            "testActionHook": [
                206,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        9,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "onboardPaymentAccount": [
                132,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        131,
                        "OnboardPaymentAccountInput!"
                    ]
                }
            ],
            "continueOnboardPaymentAccount": [
                132,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        59,
                        "ContinueOnboardPaymentAccountInput!"
                    ]
                }
            ],
            "acceptTerms": [
                203,
                {
                    "accountId": [
                        203,
                        "String!"
                    ]
                }
            ],
            "createItemImage": [
                90,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        63,
                        "CreateItemImage!"
                    ]
                }
            ],
            "reorderItemImages": [
                90,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        166,
                        "ReorderItemImages!"
                    ]
                }
            ],
            "reorderImages": [
                90,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        165,
                        "ReorderImagesInput!"
                    ]
                }
            ],
            "deleteItemImage": [
                90,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        76,
                        "DeleteItemImageInput!"
                    ]
                }
            ],
            "deleteImage": [
                90,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        75,
                        "DeleteImageInput!"
                    ]
                }
            ],
            "addPaddleToSale": [
                140,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        15,
                        "AddPaddleToSaleInput!"
                    ]
                }
            ],
            "removePaddleFromSale": [
                140,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        161,
                        "RemovePaddleFromSaleInput!"
                    ]
                }
            ],
            "registerUserPaddle": [
                140,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        160,
                        "RegisterUserPaddleInput!"
                    ]
                }
            ],
            "addMessageNotificationToItem": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        14,
                        "AddMessageNotificationToItemInput!"
                    ]
                }
            ],
            "addFairWarningNotificationToItem": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        11,
                        "AddFairWarningNotificationToItemInput!"
                    ]
                }
            ],
            "addLiveStreamToSale": [
                124,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        13,
                        "AddLiveStreamToSaleInput!"
                    ]
                }
            ],
            "deleteLiveStreamFromSale": [
                51,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        78,
                        "DeleteLiveStreamFromSaleInput!"
                    ]
                }
            ],
            "addTagToItem": [
                205,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        16,
                        "AddTagToItemInput!"
                    ]
                }
            ],
            "removeTagFromItem": [
                51,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        163,
                        "RemoveTagFromItemInput!"
                    ]
                }
            ],
            "addTagToSaleItem": [
                205,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        17,
                        "AddTagToSaleItemInput!"
                    ]
                }
            ],
            "removeTagFromSaleItem": [
                51,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        164,
                        "RemoveTagFromSaleItemInput!"
                    ]
                }
            ],
            "createItemNote": [
                103,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        65,
                        "CreateItemNoteInput!"
                    ]
                }
            ],
            "createUploadUrl": [
                220,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        71,
                        "CreateUploadUrlInput!"
                    ]
                }
            ],
            "createItemSchema": [
                112,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        66,
                        "CreateItemSchemaInput!"
                    ]
                }
            ],
            "updateGlobalIncrementTable": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        213,
                        "UpdateGlobalIncrementTableInput!"
                    ]
                }
            ],
            "updateGlobalDates": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        212,
                        "UpdateGlobalDatesInput!"
                    ]
                }
            ],
            "updateGlobalClosingTimeCountdown": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        211,
                        "UpdateGlobalClosingTimeCountdownInput!"
                    ]
                }
            ],
            "passLiveItem": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        148,
                        "PassLiveItemInput!"
                    ]
                }
            ],
            "sellLiveItem": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        191,
                        "SellLiveItemInput!"
                    ]
                }
            ],
            "connectShopifyToAccount": [
                199,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        58,
                        "ConnectShopifyToAccountInput!"
                    ]
                }
            ],
            "createPaymentOrder": [
                152,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        68,
                        "CreatePaymentOrderInput!"
                    ]
                }
            ],
            "updatePaymentOrder": [
                152,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        216,
                        "UpdatePaymentOrderInput!"
                    ]
                }
            ],
            "deletePaymentOrder": [
                152,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        79,
                        "DeletePaymentOrderInput!"
                    ]
                }
            ],
            "cancelPaymentOrder": [
                152,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        53,
                        "CancelPaymentOrderInput!"
                    ]
                }
            ],
            "createInvoice": [
                94,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        62,
                        "CreateInvoiceInput!"
                    ]
                }
            ],
            "createPayment": [
                149,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        67,
                        "CreatePaymentInput!"
                    ]
                }
            ],
            "createAccountFee": [
                1,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        60,
                        "CreateAccountFeeInput!"
                    ]
                }
            ],
            "updateAccountFee": [
                1,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        208,
                        "UpdateAccountFeeInput!"
                    ]
                }
            ],
            "deleteAccountFee": [
                89,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "input": [
                        73,
                        "DeleteAccountFeeInput!"
                    ]
                }
            ],
            "__typename": [
                203
            ]
        },
        "Node": {
            "id": [
                89
            ],
            "on_AccountFee": [
                1
            ],
            "on_ActionHookLog": [
                4
            ],
            "on_ApiKey": [
                20
            ],
            "on_ApiToken": [
                26
            ],
            "on_Item": [
                95
            ],
            "on_PaymentOrder": [
                152
            ],
            "on_Sale": [
                171
            ],
            "__typename": [
                203
            ]
        },
        "OnboardPaymentAccountInput": {
            "sellerLocation": [
                192
            ],
            "type": [
                150
            ],
            "returnUrl": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "OnboardPaymentAccountResponse": {
            "onboardingUrl": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                41
            ],
            "__typename": [
                203
            ]
        },
        "OpenSaleInput": {
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "OrderConnection": {
            "edges": [
                136
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "OrderEdge": {
            "cursor": [
                203
            ],
            "node": [
                152
            ],
            "__typename": [
                203
            ]
        },
        "OrderLine": {
            "orderLineId": [
                89
            ],
            "amount": [
                93
            ],
            "description": [
                203
            ],
            "orderLineType": [
                138
            ],
            "__typename": [
                203
            ]
        },
        "OrderLineType": {},
        "OrderStatus": {},
        "Paddle": {
            "identifier": [
                203
            ],
            "userId": [
                203
            ],
            "user": [
                226
            ],
            "type": [
                142
            ],
            "created": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                41
            ],
            "__typename": [
                203
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                89
            ],
            "endCursor": [
                89
            ],
            "hasNextPage": [
                51
            ],
            "totalRecords": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "PaginationDirection": {},
        "Participant": {
            "userId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ParticipantsConnection": {
            "edges": [
                147
            ],
            "totalCount": [
                93
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "ParticipantsEdge": {
            "cursor": [
                203
            ],
            "node": [
                145
            ],
            "__typename": [
                203
            ]
        },
        "PassLiveItemInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "transitionToUpcomingLot": [
                51
            ],
            "__typename": [
                203
            ]
        },
        "Payment": {
            "paymentId": [
                89
            ],
            "__typename": [
                203
            ]
        },
        "PaymentAccountType": {},
        "PaymentDetails": {
            "paymentProviderAccountId": [
                203
            ],
            "status": [
                153
            ],
            "accountFees": [
                1
            ],
            "__typename": [
                203
            ]
        },
        "PaymentOrder": {
            "id": [
                89
            ],
            "orderId": [
                89
            ],
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "invoiceId": [
                203
            ],
            "invoice": [
                94
            ],
            "paymentId": [
                203
            ],
            "userId": [
                203
            ],
            "orderLines": [
                137
            ],
            "user": [
                226
            ],
            "status": [
                139
            ],
            "created": [
                203
            ],
            "modified": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "PaymentProviderStatus": {},
        "Permission": {},
        "PhoneBidOrigin": {
            "type": [
                41
            ],
            "__typename": [
                203
            ]
        },
        "PublishSaleInput": {
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "Query": {
            "account": [
                0,
                {
                    "accountId": [
                        203,
                        "String!"
                    ]
                }
            ],
            "accounts": [
                0
            ],
            "sales": [
                173,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ],
                    "filter": [
                        176
                    ]
                }
            ],
            "sale": [
                171,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "id": [
                        89,
                        "ID!"
                    ]
                }
            ],
            "saleItem": [
                177,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "saleId": [
                        203,
                        "String!"
                    ],
                    "itemId": [
                        203,
                        "String!"
                    ]
                }
            ],
            "apiKeys": [
                21,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ]
                }
            ],
            "searchKey": [
                190,
                {
                    "accountId": [
                        203,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                27,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ]
                }
            ],
            "actionHookSubscriptions": [
                8,
                {
                    "accountId": [
                        203,
                        "String!"
                    ]
                }
            ],
            "actionHookLogs": [
                5,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ],
                    "filter": [
                        3
                    ]
                }
            ],
            "item": [
                95,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "itemId": [
                        203,
                        "String!"
                    ]
                }
            ],
            "items": [
                116,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ],
                    "itemsFilter": [
                        118,
                        "ItemsFilter!"
                    ],
                    "direction": [
                        144
                    ]
                }
            ],
            "salesAggregate": [
                187,
                {
                    "accountId": [
                        203,
                        "String!"
                    ]
                }
            ],
            "userBidActivity": [
                223,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "userId": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ],
                    "filter": [
                        225
                    ],
                    "direction": [
                        144
                    ],
                    "orderBy": [
                        38
                    ]
                }
            ],
            "orders": [
                135,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ],
                    "before": [
                        203
                    ],
                    "last": [
                        93
                    ]
                }
            ],
            "userOrders": [
                135,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "userID": [
                        203,
                        "String!"
                    ],
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ],
                    "before": [
                        203
                    ],
                    "last": [
                        93
                    ]
                }
            ],
            "__typename": [
                203
            ]
        },
        "RangeRule": {
            "highRange": [
                93
            ],
            "lowRange": [
                93
            ],
            "step": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "RangeRuleInput": {
            "highRange": [
                93
            ],
            "lowRange": [
                93
            ],
            "step": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "RegisterUserPaddleInput": {
            "saleId": [
                203
            ],
            "paddleIdentifier": [
                203
            ],
            "type": [
                142
            ],
            "email": [
                203
            ],
            "firstName": [
                203
            ],
            "lastName": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "RemovePaddleFromSaleInput": {
            "saleId": [
                203
            ],
            "paddleIdentifier": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "RemoveSaleItemInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "RemoveTagFromItemInput": {
            "itemId": [
                203
            ],
            "name": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "RemoveTagFromSaleItemInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "name": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ReorderImagesInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "imageType": [
                92
            ],
            "imageOrderChanges": [
                91
            ],
            "__typename": [
                203
            ]
        },
        "ReorderItemImages": {
            "itemId": [
                203
            ],
            "imageOrderChanges": [
                91
            ],
            "__typename": [
                203
            ]
        },
        "ReserveAutoBidMethod": {},
        "ReserveStatus": {},
        "RevokeApiKeyInput": {
            "apiKeyId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "RevokeApiTokenInput": {
            "apiTokenId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "Sale": {
            "id": [
                89
            ],
            "cursor": [
                203
            ],
            "type": [
                186
            ],
            "accountId": [
                203
            ],
            "title": [
                203
            ],
            "description": [
                203
            ],
            "currency": [
                203
            ],
            "status": [
                185
            ],
            "items": [
                180,
                {
                    "first": [
                        93
                    ],
                    "after": [
                        203
                    ],
                    "filter": [
                        178
                    ],
                    "order": [
                        109
                    ]
                }
            ],
            "incrementTable": [
                35
            ],
            "dates": [
                174
            ],
            "participants": [
                146,
                {
                    "take": [
                        93
                    ],
                    "cursor": [
                        203
                    ],
                    "direction": [
                        144
                    ]
                }
            ],
            "sequenceNumber": [
                93
            ],
            "closingMethod": [
                57
            ],
            "closingTimeCountdown": [
                93
            ],
            "images": [
                90
            ],
            "themeType": [
                93
            ],
            "slug": [
                203
            ],
            "reserveAutoBidMethod": [
                167
            ],
            "isTestSale": [
                51
            ],
            "bastaBidClient": [
                51
            ],
            "hidden": [
                51
            ],
            "paddles": [
                140
            ],
            "liveStream": [
                82
            ],
            "liveVideoStream": [
                124
            ],
            "liveItem": [
                123,
                {
                    "itemOrderInput": [
                        109
                    ]
                }
            ],
            "saleBidsCounts": [
                93
            ],
            "sumOfHighestBids": [
                93
            ],
            "statistics": [
                184
            ],
            "__typename": [
                203
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                171
            ],
            "on_SaleItem": [
                177
            ],
            "on_Node": [
                130
            ],
            "__typename": [
                203
            ]
        },
        "SaleConnection": {
            "edges": [
                189
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "SaleDates": {
            "closingDate": [
                203
            ],
            "openDate": [
                203
            ],
            "liveDate": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SaleDatesInput": {
            "closingDate": [
                203
            ],
            "openDate": [
                203
            ],
            "liveDate": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SaleFilter": {
            "statuses": [
                185
            ],
            "showTestSales": [
                51
            ],
            "__typename": [
                203
            ]
        },
        "SaleItem": {
            "id": [
                89
            ],
            "cursor": [
                203
            ],
            "accountId": [
                203
            ],
            "title": [
                203
            ],
            "totalBids": [
                93
            ],
            "description": [
                203
            ],
            "currentBid": [
                93
            ],
            "currency": [
                203
            ],
            "leaderId": [
                203
            ],
            "saleId": [
                203
            ],
            "bids": [
                33,
                {
                    "collapseSequentialUserBids": [
                        51
                    ]
                }
            ],
            "reserve": [
                93
            ],
            "startingBid": [
                93
            ],
            "incrementTable": [
                35
            ],
            "status": [
                115
            ],
            "estimates": [
                81
            ],
            "itemNumber": [
                93
            ],
            "dates": [
                96
            ],
            "allowedBidTypes": [
                46
            ],
            "images": [
                90
            ],
            "slug": [
                203
            ],
            "paymentOrder": [
                152
            ],
            "paymentOrders": [
                152
            ],
            "hidden": [
                51
            ],
            "nextAsks": [
                93,
                {
                    "iterations": [
                        93
                    ]
                }
            ],
            "reserveMet": [
                51
            ],
            "notifications": [
                106
            ],
            "tags": [
                203
            ],
            "tagsV2": [
                205
            ],
            "reserveStatus": [
                168
            ],
            "externalId": [
                203
            ],
            "metadata": [
                101
            ],
            "closingTimeCountdown": [
                93
            ],
            "specifications": [
                113
            ],
            "__typename": [
                203
            ]
        },
        "SaleItemFilter": {
            "statuses": [
                115
            ],
            "showHiddenItems": [
                51
            ],
            "__typename": [
                203
            ]
        },
        "SaleItemInput": {
            "saleId": [
                203
            ],
            "bidIncrementTable": [
                36
            ],
            "title": [
                203
            ],
            "description": [
                203
            ],
            "startingBid": [
                93
            ],
            "valuationAmount": [
                93
            ],
            "valuationCurrency": [
                203
            ],
            "reserve": [
                93
            ],
            "lowEstimate": [
                93
            ],
            "highEstimate": [
                93
            ],
            "ItemNumber": [
                93
            ],
            "allowedBidTypes": [
                46
            ],
            "openDate": [
                203
            ],
            "closingDate": [
                203
            ],
            "closingTimeCountdown": [
                93
            ],
            "hidden": [
                51
            ],
            "tags": [
                203
            ],
            "specifications": [
                114
            ],
            "__typename": [
                203
            ]
        },
        "SaleItemsConnection": {
            "edges": [
                181
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "SaleItemsEdge": {
            "cursor": [
                203
            ],
            "node": [
                177
            ],
            "__typename": [
                203
            ]
        },
        "SaleMetrics": {
            "totalItems": [
                93
            ],
            "itemsOverReserve": [
                93
            ],
            "itemsWithBids": [
                93
            ],
            "totalBids": [
                93
            ],
            "uniqueBidders": [
                93
            ],
            "highEstimateSum": [
                93
            ],
            "lowEstimateSum": [
                93
            ],
            "currentBidOverReserveTotal": [
                93
            ],
            "currentBidTotal": [
                93
            ],
            "maxBidsTotal": [
                93
            ],
            "itemsOverReservePercentage": [
                83
            ],
            "itemsWithBidsPercentage": [
                83
            ],
            "averageBidsPerItem": [
                83
            ],
            "hiddenItems": [
                93
            ],
            "highestBid": [
                86
            ],
            "bidderEngagement": [
                83
            ],
            "dailyBidCounts": [
                183
            ],
            "calculatedAt": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SaleStatisticBidCounts": {
            "date": [
                203
            ],
            "bidCount": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "SaleStatistics": {
            "saleMetrics": [
                182
            ],
            "__typename": [
                203
            ]
        },
        "SaleStatus": {},
        "SaleType": {},
        "SalesAggregate": {
            "open": [
                93
            ],
            "closing": [
                93
            ],
            "closed": [
                93
            ],
            "published": [
                93
            ],
            "unpublished": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "SalesAggregateInput": {
            "accountId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SalesEdge": {
            "cursor": [
                203
            ],
            "node": [
                171
            ],
            "__typename": [
                203
            ]
        },
        "SearchKey": {
            "key": [
                203
            ],
            "collections": [
                203
            ],
            "expiration": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SellLiveItemInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "transitionToUpcomingLot": [
                51
            ],
            "__typename": [
                203
            ]
        },
        "SellerLocation": {},
        "SellerTerms": {
            "accepted_by": [
                203
            ],
            "accepted_date": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SetItemWinnerInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "bidId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SetSaleItemStatusInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "status": [
                115
            ],
            "__typename": [
                203
            ]
        },
        "SetSaleStatusInput": {
            "saleId": [
                203
            ],
            "status": [
                185
            ],
            "__typename": [
                203
            ]
        },
        "SetUserIdOnBidInput": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "bidId": [
                203
            ],
            "userId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ShopifyConfiguration": {
            "shopId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "ShopifyConnection": {
            "accountId": [
                203
            ],
            "shopId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "StartClosingSaleInput": {
            "saleId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "String": {},
        "Subscription": {
            "saleActivity": [
                172,
                {
                    "accountId": [
                        203,
                        "String!"
                    ],
                    "saleId": [
                        89,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        99
                    ]
                }
            ],
            "__typename": [
                203
            ]
        },
        "Tag": {
            "id": [
                89
            ],
            "name": [
                203
            ],
            "created": [
                203
            ],
            "associated": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "TestActionHookResponse": {
            "requestHeaders": [
                87
            ],
            "requestPayload": [
                203
            ],
            "requestMethod": [
                203
            ],
            "responseHeaders": [
                87
            ],
            "responseBody": [
                203
            ],
            "statusCode": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "TokenMetadata": {
            "userId": [
                203
            ],
            "ttl": [
                93
            ],
            "permissions": [
                55
            ],
            "__typename": [
                203
            ]
        },
        "UpdateAccountFeeInput": {
            "id": [
                203
            ],
            "name": [
                203
            ],
            "type": [
                2
            ],
            "value": [
                93
            ],
            "upperLteLimit": [
                93
            ],
            "lowerLimit": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "UpdateAccountInput": {
            "name": [
                203
            ],
            "email": [
                203
            ],
            "handle": [
                203
            ],
            "description": [
                203
            ],
            "links": [
                121
            ],
            "generateNewHandle": [
                51
            ],
            "enableBastaStreaming": [
                51
            ],
            "__typename": [
                203
            ]
        },
        "UpdateActionHookSubscriptionInput": {
            "action": [
                10
            ],
            "url": [
                203
            ],
            "headers": [
                88
            ],
            "__typename": [
                203
            ]
        },
        "UpdateGlobalClosingTimeCountdownInput": {
            "saleId": [
                203
            ],
            "closingTimeCountdown": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "UpdateGlobalDatesInput": {
            "saleId": [
                203
            ],
            "openDate": [
                203
            ],
            "closingDate": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "UpdateGlobalIncrementTableInput": {
            "saleId": [
                203
            ],
            "incrementTable": [
                36
            ],
            "__typename": [
                203
            ]
        },
        "UpdateItemInput": {
            "title": [
                203
            ],
            "description": [
                203
            ],
            "price": [
                111
            ],
            "externalId": [
                203
            ],
            "metadata": [
                102
            ],
            "tags": [
                203
            ],
            "specifications": [
                114
            ],
            "valuationAmount": [
                93
            ],
            "valuationCurrency": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "UpdateItemNumbersInput": {
            "saleId": [
                203
            ],
            "itemNumberChanges": [
                107
            ],
            "__typename": [
                203
            ]
        },
        "UpdatePaymentOrderInput": {
            "orderId": [
                89
            ],
            "userId": [
                203
            ],
            "orderLines": [
                217
            ],
            "__typename": [
                203
            ]
        },
        "UpdatePaymentOrderLineInput": {
            "orderLineId": [
                89
            ],
            "amount": [
                93
            ],
            "description": [
                203
            ],
            "orderLineType": [
                138
            ],
            "__typename": [
                203
            ]
        },
        "UpdateSaleInput": {
            "dates": [
                175
            ],
            "title": [
                203
            ],
            "description": [
                203
            ],
            "currency": [
                203
            ],
            "bidIncrementTable": [
                36
            ],
            "closingMethod": [
                57
            ],
            "closingTimeCountdown": [
                93
            ],
            "themeType": [
                93
            ],
            "slug": [
                203
            ],
            "hidden": [
                51
            ],
            "liveStream": [
                125
            ],
            "saleType": [
                186
            ],
            "isTestSale": [
                51
            ],
            "__typename": [
                203
            ]
        },
        "UpdateSaleItemInput": {
            "itemId": [
                203
            ],
            "saleId": [
                203
            ],
            "bidIncrementTable": [
                36
            ],
            "title": [
                203
            ],
            "description": [
                203
            ],
            "startingBid": [
                93
            ],
            "valuationAmount": [
                93
            ],
            "valuationCurrency": [
                203
            ],
            "reserve": [
                93
            ],
            "lowEstimate": [
                93
            ],
            "highEstimate": [
                93
            ],
            "allowedBidTypes": [
                46
            ],
            "openDate": [
                203
            ],
            "closingDate": [
                203
            ],
            "slug": [
                203
            ],
            "hidden": [
                51
            ],
            "closingTimeCountdown": [
                93
            ],
            "tags": [
                203
            ],
            "specifications": [
                114
            ],
            "__typename": [
                203
            ]
        },
        "UploadUrl": {
            "imageId": [
                203
            ],
            "uploadUrl": [
                203
            ],
            "imageUrl": [
                203
            ],
            "headers": [
                87
            ],
            "order": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "UserAddress": {
            "id": [
                203
            ],
            "addressType": [
                18
            ],
            "line1": [
                203
            ],
            "line2": [
                203
            ],
            "city": [
                203
            ],
            "state": [
                203
            ],
            "postalCode": [
                203
            ],
            "country": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "UserBidActivity": {
            "bidId": [
                203
            ],
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "amount": [
                93
            ],
            "maxAmount": [
                93
            ],
            "userId": [
                203
            ],
            "date": [
                203
            ],
            "bidStatus": [
                45
            ],
            "bidSequenceNumber": [
                93
            ],
            "paddle": [
                140
            ],
            "__typename": [
                203
            ]
        },
        "UserBidActivityConnection": {
            "edges": [
                224
            ],
            "pageInfo": [
                143
            ],
            "__typename": [
                203
            ]
        },
        "UserBidActivityEdge": {
            "cursor": [
                203
            ],
            "node": [
                222
            ],
            "__typename": [
                203
            ]
        },
        "UserBidActivityFilter": {
            "saleId": [
                203
            ],
            "itemId": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "UserInfo": {
            "userId": [
                203
            ],
            "name": [
                203
            ],
            "email": [
                203
            ],
            "addresses": [
                221
            ],
            "__typename": [
                203
            ]
        },
        "UserToken": {
            "token": [
                203
            ],
            "expirationDate": [
                203
            ],
            "__typename": [
                203
            ]
        },
        "UserTokenInput": {
            "userID": [
                203
            ],
            "ttlMinutes": [
                93
            ],
            "__typename": [
                203
            ]
        },
        "WeightUnit": {}
    }
}