import faker from "faker";
import { randomColor } from "./utils";

export default function makeData(count) {
  let data = [];
  let options = [];

  let row = {
    ID: 1,
    firstName: "Hamza",
    lastName: "Atmaca",
    email: "hamzatmacatr@gmail.com",
    year: "2019",
    month: "06",
    targetPrice: "20",
    currency: "TL",
    quantity: "4",
    product: "Health",
  };

  // options.push({ label: row.music, backgroundColor: randomColor() });

  data.push(row);

  let columns = [
    {
      id: "firstName",
      label: "First Name",
      accessor: "firstName",
      width: 50,
      dataType: "text",
      options: [],
    },
    {
      id: "lastName",
      label: "Last Name",
      accessor: "lastName",
      width: 50,
      dataType: "text",
      options: [],
    },
    {
      id: "year",
      label: "Year",
      accessor: "year",
      width: 50,
      dataType: "text",
      options: [],
    },
    {
      id: "month",
      label: "Month",
      accessor: "month",
      width: 50,
      dataType: "text",
      options: [],
    },
    {
      id: "targetPrice",
      label: "Target Price",
      accessor: "targetPrice",
      dataType: "text",
      width: 50,
      options: options,
    },
    {
      id: "currency",
      label: "Currency",
      accessor: "currency",
      dataType: "text",
      width: 50,
      options: options,
    },
    {
      id: "quantity",
      label: "Quantity",
      accessor: "quantity",
      dataType: "text",
      width: 50,
      options: options,
    },
    {
      id: "product",
      label: "Product",
      accessor: "product",
      dataType: "text",
      width: 50,
      options: options,
    },
    {
      id: 999999,
      width: 20,
      label: "+",
      disableResizing: true,
      dataType: "null",
    },
  ];
  return { columns: columns, data: data, skipReset: false };
}
