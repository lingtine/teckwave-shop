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
      <div className="grid grid-flow-col grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="my-8 text-3xl font-bold ">Delivery Information</h2>
          <form>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="p-8 bg-white rounded-xl h-fit shadow-lg">
          <h3 className="text-1xl font-bold dark:text-white">Order Summary</h3>

          <ul className="my-8 border-b max-h-80 overflow-y-scroll">
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

          <div className="border-b">
            <div className="flex justify-between my-8">
              <h5>Subtotal</h5>
              <p className="font-bold">30000</p>
            </div>
            <div className="flex justify-between my-8">
              <h5>Shipping</h5>
              <p className="font-bold">30000</p>
            </div>
          </div>
          <div className="flex justify-between my-4 text-xl">
            <h5>Total</h5>
            <p className="font-bold">30000</p>
          </div>
          <button className="block text-center py-3 border bg-teal-800 text-white w-full rounded-lg hover:bg-teal-500">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
