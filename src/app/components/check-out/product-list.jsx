import ProductItem from "./product-item";

function ProductList({ products }) {
  const renderProducts = products.map((product) => (
    <ProductItem product={product} />
  ));

  return <ul className="my-8  max-h-80 overflow-y-scroll">{renderProducts}</ul>;
}

export default ProductList;
