/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";

import {
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
  const allProducts = useSelector((state) => state.products);
  const categoryNames = allCategories.map((c) => c.name);

  const [filter, setFilter] = useState([{}]);
  const [input, setInput] = useState({
    category: "",
    variants: "",
    price: Number,
    direction: "",
    limit: Number,
  });

  useEffect(() => {
    dispatch(getCategories());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // filter, filterValue, order, direction, limit

    var keyName = Object.keys(filter[0]);
    var actualValue = filter[0][keyName];
    const response = { ...input, [keyName]: actualValue };
    input && setInput(() => response);
  }, [filter]);

  useEffect(() => {
    const { name, category, variants, price, order, direction, limit } = input;
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
            items={categoryNames}
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
            <div className="filter__section__title">BRANDS</div>
            <div className="filter__section__icon">
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="filter__section__row">
            <div className="filter__section__title">VARIANTS</div>
            <div className="filter__section__icon">
              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className="filter__section__row">
            <div className="filter__section__title">PRICE</div>
          </div>
          <input type="range"></input>

          <div className="filter__section__row">
            <div className="filter__section__title">DIRECTION</div>
            <div className="filter__section__icon">
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="filter__section__row">
            <div className="filter__section__title">LIMIT</div>
            <div className="filter__section__icon">
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
    </Filter_Style>
  );
};

export default Filter;
