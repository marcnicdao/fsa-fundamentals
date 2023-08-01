import { loadHeader } from "./header.js";
import { loadRecipesList } from "./recipes.js";
import { recipesArray } from "./recipesArray.js";

const currentPage = document.URL.split("/")[3];

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
});
