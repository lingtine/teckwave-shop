"use client";

import ProductContent from "~/app/components/product-detail/product-content";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import { useParams } from "next/navigation";
import SkeletonProductDetail from "~/app/components/skeleton/skeleton-product-detail";
import { useEffect } from "react";

function ProductDetailPage() {
  const { productId } = useParams();
  const {
    data: productData,
    isSuccess,
    isFetching,
  } = useGetProductQuery(productId);

  let content;
  useEffect(() => {
    document.title = "Product Detail";
  }, []);
  if (isFetching) {
    content = (
      <div className="my-20">
        <SkeletonProductDetail />
      </div>
    );
  } else if (isSuccess) {
    content = <ProductContent product={productData.data} />;
  }
  return (
    <div>
      <div className="container mx-auto">{content}</div>
    </div>
  );
}

export default ProductDetailPage;
