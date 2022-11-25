import { useState, useEffect } from "react";
import React from "react";
import "../Order/order.scss";
import * as ApiService from "../../../ApiServices";
import Table from "./Table/Table";
import covertVND from "../../../ultis/convertVND";
import moment from "moment/moment";

import NumberRangeColumnFilter from "./NumberRangeColumnFilter";
import SelectColumnFilter from "./SelectColumnFilter";

import { Spinner } from "reactstrap";

function Order(props) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await ApiService.userOrders();
    setData(data.data);
    setPagination(data.pagination);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyCellProduct({ value }) {
    return (
      value &&
      value.map((item) => (
        <div key={item.product.id} className="bill__product">
          <div>{item.product.name}</div>
          <div>
            <img src={item.product.image} alt="" className="img__bill--prd" />
          </div>
          <div>{item.quantity}</div>
          <div>{item.quantity * parseInt(item.product.price)}</div>
        </div>
      ))
    );
  }
  function MyCellCreateAt({ value }) {
    return <span>{moment(value).format("LLL")}</span>;
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        filter: "fuzzyText",
        disableSortBy: true,
      },
      {
        Header: "Bill",
        accessor: "bill.products",
        Cell: MyCellProduct,
        disableFilters: true,
        disableSortBy: true,
      },
      {
        Header: "Total Price",
        accessor: "price",
        Filter: NumberRangeColumnFilter,
        filter: "between",
        disableSortBy: true,
      },
      {
        Header: "Create Time",
        accessor: "createdAt",
        Cell: MyCellCreateAt,
        disableFilters: true,
        sortType: (a, b) => {
          var a1 = new Date(a).getTime();
          var b1 = new Date(b).getTime();
          if (a1 < b1) return 1;
          else if (a1 > b1) return -1;
          else return 0;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "includes",
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <div>
      <h4>ĐƠN HÀNG CỦA BẠN</h4>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <Table columns={columns} data={data} setData={setData} pagination={pagination} />
        </div>
      )}
    </div>
  );
}

export default Order;
