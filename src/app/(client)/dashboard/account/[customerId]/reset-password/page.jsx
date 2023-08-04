import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";

function ResetPassword() {
  return (
    <div className="px-6 ">
      <div>
        <h1 className="text-xl font-bold uppercase text-primary-1">
          Change Password
        </h1>
        <form className="py-8 max-w-[400px]">
          <ul className="">
            <li className="my-4">
              <Input label={"Old Password"} required />
            </li>
            <li className="my-4">
              <Input label={"New Password"} required />
            </li>
            <li className="my-4">
              <Input label={"Comfit Password"} required />
            </li>
            <li className="flex justify-end">
              <Button secondary small>
                Change Password
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
