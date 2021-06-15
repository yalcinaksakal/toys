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
    add(state, action) {
      const { item, amount } = action.payload;
      const additionalPrice = item.price * amount.toFixed(2);

      // console.log(item);
      if (state.items[`t${item.id}`]) {
        state.items[`t${item.id}`].numberOfPieces += amount;
        state.items[`t${item.id}`].totalPrice += additionalPrice;
      } else {
        state.items[`t${item.id}`] = {
          ...item,
          totalPrice: additionalPrice,
          numberOfPieces: amount,
        };
      }
      state.numberOfItems += amount;
      state.total += additionalPrice;
      state.items[`t${item.id}`].totalPrice =
        +state.items[`t${item.id}`].totalPrice.toFixed(2);
      state.total = +state.total.toFixed(2);
    },
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
