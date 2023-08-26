import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formAddSpecificationSlice = createSlice({
  name: "formAddSpecificationSlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.name = action.payload;
    },

    cleanData() {
      return initialState;
    },
  },
});

export default formAddSpecificationSlice;

export const { changeName, changeDescription, cleanData } =
  formAddSpecificationSlice.actions;
