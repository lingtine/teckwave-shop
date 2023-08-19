import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formEditCategoryGroup = createSlice({
  name: "formEditCategoryGroup",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export default formEditCategoryGroup;
export const { changeDescription, changeName } = formEditCategoryGroup.actions;
