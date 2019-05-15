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

function findFaction(nick) {
	var factionImgPath = $('[aria-label^="'+ nick +'"]').siblings('.md-secondary-container').find('md-icon[aria-label="faction"]').attr('md-svg-src');
	var code = factionImgPath.substr(factionImgPath.length - 7);
	return code;
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

			var labelText = val;//Math.round(100 * val / total_value);
			this.ctx.fillStyle = "black";
			this.ctx.font = "normal 12px Arial";
			this.ctx.fillText(labelText/*+"%"*/, labelX,labelY);
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
	$('body').append('<div style="background-color: #fff; width: 600px; height: 400px; padding: 10px; position: fixed; top: 50px; left: 50px;"><canvas id="myCanvas" style="float: left;"></canvas><div id="myLegend" style="float: left; padding-left: 15px;"></div></div>');

	var myCanvas = document.getElementById("myCanvas");
	myCanvas.width = 380;
	myCanvas.height = 380;

	var ctx = myCanvas.getContext("2d");

	$('[ng-if="item.lists.faction"]').map(function() {
		var factionImgPath = $(this).attr('md-svg-src');
		var factionCode = factionImgPath.substr(factionImgPath.length - 7, 3);
		console.log(factionCode);
	});

	var myVinyls = {
		"PanOceania": 10,
		"Yu Jing": 14,
		"Ariadna": 2,
		"Haqqislam": 12
	};

	var myLegend = document.getElementById("myLegend");

	var myDougnutChart = new Piechart(
		{
			canvas:myCanvas,
			data:myVinyls,
			colors:["#009ee4","#b0cb11", "#e30b12","#ffe149"],
			legend:myLegend
		}
	);
	myDougnutChart.draw();
}