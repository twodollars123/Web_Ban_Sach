import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as ApiServices from "../../ApiServices";
import convertVND from "../../ultis/convertVND";
import { useStore, actions } from "../../store";
import Modal from "../Modal/Modal";
import {
  CardSubtitle,
  CardTitle,
  CardBody,
  Card,
  Row,
  Col,
  Container,
  Spinner,
} from "reactstrap";

function DSDungCuHocTap() {
  const [state, dispatch] = useStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await ApiServices.productsByNameCategory("Dụng cụ học tập");
    setLoading(false);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getItemDT = async(data) => {
    await dispatch(actions.setShowModal(true));
    await dispatch(actions.setDataModal(data));
    await dispatch(
      actions.addCartItem({ ...data, quantity: 1, totalPrice: data.price })
    );
  };
  return (
    <Container fluid="md" className="listcomic__container">
      <div className="listcomic__top">
        <Link to="#danhsachtruyentranh" className="listcomic__titlelink">
          Dụng cụ học tập
        </Link>
      </div>
      <div className="">
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Row xs="1" sm="3" md="5" lg="5" xl="5" xxl="5" className="g-2">
            {data &&
              data.map((prd) => (
                <Col key={prd.id}>
                    <Card className="card__prd">
                      <img alt="Sample" src={prd.image} />
                      <CardBody>
                        <CardTitle tag="h6" className="card__title">
                          {prd.name}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          {convertVND(prd.price)}
                        </CardSubtitle>
                        <div className="card__action">
                        <span>
                        <Link to={`../product/${prd.id}`} className='text-dark'>
                        <img src="https://img.icons8.com/ios/20/null/search--v1.png"/>
                        </Link>
                      </span>
                          <span onClick={() => getItemDT(prd)}>
                            <i className="fa fa-shopping-cart" />
                          </span>
                        </div>
                      </CardBody>
                    </Card>
                  
                </Col>
              ))}
          </Row>
        )}
      </div>
    </Container>
  );
}

export default DSDungCuHocTap;
