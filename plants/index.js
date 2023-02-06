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


const buttonsDOM = document.querySelectorAll(".servBtn");
const cardsDOM = document.querySelectorAll(".blocks");

const btnsState = [false, false, false];
const cardsBlured = [false, false, false, false, false, false];

function btnClick(btnIndex) {
  btnsState[btnIndex] = true;
  console.log(btnsState[btnIndex]);
  // for (let i = 0; i < buttonsDOM.length; i++) {
  //   buttonsDOM[i].addEventListener("click", function () {
  //     btnsState[i] = true;
  //     console.log(btnsState[i]);
  //   });
  // }

  if (btnsState[0] == true) {
    cardsBlured[1] = true;
    cardsBlured[2] = true;
    cardsBlured[3] = true;
    cardsBlured[5] = true;
  }
  if (btnsState[1] == true) {
    cardsBlured[0] = true;
    cardsBlured[1] = true;
    cardsBlured[3] = true;
    cardsBlured[4] = true;
    cardsBlured[5] = true;
  }
  if (btnsState[2] == true) {
    cardsBlured[0] = true;
    cardsBlured[2] = true;
    cardsBlured[4] = true;
  }

  for (let i = 0; i < btnsState.length; i++) {
    if (btnsState[i] == true) {
      buttonsDOM[i].classList.add("button:active");
    }
  }

  for (let i = 0; i < cardsBlured.length; i++) {
    if (cardsBlured[i] == true) {
      cardsDOM[i].classList.add("blur");
    }
  }
}

let counter = 0;

buttonsDOM.forEach((button, index) =>
  button.addEventListener("click", () => btnClick(index))
);

alert(
  "Привет! Пожалуйста, не проверяйте пока мою работу, можно мне еще несколько дней? Ничего не успеваю, но закончить хочется... Буду очень благодарна."
);

