window.addEventListener('DOMContentLoaded', function() {
	let products = document.querySelectorAll(".product"),
		buttons = document.querySelectorAll("button"),
		openBtn = document.querySelector(".open");

		function createCart() {
			let cart = document.createElement('div'),
				field = document.createElement('div'),
				heading = document.createElement('h2'),
				closeBtn = document.createElement('button');

			cart.classList.add('cart');
			field.classList.add('cart-field');
			closeBtn.classList.add('close');

			heading.textContent = "В нашей корзине:";
			closeBtn.textContent = "Закрыть";

			document.body.appendChild(cart);

			cart.appendChild(heading);
			cart.appendChild(field);
			cart.appendChild(closeBtn);
		}

		createCart();

		let field = document.querySelector(".cart-field"),
			cart = document.querySelector(".cart"),
			close = document.querySelector(".close");
		
		function openCart() {
			cart.style.display = "block";
		}

		function closeCart() {
			cart.style.display = "none";
		}

		openBtn.addEventListener('click', openCart);
		close.addEventListener('click', closeCart);

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function() {
				let item = products[i].cloneNode(true),
				btn = item.querySelector("button");

				btn.remove();
				field.appendChild(item);
				products[i].remove();
			});
		}
});

// Полноценная практкика по написанию корзины товаров

// Итак.. сегодня мы займемся практикой. Но не простой, как в прошлом уроке - мы
// реализуем корзину товаров! и кроме этого, мы узнаем про еще несколько методов,
// которые применимы для элементов на странице. Вообщем, будет такая же как и
// в прошлый практика, но будет чутка посложнее.. но об этом позже. Сейчас у меня
// есть для вас сразу одно очень важное сообщение: понятное дело, что в реальных
// проектах создание корзины товаров и перемещение элементов в неё осуществляется
// при помощи комбинации языков - там есть и код PHP, взаимодействие с базами дан-
// -ных и так далее. Но в данном уроке мы будем эмулировать всё это при помощи
// одного лишь JavaScript'a. Этого будет достаточно для того, чтобы убедиться
// в том, что JS на самом деле способен на многое и что он один сможет реализовать
// целую корзину товаров. Но прежде чем приступать к коду, мы должны поставить
// перед собой одну главную задачу: у нас на странице есть список товаров. У каж-
// -дого товара есть своя кнопка "Купить". Мы должны реализовать такой функционал,
// чтобы при клике на эту кнопку товар исчезал из общего списка и попадал в кор-
// -зину товаров, которой сейчас на сайте нет. На верстке её, кстати, тоже нет.
// Эту корзину мы будем создавать динамически, при помощи того же JavaScript'а.
// Кроме этого, когда товар будет попадать в корзину, у него будет исчезать его
// кнопка, ведь товар УЖЕ находится в корзинке и попадать туда повторно не надо :)
// Каждую эту задачу мы будем постепенно реализовывать в коде. Начинаем!

// Первое, с чего чаще всего начинают свой скрипт программисты, это получение той
// информации со страницы, с которой они и будут работать. Здесь подразумевается,
// что мы будем работать с "продуктами" - это те же самые карточки с товарами, у
// каждого этого товара есть свой определенный класс (общий) - product. Дальше,
// мы точно будем работать с кнопкой "Купить!" внутри каждого продукта. Почему
// именно "внутри"? потому, что кнопка находится ВНУТРИ элемента с этим классом.
// А также, мы точно будем работать с кнопкой "Открыть корзину", которая нахо-
// -дится выше всех остальных элементов на сайте. Для того, чтобы получить эти
// элементы, мы воспользуемся переменными и современным методом querySelectorAll.
// Первая переменная у нас будет называться products, в ней будут храниться все
// товары с сайта. Пользоваться мы будем именно методом querySelectorALL, который
// возвращает псевдо-массив, ведь элементов на сайте у нас много и получать каждый
// элемент по отдельности.. плохо. Вторая переменная будет называться buttons, и
// уже из названия становится предельно ясно, что в ней будут храниться кнопки
// "Купить!", находящиеся внутри каждого товара. Третяя переменная будет назы-
// -ваться openBtn, но использовать мы будем метод querySelector, без All в конце,
// потому что кнопка "Открыть корзину" у нас на сайте находится в единственном
// экземпляре. И вот названия классов, по которым мы будем искать эти элементы:
// "product" у товаров, у кнопок нет класса - просто тег "button", а у кнопки
// класс "open" соответственно:

