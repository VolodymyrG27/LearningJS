let btns = document.querySelectorAll('button');

//console.log(btns.[0].classList.length);
//console.log(btns[0].classList.item(0)); //item дозволяє отримати клас по певному індексі
console.log(btns[1].classList.add('red')); //add() додає клас
//console.log(btns[1].classList.remove('blue')); //remove() видаляє клас
//console.log(btns[1].classList.toggle('blue')); //якщо клас є на елементі то він буде видалений, якщо не буде на елементі то буде доданий

//Contains() він дозволяє нам перевіряти наявність класу на певному елементі і вертає на булінове значення(якщо клас є вертає true, нема то false)
/*if (btns[1].classList.contains('red')) {
    console.log('red');
}*/

btns[0].addEventListener('click', () => {
    /*if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }*/
    btns[1].classList.toggle('red');
});

/*SECOND PART Делигирование событий - (наприклад коли на сайті багато кнопок, і коли нажати на одну і з них
щоб визивалось одна і та сама дія)*/

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.tagName == "BUTTON") {
        console.log('Ok')
    }
});

/* Розробники google люблять цей метод але тільки працює де є class = red;
wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.matches("button.red")) {
        console.log('Ok')
    }
});
*/

//Якщо зробити через forEach то всі кнопки будуть працювати окрім тих які створені динамічно
/*
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Its ok');
    })
});*/

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

//SetTimeOut


/*const time = setTimeout(function () {
    console.log('its 2 sec');
}, 2000);*/

/*
function logger() {
    console.log('its 3');
}
*/
//const secondTime = setTimeout(logger, 3000);
/*
const btnSet = document.querySelector('.btn');
let timerId,
    i = 0;

btnSet.addEventListener('click', () => {
    //const timerId = setTimeout(logger, 3000);
    timerId = setInterval(logger, 1000); //SETINTERVAL Щоб скрипт повторявся через назначену кількість часу
});

function logger() {

    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('its 3');
    i++;
}
*/
//Рекурсивний виклик setTimeout для того щоб функція визивала себе в середені
//тому що якщо функція важка то setTimeout не буде чекати на функцію
//Приклад
/*
let id = setTimeout(function log() {
    console.log('Rekursion');
    id = setTimeout(log, 500);
}, 500);
*/

//Example kwadrat

const btnSet = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}

btnSet.addEventListener('click', myAnimation);