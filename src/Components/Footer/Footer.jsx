import React from "react";
import "./Footer.scss";
import { FooterLinks, FooterSocials } from "../../Utility/data";
import Buttons from "../Buttons/Buttons";
import Logo from "../../assets/images/Wordmark white_020859 1.png";

const Footer = () => {
  return (
    <div className=" section Footer">
      <div className="container-fluid d-lg-flex flex-column py-5">
        <a className="navbar-brand" href="#">
          <img src={Logo} className="Logo mb-5" />
        </a>
        <p className="mb-4">Rise by lifting Others</p>
        <div>
          <ul class="navbar-nav d-sm-inline-flex flex-sm-row flex-sm-nowrap ">
            {FooterLinks.map((items) => (
              <li className="pe-5 w-50">
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
        </div>
        <div class="d-flex justify-content-sm-between border-top border-1 pt-5 mt-5 row-gap-3 flex-wrap align-items-center">
          <span className="">© 2024 BuildGems. All rights reserved.</span>
          <ul class="navbar-nav d-flex flex-row">
            {FooterSocials.map((items) => (
              <li className="p-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={items.url}
                >
                  <img src={items.img} alt={items.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
