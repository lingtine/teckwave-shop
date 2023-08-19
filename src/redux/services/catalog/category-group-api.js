import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryGroupsApi = createApi({
  reducerPath: "categoryGroups",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/category-groups",
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
      fetchCategoryGroups: builder.query({
        query: () => {
          return {
            method: "GET",
          };
        },
      }),
      addCategoryGroup: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            body: data,
          };
        },
      }),
      updateCategoryGroup: builder.mutation({
        query: ([id, data]) => {
          return {
            method: "PUT",
            url: `/${id}`,
            body: data,
          };
        },
      }),
      removeCategoryGroup: builder.mutation({
        query: (id) => {
          return {
            method: "DELETE",
            url: `/${id}`,
          };
        },
      }),
      getCategoryGroup: builder.query({
        query: (id) => {
          return {
            method: "GET",
            url: `/${id}`,
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
