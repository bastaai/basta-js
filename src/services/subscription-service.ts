// https://rob-blackbourn.medium.com/writing-a-graphql-websocket-subscriber-in-javascript-4451abb9cd60
import { createClient } from 'graphql-ws';

import { Item } from '../../types';
import { BastaRequest } from '../../types/request';
import {
  ISubscriptionService,
  SubscriptionCallbacksType,
  SubscriptionVariablesMapped,
} from '../../types/sdk';
import { ITEM_CHANGED } from '../gql/generated/operations';
import { ItemChanged, SaleChanged } from '../gql/generated/types';

export class SubscriptionService implements ISubscriptionService {
  protected readonly _bastaReq: BastaRequest;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  item(
    variables: SubscriptionVariablesMapped<Item>,
    callbacks: SubscriptionCallbacksType<Item>,
    userToken?: string | undefined
  ): void {
    this.subscribe<Item>(ITEM_CHANGED, variables, callbacks, userToken);
  }

  sale(): void {
    throw new Error('Method not implemented.');
  }

  private subscribe<T>(
    query: string,
    variables: SubscriptionVariablesMapped<T>,
    callbacks: SubscriptionCallbacksType<T>,
    userToken: string | undefined
  ): void {
    const client = createClient({
      url: this._bastaReq.socketUrl,
      connectionParams: {
        token: userToken,
      },
    });

    const start = async () => {
      const subscription = client.iterate({
        query: query,
        variables: {
          ...variables,
        },
      });

      for await (const event of subscription) {
        console.log('HEHEHEEH', event);

        if (event.errors) {
          callbacks.onError(event.errors);
        } else if (event.data) {
          if ('itemChanged' in event.data) {
            const data = event.data.itemChanged as ItemChanged;
            callbacks.onData(data as T);
          } else if ('saleChanged' in event.data) {
            const data = event.data.saleChanged as SaleChanged;
            callbacks.onData(data as T);
          }
        }
      }
    };

    start();
  }
}
