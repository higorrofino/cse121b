/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Higor Rofino";
let currentYear = new Date().getFullYear();
const profilePicture = "images/profile.webp";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${profilePicture}`);

/* Step 5 - Array */
const favoriteFoods = ["Hamburger", "Japanese Food", "Pizza"];
foodElement.innerHTML = favoriteFoods;

const newFood = "Hot dog";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods} `;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods} `;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods} `;
