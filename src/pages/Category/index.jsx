import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ApiServices from "../../ApiServices/index";
import { useState, useEffect } from "react";
import convertVND from "../../ultis/convertVND";

import { Spinner,Pagination, PaginationLink, PaginationItem, Label, Input } from "reactstrap";

function Category() {
  let { idCategory } = useParams();
  const navigate = useNavigate();
  if (!idCategory) navigate("../");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(pagination?.page||1);

  const [totalPage,setTotalPage] = useState(pagination?.totalPage||1)
  const [pageSize, setPageSize] = useState(pagination?.pageSize||10);
  const pageSizeOption = [1,5,10,20,30,50]

  const fetchData = async () => {
    const data = await ApiServices.productsByIdCategory(idCategory,page,pageSize);
    setPagination(data?.pagination);
    setTotalPage(data?.pagination.totalPage)
    setLoading(false);
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [idCategory,page,pageSize]);

  const changePage = (page) => {
    pagination.page = page;
    setPage(page);
    setPagination(pagination);
  };

  const pageRender = (totalPage) => {
    const array = [];
    for (let i = 1; i <= totalPage; i++) {
      array.push(i);
    }
    return array;
  };

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <div className="category_wrapper">
      {/* <div className="filter_container">
        <h2>Lọc sản phẩm</h2>
        <div className="filter_by_brand">
          <div className="filter_title">
            <p>Thương hiệu</p>
          </div>
        </div>
      </div> */}
      <div className="category_content m-5">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div
                
                className="cart__item"
                key={item.id}
              >
                <div className="cart__item__img">
                  <img src={`${item.image}`} alt="" />
                </div>
                <div className="cart__item__content">
                  <div className="cart__item__infor">
                    <p className="cart__item__title">{item.name}</p>

                    <p className="cart__item__cost">{convertVND(item.price)}</p>
                  </div>
                  <div className="card__action">
                  <span>
                        <Link to={`../product/${item.id}`} className='text-dark'>
                        <img src="https://img.icons8.com/ios/20/null/search--v1.png"/>
                        </Link>
                      </span>
                    <span>
                      <i className="fa fa-shopping-cart" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
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
    </div>
  );
}

export default Category;
