"use client";
import { useGetDiscountEventQuery } from "~/redux/services/discount/discount-event-api";
import { useParams } from "next/navigation";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import DiscountInformation from "~/app/components/discount-detail/discount-detail-information";

import CouponData from "~/app/components/discount-detail/coupon-data";
function discountDetail() {
  const { discountId } = useParams();
  const {
    currentData: data,
    isFetching,
    isSuccess,
  } = useGetDiscountEventQuery(discountId, { refetchOnMountOrArgChange: true });

  let content;

  if (isFetching) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50"></Spinner>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div>
        <h2 className="text-2xl font-semibold my-4 uppercase">
          Discount event detail
        </h2>

        <div className="max-w-[500px]">
          <DiscountInformation data={data.data} />
        </div>

        <div className="my-6">
          <CouponData data={data.data.coupons}></CouponData>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default discountDetail;
