import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
// import Button from "../Button/Button";
import { useStore,actions } from "../../store";
import convertVND from "../../ultis/convertVND";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ModalCustom() {
  const [state,dispatch] = useStore();
  const setOpenModal = (show) =>{
    dispatch(actions.setShowModal(show));
  }
  useEffect(() => {
  }, [state.showModal])
  return (
    <Modal
      isOpen={state.showModal}
      toggle={() => setOpenModal(false)}
    >
      <ModalHeader toggle={() => setOpenModal(false)}> Sản phẩm vừa thêm vào giỏ</ModalHeader>
      <ModalBody>
        <div className={cx("content_modal")}>
          <img src={`${state.dataModal?.image}`} alt="" />
          <div className={cx("content_item")}>
            <p>{state.dataModal?.name}</p>
            <p>{convertVND(parseInt(state.dataModal?.price))}</p>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className={cx("action_modal")}>
          <p>Giỏ hàng hiện có {state.dataCartItems.length}</p>
          <Button href="../payment" sl primary>
            Tiến hành thanh toán
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default ModalCustom;
