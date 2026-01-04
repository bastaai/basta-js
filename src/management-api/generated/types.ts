export default {
    "scalars": [
        3,
        8,
        11,
        19,
        26,
        31,
        35,
        39,
        42,
        48,
        49,
        54,
        58,
        60,
        63,
        82,
        98,
        99,
        107,
        110,
        111,
        126,
        133,
        137,
        140,
        144,
        148,
        150,
        151,
        162,
        163,
        166,
        168,
        174,
        177,
        178,
        193,
        194,
        203,
        217,
        218,
        219,
        225,
        226,
        232,
        241,
        242,
        244,
        272,
        277
    ],
    "types": {
        "AcceptSaleRegistrationInput": {
            "registrationId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "Account": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "email": [
                244
            ],
            "created": [
                244
            ],
            "modified": [
                244
            ],
            "handle": [
                244
            ],
            "description": [
                244
            ],
            "imageUrl": [
                244
            ],
            "links": [
                138
            ],
            "paymentDetails": [
                175
            ],
            "bastaBidClient": [
                54
            ],
            "terms": [
                233
            ],
            "itemSchema": [
                137
            ],
            "bastaLiveStreamEnabled": [
                54
            ],
            "shopifyConfiguration": [
                239
            ],
            "aggregators": [
                20
            ],
            "metafields": [
                149,
                {
                    "input": [
                        103,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                149,
                {
                    "input": [
                        102,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                244
            ]
        },
        "AccountFee": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "type": [
                3
            ],
            "value": [
                111
            ],
            "upperLteLimit": [
                111
            ],
            "lowerLimit": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "AccountFeeType": {},
        "ActionHookFilter": {
            "types": [
                11
            ],
            "statuses": [
                8
            ],
            "__typename": [
                244
            ]
        },
        "ActionHookLog": {
            "id": [
                107
            ],
            "accountId": [
                244
            ],
            "idempotencyKey": [
                244
            ],
            "action": [
                11
            ],
            "url": [
                244
            ],
            "headers": [
                105
            ],
            "requestPayload": [
                244
            ],
            "response": [
                244
            ],
            "status": [
                8
            ],
            "error": [
                244
            ],
            "retries": [
                111
            ],
            "createdAt": [
                244
            ],
            "executedAt": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ActionHookLogConnection": {
            "edges": [
                7
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "ActionHookLogEdge": {
            "cursor": [
                244
            ],
            "node": [
                5
            ],
            "__typename": [
                244
            ]
        },
        "ActionHookStatus": {},
        "ActionHookSubscription": {
            "accountId": [
                244
            ],
            "action": [
                11
            ],
            "url": [
                244
            ],
            "headers": [
                105
            ],
            "__typename": [
                244
            ]
        },
        "ActionHookSubscriptionInput": {
            "action": [
                11
            ],
            "url": [
                244
            ],
            "headers": [
                106
            ],
            "__typename": [
                244
            ]
        },
        "ActionType": {},
        "AddFairWarningNotificationToItemInput": {
            "itemId": [
                244
            ],
            "saleId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "AddItemToSaleInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "bidIncrementTable": [
                37
            ],
            "startingBid": [
                111
            ],
            "reserve": [
                111
            ],
            "lowEstimate": [
                111
            ],
            "highEstimate": [
                111
            ],
            "ItemNumber": [
                111
            ],
            "allowedBidTypes": [
                49
            ],
            "openDate": [
                244
            ],
            "closingDate": [
                244
            ],
            "hidden": [
                54
            ],
            "closingTimeCountdown": [
                111
            ],
            "externalId": [
                244
            ],
            "displayNumber": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "AddLiveStreamToSaleInput": {
            "saleId": [
                244
            ],
            "url": [
                244
            ],
            "type": [
                144
            ],
            "__typename": [
                244
            ]
        },
        "AddMessageNotificationToItemInput": {
            "itemId": [
                244
            ],
            "saleId": [
                244
            ],
            "message": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "AddPaddleToSaleInput": {
            "saleId": [
                244
            ],
            "paddleIdentifier": [
                244
            ],
            "userId": [
                244
            ],
            "type": [
                166
            ],
            "__typename": [
                244
            ]
        },
        "AddTagToItemInput": {
            "itemId": [
                244
            ],
            "name": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "AddTagToSaleItemInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "name": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "AddressType": {},
        "Aggregator": {
            "name": [
                244
            ],
            "type": [
                42
            ],
            "__typename": [
                244
            ]
        },
        "ApiKey": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "accountId": [
                244
            ],
            "created": [
                244
            ],
            "roles": [
                26
            ],
            "__typename": [
                244
            ]
        },
        "ApiKeyConnection": {
            "edges": [
                24
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "ApiKeyCreated": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "generatedApiKey": [
                244
            ],
            "roles": [
                26
            ],
            "__typename": [
                244
            ]
        },
        "ApiKeyEdge": {
            "cursor": [
                244
            ],
            "node": [
                21
            ],
            "__typename": [
                244
            ]
        },
        "ApiKeyInput": {
            "name": [
                244
            ],
            "role": [
                26
            ],
            "__typename": [
                244
            ]
        },
        "ApiKeyRole": {},
        "ApiToken": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "accountId": [
                244
            ],
            "created": [
                244
            ],
            "roles": [
                31
            ],
            "__typename": [
                244
            ]
        },
        "ApiTokenConnection": {
            "edges": [
                32
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "ApiTokenCreated": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "generatedApiKey": [
                244
            ],
            "roles": [
                31
            ],
            "__typename": [
                244
            ]
        },
        "ApiTokenInput": {
            "name": [
                244
            ],
            "role": [
                31
            ],
            "__typename": [
                244
            ]
        },
        "ApiTokenRole": {},
        "ApiTokensEdge": {
            "cursor": [
                244
            ],
            "node": [
                27
            ],
            "__typename": [
                244
            ]
        },
        "BastaLiveStream": {
            "optionAvailable": [
                54
            ],
            "publicUrl": [
                244
            ],
            "ingestUrl": [
                244
            ],
            "channelId": [
                244
            ],
            "streamKey": [
                244
            ],
            "isLive": [
                54
            ],
            "currentViewers": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "Bid": {
            "bidId": [
                244
            ],
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "sale": [
                197
            ],
            "saleItem": [
                204
            ],
            "amount": [
                111
            ],
            "maxAmount": [
                111
            ],
            "userId": [
                244
            ],
            "user": [
                273
            ],
            "date": [
                244
            ],
            "bidStatus": [
                48
            ],
            "bidSequenceNumber": [
                111
            ],
            "bidderIdentifier": [
                244
            ],
            "paddle": [
                164
            ],
            "bidOrigin": [
                40
            ],
            "__typename": [
                244
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rules": [
                183
            ],
            "__typename": [
                244
            ]
        },
        "BidIncrementTableInput": {
            "rules": [
                184
            ],
            "__typename": [
                244
            ]
        },
        "BidOnBehalfInput": {
            "userId": [
                244
            ],
            "amount": [
                111
            ],
            "itemId": [
                244
            ],
            "saleId": [
                244
            ],
            "type": [
                49
            ],
            "bidOrigin": [
                41
            ],
            "__typename": [
                244
            ]
        },
        "BidOrderByField": {},
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                156
            ],
            "on_PaddleBidOrigin": [
                165
            ],
            "on_PhoneBidOrigin": [
                179
            ],
            "on_Aggregator": [
                20
            ],
            "__typename": [
                244
            ]
        },
        "BidOriginInput": {
            "type": [
                42
            ],
            "name": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                45
            ],
            "on_BidPlacedError": [
                44
            ],
            "__typename": [
                244
            ]
        },
        "BidPlacedError": {
            "error": [
                244
            ],
            "errorCode": [
                35
            ],
            "__typename": [
                244
            ]
        },
        "BidPlacedSuccess": {
            "bidId": [
                244
            ],
            "amount": [
                111
            ],
            "maxAmount": [
                111
            ],
            "date": [
                244
            ],
            "bidStatus": [
                48
            ],
            "bidType": [
                49
            ],
            "__typename": [
                244
            ]
        },
        "BidRestrictions": {
            "acceptedRegistrationRequired": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "BidRestrictionsInput": {
            "acceptedRegistrationRequired": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderToken": {
            "token": [
                244
            ],
            "expiration": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "BidderTokenInput": {
            "metadata": [
                248
            ],
            "__typename": [
                244
            ]
        },
        "BidsConnection": {
            "edges": [
                53
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "BidsEdge": {
            "cursor": [
                244
            ],
            "node": [
                34
            ],
            "__typename": [
                244
            ]
        },
        "Boolean": {},
        "CancelLatestBidOnItemInput": {
            "itemId": [
                244
            ],
            "saleId": [
                244
            ],
            "sequenceNumber": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "CancelPaymentOrderInput": {
            "orderId": [
                107
            ],
            "__typename": [
                244
            ]
        },
        "CanceledLatestBidOnItem": {
            "removedBids": [
                34
            ],
            "__typename": [
                244
            ]
        },
        "ClientPermission": {},
        "CloseSaleInput": {
            "saleId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ClosingMethod": {},
        "ConnectShopifyToAccountInput": {
            "shopId": [
                244
            ],
            "token": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ContinueOnboardPaymentAccountInput": {
            "returnUrl": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "Country": {},
        "CreateAccountFeeInput": {
            "name": [
                244
            ],
            "type": [
                3
            ],
            "value": [
                111
            ],
            "upperLteLimit": [
                111
            ],
            "lowerLimit": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "CreateAccountInput": {
            "name": [
                244
            ],
            "email": [
                244
            ],
            "handle": [
                244
            ],
            "description": [
                244
            ],
            "links": [
                139
            ],
            "__typename": [
                244
            ]
        },
        "CreateInvoiceInput": {
            "orderId": [
                107
            ],
            "externalID": [
                244
            ],
            "url": [
                244
            ],
            "dueDate": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "CreateItemImage": {
            "itemId": [
                244
            ],
            "url": [
                244
            ],
            "order": [
                111
            ],
            "imageId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "CreateItemInput": {
            "title": [
                244
            ],
            "description": [
                244
            ],
            "price": [
                129
            ],
            "externalId": [
                244
            ],
            "metadata": [
                120
            ],
            "tags": [
                244
            ],
            "specifications": [
                132
            ],
            "valuationAmount": [
                111
            ],
            "valuationCurrency": [
                244
            ],
            "lowEstimate": [
                111
            ],
            "highEstimate": [
                111
            ],
            "location": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "CreateItemNoteInput": {
            "itemId": [
                244
            ],
            "note": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "CreateItemSchemaInput": {
            "schema": [
                137
            ],
            "metadataSchema": [
                137
            ],
            "__typename": [
                244
            ]
        },
        "CreateOrderInput": {
            "saleId": [
                244
            ],
            "userId": [
                244
            ],
            "title": [
                244
            ],
            "currency": [
                82
            ],
            "billingAddress": [
                146
            ],
            "shippingAddress": [
                146
            ],
            "orderLines": [
                72
            ],
            "__typename": [
                244
            ]
        },
        "CreateOrderLineForOrderInput": {
            "itemId": [
                244
            ],
            "amount": [
                111
            ],
            "description": [
                244
            ],
            "fees": [
                76
            ],
            "__typename": [
                244
            ]
        },
        "CreateOrderLineInput": {
            "orderId": [
                107
            ],
            "itemId": [
                244
            ],
            "amount": [
                111
            ],
            "description": [
                244
            ],
            "fees": [
                76
            ],
            "__typename": [
                244
            ]
        },
        "CreatePaymentInput": {
            "orderId": [
                107
            ],
            "__typename": [
                244
            ]
        },
        "CreatePaymentOrderInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "userId": [
                244
            ],
            "orderLines": [
                77
            ],
            "currency": [
                82
            ],
            "billingAddress": [
                146
            ],
            "shippingAddress": [
                146
            ],
            "__typename": [
                244
            ]
        },
        "CreatePaymentOrderLineFeeInput": {
            "description": [
                244
            ],
            "amount": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "CreatePaymentOrderLineInput": {
            "itemId": [
                244
            ],
            "amount": [
                111
            ],
            "description": [
                244
            ],
            "orderLineType": [
                162
            ],
            "fees": [
                76
            ],
            "__typename": [
                244
            ]
        },
        "CreateSaleInput": {
            "dates": [
                201
            ],
            "title": [
                244
            ],
            "description": [
                244
            ],
            "currency": [
                244
            ],
            "bidIncrementTable": [
                37
            ],
            "closingMethod": [
                60
            ],
            "closingTimeCountdown": [
                111
            ],
            "reserveAutoBidMethod": [
                193
            ],
            "themeType": [
                111
            ],
            "hidden": [
                54
            ],
            "type": [
                226
            ],
            "isTestSale": [
                54
            ],
            "bidRestrictions": [
                47
            ],
            "externalId": [
                244
            ],
            "location": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "CreateSaleItemRegistrationInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "userId": [
                244
            ],
            "type": [
                219
            ],
            "identifier": [
                244
            ],
            "status": [
                218
            ],
            "__typename": [
                244
            ]
        },
        "CreateSaleRegistrationInput": {
            "saleId": [
                244
            ],
            "userId": [
                244
            ],
            "type": [
                219
            ],
            "identifier": [
                244
            ],
            "status": [
                218
            ],
            "__typename": [
                244
            ]
        },
        "CreateUploadUrlInput": {
            "imageTypes": [
                110
            ],
            "contentType": [
                244
            ],
            "order": [
                111
            ],
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "externalId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "Currency": {},
        "DeleteAccountFeeInput": {
            "id": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "DeleteActionHookSubscriptionInput": {
            "action": [
                11
            ],
            "__typename": [
                244
            ]
        },
        "DeleteImageInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "imageId": [
                244
            ],
            "imageTypes": [
                110
            ],
            "__typename": [
                244
            ]
        },
        "DeleteItemImageInput": {
            "itemId": [
                244
            ],
            "imageId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "DeleteItemInput": {
            "itemId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "DeleteLiveStreamFromSaleInput": {
            "saleId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "DeleteMetafieldInput": {
            "entityType": [
                150
            ],
            "entityId": [
                244
            ],
            "key": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "DeleteOrderLineInput": {
            "orderId": [
                107
            ],
            "orderLineId": [
                107
            ],
            "__typename": [
                244
            ]
        },
        "DeletePaymentOrderInput": {
            "orderId": [
                107
            ],
            "__typename": [
                244
            ]
        },
        "DeleteSaleInput": {
            "saleId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "DeleteSaleItemRegistrationInput": {
            "itemRegistrationId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "DeleteSaleRegistrationInput": {
            "registrationId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "Estimate": {
            "low": [
                111
            ],
            "high": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "ExternalLiveStream": {
            "url": [
                244
            ],
            "type": [
                144
            ],
            "created": [
                244
            ],
            "updated": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "FeeRule": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "type": [
                98
            ],
            "value": [
                111
            ],
            "upperLteLimit": [
                111
            ],
            "lowerLimit": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "FeeRuleType": {},
        "Float": {},
        "GetItemInput": {
            "itemId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "GetItemsInput": {
            "userId": [
                244
            ],
            "first": [
                111
            ],
            "after": [
                244
            ],
            "direction": [
                168
            ],
            "itemsFilter": [
                136
            ],
            "__typename": [
                244
            ]
        },
        "GetMetafieldInput": {
            "key": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "GetMetafieldsInput": {
            "keys": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "HighestBidInfo": {
            "bidId": [
                244
            ],
            "itemId": [
                244
            ],
            "currentAmount": [
                111
            ],
            "maxAmount": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "HttpHeader": {
            "key": [
                244
            ],
            "value": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "HttpHeaderInput": {
            "key": [
                244
            ],
            "value": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ID": {},
        "Image": {
            "id": [
                244
            ],
            "url": [
                244
            ],
            "order": [
                111
            ],
            "externalId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ImageOrderInput": {
            "imageId": [
                244
            ],
            "order": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "ImageType": {},
        "Int": {},
        "Invoice": {
            "invoiceId": [
                107
            ],
            "externalID": [
                244
            ],
            "dueDate": [
                244
            ],
            "url": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "Item": {
            "id": [
                107
            ],
            "cursor": [
                244
            ],
            "title": [
                244
            ],
            "accountId": [
                244
            ],
            "description": [
                244
            ],
            "price": [
                128
            ],
            "images": [
                108
            ],
            "externalId": [
                244
            ],
            "tags": [
                244
            ],
            "metadata": [
                119
            ],
            "schema": [
                137
            ],
            "itemNotes": [
                122,
                {
                    "take": [
                        111
                    ],
                    "cursor": [
                        244
                    ],
                    "direction": [
                        168
                    ]
                }
            ],
            "specifications": [
                131
            ],
            "estimates": [
                95
            ],
            "valuationAmount": [
                111
            ],
            "valuationCurrency": [
                244
            ],
            "saleId": [
                244
            ],
            "location": [
                244
            ],
            "metafields": [
                149,
                {
                    "input": [
                        103,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                149,
                {
                    "input": [
                        102,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                244
            ]
        },
        "ItemDates": {
            "openDate": [
                244
            ],
            "closingStart": [
                244
            ],
            "closingEnd": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                244
            ],
            "date": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ItemFilter": {
            "title": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                107
            ],
            "__typename": [
                244
            ]
        },
        "ItemMessageNotification": {
            "id": [
                244
            ],
            "message": [
                244
            ],
            "date": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ItemMetadata": {
            "data": [
                137
            ],
            "schema": [
                137
            ],
            "__typename": [
                244
            ]
        },
        "ItemMetadataInput": {
            "data": [
                137
            ],
            "__typename": [
                244
            ]
        },
        "ItemNote": {
            "id": [
                107
            ],
            "note": [
                244
            ],
            "userId": [
                244
            ],
            "user": [
                273
            ],
            "created": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ItemNoteConnection": {
            "edges": [
                123
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "ItemNoteEdge": {
            "cursor": [
                244
            ],
            "node": [
                121
            ],
            "__typename": [
                244
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                118
            ],
            "on_ItemFairWarningNotification": [
                115
            ],
            "__typename": [
                244
            ]
        },
        "ItemNumberChangeInput": {
            "itemId": [
                244
            ],
            "itemNumber": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                126
            ],
            "direction": [
                168
            ],
            "__typename": [
                244
            ]
        },
        "ItemPrice": {
            "currency": [
                82
            ],
            "reserve": [
                111
            ],
            "startingBid": [
                111
            ],
            "lowEstimate": [
                111
            ],
            "highEstimate": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "ItemPriceInput": {
            "currency": [
                82
            ],
            "reserve": [
                111
            ],
            "startingBid": [
                111
            ],
            "lowEstimate": [
                111
            ],
            "highEstimate": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "ItemSchema": {
            "schema": [
                137
            ],
            "metadataSchema": [
                137
            ],
            "__typename": [
                244
            ]
        },
        "ItemSpecifications": {
            "type": [
                242
            ],
            "subType": [
                241
            ],
            "height": [
                99
            ],
            "length": [
                99
            ],
            "depth": [
                99
            ],
            "measurementUnit": [
                148
            ],
            "weight": [
                99
            ],
            "weightUnit": [
                277
            ],
            "__typename": [
                244
            ]
        },
        "ItemSpecificationsInput": {
            "type": [
                242
            ],
            "subType": [
                241
            ],
            "height": [
                99
            ],
            "length": [
                99
            ],
            "depth": [
                99
            ],
            "measurementUnit": [
                148
            ],
            "weight": [
                99
            ],
            "weightUnit": [
                277
            ],
            "__typename": [
                244
            ]
        },
        "ItemStatus": {},
        "ItemsConnection": {
            "edges": [
                135
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "ItemsEdge": {
            "cursor": [
                244
            ],
            "node": [
                113
            ],
            "__typename": [
                244
            ]
        },
        "ItemsFilter": {
            "onlyMyItems": [
                54
            ],
            "title": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "JSON": {},
        "Link": {
            "type": [
                140
            ],
            "url": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "LinkInput": {
            "type": [
                140
            ],
            "url": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                204
            ],
            "cursor": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "LiveStream": {
            "on_ExternalLiveStream": [
                96
            ],
            "on_BastaLiveStream": [
                33
            ],
            "__typename": [
                244
            ]
        },
        "LiveStreamInput": {
            "url": [
                244
            ],
            "type": [
                144
            ],
            "__typename": [
                244
            ]
        },
        "LiveStreamType": {},
        "MailingAddress": {
            "name": [
                244
            ],
            "company": [
                244
            ],
            "phone": [
                244
            ],
            "line1": [
                244
            ],
            "line2": [
                244
            ],
            "city": [
                244
            ],
            "state": [
                244
            ],
            "postalCode": [
                244
            ],
            "country": [
                63
            ],
            "__typename": [
                244
            ]
        },
        "MailingAddressInput": {
            "name": [
                244
            ],
            "company": [
                244
            ],
            "phone": [
                244
            ],
            "line1": [
                244
            ],
            "line2": [
                244
            ],
            "city": [
                244
            ],
            "state": [
                244
            ],
            "postalCode": [
                244
            ],
            "country": [
                63
            ],
            "__typename": [
                244
            ]
        },
        "MaxBidOnBehalfInput": {
            "userId": [
                244
            ],
            "maxAmount": [
                111
            ],
            "itemId": [
                244
            ],
            "saleId": [
                244
            ],
            "bidOrigin": [
                41
            ],
            "__typename": [
                244
            ]
        },
        "MeasurementUnit": {},
        "Metafield": {
            "id": [
                244
            ],
            "key": [
                244
            ],
            "value": [
                244
            ],
            "valueType": [
                151
            ],
            "entityType": [
                150
            ],
            "__typename": [
                244
            ]
        },
        "MetafieldEntityType": {},
        "MetafieldValueType": {},
        "Mutation": {
            "updateAccount": [
                1,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        250,
                        "UpdateAccountInput!"
                    ]
                }
            ],
            "createSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        78,
                        "CreateSaleInput!"
                    ]
                }
            ],
            "updateSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "saleId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        262,
                        "UpdateSaleInput!"
                    ]
                }
            ],
            "openSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        157,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "closeSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        59,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "setSaleStatus": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        237,
                        "SetSaleStatusInput!"
                    ]
                }
            ],
            "startClosingSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        243,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "forceOpenSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        157,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "forceCloseSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        59,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "forceStartClosingSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        243,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "publishSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        181,
                        "PublishSaleInput!"
                    ]
                }
            ],
            "createItem": [
                113,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        68,
                        "CreateItemInput!"
                    ]
                }
            ],
            "updateItem": [
                113,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "itemId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        255,
                        "UpdateItemInput!"
                    ]
                }
            ],
            "updateItemNumbers": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        256,
                        "UpdateItemNumbersInput!"
                    ]
                }
            ],
            "createItemForSale": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        206,
                        "SaleItemInput!"
                    ]
                }
            ],
            "addItemToSale": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        13,
                        "AddItemToSaleInput!"
                    ]
                }
            ],
            "updateItemForSale": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        263,
                        "UpdateSaleItemInput!"
                    ]
                }
            ],
            "setItemWinner": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        234,
                        "SetItemWinnerInput!"
                    ]
                }
            ],
            "setSaleItemStatus": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        236,
                        "SetSaleItemStatusInput!"
                    ]
                }
            ],
            "removeItemFromSale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        188,
                        "RemoveSaleItemInput!"
                    ]
                }
            ],
            "createApiKey": [
                23,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        25,
                        "ApiKeyInput!"
                    ]
                }
            ],
            "revokeApiKey": [
                54,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        195,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "createApiToken": [
                29,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        30,
                        "ApiTokenInput!"
                    ]
                }
            ],
            "revokeApiToken": [
                54,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        196,
                        "RevokeApiTokenInput!"
                    ]
                }
            ],
            "bidOnBehalf": [
                34,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        38,
                        "BidOnBehalfInput!"
                    ]
                }
            ],
            "maxBidOnBehalf": [
                34,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        147,
                        "MaxBidOnBehalfInput!"
                    ]
                }
            ],
            "cancelLatestBidOnItem": [
                57,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        55,
                        "CancelLatestBidOnItemInput!"
                    ]
                }
            ],
            "setUserIdOnBid": [
                34,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        238,
                        "SetUserIdOnBidInput!"
                    ]
                }
            ],
            "createBidderToken": [
                50,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        51,
                        "BidderTokenInput!"
                    ]
                }
            ],
            "createUserTokenV2": [
                274,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        275,
                        "UserTokenInput!"
                    ]
                }
            ],
            "addActionHookSubscription": [
                9,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        10,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "updateActionHookSubscription": [
                9,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        251,
                        "UpdateActionHookSubscriptionInput!"
                    ]
                }
            ],
            "deleteActionHookSubscription": [
                54,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        84,
                        "DeleteActionHookSubscriptionInput!"
                    ]
                }
            ],
            "testActionHook": [
                247,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        10,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "onboardPaymentAccount": [
                155,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        154,
                        "OnboardPaymentAccountInput!"
                    ]
                }
            ],
            "continueOnboardPaymentAccount": [
                155,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        62,
                        "ContinueOnboardPaymentAccountInput!"
                    ]
                }
            ],
            "acceptTerms": [
                244,
                {
                    "accountId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "createItemImage": [
                108,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        67,
                        "CreateItemImage!"
                    ]
                }
            ],
            "reorderItemImages": [
                108,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        192,
                        "ReorderItemImages!"
                    ]
                }
            ],
            "reorderImages": [
                108,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        191,
                        "ReorderImagesInput!"
                    ]
                }
            ],
            "deleteItemImage": [
                108,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        86,
                        "DeleteItemImageInput!"
                    ]
                }
            ],
            "deleteImage": [
                108,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        85,
                        "DeleteImageInput!"
                    ]
                }
            ],
            "addPaddleToSale": [
                164,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        16,
                        "AddPaddleToSaleInput!"
                    ]
                }
            ],
            "removePaddleFromSale": [
                164,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        187,
                        "RemovePaddleFromSaleInput!"
                    ]
                }
            ],
            "registerUserPaddle": [
                164,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        185,
                        "RegisterUserPaddleInput!"
                    ]
                }
            ],
            "addMessageNotificationToItem": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        15,
                        "AddMessageNotificationToItemInput!"
                    ]
                }
            ],
            "addFairWarningNotificationToItem": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        12,
                        "AddFairWarningNotificationToItemInput!"
                    ]
                }
            ],
            "addLiveStreamToSale": [
                142,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        14,
                        "AddLiveStreamToSaleInput!"
                    ]
                }
            ],
            "deleteLiveStreamFromSale": [
                54,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        88,
                        "DeleteLiveStreamFromSaleInput!"
                    ]
                }
            ],
            "addTagToItem": [
                246,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        17,
                        "AddTagToItemInput!"
                    ]
                }
            ],
            "removeTagFromItem": [
                54,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        189,
                        "RemoveTagFromItemInput!"
                    ]
                }
            ],
            "addTagToSaleItem": [
                246,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        18,
                        "AddTagToSaleItemInput!"
                    ]
                }
            ],
            "removeTagFromSaleItem": [
                54,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        190,
                        "RemoveTagFromSaleItemInput!"
                    ]
                }
            ],
            "createItemNote": [
                121,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        69,
                        "CreateItemNoteInput!"
                    ]
                }
            ],
            "createUploadUrl": [
                264,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        81,
                        "CreateUploadUrlInput!"
                    ]
                }
            ],
            "createItemSchema": [
                130,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        70,
                        "CreateItemSchemaInput!"
                    ]
                }
            ],
            "updateGlobalIncrementTable": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        254,
                        "UpdateGlobalIncrementTableInput!"
                    ]
                }
            ],
            "updateGlobalDates": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        253,
                        "UpdateGlobalDatesInput!"
                    ]
                }
            ],
            "updateGlobalClosingTimeCountdown": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        252,
                        "UpdateGlobalClosingTimeCountdownInput!"
                    ]
                }
            ],
            "passLiveItem": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        172,
                        "PassLiveItemInput!"
                    ]
                }
            ],
            "sellLiveItem": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        231,
                        "SellLiveItemInput!"
                    ]
                }
            ],
            "connectShopifyToAccount": [
                240,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        61,
                        "ConnectShopifyToAccountInput!"
                    ]
                }
            ],
            "createPaymentOrder": [
                176,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        75,
                        "CreatePaymentOrderInput!"
                    ]
                }
            ],
            "createOrder": [
                176,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        71,
                        "CreateOrderInput!"
                    ]
                }
            ],
            "createOrderLine": [
                160,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        73,
                        "CreateOrderLineInput!"
                    ]
                }
            ],
            "updateOrderLine": [
                160,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        259,
                        "UpdateOrderLineInput!"
                    ]
                }
            ],
            "deleteOrderLine": [
                160,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        90,
                        "DeleteOrderLineInput!"
                    ]
                }
            ],
            "updatePaymentOrder": [
                176,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        260,
                        "UpdatePaymentOrderInput!"
                    ]
                }
            ],
            "updateOrder": [
                176,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        257,
                        "UpdateOrderInput!"
                    ]
                }
            ],
            "deletePaymentOrder": [
                176,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        91,
                        "DeletePaymentOrderInput!"
                    ]
                }
            ],
            "cancelPaymentOrder": [
                176,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        56,
                        "CancelPaymentOrderInput!"
                    ]
                }
            ],
            "publishPaymentOrder": [
                176,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        180,
                        "PublishPaymentOrderInput!"
                    ]
                }
            ],
            "createInvoice": [
                112,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        66,
                        "CreateInvoiceInput!"
                    ]
                }
            ],
            "createPayment": [
                173,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        74,
                        "CreatePaymentInput!"
                    ]
                }
            ],
            "createAccountFee": [
                2,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        64,
                        "CreateAccountFeeInput!"
                    ]
                }
            ],
            "updateAccountFee": [
                2,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        249,
                        "UpdateAccountFeeInput!"
                    ]
                }
            ],
            "deleteAccountFee": [
                107,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        83,
                        "DeleteAccountFeeInput!"
                    ]
                }
            ],
            "createSaleRegistration": [
                215,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        80,
                        "CreateSaleRegistrationInput!"
                    ]
                }
            ],
            "acceptSaleRegistration": [
                215,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        0,
                        "AcceptSaleRegistrationInput!"
                    ]
                }
            ],
            "rejectSaleRegistration": [
                215,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        186,
                        "RejectSaleRegistrationInput!"
                    ]
                }
            ],
            "deleteSaleRegistration": [
                107,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        94,
                        "DeleteSaleRegistrationInput!"
                    ]
                }
            ],
            "createSaleItemRegistration": [
                208,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        79,
                        "CreateSaleItemRegistrationInput!"
                    ]
                }
            ],
            "deleteSaleItemRegistration": [
                107,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        93,
                        "DeleteSaleItemRegistrationInput!"
                    ]
                }
            ],
            "setMetafields": [
                149,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "metafields": [
                        235,
                        "[SetMetafieldInput!]!"
                    ]
                }
            ],
            "deleteMetafield": [
                54,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "input": [
                        89,
                        "DeleteMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                244
            ]
        },
        "Node": {
            "id": [
                107
            ],
            "on_AccountFee": [
                2
            ],
            "on_ActionHookLog": [
                5
            ],
            "on_ApiKey": [
                21
            ],
            "on_ApiToken": [
                27
            ],
            "on_FeeRule": [
                97
            ],
            "on_Item": [
                113
            ],
            "on_PaymentOrder": [
                176
            ],
            "on_Sale": [
                197
            ],
            "on_SaleItemRegistration": [
                208
            ],
            "on_SaleRegistration": [
                215
            ],
            "on_User": [
                265
            ],
            "__typename": [
                244
            ]
        },
        "OnboardPaymentAccountInput": {
            "sellerLocation": [
                232
            ],
            "type": [
                174
            ],
            "returnUrl": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "OnboardPaymentAccountResponse": {
            "onboardingUrl": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                42
            ],
            "__typename": [
                244
            ]
        },
        "OpenSaleInput": {
            "saleId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "OrderConnection": {
            "edges": [
                159
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "OrderEdge": {
            "cursor": [
                244
            ],
            "node": [
                176
            ],
            "__typename": [
                244
            ]
        },
        "OrderLine": {
            "orderLineId": [
                107
            ],
            "amount": [
                111
            ],
            "description": [
                244
            ],
            "orderLineType": [
                162
            ],
            "fees": [
                161
            ],
            "sellerFees": [
                161
            ],
            "item": [
                207
            ],
            "__typename": [
                244
            ]
        },
        "OrderLineFee": {
            "id": [
                107
            ],
            "description": [
                244
            ],
            "name": [
                244
            ],
            "amount": [
                111
            ],
            "isSystemDefined": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "OrderLineType": {},
        "OrderStatus": {},
        "Paddle": {
            "identifier": [
                244
            ],
            "userId": [
                244
            ],
            "user": [
                273
            ],
            "type": [
                166
            ],
            "created": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                42
            ],
            "__typename": [
                244
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                107
            ],
            "endCursor": [
                107
            ],
            "hasNextPage": [
                54
            ],
            "totalRecords": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "PaginationDirection": {},
        "Participant": {
            "userId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ParticipantsConnection": {
            "edges": [
                171
            ],
            "totalCount": [
                111
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "ParticipantsEdge": {
            "cursor": [
                244
            ],
            "node": [
                169
            ],
            "__typename": [
                244
            ]
        },
        "PassLiveItemInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "transitionToUpcomingLot": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "Payment": {
            "paymentId": [
                107
            ],
            "__typename": [
                244
            ]
        },
        "PaymentAccountType": {},
        "PaymentDetails": {
            "paymentProviderAccountId": [
                244
            ],
            "status": [
                177
            ],
            "accountFees": [
                2
            ],
            "__typename": [
                244
            ]
        },
        "PaymentOrder": {
            "id": [
                107
            ],
            "orderId": [
                107
            ],
            "title": [
                244
            ],
            "currency": [
                82
            ],
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "invoiceId": [
                244
            ],
            "invoice": [
                112
            ],
            "paymentId": [
                244
            ],
            "userId": [
                244
            ],
            "orderLines": [
                160
            ],
            "user": [
                273
            ],
            "billingAddress": [
                145
            ],
            "shippingAddress": [
                145
            ],
            "status": [
                163
            ],
            "created": [
                244
            ],
            "modified": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "PaymentProviderStatus": {},
        "Permission": {},
        "PhoneBidOrigin": {
            "type": [
                42
            ],
            "__typename": [
                244
            ]
        },
        "PublishPaymentOrderInput": {
            "orderId": [
                107
            ],
            "__typename": [
                244
            ]
        },
        "PublishSaleInput": {
            "saleId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "Query": {
            "account": [
                1,
                {
                    "accountId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "accounts": [
                1
            ],
            "sales": [
                199,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "filter": [
                        202
                    ]
                }
            ],
            "sale": [
                197,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "id": [
                        107,
                        "ID!"
                    ],
                    "saleIdType": [
                        203
                    ]
                }
            ],
            "saleItem": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "saleId": [
                        244,
                        "String!"
                    ],
                    "itemId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "saleItemByExternalId": [
                204,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "externalId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "apiKeys": [
                22,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ]
                }
            ],
            "searchKey": [
                230,
                {
                    "accountId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                28,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ]
                }
            ],
            "actionHookSubscriptions": [
                9,
                {
                    "accountId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "actionHookLogs": [
                6,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "filter": [
                        4
                    ]
                }
            ],
            "item": [
                113,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "itemId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "itemByExternalId": [
                113,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "externalId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "items": [
                134,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "itemsFilter": [
                        136,
                        "ItemsFilter!"
                    ],
                    "direction": [
                        168
                    ]
                }
            ],
            "salesAggregate": [
                227,
                {
                    "accountId": [
                        244,
                        "String!"
                    ]
                }
            ],
            "userBidActivity": [
                268,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "userId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "filter": [
                        270
                    ],
                    "direction": [
                        168
                    ],
                    "orderBy": [
                        39
                    ]
                }
            ],
            "user": [
                265,
                {
                    "accountID": [
                        244,
                        "String!"
                    ],
                    "userId": [
                        244,
                        "String!"
                    ],
                    "idType": [
                        272,
                        "UserIdType!"
                    ]
                }
            ],
            "orders": [
                158,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "before": [
                        244
                    ],
                    "last": [
                        111
                    ]
                }
            ],
            "userOrders": [
                158,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "userID": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "before": [
                        244
                    ],
                    "last": [
                        111
                    ]
                }
            ],
            "saleRegistrations": [
                220,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "filter": [
                        222
                    ],
                    "direction": [
                        168
                    ],
                    "sortByField": [
                        217
                    ]
                }
            ],
            "users": [
                276,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ]
                }
            ],
            "__typename": [
                244
            ]
        },
        "RangeRule": {
            "highRange": [
                111
            ],
            "lowRange": [
                111
            ],
            "step": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "RangeRuleInput": {
            "highRange": [
                111
            ],
            "lowRange": [
                111
            ],
            "step": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "RegisterUserPaddleInput": {
            "saleId": [
                244
            ],
            "paddleIdentifier": [
                244
            ],
            "type": [
                166
            ],
            "email": [
                244
            ],
            "firstName": [
                244
            ],
            "lastName": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "RejectSaleRegistrationInput": {
            "registrationId": [
                244
            ],
            "reason": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "RemovePaddleFromSaleInput": {
            "saleId": [
                244
            ],
            "paddleIdentifier": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "RemoveSaleItemInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "RemoveTagFromItemInput": {
            "itemId": [
                244
            ],
            "name": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "RemoveTagFromSaleItemInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "name": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ReorderImagesInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "imageType": [
                110
            ],
            "imageOrderChanges": [
                109
            ],
            "__typename": [
                244
            ]
        },
        "ReorderItemImages": {
            "itemId": [
                244
            ],
            "imageOrderChanges": [
                109
            ],
            "__typename": [
                244
            ]
        },
        "ReserveAutoBidMethod": {},
        "ReserveStatus": {},
        "RevokeApiKeyInput": {
            "apiKeyId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "RevokeApiTokenInput": {
            "apiTokenId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "Sale": {
            "id": [
                107
            ],
            "cursor": [
                244
            ],
            "type": [
                226
            ],
            "accountId": [
                244
            ],
            "title": [
                244
            ],
            "description": [
                244
            ],
            "currency": [
                244
            ],
            "status": [
                225
            ],
            "items": [
                212,
                {
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "filter": [
                        205
                    ],
                    "order": [
                        127
                    ]
                }
            ],
            "incrementTable": [
                36
            ],
            "dates": [
                200
            ],
            "participants": [
                170,
                {
                    "take": [
                        111
                    ],
                    "cursor": [
                        244
                    ],
                    "direction": [
                        168
                    ]
                }
            ],
            "sequenceNumber": [
                111
            ],
            "closingMethod": [
                60
            ],
            "closingTimeCountdown": [
                111
            ],
            "images": [
                108
            ],
            "themeType": [
                111
            ],
            "slug": [
                244
            ],
            "reserveAutoBidMethod": [
                193
            ],
            "isTestSale": [
                54
            ],
            "bastaBidClient": [
                54
            ],
            "hidden": [
                54
            ],
            "paddles": [
                164
            ],
            "liveStream": [
                96
            ],
            "liveVideoStream": [
                142
            ],
            "liveItem": [
                141,
                {
                    "itemOrderInput": [
                        127
                    ]
                }
            ],
            "saleBidsCounts": [
                111
            ],
            "sumOfHighestBids": [
                111
            ],
            "statistics": [
                224
            ],
            "bidRestrictions": [
                46
            ],
            "registrations": [
                220,
                {
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "filter": [
                        221
                    ],
                    "direction": [
                        168
                    ],
                    "sortByField": [
                        217
                    ]
                }
            ],
            "orders": [
                158,
                {
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "before": [
                        244
                    ],
                    "last": [
                        111
                    ]
                }
            ],
            "externalId": [
                244
            ],
            "location": [
                244
            ],
            "metafields": [
                149,
                {
                    "input": [
                        103,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                149,
                {
                    "input": [
                        102,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                244
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                197
            ],
            "on_SaleItem": [
                204
            ],
            "on_Node": [
                153
            ],
            "__typename": [
                244
            ]
        },
        "SaleConnection": {
            "edges": [
                229
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "SaleDates": {
            "closingDate": [
                244
            ],
            "openDate": [
                244
            ],
            "liveDate": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleDatesInput": {
            "closingDate": [
                244
            ],
            "openDate": [
                244
            ],
            "liveDate": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleFilter": {
            "statuses": [
                225
            ],
            "showTestSales": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "SaleIDType": {},
        "SaleItem": {
            "id": [
                107
            ],
            "cursor": [
                244
            ],
            "accountId": [
                244
            ],
            "title": [
                244
            ],
            "totalBids": [
                111
            ],
            "description": [
                244
            ],
            "currentBid": [
                111
            ],
            "currency": [
                244
            ],
            "leaderId": [
                244
            ],
            "saleId": [
                244
            ],
            "bids": [
                34,
                {
                    "collapseSequentialUserBids": [
                        54
                    ]
                }
            ],
            "reserve": [
                111
            ],
            "startingBid": [
                111
            ],
            "incrementTable": [
                36
            ],
            "status": [
                133
            ],
            "estimates": [
                95
            ],
            "itemNumber": [
                111
            ],
            "dates": [
                114
            ],
            "allowedBidTypes": [
                49
            ],
            "images": [
                108
            ],
            "slug": [
                244
            ],
            "paymentOrder": [
                176
            ],
            "paymentOrders": [
                176
            ],
            "hidden": [
                54
            ],
            "nextAsks": [
                111,
                {
                    "iterations": [
                        111
                    ]
                }
            ],
            "reserveMet": [
                54
            ],
            "notifications": [
                124
            ],
            "tags": [
                244
            ],
            "tagsV2": [
                246
            ],
            "reserveStatus": [
                194
            ],
            "externalId": [
                244
            ],
            "displayNumber": [
                244
            ],
            "metadata": [
                119
            ],
            "closingTimeCountdown": [
                111
            ],
            "specifications": [
                131
            ],
            "registrations": [
                211,
                {
                    "first": [
                        111
                    ],
                    "after": [
                        244
                    ],
                    "filter": [
                        210
                    ]
                }
            ],
            "feeRules": [
                97
            ],
            "location": [
                244
            ],
            "metafields": [
                149,
                {
                    "input": [
                        103,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                149,
                {
                    "input": [
                        102,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemFilter": {
            "statuses": [
                133
            ],
            "showHiddenItems": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemInput": {
            "saleId": [
                244
            ],
            "bidIncrementTable": [
                37
            ],
            "title": [
                244
            ],
            "description": [
                244
            ],
            "startingBid": [
                111
            ],
            "valuationAmount": [
                111
            ],
            "valuationCurrency": [
                244
            ],
            "reserve": [
                111
            ],
            "lowEstimate": [
                111
            ],
            "highEstimate": [
                111
            ],
            "ItemNumber": [
                111
            ],
            "allowedBidTypes": [
                49
            ],
            "openDate": [
                244
            ],
            "closingDate": [
                244
            ],
            "closingTimeCountdown": [
                111
            ],
            "hidden": [
                54
            ],
            "tags": [
                244
            ],
            "specifications": [
                132
            ],
            "externalId": [
                244
            ],
            "displayNumber": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemOrItem": {
            "on_SaleItem": [
                204
            ],
            "on_Item": [
                113
            ],
            "on_Node": [
                153
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemRegistration": {
            "id": [
                107
            ],
            "saleRegistration": [
                215
            ],
            "saleItem": [
                204
            ],
            "createdAt": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemRegistrationEdge": {
            "node": [
                208
            ],
            "cursor": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemRegistrationFilter": {
            "types": [
                219
            ],
            "userId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemRegistrationsConnection": {
            "edges": [
                209
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemsConnection": {
            "edges": [
                213
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "SaleItemsEdge": {
            "cursor": [
                244
            ],
            "node": [
                204
            ],
            "__typename": [
                244
            ]
        },
        "SaleMetrics": {
            "totalItems": [
                111
            ],
            "itemsOverReserve": [
                111
            ],
            "itemsWithBids": [
                111
            ],
            "totalBids": [
                111
            ],
            "uniqueBidders": [
                111
            ],
            "highEstimateSum": [
                111
            ],
            "lowEstimateSum": [
                111
            ],
            "currentBidOverReserveTotal": [
                111
            ],
            "currentBidTotal": [
                111
            ],
            "maxBidsTotal": [
                111
            ],
            "itemsOverReservePercentage": [
                99
            ],
            "itemsWithBidsPercentage": [
                99
            ],
            "averageBidsPerItem": [
                99
            ],
            "hiddenItems": [
                111
            ],
            "highestBid": [
                104
            ],
            "bidderEngagement": [
                99
            ],
            "dailyBidCounts": [
                223
            ],
            "calculatedAt": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleRegistration": {
            "id": [
                107
            ],
            "account": [
                1
            ],
            "sale": [
                197
            ],
            "userId": [
                244
            ],
            "type": [
                219
            ],
            "identifier": [
                244
            ],
            "status": [
                218
            ],
            "rejectedReason": [
                244
            ],
            "createdAt": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleRegistrationEdge": {
            "node": [
                215
            ],
            "cursor": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleRegistrationSortByField": {},
        "SaleRegistrationStatus": {},
        "SaleRegistrationType": {},
        "SaleRegistrationsConnection": {
            "edges": [
                216
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "SaleRegistrationsForSaleFilter": {
            "types": [
                219
            ],
            "statuses": [
                218
            ],
            "userId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SaleRegistrationsQueryFilter": {
            "saleIds": [
                244
            ],
            "userIds": [
                244
            ],
            "types": [
                219
            ],
            "statuses": [
                218
            ],
            "__typename": [
                244
            ]
        },
        "SaleStatisticBidCounts": {
            "date": [
                244
            ],
            "bidCount": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "SaleStatistics": {
            "saleMetrics": [
                214
            ],
            "__typename": [
                244
            ]
        },
        "SaleStatus": {},
        "SaleType": {},
        "SalesAggregate": {
            "open": [
                111
            ],
            "closing": [
                111
            ],
            "closed": [
                111
            ],
            "published": [
                111
            ],
            "unpublished": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "SalesAggregateInput": {
            "accountId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SalesEdge": {
            "cursor": [
                244
            ],
            "node": [
                197
            ],
            "__typename": [
                244
            ]
        },
        "SearchKey": {
            "key": [
                244
            ],
            "collections": [
                244
            ],
            "expiration": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SellLiveItemInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "transitionToUpcomingLot": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "SellerLocation": {},
        "SellerTerms": {
            "accepted_by": [
                244
            ],
            "accepted_date": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SetItemWinnerInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "bidId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SetMetafieldInput": {
            "entityType": [
                150
            ],
            "entityId": [
                244
            ],
            "key": [
                244
            ],
            "value": [
                244
            ],
            "valueType": [
                151
            ],
            "__typename": [
                244
            ]
        },
        "SetSaleItemStatusInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "status": [
                133
            ],
            "__typename": [
                244
            ]
        },
        "SetSaleStatusInput": {
            "saleId": [
                244
            ],
            "status": [
                225
            ],
            "__typename": [
                244
            ]
        },
        "SetUserIdOnBidInput": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "bidId": [
                244
            ],
            "userId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ShopifyConfiguration": {
            "shopId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "ShopifyConnection": {
            "accountId": [
                244
            ],
            "shopId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "StartClosingSaleInput": {
            "saleId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "String": {},
        "Subscription": {
            "saleActivity": [
                198,
                {
                    "accountId": [
                        244,
                        "String!"
                    ],
                    "saleId": [
                        107,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        117
                    ]
                }
            ],
            "__typename": [
                244
            ]
        },
        "Tag": {
            "id": [
                107
            ],
            "name": [
                244
            ],
            "created": [
                244
            ],
            "associated": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "TestActionHookResponse": {
            "requestHeaders": [
                105
            ],
            "requestPayload": [
                244
            ],
            "requestMethod": [
                244
            ],
            "responseHeaders": [
                105
            ],
            "responseBody": [
                244
            ],
            "statusCode": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "TokenMetadata": {
            "userId": [
                244
            ],
            "ttl": [
                111
            ],
            "permissions": [
                58
            ],
            "__typename": [
                244
            ]
        },
        "UpdateAccountFeeInput": {
            "id": [
                244
            ],
            "name": [
                244
            ],
            "type": [
                3
            ],
            "value": [
                111
            ],
            "upperLteLimit": [
                111
            ],
            "lowerLimit": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "UpdateAccountInput": {
            "name": [
                244
            ],
            "email": [
                244
            ],
            "handle": [
                244
            ],
            "description": [
                244
            ],
            "links": [
                139
            ],
            "generateNewHandle": [
                54
            ],
            "enableBastaStreaming": [
                54
            ],
            "__typename": [
                244
            ]
        },
        "UpdateActionHookSubscriptionInput": {
            "action": [
                11
            ],
            "url": [
                244
            ],
            "headers": [
                106
            ],
            "__typename": [
                244
            ]
        },
        "UpdateGlobalClosingTimeCountdownInput": {
            "saleId": [
                244
            ],
            "closingTimeCountdown": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "UpdateGlobalDatesInput": {
            "saleId": [
                244
            ],
            "openDate": [
                244
            ],
            "closingDate": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UpdateGlobalIncrementTableInput": {
            "saleId": [
                244
            ],
            "incrementTable": [
                37
            ],
            "__typename": [
                244
            ]
        },
        "UpdateItemInput": {
            "title": [
                244
            ],
            "description": [
                244
            ],
            "price": [
                129
            ],
            "externalId": [
                244
            ],
            "metadata": [
                120
            ],
            "tags": [
                244
            ],
            "specifications": [
                132
            ],
            "valuationAmount": [
                111
            ],
            "valuationCurrency": [
                244
            ],
            "location": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UpdateItemNumbersInput": {
            "saleId": [
                244
            ],
            "itemNumberChanges": [
                125
            ],
            "__typename": [
                244
            ]
        },
        "UpdateOrderInput": {
            "id": [
                107
            ],
            "title": [
                244
            ],
            "billingAddress": [
                146
            ],
            "shippingAddress": [
                146
            ],
            "__typename": [
                244
            ]
        },
        "UpdateOrderLineFeeInput": {
            "description": [
                244
            ],
            "amount": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "UpdateOrderLineInput": {
            "id": [
                107
            ],
            "orderId": [
                107
            ],
            "amount": [
                111
            ],
            "description": [
                244
            ],
            "fees": [
                258
            ],
            "__typename": [
                244
            ]
        },
        "UpdatePaymentOrderInput": {
            "orderId": [
                107
            ],
            "userId": [
                244
            ],
            "orderLines": [
                261
            ],
            "__typename": [
                244
            ]
        },
        "UpdatePaymentOrderLineInput": {
            "orderLineId": [
                107
            ],
            "amount": [
                111
            ],
            "description": [
                244
            ],
            "orderLineType": [
                162
            ],
            "__typename": [
                244
            ]
        },
        "UpdateSaleInput": {
            "dates": [
                201
            ],
            "title": [
                244
            ],
            "description": [
                244
            ],
            "currency": [
                244
            ],
            "bidIncrementTable": [
                37
            ],
            "closingMethod": [
                60
            ],
            "closingTimeCountdown": [
                111
            ],
            "themeType": [
                111
            ],
            "slug": [
                244
            ],
            "hidden": [
                54
            ],
            "liveStream": [
                143
            ],
            "saleType": [
                226
            ],
            "isTestSale": [
                54
            ],
            "bidRestrictions": [
                47
            ],
            "externalId": [
                244
            ],
            "location": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UpdateSaleItemInput": {
            "itemId": [
                244
            ],
            "saleId": [
                244
            ],
            "bidIncrementTable": [
                37
            ],
            "title": [
                244
            ],
            "description": [
                244
            ],
            "startingBid": [
                111
            ],
            "valuationAmount": [
                111
            ],
            "valuationCurrency": [
                244
            ],
            "reserve": [
                111
            ],
            "lowEstimate": [
                111
            ],
            "highEstimate": [
                111
            ],
            "allowedBidTypes": [
                49
            ],
            "openDate": [
                244
            ],
            "closingDate": [
                244
            ],
            "slug": [
                244
            ],
            "hidden": [
                54
            ],
            "closingTimeCountdown": [
                111
            ],
            "tags": [
                244
            ],
            "specifications": [
                132
            ],
            "externalId": [
                244
            ],
            "displayNumber": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UploadUrl": {
            "imageId": [
                244
            ],
            "uploadUrl": [
                244
            ],
            "imageUrl": [
                244
            ],
            "headers": [
                105
            ],
            "order": [
                111
            ],
            "externalId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "User": {
            "id": [
                107
            ],
            "accountId": [
                244
            ],
            "userId": [
                244
            ],
            "created": [
                244
            ],
            "modified": [
                244
            ],
            "profile": [
                273
            ],
            "__typename": [
                244
            ]
        },
        "UserAddress": {
            "id": [
                244
            ],
            "addressType": [
                19
            ],
            "line1": [
                244
            ],
            "line2": [
                244
            ],
            "city": [
                244
            ],
            "state": [
                244
            ],
            "postalCode": [
                244
            ],
            "country": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UserBidActivity": {
            "accountId": [
                244
            ],
            "bidId": [
                244
            ],
            "saleId": [
                244
            ],
            "sale": [
                197
            ],
            "itemId": [
                244
            ],
            "saleItem": [
                204
            ],
            "amount": [
                111
            ],
            "maxAmount": [
                111
            ],
            "userId": [
                244
            ],
            "date": [
                244
            ],
            "bidStatus": [
                48
            ],
            "bidSequenceNumber": [
                111
            ],
            "paddle": [
                164
            ],
            "__typename": [
                244
            ]
        },
        "UserBidActivityConnection": {
            "edges": [
                269
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "UserBidActivityEdge": {
            "cursor": [
                244
            ],
            "node": [
                267
            ],
            "__typename": [
                244
            ]
        },
        "UserBidActivityFilter": {
            "saleId": [
                244
            ],
            "itemId": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UserEdge": {
            "node": [
                265
            ],
            "cursor": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UserIdType": {},
        "UserInfo": {
            "userId": [
                244
            ],
            "name": [
                244
            ],
            "email": [
                244
            ],
            "addresses": [
                266
            ],
            "__typename": [
                244
            ]
        },
        "UserToken": {
            "token": [
                244
            ],
            "expirationDate": [
                244
            ],
            "__typename": [
                244
            ]
        },
        "UserTokenInput": {
            "userID": [
                244
            ],
            "ttlMinutes": [
                111
            ],
            "__typename": [
                244
            ]
        },
        "UsersConnection": {
            "edges": [
                271
            ],
            "pageInfo": [
                167
            ],
            "__typename": [
                244
            ]
        },
        "WeightUnit": {}
    }
}