const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", (e) => {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  togglePassword.classList.toggle("hide");
});
