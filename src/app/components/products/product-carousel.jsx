"use client";
import ProductCart from "./product-cart";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useState } from "react";

function ProductCarousel({ products = [], lengthCarousel = 4 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = products.length - lengthCarousel;
  console.log(lengthCarousel);
  const onPrev = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
  };
  const onNext = () => {
    if (currentIndex >= maxIndex) return;
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative flex w-full overflow-x-hidden py-8">
      {products.map((product, index) => (
        <div
          key={index}
          className={`max-w-[270px] flex-shrink-0  mx-4 tra duration-700 ease-in-out h-fit`}
          style={{
            transform: `translateX(-${112 * currentIndex}%)`,
          }}
        >
          <ProductCart key={index} product={product} />
        </div>
      ))}
      <div>
        <button
          onClick={onPrev}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none text-2xl "
        >
          <FiArrowLeftCircle />
        </button>
        <button
          onClick={onNext}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none text-2xl"
        >
          <FiArrowRightCircle />
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;
