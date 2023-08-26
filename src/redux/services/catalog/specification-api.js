import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "~/redux/api/customFetchBase";
const specificationApi = createApi({
  reducerPath: "specificationApi",
  baseQuery: customFetchBase,
  tagTypes: ["create", "delete", "update"],
  endpoints(builder) {
    return {
      fetchAllSpecification: builder.query({
        query: (parameters) => {
          return {
            method: "GET",
            url: "catalogs/specifications/",
            params: parameters,
          };
        },
        providesTags: ["create", "delete", "update"],
      }),
      addSpecification: builder.mutation({
        query: (data) => {
          return {
            url: "catalogs/specifications/",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["create"],
      }),
      getSpecification: builder.query({
        query: (specificationId) => {
          return {
            url: `catalogs/specifications/${specificationId}`,
            method: "GET",
          };
        },
      }),
      updateSpecification: builder.mutation({
        query: ([specificationId, data]) => {
          return {
            url: `catalogs/specifications/${specificationId}`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["update"],
      }),
      deleteSpecification: builder.mutation({
        query: (specificationId) => {
          return {
            url: `catalogs/specifications/${specificationId}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["update"],
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
