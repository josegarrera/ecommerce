import React from "react";
import { Link } from "react-router-dom";
import DivCrdProd from "./styled";

const CardProduct = ({ _id, name, image, price }) => {
  const handleAddCart = () => {
    //add to cart
  };
  const handleAddFav = () => {
    //add to fav
  };

  return (
    <DivCrdProd>
      <img src={image} alt="imagen de producto" />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button className="btn__fav" onClick={handleAddFav}>
        ❤️
      </button>
      <button className="btn__cart" onClick={handleAddCart}>
        🛒
      </button>
    </DivCrdProd>
  );
};

export default CardProduct;
