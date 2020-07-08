import React from 'react';
import AddRecipeCard from './RecipeCard'


class RecipePicker extends React.Component {
  render() {
    return (
      <div className="">
        <h1>Add Recipe</h1>
        <AddRecipeCard addRecipe={this.props.addRecipe} />
      </div>
    )
  }
}

export default RecipePicker;