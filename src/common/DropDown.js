import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

function DropDown(props) {
  const toggle = () => props.setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={props.dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <Link to="/dangnhap">
          <i
            className="fa fa-user-o icon"
            onMouseMove={() => props.setDropdownOpen(true)}
            //onMouseOut={() => setDropdownOpen(false)}
          />
        </Link>
      </DropdownToggle>
      <DropdownMenu onMouseLeave={() => props.setDropdownOpen(false)}>
        <DropdownItem>
          <Link to="/dangnhap">Đăng nhập</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/dangky">Đăng ký</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;
