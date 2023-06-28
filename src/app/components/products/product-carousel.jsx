"use client";
import ProductCart from "./product-cart";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

function ProductCarousel({ products, lengthCarousel = 5 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = products.length - lengthCarousel;
  const carouselRef = useRef();
  const onPrev = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
  };
  const onNext = () => {
    if (currentIndex >= maxIndex) return;
    setCurrentIndex(currentIndex + 1);
  };
  useEffect(() => {}, [currentIndex]);

  return (
    <div
      ref={carouselRef}
      className="relative flex w-full overflow-x-hidden -mx-1  py-8"
    >
      {products.map((product, index) => (
        <div
          className={`flex-shrink-0 max-w-[${
            100 / lengthCarousel
          }%] px-2 translate-x-[-${
            currentIndex * 100
          }%] duration-700 ease-in-out h-fit `}
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
