"use client";

import ProductContent from "~/app/components/product-detail/product-content";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import { useParams } from "next/navigation";

function ProductDetailPage() {
  const { productId } = useParams();
  const { data: productData, isSuccess } = useGetProductQuery(productId);

  return (
    <div>
      <div className="container mx-auto ">
        {isSuccess && <ProductContent product={productData.data} />}
      </div>
    </div>
  );
}

export default ProductDetailPage;
