import classNames from "classnames/bind";

import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import { useStore } from "../../store";

const cx = classNames.bind(styles);

function Modal({ setOpenModal }) {
  const [state] = useStore();
  const { dataCartItems } = state;

  return (
    <div className={cx("modal__wrapper")}>
      <div className={cx("modal")}>
        <div className={cx("header_modal")}>
          <h3 className={cx("title_header__modal")}>
            Sản phẩm vừa thêm vào giỏ
          </h3>
          <span className={cx("close_btn")} onClick={() => setOpenModal(false)}>
            <i className="fa fa-close" />
          </span>
        </div>
        <div className={cx("content_modal")}>
          <img src={`${dataCartItems[dataCartItems.length - 1].img}`} alt="" />
          <div className={cx("content_item")}>
            <p>{dataCartItems[dataCartItems.length - 1].name}</p>
            <p>{dataCartItems[dataCartItems.length - 1].price}</p>
          </div>
        </div>
        <div className={cx("action_modal")}>
          <p>Giỏ hàng hiện có {dataCartItems.length}</p>
          <Button sl primary onClick={() => setOpenModal(false)}>
            Tiến hành thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
