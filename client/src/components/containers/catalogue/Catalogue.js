/* eslint-disable react/jsx-pascal-case */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../presentationals/cardProduct/CardProduct";
import { getCategories, getProducts } from "../../../redux/actions/index.js";
import Catalogue_Style from "./styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import { URLS } from "../../../utils/constants";
import Dropdown from "../dropdown";

const Catalogue = () => {
  const allCategories = useSelector((state) => state.categories);
  const categoryNames = allCategories.map((c) => c.name);
  const [categoriesSelected, selectCategories] = useState([]);
  const { products, pages } = useSelector((state) => state.products);
  // Este allProducts me trae {products: Array(12), pages: Array(2)}
  const [input, setInput] = useState({
    filter: "",
    filterValue: "",
    order: "",
    direction: "",
    limit: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // filter, filterValue, order, direction, limit
    console.log(categoriesSelected);
  }, [categoriesSelected]);

  console.log(allCategories);

  // console.log(categoryNames);
  // console.log("acaaaaaaaaa", allProducts);

  return (
    <Catalogue_Style>
      <div className="catalogue">
        <div className="filter__options">
          <div className="filter__title">SEARCH FILTER</div>

          <div className="separator"></div>

          <div className="filter__section">
            <div className="filter__section__row">
              <div className="filter__section__title">BRANDS</div>
              <div className="filter__section__icon">
                <MdKeyboardArrowDown />
              </div>
            </div>

            <Dropdown
              title="currency"
              name="currency"
              items={categoryNames}
              multiselect
              setVariants={(el) => selectCategories(el)}
              variants={categoriesSelected}
            ></Dropdown>
          </div>
        </div>
        <div className="cards__container">
          {products.length &&
            products.map(({ name, price, imageUrl }) => (
              <CardProduct
                key={name}
                name={name}
                price={price}
                imageUrl={imageUrl}
              />
            ))}
        </div>
      </div>
      <Pagination pages={pages} /*  actualizar={actualizar} */ />
    </Catalogue_Style>
  );
};

export default Catalogue;
