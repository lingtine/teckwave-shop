"use client";

import Image from "next/image";
import { TiDelete } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useGetCartDetailQuery } from "~/redux/services/orders/cart-api";
import { useSelector } from "react-redux";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useGetListProductsByIdQuery } from "~/redux/services/catalog/product-api";
import Table from "~/app/components/table/table";
import { formatPrice } from "~/utils/formatPrice";
import CartItemQuantity from "~/app/components/cart/cart-item-quantity";
import { useEffect } from "react";
import Button from "~/app/components/button/button";
function CartPage() {
  const { cart } = useSelector((state) => state.cart);
  const arrayId = cart?.items.map((item) => item.productId);
  const { data, isSuccess } = useGetListProductsByIdQuery(arrayId, {
    refetchOnMountOrArgChange: true,
  });
  let renderPage;
  let dataTable, configData;
  configData = [
    {
      label: "Product Name",
      render: (data) => {
        return (
          <div className="flex gap-4 max-w-[300px]">
            <div className="relative w-20 h-20">
              <Image
                fill
                className="object-contain"
                alt={data.productName}
                src={data.productImage}
              />
            </div>
            <div className="flex-1">{data.productName}</div>
          </div>
        );
      },
    },
    {
      label: "Price",
      render: (data) => {
        return (
          <div className="text-center">{formatPrice(data.productPrice)}</div>
        );
      },
    },
    {
      label: "Quantity",
      render: (data) => {
        return (
          <div className="text-center">
            <CartItemQuantity data={data} />
          </div>
        );
      },
    },

    {
      label: "Total",
      render: (data) => {
        return (
          <div className="text-center">
            {formatPrice(data.quantity * data.productPrice)}
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    document.title = "Cart";
  }, []);
  if (isSuccess) {
    dataTable = cart?.items.map((item) => {
      const product = data.data.find(
        (product) => item.productId === product.id
      );

      return {
        ...item,
        productName: product.name,
        productImage: product.imageUrl,
        productPrice: product.unitPrice,
      };
    });
    const totalCount = dataTable?.reduce((accumulator, curr) => {
      let total = curr.quantity * curr.productPrice;
      return accumulator + total;
    }, 0);

    if (cart.items.length === 0) {
      renderPage = (
        <div className=" min-h-[400px] flex-col flex justify-center items-center">
          <div className="text-6xl">
            <TbShoppingCartPlus />
          </div>

          <h4 className="text-4xl my-8 font-semibold ">The cart is empty</h4>
          <Link href={"/"}>
            <Button>Back to shop</Button>
          </Link>
        </div>
      );
    } else {
      renderPage = (
        <div className="grid grid-flow-col grid-cols-3 gap-4">
          <div className="col-span-2 bg-white p-8 shadow-lg rounded-lg">
            {isSuccess && <Table config={configData} data={dataTable} />}
            <Link href={"/"}>
              <Button leftIcon={<IoIosArrowBack />}>Continue Shopping</Button>
            </Link>
          </div>
          <div className="p-8 bg-white rounded h-fit border border-primary-1">
            <h3 className="text-1xl font-bold dark:text-white">Summary</h3>
            <div className="">
              <div className="flex justify-between py-4 border-b ">
                <h5>Subtotal:</h5>
                <p className="font-bold">{formatPrice(totalCount)}</p>
              </div>
              <div className="flex justify-between py-4 border-b">
                <h5>Shipping:</h5>
                <p className="font-bold">{formatPrice(0)}</p>
              </div>
            </div>
            <div className="flex justify-between my-4 text-xl">
              <h5>Total</h5>
              <p className="font-bold">{formatPrice(totalCount)}</p>
            </div>
            <Link href={"/checkout"}>
              <Button full secondary large className="text-lg ">
                Check out
              </Button>
            </Link>
          </div>
        </div>
      );
    }
  }

  // if (isSuccess) {
  // renderCart = data.map((product) => (
  //   <li className=" py-8 flex border-t last:border-b justify-between">
  //     <div className="min-w-[360px] flex items-center relative group/item">
  //       <Image src={product.image} alt={product.name} height={80} width={80} />
  //       <div className="flex flex-col justify-center ml-5">
  //         <h5>{product.name}</h5>
  //         <p>{product.subTile}</p>
  //       </div>
  //       <div className="hidden group-hover/item:block  cursor-pointer absolute p-2 text-lg top-0 -left-2 text-secondary-3">
  //         <TiDelete />
  //       </div>
  //     </div>
  //     <div className="flex flex-1 justify-between items-center">
  //       <div className="">{product.price}</div>
  //       <div className="flex items-center">
  //         <InputQuantity quantity={product.quality} />
  //       </div>
  //       <div className=" flex items-center">
  //         {product.price * product.quality}
  //       </div>
  //     </div>
  //   </li>
  // ));
  //}

  return (
    <div className="container mx-auto my-8">
      <h2 className="my-8 text-3xl font-bold ">Shopping Cart</h2>
      {renderPage}
    </div>
  );
}

export default CartPage;
