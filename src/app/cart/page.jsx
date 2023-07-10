import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
function CartPage() {
  const data = [
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="my-8 text-3xl font-bold ">Shopping Cart</h2>

      <div className="grid grid-flow-col grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-8 shadow-lg rounded-lg">
          <div>
            <ul className="flex py-4">
              <li className="flex-1">Item</li>
              <li className="w-[120px]">Qty</li>
              <li className="w-[120px]">Subtotal</li>
            </ul>
          </div>
          <ul>
            {data.map((product) => (
              <li className=" py-8 flex border-t last:border-b">
                <div className="flex-1 flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={80}
                    width={80}
                  />
                  <div className="flex flex-col justify-center ml-5">
                    <h5>{product.name}</h5>
                    <p>{product.subTile}</p>
                  </div>
                  <div className="flex-1 text-center">
                    <button className="p-3 text-gray-500 rounded-full text-md hover:bg-slate-100">
                      <FaRegTrashCan />
                    </button>
                  </div>
                </div>
                <div className="w-[120px] flex items-center">
                  {product.quality}
                </div>
                <div className="w-[120px] flex items-center">
                  {product.price}
                </div>
              </li>
            ))}
          </ul>
          <Link
            href={"/"}
            className="my-2 flex items-center p-2 rounded-md text-gray-800 text-base hover:bg-slate-100 w-fit"
          >
            <IoIosArrowBack />
            <span className="ml-4">Continue Shopping</span>
          </Link>
        </div>
        <div className="p-8 bg-white rounded-xl h-fit shadow-lg">
          <h3 className="text-1xl font-bold dark:text-white">Summary</h3>
          <div className="border-b">
            <div className="flex justify-between my-8">
              <h5>Subtotal</h5>
              <p className="font-bold">30000</p>
            </div>
            <div className="flex justify-between my-8">
              <h5>Shipping</h5>
              <p className="font-bold">30000</p>
            </div>
          </div>
          <div className="flex justify-between my-4 text-xl">
            <h5>Total</h5>
            <p className="font-bold">30000</p>
          </div>
          <Link
            href={"/checkout"}
            className="block text-center py-3 border bg-teal-800 text-white w-full rounded-lg hover:bg-teal-500"
          >
            Check out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
