import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
  quantity: 0,
};

const cartSLice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
      state.quantity = action.payload.items.length;
    },
    clearData() {
      return initialState;
    },
  },
});

export default cartSLice.reducer;

export const { setCart, clearData } = cartSLice.actions;
