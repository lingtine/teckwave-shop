import { createSlice } from "@reduxjs/toolkit";

initialState = {
  name: "string",
  address: {
    number: "",
    street: "",
    ward: "",
    district: "",
    city: "",
  },
  phoneNumber: "",
};

const editAddressSlice = createSlice({
  name: "editAddressSlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeNumber(state, action) {
      state.address.number = action.payload;
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

export default editAddressSlice.reducer;

export const {
  changeCity,
  changeDistrict,
  changeName,
  changeNumber,
  changePhoneNumber,
  changeStreet,
  changeWard,
} = editAddressSlice.actions;
