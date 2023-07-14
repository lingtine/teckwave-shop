import Link from "next/link";
import ProductCarousel from "../products/product-carousel";
import ProductList from "../products/product-list";
function BoxProducts({ data, slider, heading, type, children }) {
  return (
    <div className="mt-10">
      <div className="h-fit flex items-center">
        <div className="h-10 w-5 border bg-secondary-3 rounded-md"></div>
        <h4 className="text-secondary-3 font-medium px-4 ">{type}</h4>
      </div>
      <div className="py-10">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="uppercase font-semibold text-4xl tracking-wider">
              {heading}
            </h3>
          </div>
          <div>
            <Link
              href={"/"}
              className="bg-color-btn-2 px-12 py-4 text-color-text-primary text-base rounded"
            >
              View all
            </Link>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default BoxProducts;
