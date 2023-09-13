"use client";

import Input from "~/app/components/input/input";
import Button from "~/app/components/button/button";
import Link from "next/link";
import {
  changeField,
  clearData,
} from "~/redux/features/auth/actions/form-register-slice";
import { useRegisterMutation } from "~/redux/services/customer/customer-api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useVerifyEmailMutation } from "~/redux/services/customer/customer-api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Register() {
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formRegisterSlice);
  const [verifyEmail, verifyEmailResult] = useVerifyEmailMutation();
  const [register, registerResult] = useRegisterMutation();

  useEffect(() => {
    document.title = "Register";
  }, []);
  const router = useRouter();
  useEffect(() => {
    if (verifyEmailResult.isSuccess) {
      toast.info("Check your email to get the code");
      dispatch(changeField({ filed: showCode, value: true }));
    } else if (verifyEmailResult.isError) {
      toast.error("Errol");
    }
  }, [verifyEmailResult.isSuccess, verifyEmailResult.isError, dispatch]);

  useEffect(() => {
    if (registerResult.isSuccess) {
      toast.success("User Register succeeded");
      router.push("/login");
      dispatch(clearData());
    } else if (registerResult.isError) {
      toast.error("The code is incorrect");
    }
  }, [registerResult.isSuccess, registerResult.isError, dispatch, router]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, code, name, email, confirmPassword } = dataForm;

    if (password === confirmPassword) {
      if (!dataForm.showCode) {
        verifyEmail({ email: email });
      } else {
        const number = new Number(code);

        register({ password, code: number, name, email });
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    dispatch(changeField({ field: name, value }));
  };

  return (
    <div className="container mx-auto flex justify-center my-16">
      <form
        onSubmit={handleSubmit}
        action=""
        className="border px-10 py-5 min-w-[400px]  shadow-xl rounded-xl"
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
            name="name"
            value={dataForm.name}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <Input
            label={"Email"}
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <Input
            label={"Password"}
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <Input
            label={"Confirm Password"}
            type="password"
            name="confirmPassword"
            value={dataForm.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {dataForm.showCode && (
          <div className="my-4">
            <Input
              label={"Code"}
              type="Number"
              name="code"
              value={dataForm.code}
              onChange={handleChange}
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
  );
}

export default Register;
