"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/services/api";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useCallback, useMemo, useState } from "react";
import { useWebSocketMock } from "@/hooks/useWebSocketMock";
import { sortTokens } from "@/hooks/useSort";
import { TokenRow } from "../molecules/TokenRow";
import { SkeletonRow } from "../molecules/SkeletonRow";

export function TokenTable() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens
  });

  const { activeTab, sortKey, sortDir } = useSelector(
    (s: RootState) => s.tokenUI
  );

  const [prices, setPrices] = useState<Record<string, number>>({});

  const onPrice = useCallback((id: string, price: number) => {
    setPrices(p => ({ ...p, [id]: price }));
  }, []);

  useWebSocketMock(data, onPrice);

  const filtered = useMemo(() => {
    const tokens = data
      .filter(t => t.status === activeTab)
      .map(t => ({ ...t, price: prices[t.id] ?? t.price }));

    return sortTokens(tokens, sortKey, sortDir);
  }, [data, activeTab, sortKey, sortDir, prices]);

  if (isLoading) {
    return Array.from({ length: 6 }).map((_, i) => (
      <SkeletonRow key={i} />
    ));
  }

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      {filtered.map(t => (
        <TokenRow key={t.id} token={t} />
      ))}
    </div>
  );
}
