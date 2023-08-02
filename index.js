import { loadHeader } from "./header.js";
import { loadRecipesList } from "./recipes.js";
import { recipesArray } from "./recipesArray.js";
import { loadRecipeDetail } from "./recipeDetails.js";

const currentPage = document.URL.split("/")[3];
let test = "initial";

const loadBody = (currentPage) => {
  if (currentPage === "") {
    return;
  }
  if (currentPage === "recipes.html") {
    console.log("works", recipesArray);
    return loadRecipesList(recipesArray);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadBody(currentPage);
  eventHandlerAdder();
  console.log("test", test);
});

const eventHandlerAdder = () => {
  const baseURL = "/";
  const featuredRecipe = document.querySelector(".featured-recipe");
  const recipeElements = document.querySelectorAll(".recipe");

  if (featuredRecipe) {
    featuredRecipe.addEventListener("click", (e) => {
      const recipeName = e.currentTarget.dataset.recipeName;
      const currentRecipe = recipesArray.find(
        (recipe) => recipe.name === recipeName
      );
      loadRecipeDetail(currentRecipe);
    });
  }

  if (recipeElements) {
    recipeElements.forEach((recipe) => {
      recipe.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset.recipeName);
        const recipeName = e.currentTarget.dataset.recipeName;
        const currentRecipe = recipesArray.find(
          (recipe) => recipe.name === recipeName
        );
        loadRecipeDetail(currentRecipe);
      });
    });
  }
};
