import Image from "next/image";
import { formatPrice } from "~/utils/formatPrice";
import { ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
function ProductItem({ product }) {
  return (
    <ListItem className="flex justify-between w-full items-center">
      <div className="flex items-center">
        <ListItemPrefix className="flex items-center relative w-20 h-20">
          <Image
            className="object-contain"
            src={product.productImage}
            alt={product.productName}
            fill
          />
        </ListItemPrefix>
        <div>
          <Typography variant="h6" color="blue-gray">
            {product.productName}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {formatPrice(product.productPrice)}
          </Typography>
        </div>
      </div>
      <div>{product.quantity}</div>
    </ListItem>
  );
}

export default ProductItem;
