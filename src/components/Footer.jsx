import { Link } from "react-router-dom";
import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Left Section */}
          <div className="col-md-5 mb-4">
            <h1
              className="fw-bold mb-3"
              style={{ color: "#2563eb" }}
            >
              AurigaX
            </h1>

            <p className="footer-text">
              Compare rides, find the best prices,
              <br />
              and travel smarter with AurigaX.
            </p>

            <button className="btn btn-primary mt-2">
              Download Now
            </button>

            <div className="d-flex gap-4 mt-4 fs-4">
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedin />
              <FaRedditAlien />
              <FaYoutube />
            </div>
          </div>

          {/* Middle Section */}
          {/* Middle Section */}
<div className="col-md-3 mb-4">
  <ul className="list-unstyled">
  <li className="mb-3">
    <Link to="/about" className="footer-link text-decoration-none">
      About
    </Link>
  </li>

  <li className="mb-3">
    <Link to="/contact" className="footer-link text-decoration-none">
      Contact
    </Link>
  </li>

 <li className="mb-3">
  <Link
    to="/blogs"
    className="footer-link text-decoration-none"
  >
    Blogs
  </Link>
</li>

  <li className="mb-3">
    <a
      href="#"
      className="footer-link text-decoration-none"
    >
      Careers
    </a>
  </li>
</ul>
</div>

{/* Right Section */}
<div className="col-md-4 mb-4">
  <ul className="list-unstyled">
    <li className="mb-3">
  <Link to="/terms" className="footer-link">
    Terms of Service
  </Link>
</li>
   <li className="mb-3">
  <Link to="/privacy-policy" className="footer-link">
    Privacy Policy
  </Link>
</li>
    <li className="mb-3 footer-link">Refunds & Cancellation</li>
  </ul>
</div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-text mb-0">
          © 2026 AurigaX Technologies Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;