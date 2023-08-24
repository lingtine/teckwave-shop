"use client";

import Button from "~/app/components/button/button";
import Input from "~/app/components/input/input";
import InputTextArea from "~/app/components/input/input-textarea";
import InputImage from "~/app/components/input/InputImage";

import { useRouter } from "next/navigation";
import {
  changeProductName,
  changeCategory,
  changePrice,
  changeBrand,
  changeDescription,
  changeImage,
} from "~/redux/features/product/addProductForm";
import { useAddProductMutation } from "~/redux/services/catalog/product-api";
import { useFetchCategoriesQuery } from "~/redux/services/catalog/category-api";
import { useFetchAllBrandsQuery } from "~/redux/services/catalog/brand-api";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "~/app/components/select-box/select-box";
import { useEffect } from "react";

function AddProducts() {
  const {
    data: categoryData,
    isLoading,
    isSuccess: categorySuccess,
  } = useFetchCategoriesQuery();
  const { data: brandsData, isSuccess: brandsSuccess } =
    useFetchAllBrandsQuery();
  const [addProduct, result] = useAddProductMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.addProduct);

  let dataCategoryConfig = [];
  let dataBrandsConfig = [];

  if (categorySuccess) {
    dataCategoryConfig = categoryData.data.map((item) => {
      return {
        ...item,
        label: item.name,
      };
    });
  }
  if (brandsSuccess) {
    dataBrandsConfig = brandsData.data.map((item) => {
      return {
        ...item,
        label: item.name,
      };
    });
  }
  useEffect(() => {
    if (result.isSuccess) {
      router.push("/dashboard/products");
    }
  }, [result.isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("Name", dataForm.productName);
    formData.append("Description", dataForm.description);
    formData.append("UnitPrice", dataForm.price);
    formData.append("CategoryId", dataForm.category.id);
    formData.append("BrandId", dataForm.brand.id);
    formData.append("Image", dataForm.image[0]);
    addProduct(formData);
  };

  return (
    <div>
      <h2 className="my-2 text-lg text-primary-1 font-bold">Add Product</h2>
      <div className="flex -mx-2">
        <div className="flex-[0_0_50%] px-2">
          <InputImage
            onChange={(image) => {
              dispatch(changeImage(image));
            }}
          ></InputImage>
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
              <div className="flex items-center">
                <div className="mr-4">
                  <h4>Category:</h4>
                </div>
                {categorySuccess && (
                  <SelectBox
                    options={dataCategoryConfig}
                    onChange={(option) => {
                      dispatch(changeCategory(option));
                    }}
                    selected={dataForm.category}
                  />
                )}
              </div>
            </li>
            <li className="my-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <h4>Brand:</h4>
                </div>
                {brandsSuccess && (
                  <SelectBox
                    options={dataBrandsConfig}
                    onChange={(option) => {
                      dispatch(changeBrand(option));
                    }}
                    selected={dataForm.brand}
                  />
                )}
              </div>
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
      <form onSubmit={handleSubmit} className="flex justify-end">
        <Button secondary small type={"submit"}>
          Create Product
        </Button>
      </form>
    </div>
  );
}

export default AddProducts;
