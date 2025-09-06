import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState();

  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const handleOver = contextSafe(() => {
    gsap.to(".RightICON", { rotation: 180 });
  });

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            ref={container}
            onMouseEnter={handleOver}
            className="hover:text-[#FD356E] cursor-pointer RightICON"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {""}
            <i className="ri-arrow-drop-down-fill"></i>
          </button>
          {""}
          <Dropdown
            className=""
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />{" "}
        </>
      ) : (
        <a
          className="block font-inherit text-inherit text hover:text-[#FD356E] cursor-pointer"
          href="/#"
        >
          {" "}
          {items.title}{" "}
        </a>
      )}{" "}
    </li>
  );
};

export default MenuItems;
