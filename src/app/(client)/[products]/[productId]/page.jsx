"use client";

import ProductContent from "~/app/components/product-detail/product-content";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import { useParams } from "next/navigation";
import SkeletonProductDetail from "~/app/components/skeleton/skeleton-product-detail";

function ProductDetailPage() {
  const { productId } = useParams();
  const {
    data: productData,
    isSuccess,
    isFetching,
  } = useGetProductQuery(productId);

  let content;

  if (isFetching) {
    content = <SkeletonProductDetail />;
  } else if (isSuccess) {
    content = <ProductContent product={productData.data} />;
  }
  return (
    <div>
      <div className="container mx-auto ">{content}</div>
    </div>
  );
}

export default ProductDetailPage;
