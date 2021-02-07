function hello() {
	if (window.navigator.language.slice(0, 2) === 'ru') {
		document.getElementById("showClassificationIcons").textContent="Показать значки в Classification";
		document.getElementById("createDiagramOverlap").textContent="Создать диаграмму";
	}
}

hello();