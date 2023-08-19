"use client";

import Link from "next/link";
import Input from "~/app/components/input/input";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmail,
  changePassword,
} from "~/redux/features/dashboard/form-login-slice";
import { useLoginMutation } from "~/redux/services/authentication/auth-api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state) => state.loginForm);
  const [login, { isSuccess }] = useLoginMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Success");
      router.push("/");
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <div className="my-20 ">
      <div className=" container mx-auto w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="my-8">
            <h3 className=" text-3xl font-semibold mb-4">Login</h3>
            <div className="text-slate-400 text-sm ">
              Don’t have an account?{" "}
              {
                <Link
                  href={"/register"}
                  className="text-red-500 hover:underline"
                >
                  Get started
                </Link>
              }
            </div>
          </div>
          <div className="my-2">
            <Input
              label={"Email"}
              required
              value={formData.email}
              onChange={(e) => {
                dispatch(changeEmail(e.target.value));
              }}
            />
          </div>
          <div className="my-2">
            <Input
              label={"Password"}
              required
              value={formData.password}
              onChange={(e) => {
                dispatch(changePassword(e.target.value));
              }}
            />
          </div>

          <div className="mt-4 text-right">
            <a
              className=" align-baseline font-bold text-sm text-gray-700 hover:text-gray-500"
              href="#"
            >
              Forgot Password?
            </a>
          </div>

          <button
            className="my-4 w-full bg-secondary-3 hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
