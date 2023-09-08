"use client";
import Input from "~/app/components/input/input";
import Button from "~/app/components/button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserName,
  changePassword,
} from "~/redux/features/dashboard/form-login-admin-slice";
import Image from "next/image";
import { useLoginMutation } from "~/redux/services/authentication/auth-api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
import { useLogoutMutation } from "~/redux/services/authentication/auth-api";
function LoginAdmin() {
  const dispatch = useDispatch();
  const loginAdmin = useSelector((state) => state.loginAdminForm);
  const { user } = useSelector((state) => state.user);
  const [logout] = useLogoutMutation();
  useEffect(() => {
    document.title = "Login Admin";
  }, []);
  const [login, { isLoading, isError, isSuccess, data, error }] =
    useLoginMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      const { accessToken } = data;
      const jwt = jwtDecode(accessToken);
      if (Array.isArray(jwt.role)) {
        const found = jwt.role.find((element) => element === "Employee");
        if (found) {
          router.push("/dashboard/orders");
          toast.success("Login succeeded");
        }
      } else if (jwt.role === "Customer") {
        toast.error("You are not the admin");
        logout();
      }
    }
    if (isError) {
      const { Messages } = error.data;
      toast.error(Messages);
    }
  }, [isSuccess, isError, error, data, router, logout]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: loginAdmin.username,
      password: loginAdmin.password,
    });
  };
  return (
    <div className="flex min-h-screen">
      <div className="bg-[#80B1F3]  min-w-[50%] flex items-center justify-center">
        <Image
          src={"/images/login-admin/admin-2.jpg"}
          alt="admin"
          width={500}
          height={500}
        />
      </div>
      <div className="min-w-[50%] flex justify-center items-center">
        <div className="flex flex-col p-10 border border-secondary-3 shadow-lg  rounded-md min-w-[400px]">
          <h1 className="text-2xl text-center font-bold my-8">
            Login to Admin
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Input
                label={"Email"}
                value={loginAdmin.username}
                onChange={(e) => {
                  dispatch(changeUserName(e.target.value));
                }}
              />
            </div>
            <div>
              <Input
                label={"Password"}
                type="password"
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
  );
}

export default LoginAdmin;
