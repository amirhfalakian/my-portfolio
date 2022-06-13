import React, { useState } from "react";

import { images } from "../../constants";
import "./Footer.scss";
import { client } from "./../../client";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div className="footer__container">
      <h2 className="head-text">Contact Me</h2>
      <div className="footer__cards">
        <div className="footer__card">
          <img src={images.email} alt="email" />
          <a href="mailto: amirfalakian4@gmail.com" className="p-text">
            amirfalakian4@gmail.com
          </a>
        </div>
        <div className="footer__card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+98 911 677 0325" className="p-text">
            +98 911 677 0325
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="footer__form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div className="success-message">
          <h3 className="head-text">Thank You For Getting in Touch</h3>
        </div>
      )}
    </div>
  );
};

export default Footer;
