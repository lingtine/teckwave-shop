"use client";

import Image from "next/image";
import BoxProducts from "~/app/components/home-page/box-products";
import NavBar from "~/app/components/home-page/navbar";
import ProductCarousel from "~/app/components/products/product-carousel";
import AboutUs from "~/app/components/home-page/about-us";
import { useGetProductsHomePageQuery } from "~/redux/services/catalog/product-api";
import { useEffect } from "react";
function HomePage() {
  const { data, isSuccess } = useGetProductsHomePageQuery();
  useEffect(() => {
    document.title = "Home";
  }, []);
  let renderData;
  if (isSuccess) {
    renderData = data.data.map((group) => {
      return (
        <BoxProducts
          key={group.groupId}
          heading={group.groupName}
          type={"Category group"}
          data={group}
        >
          <ProductCarousel products={group.products} />
        </BoxProducts>
      );
    });
  }

  return (
    <div className="container mx-auto ">
      <div className="flex min-h-0">
        <NavBar />

        <div className="flex flex-1 pt-8 px-8">
          <Image
            src="/images/banner/banner-1.png"
            alt="banner"
            width={750}
            height={450}
            priority
            className="w-full"
          />
        </div>
      </div>
      {renderData}
      <AboutUs />
    </div>
  );
}

export default HomePage;
