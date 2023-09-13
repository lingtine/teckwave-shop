import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
};

const formAddCategoryGroupSlice = createSlice({
  name: "formAddCategoryGroupSlice",
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

export default formAddCategoryGroupSlice;
export const { clearData, changeField } = formAddCategoryGroupSlice.actions;
