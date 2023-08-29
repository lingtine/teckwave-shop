"use client";
import { useGetCouponQuery } from "~/redux/services/discount/coupon-api";
import { useParams } from "next/navigation";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import CouponDetailInformation from "~/app/components/discount-detail/coupon-detail-information";
function CouponDetail() {
  const { couponId } = useParams();
  const { data, isFetching, isSuccess } = useGetCouponQuery(couponId, {
    refetchOnMountOrArgChange: true,
  });
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
        <h2 className="text-2xl font-semibold my-4 uppercase">Coupon detail</h2>

        <div className="max-w-[500px]">
          <CouponDetailInformation data={data.data} />
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default CouponDetail;
