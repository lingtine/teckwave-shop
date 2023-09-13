import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: null,
  to: null,
  reportType: null,
  description: "",
  supplier: null,
  products: [],
};

const formAddReportSlice = createSlice({
  name: "formAddReportSlice",
  initialState,
  reducers: {
    clearData() {
      return initialState;
    },
    changeField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      const dataUpdate = state.products.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.products = dataUpdate;
    },
    changeQuantityForProduct(state, action) {
      const updateArray = state.products.map((product) => {
        return product.id === action.payload.id ? action.payload : product;
      });

      state.products = updateArray;
    },
  },
});

export const {
  changeField,
  addProduct,
  changeQuantityForProduct,
  removeProduct,
  clearData,
} = formAddReportSlice.actions;

export default formAddReportSlice;
