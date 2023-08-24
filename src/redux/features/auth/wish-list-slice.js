// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: null,
};

const wishListSlice = createSlice({
  name: "wishListSlice",
  initialState,
  reducers: {
    setWishList(state, action) {
      state.wishList = action.payload;
    },
    removeWishList(state, action) {
      return initialState;
    },
  },
});

export const { setWishList } = wishListSlice.actions;
export default wishListSlice;
