import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logos.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nv-navbar">
      <div className="nv-container">

        <div className="nv-logo">
          <img src={logo} alt="Aadrila Technologies" className="nv-logo-img" />
        </div>

        <div
          className="nv-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>

        <ul className={`nv-menu ${open ? "open" : ""}`}>

          <li>
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nv-item nv-active" : "nv-item"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/industries"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nv-item nv-active" : "nv-item"
              }
            >
              Industries
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nv-item nv-active" : "nv-item"
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nv-item nv-active" : "nv-item"
              }
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nv-item nv-active" : "nv-item"
              }
            >
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nv-item nv-active" : "nv-item"
              }
            >
              About Us
            </NavLink>
          </li>

          <li className="mobile-only">
            <button className="nv-btn mobile-btn">Get a Demo</button>
          </li>

        </ul>

        <button className="nv-btn desktop-btn">Get a Demo</button>

      </div>
    </nav>
  );
};

export default Navbar;
