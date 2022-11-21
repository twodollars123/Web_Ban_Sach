import React from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ApiServices from "../../ApiServices/index";
import { useState, useEffect } from "react";

import {Spinner} from 'reactstrap'

function Detail() {
  let { idPrd } = useParams();
  const navigate = useNavigate();
  if (!idPrd) navigate("../");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await ApiServices.productsById(idPrd);
    setLoading(false);
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [idPrd]);

  return loading ? <Spinner></Spinner> : <div>product</div>;
}

export default Detail;
