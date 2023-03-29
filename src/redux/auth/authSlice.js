import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "./authOperations";

const initialState = {
  isAuth: false,
  user: {
    email: "",
    name: "",
    userImgUrl: null,
    phone: "",
    skype: "",
    birthday: "",
  },
  accessToken: null,
  refreshToken: null,
  error: null,
};

const rejectedReducer = (state, { payload }) => {
  state.error = payload;
};

const pendingReducer = (state) => {
  state.error = null;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUserAction(state) {
      return { ...initialState };
    },
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
      })
      .addCase(logoutUser.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logoutUser.rejected, () => {
        return { ...initialState };
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        return { ...state, ...payload };
      })
      .addMatcher(
        (action) => action.type.startsWith === "/pending",
        pendingReducer
      )
      .addMatcher(
        (action) => action.type.startsWith === "/rejected",
        rejectedReducer
      );
  },
});

export const { logoutUserAction } = authSlice.actions;
export default authSlice.reducer;
