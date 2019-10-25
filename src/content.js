var libr =
	{
		000: {count: 0, op: 0, tp: 0, title: "•unknown", color: '#eeeeee', faction: "unknown"},
		101: {count: 0, op: 0, tp: 0, title: "•PanOceania", color: '#009ee4', faction: "PanOceania"},
		102: {count: 0, op: 0, tp: 0, title: "•SAA", color: '#00a5ee', faction: "PanOceania"},
		103: {count: 0, op: 0, tp: 0, title: "•MO", color: '#0091d0', faction: "PanOceania"},
		104: {count: 0, op: 0, tp: 0, title: "•Neoterra", color: '#9e9ce4', faction: "PanOceania"},
		105: {count: 0, op: 0, tp: 0, title: "•Varuna", color: '#6ad7fc', faction: "PanOceania"},
		201: {count: 0, op: 0, tp: 0, title: "•Yu Jing", color: '#b0cb11', faction: "Yu Jing"},
		202: {count: 0, op: 0, tp: 0, title: "•ISS", color: '#6c7c0a', faction: "Yu Jing"},
		204: {count: 0, op: 0, tp: 0, title: "•IA", color: '#d9fa15', faction: "Yu Jing"},
		301: {count: 0, op: 0, tp: 0, title: "•Ariadna", color: '#0b7db3', faction: "Ariadna"},
		302: {count: 0, op: 0, tp: 0, title: "•Caledonians", color: '#0c8ecb', faction: "Ariadna"},
		303: {count: 0, op: 0, tp: 0, title: "•FRRM", color: '#0d97d9', faction: "Ariadna"},
		304: {count: 0, op: 0, tp: 0, title: "•USAriadna", color: '#0d9ce0', faction: "Ariadna"},
		305: {count: 0, op: 0, tp: 0, title: "•Tartary AC", color: '#0ea3ea', faction: "Ariadna"},
		401: {count: 0, op: 0, tp: 0, title: "•Haqqislam", color: '#ffe149', faction: "Haqqislam"},
		402: {count: 0, op: 0, tp: 0, title: "•Hassassin Bahram", color: '#e8cd42', faction: "Haqqislam"},
		403: {count: 0, op: 0, tp: 0, title: "•Qapu Khalqi", color: '#d6bd3c', faction: "Haqqislam"},
		404: {count: 0, op: 0, tp: 0, title: "•Ramah", color: '#cfa12d', faction: "Haqqislam"},
		501: {count: 0, op: 0, tp: 0, title: "•Nomads", color: '#e30b14', faction: "Nomads"},
		502: {count: 0, op: 0, tp: 0, title: "•Corregidor", color: '#e34c31', faction: "Nomads"},
		503: {count: 0, op: 0, tp: 0, title: "•Bakunin", color: '#e36b38', faction: "Nomads"},
		504: {count: 0, op: 0, tp: 0, title: "•Tunguska", color: '#e38869', faction: "Nomads"},
		601: {count: 0, op: 0, tp: 0, title: "•Combined Army", color: '#a69fd5', faction: "Combined Army"},
		602: {count: 0, op: 0, tp: 0, title: "•Morats", color: '#9791c2', faction: "Combined Army"},
		603: {count: 0, op: 0, tp: 0, title: "•Shasvastii", color: '#8a84b1', faction: "Combined Army"},
		604: {count: 0, op: 0, tp: 0, title: "•Onyx", color: '#777299', faction: "Combined Army"},
		701: {count: 0, op: 0, tp: 0, title: "•ALEPH", color: '#9baba8', faction: "ALEPH"},
		702: {count: 0, op: 0, tp: 0, title: "•Steel Phalanx", color: '#b8cac7', faction: "ALEPH"},
		703: {count: 0, op: 0, tp: 0, title: "•OSS", color: '#c5d9d5', faction: "ALEPH"},
		801: {count: 0, op: 0, tp: 0, title: "•Tohaa", color: '#a4e412', faction: "Tohaa"},
		902: {count: 0, op: 0, tp: 0, title: "•Druze BS", color: '#b6cb94', faction: "NA2"},
		903: {count: 0, op: 0, tp: 0, title: "•JSA", color: '#e31e45', faction: "NA2"},
		904: {count: 0, op: 0, tp: 0, title: "•Ikari", color: '#fffc1c', faction: "NA2"},
		905: {count: 0, op: 0, tp: 0, title: "•Starco", color: '#e45d5d', faction: "NA2"},
		906: {count: 0, op: 0, tp: 0, title: "•Spiral", color: '#b9db01', faction: "NA2"},
		907: {count: 0, op: 0, tp: 0, title: "•Foreign", color: '#67b4b5', faction: "NA2"},
		908: {count: 0, op: 0, tp: 0, title: "•Dahshat", color: '#cbbe7f', faction: "NA2"},
		1001: {count: 0, op: 0, tp: 0, title: "•O-12", color: '#dfa532', faction: "O-12"}
	};

