import React from "react";
import "./Footer.css";
import { FaGg } from "react-icons/fa";
import { RiMapPin2Line } from "react-icons/ri";
import { MdPhone, MdOutlineMail } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreditCard from "../../../src/Assets/Images/payment.png";
import { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState();
  return (
    <>
      <footer>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>
                <i>{<FaGg />}</i>GrocerGo
              </h3>
              <p>
              GrocerGo brings the market to your fingertips — enjoy a seamless shopping experience with a wide range of groceries, all delivered with care and convenience.
              </p>
            </div>

            {/* Contact Section */}

            <div className="box">
              <h3>Contact Us </h3>
              <Link className="links">
                <i>
                  <MdPhone />
                </i>
                +91 1234567890
              </Link>

              <a className="links">
                <i>
                  <MdOutlineMail />
                </i>
                grocergohelp@gmail.com
              </a>

              <Link className="links">
                <i>
                  <RiMapPin2Line />
                </i>
                Chennai, Tamil Nadu, India
              </Link>
            </div>

            {/* Quick Links */}

            <div className="box">
              <h3>Quick Links </h3>
              <Link to="/" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Home
              </Link>

              <Link to="/products" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Products
              </Link>

              <Link to="/reviews/all" className="links">
                <i>
                  <AiOutlineArrowRight />
                </i>
                Reviews
              </Link>
            </div>
            {/* Quick Chat */}
            <div className="box">
              <h3>Chat Box </h3>
              <input
                type="text"
                className="whats-message"
                placeholder="Enter Your Message..!!"
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="sendMsgBtn">
                Send
              </button>
              <img src={CreditCard} alt="Payment Img" className="payment-img" />
            </div>
          </div>
          <div className="credit">
            Copyright © 2024. All Right Reserved
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
