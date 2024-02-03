/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Higor",
  photo: "images/profile.webp",
  favoriteFoods: ["Hamburger", "Pizza", "Ice Cream"],
  hobbies: ["Soccer", "Video Game"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  places: "Jundiai, SP",
  length: "20 years",
});

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobbie) => {
  let li = document.createElement("li");
  li.textContent = hobbie;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
var dlElement = document.getElementById("places-lived");

myProfile.placesLived.forEach(function (place) {
  var dt = document.createElement("dt");
  dt.textContent = place.places;

  var dd = document.createElement("dd");
  dd.textContent = place.length;

  dlElement.appendChild(dt);
  dlElement.appendChild(dd);
});
