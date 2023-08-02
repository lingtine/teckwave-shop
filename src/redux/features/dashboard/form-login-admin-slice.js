import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

const formLoginAdminSlice = createSlice({
  name: "formLoginAdmin",
  initialState,
  reducers: {
    changeUserName(state, action) {
      state.username = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { changePassword, changeUserName } = formLoginAdminSlice.actions;
export default formLoginAdminSlice.reducer;
