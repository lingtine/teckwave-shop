import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  description: "",
  image: null,
};

const formUpdateBrandSlice = createSlice({
  name: "formUpdateBrandSlice",
  initialState,
  reducers: {
    changeAllValue(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeImage(state, action) {
      state.image = action.payload;
    },
    clearData() {
      return initialState;
    },
  },
});

export const {
  clearData,
  changeAllValue,
  changeDescription,
  changeName,
  changeImage,
} = formUpdateBrandSlice.actions;

export default formUpdateBrandSlice;
