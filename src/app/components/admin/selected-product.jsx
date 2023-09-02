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
  changeRemoveProduct,
} from "~/redux/features/warehouses/report/form-add-report-slice";
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { BsFillTrash3Fill } from "react-icons/bs";

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
        className="flex border-b last:border-none py-2 "
        onClick={() => {
          setSearchValue("");
          handleAddToList({ ...product, quantity: 0 });
        }}
      >
        <ListItemPrefix className="min-w-[80]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={40}
            height={30}
          />
        </ListItemPrefix>
        <div className="mx-4">
          <h6 className="line-clamp-2">{product.name}</h6>
          <p variant="small" color="gray" className="font-normal">
            {formatPrice(product.unitPrice)}
          </p>
        </div>
      </li>
    ));
  }
  if (dataForm.products.length) {
    renderProducts = dataForm.products.map((product) => {
      return (
        <ListItem
          key={product.id}
          className="flex border-y py-2 justify-between items-center gap-4"
        >
          <div className="flex ">
            <ListItemPrefix>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={50}
                height={30}
              />
            </ListItemPrefix>
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
          <div
            onClick={() => {
              dispatch(changeRemoveProduct(product));
            }}
          >
            <BsFillTrash3Fill />
          </div>
        </ListItem>
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
              <ul className="max-h-[400px] overflow-y-scroll">
                {renderSearchResult}
              </ul>
            </div>
          )}
        </div>
      </div>
      <List className="my-2">
        <h4 className="font-semibold text-xl my-4">List Products</h4>
        {dataForm.products.length !== 0 && renderProducts}
      </List>
    </div>
  );
}

export default SelectedProduct;
