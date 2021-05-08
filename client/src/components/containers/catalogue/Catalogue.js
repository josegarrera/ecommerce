/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../presentationals/cardProduct/CardProduct";
import { getAllProducts } from "../../../redux/actions/index.js";
import Catalogue_Style from "./styled";
import { MdKeyboardArrowDown } from "react-icons/md";

const Catalogue = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);
  console.log(allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <MdKeyboardArrowDown></MdKeyboardArrowDown>
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
          {allProducts.map((product) => (
            <CardProduct product={product} />
          ))}
        </div>
      </div>
    </Catalogue_Style>
  );
};

export default Catalogue;
