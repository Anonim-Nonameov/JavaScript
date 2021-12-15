// Повтор изученного

// Переменные: что такое переменная, создание переменной, присваивание значений и т.д.

/*

Что такое переменная?
Переменная это такая себе коробочка с некими данными, которые
мы можем использовать в нашем коде.
Мы можем сохранить в переменную любую информацию, будь то объект,
массив, числа/строки и т.д.

Создание переменной и присваивание ей значения

Создаются переменные при помощи ключевого слова, let (кроме let есть еще var,
но он устарел и не рекомендуется его использовать!):

let (имя_переменной);

Имя переменной может содержать только буквы (лучше латинского алфавита),
цифры и символы "$" и "_". При этом первый символ НЕ должен быть цифрой.

Верное объявление:

let age;
let info123;
let i123nfo;
let $size;
let _color;

Неверное объявление:

let 123info;
let my-age;
let 123-my-age;

Чтобы задать переменной значение, надо с новый строки прописать имя переменной
и поставить знак равно, после этого знака мы уже задаем значение:

let number
number = 45

Или

let string
string = "string"

Но, можно написать ещё короче - после создания переменной мы сразу прописываем
знак равно и присваиваем значение:

let children = "Jordan, Anna"

Такой вариант рекомендуется использовать, так как он короче и легче читается.
Ну правда - не надо переводить глаза на новую строку и печатать лишнее.

Кстати, для лучшей читабельности кода названия переменных должны соответствовать их
значениям, ибо другие люди котоыре будут читать наш код не поймут
для чего нам нужна эта переменная.
И правда - допустим мы хотим положить в коробку книжки, и потом отнести
её на склад. Спустя какое-то время нам они понадобились, и мы зашли в склад.
Там полно других коробок и мы будем читать их названия на наклейках,
которые прикреплены к нашим коробкам, чтобы понять какая коробка
нам нужна. Но мы назвали нашу коробку как-то так - "x1dz38", и как нам
теперь понять, что внутри неё лежит?
Чтобы избежать таких проблем, нужно задавать переменным правильные значения.

И раз уж мы заговорили о том, что надо называть переменные более "открыто",
я думаю что стоит поговорить о стилях наименования переменных.

Да-да, существуют СТИЛИ наименования переменных.
Например, CamelCase - «ГорбатыйРегистр», «ВерблюжийРегистр».
Чаще всего используется в JS, реже в других языках программирования.

Как его использовать? - просто бери и используй :D
А если серьезно - то так:

let MyName = "Jordan"

В этом стиле наименования переменных каждое слово начинается с заглавной буквы:

MyName
MyFatherName
MyFatherAndMotherName
т.д.

Но чаще всего используется стиль lowerCamelCase*, который схож с CamelCase, но
отличается от него тем, что первое слово начинается с маленькой
буквы (в отличие от остальных):

myName
myFatherName
myFatherAndMotherName

* - лично я использую именно этот стиль, он мне больше по душе.

Поэтому, вместо...

let s;
let skfkafasafaoapca;
let leftsidebarsize;

...лучше писать так...

let size;
let age;
let leftSideBarSize

... и учитывать регистр...

let height;
let Height;

...ибо регистр в JS имеет значение, и эти две переменные - разные.

Использование других символов

let яПеременная;

Да, помимо латинских символов можно использовать и буквы/символы из других языков,
но так делать не рекомендуется.

*/

// Повтор изученного

// Массивы: что такое массив, как его создавать, его методы и т.д.

