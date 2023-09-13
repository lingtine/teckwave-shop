import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  formUpdateAddressSlice,
  formAddAddressSlice,
  formAddBrandSlice,
  formAddCategoryGroupSlice,
  formAddCategorySlice,
  formAddCouponSlice,
  formAddDiscountEventSlice,
  formAddProductFormSlice,
  formAddReportSlice,
  formAddSpecificationProductSlice,
  formUpdateProductFormSlice,
  formAddSpecificationSlice,
  formAddSupplierSlice,
  formAddWarehouseSlice,
  formCheckoutSlice,
  formContactSlice,
  formDeliveryFormSlice,
  formLoginAdminSlice,
  formLoginSlice,
  formRegisterSlice,
  formUpdateBrandSlice,
  formUpdateCategoryGroupSlice,
  formUpdateCategorySlide,
  formUpdateSpecificationSlice,
  searchSlice,
  authSlice,
  cartSLice,
  userSlide,
  wishListSlice,
} from "./features";

import {
  pokemonApi,
  addressApi,
  brandApi,
  categoryApi,
  categoryGroupsApi,
  customerApi,
  productApi,
  couponApi,
  orderApi,
  authApi,
  cartApi,
  employeeApi,
  reviewApi,
  specificationApi,
  discountEventApi,
  orderReportApi,
  productWarehouseApi,
  reportApi,
  stockApi,
  supplierApi,
  warehouseApi,
} from "./services";

const store = configureStore({
  reducer: {
    // slice
    [formUpdateProductFormSlice.name]: formUpdateProductFormSlice.reducer,

    [formUpdateAddressSlice.name]: formUpdateAddressSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [cartSLice.name]: cartSLice.reducer,
    [userSlide.name]: userSlide.reducer,
    [wishListSlice.name]: wishListSlice.reducer,
    [formAddAddressSlice.name]: formAddAddressSlice.reducer,
    [formAddBrandSlice.name]: formAddBrandSlice.reducer,
    [formAddCategoryGroupSlice.name]: formAddCategoryGroupSlice.reducer,
    [formAddCategorySlice.name]: formAddCategorySlice.reducer,
    [formAddCouponSlice.name]: formAddCouponSlice.reducer,
    [formAddDiscountEventSlice.name]: formAddDiscountEventSlice.reducer,
    [formAddProductFormSlice.name]: formAddProductFormSlice.reducer,
    [formAddReportSlice.name]: formAddReportSlice.reducer,
    [formAddSpecificationProductSlice.name]:
      formAddSpecificationProductSlice.reducer,
    [formAddSpecificationSlice.name]: formAddSpecificationSlice.reducer,
    [formAddSupplierSlice.name]: formAddSupplierSlice.reducer,
    [formAddWarehouseSlice.name]: formAddWarehouseSlice.reducer,
    [formCheckoutSlice.name]: formCheckoutSlice.reducer,
    [formContactSlice.name]: formContactSlice.reducer,
    [formDeliveryFormSlice.name]: formDeliveryFormSlice.reducer,
    [formLoginAdminSlice.name]: formLoginAdminSlice.reducer,
    [formLoginSlice.name]: formLoginSlice.reducer,
    [formRegisterSlice.name]: formRegisterSlice.reducer,
    [formUpdateBrandSlice.name]: formUpdateBrandSlice.reducer,
    [formUpdateCategoryGroupSlice.name]: formUpdateCategoryGroupSlice.reducer,
    [formUpdateCategorySlide.name]: formUpdateCategorySlide.reducer,
    [formUpdateSpecificationSlice.name]: formUpdateSpecificationSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,

    //RTK api
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,

    [specificationApi.reducerPath]: specificationApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [categoryGroupsApi.reducerPath]: categoryGroupsApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [couponApi.reducerPath]: couponApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,

    [orderReportApi.reducerPath]: orderReportApi.reducer,
    [productWarehouseApi.reducerPath]: productWarehouseApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    [supplierApi.reducerPath]: supplierApi.reducer,
    [warehouseApi.reducerPath]: warehouseApi.reducer,

    [discountEventApi.reducerPath]: discountEventApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(pokemonApi.middleware)
      .concat(categoryApi.middleware)
      .concat(categoryGroupsApi.middleware)
      .concat(brandApi.middleware)
      .concat(productApi.middleware)
      .concat(addressApi.middleware)
      .concat(customerApi.middleware)
      .concat(cartApi.middleware)
      .concat(couponApi.middleware)
      .concat(orderApi.middleware)
      .concat(authApi.middleware)
      .concat(employeeApi.middleware)
      .concat(specificationApi.middleware)
      .concat(discountEventApi.middleware)
      .concat(orderReportApi.middleware)
      .concat(warehouseApi.middleware)
      .concat(supplierApi.middleware)
      .concat(stockApi.middleware)
      .concat(reportApi.middleware)
      .concat(productWarehouseApi.middleware)
      .concat(reviewApi.middleware);
  },
});

export { store };
setupListeners(store.dispatch);
