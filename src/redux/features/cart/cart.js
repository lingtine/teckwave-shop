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
    clearData() {
      return initialState;
    },
  },
});

export default cartSLice.reducer;

export const { setCart, clearData } = cartSLice.actions;
