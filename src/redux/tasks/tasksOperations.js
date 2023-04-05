import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTaskApi,
  getTasksApi,
  removeTasksApi,
  updateTasksApi,
} from "shared/services/api";

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

export const removeTask = createAsyncThunk(
  "tasks/remove",
  async ({ id, date }, { rejectWithValue }) => {
    try {
      await removeTasksApi(id);
      return { id, date };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({ id, task }, { rejectWithValue }) => {
    try {
      const newTask = await updateTasksApi({ taskData: task, id });
      return { id, date: newTask.date.split("T")[0], task: newTask };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
