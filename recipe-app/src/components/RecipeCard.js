import React from 'react';

class AddRecipeCard extends React.Component {
  titleRef = React.createRef();
  descriptionRef = React.createRef();
  ingredientsRef = React.createRef();
  directionsRef = React.createRef();
  servingsRef = React.createRef();
  tagsRef = React.createRef();
  nameRef = React.createRef();
  urlRef = React.createRef();
  source_urlRef = React.createRef();

  createRecipe = e => {
    e.preventDefault();
    const recipe = {
      title: this.titleRef.current.value,
      description: this.descriptionRef.current.value,
      ingredients: this.ingredientsRef.current.value,
      directions: this.directionsRef.current.value,
      servings: parseFloat(this.servingsRef.current.value),
      tags: this.tagsRef.current.value,
      name: this.nameRef.current.value,
      url: this.urlRef.current.value,
      source_url: this.source_urlRef.current.value
    }
    this.props.addRecipe(recipe);
    e.currentTarget.reset();
  }
  render() {
    return (
      <form className="" onSubmit={this.createRecipe}>
        <input name='title' ref={this.titleRef} type='text' placeholder='recipe title' />
        <textarea name='description' ref={this.descriptionRef} type='text' placeholder='description' />
        <textarea name='ingredients' ref={this.ingredientsRef} type='text' placeholder='ingredients' />
        <textarea name='directions' ref={this.directionsRef} type='text' placeholder='directions' />
        <input name='servings' ref={this.servingsRef} type='text' placeholder='servings' />
        <input name='tags' ref={this.tagsRef} type='text' placeholder='tags' />
        <input name='name' ref={this.nameRef} type='text' placeholder='name' />
        <input name='url' ref={this.urlRef} type='text' placeholder='url' />
        <input name='source_url' ref={this.source_urlRef} type='text' placeholder='source_url' />
        <button type="submit">Add your Recipe</button>
      </form>
    )
  }
}

export default AddRecipeCard;

// {
//   "title": "Banana Oatmeal Cookie",
//     "description": "This recipe has been handed down in my family for generations. It's a good way to use overripe bananas. It's also a moist cookie that travels well either in the mail or car.",
//       "ingredients": [
//         "1 1/2 cups sifted all-purpose flour",
//         "1/2 teaspoon baking soda",
//         "1 teaspoon salt",
//         "1/4 teaspoon ground nutmeg",
//         "3/4 teaspoon ground cinnamon",
//         "3/4 cup shortening",
//         "1 cup white sugar",
//         "1 egg",
//         "1 cup mashed bananas",
//         "1 3/4 cups quick cooking oats",
//         "1/2 cup chopped nuts"
//       ],
//         "directions": [
//           "Preheat oven to 400 degrees F (200 degrees C).",
//           "Sift together the flour, baking soda, salt, nutmeg and cinnamon.",
//           "Cream together the shortening and sugar; beat until light and fluffy. Add egg, banana, oatmeal and nuts. Mix well.",
//           "Add dry ingredients, mix well and drop by the teaspoon on ungreased cookie sheet.",
//           "Bake at 400 degrees F (200 degrees C) for 15 minutes or until edges turn lightly brown. Cool on wire rack. Store in a closed container."
//         ],
//           "servings": 24,
//             "tags": ["dessert", "fruit"],
//               "author": {
//     "name": "Blair Bunny",
//       "url": "http://allrecipes.com/cook/10179/profile.aspx"
//   },
//   "source_url": "http://allrecipes.com/Recipe/Banana-Oatmeal-Cookie/Detail.aspx"
// }