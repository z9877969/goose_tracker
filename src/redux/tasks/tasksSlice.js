import { createSlice } from "@reduxjs/toolkit";
import {
  createTask,
  getTasks,
  removeTask,
  updateTask,
} from "./tasksOperations";

const initialState = {
  tasksByDate: [],
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (b) => {
    b.addCase(createTask.fulfilled, (state, { payload }) => {
      const taskDate = payload.date.split("T")[0];
      const isDateExist = state.tasksByDate.some((el) => el.date === taskDate);
      const newTasksData = isDateExist
        ? state.tasksByDate.map((el) => {
            return el.date !== taskDate
              ? el
              : {
                  ...el,
                  tasks: [...el.tasks, payload],
                };
          })
        : [
            ...state.tasksByDate,
            {
              date: taskDate,
              tasks: [payload],
            },
          ];
      state.tasksByDate = newTasksData.sort((a, b) =>
        a.date.localeCompare(b.date)
      );
    })
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.tasksByDate = payload.sort((a, b) =>
          a.date.localeCompare(b.date)
        );
      })
      .addCase(removeTask.fulfilled, (state, { payload }) => {
        const { id, date } = payload;
        const tasks = state.tasksByDate.map((dayData) =>
          dayData.date === date
            ? {
                ...dayData,
                tasks: dayData.tasks.filter((task) => task._id !== id),
              }
            : dayData
        );
        state.tasksByDate = tasks;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        const { id, date, task: newTask } = payload;
        const tasks = state.tasksByDate.map((dayData) =>
          dayData.date !== date
            ? dayData
            : {
                ...dayData,
                tasks: dayData.tasks.map((task) =>
                  task._id !== id ? task : newTask
                ),
              }
        );
        state.tasksByDate = tasks;
      });
  },
});

export const { reducer: tasksReducer } = tasksSlice;
