import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  categoryGroup: null,
};

const formAddCategorySlice = createSlice({
  name: "formAddCategorySlice",
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

export default formAddCategorySlice;
export const { clearData, changeField } = formAddCategorySlice.actions;
