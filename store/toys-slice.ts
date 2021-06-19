import { createSlice } from "@reduxjs/toolkit";
import toys from "../assets/toys";

const initialState = toys;

const toysSlice = createSlice({
  name: "toys",
  initialState,
  reducers: {},
});

export const toysActions = toysSlice.actions;

export default toysSlice.reducer;
