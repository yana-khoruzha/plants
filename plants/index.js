'use strict';

console.log(
    `Вёрстка валидная +10\nВёрстка семантическая +20\nверстка соответствует макету +48\nдля построения сетки используются флексы или гриды +2\n-при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\nфоновый цвет тянется на всю ширину страницы +2\n иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\nизображения добавлены в формате .jpg или .png +2/nесть favicon +2\nплавная прокрутка по якорям +5\nиконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5\nинтерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\nобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\nитого: 100`
);

let burger = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__menu');
let wrapper = document.querySelector('.wrapper');

burger.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('active');
    burger.classList.toggle('active');
})

document.addEventListener('click', function(event) {
    if(menu.classList.contains('active') && !(event.target.matches('.header__menu, .header__burger-btn, .header__menu *, .header__burger-btn *'))) {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    }
})

