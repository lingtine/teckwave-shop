import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  email: "",
  address: "",
  fax: "",
  hotline: "",
};

const formAddWarehouseSlice = createSlice({
  name: "formAddWarehouseSlice",
  initialState,
  reducers: {
    changeField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { changeField, clearForm } = formAddWarehouseSlice.actions;
export default formAddWarehouseSlice;
