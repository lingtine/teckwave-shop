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
    changeField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearData() {
      return initialState;
    },
  },
});

export const { clearData, changeAllValue, changeField } =
  formUpdateBrandSlice.actions;

export default formUpdateBrandSlice;
