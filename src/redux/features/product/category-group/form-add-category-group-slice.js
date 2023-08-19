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
  },
});

export default formAddCategoryGroup;
export const { changeDescription, changeName } = formAddCategoryGroup.actions;
