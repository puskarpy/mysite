let toggleDark = document.querySelector(".light-mode");
let html = document.querySelector("html");
let isClicked = false;
toggleDark.innerHTML = `<i class="fa fa-sun"></i>`;
toggleDark.addEventListener("click", () => {
  if (!isClicked) {
    toggleDark.innerHTML = `<i class="fa fa-moon"></i>`;
    html.classList.toggle("dark");
    isClicked = true;
  } else {
    toggleDark.innerHTML = `<i class="fa fa-sun"></i>`;
    html.classList.toggle("dark");
    isClicked = false;
  }
});

let work = document.querySelector(".work");

work.addEventListener("click", () => {
  if (!isClicked) {
    work.innerHTML = "Have any work for me? Let's Connect.";
    work.style.borderRadius = "0";
    isClicked = true;
  } else {
    work.innerHTML = `<i class="fa fa-user"></i>`;
    work.style.borderRadius = "100%";
    isClicked = false;
  }
});