factionStat = {"unknown": {name: "unknown", opSum:0, tpSum: 0, opSr : 0, tpSr: 0, count: 0}};
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		libr =
			{
				000: {count: 0, op: 0, tp: 0, title: "•unknown", color: '#eeeeee', faction: "unknown"},
				101: {count: 0, op: 0, tp: 0, title: "•PanOceania", color: '#009ee4', faction: "PanOceania"},
				102: {count: 0, op: 0, tp: 0, title: "•SAA", color: '#00a5ee', faction: "PanOceania"},
				103: {count: 0, op: 0, tp: 0, title: "•MO", color: '#0091d0', faction: "PanOceania"},
				104: {count: 0, op: 0, tp: 0, title: "•Neoterra", color: '#9e9ce4', faction: "PanOceania"},
				105: {count: 0, op: 0, tp: 0, title: "•Varuna", color: '#6ad7fc', faction: "PanOceania"},
				201: {count: 0, op: 0, tp: 0, title: "•Yu Jing", color: '#b0cb11', faction: "Yu Jing"},
				202: {count: 0, op: 0, tp: 0, title: "•ISS", color: '#6c7c0a', faction: "Yu Jing"},
				204: {count: 0, op: 0, tp: 0, title: "•IA", color: '#d9fa15', faction: "Yu Jing"},
				301: {count: 0, op: 0, tp: 0, title: "•Ariadna", color: '#0b7db3', faction: "Ariadna"},
				302: {count: 0, op: 0, tp: 0, title: "•Caledonians", color: '#0c8ecb', faction: "Ariadna"},
				303: {count: 0, op: 0, tp: 0, title: "•FRRM", color: '#0d97d9', faction: "Ariadna"},
				304: {count: 0, op: 0, tp: 0, title: "•USAriadna", color: '#0d9ce0', faction: "Ariadna"},
				305: {count: 0, op: 0, tp: 0, title: "•Tartary AC", color: '#0ea3ea', faction: "Ariadna"},
				401: {count: 0, op: 0, tp: 0, title: "•Haqqislam", color: '#ffe149', faction: "Haqqislam"},
				402: {count: 0, op: 0, tp: 0, title: "•Hassassin Bahram", color: '#e8cd42', faction: "Haqqislam"},
				403: {count: 0, op: 0, tp: 0, title: "•Qapu Khalqi", color: '#d6bd3c', faction: "Haqqislam"},
				404: {count: 0, op: 0, tp: 0, title: "•Ramah", color: '#cfa12d', faction: "Haqqislam"},
				501: {count: 0, op: 0, tp: 0, title: "•Nomads", color: '#e30b14', faction: "Nomads"},
				502: {count: 0, op: 0, tp: 0, title: "•Corregidor", color: '#e34c31', faction: "Nomads"},
				503: {count: 0, op: 0, tp: 0, title: "•Bakunin", color: '#e36b38', faction: "Nomads"},
				504: {count: 0, op: 0, tp: 0, title: "•Tunguska", color: '#e38869', faction: "Nomads"},
				601: {count: 0, op: 0, tp: 0, title: "•Combined Army", color: '#a69fd5', faction: "Combined Army"},
				602: {count: 0, op: 0, tp: 0, title: "•Morats", color: '#9791c2', faction: "Combined Army"},
				603: {count: 0, op: 0, tp: 0, title: "•Shasvastii", color: '#8a84b1', faction: "Combined Army"},
				604: {count: 0, op: 0, tp: 0, title: "•Onyx", color: '#777299', faction: "Combined Army"},
				701: {count: 0, op: 0, tp: 0, title: "•ALEPH", color: '#9baba8', faction: "ALEPH"},
				702: {count: 0, op: 0, tp: 0, title: "•Steel Phalanx", color: '#b8cac7', faction: "ALEPH"},
				703: {count: 0, op: 0, tp: 0, title: "•OSS", color: '#c5d9d5', faction: "ALEPH"},
				801: {count: 0, op: 0, tp: 0, title: "•Tohaa", color: '#a4e412', faction: "Tohaa"},
				902: {count: 0, op: 0, tp: 0, title: "•Druze BS", color: '#b6cb94', faction: "NA2"},
				903: {count: 0, op: 0, tp: 0, title: "•JSA", color: '#e31e45', faction: "NA2"},
				904: {count: 0, op: 0, tp: 0, title: "•Ikari", color: '#fffc1c', faction: "NA2"},
				905: {count: 0, op: 0, tp: 0, title: "•Starco", color: '#e45d5d', faction: "NA2"},
				906: {count: 0, op: 0, tp: 0, title: "•Spiral", color: '#b9db01', faction: "NA2"},
				907: {count: 0, op: 0, tp: 0, title: "•Foreign", color: '#67b4b5', faction: "NA2"},
				908: {count: 0, op: 0, tp: 0, title: "•Dahshat", color: '#cbbe7f', faction: "NA2"},
				1001: {count: 0, op: 0, tp: 0, title: "•O-12", color: '#dfa532', faction: "O-12"}
			};

		factionStat = {"unknown": {name: "unknown", opSum:0, tpSum: 0, opSr : 0, tpSr: 0, count: 0}};
		if (request.greeting == "start") {
			func();
		}
		if (request.greeting == "dia") {
			if ($('[ng-click="$mdTabsCtrl.select(tab.getIndex())"]:last-of-type:not(.md-active)').length > 0) {
				$('[ng-click="$mdTabsCtrl.select(tab.getIndex())"]:last-of-type').trigger( "click" );
				setTimeout(function () {
					func2();
				}, 3500);
			} else {
				func2();
			}
		}
	}
);




