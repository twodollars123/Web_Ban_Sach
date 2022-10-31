import { useStore, actions } from "../../store";

import { Link } from "react-router-dom";

function DSDungCuHocTap() {
  const [state] = useStore();
  const { dataBag } = state;
  return (
    <div className="listcomic__container">
      {}
      <div className="listcomic__top">
        <Link to="#danhsachtruyentranh" className="listcomic__titlelink">
          Dụng cụ học tập
        </Link>
      </div>
      <div className="listcontent__content">
        {dataBag &&
          dataBag.map((comic) => {
            return (
              <Link to={comic.path} key={comic.id}>
                <div className="listcontent__content__item">
                  <div className="listcontent__content__item__top">
                    <img
                      src={`${comic.img}`}
                      alt=""
                      className="listcontent__content__item__img"
                    />
                    <div className="listcomic__action">
                      <span>
                        <i className="fa fa-shopping-basket" />
                      </span>
                      <span>
                        <i className="fa fa-shopping-cart" />
                      </span>
                    </div>
                  </div>
                  <p className="listcontent__content__item__title">
                    {comic.name}
                  </p>
                  <p className="listcontent__content__item__bottom">
                    {comic.price}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default DSDungCuHocTap;
