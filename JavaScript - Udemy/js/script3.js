// Работа с элементами на страницах и события

// Итак, сегодня у нас знаменательный день - сегодня мы наконец таки поймем, как
// же работает JavaScript в браузере, и что работать с ним там - весьма просто.

// Начнем с того, что элементы с которыыми мы будем работать на странице нужно
// как-то получить и поместить их в переменную. То есть это информация, а мы же
// помним что любую информацию нужно фиксировать в "коробки"? так мы с вами и
// поступим. Получить элементы со страницы мы можем через уникальный идентификатор
// (вкратце ID), через теги, классы и даже через селекторы. И тут же я должен
// вам сообщить кое что очень важное - для работы с JS в браузере мы будем
// использовать уже заранее подготовленный сайт. Я его уже скачал и закинул в
// папку, называется она "SPEC-1", а она в свою очередь находится в папке "SPEC".
// В этой папке будут находится сайты (на самом деле я не знаю, будем ли мы
// использовать несколько сайтов в наших уроках) для занятий. Сайт для текущего
// урока называется Tour. На том сайте у нас есть типичный хедер: пара кнопок,
// навигация, общий нейм-тег сайта, номер компании предлагающая свои услуги и...
// всё. Но помимо всего этого у нас есть и модальное окно, которое пока что еще
// скрыто. На этом всё, продолжаем. Первым делом мы будем получать те самые 2
// кнопки, с которыми мы будем проводить некоторые действия. Если посмотреть
// на верстку сайта, то можно увидеть, что у тех двух кнопок есть свои специальные
// идентификаторы - "choose" и "receive". Именно по ним мы и получим эти элементы!
// Сразу скажу, скорее даже повторюсь - то что да, действительно, со страницы мы
// можем получить множественными способами различные элементы, и каждый из них мы
// с вами рассмотрим. Но есть те, которые в современном формате используются ЧАЩЕ,
// об этом я также напишу. И чтобы вы (читатель, и возможно даже я) не терялись
// в будущем когда увидете более "древние" способы, мы их всех разберем (т.е даже
// старые способы). Ведь если вы откроете код который был написан... ну, лет 6
// тому назад, вы с большой вероятностью увидите методы, которые уже "седые".
// Один из таких, седых методов мы как раз таки заиспользуем. А теперь начнем!

// Первым делом нам необходимо создать переменную. Называться она будет совсем
// просто, но в тоже время она будет отдавать суть той информации, что будет
// храниться внутри неё - chooseBtn, а после названия ставим знак равенства. Для
// того чтобы получить элемент, мы должны "сказать" коду что-то вроде "обратись,
// пожалуйста, к документу!", прописывая слово "document" после знака равенства.
// Если говорить сооовсем по простому, то document это весь наш HTML файл, то есть
// index.html по факту. И мы к нему обращаемся для того, чтобы получить какой-то
// определенный элемент, так как логично, что все элементы находятся внутри этого
// документа! это всё конечно хорошо, но как же нам всё таки получить эту кнопку
// с id "choose", ведь мы обратились к документу? для этого существует спец. метод!
// Ставим после этого слова, слова document - точку! но это еще не всё, после неё
// мы должны прописать имя нашего метода. Метод называется "getElementById", т.е
// "получить элемент по идентификатору", в переводе дословно. После названия метода
// мы открываем круглые скобки и ставим кавычки, а внутрь них записывается сам id.
// После всего этого мы ставим запятую, так как у нас будет еще одна переменная,
// а так у нас УЖЕ есть переменная "chooseBtn" внутри которой лежит кнопка с id
// со значением "choose", т.е элемент с id "choose". И я опять же сделаю вам такое
// небольшое напоминание - идентификатор УНИКАЛЕН! на странице не может быть больше
// одного элемента с одним и тем же id, для таких элементов есть атрибут class,
// то есть для этого существуют классы. Именно по этой причине у нас в переменную
// запишется только 1 элемент, та самая кнопка с id "choose". А мы тем временем
// продолжаем! точно таким же образом, каким мы получили кнопку с id "choose", мы
// получим кнопку с id "receive". Для этого достаточно скопировать тот участок кода,
// что идет после слова "let" и вставить снизу, предварительно сделав один tab (4
// пробела), а затем мы просто меняем слова "choose" на "receive". Вот и всё, мы
// успешно создали две переменные внутри которых хранятся две кнопки. Но и на этом
// мы еще не закончили! нам необходимо создать еще и третью переменную, в которой
// будет храниться заголовок третьего уровня (или, как еще говорят, "порядка"), в
// самом заголовке есть текст "Всё включено", а на сайте этот заголовок чуть выше
// тех самых двух кнопок. И вроде бы всё просто и замечательно, но есть одно но..
// у этого заголовка НЕТ ID! это, конечно, проблема (для людей с таким уровнем JS
// как у меня или у вас, читатель, ведь на вряд-ли senior будет это читать). Но,
// как мы знаем, из любой ситуации есть выход и у каждой проблемы есть своё решение!
// И у нашей проблемы оно тоже, к счастью, есть. Оно заключается в старом-новом
// методе, который также считается уже "седым". Его мы изучим, а сейчас нам пока
// что необходимо создать новую переменную! называться она будет heading, также
// очень по простому. После названия переменной мы опять же ставим знак равенства
// и пишем слово document, обращаясь к документу, затем ставим точку и пишем уже
// сам метод. Метод называется getElementsByTagName. Он возвращает нам элемент
// не по его ID, а по ТЕГУ. То есть, нам достаточно вписать в круглые скобки
// название тега и мы получим искомый элемент. Удобно! После него мы традиционно
// ставим круглые скобки и вписываем в них тег - h2. А на этом моменте мы оста-
// новимся и поразмышляем логически. Перед этим я оставлю вам готовый код:

