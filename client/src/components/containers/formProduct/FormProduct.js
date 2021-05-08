import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormProductStyle from "./styled";
import { IoCloseSharp } from "react-icons/io5";
import Checkbox from "../checkbox";
import Dropdown from "../dropdown";
// import { getCategories } from "../../../redux/actions/index.js";

const FormProduct = () => {
  const [variantSelected, setVariants] = useState([]);
  const [categorySelected, setCategories] = useState([]);

  //   {
  //     "price" : {"currency": "$", "value": 249999},
  //     "imageUrl": [],
  //     "variants": {"stock": 500, "formato": "mecánico"},
  //     "categories": ["strings"],
  // }

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

  const storage = ["8 GB", "16 GB", "32 GB", "64 GB", "128 GB"];

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

  const categories = ["Graphic Cards", "Storage", "Periferics", "Monitors"];

  useEffect(() => {
    // dispatch(getCategories());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ChangeInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
      categories: [...categorySelected],
      variants: [...variantSelected],
    });
  };

  const onClickSubmit = (color) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(categorySelected);
    // console.log(variantSelected);

    const obj = {
      ...product,
      variants: variantSelected,
      categories: categorySelected,
    };

    console.log(obj);
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
                  setVariants={(el) => setCategories(el)}
                  variants={categorySelected}
                ></Dropdown>
              </div>
              <div className="form__element">
                <label className="form__label">variants</label>
                <Dropdown
                  title="select variants"
                  items={storage}
                  setVariants={(el) => setVariants(el)}
                  variants={variantSelected}
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
