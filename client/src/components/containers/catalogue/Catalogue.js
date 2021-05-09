/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../presentationals/cardProduct/CardProduct";
import { getAllProducts } from "../../../redux/actions/index.js";
import Catalogue_Style from "./styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import { URLS } from "../../../utils/constants";

const Catalogue = () => {
  useEffect(() => {
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.fakeProducts);
  console.log("acaaaaaaaaa", allProducts);

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

            <ul className="filter__option__items">
              <li className="filter__option__item">
                <input className="filter__option__checkbox" type="checkbox" />
                <label for="">Kingston</label>
              </li>

              <li className="filter__option__item">
                <input className="filter__option__checkbox" type="checkbox" />
                Samsung
              </li>
              <li className="filter__option__item">
                <input className="filter__option__checkbox" type="checkbox" />
                NZXT
              </li>
              <li className="filter__option__item">
                <input className="filter__option__checkbox" type="checkbox" />
                Asus
              </li>
              <li className="filter__option__item">
                <input className="filter__option__checkbox" type="checkbox" />
                Corsair
              </li>
            </ul>
          </div>
        </div>
        <div className="cards__container">
          {allProducts &&
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
