import { Link } from "react-router-dom";
import "./styles/general.css";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
          <div className="icon-container">
            <span className="material-symbols-outlined">library_books</span>
            <div className="icon-name">Home</div>
          </div>
        </Link>

      <Link to="/explore" style={{ textDecoration: "none", color: "inherit"}}>
        <div className="icon-container">
          <span className="material-symbols-outlined">explore</span>
          <div className="icon-name">Search</div>
        </div>
      </Link>
      </nav>
    </>
  );
};

export default Navbar;
