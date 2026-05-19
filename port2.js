function submitContactForm() {

  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const mobile = document.getElementById("cf-mobile").value.trim();
  const message = document.getElementById("cf-message").value.trim();

  // Validation
  if(name === "" || email === "" || mobile === "" || message === ""){
    alert("Please fill all fields.");
    return;
  }

  // WhatsApp Message
  const whatsappMessage =
`Hello Yukti,

Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}`;

  // Your WhatsApp Number
  const phoneNumber = "918459991897";

  // Open WhatsApp
  const whatsappURL =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

}