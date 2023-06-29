import ProductCarousel from "../products/product-carousel";
import ProductList from "../products/product-list";
function BoxProducts({ data, slider }) {
  return (
    <div className="mt-10">
      <div
        className="
        overflow-hidden
        h-[30px]
        w-fit
        flex
        flex-row-reverse
        bg-teal-500
        items-center

        after:border-t-[30px] 
        after:border-l-[30px] 
        after:border-t-teal-800
        after:border-l-teal-500
        after:ml-[40px]
      "
      >
        <h4
          className="bg-teal-800 
       text-white font-medium
        py-[4px]
        pl-5 pr-16
        uppercase
       "
        >
          {data.title}
        </h4>
      </div>
      <div className="py-10">
        {slider ? (
          <ProductCarousel products={data.products} lengthCarousel={5} />
        ) : (
          <ProductList products={data.products} />
        )}
      </div>
    </div>
  );
}

export default BoxProducts;
