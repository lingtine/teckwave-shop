"use client";

import Link from "next/link";
import { useFetchCategoryGroupsQuery } from "~/redux/services/catalog/category-group-api";

function NavBar() {
  const { data: categoryGroupsData, isSuccess } = useFetchCategoryGroupsQuery();

  let renderCategory;

  if (isSuccess) {
    renderCategory = categoryGroupsData.data.map((item, index) => (
      <li key={index} className="w-full h-full">
        <Link
          className="group border-b-2 w-full h-full flex items-center justify-center text-primary-1 font-semibold hover:cursor-pointer hover:bg-secondary-3 hover:text-primary"
          href={`/${item.id}`}
        >
          <div className="uppercase">{item.name}</div>
        </Link>
      </li>
    ));
  }

  return (
    <div className="flex-[0_0_20%]">
      <ul className="flex h-full flex-col justify-between items-center relative ">
        {renderCategory}
      </ul>
    </div>
  );
}

export default NavBar;
