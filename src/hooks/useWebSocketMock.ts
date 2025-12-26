import { useEffect } from "react";
import { Token } from "@/types/token";

export function useWebSocketMock(
  tokens: Token[],
  onUpdate: (id: string, price: number) => void
) {
  useEffect(() => {
    const i = setInterval(() => {
      const t = tokens[Math.floor(Math.random() * tokens.length)];
      if (!t) return;

      const delta = (Math.random() - 0.5) * 0.12;
      onUpdate(t.id, +(t.price + delta).toFixed(4));
    }, 1200);

    return () => clearInterval(i);
  }, [tokens, onUpdate]);
}
