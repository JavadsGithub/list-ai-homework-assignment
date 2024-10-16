import { PODCASTS } from "$/lib/constants/PODCASTS";
import { RootState } from "$/lib/redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ItemType = "podcast" | "book";
export type PlayMode = "drawer" | "float" | null;

export interface Item {
  id: string;
  title: string;
  description: string;
  itemType: ItemType;
  progress: number;
  author: string;
  coverImage: string;
}

export interface LayoutSliceState {
  savedItems: Item[];
  playingItem: Item | undefined | null;
  playMode: PlayMode;
}

const initialState: LayoutSliceState = {
  savedItems: PODCASTS.slice(0, 4),
  playingItem: null,
  playMode: null,
};

export const layoutsSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setPlayingItem(state, action: PayloadAction<{ item: Item | null }>) {
      state.playingItem = action.payload.item;
      state.playMode = "drawer";
    },
    setPlayMode(state, action: PayloadAction<{ mode: PlayMode }>) {
      state.playMode = action.payload.mode;
    },
    closePlayingItem(state) {
      state.playingItem = null;
      state.playMode = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayMode, setPlayingItem, closePlayingItem } =
  layoutsSlice.actions;

export const selectSavedItems = (state: RootState) => state.layout.savedItems;
export const selectPlayMode = (state: RootState) => state.layout.playMode;
export const selectPlayingItem = (state: RootState) => state.layout.playingItem;

export const layoutReducer = layoutsSlice.reducer;
