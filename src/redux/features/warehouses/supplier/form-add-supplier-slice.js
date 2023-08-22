import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  email: "",
  address: "",
  phoneNumber: "",
};

const formAddSupplierSlice = createSlice({
  name: "formAddSupplierSlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeAddress(state, action) {
      state.address = action.payload;
    },
    changePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  changeAddress,
  changeDescription,
  changeEmail,
  changeName,
  changePhoneNumber,
} = formAddSupplierSlice.actions;
export default formAddSupplierSlice;
