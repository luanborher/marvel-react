import charactersList from "../slicer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    characters: charactersList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
