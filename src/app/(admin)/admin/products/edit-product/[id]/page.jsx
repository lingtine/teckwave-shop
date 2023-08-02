"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputMultipleImage from "~/app/components/input/InputMultipleImage";

import { useParams, useRouter } from "next/navigation";
import {
  changeProductName,
  changeAllValue,
  changeDescription,
  changePrice,
} from "~/redux/features/product/update-product-form-slice";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProductMutation } from "~/redux/services/catalog/product-api";
import { useEffect } from "react";
function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const dataForm = useSelector((state) => state.updateProductForm);
  const { data, isLoading, isSuccess } = useGetProductQuery(id);
  const [updateProduct, result] = useUpdateProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: dataForm.id,
      name: dataForm.productName,
      unitPrice: dataForm.price,
      description: dataForm.description,
    };
    updateProduct(data);
  };

  if (result.isSuccess) {
    router.push("/admin/products");
  }
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        changeAllValue({
          id: data.data.id,
          productName: data.data.name,
          price: data.data.unitPrice,
          description: data.data.description,
        })
      );
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Update Product</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          {/* <InputMultipleImage></InputMultipleImage> */}
        </div>
        <div className="flex-[0_0_50%] px-2">
          <ul>
            <li className="text-sm font-semibold">Product Information</li>
            <li className="my-4">
              <Input
                label={"Product Name"}
                value={dataForm.productName}
                onChange={(e) => {
                  dispatch(changeProductName(e.target.value));
                }}
              ></Input>
            </li>
            <li className="my-4">
              <Input
                label={"Price"}
                value={dataForm.price}
                onChange={(e) => {
                  dispatch(changePrice(e.target.value));
                }}
                type="number"
              ></Input>
            </li>
            <li className="my-4">
              <InputTextArea
                label={"Description"}
                value={dataForm.description}
                onChange={(e) => {
                  dispatch(changeDescription(e.target.value));
                }}
              ></InputTextArea>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <Button secondary small type={"submit"}>
          Update Product
        </Button>
      </div>
    </form>
  );
}

export default EditProduct;
