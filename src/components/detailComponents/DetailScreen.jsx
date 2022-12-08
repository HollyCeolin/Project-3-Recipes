import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./DetailScreen.css"

const DetailScreen = () => { 
  const {id} = useParams()
  const [recipe, setRecipe]=useState({})
  const url = "https://recipes.devmountain.com" 

  useEffect(() => {
    axios.get(`${url}/receipes/${id}`).then((res) => {
      setRecipe(res.data)
    })
  }, [])

  console.log("recipes we need", recipe)
  return (
    <>
    <div 
    className="detail-screen-banner"
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        }}
       >
        <div className='recipe-container'>
          <h1 className='recipe-title-h1'>{recipe.recipe_name}</h1>
        </div>
      </div>
      <div className='detail-container'>
        <div className='recipe-left-card-container'>
          <div className='detail-h3-container'>
            <h3 className='detail-h3-styles'>Recipe</h3>
          </div>
          <div className='detail-top-content'>
            <ul className='detail-ul-styles'>
              <li>Prep Time: {recipe.prep_time}</li>
              <li>Cook Time: {recipe.cook_time}</li>
              <li>Serves: {recipe.serves}</li>
            </ul>
          </div>
          <div className='detail-h3-container'>
            <h3 className='detail-h3-styles'>Ingredients</h3>
          </div>
          {recipe.ingredients && recipe.ingredients.map((ingredient) => {
            return (
              <div className='detail-bottom-content'>
                <ul className='detail-ul-styles'>
                  <li>
                    {ingredient.quantity} {ingredient.ingredient}
                  </li>
                </ul>
                </div>
            )
          })}
        </div>
        <div className='instructions-container'>
          <div className='detail-h3-container'>
          <h3 className='detail-h3-styles'>Instructions</h3>
          </div>
          <div className='instructions-p'>
            <p className='instructions-p-styles'
            style={{whiteSpace: "pre-wrap"}}
            >
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>

          </div>
        </div>
      </div>
      </>
  );
        };


export default DetailScreen;
