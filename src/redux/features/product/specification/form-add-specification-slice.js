import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formAddSpecification = createSlice({
  name: "formAddSpecificationSlice",
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

export default formAddSpecification;
export const { changeDescription, changeName, clearData } =
  formAddSpecification.actions;
