"use client";

import Link from "next/link";
import Input from "~/app/components/input/input";

import { useSelector, useDispatch } from "react-redux";
import {
  changeFullName,
  changeConfirmPassword,
  changePassword,
  changeEmail,
} from "~/redux/features/dashboard/form-register-slice";
function Register() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.registerForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="my-20">
      <div className=" container mx-auto w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="my-8">
            <h3 className=" text-3xl font-semibold mb-4">Get Started</h3>
            <div className="text-slate-400 text-sm ">
              Already have an account?{" "}
              {
                <Link
                  href={"/dashboard/login"}
                  className="text-red-500 hover:underline"
                >
                  Login
                </Link>
              }
            </div>
          </div>
          <div className="my-2">
            <Input
              label={"Full Name"}
              required
              value={formData.fullName}
              onChange={(e) => {
                dispatch(changeFullName(e.target.value));
              }}
            />
          </div>
          <div className="my-2">
            <Input
              label={"Email Address"}
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
          <div className="my-2">
            <Input
              label={"Confirm Password"}
              required
              value={formData.changeConfirmPassword}
              onChange={(e) => {
                dispatch(changeConfirmPassword(e.target.value));
              }}
            />
          </div>

          <button
            type="submit"
            className="my-4 w-full bg-secondary-3 hover:opacity-90 text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>

          <span className="text-xs text-center text-gray-500">
            <p>I agree to Terms of Service and Privacy Policy.</p>
          </span>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Register;
