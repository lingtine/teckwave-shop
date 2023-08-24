import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import contactFormReducer from "./features/contact/contact-form-slice";
import formLoginReducer from "./features/dashboard/form-login-slice";
import formRegisterReducer from "./features/dashboard/form-register-slice";
import formLoginAdminReducer from "./features/dashboard/form-login-admin-slice";
import searchReducer from "./features/search/search-slice";
import addProductReducer from "./features/product/addProductForm";
import formUpdateProductReducer from "./features/product/update-product-form-slice";
import formEditProfileReducer from "./features/dashboard/form-edit-profile-slice";
import formAddAddressReducer from "./features/dashboard/form-add-address-slice";
import formEditAddressReducer from "./features/dashboard/form-edit-address-slice";
import formDeliveryReducer from "./features/dashboard/form-delivery-slice";
import userReducer from "./features/auth/user-slice";
import checkoutReducer from "./features/check-out/checkout-slice";
import authReducer from "./features/auth/auth-slice";
import cartReducer from "./features/cart/cart";
import formAddBrandSlice from "./features/dashboard/brand/form-add-brand-slice";
import formUpdateBrandSlice from "./features/dashboard/brand/form-update-brand-slice";

import formAddCategorySlice from "./features/product/category/form-add-category-slice";
import formEditCategorySlice from "./features/product/category/form-edit-category-slice";
import formAddCategoryGroup from "./features/product/category-group/form-add-category-group-slice";
import formEditCategoryGroup from "./features/product/category-group/form-edit-category-group-slice";
import formAddSpecification from "./features/product/specification/form-add-specification-slice";
import formEditSpecification from "./features/product/specification/form-edit-specification-slice";
import formAddReportSlice from "./features/warehouses/report/form-add-report-slice";
import formAddSupplierSlice from "./features/warehouses/supplier/form-add-supplier-slice";
import formAddWarehouseSlice from "./features/warehouses/warehouse/form-add-warehouse-slice";
import wishListSlice from "./features/auth/wish-list-slice";
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
    contactForm: contactFormReducer,
    loginForm: formLoginReducer,
    registerForm: formRegisterReducer,
    searchData: searchReducer,
    loginAdminForm: formLoginAdminReducer,
    addProduct: addProductReducer,
    updateProductForm: formUpdateProductReducer,
    editProfileForm: formEditProfileReducer,
    addAddressForm: formAddAddressReducer,
    editAddressForm: formEditAddressReducer,
    checkoutForm: checkoutReducer,
    user: userReducer,
    authSlice: authReducer,
    deliveryForm: formDeliveryReducer,
    cart: cartReducer,
    [formAddBrandSlice.name]: formAddBrandSlice.reducer,
    [formUpdateBrandSlice.name]: formUpdateBrandSlice.reducer,
    [formAddCategorySlice.name]: formAddCategorySlice.reducer,
    [formEditCategorySlice.name]: formEditCategorySlice.reducer,
    [formAddCategoryGroup.name]: formAddCategoryGroup.reducer,
    [formEditCategoryGroup.name]: formEditCategoryGroup.reducer,
    [formAddSpecification.name]: formAddSpecification.reducer,
    [formEditSpecification.name]: formEditSpecification.reducer,
    [formAddSupplierSlice.name]: formAddSupplierSlice.reducer,
    [formAddWarehouseSlice.name]: formAddWarehouseSlice.reducer,
    [formAddReportSlice.name]: formAddReportSlice.reducer,
    [wishListSlice.name]: wishListSlice.reducer,

    //api
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
