"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import { useEffect, useState } from "react";
import {
  changeEmail,
  changeName,
  changePhone,
} from "~/redux/features/dashboard/form-edit-profile-slice";
import { useDispatch, useSelector } from "react-redux";

function MyAccount() {
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.editProfileForm);
  const { user } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (user) {
  //     dispatch(changeEmail(user.data.email));
  //     dispatch(changeName(user.data.name));
  //   }
  // }, []);

  const [data, setData] = useState("2023-08-02T14:04:57.697");
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
