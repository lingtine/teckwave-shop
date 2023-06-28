import Image from "next/image";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";

function ProductCart({ product }) {
  let numberFormat = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  return (
    <Link
      href={"/san-pham/" + "iphone"}
      className="flex flex-col p-2 bg-white rounded-xl shadow-xl"
    >
      <div className="flex justify-center w-full my-8 relative">
        <Image
          alt={product.name}
          src={product.image}
          width={150}
          height={180}
          className="object-contain"
        />
        <div className="absolute bg-teal-500 text-white p-2.5 rounded-full right-4 bottom-0 text-lg text-center">
          <BiCartAdd />
        </div>
      </div>
      <div className="flex flex-col px-4">
        <h5 className="uppercase font-semibold text-sm text-center">
          {product.name}
        </h5>
        <div className="text-center my-1 text-red-500 font-semibold ">
          {numberFormat.format(product.price)}
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;
