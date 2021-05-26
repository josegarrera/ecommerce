import React from "react";
import FooterStyle from "./styled.js";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  return (
    <FooterStyle>
      <div className="footer">
        <div className="footer___col">
          <ul>
            <span className="title">GIVE US A CALL</span>
            <li>
              <i>
                <IoLocationSharp />
              </i>
              <p className="col__1__items">Buenos Aires, Argentina</p>
            </li>
            <li>
              <i>
                <FaEnvelope />
              </i>
              <p className="col__1__items">support@henrystore.com</p>
            </li>
            <li>
              <i>
                <FaPhone />
              </i>
              <p className="col__1__items">+54 011 9898</p>
            </li>
          </ul>
        </div>

        <div className="footer___col">
          <ul>
            <span className="title">PAGES</span>
            <li className="pages__items">
              <p>Brands</p>
            </li>
            <li className="pages__items">
              <p>Contact</p>
            </li>
            <li className="pages__items">
              <p>About Us</p>
            </li>
          </ul>
        </div>

        <div className="footer___col">
          <ul>
            <span className="title">MY ACCOUNT</span>
            <li>
              <p>Buenos Aires, Argentina</p>
            </li>
            <li>
              <p>support@henrystore.com</p>
            </li>
            <li>
              <p>+54 011 9898</p>
            </li>
          </ul>
        </div>

        <div className="footer___col">
          <ul>
            <span className="title">NEWSLETTER</span>
            <li className="newsletter__input">
              <input type="text" />
              <button id="newsletter" className="newsletter__button">
                Suscribe
              </button>
            </li>
          </ul>
        </div>

        <button>
          <i>
            <IoIosArrowUp></IoIosArrowUp>
          </i>
        </button>
      </div>
    </FooterStyle>
  );
}

export default Footer;
