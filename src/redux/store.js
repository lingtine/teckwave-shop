import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import contactFormReducer from "./features/contact/contact-form-slice";
import formLoginReducer from "./features/dashboard/form-login-slice";
import formRegisterReducer from "./features/dashboard/form-register-slice";
import formLoginAdminReducer from "./features/dashboard/form-login-admin-slice";
import searchReducer from "./features/search/search-slice";
import addProductReducer from "./features/product/addProductForm";
import formUpdateProductReducer from "./features/product/update-product-form-slice";

import { pokemonApi } from "./services/test/pokemon-api";
import { categoryApi } from "./services/catalog/category-api";
import { categoryGroupsApi } from "./services/catalog/category-group-api";
import { brandApi } from "./services/catalog/brand-api";
import { productApi } from "./services/catalog/product-api";

const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    loginForm: formLoginReducer,
    registerForm: formRegisterReducer,
    searchData: searchReducer,
    loginAdminForm: formLoginAdminReducer,
    addProduct: addProductReducer,
    updateProductForm: formUpdateProductReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [categoryGroupsApi.reducerPath]: categoryGroupsApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(categoryApi.middleware)
      .concat(categoryGroupsApi.middleware)
      .concat(brandApi.middleware)
      .concat(productApi.middleware);
  },
});

export { store };
setupListeners(store.dispatch);
