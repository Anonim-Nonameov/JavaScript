/*
"Как использовать массивы?" или "Эй-эй-эй - используй массив как массив!"

Настало время опрокинуть несколько слов о том, как правильно и эффетивно исполь-
-зовать массивы! в первую очередь следует отметить то, что массив является объектом
и ведет он себя как объект. Мы уже знаем, что при проверке оператором typeof нам
выдаст "object", поскольку, опять же массив - объект, и что мы можем добавить не-
-числовое свойство. То есть обратиться к массиву, но не ставить квадратные скобки
и вписывать внутрь индекс - мы сразу можем написать некое имя свойства, ключ, а
присвоить ему значение:

 Оператор typeof вернет object по отношению к массиву
let arr = ["Ваня", "Иштван", "Оля"];
console.log(typeof arr);
=> object

---
 Добавление нечислового свойства
arr.name = "Коля"
console.log(arr);
=> (3) ["Ваня", "Иштван", "Оля", name: "Коля"]

Всё это мы уже знаем и это прекрасно! но самая главная особенность массивов - это
их внутреннее представление! движок JavaScript старается хранить элементы массива
в непрерывной области памяти, один за другим. Нет, существуют и другие способы
оптимизации, благодаря которым массивы работают очень быстро, но это - один из
самых лучших (понятия не имею почему, так было сказано :D). Но тем не менее, все
эти способы утратят всю свою эффективность, если мы перестанем работать с массивом
как с массивом, т.е как с упорядоченной коллекцией данных и начнём использовать
его как самый обычный объект. Именно поэтому массив надо использовать как массив!

Вот несколько вариантов НЕПРАВИЛЬНОГО применения массива:

1) - Добавление нечислового свойства (не по индексу), например: arr.test = 5

2) - Создание так называемых "дыр" в массиве, например: arr[0] = "Text" и затем
arr[5] = "Text two". После этого в массиве на месте пропущенных индексов повятся
другие элементы - undefined. Так делать крайне не рекомендуется!

3) - Заполнение массива в обратном, реверсном порядке, например: arr[10] = "Text",
arr[9] = "Text two" и так далее (а так вообще кто-то делает?)

Все эти действия приведут к замедлению массивов, так что вот.

Домашка!!!

1) - Изучить теорию
2) - Решить задачи:

Задача №1 - какое число (длину) мы получим?

let arr = ["Ваня", "Иштван", "Оля"];
let newArr = arr;
newArr.push("Петя");
console.log(arr.length);

Ответ: 4, поскольку newArr является ссылкой на тот же массив arr и его изменение
приведет к изменению общего массива

Задача №2:
Создайте массив users с элементами "Ваня" и "Иштван", затем добавьте "Оля" в конец.
Замените значение "Иштван" на "Петя", и при всём этом ваш код для поиска значения
должен работать для массивов С ЛЮБОЙ ДЛИНОЙ. После этого удалите первый элемент и
покажите его, выведя в консоль. А напоследок - вставьте "Маша" и "Паша" в начало
массива.

Ответ:

- Создал массив с "Ваня" и "Иштван"
let users = ["Ваня", "Иштван"];
- Добавил "Оля" в конец
users.push("Оля");
- Заменил "Иштван" на "Петя" (код для поиска значения не идеален..)
users.splice(1, 1, "Петя");
- Удалил первый элемент, сохранив его в переменную
let deletedUser = users.slice(0, 1);
- Вывел его в консоль
console.log(deletedUser)
- Добавил "Маша" и "Паша" в начало массива
users.unshift("Маша", "Паша");
- Вывел в консоль ВЕСЬ массив
console.log(users);


Повтор изученного

Условия: как создавать условия, что за "условный оператор" и как его использовать и т.д

Условия: if и его синтаксис

Итак, в прошлых уроках мы практиковались и научились выполнять некие задачи,
но что если выполнение какого-то кода требуется только при определенном условии?
Тогда нам на помощь придёт инструкция if, а помогут ей оператор "вопросительный
знак" и блок else. О них сегодня и поговорим, но начнём с легкого примера, где
мы разберем синтаксис инструкции if:

let message = "Приветствую вас!";

if (2 > 1) {
    (код выполнится только если выражение в скобках вернет true)
    console.log(message);
}

=> "Приветствую вас!"

Итак, у нас есть переменная message, которая содержит в себе строку "Приветствую
вас!", и мы хотим выводить эту переменную в консоль только если выполнится какое
нибудь определенное условие, для этого ниже мы прописали ключевое слово if и уже
рядом с ним поставили круглые скобки, и в круглых скобках прописывается какое-то
некое условие, а дальше идут фигурные скобки. Так вот - код, который находится
внутри фигурных скобок, выполнится только тогда, когда условие внутри круглых
скобок вернёт true, то есть "истина". В данном случае условие такое: "два больше
чем один", и это истина, ведь 2 действительно больше чем 1! в итоге код внутри
фигурных скобок срабатывает и в консоль выводится переменная со своей строкой :)
Однако, если мы вдруг нарушим условие, что находится внутри фигурных скобок, то
наш код внутри фигурных скобок НЕ ВЫПОЛНИТСЯ.

if - переменные в качестве операндов условия

Кстати, в качестве операндов в условии можно использовать переменные, заранее
присвоив им какие-то определенные значения, например:

let message = "Приветствую вас!";
let first = 5;
let second = 10;

if (first === second) {
    console.log(message);
}

В коде выше мы просто взяли и объявили три переменные: message, first и second,
присвоив каждой из них строку, числа 5 и 10 соответственно. Однако, условие у нас
стоит следующее: "переменная first СТРОГО равна переменной second". Если посмо-
треть на значения второй и третьей переменных то мы заметим, что у first значение
5, а у second 10! по итогу наш код внутри фигурных скобок никак не выполнится,
поскольку условие ЛОЖНОЕ и 5 никак не равно 10-ти. Но стоит нам заменить значение
переменной second на такое же, как и у first, так у нас сразу же сработает код в
фигурных скобках:

let message = "Приветствую вас!";
let first = 5;
let second = 5;

if (first === second) {
    console.log(message);
}

=> "Приветствую вас!"

Готово! в результате у нас в консоли появляется строка "Приветствую вас!".

if - сложные условия

Еще стоит добавить, что условие может быть самой разной сложности и можно даже
использовать что-то такое:

let message = "Приветствую вас!";

if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
    console.log(message);
}

=> "Приветствую вас!"

Выше у нас используются операторы "И" а также "ИЛИ", всё это дело проверяется и
в итоге получаем в консоли строку "Приветствую вас" (еще раз) - вот такие пироги!

if - преобразования других типов в условиях

Также следует добавить, что раз уж условие возвращает либо true либо false, то
внутри выражение внутри круглых скобок ПРЕОБРАЗУЕТСЯ в другой тип данных - булевый,
если он не был им изначально. Посмотрим на пример:

let message = "Приветствую вас!";

if ("") {
    console.log(message);
}

Пустые кавычки берут и преобразуются в булевый тип данных, а мы знаем, что кавычки,
которые внутри себя ничего не содержат - возвращают false! поэтому код внутри
фигурных скобок не выполнится, но стоит нам добавить хотя-бы пробел внутрь кавычек,
как наш код сразу же срабатывает, потому что кавычки уже не пустые и, собственно,
возвращают true:

let message = "Приветствую вас!";

if (" ") {
    console.log(message);
}

=> "Приветствую вас!"

Прекрасно! код выше срабатывает и у нас в консоли (снова c:) появляется строка
"Приветствую вас!". Также, помимо простых кавычек могут быть цифры: либо ноль
либо единица. Ноль, как мы уже знаем, возвращает false, а 1 возвращает true:

- Код не сработает
let message = "Приветствую вас!";

if (0) {
    console.log(message);
}

- Код сработает
let message = "Приветствую вас!";

if (1) {
    console.log(message);
}

=> "Приветствую вас!"

if - короткая запись

Преобразование типов в условиях и использование переменных в качестве операндов..
всё это очень интересно, но надо идти дальше. Иногда бывает такое, что при каком-
-то определенном условии нам надо выполнить всего лишь одну инструкцию. Нам,
чтобы выполнить код при каком-то условии, приходится прописывать блок if со
всеми круглыми скобками, фигурными скобками и так далее.. но мы можем сократить
такой код! если нам действительно необходимо выполнить лишь одну инструкцию,
мы можем не вставлять фигурные скобки и вместо них прописать само действие:

let message = "Приветствую вас!";
if (2 > 1) console.log(message);
=> "Приветствую вас!"

Код выше сработает лишь в том случае, если 2 меньше чем 1, и если 2 действительно
меньше чем 1, мы выводим в консоль строку, находящуюся в переменной message.
Повторю - работает такая хитрость лишь с ОДНОЙ инструкцией, записанной в одну
строчку с самим ключевым словом if! во всех других случаях рекомендуется исполь-
-зовать стандартную запись.

Условия: else/else if

else - применение и синтаксис

Итак, мы выяснили, что если условие внутри круглых скобок возвращает true, то
код внутри фигурных скобок БУДЕТ выполняться. Но, если условие внутри круглых
скобок возвращает false, то код внутри фигурных скобок НЕ БУДЕТ выполняться.
Так вот - как раз эту ситуацию, когда наш код не работает из-за ложного условия,
мы можем использовать для выполнения некого другого кода, и в этом нам поможет
необязательный блок else! как его использовать? всё очень-очень просто: после
закрывающей фигурной скобки мы прописываем слово "else", но круглые скобки мы
НЕ ставим! почему? потому, что у блока else просто нет условий для выполнения,
ибо это "запасной выход" из горящего здания - если код в if не сработал, то
сработает код в else. Ставим фигурные скобки и раскрываем их, а внутри просто
выводим в консоль какую-то строку:

let message = "Приветствую вас!";
let number = 5;

if (number > 1) {
    console.log(message);
}  else {
    console.log("Условие не выполнено :(");
}

=> "Приветствую вас!"

Сейчас код выполняется и всё работает - 5 больше чем 1, поэтому условие в
круглых скобках возвращает true. Но что, если оно вернет false? сделаем так:

let message = "Приветствую вас!";
let number = 5;

if (number > 10) {
    console.log(message);
}  else {
    console.log("Условие не выполнено :(");
}

=> "Условие не выполнено :("

В таком случае, мы получим в консоли строку "Условие не выполнено :(", поскольку
5 не больше 10-ти, оно меньше! вообще, объяснить весь наш код можно следующим
образом: если 5 больше 10-ти, то выводим строку в консоль "Приветствую вас!",
которая находится в переменной message. Если же нет, если 5 МЕНЬШЕ 10-ти - тогда
выводим в консоль строку "Условие не выполнено :(". Идём дальше!

else if - применение и синтаксис

Следующее, о чём мы будем говорить - это конструкция else if. Иногда бывает так,
что нам нужно проверить сразу несколько условий, и в этом нам поможет как раз-таки
эта конструкция. Посмотрим на пример:

let number = 5;

if (number > 50) {
    console.log("5 больше 50");
} else if (number > 30) {
    console.log("5 больше 30");
} else if (number > 10) {
    console.log("5 больше 10");
} else if (number > 1) {
    console.log("5 больше 1");
} else {
    console.log("Условие не выполнено :(")
}

=> "5 больше 1"

М-да.. код получился огромным. Но не волнуйтесь, сейчас я объясню, что весь этот
код значит: у нас есть переменная number, ей присвоено числовое значение 5, далее
у нас идёт условие: если 5 больше 50-ти, то в консоль выводится строка "5 больше
50". В случае, если условие вернет false, а оно вернет false в любом случае, то
мы переходим к следующему, другому условию, что если 5 больше 30-ти, то в консоль
выводится строка "5 больше 30". Если условие также вернёт false, то мы переходим
к следующему условию, где проверяется, большие ли 5 чем 10 - если да, то в нашу
консоль будет выводится строка "5 больше 10", но если у нас и это условие вернуло
false, то мы переходим к последнему, которое говорит, что 5 больше чем 1. Если
это правда, то в консоль выводится строка "5 больше 1" - и это правда! в конечном
результате мы получаем в консоли эту же строку. Но, если у нас и ЭТО условие не
сработает и вернёт false, то тут в игру вступает конструкция else, которая будет
выводить в консоль строку "Условие не выполнено :(".

А на этом всё! остальное - позже)
*/