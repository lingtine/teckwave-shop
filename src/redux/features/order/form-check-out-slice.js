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
const formCheckoutSlice = createSlice({
  name: "formCheckoutSlice",
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

    clearData() {
      return initialState;
    },
  },
});

export default formCheckoutSlice;
export const { changeAddress, changeField, clearData } =
  formCheckoutSlice.actions;
