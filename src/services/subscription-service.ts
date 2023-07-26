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
    this.subscribe<Item>(ITEM_CHANGED_SUBSCRIPTION, variables, callbacks);
  }

  saleChanged(): void {
    throw new Error('Method not implemented.');
  }

  serverTimeChanged(): void {
    throw new Error('Method not implemented.');
  }

  private subscribe<T>(
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
      const data = JSON.parse(event.data);

      if (data.type === 'data') {
        callbacks.onData(data.payload.data);
      } else if (data.type === 'error') {
        callbacks.onError(data.payload.errors);
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
