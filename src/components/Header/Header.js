import "./Header.scss";
import { useEffect, useState } from "react";
import DropDown from "../../common/DropDown";
import { DropdownToggle } from "reactstrap";

// const placeholderValue = ["Hỗ trợ sức khỏe", "Phụ kiện thể thao"];

function Header() {
  // const [value, setValue] = useState();
  // useEffect(() => {
  //   let i = 0;
  //   setInterval(() => {
  //     if (i === placeholderValue.length) {
  //       i = 0;
  //     }
  //     setValue(placeholderValue[i]);
  //     i++;
  //   }, 2000);
  //   console.log(i);
  // }, [value]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        <i
          className="fa fa-user-o icon"
          onMouseMove={() => setDropdownOpen(true)}
          //onMouseOut={() => setDropdownOpen(false)}
        />

        <i className="fa fa-shopping-bag icon" />
        <DropDown
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          itemActions={["Đăng nhập", "Đăng ký"]}
        />
      </div>
    </div>
  );
}

export default Header;
