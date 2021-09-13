// Что такое JavaScript.

// Когда создается веб-продукт (будь-то сайт, интернет-магазин, или веб-приложение) в нем
// учавствуют сразу несколько технологий. В любом случае, там будет HTML. Это язык разметки, т.е
// скелет нашего сайта. Потом, мы на этом скелете наращиваем "мясо" - добавляем стилистики.
// Это могут быть шрифты, цвета, расположение элементов и прочее. За всё это отвечает CSS - 
// это язык стилей. И дальше, всю эту конструкцию необходимо заставить работать. Для этого
// уже нужны языка программирования, в том числе и JS, PHP, базы данных и прочее.
// Но мы остановимся именно на JS.

// Вопрос:

// Для чего используется этот язык?

// Ответ: он используется для придания сайту интерактивности. В далекие 95-ые годы, сайты делались
// на таблицах, и грузились крайне медленно. Было принято решение ускорить их, и сделать так,
// чтобы реагировали на действия user'а. Тогда, кучка программистов закрылась у себя в комнате
// и принялись они создавать новый язык. Управились они за пару недель (быстро ж они), так как
// сроки уже поджимали.

// Вопрос:

// Почему язык называется JavaScript?

// Ответ: всё дело в популярности и желании хайпануть. Раньше, был популярен язык Java, и чтобы
// придать языку популярности было принято решение назвать его JavaScript. Сам язык никак не связан
// с Джавой, так что путать их - нельзя.

// Вопрос: что значит скрипт?

// Ответ: скрипты это как раз инструкции, которые должен выполнить браузер к моему сайту.
// Скрипты пишутся в отдельном .js файле, так и внутри index.html файлика, в теге script. Но,
// писать js код внутри html файла - плохая практика. Внутри html файла пишут только маленькие
// скрипты, всё остальное - внутри отдельного файла.

// Вопрос: как подключить скриптовый файл?

// Ответ: в html файле, у тега script прописываем атрибут src, а внутри кавычек пишем
// путь к файлу.

// Переменные: что это такое и как их применять.

// И первое с чего мы начнем наше изучение JS - с информации.
// В мире программирования всё состоит из информации.
// Это всякие теги на странице, файлы, и даже действия пользователя на странице.
// Всё это - информация, и для того чтобы в дальнейшем её использовать, нам
// необходимо её как-то сохранить и куда-то поместить. Для этого в программировании
// существуют переменные. Допустим, у нас есть какая-то информация - например, яблоко.
// Мы её хотим сохранить чтобы в дальнейшем её использовать. Но как?
// А мы берем коробку (наша переменная) и ложим яблоко в..
// А, нет! Перед этим нашу коробку надо как-то назвать, иначе мы потеряемся,
// если таких коробок будет множество. Наклеим на неё наклейку c надписью "apples",
// создавая  таким образом нашу переменную, нашу коробочку. И теперь, когда мы создали
// переменную, мы можем эту информацию использовать. Причем использовать её мы можем
// разными способами: можем как достать это значение (значение - информация, лежащая
// внутри нашей переменной), чтобы потом съесть его, например, или что-то другое сделать,
// или поменять это наше значение. Ну например мне надоело хранить в коробке яблоко,
// которое я так и не съел, и поместил туда апельсин. Всё, старого значения теперь нет,
// там теперь апельсин, другая информация.
// Именно так всё и работает. Теперь посмотрим на всё это в коде.

// Создать коробку, переменную, очень просто: для этого используются ключевые слова
// var, let и const. Что такое ключевое слово? это спец. слова, внесенные прямо
// в ядре языка, и используемые по умолчанию. var означает variable (англ. переменная),
// но использовать var - не рекомендуется т.к он уже устарел (старичок работает уже с 1995 года!),
// но мы сейчас его заиспользуем в качестве примера того, как создать переменную.
// let - аналог var. А const - условная константа, которую никак нельзя изменить.

// Придумываем наше название. Мы хотим, чтобы в нашей коробке хранилась числовая информация,
// значит имя коробки должно быть "number". Чтобы присвоить переменной значение, надо после
// её названия поставить знак равенства = (в js он выступает в роли присваивалки значений), и после
// этого знака написать значение и поставить точку с запятой, это очень важно (почему так -
// я объясню, но чуть позже):

var number = 5;

// var - ключевое слово для создания переменной.
// number - название нашей коробки, переменной.
// = - этот знак присваивает значение нашей переменной.
// 5 - сама информация, лежащая внутри переменой.
// ; - спец. символ, обозначающий то, что наша "команда" - завершилась тут, это точка остановки.

// Таким образом, у нас есть готовая переменная с некой информацией. Круто!
// Но прежде чем её использовать я скажу, что то что мы сделали - называется не "создание"
// переменной, а "объявление". Технически мы её создали, но почему-то это принято называть
// "объявление переменной". Т.е мы объявляем в нашем файле, что теперь у нас есть такая-то
// переменная с таким-то значением.
// Теперь мы можем её использовать. В этом нам поможет команда "alert()", которая
// выводит в браузере диалоговое окно с какой-то информацией.
// Внутри скобок мы напишем название нашей переменной - "number", таким образом
// мы дадим понять нашей функции, что она должна вывести значение нашей переменной на страницу.

// UPD:  13.09 / 7:57 - закомменитировал вызов впл. окна, т.к консоль node такое
// поддерживает, и всё ломается.
// alert(number);

