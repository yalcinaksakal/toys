// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";
import sections from "../assets/Sections";

const initialState = sections;

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export const directoryActions = directorySlice.actions;

export default directorySlice.reducer;
