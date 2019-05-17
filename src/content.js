chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.greeting == "start") {
			func();
		}
		if (request.greeting == "dia") {
			func2();
		}
	}
);

var libr =
	{
		000: {count: 0, title: "•unknown", color: '#fefefe'},
		101: {count: 0, title: "•PanOceania", color: '#009ee4'},
		102: {count: 0, title: "•SAA", color: '#00a5ee'},
		103: {count: 0, title: "•MO", color: '#0091d0'},
		104: {count: 0, title: "•Neoterra", color: '#9e9ce4'},
		105: {count: 0, title: "•Varuna", color: '#6ad7fc'},
		201: {count: 0, title: "•Yu Jing", color: '#b0cb11'},
		202: {count: 0, title: "•ISS", color: '#6c7c0a'},
		204: {count: 0, title: "•IA", color: '#d9fa15'},
		301: {count: 0, title: "•Ariadna", color: '#0b7db3'},
		302: {count: 0, title: "•Caledonians", color: '#0c8ecb'},
		303: {count: 0, title: "•FRRM", color: '#0d97d9'},
		304: {count: 0, title: "•USAriadna", color: '#0d9ce0'},
		305: {count: 0, title: "•Tartary AC", color: '#0ea3ea'},
		401: {count: 0, title: "•Haqqislam", color: '#ffe149'},
		402: {count: 0, title: "•Hassassin Bahram", color: '#e8cd42'},
		403: {count: 0, title: "•Qapu Khalqi", color: '#d6bd3c'},
		404: {count: 0, title: "•Ramah", color: '#cfa12d'},
		501: {count: 0, title: "•Nomads", color: '#e30b14'},
		502: {count: 0, title: "•Corregidor", color: '#e34c31'},
		503: {count: 0, title: "•Bakunin", color: '#e36b38'},
		504: {count: 0, title: "•Tunguska", color: '#e38869'},
		601: {count: 0, title: "•Combined Army", color: '#a69fd5'},
		602: {count: 0, title: "•Morats", color: '#9791c2'},
		603: {count: 0, title: "•Shasvastii", color: '#8a84b1'},
		604: {count: 0, title: "•Onyx", color: '#777299'},
		701: {count: 0, title: "•ALEPH", color: '#9baba8'},
		702: {count: 0, title: "•Steel Phalanx", color: '#b8cac7'},
		703: {count: 0, title: "•OSS", color: '#c5d9d5'},
		801: {count: 0, title: "•Tohaa", color: '#a4e412'},
		902: {count: 0, title: "•Druze BS", color: '#b6cb94'},
		903: {count: 0, title: "•JSA", color: '#e31e45'},
		904: {count: 0, title: "•Ikari", color: '#fffc1c'},
		905: {count: 0, title: "•Starco", color: '#e45d5d'},
		906: {count: 0, title: "•Spiral", color: '#b9db01'},
		907: {count: 0, title: "•Foreign", color: '#67b4b5'},
		908: {count: 0, title: "•Dahshat", color: '#cbbe7f'}
	};

function findFaction(nick) {
	var factionImgPath = $('[ng-repeat^="item in vm.participants|orderBy"] [aria-label^="'+ nick +'"] ~ .md-secondary-container md-icon[aria-label="faction"]').attr('md-svg-src');
	console.log(factionImgPath);
	if (factionImgPath !== undefined) {
		var code = factionImgPath.substr(factionImgPath.length - 7, 3);
		return code;
	} else {
		return "000";
	}
}

function func() {
	$('[ng-repeat="player in vm.classification()"]').map(function() {
		var nick = $.trim($( this ).find('.md-list-item-inner .layout-row').text());
		$( this ).find('.md-list-item-inner > div:first-child').addClass("faction" + findFaction(nick));
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

var Piechart = function(options){
	this.options = options;
	this.canvas = options.canvas;
	this.ctx = this.canvas.getContext("2d");
	this.colors = options.colors;

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
			for (categ in this.options.data){
				legendHTML += "<div><span style='display:inline-block;width:10px;background-color:"+this.colors[color_index++]+";'>&nbsp;</span> <span style='font-size: 12px; color: #000'>"+categ+"</span></div>";
			}
			this.options.legend.innerHTML = legendHTML;
		}
	}
};

function func2() {
	$('body').append('<div style="position: relative; box-sizing: border-box; background-color: #fff; width: 520px; height: 520px; padding: 10px; position: fixed; top: 50px; left: 50px;"><canvas id="myCanvas" style="float: left;"></canvas><!--<div id="myLegend" style="float: left; padding-left: 15px;"></div>--></div>');

	var myCanvas = document.getElementById("myCanvas");
	myCanvas.width = 500;
	myCanvas.height = 500;

	var ctx = myCanvas.getContext("2d");

	var gamerWithRosters = 0;

	$('[ng-if="item.lists.faction"]').each(function() {
		var factionImgPath = $(this).attr('md-svg-src');
		var factionCode = factionImgPath.substr(factionImgPath.length - 7, 3);
		if(libr[factionCode]) {
			libr[factionCode].count = libr[factionCode].count ? libr[factionCode].count + 1 : 1;
		} else {
			libr[factionCode] = {count: 1, title: 'NEW ITEM!'};
			console.error('We have new image id! ', factionCode);
		}
		gamerWithRosters++;
	});
	console.log(gamerWithRosters);
	var myVinyls = {};
	var colors = [];
	if ($('[ng-repeat^="item in vm.participants|orderBy"]').length > gamerWithRosters) {
		libr[000].count = $('[ng-repeat^="item in vm.participants|orderBy"]').length - gamerWithRosters;
	}
	Object.keys(libr).forEach(function(elem, index) {
		if(libr[elem].count != 0) {
			myVinyls[libr[elem].title]=libr[elem].count;
			colors.push(libr[elem].color);
		}
	});

	var myLegend = document.getElementById("myLegend");

	var myDougnutChart = new Piechart(
		{
			canvas:myCanvas,
			data:myVinyls,
			colors:colors,
			// legend:myLegend
		}
	);
	myDougnutChart.draw();
}