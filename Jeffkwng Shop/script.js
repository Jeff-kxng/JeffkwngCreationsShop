// Define your clothing items array
const clothingItems = [
  {
    title: "Casual Shirt",
    price: 39.99,
    imgSrc: "item1.jpg"
  },
  // Add more clothing items here
  {
    title: "Summer Dress",
    price: 49.99,
    imgSrc: "item2.jpg"
  },
  // Add more clothing items here
  {
    title: "Jeans",
    price: 29.99,
    imgSrc: "item3.jpg"
  },
  // Add more clothing items here
  {
    title: "Leather Jacket",
    price: 79.99,
    imgSrc: "item4.jpg"
  },
  // Add more clothing items here
  {
    title: "Maxi Skirt",
    price: 34.99,
    imgSrc: "item5.jpg"
  },
  // Add more clothing items here
  {
    title: "Sweatshirt",
    price: 45.99,
    imgSrc: "item6.jpg"
  },
  // Add more clothing items here
  {
    title: "Suit Trousers",
    price: 59.99,
    imgSrc: "item7.jpg"
  },
  // Add more clothing items here
  {
    title: "Floral Dress",
    price: 54.99,
    imgSrc: "item8.jpg"
  },
  // Add more clothing items here
  {
    title: "Tie-Dye T-shirt",
    price: 19.99,
    imgSrc: "item9.jpg"
  },
  // Add more clothing items here
  {
    title: "Skinny Jeans",
    price: 35.99,
    imgSrc: "item10.jpg"
  },
  {
    title: "Skinny Jeans",
    price: 15.99,
    imgSrc: "item11.jpg"
  },
  {
    title: "Skinny Jeans",
    price: 5.99,
    imgSrc: "item12.jpg"
  },
  {
    title: "Skinny Jeans",
    price: 3.99,
    imgSrc: "item13.jpg"
  },
  {
    title: "Skinny Jeans",
    price: 4.99,
    imgSrc: "item14.jpg"
  },
  {
    title: "Skinny Jeans",
    price: 9.99,
    imgSrc: "item15.jpg"
  },
];

const shopContent = document.getElementById("shop-content");
const cartContent = document.getElementById("cart-content");
const cartButton = document.getElementById("cart-button");
const cartDialog = document.querySelector(".cart-dialog");
const cartClose = document.getElementById("cart-close");

cartButton.addEventListener("click", () => {
  cartDialog.classList.add("active");
});

cartClose.addEventListener("click", () => {
  cartDialog.classList.remove("active");
});

// Load clothing items
function loadClothingItems() {
  clothingItems.forEach((item) => {
    const clothingItem = createClothingItem(item);
    shopContent.innerHTML += clothingItem;
  });
}

// Create a clothing item HTML element
function createClothingItem(item) {
  return `
<div class="clothing-item">
  <img src="${item.imgSrc}" alt="${item.title}">
  <h3>${item.title}</h3>
  <p>$${item.price.toFixed(2)}</p>
  <button class="add-cart">Add to Cart</button>
</div>
`;
}

loadClothingItems();

// Add to Cart functionality using event delegation
shopContent.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-cart")) {
    const clothingItem = event.target.closest(".clothing-item");
    if (clothingItem) {
      const title = clothingItem.querySelector("h3").innerText;
      const price = parseFloat(clothingItem.querySelector("p").innerText.replace("$", ""));
      const imgSrc = clothingItem.querySelector("img").src;
      addItemToCart(title, price, imgSrc);
    }
  }
});


const cartItems = [];

function addItemToCart(title, price, imgSrc) {
  cartItems.push({ title, price });
  const cartItem = createCartItem(title, price, imgSrc);
  cartContent.innerHTML += cartItem;
  updateTotal();
}

function createCartItem(title, price, imgSrc) {
  return `
<div class="cart-item">
  <img src="${imgSrc}" alt="${title}">
  <div class="cart-item-info">
    <h3>${title}</h3>
    <p>$${price.toFixed(2)}</p>
  </div>
  <button class="remove-from-cart">Remove</button>
</div>
`;
}

cartContent.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart")) {
    const cartItem = event.target.parentElement;
    const title = cartItem.querySelector("h3").innerText;
    removeItemFromCart(title);
    cartItem.remove();
    updateTotal();
  }
});

function removeItemFromCart(title) {
  const index = cartItems.findIndex((item) => item.title === title);
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
}

function updateTotal() {
  const totalElement = document.querySelector(".total-price");
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

const cartCount = document.createElement("div");
cartCount.className = "cart-count";
cartCount.style.display = "none";
document.body.appendChild(cartCount);/* Reset some default styles */