// let products = document.querySelectorAll(".product"),
// 	buttons = document.querySelectorAll("button"),
// 	openBtn = document.querySelector(".open");

// Превосходно, теперь мы получили переменные с элементами со страницы. Теперь,
// перед тем как начать работу с корзиной, я расскажу вам, читатель, о том как
// происходит отрисовка страницы в браузере. Я уверен на 99%, что вы из прошлых
// знаете уроков знаете о том, что когда HTML-документ попадает в браузер, он
// начинает грузится сверху вниз. Но этим всё не ограничивается. Что значит
// сверху вниз? это значит, что сначала подгружаеся его title, затем стили, они
// считываются и рассматриваются, затем идёт верстка, а после, к ней применяются
// сами стили. На нашем сайте есть блоки, и всё это дерево тегов можно представить
// как обычный документ, который можно записать в Word'е, только он у нас со своей
// специфической разметкой. А далее, когда уже загрузилась вся страница и рендер
// (отрисовка) почти кончена, браузер доходит до тега script. Подгружается наш
// JS-скрипт и.. на этом всё заканчивается, после него идут закрывающие теги и всё.
// Но здесь есть один важный момент, про который мы могли не подумать или забыли,
// а именно - картинки. На нашем рабочем сайте, каждый товар имеет свою картинку,
// которая показывает то, за какой товар отвечает тот или иной блок. Если у юзера
// (или даже у вас) слабый интернет, а картинка весит много (10-15 мегабайт), то
// она просто-напросто повиснет. Таким образом, наша страница может быть не до
// конца построена! но наш скрипт уже начинает прогрузку, и если вдруг какой-то
// скрипт начинает взаимодействовать с элементами на странице, а их еще нет, в
// таком случае наш скрипт может сломаться. В этой ситуации мы должны знать, что
// мы должны запускать наш скрипт тогда, когда страница уже готова ко всем дейст-
// -виям, которые может провести пользователь. В JS есть такое событие, а вернее
// даже два события, которые помогут нам "отловить" такие моменты и спасти наш
// скрипт от поломки. Какие это события? сейчас и узнаем!

// Первое событие называется просто load. Оно срабатывает тогда, когда наш сайт 
// был полностью прогружен, когда наше дерево тегов простроилось, картинки были
// загружены и шрифты из интернета были применены - полная готовность сайта. Но
// есть и событие попроще, которое на практике чаще всего и применяется. Сраба-
// -тывает он тогда, когда дерево тегов уже построено и тег, к которому что-то
// применяется уже есть. Ему не важно, что картинка не загружена или что стили
// еще не до конца прогружены - тег есть? есть, значит уже можно приступать к
// работе. Пусть там всякие стили, шрифты и прочее-прочее займутся прогрузкой,
// а нас, как JS-разработчиков волнуют лишь теги. Именно это событие в реальных
// проектах мы будем отлавливать. Пока что название события я говорить не буду,
// так как есть кое что, о чем очень важно поговорить. На практике, вы очень
// часто будете слышать такую аббревиатуру, как DOM, сокращение от Document
// Object Model. Если рассказывать про него вкратце и по простому, то ДОМ это
// то же самое древо тегов, которое есть на странице, с ним мы и работаем. Как
// я уже сказал, мы хотим, чтобы наш скрипт запускался только тогда, когда наша
// страница будет готова его обработать. Поэтому нам понадобится такой объект
// как window, обработчик событий addEventListener и само событие, при котором
// уже загружены все теги на странице. Называется оно DOMContentLoaded. Это
// событие срабатывает тогда, когда всё древо тегов уже загружено, а стили с
// картинками - нет. После этого мы создаем функцию, и уже внутрь неё переме-
// -щаем все наши переменные. Но, поскольку добавлять код мы будем исключительно
// внутрь функции обработчика событий, код я буду писать на 1-ой строчке этого
// файла и туда вносить поправки, так как менять код внутри обработчика событий
// невозможно. Но я буду повторять код внутри многострочных комментариев, чтобы
// вам, читатель, не приходилось каждый раз заглядывать в самый верх файла. На
// данный момент там, на первой строке файла хранится следующий код:

