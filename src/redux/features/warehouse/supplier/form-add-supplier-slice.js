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
    changeField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearData() {
      return initialState;
    },
  },
});

export const { changeField, clearData } = formAddSupplierSlice.actions;
export default formAddSupplierSlice;
