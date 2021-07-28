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

// setTimeout(showMessage5, 3000, 'Привет', 'Вася');

// В аргументы функции setTimeout мы написали showMessage5, т.е -
// именно эта функция будет вызываться через какое-то время.
// Далее - мы написали 3000, это значит - функция будет вызвана через 3000
// миллисекунд, а последние два аргумента - аргументы самой функции showMessage5.

// А что если надо вызывать функцию несколько раз и через определенное время?
// Существует функция setInterval!
// Она отличается от setTimeout лишь тем, что у них разные названия
// и разные задачи :)

// setInterval(showMessage5, 500, 'Привет', 'Вася')

// P.S:
// У себя эту функцию я закомментировал, т.к она рушит мою консоль из-за
// того, что постоянно вызывается, а такого в гугл не будет.

// Тут всё то же самое что и с setTimeout, только вот мы записали вместо
// 3000 - 500. Функция будет вызываться каждые пол секунды.

// НО!
// Никогда нельзя узнать точно, через сколько вызывается функция.
// Даже если мы написали в аргументы 500, или 3000 - процессор пк/ноутбука
// может быть загружен, и наша функция будет вызвана не через 500
// миллисекунд - а через 700, ну или 800.

// Такую проблему с точностью вызовов можно решить рекурсивным подходом и setT. -

/*
function showMessageWST(text, name) {
  console.log(`${text}, ${name}!`)
  setTimeout(showMessageWST, 500, text, name);
}

setTimeout(showMessageWST, 500, 'Привет', 'Вася')
*/

// Функция setTimeout вызывает функцию showMessageWST, она
// вызывает setTimeout которая внутри неё, а затем опять вызывается
// функция снаружи - и так бесконечно.
// Такой способ  даёт более точную задержку, через сколько должна
// вызываться функция - через 500, 700 или 900 мс, и она будет точно (наверное)
// вызываться в это время.

// Планирование setTimeout

/*
function showNumber(num) {
  console.log(num);

  Если мы хотим, чтобы функция выполнялась до опр. момента -
  заключаем setTimeout в конструкцию if -

  if (num < 5) {
    setTimeout(showNumber, 1000, ++num);
  }
}

setTimeout(showNumber, 1000, 1)
*/

// Эта функция выводит числа в консоль (до опр. момента), и сделана она
// без всяких циклов и setInterval'ов.

// Ну, есть ещё такая штука как clearTimeout.
// Что она делает? она останавливает определенный setTimeout, но! -
// тот setTimeout который она должна остановить - должен быть значением
// какой-то переменной.

/*
function showNumber(num) {
  console.log(num);
  let timeId = setTimeout(showNumber, 1000, ++num);
  if (num === 6) {
    clearTimeout(timeId)
  }
}

setTimeout(showNumber, 1000, 1);
*/

// Точно такая же штука есть и для setInterval -

/*
let result = 0;

function showNumber(num) {
  result += num;
  console.log(result);
  if (result === 5) {
    clearInterval(timeId)
  }
}

let timeId = setInterval(showNumber, 1000, 1);
*/

// Применение функций

/*

Функция склейки строк
function createMessage(text, name) {
  return `${text}, ${name}!`;
}

Функция вывода в консоль
function showMessage(text) {
  console.log(text)
}

Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
  showMessage(createMessage(text, name));
}

initMessage('Привет', 'Ученик'); => Привет, Ученик!

*/

// Ну.. тут даже ничего объяснять нечего.

// Домашка

/*

1) Изучить теорию
2) Решить задачи:

*/

// Задача №1
// Кто попадет в консоль первым: Вася или Коля?

/* 

function showNameHW() {
  console.log('Вася!');
}

setTimeout(showNameHW, 0); = 2
console.log('Коля!'); = 1

*/

// Я скрыл этот код, т.к он выполняется, а код ниже криво отображается.
// Т.е выходит так -

/*

Коля!
Сообщение!
Вася!

*/

// Задача №2
// Верно ли вызвана функция?

showMessageHW()
function showMessageHW() {
  console.log('Сообщение!');
}

// Да.

// Задача №3
// Верно ли вызвана функция?

// Я не стал записывать задачу, ведь она на 99% схожа с заданием №2 -
// просто функция записана через переменную.
// Но я проверил, и оказалось что она неверно вызвана, ибо такое не получится
// с функцией-переменной.

