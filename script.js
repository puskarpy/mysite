let HTMLElement = document.documentElement;
let dark = document.querySelector(".dark-mode");
let light = document.querySelector(".light-mode");

let isDark = false;

light.addEventListener("click", () => {
  if (!isDark) {
    HTMLElement.classList.add("dark");
    dark.style.display = "block";
    light.style.display = "none";
    isDark = true;
  }
});
dark.addEventListener("click", () => {
  if (isDark) {
    HTMLElement.classList.remove("dark");
    dark.style.display = "none";
    light.style.display = "block";
    isDark = false;
  }
});
