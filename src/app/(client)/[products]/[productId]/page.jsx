"use client";

import ProductContent from "~/app/components/product-detail/product-content";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import { useParams } from "next/navigation";

function ProductDetailPage() {
  const { productId } = useParams();

  const data = {
    images: [
      { url: "/images/products/havic/havic.png", name: "havic" },
      { url: "/images/products/havic/havic-1.png", name: "havic-1" },
      ,
      { url: "/images/products/havic/havic-2.png", name: "havic-2" },
      ,
      { url: "/images/products/havic/havic-3.png", name: "havic-3" },
      ,
      { url: "/images/products/havic/havic-4.png", name: "havic-4" },
    ],
    name: "Havic HV G-92 Gamepad",
    price: "2000000",
    describe:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  };

  const { data: productData, isSuccess } = useGetProductQuery(productId);

  return (
    <div>
      <div className="container mx-auto ">
        <ProductContent product={data} />
      </div>
    </div>
  );
}

export default ProductDetailPage;
