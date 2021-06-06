const element = document.getElementById("dropdown-container");
const dropdownContent = document.getElementById("dropdown-content");

element.addEventListener("click", () => {
  dropdownContent.style.display = "block";
});
document.addEventListener("dblclick", () => {
  dropdownContent.style.display = "none";
});


