import React from 'react';

/**
 * What is the goal here? 
 * 
 * Display a recipe to the DOM
 * 
 * 
 * In seasons, we created an object with summer and winter properties
 * each as an object themselves. Each sub object has a text and icon name
 * to be displayed to the DOM. 
 * 
 * Then we made a function that takes the lat and the month and 
 * uses logic to return whichever season it is. 
 * 
 * Finally we made another function using props. We set the season,
 * assigned the object's properties, and returned the season text
 * and the appropriate icon.
 * 
 * 
 * Back to this project, what is the goal again. Display a recipe, so
 * let's create our recipe object. 
 * 
 * Then we want to create our recipe, so let's 
 */

const measuringSystems = {
  uomImperial: [
    'tbsp',
    'tsp',
    'fl oz',
    'cup',
    'pint',
    'quart',
    'gallon',
    'ounce',
    'lb'
  ],
  uomMetric: [
    'ml',
    'liter',
    'gram',
    'kilogram'
  ]
}
  

const recipeConfig = {
  id: null,
  title: 'Donuts',
  subtitle: '',
  yieldAmount: 12,
  yieldType: 'each',
  /** Each object is a single ingredient in the recipe yeah?, so
  * we could add more later? Can a variable be dynamic like that?
  */
  ingredients: [{
    ingredient: 'Flour',
    quantity: 150,
    // Is there a way to custom access depending on user input?
    // Is this a bad idea accessing another object via this object?
    uom: measuringSystems[0]
  }],
  method: ''
}

 export default RecipeDisplay;