/*

window.addEventListener('DOMContentLoaded', function() {
	let products = document.querySelectorAll('.product'),
		buttons = document.querySelectorAll('button'),
		openBtn = document.querySelector('.open');
});

*/

// Начнем с того, что же такое window - если вкратце, то это окно браузера у
// нашего пользователя, содеражщее в себе всё дерево DOM. Это самый верховный,
// глобальный объект, то есть самый главный. Хорошо, про window узнали, движем
// вперёд. Дальше мы создадим корзину, которая будет у нас работать на сайте.
// Да, мы действительно можем СОЗДАВАТЬ HTML-теги на сайте и делать это дина-
// -мически, из JS-файла. Но чтобы ограничить блок кода, который будет только
// заниматься созданием корзины, мы создадим функцию и будем писать код для
// создания корзины исключительно в нём, а называться она будет очень просто:
// "createCart". Чтобы создать более-менее приличную и.. нормальную корзину,
// нам понадобятся всего четыре элемента, во первых - надо создать саму
// корзину, куда будут помещаться все товары со страницы, а также понадобится
// определенный участок в этой корзине, куда и будут складываться все эти товары.
// Также понадобится небольшой заголовок и кнопка для закрытия корзины, и всё
// это мы можем создать при помощи JavaScript'а. 

// Первую переменную, куда мы поместим первый созданный нами элемент, назовем
// мы cart - сама корзина. В качестве значения мы присваивем ей создаваемый
// элемент. Но и тут вы зададите вопрос: как создавать элементы на странице
// через JS? а я отвечу, что для этого может использоваться специальный метод
// createElement, у которого из названия уже понятно, что он создает элементы,
// теги на странице, ну или по крайней мере позволяет нам это сделать. После
// написания названия метода ставим круглые скобки, затем кавычки и внутри само
// название тега, в нашем случае это div. После того как мы прописали название
// тега, внутри переменной появится наш элемент div. Ставим запятую, создаем
// следующую переменную, называться она будет field. В неё мы записываем то же
// самое, что и в cart, но не волнуйтесь - эти дивы чуть позже мы сделаем разными.
// Ставим запятую и создаем еще одну переменную, называться она будет heading и в
// неё мы опять таки записываем то же самое, но вместо div'а мы создаём элемент h2
// после этого ставим запятую. И последняя переменная - это кнопка, которая будет
// закрывать корзину. Назовём мы её тоже по простому, closeBtn. Вот что появилось
// в коде наверху:

/*

function createCart() {
	let cart = document.createElement('div'),
	field = document.createElement('div'),
	heading = document.createElement('h2'),
	closeBtn = document.createElement('button');
}

*/

// Пока что на странице этих элементов нет, и никаких стилей и наполнения у этих
// элементов тоже нет, и мы будем это исправлять! первое, что нам надо сделать,
// это как-то стилизовать нашу корзину, так что обратимся к переменной cart (но
// внутри той же самой функции, ибо и создание и стилизация будут динамическими).
// Мы должны добавить к ней какой-то класс, ибо понятное дело, что если мы хотим
// изменить несколько стилистических правил у этого элемента, то намного проще
// просто добавить класс, чем постоянно менять стили через свойство style. Но
// на самом деле свойство style - очень хороший инструмент для изменения стилей,
// но только на один раз. Для управления классами, в JavaScript'е есть свойство
// classList, и из названия понятно, что это список классов, которые есть у эле-
// -мента. Это свойство прекрасно тем, что с ним можно удалять, добавлять и даже
// ПРОВЕРЯТЬ классы, в смысле их наличие. Свойство classList используется в JS
// чаще, чем другое свойство - className, подробнее о нём можно узнать в интернете.
// Вкратце - это сильно устаревший и неудобный инструмент для работы с классами,
// поэтому к cart применяется свойство classList:

