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

    <div className="row gy-4">

      {/* Brand */}
      <div className="col-lg-4">

        <h2
          className="fw-bold mb-3"
          style={{ color: "#2563eb" }}
        >
          AurigaX
        </h2>

        <p className="footer-text">
          Compare cabs, buses and travel providers
          in one place. Save time, compare fares
          and travel smarter with AurigaX.
        </p>

        <button className="btn btn-primary mt-2">
          Compare Providers
        </button>

        <div className="d-flex gap-4 mt-4 fs-4">

         <div className="d-flex gap-4 mt-4 fs-4">

  <a href="#" className="footer-social">
    <FaXTwitter />
  </a>

  <a href="#" className="footer-social">
    <FaInstagram />
  </a>

  <a href="#" className="footer-social">
    <FaLinkedin />
  </a>

  <a href="#" className="footer-social">
    <FaRedditAlien />
  </a>

  <a href="#" className="footer-social">
    <FaYoutube />
  </a>

</div>

        </div>

      </div>

      {/* Company */}
      <div className="col-lg-2 col-md-4">

        <h5 className="fw-bold mb-3">
          Company
        </h5>

        <ul className="list-unstyled">

          <li className="mb-2">
            <Link
              to="/about"
              className="footer-link text-decoration-none"
            >
              About
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="/blogs"
              className="footer-link text-decoration-none"
            >
              Blogs
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="/contact"
              className="footer-link text-decoration-none"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

      {/* Product */}
      <div className="col-lg-3 col-md-4">

        <h5 className="fw-bold mb-3">
          Product
        </h5>

        <ul className="list-unstyled">

          <li className="mb-2 footer-link">
            Compare Cabs
          </li>

          <li className="mb-2 footer-link">
            Compare Buses
          </li>

          <li className="mb-2 footer-link">
            Trains (Coming Soon)
          </li>

          <li className="mb-2 footer-link">
            Flights (Coming Soon)
          </li>

        </ul>

      </div>

      {/* Legal */}
      <div className="col-lg-3 col-md-4">

        <h5 className="fw-bold mb-3">
          Legal
        </h5>

        <ul className="list-unstyled">

          <li className="mb-2">
            <Link
              to="/terms"
              className="footer-link text-decoration-none"
            >
              Terms of Service
            </Link>
          </li>

          <li className="mb-2">
            <Link
              to="/privacy-policy"
              className="footer-link text-decoration-none"
            >
              Privacy Policy
            </Link>
          </li>

          <li className="mb-2 footer-link">
            Refunds & Cancellation
          </li>

        </ul>

      </div>

    </div>

    <hr className="footer-divider my-4" />

    <div className="d-md-flex justify-content-between align-items-center">

      <p className="footer-text mb-0">
        © 2026 AurigaX Technologies Pvt. Ltd.
        All Rights Reserved.
      </p>

      <p className="footer-text mb-0">
        Compare • Save • Travel Smarter
      </p>

    </div>

  </div>
</footer>
  );
}

export default Footer;