import { Dropdown, DropdownMenu, DropdownItem } from "reactstrap";

function DropDown(props) {
  const toggle = () => props.setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={props.dropdownOpen} toggle={toggle}>
      <DropdownMenu onMouseLeave={() => props.setDropdownOpen(false)}>
        {/* <DropdownItem header>Header</DropdownItem> */}
        {props.itemActions.map((item, index) => (
          <div key={index}>
            <DropdownItem>{item}</DropdownItem>
            {/* <DropdownItem divider /> */}
          </div>
        ))}
        {/* <DropdownItem>{props.</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;
