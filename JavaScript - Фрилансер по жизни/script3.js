// Числа

// В JS существуют 2 типа чисел - это обычные числа в 64-х битном
// формате (с которыми мы и будем чаще всего работать) и bigInt, числа которые
// позволяют работать с целыми числами приозвольной длины (или же просто ОГРООООМНЫЕ
// числа :-D). Но в этом уроке про числа, ФПЖ будет говорить только о простых числах.

// Записать простые числа в JS можно следующим образом -
// создать переменную с числовым значением и работать с ней дальше.
// Но мы выведем значение переменной в консоль:

// Число
let someNum = 458
console.log( )
console.log(someNum)

// Или же просто в console.log() написать интересующее нас число:

console.log( )
console.log(854)

// А десятичные числа пишутся ОБЯЗАТЕЛЬНО через точку, но выводятся
// в консоль они так же легко как и простые:

// Десятичные числа
let someNums = 4.58
console.log( )
console.log(someNums)

// А вот мы вызываем это же число просто через console.log():

console.log( )
console.log(8.54)

// А в ситуации, когда нам надо работать с крупными числами (или наоборот,
// оооооочень маленькими), к примеру миллион -
// мы можем написать это число простым способом:

let someBigNum = 1000000
console.log( )
console.log(someBigNum)

let someLittleNum = 0.000001
console.log( )
console.log(someLittleNum)

// Или же, мы можем сократить эту запись чтобы не прописывать целых 6 нулей.
// После цифры 1 надо добавить латинскую "e", и поставить после "e" цифру 6.
// Она будет значить, что мы хотим вызвать в консоль/записать в переменную миллион,
// ибо в миллионе - 6 нулей.

someBigNum = 1e6
console.log( )
console.log(someBigNum)

// Фактически, единичка умножается на миллион, на единицу с шестью нолями.
// Или, это 1 умножить на 10 в шестой степени - 1 * 10^6


// А мааааааленькие числа как записывать?
// Синтаксис схож с записью "1e6", т.е такие малюсенькие числа вкратце
// записывают почти так же, как и миллион, но после латинской "e"
// ставится знак минуса "-". Т.е "e" минус количество нулей - e-6.

someLittleNum = 1e-6;
console.log( )
console.log(someLittleNum)

// Фактически, единица делится на миллион, единицу с шестью нолями.
// Или, это 1 умножить на 10 в минус шестой степени - 1 * 10^-6

// Шестнадцатеричные, двоичные и восьмеричные числа

// Шестнадцатеричные числа широко используются в JS для представления цветов,
// кодировки символов и многого другого.

// Как записать число в шестнад. системе?
// Ну, пока что возьмем число 255. Синтаксис написания простой, но непонятный.
// Пишется всё вот так:

console.log( )
console.log(0xFF, '- 0xFF') // => 0xff => 255, шест. система счисления

// 0x - указывает на то, что это шестнадцатеричная система счисления.
// FF - указывает на кодировку/код числа.

// Причем регистр не имеет значения - написали мы 0xff или 0xFF.

// Реже используются двоичные и восьмеричные числа:

console.log( )
console.log(0b11111111, '- 0b11111111') // => 255, двоичная система счисления

console.log( )
console.log(0o377, '- 0o377') // => 255, восьмеричная система счисления

// 0b11111111 - из двоичной системы исчисления.

// 0b - указывает на то, что это двоичная система счисления.
// 11111111 - указывает на кодировку/код числа.

// 0o377 - из восьмеричной системы исчисления.

// 0o - указывает на то, что это восьмеричная система счисления.
// 377 - указывает на кодировку/код числа.

// Метод toString(base)

// Метод num.toString(base) возвращает строковое представление числа в той
// или иной системе счисления (base).
// base может принимать значения от 2 до 36 (да-да, это всё системы счисления).

let num = 255
console.log( )
console.log(num.toString(16), "- код числа \'255\' в шест. системе счисления") // => "ff"
console.log( )
console.log(num.toString(8), "- код числа \'255\' в восьмеричной системе счисления") // => "377"
console.log( )
console.log(num.toString(2), "- код числа \'255\' в двоичной. системе счисления") // => "11111111"

