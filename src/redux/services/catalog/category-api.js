import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerce.hahaho.me/catalogs/categories",
  }),
  endpoints(builder) {
    return {
      fetchCategories: builder.query({
        query: () => {
          return {
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCategoriesQuery } = categoryApi;
export { categoryApi };
