import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <h1 className="text-center">Share used products and enjoy together</h1>
//       <p className="text-center mt-3">
//         <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
//         <Link to="/policy">Privacy Policy</Link>
//       </p>
//     </div>
//   );
// };

// new
const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          <img
            src="/images/logo.png"
            className="header-logo-img"
            width={"12%"}
          />
          Household <span>Smart Share</span>
        </h3>
        <p class="footer-links">
          <a href="#" class="link-1">
            Home
          </a>

          <a href="/about">About</a>

          <a href="/contact">Contact</a>

          <a href="/policy">Privacy Policy</a>
        </p>

        <p class="footer-company-name">
          Household <span>Smart Share</span> © 2015
        </p>
      </div>

      <div class="footer-center">
        <div>
          <FaMapMarkerAlt /> BSMRSUT,Gopalgonj,Bangladesh
        </div>

        <div>
          <BiPhoneCall /> <p>01819984687</p>
        </div>

        <div>
          <MdOutlineMail />
          <p>
            <a href="imranhosen.bsmrstu@gmail.com">
              imranhosen.bsmrstu@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          People have always felt the need to belong to be part of something
          bigger than themselves. That is one of the reasons why communities
          were formed.
        </p>

        <div class="footer-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
//end

export default Footer;