// Задача №4
// Как решить проблему - showMessage is not defined?

/*

'use strict'
if (2 > 1) {
  function showMessage() {
    console.log('Hello!')
  }
}

showMessage();

*/

// Функции, записанные в блоках (таких как if) - не работают в строгом режиме.
// Надо убрать строгий режим и всё заработает!

// Объекты.

// Синтаксис, создание объекта, что это такое.

// Объект - один из самых важных "инструментов" в JS, которых ещё называют "ножками".
// Примитивные типы данных могут содержать в себе только 1 значение, а вот
// объекты - могут содержать в себе массу всякой информации, различные
// колекции данных и т.д.
// В JS объекты используются максимально часто, поэтому то их и называют -
// " ножки JavaScript'а. "

// Создаётся объект крайне легко -

// let userInfo = new Object(); = синтаксис "конструктор объекта"
// let userInfo = {}; = синтаксис "литерал объекта"

// Оба варианта рабочие, однако синтаксис литерала объекта - сводится только
// к указанию фигурных скобок, в то время как связка new Object() обходится
// без них. Но, чаще всего используется синтаксис литерала объекта, ибо так быстрее
// писать.. наверное кому-то лень менять раскладку клавиатуры на Английский :)

// Свойства объектов: ключи и их значения.

// Объекты изначально бывают пустыми, их надо заполнять.
// Но как? - в этом нам помогает связка "ключи + значения".
// Выглядит оно так:

/*

let someObject = {
  ключ: значение
  ключ: значение
}

*/

// Вот так вот всё просто!
// А теперь уже реальный пример:

let userInfo = {
  name: 'Вася', // Свойство объекта
  age: 30, // Тоже свойство объекта, но уже с "висячей запятой".
}

// Свойства объекта должны разделятся запятыми, это очень важно.
// Рекомендуется так же оставлять "висячие" запятые.
// Что это такое? - это когда мы даём последнему свойству запятую, "висячую".
// Зачем она нам нужна? - для того, чтобы мы могли мобильно поменять местами свойства.
// Короче - нужно! :)

// А если вкратце - объект это коробка с именованными папочками, книжками и т.д.

// Вызов объекта.

// Чтобы вызвать объект, необходимо просто записать в console.log() название
// переменной, в которой хранится объект.
// Вот так вот -

console.log( );

console.log(userInfo);

// Но таким образом выводится весь массив объекта, т.е все его свойства и значения.
// Если же мы хотим вызвать какое-то конкретное значение конкретного свойства
//  объекта - то тогда надо записать всё вот так вот -

console.log( );

console.log(userInfo.name); // => "Вася"

// Что мы сделали? а собственно.. ничего, просто приписали к userInfo точку и
// ключ. Т.е мы обратились к объекту - "эй, объект, отдай мне значение ключа name!"

// Имена свойств: имя из двух и больше слов

// Если название ключа состоит из двух или трёх слов (или вообще предложения) -
// этот ключ оборачивают в кавычки:

let userInfo2 = {
  "likes javascript": true
}

// Ничего сложного, всё предельно просто!
// Но как вызвать значение такого ключа? его название из двух слов!
// Для того чтобы вывести значение такого ключа в консоль, мы должны
// после userInfo открыть квадратные скобки и записать там название этого ключа:

console.log( )

console.log(userInfo.name)
console.log(userInfo2["likes javascript"]); // => true

// Кроме того, можно даже обычное.. так сказать, имя - вносить в квадратные
// скобки и кавычки, причём не важно какие кавычки использовать. -

console.log( )
console.log(userInfo['name']) // => "Вася"

// Имена свойств: вычисляемое либо передаваемое имя

// Вычисляем имя
let firstPart = "likes"
let userInfo3 = {
  name: "Вася",
  age: 30,
  [firstPart + " javascript"]: true,
}

console.log( )
console.log(userInfo3["likes javascript"]) // => true

// Что мы сделали?
// Мы вычислили имя ключа. Но как? -
// мы создали переменную firstPart со строковым значением "likes",
// а в объекте при помощи квадратных скобок и оператора сложения - выполнили
// конкатенацию, строка "likes" и строка " javascript" - сложились и
// создали одно целое предложение.

