import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const formLoginSlice = createSlice({
  name: "formLoginSlice",
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

export const { clearData, changeField } = formLoginSlice.actions;

export default formLoginSlice;
