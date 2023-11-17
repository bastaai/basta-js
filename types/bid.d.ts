import { Bid } from '../src/gql/generated/types';

export type { Bid };

export type BidResponse =
  | {
      bid: Bid;
      success: true;
    }
  | {
      bid: undefined;
      success: false;
    };
