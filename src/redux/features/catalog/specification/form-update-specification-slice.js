import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formUpdateSpecificationSlice = createSlice({
  name: "formUpdateSpecificationSlice",
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

export default formUpdateSpecificationSlice;
export const { changeField, clearData } = formUpdateSpecificationSlice.actions;
