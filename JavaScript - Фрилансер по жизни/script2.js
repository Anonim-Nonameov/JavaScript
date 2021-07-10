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

// Вызов функции

// Функцию создали, а она не работает!
// Всё потому, что мы не ВЫЗВАЛИ функцию.
// Вызвать функцию просто: надо написать имя функции и скобки -

showMessage()
// Вывод => 'Сообщение'

// Вложенность и видимость функций

// Функцию можно вкладывать внутрь другой функции!
// Причём вкладывать их друг в друга можно сколь угодно раз:

console.log( )

function getSumm() {
  let numOne, numTwo, numSumm;
  function getNumOne() {
    numOne = 1;
  }
  
  function getNumTwo() {
    numTwo = 2;
  }

  getNumOne();
  getNumTwo();

  numSumm = numOne + numTwo;
  console.log(numSumm);
}

getSumm();
// Вывод => 3

// Мы вызвали функцию getSumm, внутри неё есть ещё две функции - первая присваивает
// значение переменной numOne, вторая - присваивает значение переменной numTwo.
// А в конце, мы задали переменной numSumm (сумма чисел) значение numOne (1) + numTwo (2).

// Ну а что будет, если мы попытаемся вызвать функцию, которая внутри родительской?
// Ну, например, getNumOne()..
// А будет ошибка - Uncaught ReferenceError: getNumOne is not defined

// То же самое будет и в строгом режиме ("use strict").

// Локальные (внутренние) и внешние переменные

console.log( );

function showMessage() {
  // Локальная переменная
  let message = 'Сообщение'
  console.log(message)
}

// console.log(message) => Uncaught ReferenceError: message is not defined

// Что будет, если мы вызовем переменную, которая внутри функции? будет ошибка!
// Эта переменная доступна лишь ВНУТРИ нашей функции, поэтому то она и называется локальной.

let message;
function showMessage2() {
  message = 'Сообщение';
}

showMessage2();
console.log(message);
// Вывод => 'Сообщение'

// Мы используем внешнюю переменную, message.
// Функция берет эту переменную и задает ей значение, а мы потом её вызываем.

// Использование внешних и локальных переменных
console.log( )

message = 'Сообщение №1'

function showMessage3() {
  // Локальная переменная
  let message = 'Сообщение №2'
  console.log(message)
}

console.log(message) // => Сообщение №1
showMessage3() // => Сообщение №2

// Глобальная переменная

// Внешние переменные, объявленные выше всех-всех функций называют глобальными.
// Такую переменную можно использовать внутри любой функции, но в данный момент частое использование этих
// переменных не рекомендуется. 

console.log( )

let globalVar = "Я глобальная переменная!"

function getSumm2() {
  let numOne, numTwo, numSumm;
  
  function getNumOne() {
    numOne = 1;
    console.log(globalVar)
  }

  function getNumTwo() {
    numTwo = 2;
  }

  getNumOne();
  getNumTwo();
  numSumm = numOne + numTwo;
  console.log(globalVar)

}

console.log(globalVar); // Вывод => 'Я глобальная переменная!'
getSumm2(); // Вывод => 'Я глобальная переменная!' x2

// Вывод => 'Я глобальная переменная!'

// Параметры (аргументы)

console.log( )

function calcSumm(numOne, numTwo) {
  console.log(`Переменная numOne:${numOne}`)
  console.log(`Переменная numTwo:${numTwo}`)
  
  let numSumm = numOne + numTwo;

  console.log(`Сумма: ${numSumm}`)
}

calcSumm(1, 5); // 6

// В функцию можно передавать специальные параметры (они же аргументы).
// Работа некоторых функций НАПРЯМУЮ зависит от аргументов.
// Передать параметры функции мы можем как и в момент объявления,
// так и в момент вызова. Причем разделять их надо именно запятой.

// Например, наша функция calcSumm - мы передали ей два аргумента, numOne и numTwo.
// Что это значит? а значит, что мы можем передавать ей два параметра, два числа.
// Она берет переданное число, записывает её у себя, и выводит в консоль.
// Затем мы создали переменную numSumm (сумма чисел), она берет их и производит
// сложение.  После этого, происходит вывод в консоль:

/*

'Переменная такая то: столько то'
'Переменная такая то: столько то'
'Сумма: столько то'

*/

// Мы можем передать ей любое значение и она вычислит его, но если мы не передадим ей
// 1 аргумент (или вообще не передадим никаких аргументов) - в лок. переменные
// запишется undefined, а undefined + undefined = NaN.

// Если же мы хотим, чтобы когда мы не передавали никаких аргументов такого не было -
// в момент объявления функции передаем аргументам (лок. переменным) изначальное значение.
// Пример:

/* 

function calcSumm (numOne = (любое число, оно будет изначальным), numTwo = (любое число)) {
  ...
}

*/

