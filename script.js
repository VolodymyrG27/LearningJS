

//Параметри документа, вікна і робота з ним, лекція 42

const box = document.querySelector('.box-text'),
      btnBox = document.querySelector('.box-button');

/*
const width = box.clientWidth; // Отримуємо отримуємо ширину без бордерів
const height = box.clientHeight; // Отримуємо отримуємо висоту без бордерів
const width = box.offsetWidth; //з полосою прокрутки
const height = box.offsetHeight;
*/

const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width);
console.log(height);

//При нажиманній кнопку відкривається цілий елемент
btnBox.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

//Коли треба знати чи показаний елемент на сторінці(виконтуються css стилі)
const style = window.getComputedStyle(box);