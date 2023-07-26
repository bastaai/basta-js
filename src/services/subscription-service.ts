// https://rob-blackbourn.medium.com/writing-a-graphql-websocket-subscriber-in-javascript-4451abb9cd60

import { BastaRequest } from '../../types/request';
import { BastaSubscriptionType, ISubscriptionService } from '../../types/sdk';
import { ITEM_CHANGED_SUBSCRIPTION } from '../gql/generated/operations';

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

  subscribe<T>(
    type: BastaSubscriptionType,
    callbacks: {
      onData: (data: T) => void;
      onError: (errors: string[]) => void;
      onComplete: () => void;
    }
  ): void {
    this._webSocket = new WebSocket(this._bastaReq.socketUrl);

    let query = '';

    if (type === 'ITEM_CHANGED') {
      query = ITEM_CHANGED_SUBSCRIPTION;
    } else {
      throw new Error('not implemented');
    }

    const ws = this._webSocket;
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: GQL.START, payload: { query: query } }));
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
