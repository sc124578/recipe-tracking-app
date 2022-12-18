import React, { useState } from "react";


function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
   const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "", 
    preparation: "",
  }
  const [newRecipe, setNewRecipe] = useState({...initialFormState})
const handleNewRecipe = ({target}) => {
  setNewRecipe((previous) => ({
    ...previous,
    [target.name]: target.value
  }))
} 
const handleSubmit = (event) => {
event.preventDefault()
  createRecipe(newRecipe)
setNewRecipe({...initialFormState})
}

  return (
    <form name="create" onSubmit = {handleSubmit}>
      <table>
        <tbody>
          <tr>
          <td>
            <input 
              id = "name"
              type = "text"
              name = "name"
              required = {true}
              onChange = {handleNewRecipe}
             value = {newRecipe.name}
             placeholder = "name"
              />
            </td>
          <td>
            <input id = "cuisine"
              type = "text"
              name = "cuisine"
              required = {true}
              onChange = {handleNewRecipe}
             value = {newRecipe.cuisine}
             placeholder = "cuisine"
              />
            </td>
            <td>
               <input id = "photo"
              type = "url"
              name = "photo"
              required = {true}
              onChange = {handleNewRecipe}
             value = {newRecipe.photo}
             placeholder = "photo"
              />
            </td>
              <td>
              <textarea 
              id="ingredients"
              name="ingredients"
              required = {true}
              type = "text"
               rows = {3}
              onChange = {handleNewRecipe}
              value = {newRecipe.ingredients}
              placeholder = "ingredients"
                />
            </td>
             <td htmlFor = "preparation">
              <textarea 
              id="preparation"
              name="preparation"
              required = {true}
              type = "text"
              rows = {3}
            onChange = {handleNewRecipe}
              value = {newRecipe.preparation}
              placeholder = "preparation"
                />
            </td>
          
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
