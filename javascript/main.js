const headerMenu = document.getElementById("header-nav");
const headerToggle = document.getElementById("header-toggle");
const headerClose = document.getElementById("header-close");

if (headerToggle) {
  headerToggle.addEventListener("click", () => {
    headerMenu.classList.add("show-menu");
  });
}

if (headerClose) {
  headerClose.addEventListener("click", () => {
    headerMenu.classList.remove("show-menu");
  });
}

///////////////////////////////

const switchButton = document.querySelector(".ri-moon-line");
let theme = localStorage.getItem("theme");

switchButton.addEventListener("click", () => {
  if (theme === "dark") {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");

    document.querySelector(".theme").classList.remove("ri-moon-line");
    document.querySelector(".theme").classList.add("ri-sun-line");

    document
      .getElementById("logo1")
      .setAttribute("src", "images/black_logo.png");
    document
      .getElementById("logo2")
      .setAttribute("src", "images/black_logo.png");

    theme = "light";
  } else {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");

    document.querySelector(".theme").classList.remove("ri-sun-line");
    document.querySelector(".theme").classList.add("ri-moon-line");

    document
      .getElementById("logo1")
      .setAttribute("src", "images/white_logo.png");
    document
      .getElementById("logo2")
      .setAttribute("src", "images/white_logo.png");

    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.querySelector("body").classList.add("dark");
}

if (theme === "light") {
  document.querySelector("body").classList.add("light");
}

////////////////////////////////
