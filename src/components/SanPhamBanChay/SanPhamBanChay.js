import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SanPhamBanChay.scss";

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
import * as ApiServices from "../../ApiServices";
import convertVND from "../../ultis/convertVND";

function SanPhamBanChay() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const data = await ApiServices.bestseller();
    setLoading(false);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid="md" className="bestseller__container">
      <Link to="#" className="bestseller__title__link">
        Sản phẩm bán chạy
      </Link>
      <div className="">
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Row xs="1" sm="3" md="5" lg="5" xl="5" xxl="5" className="g-2">
            {data &&
              data.map((prd) => (
                <Col key={prd.id}>
                  <Link to={'#'}>
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
                            <i className="fa fa-shopping-basket" />
                          </span>
                          <span>
                            <i className="fa fa-shopping-cart" />
                          </span>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        )}
      </div>
    </Container>
  );
}

export default SanPhamBanChay;
