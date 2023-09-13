import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  image: null,
};

const formAddBrandSlice = createSlice({
  name: "formAddBrandSlice",
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

export default formAddBrandSlice;
export const { changeField, clearData } = formAddBrandSlice.actions;
