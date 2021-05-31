import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "./styles";
import ListDashboard from "../listDashboard/ListDashboard";
import GraphicsDashboard from "../graphicsDashboard/GraphicsDashboard";
import { IoIosArrowForward } from "react-icons/io";
import { BsPersonPlusFill, BsPersonCheckFill } from "react-icons/bs";
import FormProductDashboard from "../addProductDashboard/index";

const HomeDashboard = () => {
  const [Options, setOptions] = useState("Home");
  const [showModal, setShowModal] = useState(false);
  let userId = window.localStorage.getItem("userId");
  let firstName = window.localStorage.getItem("firstName");
  let lastName = window.localStorage.getItem("lastName");
  let profileImage = window.localStorage.getItem("profileImage");

  const eraseToken = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const handleOnClick = (e) => {
    setOptions(e.target.name);
  };
  const arrayButtons = [
    { name: "Products" },
    { name: "Categories" },
    { name: "Users" },
    { name: "Orders" },
    { name: "Brands" },
  ];

  return (
    <StyledContainer>
      <div className="sidebar">
        <div>
          <div className="dashboard">{"Admin Dashboard"}</div>
          <button className="brand" name={"Home"} onClick={handleOnClick}>
            {"<Store! />"}
          </button>
          <div className="options">
            {arrayButtons.map((el) => (
              <button className="option" name={el.name} onClick={handleOnClick}>
                {Options === el.name ? (
                  <IoIosArrowForward className="arrow" />
                ) : null}
                &nbsp;
                {el.name}
              </button>
            ))}
          </div>
        </div>
        <div className="bottomSidebar">
          <div className="userDiv">
            <button className="iconDiv">
              {userId ? (
                profileImage !== "undefined" ? (
                  <img className="image" src={profileImage} alt="no" />
                ) : (
                  <BsPersonCheckFill className="icon" />
                )
              ) : (
                <Link to="/login">
                  <BsPersonPlusFill className="icon" />
                </Link>
              )}
            </button>
            <div>
              {userId ? (
                <div className="login">
                  {firstName !== "undefined" && lastName !== "undefined" ? (
                    <div className="userName">
                      {firstName} {lastName}
                    </div>
                  ) : (
                    <div className="userName">No Name</div>
                  )}
                  <div className="signOut" onClick={eraseToken}>
                    Sign out.
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="backStore">
            <div className="separator"></div>
            <Link to="/home">Back to Store!</Link>
          </div>
        </div>
      </div>
      <div className="content">
        {Options === "Home" ? (
          <GraphicsDashboard setOptions={setOptions} />
        ) : Options === "createProduct" ? (
          <>
            <ListDashboard Options={"Products"} setOptions={setOptions} />
          </>
        ) : (
          <ListDashboard Options={Options} setOptions={setOptions} />
        )}
      </div>
    </StyledContainer>
  );
};

export default HomeDashboard;
