import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTasks } from "./tasksOperations";

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
    }).addCase(getTasks.fulfilled, (state, { payload }) => {
      state.tasksByDate = payload.sort((a, b) => a.date.localeCompare(b.date));
    });
  },
});

export const { reducer: tasksReducer } = tasksSlice;
