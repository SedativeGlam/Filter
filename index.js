const furnitures = [
  {
    image: "https://course-api.com/images/store/product-1.jpeg",
    name: "High-Back Bench",
    price: "9.99",
    id: "Ikea",
  },

  {
    image: "https://course-api.com/images/store/product-2.jpeg",
    name: "Albany Table",
    price: "79.99",
    id: "Marcos",
  },

  {
    image: "https://course-api.com/images/store/product-3.jpeg",
    name: "Accent Chair",
    price: "25.99",
    id: "Caressa",
  },

  {
    image: "https://course-api.com/images/store/product-4.jpeg",
    name: "Wooden Table",
    price: "45.99",
    id: "Caressa",
  },

  {
    image: "https://course-api.com/images/store/product-5.jpeg",
    name: "Dining Table",
    price: "6.99",
    id: "Caressa",
  },

  {
    image: "https://course-api.com/images/store/product-6.jpeg",
    name: "Sofa Set",
    price: "69.99",
    id: "Liddy",
  },

  {
    image: "https://course-api.com/images/store/product-7.jpeg",
    name: "Modern Bookshelf",
    price: "8.99",
    id: "Marcos",
  },

  {
    image: "https://course-api.com/images/store/product-8.jpeg",
    name: "Emperor Bed",
    price: "21.99",
    id: "Liddy",
  },

  {
    image: "https://course-api.com/images/store/product-9.jpeg",
    name: "Utopia Sofa",
    price: "39.95",
    id: "Marcos",
  },

  {
    image: "https://course-api.com/images/store/product-10.jpeg",
    name: "Entertainment Center",
    price: "29.98",
    id: "Liddy",
  },

  {
    image: "https://course-api.com/images/store/product-11.jpeg",
    name: "Albany Sectional",
    price: "10.99",
    id: "Ikea",
  },

  {
    image: "https://course-api.com/images/store/product-12.jpeg",
    name: "Leather Sofa",
    price: "9.99",
    id: "Liddy",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  displayFurnitures(furnitures);
});

const categories = document.querySelector(".categories");

const displayFurnitures = (items) => {
  categories.innerHTML = "";
  items.forEach((item) => {
    const furnGrid = document.createElement("div");
    furnGrid.className = "furn-grid";

    furnGrid.innerHTML = `<div class="furn-details">
              <img src="${item.image}" />
              <div class="name-price">
                <h5 class="name">${item.name}</h5>
                <p class="price">${item.price}</p>
              </div>
            </div>`;
    categories.appendChild(furnGrid);
  });
};

const all = document.querySelector(".all");
const ikea = document.querySelector(".ikea");
const marcos = document.querySelector(".marcos");
const caressa = document.querySelector(".caressa");
const liddy = document.querySelector(".liddy");

let currentCategory = "all";
let filteredByCategory = furnitures;

const filterFurnitures = () => {
  let filteredFurnitures = filteredByCategory;

  const filterMatch = searchBox.value.toLowerCase();
  if (filterMatch !== "") {
    filteredFurnitures = filteredByCategory.filter((item) =>
      item.name.toLowerCase().startsWith(filterMatch)
    );
  }

  if (filteredFurnitures.length === 0) {
    categories.textContent = "Sorry, no products matched your search";
    categories.style.fontSize = "11px";
    categories.style.marginTop = "25px";
  } else {
    displayFurnitures(filteredFurnitures);
  }
};

all.addEventListener("click", () => {
  currentCategory = "all";
  filteredByCategory = furnitures;
  displayFurnitures(furnitures);
});

ikea.addEventListener("click", () => {
  currentCategory = "Ikea";
  filteredByCategory = furnitures.filter((item) => item?.id === "Ikea");
  filterFurnitures();
});

marcos.addEventListener("click", () => {
  currentCategory = "Marcos";
  filteredByCategory = furnitures.filter((item) => item?.id === "Marcos");
  filterFurnitures();
});

caressa.addEventListener("click", () => {
  currentCategory = "Caressa";
  filteredByCategory = furnitures.filter((item) => item?.id === "Caressa");
  filterFurnitures();
});

liddy.addEventListener("click", () => {
  currentCategory = "Liddy";
  filteredByCategory = furnitures.filter((item) => item?.id === "Liddy");
  filterFurnitures();
});

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("input", filterFurnitures);