function findFaction(nick) {
	var factionImgPath = $('[ng-repeat^="item in vm.participants|orderBy"] [aria-label^="'+ nick +'"] ~ .md-secondary-container md-icon[aria-label="faction"]').attr('md-svg-src');
	//console.log(factionImgPath);
	if (factionImgPath !== undefined) {
		var code = factionImgPath.substr(factionImgPath.length - 7, 3);
		if (code == 001) { code = 1001 }
		return code;
	} else {
		return 000;
	}
}

function func() {
	$('[ng-repeat="player in vm.classification()"]').map(function() {
		var nick = $.trim($( this ).find('.md-list-item-inner .layout-row').text());
		var factionCode = findFaction(nick);
		$( this ).find('.md-list-item-inner > div:first-child').addClass("faction" + factionCode);

		libr[factionCode].op += parseInt($(this).find('.md-list-item-inner > div:nth-child(4)').html());
		libr[factionCode].tp += parseInt($(this).find('.md-list-item-inner > div:nth-child(3)').html());
	});
}

function drawLine(ctx, startX, startY, endX, endY){
	ctx.beginPath();
	ctx.moveTo(startX,startY);
	ctx.lineTo(endX,endY);
	ctx.stroke();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.stroke();
}

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(centerX,centerY);
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.closePath();
	ctx.fill();
}

function sortArray(a, b, field) {
	if (a[field] < b[field]) {
		return 1;
	}
	if (a[field] > b[field]) {
		return -1;
	}
	// a должно быть равным b
	return 0;
}

var Piechart = function(options){
	this.options = options;
	this.canvas = options.canvas;
	this.ctx = this.canvas.getContext("2d");
	this.colors = options.colors;
	this.legendData = [];

	this.draw = function(){
		var total_value = 0;
		var color_index = 0;
		for (var categ in this.options.data){
			var val = this.options.data[categ];
			total_value += val;
		}

		var start_angle = 0;
		for (categ in this.options.data){
			val = this.options.data[categ];
			var slice_angle = 2 * Math.PI * val / total_value;
			this.legendData.push({title: categ, count: val, color: this.colors[color_index%this.colors.length]})
			drawPieSlice(
				this.ctx,
				this.canvas.width/2,
				this.canvas.height/2,
				Math.min(this.canvas.width/2,this.canvas.height/2),
				start_angle,
				start_angle+slice_angle,
				this.colors[color_index%this.colors.length]
			);

			start_angle += slice_angle;
			color_index++;
		}

		//drawing a white circle over the chart
		//to create the doughnut chart
		if (this.options.doughnutHoleSize){
			drawPieSlice(
				this.ctx,
				this.canvas.width/2,
				this.canvas.height/2,
				this.options.doughnutHoleSize * Math.min(this.canvas.width/2,this.canvas.height/2),
				0,
				2 * Math.PI,
				"#ff0000"
			);
		}
		start_angle = 0;
		for (categ in this.options.data){
			val = this.options.data[categ];
			slice_angle = 2 * Math.PI * val / total_value;
			var pieRadius = Math.min(this.canvas.width/1.2,this.canvas.height/1.2);
			var labelX = this.canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
			var labelY = this.canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2);

			if (this.options.doughnutHoleSize){
				var offset = (pieRadius * this.options.doughnutHoleSize ) / 2;
				labelX = this.canvas.width/2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
				labelY = this.canvas.height/2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle/2);
			}

			var labelText = categ;//Math.round(100 * val / total_value);
			this.ctx.fillStyle = "black";
			this.ctx.font = "normal 9px Arial";
			this.ctx.shadowColor="white";
			this.ctx.shadowBlur=3;
			this.ctx.fillText(labelText + "("+ val +")", labelX,labelY);
			start_angle += slice_angle;
		}

		if (this.options.legend){
			color_index = 0;
			var legendHTML = "";

			this.legendData.sort(function (a, b) {
				return sortArray(a,b, 'count')
			});
			for (index in this.legendData){
				legendHTML += "<div><span style='display:inline-block;width:10px;background-color:"+this.legendData[index].color+";'>&nbsp;</span> <span style='font-size: 12px; color: #000'>"+this.legendData[index].title+": "+this.legendData[index].count+"</span></div>";
			}
			this.options.legend.innerHTML = legendHTML;
		}
	}
};

