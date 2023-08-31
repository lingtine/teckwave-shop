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

const editAddressSlice = createSlice({
  name: "editAddressSlice",
  initialState,
  reducers: {
    changeAllData(state, action) {
      const { address, name, phoneNumber } = action.payload;
      state.name = name;
      state.phoneNumber = phoneNumber;
      state.address.city = address.city;
      state.address.district = address.district;
      state.address.number = address.number;
      state.address.street = address.street;
      state.address.ward = address.ward;
    },
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
    clearForm() {
      return initialState;
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
  clearForm,
  changeAllData,
} = editAddressSlice.actions;
