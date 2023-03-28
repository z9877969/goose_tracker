import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi, refreshTokenApi, registerUserApi } from "shared/services/api";

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