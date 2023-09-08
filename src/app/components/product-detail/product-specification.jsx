"use client";
import Link from "next/link";
import Table from "../table/table";
import Button from "../button/button";

function ProductSpecification({ data, productId }) {
  console.log(data);
  let configData;
  configData = [
    {
      label: "Specifications Name",
      render: (data) => {
        return <div className="text-center">{data.specificationName}</div>;
      },
    },

    {
      label: "Value",
      render: (data) => {
        return <div className="text-center">{data.specificationValue}</div>;
      },
    },

    // {
    //   label: "Actions",
    //   render: (data) => {
    //     return (
    //       <div className="flex justify-center">
    //         <button
    //           className="mx-4"
    //           onClick={() => {
    //             removeCategory(data.id);
    //           }}
    //         >
    //           <CiCircleRemove />
    //         </button>
    //         <Link
    //           href={`/dashboard/category-group/edit-category-group/${data.id}`}
    //         >
    //           <AiFillEdit></AiFillEdit>
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
  ];
  return (
    <div className="my-8">
      <div className="flex justify-between items-center my-4">
        <h3 className="text-xl font-bold text-secondary-3">Specifications</h3>
        <Link
          href={`/dashboard/products/productDetail/${productId}/add-specification`}
        >
          <Button>Add Specifications</Button>
        </Link>
      </div>
      <div>
        <Table data={data} config={configData}></Table>
      </div>
    </div>
  );
}

export default ProductSpecification;