// Передаем имя
let userInfo4 = {
  name: "Вася",
  age: 30,
  [firstPart]: true,
}

console.log( )
console.log(userInfo4[firstPart]) // => true

// Вкратце - мы создали переменную, её же при помощи квадратных скобок
// внесли в объект как ключ и задали ей значение.

// Вообще у квадратных скобок очень много преимуществ:

let key = "name"

console.log( )
console.log(userInfo[key])

// И так, что и как мы сделали?
// Мы создали переменную key, её значение - "name" (кстати, практически
// во всех объектах я прописывал ключ name со значением "Вася", значит
// name - это ключ сразу нескольких объектов).

// Далее, мы при помощи console.log() и квадратных скобок вызвали значение
// ключа name. Ну а вообще, мы написали [key] а не .name.. но на самом деле,
// в переменной key так-то значение name, поэтому всё работает.
// И кстати о .name. Если бы мы написали .key - то у нас ничего бы
// не сработало, ибо такого ключа в объекте просто нет.

// Имена свойств: зарезервированные слова в именах ключей

// В прошлых уроках говорилось о том, что нельзя использовать в качестве
// имени переменной такие слова как if, else, while и т.д - они
// уже зарезервированны. Но внутри объекта такие.. "правила" - не действуют.
// Мы можем спокойно называть ключи именами let, for и т.д и, собственно,
// вызывать их значения:

let userInfo5 = {
  let: "Вася",
  age: 30,
}

console.log( )
console.log(userInfo5.let)
console.log(userInfo5.age)

// Имена свойств: имена = строки либо символы

let strangeKey = {
  0: "Вася", // 0 тоже самое что и "0".
}

console.log( )
console.log(strangeKey[0])
console.log(strangeKey["0"])

// И опять здесь происходит что-то очень странное..
// Мы назвали ключ 0, но на самом деле - 0 это строка, т.е JS считает его
// не как цифру 0, а как строку: "0".
// Здесь всё то же самое что и с другими ключами, но значение такого
// ключа не вывести через точку, вот так: .0
// Вместо этого мы вызываем значение такого ключа - через квадратные скобки. :D
// И здесь, я думаю, можно остановится и сказать: квадратные скобки - вещь!

// Тип данных Symbol

// Символы - это отдельный тип данных, представляющий собой уникальный
// идентификатор (как в HTML - id).
// Синтаксис написания, создания символа - очень простой:
// мы берём какую нибудь переменнную, задаем ей значение
// Symbol(значение, в виде числа или строки):

let id = Symbol("id")
let userInfo6 = {
  name: "Вася",
  age: 30,
  [id]: "Некое значение"
}

console.log( )
console.log(userInfo6) // => .....[Symbol(id)]: 'Некое значение'

// Основное применение символов:

// 1) - "Скрытые" свойства объектов
// Символьное свойство не появится в for..in

// 2) - Использование системных символов
// Symbol.iterator, Symbol.toPrimitive и т.д.

// Вложенность объектов

// О да, объекты могут вкладываться друг в друга бесконечно кол-во раз.
// Это ещё называют "глубиной объекта".
// Что мы должны сделать, чтобы вложить объект в другой?
// Мы создаём объект, даём ему всякие там ключи со значениями, и в одном
// из таких ключей, на месте где должно быть значение - открываем фигурные скобки и,
// собственно, внутри "вложенного" объекта - прописываем ключи и их значения.

let userInfoDeep = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

console.log( )

console.log(userInfoDeep);
console.log( )
console.log(userInfoDeep.address);
console.log( )
console.log(userInfoDeep.address.city);

// О, точек стало намного больше, почему?..
// Они нам нужны, ведь именно они указывают на тот ключ, который должен
// отдать нам своё значение.
// Например, второй console.log() вывел нам значение ключа,
// свойства address - объекта userInfoDeep.

// Ну.. как-то так))

// Свойство из переменной

// Мы можем делать с объектами удивительные (или не совсем) вещи.
// Мы можем сделать функцию, которая будеть возвращать нам аргументы
// в виде объекта!

const makeUserInfo = (name, age) => {
	return {
		name: name,
		age: age,
	}
}

let user = makeUserInfo("Вася", 30);
console.log( )
console.log(user)

// Свойство переменной - сокращение

