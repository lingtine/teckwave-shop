import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  categoryGroupId: "",
};

const formEditCategory = createSlice({
  name: "formEditCategory",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCategoryGroupId(state, action) {
      state.categoryGroupId = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export default formEditCategory;
export const { changeCategoryGroupId, changeDescription, changeName } =
  formEditCategory.actions;
