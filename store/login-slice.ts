import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: "",
  displayName: "",
  userPicture: "",
  isLoggingIn: false,
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, displayName, picture } = action.payload;
      state.isLoggedIn = true;
      state.displayName = displayName;
      state.email = email;
      state.userPicture = picture;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.displayName = "";
      state.email = "";
      state.userPicture = "";
    },
    setLoggingIn(state, action) {
      state.isLoggingIn = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
