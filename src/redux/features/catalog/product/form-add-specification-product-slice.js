import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  specification: null,
  value: "",
};

const formAddSpecificationProductSlice = createSlice({
  name: "formAddSpecificationProductSlice",
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

export const { changeField, clearData } =
  formAddSpecificationProductSlice.actions;
export default formAddSpecificationProductSlice;
