import React, { useState, useEffect } from "react";
import DivCrdProd, { StyledLoder } from "./styled";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartProduct,
  addFavProduct,
  getProducts,
  removeFavProduct,
} from "../../../redux/actions";
import cardLoder from "../../../utils/cardLoader";

const CardProduct = ({ name, imageUrl, price, _id, loading }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [fav, setFav] = useState(true);
  const [Load, setLoad] = useState("loading");

  const handleAddCart = () => {
    //add to cart
    dispatch(addCartProduct(_id));
  };

  const handleAddFav = () => {
    //add to fav
    setFav(!fav);
    dispatch(addFavProduct(_id));
    //addToFav action=>reducer=>localStorage
  };

  const handleRemoveFav = () => {
    //add to fav
    setFav(!fav);
    dispatch(removeFavProduct(_id));
    //removeToFav action=>reducer=>localStorage
  };

  const handleImageLoaded = () => {
    setLoad("loaded");
  };

  if (Load === "loading" && loading === true) {
    return <StyledLoder>{cardLoder()}</StyledLoder>;
  } else {
    return (
      <DivCrdProd>
        <div className="cnt__image">
          <Link to={`/products/id/${_id}`}>
            <img
              className="img__card"
              src={imageUrl[0]}
              alt="imagen de producto"
              onLoad={handleImageLoaded}
            />
          </Link>
        </div>
        <div className="cnt_info">
          <div className="row">
            <Link to={`/products/id/${_id}`}>
              <h5>{name}</h5>
            </Link>
            <h6>{price.currency + price.value}</h6>
            {fav ? (
              <button className="btn__fav" onClick={handleAddFav}>
                <AiOutlineHeart />
              </button>
            ) : (
              <button className="btn__fav" onClick={handleRemoveFav}>
                <AiFillHeart />
              </button>
            )}
          </div>

          <button className="btn__cart" onClick={handleAddCart}>
            <FaShoppingCart />
          </button>
        </div>
      </DivCrdProd>
    );
  }
};

export default CardProduct;
