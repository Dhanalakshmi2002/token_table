import { Token } from "@/types/token";

export async function fetchTokens(): Promise<Token[]> {
  await new Promise(r => setTimeout(r, 900));

  return Array.from({ length: 24 }).map((_, i) => ({
    id: String(i),
    name: `Token ${i}`,
    pair: `TK${i}/USDT`,
    price: +(Math.random() * 5).toFixed(4),
    volume: Math.floor(Math.random() * 100000),
    liquidity: Math.floor(Math.random() * 50000),
    status: i % 3 === 0 ? "new" : i % 3 === 1 ? "final" : "migrated"
  }));
}
