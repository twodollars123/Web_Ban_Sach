import React, { useState, useEffect } from "react";
import { Pagination, PaginationLink, PaginationItem } from "reactstrap";
import * as ApiService from '../../../../ApiServices'

function PaginationReactstrap({ pagination, setData }) {
    const [page,setPage] = useState(null);
    const [pageSize,setPageSize] =useState(null);

    // useEffect(() => {
    //     const data = ApiService.userOrders(page);
    //      setData(data.data)
    // }, [page,pageSize])
    

  const pageRender = (totalPage) => {
    const array = [];
    for (let i = 1; i <= totalPage; i++) {
      array.push(i);
    }
    return array;
  };

  return (
    <div>
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem disabled>
          <PaginationLink href="#" previous />
        </PaginationItem>
        {pagination &&
          pageRender(pagination?.totalPage).map((i) => (
            <PaginationItem
              key={i}
              className={i == pagination.page ? "active" : ""}
            >
              <PaginationLink >{i}</PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationLink href="#" next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" last />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default PaginationReactstrap;
