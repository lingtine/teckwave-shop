import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { Mutex } from "async-mutex";

const baseUrl = `ttp://ecommerce.quochao.id.vn/auths/auth`;

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
});

// const customFetchBase = async (args, api, extraOptions) => {
//   await mutex.waitForUnlock();
//   let result = await baseQuery(args, api, extraOptions);
//   if (result.error.data.message === "Token invalid") {
//   }
// };
