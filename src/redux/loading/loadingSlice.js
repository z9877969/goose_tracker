import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  extraReducers: (b) =>
    b
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        () => true
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/fulfilled") ||
          action.type.endsWith("/rejected"),
        () => false
      ),
});

export const { reducer: loadingReducer } = loadingSlice;
