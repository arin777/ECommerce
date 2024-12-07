import  { ReactElement, useState } from "react";
import TableHOC from "../component/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType={
    _id:string;
    amount:number;
    quantity:number;
    discount:number;
    status:ReactElement;
    action:ReactElement;
};
const column:Column<DataType>[]=[
  {
    Header:"ID",
    accessor:"_id",
  }, {
    Header:"Quantity",
    accessor:"quantity",

  },
  {
    Header:"Discount",
    accessor:"discount",
  },
  {
    Header:"Amount",
    accessor:"amount"
  },
  {
    Header:"Status",
    accessor:"status"
  },
  {
    Header:"Action",
    accessor:"action"
  },
]
const orders = () => {
  const [rows]=useState<DataType[]>([
    {_id:"adadsdads",
    amount:4545,
    quantity:23,
    discount:5666,
    status:<span className="red">Processing</span>,
    action:<Link to ={`/order/adadsdads`}>View</Link>,
    }
  ])
    const table=TableHOC<DataType>(column,rows,"dashboard-product-box","Orders",rows.length>6)();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {table}
    </div>
  )
}

export default orders
