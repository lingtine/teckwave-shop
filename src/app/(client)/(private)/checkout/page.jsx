"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProductList from "~/app/components/check-out/product-list";
import Coupons from "~/app/components/check-out/coupons";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import SelectBox from "~/app/components/select-box/select-box";
import {
  changeStreetNumber,
  changeCity,
  changeDistrict,
  changeEmail,
  changeNote,
  changePhoneNumber,
  changeStreet,
  changeWard,
  changeCouponId,
  changeFullName,
} from "~/redux/features/dashboard/form-delivery-slice";
import { useCreateOrderMutation } from "~/redux/services/orders/order-api";
function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [order, { isError, isLoading, isSuccess }] = useCreateOrderMutation();
  const { user } = useSelector((state) => state.user);
  const dataForm = useSelector((state) => state.deliveryForm);

  useEffect(() => {
    if (isSuccess) {
      toast.success("OrderSuccess");
      router.push("/");
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    //order(data);
  };
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl">Billing Details</h2>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <div className=" flex-1 bg-white py-8 rounded-lg">
          <div>
            <h3 className="my-8 text-xl font-bold ">Delivery Information</h3>
            <div className="">
              <div className="my-4">
                <Input
                  label={"Email"}
                  value={dataForm.email}
                  onChange={(e) => {
                    dispatch(changeEmail(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <Input
                  label={"FullName"}
                  value={dataForm.fullName}
                  onChange={(e) => {
                    dispatch(changeFullName(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <Input
                  label={"PhoneNumber"}
                  value={dataForm.phoneNumber}
                  onChange={(e) => {
                    dispatch(changePhoneNumber(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <InputTextArea
                  label={"Note"}
                  value={dataForm.note}
                  onChange={(e) => {
                    dispatch(changeNote(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="my-8 text-xl font-bold ">Delivery Address</h3>
            <div className="">
              <div className="my-4">
                <Input
                  label={"City"}
                  value={dataForm.city}
                  onChange={(e) => {
                    dispatch(changeCity(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <Input
                  label={"District"}
                  value={dataForm.district}
                  onChange={(e) => {
                    dispatch(changeDistrict(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <Input
                  label={"Ward"}
                  value={dataForm.ward}
                  onChange={(e) => {
                    dispatch(changeWard(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <Input
                  label={"Street"}
                  value={dataForm.stress}
                  onChange={(e) => {
                    dispatch(changeStreet(e.target.value));
                  }}
                />
              </div>
              <div className="my-4">
                <Input
                  label={"StreetNumber"}
                  value={dataForm.stressNumber}
                  onChange={(e) => {
                    dispatch(changeStreetNumber(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-xl h-fit w-full max-w-md ">
          <h3 className="text-xl my-8 font-bold text-primary-1">
            Order Summary
          </h3>
          {/* <ProductList products={carts} /> */}
          <div>
            <Coupons />
          </div>
          <div className="">
            <div className="flex justify-between py-4 border-b">
              <h5>Subtotal</h5>
              <p className="font-bold">30000</p>
            </div>
            <div className="flex justify-between py-4 border-b">
              <h5>Shipping</h5>
              <p className="font-bold">30000</p>
            </div>
          </div>
          <div className="flex justify-between my-4 text-xl">
            <h5>Total</h5>
            <p className="font-bold">30000</p>
          </div>
          <button
            type="submit"
            className="block text-center py-3 border bg-secondary-3 text-white w-full rounded hover:opacity-90"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
