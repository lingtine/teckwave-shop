import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formAddSpecificationSlice = createSlice({
  name: "formAddSpecificationSlice",
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

export default formAddSpecificationSlice;
export const { changeField, clearData } = formAddSpecificationSlice.actions;
