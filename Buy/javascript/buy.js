// Ambil elemen untuk menampilkan data transaksi
const itemName = document.querySelector("#item-name");
const priceDetail = document.querySelector("#price-detail");
const totalPriceElement = document.querySelector("#total-price");
const payNowButton = document.getElementById("payNowBtn");

// Ambil data dari localStorage
const orderData = JSON.parse(localStorage.getItem("order"));

if (orderData) {
  itemName.textContent = orderData.name;
  priceDetail.textContent = `${orderData.price} x ${orderData.quantity}`;
  totalPriceElement.textContent = `Total Price: ${orderData.total}`;
} else {
  alert("No order data found.");
}

// Fungsi untuk melakukan pembayaran
payNowButton.addEventListener("click", () => {
  alert("Payment successful!");
  localStorage.removeItem("order"); // Menghapus data setelah pembayaran
  window.location.href = "../../Invoice/html/invoice.html"; // Arahkan ke halaman invoice
});
