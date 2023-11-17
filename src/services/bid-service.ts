import { BidResponse } from '../../types/bid';
import { BastaRequest } from '../../types/request';
import { BastaResponse, IBidService } from '../../types/sdk';
import { BID_ON_ITEM } from '../gql/generated/operations';
import {
  BidType,
  Bid_On_ItemMutation,
  Bid_On_ItemMutationVariables,
} from '../gql/generated/types';

export class BidService implements IBidService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async placeBid(
    {
      saleId,
      itemId,
      amount,
    }: {
      saleId: string;
      itemId: string;
      amount: number;
    },
    userToken: string
  ): Promise<BidResponse> {
    return await this._doBid(
      {
        type: BidType.Normal,
        amount: amount,
        itemId: itemId,
        saleId: saleId,
      },
      userToken
    );
  }

  async placeMaxBid(
    {
      saleId,
      itemId,
      amount,
    }: {
      saleId: string;
      itemId: string;
      amount: number;
    },
    userToken: string
  ): Promise<BidResponse> {
    return await this._doBid(
      {
        type: BidType.Max,
        amount: amount,
        itemId: itemId,
        saleId: saleId,
      },
      userToken
    );
  }

  private async _doBid(
    {
      amount,
      itemId,
      saleId,
      type,
    }: {
      amount: number;
      itemId: string;
      saleId: string;
      type: BidType;
    },
    userToken: string
  ): Promise<BidResponse> {
    const variables: Bid_On_ItemMutationVariables = {
      amount: amount,
      type: type,
      itemId: itemId,
      saleId: saleId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: {
        ...this._bastaReq.headers,
        bidderToken: userToken,
      },
      body: JSON.stringify({
        variables: variables,
        query: BID_ON_ITEM,
      }),
    });

    const json: BastaResponse<Bid_On_ItemMutation> = await res.json();
    const bid = json.data.bidOnItem;

    if (bid.__typename === 'BidPlacedSuccess') {
      return {
        bid: {
          amount: bid.amount,
          bidStatus: bid.bidStatus,
          date: bid.date,
          itemId: itemId,
          saleId: saleId,
        },
        success: true,
      };
    }
    return {
      success: false,
      bid: undefined,
    };
  }
}
