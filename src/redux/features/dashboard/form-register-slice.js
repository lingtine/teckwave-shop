import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  confirmPassword: "",
  email: "",
  password: "",
};

const formRegisterSlice = createSlice({
  name: "formRegisterSlice",
  initialState,
  reducers: {
    changeFullName(state, action) {
      state.fullName = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
  },
});

export const {
  changeConfirmPassword,
  changeEmail,
  changeFullName,
  changePassword,
} = formRegisterSlice.actions;

export default formRegisterSlice.reducer;
