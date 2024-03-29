const inst = document.getElementById("instructions");
const instructionsList = [];
// sum
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#num1").value);
  let addNumber2 = Number(document.querySelector("#num2").value);

  document.querySelector("#result").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

//subtraction
function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#num1").value);
  let subtractNumber2 = Number(document.querySelector("#num2").value);

  document.querySelector("#result").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
}

document
  .querySelector("#subNumbers")
  .addEventListener("click", subtractNumbers);

//Multiplication
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
  let fac1 = Number(document.querySelector("#num1").value);
  let fac2 = Number(document.querySelector("#num2").value);

  document.querySelector("#result").value = multiply(fac1, fac2);
};

document
  .querySelector("#multNumbers")
  .addEventListener("click", multiplyNumbers);

//division
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
  let div1 = Number(document.querySelector("#num1").value);
  let div2 = Number(document.querySelector("#num2").value);

  document.querySelector("#result").value = divide(div1, div2);
};

document.querySelector("#divNumbers").addEventListener("click", divideNumbers);

const displayInstructions = (instructions) => {
  instructions.forEach((instruction) => {
    // Create HTML elements
    const paragraf = document.createElement("p");

    // Set properties
    paragraf.textContent = instruction.Operator + ":" + instruction.Description;

    // Append elements
    inst.appendChild(paragraf);
  });
};

const instructions = async () => {
  try {
    const response = await fetch(
      "https://higorrofino.github.io/cse121b/final-prject/instructions.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch temple data");
    }
    const instructionsData = await response.json();
    instructionsList.push(...instructionsData);
    displayInstructions(instructionsList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

instructions();
