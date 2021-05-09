import React from "react";
import DivPag from "./styled";

const Pagination = ({ handleNextPage, handlePrevPage }) => {
  return (
    <DivPag>
      <button className="btn__prev" onClick={handlePrevPage}>
        Prev
      </button>
      <button className="btn__next" onClick={handleNextPage}>
        Next
      </button>
    </DivPag>
  );
};

export default Pagination;
