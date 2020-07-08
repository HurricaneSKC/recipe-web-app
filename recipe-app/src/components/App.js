import React from 'react';
import RecipePicker from './RecipePicker';
import Header from './Header';
import Recipe from './Recipe';
import recipes from '../recipe-data';

class App extends React.Component {
  state = {
    recipes: {}
  }
  addRecipe = recipe => {
    const recipes = { ...this.state.recipes };
    recipes[`recipe${Date.now()}`] = recipe;
    this.setState({ recipes });
  }
  loadData = () => {
    this.setState({ recipes: recipes })
  }
  render() {
    return (
      <div className="recipe-container">
        <div className="menu">
          <Header loadData={this.loadData} tagline="Tap Me and slide to choose your recipe" />
          <div className="slider">
            <ul className="slides">
              {Object.keys(this.state.recipes).map(key => <Recipe key={key} details={this.state.recipes[key]} />)}
            </ul>
          </div>
          <div className="container">
            <RecipePicker addRecipe={this.addRecipe} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
