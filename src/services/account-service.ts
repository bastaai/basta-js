import { Account } from '../../types/account';
import { BastaRequest } from '../../types/request';
import { BastaResponse, IAccountService } from '../../types/sdk';
import {
  GET_ACCOUNT_BY_ID,
} from '../gql/generated/operations';
import {
  Get_Account_By_IdQuery,
  Get_Account_By_IdQueryVariables,
} from '../gql/generated/types';

export class AccountService implements IAccountService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  async get(id: string): Promise<Account> {
    const variables: Get_Account_By_IdQueryVariables = {
      accountId: id,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'POST',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ACCOUNT_BY_ID,
        variables: variables,
      }),
    });

    const json: BastaResponse<Get_Account_By_IdQuery> = await res.json();

    return json.data.account;
  }
}