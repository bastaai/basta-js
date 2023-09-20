export type Link = {
  type: LinkType;
  url: string;
};

export enum LinkType {
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  Youtube = 'YOUTUBE',
}

export type Account = {
  /** Description for account */
  description?: string | null | undefined;
  /** Account handle, identifier for the account */
  handle?: string | null | undefined;
  /** ID of the account */
  id: string;
  /** Url for the profile image */
  imageUrl?: string | null | undefined;
  /** Links associated with account */
  links: Link[];
  /** Name associated with account */
  name: string;
};
