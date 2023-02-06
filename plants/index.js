"use strict";

// console.log(
//   `Вёрстка валидная +10\nВёрстка семантическая +20\nверстка соответствует макету (кроме футера) +41\nдля построения сетки используются флексы или гриды +2\n-при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\nфоновый цвет тянется на всю ширину страницы +2\n иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\nизображения добавлены в формате .jpg или .png +2/nесть favicon +2\nплавная прокрутка по якорям +5\nиконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5\nинтерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\nобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\nитого: 93`
// );

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
