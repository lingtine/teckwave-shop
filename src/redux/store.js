import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import contactFormReducer from "./features/contact/contact-form-slice";
import formLoginReducer from "./features/dashboard/form-login-slice";
import formRegisterReducer from "./features/dashboard/form-register-slice";
import { pokemonApi } from "./services/test/pokemon-api";
import { categoryApi } from "./services/catalog/category-api";
import { categoryGroupsApi } from "./services/catalog/category-group-api";
const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    loginForm: formLoginReducer,
    registerForm: formRegisterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [categoryGroupsApi.reducerPath]: categoryGroupsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(categoryApi.middleware)
      .concat(categoryGroupsApi.middleware);
  },
});

export { store };
setupListeners(store.dispatch);
