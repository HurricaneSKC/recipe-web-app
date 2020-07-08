import React from 'react';

class Recipe extends React.Component {
  render() {
    const { title, description, ingredients, directions, servings, author } = this.props.details;
    return (
      <li className="single-recipe">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={author.url}>By {author.name}</a>
        <h3>Ingredients</h3>
        {Object.keys(ingredients).map(key => <p key={key}>{ingredients[key]}</p>)}
        <p>servings: {servings}</p>
        <h3>Directions</h3>
        {Object.keys(directions).map(key => <p key={key}>{directions[key]}</p>)}
      </li>
    )
  }
}

export default Recipe;