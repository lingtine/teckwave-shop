import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
};

const cartSLice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export default cartSLice.reducer;

export const { setCart } = cartSLice.actions;