// Округление чисел

// Отлично, с вариантами записи чисел разобрались.
// Теперь посмотрим, что можно с ними делать! (на такие операторы, как умножение,
// деление, сложение, взятие остатка от деления и т.д смотреть не будем, ибо
// дурак поймет что с ними надо делать и как надо использовать.)

// В JS встроен объект Math, который содержит несколько функций для работы с числами:

// Math.floor - округляет число в меньшую сторону

let numOne = Math.floor(5.8), numTwo = Math.floor(2.2), numThree = Math.floor(-2.2)

console.log( )
console.log(numOne) // => 5
console.log( )
console.log(numTwo) // => 2
console.log( )
console.log(numThree) // => -3

// Math.ceil - округление в большую сторону

numOne = Math.ceil(5.8), numTwo = Math.ceil(2.2), numThree = Math.ceil(-2.2)

console.log( )
console.log(numOne) // => 6
console.log( )
console.log(numTwo) // => 3
console.log( )
console.log(numThree) // => -2

// Math.round - округление до ближайшего целого

numOne = Math.round(5.8), numTwo = Math.round(2.2), numThree = Math.round(-2.2)

console.log( )
console.log(numOne) // => 6
console.log( )
console.log(numTwo) // => 6
console.log( )
console.log(numThree) // => 2

// И всё бы ничего, но Math.round округляет до целого числа.
// Например, число 5.845 (5 целых 845 тысячных) округлит до 6.
// Это ладно, но как получить 5.8 или 5.85?

// Одним из вариантов будет способ умножения и деления.
// Мы умножаем нужное число на 10 (в случае если дробная часть нужна как десятая),
// или умножаем на 100 (если дробная часть нужна как сотая).
// Далее, делим полученное число на 10 или 100 (в зависимости от того, на сколько умножили).
// Пример:

numOne = Math.round(5.845 * 10) / 10 // => 58.45 => 58 => 5.8
// Умножаем 5.845 на 10 = 58.45; Округляем 58.45 до целого числа с Math.Round = 58; Делим 58 на 10 = 5.8
console.log( )
console.log(numOne)

numTwo = Math.round(5.845 * 100) / 100 // => 584.5 => 585 => 5.85
// Умножаем 5.845 на 100 = 584.5; Округляем 584.5 до целого числа с Math.round = 585; Делим 585 на 100 = 5.85
console.log( )
console.log(numTwo)

numThree = Math.round(5.8449 * 100) / 100 // => 584.49 => 584 => 5.84
// Умножаем 5.8449 на 100 = 584.49; Округляем 584.49 до целого числа с Math.round = 584; Делим 584 на 100 = 5.84 
console.log( )
console.log(numThree)

// Второй вариант.
// Метод toFixed(n) - округляет число до n знаков после запятой и возвращает
// строковое представление результата.

numOne = 5.845
console.log( )
console.log(numOne.toFixed(1)) // => '5.8'

// А теперь преобразуем всю эту кашу в число:

// Метод унарного оператора сложения -

console.log( )
console.log(+numOne.toFixed(1)) // => 5.8

// Специальная функция Number -

console.log( )
console.log(Number(numOne.toFixed(1))) // => 5.8

// Проблемы неточных вычислений

// И так, у нас есть число 1.0005, мы хотим округлить его до 1.01 при помощи умножения и деления -

numOne = Math.round(1.005 * 100) / 100

// Ожидаем на выходе 1.01 -

console.log( )
console.log(numOne) // => 1

// Но, нам вывелось 1! почему так?
// А об этом - позже)

// Вот ещё пример: у нас есть число 12.35, мы хотим округлить его до 12.4 при помощи toFixed() -

numTwo = 12.35

// Ожидаем на выходе 12.4

console.log( )
console.log(numTwo.toFixed(1)) // => 12.3

// Почему так? в первом примере вывелось 1, а во втором - 12.3 (а так логично, ибо
// после точки идёт 35, а не 45)!

