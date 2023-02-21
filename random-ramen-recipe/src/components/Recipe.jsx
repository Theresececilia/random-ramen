
import classes from './Recipe.module.css'
import React, { useState } from "react";

const ramenRecipes = [
  {
    title: "Miso Ramen",
    ingredients: ["ramen noodles", "miso paste", "soy sauce", "chicken broth", "pork belly", "green onions"],
    instructions: "1. Cook the ramen noodles according to the package instructions. 2. In a separate pot, bring the chicken broth to a simmer. 3. Whisk in the miso paste and soy sauce until fully combined. 4. Add the pork belly to the broth and let simmer for 10-15 minutes. 5. Serve the noodles in a bowl, pour the broth over them, and garnish with sliced green onions."
  },
  {
    title: "Tonkotsu Ramen",
    ingredients: ["ramen noodles", "pork bones", "soy sauce", "mirin", "sesame oil", "green onions"],
    instructions: "1. In a large pot, add the pork bones and enough water to cover them. Bring to a boil and then reduce to a simmer for 12-24 hours. 2. Strain the broth and return it to the pot. 3. Add soy sauce, mirin, and sesame oil to the broth and bring it to a simmer. 4. Cook the ramen noodles according to the package instructions. 5. Serve the noodles in a bowl, pour the broth over them, and garnish with sliced green onions."
  },
  {
    title: "Shoyu Ramen",
    ingredients: ["ramen noodles", "soy sauce", "chicken broth", "mirin", "pork belly", "bamboo shoots"],
    instructions: "1. Cook the ramen noodles according to the package instructions. 2. In a separate pot, bring the chicken broth to a simmer. 3. Add soy sauce and mirin to the broth and stir to combine. 4. Add the pork belly to the broth and let simmer for 10-15 minutes. 5. Serve the noodles in a bowl, pour the broth over them, and garnish with sliced bamboo shoots."
  },
  {
    title: "Vegetarian Ramen",
    ingredients: ["ramen noodles", "mushrooms", "soy sauce", "vegetable broth", "tofu", "green onions"],
    instructions: "1. Cook the ramen noodles according to the package instructions. 2. In a separate pot, bring the vegetable broth to a simmer. 3. Add sliced mushrooms and soy sauce to the broth and let simmer for 10-15 minutes. 4. Slice the tofu into small cubes and add it to the broth. 5. Serve the noodles in a bowl, pour the broth over them, and garnish with sliced green onions."
  },
  {
    title: "Curry Ramen",
    ingredients: ["ramen noodles", "curry powder", "coconut milk", "chicken broth", "chicken thighs", "cilantro"],
    instructions: "1. Cook the ramen noodles according to the package instructions. 2. In a separate pot, brown the chicken thighs on both sides. 3. Add chicken broth, curry powder, and coconut milk to the pot and bring to a simmer. 4. Let simmer for 20-30 minutes until chicken is cooked through. 5. Serve the noodles in a bowl, pour the broth over them, and garnish with chopped cilantro."
  }
  ]

const RandomRamenRecipe = () => {
  const [currentRecipe, setCurrentRecipe] = useState(getRandomRecipe());

  function getRandomRecipe() {
    return ramenRecipes[Math.floor(Math.random() * ramenRecipes.length)];
  }

  function handleNewRecipeClick() {
    setCurrentRecipe(getRandomRecipe());
  }

  return (
    <>
    <div className={classes.container}>
      <h1>{currentRecipe.title}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {currentRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{currentRecipe.instructions}</p>
      <button onClick={handleNewRecipeClick}>Get a new recipe</button>
    </div>
    </>
  );
};

export default RandomRamenRecipe;
