export const loadRecipesList = (recipes) => {
  const contentContainer = document.querySelector(".recipes-list");

  recipes.forEach((recipe) => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");
    recipeElement.dataset.recipeName = recipe.name;
    const recipeItem = `
        <img class="recipe-img" src=${recipe.images[0]}></img>
        <div class="recipe-text">
          <h3 class="recipe-title">${recipe.name}</h3>
          <p class="recipe-description">${recipe.description}</p>
        </div>
        `;
    recipeElement.innerHTML = recipeItem;
    contentContainer.appendChild(recipeElement);
  });
};
