import ProductItem from "./product-item";

function ProductList({ products = [] }) {
  return (
    <ul className="flex flex-wrap gap-y-4 -m-4">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
