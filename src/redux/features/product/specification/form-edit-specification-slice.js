import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formEditSpecification = createSlice({
  name: "formEditSpecification",
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

export default formEditSpecification;
export const { changeDescription, changeName, clearData } =
  formEditSpecification.actions;
