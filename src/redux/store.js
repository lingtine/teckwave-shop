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

import { pokemonApi } from "./services/test/pokemon-api";
import { categoryApi } from "./services/catalog/category-api";
import { categoryGroupsApi } from "./services/catalog/category-group-api";
import { brandApi } from "./services/catalog/brand-api";
import { productApi } from "./services/catalog/product-api";
import { customerApi } from "./services/customer/customer-api";
import { addressApi } from "./services/address/address-api";

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

    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [categoryGroupsApi.reducerPath]: categoryGroupsApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(categoryApi.middleware)
      .concat(categoryGroupsApi.middleware)
      .concat(brandApi.middleware)
      .concat(productApi.middleware)
      .concat(addressApi.middleware)
      .concat(customerApi.middleware);
  },
});

export { store };
setupListeners(store.dispatch);
