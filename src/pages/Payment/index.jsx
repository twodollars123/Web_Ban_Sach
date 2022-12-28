import React, { useState } from "react";
import "./index.scss";

import * as ApiServices from "../../ApiServices/index";

import convertVND from "../../ultis/convertVND";
import notify from "../../ultis/notify";
import { useStore, actions } from "../../store";

import { FormGroup, Button, Spinner } from "reactstrap";

import { useNavigate } from "react-router-dom";

function Payment() {
  // store
  const [state, dispatch] = useStore();
  const { dataCartItems } = state;

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  //
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [province, setProvince] = useState();
  const [ward, setWard] = useState();
  const [district, setDistrict] = useState();
  const [description, setDescription] = useState();

  const [load, setLoad] = useState(false);
  // const [paymentBy,setPaymentBy] = useState();

  const calculatePrice = () => {
    let total = 0;
    dataCartItems.map((item) => {
      let a = Number(item.totalPrice);
      total += a;
    });
    return total;
  };

  const handleSuccess = async () => {
    if (
      email &&
      name &&
      phone &&
      address &&
      district &&
      province &&
      district &&
      ward
    ) {
      const bill = {
        products: await dataCartItems.map((item) => {
          return { product: item.id, quantity: item.quantity };
        }),
      };
      const payload = {
        address: `${address} - ${district}  - ${ward} - - ${province}`,
        phone,
        name,
        price: await calculatePrice(),
        bill,
        description,
        userID: await JSON.parse(localStorage.getItem("user"))?.id,
      };
      await setLoad(true);
      const res = await ApiServices.createOrder(payload);
      await setLoad(false);
      if (res.status === 200) {
        notify("success", "Success");
        dispatch(actions.setCartItem([]));
        navigate("../thankyou");
      }
    } else {
      notify("error", "You can fill all information");
    }
  };
  return (
    <div className="payment_container">
      <div className="user_info">
        <div className="delivery_info__user">
          <h3>Thông tin nhận hàng</h3>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Số điện thoại (tùy chọn)"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="Địa chỉ(tùy chọn)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            placeholder="Tỉnh thành"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
          <input
            placeholder="Quận huyện"
            value={ward}
            onChange={(e) => setWard(e.target.value)}
          />
          <input
            placeholder="Phường xã"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <textarea
            placeholder="Ghi chú"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="payment">
          <h3>Thanh toán</h3>
          <FormGroup check>
            <div className="option_payment">
              <input type="radio" name="paymentBy" disabled />
              <label>Chuyển khoản qua ngân hàng (không khả dụng)</label>
            </div>
            <div className="option_payment">
              <input type="radio" name="paymentBy" defaultChecked />
              <label>Thanh toán khi giao hàng</label>
            </div>
          </FormGroup>
        </div>
      </div>
      <div className="product_info">
        <h3>Đơn hàng</h3>
        <div className="item"></div>
        <div className="row-item">
          <input placeholder="Nhập mã giảm giá" />
          <button>Áp dụng</button>
        </div>
        <div className="row-item">
          <p>Tạm tính</p>
          <p>{convertVND(calculatePrice())}</p>
        </div>
        <div className="row-item">
          <p>Phí vận chuyển</p>
          <p>free ship***</p>
        </div>
        <div className="row-item">
          <p>Tổng cộng</p>
          <p>{convertVND(calculatePrice())}</p>
        </div>
        <div>
          <Button size="lg" color="success" onClick={handleSuccess}>
            {load ? <Spinner /> : "Hoàn Thành"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
