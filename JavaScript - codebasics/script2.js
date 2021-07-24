// Создание (определение) функции

// Определние собственных функций значительно упрощает написание и поддержку программ.
// Функции позволяют объединять сложные (составные) операции в одну.
// Например, отправка письма на сайте - это достаточно сложный процесс, включащий
// в себя взаимодействие с внешними системами (интернет). Благодаря возможности
// определять функции, вся сложность может быть скрыта за простой функцией:

/*

import { send } from 'some-email-package';

const email = 'support@hexlet.io';
const title = 'Помогите';
const body = 'Я написал историю успеха, как я могу получить скидку?';

// Один маленький вызов — и много логики внутри
send(email, title, body);

*/

// P.S - Было взято с Hexlet.

// Создадим нашшу первую функцию. Её задача - выводить на экран следующий текст:
// Today is: December 5

const showCurrentDay = () => {
    const text =  'Today is: December 5'
    console.log(text)
}

// Вызов функции =>
showCurrentDay();
// => Today is: December 5

// P.S:
// Такая функция в JavaScript называется стрелочной. Она появилась со стандартом языка ES6.

// Определение не вызывает и не выполняет функцию. Мы лишь говорим, что теперь такая
// функция есть, она была создана.

// Определение функции выше состоит из двух частей:
// 1) Присваивание функции константе
// 2) Непосредственно определение функции

// Само по себе определение функции - это всё, что находится после присвоения:

/*

Обратите внимание на стиль
Пробелы между символами
Открывающая фигурная скобка в конце той же строчки, где стрелка
Закрывающая - на своей отдельной строчке в конце

() => {
  const text = 'Today is: December 5';
  console.log(text);
};

*/

// Такое определение создает функцию, но не вызывает её.
// Поскольку это определение не связывается ни с каким именем (константой),
// то такой код - абсолютно бесполезен, хоть и является синтаксически корректным.

// Связывание функции с именем является обычным присваиванием.
// В этом смысле функции ведут себя как обычные данные, которые можно
// записывать в константы. Технически функцию можно присвоить и переменной,
// но т.к функции неизменяемы - то смысла в этом нет.

// const doSomething = (определение любой функции)

// В отличие от обычных данных, функции выполняют действия, поэтому их имена
// практически всегда должны быть глаголами: "построить что-то", " нарисовать что-то" и т.д.

// Всё, что описывается внутри фигурных скобок {}, называется телом функции.
// Внутри тела можно описывать любой код.
// Можно так же считать, что это маленькая самостоятельная программа, набор
// инструкций. Тело выполняется только в тот момент, когда вызывается
// (запускается) функция. Причём каждый вызов функции запускает тело
// внезависимости от других вызовов.

// Кстати, тело может быть пустым :D =>

/*

const noop = () => {};

noop(); - вызов есть, а смысла? а смысла то и нет.

*/

// Понятие "создать функцию"  имеет много синонимов:
// "Реализовать"
// "Определить"
// "Заимплементить" (от слова implement).

// Задача из урока:

/*

Текст задачи, задача:

Реализуйте функцию printMotto(), которая печатает на экран фразу "Winter is coming."

Решение:

const printMotto = () => {
  let text = 'Winter is coming'
  console.log(text)
}

*/

// Передача одного аргумента

// Функции без аргументов встречаются крайне редко. Чаще всего, функции
// принимают на вход данные, как-то их используют и выдают результат.
// Посмотрим на определение ниже:

console.log( )

const showAnotherDay = (text) => {
  console.log(`Today is: ${text}`);
}

showAnotherDay('January 29');
// => Today is: January 29

// Теперь то понятно, зачем нужны были круглые скобки после имени функции:
// в них можно указать аргумента (или, что то же самое, параметры).
// Технически, параметры функции всегда являются переменными, а не
// константами (а если подумать, то ведь правда - параметры можно в
// любой момент изменить!). Но лучше относиться к ним как к константам.

// Посмотрев внимательно, можно заметить что мы не объявляем (ну или
// определяем, кто как называет) переменную text, но используем её в теле
// функции.
// JS работает так: переменная сама создаётся при вызове, и указанное
// значение (у нас это было - 'January 29') записывается в эту переменную.

// Аргументы можно называть как угодно, их имена имеют смысл
// исключительно в теле функции.
// Например, если изменить имя аргумента так:

console.log( )

const showCurrentDate = (OhLala) => {
  console.log(`Today is: ${OhLala}`);
}

