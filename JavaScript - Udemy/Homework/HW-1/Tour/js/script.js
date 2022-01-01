let modalWindow = document.querySelector('.modal'),
	closeBtn_MW = modalWindow.querySelector('.close'),
	textarea_MW = modalWindow.querySelector("textarea"),
	title = document.querySelector("h2.wow"),
	chooseBtn = document.getElementById("choose"),
	receiveBtn = document.getElementById("receive"),
	nameInput_MW = document.querySelector('.contactform_name'),
	phoneInput_MW = document.querySelectorAll('.contactform_phone')[1],
	mailInput_MW = document.querySelectorAll('.contactform_mail')[1];

chooseBtn.addEventListener("mouseenter", function() {
	title.textContent = "Действительно всё!";
});

chooseBtn.addEventListener("mouseleave", function() {
	title.textContent = "Всё включено!";
});

receiveBtn.addEventListener("click", function() {
	modalWindow.style.display = "block";
});

closeBtn_MW.addEventListener("click", function() {
	modalWindow.style.display = "none"
});

mailInput_MW.addEventListener("input", function() {
	textarea_MW.textContent = `Здравствуйте, меня зовут ${nameInput_MW.value}, и я бы хотел спросить у вас следующее:\n---\n(Напишите сюда свой вопрос)\n---\nМой номер телефона: ${phoneInput_MW.value}\nМоя почта: ${mailInput_MW.value}`
});

// Вопросы из ДЗ:

// Вопрос 1) - есть ли ограничение в количестве обработчиков событий на 1 элемент?

// Ответ - нет, можно поставить хоть 100 обработчиков событий на 1 элемент.

// ---

// Вопрос 2) - в чем преимущества использования addEventListener?

// Ответ - во первых: это современный метод добавления обработчика событий; во
// вторых: мы не "засоряем" HTML-код; в третьих: экономия места в некоторой степени.

// Вопросы из теста по уроку:

// Вопрос 1) - при получении элемента через getElementsByClassName мы получим...

// Ответ - псевдомассив данных (даже если элемент 1).
// Мой ответ - тот же.

// ---

// Вопрос 2) - используя метод querySelector мы получим...

// Ответ - первый элемент на странице, соответствующий селектору.
// Мой ответ - тот же.

// ---

// Вопрос 3) - что обознает событие submit?

// Ответ - подтверждение отправки формы.
// Мой ответ - тот же.

// ---

// Вопрос 4) - На какие элементы можно использовать обработчик события change?

// Ответ - input, select, textarea.
// Мой ответ - button, input, area.

// ---

// Итог: ДЗ выполнено идеально (по моему мнению); тест так же, но с одной ошибкой.