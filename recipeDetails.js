export const loadRecipeDetail = (recipe) => {
  console.log(recipe);
  const contentContainer = document.querySelector(".content");
  const recipeDetailsDiv = document.createElement("div");
  recipeDetailsDiv.className = "recipe-details";

  const recipeDetailsInnerDiv = document.createElement("div");
  recipeDetailsInnerDiv.className = "recipe-details-inner";

  const recipeDetailImgContainer = document.createElement("div");
  recipeDetailImgContainer.className = "recipe-details-img-container";

  const recipeDetailsImg = document.createElement("img");
  recipeDetailsImg.src = recipe.images[0];
  recipeDetailsImg.classList.add("recipe-details-img");
  recipeDetailImgContainer.appendChild(recipeDetailsImg);

  recipeDetailsDiv.appendChild(recipeDetailsInnerDiv);

  const recipeDetailsInfoDiv = document.createElement("div");
  recipeDetailsInfoDiv.className = "recipe-details-info";
  recipeDetailsInnerDiv.appendChild(recipeDetailImgContainer);

  const recipeDetailsName = document.createElement("h1");
  recipeDetailsName.innerText = recipe.name;
  recipeDetailsInfoDiv.appendChild(recipeDetailsName);

  const ingredientsDiv = document.createElement("div");
  ingredientsDiv.className = "ingredients";
  const ingredientsTitle = document.createElement("h4");
  ingredientsTitle.innerText = "Ingredients:";
  ingredientsDiv.appendChild(ingredientsTitle);

  const ingredientsUl = document.createElement("ul");
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.innerText = ingredient;
    ingredientsUl.appendChild(li);
  });

  ingredientsDiv.appendChild(ingredientsUl);
  recipeDetailsInfoDiv.appendChild(ingredientsDiv);
  recipeDetailsInnerDiv.appendChild(recipeDetailsInfoDiv);

  const directionsDiv = document.createElement("div");
  directionsDiv.className = "directions";

  const directionsTitle = document.createElement("h4");
  directionsTitle.innerText = "Directions:";
  directionsDiv.appendChild(directionsTitle);

  const directionsOl = document.createElement("ol");
  recipe.directions.forEach((direction) => {
    const li = document.createElement("li");
    li.innerText = direction;
    directionsOl.appendChild(li);
  });

  directionsDiv.appendChild(directionsOl);
  recipeDetailsInfoDiv.appendChild(directionsDiv);

  contentContainer.appendChild(recipeDetailsDiv);
};
