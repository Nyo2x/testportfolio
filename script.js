// script.js

// Animate contact form submission
const form = document.querySelector(".contact-container");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  form.reset();
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// AOS (already initialized inline in HTML, but if needed dynamically)
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
}
