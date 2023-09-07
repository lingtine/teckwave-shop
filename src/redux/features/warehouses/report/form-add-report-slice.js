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
    changeFrom(state, action) {
      state.from = action.payload;
    },
    changeTo(state, action) {
      state.to = action.payload;
    },
    changeReportType(state, action) {
      state.reportType = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeSupplier(state, action) {
      state.supplier = action.payload;
    },
    changeAddProduct(state, action) {
      state.products.push(action.payload);
    },
    changeRemoveProduct(state, action) {
      const dataUpdate = state.products.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.products = dataUpdate;
    },
    changeQuantity(state, action) {
      const updateArray = state.products.map((product) => {
        return product.id === action.payload.id ? action.payload : product;
      });

      state.products = updateArray;
    },
  },
});

export const {
  changeDescription,
  changeFrom,
  changeReportType,
  changeSupplier,
  changeTo,
  changeAddProduct,
  changeQuantity,
  clearData,
  changeRemoveProduct,
} = formAddReportSlice.actions;

export default formAddReportSlice;