let date = 'January 29'
showCurrentDate(date);
// => Today is: January 29

// - то поведение функции не изменится. Это касается как имен внутри
// функции (OhLala), так и снаружи (date).

// Новички пытаются сделать примерно такое определение функции:

/*
const showCurrentDate = ('Today is: December 5) {
  (код)
}
*/

// - запустить такой код не получится. Он синтаксически неверен. Как
// вместо переменной, куда записывается значение - может стоять строка?

// Аргумент должен быть переменной, иначе он не сможет быть аргументом,
// то есть чем то, что принимает в себя значение при вызове.

// Если нам нужна какая-то информация в функции, и мы заранее знаем
// какая именно, то аргумент для этого не нужен, ведь мы уже умеем
// сохранять значения для последующего использования - достаточно
// создать переменную (или константу) в самом теле:

/*

const showCurrentDate = () => {
  const text = 'Today is: December 5';

  (какой-то там код)
  (какой-то там код)
  (какой-то там код)
}

*/

// Задача из урока:

/*

Текст задачи, задача:

Реализуйте функцию printJaimesLine(), которая принимает один аргумент — строку,
и выводит реплику на экран в формате - JAIME: переданная_строка.

Примечания:

Как назвать переменную, которая будет аргументом - решайте сами.


P.S (from Hexlet.io):

"Вам не нужно самостоятельно вызывать функцию, только определить её. 
Но для наглядности — вот как наша система вызывает её:

printJaimesLine('Farewell, my friend...');"

Решение:

const printJaimesLine = (replica) => {
  console.log(`JAIME: ${replica}`);
}

*/

// Передача нескольких аргументов

// Аргументов может быть несколько. В таком случае, в определении функции
// мы делаем то же самое что и в вызове: указываем аргументы, НО через запятую.

// А вот и пример:

/*

const showCurrentDay = (month, day) => {
  console.log(`Today is: ${month} ${day}`);
};

showCurrentDay('January', '29')
Вывод => 'Today is: January 29'

*/

// Главное - помнить, в каком порядке аргументы стоят при
// определении функции, в таком же порядке они должны передаваться
// при вызове функции.

// Аргументы можно и не передавать, или передать только какую-то часть.
// В таком случае, значением непереданных аргументов станет undefined.
// Это немножко странно, ведь в большинстве других языков так делать нельзя..
// Но это же Javascript.

/*

showCurrentDay('January');
'Today is: January undefined'

showCurrentDay()
undefined undefined

*/

// Задача из урока:

/*

Текст задачи:

Сэм составляет множество карт (он картограф), и ему часто нужно выводить
на экран повторяющиеся символы для визуализации маршрутов.

Например, так Сэм иллюстрирует узкие дороги между городами:

Meereen =-=-=-=- Myr

А так иллюстрирует широкие трассы:

Vaes Dothrak ======== Vahar

В документации js он нашёл метод
String.prototype.repeat().

console.log('=-'.repeat(4));
Вывод => '=-=-=-=-'

Сэм не очень доволен. Ему нужно нарисовать сотни маршрутов разной длины
с разными символами.
Неудобно вызывать сотни раз repeat() внутри вызова console.log().

Задача:

Напишите для Сэма функцию printSeq(), которая сама выводит
на экран получившееся повторения.
Она принимает два аргумента - строку и число, и выводит повторяющуюся
строку на экран.

Примечание: Вот пример того, как Сэм будет использовать
написанную вами printSeq():

printSeq('=-', 4);
Вывод => '=-=-=-=-'

Моё решение:

const printSeq = (str, num) => {
  let result = str.repeat(num);
  console.log(result)
} 

Решение учителя:

const printSeq = (str, num) => {
  console.log(str.repeat(num));
};

*/

// Возврат значений

// В уроке "Вызов функций" мы в основном работали с функциями, которые
// выводят на экран, а не возвращают результат. Честно говоря, вывод на
// экран - по факту обучающий элемент. В реальном коде на экран никто
// ничего не выводит (за исключением утилит командной строки).
// Функции возвращают данные, которые передаются в другие функции.

// "Научиться писать функции, которые возвращают информацию - первый
// шаг на пути к построению по-настоящему полезных программ."
// (C) - Hexlet

// Начнем с тривиального примера: создадим и вызовем функцию, которая
// принимает два числа и возвращает первое число минус второе.
// Назовём её sub(), от Английского слова "Subtract" - "вычесть":

