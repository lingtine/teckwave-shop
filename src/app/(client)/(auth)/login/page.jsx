"use client";

import Link from "next/link";
import Input from "~/app/components/input/input";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  clearData,
} from "~/redux/features/auth/actions/form-login-slice";
import { useLoginMutation } from "~/redux/services/authentication/auth-api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Button from "~/app/components/button/button";

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const formData = useSelector((state) => state.formLoginSlice);
  const [login, { isSuccess, isError, error }] = useLoginMutation();
  useEffect(() => {
    document.title = "Login";
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login succeeded");
      dispatch(clearData());
      router.push("/");
    } else if (isError) {
      const { Messages } = error.data;
      toast.error(Messages);
    }
  }, [isSuccess, isError, router, dispatch, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    dispatch(changeField({ field: name, value }));
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
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <Input
              label={"Password"}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* <div className="mt-4 text-right">
            <a
              className=" align-baseline font-bold text-sm text-gray-700 hover:text-gray-500"
              href="#"
            >
              Forgot Password?
            </a>
          </div> */}

          <Button full secondary type="submit" className="my-6">
            Login
          </Button>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
