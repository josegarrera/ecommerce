import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormProductStyle from "./styled";
import { IoCloseSharp } from "react-icons/io5";
import Checkbox from "../checkbox";
import Dropdown from "../dropdown";
// import { getCategories } from "../../../redux/actions/index.js";

const FormProduct = () => {
  const [colorsSelected, setColors] = useState([]);
  const dispatch = useDispatch();
  // const categories = useSelector((store) => store.categories);

  const [product, setProduct] = useState({
    _id: 0,
    name: "",
    description: "",
    price: 0,
    imageUrl: [],
    categories: [],
    brand: "",
    variants: [],
  });

  const storage = [
    {
      id: 1,
      value: "8 GB",
    },
    {
      id: 2,
      value: "16 GB",
    },
    {
      id: 3,
      value: "32 GB",
    },
    {
      id: 4,
      value: "64 GB",
    },
    {
      id: 5,
      value: "128 GB",
    },
  ];

  const colors = [
    {
      id: 1,
      value: "red",
    },
    {
      id: 2,
      value: "blue",
    },
    {
      id: 3,
      value: "green",
    },
    {
      id: 4,
      value: "yellow",
    },
    {
      id: 5,
      value: "purple",
    },
    {
      id: 5,
      value: "light-blue",
    },
    {
      id: 5,
      value: "white",
    },
  ];

  const categories = [
    {
      id: 1,
      value: "Motherboards",
    },
    {
      id: 2,
      value: "Graphic Cards",
    },
    {
      id: 3,
      value: "Storage",
    },
    {
      id: 4,
      value: "Periferics",
    },
    {
      id: 5,
      value: "Monitors",
    },
  ];

  useEffect(() => {
    // dispatch(getCategories());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ChangeInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onClickSubmit = (color) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <FormProductStyle>
      <div className="form__container">
        <div className="row">
          <h1 className="form__title">Add Product</h1>
          <div className="close__icon">
            <IoCloseSharp />
          </div>
        </div>

        <form className="product__form">
          <div className="form__wrapper">
            <div className="form__column">
              <div className="form__element">
                <label className="form__label">name</label>
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={(e) => ChangeInput(e)}
                ></input>
              </div>
              <div className="form__element">
                <label className="form__label">brand</label>
                <input
                  className="form__input"
                  type="text"
                  id="brand"
                  name="brand"
                  value={product.brand}
                  onChange={(e) => ChangeInput(e)}
                ></input>
              </div>
              <div className="form__element">
                <label className="form__label">description</label>
                <textarea
                  className="form__input"
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={(e) => ChangeInput(e)}
                ></textarea>
              </div>
              <div className="form__element">
                <label className="form__label">price</label>
                <input
                  className="form__input"
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={(e) => ChangeInput(e)}
                ></input>
              </div>
            </div>

            <div className="form__column">
              <div className="form__element">
                <label className="form__label">categories</label>
                <Dropdown
                  title="select category"
                  items={categories}
                  multiselect
                ></Dropdown>
              </div>
              <div className="form__element">
                <label className="form__label">variants</label>
                <Dropdown
                  title="select variants"
                  items={storage}
                  multiselect
                ></Dropdown>
              </div>
              <div className="form__element">
                <label className="form__label">colors</label>
                <div className="checkbox__container">
                  {colors.map((color, index) => (
                    <Checkbox
                      key={index}
                      color={color.value}
                      onClick={() => onClickSubmit()}
                    ></Checkbox>
                  ))}
                  {/* 
                  <Checkbox color="red" on></Checkbox>
                  <Checkbox color="blue"></Checkbox>
                  <Checkbox color="green"></Checkbox>
                  <Checkbox color="yellow"></Checkbox>
                  <Checkbox color="purple"></Checkbox>
                  <Checkbox color="black"></Checkbox>
                  <Checkbox color="light-blue"></Checkbox>
                  <Checkbox color="white"></Checkbox> */}
                </div>
              </div>
              <div className="form__element">
                <label className="form__label">Image Url</label>
                <input
                  className="form__input"
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={product.imageUrl}
                  onChange={(e) => ChangeInput(e)}
                ></input>
              </div>
            </div>
          </div>

          <button className="form__button" onClick={(e) => handleSubmit(e)}>
            Save
          </button>
        </form>
      </div>
    </FormProductStyle>
  );
};

export default FormProduct;

// name: String,
// 	description: String,
// 	colors: [],
// 	size: [],
// 	price: {currency: String, value: Number},
// 	categories: [
// 		{
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: 'categories',
// 		},
