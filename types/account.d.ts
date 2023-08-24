import { Link, Maybe } from '../src/gql/generated/types';

export type Account = {
  /** Description for account */
  description?: Maybe<string>;
  /** Account handle, identifier for the account */
  handle?: Maybe<string>;
  /** ID of the account */
  id: string;
  /** Url for the profile image */
  imageUrl?: Maybe<string>;
  /** Links associated with account */
  links: Array<Link>;
  /** Name associated with account */
  name: string;
};
