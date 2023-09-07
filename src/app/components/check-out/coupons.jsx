// "use client";
// import { useGetAllCouponQuery } from "~/redux/services/discount/coupon-api";
// import SelectBox from "../select-box/select-box";
// import { useEffect } from "react";

// function Coupons({ onChange }) {
//   const { data, isSuccess } = useGetAllCouponQuery();
//   let renderSelectBox;

//   const handleChange = (coupon) => {
//     onChange(coupon.id);
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       renderSelectBox = <SelectBox options={[]} onChange={handleChange} />;
//     }
//   }, [isSuccess]);

//   return <div>{renderSelectBox}</div>;
// }

// export default Coupons;
