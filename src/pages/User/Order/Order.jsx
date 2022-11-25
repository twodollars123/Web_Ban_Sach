import { useState, useEffect } from "react";
import React from "react";
import "../Order/order.scss";
import * as ApiService from "../../../ApiServices";
import Table from "./Table/Table";
import covertVND from "../../../ultis/convertVND";
import moment from "moment/moment";

import NumberRangeColumnFilter from "./NumberRangeColumnFilter";
import SelectColumnFilter from "./SelectColumnFilter";

import { Spinner, Button, Input, Label } from "reactstrap";

function Order(props) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async (page, pageSize) => {
    const data = await ApiService.userOrders(page, pageSize);
    setData(data.data);
    setPagination(data.pagination);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async(idOrder,status) => {
    await ApiService.updateStatusOrder(idOrder,status)
    await fetchData();
  }

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
  function MyCellID({ value }) {
    return <span className="order__id__prd">{value}</span>;
  }
  function MyCellPrice({ value }) {
    return <span>{covertVND(value)}</span>;
  }
  function MyCellStatus(props) {
    const {value} = props;
    const idOrder =  props.row.original.id;
    switch (value) {
      case "success":
        return (
          <Button size="sm" color="success">
            {value}
          </Button>
        );
      case "cancelled":
        return (
          <Button size="sm" color="danger">
            {value}
          </Button>
        );
      case "success":
        return (
          <Button size="sm" color="success">
            {value}
          </Button>
        );
      case "pendding":
        return (
          <>
            <Button size="sm" color="warning">
              {value}
            </Button>
            <Input type="select" bsSize="sm" onChange={(e)=>updateStatus(idOrder,e.target.value)}>
              <option>🎩</option>
              <option >cancelled</option>
              <option >success</option>
            </Input>
          </>
        );
      case "delivering":
        return (
          <>
            <Button size="sm" color="primary">
              {value}
            </Button>
            <Input type="select" bsSize="sm" onChange={(e)=>updateStatus(idOrder,e.target.value)}>
              <option>🎩</option>
              <option >cancelled</option>
              <option >success</option>
            </Input>
          </>
        );
    }
  }
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        filter: "fuzzyText",
        disableSortBy: true,
        Cell: MyCellID,
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
        Cell: MyCellPrice,
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
        Cell: MyCellStatus,
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
          <Table
            columns={columns}
            data={data}
            setPagination={setPagination}
            pagination={pagination}
            setData={setData}
          />
        </div>
      )}
    </div>
  );
}

export default Order;
