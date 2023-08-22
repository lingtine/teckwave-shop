"use client";

import Image from "next/image";
import BoxProducts from "~/app/components/home-page/box-products";
import NavBar from "~/app/components/home-page/navbar";
import ProductCarousel from "~/app/components/products/product-carousel";
import AboutUs from "~/app/components/home-page/about-us";

function HomePage() {
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
            className="w-full"
          />
        </div>
      </div>
      {/* <BoxProducts heading={"Category"} type={"This Month"} data={data}>
        <ProductCarousel products={data.products} />
      </BoxProducts>
      <BoxProducts heading={"Category"} type={"This Month"} data={data}>
        <ProductCarousel products={data.products} />
      </BoxProducts>
      <BoxProducts heading={"Category"} type={"This Month"} data={data}>
        <ProductCarousel products={data.products} />
      </BoxProducts>
      <BoxProducts heading={"Category"} type={"This Month"} data={data}>
        <ProductCarousel products={data.products} />
      </BoxProducts> */}
      <AboutUs />
    </div>
  );
}

export default HomePage;
