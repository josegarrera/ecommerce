import React from "react";
import { Link } from "react-router-dom";
import DivCrdProd from "./styled";
import {FaShoppingCart} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const CardProduct = ({ _id, product:{name, images, price} }) => {
  const handleAddCart = () => {
    //add to cart
  };
  const handleAddFav = () => {
    //add to fav
  };

  return (
    <DivCrdProd>
      <img
        src="https://i.pinimg.com/564x/5e/76/f3/5e76f30fd83bb5d0392d94e0d6384ccb.jpg"
        alt="imagen de producto"
      />
      <div className="cnt_info">
        <h5>{name}</h5>
        <h6>${price}</h6>
        <button className="btn__fav" onClick={handleAddFav}>
          <AiOutlineHeart />
        </button>
        <button className="btn__cart" onClick={handleAddCart}>
          <FaShoppingCart />
        </button>
      </div>
    </DivCrdProd>
  );
};

export default CardProduct;
