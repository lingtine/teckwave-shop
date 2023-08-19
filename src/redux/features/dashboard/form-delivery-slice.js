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
const deliveryFormSlice = createSlice({
  name: "deliveryFormSlice",
  initialState,
  reducers: {
    changeCouponId(state, action) {
      state.couponId = action.payload;
    },
    changeFullName(state, action) {
      state.fullName = action.payload;
    },
    changePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeCity(state, action) {
      state.city = action.payload;
    },
    changeWard(state, action) {
      state.ward = action.payload;
    },
    changeDistrict(state, action) {
      state.district = action.payload;
    },
    changeStreet(state, action) {
      state.street = action.payload;
    },
    changeStreetNumber(state, action) {
      state.streetNumber = action.payload;
    },
    changeNote(state, action) {
      state.note = action.payload;
    },
    createOrder() {
      return initialState;
    },
  },
});

export const {
  changeCity,
  changeCouponId,
  changeDistrict,
  changeEmail,
  changeFullName,
  changeNote,
  changePhoneNumber,
  changeStreet,
  changeStreetNumber,
  changeWard,
} = deliveryFormSlice.actions;

export default deliveryFormSlice.reducer;
