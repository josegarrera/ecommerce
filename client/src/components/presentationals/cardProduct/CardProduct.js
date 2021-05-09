import React from "react";
import DivCrdProd from "./styled";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const CardProduct = ({ name, imageUrl, price }) => {
  const handleAddCart = () => {
    //add to cart
  };
  const handleAddFav = () => {
    //add to fav
  };

  return (
    <DivCrdProd>
      <div className="cnt__image">
        <img className="img__card" src={imageUrl[0]} alt="imagen de producto" />
      </div>
      <div className="cnt_info">
        <h5>{name}</h5>
        <h6>{price.currency + price.value}</h6>
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
