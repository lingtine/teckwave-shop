import Image from "next/image";
import BoxProducts from "./components/home-page/box-products";

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

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-5 gap-2 grid-flow-col">
        <div className="bg-slate-300"></div>
        <div className="col-span-4">
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
