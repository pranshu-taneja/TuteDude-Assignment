import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TuteDudeLogo from "../../assets/TuteDudeLogo.jpg";
import "./Navbar.css";
import dropdown from "../../assets/dropdown.png";
import userLogo from "../../assets/userLogo.png";
import { useState } from "react";
import dropdownwhite from "../../assets/dropdownwhite.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isactive, setIsactive] = useState("ProfileName");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    const pagelinks = document.querySelector(".pagelinks-mobile");
    //toggle the display of pagelinks
    pagelinks.style.display = isDropdownOpen ? "flex" : "none";
  };

  const toggleActive = (value) => {
    setIsactive(value);
  };

  useEffect(() => {
    const setOpacity = () => {
      const activelink = document.querySelector(".link.active");
      const inactivelinks = document.querySelectorAll(".link:not(.active)");

      if (activelink) {
        activelink.style.opacity = 1;
        inactivelinks.forEach((link) => {
          link.style.opacity = 0.25;
        });
      }
    };
    setOpacity();
  }, [isactive]);

  return (
    <nav className="NavbarContainer">
      <ul>
        <div className="tutedudelogo">
          <li>
            <Link to="/">
              <img src={TuteDudeLogo} alt="" />
            </Link>
          </li>
        </div>

        <div className="resNav">
          <div className="ddmenu">
            <button
              onClick={toggleDropdown}
              className={`dropdown-button ${isDropdownOpen ? "active" : ""}`}
            >
               {isactive} &nbsp; 
              <img src={dropdownwhite} className="dropdownLogo" alt="" />
            </button>
            {isDropdownOpen && <NavLinksMobile />}
          </div>
        </div>

        <div className="pagelinks">
          <li className="nav-link MyAssignment">
            <Link
              className={`link ${isactive === "MyAssignment" ? "active" : ""}`}
              onClick={() => {
                toggleActive("MyAssignment");
              }}
              to="/MyAssignment"
            >
              My Assignment
            </Link>
          </li>
          <li className="nav-link ChatMentor">
            <Link
              className={`link ${isactive === "ChatMentor" ? "active" : ""}`}
              onClick={() => {
                toggleActive("ChatMentor");
              }}
              to="/ChatMentor"
            >
              Chat with Mentor
            </Link>
          </li>
          <li className="nav-link ProfileName">
            <Link
              to={"/ReferEarn"}
              className={`DropDownLink link ${
                isactive === "ProfileName" ? "active" : ""
              }`}
              onClick={() => {
                toggleActive("ProfileName");
              }}
            >
              <img src={userLogo} className="ProfileLogo" alt="" />
              &nbsp; ProfileName &nbsp;
              <img src={dropdown} className="dropdownLogo" alt="" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

function NavLinksMobile() {
  const [isactive, setIsactive] = useState("ProfileName");

  const toggleActive = (value) => {
    setIsactive(value);
  };

  useEffect(() => {
    const setOpacity = () => {
      const activelink = document.querySelector(".link.active");
      const inactivelinks = document.querySelectorAll(".link:not(.active)");

      if (activelink) {
        activelink.style.opacity = 1;
        inactivelinks.forEach((link) => {
          link.style.opacity = 1;
        });
      }
    };
    setOpacity();
  }, [isactive]);

  return (
    <div className="pagelinks-mobile">
      <li className="nav-link MyAssignment">
        <Link
          className={`link ${isactive === "MyAssignment" ? "active" : ""}`}
          onClick={() => {
            toggleActive("MyAssignment");
          }}
          to="/MyAssignment"
        >
          My Assignment
        </Link>
      </li>
      <li className="nav-link ChatMentor">
        <Link
          className={`link ${isactive === "ChatMentor" ? "active" : ""}`}
          onClick={() => {
            toggleActive("ChatMentor");
          }}
          to="/ChatMentor"
        >
          Chat with Mentor
        </Link>
      </li>
      <li className="nav-link ProfileName">
        <Link
          to={"/ReferEarn"}
          className={`DropDownLink link ${
            isactive === "ProfileName" ? "active" : ""
          }`}
          onClick={() => {
            toggleActive("ProfileName");
          }}
        >
          <img src={userLogo} className="ProfileLogo" alt="" />
          &nbsp; ProfileName &nbsp;
          <img src={dropdown} className="dropdownLogo" alt="" />
        </Link>
      </li>
    </div>
  );
}
export default Navbar;