/*

function createCart() {
	...

	cart.classList
}

*/

// Далее, как я и говорил, мы должны добавить к корзине класс, и делается это
// через специальный метод add, который есть у свойства classList. Класс будет
// называться cart, всё логично! -

/*

function createCart() {
	...

	cart.classList.add('cart');
}

*/

// И всё, класс добавился! это можно проверить, выведя элемент в консоль, но
// делать так я не буду - я и без того уверен, что у элемента появился класс!
// А теперь нам надо добавить классы КО ВСЕМ элементам, кроме тега h2, он в
// классе не нуждается: это будут классы cart-field у элемента field и close
// у элемента closeBtn соответственно -

/*

function createCart() {
	...

	cart.classList.add('cart');
	field.classList.add('cart-field');
	closeBtn.classList.add('close');
}

*/

// Готово! теперь у наших элементов, с которыми мы будем работать, есть свои
// собственные классы. Таким образом, мы сделали наш первый шаг в сторону стили-
// -зации корзины. Далее, нам необходимо заполнить наш тег h2, и сделаем мы это
// внутри функции, обратившись к элементу heading и применив к нему свойство
// textContent. Это свойство нам уже знакомо: оно используется для того, чтобы
// поместить текст внутрь элемента. Мы заполним наш тег h2 текстом, а написано 
// там будет следующее -"В нашей корзине:". Следом за этим, мы также заполним 
// нашу кнопку closeBtn, чтобы было сразу понятно для чего эта кнопка, текст там
// будет следующий - "Закрыть":

/*

function createCart() {
	...
	
	heading.textContent = "В нашей корзине:";
	closeBtn.textContent = "Закрыть";
}

*/

// Отлично, теперь у нас уже есть готовый каркас. Далее, нам необходимо ДОБАВИТЬ
// эти элементы на нашу страницу. Сделаем мы это через команду "appendChild". 
// Эта команда позволяет добавить элемент, который был создан в JS-файле в
// любой другой элемент. Что это значит? предлагаю для начала обратиться к
// самому документу, одному из высших объектов - document. document это
// то же самое, что и весь наш документ, так что разъяснять ничего не надо.
// Стоит лишь добавить, что как раз таки ОН содержит ВСЕ теги на странице
// как другие объекты и как свои свойства, а это значит, что мы можем обратиться
// к body! это мы и сделаем, в итоге получится вот такая запись:

// document.body

// Мы обращаемся к объекту body, который находится в объекте document, всё просто.
// Далее, к объетку body применяется команда, метод appendChild. В круглых
// скобках мы вписываем переменную cart, таким образом на странице должен появится
// div с классом cart:

/*

function createCart() {
	...
	document.body.appendChild(cart);
}

*/

// Прекрасно, теперь на нашей странице появился элемент, который мы создали
// в JS-файле! этот элемент хранится в переменной cart, а какой именно элемент
// хранится в этой переменной, мы уже знаем - div с классом "cart", то есть сама
// наша корзина (точнее её каркас, потому что это всего лишь пустой div). А теперь
// пришла пора заполнять нашу корзину! но как мы это сделаем? очень просто:
// сделаем мы это используя тот же метод, то есть appendChild, обратившись к самой
// переменной cart. Внутрь неё мы мы поместим всё то, что создавалось для неё же,
// а именно: heading, field и closeBtn. После того как мы добавим эти элементы в
// саму корзину, то есть заполним её, нам понадобится вызвать эту функцию, чтобы
// она сработала, но вызывать её мы будем ЗА пределами функции:

