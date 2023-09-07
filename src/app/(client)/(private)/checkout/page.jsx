"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProductList from "~/app/components/check-out/product-list";
import { formatPrice } from "~/utils/formatPrice";
import { useCreateOrderMutation } from "~/redux/services/orders/order-api";
import DeliveryInformation from "~/app/components/check-out/delivery-information";
import { useGetListProductsByIdQuery } from "~/redux/services/catalog/product-api";
import { useGetAllCouponQuery } from "~/redux/services/discount/coupon-api";
import SelectBox from "~/app/components/select-box/select-box";
import { clearData } from "~/redux/features/cart/cart";
function Checkout() {
  const [order, result] = useCreateOrderMutation();
  const { cart } = useSelector((state) => state.cart);
  const dataForm = useSelector((state) => state.checkoutForm);
  const dispatch = useDispatch();
  const router = useRouter();
  const arrayId = cart?.items.map((item) => item.productId);
  const { data, isSuccess } = useGetListProductsByIdQuery(arrayId, {
    refetchOnFocus: true,
  });
  const { data: couponsData, isSuccess: couponSuccess } =
    useGetAllCouponQuery();
  const [coupon, setCoupon] = useState(null);
  let productsData, totalCount, options;

  if (couponSuccess) {
    options = couponsData.data.map((coupon) => {
      return { ...coupon, label: coupon.name };
    });
  }
  if (isSuccess) {
    productsData = cart?.items.map((item) => {
      const product = data.data.find(
        (product) => item.productId === product.id
      );

      return {
        ...item,
        productName: product.name,
        productImage: product.imageUrl,
        productPrice: product.unitPrice,
      };
    });
    totalCount = productsData?.reduce((accumulator, curr) => {
      let total = curr.quantity * curr.productPrice;
      return accumulator + total;
    }, 0);
  }
  useEffect(() => {
    document.title = "Check out";
  }, []);
  useEffect(() => {
    if (result.isSuccess) {
      toast.success("Order succeeded");
      router.push("/");
      dispatch(clearData());
    }
    if (result.isError) {
      toast.success("Order failed");
    }
  }, [result.isSuccess, result.isError]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (coupon === null) {
      order({
        deliveryInfo: dataForm,
      });
    } else {
      order({
        couponId: coupon.id,
        deliveryInfo: { ...dataForm },
      });
    }
  };
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl">Billing Details</h2>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <div className="flex-1 bg-white rounded-lg">
          <DeliveryInformation />
        </div>
        <div className="p-8 bg-white rounded-xl h-fit w-full max-w-md ">
          <h3 className="text-xl my-8 font-bold text-primary-1">
            Order Summary
          </h3>

          <div>{isSuccess && <ProductList products={productsData} />}</div>
          <div className="">
            <div className="flex justify-between py-4 border-b">
              <h5>Subtotal</h5>
              <p className="font-bold">{formatPrice(totalCount)}</p>
            </div>
            <div className="flex justify-between items-center gap-4 py-4 border-b">
              <h5>Coupon</h5>
              <div className="flex-1 flex justify-end">
                <SelectBox
                  onChange={setCoupon}
                  selected={coupon}
                  options={options}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between my-4 text-xl">
            <h5>Total</h5>
            <p className="font-bold">
              {coupon === null
                ? formatPrice(totalCount)
                : formatPrice(totalCount - coupon.reducedPrice)}
            </p>
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
