export const loadFooter = () => {
  const footerContainer = document.querySelector(".footer");
  const footerDiv = document.createElement("div");
  const footerSpan = document.createElement("span");
  footerSpan.className = "footer-text";
  footerSpan.innerText = "Copyright 2023 - RECIPE WORLD - MARC NICDAO";

  footerDiv.appendChild(footerSpan);
  footerContainer.appendChild(footerDiv);
};