/*

function (createCart) {
	...
	cart.appendChild(heading);
	cart.appendChild(field);
	cart.appendChild(closeBtn);

}

createCart();

*/

// Замечательно, теперь наш элемент cart должен добавиться на страницу. В самом
// HTML-коде его так-то и нет, поэтому используем DevTools и убеждаемся, что наш
// элемент в самом деле появился! раскрыв его мы увидим, что внутри него также
// находятся div с классом cart-field, то есть наш элемент field и button со своим
// классом close, то есть наш элемент closeBtn. Чтобы увидеть эти элементы будучи
// отображенными на странице, достаточно взглянуть на столбец "Styles" в том же
// DevTools (причём в том же разделе Elements), заранее нажав на элемент cart: мы
// увидим, что у него по умолчанию стоит display: none. Для того, чтобы убрать (ну
// или отключить) какие-то стили у элемента в DevTools, достаточно нажать на одну
// кнопку, которая находится слева от самого CSS-правила. Отключаем стили, которые
// применяют к элементу display: none и видим, что наши элементы таки добавлены на
// страницу и отображаются, если убрать "display: none"! всё потому, что у этих
// элементов уже заранее были готовые стили, оставалось только их создать и
// добавить на страницу, что мы с вами и сделали. Отлично, идём дальше.

// Как и в прошлом уроке, нам необходимо создать функции, которые закрывают и
// открывают корзину. Сами подумайте - рядовой пользователь не станет лезть
// в DevTools лишь для того, чтобы открыть простую корзину товаров :) первым
// делом мы создадим НОВЫЕ переменные. Создадим мы их в конце обработчика
// событий, чтобы ограничить код и чтобы мы чётко понимали, что они появляются
// только после того, как функция createCart выполнится. Почему? потому, что
// сейчас у нас на странице УЖЕ есть доп. элементы, с которыми мы можем работать
// (или будем), включая саму корзину. Итак, создаём переменную field. Вы меня
// спросите: "как мы создадим такую переменную если она уже есть?" - а я вам
// отвечу, что такая переменная существует ТОЛЬКО ДЛЯ ФУНКЦИИ, то есть в нашей
// текущей области видимости её нет. В качестве значения мы передаем следующее:
// обращаемся к объекту document, используем к нему метод querySelector и в
// круглых скобках метода передаем класс .cart-field:

/*

window.addEventListener('DOMContentLoaded', function () {
	...
	let field = document.querySelector('.cart-field'),
});

*/

// Отлично, таким образом у нас есть новая переменная в глобальной области
// видимости. field - это "внутренняя оболочка" нашей корзины, то место, где
// и будут располагаться все те элементы, которые пользователь будет добавлять
// в корзину товаров. Дальше мы ставим запятую и прописываем еще одну новую
// переменную, называться она будет cart, а в качестве значения передаем
// всё то же самое, что и в случае с field, но у элемента будет класс .cart,
// это наша корзина. Ставим запятую и создаем следующую переменную, называться
// она будет close, а в качестве значения передается опять же всё то же самое,
// но класс у элемента будет другой - .close:

/*

window.addEventListener('DOMContentLoaded', function () {
	...
	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');
});

*/

// Прекрасно. Далее мы создаем две функции, которые как раз и будут открывать и
// закрывать нашу корзину. Прописываем слово function и после него само название
// функции. Первая функция называется.. ну, будет называться openCart, она и
// будет открывать корзину. Ставим круглые скобки, но вот в качестве аргументов
// мы ей ничего не передаем, поэтому оставляем их пустыми. Далее ставим фигурные
// скобки и внутри них обращаемся к переменной cart. Обратились? идём дальше!
// применяем свойство style и уже у свойства style обращаемся к другому свойству,
// но не из JavaScript'а - к СТИЛЕВОМУ свойству. Это свойство нам уже знакомо
// и называется оно display. После названия свойства ставим оператор присваивания,
// после него в кавычках ставится значение block:

