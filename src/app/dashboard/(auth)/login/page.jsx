import Link from "next/link";

function LoginPage() {
  return (
    <div className="mt-8">
      <div class=" container mx-auto w-full max-w-sm">
        <form class="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="my-8">
            <h3 className=" text-3xl font-semibold mb-4">Login</h3>
            <div className="text-slate-400 text-sm ">
              Don’t have an account?{" "}
              {
                <Link
                  href={"/dashboard/register"}
                  className="text-red-500 hover:underline"
                >
                  Get started
                </Link>
              }
            </div>
          </div>
          <div class="relative rounded-md border">
            <input
              type="text"
              id="username"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="username"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-teal-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Username
            </label>
          </div>
          <div class="relative rounded-md border mt-6">
            <input
              type="password"
              id="password"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-teal-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>
          <div className="mt-4 text-right">
            <a
              class=" align-baseline font-bold text-sm text-gray-700 hover:text-gray-500"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          <button
            class="my-4 w-full bg-teal-800 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
