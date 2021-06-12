import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login-slice";

const store = configureStore({
  reducer: { login: loginReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
