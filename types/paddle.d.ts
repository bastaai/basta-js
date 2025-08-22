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
