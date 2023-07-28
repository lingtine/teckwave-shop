import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  email: "",
  dob: "",
};

const formProfileSlice = createSlice({
  name: "formProfileSlice",
  initialState,
});
