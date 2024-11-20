// Ambil elemen untuk menampilkan data transaksi
const itemDetails = document.querySelector(".item-details p:nth-child(2)");
const priceDetails = document.querySelector(".price-details p");
const totalSummary = document.querySelector(".summary h3");

// Ambil data dari localStorage
const orderData = JSON.parse(localStorage.getItem("order"));

if (orderData) {
  // Update detail transaksi
  itemDetails.textContent = `${orderData.name}`;
  priceDetails.textContent = `${orderData.name} x${orderData.quantity} ...................................................... Rp. ${orderData.price.toLocaleString("id-ID")},00`;

  const tax = Math.round(orderData.total * 0.1); // PPN 10%
  const totalPrice = orderData.total + tax;

  // Update summary
  totalSummary.textContent = `Total Price : Rp. ${totalPrice.toLocaleString("id-ID")},00`;

  // Tambahkan data tambahan jika diperlukan
  document.querySelector(".summary").insertAdjacentHTML(
    "beforeend",
    `<p>PPN (10%) : Rp. ${tax.toLocaleString("id-ID")},00</p>`
  );
} else {
  // Tampilkan pesan jika tidak ada data
  alert("No order data found! Please select a product first.");
  window.location.href = "../../Product/html/product.html";
}

// Event listener untuk tombol "Pay Now"
const payNowButton = document.querySelector(".pay-now-btn");
payNowButton.addEventListener("click", () => {
  // Redirect ke halaman invoice setelah pembayaran
  window.location.href = "../../Invoice/html/invoice.html"; // Ganti dengan URL halaman invoice
});
