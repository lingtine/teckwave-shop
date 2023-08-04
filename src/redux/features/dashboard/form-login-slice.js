import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const formLoginSlice = createSlice({
  name: "formLoginSlice",
  initialState,
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { changeEmail, changePassword } = formLoginSlice.actions;

export default formLoginSlice.reducer;