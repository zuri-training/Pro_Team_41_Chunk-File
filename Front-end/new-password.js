const togglePasswordIcons = document.querySelectorAll(".toggle-password");

togglePasswordIcons.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const password = toggle.parentElement.querySelector("input");

    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    toggle.classList.toggle("hide");
  });
});
