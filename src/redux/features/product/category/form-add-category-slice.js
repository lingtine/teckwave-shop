import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  categoryGroup: null,
};

const formAddCategory = createSlice({
  name: "formAddCategorySlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCategoryGroup(state, action) {
      state.categoryGroup = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export default formAddCategory;
export const { clearData, changeCategoryGroup, changeDescription, changeName } =
  formAddCategory.actions;
