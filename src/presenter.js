import calculate from "./stringCalculator.js";


const form = document.querySelector("#calc-form");
const input = document.querySelector("#input")
const div = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
      const cadena = input.value;
      div.innerHTML = "<p>" + calculate(cadena) + "</p>";
});
