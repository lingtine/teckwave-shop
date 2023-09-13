import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formUpdateCategoryGroupSlice = createSlice({
  name: "formEditCategoryGroupSlice",
  initialState,
  reducers: {
    changeAllValue(state, action) {
      state.name = action.payload.name;
      state.description = action.payload.description;
    },
    changeField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearData() {
      return initialState;
    },
  },
});

export default formUpdateCategoryGroupSlice;
export const { clearData, changeField, changeAllValue } =
  formUpdateCategoryGroupSlice.actions;
