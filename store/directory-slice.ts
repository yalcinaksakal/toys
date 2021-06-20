import { createSlice } from "@reduxjs/toolkit";
import sections from "../assets/Sections";
import Section from "../models/section";

const initialState: Section[] = sections;

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export const directoryActions = directorySlice.actions;

export default directorySlice.reducer;
