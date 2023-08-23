// https://rob-blackbourn.medium.com/writing-a-graphql-websocket-subscriber-in-javascript-4451abb9cd60

import { BastaRequest } from '../../types/request';
import {
  ISubscriptionService,
  SubscriptionCallbacksType,
  SubscriptionVariablesMapped,
} from '../../types/sdk';
import { ITEM_CHANGED } from '../gql/generated/operations';
import {
  Item,
  Item_ChangedSubscriptionVariables,
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

  item(
    variables: Item_ChangedSubscriptionVariables,
    callbacks: SubscriptionCallbacksType<Item>
  ): void {
    this.subscribe<Item>(ITEM_CHANGED, variables, callbacks);
  }

  sale(): void {
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

    ws.onmessage = (e) => {
      const event = JSON.parse(e.data);

      switch (event.type) {
        case GQL.CONNECTION_ACK: {
          // This is the successful response to GQL.CONNECTION_INIT
          console.log('Acknowledged the connection');
          break;
        }
        case GQL.CONNECTION_ERROR: {
          // This may occur:
          // 1. In response to GQL.CONNECTION_INIT
          // 2. In case of parsing errors in the client which will not disconnect.
          console.error('Connection error...');
          break;
        }
        case GQL.CONNECTION_KEEP_ALIVE: {
          // This may occur:
          // 1. After GQL.CONNECTION_ACK,
          // 2. Periodically to keep the connection alive.
          console.log('Keeping alive');
          break;
        }
        case GQL.ERROR: {
          // This method is sent when a subscription fails. This is usually dues to validation errors
          // as resolver errors are returned in GQL.DATA messages.
          console.error('Error happened');
          callbacks.onError(['An error occurred.']);
          break;
        }
        case GQL.COMPLETE: {
          // This is sent when the operation is done and no more dta will be sent.
          console.log('Completed connection');
          break;
        }
        case GQL.DATA: {
          // This message is sent after GQL.START to transfer the result of the GraphQL subscription.
          console.log('Juicy data', event.data);

          if (event.errors) {
            callbacks.onError(event.errors);
          } else if ('itemChanged' in event.payload.data) {
            callbacks.onData(event.payload.data.itemChanged);
          } else if ('saleChanged' in event.payload.data) {
            callbacks.onData(event.payload.data.saleChanged);
          }

          break;
        }
        default: {
          console.log('default some other type');
          break;
        }
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
