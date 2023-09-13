import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerId: "",
  couponId: "",
  fullName: "",
  phoneNumber: "",
  email: "",
  city: "",
  district: "",
  ward: "",
  street: "",
  streetNumber: "",
  note: "",
};
const formDeliveryFormSlice = createSlice({
  name: "formDeliveryFormSlice",
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

export const { changeField, clearData } = formDeliveryFormSlice.actions;

export default formDeliveryFormSlice;
