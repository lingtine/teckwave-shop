import Image from "next/image";

function Checkout() {
  const data = [
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
    {
      name: "Apple iPhone",
      subTile: "Color: Grey Space",
      image: "/images/products/product_1.png",
      price: "4800000",
      quality: "1",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl">Billing Details</h2>
      <div className="flex justify-between ">
        <div className=" bg-white py-8 rounded-lg">
          <h3 className="my-8 text-xl font-bold ">Delivery Information</h3>
          <form className="min-w-[470px]">
            <div class="relative z-0 w-full mb-6 group border px-2 rounded bg-secondary">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group border px-2 rounded bg-secondary">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group border px-2 rounded bg-secondary">
              <input
                type="address"
                name="floating_address"
                id="floating_address"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Stress Address
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group border px-2 rounded bg-secondary">
              <input
                type="number"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone Number
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group border px-2 rounded bg-secondary">
              <textarea
                type="text"
                name="floating_text"
                id="floating_text"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                rows="4"
                cols="50"
              />
              <label
                htmlFor="floating_text"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-1  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Note
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-secondary-3 checked:accent-secondary-3  bg-secondary-3  rounded focus:ring-secondary-3 dark:focus:ring-secondary-3  focus:ring-2 "
              />
              <label
                for="link-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 "
              >
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
        <div className="p-8 bg-white rounded-xl h-fit w-full max-w-md ">
          <h3 className="text-xl my-8 font-bold dark:text-white">
            Order Summary
          </h3>

          <ul className="my-8  max-h-80 overflow-y-scroll">
            {data.map((product) => (
              <li className="flex justify-between w-full items-center">
                <div className="flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="h-full"
                  />
                  <div>
                    <h4 className="text-base">{product.name}</h4>
                    <h5 className="text-xs text-gray-400 leading-normal">
                      {product.subTile}
                    </h5>
                    <p className="text-base">{product.price}</p>
                  </div>
                </div>
                <div>{product.quality}</div>
              </li>
            ))}
          </ul>

          <div className="">
            <div className="flex justify-between py-4 border-b">
              <h5>Subtotal</h5>
              <p className="font-bold">30000</p>
            </div>
            <div className="flex justify-between py-4 border-b">
              <h5>Shipping</h5>
              <p className="font-bold">30000</p>
            </div>
          </div>
          <div className="flex justify-between my-4 text-xl">
            <h5>Total</h5>
            <p className="font-bold">30000</p>
          </div>
          <button className="block text-center py-3 border bg-secondary-3 text-white w-full rounded hover:opacity-90">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