// Если мы сейчас зайдем на нашу страничку в браузере, нам покажется диалоговое окошко
// с надписью "5" (а это, собственно, значение переменной number). Значит всё работает!)

// Теперь мы напишем то же самое, только в современном виде:

let num = 10;

// Ничего не произошло, бомба не взорвалась. Отличается разве что ключевое слово и название
// переменной, да и значение тоже.
// И вот, теперь мы попробуем изменить наше значение. Я помню, что значение переменной num
// равно десяти, но я замению его на 7. Для этого достаточно написать название переменной,
// поставить знак равенства и написать НОВОЕ значение для нашей переменной. Делается всё это
// без ключ. слова let, т.к оно отвечает  именно за создание переменной, а она у нас уже
// объявлена.

num = 7;

// Всё, теперь num равен не 10, а равен 7.
// Таким образом, мы "прогнали" значение 10 из переменной (бедная десятка..) и присвоили другое.
// То же самое и с константами:

const pi = 3.14;
// pi = 5; - выдаст ошибку!

// Вся соль в константах заключается в неизменяемости значений.
// Менять их - нельзя, строго запрещено! Да и + ко всему - это разрушит нашу программу
// и остановит её выдав ошибку, что мы пытаемся изменить значение неизменяемой переменной.
// На самом деле, в JS как таковых констант НЕТ, и изменить значение константы МОЖНО,
// но очень сложно и это займет много-много времени.

// Ну а теперь  мы ближе посмотрим на var и let, и поймем, почему не рекомендуется
// использовать устаревший var, а рекомендуется использовать современные let и const.
// У var есть одна интересная особенность - по англ. она называется hoisting, а по Русски
// "всплытие". Что это значит?
// Если я сейчас объявлю переменную, присвою ей значение, то потом я могу его изменить:

var example = 10;
exmaple = 15;

// В принципе всё нормально, так и должно быть, мы создали переменную а потом
// её поменияли (точнее значение переменной).
// Но, если я захочу изменить значение переменной ДО её создания - это сработает!

example2 = 15;
var example2 = 10;

// Это может показаться странным, ведь мы еще не создали такую переменную, её еще нет..
// но тем не менее так и должно быть, это нормально.
// А по простому - всё дело в том, что var переменная создается еще до того, как наш
// скрипт начал работать. Происходит это так:

// Когда браузер начинает запускать файл script1.js, он начинает ооочень быстро его просматривать.
// Находит переменную, объявленную через var (т.е - ищет такую переменную).
// Он их сначала создает, т.е коробка уже есть, но в ней ничего нет.
// После этого запускается скрипт, начиная с первой строки.
// Он идет по файлу, идет.. и вдруг видит - тут переменная начинает
// использоваться! (строка 137) в неё присваивается переменная три, и затем присваивается
// переменная пять. Это поведение и называется "всплытие" (hoisting), и конечно, когда
// кода намного намного больше, и конструкции сложнее - могут начать появляться ошибки.
// Поэтому куда очевиднее поведение, когда мы сначала создали переменную, и только
// потом мы можем её использовать.
// Но в случае с let - всплытие не произойдет, это поддерживает только var, а с let
// мы создаем переменную и только потом можем её использовать, и с const то же самое.
// Вообще, у var есть еще кое какие особенности по "области видимости", но об этом -
// в следующих уроках. Но сейчас нам (мне) необходимо понять, что в современном JavaScript'е
// используются let и const, var - устаревший формат, который канул в лету.

// Точка с запятой

// Новички в JS часто задаются вопросом: когда ставить точки с запятой?
// Как не трудно заметить, они у меня в коде стоят везде, в конце каждой строки.
// Их можно не ставить (я, например, раньше не ставил их), JS это простит, но всё
// таки их лучше СТАВИТЬ. Например, когда логическое утверждение завершено (например,
// когда мы объявили переменную) - не будет лишним поставить ; :)

// А теперь о ошибках, которые могут случиться если ; не ставить.
// Допустим, мы хотим вывести в браузер диалоговое окно с цифрой пять,
// и после этого мы делаем еще какие-то сложные действия:

// Закомментировал, чтоб ошибок не было.
// alert(5)
// [].push('a'));

// Нам выдаст ошибку, типа "что это за символ ]?"
// Всё из-за того, что мы не указали где наше логическое утверждение кончается.
// Браузер не знает, где кончается команда "alert(5)", и начинает "паниковать".
// Чтобы это не происходило - ставим ;

alert(5);
[].push('a');

// Но чтобы ошибку увидеть, надо убрать комментарии с кода на 177 и 178 строке
// и потом зайти в браузер, нажав ctrl + shift + i.
// Таким образом, откроется консоль разработчика. Консоль разраба это "помощник"
// верстальщика, где на первой вкладке можно увидеть весь HTML и CSS код, где стоят
// отступы и какие, стили примененные к элементам и т.д.
// Но нас интересует вторая вкладка - "Console"!
// Там мы можем отслеживать ошибки кода, писать туда что-то важное и т.д.
// Подробнее можно прочитать в гугле :)

// Хорошо, теперь мы разобрались с точкой с запятой, узнали об ошибках и консоли,
// узнали что такое переменная и как с ней работать.
// Но мы не знаем какой тип данных туда можно отправить, т.е какая информация там
// может располагаться? а об этом - в след. уроке!

// Типы данных и взаимодействие с пользователем

// Допишу послезавтра, время таймера вышло.