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
  name: "formAddAddressSlice",
  initialState,
  reducers: {
    changeField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    changeAddress(state, action) {
      const { field, value } = action.payload;
      state.address[field] = value;
    },
    clearForm() {
      return initialState;
    },
  },
});

export default formAddAddressSlice;
export const { changeAddress, changeField, clearForm } =
  formAddAddressSlice.actions;
