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
import { BiDollar } from "react-icons/bi";
import { CgBorderStyleSolid } from "react-icons/cg";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

import { IoIosCheckmarkCircle } from "react-icons/io";

import Dropdown from "../dropdown";
import Filter_Style from "./styled";

import axios from "axios";

const Filter = ({ order }) => {
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
    order: "",
  });

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // filter, filterValue, order, direction, limit

    var keyName = Object.keys(filter[0]);
    var actualValue = filter[0][keyName];
    var orderValue = order[0];

    if (order.length) {
      const response = {
        ...input,
        [keyName]: actualValue,
        direction: orderValue.order,
      };

      input && setInput(() => response);
    }
  }, [filter, order]);

  useEffect(() => {
    const { name, brands, category, variants, price, direction, limit } = input;

    dispatch(
      getProducts(name, category, variants, price, order, direction, limit)
    );
    console.log(input);
  }, [input]);

  return (
    <Filter_Style>
      <div className="filter__options">
        <div className="filter__title">SEARCH FILTER</div>
        <div className="separator"></div>

        <div className="filter__section">
          <Dropdown
            filter
            title="CATEGORIES"
            name="category"
            items={categoryNames}
            setVariants={(el) => setFilter(el)}
            variants={filter}
          ></Dropdown>

          <Dropdown
            filter
            title="BRANDS"
            name="brands"
            items={brandNames}
            setVariants={(el) => setFilter(el)}
            variants={filter}
          ></Dropdown>

          <Dropdown
            filter
            title="VARIANTS"
            name="variants"
            items={categoryNames}
            setVariants={(el) => setFilter(el)}
            variants={filter}
          ></Dropdown>

          <div className="filter__section__row">
            <div className="filter__section__title">PRICE</div>
          </div>
          <div className="input__wrapper">
            <input className="range__price" type="range"></input>
            <div className="row">
              <input
                className="price__input"
                type="number"
                id="brands"
                name="brands"
              ></input>
              <i>
                <CgBorderStyleSolid />
              </i>
              <input
                className="price__input"
                type="number"
                id="brands"
                name="brands"
              ></input>
              <i>
                <BiDollar />
              </i>
            </div>
          </div>

          <div className="filter__section__row">
            <div className="filter__section__title">COLOR</div>
          </div>
          <div className="color__selector">
            <ul>
              <li id="white" className="color__item">
                <i>
                  <RiCheckboxBlankCircleFill />
                </i>
              </li>
              <li id="black" className="color__item">
                <IoIosCheckmarkCircle />
              </li>
              <li id="purple" className="color__item">
                <RiCheckboxBlankCircleFill />
              </li>
              <li id="blue" className="color__item">
                <RiCheckboxBlankCircleFill />
              </li>
              <li id="red" className="color__item">
                <RiCheckboxBlankCircleFill />
              </li>
              <li id="yellow" className="color__item">
                <RiCheckboxBlankCircleFill />
              </li>
              <li id="skyblue" className="color__item">
                <RiCheckboxBlankCircleFill />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Filter_Style>
  );
};

export default Filter;
