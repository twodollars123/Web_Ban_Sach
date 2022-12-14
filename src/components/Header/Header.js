import { useState,useEffect } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Header.scss";
import { useStore, actions } from "../../store";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const [dropdownOpenCart, setDropdownOpenCart] = useState(false);
  const [state, dispatch] = useStore();

  const logout = () => {
    localStorage.clear();
    dispatch(actions.setAuth(false));
    window.location.replace("./");
  };

  return (
    <div className="header_container">
      <div className="header_logo">
        <img
          src="https://bizweb.dktcdn.net/100/386/441/themes/869880/assets/logo.png?1658716179964"
          alt=""
        />
      </div>
      <div className="header_search">
        <input placeholder="enter keyword to search" />
        <button className="header_btnSearch">
          <i className="fa fa-search icon" />
        </button>
      </div>
      <div className="header_contact">
        <p>Giờ mở cửa(8:00 - 18:00 tối)</p>
        <p className="phone_number">094.1234.828</p>
      </div>
      <div className="header_actions">
        {state.isAuth ? (
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="login_toggle">
              <i
                className="fa fa-user-o icon"
                onClick={() => setDropdownOpen(true)}
              />
            </DropdownToggle>
            <DropdownMenu onClick={() => setDropdownOpen(false)}>
              <DropdownItem>
                <Link to={"../user"}>Profile</Link>
              </DropdownItem>
              <DropdownItem>
                <div onClick={logout}>Đăng xuất</div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="login_toggle">
              <i
                className="fa fa-user-o icon"
                onClick={() => setDropdownOpen(true)}
              />
            </DropdownToggle>
            <DropdownMenu onClick={() => setDropdownOpen(false)}>
              <DropdownItem>
                <Link to="/dangnhap">Đăng nhập</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/dangky">Đăng ký</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}

        <Dropdown isOpen={dropdownOpenCart}>
          <DropdownToggle className="login_toggle">
            <Link to="/giohang">
              <i className="fa fa-shopping-bag icon" />
            </Link>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <p>Không có sản phẩm nào</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
