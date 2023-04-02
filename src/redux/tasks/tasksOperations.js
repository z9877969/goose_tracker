import { createAsyncThunk } from "@reduxjs/toolkit";
import { createTaskApi, getTasksApi } from "shared/services/api";

export const createTask = createAsyncThunk(
  "tasks/create",
  async (task, { rejectWithValue }) => {
    try {
      const newTask = await createTaskApi(task);
      return newTask;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTasks = createAsyncThunk(
  "tasks/get",
  async (_, { rejectWithValue }) => {
    try {
      const tasks = await getTasksApi();
      return tasks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
