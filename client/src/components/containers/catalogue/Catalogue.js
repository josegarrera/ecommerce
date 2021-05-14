/* eslint-disable react/jsx-pascal-case */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/index.js";

import Filter from "../filter/Filter";
import ProductList from "../productsList/ProductList";
import Pagination from "../pagination/Pagination";
import Catalogue_Style from "./styled";

const Catalogue = () => {
  const dispatch = useDispatch();
  const { products, pages } = useSelector((state) => state.products);
  // Este allProducts me trae {products: Array(12), pages: Array(2)}

  useEffect(() => {
    dispatch(getProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Catalogue_Style>
      <Filter />
      <div className="productsPagination">
        <ProductList products={products} />
        <Pagination pages={pages} />
      </div>
    </Catalogue_Style>
  );
};

export default Catalogue;
