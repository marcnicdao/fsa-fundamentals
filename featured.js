export const loadFeatured = (recipe) => {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = `<div class="featured-container">
        <div class="featured-recipe" data-recipe-name="${recipe.name}">
          <h3 class="featured-title">Featured: ${recipe.name}</h3>
          <img
          src=${recipe.images[0]}
          alt="" class="featured-img" />
        </div>
      </div>`;
};
