import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  reducedPrice: 0,
  quantity: 0,
  discountEvent: null,
};

const formAddCouponSlice = createSlice({
  name: "formAddCouponSlice",
  initialState,
  reducers: {
    changeField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearData() {
      return initialState;
    },
  },
});

export const { changeField, clearData } = formAddCouponSlice.actions;

export default formAddCouponSlice;
