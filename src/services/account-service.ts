import { BastaRequest } from '../../types/request';
import { IAccountService } from '../../types/sdk';

export class AccountService implements IAccountService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  get(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
