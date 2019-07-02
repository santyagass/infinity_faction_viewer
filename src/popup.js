function hello() {
	var language = window.navigator ? (window.navigator.language ||
	window.navigator.systemLanguage ||
	window.navigator.userLanguage) : "ru";
	language = language.substr(0, 2).toLowerCase();
	if (language === 'ru') {
		document.getElementById("show").textContent="Показать значки в Classification";
		document.getElementById("createDiagram").textContent="Создать диаграмму";
	}
}

hello();