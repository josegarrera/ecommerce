import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProducts } from "../../../redux/actions";
import Footer from "../footer/Footer";
import ProductList from "../productsList/ProductList";
import HomeStyle from "./styled";
import Carousel from "../carousel";
import MultiItemCarousel from "../multiItemCarousel/multiItemCarousel";

const Home = () => {
  const { products, pages } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HomeStyle>
      <Carousel />

      <div className="product__row">
        <h3 className="top__text">NEW RELEASES</h3>
        <span>see more</span>
      </div>

      <MultiItemCarousel items={products} />

      <MultiItemCarousel items={products} />

      {/* <div className="offers">
        <ProductList products={limit4} />
      </div>

      <div className="offers">
        <ProductList products={limit4} />
      </div>
      <div className="offers">
        <ProductList products={limit4} />
      </div> */}
      <Footer></Footer>
    </HomeStyle>
  );
};

export default Home;
