import { createSlice } from "@reduxjs/toolkit";

export interface TestSliceState {
  storeWorks: boolean;
}

const initialState: TestSliceState = {
  storeWorks: false,
};

export const testsReducer = createSlice({
  name: "test",
  initialState,
  reducers: {
    toggleStoreWorks(store) {
      store.storeWorks = !store.storeWorks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleStoreWorks } = testsReducer.actions;

export const testReducer = testsReducer.reducer;
