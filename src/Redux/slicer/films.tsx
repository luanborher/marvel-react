import { createSlice } from "@reduxjs/toolkit";
import filmsList from "../../Container/FilmsList";

const films = createSlice({
  name: "films",
  initialState: {
    films: filmsList,
  },
  reducers: {},
});

export default films.reducer;
