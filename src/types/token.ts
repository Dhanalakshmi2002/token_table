export type TokenStatus = "new" | "final" | "migrated";

export interface Token {
  id: string;
  name: string;
  pair: string;
  price: number;
  volume: number;
  liquidity: number;
  status: TokenStatus;
}
