import React from "react"

function RecipeView({findRecipe, deleteRecipe}) {
    
    const row = 
        <tr key = {findRecipe.name}>
            
            <td>{findRecipe.name}</td>
            <td>{findRecipe.cuisine}</td>
            <td>{findRecipe.photo}</td>
            <td>{findRecipe.ingredients}</td>
            <td>{findRecipe.preparation}</td>
            <td><button name = "delete" onClick = {() => deleteRecipe(findRecipe.name)}>Delete</button></td>
        </tr> 
        
    return (
       <>
            <tbody>{row}</tbody>
            
            </> 
    )
}

export default RecipeView