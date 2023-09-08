"use client";

import { useParams } from "next/navigation";
import { useGetProductQuery } from "~/redux/services/catalog/product-api";
import ProductDetailInformation from "~/app/components/product-detail/product-detail-information";
import { Spinner } from "@material-tailwind/react/components/Spinner";
import Image from "next/image";
import ProductSpecification from "~/app/components/product-detail/product-specification";
function ProductDetail() {
  const { productId } = useParams();
  const { data, isSuccess, isFetching } = useGetProductQuery(productId);

  let content;

  if (isFetching) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50"></Spinner>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div>
        <h2 className="text-2xl font-semibold my-4 uppercase">
          Product detail
        </h2>

        <div className="flex">
          <div className="flex-1 relative">
            <Image
              fill
              className="object-contain"
              alt={data.data.name}
              src={data.data.imageUrl}
            />
          </div>
          <div className="min-w-[50%]">
            <ProductDetailInformation data={data.data} />
          </div>
        </div>
        <div>
          <ProductSpecification
            productId={productId}
            data={data.data.productSpecifications}
          />
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ProductDetail;
