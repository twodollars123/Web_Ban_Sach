import { Link } from "react-router-dom";

import { useStore, actions } from "../../store";

import "./DSTruyenTranh.scss";

function DSTruyenTranh() {
  const [state, dispatch] = useStore();
  const { dataComic } = state;

  const getItemDT = (data) => {
    let id = data;
    let dataItem = dataComic.filter((item) => item.id === id);
    console.log("a", dataItem[0]);
    dispatch(actions.addCartItem(dataItem[0]));
  };
  console.log("b", state.dataCartItems);

  return (
    <div className="listcomic__container">
      <div className="listcomic__top">
        <Link to="#danhsachtruyentranh" className="listcomic__titlelink">
          Truyện tranh
        </Link>
      </div>
      <div className="listcontent__content">
        {dataComic &&
          dataComic.map((comic) => {
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
                      <span onClick={() => getItemDT(comic.id)}>
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

export default DSTruyenTranh;
