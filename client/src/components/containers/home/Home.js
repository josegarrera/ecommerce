import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProducts } from "../../../redux/actions";
import Footer from "../footer/Footer";
import ProductList from "../productsList/ProductList";
import HomeStyle from "./styled";
import Carousel from "../carousel";

const Home = () => {
  const { products, pages } = useSelector((state) => state.products);

  var limit4 = [];
  if (products) {
    limit4 = products.slice(0, 4);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HomeStyle>
      <Carousel/>

      <div className="offers">
        <ProductList products={limit4} />
      </div>
      <div className="carrousel">Carrousel</div>
      <div className="offers">
        <ProductList products={limit4} />
      </div>
      <Footer></Footer>
    </HomeStyle>
  );
};

export default Home;
