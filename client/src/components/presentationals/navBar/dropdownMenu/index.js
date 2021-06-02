import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownStyle from "./styled";
import { RiCloseFill } from "react-icons/ri";
import { useSelector } from "react-redux";

<RiCloseFill className="icon" />;

function Dropdown({ handleClick }) {
  let userId = window.localStorage.getItem("userId");
  const user = useSelector((state) => state.user);

  const eraseToken = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <DropdownStyle>
        <ul className="dropdown-menu">
          <i className="close-icon" onClick={handleClick}>
            <RiCloseFill />
          </i>

          <div className="dropdown-menu">
            <Link className="dropdown-link" to="/home">
              Home
            </Link>
            <Link className="dropdown-link" to="/catalogue">
              Catalogue
            </Link>
            {/* {user.role === "admin" ? (
              <Link className="bottomLinks" to="/create">
                Create
              </Link>
            ) : null} */}

            {/* <select className="select dropdown-link">
              <option>All categories</option>
            </select> */}

            <Link className="dropdown-link" to="/about">
              About us
            </Link>
            <Link className="dropdown-link" to="/contact">
              Contact
            </Link>

            {userId ? (
              //           {/* {profileImage !== "undefined" ? (
              //   <img className="image" src={profileImage} alt="no" />
              // ) : (
              //   <BsPersonCheckFill className="icon iconLogin" />
              // )} */}

              //   {/* {user.role === "admin" ? (
              //     <Link to="/adminDashboard">
              //       <div className="buttonLoginHover">Dashboard</div>
              //     </Link>
              //   ) : null} */}

              <Link>
                <div className="dropdown-button" onClick={eraseToken}>
                  <div className="sign-in"> Sign Out </div>
                </div>
              </Link>
            ) : (
              <div>
                <Link to="/login">
                  <div className="dropdown-button">
                    <div className="sign-in"> Sign in </div>
                  </div>
                </Link>
                <div className="sign-up">
                  Don't have an account?
                  <Link className="signup-link" to="/signup">
                    Sign up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </ul>
      </DropdownStyle>
    </>
  );
}

export default Dropdown;
