import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  reducedPrice: 0,
  quantity: 0,
  discountEvent: null,
};

const formCreateCouponSlice = createSlice({
  name: "formCreateCouponSlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeReducedPrice(state, action) {
      state.reducedPrice = action.payload;
    },
    changeQuantity(state, action) {
      state.quantity = action.payload;
    },
    changeDiscountEvent(state, action) {
      state.discountEvent = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export const {
  changeDescription,
  changeDiscountEvent,
  changeName,
  changeQuantity,
  changeReducedPrice,
  clearData,
} = formCreateCouponSlice.actions;

export default formCreateCouponSlice;
