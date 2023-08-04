import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const brandApi = createApi({
  reducerPath: "brand",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/brands",
  }),
  endpoints(builder) {
    return {
      fetchAllBrands: builder.query({
        query: () => {
          return { method: "GET" };
        },
      }),
    };
  },
});

export const { useFetchAllBrandsQuery } = brandApi;
export default brandApi;
