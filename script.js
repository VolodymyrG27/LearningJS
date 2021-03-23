//Як працює this
'use strict';
/*
function showThis() {
    console.log(this);
}

showThis();
*/
//1. (звичайна функція) Якщо не встановлений строгий режим то то функція буде видавати object window,якщо строгий режим встановлено то функція буде виводити undefined
/*
function showThisTwo (a, b) {
    console.log(this); // undefined
    function sum() {
        console.log(this); // undefined
        return a + b; //eror тому що функція спочатку шукає в середині себе дані, якщо їх немає то шукає на вищому рівні
    }
    console.log(sum());
}

showThisTwo(4, 5);
*/

//Для object

const obj = {
    a: 27,
    b: 7,
    func: function () {
        console.log(this);
        function shout() {
            console.log(this); // undefined тому що це простий виклик функції, він не відноситьться до object
        }
        shout();
    }
}

obj.func(); //Виведе цілий object якщо знаходить в obects

//3. Спосіб 

//Функція конструктор
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 27);

//this в конструкторах це новий екземпляр обєкта

//4. Ручне присвоєння this для функції

function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith'); //Функція використовує дані об*єкта за допомогою ци методів
sayName.apply(user, ['Smith']); // Різниця між ними в синтаксисі коли є аргумент ***Тут не створювалась нова функція

// спосіб Ручна прив*язка this: call, aplay, bind

function coutn(num) {
    return this * num;
}

const double = coutn.bind(2); //
console.log(double(4)); //ЦЕ НОВА ФУНКЦІЯ

//Використання на практиці
console.log('Practics');
const btn = document.querySelector('button');
const secondBtn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log(this); //Виведе object window
});

secondBtn.addEventListener('click', function () {
    console.log(this); //Виведе кнопку
});

const obj1 = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); //THis буде ссилатися на сам об*єкт, бо він родич 
        };

        say();
    }
};

obj1.sayNumber();