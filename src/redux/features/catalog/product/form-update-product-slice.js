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

const formUpdateProductFormSlice = createSlice({
  name: "formUpdateProductFormSlice",
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

export default formUpdateProductFormSlice;
export const { changeField, clearData } = formUpdateProductFormSlice.actions;