// Понять, почему же так происходит, можно по такому примеру (или просто понять что это JS :-D):

let problem = 0.1 + 0.2 === 0.3 // => создали некое условие

// Ожидаем на выходе true -

console.log( )
console.log(problem) // => false

// Опять! но как же так? 0.1 + 0.2 = 0.3, это как 1 + 2 = 3!
// Но если мы возьмем, и пропишем в консоли вот такую запись, без условия ... -

console.log( )
console.log(0.1 + 0.2) // => 0.3000000....4

// ...выйдет какой-то кошмар!
// А почему так? - всё дело в неточных вычислениях в программировании (или это
// так только в JS, я так и не понял).

// Подробнее об этом тут - https://habr.com/ru/post/112953/
// А что до меня - я вообще ничего из этой статьи не понял, ни капли, ни одного слова :D

// Решение с помощью Number.EPSILON

// А сейчас пора бы задуматся над тем, как нам решить эту проблему!
// Посмотрим на пример:

let sourceNum = 1.005
let numFour = Math.round(sourceNum * 100) / 100

console.log( )
console.log(numFour) // => 1, ожидалось 1.01

// У нас есть исходное чсило - одна целая, ноль ноль пять тысячных.
// И мы пытаемся его округлить, умножить и поделить, но когда мы выводим
// результат в консоль - облом! вместо одной целой, 1.01 нам выдает 1!

// Сейчас мы разберемся, что там происходит.. под капотом!

console.log( )
console.log(sourceNum * 100) // => 100.49999999999999
console.log( )
console.log(Math.round(sourceNum * 100)) // => 100

// Вкратце - у нас есть число, 1.005.
// Мы должны его умножить, получить 100.5.
// Потом округлить, получить 101.
// А потом делить - получим 1.01.

// Но, при умножении мы получаем не совсем то, что мы хотим - какое-то кошмарное
// число получается!
// Потом округляем, получаем 100.
// А при делении числа на само себя - получается 1, и тут тоже самое!

// И как же нам решить эту проблему?

// Нам поможет Number.EPSILON!
// Намбр Эпсилон это оооочень маленькое число, равное ".01".
// Нам всего лишь надо взять и, собственно, добавить его к переменной.
// Добавляется он через оператор сложения - "+":

sourceNum = 1.005 + Number.EPSILON

// Теперь вызываем в консоль значение переменной!

numFour = Math.round(sourceNum * 100) / 100

console.log( )
console.log(numFour, "- всё работает!") // => 1.01

// А теперь посмотрим что же под капотом -

console.log( )
console.log(sourceNum * 100) // => 100.500000...1
console.log( )
console.log(Math.round(sourceNum * 100)) // => 101

// Надо только поделить, и получится 1.01:
// 101 / 100 = 1.01

// Вообще-то, есть функция которая решает эту проблему - но она очень большая и очень сложная.
// Найти её можно в документации (я не стал искать :-))

// P.S - на решение этой задачи своими мозгами, у меня ушло 30 минут.
// Без математики действительно трудно!

// Проверки: isFinite и isNaN

/*

PRE:

Вспомним, что в JS существуют специальные числовые значения, такие как:
Infinity - бесконечность,
и NaN - ошибка вычисления.
Эти значения так же являются типом данных number, но НЕ являются обычными числами!
для проверки таких значений существуют СПЕЦИАЛЬНЫЕ функции.

*/

// Проверка isNaN'ом

// Представим, что у нас есть такое выражение: «25 + "Привет!"»
// Мы попытаемся преобразовать его в числовое значение:

console.log( )
console.log(Number(25 + "Привет!")) // => NaN

// Но, как мы видим, выводится NaN (not a number - не число).
// И то правда - число складывать со строкой?.. м-да.
// Но как же нам определить, вернет ли это выражение NaN?

// Существует проверка "isNaN()" (..это NaN?), которая помогает нам определить,
// выдаст ли выражение NaN или нет.
// Оно способно выдавать только 2 значения - true и false.

