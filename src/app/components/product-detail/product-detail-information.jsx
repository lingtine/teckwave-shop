import { formatPrice } from "~/utils/formatPrice";
import { Rating } from "@material-tailwind/react/components/Rating";
function ProductDetailInformation({ data }) {
  return (
    <div>
      <h3 className="text-xl text-secondary-3 uppercase font boder">
        Information
      </h3>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Name: </span>
        <p>{data.name}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Description: </span>
        <p>{data.description}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Price: </span>
        <p>{formatPrice(data.unitPrice)}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Price: </span>
        <Rating value={data.numberOfStar} readonly />
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Category: </span>
        <p>{data.category.name}</p>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-lg font-semibold">Brand: </span>
        <p>{data.brand.name}</p>
      </div>
    </div>
  );
}

export default ProductDetailInformation;