console.log( )

const sub = (a, b) => {
  const result = a - b;
  return result;
}

let result = sub(10, 7);
console.log(result); //  => 3

// Возврат значения задаётся специальной инструкцией return. Справа
// от return помещается выражение, любое выражение. Т.е, мы можем
// делать вычисления сразу после return без создания константы result:

console.log( )

const subV2 = (a, b) => {
  // Сначала вычисляется выражение справа от 'return',
  // затем получившееся значение возвращается
  return a - b;
};

console.log(sub(2018, 1975)); // => 43

// Обратите внимание: мы знаем что вызов функции - выражение,
// поэтому мы передали вызов одной функции в вызов другой функции:
// console.log(sub(2018, 1975));

// Интерпретатор, встречая return, останавливает дальнейшее
// выполнение функции и возвращает указанное справа значение в то место,
// где была вызвана функция.

// Посмотрите на эту функцию:

/*

const foo = () =< {
  return 7;
  return 10;
}

*/

// Что выведется на экран?

// Правильный ответ: 7. Функция всегда будет возвращать только число 7,
// так как интерпретатор, наткнувшись на первый return, остановит
// выполнение функции. Строчка кода return 10; никогда не выполнится.

// Задача из урока:

/*

Текст задачи:

Сэм создаёт генеалогические деревья разных семей.
семей. Ему постоянно приходится рассчитывать количество места,
занимаемое именами родителей на экране.

Задача:

Создайте функцию getParentNamesTotalLength() для Сэма. Она должна принимать
один аргумент — имя ребенка, и возвращать количество символов в именах матери
и отца суммарно. Функция не должна выводить ничего на экран,
только возвращать число.

Примечания:

Для получения имён родителей используйте уже существующую функцию getParentFor():

Получение имени матери - getParentFor(child, 'mother'), где child — имя ребёнка.
Получение имени отца - getParentFor(child, 'father'), где child — имя ребёнка

Моё решение:

const getParentNamesTotalLength = (childName) => {
  let result = getParentFor(childName, 'mother').length + getParentFor(childName, 'father').length
  return result;
}

Решение учителя:

const getParentNamesTotalLength = (child) => {
  const mother = getParentFor(child, 'mother');
  const father = getParentFor(child, 'father');
  return mother.length + father.length;
};

*/

// Возврат по умолчанию

// Так, посмотрим на "модифицированную" функцию из прошлого урока:

/*

const sub = (a, b) => {
  Полученный результат никак и нигде не используется, и не возвращается
  const answer = a - b;
}

const resultt = sub(10, 7);
console.log(result); => undefined

*/

// Несмотря на отсутствие директивы return внутри функции, console.log()
// выведет на экран undefined. Это стандартное поведение всех функций в JS, и
// оно существует вовсе не просто так. Вызов функции - выражение, а выражения
// всегда возвращают результат своего выполнения.

// Многие новички часто забывают директиву return.

// "Мы в обучении каждый день сталкиваемся с просьбами о помощи типа
// "функция правильная но почему-то не работает!". И почти всегда оказывается,
// что забыт return, а результат, вместо возврата, просто печатается на экран."
// (C) - Hexlet.

// А с другой стороны, если написать инструкцию return без указания
// выражения после него, то наружу вернется все тот же undefined.
// Кажется, что подобный возврат не имеет смысла, но это не так.
// return без выражения нередко используют для прерывания вычислений.

// Вопрос на самопроверку - что возвращает функция console.log()?
// Ответ: выводит некое значение на экран.

// Параметры по умолчанию

// Как говорилось в предыдущих уроках, аргумент может быть необязательным.
// У такого аргумента есть значение по умолчанию.

// Например, функция getParentFor(), которую мы использовали в некоторых
// упражнениях, принимает имя ребёнка первым аргументом, а вторым -
// строку "mother" или "father". Второй аргумент - необязательный, и если
// не указывать его при вызове, то автоматически по умолчанию будет
// использоваться 'mother'.

// Эти два вызова равнозначны:

// getParentFor('Jon Snow');
// getParentFor('Jon Snow', 'mother');

// Каким образом там сделаны аргументы по умолчанию? Заглянем в
// определение этой функции:

/*

const getParentFor = (child, parent = 'mother') => {
  какой-то код
};

*/

// Первый аргумент указан привычно - просто название переменной.
// Это делает аргумент обязательным.

