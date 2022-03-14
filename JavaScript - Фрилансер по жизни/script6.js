// Стили и классы: общая заметка-памятка

// Итак, с практикой и теорией управления классами и стилями элемента мы с вами
// разобрались и уже знаем, как менять классы/стили у элемента, теперь настало
// время сделать общую заметку, в которой я вкратце расскажу о том, что и в
// каких случаях НАДО использовать, а что НЕ НАДО использовать. Начнём с того,
// что мы уже поняли, что из JS мы можем управлять как классами, так и стилями
// объекта, так вот - управление классами наиболее приоритетный вариант, по срав-
// -нению с управлением стилями.

// Манипулировать свойством style надо лишь тогда, когда классы нам помочь ну никак
// не могут. Например, при изменении координатов объекта "на лету".

// Одним словом, если есть возможность возложить решение на плечи CSS, путем
// манипуляции классами - так и следует сделать.

// Атрибуты и свойства

// Чудесно, со стилями и классами мы наконец-то разобрались, теперь мы можем ими
// управлять так, как хотим и никто нам в этом не помешает, а теперь пришла пора
// научиться управлять свойствами и атрибутами DOM-элементов!

// Начнём мы с того, что у разных DOM-элементов могут быть разные СВОЙСТВА. Ну
// например, у тега <a> есть свойства, связанные со ссылками, а у тега <input> -
// свойства, связанные с полем ввода и так далее. Более того - в HTML, у тегов
// могут быть АТРИБУТЫ, и когда браузер "парсит" наш HTML-код (то есть разбирает
// его), чтобы создать DOM-объекты для тегов, он распознаёт стандартные атрибуты
// и создаёт DOM-свойства для них. Также следует отметить, что каждый DOM-узел
// принадлежит соответствующему ему встроенному классу. А теперь к делу!
// Чтобы понять, как всё устроено, посмотрим на пример:

let link = document.querySelector('.lesson__link');
let input = document.querySelector('.lesson__input');

console.log(link.href);
// => https://youtube.com/
console.log(input.href);
// => undefined


// В HTML у нас есть два новых элемента, которые я добавил в связи с тем, что
// именно они потогут нам "войти в тему свойств и атрибутов". В примере выше
// мы создаём две переменные, link и input, в каждую из них мы помещаем те
// два элемента, которые я создал - ссылка это link, и инпут это соответственно
// input. Отлично, и как я уже выше написал, у них могут быть свои специфические
// свойства. Например, у ссылки есть своё свойство href, при вызове которого
// мы можем получить значение одноимённого атрибута, а именно - адрес ссылки,
// его мы и получили в консоли. Но, это свойство присуще только ссылке, у
// других элементов его нет, пример выше это и доказывает: в примере выше
// мы вывели в консоль значение атрибута href, который "есть" у элемента input.
// Но мы же знаем, что такого атрибута у инпута нет и быть не может! поэтому в
// консоли мы получили undefined. А вот у инпута есть своё специфическое свойство,
// value, которое возвращает значение, хранимое в атрибуте value элемента:

console.log(input.value);
// => "Я инпут"
console.log(link.value);
// => undefined

// В итоге в консоль мы получаем два значения: первое значение это строка "Я
// инпут", и эта строка является значением атрибута value элемента input.
// Второе же значение это undefined, которое мы получили вследствие того, что
// у ссылки НЕТ такого атрибута, как value. Поэтому я и сказал, что у элементов
// в DOM есть свои свойства, которых, возможно, нет у других, это и доказывается
// в примере выше - у ссылки нет свойства value, а у инпута нет свойства href.

// Атрибуты и свойства: dir - список доступных свойств

// Иногда бывает так, что нам нужно узнать список ВСЕХ доступных свойств того
// или иного элемента. В этом нам поможет свойство dir, которое возвращает
// объект, в котором и хранится нужная нам информация. Как его использовать?
// очень просто! в команде console.log нам нужно заменить слово log на dir
// и в круглых скобках вставить элемент, свойства которого мы хотим увидеть:

console.dir(link);
// => a.lesson__link {...}

// В результате, в консоль мы получаем список доступных свойств элемента.

// Свойства и атрибуты: произвольные атрибуты & методы для них

// Выше я говорил, что стандартные атрибуты элементов превращаются в свойства.
// Но что, если мы хотим использовать "нестандартные атрибуты"? для этого у
// нас есть определенные методы. Посмотрим на пример:

let lessonText = document.querySelector(".lesson__text");

// Проверка на наличие атрибута
/* console.log(*/lessonText.hasAttribute("name")/*) */; // => false
// Получение значения атрибута
/* console.log(*/lessonText.getAttribute("name")/*) */; // => null
// Установка значения атрибута
lessonText.setAttribute("name", "value");
// Удаление атрибута
lessonText.removeAttribute("name");

// 1 - Объяснение + hasAttribute

