import { createClient } from 'graphql-ws';

import { Item } from '../../types';
import { BastaRequest } from '../../types/request';
import {
  ISubscriptionService,
  OnUpdateType,
  SubscriptionStatus,
  SubscriptionProps,
  SubscriptionVariablesMapped,
} from '../../types/sdk';
import { ITEM_CHANGED } from '../gql/generated/operations';
import { ItemChanged, SaleChanged } from '../gql/generated/types';

export class SubscriptionService implements ISubscriptionService {
  protected readonly _bastaReq: BastaRequest;
  protected _currentStatus: SubscriptionStatus = 'DISCONNECTED';

  constructor(bastaReq: BastaRequest) {
    this._bastaReq = bastaReq;
  }

  item(props: SubscriptionProps<Item>): () => void {
    return this.subscribe<Item>(
      ITEM_CHANGED,
      props.variables,
      props.onUpdate,
      props.userToken
    );
  }

  sale(): () => void {
    throw new Error('Method not implemented.');
  }

  private subscribe<T>(
    query: string,
    variables: SubscriptionVariablesMapped<T>,
    onUpdate: OnUpdateType<T>,
    userToken: string | undefined | null
  ): () => void {
    const notifyStatus = (status: SubscriptionStatus) => {
      this._currentStatus = status;
      onUpdate(null, status);
    };

    const client = createClient({
      url: this._bastaReq.socketUrl,
      connectionParams: {
        token: userToken,
      },
      on: {
        error: () => notifyStatus('DISCONNECTED'),
        closed: () => notifyStatus('DISCONNECTED'),
        connected: () => notifyStatus('CONNECTED'),
        connecting: () => notifyStatus('CONNECTING'),
      },
    });

    const subscription = client.iterate({
      query: query,
      variables: {
        ...variables,
      },
    });

    (async () => {
      for await (const event of subscription) {
        if (event.errors) {
          // We're already notifying errors in the `createClient` (above), so we do nothing.
          return;
        }

        if (event.data) {
          // Here comes the juice!
          if ('itemChanged' in event.data) {
            // Item has changed
            const data = event.data.itemChanged as ItemChanged;
            onUpdate(data as T, this._currentStatus);
          } else if ('saleChanged' in event.data) {
            // Sale has changed
            const data = event.data.saleChanged as SaleChanged;
            onUpdate(data as T, this._currentStatus);
          }
        }
      }
    })();

    return () => client.dispose();
  }
}
