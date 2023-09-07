import ProductItem from "./product-item";
import { List } from "@material-tailwind/react/components/List";
function ProductList({ products }) {
  const renderProducts = products.map((product, index) => (
    <ProductItem key={index} product={product} />
  ));

  return (
    <List className="my-8  max-h-80 overflow-y-scroll">{renderProducts}</List>
  );
}

export default ProductList;
