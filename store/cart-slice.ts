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
    remove(state, action) {
      const { item } = action.payload;
      if (state.items[`t${item.id}`].numberOfPieces > 0) {
        state.numberOfItems--;
        state.total -= state.items[`t${item.id}`].price;
        state.items[`t${item.id}`].numberOfPieces--;
        state.items[`t${item.id}`].totalPrice -=
          state.items[`t${item.id}`].price;

        state.items[`t${item.id}`].totalPrice =
          +state.items[`t${item.id}`].totalPrice.toFixed(2);
        state.total = +state.total.toFixed(2);
      }
      if (state.items[`t${item.id}`].numberOfPieces === 0) {
        delete state.items[`t${item.id}`];
      }
    },
    clear(state, action) {
      const { item } = action.payload;
      const amount = state.items[`t${item.id}`].numberOfPieces;
      const price = state.items[`t${item.id}`].totalPrice;
      state.numberOfItems -= amount;
      state.total -= price;
      state.total = +state.total.toFixed(2);
      delete state.items[`t${item.id}`];
    },
    setCart(state, action) {},
    setCartHidden(state, action) {
      state.hidden = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
