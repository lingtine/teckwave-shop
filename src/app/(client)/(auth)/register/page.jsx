"use client";

import Input from "~/app/components/input/input";
import Button from "~/app/components/button/button";
import Link from "next/link";
import {
  changeCode,
  changeConfirmPassword,
  changeEmail,
  changeName,
  changePassword,
  changeShowCode,
} from "~/redux/features/dashboard/form-register-slice";
import { useRegisterMutation } from "~/redux/services/customer/customer-api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useVerifyEmailMutation } from "~/redux/services/customer/customer-api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Register() {
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.registerForm);
  const [verifyEmail, verifyEmailResult] = useVerifyEmailMutation();
  const [register, registerResult] = useRegisterMutation();

  const router = useRouter();
  useEffect(() => {
    if (verifyEmailResult.isSuccess) {
      toast.info("Check your email to get the code");
      dispatch(changeShowCode());
    }
    if (registerResult.isSuccess) {
      toast.success("User Register Successfully");
      router.push("/login");
    }
  }, [verifyEmailResult.isSuccess, registerResult.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, code, name, email, confirmPassword } = dataForm;

    if (password === confirmPassword) {
      if (!dataForm.showCode) {
        verifyEmail(email);
      } else {
        const number = new Number(code);

        register({ password, code: number, name, email });
      }
    }
  };
  return (
    <div className="my-20">
      <div className="container mx-auto flex justify-center">
        <form
          onSubmit={handleSubmit}
          action=""
          className="border px-10 py-5 border-color-text-black rounded-sm min-w-[400px]"
        >
          <div className="my-8">
            <h3 className=" text-3xl font-semibold mb-4">Register</h3>
            <div className="text-slate-400 text-sm ">
              You are ready have an account?{" "}
              {
                <Link href={"/login"} className="text-red-500 hover:underline">
                  Login
                </Link>
              }
            </div>
          </div>
          <div className="my-4">
            <Input
              label={"Name"}
              type="text"
              value={dataForm.name}
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"Email"}
              type="email"
              value={dataForm.email}
              onChange={(e) => {
                dispatch(changeEmail(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"Password"}
              type="password"
              value={dataForm.password}
              onChange={(e) => {
                dispatch(changePassword(e.target.value));
              }}
            />
          </div>
          <div className="my-4">
            <Input
              label={"Confirm Password"}
              type="password"
              value={dataForm.confirmPassword}
              onChange={(e) => {
                dispatch(changeConfirmPassword(e.target.value));
              }}
            />
          </div>
          {dataForm.showCode && (
            <div className="my-4">
              <Input
                label={"Code"}
                type="Number"
                value={dataForm.code}
                onChange={(e) => {
                  dispatch(changeCode(e.target.value));
                }}
              />
            </div>
          )}

          <div className="my-4">
            <Button secondary full type="submit">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
