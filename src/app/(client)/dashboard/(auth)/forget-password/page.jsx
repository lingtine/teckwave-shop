import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";

function ForgetPassword() {
  return (
    <div className="flex justify-center my-10">
      <div className="p-10 border border-primary-1 rounded-md">
        <h1 className="text-xl font-semibold my-4 min-w-[400px] ">
          Forget Password
        </h1>
        <form action="">
          <div className="my-2">
            <Input label={"Email"} />
          </div>
          <div className="my-2">
            <Button secondary full>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
