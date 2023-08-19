import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const specificationApi = createApi({
  reducerPath: "specificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ecommerce.quochao.id.vn/catalogs/specifications",
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
      fetchAllSpecification: builder.query({
        query: (parameters) => {
          return { method: "GET", url: "/", params: parameters };
        },
      }),
      addSpecification: builder.mutation({
        query: (data) => {
          return {
            url: "/",
            method: "POST",
            body: data,
          };
        },
      }),
      getSpecification: builder.query({
        query: (specificationId) => {
          return {
            url: `/${specificationId}`,
            method: "GET",
          };
        },
      }),
      updateSpecification: builder.mutation({
        query: ([specificationId, data]) => {
          return {
            url: `/${specificationId}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      deleteSpecification: builder.mutation({
        query: (specificationId) => {
          return {
            url: `/${specificationId}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useAddSpecificationMutation,
  useDeleteSpecificationMutation,
  useGetSpecificationQuery,
  useUpdateSpecificationMutation,
  useFetchAllSpecificationQuery,
} = specificationApi;
export default specificationApi;