// Допустим, мы хотим сократить нашу предыдущую запись.
// У нас name равен name, т.е - ключ объекта равен тому, что будет передаваться
// в аргументах нашей функции.
// И тоже самое с age - этот ключ объекта равен тому числу, который будет
// передан в аргументы нашей функции.
// И мы, собственно, можем сократить эту запись вот так:

const makeUserInfoS = (name, age) => {
	return {
		name, // То же самое что и name: name,
		age, // то же самое что и age: age.
		"likes javascript": true,
	}
}

user = makeUserInfoS("Вася", 30);
console.log( )
console.log(user);

// Изменение объекта: добавление свойств

// Мы создали кучу разных объектов со всякими свойствами, это прекрасно.
// Но, мы можем ДОБАВЛЯТЬ свойства в объект.
// Делается это очень просто, мы создаём переменную, называем её, открываем фиг.
// скобки и прописываем свойство, хотя-бы 1.
// Далее, мы берем нашу переменную, приписываем к ней точку и добавляем новый
// ключ, а после этого даём ему значение при помощи оператора присваивания (=).

let userInfo7 = {
	name: "Вася",
}

console.log( )
console.log(userInfo7)

userInfo7.age = 30;

console.log( )
console.log(userInfo7)

userInfo7["likes javascript"] = true;
// ВАЖНО! - при добавлении свойства с большим именем к объетку - точка не
// добавляется.

console.log( )
console.log(userInfo7)

userInfo7.address = {
	city: "Uzhhorod",
	street: "Freedom",
}

console.log( )
console.log(userInfo7)

// Изменение объекта: удаление свойства

// Нужно удалить какое-то свойство из объекта? - не вопрос, удалим.
// Для этого существует директива delete, а вот синтаксис применения:

/*

delete название_объекта.удаляемое_свойство

ИЛИ

delete название_объекта["удаляемое_свойство"]

*/

// А теперь применим это к реальному объекту:

let userInfoDeleteKey = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
}

console.log( )
console.log(userInfoDeleteKey)

delete userInfoDeleteKey.age

console.log( )
console.log(userInfoDeleteKey)

delete userInfoDeleteKey["likes javascript"]

console.log( )
console.log(userInfoDeleteKey)

// Изменение свойства

// И так, у нас есть объект у которого есть определённые свойства.
// Мы хотим поменять значение какого нибудь свойства, но как?
// Для этого, мы прописываем название объекта, указываем на ключ (после
// названия объекта ставим точку) и при помощи оператора присваивания меняем значение.

// А вот и пример из РеАльНоЙ жИзНи:

let userInfo8 = {
  name: "Вася",
  age: 30,
}

console.log( )
console.log(userInfo8) // => { name: 'Вася', age: 30 }

userInfo8.age = 18 // => теперь значение age не 30, а 18

console.log( )
console.log(userInfo8) // => { name: 'Вася', age: 18 }

// Изменение свойства - константа

// То же самое можно повторить, даже если наш объект находится в константе.
// Да-да, в той самой const, которую нельзя изменить.. магия вне Хогвартса! :-D
// А если быть точнее - это JavaScript!)

// Тут всё то же самое - пишем название объекта, указываем ключ, меняем значение.

const userInfo8_C = {
  name: "Вася",
  age: 30,
}

console.log( )
console.log(userInfo8_C) // => { name: 'Вася', age: 30 }

userInfo8_C.age = 18 // => теперь значение age не 30, а 18

console.log( )
console.log(userInfo8_C) // => { name: 'Вася', age: 18 }

// Изменение объекта: копирование объектов

// ВАЖНО!!! - При копировании объекта в другую переменную сам объект
// не дублируется, а копируется только ссылка на него.
// Можно представить, что наш объект бокс (ENG - box), шкафчик с папками, а при копировании
// объекта в другую переменную - мы просто делаем дубликат ключика от шкафа/бокса.

let userInfo9 = {
  name: "Вася",
  age: 30,
}

console.log( )
console.log(userInfo9) // => { name: 'Вася', age: 30 }

user = userInfo9

console.log( )
console.log(user)  // => { name: 'Вася', age: 30 }

user.age = 18;

console.log( )
console.log(userInfo9)  // => { name: 'Вася', age: 18 }

