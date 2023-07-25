// https://rob-blackbourn.medium.com/writing-a-graphql-websocket-subscriber-in-javascript-4451abb9cd60

import { BastaRequest } from '../../types/request';
import { ISubscriptionService } from '../../types/sdk';

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

  subscribe(query: string): void {
    this._webSocket = new WebSocket(this._bastaReq.socketUrl);

    const ws = this._webSocket;
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: GQL.START, payload: { query: query } }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'data') {
        this.onData(data.payload.data);
      } else if (data.type === 'error') {
        this.onError(data.payload.errors);
      }
    };
  }

  onData<T>(data: T): void {
    throw new Error('Method not implemented.');
  }

  onError(errors: string[]): void {
    throw new Error('Method not implemented.');
  }

  onComplete(): void {
    throw new Error('Method not implemented.');
  }
}
