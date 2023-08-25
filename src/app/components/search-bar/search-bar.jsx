"use client";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
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
import { formatPrice } from "~/utils/formatPrice";
import Link from "next/link";
function SearchBar() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.searchData);
  const debounceSearch = useDebounce(searchValue, 500);
  const [handleSearch, { isSuccess, isLoading, data }] =
    useSearchProductsMutation(debounceSearch);
  let renderSearchResult;

  if (isSuccess) {
    if (data.data.length !== 0) {
      renderSearchResult = data.data.map((product) => {
        return (
          <ListItem
            className="flex border-b last:border-none py-2 "
            key={product.id}
          >
            <Link href={`/đâs/${product.id}`} className="flex items-center">
              <ListItemPrefix className="min-w-[80]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={40}
                  height={30}
                />
              </ListItemPrefix>
              <div className="mx-4 flex-1">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="line-clamp-2"
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {formatPrice(product.unitPrice)}
                </Typography>
              </div>
            </Link>
          </ListItem>
        );
      });
    } else if (data.data.length === 0) {
      renderSearchResult = <ListItem>No Result</ListItem>;
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
      {debounceSearch && isSuccess && (
        <div className="z-50 absolute w-full py-2 px-3 bg-white top-[120%] border border-slate-300 rounded">
          <List className="max-h-[400px] overflow-y-scroll ">
            {renderSearchResult}
          </List>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