let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0];

// Как я уже когда-то писал, используя метод getElementById мы получаем только
// один элемент на странице, потому что он является уникальным и, так сказать,
// ЕДИНСТВЕННЫМ в своем роде. Но если же мы как-бы "говорим" джаваскриптовому
// коду "найди, пожалуйста, элемент через определенный тег", тут возникает
// неприятная ситуация! почему? потому что тегов h2 на странице может быть
// НЕСКОЛЬКО, а если вместо h2 мы вообще напишем div, код, мягко говоря, сильно
// афигеет, потому что мы пытаемся получить ВСЕ теги div на странице. А коду
// нужна хоть какая-то конкретика, так как он не может сразу всё так получить.
// И в связи с этим есть небольшой защитный механизм, который есть внутри JS
// кода. Отступим вниз и попробуем вывести в консоль элемент heading:

// console.log(heading);
// => HTMLCollection [h2.text-center.wow.pulse]

// В коде выше мы попробовали получить элемент с тегом h2, и в консоль мы полу-
// чили HTML-КОЛЛЕКЦИЮ. Т.е мы получили не какой-то отдельный элемент, а массив
// данных (заметьте квадратные скобки). Коллекция по другому называется "Псевдо-
// массив", то есть по факту это массив, который также хранит в себе элементы по
// порядку, только он "дальний родственник" массива - у него нет тех методов,
// которые доступны самому обычному массиву. Здесь вы, скорее всего, спросите:
// "ну допустим это псевдо-массив, чего бубнить то?; что дальше?; зачем мне это?",
// или что-то в этом духе. Дело в том, что для того чтобы получать такие элементы
// на странице, нам нужны ИНДЕКСЫ. Так как мы всегда будем получать массив, с
// большой долей вероятности в нём будет множество различных элементов. Поэтому,
// после слова "heading" мы ставим квадратные скобки и вписываем туда индекс того
// элемента, который мы хотим получить. Прошу вас заметить, что не смотря на
// то, что у нас всего лишь 1 элемент h2 на странице, нам всё равно вывело
// массив, хотя по идее было бы куда логичнее вывести в консоль лишь 1 элемент.
// Давайте выведем ПЕРВЫЙ элемент из массива (коллекции, я бы сказал/написал):

// console.log(heading[0]);
// => <h2 class="text-center wow pulse" data-wow-duration="2s" data-wow-iteration="2">Все включено</h2>

// Вот, теперь всё отлично! нам вывело в консоль лишь ОДИН элемент, а не целый
// массив. Вот так и должно быть, но так как этот метод В ЛЮБОМ случае вернет
// коллекцию, делать нечего - единственный выход из этой ситуации это индексы.
// В общем, всё стало ясно - мы получили элемент и можем воспроизводить с ним
// какие нибудь манипуляции. Наши console.log'и я закомментировал, но когда вы
// бу дете смотреть этот файл они УЖЕ будут закомментированы, а дальше я хочу
// сделать кое что интересное: мы же с вами хотим управлять именно ЭЛЕМЕНТОМ
// h2, а не коллекцией, верно? так вот, нам нужно ПОСЛЕ сохранения элемента в
// переменную поставить квадратные скобки и вписать туда нулевой индекс, таким
// образом мы сначала сохраняем в переменную heading коллекцию из элементов h2,
// хотя на самом деле там он один, и выбираем его же. Но опять же - когда вы
// будете смотреть этот файл они будут УЖЕ добавлены. Ну а мы идем дальше!

// Кстати, ситуация которую мы описали работает не только с тегами, она работает
// также и с классами, и с атрибутами name. Почему? потому что и классы и атри-
// буты name НЕ уникальны, они не могут быть уникальными, т.к могут повторяться.
// И сейчас мы это проверим! но сейчас я должен рассказать вам кое что РЕАЛЬНО
// важное (ну или не совсем) - так как лектор после того как добавил переменную
// heading начал рассказывать про коллекции, цепочка "сохраняемых переменных"
// оборвалась, и мне придется заново прописывать слово let и дальше точно таким
// же образом создавать переменные. А теперь к делу. Дальше, я РАЗНЫМИ способами
// хочу получить те инпуты, которые внутри формы, а она внутри модального окна.
// Для того чтобы быстро найти их, открываем файл index.html и нажимамем комб.
// клавиш "CTRL + F", затем вводим слово "contactform". Все элементы внутри формы
// имеют класс, в котором присутствует это слово, потому что они находятся внутри
// формы. Логично? безусловно! и вот, как только мы ввели это слово мы видим сам
// тег формы и инпуты с другими элементами в нём. Первый инпут имеет при себе
// класс "contactform_name", дальше "contactform_phone" и "contact_form__mail".
// Заметьте, что в той верстке класс "contactform_phone" повторяется - первый эле-
// мент это блок с таким же классом, второй - уже сам инпут. Окей, дальше я хочу
// создать переменную...

// Но какую - узнаем позже!)