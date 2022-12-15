import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [newRecipe, setNewRecipe] = useState("")
const handleNewRecipe = (event) => setNewRecipe(event.target.value)
const handleSubmit = (event) => {
event.preventDefault()
setNewRecipe("")
}

  return (
    <form name="create" onSubmit = {handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input></input></td>
            <td><input></input></td>
            <td><input></input></td>
            <td><input></input></td>
            <td><input></input></td>
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
