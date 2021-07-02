// Функции

// Объявление функции (Function Declaration)

// function имя(параметры (они же аргументы)) {
// тело функции
// }

// Имя функции и её предназначение

/*

Как правило, в имени используются определенные префиксы, обозначающие
действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." возвращают значение,
"calc..." что-то вычисляют,
"create..." что-то создают,
"check..." что-то проверяют и возвращают лог. значение, и т.д.

Примеры:

showMessage - показать соо.
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.

*/

// Функция вывода соо.

console.log( )

function showMessage() {
  console.log('Сообщение')
}

// Запуск функции

showMessage()

// Запускать функцию можно как до объявления самой функции - так и после.

// Вложенность и видимость функций

console.log( );

function getSumm() {
  let numOne, numTwo;

  function getNumOne() {
    numOne = 1;
  }

  function getNumTwo() {
    numTwo = 2;
  }

  getNumOne();
  getNumTwo();

  let numSumm = numOne + numTwo;
  console.log(numSumm);
}

getSumm();

// Если мы попытаемся вызвать дочернюю функцию за пределами род. - выдаст ошибку, например:

/*

function one_parent() {
  ...
  function one_child() {
    ...
  }
}

one_child(); => ReferenceError: one_Child is not defined

*/

// Функции и строгий режим 

// "use strict"

if (2 > 1) {
console.log( );

function getSumm() {
  let numOne, numTwo;

  function getNumOne() {
    numOne = 1;
  }

  function getNumTwo() {
    numTwo = 2;
  }

  getNumOne();
  getNumTwo();

  let numSumm = numOne + numTwo;
  console.log(numSumm);
}}

// Вроде бы код работает.. но активировав строгий режим - ничего бы не заработало.
// Строг. режим не позволяет запускать функций если они внутри каких-то блоков, например if.

// Локальные и внешние переменные

function showAnotherMessage() {
  // Локальная переменная, внутри функции
  let message = 'Сообщение'
  console.log(message)
}

// console.log(message) => ReferenceError: message is not defined
// Почему ошибка? потому что это ЛОКАЛЬНАЯ переменная, доступная лишь внутри
// этой же функции.

let message;

function showAnotherMessage() {
  // Используется внешняя переменная
  message = "Сообщение"
}

showAnotherMessage();
console.log(message);