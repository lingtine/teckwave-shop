import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { logout as logoutAuth } from "../features/auth/auth-slice";
import { logout } from "../features/auth/user-slice";
import { getCookie } from "cookies-next";
import { Mutex } from "async-mutex";
import { changeAuth } from "../features/auth/auth-slice";
const baseUrl = `http://ecommerce.quochao.id.vn/`;

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authSlice.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);

      return headers;
    }
  },
});

const customFetchBase = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (
    result.error &&
    result.error.status === 401 &&
    result.error.data === null
  ) {
    console.log(result.error);
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshToken = getCookie("refreshToken");
        const refreshResult = await baseQuery(
          {
            url: "auths/auth/refresh-token",
            method: "POST",
            body: { refreshToken: refreshToken },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          // Retry the initial query\
          await api.dispatch(changeAuth(refreshResult.data.data));
          result = await baseQuery(args, api, extraOptions);
        } else {
          console.log(refreshResult.data);
          api.dispatch(logout());
          api.dispatch(logoutAuth());
        }
      } finally {
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
export default customFetchBase;
