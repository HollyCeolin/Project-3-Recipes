import React from 'react'
import { useEffect } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import "./HomeScreen.css"
import RecipeCard from '../RecipeCard/RecipeCard'


const HomeScreen = () => { 
  const [recipes, setRecipes]=useState([])
  const url = "https://recipes.devmountain.com"
  const [search, setSearch] = useState("") 
  const getRecipes = () => {
    axios
    .get(`${url}/recipes`)
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
  }
  useEffect(() => {
    getRecipes()
  },[])

  const recipeDisplay = recipes
  .filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = search.toLowerCase()
    return title.includes(searchParams)
  })
  .map((recipe, index) => {
    return <RecipeCard recipe={recipe} key ={recipe.recipe_id} />
  })
  return (
    <div>
      <AdBanner />
      <div className='search-container'>
        <span className='search-bar'>
          <BsSearch size="1em" color="#ff8400" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a recipe" />
        </span>
      </div>
      <div className='recipe-display-container'>
        {recipeDisplay}
      </div>
      
    </div>
  )
}

export default HomeScreen