// Блок инструкций - это "коробочка" с инструкциями которые мы можем выводить
// неск. раз подряд, и создаётся он ключевым словом function. Тут мы выведем
// окошко с некой надписью и выведем сообщение в консоль -

// function myName() {
// alert('Salam aleykum!')
// console.log('Выведено объявление \"Salam aleykum!\"'); 
// }

// myName();

// myName - название функции, прописав которое мы её и вызываем.
// myName(); - пример вызова функции где нам придёт объявление
// и в консоль будет выведен лог.

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
} while(a > 6);

console.log( )

let b = 5;

while (b > 0) {
    console.log(b)
    b--;
}

console.log( )

let c = 10;

if (c === c) {
    while (c > 4) {
        console.log(c)
        c--;
    }
} else {
    console.log('Не выведу!')
}

function numberToText(a) {
    if (a == 1) {
        return 'Один'
    } else if (a == 2) {
        return 'Два'
    } else if (a == 3) {
        return 'Три'
    } else if (a == 4) {
        return 'Четыре'
    } else if (a == 5) {
        return 'Пять'
    } else {
        return 'Простите, я могу переводить цифры в текст только от 1 до 5!'
    }
}

// console.log( );
// console.log(numberToText(2)); => "Два"
// Программа превращает числа в строки (пока что только в диапазоне от 1 до 5)

let user = {
    name: 'Jordan',
    age: 30,
    address: {
        city: 'Baku',
        country: 'Azerbaijan'
    },
}

for (let key in user) {
    console.log( )
    console.log(key, 'AAA')

    console.log( )
    console.log(user[key], 'BBB')
}

let user2 = {
    name: 'Anna',
    age: 23,
    address: {
        city: 'Moscow',
        country: 'Russia',
    },
}

let clone = Object.assign({}, user2)

clone.name = 'Yuliya'
clone.age = '18'

console.log( )
console.log(clone)