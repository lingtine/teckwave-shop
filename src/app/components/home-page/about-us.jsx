import { TbTruckDelivery } from "react-icons/tb";
import { FiHeadphones } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
function AboutUs() {
  return (
    <div className="container mx-auto my-16">
      <div className="grid grid-cols-3 py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="py-6">
            <div className="text-3xl bg-color-black text-primary p-2 rounded-full border-[16px] ">
              <TbTruckDelivery />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold uppercase my-2">
              FREE AND FAST DELIVERY
            </h4>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="py-6">
            <div className="text-3xl bg-color-black text-primary p-2 rounded-full border-[16px] ">
              <FiHeadphones />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold uppercase my-2">
              24/7 CUSTOMER SERVICE
            </h4>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="py-6">
            <div className="text-3xl bg-color-black text-primary p-2 rounded-full border-[16px] ">
              <BsShieldCheck />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold uppercase my-2">
              MONEY BACK GUARANTEE
            </h4>
            <p className="text-sm">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
