import { configureStore } from "@reduxjs/toolkit";
import favSlice from "../slice/favSlice";

export const store = configureStore({
  reducer: {
    favorites: favSlice,
  },
});