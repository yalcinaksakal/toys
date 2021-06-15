import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../models/cartItem";

const initialState: {
  items: { [key: string]: CartItem };
  numberOfItems: number;
  total: number;
  hidden: boolean;
} = {
  items: {},
  numberOfItems: 0,
  total: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {},
    remove(state, action) {},
    clear(state) {},
    setCart(state, action) {},
    setCartHidden(state, action) {
      state.hidden = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
