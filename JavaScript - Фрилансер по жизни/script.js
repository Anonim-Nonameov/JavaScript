// Домашка

let userName = 'Вася';

let user = userName;

console.log(user);
// Объявляем перем. userName (a) со знач. Вася (1), затем объявляем перем. user
// (b) со значением переменной userName  (a)(a = 1, b = a), затем выводим в
// консоль значение переменной user (1). 

// const myAge  = 36; myAge = 18;

// Этот код выведет ошибку, ведь константу изменить нельзя!


// ~Типы данных~

let string = 'string'; // Строка - string
// Ну, строкой может быть что угодно что находится в кавычках - "" ''. Даже
// пустые кавычки - строка.

let undef; 
console.log(undef);
// Неопределённый - undefined. Выдаётся, когда мы хотим вызвать переменную
// которая на самом деле есть, но значение - неопределено.

let var_null = null; // Ничего - null. 
// Специальное значение, которое - ничего. Переменная объявлена, но значение -
// ничего, ноль.

let yes = true, no = false; // Логический тип, буллин - boolean.
// Имеет лишь 2 значения - true (правда) и false (правда).

let trueOrFalse = 58 < 18; 
console.log(trueOrFalse);
// Переменная может сама получать значение false или true. тут она сама получила
// значение false, ведь 18 МЕНЬШЕ чем 58.

let number = 200; // Число - number
// Число может содержать в себе любые цифры, числа, а также числа с плавающей
// точкой (22.5).

let infin = 15/0; // infinity - number.
// Математическая бесконечность. Есть также -infinity, минус-бесконечность.
// Получить её можно написав let infin = -15/0 и вывести в консоль.

let notAnNumber = 'Hello' / 5; console.log(notAnNumber);
// NaN (not an number - не число) - number. Выдаёт такую вычислительную ошибку
// обычно когда пытаются разделить строку на 5 и т.д. Тип данных - число, хоть
// NaN значит не число. Парадокс.

let bigInteger = 12345678901234567890123456789n; 
console.log(bigInteger);

// bigint - число, но огромное. Выдаётся bigint потому, что в JS тип данных
// number не может содержать числа больше чем 9007199254740991 или меньше
// чем -9007199254740991.

let userInfo = {
 name: 'Ismail',
 age: 14
}
console.log(userInfo);
// Объект - object. Объект это что-то вроде переменной, которая хранит в себе
// несколько значений, свойств. Свойства состоят из бар, двоеточие и значение.
// Тут name - ключ, 'Ismail' - значение.

let id = Symbol('id');
// Символ - symbol. Уникальный айди объекта, скажем так.. его собт. имя.

let funcVar = function name(params) {
  // некий код  
}
// Функция - function. Тот же объект, но просто разный тип данных.


// Преобразование типов (замена их данных)

let userAge = 58; // => число console.log(userAge); 

userAge = String(userAge) // => теперь тип данных переменной - строка.
console.log(userAge);

// Операторы

// В JS есть три группы операторов:
// Базовые операторы
// Операторы сравнения
// Логические операторы

// Термины «унарный», «бинарный», «операнд».

// Операнд - то к чему применяется оператор, операнды ещё
// называют аргументами.
// Например:

userAge = 39 - 9; // => Числа 39 и 9 - операнды

let h = 200, y = 10;

let userHeight = h - y; // => Переменные h и y - операнды

// Бинарными называются операторы которые применяются
// к двум операндам.
// В примере выше оператор вычитания ( - ): бинарный оператор.

// Унарный опператор - который применяется лишь к 1 операнду.
// Например:
let userCash = -800;

// Математические операторы

// В JS есть мат. операторы.
// Например:

let x;

// Оператор сложения: +
x = 5 + 8;

// Оператор вычитания: -
x = 13 - 8;

// Оператор умножения: *
x = 5 * 2;

// Оператор деления: /
x = 10 / 2

// Оператор взятия остатка от деления: %
x = 11 % 3;
// Проверка => 11 / 3 = 3 (2 ост.)

// Оператор возведения в степень: **
x = 3 ** 2;

// Спец. возможности операторов

let resultOne;
let resultTwo;
let resultThree;
let resultFour;
let resultFive;

// Применение оператора сложения к строкам

