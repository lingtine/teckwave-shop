"use client";

import { useSelector } from "react-redux";

function MyAccount() {
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div className="px-10 border-l">
      <div className="my-4">
        <h3 className="text-lg font-semibold text-secondary-3">Your Profile</h3>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <p>Name: </p>
            <p>{user?.name}</p>
          </div>
          <div className="flex gap-4">
            <p>Email: </p>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
