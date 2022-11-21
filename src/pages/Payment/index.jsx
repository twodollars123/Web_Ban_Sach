import React from "react";
import "./index.scss";

function index() {
  return (
    <div className="payment_container">
      <div className="user_info">
        <div className="delivery_info__user">
          <h3>Thông tin nhận hàng</h3>
          <input placeholder="Email" />
          <input placeholder="Họ và tên" />
          <input placeholder="Số điện thoại (tùy chọn)" />
          <input placeholder="Địa chỉ(tùy chọn)" />
          <input placeholder="Tỉnh thành" />
          <input placeholder="Quận huyện" />
          <input placeholder="Phường xã" />
          <textarea placeholder="Ghi chú" />
        </div>
        <div className="payment">
          <h3>Thanh toán</h3>
          <div className="option_payment">
            <input type="radio" />
            <label>Chuyển khoản qua ngân hàng</label>
          </div>
          <div className="option_payment">
            <input type="radio" />
            <label>Thanh toán khi giao hàng</label>
          </div>
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
          <p>22.500đ</p>
        </div>
        <div className="row-item">
          <p>Phí vận chuyển</p>
          <p>-</p>
        </div>
        <div className="row-item">
          <p>Tổng cộng</p>
          <p>22.500đ</p>
        </div>
      </div>
    </div>
  );
}

export default index;
