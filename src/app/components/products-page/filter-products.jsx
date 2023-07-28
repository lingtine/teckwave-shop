"use client";
import { useState } from "react";
import FieldFilter from "./field-filter";
import Button from "../button/button";

function FilterProducts({ dateFilter = [] }) {
  const [filter, setFilter] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const renderFilterByField = dateFilter.map((field) => (
    <FieldFilter
      key={field.id}
      field={field}
      filter={filter}
      onChange={setFilter}
    />
  ));
  return (
    <form onSubmit={handleSubmit} className="py-2">
      <div className="text-lg uppercase mb-4 px-4 ">Filter By</div>
      <ul className="">{renderFilterByField}</ul>
      <div className="my-4 flex justify-end px-4">
        <Button primary type="submit">
          filter
        </Button>
      </div>
    </form>
  );
}

export default FilterProducts;