// Второй аргумент указан со значением в формате:
// аргумент = какое_то_значение.
// Точно так же, как при создании переменных или там констант.
// Этот фрагмент: "= какое_то_значение" делает аргумент необязательным,
// и задаёт ему значение по умолчанию.

// Аргументов по умолчанию может быть любое кол-во, но желательно
// чтобы все они были в конце списка аргументов. Т.е такие строчки кода
// будут некоорректны:

/*

const getParentFor = (childName = 'Jon', who) => {
const calculate = (a, b = 90, c) => {
const getPrices = (code = 4161, quantity, place) => {

*/

// Важно! Значение по умолчанию присваивается аргументу только
// если при вызове функции для него не было передано значение.
// Если передать аргумент с любым значением (кроме undefined),
// значение по умолчанию использоваться не будет.

// Задача из урока:

/*

Текст задачи, задача:

Реализуйте функцию getCustomParentFor(), которая принимает два аргумента:

1) - Строку с именем ребёнка
2) - Строку с именем родителя (по умолчанию - 'father')

Функция должна возвращать имя соответствующего родителя.

Примечание:

Используйте внутри своей функции уже готовую функцию - getParentFor().

Моё решение:

const getCustomParentFor = (child, parent = 'father') => {
  return getParentFor(child, parent)
}

*/

// Именование

// Стиль именования функций в JS такой же, как и стиль именования переменных -
// lowerCamelCase. Но при выборе самих слов есть важное отличие.

// Функция - действие, взыов функции всегда подобен указанию:
// "сходи!", "возьми!", "напечатай!", "положи!" и так далее. В предыдущих
// уроках функции были такими:

/*

showDate() - (показать дату)
sub() - (вычесть)
round() - (округлить)
getmoney() - (получить)

*/

// Переменная/константа - сущность, поэтому мы используем существительные:

// child, result, euros.

// Вкратце: функция - глагол, переменные и константы - существительное.

// Проблема:

// В уроке про переменные нам надо было придумать название переменной и записать
// его в блокноте или выслать себе на почту (а я забыл это сделать, м-да).
// Нам надо было найти это название и посмотреть - понятное ли оно? Сразу
// описывает всю суть переменной или требует вникания?
// Ну, я уже на вряд-ли смогу ответить на этот вопрос));

// Жизнь программиста полна такими моментами:

// Открыть старый код и попытаться понять его.
// Будьте добры к будущему себе и к коллегам, давайте переменным, константам
// и функциям понятные названия.

// Задача из урока:

/*

Текст задачи, задача:

Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки
(состоящий из 16 цифр) в виде строки и возвращает его скрытую версию, которая
может использоваться на сайте для отображения.
Если исходная карта имела номер 2034399002125581, то скрытая версия выглядела была так:
****5581.
Другими словами, функция заменяет первые 12 символов, на звездочки.
Количество звездочек регулируется вторым необяз. параметром, по умолчанию он 4.

Примечания:

Можно использовать два полезных метода-

String.prototype.slice() - извлекает часть строки (подстроку).
Первым параметром принимает индекс элемента, с которого надо начинать извлечение,
вторым - индекс элемента, до которого извлекаются символы.
По умолчанию, извлекается все до конца строки.

String.prototpe.padStart() - дополняет строку "заполнителем" слева,
до тех порка пока длина строки не станет равна указанной.
Первым параметром функция принимает желаемую длину строки, вторым - заполнитель.

Моё решение:

let getHiddenCard = (num, starsCount = 4) => {
  num  = num.slice(12)
  return num.padStart(starsCount + 4, '*')
}

*/

// Упрощенный синтаксис функций

// По сравнению с некоторыми языками, определние функции в JS выглядит громоздко:

/*

const square = (x) => {
  return x ** 2;
};

*/

// Здесь используется много дополнительных символов и слово return.
// С версии ES6, в языке появился альтернативный, сокращенный синтаксис, который
// в некоторых ситуациях значительно упрощает восприятие и сокращат кол-во кода.

/*

const double = (x) => x ** 2;

*/

// Отличий от полного определения два: пропали, исчезли наши фигурные скобки
// и инструкция return. :(
// Но на самом деле, сокращенная запись функции делает возврат автоматически.
// Подразумевается, что внутри такой функции ровно одно выражение, которое
// вычисляется и её результат сразу возвращается наружу.

// Отличия исключительно синтаксические, с других сторон их нет.
// Пример с двумя аргументами:

// Полная версия

