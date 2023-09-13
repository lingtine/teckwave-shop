import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  categoryGroup: null,
  category: null,
  brand: null,
  price: 0,
  description: "",
  image: null,
};

const formAddProductFormSlice = createSlice({
  name: "formAddProductFormSlice",
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

export default formAddProductFormSlice;
export const { changeField, clearData } = formAddProductFormSlice.actions;
