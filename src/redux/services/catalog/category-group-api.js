import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryGroupsApi = createApi({
  reducerPath: "categoryGroups",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerce.hahaho.me/catalogs/category-groups",
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
    };
  },
});

export const { useFetchCategoryGroupsQuery } = categoryGroupsApi;
export { categoryGroupsApi };
