import MenuItems from "./MenuItems";
import "./Dropdown.css";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? "show" : ""
      } absolute top-10 z-10 hidden rounded-md bg-[#181616] text-white p-2 `}
    >
      {" "}
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </ul>
  );
};

export default Dropdown;


