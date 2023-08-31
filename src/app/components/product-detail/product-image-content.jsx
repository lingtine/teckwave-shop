"use client";

import Image from "next/image";
import { useState } from "react";
function ProductImageContent({ imageUrl, images, alt }) {
  const [currImage, setCurrImage] = useState(0);
  return (
    <div className="grid grid-cols-4 gap-7">
      <div className="">
        {images.length === 0 &&
          images.map((image, index) => {
            if (index === currImage) {
              return;
            }
            return (
              <figure className="relative mb-4">
                <Image
                  onClick={() => {
                    setCurrImage(index);
                  }}
                  priority={true}
                  src={image.url}
                  fill
                  sizes="w-2 h-2"
                />
              </figure>
            );
          })}
      </div>
      <div className="relative col-span-3 w-full min-h-[400px]">
        <Image
          priority={true}
          src={imageUrl}
          alt={alt}
          fill
          sizes="w-full h-full"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ProductImageContent;