resultOne = "Ученик" + " " + "по" + " " + "жизни" 
console.log(resultOne);
// Вывод => Ученик по жизни

// Если в выражении есть хоть одна строка (т.е -
// хотя бы один операнд будет строкой) - то конечный
// результат тоже будет строкой.

// ПРИМЕЧАНИЕ: порядок значения не имеет,
// т.е - не важно, первым операндом будет 
// число или строка.

resultTwo = "Ученик " + 18;
console.log(resultTwo);
console.log(typeof resultTwo);
// Вывод => Ученик 18 - тип String.

// Меняем строку и число местами:
resultThree = 18 + " Ученик"
console.log(resultThree);
console.log(typeof resultThree);
// Вывод => 18 Ученик - тип String.

// Казусы.

// Иногда бывает так, что мы из 1-ой цифры можем 
// получить сразу несколько десятков или даже сотен.
// Например - из 2 получить 22, или 222:

resultFour = 2 + "2";
console.log(resultFour);
// Вывод => 22

// Операции до сложения со строкой.

// Операции до сложения со строкой выполняются
// как обычно, даже если мы перед строкой поставим
// какие-то числа для сложения:

resultFive  = 18 - 8 + " Ученик";
console.log(resultFive);
// Вывод => 10 Ученик

// Сначала будет вычитано 18 - 8 и получено 10,
// а затем эта десятка будет сложена со строкой.

// Работа строк и чисел с операторами

resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof resultOne);
// Вывод => 20 - тип Number

resultTwo = 10 * "80";
console.log(resultTwo);
console.log(typeof resultTwo);
// Вывод => 800 - тип Number

// Недопустимые операции:

resultThree = 3 * "Ученик";
console.log(resultThree);
// Вывод => NaN

resultThree = "Ученик" * 3;
console.log(resultThree);
// Вывод => NaN

// Унарный оператор сложения: +
// Здесь оператор сложения играет
// роль преобразователя строк в числа

// Со строками

resultOne = +'25';
console.log(resultOne); 
console.log(typeof resultOne);
// Вывод => 25 - тип Number

// С числами

resultTwo = +10;
console.log(resultTwo);
console.log(typeof resultTwo);
// Вывод => 10 - тип Number (ничего не меняется)

// Ещё пример:

let users = "25";
let admins = "10";

console.log(users + admins);
// Вывод => 2510

console.log(+users + +admins);
// Вывод => 35

// Почему нам вывелось 35? потому что мы применили
// унарный оператор сложения к переменным и сделали
// их тип числом, а числа - складываются.

// Простыми словами: 25 + 10 = 35

// Приоритет операторов

// Разный приоритет:

resultOne = 2 - 1 * 5;
console.log(resultOne);
// Вывод => 3 (1 * 5 - 2)
// Тут выполнится сначала умножение а затем вычитание.

// Приоритет скобок:

resultTwo = (1 * 5) - 2;
console.log(resultTwo);
// Вывод => 3

// Равный приоритет:

resultThree = 5 - 2 - 1;
console.log(resultThree);
// Вывод => 2

// Оператор присваивания

let a = 1 + 2;
// Значение переменной a равно 1 + 2 (3).
let b = 2;
// Значение переменной b равно 2.
let result = 8 - (a = b + 3)

console.log("Результат в скобках: " + a);
// 5
console.log("Общий результат " + result);
// 3

// Присваивание по цепочке

resultOne = resultTwo = resultThree = 1 + 2;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

// Проще -

resultOne = 1 + 2;
resultTwo = resultOne;
resultThree = resultOne;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

// Сокращённая запись вычислений с присваиванием

users = 5;
users = users + 3;
users = users * 2;

// Можно записать так:

users = 5;
console.log(users);
// Вывод => 5

users += 1 + 2;
console.log(users);
// Вывод => 8

// Инкременты & декременты

// Инкремент "++" - увеличивает значение переменной на 1:

let addUser = 2;
addUser++;
console.log(addUser);
// Вывод => 3

// Работает так же как и:
// addUser = addUser + 1;

//Или как:
// addUser +=1;

// Декремент "--" - уменьшает значение переменной на 1:

let removeUser = 2;
removeUser--;
console.log(removeUser);
// Вывод => 1

