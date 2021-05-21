import React from "react";
import { useSelector } from "react-redux";
import FavCard from "../favCard/FavCard";
import DivFav from "./styled";
import { Link } from "react-router-dom";

const Favourites = () => {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <DivFav>
      <h1 className="title__fav">Favorites</h1>
      <div className="favorites__cnt">
        {wishlist.length ? (
          wishlist.map(
            ({ product: { imageUrl, name, price, _id, description } }, i) => (
              <FavCard
                key={i}
                imageUrl={imageUrl}
                name={name}
                price={price}
                _id={_id}
                description={description}
              />
            )
          )
        ) : (
          <div className="not__fav">
            <p className="msg__not__fav">You don't have favorite items yet</p>
          </div>
        )}
      </div>
      <Link to="/catalogue" className="btn__home">
        Back To Home
      </Link>
    </DivFav>
  );
};

export default Favourites;
