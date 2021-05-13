/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { IoCart, IoHeart, IoPersonSharp } from "react-icons/io5";
import SearchBar from "../../containers/searchBar/SearchBar";
import DivNavBar from "./styled";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const NavBar = () => {
  return (
    <DivNavBar>
      <div className="topNav">
        <div>
          <Link to="/">
            <h3 className="logo">{"< Store! />"}</h3>
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="topRight">
          <div className="iconDiv">
            <IoPersonSharp className="icon" />
          </div>
          <div className="iconDiv">
            <IoHeart className="icon" />
          </div>
          <div className="iconDiv cart">
            <Link to="/cart">
              <IoCart className="icon" />
            </Link>

            <div className="cartHoverView">
              <div className="row">
                <div className="cartHeader">
                  <div className="cartHoverTitle">My Cart</div>
                  <div className="cartHoverItems">3 Items selected</div>
                </div>

                <div className="closeBtnHeader">
                  <IoCloseSharp></IoCloseSharp>
                </div>
              </div>

              <div className="cartItem">
                <div className="closeBtn">
                  <IoCloseSharp></IoCloseSharp>
                </div>

                <div className="cartItemImg">
                  <img
                    src="https://http2.mlstatic.com/D_NQ_NP_609935-MLA44739405655_012021-O.webp"
                    alt="cart item image"
                  ></img>
                </div>

                <div className="cartItemInfo">
                  <span className="cardItemTitle">Motorola</span>
                  <span className="cardItemPrice">$2500</span>
                </div>

                <div className="cartItemQty">
                  <div className="incrementQty">
                    <FaPlus />
                  </div>
                  <div className="actualQty">2</div>
                  <div className="decrementQty">
                    <FaMinus />
                  </div>
                </div>
              </div>

              <div className="cartBottom row">
                <div>
                  <span>subtotal (1 item)</span>
                </div>
                <div>
                  <span>$25.50</span>
                </div>
              </div>

              <div className="cartBottom row">
                <div>
                  <span>delivery charge</span>
                </div>
                <div>
                  <span>$1</span>
                </div>
              </div>

              <div className="separator"></div>

              <div className="cartBottom total row">
                <div>
                  <span className="totalSpan">total</span>
                </div>
                <div className="totalPrice">
                  <span>$26.50</span>
                </div>
              </div>

              <div className="cartItemBtn">Continue to checkout</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomNav">
        <Link className="bottomLinks" to="/catalogue">
          catalogue
        </Link>
        <Link className="bottomLinks" to="/create">
          create
        </Link>
        <Link className="bottomLinks" to="/home">
          home
        </Link>

        <select className="select bottomLink">
          <option selected value="0">
            all categories
          </option>
        </select>

        <Link className="bottomLinks" to="/about">
          about
        </Link>
        <Link className="bottomLinks" to="/contact">
          contact
        </Link>
        <Link className="bottomLinks" to="/search">
          search
        </Link>
      </div>
    </DivNavBar>
  );
};

export default NavBar;