/*

window.addEventListener('DOMContentLoaded', function () {
	...
	function openCart() {
		cart.style.display = "block";
	}
});

*/

// Восхитительно, теперь осталась функция которая будет выполнять совсем другое,
// противоположное действие - закрывать корзину. Называться она будет практически
// также, как и предыдущая функция, но вместо слова open будет стоять слово close
// и в качестве значения display мы ставим none, а не block:

/*

window.addEventListener('DOMContentLoaded', function() {
	...
	function openCart() {
		cart.style.display = "block";
	}

	function closeCart() {
		cart.style.display = "none";
	}
});

*/

// Изумительно. Теперь нам необходимо взять и использовать эти две функции. Для
// этого мы возьмем и навесим обработчик событий на кнопку openBtn, которую мы с
// вами уже до этого создавали. Мы будем отлавливать событие по клику, наиболее
// часто отлавливаемое событие, но вот колбэк-функцию использовать мы не будем,
// у нас есть своя функция! называется она openCart, мы её недавно и создали.
// Но это еще не всё, у нас же ведь две функции, а не одна! поэтому берем и
// навешиваем обработчик событий на другую кнопку, close, а еще мы не станем
// использовать колбэк-функцию, также как и в случае с openBtn - мы будем
// использовать нашу собственную функцию, closeCart:

/*

window.addEventListener('DOMContentLoaded', function() {
	...
	openBtn.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

});

*/

// Прекрасно, еще один этап выполнен. Заходим в браузер и смотрим на результат:
// нажимаем на кнопку "Открыть корзину", и.. видим, что наша корзина отобразилась
// при клике! а теперь нажимаем на кнопку "Закрыть" и также видим, что корзина
// закрылась. Отлично, теперь функционал для создания, а также открытия-закрытия
// корзины готов, но впереди нас ждёт самый сложный этап. Перед тем, как мы
// начнём писать код, его следует обговорить и простроить тот алгоритм действий,
// которые мы выполним непосредственно в коде. В первую очередь следует отметить,
// что у нас множество различных элементов на странице, у каждого элемента есть
// своя кнопка купить, в сумме их всего восемь. Это значит, что на каждый из
// этих элементов нам нужно навесить обработчик события - мы должны будем отслежи-
// -вать событие по клику, на элемент кликают и для нас что-то происходит. Что
// именно происходит? ну, в первую очередь мы должны взять элемент, к которому
// относится эта кнопка и перенести его в корзину. Сделать это можно при помощи
// простого клона, но что такое "клон"? на самом деле это ничего необычного,
// все мы знаем, что такое клон в его основном понимании. Так вот, мы берём
// и создаём клон этого товара и помещаем этот клон в корзину, а сам товар мы
// берём и удаляем, по крайней мере можем удалить. Но есть один маленький нюанс:
// у этого клона надо будет удалить кнопку "Купить!", так как она нам больше не
// нужна, товар у нас уже в корзине. Вот такой вот алгоритм действий! приступим
// к самой реализации данного функционала.

// На самом деле, есть два способа реализации этого функционала, и мы рассмотрим
// оба варианта. И начнём мы с первого, старого и понятного для новичков, но уже
// "старенький", а второй будет наиболее современным, но трудненьким.

// Первый способ: простой, немного устаревший