// Итак, в примерах выше выполняем три действия, и каждое действие требует своего
// метода. Начнём с метода hasAttribute. Если нам необходимо узнать, есть ли
// у элемента тот или иной атрибут, мы указываем в круглых скобках метода название
// сие атрибута. И заранее скажу, что этот код, где мы с вами обращаемся к
// элементу и применяем на нём этот метод, нам необходимо "завернуть" в команду
// console.log(), чтобы узнать ответ. На этом этапе сразу становится ясно, что
// метод возвращает булевое значение, либо true либо false.

// 2 - getAttribute

// Идём к след. методу, getAttribute. Если нам необходимо получить ЗНАЧЕНИЕ того
// или иного атрибута, то мы используем как раз-таки этот метод, и тут абсолютно
// то же самое - код надо писать внутри console.log'а. И небольшое примечание:
// если у атрибута НЕТ значения, мы получим null.

// 3 - setAttribute

// Если нам необходимо установить элементу какой-нибудь атрибут, то мы используем
// метод setAttribute, но у этого метода есть одно отличие от других. Когда мы
// в круглых скобках указываем название того атрибута, который мы хотим добавить
// к элементу, а мы БУДЕМ это делать в любом случае, поскольку нам это необходимо
// в любом случае - нам также надо будет указать второй аргумент. Тут в качестве
// второго аргумента принимается значение атрибута, которое мы хотим добавить
// элементу. Как ставить второй аргумент вы уже, я полагаю, знаете - после
// первого мы ставим запятую и прописываем второй аргумент, всё максимально
// просто и абсолютно не сложно.

// 4 - removeAttribute

// Мы научились проверять, есть ли у элемента какой-то атрибут, получать значение
// атрибута и добавлять атрибут, но как удалять атрибуты? в этом нам поможет
// метод removeAttribute. В круглых скобках указывается название атрибута, который
// необходимо удалить.

// Пример выше - даже не пример, этот код лишь показывает, как эти методы надо
// применять на элементе. Сейчас я покажу вам НАСТОЯЩИЙ пример:

// Устанавливаем значение атрибута и сам атрибут
lessonText.setAttribute("some-attribute", "some-value");

// Проверяем наличие атрибута
if (lessonText.hasAttribute("some-attribute")) {
	console.log("Атрибут some-attribute существует!")
} else {
	console.log("Такого атрибута не существует..")
}
// => "Атрибут some-attribute существует!"

// Код выше задаёт элементу lessonText произвольный атрибут some-attribute и
// присваивает ему значение some-value через метод setAttribute, далее идёт
// условное ветвление, в котором проверяется, существует ли атрибут у элемента
// при помощи метода hasAttribute и, в зависимости от того, есть ли у этого
// элемента такой атрибут, мы получаем в консоль одну запись, если нет - то
// другую. Всё гениальное - просто! также следует отметить, что атрибут у
// элемента ДЕЙСТВИТЕЛЬНО появился, для проверки достаточно зайди в DTools
// и посмотреть, есть ли он там, и, как оказалось, действительно есть.

// Атрибуты и свойства: Синхронизация между атрибутами и свойствами

// Изучив предыдущие методы становится ясно, что к стандартному атрибуту
// можно обратиться и при помощи определенных методов, таких как setAttribute,
// getAttribute и так далее. Так вот, когда стандартный атрибут меняется, то
// соответствующее ему свойство тоже меняется, но в этом есть одна загвоздка -
// всё это может работать в ЮУНТАРБО УНОРОСТ. Посмотрим на пример ниже:

// Получаем элемент (это так, для галочки, элемент то там уже есть!)
input = document.querySelector(".lesson__input");

// Создаём атрибут у элемента, задаём ему значение и выводим его в консоль
input.setAttribute("id", "123");
console.log(input.id);
// => "123"

// Меняем значение стандтарного свойства на другое и выводим в консоль через метод
input.id = "321";
console.log(input.getAttribute("id"));

// В примере выше мы получаем объект инпут и начинаем работу с ним. Сначала мы с
// помощью метода setAttribute присваиваем ему атрибут id со значением 123,
// далее выводим его при помощи свойства в консоль, это же значение и получаем
// в консоли. Хорошо, а далее мы меняем стандартное свойство. Мы обращаемся к
// атрибуту id и меняем его значение на 321, то бишь присваиваем новое значение.
// Далее при помощи метода getAttribute мы получаем его значение в консоли, и
// получаем в консоли строчную запись "321" и это означает, что и в ту и в
// обратную сторону всё автоматически обновляется. Теперь попробуем повторить
// то же самое с атрибутом value:

// Получаем элемент (это так, для галочки, элемент то там уже есть!)
input = document.querySelector(".lesson__input");

// Задаем элементу атрибут value и присваиваем значение
input.setAttribute("value", "Привет!");
console.log(input.value);

// Итак, код выше...

// Что делает код выше? узнаем позже!)