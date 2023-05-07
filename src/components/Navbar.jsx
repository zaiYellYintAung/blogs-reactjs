import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-brand">
          <strong className="navbar-item">My App</strong>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>

            <NavLink className="navbar-item" to="/blogs">
              Blogs
            </NavLink>

            <NavLink className="navbar-item" to="/ecom">
              Ecom
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/signup">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
