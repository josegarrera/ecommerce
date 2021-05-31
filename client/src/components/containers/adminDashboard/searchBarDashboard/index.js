import React from "react";
import { useHistory } from "react-router-dom";
import FormProductDashboard from "../addProductDashboard";
import SearchStyles from "./styled";
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

/* let props = ['email', 'role', 'name', '_id', 'price.value', 'user']; */

const SearchBar = ({
  Items,
  setFilter,
  setCreate,
  create,
  options,
  setOptions,
  showModal,
  setShowModal,
}) => {
  let history = useHistory();

  const handleOnChangue = (e) => {
    let arrayFilter =
      Items &&
      Items.filter(
        (el) =>
          (el.email &&
            el.email.toLowerCase().includes(e.target.value.toLowerCase())) ||
          (el.role &&
            el.role.toLowerCase().includes(e.target.value.toLowerCase())) ||
          (el.users && el.users.includes(e.target.value)) ||
          (el.name &&
            el.name.toLowerCase().includes(e.target.value.toLowerCase())) ||
          (el._id && el._id.includes(e.target.value)) ||
          (el.price && el.price.value.toString().includes(e.target.value))
      );

    setFilter(arrayFilter);
  };

  const handleClick = () => {
    if (options === "Products") {
      setOptions("createProduct");
      console.log("hola");
      setShowModal((prev) => !prev);
    }

    if (
      options === "Users" ||
      options === "Categories" ||
      options === "Orders" ||
      options === "Brands"
    )
      setCreate(!create);
  };

  /* 
				Items.filter(
					(el) =>
						(el.email &&
							el.email.toLowerCase().includes(e.target.value.toLowerCase())) ||
						(el.role &&
							el.role.toLowerCase().includes(e.target.value.toLowerCase())) ||
						(el.name &&
							el.name.toLowerCase().includes(e.target.value.toLowerCase())) ||
						(el.price && el.price.value.toString().includes(e.target.value))
				); */

  return (
    <SearchStyles>
      <div className="search__bar">
        <input
          className="searchInput"
          type="text"
          placeHolder="   Search by name, price, id, categorie, role, email, etc"
          onChange={handleOnChangue}
        />
        <i className="search__icon">
          <FaSearch />
        </i>
      </div>
      {options && options !== "Orders" ? (
        <button className="form__button" onClick={handleClick}>
          <div>
            <i className="add__icon">
              <IoMdAddCircle />
            </i>
          </div>
          <div>
            Add {options && options.toLowerCase().slice(0, options.length - 1)}
          </div>
        </button>
      ) : (
        <button
          className="form__button form__button__hidden"
          onClick={handleClick}
        >
          Add {options && options.toLowerCase().slice(0, options.length - 1)}
        </button>
      )}

      <FormProductDashboard showModal={showModal} setShowModal={setShowModal} />
    </SearchStyles>
  );
};

export default SearchBar;
