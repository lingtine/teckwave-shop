import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  email: "",
  address: "",
  fax: "",
  hotLine: "",
  warehouseType: "",
};

const formAddWarehouseSlice = createSlice({
  name: "formAddWarehouseSlice",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeAddress(state, action) {
      state.address = action.payload;
    },
    changFax(state, action) {
      state.fax = action.payload;
    },
    changeHotLine(state, action) {
      state.hotLine = action.payload;
    },
    changeWarehouseType(state, action) {
      state.warehouseType = action.payload;
    },
  },
});

export const {
  changFax,
  changeAddress,
  changeDescription,
  changeEmail,
  changeHotLine,
  changeName,
  changeWarehouseType,
} = formAddWarehouseSlice.actions;
export default formAddWarehouseSlice;
