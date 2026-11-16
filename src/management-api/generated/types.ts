export default {
    "scalars": [
        5,
        11,
        14,
        34,
        42,
        45,
        51,
        56,
        60,
        63,
        66,
        68,
        69,
        76,
        78,
        90,
        91,
        111,
        117,
        121,
        124,
        130,
        131,
        138,
        143,
        144,
        149,
        150,
        151,
        158,
        169,
        176,
        177,
        178,
        181,
        183,
        185,
        186,
        190,
        192,
        194,
        198,
        203,
        211,
        212,
        213,
        215,
        218,
        220,
        228,
        229,
        233,
        236,
        291,
        292,
        295,
        321,
        336,
        339,
        352,
        354,
        355,
        357,
        374,
        375,
        380,
        381,
        383,
        387,
        391,
        404,
        408,
        419,
        425,
        430,
        438,
        443,
        447,
        456,
        458,
        460,
        462,
        471,
        472,
        473,
        476,
        478,
        481,
        487,
        489,
        491,
        492,
        505,
        507,
        512,
        514,
        520,
        526,
        527,
        531,
        536,
        539,
        541,
        545,
        546,
        548,
        552,
        554,
        560,
        566,
        601,
        602,
        603,
        617,
        621,
        626,
        655,
        656,
        657,
        681,
        682,
        701,
        705,
        709,
        778,
        779,
        793,
        795,
        804,
        813,
        816,
        817,
        823,
        828,
        896,
        911,
        923,
        926,
        927,
        928,
        932,
        933
    ],
    "types": {
        "AcceptPhoneClerkSuggestionInput": {
            "planId": [
                374
            ],
            "saleItemRegistrationId": [
                374
            ],
            "lineNumber": [
                387
            ],
            "reasonCode": [
                541
            ],
            "evidenceAssignmentId": [
                374
            ],
            "evidenceSaleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AcceptSaleRegistrationInput": {
            "registrationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Account": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "email": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "handle": [
                795
            ],
            "description": [
                795
            ],
            "imageUrl": [
                795
            ],
            "links": [
                439
            ],
            "paymentDetails": [
                521
            ],
            "bastaBidClient": [
                138
            ],
            "terms": [
                710
            ],
            "itemSchema": [
                438
            ],
            "bastaLiveStreamEnabled": [
                138
            ],
            "shopifyConfiguration": [
                771
            ],
            "aggregators": [
                44
            ],
            "metafields": [
                459,
                {
                    "input": [
                        366,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                459,
                {
                    "input": [
                        365,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "homeCountryCode": [
                236
            ],
            "auctionSymbols": [
                109
            ],
            "preferredAuctionFormat": [
                682
            ],
            "defaultCurrency": [
                292
            ],
            "organisationDetails": [
                508
            ],
            "defaultStartBidPercentage": [
                357
            ],
            "saleUrlTemplate": [
                795
            ],
            "arrSettings": [
                96
            ],
            "creatorSettings": [
                290
            ],
            "charges": [
                179,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        182
                    ]
                }
            ],
            "buyerPremiums": [
                145,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        147
                    ]
                }
            ],
            "accountCodes": [
                3
            ],
            "taxCodes": [
                815
            ],
            "streamChannels": [
                794
            ],
            "taxSettings": [
                818
            ],
            "itemTypeTaxDefaults": [
                433
            ],
            "identityVerification": [
                376
            ],
            "documentBranding": [
                325
            ],
            "consignmentContractTemplate": [
                214
            ],
            "consignmentContractTemplateVersions": [
                214
            ],
            "workflowSettings": [
                937
            ],
            "__typename": [
                795
            ]
        },
        "AccountCode": {
            "id": [
                374
            ],
            "code": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AccountFee": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "type": [
                5
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "__typename": [
                795
            ]
        },
        "AccountFeeType": {},
        "AccountImageAssociation": {
            "accountId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ActionHookFilter": {
            "types": [
                14
            ],
            "statuses": [
                11
            ],
            "__typename": [
                795
            ]
        },
        "ActionHookLog": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "idempotencyKey": [
                795
            ],
            "action": [
                14
            ],
            "url": [
                795
            ],
            "headers": [
                372
            ],
            "requestPayload": [
                795
            ],
            "response": [
                795
            ],
            "status": [
                11
            ],
            "error": [
                795
            ],
            "retries": [
                387
            ],
            "createdAt": [
                795
            ],
            "executedAt": [
                795
            ],
            "nextRetryDate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ActionHookLogConnection": {
            "edges": [
                10
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ActionHookLogEdge": {
            "cursor": [
                795
            ],
            "node": [
                8
            ],
            "__typename": [
                795
            ]
        },
        "ActionHookStatus": {},
        "ActionHookSubscription": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "action": [
                14
            ],
            "url": [
                795
            ],
            "headers": [
                372
            ],
            "__typename": [
                795
            ]
        },
        "ActionHookSubscriptionInput": {
            "action": [
                14
            ],
            "url": [
                795
            ],
            "headers": [
                373
            ],
            "__typename": [
                795
            ]
        },
        "ActionType": {},
        "Activity": {
            "id": [
                374
            ],
            "entityType": [
                795
            ],
            "entityId": [
                795
            ],
            "activityType": [
                795
            ],
            "principalType": [
                795
            ],
            "principalId": [
                795
            ],
            "occurredAt": [
                795
            ],
            "changes": [
                356
            ],
            "principal": [
                559
            ],
            "__typename": [
                795
            ]
        },
        "AddAppraisalClientsInput": {
            "appraisalId": [
                795
            ],
            "clientUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddAppraisalStaffInput": {
            "appraisalId": [
                795
            ],
            "staffUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddConsignmentStaffInput": {
            "consignmentId": [
                795
            ],
            "consignmentStaffUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddConsignorsInput": {
            "consignmentId": [
                795
            ],
            "consignorUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddDashboardUserRoleInput": {
            "userId": [
                795
            ],
            "role": [
                295
            ],
            "__typename": [
                795
            ]
        },
        "AddFairWarningNotificationToItemInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddItemNoteInput": {
            "itemId": [
                795
            ],
            "noteTypeId": [
                795
            ],
            "note": [
                795
            ],
            "isAlert": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "AddItemToSaleInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "bidIncrementTable": [
                119
            ],
            "startingBid": [
                387
            ],
            "reserve": [
                387
            ],
            "lowEstimate": [
                387
            ],
            "highEstimate": [
                387
            ],
            "ItemNumber": [
                387
            ],
            "allowedBidTypes": [
                131
            ],
            "openDate": [
                795
            ],
            "closingDate": [
                795
            ],
            "slug": [
                795
            ],
            "hidden": [
                138
            ],
            "closingTimeCountdown": [
                387
            ],
            "externalId": [
                795
            ],
            "displayNumber": [
                795
            ],
            "highlight": [
                401
            ],
            "metafields": [
                461
            ],
            "reserveType": [
                603
            ],
            "__typename": [
                795
            ]
        },
        "AddLiveStreamToSaleInput": {
            "saleId": [
                795
            ],
            "url": [
                795
            ],
            "type": [
                447
            ],
            "streamChannelId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddMessageNotificationToItemInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "message": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddPackagingInput": {
            "itemId": [
                795
            ],
            "packaging": [
                422
            ],
            "__typename": [
                795
            ]
        },
        "AddPaddleToSaleInput": {
            "saleId": [
                795
            ],
            "paddleIdentifier": [
                795
            ],
            "userId": [
                795
            ],
            "type": [
                512
            ],
            "__typename": [
                795
            ]
        },
        "AddSpecificationsInput": {
            "itemId": [
                795
            ],
            "specifications": [
                429
            ],
            "__typename": [
                795
            ]
        },
        "AddStatementChargeInput": {
            "lineId": [
                374
            ],
            "chargeId": [
                374
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddTagToItemInput": {
            "itemId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddTagToSaleItemInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddTagToUserInput": {
            "userId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AddUserNoteInput": {
            "userId": [
                795
            ],
            "noteTypeId": [
                795
            ],
            "note": [
                795
            ],
            "isAlert": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "AddressType": {},
        "Affiliate": {
            "id": [
                374
            ],
            "accountId": [
                374
            ],
            "firstName": [
                795
            ],
            "lastName": [
                795
            ],
            "email": [
                795
            ],
            "token": [
                795
            ],
            "createdBy": [
                795
            ],
            "updatedBy": [
                795
            ],
            "createdAt": [
                795
            ],
            "updatedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AffiliateConnection": {
            "edges": [
                37
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "AffiliateEdge": {
            "cursor": [
                795
            ],
            "node": [
                35
            ],
            "__typename": [
                795
            ]
        },
        "AffiliateEventType": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "description": [
                795
            ],
            "metadataSchema": [
                438
            ],
            "__typename": [
                795
            ]
        },
        "AffiliateReport": {
            "resolution": [
                42
            ],
            "dataPoints": [
                40
            ],
            "campaignDataPoints": [
                152
            ],
            "__typename": [
                795
            ]
        },
        "AffiliateReportDataPoint": {
            "affiliateId": [
                374
            ],
            "eventTypeId": [
                374
            ],
            "eventType": [
                38
            ],
            "period": [
                795
            ],
            "eventCount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "AffiliateReportInput": {
            "affiliateIds": [
                374
            ],
            "campaignIds": [
                374
            ],
            "startDate": [
                795
            ],
            "endDate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AffiliateReportResolution": {},
        "AffiliatesInput": {
            "first": [
                387
            ],
            "after": [
                795
            ],
            "direction": [
                514
            ],
            "__typename": [
                795
            ]
        },
        "Aggregator": {
            "name": [
                795
            ],
            "identifier": [
                795
            ],
            "type": [
                124
            ],
            "__typename": [
                795
            ]
        },
        "AmlRiskClass": {},
        "ApiKey": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "accountId": [
                795
            ],
            "created": [
                795
            ],
            "roles": [
                51
            ],
            "__typename": [
                795
            ]
        },
        "ApiKeyConnection": {
            "edges": [
                49
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ApiKeyCreated": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "generatedApiKey": [
                795
            ],
            "roles": [
                51
            ],
            "__typename": [
                795
            ]
        },
        "ApiKeyEdge": {
            "cursor": [
                795
            ],
            "node": [
                46
            ],
            "__typename": [
                795
            ]
        },
        "ApiKeyInput": {
            "name": [
                795
            ],
            "role": [
                51
            ],
            "__typename": [
                795
            ]
        },
        "ApiKeyRole": {},
        "ApiToken": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "accountId": [
                795
            ],
            "created": [
                795
            ],
            "roles": [
                56
            ],
            "__typename": [
                795
            ]
        },
        "ApiTokenConnection": {
            "edges": [
                57
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ApiTokenCreated": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "generatedApiKey": [
                795
            ],
            "roles": [
                56
            ],
            "__typename": [
                795
            ]
        },
        "ApiTokenInput": {
            "name": [
                795
            ],
            "role": [
                56
            ],
            "__typename": [
                795
            ]
        },
        "ApiTokenRole": {},
        "ApiTokensEdge": {
            "cursor": [
                795
            ],
            "node": [
                52
            ],
            "__typename": [
                795
            ]
        },
        "AppliedTax": {
            "taxCode": [
                815
            ],
            "codeName": [
                795
            ],
            "application": [
                813
            ],
            "rateBps": [
                387
            ],
            "basisAmount": [
                387
            ],
            "taxAmount": [
                387
            ],
            "shownSeparately": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "Appointment": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "type": [
                69
            ],
            "status": [
                68
            ],
            "clientUserId": [
                795
            ],
            "client": [
                888
            ],
            "site": [
                773
            ],
            "preferredStart": [
                823
            ],
            "preferredEnd": [
                823
            ],
            "scheduledStart": [
                823
            ],
            "scheduledEnd": [
                823
            ],
            "clientNote": [
                795
            ],
            "staffNote": [
                795
            ],
            "cancelledBy": [
                60
            ],
            "cancellationReason": [
                795
            ],
            "documents": [
                61
            ],
            "createdAt": [
                823
            ],
            "modifiedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "AppointmentActor": {},
        "AppointmentDocument": {
            "type": [
                63
            ],
            "documentId": [
                374
            ],
            "number": [
                795
            ],
            "saleId": [
                795
            ],
            "itemIds": [
                795
            ],
            "invoice": [
                523
            ],
            "statement": [
                786
            ],
            "__typename": [
                795
            ]
        },
        "AppointmentDocumentFilter": {
            "type": [
                63
            ],
            "ids": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppointmentDocumentType": {},
        "AppointmentEdge": {
            "cursor": [
                795
            ],
            "node": [
                59
            ],
            "__typename": [
                795
            ]
        },
        "AppointmentFilter": {
            "statuses": [
                68
            ],
            "types": [
                69
            ],
            "siteId": [
                795
            ],
            "clientUserId": [
                795
            ],
            "startFrom": [
                823
            ],
            "startTo": [
                823
            ],
            "document": [
                62
            ],
            "__typename": [
                795
            ]
        },
        "AppointmentOrder": {},
        "AppointmentSettings": {
            "enabled": [
                138
            ],
            "recipientEmails": [
                795
            ],
            "minLeadHours": [
                387
            ],
            "maxDaysAhead": [
                387
            ],
            "maxActivePerClient": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "AppointmentStatus": {},
        "AppointmentType": {},
        "AppointmentsConnection": {
            "edges": [
                64
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "Appraisal": {
            "id": [
                374
            ],
            "cursor": [
                795
            ],
            "accountId": [
                795
            ],
            "appraisalNumber": [
                387
            ],
            "name": [
                795
            ],
            "notes": [
                795
            ],
            "type": [
                90
            ],
            "attributionChannel": [
                107
            ],
            "itemCount": [
                387
            ],
            "clients": [
                73
            ],
            "staff": [
                89
            ],
            "items": [
                435,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "appraisalItems": [
                86,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "direction": [
                        514
                    ],
                    "consigned": [
                        138
                    ]
                }
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "createdByUserId": [
                795
            ],
            "modifiedByUserId": [
                795
            ],
            "consignments": [
                207
            ],
            "valuationDate": [
                795
            ],
            "dateOfDeath": [
                795
            ],
            "instructedBy": [
                80
            ],
            "reference": [
                795
            ],
            "valuer": [
                89
            ],
            "documentSettings": [
                77
            ],
            "documents": [
                75
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalBanner": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "appraisalNumber": [
                387
            ],
            "name": [
                795
            ],
            "type": [
                90
            ],
            "mainClientId": [
                795
            ],
            "mainClientName": [
                795
            ],
            "clientNumber": [
                387
            ],
            "leadStaffId": [
                795
            ],
            "leadStaffName": [
                795
            ],
            "attributionChannelId": [
                795
            ],
            "itemCount": [
                387
            ],
            "createdTimestamp": [
                387
            ],
            "modifiedTimestamp": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalClient": {
            "userId": [
                795
            ],
            "isMain": [
                138
            ],
            "accountId": [
                795
            ],
            "user": [
                888
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalConsignmentTargetInput": {
            "newConsignment": [
                465
            ],
            "consignmentId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalDocument": {
            "id": [
                374
            ],
            "revision": [
                387
            ],
            "type": [
                90
            ],
            "templateVersion": [
                387
            ],
            "filename": [
                795
            ],
            "generatedAt": [
                823
            ],
            "generatedBy": [
                795
            ],
            "download": [
                329
            ],
            "outdated": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalDocumentGroupBy": {},
        "AppraisalDocumentSettings": {
            "groupBy": [
                76
            ],
            "sortBy": [
                78
            ],
            "sectionTotals": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalDocumentSortBy": {},
        "AppraisalDocumentTemplate": {
            "id": [
                374
            ],
            "type": [
                90
            ],
            "version": [
                387
            ],
            "title": [
                795
            ],
            "intro": [
                795
            ],
            "preInventory": [
                795
            ],
            "summary": [
                795
            ],
            "valuerStatement": [
                795
            ],
            "terms": [
                795
            ],
            "createdAt": [
                823
            ],
            "createdBy": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalInstructedBy": {
            "name": [
                795
            ],
            "company": [
                795
            ],
            "addressLines": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalInstructedByInput": {
            "name": [
                795
            ],
            "company": [
                795
            ],
            "addressLines": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalItem": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "appraisalId": [
                795
            ],
            "item": [
                393
            ],
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "description": [
                795
            ],
            "schemaId": [
                374
            ],
            "attributes": [
                438
            ],
            "creators": [
                287
            ],
            "frozen": [
                138
            ],
            "frozenAt": [
                795
            ],
            "lineNumber": [
                387
            ],
            "valuation": [
                84
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalItemRefInput": {
            "appraisalId": [
                795
            ],
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalItemValuation": {
            "low": [
                387
            ],
            "high": [
                387
            ],
            "currency": [
                795
            ],
            "basis": [
                91
            ],
            "room": [
                795
            ],
            "sortPosition": [
                387
            ],
            "noCommercialValue": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalItemValueInput": {
            "low": [
                387
            ],
            "high": [
                387
            ],
            "currency": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalItemsConnection": {
            "edges": [
                87
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalItemsEdge": {
            "cursor": [
                795
            ],
            "node": [
                82
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalLine": {
            "appraisalId": [
                374
            ],
            "appraisal": [
                71
            ],
            "lineNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalStaff": {
            "userId": [
                795
            ],
            "isLead": [
                138
            ],
            "accountId": [
                795
            ],
            "name": [
                795
            ],
            "email": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalType": {},
        "AppraisalValueBasis": {},
        "AppraisalsConnection": {
            "edges": [
                93
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "AppraisalsEdge": {
            "cursor": [
                795
            ],
            "node": [
                71
            ],
            "__typename": [
                795
            ]
        },
        "ArrBand": {
            "id": [
                374
            ],
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "rateBps": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ArrBandInput": {
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "rateBps": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ArrSettings": {
            "currency": [
                292
            ],
            "enabled": [
                138
            ],
            "thresholdAmount": [
                387
            ],
            "capAmount": [
                387
            ],
            "bands": [
                94
            ],
            "accountCode": [
                3
            ],
            "__typename": [
                795
            ]
        },
        "Asset": {
            "id": [
                795
            ],
            "url": [
                795
            ],
            "externalId": [
                795
            ],
            "on_Document": [
                324
            ],
            "on_Image": [
                378
            ],
            "on_Video": [
                925
            ],
            "__typename": [
                795
            ]
        },
        "AssetConnection": {
            "edges": [
                99
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "AssetEdge": {
            "node": [
                97
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AssetUploadUrl": {
            "assetId": [
                795
            ],
            "uploadUrl": [
                795
            ],
            "assetUrl": [
                795
            ],
            "headers": [
                372
            ],
            "__typename": [
                795
            ]
        },
        "AssignDisplayNumbersInput": {
            "saleId": [
                795
            ],
            "startFrom": [
                387
            ],
            "itemIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "AssignPhoneClerkInput": {
            "saleId": [
                795
            ],
            "assignmentId": [
                374
            ],
            "lineNumber": [
                387
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AssociateUserToAccountInput": {
            "userId": [
                795
            ],
            "email": [
                795
            ],
            "role": [
                295
            ],
            "__typename": [
                795
            ]
        },
        "AttachSaleRegistrationPoliciesInput": {
            "saleId": [
                795
            ],
            "policyIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AttributeSuggestion": {
            "key": [
                795
            ],
            "value": [
                438
            ],
            "label": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AttributesSuggestion": {
            "values": [
                105
            ],
            "__typename": [
                795
            ]
        },
        "AttributionChannel": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "name": [
                795
            ],
            "selfServiceOnly": [
                138
            ],
            "archivedAt": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AttributionSource": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "name": [
                795
            ],
            "public": [
                138
            ],
            "channelIds": [
                795
            ],
            "archivedAt": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AuctionSymbol": {
            "type": [
                111
            ],
            "glyph": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AuctionSymbolInput": {
            "type": [
                111
            ],
            "glyph": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "AuctionSymbolType": {},
        "Author": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BankDetails": {
            "accountName": [
                795
            ],
            "accountNumber": [
                795
            ],
            "sortCode": [
                795
            ],
            "country": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BankDetailsInput": {
            "accountName": [
                795
            ],
            "accountNumber": [
                795
            ],
            "sortCode": [
                795
            ],
            "country": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BastaLiveStream": {
            "optionAvailable": [
                138
            ],
            "publicUrl": [
                795
            ],
            "ingestUrl": [
                795
            ],
            "channelId": [
                795
            ],
            "streamKey": [
                795
            ],
            "isLive": [
                138
            ],
            "currentViewers": [
                387
            ],
            "streamChannel": [
                794
            ],
            "__typename": [
                795
            ]
        },
        "Bid": {
            "bidId": [
                795
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "sale": [
                610
            ],
            "saleItem": [
                623
            ],
            "amount": [
                387
            ],
            "maxAmount": [
                387
            ],
            "userId": [
                795
            ],
            "user": [
                899
            ],
            "date": [
                795
            ],
            "bidStatus": [
                130
            ],
            "bidSequenceNumber": [
                387
            ],
            "bidderIdentifier": [
                795
            ],
            "paddle": [
                510
            ],
            "reactiveBid": [
                138
            ],
            "bidOrigin": [
                122
            ],
            "userProfile": [
                899
            ],
            "registrationId": [
                795
            ],
            "registration": [
                649
            ],
            "__typename": [
                795
            ]
        },
        "BidErrorCode": {},
        "BidIncrementTable": {
            "rules": [
                575
            ],
            "__typename": [
                795
            ]
        },
        "BidIncrementTableInput": {
            "rules": [
                576
            ],
            "__typename": [
                795
            ]
        },
        "BidOnBehalfInput": {
            "userId": [
                795
            ],
            "amount": [
                387
            ],
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "type": [
                131
            ],
            "bidOrigin": [
                123
            ],
            "registrationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BidOrderByField": {},
        "BidOrigin": {
            "on_OnlineBidOrigin": [
                498
            ],
            "on_PaddleBidOrigin": [
                511
            ],
            "on_PhoneBidOrigin": [
                529
            ],
            "on_Aggregator": [
                44
            ],
            "__typename": [
                795
            ]
        },
        "BidOriginInput": {
            "type": [
                124
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BidOriginType": {},
        "BidPlaced": {
            "on_BidPlacedSuccess": [
                127
            ],
            "on_BidPlacedError": [
                126
            ],
            "__typename": [
                795
            ]
        },
        "BidPlacedError": {
            "error": [
                795
            ],
            "errorCode": [
                117
            ],
            "__typename": [
                795
            ]
        },
        "BidPlacedSuccess": {
            "bidId": [
                795
            ],
            "amount": [
                387
            ],
            "maxAmount": [
                387
            ],
            "date": [
                795
            ],
            "bidStatus": [
                130
            ],
            "bidType": [
                131
            ],
            "__typename": [
                795
            ]
        },
        "BidRestrictions": {
            "acceptedRegistrationRequired": [
                138
            ],
            "phoneRegistrationOpen": [
                138
            ],
            "phoneRegistrationCutoffHours": [
                387
            ],
            "phoneRegistrationClosesAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "BidRestrictionsInput": {
            "acceptedRegistrationRequired": [
                138
            ],
            "phoneRegistrationOpen": [
                138
            ],
            "phoneRegistrationCutoffHours": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "BidStatus": {},
        "BidType": {},
        "BidderToken": {
            "token": [
                795
            ],
            "expiration": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BidderTokenInput": {
            "metadata": [
                824
            ],
            "__typename": [
                795
            ]
        },
        "BidsConnection": {
            "edges": [
                135
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "BidsEdge": {
            "cursor": [
                795
            ],
            "node": [
                116
            ],
            "__typename": [
                795
            ]
        },
        "BidsFilter": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BlockUserInput": {
            "userId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Boolean": {},
        "BuyItemInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "buyerUserId": [
                795
            ],
            "expectedPrice": [
                387
            ],
            "currency": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremium": {
            "id": [
                374
            ],
            "externalId": [
                795
            ],
            "name": [
                795
            ],
            "currency": [
                292
            ],
            "calculationType": [
                144
            ],
            "status": [
                150
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "bands": [
                141
            ],
            "appliesAt": [
                149
            ],
            "accountCode": [
                3
            ],
            "taxCode": [
                815
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremiumBand": {
            "id": [
                374
            ],
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "type": [
                143
            ],
            "value": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremiumBandInput": {
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "type": [
                143
            ],
            "value": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremiumBandType": {},
        "BuyerPremiumCalculationType": {},
        "BuyerPremiumConnection": {
            "edges": [
                146
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremiumEdge": {
            "node": [
                140
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremiumOptions": {
            "currency": [
                292
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremiumScopeInput": {
            "type": [
                151
            ],
            "id": [
                374
            ],
            "saleId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "BuyerPremiumScopeType": {},
        "BuyerPremiumStatus": {},
        "BuyerPremiumWriteScopeType": {},
        "CampaignReportDataPoint": {
            "campaignId": [
                374
            ],
            "eventTypeId": [
                374
            ],
            "eventType": [
                38
            ],
            "period": [
                795
            ],
            "eventCount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "CancelAppointmentInput": {
            "appointmentId": [
                374
            ],
            "reason": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CancelLatestBidOnItemInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "sequenceNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "CancelPaymentOrderInput": {
            "orderId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CanceledLatestBidOnItem": {
            "removedBids": [
                116
            ],
            "__typename": [
                795
            ]
        },
        "Card": {
            "id": [
                795
            ],
            "brand": [
                795
            ],
            "last4": [
                795
            ],
            "expMonth": [
                387
            ],
            "expYear": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "CataloguingWorkflowStatus": {},
        "CataloguingWorkflowSummary": {
            "totalItems": [
                387
            ],
            "awaitingCataloguing": [
                387
            ],
            "catalogued": [
                387
            ],
            "proofed": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "Category": {
            "id": [
                374
            ],
            "accountId": [
                374
            ],
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "parentId": [
                374
            ],
            "parent": [
                160
            ],
            "children": [
                161,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "createdAt": [
                795
            ],
            "updatedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CategoryConnection": {
            "edges": [
                162
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "CategoryEdge": {
            "node": [
                160
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CategoryList": {
            "categories": [
                160
            ],
            "__typename": [
                795
            ]
        },
        "CelEnum": {
            "name": [
                795
            ],
            "description": [
                795
            ],
            "values": [
                165
            ],
            "__typename": [
                795
            ]
        },
        "CelEnumValue": {
            "name": [
                795
            ],
            "number": [
                387
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CelEnvironment": {
            "variables": [
                172
            ],
            "types": [
                170
            ],
            "enums": [
                164
            ],
            "__typename": [
                795
            ]
        },
        "CelField": {
            "name": [
                795
            ],
            "kind": [
                169
            ],
            "typeName": [
                795
            ],
            "isList": [
                138
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CelIssue": {
            "message": [
                795
            ],
            "line": [
                387
            ],
            "column": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "CelKind": {},
        "CelType": {
            "name": [
                795
            ],
            "description": [
                795
            ],
            "fields": [
                167
            ],
            "__typename": [
                795
            ]
        },
        "CelValidationResult": {
            "valid": [
                138
            ],
            "issues": [
                168
            ],
            "__typename": [
                795
            ]
        },
        "CelVariable": {
            "name": [
                795
            ],
            "kind": [
                169
            ],
            "typeName": [
                795
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Charge": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "currency": [
                292
            ],
            "basedOn": [
                177
            ],
            "frequency": [
                181
            ],
            "outcomes": [
                183
            ],
            "calculationType": [
                178
            ],
            "status": [
                186
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "bands": [
                174
            ],
            "appliesAt": [
                185
            ],
            "accountCode": [
                3
            ],
            "taxCode": [
                815
            ],
            "__typename": [
                795
            ]
        },
        "ChargeBand": {
            "id": [
                374
            ],
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "type": [
                176
            ],
            "value": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ChargeBandInput": {
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "type": [
                176
            ],
            "value": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ChargeBandType": {},
        "ChargeBasedOn": {},
        "ChargeCalculationType": {},
        "ChargeConnection": {
            "edges": [
                180
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ChargeEdge": {
            "node": [
                173
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ChargeFrequency": {},
        "ChargeOptions": {
            "currency": [
                292
            ],
            "__typename": [
                795
            ]
        },
        "ChargeOutcome": {},
        "ChargeScopeInput": {
            "type": [
                185
            ],
            "id": [
                374
            ],
            "saleId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "ChargeScopeType": {},
        "ChargeStatus": {},
        "ClearItemsAppraisalInput": {
            "appraisalId": [
                795
            ],
            "itemIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ClearItemsAppraisalPayload": {
            "appraisal": [
                71
            ],
            "count": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ClientNumberSettings": {
            "nextClientNumber": [
                387
            ],
            "highestAssignedClientNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ClientPermission": {},
        "ClientRelationship": {
            "id": [
                374
            ],
            "type": [
                192
            ],
            "reason": [
                795
            ],
            "client": [
                888
            ],
            "relatedClient": [
                888
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "createdBy": [
                112
            ],
            "modifiedBy": [
                112
            ],
            "__typename": [
                795
            ]
        },
        "ClientRelationshipType": {},
        "CloseSaleInput": {
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ClosingMethod": {},
        "ConditionReport": {
            "text": [
                438
            ],
            "images": [
                378
            ],
            "__typename": [
                795
            ]
        },
        "ConditionReportRequest": {
            "id": [
                374
            ],
            "reference": [
                795
            ],
            "status": [
                203
            ],
            "contact": [
                199
            ],
            "clientUserId": [
                795
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "saleItem": [
                623
            ],
            "assignee": [
                197
            ],
            "messages": [
                202
            ],
            "conditionReport": [
                195
            ],
            "createdAt": [
                795
            ],
            "modifiedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConditionReportRequestAssignee": {
            "userId": [
                795
            ],
            "name": [
                795
            ],
            "email": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConditionReportRequestChannel": {},
        "ConditionReportRequestContact": {
            "name": [
                795
            ],
            "email": [
                795
            ],
            "phone": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConditionReportRequestEdge": {
            "cursor": [
                795
            ],
            "node": [
                196
            ],
            "__typename": [
                795
            ]
        },
        "ConditionReportRequestFilter": {
            "statuses": [
                203
            ],
            "assigneeUserId": [
                795
            ],
            "unassigned": [
                138
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConditionReportRequestMessage": {
            "id": [
                374
            ],
            "reference": [
                795
            ],
            "channel": [
                198
            ],
            "message": [
                795
            ],
            "createdAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConditionReportRequestStatus": {},
        "ConditionReportRequestsConnection": {
            "edges": [
                200
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ConfirmAppointmentInput": {
            "appointmentId": [
                374
            ],
            "scheduledStart": [
                823
            ],
            "scheduledEnd": [
                823
            ],
            "staffNote": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConnectShopifyToAccountInput": {
            "shopId": [
                795
            ],
            "token": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Consignment": {
            "id": [
                374
            ],
            "cursor": [
                795
            ],
            "accountId": [
                795
            ],
            "shortId": [
                795
            ],
            "consignmentNumber": [
                387
            ],
            "consignorUserId": [
                795
            ],
            "consignor": [
                888
            ],
            "consignors": [
                225
            ],
            "staff": [
                221
            ],
            "name": [
                795
            ],
            "description": [
                795
            ],
            "externalId": [
                795
            ],
            "feeRules": [
                216
            ],
            "reportSeparately": [
                138
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "createdByUserId": [
                795
            ],
            "modifiedByUserId": [
                795
            ],
            "charges": [
                179,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        182
                    ]
                }
            ],
            "contracts": [
                209
            ],
            "currentContract": [
                209
            ],
            "signedContract": [
                209
            ],
            "contractState": [
                212
            ],
            "contractNeedsResigning": [
                138
            ],
            "contractOutdated": [
                138
            ],
            "appraisals": [
                71
            ],
            "originAppraisal": [
                71
            ],
            "transport": [
                222
            ],
            "propertyReceipts": [
                565
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentBanner": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "shortId": [
                795
            ],
            "consignmentNumber": [
                387
            ],
            "name": [
                795
            ],
            "mainConsignorId": [
                795
            ],
            "mainConsignorName": [
                795
            ],
            "leadStaffId": [
                795
            ],
            "leadStaffName": [
                795
            ],
            "externalId": [
                795
            ],
            "createdTimestamp": [
                387
            ],
            "clientNumber": [
                387
            ],
            "signatureStatus": [
                220
            ],
            "itemCount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentContract": {
            "id": [
                374
            ],
            "consignmentId": [
                795
            ],
            "revision": [
                387
            ],
            "status": [
                213
            ],
            "filename": [
                795
            ],
            "sha256": [
                795
            ],
            "templateVersion": [
                387
            ],
            "currency": [
                795
            ],
            "generatedAt": [
                823
            ],
            "generatedBy": [
                795
            ],
            "sentAt": [
                823
            ],
            "sentBy": [
                795
            ],
            "signedAt": [
                823
            ],
            "signatureRecordedAt": [
                823
            ],
            "signatureRecordedBy": [
                795
            ],
            "signatureNote": [
                795
            ],
            "download": [
                329
            ],
            "signingRequest": [
                210
            ],
            "signedDownload": [
                329
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentContractSigningRequest": {
            "id": [
                374
            ],
            "status": [
                211
            ],
            "recipientEmail": [
                795
            ],
            "createdAt": [
                823
            ],
            "createdBy": [
                795
            ],
            "expiresAt": [
                823
            ],
            "completedAt": [
                823
            ],
            "cancelledAt": [
                823
            ],
            "signerName": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentContractSigningRequestStatus": {},
        "ConsignmentContractState": {},
        "ConsignmentContractStatus": {},
        "ConsignmentContractTemplate": {
            "id": [
                374
            ],
            "version": [
                387
            ],
            "title": [
                795
            ],
            "body": [
                795
            ],
            "createdAt": [
                823
            ],
            "createdBy": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentFeeCalculationType": {},
        "ConsignmentFeeRule": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "type": [
                218
            ],
            "value": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "calculationType": [
                215
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentFeeRuleInput": {
            "name": [
                795
            ],
            "type": [
                218
            ],
            "value": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "calculationType": [
                215
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentFeeType": {},
        "ConsignmentLine": {
            "consignmentId": [
                374
            ],
            "consignment": [
                207
            ],
            "lineNumber": [
                387
            ],
            "item": [
                393
            ],
            "consignedFrom": [
                88
            ],
            "created": [
                795
            ],
            "removed": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentSignatureStatus": {},
        "ConsignmentStaff": {
            "userId": [
                795
            ],
            "isLead": [
                138
            ],
            "accountId": [
                795
            ],
            "name": [
                795
            ],
            "email": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentTransport": {
            "coordinator": [
                827
            ],
            "expectedDate": [
                795
            ],
            "courier": [
                240
            ],
            "receivingSite": [
                773
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentsConnection": {
            "edges": [
                224
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ConsignmentsEdge": {
            "cursor": [
                795
            ],
            "node": [
                207
            ],
            "__typename": [
                795
            ]
        },
        "Consignor": {
            "userId": [
                795
            ],
            "isMain": [
                138
            ],
            "accountId": [
                795
            ],
            "user": [
                888
            ],
            "__typename": [
                795
            ]
        },
        "ContentDiff": {
            "targetKind": [
                229
            ],
            "saleId": [
                374
            ],
            "saleItemId": [
                374
            ],
            "variantId": [
                374
            ],
            "itemSchemaId": [
                374
            ],
            "targetSchemaId": [
                374
            ],
            "schemaIdMatches": [
                138
            ],
            "inSync": [
                138
            ],
            "entries": [
                227
            ],
            "removableKeys": [
                795
            ],
            "creators": [
                367
            ],
            "categories": [
                367
            ],
            "tags": [
                367
            ],
            "images": [
                367
            ],
            "templates": [
                820
            ],
            "conditionReportChanged": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "ContentDiffEntry": {
            "key": [
                795
            ],
            "status": [
                228
            ],
            "itemValue": [
                438
            ],
            "targetValue": [
                438
            ],
            "__typename": [
                795
            ]
        },
        "ContentDiffStatus": {},
        "ContentDiffTargetKind": {},
        "ContentIssue": {
            "severity": [
                391
            ],
            "field": [
                804
            ],
            "key": [
                795
            ],
            "message": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ContentSuggestion": {
            "field": [
                804
            ],
            "value": [
                806
            ],
            "reasoning": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ContentSuggestions": {
            "suggestions": [
                231
            ],
            "imageCount": [
                387
            ],
            "templatedFields": [
                804
            ],
            "__typename": [
                795
            ]
        },
        "ContentSyncDirection": {},
        "ContinueOnboardPaymentAccountInput": {
            "returnUrl": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ContractPlaceholder": {
            "name": [
                795
            ],
            "description": [
                795
            ],
            "block": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "Country": {},
        "CountryInfo": {
            "code": [
                236
            ],
            "name": [
                795
            ],
            "enabled": [
                138
            ],
            "amlRiskClass": [
                45
            ],
            "isHomeCountry": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "CountryInfoConnection": {
            "edges": [
                239
            ],
            "__typename": [
                795
            ]
        },
        "CountryInfoEdge": {
            "node": [
                237
            ],
            "__typename": [
                795
            ]
        },
        "Courier": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateAccountCodeInput": {
            "code": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateAccountFeeInput": {
            "name": [
                795
            ],
            "type": [
                5
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "__typename": [
                795
            ]
        },
        "CreateAccountInput": {
            "name": [
                795
            ],
            "email": [
                795
            ],
            "handle": [
                795
            ],
            "description": [
                795
            ],
            "links": [
                442
            ],
            "__typename": [
                795
            ]
        },
        "CreateAffiliateInput": {
            "firstName": [
                795
            ],
            "lastName": [
                795
            ],
            "email": [
                795
            ],
            "token": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateAppraisalDocumentTemplateVersionInput": {
            "type": [
                90
            ],
            "title": [
                795
            ],
            "intro": [
                795
            ],
            "preInventory": [
                795
            ],
            "summary": [
                795
            ],
            "valuerStatement": [
                795
            ],
            "terms": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateAppraisalInput": {
            "clientUserIds": [
                795
            ],
            "staffUserIds": [
                795
            ],
            "name": [
                795
            ],
            "notes": [
                795
            ],
            "type": [
                90
            ],
            "attributionChannelId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateAssetUploadUrlInput": {
            "contentType": [
                795
            ],
            "filename": [
                795
            ],
            "externalId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateAttributionChannelInput": {
            "name": [
                795
            ],
            "selfServiceOnly": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "CreateAttributionSourceInput": {
            "name": [
                795
            ],
            "public": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "CreateBuyerPremiumInput": {
            "name": [
                795
            ],
            "currency": [
                292
            ],
            "calculationType": [
                144
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "externalId": [
                795
            ],
            "accountCodeId": [
                374
            ],
            "taxCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateCategoryInput": {
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "parentId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateChargeInput": {
            "name": [
                795
            ],
            "currency": [
                292
            ],
            "basedOn": [
                177
            ],
            "frequency": [
                181
            ],
            "outcomes": [
                183
            ],
            "calculationType": [
                178
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "accountCodeId": [
                374
            ],
            "taxCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateClientRelationshipInput": {
            "userId": [
                374
            ],
            "relatedUserId": [
                374
            ],
            "type": [
                192
            ],
            "reason": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateConsignmentContractTemplateVersionInput": {
            "title": [
                795
            ],
            "body": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateConsignmentInput": {
            "consignorUserId": [
                795
            ],
            "idType": [
                896
            ],
            "name": [
                795
            ],
            "description": [
                795
            ],
            "externalId": [
                795
            ],
            "feeRules": [
                217
            ],
            "consignorUserIds": [
                795
            ],
            "consignmentStaffUserIds": [
                795
            ],
            "reportSeparately": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "CreateCreatorInput": {
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "parentId": [
                374
            ],
            "type": [
                291
            ],
            "arr": [
                138
            ],
            "yearFrom": [
                795
            ],
            "yearTo": [
                795
            ],
            "nationality": [
                795
            ],
            "biography": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateDutchItemForSaleInput": {
            "saleId": [
                795
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "availableUnits": [
                387
            ],
            "openTime": [
                795
            ],
            "closingTime": [
                795
            ],
            "schedule": [
                345
            ],
            "config": [
                335
            ],
            "__typename": [
                795
            ]
        },
        "CreateDutchSaleInput": {
            "dates": [
                615
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateInvoiceInput": {
            "orderId": [
                374
            ],
            "externalID": [
                795
            ],
            "url": [
                795
            ],
            "dueDate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateItemImage": {
            "itemId": [
                795
            ],
            "url": [
                795
            ],
            "order": [
                387
            ],
            "imageId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateItemInput": {
            "title": [
                795
            ],
            "description": [
                795
            ],
            "price": [
                424
            ],
            "externalId": [
                795
            ],
            "consignmentId": [
                795
            ],
            "appraisalId": [
                795
            ],
            "siteId": [
                795
            ],
            "locationId": [
                795
            ],
            "metadata": [
                411
            ],
            "tags": [
                795
            ],
            "specifications": [
                429
            ],
            "valuationAmount": [
                387
            ],
            "valuationCurrency": [
                795
            ],
            "lowEstimate": [
                387
            ],
            "highEstimate": [
                387
            ],
            "location": [
                795
            ],
            "status": [
                404
            ],
            "staffLeadUserId": [
                795
            ],
            "citesLicenceNumber": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateItemNoteInput": {
            "itemId": [
                795
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateItemTypeInput": {
            "name": [
                795
            ],
            "schema": [
                438
            ],
            "parentId": [
                795
            ],
            "namespace": [
                795
            ],
            "slug": [
                795
            ],
            "titleTemplate": [
                795
            ],
            "subTitleTemplate": [
                795
            ],
            "descriptionTemplate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateLocationInput": {
            "siteId": [
                795
            ],
            "parentLocationId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateNoteTypeInput": {
            "name": [
                795
            ],
            "scope": [
                471
            ],
            "__typename": [
                795
            ]
        },
        "CreateOrderInput": {
            "saleId": [
                795
            ],
            "userId": [
                795
            ],
            "title": [
                795
            ],
            "currency": [
                292
            ],
            "billingAddress": [
                452
            ],
            "shippingAddress": [
                452
            ],
            "orderLines": [
                267
            ],
            "__typename": [
                795
            ]
        },
        "CreateOrderLineForOrderInput": {
            "itemId": [
                795
            ],
            "amount": [
                387
            ],
            "description": [
                795
            ],
            "fees": [
                271
            ],
            "__typename": [
                795
            ]
        },
        "CreateOrderLineInput": {
            "orderId": [
                374
            ],
            "itemId": [
                795
            ],
            "amount": [
                387
            ],
            "description": [
                795
            ],
            "fees": [
                271
            ],
            "__typename": [
                795
            ]
        },
        "CreatePaymentInput": {
            "orderId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreatePaymentOrderInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "userId": [
                795
            ],
            "orderLines": [
                272
            ],
            "currency": [
                292
            ],
            "billingAddress": [
                452
            ],
            "shippingAddress": [
                452
            ],
            "__typename": [
                795
            ]
        },
        "CreatePaymentOrderLineFeeInput": {
            "description": [
                795
            ],
            "amount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "CreatePaymentOrderLineInput": {
            "itemId": [
                795
            ],
            "amount": [
                387
            ],
            "description": [
                795
            ],
            "orderLineType": [
                505
            ],
            "fees": [
                271
            ],
            "__typename": [
                795
            ]
        },
        "CreatePropertyReceiptTemplateVersionInput": {
            "title": [
                795
            ],
            "body": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateSaleFeeInput": {
            "saleId": [
                374
            ],
            "name": [
                795
            ],
            "type": [
                355
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "__typename": [
                795
            ]
        },
        "CreateSaleInput": {
            "dates": [
                615
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "currency": [
                795
            ],
            "bidIncrementTable": [
                119
            ],
            "closingMethod": [
                194
            ],
            "closingTimeCountdown": [
                387
            ],
            "saleItemClosingSchedule": [
                625
            ],
            "reserveAutoBidMethod": [
                601
            ],
            "themeType": [
                387
            ],
            "hidden": [
                138
            ],
            "type": [
                682
            ],
            "isTestSale": [
                138
            ],
            "printedCatalogue": [
                138
            ],
            "bidRestrictions": [
                129
            ],
            "externalId": [
                795
            ],
            "location": [
                795
            ],
            "slug": [
                795
            ],
            "metafields": [
                461
            ],
            "saleGenreId": [
                374
            ],
            "siteId": [
                374
            ],
            "viewingTimes": [
                795
            ],
            "buyersNotes": [
                795
            ],
            "feesApplyInfo": [
                795
            ],
            "saleContactUserId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateSaleItemFeeInput": {
            "saleId": [
                374
            ],
            "itemId": [
                374
            ],
            "name": [
                795
            ],
            "type": [
                355
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "__typename": [
                795
            ]
        },
        "CreateSaleItemRegistrationInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "userId": [
                795
            ],
            "type": [
                657
            ],
            "identifier": [
                795
            ],
            "status": [
                656
            ],
            "preferredPhoneNumberId": [
                374
            ],
            "alternativePhoneNumberIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateSaleRegistrationInput": {
            "saleId": [
                795
            ],
            "userId": [
                795
            ],
            "type": [
                657
            ],
            "identifier": [
                795
            ],
            "status": [
                656
            ],
            "preferredPhoneNumberId": [
                374
            ],
            "alternativePhoneNumberIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateSaleRegistrationPolicyInput": {
            "code": [
                795
            ],
            "description": [
                795
            ],
            "rule": [
                795
            ],
            "isDefault": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "CreateSendGridNotificationIntegrationInput": {
            "apiKey": [
                795
            ],
            "fromEmail": [
                795
            ],
            "fromName": [
                795
            ],
            "replyToEmail": [
                795
            ],
            "accountNotificationEmail": [
                795
            ],
            "timezone": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateSiteInput": {
            "name": [
                795
            ],
            "addressLine1": [
                795
            ],
            "addressLine2": [
                795
            ],
            "addressCity": [
                795
            ],
            "addressPostalCode": [
                795
            ],
            "addressCountryIso": [
                795
            ],
            "addressState": [
                795
            ],
            "phone": [
                795
            ],
            "email": [
                795
            ],
            "openingHours": [
                795
            ],
            "collectionInstructions": [
                795
            ],
            "appointmentRequired": [
                138
            ],
            "timezone": [
                795
            ],
            "bookingHours": [
                775
            ],
            "__typename": [
                795
            ]
        },
        "CreateStaffProfileInput": {
            "name": [
                795
            ],
            "attributes": [
                438
            ],
            "departmentIds": [
                374
            ],
            "itemTypeIds": [
                374
            ],
            "dashboardUserId": [
                795
            ],
            "public": [
                138
            ],
            "isPhoneClerk": [
                138
            ],
            "phoneClerkNotes": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateStreamChannelInput": {
            "name": [
                795
            ],
            "location": [
                795
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateTaxCodeInput": {
            "name": [
                795
            ],
            "application": [
                813
            ],
            "rateBps": [
                387
            ],
            "effectiveFrom": [
                795
            ],
            "effectiveTo": [
                795
            ],
            "accountCodeId": [
                374
            ],
            "replacesTaxCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "CreateTwilioNotificationIntegrationInput": {
            "accountSid": [
                795
            ],
            "authToken": [
                795
            ],
            "messagingServiceSid": [
                795
            ],
            "timezone": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreateUploadUrlInput": {
            "imageTypes": [
                383
            ],
            "contentType": [
                795
            ],
            "order": [
                387
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "externalId": [
                795
            ],
            "marketplaceEntityId": [
                795
            ],
            "staffProfileId": [
                795
            ],
            "kind": [
                381
            ],
            "__typename": [
                795
            ]
        },
        "Creator": {
            "id": [
                374
            ],
            "accountId": [
                374
            ],
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "parentId": [
                374
            ],
            "parent": [
                287
            ],
            "children": [
                287
            ],
            "type": [
                291
            ],
            "arr": [
                138
            ],
            "yearFrom": [
                795
            ],
            "yearTo": [
                795
            ],
            "nationality": [
                795
            ],
            "biography": [
                795
            ],
            "createdAt": [
                795
            ],
            "updatedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreatorConnection": {
            "creators": [
                287
            ],
            "hasNextPage": [
                138
            ],
            "endCursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "CreatorList": {
            "creators": [
                287
            ],
            "__typename": [
                795
            ]
        },
        "CreatorSettings": {
            "allowNested": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "CreatorType": {},
        "Currency": {},
        "CurrentUser": {
            "userId": [
                795
            ],
            "roles": [
                295
            ],
            "permissions": [
                527
            ],
            "__typename": [
                795
            ]
        },
        "DashboardMember": {
            "userId": [
                795
            ],
            "name": [
                795
            ],
            "email": [
                795
            ],
            "roles": [
                296
            ],
            "staffProfile": [
                780
            ],
            "__typename": [
                795
            ]
        },
        "DashboardUserRole": {},
        "DashboardUserRoleAssignment": {
            "role": [
                295
            ],
            "assignedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteAccountFeeInput": {
            "id": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteActionHookSubscriptionInput": {
            "id": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "DeleteBuyerPremiumAtScopeInput": {
            "buyerPremiumId": [
                374
            ],
            "scope": [
                148
            ],
            "__typename": [
                795
            ]
        },
        "DeleteChargeAtScopeInput": {
            "chargeId": [
                374
            ],
            "scope": [
                184
            ],
            "__typename": [
                795
            ]
        },
        "DeleteImageInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "imageId": [
                795
            ],
            "imageTypes": [
                383
            ],
            "staffProfileId": [
                795
            ],
            "kind": [
                381
            ],
            "__typename": [
                795
            ]
        },
        "DeleteItemImageInput": {
            "itemId": [
                795
            ],
            "imageId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteItemInput": {
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteLiveStreamFromSaleInput": {
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteMetafieldInput": {
            "entityType": [
                460
            ],
            "entityId": [
                795
            ],
            "key": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteOrderLineInput": {
            "orderId": [
                374
            ],
            "orderLineId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "DeletePaymentOrderInput": {
            "orderId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "DeleteSaleFeeInput": {
            "id": [
                374
            ],
            "saleId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "DeleteSaleInput": {
            "saleId": [
                795
            ],
            "confirmationSaleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteSaleItemFeeInput": {
            "id": [
                374
            ],
            "saleId": [
                374
            ],
            "itemId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "DeleteSaleItemRegistrationInput": {
            "itemRegistrationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteSalePayload": {
            "saleId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "DeleteSaleRegistrationInput": {
            "registrationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteUserAddressInput": {
            "userId": [
                795
            ],
            "idType": [
                896
            ],
            "addressId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DeleteUserPhoneInput": {
            "userId": [
                795
            ],
            "idType": [
                896
            ],
            "phoneId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Department": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DepartmentConnection": {
            "edges": [
                318
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "DepartmentEdge": {
            "node": [
                316
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DetachSaleRegistrationPoliciesInput": {
            "saleId": [
                795
            ],
            "policyIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DirectSell": {
            "accountId": [
                795
            ],
            "buyerId": [
                795
            ],
            "buyer": [
                899
            ],
            "amount": [
                387
            ],
            "currency": [
                795
            ],
            "source": [
                321
            ],
            "referenceId": [
                795
            ],
            "timestamp": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DirectSellSource": {},
        "DisassociateUserFromAccountInput": {
            "userId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DisplayNumberAssignmentInput": {
            "itemId": [
                374
            ],
            "displayNumber": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Document": {
            "id": [
                795
            ],
            "accountId": [
                795
            ],
            "url": [
                795
            ],
            "contentType": [
                795
            ],
            "size": [
                387
            ],
            "filename": [
                795
            ],
            "externalId": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DocumentBranding": {
            "logoAssetId": [
                795
            ],
            "accentColor": [
                795
            ],
            "secondaryColor": [
                795
            ],
            "hideAccountName": [
                138
            ],
            "company": [
                326
            ],
            "__typename": [
                795
            ]
        },
        "DocumentBrandingCompany": {
            "legalName": [
                795
            ],
            "addressLines": [
                795
            ],
            "registrationLabel": [
                795
            ],
            "registrationNumber": [
                795
            ],
            "taxLabel": [
                795
            ],
            "taxNumber": [
                795
            ],
            "email": [
                795
            ],
            "phone": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DocumentBrandingCompanyInput": {
            "legalName": [
                795
            ],
            "addressLines": [
                795
            ],
            "registrationLabel": [
                795
            ],
            "registrationNumber": [
                795
            ],
            "taxLabel": [
                795
            ],
            "taxNumber": [
                795
            ],
            "email": [
                795
            ],
            "phone": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DocumentBrandingInput": {
            "logoAssetId": [
                795
            ],
            "accentColor": [
                795
            ],
            "secondaryColor": [
                795
            ],
            "hideAccountName": [
                138
            ],
            "company": [
                327
            ],
            "__typename": [
                795
            ]
        },
        "DocumentDownload": {
            "url": [
                795
            ],
            "expiresAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "DraftItemInput": {
            "itemTypeId": [
                374
            ],
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "description": [
                795
            ],
            "tags": [
                795
            ],
            "attributes": [
                438
            ],
            "imageUrls": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DutchBid": {
            "id": [
                374
            ],
            "userId": [
                795
            ],
            "amount": [
                387
            ],
            "quantityRequested": [
                387
            ],
            "quantityAllocated": [
                387
            ],
            "placedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "DutchBidConnection": {
            "edges": [
                333
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "DutchBidEdge": {
            "cursor": [
                795
            ],
            "node": [
                331
            ],
            "__typename": [
                795
            ]
        },
        "DutchItemConfig": {
            "pricingMode": [
                339
            ],
            "maxBidsPerBidder": [
                387
            ],
            "maxUnitsPerBidder": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "DutchItemConfigInput": {
            "pricingMode": [
                339
            ],
            "maxBidsPerBidder": [
                387
            ],
            "maxUnitsPerBidder": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "DutchItemStatus": {},
        "DutchPriceDrop": {
            "at": [
                795
            ],
            "price": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "DutchPriceDropInput": {
            "at": [
                795
            ],
            "price": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "DutchPricingMode": {},
        "DutchSale": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "currency": [
                795
            ],
            "status": [
                681
            ],
            "dates": [
                614
            ],
            "saleFormat": [
                617
            ],
            "images": [
                378
            ],
            "items": [
                342,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "__typename": [
                795
            ]
        },
        "DutchSaleItem": {
            "id": [
                374
            ],
            "saleId": [
                795
            ],
            "status": [
                336
            ],
            "availableUnits": [
                387
            ],
            "openTime": [
                795
            ],
            "endTime": [
                795
            ],
            "schedule": [
                344
            ],
            "config": [
                334
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "images": [
                378
            ],
            "bids": [
                332,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "__typename": [
                795
            ]
        },
        "DutchSaleItemConnection": {
            "edges": [
                343
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "DutchSaleItemEdge": {
            "cursor": [
                795
            ],
            "node": [
                341
            ],
            "__typename": [
                795
            ]
        },
        "DutchSchedule": {
            "startingAmount": [
                387
            ],
            "drops": [
                337
            ],
            "__typename": [
                795
            ]
        },
        "DutchScheduleInput": {
            "startingAmount": [
                387
            ],
            "drops": [
                338
            ],
            "__typename": [
                795
            ]
        },
        "EntityNumberSettings": {
            "nextNumber": [
                387
            ],
            "highestAssignedNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "Estimate": {
            "low": [
                387
            ],
            "high": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ExternalLiveStream": {
            "url": [
                795
            ],
            "type": [
                447
            ],
            "created": [
                795
            ],
            "updated": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "FacetCount": {
            "fieldName": [
                795
            ],
            "counts": [
                351
            ],
            "stats": [
                350
            ],
            "__typename": [
                795
            ]
        },
        "FacetStats": {
            "avg": [
                357
            ],
            "max": [
                357
            ],
            "min": [
                357
            ],
            "sum": [
                357
            ],
            "totalValues": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "FacetValue": {
            "value": [
                795
            ],
            "count": [
                387
            ],
            "highlighted": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "FeeCalculationType": {},
        "FeeRule": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "type": [
                355
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "source": [
                354
            ],
            "__typename": [
                795
            ]
        },
        "FeeRuleSource": {},
        "FeeRuleType": {},
        "FieldChange": {
            "field": [
                795
            ],
            "oldValue": [
                438
            ],
            "newValue": [
                438
            ],
            "__typename": [
                795
            ]
        },
        "Float": {},
        "GenerateConsignmentContractInput": {
            "consignmentId": [
                795
            ],
            "currency": [
                292
            ],
            "__typename": [
                795
            ]
        },
        "GeneratePresaleAdvicesInput": {
            "saleId": [
                795
            ],
            "consignorUserIds": [
                795
            ],
            "consignmentId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "GeneratePresaleAdvicesResult": {
            "advices": [
                549
            ],
            "skipped": [
                553
            ],
            "__typename": [
                795
            ]
        },
        "GeneratePropertyReceiptInput": {
            "consignmentId": [
                795
            ],
            "itemIds": [
                795
            ],
            "location": [
                568
            ],
            "__typename": [
                795
            ]
        },
        "GeoLocation": {
            "countryIsoCode": [
                795
            ],
            "countryName": [
                795
            ],
            "cityName": [
                795
            ],
            "latitude": [
                357
            ],
            "longitude": [
                357
            ],
            "timezone": [
                795
            ],
            "found": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "GetItemInput": {
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "GetItemsInput": {
            "userId": [
                795
            ],
            "first": [
                387
            ],
            "after": [
                795
            ],
            "direction": [
                514
            ],
            "itemsFilter": [
                437
            ],
            "__typename": [
                795
            ]
        },
        "GetMetafieldInput": {
            "key": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "GetMetafieldsInput": {
            "keys": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "GroupSyncDiff": {
            "resulting": [
                795
            ],
            "added": [
                795
            ],
            "removed": [
                795
            ],
            "inSync": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "HideItemsFromSaleInput": {
            "saleId": [
                795
            ],
            "includingAndFromItemNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "HighestBidInfo": {
            "bidId": [
                795
            ],
            "itemId": [
                795
            ],
            "currentAmount": [
                387
            ],
            "maxAmount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "HighlightedSaleItemConnection": {
            "edges": [
                371
            ],
            "__typename": [
                795
            ]
        },
        "HighlightedSaleItemEdge": {
            "node": [
                623
            ],
            "position": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "HttpHeader": {
            "key": [
                795
            ],
            "value": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "HttpHeaderInput": {
            "key": [
                795
            ],
            "value": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ID": {},
        "IdVerificationState": {},
        "IdentityVerificationProvider": {
            "on_StripeIdentityProviderSettings": [
                799
            ],
            "__typename": [
                795
            ]
        },
        "IdentityVerificationProviderInput": {
            "stripeIdentity": [
                798
            ],
            "__typename": [
                795
            ]
        },
        "Image": {
            "id": [
                795
            ],
            "url": [
                795
            ],
            "order": [
                387
            ],
            "externalId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ImageAssociation": {
            "on_SaleItemImageAssociation": [
                628
            ],
            "on_ItemImageAssociation": [
                403
            ],
            "on_SaleImageAssociation": [
                622
            ],
            "on_AccountImageAssociation": [
                6
            ],
            "__typename": [
                795
            ]
        },
        "ImageIdType": {},
        "ImageKind": {},
        "ImageOrderInput": {
            "imageId": [
                795
            ],
            "order": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ImageType": {},
        "ImageWithAssociations": {
            "image": [
                378
            ],
            "associations": [
                379
            ],
            "__typename": [
                795
            ]
        },
        "InstantNotificationConfiguration": {
            "channel": [
                476
            ],
            "status": [
                478
            ],
            "templates": [
                485
            ],
            "sender": [
                479
            ],
            "replyToEmail": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "InstantNotificationConfigurationInput": {
            "templates": [
                486
            ],
            "sender": [
                480
            ],
            "replyToEmail": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Int": {},
        "InventoryNumberSettings": {
            "nextNumber": [
                387
            ],
            "highestAssignedNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "Invoice": {
            "invoiceId": [
                374
            ],
            "externalID": [
                795
            ],
            "dueDate": [
                795
            ],
            "url": [
                795
            ],
            "revision": [
                387
            ],
            "issuedAt": [
                795
            ],
            "download": [
                329
            ],
            "__typename": [
                795
            ]
        },
        "InvoiceSettings": {
            "paymentTermsDays": [
                387
            ],
            "paymentInstructions": [
                795
            ],
            "footerText": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "IssueSeverity": {},
        "IssuesSuggestion": {
            "issues": [
                230
            ],
            "__typename": [
                795
            ]
        },
        "Item": {
            "id": [
                374
            ],
            "cursor": [
                795
            ],
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "conditionReport": [
                195
            ],
            "accountId": [
                795
            ],
            "description": [
                795
            ],
            "titleTemplateOverride": [
                795
            ],
            "subTitleTemplateOverride": [
                795
            ],
            "descriptionTemplateOverride": [
                795
            ],
            "price": [
                423
            ],
            "images": [
                378
            ],
            "externalId": [
                795
            ],
            "tags": [
                795
            ],
            "metadata": [
                410
            ],
            "itemType": [
                431
            ],
            "effectiveSchema": [
                438
            ],
            "attributes": [
                438
            ],
            "type": [
                431
            ],
            "schema": [
                438
            ],
            "itemNotes": [
                413,
                {
                    "take": [
                        387
                    ],
                    "cursor": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "notes": [
                468,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "alerts": [
                467
            ],
            "specifications": [
                428
            ],
            "specificationsV2": [
                428
            ],
            "packaging": [
                421
            ],
            "estimates": [
                347
            ],
            "valuationAmount": [
                387
            ],
            "valuationCurrency": [
                795
            ],
            "saleId": [
                795
            ],
            "location": [
                795
            ],
            "metafields": [
                459,
                {
                    "input": [
                        366,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                459,
                {
                    "input": [
                        365,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "consignment": [
                207
            ],
            "appraisal": [
                71
            ],
            "appraisals": [
                71
            ],
            "appraisalLines": [
                88
            ],
            "consignmentLineNumber": [
                387
            ],
            "consignedFrom": [
                88
            ],
            "site": [
                773
            ],
            "siteLocation": [
                448
            ],
            "locationStatus": [
                408
            ],
            "inTransitSince": [
                823
            ],
            "propertyReceipt": [
                569
            ],
            "categories": [
                160
            ],
            "creators": [
                287
            ],
            "arr": [
                138
            ],
            "arrOverride": [
                138
            ],
            "productVariants": [
                562,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "offerConfig": [
                417
            ],
            "offers": [
                493,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "status": [
                        492
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "contentDrift": [
                226,
                {
                    "targetKind": [
                        229
                    ]
                }
            ],
            "links": [
                406
            ],
            "lifecycleStatus": [
                404
            ],
            "cataloguingWorkflowStatus": [
                158
            ],
            "photographyWorkflowStatus": [
                546
            ],
            "staffLead": [
                294
            ],
            "citesLicenceNumber": [
                795
            ],
            "inventoryNumber": [
                387
            ],
            "created": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemBanner": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "images": [
                378
            ],
            "price": [
                423
            ],
            "externalId": [
                795
            ],
            "location": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemBuyNowConfig": {
            "itemId": [
                795
            ],
            "accountId": [
                795
            ],
            "enabled": [
                138
            ],
            "price": [
                387
            ],
            "currency": [
                795
            ],
            "setAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemCataloguingReadiness": {
            "noItemType": [
                138
            ],
            "missingRequiredFields": [
                463
            ],
            "__typename": [
                795
            ]
        },
        "ItemDates": {
            "openDate": [
                795
            ],
            "closingStart": [
                795
            ],
            "closingEnd": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemFairWarningNotification": {
            "id": [
                795
            ],
            "date": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemFilter": {
            "title": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemHighlight": {
            "enabled": [
                138
            ],
            "position": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ItemHighlightInput": {
            "enabled": [
                138
            ],
            "position": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ItemIdsFilter": {
            "itemIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "ItemImageAssociation": {
            "itemId": [
                795
            ],
            "kind": [
                381
            ],
            "__typename": [
                795
            ]
        },
        "ItemLifecycleStatus": {},
        "ItemLink": {
            "on_SaleItemLink": [
                630
            ],
            "on_ProductVariantLink": [
                564
            ],
            "__typename": [
                795
            ]
        },
        "ItemLinkConnection": {
            "edges": [
                407
            ],
            "__typename": [
                795
            ]
        },
        "ItemLinkEdge": {
            "node": [
                405
            ],
            "__typename": [
                795
            ]
        },
        "ItemLocationStatus": {},
        "ItemMessageNotification": {
            "id": [
                795
            ],
            "message": [
                795
            ],
            "date": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemMetadata": {
            "data": [
                438
            ],
            "schema": [
                438
            ],
            "schemaId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "ItemMetadataInput": {
            "data": [
                438
            ],
            "schemaId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "ItemNote": {
            "id": [
                374
            ],
            "note": [
                795
            ],
            "userId": [
                795
            ],
            "user": [
                899
            ],
            "created": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemNoteConnection": {
            "edges": [
                414
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ItemNoteEdge": {
            "cursor": [
                795
            ],
            "node": [
                412
            ],
            "__typename": [
                795
            ]
        },
        "ItemNotification": {
            "on_ItemMessageNotification": [
                409
            ],
            "on_ItemFairWarningNotification": [
                398
            ],
            "on_ItemOfferPlacedNotification": [
                418
            ],
            "on_ItemSoldNotification": [
                427
            ],
            "__typename": [
                795
            ]
        },
        "ItemNumberChangeInput": {
            "itemId": [
                795
            ],
            "itemNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ItemOfferConfig": {
            "itemId": [
                795
            ],
            "accountId": [
                795
            ],
            "enabled": [
                138
            ],
            "autoAcceptAmount": [
                387
            ],
            "autoAcceptCurrency": [
                795
            ],
            "offerTtlSeconds": [
                387
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemOfferPlacedNotification": {
            "id": [
                795
            ],
            "amount": [
                387
            ],
            "currency": [
                795
            ],
            "buyerId": [
                795
            ],
            "referenceId": [
                795
            ],
            "date": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemOrderField": {},
        "ItemOrderInput": {
            "field": [
                419
            ],
            "direction": [
                514
            ],
            "__typename": [
                795
            ]
        },
        "ItemPackaging": {
            "id": [
                795
            ],
            "quantity": [
                387
            ],
            "boxedHeight": [
                357
            ],
            "boxedLength": [
                357
            ],
            "boxedDepth": [
                357
            ],
            "boxedMeasurementUnit": [
                458
            ],
            "boxedWeight": [
                357
            ],
            "boxedWeightUnit": [
                927
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemPackagingInput": {
            "quantity": [
                387
            ],
            "boxedHeight": [
                357
            ],
            "boxedLength": [
                357
            ],
            "boxedDepth": [
                357
            ],
            "boxedMeasurementUnit": [
                458
            ],
            "boxedWeight": [
                357
            ],
            "boxedWeightUnit": [
                927
            ],
            "__typename": [
                795
            ]
        },
        "ItemPrice": {
            "currency": [
                292
            ],
            "reserve": [
                387
            ],
            "startingBid": [
                387
            ],
            "lowEstimate": [
                387
            ],
            "highEstimate": [
                387
            ],
            "reserveType": [
                603
            ],
            "__typename": [
                795
            ]
        },
        "ItemPriceInput": {
            "currency": [
                292
            ],
            "reserve": [
                387
            ],
            "startingBid": [
                387
            ],
            "lowEstimate": [
                387
            ],
            "highEstimate": [
                387
            ],
            "reserveType": [
                603
            ],
            "__typename": [
                795
            ]
        },
        "ItemResult": {},
        "ItemSchema": {
            "schema": [
                438
            ],
            "metadataSchema": [
                438
            ],
            "__typename": [
                795
            ]
        },
        "ItemSoldNotification": {
            "id": [
                795
            ],
            "amount": [
                387
            ],
            "currency": [
                795
            ],
            "source": [
                321
            ],
            "buyerId": [
                795
            ],
            "referenceId": [
                795
            ],
            "date": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemSpecifications": {
            "id": [
                795
            ],
            "type": [
                779
            ],
            "subType": [
                778
            ],
            "height": [
                357
            ],
            "length": [
                357
            ],
            "depth": [
                357
            ],
            "diameter": [
                357
            ],
            "measurementUnit": [
                458
            ],
            "weight": [
                357
            ],
            "weightUnit": [
                927
            ],
            "quantity": [
                387
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemSpecificationsInput": {
            "type": [
                779
            ],
            "subType": [
                778
            ],
            "height": [
                357
            ],
            "length": [
                357
            ],
            "depth": [
                357
            ],
            "diameter": [
                357
            ],
            "measurementUnit": [
                458
            ],
            "weight": [
                357
            ],
            "weightUnit": [
                927
            ],
            "quantity": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "ItemStatus": {},
        "ItemType": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "name": [
                795
            ],
            "namespace": [
                795
            ],
            "slug": [
                795
            ],
            "schema": [
                438
            ],
            "parentId": [
                795
            ],
            "createdAt": [
                795
            ],
            "modifiedAt": [
                795
            ],
            "effectiveSchema": [
                438
            ],
            "titleTemplate": [
                795
            ],
            "subTitleTemplate": [
                795
            ],
            "descriptionTemplate": [
                795
            ],
            "charges": [
                179,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        182
                    ]
                }
            ],
            "buyerPremiums": [
                145,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        147
                    ]
                }
            ],
            "__typename": [
                795
            ]
        },
        "ItemTypeEdge": {
            "node": [
                431
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ItemTypeTaxDefault": {
            "itemTypeId": [
                374
            ],
            "hammerTaxCode": [
                815
            ],
            "chargeTaxCode": [
                815
            ],
            "__typename": [
                795
            ]
        },
        "ItemTypesConnection": {
            "edges": [
                432
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ItemsConnection": {
            "edges": [
                436
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ItemsEdge": {
            "cursor": [
                795
            ],
            "node": [
                393
            ],
            "__typename": [
                795
            ]
        },
        "ItemsFilter": {
            "onlyMyItems": [
                138
            ],
            "title": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "JSON": {},
        "Link": {
            "type": [
                443
            ],
            "url": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "LinkImageByExternalIdInput": {
            "externalId": [
                795
            ],
            "imageTypes": [
                383
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "order": [
                387
            ],
            "kind": [
                381
            ],
            "__typename": [
                795
            ]
        },
        "LinkImageByIdInput": {
            "imageId": [
                795
            ],
            "imageTypes": [
                383
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "order": [
                387
            ],
            "kind": [
                381
            ],
            "__typename": [
                795
            ]
        },
        "LinkInput": {
            "type": [
                443
            ],
            "url": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "LinkType": {},
        "LiveItem": {
            "item": [
                623
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "LiveStream": {
            "on_ExternalLiveStream": [
                348
            ],
            "on_BastaLiveStream": [
                115
            ],
            "__typename": [
                795
            ]
        },
        "LiveStreamInput": {
            "url": [
                795
            ],
            "type": [
                447
            ],
            "__typename": [
                795
            ]
        },
        "LiveStreamType": {},
        "Location": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "site": [
                773
            ],
            "parent": [
                448
            ],
            "children": [
                448
            ],
            "name": [
                795
            ],
            "archivedAt": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "createdByUserId": [
                795
            ],
            "modifiedByUserId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "LocationConnection": {
            "edges": [
                450
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "LocationEdge": {
            "cursor": [
                795
            ],
            "node": [
                448
            ],
            "__typename": [
                795
            ]
        },
        "MailingAddress": {
            "id": [
                795
            ],
            "name": [
                795
            ],
            "company": [
                795
            ],
            "phone": [
                795
            ],
            "line1": [
                795
            ],
            "line2": [
                795
            ],
            "city": [
                795
            ],
            "state": [
                795
            ],
            "postalCode": [
                795
            ],
            "country": [
                236
            ],
            "isPrimary": [
                138
            ],
            "addressType": [
                34
            ],
            "label": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "MailingAddressInput": {
            "id": [
                795
            ],
            "name": [
                795
            ],
            "company": [
                795
            ],
            "phone": [
                795
            ],
            "line1": [
                795
            ],
            "line2": [
                795
            ],
            "city": [
                795
            ],
            "state": [
                795
            ],
            "postalCode": [
                795
            ],
            "country": [
                236
            ],
            "isPrimary": [
                138
            ],
            "addressType": [
                34
            ],
            "label": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "MarkConsignmentContractSentInput": {
            "consignmentId": [
                795
            ],
            "contractId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "MarketingConsent": {
            "consented": [
                138
            ],
            "decidedAt": [
                823
            ],
            "recordedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "MarketingConsentInput": {
            "consented": [
                138
            ],
            "decidedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "MarketplaceCurrencyCode": {},
        "MaxBidOnBehalfInput": {
            "userId": [
                795
            ],
            "maxAmount": [
                387
            ],
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "bidOrigin": [
                123
            ],
            "registrationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "MeasurementUnit": {},
        "Metafield": {
            "id": [
                795
            ],
            "key": [
                795
            ],
            "value": [
                795
            ],
            "valueType": [
                462
            ],
            "entityType": [
                460
            ],
            "__typename": [
                795
            ]
        },
        "MetafieldEntityType": {},
        "MetafieldInput": {
            "key": [
                795
            ],
            "value": [
                795
            ],
            "valueType": [
                462
            ],
            "__typename": [
                795
            ]
        },
        "MetafieldValueType": {},
        "MissingRequiredField": {
            "name": [
                795
            ],
            "title": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Mutation": {
            "updateAccount": [
                2,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        836,
                        "UpdateAccountInput!"
                    ]
                }
            ],
            "setAccountCountriesEnabled": [
                237,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "codes": [
                        236,
                        "[Country!]!"
                    ],
                    "enabled": [
                        138,
                        "Boolean!"
                    ]
                }
            ],
            "setAccountCountryAmlRiskClass": [
                237,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "code": [
                        236,
                        "Country!"
                    ],
                    "amlRiskClass": [
                        45,
                        "AmlRiskClass!"
                    ]
                }
            ],
            "setAuctionSymbols": [
                2,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        110,
                        "[AuctionSymbolInput!]!"
                    ]
                }
            ],
            "updateDocumentBranding": [
                2,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        328,
                        "DocumentBrandingInput!"
                    ]
                }
            ],
            "createConsignmentContractTemplateVersion": [
                214,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        254,
                        "CreateConsignmentContractTemplateVersionInput!"
                    ]
                }
            ],
            "setNextClientNumber": [
                189,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "nextClientNumber": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "setNextSaleNumber": [
                647,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "nextSaleNumber": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "setIdentityVerificationProvider": [
                376,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "enabled": [
                        138,
                        "Boolean!"
                    ],
                    "provider": [
                        377,
                        "IdentityVerificationProviderInput!"
                    ]
                }
            ],
            "createSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        275,
                        "CreateSaleInput!"
                    ]
                }
            ],
            "createDutchSale": [
                340,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        258,
                        "CreateDutchSaleInput!"
                    ]
                }
            ],
            "updateDutchSale": [
                340,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        851,
                        "UpdateDutchSaleInput!"
                    ]
                }
            ],
            "updateSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        869,
                        "UpdateSaleInput!"
                    ]
                }
            ],
            "addSaleDepartments": [
                610,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ],
                    "departmentIds": [
                        374,
                        "[ID!]!"
                    ]
                }
            ],
            "removeSaleDepartment": [
                610,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ],
                    "departmentId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "createDepartment": [
                316,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "name": [
                        795,
                        "String!"
                    ],
                    "slug": [
                        795
                    ]
                }
            ],
            "updateDepartment": [
                316,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "name": [
                        795,
                        "String!"
                    ]
                }
            ],
            "deleteDepartment": [
                316,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "restoreDepartment": [
                316,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "createSaleGenre": [
                618,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "name": [
                        795,
                        "String!"
                    ],
                    "slug": [
                        795
                    ],
                    "isPublic": [
                        138
                    ]
                }
            ],
            "updateSaleGenre": [
                618,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "name": [
                        795,
                        "String!"
                    ],
                    "isPublic": [
                        138
                    ]
                }
            ],
            "archiveSaleGenre": [
                618,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "restoreSaleGenre": [
                618,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "deleteSaleGenre": [
                618,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setSectionMarker": [
                610,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        763,
                        "SetSectionMarkerInput!"
                    ]
                }
            ],
            "removeSectionMarker": [
                610,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setSaleSlug": [
                661,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        761,
                        "SetSaleSlugInput!"
                    ]
                }
            ],
            "setSaleItemSlug": [
                638,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        757,
                        "SetSaleItemSlugInput!"
                    ]
                }
            ],
            "openSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        499,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "closeSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        193,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "setSaleStatus": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        762,
                        "SetSaleStatusInput!"
                    ]
                }
            ],
            "startClosingSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        785,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "forceOpenSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        499,
                        "OpenSaleInput!"
                    ]
                }
            ],
            "forceCloseSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        193,
                        "CloseSaleInput!"
                    ]
                }
            ],
            "forceStartClosingSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        785,
                        "StartClosingSaleInput!"
                    ]
                }
            ],
            "publishSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        573,
                        "PublishSaleInput!"
                    ]
                }
            ],
            "previewSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        558,
                        "PreviewSaleInput!"
                    ]
                }
            ],
            "setSaleItemsPreview": [
                387,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        759,
                        "SetSaleItemsPreviewInput!"
                    ]
                }
            ],
            "deleteSale": [
                312,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        309,
                        "DeleteSaleInput!"
                    ]
                }
            ],
            "createItem": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        261,
                        "CreateItemInput!"
                    ]
                }
            ],
            "updateItem": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        856,
                        "UpdateItemInput!"
                    ]
                }
            ],
            "setItemStatus": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        740,
                        "SetItemStatusInput!"
                    ]
                }
            ],
            "setCataloguingWorkflowStatus": [
                726,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "itemId": [
                        374,
                        "ID!"
                    ],
                    "status": [
                        158,
                        "CataloguingWorkflowStatus!"
                    ]
                }
            ],
            "setPhotographyWorkflowStatus": [
                751,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "itemId": [
                        374,
                        "ID!"
                    ],
                    "status": [
                        546,
                        "PhotographyWorkflowStatus!"
                    ]
                }
            ],
            "setPhotographyWorkflowStatuses": [
                752,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "itemIds": [
                        374,
                        "[ID!]!"
                    ],
                    "status": [
                        546,
                        "PhotographyWorkflowStatus!"
                    ]
                }
            ],
            "addSpecifications": [
                428,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        28,
                        "AddSpecificationsInput!"
                    ]
                }
            ],
            "createConsignment": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        255,
                        "CreateConsignmentInput!"
                    ]
                }
            ],
            "updateConsignment": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        848,
                        "UpdateConsignmentInput!"
                    ]
                }
            ],
            "deleteConsignment": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "consignmentId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "setItemConsignment": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        736,
                        "SetItemConsignmentInput!"
                    ]
                }
            ],
            "clearItemConsignment": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "createSite": [
                773,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        281,
                        "CreateSiteInput!"
                    ]
                }
            ],
            "updateSite": [
                773,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        874,
                        "UpdateSiteInput!"
                    ]
                }
            ],
            "archiveSite": [
                773,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "siteId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "unarchiveSite": [
                773,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "siteId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "deleteSite": [
                773,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "siteId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "createLocation": [
                448,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        264,
                        "CreateLocationInput!"
                    ]
                }
            ],
            "updateLocation": [
                448,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        859,
                        "UpdateLocationInput!"
                    ]
                }
            ],
            "archiveLocation": [
                448,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "locationId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "unarchiveLocation": [
                448,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "locationId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "deleteLocation": [
                448,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "locationId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "setItemSiteLocation": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        739,
                        "SetItemSiteLocationInput!"
                    ]
                }
            ],
            "clearItemSiteLocation": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "addConsignors": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        19,
                        "AddConsignorsInput!"
                    ]
                }
            ],
            "removeConsignors": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        585,
                        "RemoveConsignorsInput!"
                    ]
                }
            ],
            "setMainConsignor": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        746,
                        "SetMainConsignorInput!"
                    ]
                }
            ],
            "addConsignmentStaff": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        18,
                        "AddConsignmentStaffInput!"
                    ]
                }
            ],
            "setConsignmentTransport": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        731,
                        "SetConsignmentTransportInput!"
                    ]
                }
            ],
            "removeConsignmentStaff": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        584,
                        "RemoveConsignmentStaffInput!"
                    ]
                }
            ],
            "setConsignmentStaffLead": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        730,
                        "SetConsignmentStaffLeadInput!"
                    ]
                }
            ],
            "createAppraisal": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        246,
                        "CreateAppraisalInput!"
                    ]
                }
            ],
            "updateAppraisal": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        840,
                        "UpdateAppraisalInput!"
                    ]
                }
            ],
            "deleteAppraisal": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "appraisalId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "transferAppraisalItemsToConsignment": [
                826,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        825,
                        "TransferAppraisalItemsToConsignmentInput!"
                    ]
                }
            ],
            "setItemsAppraisal": [
                744,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        743,
                        "SetItemsAppraisalInput!"
                    ]
                }
            ],
            "clearItemsAppraisal": [
                188,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        187,
                        "ClearItemsAppraisalInput!"
                    ]
                }
            ],
            "updateAppraisalItem": [
                82,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        841,
                        "UpdateAppraisalItemInput!"
                    ]
                }
            ],
            "addAppraisalClients": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        16,
                        "AddAppraisalClientsInput!"
                    ]
                }
            ],
            "removeAppraisalClients": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        582,
                        "RemoveAppraisalClientsInput!"
                    ]
                }
            ],
            "setMainAppraisalClient": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        745,
                        "SetMainAppraisalClientInput!"
                    ]
                }
            ],
            "addAppraisalStaff": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        17,
                        "AddAppraisalStaffInput!"
                    ]
                }
            ],
            "removeAppraisalStaff": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        583,
                        "RemoveAppraisalStaffInput!"
                    ]
                }
            ],
            "setAppraisalStaffLead": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        718,
                        "SetAppraisalStaffLeadInput!"
                    ]
                }
            ],
            "updateAppraisalItemValuation": [
                82,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        842,
                        "UpdateAppraisalItemValuationInput!"
                    ]
                }
            ],
            "updateAppraisalDocumentDetails": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        839,
                        "UpdateAppraisalDocumentDetailsInput!"
                    ]
                }
            ],
            "generateAppraisalDocument": [
                75,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "appraisalId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "generatePropertyReceipt": [
                565,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        361,
                        "GeneratePropertyReceiptInput!"
                    ]
                }
            ],
            "sendPropertyReceipt": [
                565,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        715,
                        "SendPropertyReceiptInput!"
                    ]
                }
            ],
            "createAppraisalDocumentTemplateVersion": [
                79,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        245,
                        "CreateAppraisalDocumentTemplateVersionInput!"
                    ]
                }
            ],
            "createPropertyReceiptTemplateVersion": [
                571,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        273,
                        "CreatePropertyReceiptTemplateVersionInput!"
                    ]
                }
            ],
            "setValuationRequestSettings": [
                922,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        769,
                        "SetValuationRequestSettingsInput!"
                    ]
                }
            ],
            "setValuationRequestStatus": [
                917,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "status": [
                        923,
                        "ValuationRequestStatus!"
                    ]
                }
            ],
            "setValuationRequestAssignee": [
                917,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "assigneeUserId": [
                        795
                    ]
                }
            ],
            "deleteValuationRequest": [
                917,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setConditionReportRequestAssignee": [
                196,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "userId": [
                        795
                    ]
                }
            ],
            "setAppointmentSettings": [
                67,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        716,
                        "SetAppointmentSettingsInput!"
                    ]
                }
            ],
            "confirmAppointment": [
                59,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        205,
                        "ConfirmAppointmentInput!"
                    ]
                }
            ],
            "cancelAppointment": [
                59,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        153,
                        "CancelAppointmentInput!"
                    ]
                }
            ],
            "completeAppointment": [
                59,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "appointmentId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setAppointmentStaffNote": [
                59,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        717,
                        "SetAppointmentStaffNoteInput!"
                    ]
                }
            ],
            "setNextEntityNumber": [
                346,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "nextNumber": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "setNextInventoryNumber": [
                388,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "nextNumber": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "generateConsignmentContract": [
                209,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        358,
                        "GenerateConsignmentContractInput!"
                    ]
                }
            ],
            "previewConsignmentContract": [
                329,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        557,
                        "PreviewConsignmentContractInput!"
                    ]
                }
            ],
            "markConsignmentContractSent": [
                209,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        453,
                        "MarkConsignmentContractSentInput!"
                    ]
                }
            ],
            "sendConsignmentContract": [
                209,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        711,
                        "SendConsignmentContractInput!"
                    ]
                }
            ],
            "recordConsignmentContractSignature": [
                209,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        577,
                        "RecordConsignmentContractSignatureInput!"
                    ]
                }
            ],
            "previewPresaleAdvice": [
                329,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "consignorUserId": [
                        795,
                        "String!"
                    ],
                    "consignmentId": [
                        795
                    ]
                }
            ],
            "generatePresaleAdvices": [
                360,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        359,
                        "GeneratePresaleAdvicesInput!"
                    ]
                }
            ],
            "sendPresaleAdvices": [
                714,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        713,
                        "SendPresaleAdvicesInput!"
                    ]
                }
            ],
            "setItemOfferConfig": [
                417,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        738,
                        "SetItemOfferConfigInput!"
                    ]
                }
            ],
            "setItemBuyNowConfig": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        734,
                        "SetItemBuyNowConfigInput!"
                    ]
                }
            ],
            "buyItem": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        139,
                        "BuyItemInput!"
                    ]
                }
            ],
            "revertDirectSell": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        606,
                        "RevertDirectSellInput!"
                    ]
                }
            ],
            "acceptOffer": [
                488,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "offerId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "rejectOffer": [
                488,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "offerId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "counterOffer": [
                488,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "offerId": [
                        795,
                        "String!"
                    ],
                    "amount": [
                        387,
                        "Int!"
                    ],
                    "currency": [
                        795,
                        "String!"
                    ],
                    "message": [
                        795
                    ]
                }
            ],
            "addPackaging": [
                421,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        26,
                        "AddPackagingInput!"
                    ]
                }
            ],
            "updateSpecification": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        875,
                        "UpdateSpecificationInput!"
                    ]
                }
            ],
            "updatePackaging": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        865,
                        "UpdatePackagingInput!"
                    ]
                }
            ],
            "removeSpecifications": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        590,
                        "RemoveSpecificationsInput!"
                    ]
                }
            ],
            "removePackaging": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        587,
                        "RemovePackagingInput!"
                    ]
                }
            ],
            "updateItemNumbers": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        857,
                        "UpdateItemNumbersInput!"
                    ]
                }
            ],
            "assignDisplayNumbers": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        101,
                        "AssignDisplayNumbersInput!"
                    ]
                }
            ],
            "setDisplayNumbers": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        732,
                        "SetDisplayNumbersInput!"
                    ]
                }
            ],
            "unlotSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "createItemForSale": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        629,
                        "SaleItemInput!"
                    ]
                }
            ],
            "createDutchItemForSale": [
                341,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        257,
                        "CreateDutchItemForSaleInput!"
                    ]
                }
            ],
            "updateDutchSaleItem": [
                341,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        852,
                        "UpdateDutchSaleItemInput!"
                    ]
                }
            ],
            "addItemToSale": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        23,
                        "AddItemToSaleInput!"
                    ]
                }
            ],
            "updateItemForSale": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        871,
                        "UpdateSaleItemInput!"
                    ]
                }
            ],
            "syncContent": [
                226,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        807,
                        "SyncContentInput!"
                    ]
                }
            ],
            "syncSchemaDataToSaleItem": [
                226,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        810,
                        "SyncSchemaDataToSaleItemInput!"
                    ]
                }
            ],
            "syncSchemaDataFromSaleItem": [
                226,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        808,
                        "SyncSchemaDataFromSaleItemInput!"
                    ]
                }
            ],
            "syncSchemaDataToProductVariant": [
                226,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        809,
                        "SyncSchemaDataToProductVariantInput!"
                    ]
                }
            ],
            "reorderHighlightedItems": [
                370,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        598,
                        "ReorderHighlightedItemsInput!"
                    ]
                }
            ],
            "setItemWinner": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        742,
                        "SetItemWinnerInput!"
                    ]
                }
            ],
            "setSaleItemStatus": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        758,
                        "SetSaleItemStatusInput!"
                    ]
                }
            ],
            "removeItemFromSale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        589,
                        "RemoveSaleItemInput!"
                    ]
                }
            ],
            "createApiKey": [
                48,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        50,
                        "ApiKeyInput!"
                    ]
                }
            ],
            "revokeApiKey": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        607,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "createApiToken": [
                54,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        55,
                        "ApiTokenInput!"
                    ]
                }
            ],
            "revokeApiToken": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        608,
                        "RevokeApiTokenInput!"
                    ]
                }
            ],
            "bidOnBehalf": [
                116,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        120,
                        "BidOnBehalfInput!"
                    ]
                }
            ],
            "maxBidOnBehalf": [
                116,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        457,
                        "MaxBidOnBehalfInput!"
                    ]
                }
            ],
            "cancelLatestBidOnItem": [
                156,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        154,
                        "CancelLatestBidOnItemInput!"
                    ]
                }
            ],
            "setUserIdOnBid": [
                116,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        768,
                        "SetUserIdOnBidInput!"
                    ]
                }
            ],
            "createBidderToken": [
                132,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        133,
                        "BidderTokenInput!"
                    ]
                }
            ],
            "createUserTokenV2": [
                914,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        915,
                        "UserTokenInput!"
                    ]
                }
            ],
            "addActionHookSubscription": [
                12,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        13,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "updateActionHookSubscription": [
                12,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        837,
                        "UpdateActionHookSubscriptionInput!"
                    ]
                }
            ],
            "deleteActionHookSubscription": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        298,
                        "DeleteActionHookSubscriptionInput!"
                    ]
                }
            ],
            "retryActionHook": [
                8,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        605,
                        "RetryActionHookInput!"
                    ]
                }
            ],
            "testActionHook": [
                821,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        13,
                        "ActionHookSubscriptionInput!"
                    ]
                }
            ],
            "onboardPaymentAccount": [
                497,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        496,
                        "OnboardPaymentAccountInput!"
                    ]
                }
            ],
            "continueOnboardPaymentAccount": [
                497,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        234,
                        "ContinueOnboardPaymentAccountInput!"
                    ]
                }
            ],
            "acceptTerms": [
                795,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "createItemImage": [
                378,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        260,
                        "CreateItemImage!"
                    ]
                }
            ],
            "reorderItemImages": [
                378,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        600,
                        "ReorderItemImages!"
                    ]
                }
            ],
            "reorderImages": [
                378,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        599,
                        "ReorderImagesInput!"
                    ]
                }
            ],
            "deleteItemImage": [
                378,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        302,
                        "DeleteItemImageInput!"
                    ]
                }
            ],
            "deleteImage": [
                378,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        301,
                        "DeleteImageInput!"
                    ]
                }
            ],
            "addPaddleToSale": [
                510,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        27,
                        "AddPaddleToSaleInput!"
                    ]
                }
            ],
            "removePaddleFromSale": [
                510,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        588,
                        "RemovePaddleFromSaleInput!"
                    ]
                }
            ],
            "registerUserPaddle": [
                510,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        579,
                        "RegisterUserPaddleInput!"
                    ]
                }
            ],
            "updateUser": [
                899,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        879,
                        "UpdateUserInput!"
                    ]
                }
            ],
            "deleteBankDetails": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "userId": [
                        795,
                        "String!"
                    ],
                    "idType": [
                        896,
                        "UserIdType!"
                    ]
                }
            ],
            "setUserNotificationPreferences": [
                901,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "userId": [
                        795,
                        "String!"
                    ],
                    "preferences": [
                        902,
                        "[UserNotificationPreferenceInput!]!"
                    ]
                }
            ],
            "upsertUserAddress": [
                451,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        886,
                        "UpsertUserAddressInput!"
                    ]
                }
            ],
            "upsertUserPhone": [
                528,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        887,
                        "UpsertUserPhoneInput!"
                    ]
                }
            ],
            "deleteUserAddress": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        314,
                        "DeleteUserAddressInput!"
                    ]
                }
            ],
            "deleteUserPhone": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        315,
                        "DeleteUserPhoneInput!"
                    ]
                }
            ],
            "addMessageNotificationToItem": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        25,
                        "AddMessageNotificationToItemInput!"
                    ]
                }
            ],
            "addFairWarningNotificationToItem": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        21,
                        "AddFairWarningNotificationToItemInput!"
                    ]
                }
            ],
            "addLiveStreamToSale": [
                445,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        24,
                        "AddLiveStreamToSaleInput!"
                    ]
                }
            ],
            "deleteLiveStreamFromSale": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        304,
                        "DeleteLiveStreamFromSaleInput!"
                    ]
                }
            ],
            "createStreamChannel": [
                794,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        283,
                        "CreateStreamChannelInput!"
                    ]
                }
            ],
            "updateStreamChannel": [
                794,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "channelId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        877,
                        "UpdateStreamChannelInput!"
                    ]
                }
            ],
            "deleteStreamChannel": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "channelId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "addTagToItem": [
                811,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        30,
                        "AddTagToItemInput!"
                    ]
                }
            ],
            "removeTagFromItem": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        592,
                        "RemoveTagFromItemInput!"
                    ]
                }
            ],
            "addTagToSaleItem": [
                811,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        31,
                        "AddTagToSaleItemInput!"
                    ]
                }
            ],
            "removeTagFromSaleItem": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        593,
                        "RemoveTagFromSaleItemInput!"
                    ]
                }
            ],
            "addTagToUser": [
                811,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        32,
                        "AddTagToUserInput!"
                    ]
                }
            ],
            "removeTagFromUser": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        594,
                        "RemoveTagFromUserInput!"
                    ]
                }
            ],
            "blockUser": [
                888,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        137,
                        "BlockUserInput!"
                    ]
                }
            ],
            "unblockUser": [
                888,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        832,
                        "UnblockUserInput!"
                    ]
                }
            ],
            "setUserExternalId": [
                888,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        767,
                        "SetUserExternalIdInput!"
                    ]
                }
            ],
            "createItemNote": [
                412,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        262,
                        "CreateItemNoteInput!"
                    ]
                }
            ],
            "createUploadUrl": [
                882,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        286,
                        "CreateUploadUrlInput!"
                    ]
                }
            ],
            "createAssetUploadUrl": [
                100,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        247,
                        "CreateAssetUploadUrlInput!"
                    ]
                }
            ],
            "linkImageById": [
                384,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        441,
                        "LinkImageByIdInput!"
                    ]
                }
            ],
            "linkImageByExternalId": [
                384,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        440,
                        "LinkImageByExternalIdInput!"
                    ]
                }
            ],
            "createItemType": [
                431,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        263,
                        "CreateItemTypeInput!"
                    ]
                }
            ],
            "updateItemType": [
                431,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "itemTypeId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        858,
                        "UpdateItemTypeInput!"
                    ]
                }
            ],
            "reorderItemTypes": [
                431,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "parentId": [
                        374
                    ],
                    "itemTypeIds": [
                        374,
                        "[ID!]!"
                    ]
                }
            ],
            "deleteItemType": [
                138,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "itemTypeId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "createSchema": [
                431,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        263,
                        "CreateItemTypeInput!"
                    ]
                }
            ],
            "updateSchema": [
                431,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "schemaId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        858,
                        "UpdateItemTypeInput!"
                    ]
                }
            ],
            "updateGlobalIncrementTable": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        855,
                        "UpdateGlobalIncrementTableInput!"
                    ]
                }
            ],
            "updateGlobalDates": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        854,
                        "UpdateGlobalDatesInput!"
                    ]
                }
            ],
            "updateGlobalClosingTimeCountdown": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        853,
                        "UpdateGlobalClosingTimeCountdownInput!"
                    ]
                }
            ],
            "passLiveItem": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        518,
                        "PassLiveItemInput!"
                    ]
                }
            ],
            "sellLiveItem": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        703,
                        "SellLiveItemInput!"
                    ]
                }
            ],
            "sellLiveItemToBid": [
                707,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        706,
                        "SellLiveItemToBidInput!"
                    ]
                }
            ],
            "hideItemsFromSale": [
                387,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        368,
                        "HideItemsFromSaleInput!"
                    ]
                }
            ],
            "unhideItemsFromSale": [
                387,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        833,
                        "UnhideItemsFromSaleInput!"
                    ]
                }
            ],
            "connectShopifyToAccount": [
                772,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        206,
                        "ConnectShopifyToAccountInput!"
                    ]
                }
            ],
            "createPaymentOrder": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        270,
                        "CreatePaymentOrderInput!"
                    ]
                }
            ],
            "createOrder": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        266,
                        "CreateOrderInput!"
                    ]
                }
            ],
            "createOrderLine": [
                502,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        268,
                        "CreateOrderLineInput!"
                    ]
                }
            ],
            "updateOrderLine": [
                502,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        864,
                        "UpdateOrderLineInput!"
                    ]
                }
            ],
            "deleteOrderLine": [
                502,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        306,
                        "DeleteOrderLineInput!"
                    ]
                }
            ],
            "updatePaymentOrder": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        866,
                        "UpdatePaymentOrderInput!"
                    ]
                }
            ],
            "updateOrder": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        862,
                        "UpdateOrderInput!"
                    ]
                }
            ],
            "deletePaymentOrder": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        307,
                        "DeletePaymentOrderInput!"
                    ]
                }
            ],
            "cancelPaymentOrder": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        155,
                        "CancelPaymentOrderInput!"
                    ]
                }
            ],
            "publishPaymentOrder": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        572,
                        "PublishPaymentOrderInput!"
                    ]
                }
            ],
            "reopenOrder": [
                523,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "orderId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "createInvoice": [
                389,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        259,
                        "CreateInvoiceInput!"
                    ]
                }
            ],
            "createPayment": [
                519,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        269,
                        "CreatePaymentInput!"
                    ]
                }
            ],
            "createAccountFee": [
                4,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        242,
                        "CreateAccountFeeInput!"
                    ]
                }
            ],
            "updateAccountFee": [
                4,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        835,
                        "UpdateAccountFeeInput!"
                    ]
                }
            ],
            "deleteAccountFee": [
                374,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        297,
                        "DeleteAccountFeeInput!"
                    ]
                }
            ],
            "createSaleFee": [
                353,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        274,
                        "CreateSaleFeeInput!"
                    ]
                }
            ],
            "updateSaleFee": [
                353,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        868,
                        "UpdateSaleFeeInput!"
                    ]
                }
            ],
            "deleteSaleFee": [
                374,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        308,
                        "DeleteSaleFeeInput!"
                    ]
                }
            ],
            "resetSaleFees": [
                353,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        604,
                        "ResetSaleFeesInput!"
                    ]
                }
            ],
            "createSaleItemFee": [
                353,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        276,
                        "CreateSaleItemFeeInput!"
                    ]
                }
            ],
            "updateSaleItemFee": [
                353,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        870,
                        "UpdateSaleItemFeeInput!"
                    ]
                }
            ],
            "deleteSaleItemFee": [
                374,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        310,
                        "DeleteSaleItemFeeInput!"
                    ]
                }
            ],
            "createSaleRegistration": [
                649,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        278,
                        "CreateSaleRegistrationInput!"
                    ]
                }
            ],
            "acceptSaleRegistration": [
                649,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        1,
                        "AcceptSaleRegistrationInput!"
                    ]
                }
            ],
            "rejectSaleRegistration": [
                649,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        580,
                        "RejectSaleRegistrationInput!"
                    ]
                }
            ],
            "deleteSaleRegistration": [
                374,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        313,
                        "DeleteSaleRegistrationInput!"
                    ]
                }
            ],
            "createSaleItemRegistration": [
                633,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        277,
                        "CreateSaleItemRegistrationInput!"
                    ]
                }
            ],
            "deleteSaleItemRegistration": [
                374,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        311,
                        "DeleteSaleItemRegistrationInput!"
                    ]
                }
            ],
            "createSaleRegistrationPolicy": [
                652,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        279,
                        "CreateSaleRegistrationPolicyInput!"
                    ]
                }
            ],
            "updateSaleRegistrationPolicy": [
                652,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        872,
                        "UpdateSaleRegistrationPolicyInput!"
                    ]
                }
            ],
            "attachSaleRegistrationPolicies": [
                652,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        104,
                        "AttachSaleRegistrationPoliciesInput!"
                    ]
                }
            ],
            "detachSaleRegistrationPolicies": [
                652,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        319,
                        "DetachSaleRegistrationPoliciesInput!"
                    ]
                }
            ],
            "setMetafields": [
                459,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "metafields": [
                        747,
                        "[SetMetafieldInput!]!"
                    ]
                }
            ],
            "deleteMetafield": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        305,
                        "DeleteMetafieldInput!"
                    ]
                }
            ],
            "createUserPaymentProviderSession": [
                906,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        907,
                        "UserPaymentProviderSessionInput!"
                    ]
                }
            ],
            "createPaymentProviderSession": [
                525,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "addDashboardUserRole": [
                296,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        20,
                        "AddDashboardUserRoleInput!"
                    ]
                }
            ],
            "removeDashboardUserRole": [
                296,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        586,
                        "RemoveDashboardUserRoleInput!"
                    ]
                }
            ],
            "associateUserToAccount": [
                294,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        103,
                        "AssociateUserToAccountInput!"
                    ]
                }
            ],
            "disassociateUserFromAccount": [
                138,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        322,
                        "DisassociateUserFromAccountInput!"
                    ]
                }
            ],
            "createCategory": [
                160,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        251,
                        "CreateCategoryInput!"
                    ]
                }
            ],
            "updateCategory": [
                160,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        845,
                        "UpdateCategoryInput!"
                    ]
                }
            ],
            "deleteCategory": [
                138,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "categoryId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setItemCategories": [
                163,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        735,
                        "SetItemCategoriesInput!"
                    ]
                }
            ],
            "setSaleCategories": [
                163,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        753,
                        "SetSaleCategoriesInput!"
                    ]
                }
            ],
            "setSaleItemCategories": [
                163,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        755,
                        "SetSaleItemCategoriesInput!"
                    ]
                }
            ],
            "createCreator": [
                287,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        256,
                        "CreateCreatorInput!"
                    ]
                }
            ],
            "updateCreator": [
                287,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        849,
                        "UpdateCreatorInput!"
                    ]
                }
            ],
            "deleteCreator": [
                138,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "creatorId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "createStaffProfile": [
                780,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        282,
                        "CreateStaffProfileInput!"
                    ]
                }
            ],
            "updateStaffProfile": [
                780,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        876,
                        "UpdateStaffProfileInput!"
                    ]
                }
            ],
            "deleteStaffProfile": [
                138,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "staffProfileId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setStaffProfileDepartments": [
                780,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "staffProfileId": [
                        374,
                        "ID!"
                    ],
                    "departmentIds": [
                        374,
                        "[ID!]!"
                    ]
                }
            ],
            "setStaffProfilePhoto": [
                780,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "staffProfileId": [
                        374,
                        "ID!"
                    ],
                    "imageId": [
                        795
                    ]
                }
            ],
            "setStaffProfileItemTypes": [
                780,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "staffProfileId": [
                        374,
                        "ID!"
                    ],
                    "itemTypeIds": [
                        374,
                        "[ID!]!"
                    ]
                }
            ],
            "setStaffProfileDashboardMember": [
                780,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "staffProfileId": [
                        374,
                        "ID!"
                    ],
                    "userId": [
                        795
                    ]
                }
            ],
            "updateStaffProfileSchema": [
                438,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "definition": [
                        438,
                        "JSON!"
                    ]
                }
            ],
            "updateCreatorSettings": [
                290,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        850,
                        "UpdateCreatorSettingsInput!"
                    ]
                }
            ],
            "setItemCreators": [
                289,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        737,
                        "SetItemCreatorsInput!"
                    ]
                }
            ],
            "setSaleItemCreators": [
                289,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        756,
                        "SetSaleItemCreatorsInput!"
                    ]
                }
            ],
            "updateArrSettings": [
                96,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        843,
                        "UpdateArrSettingsInput!"
                    ]
                }
            ],
            "setArrBands": [
                96,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        719,
                        "SetArrBandsInput!"
                    ]
                }
            ],
            "deleteArrSettings": [
                138,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "currency": [
                        292,
                        "Currency!"
                    ]
                }
            ],
            "createCharge": [
                173,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        252,
                        "CreateChargeInput!"
                    ]
                }
            ],
            "updateCharge": [
                173,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        846,
                        "UpdateChargeInput!"
                    ]
                }
            ],
            "setChargeStatus": [
                173,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        729,
                        "SetChargeStatusInput!"
                    ]
                }
            ],
            "setChargeBands": [
                173,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        728,
                        "SetChargeBandsInput!"
                    ]
                }
            ],
            "setChargeAtScope": [
                173,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        727,
                        "SetChargeAtScopeInput!"
                    ]
                }
            ],
            "deleteChargeAtScope": [
                173,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        300,
                        "DeleteChargeAtScopeInput!"
                    ]
                }
            ],
            "createBuyerPremium": [
                140,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        250,
                        "CreateBuyerPremiumInput!"
                    ]
                }
            ],
            "updateBuyerPremium": [
                140,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        844,
                        "UpdateBuyerPremiumInput!"
                    ]
                }
            ],
            "setBuyerPremiumStatus": [
                140,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        725,
                        "SetBuyerPremiumStatusInput!"
                    ]
                }
            ],
            "setBuyerPremiumBands": [
                140,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        724,
                        "SetBuyerPremiumBandsInput!"
                    ]
                }
            ],
            "setBuyerPremiumAtScope": [
                140,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        723,
                        "SetBuyerPremiumAtScopeInput!"
                    ]
                }
            ],
            "deleteBuyerPremiumAtScope": [
                140,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        299,
                        "DeleteBuyerPremiumAtScopeInput!"
                    ]
                }
            ],
            "createAccountCode": [
                3,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        241,
                        "CreateAccountCodeInput!"
                    ]
                }
            ],
            "updateAccountCode": [
                3,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        834,
                        "UpdateAccountCodeInput!"
                    ]
                }
            ],
            "deleteAccountCode": [
                138,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "accountCodeId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "createTaxCode": [
                815,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        284,
                        "CreateTaxCodeInput!"
                    ]
                }
            ],
            "updateTaxCode": [
                815,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        878,
                        "UpdateTaxCodeInput!"
                    ]
                }
            ],
            "upsertTaxSettings": [
                885,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        884,
                        "UpsertTaxSettingsInput!"
                    ]
                }
            ],
            "setItemTypeTaxDefault": [
                433,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        741,
                        "SetItemTypeTaxDefaultInput!"
                    ]
                }
            ],
            "deleteItemTypeTaxDefault": [
                138,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "itemTypeId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "issueStatement": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setStatementAddress": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "addressId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "setStatementChargeAmount": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        764,
                        "SetStatementChargeAmountInput!"
                    ]
                }
            ],
            "addStatementCharge": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        29,
                        "AddStatementChargeInput!"
                    ]
                }
            ],
            "removeStatementCharge": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        591,
                        "RemoveStatementChargeInput!"
                    ]
                }
            ],
            "setStatementLineHammer": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        766,
                        "SetStatementLineHammerInput!"
                    ]
                }
            ],
            "setStatementLineDescription": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        765,
                        "SetStatementLineDescriptionInput!"
                    ]
                }
            ],
            "recordOrderPayment": [
                523,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "orderId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        578,
                        "RecordOrderPaymentInput!"
                    ]
                }
            ],
            "upsertInvoiceSettings": [
                390,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        883,
                        "UpsertInvoiceSettingsInput!"
                    ]
                }
            ],
            "setItemArr": [
                393,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        733,
                        "SetItemArrInput!"
                    ]
                }
            ],
            "setSaleItemArr": [
                623,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        754,
                        "SetSaleItemArrInput!"
                    ]
                }
            ],
            "createSendGridNotificationIntegration": [
                712,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        280,
                        "CreateSendGridNotificationIntegrationInput!"
                    ]
                }
            ],
            "updateSendGridNotificationIntegration": [
                712,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        873,
                        "UpdateSendGridNotificationIntegrationInput!"
                    ]
                }
            ],
            "rotateSendGridNotificationIntegrationApiKey": [
                712,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        609,
                        "RotateSendGridNotificationIntegrationApiKeyInput!"
                    ]
                }
            ],
            "createTwilioNotificationIntegration": [
                831,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        285,
                        "CreateTwilioNotificationIntegrationInput!"
                    ]
                }
            ],
            "setNotificationConfiguration": [
                475,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        748,
                        "SetNotificationConfigurationInput!"
                    ]
                }
            ],
            "setNotificationConfigurationStatus": [
                475,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        749,
                        "SetNotificationConfigurationStatusInput!"
                    ]
                }
            ],
            "createAttributionChannel": [
                107,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        248,
                        "CreateAttributionChannelInput!"
                    ]
                }
            ],
            "renameAttributionChannel": [
                107,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        595,
                        "RenameAttributionChannelInput!"
                    ]
                }
            ],
            "archiveAttributionChannel": [
                107,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "unarchiveAttributionChannel": [
                107,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "deleteAttributionChannel": [
                107,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "createAttributionSource": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        249,
                        "CreateAttributionSourceInput!"
                    ]
                }
            ],
            "renameAttributionSource": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        596,
                        "RenameAttributionSourceInput!"
                    ]
                }
            ],
            "archiveAttributionSource": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "unarchiveAttributionSource": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "deleteAttributionSource": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "setAttributionChannelSelfServiceOnly": [
                107,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        720,
                        "SetAttributionChannelSelfServiceOnlyInput!"
                    ]
                }
            ],
            "setAttributionSourcePublic": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        722,
                        "SetAttributionSourcePublicInput!"
                    ]
                }
            ],
            "setAttributionSourceChannels": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        721,
                        "SetAttributionSourceChannelsInput!"
                    ]
                }
            ],
            "createNoteType": [
                470,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        265,
                        "CreateNoteTypeInput!"
                    ]
                }
            ],
            "renameNoteType": [
                470,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        597,
                        "RenameNoteTypeInput!"
                    ]
                }
            ],
            "updateNoteTypeScope": [
                470,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        861,
                        "UpdateNoteTypeScopeInput!"
                    ]
                }
            ],
            "archiveNoteType": [
                470,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "unarchiveNoteType": [
                470,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "deleteNoteType": [
                470,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "addItemNote": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        22,
                        "AddItemNoteInput!"
                    ]
                }
            ],
            "updateItemNote": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        860,
                        "UpdateNoteInput!"
                    ]
                }
            ],
            "deleteItemNote": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "setItemNoteAlert": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ],
                    "isAlert": [
                        138,
                        "Boolean!"
                    ]
                }
            ],
            "createClientRelationship": [
                191,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        253,
                        "CreateClientRelationshipInput!"
                    ]
                }
            ],
            "updateClientRelationship": [
                191,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        847,
                        "UpdateClientRelationshipInput!"
                    ]
                }
            ],
            "deleteClientRelationship": [
                374,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "addUserNote": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        33,
                        "AddUserNoteInput!"
                    ]
                }
            ],
            "updateUserNote": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        860,
                        "UpdateNoteInput!"
                    ]
                }
            ],
            "deleteUserNote": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "setUserNoteAlert": [
                467,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ],
                    "isAlert": [
                        138,
                        "Boolean!"
                    ]
                }
            ],
            "setWorkflowScheduleOffsets": [
                934,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        770,
                        "SetWorkflowScheduleOffsetsInput!"
                    ]
                }
            ],
            "updateWorkflowSettings": [
                881,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        880,
                        "UpdateWorkflowSettingsInput!"
                    ]
                }
            ],
            "setSaleWorkflowDateOverride": [
                610,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ],
                    "dateType": [
                        928,
                        "WorkflowDateType!"
                    ],
                    "overrideDate": [
                        823
                    ]
                }
            ],
            "assignPhoneClerksToSale": [
                543,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "staffProfileIds": [
                        374,
                        "[ID!]!"
                    ]
                }
            ],
            "removePhoneClerkFromSale": [
                543,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "staffProfileId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "reorderSalePhoneClerks": [
                543,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "staffProfileIds": [
                        374,
                        "[ID!]!"
                    ]
                }
            ],
            "setSalePhoneLineCount": [
                543,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "count": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "setSalePhoneClerkConfig": [
                648,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        760,
                        "SetSalePhoneClerkConfigInput!"
                    ]
                }
            ],
            "setPhoneClerkOverride": [
                534,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        750,
                        "SetPhoneClerkOverrideInput!"
                    ]
                }
            ],
            "deletePhoneClerkOverride": [
                374,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "generatePhoneClerkPlan": [
                535,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "force": [
                        138
                    ]
                }
            ],
            "assignPhoneClerk": [
                530,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        102,
                        "AssignPhoneClerkInput!"
                    ]
                }
            ],
            "acceptPhoneClerkSuggestion": [
                530,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        0,
                        "AcceptPhoneClerkSuggestionInput!"
                    ]
                }
            ],
            "lockPhoneClerkPlan": [
                535,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "planId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "generatePhoneBidSummarySheet": [
                329,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "generatePhoneClerkSheet": [
                329,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "lineNumber": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "createAffiliate": [
                35,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        244,
                        "CreateAffiliateInput!"
                    ]
                }
            ],
            "updateAffiliate": [
                35,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "affiliateId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        838,
                        "UpdateAffiliateInput!"
                    ]
                }
            ],
            "__typename": [
                795
            ]
        },
        "NewConsignmentFromAppraisalInput": {
            "name": [
                795
            ],
            "description": [
                795
            ],
            "feeRules": [
                217
            ],
            "externalId": [
                795
            ],
            "reportSeparately": [
                138
            ],
            "staffUserIds": [
                795
            ],
            "reuseAppraisalNumber": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "Node": {
            "id": [
                374
            ],
            "on_AccountFee": [
                4
            ],
            "on_ActionHookLog": [
                8
            ],
            "on_ApiKey": [
                46
            ],
            "on_ApiToken": [
                52
            ],
            "on_Appointment": [
                59
            ],
            "on_Appraisal": [
                71
            ],
            "on_Category": [
                160
            ],
            "on_ConditionReportRequest": [
                196
            ],
            "on_Consignment": [
                207
            ],
            "on_Department": [
                316
            ],
            "on_DutchSale": [
                340
            ],
            "on_FeeRule": [
                353
            ],
            "on_Item": [
                393
            ],
            "on_Location": [
                448
            ],
            "on_Offer": [
                488
            ],
            "on_PaymentOrder": [
                523
            ],
            "on_Sale": [
                610
            ],
            "on_SaleGenre": [
                618
            ],
            "on_SaleItemRegistration": [
                633
            ],
            "on_SaleItemWatchlistEntry": [
                641
            ],
            "on_SaleRegistration": [
                649
            ],
            "on_SaleRegistrationPolicy": [
                652
            ],
            "on_SaleWatchlistEntry": [
                688
            ],
            "on_SectionMarker": [
                702
            ],
            "on_Site": [
                773
            ],
            "on_StaffProfile": [
                780
            ],
            "on_User": [
                888
            ],
            "on_ValuationRequest": [
                917
            ],
            "__typename": [
                795
            ]
        },
        "Note": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "entityId": [
                795
            ],
            "noteType": [
                470
            ],
            "noteTypeId": [
                795
            ],
            "authorId": [
                795
            ],
            "author": [
                112
            ],
            "note": [
                795
            ],
            "isAlert": [
                138
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "NoteConnection": {
            "edges": [
                469
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "NoteEdge": {
            "cursor": [
                795
            ],
            "node": [
                467
            ],
            "__typename": [
                795
            ]
        },
        "NoteType": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "name": [
                795
            ],
            "scope": [
                471
            ],
            "archivedAt": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "NoteTypeScope": {},
        "NotificationAudience": {},
        "NotificationAudienceGroup": {},
        "NotificationCatalog": {
            "entries": [
                475
            ],
            "__typename": [
                795
            ]
        },
        "NotificationCatalogEntry": {
            "event": [
                481
            ],
            "audience": [
                472
            ],
            "displayName": [
                795
            ],
            "timing": [
                487
            ],
            "supportedChannels": [
                476
            ],
            "saleTypeVarying": [
                138
            ],
            "configurations": [
                477
            ],
            "__typename": [
                795
            ]
        },
        "NotificationChannel": {},
        "NotificationConfiguration": {
            "channel": [
                476
            ],
            "status": [
                478
            ],
            "on_InstantNotificationConfiguration": [
                385
            ],
            "on_ScheduledNotificationConfiguration": [
                693
            ],
            "__typename": [
                795
            ]
        },
        "NotificationConfigurationStatus": {},
        "NotificationEmailSender": {
            "fromEmail": [
                795
            ],
            "fromName": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "NotificationEmailSenderInput": {
            "fromEmail": [
                795
            ],
            "fromName": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "NotificationEvent": {},
        "NotificationIntegration": {
            "channel": [
                476
            ],
            "created": [
                795
            ],
            "timezone": [
                795
            ],
            "on_SendGridNotificationIntegration": [
                712
            ],
            "on_TwilioNotificationIntegration": [
                831
            ],
            "__typename": [
                795
            ]
        },
        "NotificationLeadTime": {
            "minutesBefore": [
                387
            ],
            "templates": [
                485
            ],
            "__typename": [
                795
            ]
        },
        "NotificationLeadTimeInput": {
            "minutesBefore": [
                387
            ],
            "templates": [
                486
            ],
            "__typename": [
                795
            ]
        },
        "NotificationTemplate": {
            "saleType": [
                682
            ],
            "templateId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "NotificationTemplateInput": {
            "saleType": [
                682
            ],
            "templateId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "NotificationTiming": {},
        "Offer": {
            "id": [
                374
            ],
            "cursor": [
                795
            ],
            "accountId": [
                795
            ],
            "itemId": [
                795
            ],
            "item": [
                394
            ],
            "buyerUserId": [
                795
            ],
            "buyer": [
                899
            ],
            "amount": [
                387
            ],
            "currency": [
                795
            ],
            "status": [
                492
            ],
            "message": [
                795
            ],
            "decidedByUserId": [
                795
            ],
            "decidedByActor": [
                489
            ],
            "awaitingParty": [
                491
            ],
            "counters": [
                490
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "expiresAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OfferActor": {},
        "OfferCounter": {
            "id": [
                374
            ],
            "party": [
                491
            ],
            "amount": [
                387
            ],
            "currency": [
                795
            ],
            "message": [
                795
            ],
            "createdByUserId": [
                795
            ],
            "created": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OfferParty": {},
        "OfferStatus": {},
        "OffersConnection": {
            "edges": [
                494
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "OffersEdge": {
            "cursor": [
                795
            ],
            "node": [
                488
            ],
            "__typename": [
                795
            ]
        },
        "OffersFilter": {
            "statuses": [
                492
            ],
            "itemId": [
                795
            ],
            "buyerUserId": [
                795
            ],
            "consignorUserId": [
                795
            ],
            "minAmount": [
                387
            ],
            "maxAmount": [
                387
            ],
            "createdAfter": [
                795
            ],
            "createdBefore": [
                795
            ],
            "query": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OnboardPaymentAccountInput": {
            "sellerLocation": [
                709
            ],
            "type": [
                520
            ],
            "returnUrl": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OnboardPaymentAccountResponse": {
            "onboardingUrl": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OnlineBidOrigin": {
            "type": [
                124
            ],
            "__typename": [
                795
            ]
        },
        "OpenSaleInput": {
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OrderConnection": {
            "edges": [
                501
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "OrderEdge": {
            "cursor": [
                795
            ],
            "node": [
                523
            ],
            "__typename": [
                795
            ]
        },
        "OrderLine": {
            "orderLineId": [
                374
            ],
            "amount": [
                387
            ],
            "description": [
                795
            ],
            "orderLineType": [
                505
            ],
            "fees": [
                503
            ],
            "sellerFees": [
                503
            ],
            "platformFees": [
                504
            ],
            "item": [
                631
            ],
            "tax": [
                58
            ],
            "__typename": [
                795
            ]
        },
        "OrderLineFee": {
            "id": [
                374
            ],
            "description": [
                795
            ],
            "name": [
                795
            ],
            "amount": [
                387
            ],
            "isSystemDefined": [
                138
            ],
            "tax": [
                58
            ],
            "__typename": [
                795
            ]
        },
        "OrderLinePlatformFee": {
            "name": [
                795
            ],
            "amount": [
                387
            ],
            "chargedTo": [
                548
            ],
            "__typename": [
                795
            ]
        },
        "OrderLineType": {},
        "OrderPayment": {
            "id": [
                374
            ],
            "amount": [
                387
            ],
            "receivedOn": [
                795
            ],
            "reference": [
                795
            ],
            "createdAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OrderStatus": {},
        "OrganisationDetails": {
            "legalName": [
                795
            ],
            "registrationNumber": [
                795
            ],
            "vatNumber": [
                795
            ],
            "addressLine1": [
                795
            ],
            "addressLine2": [
                795
            ],
            "city": [
                795
            ],
            "region": [
                795
            ],
            "postalCode": [
                795
            ],
            "countryName": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "OrganisationDetailsInput": {
            "legalName": [
                795
            ],
            "registrationNumber": [
                795
            ],
            "vatNumber": [
                795
            ],
            "addressLine1": [
                795
            ],
            "addressLine2": [
                795
            ],
            "city": [
                795
            ],
            "region": [
                795
            ],
            "postalCode": [
                795
            ],
            "countryName": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Paddle": {
            "identifier": [
                795
            ],
            "userId": [
                795
            ],
            "user": [
                899
            ],
            "type": [
                512
            ],
            "created": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PaddleBidOrigin": {
            "type": [
                124
            ],
            "__typename": [
                795
            ]
        },
        "PaddleType": {},
        "PageInfo": {
            "startCursor": [
                374
            ],
            "endCursor": [
                374
            ],
            "hasNextPage": [
                138
            ],
            "hasPreviousPage": [
                138
            ],
            "totalRecords": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "PaginationDirection": {},
        "Participant": {
            "userId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ParticipantsConnection": {
            "edges": [
                517
            ],
            "totalCount": [
                387
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ParticipantsEdge": {
            "cursor": [
                795
            ],
            "node": [
                515
            ],
            "__typename": [
                795
            ]
        },
        "PassLiveItemInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "transitionToUpcomingLot": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "Payment": {
            "paymentId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "PaymentAccountType": {},
        "PaymentDetails": {
            "paymentProviderAccountId": [
                795
            ],
            "status": [
                526
            ],
            "accountFees": [
                4
            ],
            "__typename": [
                795
            ]
        },
        "PaymentMethod": {
            "on_Card": [
                157
            ],
            "__typename": [
                795
            ]
        },
        "PaymentOrder": {
            "id": [
                374
            ],
            "orderId": [
                374
            ],
            "title": [
                795
            ],
            "currency": [
                292
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "invoiceId": [
                795
            ],
            "invoiceNumber": [
                795
            ],
            "invoice": [
                389
            ],
            "dueAt": [
                795
            ],
            "paymentTermsDays": [
                387
            ],
            "total": [
                387
            ],
            "taxTotal": [
                387
            ],
            "taxBands": [
                814
            ],
            "taxInLieuTotal": [
                387
            ],
            "marginScheme": [
                138
            ],
            "amountPaid": [
                387
            ],
            "amountDue": [
                387
            ],
            "payments": [
                506
            ],
            "paymentId": [
                795
            ],
            "userId": [
                795
            ],
            "orderLines": [
                502
            ],
            "user": [
                899
            ],
            "billingAddress": [
                451
            ],
            "shippingAddress": [
                451
            ],
            "buyerAddresses": [
                451
            ],
            "status": [
                507
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PaymentProviderCustomerInput": {
            "stripe": [
                797
            ],
            "stripeApp": [
                796
            ],
            "__typename": [
                795
            ]
        },
        "PaymentProviderSession": {
            "on_StripePaymentProviderSession": [
                800
            ],
            "__typename": [
                795
            ]
        },
        "PaymentProviderStatus": {},
        "Permission": {},
        "PhoneAddress": {
            "id": [
                795
            ],
            "phoneType": [
                545
            ],
            "phoneNumber": [
                795
            ],
            "label": [
                795
            ],
            "isPrimary": [
                138
            ],
            "verifiedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "PhoneBidOrigin": {
            "type": [
                124
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkAssignment": {
            "id": [
                374
            ],
            "itemId": [
                795
            ],
            "itemNumber": [
                387
            ],
            "saleRegistrationId": [
                374
            ],
            "saleRegistration": [
                649
            ],
            "saleItemRegistrationId": [
                374
            ],
            "bidderUserId": [
                795
            ],
            "lineNumber": [
                387
            ],
            "clerkName": [
                795
            ],
            "source": [
                531
            ],
            "reason": [
                540
            ],
            "suggestion": [
                542
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkAssignmentSource": {},
        "PhoneClerkHistoryEntry": {
            "bidderUserId": [
                795
            ],
            "staffProfileId": [
                374
            ],
            "clerkName": [
                795
            ],
            "saleId": [
                795
            ],
            "lastItemNumber": [
                387
            ],
            "lockedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkItemAssignments": {
            "itemId": [
                795
            ],
            "itemNumber": [
                387
            ],
            "assignments": [
                530
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkOverride": {
            "id": [
                374
            ],
            "bidderUserId": [
                795
            ],
            "itemId": [
                795
            ],
            "lineNumber": [
                387
            ],
            "note": [
                795
            ],
            "createdBy": [
                795
            ],
            "createdAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkPlan": {
            "id": [
                374
            ],
            "saleId": [
                795
            ],
            "version": [
                387
            ],
            "status": [
                539
            ],
            "generator": [
                536
            ],
            "model": [
                795
            ],
            "error": [
                795
            ],
            "staleness": [
                538
            ],
            "issues": [
                537
            ],
            "createdBy": [
                795
            ],
            "createdAt": [
                823
            ],
            "lockedBy": [
                795
            ],
            "lockedAt": [
                823
            ],
            "assignments": [
                530
            ],
            "byItem": [
                533
            ],
            "byLine": [
                544
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkPlanGenerator": {},
        "PhoneClerkPlanIssue": {
            "code": [
                795
            ],
            "message": [
                795
            ],
            "saleItemRegistrationIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkPlanStaleness": {
            "isStale": [
                138
            ],
            "uncoveredRegistrationCount": [
                387
            ],
            "removedRegistrationCount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkPlanStatus": {},
        "PhoneClerkReason": {
            "code": [
                541
            ],
            "explanation": [
                795
            ],
            "evidenceAssignmentId": [
                374
            ],
            "evidenceSaleId": [
                795
            ],
            "rewritten": [
                138
            ],
            "actorUserId": [
                795
            ],
            "at": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "PhoneClerkReasonCode": {},
        "PhoneClerkSuggestion": {
            "lineNumber": [
                387
            ],
            "reason": [
                540
            ],
            "conflictingSaleItemRegistrationIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "PhoneLine": {
            "lineNumber": [
                387
            ],
            "label": [
                795
            ],
            "clerk": [
                780
            ],
            "displayName": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PhoneLineAssignments": {
            "line": [
                543
            ],
            "assignments": [
                530
            ],
            "__typename": [
                795
            ]
        },
        "PhoneType": {},
        "PhotographyWorkflowStatus": {},
        "PhotographyWorkflowSummary": {
            "totalItems": [
                387
            ],
            "toPhotograph": [
                387
            ],
            "photographed": [
                387
            ],
            "uploaded": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "PlatformFeeChargedTo": {},
        "PresaleAdvice": {
            "id": [
                374
            ],
            "saleId": [
                795
            ],
            "consignor": [
                225
            ],
            "consignments": [
                207
            ],
            "reportedSeparately": [
                138
            ],
            "revision": [
                387
            ],
            "status": [
                554
            ],
            "filename": [
                795
            ],
            "generatedAt": [
                823
            ],
            "generatedBy": [
                795
            ],
            "sentAt": [
                823
            ],
            "sentBy": [
                795
            ],
            "sentToEmail": [
                795
            ],
            "download": [
                329
            ],
            "__typename": [
                795
            ]
        },
        "PresaleAdviceList": {
            "advices": [
                549
            ],
            "skipped": [
                553
            ],
            "__typename": [
                795
            ]
        },
        "PresaleAdviceSendResult": {
            "presaleAdviceId": [
                795
            ],
            "sent": [
                138
            ],
            "error": [
                795
            ],
            "advice": [
                549
            ],
            "__typename": [
                795
            ]
        },
        "PresaleAdviceSkipReason": {},
        "PresaleAdviceSkippedItem": {
            "itemId": [
                795
            ],
            "reason": [
                552
            ],
            "__typename": [
                795
            ]
        },
        "PresaleAdviceStatus": {},
        "PresaleAdvicesConnection": {
            "edges": [
                556
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "PresaleAdvicesEdge": {
            "cursor": [
                795
            ],
            "node": [
                549
            ],
            "__typename": [
                795
            ]
        },
        "PreviewConsignmentContractInput": {
            "consignmentId": [
                795
            ],
            "currency": [
                292
            ],
            "__typename": [
                795
            ]
        },
        "PreviewSaleInput": {
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Principal": {
            "id": [
                374
            ],
            "type": [
                560
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PrincipalType": {},
        "ProductVariant": {
            "id": [
                374
            ],
            "productId": [
                374
            ],
            "name": [
                795
            ],
            "sku": [
                795
            ],
            "price": [
                387
            ],
            "currencyCode": [
                456
            ],
            "stockOnHand": [
                387
            ],
            "enabled": [
                138
            ],
            "itemId": [
                374
            ],
            "itemType": [
                431
            ],
            "effectiveSchema": [
                438
            ],
            "type": [
                431
            ],
            "schema": [
                438
            ],
            "schemaId": [
                374
            ],
            "schemaData": [
                438
            ],
            "attributes": [
                438
            ],
            "__typename": [
                795
            ]
        },
        "ProductVariantConnection": {
            "edges": [
                563
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ProductVariantEdge": {
            "cursor": [
                795
            ],
            "node": [
                561
            ],
            "__typename": [
                795
            ]
        },
        "ProductVariantLink": {
            "variantId": [
                374
            ],
            "productId": [
                374
            ],
            "productName": [
                795
            ],
            "variantName": [
                795
            ],
            "sku": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PropertyReceipt": {
            "id": [
                374
            ],
            "consignmentId": [
                795
            ],
            "number": [
                795
            ],
            "items": [
                567
            ],
            "custody": [
                566
            ],
            "site": [
                773
            ],
            "siteLocation": [
                448
            ],
            "templateVersion": [
                387
            ],
            "filename": [
                795
            ],
            "issuedAt": [
                823
            ],
            "issuedBy": [
                795
            ],
            "lastSentAt": [
                823
            ],
            "lastSentBy": [
                795
            ],
            "lastSentTo": [
                795
            ],
            "sendCount": [
                387
            ],
            "download": [
                329
            ],
            "__typename": [
                795
            ]
        },
        "PropertyReceiptCustody": {},
        "PropertyReceiptItem": {
            "itemId": [
                795
            ],
            "lineNumber": [
                387
            ],
            "item": [
                393
            ],
            "__typename": [
                795
            ]
        },
        "PropertyReceiptLocationInput": {
            "inTransit": [
                138
            ],
            "site": [
                570
            ],
            "__typename": [
                795
            ]
        },
        "PropertyReceiptRef": {
            "id": [
                374
            ],
            "number": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PropertyReceiptSiteInput": {
            "siteId": [
                795
            ],
            "locationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PropertyReceiptTemplate": {
            "id": [
                374
            ],
            "version": [
                387
            ],
            "title": [
                795
            ],
            "body": [
                795
            ],
            "createdAt": [
                823
            ],
            "createdBy": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "PublishPaymentOrderInput": {
            "orderId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "PublishSaleInput": {
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Query": {
            "account": [
                2,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "saleStatsDataCoverage": [
                667,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "saleStatsYoyGmv": [
                680,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "yearA": [
                        387,
                        "Int!"
                    ],
                    "yearB": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsMomGmv": [
                675,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "yearA": [
                        387,
                        "Int!"
                    ],
                    "monthA": [
                        387,
                        "Int!"
                    ],
                    "yearB": [
                        387,
                        "Int!"
                    ],
                    "monthB": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsSellThrough": [
                677,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "year": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsBidderEngagement": [
                664,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "year": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsDistinctWinners": [
                668,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "year": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsLotOutcomeSummary": [
                674,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "year": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsHammerVsEstimate": [
                671,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "year": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsClosingDayProfile": [
                665,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "year": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "saleStatsTopSales": [
                679,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "year": [
                        387,
                        "Int!"
                    ],
                    "limit": [
                        387
                    ]
                }
            ],
            "accounts": [
                2
            ],
            "countries": [
                237,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "accountCountries": [
                238,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "sales": [
                613,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        616
                    ]
                }
            ],
            "sale": [
                610,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "saleIdType": [
                        621
                    ]
                }
            ],
            "saleV2": [
                683,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ],
                    "saleIdType": [
                        621
                    ]
                }
            ],
            "salesV2": [
                684,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        616
                    ]
                }
            ],
            "departments": [
                317,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "saleGenres": [
                619,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "includeArchived": [
                        138
                    ]
                }
            ],
            "saleItem": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "saleItemByExternalId": [
                623,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "externalId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "apiKeys": [
                47,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "searchKey": [
                696,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                53,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "actionHookSubscriptions": [
                12,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "attributionChannels": [
                107,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "includeArchived": [
                        138
                    ]
                }
            ],
            "attributionSources": [
                108,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "includeArchived": [
                        138
                    ]
                }
            ],
            "noteTypes": [
                470,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "includeArchived": [
                        138
                    ]
                }
            ],
            "notificationIntegrations": [
                482,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "revealSendGridNotificationIntegrationApiKey": [
                795,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "notificationCatalog": [
                474,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "workflowScheduleOffsets": [
                934,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "cataloguingWorkflowSummaryForSale": [
                159,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "photographyWorkflowSummaryForSale": [
                547,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "itemCataloguingReadiness": [
                396,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "itemId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "saleItemsRequiredFieldStatus": [
                637,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ],
                    "itemIds": [
                        374,
                        "[ID!]"
                    ]
                }
            ],
            "actionHookLogs": [
                9,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        7
                    ]
                }
            ],
            "item": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "itemByExternalId": [
                393,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "externalId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "items": [
                435,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "itemsFilter": [
                        437,
                        "ItemsFilter!"
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "consignment": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "consignmentId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "couriers": [
                240,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "query": [
                        795
                    ],
                    "first": [
                        387
                    ]
                }
            ],
            "consignmentByShortId": [
                207,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "shortId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "consignmentLine": [
                219,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "consignmentNumber": [
                        387,
                        "Int!"
                    ],
                    "lineNumber": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "entityNumberSettings": [
                346,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "inventoryNumberSettings": [
                388,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "consignmentContract": [
                209,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "contractId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "presaleAdvices": [
                550,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "consignorPresaleAdvices": [
                555,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "consignorUserId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "consignmentContractPlaceholders": [
                235,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "consignmentContractTemplateStarter": [
                795,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "consignmentContractTemplateVersion": [
                214,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ]
                }
            ],
            "consignments": [
                223,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "appraisal": [
                71,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "appraisalId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "appraisalItem": [
                82,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "appraisalId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "appraisalLine": [
                82,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "appraisalNumber": [
                        387,
                        "Int!"
                    ],
                    "lineNumber": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "suggestContent": [
                232,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "input": [
                        802,
                        "SuggestContentInput!"
                    ]
                }
            ],
            "appraisals": [
                92,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "appraisalDocumentTemplate": [
                79,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "type": [
                        90,
                        "AppraisalType!"
                    ]
                }
            ],
            "appraisalDocumentTemplateVersions": [
                79,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "type": [
                        90,
                        "AppraisalType!"
                    ]
                }
            ],
            "appraisalDocumentPlaceholders": [
                235,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "propertyReceiptTemplate": [
                571,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "propertyReceiptTemplateVersions": [
                571,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "propertyReceiptTemplateVersion": [
                571,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "version": [
                        387,
                        "Int!"
                    ]
                }
            ],
            "propertyReceiptPlaceholders": [
                235,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "propertyReceipt": [
                565,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "receiptId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "valuationRequestSettings": [
                922,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "valuationRequests": [
                924,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        920
                    ]
                }
            ],
            "valuationRequest": [
                917,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "conditionReportRequests": [
                204,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        201
                    ]
                }
            ],
            "conditionReportRequest": [
                196,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "appointmentSettings": [
                67,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "appointments": [
                70,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        65
                    ],
                    "order": [
                        66
                    ]
                }
            ],
            "appointment": [
                59,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "site": [
                773,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "siteId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "sites": [
                776,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "includeArchived": [
                        138
                    ]
                }
            ],
            "location": [
                448,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "locationId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "locations": [
                449,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "siteId": [
                        795
                    ],
                    "includeArchived": [
                        138
                    ]
                }
            ],
            "consignorItems": [
                435,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "consignorUserId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "itemOfferConfig": [
                417,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "offer": [
                488,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "offerId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "itemOffers": [
                493,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "itemId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "status": [
                        492
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "offers": [
                493,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "filter": [
                        495
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "bids": [
                134,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "filter": [
                        136
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "salesAggregate": [
                690,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "userBidActivity": [
                892,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "userId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        894
                    ],
                    "direction": [
                        514
                    ],
                    "orderBy": [
                        121
                    ]
                }
            ],
            "user": [
                888,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "userId": [
                        795,
                        "String!"
                    ],
                    "idType": [
                        896,
                        "UserIdType!"
                    ]
                }
            ],
            "clientNumberSettings": [
                189,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "saleNumberSettings": [
                647,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "orders": [
                500,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "before": [
                        795
                    ],
                    "last": [
                        387
                    ]
                }
            ],
            "order": [
                523,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "orderId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "userOrders": [
                500,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "userID": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "before": [
                        795
                    ],
                    "last": [
                        387
                    ]
                }
            ],
            "statements": [
                787,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "filter": [
                        790
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "statement": [
                786,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "invoiceSettings": [
                390,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "saleRegistrations": [
                658,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        660
                    ],
                    "direction": [
                        514
                    ],
                    "sortByField": [
                        655
                    ]
                }
            ],
            "image": [
                384,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        795,
                        "String!"
                    ],
                    "idType": [
                        380,
                        "ImageIdType!"
                    ]
                }
            ],
            "asset": [
                97,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "assetId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "assets": [
                98,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "contentTypes": [
                        795,
                        "[String!]"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "users": [
                916,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "consignorFollowers": [
                916,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "consignorId": [
                        374,
                        "ID!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "userFollowing": [
                916,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "userId": [
                        374,
                        "ID!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "consignorFollowerCount": [
                387,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "consignorId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "saleRegistrationPolicies": [
                651,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "last": [
                        387
                    ],
                    "before": [
                        795
                    ]
                }
            ],
            "saleRegistrationPolicySchema": [
                166,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "validateSaleRegistrationPolicyRule": [
                171,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "rule": [
                        795,
                        "String!"
                    ]
                }
            ],
            "search": [
                698,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "type": [
                        701,
                        "SearchType!"
                    ],
                    "query": [
                        795,
                        "String!"
                    ],
                    "first": [
                        387
                    ],
                    "page": [
                        387
                    ],
                    "queryBy": [
                        795,
                        "[String!]"
                    ],
                    "orderBy": [
                        795
                    ],
                    "filterBy": [
                        795
                    ]
                }
            ],
            "geoLookup": [
                362,
                {
                    "ip": [
                        795
                    ]
                }
            ],
            "dashboardMembers": [
                294,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "dashboardUserRoles": [
                296,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "userId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "currentUser": [
                293,
                {
                    "accountId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "category": [
                160,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "categoryId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "categories": [
                161,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "parentId": [
                        374
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "itemTypes": [
                434,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "parentId": [
                        374
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "schemas": [
                434,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "parentId": [
                        374
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "schemaNamespaces": [
                695,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "creator": [
                287,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "creatorId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "creators": [
                288,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "parentId": [
                        374
                    ],
                    "includeChildren": [
                        138
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "staffProfile": [
                780,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "staffProfileId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "staffProfiles": [
                781,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "departmentId": [
                        374
                    ],
                    "itemTypeId": [
                        374
                    ],
                    "isPhoneClerk": [
                        138
                    ]
                }
            ],
            "staffProfileSchema": [
                438,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "suggestPhoneClerk": [
                542,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleItemRegistrationId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "phoneClerkPlan": [
                535,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "id": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "phoneClerkHistory": [
                532,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "bidderUserId": [
                        795,
                        "String!"
                    ]
                }
            ],
            "affiliate": [
                35,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "affiliateId": [
                        374,
                        "ID!"
                    ]
                }
            ],
            "affiliates": [
                36,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        43
                    ]
                }
            ],
            "affiliateReport": [
                39,
                {
                    "accountId": [
                        374,
                        "ID!"
                    ],
                    "input": [
                        41,
                        "AffiliateReportInput!"
                    ]
                }
            ],
            "__typename": [
                795
            ]
        },
        "RangeRule": {
            "highRange": [
                387
            ],
            "lowRange": [
                387
            ],
            "step": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "RangeRuleInput": {
            "highRange": [
                387
            ],
            "lowRange": [
                387
            ],
            "step": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "RecordConsignmentContractSignatureInput": {
            "consignmentId": [
                795
            ],
            "contractId": [
                795
            ],
            "signedAt": [
                823
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RecordOrderPaymentInput": {
            "amount": [
                387
            ],
            "receivedOn": [
                795
            ],
            "reference": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RegisterUserPaddleInput": {
            "saleId": [
                795
            ],
            "paddleIdentifier": [
                795
            ],
            "type": [
                512
            ],
            "email": [
                795
            ],
            "firstName": [
                795
            ],
            "lastName": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RejectSaleRegistrationInput": {
            "registrationId": [
                795
            ],
            "reason": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RelatedParty": {
            "party": [
                888
            ],
            "partyHoldsRole": [
                138
            ],
            "relationship": [
                191
            ],
            "__typename": [
                795
            ]
        },
        "RemoveAppraisalClientsInput": {
            "appraisalId": [
                795
            ],
            "clientUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveAppraisalStaffInput": {
            "appraisalId": [
                795
            ],
            "staffUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveConsignmentStaffInput": {
            "consignmentId": [
                795
            ],
            "consignmentStaffUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveConsignorsInput": {
            "consignmentId": [
                795
            ],
            "consignorUserIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveDashboardUserRoleInput": {
            "userId": [
                795
            ],
            "role": [
                295
            ],
            "__typename": [
                795
            ]
        },
        "RemovePackagingInput": {
            "itemId": [
                795
            ],
            "packagingIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemovePaddleFromSaleInput": {
            "saleId": [
                795
            ],
            "paddleIdentifier": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveSaleItemInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveSpecificationsInput": {
            "itemId": [
                795
            ],
            "specificationIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveStatementChargeInput": {
            "lineChargeId": [
                374
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveTagFromItemInput": {
            "itemId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveTagFromSaleItemInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RemoveTagFromUserInput": {
            "userId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RenameAttributionChannelInput": {
            "id": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RenameAttributionSourceInput": {
            "id": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RenameNoteTypeInput": {
            "id": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ReorderHighlightedItemsInput": {
            "saleId": [
                795
            ],
            "itemIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ReorderImagesInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "imageType": [
                383
            ],
            "imageOrderChanges": [
                382
            ],
            "kind": [
                381
            ],
            "__typename": [
                795
            ]
        },
        "ReorderItemImages": {
            "itemId": [
                795
            ],
            "imageOrderChanges": [
                382
            ],
            "__typename": [
                795
            ]
        },
        "ReserveAutoBidMethod": {},
        "ReserveStatus": {},
        "ReserveType": {},
        "ResetSaleFeesInput": {
            "saleId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "RetryActionHookInput": {
            "id": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "RevertDirectSellInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "buyerUserId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RevokeApiKeyInput": {
            "apiKeyId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RevokeApiTokenInput": {
            "apiTokenId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "RotateSendGridNotificationIntegrationApiKeyInput": {
            "apiKey": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Sale": {
            "id": [
                374
            ],
            "cursor": [
                795
            ],
            "type": [
                682
            ],
            "accountId": [
                795
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "currency": [
                795
            ],
            "status": [
                681
            ],
            "saleFormat": [
                617
            ],
            "items": [
                643,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        627
                    ],
                    "order": [
                        420
                    ]
                }
            ],
            "incrementTable": [
                118
            ],
            "dates": [
                614
            ],
            "participants": [
                516,
                {
                    "take": [
                        387
                    ],
                    "cursor": [
                        795
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "sequenceNumber": [
                387
            ],
            "saleNumber": [
                387
            ],
            "saleCode": [
                795
            ],
            "closingMethod": [
                194
            ],
            "closingTimeCountdown": [
                387
            ],
            "images": [
                378
            ],
            "themeType": [
                387
            ],
            "slug": [
                795
            ],
            "websiteUrl": [
                795
            ],
            "reserveAutoBidMethod": [
                601
            ],
            "isTestSale": [
                138
            ],
            "printedCatalogue": [
                138
            ],
            "workflowSchedule": [
                931
            ],
            "bastaBidClient": [
                138
            ],
            "hidden": [
                138
            ],
            "paddles": [
                510
            ],
            "liveStream": [
                348
            ],
            "liveVideoStream": [
                445
            ],
            "liveItem": [
                444,
                {
                    "itemOrderInput": [
                        420
                    ]
                }
            ],
            "saleBidsCounts": [
                387
            ],
            "sumOfHighestBids": [
                387
            ],
            "statistics": [
                663
            ],
            "bidRestrictions": [
                128
            ],
            "registrations": [
                658,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        659
                    ],
                    "direction": [
                        514
                    ],
                    "sortByField": [
                        655
                    ]
                }
            ],
            "registrationPolicies": [
                651,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "last": [
                        387
                    ],
                    "before": [
                        795
                    ]
                }
            ],
            "orders": [
                500,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "before": [
                        795
                    ],
                    "last": [
                        387
                    ]
                }
            ],
            "externalId": [
                795
            ],
            "location": [
                795
            ],
            "metafields": [
                459,
                {
                    "input": [
                        366,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                459,
                {
                    "input": [
                        365,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "highlighted": [
                370
            ],
            "saleItemClosingSchedule": [
                624
            ],
            "feeRules": [
                353
            ],
            "hasDefaultSaleFees": [
                138
            ],
            "watchlist": [
                686,
                {
                    "input": [
                        689
                    ]
                }
            ],
            "categories": [
                160
            ],
            "departments": [
                316
            ],
            "saleGenre": [
                618
            ],
            "site": [
                773
            ],
            "viewingTimes": [
                795
            ],
            "buyersNotes": [
                795
            ],
            "feesApplyInfo": [
                795
            ],
            "saleContact": [
                294
            ],
            "sectionMarkers": [
                702
            ],
            "itemsMissingDisplayNumberCount": [
                387
            ],
            "phoneClerks": [
                543
            ],
            "phoneClerkConfig": [
                648
            ],
            "phoneClerkPlan": [
                535
            ],
            "lockedPhoneClerkPlan": [
                535
            ],
            "phoneClerkOverrides": [
                534
            ],
            "__typename": [
                795
            ]
        },
        "SaleActivity": {
            "on_Sale": [
                610
            ],
            "on_SaleItem": [
                623
            ],
            "on_SaleLiveStreamUpdate": [
                645
            ],
            "on_Node": [
                466
            ],
            "on_SaleV2": [
                683
            ],
            "__typename": [
                795
            ]
        },
        "SaleBanner": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "status": [
                681
            ],
            "type": [
                682
            ],
            "currency": [
                795
            ],
            "closingMethod": [
                194
            ],
            "dates": [
                614
            ],
            "hidden": [
                138
            ],
            "slug": [
                795
            ],
            "createdTimestamp": [
                387
            ],
            "reserveAutoBidMethod": [
                601
            ],
            "bastaBidClient": [
                138
            ],
            "images": [
                378
            ],
            "externalId": [
                795
            ],
            "location": [
                795
            ],
            "isTestSale": [
                138
            ],
            "saleNumber": [
                387
            ],
            "saleCode": [
                795
            ],
            "statistics": [
                663
            ],
            "__typename": [
                795
            ]
        },
        "SaleConnection": {
            "edges": [
                692
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleDates": {
            "closingDate": [
                795
            ],
            "openDate": [
                795
            ],
            "liveDate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleDatesInput": {
            "closingDate": [
                795
            ],
            "openDate": [
                795
            ],
            "liveDate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleFilter": {
            "statuses": [
                681
            ],
            "showTestSales": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SaleFormat": {},
        "SaleGenre": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "archivedAt": [
                795
            ],
            "isPublic": [
                138
            ],
            "charges": [
                179,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        182
                    ]
                }
            ],
            "buyerPremiums": [
                145,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        147
                    ]
                }
            ],
            "__typename": [
                795
            ]
        },
        "SaleGenreConnection": {
            "edges": [
                620
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleGenreEdge": {
            "node": [
                618
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleIDType": {},
        "SaleImageAssociation": {
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleItem": {
            "id": [
                374
            ],
            "cursor": [
                795
            ],
            "accountId": [
                795
            ],
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "conditionReport": [
                195
            ],
            "totalBids": [
                387
            ],
            "description": [
                795
            ],
            "cataloguingWorkflowStatus": [
                158
            ],
            "photographyWorkflowStatus": [
                546
            ],
            "titleTemplateOverride": [
                795
            ],
            "subTitleTemplateOverride": [
                795
            ],
            "descriptionTemplateOverride": [
                795
            ],
            "currentBid": [
                387
            ],
            "currentMaxBid": [
                387
            ],
            "currency": [
                795
            ],
            "leaderId": [
                795
            ],
            "saleId": [
                795
            ],
            "bids": [
                116,
                {
                    "collapseSequentialUserBids": [
                        138
                    ]
                }
            ],
            "reserve": [
                387
            ],
            "startingBid": [
                387
            ],
            "incrementTable": [
                118
            ],
            "status": [
                430
            ],
            "estimates": [
                347
            ],
            "itemNumber": [
                387
            ],
            "dates": [
                397
            ],
            "allowedBidTypes": [
                131
            ],
            "images": [
                378
            ],
            "slug": [
                795
            ],
            "paymentOrder": [
                523
            ],
            "paymentOrders": [
                523
            ],
            "hidden": [
                138
            ],
            "preview": [
                138
            ],
            "nextAsks": [
                387,
                {
                    "iterations": [
                        387
                    ]
                }
            ],
            "reserveMet": [
                138
            ],
            "notifications": [
                415
            ],
            "tags": [
                795
            ],
            "tagsV2": [
                811
            ],
            "reserveStatus": [
                602
            ],
            "itemResult": [
                425
            ],
            "reserveType": [
                603
            ],
            "externalId": [
                795
            ],
            "displayNumber": [
                795
            ],
            "highlight": [
                400
            ],
            "metadata": [
                410
            ],
            "itemType": [
                431
            ],
            "effectiveSchema": [
                438
            ],
            "type": [
                431
            ],
            "schema": [
                438
            ],
            "schemaId": [
                374
            ],
            "schemaData": [
                438
            ],
            "attributes": [
                438
            ],
            "closingTimeCountdown": [
                387
            ],
            "specifications": [
                428
            ],
            "specificationsV2": [
                428
            ],
            "packaging": [
                421
            ],
            "registrations": [
                636,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "filter": [
                        635
                    ]
                }
            ],
            "feeRules": [
                353
            ],
            "location": [
                795
            ],
            "site": [
                773
            ],
            "siteLocation": [
                448
            ],
            "consignment": [
                207
            ],
            "metafields": [
                459,
                {
                    "input": [
                        366,
                        "GetMetafieldsInput!"
                    ]
                }
            ],
            "metafield": [
                459,
                {
                    "input": [
                        365,
                        "GetMetafieldInput!"
                    ]
                }
            ],
            "watchlist": [
                639,
                {
                    "input": [
                        642
                    ]
                }
            ],
            "watcherCount": [
                387
            ],
            "categories": [
                160
            ],
            "creators": [
                287
            ],
            "arr": [
                138
            ],
            "offerConfig": [
                417
            ],
            "offers": [
                493,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "status": [
                        492
                    ],
                    "direction": [
                        514
                    ]
                }
            ],
            "buyNowConfig": [
                395
            ],
            "offerEnabled": [
                138
            ],
            "buyNowEnabled": [
                138
            ],
            "directSell": [
                320
            ],
            "charges": [
                179,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        182
                    ]
                }
            ],
            "buyerPremiums": [
                145,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        147
                    ]
                }
            ],
            "buyerPremiumsFixedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemClosingSchedule": {
            "type": [
                626
            ],
            "staggered": [
                783
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemClosingScheduleInput": {
            "type": [
                626
            ],
            "staggered": [
                784
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemClosingScheduleType": {},
        "SaleItemFilter": {
            "statuses": [
                430
            ],
            "showHiddenItems": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemImageAssociation": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "kind": [
                381
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemInput": {
            "saleId": [
                795
            ],
            "bidIncrementTable": [
                119
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "startingBid": [
                387
            ],
            "valuationAmount": [
                387
            ],
            "valuationCurrency": [
                795
            ],
            "reserve": [
                387
            ],
            "lowEstimate": [
                387
            ],
            "highEstimate": [
                387
            ],
            "ItemNumber": [
                387
            ],
            "allowedBidTypes": [
                131
            ],
            "openDate": [
                795
            ],
            "closingDate": [
                795
            ],
            "slug": [
                795
            ],
            "closingTimeCountdown": [
                387
            ],
            "hidden": [
                138
            ],
            "tags": [
                795
            ],
            "specifications": [
                429
            ],
            "externalId": [
                795
            ],
            "displayNumber": [
                795
            ],
            "highlight": [
                401
            ],
            "metafields": [
                461
            ],
            "reserveType": [
                603
            ],
            "schemaId": [
                374
            ],
            "schemaData": [
                438
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemLink": {
            "saleId": [
                374
            ],
            "saleItemId": [
                374
            ],
            "saleTitle": [
                795
            ],
            "saleStatus": [
                681
            ],
            "itemNumber": [
                387
            ],
            "displayNumber": [
                795
            ],
            "saleItemStatus": [
                430
            ],
            "saleItemTitle": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemOrItem": {
            "on_SaleItem": [
                623
            ],
            "on_Item": [
                393
            ],
            "on_Node": [
                466
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemRefInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemRegistration": {
            "id": [
                374
            ],
            "saleRegistration": [
                649
            ],
            "saleItem": [
                623
            ],
            "createdAt": [
                795
            ],
            "preferredPhoneNumber": [
                528
            ],
            "alternativePhoneNumbers": [
                528
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemRegistrationEdge": {
            "node": [
                633
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemRegistrationFilter": {
            "types": [
                657
            ],
            "userId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemRegistrationsConnection": {
            "edges": [
                634
            ],
            "pageInfo": [
                513
            ],
            "totalCount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemRequiredFieldStatus": {
            "itemId": [
                374
            ],
            "found": [
                138
            ],
            "noItemType": [
                138
            ],
            "missingRequiredFields": [
                463
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemSlug": {
            "id": [
                374
            ],
            "slug": [
                795
            ],
            "accountHandle": [
                795
            ],
            "accountId": [
                795
            ],
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "sale": [
                610
            ],
            "saleItem": [
                623
            ],
            "account": [
                2
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemWatchlistConnection": {
            "edges": [
                640
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemWatchlistEdge": {
            "cursor": [
                795
            ],
            "node": [
                641
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemWatchlistEntry": {
            "id": [
                374
            ],
            "userId": [
                795
            ],
            "createdAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemWatchlistInput": {
            "first": [
                387
            ],
            "after": [
                795
            ],
            "direction": [
                514
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemsConnection": {
            "edges": [
                644
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleItemsEdge": {
            "cursor": [
                795
            ],
            "node": [
                623
            ],
            "__typename": [
                795
            ]
        },
        "SaleLiveStreamUpdate": {
            "currentViewers": [
                387
            ],
            "observedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleMetrics": {
            "totalItems": [
                387
            ],
            "itemsOverReserve": [
                387
            ],
            "itemsWithBids": [
                387
            ],
            "totalBids": [
                387
            ],
            "uniqueBidders": [
                387
            ],
            "highEstimateSum": [
                387
            ],
            "lowEstimateSum": [
                387
            ],
            "currentBidOverReserveTotal": [
                387
            ],
            "currentBidTotal": [
                387
            ],
            "soldHammerTotal": [
                387
            ],
            "expectedHammerTotal": [
                387
            ],
            "maxBidsTotal": [
                387
            ],
            "itemsOverReservePercentage": [
                357
            ],
            "itemsWithBidsPercentage": [
                357
            ],
            "averageBidsPerItem": [
                357
            ],
            "hiddenItems": [
                387
            ],
            "highestBid": [
                369
            ],
            "bidderEngagement": [
                357
            ],
            "dailyBidCounts": [
                662
            ],
            "calculatedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleNumberSettings": {
            "nextSaleNumber": [
                387
            ],
            "highestAssignedSaleNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SalePhoneClerkConfig": {
            "itemGap": [
                387
            ],
            "planningNotes": [
                795
            ],
            "updatedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistration": {
            "id": [
                374
            ],
            "account": [
                2
            ],
            "sale": [
                610
            ],
            "userId": [
                795
            ],
            "type": [
                657
            ],
            "identifier": [
                795
            ],
            "status": [
                656
            ],
            "rejectedReason": [
                795
            ],
            "createdAt": [
                795
            ],
            "userProfile": [
                899
            ],
            "policyResults": [
                654
            ],
            "preferredPhoneNumber": [
                528
            ],
            "alternativePhoneNumbers": [
                528
            ],
            "itemRegistrations": [
                636
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationEdge": {
            "node": [
                649
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationPoliciesConnection": {
            "edges": [
                653
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationPolicy": {
            "id": [
                374
            ],
            "code": [
                795
            ],
            "description": [
                795
            ],
            "rule": [
                795
            ],
            "isDefault": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationPolicyEdge": {
            "node": [
                652
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationPolicyResult": {
            "code": [
                795
            ],
            "passed": [
                138
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationSortByField": {},
        "SaleRegistrationStatus": {},
        "SaleRegistrationType": {},
        "SaleRegistrationsConnection": {
            "edges": [
                650
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationsForSaleFilter": {
            "types": [
                657
            ],
            "statuses": [
                656
            ],
            "userId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleRegistrationsQueryFilter": {
            "saleIds": [
                795
            ],
            "userIds": [
                795
            ],
            "types": [
                657
            ],
            "statuses": [
                656
            ],
            "__typename": [
                795
            ]
        },
        "SaleSlug": {
            "id": [
                374
            ],
            "slug": [
                795
            ],
            "accountHandle": [
                795
            ],
            "accountId": [
                795
            ],
            "saleId": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "sale": [
                610
            ],
            "account": [
                2
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatisticBidCounts": {
            "date": [
                795
            ],
            "bidCount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatistics": {
            "saleMetrics": [
                646
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsBidderEngagement": {
            "lotCount": [
                387
            ],
            "avgUniqueBiddersPerLot": [
                357
            ],
            "maxUniqueBiddersPerLot": [
                387
            ],
            "avgBidsPerLot": [
                357
            ],
            "caveats": [
                795
            ],
            "dayOfYearCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsClosingDayProfile": {
            "rows": [
                666
            ],
            "caveats": [
                795
            ],
            "dayOfYearCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsClosingDayRow": {
            "dayOfWeek": [
                387
            ],
            "lotCount": [
                387
            ],
            "avgBidsPerLot": [
                357
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsDataCoverage": {
            "hasData": [
                138
            ],
            "minDateKey": [
                387
            ],
            "maxDateKey": [
                387
            ],
            "lotCount": [
                387
            ],
            "distinctCurrencies": [
                387
            ],
            "lastProjectedAt": [
                795
            ],
            "backfillDone": [
                138
            ],
            "caveats": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsDistinctWinners": {
            "rows": [
                669
            ],
            "caveats": [
                795
            ],
            "dayOfYearCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsDistinctWinnersRow": {
            "currency": [
                795
            ],
            "distinctWinners": [
                387
            ],
            "repeatWinners": [
                387
            ],
            "repeatBuyerShare": [
                357
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsGmvPoint": {
            "currency": [
                795
            ],
            "year": [
                387
            ],
            "gmv": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsHammerVsEstimate": {
            "rows": [
                672
            ],
            "caveats": [
                795
            ],
            "dayOfYearCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsHammerVsEstimateRow": {
            "currency": [
                795
            ],
            "scoredLots": [
                387
            ],
            "totalHammer": [
                387
            ],
            "totalMidEstimate": [
                387
            ],
            "avgHammerToMidRatio": [
                357
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsLotOutcomeRow": {
            "currency": [
                795
            ],
            "sold": [
                387
            ],
            "unsold": [
                387
            ],
            "total": [
                387
            ],
            "sellThrough": [
                357
            ],
            "reserveMetRate": [
                357
            ],
            "soldViaAuction": [
                387
            ],
            "soldViaOffer": [
                387
            ],
            "soldViaBuyNow": [
                387
            ],
            "auctionShare": [
                357
            ],
            "offerShare": [
                357
            ],
            "buyNowShare": [
                357
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsLotOutcomeSummary": {
            "rows": [
                673
            ],
            "caveats": [
                795
            ],
            "dayOfYearCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsMomGmv": {
            "rows": [
                676
            ],
            "caveats": [
                795
            ],
            "dayOfMonthCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsMonthlyGmvPoint": {
            "currency": [
                795
            ],
            "year": [
                387
            ],
            "month": [
                387
            ],
            "gmv": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsSellThrough": {
            "sold": [
                387
            ],
            "total": [
                387
            ],
            "sellThrough": [
                357
            ],
            "caveats": [
                795
            ],
            "dayOfYearCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsTopSaleRow": {
            "currency": [
                795
            ],
            "rank": [
                387
            ],
            "saleId": [
                374
            ],
            "title": [
                795
            ],
            "gmv": [
                387
            ],
            "sold": [
                387
            ],
            "total": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsTopSales": {
            "rows": [
                678
            ],
            "caveats": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatsYoyGmv": {
            "rows": [
                670
            ],
            "caveats": [
                795
            ],
            "dayOfYearCutoff": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SaleStatus": {},
        "SaleType": {},
        "SaleV2": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "currency": [
                795
            ],
            "status": [
                681
            ],
            "dates": [
                614
            ],
            "saleFormat": [
                617
            ],
            "on_DutchSale": [
                340
            ],
            "on_Sale": [
                610
            ],
            "__typename": [
                795
            ]
        },
        "SaleV2Connection": {
            "edges": [
                685
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleV2Edge": {
            "cursor": [
                795
            ],
            "node": [
                683
            ],
            "__typename": [
                795
            ]
        },
        "SaleWatchlistConnection": {
            "edges": [
                687
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SaleWatchlistEdge": {
            "cursor": [
                795
            ],
            "node": [
                688
            ],
            "__typename": [
                795
            ]
        },
        "SaleWatchlistEntry": {
            "id": [
                374
            ],
            "userId": [
                795
            ],
            "createdAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SaleWatchlistInput": {
            "first": [
                387
            ],
            "after": [
                795
            ],
            "direction": [
                514
            ],
            "__typename": [
                795
            ]
        },
        "SalesAggregate": {
            "open": [
                387
            ],
            "closing": [
                387
            ],
            "closed": [
                387
            ],
            "published": [
                387
            ],
            "unpublished": [
                387
            ],
            "preview": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SalesAggregateInput": {
            "accountId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SalesEdge": {
            "cursor": [
                795
            ],
            "node": [
                610
            ],
            "__typename": [
                795
            ]
        },
        "ScheduledNotificationConfiguration": {
            "channel": [
                476
            ],
            "status": [
                478
            ],
            "audienceGroups": [
                473
            ],
            "leadTimes": [
                483
            ],
            "sender": [
                479
            ],
            "replyToEmail": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ScheduledNotificationConfigurationInput": {
            "audienceGroups": [
                473
            ],
            "leadTimes": [
                484
            ],
            "sender": [
                480
            ],
            "replyToEmail": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SchemaNamespace": {
            "namespace": [
                795
            ],
            "accountId": [
                795
            ],
            "createdAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SearchKey": {
            "key": [
                795
            ],
            "collections": [
                795
            ],
            "expiration": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SearchPageInfo": {
            "currentPage": [
                387
            ],
            "perPage": [
                387
            ],
            "totalPages": [
                387
            ],
            "totalCount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SearchResultConnection": {
            "edges": [
                699
            ],
            "pageInfo": [
                697
            ],
            "resultCount": [
                387
            ],
            "facets": [
                349
            ],
            "__typename": [
                795
            ]
        },
        "SearchResultEdge": {
            "node": [
                700
            ],
            "__typename": [
                795
            ]
        },
        "SearchResultItem": {
            "on_User": [
                888
            ],
            "on_SaleRegistration": [
                649
            ],
            "on_SaleItem": [
                623
            ],
            "on_SaleBanner": [
                612
            ],
            "on_Item": [
                393
            ],
            "on_Offer": [
                488
            ],
            "on_Image": [
                378
            ],
            "on_Video": [
                925
            ],
            "on_Document": [
                324
            ],
            "on_Activity": [
                15
            ],
            "on_ConsignmentBanner": [
                208
            ],
            "on_AppraisalBanner": [
                72
            ],
            "on_Node": [
                466
            ],
            "on_Asset": [
                97
            ],
            "__typename": [
                795
            ]
        },
        "SearchType": {},
        "SectionMarker": {
            "id": [
                374
            ],
            "title": [
                795
            ],
            "summary": [
                795
            ],
            "fromItemNumber": [
                387
            ],
            "toItemNumber": [
                387
            ],
            "imageAssetId": [
                795
            ],
            "imageUrl": [
                795
            ],
            "isFeaturedSelection": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SellLiveItemInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "transitionToUpcomingLot": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SellLiveItemToBidError": {
            "error": [
                795
            ],
            "errorCode": [
                705
            ],
            "__typename": [
                795
            ]
        },
        "SellLiveItemToBidErrorCode": {},
        "SellLiveItemToBidInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "bidId": [
                795
            ],
            "transitionToUpcomingLot": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SellLiveItemToBidResult": {
            "on_SellLiveItemToBidSuccess": [
                708
            ],
            "on_SellLiveItemToBidError": [
                704
            ],
            "__typename": [
                795
            ]
        },
        "SellLiveItemToBidSuccess": {
            "saleItem": [
                623
            ],
            "__typename": [
                795
            ]
        },
        "SellerLocation": {},
        "SellerTerms": {
            "accepted_by": [
                795
            ],
            "accepted_date": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SendConsignmentContractInput": {
            "consignmentId": [
                795
            ],
            "contractId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SendGridNotificationIntegration": {
            "channel": [
                476
            ],
            "created": [
                795
            ],
            "timezone": [
                795
            ],
            "fromEmail": [
                795
            ],
            "fromName": [
                795
            ],
            "replyToEmail": [
                795
            ],
            "accountNotificationEmail": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SendPresaleAdvicesInput": {
            "presaleAdviceIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SendPresaleAdvicesResult": {
            "results": [
                551
            ],
            "__typename": [
                795
            ]
        },
        "SendPropertyReceiptInput": {
            "receiptId": [
                795
            ],
            "recipientEmail": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetAppointmentSettingsInput": {
            "enabled": [
                138
            ],
            "recipientEmails": [
                795
            ],
            "minLeadHours": [
                387
            ],
            "maxDaysAhead": [
                387
            ],
            "maxActivePerClient": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SetAppointmentStaffNoteInput": {
            "appointmentId": [
                374
            ],
            "staffNote": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetAppraisalStaffLeadInput": {
            "appraisalId": [
                795
            ],
            "staffUserId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetArrBandsInput": {
            "currency": [
                292
            ],
            "bands": [
                95
            ],
            "__typename": [
                795
            ]
        },
        "SetAttributionChannelSelfServiceOnlyInput": {
            "id": [
                795
            ],
            "selfServiceOnly": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetAttributionSourceChannelsInput": {
            "sourceId": [
                795
            ],
            "channelIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetAttributionSourcePublicInput": {
            "id": [
                795
            ],
            "public": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetBuyerPremiumAtScopeInput": {
            "buyerPremiumId": [
                374
            ],
            "scope": [
                148
            ],
            "calculationType": [
                144
            ],
            "status": [
                150
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "bands": [
                142
            ],
            "__typename": [
                795
            ]
        },
        "SetBuyerPremiumBandsInput": {
            "buyerPremiumId": [
                374
            ],
            "bands": [
                142
            ],
            "__typename": [
                795
            ]
        },
        "SetBuyerPremiumStatusInput": {
            "buyerPremiumId": [
                374
            ],
            "status": [
                150
            ],
            "__typename": [
                795
            ]
        },
        "SetCataloguingWorkflowStatusPayload": {
            "item": [
                393
            ],
            "__typename": [
                795
            ]
        },
        "SetChargeAtScopeInput": {
            "chargeId": [
                374
            ],
            "scope": [
                184
            ],
            "basedOn": [
                177
            ],
            "frequency": [
                181
            ],
            "calculationType": [
                178
            ],
            "status": [
                186
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "bands": [
                175
            ],
            "__typename": [
                795
            ]
        },
        "SetChargeBandsInput": {
            "chargeId": [
                374
            ],
            "bands": [
                175
            ],
            "__typename": [
                795
            ]
        },
        "SetChargeStatusInput": {
            "chargeId": [
                374
            ],
            "status": [
                186
            ],
            "__typename": [
                795
            ]
        },
        "SetConsignmentStaffLeadInput": {
            "consignmentId": [
                795
            ],
            "consignmentStaffUserId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetConsignmentTransportInput": {
            "consignmentId": [
                795
            ],
            "coordinatorUserId": [
                795
            ],
            "expectedDate": [
                795
            ],
            "courierName": [
                795
            ],
            "receivingSiteId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetDisplayNumbersInput": {
            "saleId": [
                795
            ],
            "assignments": [
                323
            ],
            "__typename": [
                795
            ]
        },
        "SetItemArrInput": {
            "itemId": [
                374
            ],
            "arr": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetItemBuyNowConfigInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "enabled": [
                138
            ],
            "price": [
                387
            ],
            "currency": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetItemCategoriesInput": {
            "itemId": [
                374
            ],
            "categoryIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "SetItemConsignmentInput": {
            "itemId": [
                795
            ],
            "consignmentId": [
                795
            ],
            "reassign": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetItemCreatorsInput": {
            "itemId": [
                374
            ],
            "creatorIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "SetItemOfferConfigInput": {
            "itemId": [
                795
            ],
            "enabled": [
                138
            ],
            "autoAcceptAmount": [
                387
            ],
            "autoAcceptCurrency": [
                795
            ],
            "clearAutoAccept": [
                138
            ],
            "offerTtlSeconds": [
                387
            ],
            "clearOfferTtl": [
                138
            ],
            "cancelPendingOffers": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetItemSiteLocationInput": {
            "itemId": [
                795
            ],
            "siteId": [
                795
            ],
            "locationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetItemStatusInput": {
            "itemId": [
                795
            ],
            "status": [
                404
            ],
            "__typename": [
                795
            ]
        },
        "SetItemTypeTaxDefaultInput": {
            "itemTypeId": [
                374
            ],
            "hammerTaxCodeId": [
                374
            ],
            "chargeTaxCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "SetItemWinnerInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "bidId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetItemsAppraisalInput": {
            "appraisalId": [
                795
            ],
            "itemIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetItemsAppraisalPayload": {
            "appraisal": [
                71
            ],
            "count": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "SetMainAppraisalClientInput": {
            "appraisalId": [
                795
            ],
            "clientUserId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetMainConsignorInput": {
            "consignmentId": [
                795
            ],
            "consignorUserId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetMetafieldInput": {
            "entityType": [
                460
            ],
            "entityId": [
                795
            ],
            "key": [
                795
            ],
            "value": [
                795
            ],
            "valueType": [
                462
            ],
            "__typename": [
                795
            ]
        },
        "SetNotificationConfigurationInput": {
            "event": [
                481
            ],
            "audience": [
                472
            ],
            "channel": [
                476
            ],
            "instant": [
                386
            ],
            "scheduled": [
                694
            ],
            "__typename": [
                795
            ]
        },
        "SetNotificationConfigurationStatusInput": {
            "event": [
                481
            ],
            "audience": [
                472
            ],
            "channel": [
                476
            ],
            "status": [
                478
            ],
            "__typename": [
                795
            ]
        },
        "SetPhoneClerkOverrideInput": {
            "saleId": [
                795
            ],
            "bidderUserId": [
                795
            ],
            "itemId": [
                795
            ],
            "lineNumber": [
                387
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetPhotographyWorkflowStatusPayload": {
            "item": [
                393
            ],
            "__typename": [
                795
            ]
        },
        "SetPhotographyWorkflowStatusesPayload": {
            "items": [
                393
            ],
            "skippedItemIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleCategoriesInput": {
            "saleId": [
                374
            ],
            "categoryIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleItemArrInput": {
            "saleId": [
                374
            ],
            "itemId": [
                374
            ],
            "arr": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleItemCategoriesInput": {
            "saleId": [
                374
            ],
            "itemId": [
                374
            ],
            "categoryIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleItemCreatorsInput": {
            "saleId": [
                374
            ],
            "itemId": [
                374
            ],
            "creatorIds": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleItemSlugInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "slug": [
                795
            ],
            "overrideOnConflict": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleItemStatusInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "status": [
                430
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleItemsPreviewInput": {
            "saleId": [
                795
            ],
            "itemIds": [
                795
            ],
            "preview": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetSalePhoneClerkConfigInput": {
            "saleId": [
                795
            ],
            "itemGap": [
                387
            ],
            "planningNotes": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleSlugInput": {
            "saleId": [
                795
            ],
            "slug": [
                795
            ],
            "overrideOnConflict": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetSaleStatusInput": {
            "saleId": [
                795
            ],
            "status": [
                681
            ],
            "__typename": [
                795
            ]
        },
        "SetSectionMarkerInput": {
            "id": [
                374
            ],
            "title": [
                795
            ],
            "summary": [
                795
            ],
            "fromItemNumber": [
                387
            ],
            "toItemNumber": [
                387
            ],
            "imageAssetId": [
                795
            ],
            "isFeaturedSelection": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SetStatementChargeAmountInput": {
            "lineChargeId": [
                374
            ],
            "amount": [
                387
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetStatementLineDescriptionInput": {
            "lineId": [
                374
            ],
            "description": [
                795
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetStatementLineHammerInput": {
            "lineId": [
                374
            ],
            "hammer": [
                387
            ],
            "note": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetUserExternalIdInput": {
            "id": [
                795
            ],
            "externalId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetUserIdOnBidInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "bidId": [
                795
            ],
            "userId": [
                795
            ],
            "bidOrigin": [
                123
            ],
            "registrationId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetValuationRequestSettingsInput": {
            "enabled": [
                138
            ],
            "requiredPhotoCount": [
                387
            ],
            "recipientEmails": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SetWorkflowScheduleOffsetsInput": {
            "rows": [
                936
            ],
            "__typename": [
                795
            ]
        },
        "ShopifyConfiguration": {
            "shopId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ShopifyConnection": {
            "accountId": [
                795
            ],
            "shopId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Site": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "name": [
                795
            ],
            "addressLine1": [
                795
            ],
            "addressLine2": [
                795
            ],
            "addressCity": [
                795
            ],
            "addressPostalCode": [
                795
            ],
            "addressCountryIso": [
                795
            ],
            "addressState": [
                795
            ],
            "phone": [
                795
            ],
            "email": [
                795
            ],
            "openingHours": [
                795
            ],
            "collectionInstructions": [
                795
            ],
            "appointmentRequired": [
                138
            ],
            "timezone": [
                795
            ],
            "bookingHours": [
                774
            ],
            "archivedAt": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "createdByUserId": [
                795
            ],
            "modifiedByUserId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SiteBookingHours": {
            "weekdays": [
                926
            ],
            "opens": [
                795
            ],
            "closes": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SiteBookingHoursInput": {
            "weekdays": [
                926
            ],
            "opens": [
                795
            ],
            "closes": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SiteConnection": {
            "edges": [
                777
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "SiteEdge": {
            "cursor": [
                795
            ],
            "node": [
                773
            ],
            "__typename": [
                795
            ]
        },
        "SpecificationSubType": {},
        "SpecificationType": {},
        "StaffProfile": {
            "id": [
                374
            ],
            "accountId": [
                374
            ],
            "name": [
                795
            ],
            "photo": [
                378
            ],
            "departments": [
                316
            ],
            "itemTypes": [
                431
            ],
            "dashboardMember": [
                294
            ],
            "attributes": [
                438
            ],
            "effectiveSchema": [
                438
            ],
            "schemaId": [
                374
            ],
            "public": [
                138
            ],
            "isPhoneClerk": [
                138
            ],
            "phoneClerkNotes": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "StaffProfileConnection": {
            "edges": [
                782
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "StaffProfileEdge": {
            "node": [
                780
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "StaggeredSaleItemScheduleConfiguration": {
            "firstItemClosingDate": [
                795
            ],
            "spacingMs": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "StaggeredSaleItemScheduleConfigurationInput": {
            "firstItemClosingDate": [
                795
            ],
            "spacingMs": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "StartClosingSaleInput": {
            "saleId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Statement": {
            "id": [
                374
            ],
            "number": [
                795
            ],
            "status": [
                793
            ],
            "consignor": [
                788
            ],
            "saleId": [
                374
            ],
            "currency": [
                292
            ],
            "title": [
                795
            ],
            "total": [
                387
            ],
            "hammerTotal": [
                387
            ],
            "chargesTotal": [
                387
            ],
            "taxTotal": [
                387
            ],
            "taxBands": [
                814
            ],
            "taxInLieuTotal": [
                387
            ],
            "marginScheme": [
                138
            ],
            "issuedAt": [
                795
            ],
            "createdAt": [
                795
            ],
            "lines": [
                791
            ],
            "download": [
                329
            ],
            "__typename": [
                795
            ]
        },
        "StatementConnection": {
            "edges": [
                789
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "StatementConsignor": {
            "userId": [
                374
            ],
            "address": [
                451
            ],
            "addressId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "StatementEdge": {
            "node": [
                786
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "StatementFilter": {
            "saleId": [
                374
            ],
            "consignorId": [
                374
            ],
            "status": [
                793
            ],
            "__typename": [
                795
            ]
        },
        "StatementLine": {
            "id": [
                374
            ],
            "itemId": [
                374
            ],
            "lotNumber": [
                795
            ],
            "hammer": [
                387
            ],
            "description": [
                795
            ],
            "charges": [
                792
            ],
            "total": [
                387
            ],
            "chargesTotal": [
                387
            ],
            "taxTotal": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "StatementLineCharge": {
            "id": [
                374
            ],
            "chargeId": [
                374
            ],
            "description": [
                795
            ],
            "amount": [
                387
            ],
            "tax": [
                58
            ],
            "__typename": [
                795
            ]
        },
        "StatementStatus": {},
        "StreamChannel": {
            "channelId": [
                795
            ],
            "isDefault": [
                138
            ],
            "name": [
                795
            ],
            "location": [
                795
            ],
            "description": [
                795
            ],
            "ingestUrl": [
                795
            ],
            "streamKey": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "String": {},
        "StripeAppCustomerDetailsInput": {
            "id": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "StripeCustomerDetailsInput": {
            "id": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "StripeIdentityProviderInput": {
            "secretKey": [
                795
            ],
            "publishableKey": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "StripeIdentityProviderSettings": {
            "enabled": [
                138
            ],
            "livemode": [
                138
            ],
            "publishableKey": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "StripePaymentProviderSession": {
            "publishableKey": [
                795
            ],
            "clientSecret": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Subscription": {
            "saleActivity": [
                611,
                {
                    "accountId": [
                        795,
                        "String!"
                    ],
                    "saleId": [
                        374,
                        "ID!"
                    ],
                    "itemIdFilter": [
                        402
                    ]
                }
            ],
            "__typename": [
                795
            ]
        },
        "SuggestContentInput": {
            "target": [
                805
            ],
            "fields": [
                804
            ],
            "language": [
                795
            ],
            "instructions": [
                795
            ],
            "fresh": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SuggestedTag": {
            "name": [
                795
            ],
            "existing": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SuggestionField": {},
        "SuggestionTargetInput": {
            "itemId": [
                795
            ],
            "appraisalItem": [
                83
            ],
            "saleItem": [
                632
            ],
            "saleId": [
                795
            ],
            "draftItem": [
                330
            ],
            "__typename": [
                795
            ]
        },
        "SuggestionValue": {
            "on_TextSuggestion": [
                822
            ],
            "on_TagsSuggestion": [
                812
            ],
            "on_AttributesSuggestion": [
                106
            ],
            "on_IssuesSuggestion": [
                392
            ],
            "__typename": [
                795
            ]
        },
        "SyncContentInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "direction": [
                233
            ],
            "keys": [
                795
            ],
            "deleteKeys": [
                795
            ],
            "syncSchemaId": [
                138
            ],
            "syncCreators": [
                138
            ],
            "syncTags": [
                138
            ],
            "syncCategories": [
                138
            ],
            "syncImages": [
                138
            ],
            "syncConditionReport": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SyncSchemaDataFromSaleItemInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "keys": [
                795
            ],
            "deleteKeys": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "SyncSchemaDataToProductVariantInput": {
            "variantId": [
                795
            ],
            "keys": [
                795
            ],
            "deleteKeys": [
                795
            ],
            "syncSchemaId": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "SyncSchemaDataToSaleItemInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "keys": [
                795
            ],
            "deleteKeys": [
                795
            ],
            "syncSchemaId": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "Tag": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "created": [
                795
            ],
            "associated": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "TagsSuggestion": {
            "tags": [
                803
            ],
            "__typename": [
                795
            ]
        },
        "TaxApplication": {},
        "TaxBand": {
            "codeName": [
                795
            ],
            "application": [
                813
            ],
            "rateBps": [
                387
            ],
            "basisTotal": [
                387
            ],
            "taxTotal": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "TaxCode": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "application": [
                813
            ],
            "rateBps": [
                387
            ],
            "effectiveFrom": [
                795
            ],
            "effectiveTo": [
                795
            ],
            "status": [
                816
            ],
            "accountCode": [
                3
            ],
            "replaces": [
                815
            ],
            "__typename": [
                795
            ]
        },
        "TaxCodeStatus": {},
        "TaxRegime": {},
        "TaxSettings": {
            "regime": [
                817
            ],
            "defaultHammerTaxCode": [
                815
            ],
            "defaultChargeTaxCode": [
                815
            ],
            "__typename": [
                795
            ]
        },
        "TemplateFieldChange": {
            "before": [
                795
            ],
            "after": [
                795
            ],
            "changed": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "TemplateSyncDiff": {
            "title": [
                819
            ],
            "subTitle": [
                819
            ],
            "description": [
                819
            ],
            "__typename": [
                795
            ]
        },
        "TestActionHookResponse": {
            "requestHeaders": [
                372
            ],
            "requestPayload": [
                795
            ],
            "requestMethod": [
                795
            ],
            "responseHeaders": [
                372
            ],
            "responseBody": [
                795
            ],
            "statusCode": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "TextSuggestion": {
            "text": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Time": {},
        "TokenMetadata": {
            "userId": [
                795
            ],
            "ttl": [
                387
            ],
            "permissions": [
                190
            ],
            "__typename": [
                795
            ]
        },
        "TransferAppraisalItemsToConsignmentInput": {
            "appraisalId": [
                795
            ],
            "itemIds": [
                795
            ],
            "target": [
                74
            ],
            "__typename": [
                795
            ]
        },
        "TransferAppraisalItemsToConsignmentPayload": {
            "consignment": [
                207
            ],
            "appraisal": [
                71
            ],
            "transferredCount": [
                387
            ],
            "consignmentCreated": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "TransportCoordinator": {
            "userId": [
                795
            ],
            "name": [
                795
            ],
            "email": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "TrustLevel": {},
        "TrustLevelInfo": {
            "level": [
                828
            ],
            "modifiedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "TrustLevelInput": {
            "level": [
                828
            ],
            "__typename": [
                795
            ]
        },
        "TwilioNotificationIntegration": {
            "channel": [
                476
            ],
            "created": [
                795
            ],
            "timezone": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UnblockUserInput": {
            "userId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UnhideItemsFromSaleInput": {
            "saleId": [
                795
            ],
            "includingAndFromItemNumber": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAccountCodeInput": {
            "accountCodeId": [
                374
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAccountFeeInput": {
            "id": [
                795
            ],
            "name": [
                795
            ],
            "type": [
                5
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAccountInput": {
            "name": [
                795
            ],
            "email": [
                795
            ],
            "handle": [
                795
            ],
            "description": [
                795
            ],
            "links": [
                442
            ],
            "generateNewHandle": [
                138
            ],
            "enableBastaStreaming": [
                138
            ],
            "preferredAuctionFormat": [
                682
            ],
            "defaultCurrency": [
                292
            ],
            "homeCountryCode": [
                236
            ],
            "organisationDetails": [
                509
            ],
            "defaultStartBidPercentage": [
                357
            ],
            "saleUrlTemplate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateActionHookSubscriptionInput": {
            "id": [
                374
            ],
            "url": [
                795
            ],
            "headers": [
                373
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAffiliateInput": {
            "firstName": [
                795
            ],
            "lastName": [
                795
            ],
            "email": [
                795
            ],
            "token": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAppraisalDocumentDetailsInput": {
            "appraisalId": [
                795
            ],
            "valuationDate": [
                795
            ],
            "dateOfDeath": [
                795
            ],
            "instructedBy": [
                81
            ],
            "clearInstructedBy": [
                138
            ],
            "reference": [
                795
            ],
            "valuerUserId": [
                795
            ],
            "groupBy": [
                76
            ],
            "sortBy": [
                78
            ],
            "sectionTotals": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAppraisalInput": {
            "appraisalId": [
                795
            ],
            "name": [
                795
            ],
            "notes": [
                795
            ],
            "type": [
                90
            ],
            "attributionChannelId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAppraisalItemInput": {
            "appraisalId": [
                795
            ],
            "itemId": [
                795
            ],
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "description": [
                795
            ],
            "schemaData": [
                438
            ],
            "creatorIds": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateAppraisalItemValuationInput": {
            "appraisalId": [
                795
            ],
            "itemId": [
                795
            ],
            "value": [
                85
            ],
            "clearValue": [
                138
            ],
            "basis": [
                91
            ],
            "clearBasis": [
                138
            ],
            "room": [
                795
            ],
            "clearRoom": [
                138
            ],
            "sortPosition": [
                387
            ],
            "clearSortPosition": [
                138
            ],
            "noCommercialValue": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UpdateArrSettingsInput": {
            "currency": [
                292
            ],
            "enabled": [
                138
            ],
            "thresholdAmount": [
                387
            ],
            "capAmount": [
                387
            ],
            "accountCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "UpdateBuyerPremiumInput": {
            "buyerPremiumId": [
                374
            ],
            "name": [
                795
            ],
            "calculationType": [
                144
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "externalId": [
                795
            ],
            "accountCodeId": [
                374
            ],
            "taxCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "UpdateCategoryInput": {
            "categoryId": [
                374
            ],
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateChargeInput": {
            "chargeId": [
                374
            ],
            "name": [
                795
            ],
            "basedOn": [
                177
            ],
            "frequency": [
                181
            ],
            "outcomes": [
                183
            ],
            "calculationType": [
                178
            ],
            "minimum": [
                387
            ],
            "maximum": [
                387
            ],
            "accountCodeId": [
                374
            ],
            "taxCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "UpdateClientRelationshipInput": {
            "id": [
                374
            ],
            "type": [
                192
            ],
            "reason": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateConsignmentInput": {
            "consignmentId": [
                795
            ],
            "name": [
                795
            ],
            "description": [
                795
            ],
            "externalId": [
                795
            ],
            "feeRules": [
                217
            ],
            "reportSeparately": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UpdateCreatorInput": {
            "creatorId": [
                374
            ],
            "name": [
                795
            ],
            "slug": [
                795
            ],
            "type": [
                291
            ],
            "arr": [
                138
            ],
            "yearFrom": [
                795
            ],
            "yearTo": [
                795
            ],
            "nationality": [
                795
            ],
            "biography": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateCreatorSettingsInput": {
            "allowNested": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UpdateDutchSaleInput": {
            "saleId": [
                795
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateDutchSaleItemInput": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "schedule": [
                345
            ],
            "openTime": [
                795
            ],
            "closingTime": [
                795
            ],
            "availableUnits": [
                387
            ],
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "description": [
                795
            ],
            "titleTemplateOverride": [
                795
            ],
            "subTitleTemplateOverride": [
                795
            ],
            "descriptionTemplateOverride": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateGlobalClosingTimeCountdownInput": {
            "saleId": [
                795
            ],
            "closingTimeCountdown": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "UpdateGlobalDatesInput": {
            "saleId": [
                795
            ],
            "openDate": [
                795
            ],
            "closingDate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateGlobalIncrementTableInput": {
            "saleId": [
                795
            ],
            "incrementTable": [
                119
            ],
            "__typename": [
                795
            ]
        },
        "UpdateItemInput": {
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "conditionReportText": [
                438
            ],
            "description": [
                795
            ],
            "titleTemplateOverride": [
                795
            ],
            "subTitleTemplateOverride": [
                795
            ],
            "descriptionTemplateOverride": [
                795
            ],
            "price": [
                424
            ],
            "externalId": [
                795
            ],
            "metadata": [
                411
            ],
            "tags": [
                795
            ],
            "specifications": [
                429
            ],
            "valuationAmount": [
                387
            ],
            "valuationCurrency": [
                795
            ],
            "location": [
                795
            ],
            "syncContentToActiveSaleItems": [
                138
            ],
            "staffLeadUserId": [
                795
            ],
            "citesLicenceNumber": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateItemNumbersInput": {
            "saleId": [
                795
            ],
            "itemNumberChanges": [
                416
            ],
            "__typename": [
                795
            ]
        },
        "UpdateItemTypeInput": {
            "name": [
                795
            ],
            "schema": [
                438
            ],
            "namespace": [
                795
            ],
            "slug": [
                795
            ],
            "titleTemplate": [
                795
            ],
            "subTitleTemplate": [
                795
            ],
            "descriptionTemplate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateLocationInput": {
            "locationId": [
                795
            ],
            "parentLocationId": [
                795
            ],
            "name": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateNoteInput": {
            "id": [
                795
            ],
            "note": [
                795
            ],
            "noteTypeId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateNoteTypeScopeInput": {
            "id": [
                795
            ],
            "scope": [
                471
            ],
            "__typename": [
                795
            ]
        },
        "UpdateOrderInput": {
            "id": [
                374
            ],
            "title": [
                795
            ],
            "billingAddress": [
                452
            ],
            "shippingAddress": [
                452
            ],
            "billingAddressId": [
                374
            ],
            "shippingAddressId": [
                374
            ],
            "dueAt": [
                795
            ],
            "paymentTermsDays": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "UpdateOrderLineFeeInput": {
            "description": [
                795
            ],
            "amount": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "UpdateOrderLineInput": {
            "id": [
                374
            ],
            "orderId": [
                374
            ],
            "amount": [
                387
            ],
            "description": [
                795
            ],
            "fees": [
                863
            ],
            "__typename": [
                795
            ]
        },
        "UpdatePackagingInput": {
            "itemId": [
                795
            ],
            "packagingId": [
                795
            ],
            "quantity": [
                387
            ],
            "boxedHeight": [
                357
            ],
            "boxedLength": [
                357
            ],
            "boxedDepth": [
                357
            ],
            "boxedMeasurementUnit": [
                458
            ],
            "boxedWeight": [
                357
            ],
            "boxedWeightUnit": [
                927
            ],
            "__typename": [
                795
            ]
        },
        "UpdatePaymentOrderInput": {
            "orderId": [
                374
            ],
            "userId": [
                795
            ],
            "orderLines": [
                867
            ],
            "__typename": [
                795
            ]
        },
        "UpdatePaymentOrderLineInput": {
            "orderLineId": [
                374
            ],
            "amount": [
                387
            ],
            "description": [
                795
            ],
            "orderLineType": [
                505
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSaleFeeInput": {
            "id": [
                374
            ],
            "saleId": [
                374
            ],
            "name": [
                795
            ],
            "type": [
                355
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSaleInput": {
            "dates": [
                615
            ],
            "title": [
                795
            ],
            "description": [
                795
            ],
            "currency": [
                795
            ],
            "bidIncrementTable": [
                119
            ],
            "closingMethod": [
                194
            ],
            "closingTimeCountdown": [
                387
            ],
            "saleItemClosingSchedule": [
                625
            ],
            "themeType": [
                387
            ],
            "slug": [
                795
            ],
            "hidden": [
                138
            ],
            "liveStream": [
                446
            ],
            "saleType": [
                682
            ],
            "isTestSale": [
                138
            ],
            "printedCatalogue": [
                138
            ],
            "bidRestrictions": [
                129
            ],
            "externalId": [
                795
            ],
            "location": [
                795
            ],
            "metafields": [
                461
            ],
            "saleGenreId": [
                374
            ],
            "siteId": [
                374
            ],
            "viewingTimes": [
                795
            ],
            "buyersNotes": [
                795
            ],
            "feesApplyInfo": [
                795
            ],
            "saleContactUserId": [
                374
            ],
            "saleCode": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSaleItemFeeInput": {
            "id": [
                374
            ],
            "saleId": [
                374
            ],
            "itemId": [
                374
            ],
            "name": [
                795
            ],
            "type": [
                355
            ],
            "value": [
                387
            ],
            "upperLteLimit": [
                387
            ],
            "lowerLimit": [
                387
            ],
            "calculationType": [
                352
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSaleItemInput": {
            "itemId": [
                795
            ],
            "saleId": [
                795
            ],
            "conditionReportText": [
                438
            ],
            "bidIncrementTable": [
                119
            ],
            "title": [
                795
            ],
            "subTitle": [
                795
            ],
            "description": [
                795
            ],
            "titleTemplateOverride": [
                795
            ],
            "subTitleTemplateOverride": [
                795
            ],
            "descriptionTemplateOverride": [
                795
            ],
            "startingBid": [
                387
            ],
            "valuationAmount": [
                387
            ],
            "valuationCurrency": [
                795
            ],
            "reserve": [
                387
            ],
            "lowEstimate": [
                387
            ],
            "highEstimate": [
                387
            ],
            "allowedBidTypes": [
                131
            ],
            "openDate": [
                795
            ],
            "closingDate": [
                795
            ],
            "slug": [
                795
            ],
            "hidden": [
                138
            ],
            "closingTimeCountdown": [
                387
            ],
            "tags": [
                795
            ],
            "specifications": [
                429
            ],
            "externalId": [
                795
            ],
            "displayNumber": [
                795
            ],
            "highlight": [
                401
            ],
            "metafields": [
                461
            ],
            "reserveType": [
                603
            ],
            "schemaId": [
                374
            ],
            "schemaData": [
                438
            ],
            "syncContent": [
                233
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSaleRegistrationPolicyInput": {
            "id": [
                795
            ],
            "code": [
                795
            ],
            "description": [
                795
            ],
            "rule": [
                795
            ],
            "isDefault": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSendGridNotificationIntegrationInput": {
            "fromEmail": [
                795
            ],
            "fromName": [
                795
            ],
            "replyToEmail": [
                795
            ],
            "accountNotificationEmail": [
                795
            ],
            "timezone": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSiteInput": {
            "siteId": [
                795
            ],
            "name": [
                795
            ],
            "addressLine1": [
                795
            ],
            "addressLine2": [
                795
            ],
            "addressCity": [
                795
            ],
            "addressPostalCode": [
                795
            ],
            "addressCountryIso": [
                795
            ],
            "addressState": [
                795
            ],
            "phone": [
                795
            ],
            "email": [
                795
            ],
            "openingHours": [
                795
            ],
            "collectionInstructions": [
                795
            ],
            "appointmentRequired": [
                138
            ],
            "timezone": [
                795
            ],
            "bookingHours": [
                775
            ],
            "__typename": [
                795
            ]
        },
        "UpdateSpecificationInput": {
            "itemId": [
                795
            ],
            "specificationId": [
                795
            ],
            "type": [
                779
            ],
            "subType": [
                778
            ],
            "height": [
                357
            ],
            "length": [
                357
            ],
            "depth": [
                357
            ],
            "diameter": [
                357
            ],
            "measurementUnit": [
                458
            ],
            "weight": [
                357
            ],
            "weightUnit": [
                927
            ],
            "quantity": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "UpdateStaffProfileInput": {
            "id": [
                374
            ],
            "name": [
                795
            ],
            "attributes": [
                438
            ],
            "public": [
                138
            ],
            "isPhoneClerk": [
                138
            ],
            "phoneClerkNotes": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateStreamChannelInput": {
            "name": [
                795
            ],
            "location": [
                795
            ],
            "description": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpdateTaxCodeInput": {
            "taxCodeId": [
                374
            ],
            "name": [
                795
            ],
            "effectiveTo": [
                795
            ],
            "accountCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "UpdateUserInput": {
            "userId": [
                795
            ],
            "idType": [
                896
            ],
            "email": [
                795
            ],
            "firstName": [
                795
            ],
            "lastName": [
                795
            ],
            "username": [
                795
            ],
            "password": [
                795
            ],
            "passwordHash": [
                795
            ],
            "trustLevel": [
                830
            ],
            "addresses": [
                890
            ],
            "mailingAddresses": [
                452
            ],
            "phones": [
                908
            ],
            "metadata": [
                900
            ],
            "idVerification": [
                897
            ],
            "status": [
                911
            ],
            "emailVerified": [
                138
            ],
            "role": [
                795
            ],
            "vip": [
                138
            ],
            "tags": [
                795
            ],
            "preferences": [
                909
            ],
            "paymentProviderDetails": [
                524
            ],
            "attributionChannelId": [
                795
            ],
            "attributionSourceId": [
                795
            ],
            "attributionSourceNote": [
                795
            ],
            "clientLeadId": [
                795
            ],
            "marketingConsent": [
                455
            ],
            "bankDetails": [
                114
            ],
            "skipUpdateEvent": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UpdateWorkflowSettingsInput": {
            "cataloguingWorkflowEnabled": [
                138
            ],
            "requireDisplayNumbersToPublish": [
                138
            ],
            "photographyWorkflowEnabled": [
                138
            ],
            "conditionReportsRequireLogin": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UpdateWorkflowSettingsPayload": {
            "workflowSettings": [
                937
            ],
            "__typename": [
                795
            ]
        },
        "UploadUrl": {
            "imageId": [
                795
            ],
            "uploadUrl": [
                795
            ],
            "imageUrl": [
                795
            ],
            "headers": [
                372
            ],
            "order": [
                387
            ],
            "externalId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpsertInvoiceSettingsInput": {
            "paymentTermsDays": [
                387
            ],
            "paymentInstructions": [
                795
            ],
            "footerText": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UpsertTaxSettingsInput": {
            "regime": [
                817
            ],
            "defaultHammerTaxCodeId": [
                374
            ],
            "defaultChargeTaxCodeId": [
                374
            ],
            "__typename": [
                795
            ]
        },
        "UpsertTaxSettingsPayload": {
            "settings": [
                818
            ],
            "seededCodes": [
                815
            ],
            "__typename": [
                795
            ]
        },
        "UpsertUserAddressInput": {
            "userId": [
                795
            ],
            "idType": [
                896
            ],
            "address": [
                890
            ],
            "mailingAddress": [
                452
            ],
            "__typename": [
                795
            ]
        },
        "UpsertUserPhoneInput": {
            "userId": [
                795
            ],
            "idType": [
                896
            ],
            "phone": [
                908
            ],
            "__typename": [
                795
            ]
        },
        "User": {
            "id": [
                374
            ],
            "accountId": [
                795
            ],
            "userId": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "profile": [
                899
            ],
            "tags": [
                811
            ],
            "blocked": [
                138
            ],
            "clientNumber": [
                387
            ],
            "charges": [
                179,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ],
                    "options": [
                        182
                    ]
                }
            ],
            "notes": [
                468,
                {
                    "first": [
                        387
                    ],
                    "after": [
                        795
                    ]
                }
            ],
            "alerts": [
                467
            ],
            "relatedParties": [
                581
            ],
            "__typename": [
                795
            ]
        },
        "UserAddress": {
            "id": [
                795
            ],
            "addressType": [
                34
            ],
            "line1": [
                795
            ],
            "line2": [
                795
            ],
            "city": [
                795
            ],
            "state": [
                795
            ],
            "postalCode": [
                795
            ],
            "country": [
                795
            ],
            "name": [
                795
            ],
            "company": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserAddressInput": {
            "id": [
                795
            ],
            "addressType": [
                34
            ],
            "isPrimary": [
                138
            ],
            "line1": [
                795
            ],
            "line2": [
                795
            ],
            "city": [
                795
            ],
            "state": [
                795
            ],
            "postalCode": [
                795
            ],
            "country": [
                795
            ],
            "name": [
                795
            ],
            "company": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserBidActivity": {
            "accountId": [
                795
            ],
            "bidId": [
                795
            ],
            "saleId": [
                795
            ],
            "sale": [
                610
            ],
            "itemId": [
                795
            ],
            "saleItem": [
                623
            ],
            "amount": [
                387
            ],
            "maxAmount": [
                387
            ],
            "userId": [
                795
            ],
            "date": [
                795
            ],
            "bidStatus": [
                130
            ],
            "bidSequenceNumber": [
                387
            ],
            "paddle": [
                510
            ],
            "__typename": [
                795
            ]
        },
        "UserBidActivityConnection": {
            "edges": [
                893
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "UserBidActivityEdge": {
            "cursor": [
                795
            ],
            "node": [
                891
            ],
            "__typename": [
                795
            ]
        },
        "UserBidActivityFilter": {
            "saleId": [
                795
            ],
            "itemId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserEdge": {
            "node": [
                888
            ],
            "cursor": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserIdType": {},
        "UserIdVerificationInput": {
            "verificationId": [
                795
            ],
            "verified": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UserIdVerificationStatus": {
            "verificationId": [
                795
            ],
            "verified": [
                138
            ],
            "modifiedAt": [
                795
            ],
            "status": [
                375
            ],
            "provider": [
                795
            ],
            "failureReason": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserInfo": {
            "userId": [
                795
            ],
            "identityProviderId": [
                795
            ],
            "hasLogin": [
                138
            ],
            "status": [
                911
            ],
            "emailVerified": [
                138
            ],
            "name": [
                795
            ],
            "firstName": [
                795
            ],
            "lastName": [
                795
            ],
            "email": [
                795
            ],
            "role": [
                795
            ],
            "vip": [
                138
            ],
            "clientNumber": [
                387
            ],
            "attributionChannelId": [
                795
            ],
            "attributionSourceId": [
                795
            ],
            "attributionSourceNote": [
                795
            ],
            "clientLeadId": [
                795
            ],
            "clientLead": [
                294
            ],
            "marketingConsent": [
                454
            ],
            "addresses": [
                889
            ],
            "addressesV2": [
                451
            ],
            "billingAddress": [
                451
            ],
            "shippingAddress": [
                451
            ],
            "paymentMethods": [
                522
            ],
            "paymentProviderDetails": [
                905
            ],
            "phones": [
                528
            ],
            "companyName": [
                795
            ],
            "vatNumber": [
                795
            ],
            "eoriNumber": [
                795
            ],
            "gunLicenceNumber": [
                795
            ],
            "salutation": [
                795
            ],
            "timezone": [
                795
            ],
            "nationality": [
                795
            ],
            "dateOfBirth": [
                795
            ],
            "preferredLanguage": [
                795
            ],
            "trustLevel": [
                829
            ],
            "idVerificationStatus": [
                898
            ],
            "username": [
                795
            ],
            "notificationSettings": [
                903
            ],
            "bankDetails": [
                113
            ],
            "__typename": [
                795
            ]
        },
        "UserMetadataInput": {
            "dateOfBirth": [
                795
            ],
            "nationality": [
                795
            ],
            "preferredLanguage": [
                795
            ],
            "timezone": [
                795
            ],
            "companyName": [
                795
            ],
            "salutation": [
                795
            ],
            "vatNumber": [
                795
            ],
            "eoriNumber": [
                795
            ],
            "gunLicenceNumber": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserNotificationPreference": {
            "notification": [
                481
            ],
            "channel": [
                476
            ],
            "optedIn": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UserNotificationPreferenceInput": {
            "notification": [
                481
            ],
            "channel": [
                476
            ],
            "optedIn": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "UserNotificationSettings": {
            "preferences": [
                901
            ],
            "__typename": [
                795
            ]
        },
        "UserNotificationsPreferenceInput": {
            "scheduled": [
                910
            ],
            "__typename": [
                795
            ]
        },
        "UserPaymentProviderDetails": {
            "id": [
                795
            ],
            "on_UserStripePaymentProviderDetails": [
                912
            ],
            "__typename": [
                795
            ]
        },
        "UserPaymentProviderSession": {
            "on_UserStripePaymentProviderSession": [
                913
            ],
            "__typename": [
                795
            ]
        },
        "UserPaymentProviderSessionInput": {
            "userId": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserPhoneInput": {
            "id": [
                795
            ],
            "phoneType": [
                545
            ],
            "isPrimary": [
                138
            ],
            "phoneNumber": [
                795
            ],
            "label": [
                795
            ],
            "verifiedAt": [
                823
            ],
            "__typename": [
                795
            ]
        },
        "UserPreferenceInput": {
            "notifications": [
                904
            ],
            "__typename": [
                795
            ]
        },
        "UserScheduledNotificationsPreferenceInput": {
            "channels": [
                476
            ],
            "__typename": [
                795
            ]
        },
        "UserStatus": {},
        "UserStripePaymentProviderDetails": {
            "id": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserStripePaymentProviderSession": {
            "publishableKey": [
                795
            ],
            "customerSessionClientSecret": [
                795
            ],
            "setupIntentClientSecret": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserToken": {
            "token": [
                795
            ],
            "expirationDate": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "UserTokenInput": {
            "userID": [
                795
            ],
            "ttlMinutes": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "UsersConnection": {
            "edges": [
                895
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "ValuationRequest": {
            "id": [
                374
            ],
            "cursor": [
                795
            ],
            "accountId": [
                795
            ],
            "reference": [
                795
            ],
            "status": [
                923
            ],
            "contactName": [
                795
            ],
            "contactEmail": [
                795
            ],
            "contactPhone": [
                795
            ],
            "items": [
                921
            ],
            "assignee": [
                918
            ],
            "createdAt": [
                795
            ],
            "modifiedAt": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ValuationRequestAssignee": {
            "userId": [
                795
            ],
            "name": [
                795
            ],
            "email": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ValuationRequestEdge": {
            "cursor": [
                795
            ],
            "node": [
                917
            ],
            "__typename": [
                795
            ]
        },
        "ValuationRequestFilter": {
            "statuses": [
                923
            ],
            "assigneeUserId": [
                795
            ],
            "unassigned": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "ValuationRequestItem": {
            "itemType": [
                431
            ],
            "itemTypeName": [
                795
            ],
            "schemaData": [
                438
            ],
            "description": [
                795
            ],
            "photos": [
                97
            ],
            "__typename": [
                795
            ]
        },
        "ValuationRequestSettings": {
            "enabled": [
                138
            ],
            "requiredPhotoCount": [
                387
            ],
            "recipientEmails": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "ValuationRequestStatus": {},
        "ValuationRequestsConnection": {
            "edges": [
                919
            ],
            "pageInfo": [
                513
            ],
            "__typename": [
                795
            ]
        },
        "Video": {
            "id": [
                795
            ],
            "accountId": [
                795
            ],
            "url": [
                795
            ],
            "contentType": [
                795
            ],
            "size": [
                387
            ],
            "filename": [
                795
            ],
            "externalId": [
                795
            ],
            "created": [
                795
            ],
            "modified": [
                795
            ],
            "__typename": [
                795
            ]
        },
        "Weekday": {},
        "WeightUnit": {},
        "WorkflowDateType": {},
        "WorkflowDimensionOffset": {
            "dimension": [
                933
            ],
            "offsetDays": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "WorkflowDimensionOffsetInput": {
            "dimension": [
                933
            ],
            "offsetDays": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "WorkflowScheduleDate": {
            "dateType": [
                928
            ],
            "effectiveDate": [
                795
            ],
            "source": [
                932
            ],
            "dimension": [
                933
            ],
            "offsetDays": [
                387
            ],
            "__typename": [
                795
            ]
        },
        "WorkflowScheduleDateSource": {},
        "WorkflowScheduleDimension": {},
        "WorkflowScheduleOffsets": {
            "rows": [
                935
            ],
            "__typename": [
                795
            ]
        },
        "WorkflowScheduleRow": {
            "dateType": [
                928
            ],
            "enabled": [
                138
            ],
            "sortOrder": [
                387
            ],
            "offsets": [
                929
            ],
            "modified": [
                138
            ],
            "__typename": [
                795
            ]
        },
        "WorkflowScheduleRowInput": {
            "dateType": [
                928
            ],
            "enabled": [
                138
            ],
            "sortOrder": [
                387
            ],
            "offsets": [
                930
            ],
            "__typename": [
                795
            ]
        },
        "WorkflowSettings": {
            "cataloguingWorkflowEnabled": [
                138
            ],
            "requireDisplayNumbersToPublish": [
                138
            ],
            "photographyWorkflowEnabled": [
                138
            ],
            "conditionReportsRequireLogin": [
                138
            ],
            "__typename": [
                795
            ]
        }
    }
}