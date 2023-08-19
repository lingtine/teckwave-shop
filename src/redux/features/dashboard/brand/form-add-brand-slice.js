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
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeImage(state, action) {
      state.image = action.payload;
    },
  },
});

export default formAddBrandSlice;
export const { changeName, changeImage, changeDescription } =
  formAddBrandSlice.actions;
