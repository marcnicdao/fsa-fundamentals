export const loadHeader = () => {
  const pageList = ["index", "recipes", "suggest"];
  const headerContainer = document.getElementById("header-container");
  const headerElement = document.createElement("header");
  const title = document.createElement("h1");

  title.innerText = "Recipe World";
  title.classList.add("title");

  const navBar = createNavBar(pageList);
  navBar.className = "nav-bar";

  headerElement.className = "header-element";
  headerElement.appendChild(title);
  headerElement.appendChild(navBar);
  headerContainer.appendChild(headerElement);
};

const createNavBar = (pageList) => {
  const navBar = document.createElement("nav");
  const ulElement = document.createElement("ul");
  ulElement.classList.add("nav-ul");
  pageList.forEach((page) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `${page}.html`;
    a.innerText = page === "index" ? "HOME" : page.toUpperCase();
    li.classList.add("nav-links");
    li.appendChild(a);
    ulElement.appendChild(li);
  });
  navBar.appendChild(ulElement);
  return navBar;
};
