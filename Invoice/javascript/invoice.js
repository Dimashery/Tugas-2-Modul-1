// Ambil data pesanan dari localStorage
const orderData = JSON.parse(localStorage.getItem("order"));

// Cek apakah ada data pesanan
if (orderData) {
  // Ambil elemen untuk menampilkan item dan harga
  const itemsSection = document.querySelector(".items-section");
  const priceSection = document.querySelector(".price-section");
  
  // Menampilkan nama produk dan kuantitas di bagian item
  itemsSection.innerHTML = `
    <h2>Items:</h2>
    <p>${orderData.name} x${orderData.quantity}</p>
    <hr>
  `;
  
  // Menampilkan harga produk, PPN, dan total di bagian harga
  priceSection.innerHTML = `
    <h2>Price</h2>
    <p>${orderData.name} x${orderData.quantity} .......................... Rp. ${orderData.price.toLocaleString()}</p>
    <hr>
    <p>PPN (10%) : Rp. ${(orderData.total * 0.1).toLocaleString()}</p>
    <p>Discount : Rp. 0.00</p>
    <h3>Total Price : <span class="total-price">Rp. ${(orderData.total * 1.1).toLocaleString()}</span></h3>
  `;
} else {
  // Jika tidak ada data pesanan di localStorage, tampilkan pesan error
  alert("No order data found!");
}

// Pilih tombol "Buy Again"
const buyAgainButton = document.getElementById('buyAgainBtn');

// Tambahkan event listener untuk tombol
buyAgainButton.addEventListener('click', () => {
  // Redirect ke halaman produk untuk membeli lagi
  window.location.href = '../../Product/html/product.html'; // Ganti dengan URL halaman produk jika perlu
});
