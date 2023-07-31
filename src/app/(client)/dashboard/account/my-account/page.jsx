import Button from "~/app/components/button/button";

function MyAccount() {
  return (
    <div className="px-10 border-l">
      <div className="my-4">
        <h3 className="text-lg text-secondary-3">Edit Your Profile</h3>
      </div>
      <form className="p-2 grid grid-cols-2 w-full gap-10" action="">
        <div className="min-w-[300px]">
          <label
            htmlFor="username"
            className="text-base font-medium text-color-text-black  bg-white "
          >
            First Name
          </label>
          <input
            type="text"
            id="username"
            className="mt-2 border block px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary "
            placeholder="First Name"
          />
        </div>
        <div className="min-w-[300px]">
          <label
            htmlFor="last-name"
            className="text-base font-medium text-color-text-black  bg-white "
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="mt-2 border block px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary "
            placeholder="Last Name"
          />
        </div>
        <div className="min-w-[300px]">
          <label
            htmlFor="email"
            className="text-base font-medium text-color-text-black  bg-white "
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-2 border block px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary "
            placeholder="Email Address"
          />
        </div>
        <div className="min-w-[300px]">
          <label
            htmlFor="phone"
            className="text-base font-medium text-color-text-black  bg-white "
          >
            Phone number
          </label>
          <input
            type="text"
            id="phone"
            className="mt-2 border block px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary "
            placeholder="Phone number"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <Button secondary large>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MyAccount;
