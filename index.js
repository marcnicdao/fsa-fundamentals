import { loadHeader } from "./header.js";
import { loadFeatured } from "./featured.js";
import { loadFooter } from "./footer.js";
import { loadRecipesList } from "./recipes.js";
import { recipesArray } from "./recipesArray.js";
import { loadRecipeDetail } from "./recipeDetails.js";
import { addAgreeButtonListener, addSubmitButtonListener } from "./suggest.js";

const currentPage = document.URL.split("/")[3];

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadBody(currentPage);
  loadFooter();
  eventHandlerAdder();
});

const loadBody = (currentPage) => {
  if (currentPage === "index.html" || currentPage === "") {
    const randomIndex = Math.floor(Math.random() * recipesArray.length);
    const randomRecipe = recipesArray[randomIndex];
    loadFeatured(randomRecipe);
    return;
  }
  if (currentPage === "recipes.html") {
    loadRecipesList(recipesArray);
    return;
  }
};

const eventHandlerAdder = () => {
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
        const recipeName = e.currentTarget.dataset.recipeName;
        const currentRecipe = recipesArray.find(
          (recipe) => recipe.name === recipeName
        );
        loadRecipeDetail(currentRecipe);
      });
    });
  }
  if (currentPage === "suggest.html") {
    addAgreeButtonListener();
    addSubmitButtonListener();
  }
};
