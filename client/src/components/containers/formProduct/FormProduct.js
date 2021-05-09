import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FormProductStyle from "./styled";
import { IoCloseSharp } from "react-icons/io5";
import Checkbox from "../checkbox";
import Dropdown from "../dropdown";
import TagsInput from "../tagsInput";

// import { getCategories } from "../../../redux/actions/index.js";

export function validate(product, allProducts) {
  let errors = {};

  if (!product.name) {
    errors.name = "Campo requerido.";
  }
  if (!product.brand) {
    errors.brand = "Campo requerido.";
  }
  if (!product.description) {
    errors.description = "Campo requerido.";
  }
  if (!product.price) {
    errors.price = "Campo requerido.";
  }

  if (product.price && !/[0-9-]+$/.test(product.price)) {
    errors.price = "Sólo un rango de números, ejemplo: 5 - 8";
  }

  if (product.name && !/^[A-Za-z\s]+$/g.test(product.name)) {
    errors.name = "Sólo palabras sin tilde.";
  }

  // if (
  //   product.name &&
  //   allProducts.length &&
  //   allProducts.find(
  //     (element) =>
  //       element.name.toLowerCase().trim() === product.name.toLowerCase().trim()
  //   )
  // ) {
  //   errors.name = "La raza ya existe.";
  // }

  // if (
  //   product.imageUrl &&
  //   (!/image\/jpeg|png/.test(product.imageUrl[0]) || product.imageUrl > 5242880)
  // ) {
  //   errors.file = "Sólo imágenes .png y .jpeg, menores a 5.24 MB.";
  // }

  return errors;
}

const FormProduct = () => {
  const [variantSelected, setVariants] = useState([]);
  const [tags, setTags] = useState([]);
  const [categorySelected, setCategories] = useState([]);
  const [errors, setErrors] = useState({});

  //   {
  //     "price" : {"currency": "$", "value": 249999},
  //     "imageUrl": [],
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

    setErrors(
      validate({
        ...product,
        [e.target.name]: e.target.value,
      })
    );

    console.log(errors);
  };

  const onClickSubmit = (color) => {};

  const handleSubmit = (e) => {

    e.preventDefault();
    // console.log(categorySelected);
    // console.log(variantSelected);

    const obj = {
      ...product,
      variants: { ...variantSelected[0] },
      categories: categorySelected,
      imageUrl: [...tags],
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
                {errors.name && <p className="danger">{errors.name}</p>}
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
                {errors.brand && <p className="danger">{errors.brand}</p>}
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
                {errors.description && (
                  <p className="danger">{errors.description}</p>
                )}
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
                {errors.price && <p className="danger">{errors.price}</p>}
              </div>
            </div>

            <div className="form__column">
              <div className="form__element">
                <label className="form__label">categories</label>
                <Dropdown
                  title="select category"
                  name="categories"
                  items={categories}
                  multiselect
                  setVariants={(el) => setCategories(el)}
                  variants={categorySelected}
                ></Dropdown>
              </div>
              <div className="form__element">
                <label className="form__label">variants</label>
                <Dropdown
                  title="select storage"
                  name="storage"
                  items={storage}
                  setVariants={(el) => setVariants(el)}
                  variants={variantSelected}
                ></Dropdown>
              </div>
              <div className="form__element">
                {/* <label className="form__label">colors</label>
                <div className="checkbox__container">
                  {colors.map((color, index) => (
                    <Checkbox
                      key={index}
                      color={color.value}
                      onClick={() => onClickSubmit()}
                    ></Checkbox>
                  ))}
                </div> */}
              </div>
              <div className="form__element">
                <label className="form__label">Image URL:</label>
                <TagsInput tags={tags} setTags={setTags}></TagsInput>
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
