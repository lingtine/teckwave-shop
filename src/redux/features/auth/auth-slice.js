// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  acct,

  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    // register user reducer...
  },
});
export default authSlice.reducer;
