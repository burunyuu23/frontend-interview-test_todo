/* VENDOR */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {Task} from "@/entities/Task";


const initialState: Task[] = [
  {
    id: "dcf6c7ea-56fe-4e36-960b-686ebf86d651",
    name: "Задача",
    description: "Описание может быть длинным",
    category: "d485a644-5a24-4f55-b3f7-a083338be879",
  },
  {
    id: "8c90d466-4d2b-4813-a5b4-110b014bf7f2",
    name: "Задача2",
    description: "Описание может быть длинным",
    category: "52f7451a-0f06-4ddc-affa-b1d8ed24aee3",
  },
  {
    id: "5a034ea1-6159-4805-a4be-e8c160d8ef10",
    name: "Задача3",
    description: "Описание может быть длинным",
    category: "",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksAdded: (state, action) => {
      state.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    tasksUpdated: (state, action) => {
      const { id, name, description, category } = action.payload,
        existingTask = state.find((task) => task.id === id);

      if (existingTask) {
        existingTask.name = name;
        existingTask.description = description;
        existingTask.category = category;
      }
    },
    tasksRemoved: (state, action) => {
      let rm = (el: Task) =>
          el.id === action.payload,
        rmTaskIndex = state.findIndex(rm);

      state.splice(rmTaskIndex, 1);
    },
    tasksClearedCategories: (state, action) => {
      state.forEach((task) => {
        if (task.category === action.payload) task.category = "";
      });
    },
  },
});

export const {
  tasksAdded,
  tasksUpdated,
  tasksRemoved,
  tasksClearedCategories,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