// Итак, приступим к изучению первого способа - начнём мы с простого цикла for.
// Зачем нам вообще цикл? а затем, что нам необходимо обработать каждую из
// кнопок. Поэтому, создаём цикл и внутри него итератор, который на первой
// итерации равен нулю. Далее задаём условие, условие у нас должно быть таким,
// чтобы цикл работал до того момента, пока у нас не закончатся кнопки. Если
// посмотреть в наш рабочий код, то мы заметим, что еще в самом начале у нас
// были созданы три переменные, одна из которых переменная buttons, она содержит
// в себе псевдомассив, который в свою очередь содержит те самые кнопки, которые
// мы хотим обрабатывать. Поэтому, условие будет следующим: i < buttons.length,
// что означает, что наш код будет работать до тех пор, пока не кончится псевдо-
// -массив с нашими кнопками. Дальше нам необходимо указать действие, которое
// будет происходить каждую итерацию цикла, но тут всё по стандарту - мы будем
// просто увеличивать наш итератор на одну единицу при помощи инкремента. И
// последнее, что надо сделать после настройки цикла, это поставить фиг. скобки:

/*

for (let i = 0; i < buttons.length; i++) {
	
}

*/

// Готово, цикл создан и настроен. Теперь переходим к действиям внутри цикла.
// Тут мы вспоминаем, что на каждую кнопку, которая будет перебираться нашим
// циклом, мы должны повесить обработчик события. Для этого внутри цикла мы
// берём и обращаемся к переменной buttons, после этого ставим квадратные
// скобки и указываем в качестве индекса переменную i, то есть наш итератор.
// Я надеюсь, что вы помните, что это значит - мы с вами будем перебирать каждый
// элемент массива (или псевдомассива) buttons и будем что-то с ним делать. То
// есть, когда мы ставим переменную i, то вместо неё у нас подставляется то
// значение, которое оно в себе содержит: в самом начале работы цикла это будет
// ноль, таким образом мы обратимся к первому элементу массива, на следующей
// итерации это будет единица, таким образом мы обратимся ко второму элементу
// массива и так далее. Хорошо, это готово, а теперь ставим точку и прописываем
// команду "addEventListener", наш обработчик событий. мы будем отслеживать
// событие по клику, click, поэтому в круглых скобках прописывем слово click,
// и внимание - обязательно в кавычках! -

/*

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click')	
}

*/

// И это тоже готово, теперь ставим запятую и прописываем команду function,
// поставив после неё круглые и фигурные скобки, создавая тем самым колбэк-
// -функцию. Внутри функции мы будем производить несколько действий, и каждое
// из них будет происходить лишь при клике на кнопку. Ну, во первых, мы будем
// создавать какую-то переменную, и как раз-таки в неё мы и будем помещать
// клон нашего товара. Помните, сверху в коде мы мы создавали такую переменную,
// как products? как раз в ней и лежат все те элементы, которые есть на нашей
// странице. И если просто банально посмотреть на верстку, то мы увидим, что
// у нас есть первый "продукт", второй продукт, третий и так далее, и нумерация
// этих продуктов совпадает с нумерацией кнопок. Почему? а потому, что кнопка
// номер-один относится к товару номер-один, это логично. Это можно использовать
// в нашем коде. Итак, к делу - создаём переменную item, и в качестве значения
// передаём следующее: обращаемся к переменной products через индексацию, и в
// квадратных скобках ставим переменную i, тот же индекс:

/*

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		let item = products[i]
	})
}

*/ 

// Зачем мы так сделали? а затем, что если мы нажали на первую кнопку, мы возьмём
// продукт под номером один. Далее, после закрывающей фигурной скобки мы ставим
// точку и прописываем команду, метод cloneNode, далее ставим круглые скобки.
// Этот метод как раз и позволяет нам КЛОНИРОВАТЬ элемент со страницы, но это
// ещё не всё - в круглых скобках необходимо вписать слово true. Это нужно для
// того, чтобы у нас произошло "глубокое клонирование". Что это вообще значит?
// значит, что у нас скопируется ВСЯ вёрстка, то есть всё то, что есть в том
// продукте, на который мы нажали. Если мы не укажем true в круглых скобках,
// то у нас бы скопировалась лишь внешняя оболочка элемента, то есть скопировался
// бы лишь div с классом product, вот так - <div class="product"></div>. Так,
// хорошо, а вот как будет выглядеть код на данном этапе:

/*

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		let item = products[i].cloneNode(true)
	})
}

*/

