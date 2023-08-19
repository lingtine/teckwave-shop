"use client";
import Input from "~/app/components/input/input";
import Button from "~/app/components/button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserName,
  changePassword,
} from "~/redux/features/dashboard/form-login-admin-slice";

import { useLoginMutation } from "~/redux/services/authentication/auth-api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
function LoginAdmin() {
  const dispatch = useDispatch();
  const loginAdmin = useSelector((state) => state.loginAdminForm);
  const { user } = useSelector((state) => state.user);

  const [login, { isLoading, isSuccess, data }] = useLoginMutation();
  const router = useRouter();
  let jwt;
  useEffect(() => {
    if (isSuccess) {
      jwt = jwtDecode(data.accessToken);
      if (jwt.role === "Employee") {
        toast.success("Đăng nhập thành công");
        router.push("/dashboard");
      } else if (jwt.role === "Customer") {
        toast.error("Đây không phải là tài khoảng Admin");
      }
    }
  }, [isSuccess]);
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: loginAdmin.username,
      password: loginAdmin.password,
    });
  };
  return (
    <div>
      <div className="">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="flex flex-col p-10 border border-secondary-3 rounded-md min-w-[400px]">
            <h1 className="text-2xl font-bold my-8">Login to Admin</h1>
            <form onSubmit={handleSubmit}>
              <div className="my-4">
                <Input
                  label={"email"}
                  value={loginAdmin.username}
                  onChange={(e) => {
                    dispatch(changeUserName(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <Input
                  label={"Password"}
                  value={loginAdmin.password}
                  onChange={(e) => {
                    dispatch(changePassword(e.target.value));
                  }}
                />
              </div>
              <div>
                <Button secondary full type={"submit"}>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
