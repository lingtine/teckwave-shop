"use client";
import { useState, useEffect } from "react";
import InputQuantity from "~/app/components/input-quanlity/input-quanlity";
import useDebounce from "~/hooks/use-debounce";
import {
  useRemoveProductMutation,
  useUpdateProductQualityMutation,
} from "~/redux/services/orders/cart-api";

function CartItemQuantity({ data }) {
  const [value, setValue] = useState(data.quantity);
  const debounceValue = useDebounce(value, 5000);
  const [remove, result] = useRemoveProductMutation();
  const [updateQuantity, resultUpdate] = useUpdateProductQualityMutation();

  useEffect(() => {
    if (debounceValue === 0) {
      remove(data.productId);
    } else {
      updateQuantity([
        {
          productId: data.productId,
          productName: data.productName,
          quantity: debounceValue,
          unitPrice: data.productPrice,
        },
      ]);
    }
  }, [
    debounceValue,
    remove,
    updateQuantity,
    data.productId,
    data.productName,
    data.productPrice,
  ]);
  return (
    <div>
      <InputQuantity onChange={setValue} maxQuantity={8} quantity={value} />
    </div>
  );
}

export default CartItemQuantity;
