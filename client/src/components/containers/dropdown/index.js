/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Dropdown_Style from "./styled";
// import onClickOutside from "react-onclickoutside";

import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

function Dropdown({
  title,
  items = [],
  multiselect = false,
  setVariants,
  variants,
}) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  //   Dropdown.handleClickOutside = () => setOpen(false);

  const handleOnClick = (item) => {
    if (!variants.some((current) => current.value === item.value)) {
      if (!multiselect) {
        // setSelection([item]);
        setVariants([item]);
      } else if (multiselect) {
        // setSelection([...crock, item]);
        setVariants([...variants, item]);
      }
    } else {
      let selectionAfterRemoval = variants;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.value !== item.value
      );
      // setSelection([...selectionAfterRemoval]);
      setVariants([...selectionAfterRemoval]);
    }
  };

  const isItemSelected = (item) => {
    if (variants.find((current) => current.value === item.value)) {
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
            {items.map((item) => (
              <li key={item.id} className="dropdown__list__item">
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span className="button__value">{item.value}</span>
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