// Примечания - инкремент & декремент нужно прописывать
// на кончике переменной, и инк./дек. можно применить только
// к переменной. Попытка использовать его на значении вроде
// 5++ приведёт к ошибке синтаксиса.

// Инкременты и декременты можно прописывать как до так и
// после переменной:

// Постфиксная форма -
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
// Вывод => 0
// Вывелось 0 потому, что переменная newUsers получает
// первое значение usersCounter ещё ДО работы оператора.

// Префиксная форма -
usersCounter = 0;
newUsers = ++usersCounter;
console.log(newUsers);
// Вывод => 1
// А вот тут уже вывод 0, потому что сначала сработал
// оператор а затем уже было присвоено значение.

// Итог:
// Если результат оператора не используется, а нужно
// лишь увеличить или уменьшить значение переменной,
// тогда без разницы, какую форму использовать:

usersCounter = 0;
usersCounter++;
console.log(usersCounter);

// Но если нужно увеличить/уменьшить и при этом
// получить значение переменной до увеличения - 
// мы используем постфиксную форму:

usersCounter = 0;
console.log(usersCounter++); // => 0
console.log(usersCounter); // => 1

// Инкремент и декремент можно использовать в любых
// выражениях, при этом их приоритет будет выше
// чем у большинства других арифметических операций:

usersCounter = 0;
newUsers = 2 * ++usersCounter;
console.log(newUsers);
// Вывод => 2 (2 * 1)

// В этом примере сначала выполнится декремент,
// т.е - переменная usersCounter станет равна 1,
// и лишь после этого будет выполнено умножение.

// Более читабельная запись:

usersCounter = 0;
++userCounter; // теперь значение usersCounter равно 1
newUsers = 2 * usersCounter;

console.log(newUsers);
// Вывод => 2 (2 * 1)

// Оператор запятая ,

// Оператор запятой позволяет нам вычислять сразу
// несколько выражений, разделяя их запятой.
// Каждое выражение выполняется, но будет
// возвращён лишь результат последнего выражения.

usersCounter = (8 + 2, 19 + 1);
console.log(usersCounter);
// Вывод => 20
// Был выдан результат последнего выражения (19 + 1).

// Операторы сравнения:

/*

Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b

*/

// Операторы сравнения возвращают логический
// тип данных со значением true (истина) & false (ложь):

console.log(2 > 1);
// Вывод => true

console.log(4 < 2);
// Вывод => false

console.log(58 == 36);
// Вывод => false

console.log(8 != 9)
// Вывод => true

// Присваиваем результат переменной:

result = 11 > 10;
console.log(result);
// Вывод => true

// Сравнение строк

// JS сравнивает строки по алфавитному порядку,
// количеству символов, или регистру.

// Алфавитный порядок:
console.log('Б' > 'А');
// Вывод => true (Б идёт в алфавите после А, она больше)

// Алфавитный порядок:
console.log('Скрипт' > 'Скрипка');
// Вывод => true

// Кол-во символов:

// ПРИМЕЧАНИЕ ПЕРЕД ПРИМЕРОМ!
// Если в строках одинаковый алфав. порядок и ни 1-ая
// и ни 2-ая строка друг друга в алфавите не опережают,
// то JS считает кол-во символов.
// И та строка, в которой будет больше символов - истинна (true).

console.log('Слайдер' > 'Слайд')
// Вывод => true

// Регистр:
// ПРИМЕЧАНИЕ ПЕРЕД ПРИМЕРОМ!
// Регистр в JS имеет значение, причем в JS (а точнее в Юникоде,
// который использует этот язык) маленькие буквы БОЛЬШЕ чем большие.

сonsole.log('Ученик' > 'ученик');
// Вывод => false, ведь слова с маленькой буквы - больше чем с большой.

// Алгоритм сравнения строк прост:

/*

1) Сначала сравниваются первые символы строк.

2) Если 1-ый символ первой строки больше(меньше), чем первый символ
второй, то первая строка больше(меньше) второй. Сравнение заверш.

3) Если первые символы равны, то таким же образом сравниваются уже 
вторые символы строк.

4) Сравнение продолжается, пока не закончится одна из строк.

5) Если обе строки заканчиваются одновременно, то они равны.
Иначе, большей считается более длинная строка.

*/