function compareField(elA, elB, field) {
	return elA[field] - elB[field];
}

function func2() {
	func();

	if ($('#infFactionInfoPlgW').length > 0) {
		$('#infFactionInfoPlgW').remove();
	}

	$('body').append('<div id="infFactionInfoPlgW" style="font-size: 12px; box-sizing: border-box; background-color: #fff; width: auto; height: auto; padding: 10px; position: absolute; top: 10px; left: 10px;">' +
		'<button style="border: 1px solid #f0f0f0; padding: 0;" onclick="var elem = document.querySelector(\'#infFactionInfoPlgW\'); elem.remove();"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAMAAADL21gSAAAAFVBMVEUAAAAgICAwMDBAQEDf39/v7+/////kfkc3AAAAaUlEQVR4Ae3SOwoCMBCE4ck+vP+RjT+CCFMsBLHJVCk+Qnayegxy0a9QrWgOnascwkioDgll0Daol9nKoxSqMAqPOvRJtEMoY0BGYSwi9UaMdnDT5E2j6eKrpzxofPB3qNwGhfnXZl70BDfXGiu8gCfFAAAAAElFTkSuQmCC" alt=""></button><canvas id="myCanvas" style="float: left; max-height: calc(100vh - 70px);"></canvas><div id="myLegend" style="float: left; padding-left: 15px;"></div>' +
		'<div style="float: left;">' +
			'<div>' +
				'<ul id="infFactionInfoPlgWUlOpAv" style="color: #000; float: right;"></ul>' +
				'<ul id="infFactionInfoPlgWUlOp" style="color: #000; float: right;"></ul>' +
				'<ul id="infFactionInfoPlgWUlTpAv" style="color: #000; float: right;"></ul>' +
				'<ul id="infFactionInfoPlgWUlTp" style="color: #000; float: right;"></ul>' +
			'</div>' +
		'</div>' +
		'<div style="float: left;">' +
			'<ul id="infFactionInfoPlgWUlOpSr" style="color: #000; float: right;"></ul>' +
			'<ul id="infFactionInfoPlgWUlOpSum" style="color: #000; float: right;"></ul>' +
			'<ul id="infFactionInfoPlgWUlTpSr" style="color: #000; float: right;"></ul>' +
			'<ul id="infFactionInfoPlgWUlTpSum" style="color: #000; float: right;"></ul>' +
		'</div>' +
		'</div>');

	var myCanvas = document.getElementById("myCanvas");
	myCanvas.width = 700;
	myCanvas.height = 700;

	var ctx = myCanvas.getContext("2d");

	var gamerWithRosters = 0;
	console.log('libr ', libr);

	$('[ng-if="item.lists.faction"]').each(function() {
		var factionImgPath = $(this).attr('md-svg-src');
		var factionCode = factionImgPath.substr(factionImgPath.length - 7, 3);
		if (factionCode == 001) { factionCode = 1001 }
		if(libr[factionCode]) {
			console.log('id = ', factionCode);
			console.log('libr id = ', libr[factionCode]);
			libr[factionCode].count = libr[factionCode].count ? libr[factionCode].count + 1 : 1;
			var faction = libr[factionCode].faction;
			if(factionStat[faction]) {
				factionStat[faction].count = factionStat[faction].count ? factionStat[faction].count + 1 : 1;
			}
			else {
				factionStat[faction] = {
					name: faction,
					opSum: 0,
					tpSum: 0,
					opSr : 0,
					tpSr: 0,
					count: 1
				}
			}
		} else {
			libr[factionCode] = {count: 1, title: 'NEW ITEM!'};
			console.error('We have new image id! ', factionCode);
		}
		gamerWithRosters++;
	});
	var myVinyls = {};
	var colors = [];
	if ($('[ng-repeat^="item in vm.participants|orderBy"]').length > gamerWithRosters) {
		libr[000].count = $('[ng-repeat^="item in vm.participants|orderBy"]').length - gamerWithRosters;
	}
	Object.keys(libr).forEach(function(elem, index) {
		if(libr[elem].count != 0) {
			var title = libr[elem].faction;
			if(factionStat[title]) {
				factionStat[title].opSum = factionStat[title].opSum + libr[elem].op;
				factionStat[title].tpSum = factionStat[title].tpSum + libr[elem].tp;
				factionStat[title].opSr = factionStat[title].opSr + libr[elem].op/factionStat[title].count;
				factionStat[title].tpSr = factionStat[title].tpSr + libr[elem].tp/factionStat[title].count;
				factionStat[title].count = factionStat[title].count + libr[elem].count;
			}
			myVinyls[libr[elem].title]=libr[elem].count;
			colors.push(libr[elem].color);
		}
	});

	var myLegend = document.getElementById("myLegend");

	//console.log('myLegend', myLegend);
	var myDougnutChart = new Piechart(
		{
			canvas:myCanvas,
			data:myVinyls,
			colors:colors,
			legend:myLegend
		}
	);
	myDougnutChart.draw();


	var libr2 = Object.values(factionStat);

	libr2.sort(function (a, b) {
		return sortArray(a,b, 'opSum')
	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlOpSum').append('<li><b>Objective Points (SUM)</b></li>');
	libr2.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlOpSum').append('<li>' + elem.name + ': ' + elem.opSum + '</li>');
		}
	})
	libr2.sort(function (a, b) {
		return sortArray(a,b, 'tpSum')
	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlTpSum').append('<li><b>Tournament Points (SUM)</b></li>');
	libr2.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlTpSum').append('<li>' + elem.name + ': ' + elem.tpSum + '</li>');
		}
	})
	libr2.sort(function (a, b) {
		return sortArray(a,b, 'opSr')
	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlOpSr').append('<li><b>Faction OP Average</b></li>');
	libr2.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlOpSr').append('<li>' + elem.name + ': ' + (elem.opSr).toFixed(2) + '</li>');
		}
	})
	libr2.sort(function (a, b) {
		return sortArray(a,b, 'tpSr')
	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlTpSr').append('<li><b>Faction TP Average</b></li>');
	libr2.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlTpSr').append('<li>' + elem.name + ': ' + (elem.tpSr).toFixed(2) + '</li>');
		}
	})

	var libr3 = Object.values(libr);

	libr3.sort(function (a, b) {
		return sortArray(a,b, 'op')
	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlOp').append('<li><b>Army OP (SUM)</b></li>');
	libr3.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlOp').append('<li>' + elem.title + ': ' + elem.op + '</li>');
		}
	})



	libr3.sort(function (a, b) {
		return sortArray(a,b, 'tp')
	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlTp').append('<li><b>Army TP (SUM)</b></li>');
	libr3.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlTp').append('<li>' + elem.title + ': ' + elem.tp + '</li>');
		}
	})

	libr3.sort(function (a, b) {
		if (a.op/a.count < b.op/b.count) {
			return 1;
		}
		if (a.op/a.count > b.op/b.count) {
			return -1;
		}
		// a должно быть равным b
		return 0;

	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlOpAv').append('<li><b>Army OP Average</b></li>');
	libr3.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlOpAv').append('<li>' + elem.title + ': ' + (elem.op/elem.count).toFixed(2) + '</li>');
		}
	})


	libr3.sort(function (a, b) {
		if (a.tp/a.count < b.tp/b.count) {
			return 1;
		}
		if (a.tp/a.count > b.tp/b.count) {
			return -1;
		}
		// a должно быть равным b
		return 0;

	});
	$('#infFactionInfoPlgW #infFactionInfoPlgWUlTpAv').append('<li><b>Army TP Average</b></li>');
	libr3.forEach(function(elem, index){
		if(elem.count != 0) {
			$('#infFactionInfoPlgW #infFactionInfoPlgWUlTpAv').append('<li>' + elem.title + ': ' + (elem.tp/elem.count).toFixed(2) + '</li>');
		}
	})
}