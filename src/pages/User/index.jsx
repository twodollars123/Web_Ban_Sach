import React from "react";
import "./index.scss";
import * as ApiServices from "../../ApiServices/index";
import { useState, useEffect } from "react";
import { useStore } from "../../store";

import {Spinner} from 'reactstrap'
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [state] = useStore();
  const fetchData = async () => {
    const data = await ApiServices.userProfile();
    if(!data) navigate('../dangnhap')
    setLoading(false);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return loading ? <Spinner></Spinner> : <div>{data?.name}</div>;
}

export default User;
