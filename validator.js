const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const validRegex =
  /^(?:\+1\s?|1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

const isNumberValid = (number) => validRegex.test(number);

const isNumberInvalid = () => {
  return "Invalid US number: " + userInput.value;
};

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  results.textContent = isNumberValid(userInput.value)
    ? "Valid US number: " + userInput.value
    : isNumberInvalid();
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  results.textContent = "";
});
