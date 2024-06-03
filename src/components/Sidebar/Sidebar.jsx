import React, { useState } from "react";
import SideBarRoute from "../../routes/Sidebar";
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function Sidebar({ isVisible, toggleSidebar }) {
  const [visibleSubMenu, setVisibleSubMenu] = useState();

  const toggleSubMenu = (i) => {
    setVisibleSubMenu(visibleSubMenu === i ? null : i);
  };

  return (
    <div className={`sidebar ${isVisible ? "visible" : "hidden"}`}>
      <div className="side_comp">
        <div className="sidebar_hide_btn" onClick={toggleSidebar}>
          <MdClose />
        </div>
        <ul>
          {SideBarRoute?.map((route, i) => (
            <li key={i} className="side_comp_menu">
              <Link to={route.path} className="side_comp_cont" onClick={() => toggleSubMenu(i)}>
                <div className="icon">{route.icon}</div>
                <span>{route.name}</span>
                <div className="toggle_submenu_icon">
                  {route?.toggleArrowButton && (visibleSubMenu === i ? <FaAngleUp /> : <FaAngleDown />)}
                </div>
              </Link>
              <ul className="sub_menu" style={{ display: `${visibleSubMenu === i ? "block" : "none"}` }}>
                {route?.submenu?.map((submenuItem, j) => (
                  <li key={j}>
                    <Link to={submenuItem.path}>
                      <div className="icon">{submenuItem.icon}</div>
                      <span>{submenuItem.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
