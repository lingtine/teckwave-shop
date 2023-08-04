import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  address: {
    number: "",
    street: "",
    ward: "",
    district: "",
    city: "",
  },
  phoneNumber: "",
};

const formAddAddressSlice = createSlice({
  name: "formAddAddress",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeStreet(state, action) {
      state.address.street = action.payload;
    },
    changeWard(state, action) {
      state.address.ward = action.payload;
    },
    changeDistrict(state, action) {
      state.address.district = action.payload;
    },
    changeCity(state, action) {
      state.address.city = action.payload;
    },
    changePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export default formAddAddressSlice.reducer;
export const {
  changeCity,
  changeName,
  changeDistrict,
  changePhoneNumber,
  changeStreet,
  changeWard,
} = formAddAddressSlice.actions;
