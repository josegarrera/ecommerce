import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../presentationals/cardProduct/CardProduct";
import { getAllProducts } from "../../../redux/actions/index.js"

const Catalogue = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);
  console.log(allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return(
  <div>
    {allProducts.map(product =>(
      <CardProduct product={product} />
    ))
    }
  </div>
)};

export default Catalogue;
