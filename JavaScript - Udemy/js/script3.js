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
// делаем то же самое, только уже внутри JS кода. Например - я беру ту же кнопку,
// которую мы сохранили в переменную chooseBtn и к которой мы в HTML-коде приме-
// -няли обработчик событий, прописываю название хранящей её переменной и после
// этого я ставлю точку и затем прописываю название обработчика событий, то есть
// onmouseenter. После этого ставлю знак равно, оператор присваивания, и пишу
// слово hover, то есть название нашей функции:

// Закомментировано: устаревший вариант привязки обработчика событий
// chooseBtn.onmouseenter = hover;

// Прошу вас заметить, что после названия функции мы не поставили круглые скоб-
// -ки, так как при наведении на кнопку обработчик событий САМ будет вызывать
// эту функцию, нам достаточно дать ему наводку на неё, указать, какую именно
// функцию ему надо выполнять. А теперь опять же заходим в браузер и наводим
// курсор мышки на кнопку - всё работает! заголовок поменялся, всё получилось.
// Но опять же - если подходить с практической точки зрения, это тоже уже
// устаревший формат назначения обработчика событий и он уже почти не исполь-
// -зуется. У него есть одна очень большая проблема - если вы таким образом
// назначили функцию, то потом вы её ни поменять, ни удалить не сможете. А на
// современных сайтах и приложениях нам иногда нужно будет избавляться от этой
// функции. Например, мы навели курсор мышки на кнопку или любой другой элемент
// и всё - нам это действие больше не понадобится. В этом же варианте это сделать
// мы уже не сможем, по крайней мере без костылей. Поэтому мы рассмотрим третий
// вариант установки обработчика событий, самый правильный и используемый на
// практике. Для этого мы берем всю ту же кнопку chooseBtn, потому как именно
// на неё мы будем вешать обработчик событий, ставим точку и прописываем след.
// команду, довольно длинную: addEventListener. Эта команда нам говорит, что
// мы должны добавить обработчик события, да у неё даже перевод такой - "добавить
// слушателя событий". После названия команды ставим круглые скобки, да - это
// на самом деле метод, встроенная функция. Принимать она будет два аргумента,
// первый из них - это то событие, за которым мы будем следить. И так как мы
// уже использовали mouseenter, будем использовать mouseenter. И заметьте одно
// важное отличие: если в предыдущих двух вариантах мы прописывали ounmouseenter,
// то сейчас пишем без "on". То есть не ONmouseenter, а mouseenter. Когда мы
// используем более продвинутый вариант, с addEventListener, он уже знает, что
// мы будем использовать событие, поэтому здесь приставка on не нужна - мы просто
// записываем название события. Далее, после первого аргумента, ставим запятую
// и пишем второй аргумент. А вторым аргументом мы назначаем так называемую
// колбэк-функцию. Эта функция сработает только тогда, когда событие mouseenter
// выполнится. Пишем классическую конструкцию function, но без названия функции.
// Записываем круглые скобки но внутри них ничего не пишем, затем открываем уже
// фигурные и внутри, как вариант, пишем то, что находится в функции hover.
// Или же, простым способом, можно сделать так: если у вас уже есть функция,
// которая должна срабатывать при наведении и что-то делать (а у нас такая есть,
// hover), то вы вместо этой колбэк-функции можете просто написать название уже
// СВОЕЙ функции (и опять же - без круглых скобок, функция сама вызовется):

// Первый, "короткий" способ (с уже заранее созданной функцией)
chooseBtn.addEventListener("mouseenter", hover);

// Вторым, "полный" способ (с колбэк-функцией):
chooseBtn.addEventListener("mouseenter", function() {
	heading.textContent = "Действительно всё!";
});


// Ну вот, всё работает. Заходим в браузер и наводим курсором мышки на кнопку,
// и УРА! - у нас всё получилось. И да - оба варианта (короткий и полный) будут
// работать, я лично это проверил. Как по мне, лучше всего использовать второй
// способ - с функцией-колбэком, так.. нагляднее, что-ли А теперь давайте добавим
// немного разнообразия на наш сайт:

chooseBtn.addEventListener("mouseleave", function(){
	heading.textContent = "Всё включено!"
});

// Для того чтобы понять, что именно я сделал, достаточно зайти в браузер и просто
// навести курсором мышки на кнопку, а затем сойти с неё - мы меняем текст, а 
// затем возвращаем наш прежний! достичь такого результата можно просто используя
// событие mouseleave - оно срабатывает тогда, когда мышка "сходит" с элемента.
// При наведении мышки на кнопку меняем текст с "Всё включено!" на "Действительно
// всё!", а когда убираем мышку текст обратно возвращается на "Всё включено!".
// Но теперь функционал программы, нашего сайта огрничивается лишь нашей фантазией
// или же от технического задания. Мы можем изменять наши события на клик, дабл
// клик или на любое другое событие! Но что еще мы можем сделать, причем чего-то
// такого.. действительно важного? если заглянуть в верстку, то там есть парочка
// модальных окон, и у них стоит свойство display со значением none. Мы же можем
// исправить это ОДНИМ КЛИКОМ! для начала, создадим переменную modal, которая
// будет хранить в себе модальное окно. Обратимся мы к объетку document, затем,
// при помощи querySelector выберем само мод. окно - у него класс "modal", поэтому
// с этим никаких проблем не будет:

