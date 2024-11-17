import React from "react";
import { NavLinks } from "../../Utility/data";
import Buttons from "../Buttons/Buttons";
import Logo from "../../assets/images/BuildGems_124642 1.png";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="section border-bottom">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-1 mb-lg-0">
              {NavLinks.map((items) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={items.path}
                  >
                    {items.title}
                  </a>
                </li>
              ))}
            </ul>
            <form class="d-flex" role="search">
              <Buttons
                text="Become a mentor"
                className="btn-secondary"
                type="submit"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
