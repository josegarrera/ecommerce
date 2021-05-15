/* eslint-disable react/jsx-pascal-case */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/index.js";
import Filter from "../filter/Filter";
import ProductList from "../productsList/ProductList";
import Pagination from "../pagination/Pagination";
import Catalogue_Style from "./styled";
import Dropdown from "../dropdown/index.js";

const Catalogue = () => {
  const dispatch = useDispatch();
  const { products, pages } = useSelector((state) => state.products);
  const [orderItems, setOrderItems] = useState([]);

  const options = ["opcion1", "opcion2", "opcion3"];
  // Este allProducts me trae {products: Array(12), pages: Array(2)}

  useEffect(() => {
    dispatch(getProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Catalogue_Style>
      <Filter />
      <div className="productsPagination">
        <div className="sort__elements">
          <Dropdown
            order
            title="order by"
            name="order"
            items={options}
            setVariants={(el) => setOrderItems(el)}
            variants={orderItems}
          ></Dropdown>
        </div>
        <ProductList products={products} />
        <Pagination pages={pages} />
      </div>
    </Catalogue_Style>
  );
};

export default Catalogue;
