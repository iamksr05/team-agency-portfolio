const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document
        .getElementById("name")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const text = document
        .getElementById("message")
        .value
        .trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !text) {
        message.textContent = "Please fill all fields";
        return;
    }

    if (!emailRegex.test(email)) {
        message.textContent = "Invalid email format";
        return;
    }

    message.textContent = "Message submitted";
    form.reset();
});