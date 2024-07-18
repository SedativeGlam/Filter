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

all.addEventListener("click", () => {
  displayFurnitures(furnitures);
});

ikea.addEventListener("click", () => {
  const ikeaFilter = furnitures.filter((ikea) => ikea.id === "Ikea");
  displayFurnitures(ikeaFilter);
});

marcos.addEventListener("click", () => {
  const marcosFilter = furnitures.filter((marcos) => marcos.id === "Marcos");
  displayFurnitures(marcosFilter);
});

caressa.addEventListener("click", () => {
  const caressaFilter = furnitures.filter(
    (caressa) => caressa.id === "Caressa"
  );
  displayFurnitures(caressaFilter);
});

liddy.addEventListener("click", () => {
  const liddyFilter = furnitures.filter((liddy) => liddy.id === "Liddy");
  displayFurnitures(liddyFilter);
});

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("input", () => {
  const filterMatch = searchBox.value.toLowerCase();
  const filteredFurnitures = furnitures.filter((item) =>
    item.name.toLowerCase().includes(filterMatch)
  );

  if (filteredFurnitures.length === 0) {
    categories.textContent = "Sorry, no products matched your search";
    categories.style.fontSize = "11px";
    categories.style.marginTop = "25px";
  } else {
    displayFurnitures(filteredFurnitures);
  }
});
