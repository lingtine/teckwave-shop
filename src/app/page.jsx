import Image from "next/image";
import BoxProducts from "./components/home-page/box-products";
import Navigation from "./components/home-page/navigation";

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
      <div className="flex gap-3">
        <div className="w-[200px] bg-slate-300 rounded-md shadow-sm">
          <Navigation data={dataTitle} />
        </div>
        <div className="flex flex-1">
          <Image
            src="/images/banner/banner-1.png"
            alt="banner"
            width={750}
            height={450}
            className="w-full"
          />
        </div>
      </div>
      <BoxProducts data={data} />
      <BoxProducts slider data={data} />
    </div>
  );
}

export default HomePage;
