import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formCreateDiscountEventSlice = createSlice({
  name: "formCreateDiscountEventSlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export const { changeDescription, changeName, clearData } =
  formCreateDiscountEventSlice.actions;

export default formCreateDiscountEventSlice;
