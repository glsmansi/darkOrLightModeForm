const toggle = document.querySelector(".toggle");
const submitForm = document.querySelector(".btn");

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
