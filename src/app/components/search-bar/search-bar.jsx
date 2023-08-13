"use client";

import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchValue,
  changeShowResult,
  removeSearchValue,
} from "~/redux/features/search/search-slice";
import { useSearchProductsMutation } from "~/redux/services/catalog/product-api";
import { BiLoaderAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import useDebounce from "~/hooks/use-debounce";
import { useEffect } from "react";

function SearchBar() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.searchData);
  const debounceSearch = useDebounce(searchValue, 500);
  const [handleSearch, { isSuccess, isLoading, data }] =
    useSearchProductsMutation(debounceSearch);
  let renderSearchResult;
  if (isSuccess) {
    if (data.data.length !== 0) {
      renderSearchResult = (
        <div className="absolute w-full py-2 px-3 bg-white top-[120%] border border-slate-300 rounded">
          <ul className="">
            <li className="flex border-b last:border-none py-2 ">
              <Image
                src={"/images/products/laptop.jpg"}
                alt="laptop"
                width={50}
                height={40}
              />
              <div className="mx-4">
                <h6 className="text-base font-semibold">Laptop</h6>
                <p className="text-sm text-secondary-3">20000</p>
              </div>
            </li>
            <li className="flex border-b last:border-none py-2">
              <Image
                src={"/images/products/laptop.jpg"}
                alt="laptop"
                width={50}
                height={40}
              />
              <div className="mx-4">
                <h6 className="text-base font-semibold">Laptop</h6>
                <p className="text-sm text-secondary-3">20000</p>
              </div>
            </li>
            <li className="flex border-b last:border-none py-2">
              <Image
                src={"/images/products/laptop.jpg"}
                alt="laptop"
                width={50}
                height={40}
              />
              <div className="mx-4">
                <h6 className="text-base font-semibold">Laptop</h6>
                <p className="text-sm text-secondary-3">20000</p>
              </div>
            </li>
          </ul>
        </div>
      );
    } else if (data.data.length === 0) {
      renderSearchResult = (
        <div className="absolute s w-full py-2 px-3 bg-white top-[120%] border border-slate-300 rounded">
          <div className="min-h-[200px]">dá</div>
        </div>
      );
    }
  }
  useEffect(() => {
    debounceSearch.trim();
    if (debounceSearch && debounceSearch !== "") {
      handleSearch(debounceSearch);
    }
  }, [debounceSearch]);
  const renderStatus = (
    <div className="flex">
      {isLoading ? (
        <BiLoaderAlt className="mr-2 animate-spin" />
      ) : (
        <button
          className="mr-2"
          onClick={() => {
            dispatch(removeSearchValue());
          }}
        >
          <TiDeleteOutline />
        </button>
      )}
    </div>
  );
  return (
    <div className="relative">
      <div className="flex justify-center items-center pl-4 pr-2 py-1 bg-secondary border rounded-md min-w-[300px]">
        <input
          placeholder="what are you looking for?"
          className="flex-auto text-black bg-transparent"
          value={searchValue}
          onChange={(e) => {
            dispatch(changeSearchValue(e.target.value));
          }}
        />
        {searchValue !== "" && renderStatus}

        <button className="text-[28px]">
          <BiSearch></BiSearch>
        </button>
      </div>
      {debounceSearch && renderSearchResult}
    </div>
  );
}

export default SearchBar;
