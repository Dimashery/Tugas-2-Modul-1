let quantity = 1;
const maxItems = 20;

document.getElementById("increase-quantity").addEventListener("click", () => {
  if (quantity < maxItems) {
    quantity++;
    updateQuantity();
  }
});

document.getElementById("decrease-quantity").addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
});

function updateQuantity() {
  document.getElementById("quantity").textContent = quantity;
  document.getElementById("available-items").textContent = maxItems - quantity;
}

// Ambil elemen tombol Order Now
const orderNowButton = document.querySelector(".order-now-btn");

// Data produk
const productName = "Evangelion T-Shirt";
const productPrice = 159000; // Harga dalam format angka

// Event saat tombol Order Now diklik
orderNowButton.addEventListener("click", () => {
  const orderData = {
    name: productName,
    price: productPrice,
    quantity: quantity,
    total: productPrice * quantity,
  };

  // Simpan data ke localStorage
  localStorage.setItem("order", JSON.stringify(orderData));

  // Redirect ke halaman Buy
  window.location.href = "../../Buy/html/buy.html";
});
