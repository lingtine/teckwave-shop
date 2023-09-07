import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const contactFormSlice = createSlice({
  name: "contactFormSLide",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    changeMessage(state, action) {
      state.message = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export const {
  clearData,
  changeEmail,
  changeName,
  changeMessage,
  changePhoneNumber,
} = contactFormSlice.actions;

export default contactFormSlice.reducer;
