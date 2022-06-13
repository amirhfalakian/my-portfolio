import React from "react";

import "./Header.scss";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/amirhfalakian">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.instagram.com/amirhfalakian/">
                <FaInstagram />
              </a>
              <a href="https://mobile.twitter.com/morrriiison">
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}Hello, I'M{" "}
              <span className="highlighted-text">AmirHossein</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>Front-End Developer</h1>
              <span className="profile-role-tagline">Web Development</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a
              href="امیرحسین فلکیان_1401-3-19.pdf"
              download="امیرحسین فلکیان_1401-3-19.pdf "
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
