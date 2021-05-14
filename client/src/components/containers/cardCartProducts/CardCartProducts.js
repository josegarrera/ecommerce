import React from "react";
import DivCard from "./styled";

const CardCartProducts = (props) => {
  console.log(props.product.product._id);
  return (
    <DivCard>
      <div>CardCartProducts</div>
    </DivCard>
  );
};

export default CardCartProducts;
