import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ApiServices from "../../ApiServices/index";
import { useState, useEffect } from "react";
import convertVND from "../../ultis/convertVND";

import { Spinner } from "reactstrap";

function Category() {
  let { idCategory } = useParams();
  const navigate = useNavigate();
  if (!idCategory) navigate("../");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await ApiServices.productsByIdCategory(idCategory);
    setLoading(false);
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [idCategory]);

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <div className="category_wrapper">
      <div className="filter_container">
        <h2>Lọc sản phẩm</h2>
        <div className="filter_by_brand">
          <div className="filter_title">
            <p>Thương hiệu</p>
          </div>
        </div>
      </div>
      <div className="category_content">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <Link
                to={`../product/${item.id}`}
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
                      <i className="fa fa-shopping-basket" />
                    </span>
                    <span>
                      <i className="fa fa-shopping-cart" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Category;
