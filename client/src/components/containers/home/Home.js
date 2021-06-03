import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProducts } from "../../../redux/actions";
import Footer from "../footer/Footer";
import HomeStyle from "./styled";
import Carousel from "../carousel";
import ProductCarousel from "../ProductCarousel/index";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HomeStyle>
      <Carousel />

      <div className="product__row">
        <br></br>
        <h3 className="top__text">NEW RELEASES</h3>
        <span>see more</span>
      </div>

      <ProductCarousel items={products} />

      <div className="product__row">
        <br></br>
        <h3 className="top__text">ON SALE</h3>
        <span>see more</span>
      </div>

      <ProductCarousel items={products} />

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
