import React from "react";
import { useReactTable } from "@tanstack/react-table";
import * as ApiService from "../../ApiServices";
import { useState, useEffect } from "react";

import { Spinner } from "reactstrap";

function Order(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const table = useReactTable(options)
  // console.log(table)

  const fetchData = async () => {
    const data = await ApiService.userOrders();
    setLoading(false);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {header:""}
  ]

  return (
    <div>
      <h4>ĐƠN HÀNG CỦA BẠN</h4>
      {loading ? <Spinner></Spinner> : 
      <div>

        </div>}
    </div>
  );
}

export default Order;
