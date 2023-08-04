import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoryGroupsApi = createApi({
  reducerPath: "categoryGroups",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/category-groups",
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
export default categoryGroupsApi;
