/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Dropdown_Style } from "./styled";
// import onClickOutside from "react-onclickoutside";

import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import setterVariants from "../../../utils/setterVariants.js";
import setterInput from "../../../utils/setterInput.js";

function Dropdown({
  title,
  name,
  items = [],
  multiselect,
  options,
  setOptions,
  setVariants,
  setProduct,
  products,
  variantsProduct,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    if (
      !options.some((current) =>
        current[name] ? current[name] === item : current === item
      )
    ) {
      let obj = {};
      obj[name] = item;
      if (!multiselect) {
        setOptions([obj]);
        if (setProduct && setVariants) {
          setProduct({
            ...products,
            variant: {},
            allVariants: [],
          });
          setVariants([]);
        }
      } else if (multiselect) {
        setOptions([...options, obj[name]]);
      }
    } else {
      let selectionAfterRemoval = options;
      selectionAfterRemoval = selectionAfterRemoval.filter((current) =>
        current[name] ? current[name] !== item : current !== item
      );
      setOptions([...selectionAfterRemoval]);

      if (options.length && variantsProduct && variantsProduct[options[0]]) {
        setProduct({
          ...products,
          variant: setterVariants(variantsProduct, selectionAfterRemoval),
        });
      }
    }
  };

  const isItemSelected = (item) => {
    if (
      options.find((current) =>
        current[name] ? current[name] === item : current === item
      )
    ) {
      return true;
    }

    return false;
  };

  return (
    <Dropdown_Style>
      <div className="dropdown__wrapper">
        <div
          tabIndex={0}
          className="dropdown__header"
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className="dropdown__header__title">
            <p>{title}</p>
          </div>
          <div className="dropdown__header__action">
            <p className="dropdown__header__icon">
              {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </p>
          </div>
        </div>

        {open && (
          <ul className="dropdown__list">
            {items.map((item, index) => (
              <li key={index} className="dropdown__list__item">
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span className="button__value">{item}</span>
                  <span
                    className={
                      "button__icon" && isItemSelected(item) ? "selected" : ""
                    }
                  >
                    {isItemSelected(item) ? (
                      <ImCheckboxChecked />
                    ) : (
                      <ImCheckboxUnchecked />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Dropdown_Style>
  );
}

// const onClickOutsideConfig = {
//   handleClickOutside: () => Dropdown.handleClickOutside,
// };

export default Dropdown;