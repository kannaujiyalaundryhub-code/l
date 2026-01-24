
function whatsappBooking() {

  // get values from form
  const name = document.querySelector('input[name="name"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const address = document.querySelector('textarea[name="address"]').value;
  const service = document.querySelector('select[name="service"]').value;
  const date = document.querySelector('input[name="pickupDate"]').value;
  const time = document.querySelector('input[name="pickupTime"]').value;

   // basic validation (custom toast)
  if (!name || !phone || !address || !service || !date || !time) {
    showToast("⚠️ Please fill all details In Form before WhatsApp booking", "error");
    return;
  }

  // WhatsApp number (OWNER)
  const ownerNumber = "918423245432"; // without +, spaces

  // message template
  const message = `
📦 *Laundry Pickup Booking*

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}
🧺 Service: ${service}
📅 Pickup Date: ${date}
⏰ Pickup Time: ${time}

Please confirm my pickup 🙏
`;

  // encode & redirect
  const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

function generateBookingId() {
  const now = new Date();
  const year = now.getFullYear();

  // Date (01–31)
  const day = String(now.getDate()).padStart(2, "0");

  // Last 3 digits from timestamp
  const uniquePart = Date.now().toString().slice(-3);

  return `KLH-${year}-${day}${uniquePart}`;
}

// Page load par auto-generate
window.addEventListener("load", () => {
  document.getElementById("bookingId").value = generateBookingId();
});
