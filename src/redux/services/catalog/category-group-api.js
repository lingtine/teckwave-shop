import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const categoryGroupsApi = createApi({
  reducerPath: "categoryGroups",
  baseQuery: customFetchBase,
  tagTypes: ["Post", "Delete", "Update"],

  endpoints(builder) {
    return {
      fetchCategoryGroups: builder.query({
        query: () => {
          return {
            url: "catalogs/category-groups/",
            method: "GET",
          };
        },
        providesTags: ["Post", "Delete", "Update"],
      }),
      addCategoryGroup: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: "catalogs/category-groups/",
            body: data,
          };
        },
        invalidatesTags: ["Post"],
      }),
      updateCategoryGroup: builder.mutation({
        query: ([id, data]) => {
          return {
            method: "PUT",
            url: `catalogs/category-groups/${id}`,
            body: data,
          };
        },
        invalidatesTags: ["Update"],
      }),
      removeCategoryGroup: builder.mutation({
        query: (id) => {
          return {
            method: "DELETE",
            url: `catalogs/category-groups/${id}`,
          };
        },
        invalidatesTags: ["Delete"],
      }),
      getCategoryGroup: builder.query({
        query: (id) => {
          return {
            method: "GET",
            url: `catalogs/category-groups/${id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchCategoryGroupsQuery,
  useAddCategoryGroupMutation,
  useGetCategoryGroupQuery,
  useUpdateCategoryGroupMutation,
  useRemoveCategoryGroupMutation,
} = categoryGroupsApi;
export default categoryGroupsApi;
