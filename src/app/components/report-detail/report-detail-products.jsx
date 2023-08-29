"use client";
import { useGetListProductsByIdQuery } from "~/redux/services/catalog/product-api";
import Table from "../table/table";
function ReportDetailProducts({ data }) {
  const arrayId = data.map((item) => item.productId);

  const {
    data: productsData,
    isFetching,
    isSuccess,
  } = useGetListProductsByIdQuery(arrayId);
  let dataTable, configData;

  configData = [
    {
      label: "Product Name",
      render: (data) => {
        return (
          <div>
            <div>{data.productName}</div>
          </div>
        );
      },
    },

    {
      label: "Quantity",
      render: (data) => {
        return <div className="text-center">{data.quantity}</div>;
      },
    },
  ];
  if (isSuccess) {
    dataTable = data.map((item) => {
      const product = productsData.data.find(
        (product) => item.productId === product.id
      );

      return {
        ...item,
        productName: product.name,
      };
    });
  }
  return (
    <div>
      <h4 className="text-xl my-4 font-semibold text-secondary-3">
        Products Report
      </h4>
      {isSuccess && <Table config={configData} data={dataTable} />}
    </div>
  );
}

export default ReportDetailProducts;