// Проверим на деле:

console.log( )
console.log(Number(25 + "Привет!")) // => NaN

// Нам выдало NaN, так как НЕЛЬЗЯ складывать строку с числом, это НЕ ЧИСЛО.
// Теперь проверим это же выражение через isNaN:

console.log( )
console.log(isNaN(25 + "Привет!")) // => true

// Вполне ожидаемо.

// isNaN естественно проверил бы выражение на выдачу нам NaN, но так как числа
// никак не могут складываться - он выдал нам true, это выражение в любом случае
// бы выдало нам NaN, так как (повторюсь) число со строкой складывать нельзя.

// Но всё же, зачем нам нужен этот isNaN?
// Мы же можем проверить через if, зачем нам isNaN?
// Всё дело в том, что NaN никогда не равен самому себе... -

if (25 + "Привет!" !== NaN) {
    console.log( )
    console.log("Э, я не NaN!")
}

// => "Э, я не NaN!"

// Или

console.log( )
console.log(NaN === NaN) // => false

// ... потому, что NaN - уникальное значение. Оно никогда и ни при каких
// обстоятельствах не может быть равно чему либо, даже себе.

// Поэтому то нам и нужен этот "isNaN", чтобы проверять выражения на наличие
// этого спец. значения, NaN.

// Проверка isFinite

/*

Преобразует аргумент в число и возвращает true, если оно
является обычным числом.

Если же аргумент строка - то оно преобразуется в число, а
это NaN (не число), значит проверка вернет нам false.
Но если это число представленное в виде строки, то будет true,
ибо "строковое" число превратится в обычное, а это true.
А вот если аргумент infinity, то это так же false.

*/

console.log( )
console.log(isFinite("25")) // => "25" => 25 => true
console.log( )
console.log(isFinite("Привет!")) // => "Привет!" => NaN (попытка превратить str в num) => false
console.log( )
console.log(10/ 0) // => 10/ 0 => Infinity => false

// parseInt и parseFloat

/*

Как мы уже знаем, преобразовать строку в число можно с помощью
унарного оператора сложения, либо с помощью специальной функции Number.

P.S - преобразовать строку в число можно только при условии,
что в строке находится число представленное в текстовом, строковом виде.
Т.е - преобразовать можно такие числа:

Было: "25"
Стало: 25

Было: "146"
Стало: 146

А если это уже "натуральная" (как я такие строки называю) строка, то будет NaN:

Было: "Семечки"
Стало: NaN (not a number, не число)

Было: "Пулеметчик гангстер"
Стало: NaN

*/

let valueOne = +"150" // => "150" => 150

console.log( )
console.log(valueOne) // => 150
console.log( )
console.log(typeof valueOne) // => "number"

/*

Но, программисты очень часто сталкиваются со значениями у которых
есть единица измерения (мне тоже скоро придется, походу..), например:

*/

let valueTwo = +"150px" // => "150px" => NaN (попытка преобразовать строку в число)

console.log( )
console.log(valueTwo) // => NaN
console.log( )
console.log(typeof valueTwo) // => "number"

// И что делать? (ждать чего-то :-D)

// Для решения таких проблем существуют (Супермен и Супергёрл) parseInt и parseFloat.

/*

Для получения чисел из такой строки существуют parseInt и parseFloat.
Если в процессе чтения возникает ошибка (NaN), они возвращают полученное
ДО ошибки число.

Функция parseInt возвращает целое число, если нам было передано
число с плавающей точкой.
А функция parseFloat возвращает число с плавающей точкой (т.е,
возвращает число "как есть"):

*/

valueOne = parseInt("150.58px")

console.log( )
console.log(valueOne) // => 150 (вернул просто целое число, .58 отбросил)
console.log( )
console.log(typeof valueOne) // => "number"

valueTwo = parseFloat("150.58px")

console.log( )
console.log(valueTwo) // => 150.58 (вернул число с плав. точкой, "сохранил" .58)
console.log( )
console.log(typeof valueTwo) // => "number"

