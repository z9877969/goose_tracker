import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserInfoApi,
  loginUserApi,
  logoutUserApi,
  refreshTokenApi,
  registerUserApi,
  updateUserApi,
} from "shared/services/api";
import { logoutUserAction } from "./authSlice";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const data = await refreshTokenApi(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutUserApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "/auth/get/info",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { accessToken } = getState().auth;

    try {
      const data = await getUserInfoApi(accessToken);
      return data;
    } catch (error) {
      // setTimeout(() => {
      //   dispatch(logoutUserAction());
      // }, 0);
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { accessToken } = getState().auth;

      return Boolean(accessToken);
    },
  }
);

export const updateUser = createAsyncThunk(
  "auth/update",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await updateUserApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
