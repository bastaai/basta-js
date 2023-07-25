import { BastaRequest } from '../../types/request';
import { BastaResponse, IAccountService } from '../../types/sdk';
import {
  GET_ACCOUNT_BY_HANDLE,
  GET_ACCOUNT_BY_ID,
  GET_ME,
} from '../gql/generated/operations';
import {
  Account,
  Get_Account_By_HandleQuery,
  Get_Account_By_HandleQueryVariables,
  Get_Account_By_IdQuery,
  Get_Account_By_IdQueryVariables,
  Get_MeQuery,
  Get_MeQueryVariables,
  Me,
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
      method: 'GET',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ACCOUNT_BY_ID,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      account: Get_Account_By_IdQuery;
    }> = await res.json();

    const sanitized: Account = JSON.parse(JSON.stringify(json.data.account));

    return sanitized;
  }

  async getByHandle(handle: string): Promise<Account> {
    const variables: Get_Account_By_HandleQueryVariables = {
      handle: handle,
    };

    const res = await fetch(this._bastaReq.url, {
      method: 'GET',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ACCOUNT_BY_HANDLE,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      account: Get_Account_By_HandleQuery;
    }> = await res.json();

    const sanitized: Account = JSON.parse(JSON.stringify(json.data.account));

    return sanitized;
  }

  async getMe(): Promise<Me> {
    const variables: Get_MeQueryVariables = {};

    const res = await fetch(this._bastaReq.url, {
      method: 'GET',
      headers: this._bastaReq.headers,
      body: JSON.stringify({
        query: GET_ME,
        variables: variables,
      }),
    });

    const json: BastaResponse<{
      me: Get_MeQuery;
    }> = await res.json();

    const sanitized: Me = JSON.parse(JSON.stringify(json.data.me));

    return sanitized;
  }
}
