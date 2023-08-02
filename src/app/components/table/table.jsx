import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderLabel = config.map((colum) => {
    if (!!colum.header) {
      return <Fragment key={colum.label}>{colum.header()}</Fragment>;
    }

    return (
      <th key={colum.label} className="p-2">
        {colum.label}
      </th>
    );
  });

  const renderedRow = data.map((dataColum, index) => {
    const renderedColumns = config.map((colum) => {
      return (
        <td key={colum.label} className="p-2 mx-auto">
          {colum.render(dataColum)}
        </td>
      );
    });
    return (
      <tr key={index} className="border-b ">
        {renderedColumns}
      </tr>
    );
  });
  return (
    <table className="table-fixed border-spacing-2 w-full">
      <thead className="">
        <tr className="border-b-2 bg-secondary-3 text-primary ">
          {renderLabel}
        </tr>
      </thead>
      <tbody>{renderedRow}</tbody>
    </table>
  );
}

export default Table;
