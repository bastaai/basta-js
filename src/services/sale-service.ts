import { BastaRequest } from '../../types/request';
import { Sale } from '../../types/sale';
import { BastaResponse, ISaleService } from '../../types/sdk';
import { GET_SALE } from '../gql/generated/operations';
import { Get_SaleQuery, Get_SaleQueryVariables } from '../gql/generated/types';

export class SaleService implements ISaleService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async get(saleId: string): Promise<Sale> {
    const variables: Get_SaleQueryVariables = {
      id: saleId,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_SALE,
        variables: variables,
      }),
    });

    const json: BastaResponse<Get_SaleQuery> = await res.json();

    const sale: Sale = {
      ...json.data.sale,
      items: json.data.sale.items.edges.map((x) => x.node),
    };

    return sale;
  }
}
