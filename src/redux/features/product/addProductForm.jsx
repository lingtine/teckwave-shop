import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "",
  category: null,
  brand: null,
  price: 0,
  description: "",
  image: null,
};

const addProductFormSlice = createSlice({
  name: "addProductForm",
  initialState,
  reducers: {
    changeProductName(state, action) {
      state.productName = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
    changeBrand(state, action) {
      state.brand = action.payload;
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
  },
});

export default addProductFormSlice.reducer;
export const {
  changeProductName,
  changeCategory,
  changeBrand,
  changePrice,
  changeImage,
  changeDescription,
} = addProductFormSlice.actions;