let modal = document.querySelector(".modal");

// Отлично! далее, мы должны "повесить" обработчик событий на это модальное.. нет,
// не на окно, а на кнопку которая находится в переменной receiveBtn. Она имеет
// при себе ID "receive", вы это, скорее всего, помните. Но какое событие мы с
// вами будет отслеживать? всё просто - событие КЛИКА. При клике на кнопку мы
// будем выводить пользователю модальное окно. Вы наверняка видели, что на неко-
// -торых сайтах при нажатии на какую нибудь кнопочку вылазеет мод. окно? мы
// поступим точно таким же образом! поэтому, мы прописываем название переменной,
// которая хранит в себе эту кнопку, ставим точку и пишем метод addEventListener.
// В круглых скобках мы пишем слово "click", ставим запятую и начинаем функцию,
// написав слово "function", поставив круглые скобки и раскрыв уже фигурные.
// Вот как всё это будет выглядеть на данном этапе:

/*

receiveBtn.addEventListener("click", function() {

});

*/

// Отлично! теперь при клике на данную кнопку будет что-то происходить. Но что же
// именно? чтобы что-то происходило, внутри функции мы напишем то действие, кото-
// -рое и будет как раз таки происходить. Мы обращаемся непосредственно к мод.
// окну, а затем я хочу получить доступ к его СТИЛЯМ. Напоминаю, что у него (ну,
// у мод. окна) стоит display: none, и мы должны это исправить - сделать так,
// чтобы при клике на кнопку выводилось мод. окно! для этого, после "modal" мы
// ставим точку и пишем слово "style". Это объект, благодаря которому мы можем
// обращаться к стилям элемента, как будто бы мы прописали их через одноименый
// атрибут style! после него, я также ставлю точку и пишу слово "display". Но
// вы, возможно, спросите: "зачем?", а я отвечу: затем, что мы должны поменять
// значение СВОЙСТВА display! ведь CSS-свойство оно и в JS свойство, поэтому
// я пишу именно его. После всего этого я (а может быть и вы, хехе) ставлю знак
// равно (это оператор присваивания) и после него пишу слово "block", меняя
// тем самым значение у свойства display:

receiveBtn.addEventListener("click", function() {
	modal.style.display = "block";
});

// Ну вот, готово! теперь достаточно нажать на кнопку, и... УРА! модальное окно
// прямо перед нашими глазами, и это просто прекрасно! работает всё так: при
// клике на элемент, находящийся в переменной receiveBtn (а это кнопка, у которой
// есть атрибут id со значением receive) срабатывает событие "по клику", и после
// этого выполняется функция. Функция меняет стили элемента, придавая свойству
// display значение "block". Но после всего этого возникает другая проблема - а
// как нам его закрыть? для решения этой проблемы, идем в верстку и смотрим на
// кусок кода с модальным окном. Внутри него есть кнопка с классом "close", вот
// она то нам и нужна! для работы с кнопкой мы создадим переменную с таким же
// названием как у неё но с припиской "Btn", и найдя в объекте document через
// querySelector элемент с одноименным классом (close) сохраняем его в перем. -

let closeBtn = document.querySelector(".close");

// Чудненько, а теперь вешаем точно таким же образом, как мы сделали это с другой
// кнопкой, обработчик событий. Тут всё то же самое: событие по клику, функция и
// изменение свойства display с "block" на none у модального окна (перем. modal):

closeBtn.addEventListener("click", function() {
	modal.style.display = "none";
});

// Готово, теперь заходим в браузер, нажимаем на кнопку и видим, что нам таки
// выдало мод. окно. Хорошо, а теперь нажимаем на крестик - мод. окно закрылось.
// УРА! - всё работает! Как видите, работать со страницой на самом деле просто,
// очень просто. Ну а на последок мы поработаем с ФОРМОЙ внутри модального окна.
// У неё есть свои специфические события, например когда мы вводим что-то в инпут,
// теряем фокус с него, или отправляем форму на сервер. Мы с вами реализуем инте-
// -рактив при вводе имени клиента. Дело в том, что когда мы с вами вносим какую
// то информацию в инпут, у него появляется такой.. специфический атрибут как
// value. Я думаю, что вы знаете, что это за атрибут - в нём хранится текущее
// значение инпута, причем при верстке сайта мы можем указать его значение само-
// -стоятельно. Но сейчас не об этом. Когда пользователь заполняет инпут, в этот
// атрибут вписывается то, что в данный момент находится внутри него и затем это
// значение отправляется на сервер. Ну так вот - к этому атрибуту мы ТОЖЕ можем
// получить доступ через JavaScript. И поэтому мы с вами сейчас же начнем
// реализовывать какой-то функционал!

