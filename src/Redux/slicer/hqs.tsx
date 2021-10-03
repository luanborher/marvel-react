import { createSlice } from "@reduxjs/toolkit";
import hqsList from "../../Container/HqsList";

const hqs = createSlice({
  name: "films",
  initialState: {
    hqs: hqsList,
  },
  reducers: {},
});

export default hqs.reducer;
