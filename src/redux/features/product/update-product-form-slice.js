import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  productName: "",
  price: 0,
  description: "",
  image: null,
};

const updateProductFormSlice = createSlice({
  name: "updateProductForm",
  initialState,
  reducers: {
    changeAllValue(state, action) {
      state.id = action.payload.id;
      state.productName = action.payload.productName;
      state.price = action.payload.price;
      state.description = action.payload.description;
    },
    changeProductName(state, action) {
      state.productName = action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload;
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
  changeAllValue,
  changeDescription,
  changePrice,
  changeProductName,
  changeImage,
  clearData,
} = updateProductFormSlice.actions;

export default updateProductFormSlice.reducer;
