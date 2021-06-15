import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login-slice";
import cartReducer from "./cart-slice";
const store = configureStore({
  reducer: { login: loginReducer, cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
