import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formAddDiscountEventSlice = createSlice({
  name: "formAddDiscountEventSlice",
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

export const { changeField, clearData } = formAddDiscountEventSlice.actions;

export default formAddDiscountEventSlice;
