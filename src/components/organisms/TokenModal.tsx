"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closeModal } from "@/store/tokenSlice";

export function TokenModal() {
  const dispatch = useDispatch();
  const id = useSelector((s: RootState) => s.tokenUI.selectedTokenId);

  return (
    <Dialog.Root open={!!id} onOpenChange={() => dispatch(closeModal())}>
      <Dialog.Content className="fixed inset-0 m-auto bg-[#111827] p-6 rounded w-96">
        <Dialog.Title className="text-lg mb-2">
          Token Details
        </Dialog.Title>
        <p>Token ID: {id}</p>
        <button
          onClick={() => dispatch(closeModal())}
          className="mt-4 px-4 py-2 bg-white/10 rounded"
        >
          Close
        </button>
      </Dialog.Content>
    </Dialog.Root>
  );
}
