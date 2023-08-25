import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: customFetchBase,
  tagTypes: ["Post", "Delete", "Update"],
  endpoints(builder) {
    return {
      fetchCategories: builder.query({
        query: (parameters) => {
          return {
            url: "catalogs/categories/",
            method: "GET",
            params: parameters,
          };
        },
        providesTags: ["Post", "Delete", "Update"],
      }),
      fetchCategoriesByQuery: builder.mutation({
        query: (parameters) => {
          return {
            url: "catalogs/categories/",
            method: "GET",
            params: parameters,
          };
        },
        providesTags: ["Post", "Delete", "Update"],
      }),
      updateCategory: builder.mutation({
        query: ([id, data]) => {
          return {
            url: `catalogs/categories/${id}`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["Update"],
      }),
      getCategory: builder.query({
        query: (id) => {
          return {
            url: `catalogs/categories/${id}`,
            method: "GET",
          };
        },
      }),
      removeCategory: builder.mutation({
        query: (id) => {
          return {
            method: "DELETE",
            url: `catalogs/categories/${id}`,
          };
        },
        invalidatesTags: ["Delete"],
      }),
      createCategory: builder.mutation({
        query: (data) => {
          return {
            url: "catalogs/categories/",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["Post"],
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
  useFetchCategoriesByQueryMutation,
} = categoryApi;
export default categoryApi;