// Так, что мы сделали? переменной user мы присвоили значение userInfo9 (объект).
// Далее, мы взяли и поменяли уже у user'a значение ключа age, но на самом
// деле оно (значение ключа) поменялось у userInfo9, ибо user - ссылка на userInfo9.

// Изменение объекта: дублирование объекта через Object.assign

// Существует метод (о методах позже, просто скажем что это функция для объектов:)) 
// объектов assign().
// Он позволяет сдублировать объект и его значения. (если сказать честно-честно, то я
// так и не понял как он работает... тупенькая голова :9)

// Синтаксис:

/*

Object.asign(куда(объект), что(свойство №1), что (свойство №2), ...)

*/

// Пример пользования

let userInfo10 = {
  name: "Вася",
  age: 30,
}

user = Object.assign({}, userInfo10)
user.age = 18

console.log( )
console.log(userInfo10) // => { name: 'Вася', age: 30 }
console.log( )
console.log(user) // => { name: 'Вася', age: 30 }

// Как я понял, мы получили два разных объекта.

// Хоть мы и "скопировали" объект (как сказано в документации) - при изменении
// значения одного из ключей, на userInfo это не повлияло.
// Выходит, Object.assign создаёт новый объект... но нет.
// Мы, при задании значения user Object.assign - в скобках прописали
// "{}", и что это значит?
// А значит, что мы создаём НОВЫЙ объект, а не копируем свойства в уже существующий.
// Что касается надписи "userInfo10" - это значит "скопируй всё ключи и
// их значения из userInfo10 в объект".
// А расшифровать всё это можно так: "присвой переменной user значение
// нового объекта, и скопируй в него все
// свойства из объекта userInfo10".

// Изменение объекта: ещё про Object.assign

// При помощи этого метода можно добавлять в объект новые свойства со значениями.
// Добавим в уже существующий объект - userInfo10:

Object.assign(userInfo10, { ['likes javascript']: true, city: "Uzhhorod", })

console.log( )
console.log(userInfo10) // => ... 'likes javascript': true, city: 'Uzhhorod' }

// Расшифруем наш код: "В объект userInfo10 добавь следующие значения:
// 'likes javascript: true', city: 'Uzhhorod'". 

// Проверка существования объекта: if

// Проверить объект на наличие какого-то свойства легко, для этого используется
// конструкция if.
// Вообще, if часто помогает при решении каких-то задач.
// Например, мы хотим вывести в консоль значение несуществующего ключа (мы
// забыли что такого ключа нет) - и нам выводит неприятный undefined.
// А при помощи if эту проблему можно решить:

let userInfoWithoutKey = {
  name: "Вася",
  // age: 30,
}

// console.log(userInfoWithoutKey.age) => undefined

if (userInfoWithoutKey.age) {
  console.log( )
  console.log(userInfoWithoutKey.age) // Когда вновь появится ключ age - его
                                      // значение будет выведено в консоль
}

// Расшифруем код: "если в объекте userInfoWithoutKey есть свойство age - 
// выводи его значение в консоль".
// Как мы знаем, если условие у if будет выдавать false - он ничего не
// выведет, даже undefined. Однако, стоит нам разкомм.. раскомм.. короче, убрать
// комментарии - всё заработает, значение выведется на экран ибо условие будет тру.
// Или ещё короче: "если условие тру - выводи то-то и то-то, если фолс - не выводи".

// Проверка существования объекта: опциональная цепочка

// Бывает так, что мы хотим вызвать значение свойства объекта в объекте..
// Хехе, короче - вот:

console.log( )
console.log(userInfoDeep.address.street) // => 'Freedom' 

// Опять расшифруем код: "выведи значение свойства street, находящийся в объекте
// address, находящийся в объекте userInfoDeep".

// И вдруг, мы удалили такое свойство - 

delete userInfoDeep.address.street

// console.log(userInfoDeep.address.street) TypeError: Cannot read property..
// undefined короче.

// Что делать? как жить дальше? такого свойства... такого свойства нет!
// Но, мы можем применить оператор "?"
// Принцип его работы схож с if, об этом я уже писал.
// ПРИМ: не знаю, это оператор "?" или "?.".. если бы это был if - мы
// бы написали еще ":" (? - if, : - else).

// Короче, вот:

console.log( )
console.log(userInfoDeep?.address?.street) // => ... undefined. Допишу позже...