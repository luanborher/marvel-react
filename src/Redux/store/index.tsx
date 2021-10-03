import charactersList from "../slicer/index";
import { configureStore } from "@reduxjs/toolkit";
import filmsList from "../slicer/films";
import hqsList from "../slicer/hqs";

export const store = configureStore({
  reducer: {
    characters: charactersList,
    films: filmsList,
    hqs: hqsList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
