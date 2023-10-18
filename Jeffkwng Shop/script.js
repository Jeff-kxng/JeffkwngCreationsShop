document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.getElementById("cart-button");
  const cartDialog = document.querySelector(".cart-dialog");

  cartButton.addEventListener("click", () => {
    cartDialog.classList.toggle("active");
  });

  // Example: Adding a clothing item to the cart
  const shopContent = document.querySelector(".shop-content");

  // Sample clothing items
  const clothingItems = [
    {
      name: "Casual Shirt",
      price: "$39.99",
      image: "shirt1.jpg",
    },
    {
      name: "Summer Dress",
      price: "$49.99",
      image: "dress1.jpg",
    },
    {
      name: "Jeans",
      price: "$29.99",
      image: "jeans1.jpg",
    },
    // Add more clothing items here
  ];

  // Create and display clothing items
  clothingItems.forEach((item) => {
    const clothingItem = document.createElement("div");
    clothingItem.classList.add("clothing-item");
    clothingItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    `;
    shopContent.appendChild(clothingItem);
  });
});
