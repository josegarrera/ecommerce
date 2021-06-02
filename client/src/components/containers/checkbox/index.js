/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Checkbox_Style from "./styled";


const Checkbox = ({ color }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox_Style>
      <div
        className={`checkbox ${color} ${checked ? "checked" : ""}`}
        onClick={() => setChecked(!checked)}
      >
        <div className="border">
          <div className="indicator"></div>
        </div>
      </div>
    </Checkbox_Style>
  );
};

export default Checkbox;
