// https://rob-blackbourn.medium.com/writing-a-graphql-websocket-subscriber-in-javascript-4451abb9cd60

import { BastaRequest } from '../../types/request';
import {
  ISubscriptionService,
  SubscriptionCallbacksType,
  SubscriptionVariablesMapped,
} from '../../types/sdk';
import { ITEM_CHANGED_SUBSCRIPTION } from '../gql/generated/operations';
import {
  Item,
  Item_Changed_SubscriptionSubscriptionVariables,
  Sale,
} from '../gql/generated/types';

const GQL = {
  CONNECTION_INIT: 'connection_init',
  CONNECTION_ACK: 'connection_ack',
  CONNECTION_ERROR: 'connection_error',
  CONNECTION_KEEP_ALIVE: 'ka',
  START: 'start',
  STOP: 'stop',
  CONNECTION_TERMINATE: 'connection_terminate',
  DATA: 'data',
  ERROR: 'error',
  COMPLETE: 'complete',
};

export class SubscriptionService implements ISubscriptionService {
  protected readonly _bastaReq: BastaRequest;
  private _webSocket: WebSocket | undefined;

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  itemChanged(
    variables: Item_Changed_SubscriptionSubscriptionVariables,
    callbacks: SubscriptionCallbacksType<Item>
  ): void {
    this.subscribe<Item>(
      'item',
      ITEM_CHANGED_SUBSCRIPTION,
      variables,
      callbacks
    );
  }

  saleChanged(): void {
    throw new Error('Method not implemented.');
  }

  private subscribe<T>(
    type: 'item' | 'sale',
    query: string,
    variables: SubscriptionVariablesMapped<T>,
    callbacks: SubscriptionCallbacksType<T>
  ): void {
    this._webSocket = new WebSocket(this._bastaReq.socketUrl);

    const ws = this._webSocket;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: GQL.START,
          payload: { query: query, variables: variables },
        })
      );
    };

    ws.onmessage = (event) => {
      const eventParsed = JSON.parse(event.data);

      if (eventParsed.type === 'data') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let data: any;

        if (type === 'item') {
          data = (
            eventParsed.payload.data as {
              itemChanged: Item;
            }
          ).itemChanged;
        } else if (type === 'sale') {
          data = (
            eventParsed.payload.data as {
              saleChanged: Sale;
            }
          ).saleChanged;
        } else {
          throw new Error('Type not available.');
        }

        callbacks.onData(data);
      } else if (eventParsed.type === 'error') {
        callbacks.onError(eventParsed.payload.errors);
      }
    };

    ws.onclose = () => {
      callbacks.onComplete();
    };

    ws.onerror = () => {
      callbacks.onError(['Error has occurred!']);
    };
  }
}
