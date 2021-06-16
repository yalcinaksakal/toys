import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./login-slice";
import cartReducer from "./cart-slice";

import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

const persistConfig = { key: "root", storage };

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: persistReducer(persistConfig, cartReducer),
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
