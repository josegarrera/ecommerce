import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DivPag from "./styled";
import { getProductsQuery } from "../../../redux/actions/index.js";

const Pagination = ({ pages, actualizar }) => {
  const dispatch = useDispatch();

  function actualizar(page) {
    dispatch(getProductsQuery(page));
  }

  return (
    <DivPag>
      {pages &&
        pages.map((page, i) => (
          <button className={page} onClick={() => actualizar(page)}>
            {i + 1}
          </button>
        ))}
    </DivPag>
  );
};

export default Pagination;
