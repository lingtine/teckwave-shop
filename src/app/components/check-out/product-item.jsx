import Image from "next/image";
import { formatPrice } from "~/utils/formatPrice";
function ProductItem({ product }) {
  const price = formatPrice(999);
  return (
    <li className="flex justify-between w-full items-center">
      <div className="flex items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="h-full"
        />
        <div>
          <h4 className="text-base">{product.name}</h4>
          <h5 className="text-xs text-gray-400 leading-normal">
            {product.subTile}
          </h5>
          <p className="text-base">{price}</p>
        </div>
      </div>
      <div>{product.quality}</div>
    </li>
  );
}

export default ProductItem;
