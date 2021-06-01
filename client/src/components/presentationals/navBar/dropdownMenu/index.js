import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownStyle from "./styled";
import { RiCloseFill } from "react-icons/ri";

<RiCloseFill className="icon" />;

function Dropdown({ handleClick }) {
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
          </div>
        </ul>
      </DropdownStyle>
    </>
  );
}

export default Dropdown;
