document.getElementById("show").onclick = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "start"}, function(response) {});
	});
};

document.getElementById("createDiagram").onclick = function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {greeting: "dia"}, function(response) {});
	});
};

// document.getElementById("createDiagram").onclick = function() {

// };
