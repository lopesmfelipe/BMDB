import React from "react";
import "./styles/general.css"
import "./styles/header.css";

const Header = () => {
  return (
    <>
      <header className="titleHead">
        <div className="title-container">
          <p>NEO</p>
        </div>
      </header>

      <div className="bar-header">
        <div className="bar-header-container">
          <p>Library</p>
        </div>
      </div>
    </>
  );
}

export default Header;