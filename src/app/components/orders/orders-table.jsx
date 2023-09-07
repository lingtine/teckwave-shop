// import { AiFillEdit } from "react-icons/ai";
// import Link from "next/link";
// function OrdersTable({ data }) {
//   const renderData = data.map((other) => {
//     return (
//       <ul className="flex p-4 border-b-2 items-center text-sm ">
//         <li className=" flex-[0_0_30%]">{other.name}</li>
//         <li className=" flex-[0_0_30%]">Category</li>
//         <li className=" flex-[0_0_10%]">Price</li>
//         <li className=" flex-[0_0_10%]">Stock</li>
//         <li className=" flex-[0_0_10%]">Sold</li>
//         <li className=" flex-[0_0_10%] flex justify-end">
//           <Link href={"/admin/products/edit-product"}>
//             <AiFillEdit></AiFillEdit>
//           </Link>
//         </li>
//       </ul>
//     );
//   });

//   return (
//     <div>
//       <ul className="flex border p-4 bg-secondary-3 text-primary rounded-t-xl">
//         <li className=" flex-[0_0_30%]">Order No.</li>
//         <li className=" flex-[0_0_30%]">Date</li>
//         <li className=" flex-[0_0_10%]">Customer Name</li>
//         <li className=" flex-[0_0_10%]">Price</li>
//         <li className=" flex-[0_0_10%]">Status</li>
//         <li className=" flex-[0_0_10%] flex justify-end">Actions</li>
//       </ul>
//       <div>{renderData}</div>
//     </div>
//   );
// }

// export default OrdersTable;
