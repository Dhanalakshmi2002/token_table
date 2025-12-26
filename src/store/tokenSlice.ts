import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenStatus } from "@/types/token";

type SortKey = "price" | "volume" | "liquidity";

interface TokenUIState {
  activeTab: TokenStatus;
  sortKey: SortKey;
  sortDir: "asc" | "desc";
  selectedTokenId: string | null;
}

const initialState: TokenUIState = {
  activeTab: "new",
  sortKey: "volume",
  sortDir: "desc",
  selectedTokenId: null
};

const slice = createSlice({
  name: "tokenUI",
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<TokenStatus>) {
      state.activeTab = action.payload;
    },
    setSort(
      state,
      action: PayloadAction<{ key: SortKey; dir: "asc" | "desc" }>
    ) {
      state.sortKey = action.payload.key;
      state.sortDir = action.payload.dir;
    },
    openModal(state, action: PayloadAction<string>) {
      state.selectedTokenId = action.payload;
    },
    closeModal(state) {
      state.selectedTokenId = null;
    }
  }
});

export const { setTab, setSort, openModal, closeModal } = slice.actions;
export default slice.reducer;
