import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  confirmPassword: "",
  email: "",
  password: "",
  name: "",
  code: "",
  showCode: false,
};

const formRegisterSlice = createSlice({
  name: "formRegisterSlice",
  initialState,
  reducers: {
    changePassword(state, action) {
      state.password = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCode(state, action) {
      state.code = action.payload;
    },
    changeShowCode(state, action) {
      state.showCode = true;
    },
  },
});

export const {
  changeConfirmPassword,
  changeEmail,
  changePassword,
  changeCode,
  changeName,
  changeShowCode,
} = formRegisterSlice.actions;

export default formRegisterSlice.reducer;
