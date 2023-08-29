import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  phoneNumber: "",
  email: "",
  address: {
    city: "",
    district: "",
    ward: "",
    street: "",
    streetNumber: "",
  },
  note: "",
};
const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.fullName = action.payload;
    },
    changePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeCity(state, action) {
      state.address.city = action.payload;
    },
    changeDistrict(state, action) {
      state.address.district = action.payload;
    },
    changeWard(state, action) {
      state.address.ward = action.payload;
    },
    changeStreet(state, action) {
      state.address.street = action.payload;
    },
    changeStreetNumber(state, action) {
      state.address.streetNumber = action.payload;
    },
    changeNote(state, action) {
      state.note = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export default checkoutSlice.reducer;
export const {
  changeCity,
  changeDistrict,
  changeEmail,
  changeName,
  changeNote,
  changePhoneNumber,
  changeStreet,
  changeStreetNumber,
  changeWard,
  clearData,
} = checkoutSlice.actions;
