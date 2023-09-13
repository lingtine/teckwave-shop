import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  categoryGroup: null,
};

const formUpdateCategorySlide = createSlice({
  name: "formUpdateCategorySlice",
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

export default formUpdateCategorySlide;
export const { changeAllValue, changeField, clearData } =
  formUpdateCategorySlide.actions;
