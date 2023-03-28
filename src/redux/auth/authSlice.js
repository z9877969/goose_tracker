import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
    user: {
      email: null,
      name: null,
    },
    accessToken: null,
    refreshToken: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const {
          data: { accessToken, refreshToken },
          ...user
        } = payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = user;
        state.isAuth = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const {
          data: { accessToken, refreshToken },
          ...user
        } = payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = user;
        state.isAuth = true;
      });
  },
});

export default authSlice.reducer;