// Итак, клон у нас есть и он лежит в переменной, но нам нужна еще одна переменная
// и мы её назовём btn. И теперь смотрите, какая у нас ситуация получается: т.к
// мы уже скопировали, склонировали наш продукт, мы можем поместить его в корзину,
// да, хорошо, этим мы займемся, но проблема еще и в том, что по техническому
// заданию нам необходимо у клона УДАЛИТЬ кнопку "Купить!". И здесь нам нужно
// реализовать такой функционал, что мы заходим внутрь клона, находим кнопку
// и удаляем её. Здесь мы можем поступить таким образом. Присваиваем переменной
// следующее значение - обращаемся к переменной item и прописываем querySelector,
// метод, который ищет определенный элемент по селектору. И заметьте, что мы ищем
// не в документе, а в элементе-клоне! да, и такое возможно. Ставим круглые скобки
// и внутри них в кавычках записываем "button". В скопированном элементе кнопка
// будет всего лишь одна, поэтому мы использовали метод querySelector а не какой
// то другой:

/*

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		let item = products[i].cloneNode(true),
		btn = item.querySelector("button");
	})
}

*/

// Хорошо, теперь мы можем приступить к тем действиям, которые мы хотим выполнить.
// Обращаемся к переменной btn, ставим точку и прописываем команду, метод remove.
// Это простой и современный метод для удаления элементов со страницы. Ставим
// круглые скобки и точку с запятой, всё, на этом этапе кнопка удалена. Хорошо,
// следующее действие будет следующим: внутрь переменной field нам необходимо
// поместить наш новый элемент-клон. Если посмотреть на наш код в самом начале
// файла, то можно заметить переменную field, которая создается после того как
// мы создаём корзину, и хранит она в себе элемент div с классом cart-field.
// Этот элемент является оболочкой нашей корзины и тем местом, в которое будут
// попадать те элементы, которые наш пользователь добавляет в корзину, нажав
// на кнопку "купить". Так вот, к чему это я? - обращаемся к этой переменной
// и применяем метод appendChild. С этим методом мы уже знакомы и знаем, что
// он добавляет определенные элементы ВНУТРЬ других элементов. Ставим круглые
// скобки и вписываем внутрь слово item, и таким образом мы добавляем внутрь
// "поля" нашей корзины наш элемент-клон:

/*

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		let item = products[i].cloneNode(true),
		btn = item.querySelector("button");

		btn.remove();
		field.appendChild(item);
	})
}

*/

// Прекрасно! и последнее, что нам осталось сделать, это удалить элемент со
// страницы. Для этого обращаемся к переменной products через индексацию,
// прописав название этой переменной и поставив квадратные скобки. Внутри
// них мы ставим переменную i, наш итератор. После квадратных скобок мы к
// этому элементу применяем метод remove, удаляя тем самым элемент со страницы:

/*

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		let item = products[i].cloneNode(true),
		btn = item.querySelector("button");

		btn.remove();
		field.appendChild(item);
		products[i].remove();
	})
}

*/

// Великолепно, всё готово. Если вы заметили, то здесь логика немного (или даже
// намного) сложнее, чем раньше, но мы поставили точное техническое задание,
// проговорили алгоритм того, как всё должно работать и просто записали всё это
// в виде JavaScript кода. Теперь осталось протестировать наш код! зайдя в
// браузер, мы нажимаем на кнопку "Купить!", и... УРА! элемент удалился со
// страницы, но добавился ли он в корзину? нажимаем кнопку "Открыть корзину"
// и видим, что те элементы, на которые мы нажали, успешно были добавлены в
// корзину и никакой кнопки "Купить!" у них нет. Всё получилось, и наша
// "с пылу с жару" корзина - готова. Но это был первый способ реализации
// этого функционала, остался последний, второй, его мы и рассмотрим.
// КХЕ.. 666 строка :)

// Второй способ: немного сложный, более современный

// Но его, к сожалению, рассматривать мы будем позже!