import React from "react";

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
      <button onClick={casa} className="btn_buy">
        Checkout
      </button>
    </div>
  );
};

export default SumarryCart;
