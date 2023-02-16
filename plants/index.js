"use strict";

console.log(
  `Вёрстка соответствует макету. Ширина экрана 768px +24\nВёрстка соответствует макету. Ширина экрана 380px +24\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\nитого: 75`
);

let burger = document.querySelector(".header__burger-btn");
let menu = document.querySelector(".header__menu");
let wrapper = document.querySelector(".wrapper");

burger.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (
    menu.classList.contains("active") &&
    !event.target.matches(
      ".header__menu, .header__burger-btn, .header__menu *, .header__burger-btn *"
    )
  ) {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  }
});

let plantings = document.querySelectorAll(".planting");
let gardens = document.querySelectorAll(".gardens");
let lawns = document.querySelectorAll(".lawn");
let gardensBtn = document.querySelector(".gardensBtn");
let lawnBtn = document.querySelector(".lawnBtn");
let plantingBtn = document.querySelector(".plantingBtn");
let cardsDOM = document.querySelectorAll(".blocks");
