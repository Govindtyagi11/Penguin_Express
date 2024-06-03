import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { RiHeartPulseFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";


function Navbar({ isSidebarVisible, toggleSidebar }) {
  const handlerLogOut = () => {
    localStorage.removeItem("token_tr");
    window.location.href = '/';
  };

  const [profileVisible, setProfileVisible] = useState(false);
  const toggleProfileVisibility = () => {
    setProfileVisible(!profileVisible);
  };

  return (
    <div className="navbar dashboard_home">
      <div className="nav_left">
        <div className="sidebar_show_btn" onClick={toggleSidebar}>
          <BiMenu />
        </div>
        <Link to="system-health">
        <div className="heart_icon">
          <RiHeartPulseFill />
        </div>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <div className="select_input">
              <select name="language" id="language">
                <option value="volvo">Select Language</option>
                <option value="volvo">English</option>
                <option value="saab">Hindi</option>
                <option value="mercedes">Punjabi</option>
                <option value="audi">Urdu</option>
              </select>
            </div>
          </li>
          {/* <li>
            <div className="nav_icon">
              <i className="material-icons search_icon">dark_mode</i>
            </div>
          </li> */}
          <li className="profile_li">
            <div className="nav_icon" onClick={toggleProfileVisibility}>
              <CgProfile />
            </div>
            <div
              className="nav_profile_con"
              style={{ display: `${profileVisible ? "block" : "none"}` }}
            >
              <div className="profile_content">
                Welcome <span>Administrator</span>!
              </div>
              <Link to="administrator-profile">
              <div className="profile_content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <p>Profile</p>
              </div>
              </Link>
              <div className="profile_content" onClick={handlerLogOut}>
                <MdLogout />
                <input type="button" value="Logout" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
