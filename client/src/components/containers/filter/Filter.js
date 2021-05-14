/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";

import {
  getBrands,
  getCategories,
  getProducts,
  getProductsQuery,
} from "../../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import Dropdown from "../dropdown";
import Filter_Style from "./styled";
import axios from "axios";

const Filter = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);
  const allBrands = useSelector((state) => state.brands);
  const allProducts = useSelector((state) => state.products);
  const categoryNames = allCategories.map((c) => c.name);
  const brandNames = allBrands.map((b) => b.name);

  const [filter, setFilter] = useState([{}]);
  const [input, setInput] = useState({
    category: "",
    brands: "",
    variants: "",
    price: Number,
    direction: "",
    limit: Number,
  });

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // filter, filterValue, order, direction, limit

    var keyName = Object.keys(filter[0]);
    var actualValue = filter[0][keyName];
    const response = { ...input, [keyName]: actualValue };
    input && setInput(() => response);
  }, [filter]);

  useEffect(() => {
    const { name, brands, category, variants, price, order, direction, limit } =
      input;

    console.log(input);
    dispatch(
      getProducts(name, category, variants, price, order, direction, limit)
    );
  }, [input]);


  return (
    <Filter_Style>
      <div className="filter__options">
        <div className="filter__title">SEARCH FILTER</div>
        <div className="separator"></div>

        <div className="filter__section">
          <Dropdown
            title="Categories"
            name="category"
            items={categoryNames}
            setVariants={(el) => setFilter(el)}
            variants={filter}
          ></Dropdown>

          <Dropdown
            title="Brands"
            name="brands"
            items={brandNames}
            setVariants={(el) => setFilter(el)}
            variants={filter}
          ></Dropdown>

          <Dropdown
            title="Variants"
            name="variants"
            items={categoryNames}
            setVariants={(el) => setFilter(el)}
            variants={filter}
          ></Dropdown>

          <div className="filter__section__row">
            <div className="filter__section__title">PRICE</div>
          </div>
          <input type="range"></input>

        </div>
      </div>
    </Filter_Style>
  );
};

export default Filter;
