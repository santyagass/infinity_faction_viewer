document.getElementById("showClassificationIcons").onclick = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "start"}, function(response) {});
	});
};

document.getElementById("createDiagramOverlap").onclick = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "dia"}, function(response) {});
	});
};