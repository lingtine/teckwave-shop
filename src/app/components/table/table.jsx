import { Fragment } from "react";
import { Card, Typography } from "@material-tailwind/react";
function Table({ data, config, keyFn }) {
  const renderLabel = config.map((colum) => {
    if (!!colum.header) {
      return <Fragment key={colum.label}>{colum.header()}</Fragment>;
    }

    return (
      <th
        key={colum.label}
        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
      >
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal leading-none opacity-70"
        >
          {colum.label}
        </Typography>
      </th>
    );
  });

  const renderedRow = data.map((dataColum, index) => {
    const renderedColumns = config.map((colum) => {
      return (
        <td key={colum.label} className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {colum.render(dataColum)}
          </Typography>
        </td>
      );
    });
    return (
      <tr key={index} className="even:bg-blue-gray-50/50">
        {renderedColumns}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2 w-full">
      <thead className="">
        <tr>{renderLabel}</tr>
      </thead>
      <tbody>{renderedRow}</tbody>
    </table>
  );
}

export default Table;
