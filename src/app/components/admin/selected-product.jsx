"use client";
import Image from "next/image";
import Input from "../input/input";
import { useSearchProductsMutation } from "~/redux/services/catalog/product-api";
import useDebounce from "~/hooks/use-debounce";
import { formatPrice } from "~/utils/formatPrice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAddProduct,
  changeQuantity,
} from "~/redux/features/warehouses/report/form-add-report-slice";

function SelectedProduct() {
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formAddReportSlice);
  const [searchValue, setSearchValue] = useState("");
  const debounceSearch = useDebounce(searchValue, 500);
  const [handleSearch, { isSuccess, isLoading, data }] =
    useSearchProductsMutation(debounceSearch);
  useEffect(() => {
    if (debounceSearch && debounceSearch !== "") {
      handleSearch(debounceSearch);
    }
  }, [debounceSearch]);

  let renderSearchResult;
  let renderProducts;
  if (isSuccess) {
    renderSearchResult = data.data.map((product) => (
      <li
        key={product.id}
        className="flex"
        onClick={() => {
          handleAddToList({ ...product, quantity: 0 });
        }}
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={50}
          height={30}
        />
        <div className="mx-4">
          <h6 className="text-base font-semibold">{product.name}</h6>
          <p className="text-sm text-secondary-3">
            {formatPrice(product.unitPrice)}
          </p>
        </div>
      </li>
    ));
  }
  if (dataForm.products.length) {
    renderProducts = dataForm.products.map((product) => {
      return (
        <li key={product.id} className="flex border-y py-2 justify-between">
          <div className="flex ">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={50}
              height={30}
            />
            <div className="mx-4">
              <h6 className="text-base font-semibold">{product.name}</h6>
              <p className="text-sm text-secondary-3">
                {formatPrice(product.unitPrice)}
              </p>
            </div>
          </div>
          <div>
            <Input
              label={"Quantity"}
              value={product.quantity}
              type="number"
              onChange={(e) => {
                dispatch(
                  changeQuantity({ ...product, quantity: e.target.value })
                );
              }}
            ></Input>
          </div>
        </li>
      );
    });
  }

  const handleAddToList = (product) => {
    const productFounded = dataForm.products.find(
      (item) => item.id === product.id
    );
    if (!productFounded) dispatch(changeAddProduct(product));
    setSearchValue("");
  };

  return (
    <div>
      <div className="flex items-center">
        <div>Search Products</div>
        <div className="mx-4 flex-1 relative">
          <Input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
          {debounceSearch && (
            <div className="z-50 absolute w-full py-2 px-3 bg-white top-[120%] border border-slate-300 rounded">
              <ul className="">{renderSearchResult}</ul>
            </div>
          )}
        </div>
      </div>
      <ul className="my-8">
        <h4 className="font-semibold text-xl my-4">List Products</h4>
        {dataForm.products.length !== 0 && renderProducts}
      </ul>
    </div>
  );
}

export default SelectedProduct;
