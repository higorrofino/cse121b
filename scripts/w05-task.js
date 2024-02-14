/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  // Clear previous content
  templesElement.innerHTML = "";

  temples.forEach((temple) => {
    // Create HTML elements
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    // Set properties
    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append elements
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article); // Append article to templesElement
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch temple data");
    }
    const templeListData = await response.json();
    templeList.push(...templeListData);
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();

  const filter = document.getElementById("filtered").value;

  switch (filter) {
    case "all":
      // Display all temples
      displayTemples(temples);
      break;
    case "utah":
      // Filter for temples located in Utah
      const utahTemples = temples.filter((temple) =>
        temple.location.includes("Utah")
      );
      displayTemples(utahTemples);
      break;
    case "nonutah":
      // Filter for temples not located in Utah
      const nonUtahTemples = temples.filter(
        (temple) => !temple.location.includes("Utah")
      );
      displayTemples(nonUtahTemples);
      break;
    case "older":
      // Filter for temples dedicated before 1950
      const olderTemples = temples.filter(
        (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
      );
      displayTemples(olderTemples);
      break;
    default:
      console.error("Invalid filter value");
  }
};

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

getTemples();
