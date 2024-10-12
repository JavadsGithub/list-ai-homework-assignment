import { BOOKS } from "$/lib/constants";
import { Item, RootState } from "$/lib/redux";
import { createSlice } from "@reduxjs/toolkit";

export interface BooksSliceState {
  topRated: Item[];
  recentlyPlayed: Item[];
  forYou: Item[];
  discovery: Item[];
  inProgress: Item;
}

const initialState: BooksSliceState = {
  topRated: BOOKS.slice(0, 4),
  recentlyPlayed: BOOKS.slice(0, 4),
  forYou: BOOKS,
  discovery: BOOKS,
  inProgress: BOOKS[0],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = booksSlice.actions;

export const selectTopRatedBooks = (state: RootState) => state.books.topRated;

export const selectRecentlyPlayedBooks = (state: RootState) =>
  state.books.recentlyPlayed;

export const selectForYouBooks = (state: RootState) => state.books.forYou;

export const selectDiscoveryBooks = (state: RootState) => state.books.discovery;

export const selectInProgressBooks = (state: RootState) =>
  state.books.discovery;

export const booksReducer = booksSlice.reducer;
