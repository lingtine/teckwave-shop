import ProductCart from "./product-cart";

function ProductItem({ product }) {
  return (
    <li className="flex-[0_0_25%] min-w-[25%] p-4">
      <ProductCart product={product} />
    </li>
  );
}

export default ProductItem;