// В момент, когда мы передаем параметры (они же аргументы) - эти параметры
// копируются в локальные переменные, которые мы задали в момент объявления функции.
// Вот пример: мы вызываем функцию, в её аргументы передаем 7 и 8. Эти две
// цифры копируются в локальные переменные numOne и numTwo, а дальше происходит то, что внутри функции.

// Функции колбэки

console.log( )

function calcSummTwo(numOne, numTwo, more, less) {
  let numSumm = numOne + numTwo;

  if (numSumm > 3) {
    more();
  } else {
    less()
  }
}

function showMoreMessage() {
  console.log('Больше чем 3')
}

function showLessMessage() {
  console.log('Меньше чем 3')
}

calcSummTwo(1, 5, showMoreMessage, showLessMessage)

// Собственно, в качестве передаваемых параметров (в принципе, точно
// так же как и значения по умолчанию) могут быть функции.

// В нашем примере, есть функция calcSumm, у неё четыре аргумента:
// цифры 1 и 2, больше и меньше.

// Внутри неё есть переменная numSumm, она складывает 1 и 2 число.
// Также есть конструкция if () и else (), и в if сказано - если
// numSumm больше 3 - то выводится то, что стоит на месте аргумента more.
// Иначе - выводи то, что на месте аргумента less.

// Также есть две другие функции - showMoreMessage, и showLessMessage.
// Что они делают? - первая выводит в консоль "Больше чем 3", вторая -
// делает то же самое что и первая, но выводит уже "МЕНЬШЕ чем 3".

// А в самом-самом конце мы вызвали функцию, дали ей параметры -
// 1, 5, showMoreMessage и showLessMessage.
// 1 и 5 складываются и передаются numSumm, проводится проверка -
// больше ли значение numSumm чем 3? да! 1 + 5 = 6.
// Значит - будет выводится то, что стоит на месте more -
// а это вызов функции showMoreMessage.

// Как то так!

// Возврат результата (директива return)

console.log( )

function calcSummThree(numOne, numTwo) {
  let numSumm = numOne + numTwo;

  // Возврат
  return numSumm

  // Дальше код не выполняется
}

let funcResult = calcSummThree(3, 6);
console.log(`Сумма: ${funcResult}`)

// Функции зачастую используют директиву return.
// Что она делает? она берет определенное значение, останавливает функцию
// и любезно выдаёт нам значение.

// В принципе, объяснять тут ничего не надо - всё и так уже ясно.
// Просто берет значение, останавливает функцию и отдает значение нам.

// Например - у нас есть два аргумента (numOne numTwo), и
// переменная numSumm. Мы вызываем функцию, в аргументах пишем
// любые числа (главное чтоб сложение было правильным) и они
// складываются, а сумма запишется в переменную numSumm.
// Вот это значение нам и выдает return!

// Примечание - нельзя писать так:

/*
return
numSumm
*/

// Почему? потому что это выдаст нам undefined.
// Так происходит в силу того, что return может быть использована
// на одной строке, когда нам надо срочно остановить выполнение функции
// на определенном этапе.

// Рекурсия

console.log( )

function getSumm3(numOne, numTwo) {
  let numSumm = calcSummFour(numOne, numTwo);

  console.log(numSumm);
}

function calcSummFour(numOne, numTwo) {
  return numOne + numTwo;
}

getSumm3(5, 5); // => 10

// Что такое рекурсия? - это когда функция вызывает саму себя.
// Функция выше - не рекурсия, она просто вызывает другую функцию.

console.log( )

function calcSummFive(numOne, numTwo) {
  let result = 1;
  // Умножаем result на numOne раз в цикле
  for (let i = 0; i < numTwo; i++) {
    result *= numOne;
  }
  return result;
}

console.log(calcSummFive(2,3)) // => 8

// Сложный код.. но это тоже не рекурсия!!
// НО! код ниже - рекурсия :) -

console.log( )

function calcSummSix(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calcSummSix(numOne, numTwo - 1)
  }
}

console.log(calcSummSix(2, 3)) // => 8

// Наша функция делает то же самое что и функция до, но вот она
// сделана при помощи рекурсии, вызова самой себя.
// Как можно заметить, функция в определенный момент внутри
// своего тела вызывает саму себя, а это - рекурсия!

// Есть такое понятие как ГЛУБИНА РЕКУРСИИ.
// Это означает, сколько раз сработала рекурсия и функция вызвала саму себя.
// Она (глубина рекурсии) ограничена самим двжиком JS, но мы можем 
// смело сказать что глубина рекурсии на 10000 уровней нам обеспечена.

// Вообще, именно рекурсивный метод помогает решать большинство задач
// при помощи пользования малого кол-ва кода, который легче поддерживать.

// Функицональное выражение (Function Expression)

/*

let showMessage = function () {
  console.log('Привет!')
};


showMessage();
Вывод => Привет!

*/

