import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formEditCategoryGroup = createSlice({
  name: "formEditCategoryGroup",
  initialState,
  reducers: {
    changeAllValue(state, action) {
      state.name = action.payload.name;
      state.description = action.payload.description;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export default formEditCategoryGroup;
export const { changeDescription, changeName, changeAllValue } =
  formEditCategoryGroup.actions;