// И как не странно - тип данных number.
// Но почему так? - всё дело в том, что parseInt/Float() возвращают ЧИСЛО
// до того, как в процессе чтения кода возникла ошибка.

// Итог:
// Если в процессе чтения кода возникает ошибка, то parseInt и parseFloat
// возвращают получившееся число до возникновения ошибки.

// Но, стоит отметить, что если первым символом будет буква, а не число (т.е
// сразу будет ошибка) то нам выдаст NaN:

let valueThree = parseFloat('a150.58px')

console.log( )
console.log(valueThree) // => NaN, т.к никакого числа из этой строки достать мы не можем
console.log( )
console.log(typeof valueThree) // => "number" (почему так - я не знаю :-D)

// Дополнительный аргумент

/*

У функции parseInt есть дополнительный параметр.
Он определяет систему счисления, таким образом parseInt может
также читать строки с шестнадцатеричными числами, двоичными
числами и так далее. -

*/

console.log( )
console.log(parseInt('0xff'), 16) // => 255
console.log( )
console.log(parseInt('ff'), 16) // => 255

// В первом выражении "0x" можно пропустить, т.к после "ff" мы пишем "16",
// и функция понимает что нужное число из шестнадцатеричной системы счисления.

// Другие возможности

// Уже знакомый нам объект Math, содержит различные математические
// функции и константы.
// Вот некоторые из них:

// Math.random()
// => Возвращает псевдослучайно случайное число в диапазоне
// от 0 (включительно) до 1 (не включая 1)

console.log( )
console.log(Math.random()) // => ?
console.log( )
console.log(Math.random()) // => ?
console.log( )
console.log(Math.random()) // => ?

// P.S - поставил знаки вопроса потому, что числа абсолютно рандомные
// и угадать что нам будет возвращено - невозможно.

// Math.max
// => Возвращает наибольшее число из переданных аргументов.
// => Аргументов может быть сколь угодно.

console.log( )
console.log(Math.max(5, 4, 89, 145, -2, 7)) // => 145
console.log( )
console.log(Math.max(0.1, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 50, 600, 7000)) // => 7000

// Math.min
// => Возвращает наименьшее число из переданных аргументов.
// => Аргументов может быть сколь угодно.

console.log( )
console.log(Math.min(5, 4, 89, 145, -2, 7)) // => -7
console.log( )
console.log(Math.min(0.1, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 50, 600, 7000)) // => 0.1

// Math.abs
// => Возвращает абсолютное значение (модуль) числа.

num = -58

console.log( )
console.log(Math.abs(num)) // => 58 

// Math.pow
// => Возвращает число n, возведенное в степень power.

// P.S - Простыми словами, она берет первый аргумент (число), и возводит
// его в степень второго переданного аргумента (тоже числа).
// Т.е, если мы передадим 2 аргумента - 5 и 8, то она возведет 5 в 8-ую степень.

console.log( )
console.log(Math.pow(5, 8)) // => 390625

// Конечно, можно было использовать оператор ** (возведения в степень)
// а не придумывать функцию для этого.. но да ладно.

// Домашка!!!

// 1) Изучить теорию
// 2) Решить задачи:

/*

Задача №1 (получить верное значение округления)

let num = Math.round(1.005 * 100) / 100
console.log(num) => выводит 1, что не верно.

Решение:

(найду позже, сложная задача.)

Задача №2 (получить число 135.58 из строки)

let value = "135.58px"
console.log(value) // => NaN

Решение:

let value = "135.58px"
console.log(parseFloat(value)) // => 135.58

Задача №3 (построить верное условное ветвление)

let value = 58 + "Фрилансер"
if (написать тут ответ) {
    console.log("Результат выражения NaN")
}

Решение:

(найду позже, не понял задачу.)

Задача №4 (найти макс. число из - 10, 58, 39, -150, 0)

Решение:

console.log(Math.max(10, 58, 39, -150, 0)) => 58

Задача №5 (округлить число 58.858 до числа 58)

(найду позже, сложная задача.)

*/