import "./GioHang.scss";
import { useStore, actions } from "../../store";

function GioHang() {
  const [state, dispatch] = useStore();
  const { dataCartItems } = state;

  const handleRemoveCartItem = (itemId) => {
    const newDataCartItems = [...dataCartItems];
    let removeItem = newDataCartItems.filter((item) => item.id === itemId);
    const index = newDataCartItems.indexOf(removeItem[0]);
    newDataCartItems.splice(index, 1);
    dispatch(actions.removeCartItem(newDataCartItems));
  };

  const calculatePrice = () => {
    let total = 0;
    dataCartItems.map((item) => {
      let a = Number(item.price);
      total += a;
    });

    console.log("total", total);
    return total;
  };
  return (
    <div className="cart__container">
      <div className="cart__content">
        <div className="cart__content__top">
          <h3>Giỏ hàng</h3>
        </div>
        <div className="cart__content__main">
          {dataCartItems &&
            dataCartItems.length > 0 &&
            dataCartItems.map((item) => {
              return (
                <div className="cart__item" key={item.id}>
                  <div className="cart__item__left">
                    <img src={`${item.img}`} alt="" />
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
                      <p className="cart__item__cost">{item.price}</p>
                    </div>
                    <div className="cart__item__amount">
                      <button className="minus__cart__item">-</button>
                      <input
                        type="text"
                        defaultValue="1"
                        className="cart__item__amountinput"
                      />
                      <button className="add__cart__item">+</button>
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
              <p className="tamtinh">{calculatePrice()}</p>
            </div>
            <div className="cart__thanhtien">
              <p>Thành tiền:</p>
              <p className="thanhtien">{calculatePrice()}</p>
            </div>
            <button className="btnthanhtoan">THANH TOÁN NGAY</button>
            <button className="btntieptucmuahang">TIẾP TỤC MUA HANG</button>
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
