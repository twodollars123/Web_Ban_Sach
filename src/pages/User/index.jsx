import React from "react";
import "./index.scss";
import * as ApiServices from "../../ApiServices/index";
import { useState, useEffect } from "react";
import { useStore } from "../../store";

import { Container, Spinner, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import UserInfo from "./UserInfo";
import ChangePass from "./ChangePass";
import Order from "./Order";

function Widget(props) {
  console.log(props)
  let Widget = {
    UserInfo,
    ChangePass,
    Order,
  };
  Widget = Widget[props?.element];
  return <Widget {...props}/>
}

function User() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [dataWidget, setDataWidget] = useState("UserInfo");
  const [state] = useStore();
  const fetchData = async () => {
    const data = await ApiServices.userProfile();
    if (!data) navigate("../dangnhap");
    setLoading(false);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <div className="user__wrapper">
      <Container fluid="md" className="py-5">
        <Row>
          <Col className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <h4 className="fw-light"> TRANG TÀI KHOẢN</h4>
            <p className="fw-bold">Xin chào, {data?.name} !</p>
            <div>
              <div onClick={() => setDataWidget("UserInfo")}>
                Thông tin tài khoản
              </div>
              <div onClick={() => setDataWidget("Order")}>Đơn hàng của bạn</div>
              <div onClick={() => setDataWidget("ChangePass")}>
                Đổi mật khẩu
              </div>
            </div>
          </Col>
          <Col className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
            {<Widget element={dataWidget} data={data}/>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default User;
