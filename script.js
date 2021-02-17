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