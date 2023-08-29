import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  specification: null,
  value: "",
};

const formAddSpecificationProductSlice = createSlice({
  name: "formAddSpecificationProductSlice",
  initialState,
  reducers: {
    changeSpecification(state, action) {
      state.specification = action.payload;
    },
    changeValue(state, action) {
      state.value = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export const { changeSpecification, changeValue, clearData } =
  formAddSpecificationProductSlice.actions;
export default formAddSpecificationProductSlice;
