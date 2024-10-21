import React, { useEffect, useState } from "react";
//Import CSS
import "./Nav.css";
//Import images
import netflixLogo from "../../assets/images/netflixLogo.png";
import profilePicture from "../../assets/images/netflix-profile-picture.jpg";
function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="container">
        <img src={netflixLogo} alt="Netflix Logo" className="nav_logo" />
        <img
          src={profilePicture}
          alt="Netflix Profile"
          className="nav_avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
