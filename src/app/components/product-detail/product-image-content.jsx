"use client";

import Image from "next/image";
import { useState } from "react";
function ProductImageContent({ imageUrl, images, alt }) {
  const [currImage, setCurrImage] = useState(0);
  return (
    <div className="grid grid-cols-4 gap-7  ">
      <div className="relative ">
        {images.length === 0 &&
          images.map((image, index) => {
            if (index === currImage) {
              return;
            }
            return (
              <figure className="mb-4">
                <Image
                  onClick={() => {
                    setCurrImage(index);
                  }}
                  src={image.url}
                  width={170}
                  height={138}
                />
              </figure>
            );
          })}
      </div>
      <div className="relative col-span-3">
        <Image src={imageUrl} alt={alt} width={400} height={300} />
      </div>
    </div>
  );
}

export default ProductImageContent;
