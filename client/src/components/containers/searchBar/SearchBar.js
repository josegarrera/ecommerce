import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import FormSearchBar from "./styled";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setValue("");
  }

  return (
    <FormSearchBar>
      <div className="searchBar" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="search the entire store..."
          type="text"
        ></input>
        <div className="divLupa">
          <Link to={`/products/name/${value}`}>
            <FaSearch className="lupa" type="submit" />
          </Link>
        </div>
      </div>
    </FormSearchBar>
  );
};

export default SearchBar;
