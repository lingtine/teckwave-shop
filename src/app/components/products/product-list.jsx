import ProductItem from "./product-item";

function ProductList({ products = [] }) {
  return (
    <ul className="grid grid-cols-5 grid-flow-row gap-4">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
