import Image from "next/image";
import BoxProducts from "~/app/components/home-page/box-products";
import NavBar from "~/app/components/home-page/navbar";
import ProductCarousel from "~/app/components/products/product-carousel";
import AboutUs from "~/app/components/home-page/about-us";
function HomePage() {
  const data = {
    title: "APPLE AUTHORISED RESELLER",
    products: [
      {
        image: "/images/products/iphone.png",
        name: "iphone 11 (64GB) - Chinh hãng  VN/A",
        price: 10390000,
      },
      {
        image: "/images/products/iphone.png",
        name: "iphone 11 (64GB) - Chinh hãng  VN/A",
        price: 10390000,
      },
      {
        image: "/images/products/iphone.png",
        name: "iphone 11 (64GB) - Chinh hãng  VN/A",
        price: 10390000,
      },
      {
        image: "/images/products/laptop.jpg",
        name: "iphone 11 (64GB) - Chinh hãng  VN/A",
        price: 10390000,
      },
      {
        image: "/images/products/iphone.png",
        name: "iphone 11 (64GB) - Chinh hãng  VN/A",
        price: 10390000,
      },
      {
        image: "/images/products/iphone.png",
        name: "iphone 11 (64GB) - Chinh hãng  VN/A",
        price: 10390000,
      },
      {
        image: "/images/products/iphone.png",
        name: "iphone 11 (64GB) - Chinh hãng  VN/A",
        price: 10390000,
      },
    ],
  };

  const dataTitle = [
    {
      title: "Laptop",
      items: [
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Laptop",
      items: [
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Laptop",
      items: [
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Laptop",
      items: [
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
        {
          title: "laptop theo Hãng",
          items: [
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
            {
              title: "Laptop gaming Asus",
              items: [
                { title: "LapTop" },
                { title: "LapTop" },
                { title: "LapTop" },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto ">
      <div className="flex min-h-0">
        <div className="pr-4 pt-8 border-r">
          <NavBar data={dataTitle} />
        </div>
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
      <BoxProducts heading={"Category"} type={"This Month"} data={data}>
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
      </BoxProducts>
      <AboutUs />
    </div>
  );
}

export default HomePage;
