import React, { useEffect, useState } from "react";

import * as ApiServices from "../../ApiServices";
// import { useStore, actions } from "../../store";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { useStore } from "../../store";

function Menu() {
  const [state] = useStore();
  const menus = state.menus;
  const categories = state.categories;
  const findCategoryByID = (id) => {
    return categories.find((category) => category?._id === id);
  };

  const connectMenuToCategory = (menu) => {
    if (menu.categories.length > 0) {
      return (
        <li key={menu?._id} className={"menu_nav_item"}>
          {menu?.label}
          <ul className="menu_subnav">
            {menu.categories.map((category) =>
              treeCategory(findCategoryByID(category._id))
            )}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={menu?._id} className={"menu_nav_item"}>
          {menu.label}
        </li>
      );
    }
  };

  const treeCategory = (category) => {
    if (category?.childrens) {
      return (
        <li key={category._id} className="menu_subnav_item">
          <Link to={category.path}>{category.name}</Link>
          <ul className="">
            {category.childrens.map((item) => treeCategory(item))}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={category._id} className="menu_subnav_item">
          <Link to={category.path}>{category.name}</Link>
        </li>
      );
    }
  };

  return (
    <div className="menu_container">
      <ul className="menu_nav">
        {menus.map((menu) => connectMenuToCategory(menu))}
      </ul>
    </div>
  );
}

export default Menu;
