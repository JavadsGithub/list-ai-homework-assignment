import { PODCASTS } from "$/lib/constants";
import { Item, RootState } from "$/lib/redux";
import { createSlice } from "@reduxjs/toolkit";

export interface PodcastsSliceState {
  topRated: Item[];
  recentlyPlayed: Item[];
  forYou: Item[];
  discovery: Item[];
}

const initialState: PodcastsSliceState = {
  topRated: PODCASTS.slice(0, 4),
  recentlyPlayed: PODCASTS.slice(0, 4),
  forYou: PODCASTS,
  discovery: PODCASTS,
};

export const podcastsSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = podcastsSlice.actions;

export const selectTopRatedPodcasts = (state: RootState) =>
  state.podcasts.topRated;

export const selectRecentlyPlayedPodcasts = (state: RootState) =>
  state.podcasts.recentlyPlayed;

export const selectForYouPodcasts = (state: RootState) => state.podcasts.forYou;

export const selectDiscoveryPodcasts = (state: RootState) =>
  state.podcasts.discovery;

export const podcastReducer = podcastsSlice.reducer;
