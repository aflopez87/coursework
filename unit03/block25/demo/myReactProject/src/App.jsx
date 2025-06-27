import { useState} from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import Menu from './Menu'
import { RecipeContext } from './UseRecipe'

function App() {
    const {recipe, setRecipe} = useContext(RecipeContext)
    console.log(recipe)
    return (
    <>
     <Menu/>
     {recipe ? (
       <>
         <img src={imageUrl} alt={name}/>
         <p></p>
       </>
     ) : null}
    </>
  )
}

export default App