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
  // const { user } = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (user) {
  //     dispatch(changeEmail(user.data.email));
  //     dispatch(changeName(user.data.name));
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [data, setData] = useState("2023-08-02T14:04:57.697");
  return (
    <div className="px-10 border-l">
      <div className="my-4">
        <h3 className="text-lg text-secondary-3">Edit Your Profile</h3>
      </div>
      <form
        className="p-2 grid grid-cols-2 w-full gap-10"
        action=""
        onSubmit={handleSubmit}
      >
        <Input
          label={"Name"}
          value={dataForm.name}
          onChange={(e) => {
            dispatch(changeName(e.target.value));
          }}
        />
        {/* <Input
          label={"Gender"}
          value={dataForm.gender}
          onChange={(e) => {
            dispatch(changeGender(e.target.value));
          }}
        /> */}
        <Input
          label={"Email"}
          value={dataForm.email}
          onChange={(e) => {
            dispatch(changeEmail(e.target.value));
          }}
        />
        {/* <Input
          label={"Phone"}
          value={dataForm.phone}
          onChange={(e) => {
            dispatch(changePhone(e.target.value));
          }}
        /> */}
        {/* <Input
          label={"DoB"}
          type="date"
          value={dataForm.dob || ""}
          onChange={(e) => {
            dispatch(changeDoB(e.target.value));
          }}
        /> */}

        <div className="col-span-2 flex justify-end">
          <Button secondary normal type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default MyAccount;
