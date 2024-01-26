/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);

  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
  let fac1 = Number(document.querySelector("#factor1").value);
  let fac2 = Number(document.querySelector("#factor2").value);

  document.querySelector("#product").value = multiply(fac1, fac2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
  let div1 = Number(document.querySelector("#dividend").value);
  let div2 = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(div1, div2);
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
function getDue() {
  const subTotal = parseFloat(document.getElementById("subtotal").value) || 0;
  const applyDiscount = document.getElementById("member").checked;

  const discount = applyDiscount ? 0.2 : 0;
  const total = subTotal - subTotal * discount;

  const showTotal = document.getElementById("total");
  showTotal.textContent = `$${total.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getDue);

/* ARRAY METHODS - Functional Programming */
let numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
const array = document.getElementById("array");
array.textContent = numbArray;
/* Output Odds Only Array */
const odds = numbArray.filter((odd) => odd % 2 !== 0);
document.getElementById("odds").textContent = odds;

/* Output Evens Only Array */
const evens = numbArray.filter((even) => even % 2 === 0);
document.getElementById("evens").textContent = evens;

/* Output Sum of Org. Array */
const sum = numbArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").textContent = sum;

/* Output Multiplied by 2 Array */
const mult = numbArray.map((num) => num * 2);
document.getElementById("multiplied").textContent = mult;

/* Output Sum of Multiplied by 2 Array */
const sumMult = mult.reduce((sum, number) => sum + number);
document.getElementById("sumOfMultiplied").textContent = sumMult;
