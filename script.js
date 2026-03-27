const products = [
  { id: 1, name: "Şeffaf Koruyucu Kılıf", price: 249 },
  { id: 2, name: "Silikon Pastel Kılıf", price: 279 },
  { id: 3, name: "Darbeye Dayanıklı Kılıf", price: 329 },
  { id: 4, name: "Kişiye Özel Baskılı Kılıf", price: 399 }
];

const cart = [];

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

function renderProducts() {
  productGrid.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p class="price">${product.price} TL</p>
      <button class="btn">Sepete Ekle</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      cart.push(product);
      renderCart();
    });

    productGrid.appendChild(card);
  });
}

function renderCart() {
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} TL`;
    cartItems.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `${total} TL`;
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Sepetiniz boş. Lütfen ürün ekleyin.");
    return;
  }

  alert("Siparişiniz alındı! Teşekkür ederiz.");
  cart.length = 0;
  renderCart();
});

renderProducts();
renderCart();
