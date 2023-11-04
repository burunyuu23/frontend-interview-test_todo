import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { categoriesReducer } from "@/entities/Category";
import { tasksReducer } from "@/entities/Task";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
