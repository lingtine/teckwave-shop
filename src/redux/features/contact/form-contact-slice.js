import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const formContactSlice = createSlice({
  name: "formContactSlice",
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

export const { clearData, changeField } = formContactSlice.actions;

export default formContactSlice;
