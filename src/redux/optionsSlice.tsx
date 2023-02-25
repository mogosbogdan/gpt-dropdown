import { createSlice } from "@reduxjs/toolkit";
import optionsData from "../components/options";

const optionsSlice = createSlice({
  name: "options",
  initialState: optionsData,
  reducers: {},
});

export default optionsSlice.reducer;
