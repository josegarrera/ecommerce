import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { getProductsSearch } from "../../../redux/actions";
import FormSearchBar from "./styled";
import DataListInput from "react-datalist-input";

const SearchBar = ({ responsive }) => {
  const dispatch = useDispatch();
  const [Value, setValue] = useState("");
  const allProductss = useSelector((state) => state.productSearch.products);

  const [Datalist, setDatalist] = useState([{ key: 0, label: "PC" }]);
  let history = useHistory();

  const newMatch = (currentInput, item) =>
    item.label && item.label.toLowerCase().includes(currentInput.toLowerCase());

  const handleDataList = (e) => {
    setValue(e.label);
    return history.push(`/products/name/${e.label}`);
  };

  const handleSearch = (e) => {
    setValue(e);
    let productsFilter =
      allProductss &&
      allProductss.filter((el) =>
        el.product.name.toLowerCase().includes(e.toLowerCase())
      );
    return productsToOptions(productsFilter);
  };

  const productsToOptions = (array) => {
    setDatalist(
      array &&
        array.map((el) => {
          return {
            key: el.product._id,
            label: el.product.name,
          };
        })
    );
  };

  useEffect(() => {
    dispatch(getProductsSearch("", "", "", "", "", "", "", Infinity));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FormSearchBar responsive={responsive}>
      <div className="searchBar">
        <DataListInput
          inputClassName="input"
          placeholder="Search a product"
          requiredInputLength={1}
          items={Datalist}
          match={newMatch}
          onInput={handleSearch}
          dropdownClassName="data_input"
          activeItemClassName="data_active"
          dropDownLength={5}
          itemClassName="data_item"
          clearInputOnClick={true}
          onSelect={(e) => handleDataList(e)}
        />
        <div className="divLupa">
          <Link to={`/products/name/${Value}`}>
            <IoSearch className="lupa" type="submit" />
          </Link>
        </div>
      </div>
    </FormSearchBar>
  );
};

export default SearchBar;
