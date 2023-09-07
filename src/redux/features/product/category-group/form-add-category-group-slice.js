import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formAddCategoryGroup = createSlice({
  name: "formAddCategoryGroupSlice",
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

export default formAddCategoryGroup;
export const { clearData, changeDescription, changeName } =
  formAddCategoryGroup.actions;
