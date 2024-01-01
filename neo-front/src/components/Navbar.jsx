import React from "react";
import "./styles/general.css"
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="icon-container">
          <span className="material-symbols-outlined">library_books</span>
          <div className="icon-name">Library</div>
        </div>

        <div className="icon-container">
          <span className="material-symbols-outlined">explore</span>
          <div className="icon-name">Explore</div>
        </div>

        <div className="icon-container">
          <span className="material-symbols-outlined">
            local_fire_department
          </span>
          <div className="icon-name">Popular</div>
        </div>

        <div className="icon-container">
          <span className="material-symbols-outlined">
            circle_notifications
          </span>
          <div className="icon-name">Updates</div>
        </div>

        <div className="icon-container">
          <span className="material-symbols-outlined">settings</span>
          <div className="icon-name">Settings</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