/*

const sum = (a, b) => {
  return a + b;
};

*/

// Сокращенная версия

/*

const sum = (a, b) => a + b;

*/

// Ещё раз стоит обратить внимание на отсутствие фигурных скобок.
// Разработчики, которые не привыкли использовать такой синтаксис (как и я, в общем то),
// иногда пишут так: const sum = (a, b) => {a + b};, а потом долго не могут
// понять, почему их код не работает. Ответ очень простой:
// если стоят фигурные скобки, значит это не сокращенная версия, а значит -
// чтобы функция вернула нам значение надо ставить return.

// Задача из урока:

/*

Текст задачи, задача:

Реализуйте функцию capitalize(), которая принимает строку и приводит первую
букву первого слова к верхнему регистру:

const name = "arya";
console.log(capitalize(name)); => Arya

Примечания:

Чтобы получить подстроку (или сивол) из строки, используйте метод slice():
'welcome'.slice(2,5); => lco

Для приведения строки к верхнему регистру, используйте метод toUpperCase.

Моё решение:

let capitalize = (text) => {
  let word = `${text[0].toUpperCase()}${text.slice(1)}`
  return word;
}

Решение учителя:

const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;


*/

// Предикаты

// Посмотрим на функцию isInfant из прошлого урока:

// const isInfant = (age) => age < 1;
// console.log(isInfant(3)) => false

// Подобные функции называют предикатами. Функции-предикаты (или функции-вопросы)
// отвечают на какой-то вопрос и всегда (без исключений!) возвращают или true,
// или false.

// Предикаты во всех языках принято именовать особым образом для простоты
// анализа. В JS предикаты, как правило, начинаются с префикса is, has или can,
// но не ограничены этими словами. Примеры:

/*

isInfant() - "младенец ли?"
hasChildren() - "есть ли дети?"
isEmpty() - " пустой ли?"
hasErrors() - "есть ли ошибки?"

*/

// Функция может считаться предикатом ТОЛЬКО если она возвращает boolean.

// Так, напишем ещё одну функцию-предикат.
// Она принимает строку и проверяет, является ли она словом "Castle".

/*

const isCastle = (type) => type === "Castle";

console.log(isCastle("Sea")) => false

*/

// Задача из урока:

/*

Текст задачи, задача:

Напишите функцию isMister(), которая принимает строку и проверяет,
является ли она словом "Mister".

Примечания:

Примеры вызова -

isMister('Mister') => true
isMister('Miss') => false

Моё решение:

const isMister = (text) => text === 'Mister'

*/

// 

// Комбинирование операций и функций

// Логические операции - выражения.
// Значит, логические операции можно комбинировать с другими выражениями.

// Например, мы хотим проверить чётность числа, то есть кратность двум.
// В программировании используют такой подход:

/*

Проверяют остаток от деления на 2:
--если остаток 0, то число было чётным
----если остаток не 0, то число было нечётным

*/

// "Остаток от деления - простая, но важная концепция в арифметике, алгебре,
// и даже в теории чисел и криптографии. Идея проста - нужно разделить число
// на несколько равных групп, и если в конце что-то останется - это и есть остаток от деления."
// (C) - Hexlet.

// Делим конфету поровну между людьми:

/*

7 конфет, 2 человека: 2 x 3 + остаток 1. Значит, 7 не кратно 2.
21 конфету, 3 человека: 3 x 7 + остаток 0. Значит, 21 кратно 3.
19 конфет, 5 человек: 5 x 3 + остаток 4. Значит, 19 не кратно 5.

*/

// Оператор % вычисляет ОСТАТОК от деления (нельзя путать с делением!):

// 7 % 2 => 1
// 21 % 3 => 0
// 19 % 5 => 4

// С помощью него напишем функцию проверки чётности:

const isEven = (number) => number % 2 === 0;

console.log( )
console.log(isEven(10)) // => true
console.log( )
console.log(isEven(3)) // => false

// В одном выражении мы скомбинировали логический оператор === (проверка
// равенства) и арифметический оператор %.

// Приоритет арифметических операций выше логических.
// Значит, сначала вычисляется арифметическое выражение number % 2, затем
// результат участвует в логическом сравнении.

// А па русски? :-D
// А на нашем, человечном языке это прозвучит так (или это можно так расшифровать) -
// "вычислить остаток от делениая числа number на 2 и сравнить, равен ли остаток нулю;
// затем вернуть результат проверки равенства".

// Допишу позже..