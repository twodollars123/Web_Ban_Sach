import React, { useEffect, useState } from "react";

import * as ApiServices from "../../ApiServices";
// import { useStore, actions } from "../../store";
import { Link } from "react-router-dom";
import "./Menu.scss";

function Nav({ data }) {
  const [subnav, setSubnav] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await ApiServices.categories();
      console.log("a", result);
      setSubnav(result);
    };
    fetchApi();
  }, []);
  return (
    <>
      {data &&
        data.map((item) => {
          if (!item?.categories) {
            return (
              <li key={item.id} className="menu_nav_item">
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          } else {
            return (
              <li key={item.id} className="menu_nav_item isChilren">
                <Link to={item.path}>{item.label}</Link>
                <ul className="menu_subnav">
                  <SubNav data={subnav} />
                </ul>
              </li>
            );
          }
        })}
    </>
  );
}

function SubNav({ data }) {
  return (
    <ul>
      {data &&
        data.map((item) => {
          if (!item?.categories) {
            return (
              <li key={item.id} className="menu_subnav_item">
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          } else {
            return (
              <li key={item.id} className="menu_subnav_item isChildren">
                <Link to={item.path}>{item.name}</Link>

                {/* <SubNav data={} /> */}
              </li>
            );
          }
        })}
    </ul>
  );
}

function Menu() {
  // const [state] = useStore();
  // const { menuData } = state;
  const [nav, setNav] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await ApiServices.menus();
      console.log("result", result);
      setNav(result);
    };
    fetchApi();
  }, []);

  return (
    <div className="menu_container">
      <ul className="menu_nav">
        <Nav data={nav} />
      </ul>
    </div>
  );
}

export default Menu;
