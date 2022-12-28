import React, { useState, useEffect } from "react";
import { Pagination, PaginationLink, PaginationItem, Label } from "reactstrap";
import * as ApiService from "../../../../ApiServices";

import {Input} from 'reactstrap'

const pageSizeOption = [1,5,10,20,30,50]

function PaginationReactstrap({ pagination, setPagination, setData }) {
  const [page, setPage] = useState(pagination?.page||1);
  const [totalPage,setTotalPage] = useState(pagination?.totalPage||1)
  const [pageSize, setPageSize] = useState(pagination?.pageSize||10);

  const pageRender = (totalPage) => {
    const array = [];
    for (let i = 1; i <= totalPage; i++) {
      array.push(i);
    }
    return array;
  };

  const fetch = async () => {
    const data = await ApiService.userOrders(page, pageSize);
    console.log(data)
    setData(data.data);
    setPagination(data.pagination)
    setTotalPage(data.pagination.totalPage)
  };

  useEffect(() => {
    fetch();
  }, [page, pageSize]);

  const changePage = (page) => {
    pagination.page = page;
    setPage(page);
    setPagination(pagination);
  };

  return (
    <div className="pagination__wrapper">
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled={page === 1 ? true : false}>
          <PaginationLink first onClick={() => changePage(1)} />
        </PaginationItem>
        <PaginationItem disabled={page === 1 ? true : false}>
          <PaginationLink previous onClick={() => changePage(page - 1)} />
        </PaginationItem>
        {pagination &&
          pageRender(totalPage).map((i) => (
            <PaginationItem key={i} className={i == page ? "active" : ""}>
              <PaginationLink onClick={() => changePage(i)}>{i}</PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem
          disabled={page === totalPage ? true : false}
        >
          <PaginationLink href="#" next onClick={() => changePage(page + 1)} />
        </PaginationItem>
        <PaginationItem
          disabled={page === totalPage ? true : false}
        >
          <PaginationLink
            href="#"
            last
            onClick={() => changePage(totalPage)}
          />
        </PaginationItem>
      </Pagination>
      <div className="select__page__size">
        <Label>Page size :</Label>
        <Input className="" type="select" defaultValue={10} onChange={(e)=>setPageSize(e.target.value)}>
          {pageSizeOption.map((option,idx)=>(
          <option key={idx}>{option}</option>
          ))}
        </Input>
        </div>
    </div>
  );
}

export default PaginationReactstrap;
