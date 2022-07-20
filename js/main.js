// Start Switcher Script
let switcher = document.querySelectorAll(".menu li button");
let rows = document.querySelectorAll(".menu .row");

for (let i = 0; i < switcher.length; i++) {
  switcher[i].addEventListener("click", () => {
    for (let j = 0; j < rows.length; j++) {
      switcher[j].classList.remove("active");
      rows[j].classList.add("hidden");
    }
    rows[i].classList.remove("hidden");
    switcher[i].classList.add("active");
  });
}
// End Switcher Script