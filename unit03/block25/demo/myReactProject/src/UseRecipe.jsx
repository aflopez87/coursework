import React, {useState} from 'react'

const RecipeContext = React.createContext()

const RecipeProvider = ({children})=>{
    const [recipe, setRecipe] = useState("Hello!")


    const getRecipe = async(id)=>{
        const response = await axios.get('https://fsa-crud-2aa9294fe819.herokuapp.com/api/cohort/recipes/'+id)
        setRecipe(response.data.data)
    }
    return(
        <RecipeContext.Provider value={{recipe, getRecipe}}>
            {children}
        </RecipeContext.Provider>
    )
}

export {RecipeContext, RecipeProvider}