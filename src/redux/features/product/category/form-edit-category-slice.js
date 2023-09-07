import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  categoryGroup: null,
};

const formEditCategory = createSlice({
  name: "formEditCategorySlice",
  initialState,
  reducers: {
    changeAllValue(state, action) {
      state.name = action.payload.name;
      state.description = action.payload.description;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCategoryGroupId(state, action) {
      state.categoryGroupId = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export default formEditCategory;
export const { changeCategoryGroupId, changeDescription, changeName } =
  formEditCategory.actions;
