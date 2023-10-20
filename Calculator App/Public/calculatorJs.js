const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operation = document.querySelector("#operation");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function calculate() {
  const index = operation.selectedIndex;
  const option = operation.options[index].value;
  try {
    fetch(`/calculator/${option}?num1=${num1.value}&num2=${num2.value}}`)
      .then((response) => response.json())
      .then((data) => {
        result.innerHTML = data.result;
      });
  } catch (err) {
    result.innerHTML = "Error";
  }
}

button.addEventListener("click", (evt) => {
  evt.preventDefault();
  calculate();
});
