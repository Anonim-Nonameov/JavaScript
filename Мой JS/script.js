// Блок инструкций - это "коробочка" с инструкциями которые мы можем выводить
// неск. раз подряд, и создаётся он ключевым словом function. Тут мы выведем
// окошко с некой надписью и выведем сообщение в консоль -

// function myName() {
// alert('Salam aleykum!')
// console.log('Выведено объявление \"Salam aleykum!\"'); 
// }

// myName();

// myName - название функции, прописав которое мы её и вызываем.
//  myName(); - пример вызова функции где нам придёт объявление
//  и в консоль будет выведен лог.

// Старый вид блока инструкций

// function sayHello(a, b='Ismail') { alert('Hello ' + a +  ' and ' + b); }

// sayHello('Aslan');

// Новый вид блока инструкций, "стрелочная функция"

// let sayHelloToGasan = (a) => { alert('Hello' + a); }

// sayHelloToGasan(' Gasan');

let a = 5;

do {
    console.log(a);
    a--;
} while(a > 10);

console.log( )

let b = 20;

while (b > 0) {
    console.log(b)
    b--;
}

console.log( )

let c = 30;

if (c === c) {
    while (c > 0) {
        console.log(c)
        c--;
    }
} else {
    console.log('Не выведу!')
}