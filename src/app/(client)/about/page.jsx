import Image from "next/image";

import { BiStoreAlt } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import AboutUs from "~/app/components/home-page/about-us";

export const metadata = {
  title: "About us",
};

function AboutPage() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center my-20">
          <div className="flex-[0_0_50%] max-w-[50%] p-16">
            <h2 className="text-5xl font-semibold my-10">Our Story</h2>
            <p className="text-base font-normal text-justify">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <br></br>
            <p className="text-base font-normal text-justify">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="flex-[0_0_50%] max-w-[50%]">
            <Image
              src="/images/products/contact-page/Side Image.png"
              width={705}
              height={609}
              alt="slide"
            />
          </div>
        </div>

        <div className="flex justify-between items-center my-20">
          <div className="px-12 py-7 border border-color-black group hover:border-secondary-3 hover:bg-secondary-3 hover:text-white">
            <div className="flex justify-center items-center p-6">
              <div className="bg-black rounded-full p-2 border-8 group-hover:bg-white ">
                <BiStoreAlt className="text-4xl text-color-text-primary group-hover:text-primary-1" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-3xl">10.5k </h4>
              <p className="text-base font-normal my-3">
                Sallers active our site
              </p>
            </div>
          </div>
          <div className="px-12 py-7 border border-color-black group hover:border-secondary-3 hover:bg-secondary-3 hover:text-white">
            <div className="flex justify-center items-center p-6">
              <div className="bg-black rounded-full p-2 border-8 group-hover:bg-white ">
                <CiDollar className="text-4xl text-color-text-primary group-hover:text-primary-1" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-3xl">33k </h4>
              <p className="text-base font-normal my-3">
                Mopnthly Produduct Sale
              </p>
            </div>
          </div>
          <div className="px-12 py-7 border border-color-black group hover:border-secondary-3 hover:bg-secondary-3 hover:text-white">
            <div className="flex justify-center items-center p-6">
              <div className="bg-black rounded-full p-2 border-8 group-hover:bg-white ">
                <HiOutlineShoppingBag className="text-4xl text-color-text-primary group-hover:text-primary-1" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-3xl">45.5k</h4>
              <p className="text-base font-normal my-3">
                Customer active in our site
              </p>
            </div>
          </div>
          <div className="px-12 py-7 border border-color-black group hover:border-secondary-3 hover:bg-secondary-3 hover:text-white">
            <div className="flex justify-center items-center p-6">
              <div className="bg-black rounded-full p-2 border-8 group-hover:bg-white ">
                <TbMoneybag className="text-4xl text-color-text-primary group-hover:text-primary-1" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-3xl">25k</h4>
              <p className="text-base font-normal my-3">
                Anual gross sale in our site
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center my-20">
          <div>
            <div>
              <Image
                src={"/images/products/contact-page/user-1.png"}
                alt="user-1"
                width={370}
                height={430}
              />
            </div>
            <div className="py-8">
              <h4 className="text-3xl font-medium">Tom Cruise</h4>
              <p className="text-base font-normal my-2">Founder & Chairman</p>
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="user-2"
                src={"/images/products/contact-page/user-2.png"}
                width={370}
                height={430}
                className="max-h-[430px]"
              />
            </div>
            <div className="py-8">
              <h4 className="text-3xl font-medium">Emma Watson</h4>
              <p className="text-base font-normal my-2">Managing Director</p>
            </div>
          </div>
          <div>
            <div>
              <Image
                alt="user-3"
                src={"/images/products/contact-page/user-3.png"}
                width={370}
                height={430}
              />
            </div>
            <div className="py-8">
              <h4 className="text-3xl font-medium">Will Smith</h4>
              <p className="text-base font-normal my-2">Product Designer</p>
            </div>
          </div>
        </div>

        <AboutUs />
      </div>
    </div>
  );
}

export default AboutPage;
