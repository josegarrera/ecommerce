import React from "react";
import ToastStyle from "./styled";
import { ImCross } from "react-icons/im";

function Toast() {
  return (
    <ToastStyle>
      <div className="error-toast">
        <div className="toast-col">
          <i className="icon-error">
            <ImCross />
          </i>
        </div>
        <div className="toast-col">
          <p className="toast-text">Complete the form correctly</p>
        </div>
      </div>
    </ToastStyle>
  );
}

export default Toast;
