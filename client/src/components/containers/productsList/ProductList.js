import React from "react";
import CardProduct from "../../presentationals/cardProduct/CardProduct";
import PRODUCTS_LIST_STYLE from "./styled";

const ProductList = ({ products }) => {
  console.log("estoy aca", products);
  return (
    <PRODUCTS_LIST_STYLE>
      <div className="cards__container">
        {products &&
          products.map(({ product: { name, price, imageUrl, _id } }) => (
            <CardProduct
              key={name}
              name={name}
              price={price}
              imageUrl={imageUrl}
              _id={_id}
            />
          ))}
      </div>
    </PRODUCTS_LIST_STYLE>
  );
};

export default ProductList;
