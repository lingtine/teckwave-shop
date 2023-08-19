// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, getCookie } from "~/utils/cookie";
// initialize userToken from local storage
const accessToken = getCookie("accessToken");
const refreshToken = getCookie("refreshToken");

const initialState = {
  // ...initial state
  accessToken,
  refreshToken,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    },
    changeAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    changeRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    changeAuth: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { logout, changeAccessToken, changeRefreshToken, changeAuth } =
  authSlice.actions;
export default authSlice.reducer;
