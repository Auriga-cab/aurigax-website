import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  // Route change hote hi mobile navbar close ho jayega
  useEffect(() => {
    const navbar = document.getElementById("mainNavbar");
    if (navbar) {
      navbar.classList.remove("show");
    }
  }, [location]);

  const navClass = ({ isActive }) =>
    `nav-link fw-bold px-3 ${
      isActive
        ? "text-info"
        : darkMode
        ? "text-white"
        : "text-dark"
    }`;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm ${
        darkMode ? "bg-dark navbar-dark-blue" : "bg-white navbar-light"
      }`}
    >
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "60px",
              width: "140px",
              position: "absolute",
              top: "-4px",
              left: "50px",
              zIndex: "1000",
            }}
          />
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Center Links */}
          <div className="navbar-nav mx-auto">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>

            <NavLink to="/blogs" className={navClass}>
              Blogs
            </NavLink>
          </div>

          {/* Dark Mode Button */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;