import { useEffect, useState } from "react";
import "./GioHang.scss";
import { useStore, actions } from "../../store";
import convertVND from "../../ultis/convertVND";
import { Link } from "react-router-dom";

function GioHang() {
  const [state, dispatch] = useStore();
  const { dataCartItems } = state;
  const [data, setData] = useState(dataCartItems);

  const handleRemoveCartItem = (itemId) => {
    const newDataCartItems = [...dataCartItems];
    let removeItem = newDataCartItems.filter((item) => item.id === itemId);
    const index = newDataCartItems.indexOf(removeItem[0]);
    newDataCartItems.splice(index, 1);
    dispatch(actions.removeCartItem(newDataCartItems));
    setData(newDataCartItems);
  };

  const calculatePrice = () => {
    let total = 0;
    dataCartItems.map((item) => {
      let a = Number(item.totalPrice);
      total += a;
    });
    return total;
  };

  const changeQuantity = (id, mode) => {
    switch (mode) {
      case "minus":
        dataCartItems.map((item) => {
          if (item.id === id) {
            if (!(item.quantity == 1)) {
              item.quantity = parseInt(item.quantity) - 1;
              item.totalPrice = parseInt(item.quantity) * parseInt(item.price);
            }
          }
        });
        break;
      case "add":
        dataCartItems.map((item) => {
          if (item.id === id) {
            item.quantity = parseInt(item.quantity) + 1;
            item.totalPrice = parseInt(item.quantity) * parseInt(item.price);
          }
        });
        break;
    }
    setData(dataCartItems);
    dispatch(actions.setCartItem(dataCartItems));
  };
  useEffect(() => {}, [dataCartItems]);

  return (
    <div className="cart__container">
      <div className="cart__content">
        <div className="cart__content__top">
          <h3>Giỏ hàng</h3>
        </div>
        <div className="cart__content__main">
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <div className="cart__item" key={item.id}>
                  <div className="cart__item__left">
                    <img src={`${item.image}`} alt="" />
                  </div>
                  <div className="cart__item__right">
                    <div className="cart__item__infor">
                      <p className="cart__item__title">{item.name}</p>
                      <p className="cart__item__brand">{item.type}</p>
                      <button
                        className="cart__item__btnDelete"
                        onClick={() => handleRemoveCartItem(item.id)}
                      >
                        Xóa
                      </button>
                    </div>
                    <div>
                      <p className="cart__item__cost">
                        {convertVND(item.totalPrice)}
                      </p>
                    </div>
                    <div className="cart__item__amount">
                      <button
                        className="minus__cart__item"
                        onClick={() => changeQuantity(item._id, "minus")}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        max={99}
                        className="cart__item__amountinput"
                      />
                      <button
                        className="add__cart__item"
                        onClick={() => changeQuantity(item._id, "add")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="cart__content__bottom">
          <div className="cart__content__bottomright"></div>
          <div className="cart__content__bottomright">
            <div className="cart__tamtinh">
              <p>Tạm tính:</p>
              <p className="tamtinh">{convertVND(calculatePrice())}</p>
            </div>
            <div className="cart__thanhtien">
              <p>Thành tiền:</p>
              <p className="thanhtien">{convertVND(calculatePrice())}</p>
            </div>
              <Link to={"../payment"} className={'btnthanhtoan'}>THANH TOÁN NGAY</Link>
              <Link to={"../"} className='btntieptucmuahang'>TIẾP TỤC MUA HANG</Link>
          </div>
        </div>
      </div>
      <div className="cart__support">
        <div className="cart__support__customerservice">
          <h4>Dịch vụ khách hàng</h4>
          <p>Bạn cần sự hỗ trợ từ chúng tôi? Hãy liên hệ ngay</p>
          <ul>
            <li>094.1234.828</li>
            <li>Chúng tôi trên Facebook</li>
          </ul>
          <p>Giờ mở cửa (08:00 - 18:00 tối)</p>
          <p>Liên hệ</p>
        </div>
        <div className="cart__support__bankcard">
          <h4>Mua sắm cùng EVO FITNESS</h4>
          <ul>
            <li>
              <span>Sản phẩm đẹp, thân thiện với môi trường</span>
              <p></p>
            </li>

            <li>
              <span>Không lo về giá</span>
              <p></p>
            </li>

            <li>
              <span>Miễn phí vận chuyển</span>
              <p>cho đơn hàng từ 500.000 VNĐ</p>
            </li>
          </ul>
          <ul className="cart__support__payment">
            <li>
              <img
                src="//bizweb.dktcdn.net/100/386/441/themes/869880/assets/cart_payment_1.svg?1658716179964"
                alt="Hình thức thanh toán"
              />
            </li>
            <li>
              <img
                src="//bizweb.dktcdn.net/100/386/441/themes/869880/assets/cart_payment_2.svg?1658716179964"
                alt="Hình thức thanh toán"
              />
            </li>
            <li>
              <img
                src="//bizweb.dktcdn.net/100/386/441/themes/869880/assets/cart_payment_3.svg?1658716179964"
                alt="Hình thức thanh toán"
              />
            </li>
            <li>
              <img
                src="//bizweb.dktcdn.net/100/386/441/themes/869880/assets/cart_payment_4.svg?1658716179964"
                alt="Hình thức thanh toán"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GioHang;