// Функция выше - самая обычная, просто создана она - чуть по другому.
// Она была создана при помощи переменной, а точнее её названия.
// А дальше мы приписали слово function - таким образом,
// мы даем интерпретатору понять что мы создали функцию.
// После слова function идут скобки, это для аргументов.. а дальше фиг.
// скобки, уже с самим телом функции.

// Кроме того, мы можем взять и скопировать функцию в переменную!

console.log( )

function getSummVar() {
  let summ = 1 + 2;
  console.log(summ)
};

let someVar = getSummVar;

someVar(); // => 3
console.log( )
getSummVar(); // => 3

// В момент передачи переменной функции мы не вызовем саму функцию,
// ибо нет скобок.

// Отличия между объявлением функции и функциональным выражением

// Созрел вопрос: в чём отличия между двумя видами написания функции?
// Вообще, отличий немного:

// 1) - Вид написания, синтаксис
// 2) - Нельзя вызвать функцию, созданную при помощи функ. выраж. - до
// её создания. Т.е - мы создали функцию при помощи Function Expession,
// но мы не можем вызвать функцию до её создания.
// А можем ли мы сделать это при помощи обычной функции? - да, можем!

console.log( )

getSumm4(); // => 3

// Объявление функции (Func. Declaration)
function getSumm4() {
  let summ = 1 + 2;
  console.log(summ);
};

// showMessage4();

// Функциональное выражение (Func. Expression)
let showMessage4 = function () {
  console.log('Привет!')
};

console.log( )

showMessage4(); // => 'Привет!'

// Проблемы

// Как мы уже знаем - нельзя вызвать функцию, когда включен
// строгий режим а она была создана внутри какого-то блока.
// Например - блок if (...) {...} 

/*

'use strict'
if (2 > 1) {
  function getSumm5() {
    console.log(1 + 1);
  }
};

getSumm5();
Вывод => ошибка, ReferenceError: getSumm5 is not defined

*/

// А что делать? нам нужен как строгий режим, так и функция
// внутри блока if.
// Здесь нам поможет Function Expression!
// Мы, создав переменную за пределами блока if, и дав ей значение
// функции уже внутри - можем вызывать её, так ещё и со строгим режимом!

// Функции стрелки - стрелочные функции (arrow functions)

/*

Функциональное выражение - Function Expression

let имя переменной = function (аргументы, параметры) {
  return выражение
};

Стрелочная функция (функция - стрелка) - arrow function

let имя переменной = (аргументы, параметры) => выражение

*/

// И так.. у нас есть две функции. Первая - создана при помощи
// Function Expression, вторая - стрелочная функция.
// В чем их отличия? -

// 1) - Упущено слово 'function'
// 2) - Убраны фигурные скобки

// Однострочная стрелочная функция -

/*

let getMessage = (text, name) => text + ', ' + name + '!';

console.log(getMessage("Привет", "Вася"))
Вывод => "Привет, Вася!"

*/

// Функция выше -  обыкновенная однострочная стрелочная функция, причем
// очень-очень короткая.
// Что мы вообще сделали? ну, мы создали переменную, да,
// дали ей значение функции с параметрами '(text, name)', дальше мы
// прописали саму "стрелку" - "=>" и, собственно, прописали выражение.

// Многострочная стрелочная функция

// Так.. что нам делать, если тело нашей функции должно быть
// более сложным, и одной строки нам вовсе не хватит?
// Тут нам помогут "многострочные стрелочные функции".
// Она максимально схожа с однострочной, просто после самой "стрелки"
// мы открываем фигурные скобки и уже ТАМ пишем выражение.

console.log( )

let getMessage = (text, name) => {
  let message = text + ', ' + name + '!';
  return message;
};
console.log(getMessage("Привет", "Вася")); // => "Привет, Вася!"

// И примечание - в нашем случае, надо обязательно вызвать
// значение переменной message директивой return.

// Планирование: setTimeout и setInterval

/*

Что такое планирование? - планирование позволяет нам вызывать
функцию через какое-то время с какой-то задержкой.
Чтобы реализовать планирование существуют два метода:

1) - setTimeout. Позволяет вызвать функцию ОДИН РАЗ
через определенный интервал времени

2) - setInterval. Позволяет вызывать функцию регулярно, повторяя вызов
через определенный интервал времени


setTimeout(функция или код, задержка, параметр, ...параметр)
setInterval(функция или код, задержка, параметр, ...параметр)

В принципе, в написании они друг от друга ничем не отличаются.
Разве что в названиях :)

*/

// Допустим, у нас есть простая функция которая выводит соо. в консоль:

console.log( )

function showMessage5(text, name) {
  console.log(`${text}, ${name}!`)
}

// А что, если мы хотим эту функцию вызвать через какое-то время?
// Используем setTimeout -

setTimeout(showMessage5, 3000, 'Привет', 'Вася');