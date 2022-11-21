import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ApiServices from "../../ApiServices/index";
import { useState, useEffect } from "react";

import {
  Spinner,
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import convertVND from "../../ultis/convertVND";
import { useStore, actions } from "../../store";

function Detail() {
  const [state, dispatch] = useStore();
  let { idPrd } = useParams();
  const navigate = useNavigate();
  if (!idPrd) navigate("../");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    const data = await ApiServices.productsById(idPrd);
    setLoading(false);
    setData(data[0]);
  };
  useEffect(() => {
    fetchData();
  }, [idPrd]);

  const changeQuantity = (mode) => {
    switch (mode) {
      case "minus":
        if (!(quantity == 1)) {
          setQuantity(quantity - 1);
        }
        break;
      case "add":
        if (!(quantity == 99)) {
          setQuantity(quantity + 1);
        }
        break;
    }
  };

  const addToCart = async () => {
    const item = {
      id: data?.id,
      _id: data?.id,
      image: data?.image,
      name: data?.name,
      price: data?.price,
      quantity: quantity,
      totalPrice: parseInt(quantity) * parseInt(data?.price),
    };
    await dispatch(actions.setDataModal(item));
    await dispatch(actions.setShowModal(true));
    await dispatch(actions.addCartItem(item));
  };
  return loading ? (
    <Spinner></Spinner>
  ) : (
    <div>
      <Container fluid="md" className="my-5 detail__wrapper">
        <Row xs="1" sm="1" md="2" lg="2" xl="2" xxl="2">
          <Col className="bg-light border col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            <Row xs="1" sm="1" md="2" lg="2" xl="2" xxl="2" className="">
              <Col className="img__prd">
                <img alt="Sample" src={data?.image} />
              </Col>
              <Col>
                <h4>{data?.name}</h4>
                <p>Nhà xuất bản: {data?.brand}</p>
                <p>Lượt mua: {data?.sold}</p>
                <p>Kho: {data?.quantity}</p>
                <p>
                  Giá :
                  <span className="price">
                    {convertVND(parseInt(data?.price))}
                  </span>
                </p>
                <p className="quantity__wrapper">
                  <InputGroup>
                    <InputGroupText
                      type="button"
                      onClick={() => changeQuantity("minus")}
                    >
                      -
                    </InputGroupText>
                    <Input value={quantity} min={1} max={99} />
                    <InputGroupText
                      type="button"
                      onClick={() => changeQuantity("add")}
                    >
                      +
                    </InputGroupText>
                  </InputGroup>
                </p>
                <p className="addToCart__btn">
                  {parseInt(data?.quantity) === 0 ? (
                    <Button className="addToCart__btn" color="primary">
                      HẾT HÀNG
                    </Button>
                  ) : (
                    <Button
                      className="addToCart__btn"
                      color="primary"
                      onClick={addToCart}
                    >
                      ĐẶT HÀNG
                    </Button>
                  )}
                </p>
              </Col>
            </Row>
            <Row className="description__wrapper">
              <h4 className="bg-secondary p-2 text-light m-auto">Mô tả</h4>
              <p>{data?.description}</p>
            </Row>
          </Col>
          <Col className="bg-light border col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <h5 className="text-light bg-warning p-2">CÓ THỂ BẠN QUAN TÂM</h5>
            <p>Có thể bạn quan tâm! Đang được cập nhật nội dung.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
