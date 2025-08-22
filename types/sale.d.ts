import { Item } from './item';
import { Image } from './image';
import { BidIncrementTable } from './bid';

/** Sale */
export type Sale = {
  /** Sale ID */
  id: string;
  /** Sale cursor is used in pagination. */
  cursor: string;
  /** Account ID associated with the sale */
  accountId: string;
  /** Sale Title */
  title?: string | null | undefined;
  /** Sale Description */
  description?: string | null | undefined;
  /**
   * Currency of the sale (capital letters: EUR, USD, etc.)
   * This is the default currency.
   * Item currency overrides sale currency, at least one of them needs to be defined.
   */
  currency?: string | null | undefined;
  /** Sale status. */
  status: SaleStatus;
  /** Items that have been associated with this sale. */
  items: Item[];
  /**
   * Default increment table for the sale.
   * If an increment table is associated with any items in the sale
   * this will be overidden.
   */
  incrementTable?: BidIncrementTable | null | undefined;
  /** Sequence number of this sale. */
  sequenceNumber: number;
  /** Sale Dates */
  dates: SaleDates;
  /** Closing method. */
  closingMethod: ClosingMethod;
  /** Images attached to sale */
  images: Image[];
  /** Sale type. */
  type: SaleType;
  /** Live stream for the sale */
  liveStream?: LiveVideoStream | null | undefined;
  /** Live Item in the Sale (only applicable for live sales)*/
  liveItem?: LiveItem | null | undefined;
  /** Paddle assigned to authenticated user */
  userPaddle?: Paddle | null | undefined;
};

export type LiveVideoStream = BastaLiveStream | ExternalLiveStream;

export type BastaLiveStream = {
  /** LiveStream channel ID */
  channelId?: string | null | undefined;
  /** Current viewers */
  currentViewers?: string | null | undefined;
  /** Is live stream enabled */
  enabled: boolean;
  /** LiveStream URL */
  publicUrl?: string | null | undefined;
};

export type ExternalLiveStream = {
  /** LiveStream Created */
  created: string;
  /** LiveStream Title */
  type: LiveStreamType;
  /** LiveStream Updated */
  updated: string;
  /** LiveStream URL */
  url: string;
};

/** LiveStreamType represents the type of live stream */
export enum LiveStreamType {
  /** Amazon IVS live stream */
  AmazonIvs = 'AMAZON_IVS',
  /**
   * Basta live stream
   * Built-in live stream for Basta
   */
  BastaLive = 'BASTA_LIVE',
  /** Generic live stream */
  Generic = 'GENERIC',
  /** YouTube live stream */
  YouTubeLive = 'YouTubeLive',
}

/** Live Item represents an item that is currently being auctioned in a live sale. */
export type LiveItem = {
  cursor: string;
  item: Item;
};

/** SaleType represents the type of sale */
export enum SaleType {
  /** Sale is a live auction */
  Live = 'LIVE',
  /** Sale is a online timed auction */
  OnlineTimed = 'ONLINE_TIMED',
}

/** Paddle represent a paddle in a sale */
export type Paddle = {
  /** Paddle created date */
  created: string;
  /** Paddle identifier */
  identifier: string;
  /** Paddle type */
  type: PaddleType;
};

/** PaddleType represents the type of paddle */
export enum PaddleType {
  InRoom = 'IN_ROOM',
  NotSet = 'NOT_SET',
  Online = 'ONLINE',
  Other = 'OTHER',
  Phone = 'PHONE',
}

/** Sale Dates */
export type SaleDates = {
  /** Date of when the sale is supposed to be automatically closed. */
  closingDate?: string | null | undefined;
  /** Date of when the sale is supposed to be automatically opened. */
  openDate?: string | null | undefined;
};

/** Sale Status represent what status an sale is currently running in. */
export enum SaleStatus {
  /** Sale is closed for bidding. */
  Closed = 'CLOSED',
  /** Sale is closing. */
  Closing = 'CLOSING',
  /** Sale is opened for bidding. */
  Opened = 'OPENED',
  /** Sale is paused. */
  Paused = 'PAUSED',
  /** Sale is being processed. */
  Processing = 'PROCESSING',
  /** Sale has been published but is not opened for bidding. */
  Published = 'PUBLISHED',
  /** Sale has not been published. This status will never appear in the API expcept when you are previewing the sale. */
  Unpublished = 'UNPUBLISHED',
  Live = 'LIVE',
}

/** ClosingMethod represents how SaleItems are moved into CLOSING status and when they are CLOSED */
export enum ClosingMethod {
  /**
   * No sniping.
   * All items close at the same time as the sale
   */
  None = 'NONE',
  /**
   * Only one item is in status CLOSING at a time.
   * Other items wait in status OPEN.
   */
  OneByOne = 'ONE_BY_ONE',
  /**
   * Each item has a precalculated closing time.
   * Items may be in closing at the same time.
   */
  Overlapping = 'OVERLAPPING',
}

export enum LinkType {
  Instagram = 'INSTAGRAM',
  Tiktok = 'TIKTOK',
  Website = 'WEBSITE',
  Youtube = 'YOUTUBE',
  Facebook = 'FACEBOOK',
  X = 'X',
}
