import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/categories",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
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
      updateCategory: builder.mutation({
        query: ([id, data]) => {
          return {
            url: `/${id}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      getCategory: builder.query({
        query: (id) => {
          return {
            method: "GET",
            url: `/${id}`,
          };
        },
      }),
      removeCategory: builder.mutation({
        query: (id) => {
          return {
            method: "DELETE",
            url: `${id}`,
          };
        },
      }),
      createCategory: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export const {
  useGetCategoryQuery,
  useFetchCategoriesQuery,
  useCreateCategoryMutation,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
export default categoryApi;
