import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: 0,
  gender: "",
  email: "",
  dob: "",
};

const formEditProfileSlice = createSlice({
  name: "formEditProfileSlice",
  initialState,
  reducers: {
    changeAllValue(state, action) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.gender = action.payload.gender;
      state.email = action.payload.email;
      state.dob = action.payload.birthday;
    },

    changeName(state, action) {
      state.name = action.payload;
    },
    changePhone(state, action) {
      state.phone = action.payload;
    },
    changeGender(state, action) {
      state.gender = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeDoB(state, action) {
      state.dob = action.payload;
    },
  },
});

export default formEditProfileSlice.reducer;
export const {
  changeAllValue,
  changeDoB,
  changeEmail,
  changeGender,
  changeName,
  changePhone,
} = formEditProfileSlice.actions;
