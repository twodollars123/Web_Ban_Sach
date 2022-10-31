import React, { useState } from "react";
import { useStore, actions } from "../../store";
import { Link } from "react-router-dom";
import "./Menu.scss";

function Nav({ data }) {
  return (
    <>
      {data &&
        data.map((item) => {
          if (!item?.children) {
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
                  <SubNav data={item.children} />
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
          if (!item?.children) {
            return (
              <li key={item.id} className="menu_subnav_item">
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          } else {
            return (
              <li key={item.id} className="menu_subnav_item isChildren">
                <Link to={item.path}>{item.label}</Link>

                <SubNav data={item.children} />
              </li>
            );
          }
        })}
    </ul>
  );
}

function Menu() {
  const [state] = useStore();
  const { menuData } = state;

  return (
    <div className="menu_container">
      <ul className="menu_nav">
        <Nav data={menuData} />
      </ul>
    </div>
  );
}

export default Menu;
