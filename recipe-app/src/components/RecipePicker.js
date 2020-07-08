import React from 'react';
import AddRecipeCard from './RecipeCard'


class RecipePicker extends React.Component {
  render() {
    return (
      <div className="">
        <h1>Or add your own recipe</h1>
        <AddRecipeCard addRecipe={this.props.addRecipe} />
      </div>
    )
  }
}

export default RecipePicker;