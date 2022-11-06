import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useStore, actions } from "../../store";
import Modal from "../Modal/Modal";
import * as ApiServices from "../../ApiServices";

import "./DSTruyenTranh.scss";

function DSTruyenTranh() {
  const [state, dispatch] = useStore();
  const { dataComic } = state;

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await ApiServices.products();
      setData(result);
    };
    fetchApi();
  }, []);

  const getItemDT = (data) => {
    setShowModal(true);
    dispatch(actions.addCartItem(data));
  };

  return (
    <div className="listcomic__container">
      <div className="listcomic__top">
        <Link to="#danhsachtruyentranh" className="listcomic__titlelink">
          Truyện tranh
        </Link>
      </div>
      <div className="listcontent__content">
        {data &&
          data.map((comic) => {
            return (
              <Link key={comic.id}>
                <div className="listcontent__content__item">
                  <div className="listcontent__content__item__top">
                    <img
                      src={`${comic.image}`}
                      alt=""
                      className="listcontent__content__item__img"
                    />
                    <div className="listcomic__action">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <span onClick={() => getItemDT(comic)}>
                        <i className="fa fa-shopping-cart" />
                      </span>
                    </div>
                  </div>
                  <p className="listcontent__content__item__title">
                    {comic.name}
                  </p>
                  <p className="listcontent__content__item__bottom">
                    {comic.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
      {showModal && <Modal setOpenModal={setShowModal} />}
    </div>
  );
}

export default DSTruyenTranh;
