import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  showResult: false,
};

const searchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    changeShowResult(state, action) {
      state.showResult = action.payload;
    },
    removeSearchValue(state) {
      state.searchValue = "";
    },
  },
});
export default searchSlice.reducer;
export const { changeSearchValue, changeShowResult, removeSearchValue } =
  searchSlice.actions;
