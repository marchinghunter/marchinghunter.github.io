import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "../Style/Home.css";

const Navbar = ({
  handleaboutClick,
  handleskillClick,
  handleprojectClick,
  handlepcontactClick,
}) => {
  const [showhamburger, setshowHamburger] = useState(false);
  const hamburgermenu = () => {
    setshowHamburger(!showhamburger);
  };
  return (
    <>
      <div className="navigationheader animate__animated animate__fadeInDown">
        <ul className="nav animate__animated animate__fadeInDown">
          <li className="about " onClick={handleaboutClick}>
            About
          </li>
          <li
            className="skills animate__animated animate__fadeInDown"
            onClick={handleskillClick}
          >
            Skills
          </li>
          <li
            className="projects animate__animated animate__fadeInDown"
            onClick={handleprojectClick}
          >
            Projects
          </li>
          <li
            className="contact animate__animated animate__fadeInDown"
            onClick={handlepcontactClick}
          >
            Contact
          </li>
        </ul>
      </div>
      {showhamburger ? (
        <div className="hamburgermenucontainer">
          <div
            className="cross animate__animated animate__fadeInRight"
            onClick={hamburgermenu}
          >
            <ImCross />
          </div>
          <div className="hamburgermenu">
            <ul className="nav animate__animated animate__fadeInDown">
              <li className="about " onClick={handleaboutClick}>
                About
              </li>
              <li
                className="skills animate__animated animate__fadeInDown"
                onClick={handleskillClick}
              >
                Skills
              </li>
              <li
                className="projects animate__animated animate__fadeInDown"
                onClick={handleprojectClick}
              >
                Projects
              </li>
              <li
                className="contact animate__animated animate__fadeInDown"
                onClick={handlepcontactClick}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          className="hamburger animate__animated animate__fadeInRight"
          onClick={hamburgermenu}
        >
          <GiHamburgerMenu />
        </div>
      )}
    </>
  );
};

export default Navbar;
