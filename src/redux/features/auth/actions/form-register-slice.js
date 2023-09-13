import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  code: "",
  showCode: false,
};

const formRegisterSlice = createSlice({
  name: "formRegisterSlice",
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

export const { changeField, clearData } = formRegisterSlice.actions;

export default formRegisterSlice;
