import Input from "~/app/components/input/input";
import Button from "~/app/components/button/button";
function LoginAdmin() {
  return (
    <div>
      <div className="">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="flex flex-col p-10 border border-secondary-3 rounded-md min-w-[400px]">
            <h1 className="text-2xl font-bold my-8">Login to Admin</h1>
            <form>
              <div className="my-4">
                <Input label={"User"} />
              </div>
              <div className="my-4">
                <Input label={"Password"} />
              </div>
              <div>
                <Button secondary full>
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
