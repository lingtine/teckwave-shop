import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const formLoginAdminSlice = createSlice({
  name: "formLoginAdminSlice",
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

export const { clearData, changeField } = formLoginAdminSlice.actions;
export default formLoginAdminSlice;
