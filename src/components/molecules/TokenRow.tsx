"use client";

import { Token } from "@/types/token";
import { Price } from "../atoms/Price";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/tokenSlice";
import { TooltipWrapper } from "./TooltipWrapper";

export function TokenRow({ token }: { token: Token }) {
  const dispatch = useDispatch();

  return (
    <div
      className="grid grid-cols-5 px-4 py-3 hover:bg-white/5 cursor-pointer"
      onClick={() => dispatch(openModal(token.id))}
    >
      <div>{token.name}</div>
      <div className="text-gray-400">{token.pair}</div>
      <Price value={token.price} />

      <TooltipWrapper label="24h trading volume">
        <div>${token.volume.toLocaleString()}</div>
      </TooltipWrapper>

      <div>${token.liquidity.toLocaleString()}</div>
    </div>
  );
}
