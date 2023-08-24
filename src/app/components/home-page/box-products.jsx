import Link from "next/link";

function BoxProducts({ heading, type, children, data }) {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <div className="">
          <div className="h-fit flex items-center">
            <div className="h-10 w-5 border bg-secondary-3 rounded-md"></div>
            <h4 className="text-secondary-3 font-medium px-4 ">{type}</h4>
          </div>
          {heading && (
            <div className=" mt-8">
              <h3 className="uppercase font-semibold text-4xl tracking-wider">
                {heading}
              </h3>
            </div>
          )}
        </div>
        <div className="flex items-end">
          <Link
            href={`/${data.groupId}`}
            className="bg-color-btn-2 px-12 py-4 text-color-text-primary text-base rounded"
          >
            View all
          </Link>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default BoxProducts;
