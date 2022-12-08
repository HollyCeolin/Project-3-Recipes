import React from 'react'
import "./RecipeCard.css"
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const seeMore = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
  return (
    <div className='recipe-card-section'>
        <div className='recipe-card-container'>
            <img className='recipe-card-img' src={recipe.image_url}>
            </img>
            <h1 className='recipe-card-title'>{recipe.recipe_name}</h1>
            <button className='blue-btn' onClick={() => seeMore()}>See More</button>
        </div>
    </div>
  )
}

export default RecipeCard