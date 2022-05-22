Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

const navlinkColor = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
Array.from(document.querySelectorAll(".navlink")).map((item, index) => {
  item.style.cssText = `background-color : ${navlinkColor[index]}`;
});

// Query selectors

const openNav = document.querySelector(".open-navbar-icon");
const closeNav = document.querySelector(".close-navbar-icon");
const container = document.querySelector(".container");
const formInput = document.querySelector("input");

//event listeners

openNav.addEventListener("click", () => {
  container.classList.add("change");
});

closeNav.addEventListener("click", () => {
  container.classList.remove("change");
});

formInput.addEventListener("focus", () => {
  console.log('focused');
});
