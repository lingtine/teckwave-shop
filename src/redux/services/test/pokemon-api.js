import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const pokemonApi = createApi({
  reducerPath: "pokemon",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints(builder) {
    return {
      fetchPokemon: builder.query({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchPokemonQuery } = pokemonApi;
export default pokemonApi;
