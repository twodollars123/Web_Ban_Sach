import React from "react";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ApiServices from "../../ApiServices/index";
import { useState, useEffect } from "react";

import {Spinner} from 'reactstrap'

function Category() {
  let { idCategory } = useParams();
  const navigate = useNavigate();
  if (!idCategory) navigate("../");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await ApiServices.productsByIdCategory(idCategory);
    setLoading(false);
    setData(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [idCategory]);

  return loading ? <Spinner></Spinner> : <div>index</div>;
}

export default Category;