// Сейчас нам понадобится дополнительный элемент, который называется textarea,
// в который и будет вводиться сообщение нашего пользователя. И на этом этапе
// вы должны зайти в index.html нашей страницы и найти этот элемент там, а также
// посмотреть на его дополнительный атрибут name. После этого можете читать
// дальше (хотя, что вас остановит то..), так вот - мы с вами не рассмотрели
// еще один метод поиска элемента, который ищет по атрибуту name. Этот метод
// называется getElementsByName, и мы посмотрим на этот новенький (ну, для нас)
// метод на примере! мы с вами сохраним тот тег textarea, а в "name" у него
// прописано "message". Но тут есть одно но - этот метод создает КОЛЛЕКЦИЮ, а мы
// помним, что это псевдо-массив. Поэтому, после последней круглой скобки ставим
// квадратные и прописываем внутри 0:

let text = document.getElementsByName("message")[0];

// Готово! мы сохранили этот тег в переменную, теперь она там будет храниться.
// Чтобы удостовериться в том, что элемент был сохранен внутрь переменной, можно
// воспользоваться командой console.log() и вызвать его в консоль, но этим вы
// можете заняться сами, т.к я полностью уверен в том, что элемент сохранён. Ну
// вот, а теперь когда пользователь будет вводить своё имя, мы можем о нём поза-
// -ботиться и сделать для него что-то красивое и приятное! :) поэтому, берем
// элемент в nameInput и вешаем на него одно специфическое событие, которое есть
// только (ну, почти) у input'ов - называется оно "input". Вот как всё будет
// выглядеть в коде на данном этапе:

/*

nameInput.addEventListener('input')

*/

// Отлично, идем дальше. Событие input сработает тогда, когда пользователь начнет
// что-то писать непосредственно в наш инпут. После 'input' ставим запятую, пишем
// слово "function" (тем самым говорим, что сейчас будет реализована функция) и
// круглые скобки сразу после него, но как обычно внутрь ничего не записываем.
// После всего этого вставляем фигурные скобки и раскрываем их. Внутри, мы берём
// переменную text (а точнее элемент, находящийся внутри этой переменной) и после
// этого ставим точку, затем его значение (атрибут) value. Это как раз то, что
// будет введено внутрь textarea. Ну а дальше мы просто создаём новую строку! да,
// просто строку. Создаваться она будет через бэктики, то есть при помощи интер-
// -поляции. Внутри неё мы пишем следующее: "Меня зовут ${}". После слов "Меня
// зовут" я хочу записать переданное пользователем его ИМЯ, для этого я и хочу
// использовать доллар и фигурные скобки. И вы же помните, что когда срабатывает
// это событие, пользователь УЖЕ что-то успел ввести? поэтому внутри фигурных
// скобок вписываем сам nameInput, всё логично! но это не всё. После "nameInput"
// ставим точку и вписываем слово value. Далее, после закрывающей фигурной скобы
// прописываем следующее: "И я хочу спросить:". Вот и всё, смотрим на результат:

nameInput.addEventListener("input", function() {
	text.value = `Меня зовут ${nameInput.value}. И я хочу спросить:`;
});

// Прекрасно, далее нам нужно перейти в браузер и нажать на кнопку "получить
// консультацию". Вписываем в первый инпут наше (или любое другое) имя и смотрим
// вниз: тег textarea заполняется текстом, и после слова "зовут" стоит введенное
// пользователем имя! здесь мы динамически изменили значение формы в зависимости
// от того, что выдал нам пользователь. И я повторю вам, как всё это произошло:
// мы взяли тег инпут и повесили на него обработчик события input, то есть то,
// во время которого пользователь что-то вводит, и во время этого вызываем фун-
// -кцию, которая берет и записает НОВОЕ значение во внутрь textarea. Это зна-
// -чение будет опираться на тот парамтер, который ввёл пользователь. Ну что-ж,
// теперь у нас на сайте есть интерактивные элементы: это модальное окно, мы с
// вами поработали с заголовками, кнопками и прочим. Повторюсь, что весь этот
// функционал будет ограничен исключительно нашей фантазией и техническим за-
// -данием, у нас есть огромное кол-во возможностей по добавления интерактива
// на сайт. А на этом всё!

// Домашка

// 1) Повторить всё то, что мы сделали в этом уроке.
// 2) Добавить "отсебятины" на сайт, внести что-то своё (врубайте фантазию!).

// Из-за того, что в этом файле присутствует код для прошлого практического урока
// и здесь нельзя будет писать код для нынешнего, я создал новый файл.