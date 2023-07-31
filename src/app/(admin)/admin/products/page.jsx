import Link from "next/link";

import { IoAddCircleOutline } from "react-icons/io5";
import ProductsTable from "~/app/components/products/products-table";

function Products() {
  const data = [
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/laptop.jpg",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
    {
      image: "/images/products/iphone.png",
      name: "iphone 11 (64GB) - Chinh hãng  VN/A",
      price: 10390000,
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div>Products</div>
        <div>
          <Link
            href={"/admin/products/add-product"}
            className="flex items-center bg-secondary-3 text-primary px-2 py-4 rounded-sm text-sm hover:opacity-90"
          >
            <IoAddCircleOutline />
            <span className="mx-2">Add Products</span>
          </Link>
        </div>
      </div>
      <div className="my-8">
        <ProductsTable data={data} />
      </div>
    </div>
  );
}

export default Products;
