import { useEffect, useRef, useState } from "react";

export function usePriceFlash(price: number) {
  const prev = useRef(price);
  const [dir, setDir] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (price > prev.current) setDir("up");
    if (price < prev.current) setDir("down");
    prev.current = price;

    const t = setTimeout(() => setDir(null), 300);
    return () => clearTimeout(t);
  }, [price]);

  return dir;
}
