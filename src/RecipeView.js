import React from "react"


function RecipeView({findRecipe, deleteRecipe}) {

    const row = 
        <tr key = {findRecipe}>
            
            <td id = "name">{findRecipe.name}</td>
            <td id = "cuisine">{findRecipe.cuisine}</td>
            <td id = "photo"><img alt="new" src = {findRecipe.photo} /></td>
            <td id = "content_td"><p>{findRecipe.ingredients}</p></td>
            <td id = "content_td"><p>{findRecipe.preparation}</p></td>
            <td><button name = "delete" onClick = {() => deleteRecipe(findRecipe.name)}>Delete</button></td>
        </tr> 
        
        
    return (
       <>
            <tbody>{row}</tbody>
            
            </> 
    )
}

export default RecipeView
