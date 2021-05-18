import React from "react";
import { Link } from "react-router-dom";

const SumarryCart = ({ casa, count }) => {
  return (
    <div>
      <div className="summary">
        <div className="summary__title">
          <h2>Summary</h2>
          <div className="total__prd">
            <p>total products</p>
            <p>${count}</p>
          </div>
          <div className="total__prd">
            <p>Shipping Cost </p>
            <p>$500</p>
          </div>
        </div>
      </div>
      <Link to="/shipping">
        <button onClick={casa} className="btn_buy">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default SumarryCart;
