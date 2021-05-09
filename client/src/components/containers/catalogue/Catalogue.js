/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../presentationals/cardProduct/CardProduct";
import {
  getAllProducts,
  getCategories,
  getProducts,
} from "../../../redux/actions/index.js";
import Catalogue_Style from "./styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import { URLS } from "../../../utils/constants";
import Dropdown from "../dropdown";

const Catalogue = () => {
  const allProducts = useSelector((state) => state.fakeProducts);
  const allCategories = useSelector((state) => state.categories);
  const categoryNames = allCategories.map((c) => c.name);
  const [categoriesSelected, selectCategories] = useState([]);
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
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // filter, filterValue, order, direction, limit
    console.log(categoriesSelected);
  }, [categoriesSelected]);

  console.log(allCategories);

  // console.log(categoryNames);
  // console.log("acaaaaaaaaa", allProducts);

  const handleNextPage = async () => {
    const {
      data: { pages },
    } = await axios.get(`${URLS.URL_PRODUCTS}`);
    const {
      data: { products },
    } = await axios.get(pages[1]);
    dispatch(getAllProducts(products));
  };

  const handlePrevPage = async () => {
    const {
      data: { pages },
    } = await axios.get(`${URLS.URL_PRODUCTS}`);
    const {
      data: { products },
    } = await axios.get(pages[0]);
    dispatch(getAllProducts(products));
  };

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
          {allProducts.length &&
            allProducts.map(({ name, price, imageUrl }) => (
              <CardProduct
                key={name}
                name={name}
                price={price}
                imageUrl={imageUrl}
              />
            ))}
        </div>
      </div>
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </Catalogue_Style>
  );
};

export default Catalogue;
