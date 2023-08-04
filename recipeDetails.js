export const loadRecipeDetail = (recipe) => {
  const contentContainer = document.querySelector(".content");
  const recipeDetailsDiv = document.createElement("div");
  recipeDetailsDiv.className = "recipe-details";

  const recipeDetailsInnerDiv = document.createElement("div");
  recipeDetailsInnerDiv.className = "recipe-details-inner";
  recipeDetailsDiv.appendChild(recipeDetailsInnerDiv);
  const recipeDetailImgContainer = createRecipeDetailsImgContainer(recipe);
  const recipeDetailsInfoDiv = document.createElement("div");
  recipeDetailsInfoDiv.className = "recipe-details-info";
  recipeDetailsInnerDiv.appendChild(recipeDetailImgContainer);

  const recipeDetailsName = document.createElement("h1");
  recipeDetailsName.innerText = recipe.name;
  recipeDetailsInfoDiv.appendChild(recipeDetailsName);

  const ingredientsDiv = createIngredientsDiv(recipe);
  recipeDetailsInfoDiv.appendChild(ingredientsDiv);
  recipeDetailsInnerDiv.appendChild(recipeDetailsInfoDiv);

  const directionsDiv = createDirectionsDiv(recipe);
  recipeDetailsInfoDiv.appendChild(directionsDiv);

  contentContainer.appendChild(recipeDetailsDiv);
};

/* <div class="recipe-details-img-container">
  <img
    src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9375585.jpg&q=60&c=sc&orient=true&poi=auto&h=512"
    alt=""
    class="recipe-details-img"
  />
</div>; */
const createRecipeDetailsImgContainer = (recipe) => {
  const recipeDetailImgDiv = document.createElement("div");
  recipeDetailImgDiv.className = "recipe-details-img-container";
  const recipeDetailsImg = document.createElement("img");
  recipeDetailsImg.src = recipe.images[0];
  recipeDetailsImg.classList.add("recipe-details-img");
  recipeDetailImgDiv.appendChild(recipeDetailsImg);

  return recipeDetailImgDiv;
};

/* <div class="ingredients">
  <h4>Ingredients:</h4>
  <ul>
    <li>loren</li>
    <li>loren</li>
    <li>loren</li>
  </ul>
</div>; */

const createIngredientsDiv = (recipe) => {
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

  return ingredientsDiv;
};

/* <div class="directions">
  <h4>Directions:</h4>
  <ol>
    <li>lorem</li>
    <li>lorem</li>
    <li>lorem</li>
    <li>lorem</li>
  </ol>
</div>; */
const createDirectionsDiv = (recipe) => {
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
  return directionsDiv;
};
