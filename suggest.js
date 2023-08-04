const agreeButton = document.querySelector(".agree-button");
const submitButton = document.querySelector(".submit-button");

export const addAgreeButtonListener = () => {
  agreeButton.addEventListener("click", () => {
    const disabled = submitButton.classList.contains("disabled");
    if (disabled) {
      submitButton.classList.remove("disabled");
      agreeButton.classList.remove("btn-outline-danger");
      agreeButton.classList.add("btn-outline-success");
    } else {
      submitButton.classList.add("disabled");
      agreeButton.classList.add("btn-outline-danger");
      agreeButton.classList.remove("btn-outline-success");
    }
  });
};

export const addSubmitButtonListener = () => {
  submitButton.addEventListener("click", () => {
    const recipeNameField = document.querySelector("#recipe-name");
    const ingredientsField = document.querySelector("#ingredients");
    const nameField = document.querySelector("#name");
    const emailField = document.querySelector("#email");

    const hasNoEmptyFields =
      recipeNameField.value &&
      ingredientsField.value &&
      nameField.value &&
      emailField.value;

    if (hasNoEmptyFields) {
      const submittedName = document.querySelector(".submitted-name");
      const submittedBody = document.querySelector(".submitted-body");
      const submittedTime = document.querySelector(".submitted-time");
      const modal = document.querySelector(".suggest-modal");

      modal.classList.remove("display-none");
      submittedTime.innerText = `By ${
        emailField.value
      } on ${getCurrentDateTimeFormatted()}`;
      submittedName.innerText = recipeNameField.value;
      submittedBody.innerText = ingredientsField.value;
    } else {
      alert("All Fields are required!");
    }
  });
};

function getCurrentDateTimeFormatted() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  const formattedDateTime = `${month} ${day} ${year} ${hours}:${minutes}`;
  return formattedDateTime;
}