/*

Шо такое массив

Массивы - то же самое что и объекты (надеюсь меня не убьют за такие слова),
в них мы можем хранить различные данные - но управлять ими мы можем намного
гибче, нежели в объектах!

И как его создать, массив этот?

Создаются массивы просто - для начала создаем переменную, готовимся поставить
знак равно (оператор присваивания), и после него ставим квадратные скобки.
Но есть и другой, более длинный способ: после знака равно пишем слово new,
затем Array (с большой буквы), после Array сразу ставим круглые скобки и готово.


Заполняем моссев.. мэссив.. маоссэев.. МАССИВ!

Заполняются они также просто, как и создаются. После квадратных скобок мы пишем
любое значение, будь-то числовое или строковое значение, и ставим запятую.
Т.е так: массив = ["значение", "значение", "значение"]. Всё просто!
Но, после последнего значения обычно ставится "висячая" запятая. Она нужна
для того, чтобы если мы будем перемещать элементы (ставить 3-е значение на
место 1-го, и так далее) не возникало никаких ошибок.

Что можно сохранить в массив?

В массиве могут храниться самые-самые разные типы данных - от простейших
чисел до сложных функций и огромных объектов, вот пример такого массива:

let arr = [
    "Коля",
    {
        type: "JS",
        age: 36,
    },
    true,
    function () {
        console.log("Привет, я Коля");
    }
]

Но и это еще не всё - массивы в массиве.
Да, массив может храниться внутри другого! такие массивы называются многомерными,
их элементы такие же массивы как и они сами:

let matrix = [
    [1, 2 ,3],
    [4, 5, 6],
    [7, 8, 9]
]

Получение значений из мОссева!

Вы не поверите (а может и поверите), но мы можем "получить" значение массива и
делать с ним что-то очень интересное! (или не совсем.. кто знает?)
Чтобы получить значение массива, мы прописываем его имя, ставим квадратные
скобки (без пробелов, сразу после имени) и затем внутри квад. скобок пишем
индекс искомого значения. Что такое индекс? - индекс это что-то вроде "позиции"
в массивах и объектах. Важно знать, что индексы начинаются с 0 (да, не с еди-
ницы, а с нуля)! то есть - у первого элемента массива будет нулевой индекс,
у второго - первый, у третьего - второй и т.д:

let arr = ["one", "two", "three"];
console.log(arr[1]);

Код выше создает массив, а затем выводит в консоль слово "two" (т.к индекс
мы указали первый, а первый индекс это элемент №2).
При попытке получить значение, которое не соответствует ни одному значению -
нам выдаст undefined (логично: undefined = не определено).
Получать значения можно также из многомерных мОссевов:

let matrix = [
    [1, 2 ,3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[0][1])

Код выше создает мм. массив, затем выводит в консоль цифру 2 (потому что
[0] - первый элемент массива, массив с числами от 1 до 3, а [1] - второй
элемент "дочернего" массива у массива matrix (как бы странно это не звучало)).

Узнаем длину массива, э!

Массивы настолько уникальны, что мы можем УЗНАТЬ ИХ ДЛИНУ! (хотя это не делает
их уникальными.. ну и ладно) Для этого обычно используют свойство length.
Использовать его максимааааааально просто - ставишь точку после названия массива
и готово! вот так вот всё делается:

let arr = [1, 2, 3];
console.log(arr.length);

Код выше выдаст нам цифру 5 в консоль, так как элементов в массиве всего пять.
В общем - простое свойство, очень простое. Ничего сложного в использовании нет.

Доступ к массиву

Я напоминаю, что массив = объект и, следовательно, ведет он себя как и объект.
Напримеееееер... копируется по ссылке!

let arr = ["Ваня", "Иштван", "Оля"];

let arrNew = arr;
arrNew.length = 2;

console.log(arr);
=> ["Ваня", "Иштван"]

Код выше вывел нам 2 элемента, хотя в массиве было целых 3. Так произошло потому,
что: во первых - массив arrNew скопировал массив arr, то же самое можно делать и
с массивами, а во вторых- "length.2" как-бы укоротил наш массив до 2 элементов,
удалив самый последний элемент. Лично я не знаю, кому может понадобиться такая
"способность" объектов и массивов, но... но она всё же есть, и её можно как-то
да использовать. Для меня она пока что бесполезна, вот просто бесполезна.
Кстати, по словам Жеки наш массив (arr) не скопировался! фактически мы не ско-
пировали массив, массив остался один и тот же, просто у нас появилось к нему
два разных ключа (arrNew и arr).

Изменение уже существующих значений массива и добавление новых

Мы можем менять существующие значения массива, на абсолютно новые. Была строка,
а щас число! был объект а щас булевое значение! делается это очень простА:
прописываем название массива, после сразу после него (без пробела) ставим
квадратные скобки и индекс того элемента, который мы хотим заменить. Далее
ставим знак равно (то бишь оператор присваивания) и прописывам новое значение.
Вуаля, значение массива изменено, мир спасен! а выглядит это так:

let arr = ["Ваня", "Иштван", "Оля"];
arr[0] = "Коля";

Вот и всё, ничего сложного! а мы тем временем перейдем к добавлению новых
элементов в массив. Если посмотреть, то в массиве выше всего лишь 3 элемента:
"Ваня", "Иштван" и "Оля", а индексов там всего лишь 3, от 0 до 2.
Если мы хотим добавить новый элемент в массив, то нам необходимо сделать
то же самое, что мы бы сделали если бы хотели изменить какой-то элемент.
Т.е - пишем название массива, квадратные скобки и индекс, знак равно и
значение. Но, тут есть одно очень важное правило - индекс должен
быть не существующим. Что это значит? ну допустим, у нас в массиве выше
всего лишь 3 индекса - 0, 1 и 2. Индекс 0 это "Ваня", индекс 1 это "Иштван",
а индекс 2 это "оля"! следовательно, индекса 3 не существует, его то мы и
пишем в квадратных скобках:

arr[3] = "Ваня";
console.log(arr);
=> ["Коля", "Иштван", "Оля", "Ваня"];

Методы массивов

Шо такое метод мы знаем, но мы не знаем что есть методы для массивов!
Перед тем как разбирать методы, стоит поговорить о вариантах применения
для массивов (или не ДЛЯ, а просто о применении массивов).
Первый из вариантов - очередь, или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:

1) Добавление элемента в конец очереди
2) Удаление элемента в начале, сдвигая очередь так, что второй элемент
становится первым, третий - вторым и так далее.

Второй вариант применения для массивов - структура данных, называемая "стек".
Стек, ровно также как и очередь, поддерживает два вида операций:

1) Добавление элементв в конец
2) Удаление последнего элемента.

Ну вот! на последок осталось сказать, что массивы в JS могут работать
и как очередь, и как стек. Мы можем добавлять элементы как в начало,
так и в конец массива, или наоборот - удалять их в начале, или в конце
массива. В этом (добавлении и удалении) нам помогут следующие методы:

1) arr.push() - добавление элемента в конец массива

Метод push способен добавлять любой элемент в конец массива, будь то число,
будь то строка или же вообще объект. Но что еще интересней - мы можем добавлять
в массив НЕСКОЛЬКО элементов!!! делается это очень просто, честное мужское слово:

 Создаем массив
let arr = ["Ваня", "Иштван", "Оля"];

 Обращаемся к массиву, применяем метод
arr.push("Вася", "Катя");

 Выводим массив в консоль
console.log(arr);
=> ["Ваня", "Иштван", "Оля", "Вася", "Катя"]

Метод push удобен тем, что позволяет нам изменить уже существующий массив и не
менять его вручную, но как нам быть если мы захотим УДАЛИТЬ элемент В НАЧАЛЕ,
а не в конце? в таком случае нам понадобится новый метод!

2) arr.shift() - удаляет (а не добавляет) элемент в начале массива, так что второй
эллемент становится первым, третий становится вторым и так далее

Метод shift способен удалить элемент в начале массива... и всё. Не думаю что нужно
как-то детально разъяснять принцип его действия, всё ясно уже из описания. А, да -
при удалении элемента соответственно изменится и длина всего массива (length), а
второй элемент становится первым, третий становится вторым, четвертый становится
третьим и так далее. Использовать его необходимо без передачи аргументов, то есть
просто поставить круглые скобки и всё. Так как мы не добавляем этим методом ни-
каких элементов в массив, используется метод без передачи аргументов :)

 Создаем массив
let arr = ["Ваня", "Иштван", "Оля"];

 Обращаемся к массиву, применяя метод
arr.shift();

 Выводим массив в консоль
console.log(arr);
=> ["Иштван", "Оля"]

Также очень полезный метод, который довольно часто (по словам Жеки) используется
в чистом JavaScript'е и в верстке (понятия не имею, как его применить в верстке).
Это всё хорошо, мы научились добавлять элементы в конец массива и удалять в начале,
но как нам удалить элемент В КОНЦЕ, а не в начале? в этом нам поможет следующий метод!

3) arr.pop(); - удаляет последний элемент в массиве

Объяснять работу метода - не нужно. Он работает точно также как и shift, отличия лишь
в том, что элементы массива остаются на месте, а не сдвигаются. Т.е первый элемент
останется первым, второй останется вторым и так далее, изменится только длина массива.
Применять метод нужно также без передачи аргументов.

 Создаем массив
let arr = ["Ваня", "Иштван", "Оля"];

 Обращаемся к массиву, применяя метод
arr.pop();

Выводим массив в консоль
console.log(arr);
=> ["Ваня", "Иштван"]

Ничего интересного, простое удаление последнего элемента массива.
А что если нам нужно добавить элемент, или несколько элементов в начало массива?
В этом нам также поможет следующий метод!

4) arr.unshift(); - добавляет элемент(ы) в начало массива

Этот метод похож на push, отличие лишь в том, что он добавляет элементы В НАЧАЛО,
а не в конец, как push. Использвать его нужно также, как и push - в круглые скобки
вписываем те элементы, которые хотим отправить в массив.

 Создаем массив
let arr = ["Ваня", "Иштван", "Оля"];

 Обращаемся к массиву, применяя метод
arr.unshift("Вася, Катя");

 Выводим массив в консоль
console.log(arr);
=> ["Вася", "Катя", "Ваня", "Иштван", "Оля"]

Вот и всё. С методами мы покончили! Но осталось еще кое что, что мы должны знать.
А знать мы должны то, что shift и unshift - медлительны, а push и pop - быстры.
Давайте разбираться.

Жажда скорости: метод = машина

Все мы знаем, что есть два типа машин: быстрые и не быстрые. Быстрыми зачастую
оказываются гоночные машины, т.к они заднеприводные, но бывают и исключения.. но
сейчас не об этом, не о машинах мы будем говорить (точнее - не о машинах буду писать).
Всё дело в том, что push и pop быстрее, чем shift и unshift.

Почему? а щас расскажу! рассмотрим эту тему на примере добавления элемента в начало
массива (unshift) - просто взять и добавить элемент с индексом "0" в начало массива
не достаточно, здесь всё делается по другому:

Операция unshift выполняет сразу 3 действия:
1) Добавить элемент с индексом "0" в начало массива
2) Сдвинуть все элементы вправо, затем заново пронумеровать их, заменив 0 на 1, 1
на 2, 2 на 3 и так далее.
3) Полностью обновить свойство length.

А теперь подумайте - что если добавляемых элементов очень много, а массив содержит
в себе и без того не малое количество элементов? а это всё надо добавлять, нумеровать
заново, проверить и обновить свойство length.. кошмар! в этом и вся соль: чем больше
хранит в себе элементов массив, тем больше времени потребуется для того, чтобы их
переместить. Это, в свою очередь, значит, что понадобится больше операций с памятью!
А вот чтобы добавить элемент в конец массива (push) не нужно ничего перемещать и
заново нумеровать, достаточно увеличить значение свойства length на количество
добавляемых элементов в массив. То же самое и с pop - просто удаляешь элемент в
конце массива, нужно просто изменить свойство length! ничего сложного, правда? :)

Удаление, добавление и изменение конкретных элементов

Мы с вами уже знаем как добавлиять, удалять элементы в начале и конце массива,
но мы не можем делать то же самое С КОНКРЕТНЫМИ ЭЛЕМЕНТАМИ. Т.е - мы не знаем
как добавить (или удалить) элемент в середину(не) массива, или как его изменить,
например. Но это всё не проблема! совсем скоро мы станем гуру по управлению
массивами, и сможем делать с ними всё (почти) что захотим! начнем с директивы
delete, из уроков про объекты. Если вы еще не забыли, то директива delete в
буквальном смысле СТИРАЕТ элемент в объекте. Но так как у массивов и объектов
есть много чего общего (они дальние родственники, так сказать), эта директива
работает не только с объектами - она работает и с массивами! пример:

let arr = ["Ваня", "Иштван", "Оля"];
delete arr[1];

console.log(arr);
=> ["Ваня", empty, "Оля"]
console.log(arr[1]);
=> undefined
console.log(arr.length);
=> 3

И так. Что же произошло? ну.. элемент номер 1 (тот что по середине) удалился,
но... но его заменил другой элемент! как так? на самом деле этого элемента НЕТ,
но он ЕСТЬ. Звучит странно, но оно так. Если мы возьмем и выведем в консоль сам
массив, то мы можем заметить надпись "empty", а если мы возьмем и выведем в
консоль этот элемент - окажется что его нет! нам выдаст "undefined". Если же
мы возьмем и проверим ДЛИНУ массива, то окажется что внутри него 3 элемента,
то есть нам выдаст цифру 3. Корочеее... странные вещи с delete'ом происходят.

Метод splice.

Так как директива delete работает.. мягко говоря, странно, мы должны изучить
другие методы по добавлению/удалению/изменению элементов. Первым методом
будет splice, который способен заменить ВСЕ другие методы. Дело в том, что
благодаря нему мы можем и удалять, добавлять и изменять элементы в массиве!

Синтаксис прост: arr.splice(index[, deleteCount, elem1, ... elemN])

Первым делом, в круглых скобках указываем индекс элемента в массиве, дальше
мы записываем индекс элемента, до которого будет идти удаление, добавление
или изменение. Третий аргумент можно и не добавлять: это элемент или элементы,
которые мы будем добавлять в массив или заменять ими другие.
Вот все примеры использования метода splice:

 1) - удаление элемента
let arr = ["Ваня", "Иштван", "Оля"];
arr.splice(1, 1);
console.log(arr);
=> ["Ваня", "Оля"]

 2) - "перенос" элемента в другую переменную
let arr = ["Ваня", "Иштван", "Оля"];
let removedElement = arr.splice(1, 1);
console.log(removedElement, arr);
=> ["Иштван"],
   ["Ваня", "Оля"]

 3) - замена элемента
let arr = ["Ваня", "Иштван", "Оля"];
arr.spice(0, 1, "Коля");
console.log(arr);
=> ["Коля", "Иштван", "Оля"]

 4) - добавление элемента
let arr = ["Ваня", "Иштван", "Оля"]
arr.splice(1, 0, "Коля", "Маша");
console.log(arr);
=> ["Ваня", "Коля", "Маша", "Иштван", "Оля"]

 5) - удаление элемента (с конца)
let arr = ["Ваня", "Иштван", "Оля"]
arr.splice(-1, 1);
console.log(arr);

И так, сейчас я объясню, что и где произошло:

1) - Мы создаем массив из 3-ех элементов, затем обращаемся к нему и говорим 
splice'у, что начиная с первой позиции, то есть с позиции где стоит Иштван,
удалить один элемент. То есть первая цифра это та позиция откуда мы стартуем, а
вторая цифра это количество удаляемых элементов, в нашем случае это 1 элемент.

2) - Мы создаем массив из 3-ех элементов, затем создаем переменную removed,
а её значением назначаем элемент "Иштван" из массива arr. То есть мы взяли и
вытащили элемент из массива при помощи splice и вернули его в другой (да, именно
В ДРУГОЙ массив, пушто при переносе элемента из массива в переменную создается
новый массив, в котором хранится всего лишь ОДИН элемент)

3) - Мы создаем массив из 3-ех элементов, затем обращаемся к нему и говорим
splice'у, что начиная с нулевой позиции, то есть с позиции где стоит Ваня,
заменить один элемент на "Коля". То есть мы первый элемент заменили на другой.

4) - Мы создаем массив из 3-ех элементов, затем обращаемся к нему и говорим
splice'у, что начиная с первой позиции, то есть с позиции ПЕРЕД Иштваном, то
есть перед первой позицией, добавить два элемента - "Коля" и "Маша". Важно
отметить, что после цифры где мы указываем позицию, стоит 0. 0 означает, что мы
именно ДОБАВЛЯЕМ, а не удаляем и не изменяем элементы. А еще надо знать, что при
указывания позиции во время добавления элементов, элементы будут ставиться ПЕРЕД
элементом с указанной позицией. То есть, если бы мы указали позицию не 1 а 2, то
эти два элемента ("Коля" и "Маша") добавились бы перед элементом Оля.

5 - Мы создаем массив из 3-ех элементов затем обращаемся к нему и говорим
splice'у, что начиная с минус первой (-1) позиции, то есть с позиции где стоит
элемент Оля, удалить один элемент. То есть мы удаляем элемент Оля, указав при
этом отрицательную позицию. -1 это то, что идет ДО 0, а 0 это "Ваня", а это в
свою очередь значит, что -1 это Оля. Как-то як :)

Метод слис.. слус.. слийс.. slice!

Мы уже выяснили ранее, что продублировать массив, сделав его копию - не так то
уж и просто! но в этом нам помогут методы, которые мы будем изучать дальше.
Первый подобный метод - slice. Он создает новый, отдельный массив, в который
копирует либо часть, либо весь массив-исходник. Синтаксис у него маааксимально
прост: arr.slice([start], [end]). То есть мы берем массив, указываем стартовую
позицию и затем указываем конечную позицию, т.е ту, где "вырезка" должна остано-
виться. Что интересно, элемент на конечной позиции НЕ БУДЕТ включен в новый мас-
сив, А вот вам примеры использования этого метода:

1:
 Вырезаем элемент "Иштван" из массива arr в arrTwo

let arr = ["Ваня", "Иштван", "Оля"];
let arrTwo  = arr.slice(1, 2);
console.log(arrTwo);
=> ["Иштван"]

2:
 Вырезаем элемент "Иштван" из массива arr в arrTwo, используя отрицательные позиции

let arr = ["Ваня", "Иштван", "Оля"];
let arrTwo = arr.slice(-2, -1);
console.log(arrTwo);
=> ["Иштван"]

3:
 Вырезаем ВЕСЬ массив arr в массив arrTwo

let arr = ["Ваня", "Иштван", "Оля"];
let arrTwo = arr.slice();
console.log(arrTwo);
=> ["Ваня", "Иштван", "Оля"]

А теперь объяснялка, что и где произошло:

1) - Создали трех-элементный массив, затем другой массив, а в качестве значения
обратились к первому массиву и начали вырезать элементы начиная с первой позиции
и заканчивая второй, при этом не включая вторую.

2) - Сделали всё то же самое, что и в варианте №1, только начали мы с позиции -2,
а это позиция "Иштвана". Всё потому, что нулевая позиция - это позиция "Вани", -1
это позиция "Оли" (т.к -1 идет ДО 0, т.е до "Вани", до "Вани" идет только "Оля").

3 - Сделали всё то же самое, что и в вариантах №1 и №2, только мы не указали ника-
ких позиций - это значит, что вырезаться будет ВЕСЬ массив.

Идем дальше - concat!

Метод concat создает новый массив, в который копирует данные из других массивов
и также дополнительные значения (в конец массива). То есть это не просто "плаги-
атор", он может добавить еще что-то и от себя! а теперь о синтаксисе: он у него
максимаааально простой - в круглых скобках мы только передаем те элементы, кото-
рые хотим сохранить в массив дополнительно. Т.е там будут передаваться те самые
элементы, которые concat может добавить "от себя". А теперь пример использования:

let arr = ["Ваня", "Иштван", "Оля"];
let arrTwo = arr.concat("Петя");
console.log(arrTwo);
=> (4) ["Ваня", "Иштван", "Оля", "Петя"]

Ну вот, все точно также как я и говорил (писал) - concat всё таки добавил другой
элемент в массив. Хороший парень этот concat, доказал что не плагиатор.

Поиск в массиве

Теперь мы рассмотрим ряд методов, которые помогут нам в массиве ЧТО НИБУДЬ НАЙТИ!
Да-да, мы может ИСКАТЬ элементы в массивах! здорово, не так ли? а начнем мы с
двух методов - indexOf и includes. На самом деле эти методы применимы не только
к массивам, но и к строкам. Об этом можно прочитать в документации MDN, если
вам, конечно, не лень. А теперь к делу! -

1) - arr.indexOf(item, from) - indexOf ищет нечто, начиная с такой-то позиции.
Аргумент item - сам элемент (да неужели..), это понятно; аргумент from - индекс
с которого будет проводиться поиск. При этом второй аргумент (from) не обязателен.
Результатом работы метода будет позиция, на которой будет найден искомый элемент,
если же ничего не было найдено, просто выдается число "-1".

2) - arr.lastIndexOf(item, from) - lastIndexOf аналог методу indexOf, только ищет
он не слева направо, а наоборот - справа налево.

3) - arr.includes(item, from) - includes ищет нечто, начиная с такой-то позиции,
ровно также как метод indexOf. А вообще, у них даже аргументы одинаковы - передаем
сначала элемент, а потом и его позицию, причем позицию передавать не обязательно.
Ключевое различие в том, что includes возвращает true, а не индекс элемента. То
же самое касается и "-1" - вместо него мы получим false.

А теперь примеры использований методов! lastIndexOf показывать не будем, так как
он, повторюсь, аналог indexOf -

let arr = ["Ваня", "Иштван", "Оля"];

1) - indexOf

console.log(arr.indexOf("Иштван")); => 1
console.log(arr.indexOf("Вася")); => -1
console.log(arr.indexOf("Иштван", 2)); => -1

2) - includes

console.log(arr.includes("Иштван")); => true
console.log(arr.includes("Вася")); => false
console.log(arr.includes("Иштван", 2)); => false

Ну.. здесь нечего объяснять, всё и так понятно. indexOf как и положено, дал нам
индекс элемента, который таки нашел. includes же дал нам true, что тоже хорошо.

А мы идем дальше -  find и findIndex!

В случае, элементы массива являются объектами, нам на помощь придут методы find
и findIndex. Собственно, эти методы обеспечивают поиск в массиве объектов С
ОПРЕДЕЛЕННЫМ УСЛОВИЕМ, и возвращают элемент, первый попавшийся, который удовлетво-
рит данному условию. Синтаксис довольно сложный, но со всем мы разберемся! нам
не в первой, не через такие заросли проходили:

- Syntax
let result = arr.find(function(item, index, array) {
    => Если true - возращается текущий элемент и перебор прерывается
    => Если все итерации оказались ложными, возвращается undefined
})

На самом деле ни чуть легче не стало, но не суть. Легче станет, когда мы начнем
изучать примеры использования методов! а начнем мы прямо сейчас:

let arr = [
    { name: "Вася", age: 36 },
    { name: "Коля", age: 18 },
    { name: "Оля",  age: "Не скажу" },
]

let result = arr.find(function(item, index, array) {
    return item.age === 18;
});

console.log(result);
=> {name: "Коля", age: 18}

И так.. сейчас объясню, что и где и как произошло. У нас есть массив arr, который
состоит из объектов, а объекты состоят из пар name и age. Значит так, дальше у
нас идет другая переменная, которую мы создаем, называется она просто - result!
так-то всё логично, в неё будет сохранён результат выполнения метода find. Но
что я ей присваиваю? а присваиваю я ей массив объектов, ставлю точку и прописываю
слово "find", то бишь название метода и ставлю круглые скобки. Внутри находится
большааая такая функция, которая будет выполняться для каждого элемента массива.
Аргументами этой функции являются три элемента: item, index и array. item это сам
элемент массива, index это его ключ (позиция), а что такое array, я думаю, вы уже
догадались :) Итак, идем дальше. В теле функции я хочу, чтобы мне возвращались
все те элементы, у которых есть свойство age соо значением 18. Такого можно легко
достичь используя return, затем прописав item и поставив точку написать слово
age, а уже после age мы ставим оператор строгого равенства (===) и после него
число 18. Таким образом, нам будут возвращены ВСЕ элементы (ну, объекты) со свой-
-ством age, которые равны 18-ти. :) А уже после всего этого мы выводим в консоль
всю нашу переменную result, и получаем массив с двумя свойствами: name и age, у
которых значения "Коля" и 18 соответственно.

Повторяю: для каждого элемента в нашем массиве срабатывает специальная функция,
причем К ЧЕМУ, а если быть точнее НА ЧЕМ она будет применяться решать исключитель-
-но нам. Мы можем применить её к элементам (item), позиции элемента (index), к са-
-мому массиву (array). Но самое важное это то, что происходит в теле функции - мы
буквально "возвращаем" те элементы, у которых есть свойство age и его ключ это 18.

find - а можно короче?

Всё то, что мы проделали выше, можно сократить с помощью стрелочной функции.
Получится "изящно", так сказать :D -

let arr = [
    { name: "Вася", age: 36 },
    { name: "Коля", age: 18 },
    { name: "Оля",  age: "Не скажу" },
]

let result = arr.find(item => item.age === 18);
console.log(result)
=> {name: "Коля", age: 18}

А мы идем дальше - метод findIndex работает точно также как и его старший брат (а
именно find), но отличается он тем, что возвращает ИНДЕКС элемента, а не элемент.
Например:

let arr = [
    { name: "Вася", age: 36 },
    { name: "Коля", age: 18 },
    { name: "Оля",  age: "Не скажу" },
]

let result = arr.findIndex(item => item.age === 18);
console.log(result);
=> 1

И да, забыл - этот метод можно также "сократить" при помощи стрел. функции, как и
предыдущий метод find.

Метод filter!

Встречайте - метод filter. Он ну уж очень похож на метод find и findIndex, но
отличия всё же есть: он не прекращает свою работу в тот момент, когда удовлетво-
-рено указанное условие, а продолжает её. И, соответственно, возвращает массив
из ВСЕХ (ну, абсолютно всех) элементов, удовлетворяющих нашему условию.
Посмотрим на примере:

let arr = [
    { name: "Вася", age: 36 },
    { name: "Коля", age: 18 },
    { name: "Оля",  age: "Не скажу" },
]

let result = arr.filter(function(item, index, array) {
    return item.age >= 18;
});

console.log(result);
=> (2) [{...}, {...}]

Что же произошло? мы создали массив из объектов, далее мы создали переменную
result, в которой будет хранится результат выполнения метода filter, а в качестве
значения постановили следующее: массив объектов arr, ставлю точку и прописываю
название метода, внутри же неё находится та же самая функция, что и в find с
findIndex, причем она не отличается - аргументы всё те же самые. Так вот, что
же в теле функции? а в теле функции у нас return, но с другим условием! - я хочу,
чтобы мне возвращались элементы, у которых есть свойство age и оно БОЛЬШЕ, или же
РАВНО числу 18. Дальше мы вызываем эту переменную в консоль и получаем массив из
двух элементов, всё правильно! причем его можно точно также сокращать при помощи
простых стрелочных функций (а я ж говорил, что метод похож на предыдущие!):

let arr = [
    { name: "Вася", age: 36 },
    { name: "Коля", age: 18 },
    { name: "Оля",  age: "Не скажу" },
]

let result = arr.filter(item => item.age >= 18);
console.log(result);
=> 2 [{...}, {...}]

Сортировка массивов - разложим всё по полочкам?

Настал тот момент, когда я расскажу про методы сортировки массивов. Первый и
главный из методов сортировки - sort. Синтаксис его написания прост: arr.sort(fn).
Разберемся с ним на примерах!

1) Сортировка слов
let arr = ["Иштван", "Ваня", "Оля"]
console.log(arr.sort());
=> (3) ["Ваня", "Иштван", "Оля"]

2) Сортировка чисел
let arr = [8, 22, 1];
console.log(arr.sort());
=> (3) [1, 22, 8]

Итак, объясняю: в первом случае мы создали массив с некими словами, а далее мы
просто взяли и вывели в консоль результат работы метода sort с массивом arr.
В результате нам выдало массив, в котором элем. отсортировались по алфавитному
порядку. Во втором случае мы точно таким же образом создали массив, но вот его
мы заполнили числами, а не словами. Дальше мы выводим в консоль результат работы
метода sort с массивом arr. В результате нам выдало массив, в котором на первый
взгляд элементы отсортированы... неправильно. Нам выдало массив с числами, кото-
-рые расположены в следующем порядке: 1, 22, 8; А изначально в массиве числа были
расположены следующим образом: 8, 22, 1; Так в чем же дело и почему метод отсор-
-тировал элементы некорректно? на самом деле всё правильно, просто по умолчанию
элементы сортируются как СТРОКИ, а строки сортируются в лексикографическом по-
-рядке. И действительно выходит, что "8 > 22". Это можно легко проверить:

console.log("8" > "22");
=> true

Вот и всё! но как нам быть? как правильно отсортировать этот массив? в этом нам
поможет наша собственная функция сортировки! я напишу весь код, затем объясню
работу этой функции:

let arr = [8, 22, 1];
console.log(arr.sort());
=> (3) [1, 22, 8]

 Функция сортировки
function compareNumeric(a, b) {
    console.log(`Сравниваем ${a} и ${b}`);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log(arr.sort(compareNumeric))

Итак, объясняю: во первых, при вызове метода sort в круглых скобках можно задать
СВОЮ функцию, которая будет учитываться при сортировке массива. Такая функция
у нас уже есть, и в неё я получаю 2 аргумента - a и b. Но мы зайдем с конца -
первым делом я создаю всё тот же массив и пытаюсь его отсортировать, это у меня
получается, но элементы в нём отсортированы некорректно (корректно, если сорти-
-ровать через лексикографический порядок). А дальше я создаю функцию, но что там,
внутри, происходит? дело в том, что алгоритм внурти функции решает что больше -
a или b, и в зависимости от того возвращается положительное число или отри-
-цательное. Внутри функции подробно расписано, что же должно происходить: если
a больше b возвращается единица (положительное число), если a равен b возвра-
-щается 0, если a меньше b возвращается отриц. число 1. И в момент когда эти
числа сравниваются, устанавливаются позиции элементов в массиве...

Так.. продолжим чуть позже!)

*/