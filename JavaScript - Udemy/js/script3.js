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
// создать переменную, которая будет называться nameInput (инпут name). Ставим
// дальше знак присваивания и прописываем слово document, затем НОВЫЙ метод -
// getElementsByClassName Название метода дословно переводится так: "получи эле-
// менты через имя класса", и здесь всё происходит также как и с тегами. Окей,
// записали название переменной, а дальше ставим круглые скобки и кавычки внутри
// них, а внутри кавычек мы прописываем сам класс - "contactform_name". Отлично!
// но мы должны понимать, что в этот псевдо-массив может сохранится несколько эле-
// ментов со страцниы, в то время когда нам нужен лишь 1, первый элемент! для
// этого ставим квад. скобки и внутри них прописываем число "0". Хорошо, а теперь
// лайфхак - для того чтобы отличать методы, которые сохраняют по одному элементу
// в переменную и методы, которые сохраняют несколько (если таковые существуют),
// надо взглянуть на название методов: например, у нас первый метод был с именем
// getElemen(t)ById, а у последних двух были с именами "getElement(s)ByTagName" и
// "getElement(s)ByClassName". Чувствуете разницу? у первого метода нет буквы "s",
// а это означает, что он сохраняет лишь один элемент в себя. Букву "s" в англ.
// языке ставят в конце слов, обозначающих множество. Пример: pen (ручка) - pens
// (ручки), значит дальше всё будет понятно - методы, у которых слово "element"
// стоит во множественном числе (с буквой "s"), создают коллекцию, то бишь псевдо-
// массив. Хорошо, а мы тем временем идем дальше.

// Это мы с вами рассмотрели методы, которые "постарели" и всё реже и реже ис-
// пользуются в практической деятельности. Но опять же - если вы откроете какой
// нибудь старый скрипт, то этих методов там будет НАВАЛОМ. Сейчас же чаще всего
// использоваться начали те методы, которые позволяют нам получать элемент через
// их CSS - селектор. Напоминаю если вы забыли - селектором может называться и
// являться что угодно: это могут быть теги, это могут быть классы, атрибуты или
// их комбинации (то есть тег внутри класса, или класс внутри тега и так далее).
// Я думаю что вам это понятно, и если это так - продолжаем. Создаем новую пере-
// менную с названием phoneInput, ставим знак присваивания и прописываем слово
// document, после него новый метод - querySelector, затем ставим круглые скобки и
// кавычки. Этот метод позволяет получать ПЕРВЫЙ элемент со страницы по заданному
// CSS - селектору. Что это значит? допустим, если у нас на странице будет не-
// сколько одинаковых селекторов, к примеру классов, и мы его впишем между кавычек,
// начнется кое что интересное. Когда JavaScript начнет "оценивать" нашу страницу
// сверху-вниз, найдет самый первый элемент который подходит под этот селектор, то
// он возвращает его в нашу переменную/массив/объект, в общем в то место, куда мы
// его пытались сохранить. Поэтому запомните, что этот метод возвращает нам первый
// и единственный элемент со страницы. А теперь идем дальше - прописываем внутри
// кавычек следующий селектор: "contactform_phone". Кстати, следует отметить, что
// этот метод очень похож на метод getElementById. "Чем же?" - спросите вы, а я
// вам отвечу: тем, что оба они возвращают нам ОДИН и ЕДИНСТВЕННЫЙ элемент, все
// остальные методы будут возвращать нам псевдо-массив, коллекцию. Не будем мед-
// лить и создадим еще одну переменную - mailInput. Ставим знак равно (оператор
// присваивания) и прописываем слово document, после него вписываем опять таки
// НОВЫЙ и ПОСЛЕДНИй метод - querySelectorAll. Ставим круглые скобки и вписываем
// внутри них кавычки. Отличается этот метод от предыдущего не только своим назва-
// нием, но и тем, что он берет ВСЕ элементы со страницы. А во всем остальном эти
// методы как братья - оба они ищут по селектору, но вот последний создает псевдо-
// массив и включает в себя абсолютно все элементы, подходящие по селектору.
// Отлично, прописываем внутри кавычек селектор contactform_mail, а после него
// ставим квадратные скобки и цифру 0. Зачем? - а вы уже знаете! Кстати, помните
// я сказал, что у нас на странице селектор contactform_phone повторяется два
// раза? так вот - этот селектор тоже :) А теперь я должен вам в кое чем признать-
// ся. Я... Я... ОШИБСЯ Я!! - перед селекторами "contactform_phone" и следующим
// "contactform_mail" должна была стоять точка... ПРАСТИТИ МЕНЯЯ!!.. но это лег-
// ко поправимо, просто добавим точку :) Ну а если без шуток - мы должны четко и
// ясно указывать методам querySelector и querySelectorALl какие же мы селекторы
// хотим получить и сохранить. Без этого они, так сказать, ничего не поймут. Но
// в то же время мы НЕ должны прописывать точку у метода getElementsByClassName,
// так как он и так знает, что через него мы хотим получить элемент с таким-то
// определенным классом. А на этом мы заканчиваем создание наших переменных! -

let nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0];

// Ничего сложного в получении элемента со страницы - нет. И если вы испытываете
// затруднения с получением элементов или, скорее всего, с освоением всей этой
// информации, просто берите и сохраняйте элементы в отдельные переменные и
// отправляйте в консоль. Таким образом, вы с легкостью поймете, как работает
// тот или иной метод. И опять же, повторюсь, на практике чаще всего применяют
// методы querySelector и querySelectorAll. Опять себя же я добавлю, что и пре-
// -дыдущие методы мы должны знать и иногда использовать, они всё таки еще не со-
// -всем "забытые". А мы идем дальше - переменные мы создали, теперь надо их
// как-то да использовать... но это - на потом. Сейчас мы поговорим о том,
// чем же может заниматься пользователь на странице, ведь JS это язык интерак-
// -тивности и мы должны как-то "интерактивить" с пользователем.

// Начнем с простого. У нас есть мышь, которой мы можем кликать, наводить на
// элементы и скроллить страницу. Также у нас есть клавиатура, на которой есть
// огромное множество кнопок и мы можем на них нажимать. Если же говорить о ин-
// -терфейсе на сайтах, то у нас также есть разные элементы того же интерфейса.
// Например формы, кнопки и прочие элементы. Все эти действия отслеживаются
// браузером, и называются они "события". Да-да, бразуер прям таки СЛЕДИТ за
// всеми нашими действиями, но щас не об этом. Все эти события мы можем "ловить"
// в коде, при помощи встроенных функций, которые называются просто - "обра-
// -ботчики событий". Если зайти в документацию и посмотреть на количество со-
// -бытий, которые могут произойти, то мы можем потеряться - их огромное кол-во!
// Поэтому сейчас мы можем остановиться на старой таблице событий, которая вклю-
// -чает в себя самые-самые основные и юзабельные события.. но дать ссылку на
// неё я не смогу - дам лишь ссылку на скриншот этой таблицы, полезная штука:

// Копируйте и вставляйте в браузер - https://i.ibb.co/QpbgYNQ/Screenshot-15.png

// Здесь, если посмотреть на таблицу, часть событий работает только с опреде-
// -лёнными HTML-элементами. Например, если мы работаем с формой, то у неё есть
// такое событие как "отправка", называется оно "onSubmit". Понятное дело, что
// какую-то картинку мы заsubmit'ить не можем, это логично, однако есть события,
// которые применяются практически на всех HTML-элементах. Но это за исключением
// некоторых "специфических" элементов, таких как  "APPLET", "BASE", "BASEFONT"
// и так далее, список таких элементов есть на таблице. А теперь попрактикуемся,
// посмотрим как можно всё это проворачивать в коде!

// На самом деле использовать можно тремя способами, но для начала мы внутри JS
// кода напишем функцию. Называться она будет hover, а аргументы она не будет
// принимать. Внутри неё будет выполняться довольно простое действие - для начала
// я возьму переменную heading, а мы с вами помним, что в этой переменной лежит
// заголовок второго порядка, то есть H2, и внутри него есть какой-то текст.
// Чтобы поработать с этим содержимым у нас есть несколько методов (а на самом
// деле два) - это innerHTML и textContent. Так как мы будем сейчас работать
// конкретно с текстом, я буду использовать второй метод. Когда мы вызываем
// этот метод на элементе, в котором есть текст, мы можем его поменять. Грубо и
// сухо говоря, этот метод просто меняет текстовый контент элемента. Поменяем
// его на "Действительно всё!":

function hover() {
	heading.textContent = "Действительно всё!"
}

// А теперь нам следует перейти в файл index.html, затем найти те самые две кноп-
// -ки, которые мы первыми сохранили в соответствующие переменные. Нашли? отлич-
// -но! Теперь я доскажу, что первый способ применения таких обработчиков событий
// относится прямо и непосредственно к самой верстке. Нам необходимо добавить к од-
// -ной из кнопок (а именно с идентификатором "choose") специальное событие,
// "onmouseenter". Срабатывает оно при наведении мышки на элемент. Внутри кавычек
// мы прописываем слово hover и ставим круглые скобки, тем самым используя нашу
// функцию. Остаётся только навести на кнопку мышь и... УРАА! мы совершили самое
// первое и простое интерактивное общение с пользователем. При наведении на кнопку
// меняется текстовый контент заголовка. Мы отследили это событие и выполнили эту
// функцию. Но такое использование событий называется не очень хорошим словом (но
// зато справедливым!) - говнокод. Он подходит только для тестовых проектов, когда
// мы хотим что-то очень быстро протестировать. Опять же - мы не смешиваем нашу
// верстку со скриптами, поэтому я удалю то, что добавил. Не стоит так делать,
// НИНАДА! вы, конечно, можете встретить такое в коде на каком-то сайте, но вы
// должны знать, что делать так не рекомендуется. Второй способ, это когда мы
// делаем то же самое, только уже внутри JS кода...

// Но рассматривать его мы будем позже!)