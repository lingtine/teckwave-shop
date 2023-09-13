import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  showResult: false,
};

const searchSlice = createSlice({
  name: "searchProductSlice",
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
export default searchSlice;
export const { changeField, clearData } = searchSlice.actions;
