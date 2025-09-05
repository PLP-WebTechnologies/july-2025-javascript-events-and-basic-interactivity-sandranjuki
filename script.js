// ============================
// PART 1: Event Handling
// ============================
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").innerText = "Button was clicked 🎉";
});

// ============================
// PART 2: Interactive Elements
// ============================

// Light/Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counterValue").innerText = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  document.getElementById("counterValue").innerText = counter;
});

// EXTRA FEATURE 1: FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// EXTRA FEATURE 2: Dropdown Menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown if user clicks outside
window.addEventListener("click", (event) => {
  if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});

// ============================
// PART 3: Form Validation
// ============================
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Regex for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name.length < 3) {
    message.innerText = "❌ Name must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

  if (!email.match(emailPattern)) {
    message.innerText = "❌ Enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.innerText = "❌ Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  message.innerText = "✅ Registration successful!";
  message.style.color = "green";
});

