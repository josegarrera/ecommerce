import React from "react";
import { Link } from "react-router-dom";
import DivCrdProd from "./styled";
import {FaShoppingCart} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const CardProduct = ({ _id, name, images, price }) => {
  const handleAddCart = () => {
    //add to cart
  };
  const handleAddFav = () => {
    //add to fav
  };

  return (
    <DivCrdProd>
      <img
        src={images}
        alt="imagen de producto"
      />
      <div className="cnt_info">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <button className="btn__fav" onClick={handleAddFav}>
          <AiOutlineHeart/>
        </button>
        <button className="btn__cart" onClick={handleAddCart}>
          <FaShoppingCart/>
        </button>
      </div>
    </DivCrdProd>
  );
};

export default CardProduct;
