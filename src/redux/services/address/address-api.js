import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const addressApi = createApi({
  reducerPath: "address",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://provinces.open-api.vn/api",
  }),
  endpoints(builder) {
    return {
      getAllCity: builder.query({
        query: () => {
          return {
            url: "/p",
          };
        },
      }),
    };
  },
});

export { addressApi };

export const { useGetAllCityQuery } = addressApi;
