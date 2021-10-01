import charactersList from "../../Container/CharactersList";
import { createSlice } from "@reduxjs/toolkit";

const characters = createSlice({
  name: "characters",
  initialState: {
    characters: charactersList,
  },
  reducers: {},
});

export default characters.reducer;
