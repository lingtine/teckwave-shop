import ProductCart from "./product-cart";

function ProductItem({ product }) {
  return (
    <li className="">
      <ProductCart product={product} />
    </li>
  );
}

export default ProductItem;
