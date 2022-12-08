import React, { useState } from "react";
import "../newRecipeComponents/NewRecipeScreen.css";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const url = "https://recipes.devmountain.com";

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log("in submit", values);
    axios
      .post(`${url}/recipes`, values)
      .then((res) => {
        console.log("in post");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="form-container">
      <h1 className="form-h1-styles">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-row-top">
              <input
                type="text"
                value={values.recipeName}
                name="recipeName"
                placeholder="Title your Recipe!"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                value={values.imageURL}
                name="imageURL"
                placeholder="Add an image"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-radio-row">
              <label>
                <input
                  type="radio"
                  value="Cook"
                  name="type"
                  onChange={handleChange}
                ></input>
                Cook
              </label>
              <label>
                <input
                  type="radio"
                  value="Bake"
                  name="type"
                  onChange={handleChange}
                ></input>
                Bake
              </label>
              <label>
                <input
                  type="radio"
                  value={values.type}
                  name="Drink"
                  onChange={handleChange}
                ></input>
                Drink
              </label>
            </div>
            <div className="form-row-3">
              <input
                type="text"
                value={values.prepTime}
                name="prepTime"
                placeholder="Add Prep Time"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                value={values.cookTime}
                name="cookTime"
                placeholder="Cook Time"
                onChange={handleChange}
              ></input>
              <input
                type="number"
                value={values.serves}
                name="serves"
                placeholder="Add Servings"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-row-4">
              <div className="form-column">
                <input
                  type="text"
                  value={name}
                  name="ingredient"
                  placeholder="Ingredient"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  type="number"
                  value={quantity}
                  name="quantity"
                  placeholder="Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                ></input>
              </div>
              <div className="form-column">
                <ul>
                  <li>4 eggs</li>
                  <li>1 box of cake</li>
                </ul>
              </div>
            </div>
            <div className="btn-container">
              <button className="add-btn" onClick={addIngredient} type="button">
                Add Another
              </button>
            </div>
            <div className="text-area-container">
              <textarea
                name="instructions"
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
              />
            </div>
            <div className="btn-container">
              <button className="save-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
