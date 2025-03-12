import React from "react"
import IngredientsList from "./Components/IngredientsList"
import ClaudeRecipe from "./Components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main(){

    const [ingredients, setingredients] = React.useState([])
    
    const [recipe, setrecipe] = React.useState("")

    async function getrecipe(){
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setrecipe(generatedRecipe)
    }

    function handleOnclick(formData){
        const newIngredient = formData.get("ingredient")

        setingredients(prevIngredients => 
            [...prevIngredients, newIngredient]
        )
        /*
        ingredients.push(newIngredient)
        console.log(ingredients)
        */
    }

    return(
        <main>
            <form action={handleOnclick} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. Oregano" 
                    aria-label="Add Ingredient"
                    name = "ingredient"
                />
                <button>Add Ingredient</button>
            </form>
 
            <IngredientsList ingredients={ingredients} getrecipe={getrecipe} />
            {recipe && <ClaudeRecipe recipe={recipe}/> }
        </main>
    )
}