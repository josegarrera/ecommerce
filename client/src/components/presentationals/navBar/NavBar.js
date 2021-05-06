import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCart, IoHeart, IoPersonSharp, IoSearch } from "react-icons/io5";
import CardProduct from "../cardProduct/CardProduct"

const NavBar = () => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setValue("");
  }

  return(
  <div>
    <div>
      <div>
        <h3>Henry Store</h3>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search the entire store"
            type="text"
            ></input>
            <Link to={`/products/${value}`}>
                <IoSearch type="submit" />
            </Link>
        </form>
      </div>
      <div>
        <IoPersonSharp />
        <IoHeart />
        <IoCart />
      </div>
    </div>
    <div>
      <Link to="/catalogue">
        <h3>Catalogue</h3>
      </Link>
      <CardProduct/>
    </div>
  </div>
)};

export default NavBar;
