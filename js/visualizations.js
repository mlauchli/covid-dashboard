let casesSettings = {
	"url": "https://api.covid19api.com/summary",
	"method": "GET",
	"timeout": 0,
};
let regionVal, minRange, maxRange, selectVal;
let continentSelection = $("#continents");
continentSelection.click(function(){
	selectVal = continentSelection.val();
	switch(selectVal) {
		case '002':
			$("#african-select").removeClass("uk-hidden");
			$("#european-select").addClass("uk-hidden");
			$("#american-select").addClass("uk-hidden");
			$("#asian-select").addClass("uk-hidden");
			$("#oceanian-select").addClass("uk-hidden");
		break;
		case '150':
			$("#african-select").addClass("uk-hidden");
			$("#european-select").removeClass("uk-hidden");
			$("#american-select").addClass("uk-hidden");
			$("#asian-select").addClass("uk-hidden");
			$("#oceanian-select").addClass("uk-hidden");
		break;
		case '019':
			$("#african-select").addClass("uk-hidden");
			$("#european-select").addClass("uk-hidden");
			$("#american-select").removeClass("uk-hidden");
			$("#asian-select").addClass("uk-hidden");
			$("#oceanian-select").addClass("uk-hidden");
		break;
		case '142':
			$("#african-select").addClass("uk-hidden");
			$("#european-select").addClass("uk-hidden");
			$("#american-select").addClass("uk-hidden");
			$("#asian-select").removeClass("uk-hidden");
			$("#oceanian-select").addClass("uk-hidden");
		break;
		case '009':
			$("#african-select").addClass("uk-hidden");
			$("#european-select").addClass("uk-hidden");
			$("#american-select").addClass("uk-hidden");
			$("#asian-select").addClass("uk-hidden");
			$("#oceanian-select").removeClass("uk-hidden");
	}
});

let afSelection = $("#af-region");
let euSelection = $("#eu-region");
let azSelection = $("#az-region");
let amSelection = $("#am-region");
let ocSelection = $("#oc-region");

afSelection.click(function(){
	regionVal = afSelection.val();
	console.log(regionVal);
});

euSelection.click(function(){
	regionVal = euSelection.val();
	console.log(regionVal);
});

azSelection.click(function(){
	regionVal = azSelection.val();
	console.log(regionVal);
})

amSelection.click(function(){
	regionVal = amSelection.val();
	console.log(regionVal);
})

ocSelection.click(function(){
	regionVal = ocSelection.val();
	console.log(regionVal);
})

try {
$.ajax(casesSettings).done(function (response) {
	let covidData = response.Countries;
	google.charts.load('current', {
    	'packages':['geochart'],
    	'mapsApiKey': geochartApiKey
	});
	google.charts.setOnLoadCallback(drawRegionsMap);
	function drawRegionsMap() {
	let data = new google.visualization.DataTable();
	//the names of the columns in the data table, along with their data types
	data.addColumn('string','Country');
	data.addColumn('number', 'Cases');
	//loop through all of the data gathered from the API to create the data table
	for(let i=0; i<covidData.length; i++){
		if(covidData[i].TotalConfirmed > 10000){
			data.addRow(["'" + covidData[i].Country + "'", covidData[i].TotalConfirmed]);
		}
	}
    var options = {
		backgroundColor: '#1f4068', 
		defaultColor: '#202060' ,
		sizeAxis: { minValue: 10000, maxValue: 1000000, minSize: 3, maxSize: 25 },
        displayMode: 'markers',
		colorAxis: {colors: ['#602080', '#b030b0']},
		width: '900px',
		keepAspectRatio: true
	};

    var chart = new google.visualization.GeoChart(document.getElementById('rona-map'));

    chart.draw(data, options);
	}	
})
} catch {
	$('#rona-map').html("<h2>Oh shit. You fucked up :(</h2>")
};

$("#formbtn").click(function(){
	if ($("minRange").val()){
		minRange = $("#minRange").val();
	}else{
		minRange = 1;
	}
	
	if ($("#maxRange").val()){
		maxRange = $("#maxRange").val();
	} else {
		maxRange = 1500000;
	}

	if (!regionVal){
		regionVal = selectVal;
	}
	// console.log(minRange);
	// console.log(maxRange);
	// console.log(regionVal);
	try {
		$.ajax(casesSettings).done(function (response) {
			let covidData = response.Countries;
			google.charts.load('current', {
				'packages':['geochart'],
				'mapsApiKey': 'AIzaSyA9_yPvSaoSziuA0W7QLT_FdABZoOfU33U'
			});
			google.charts.setOnLoadCallback(drawRegionsMap);
			function drawRegionsMap() {
			let data = new google.visualization.DataTable();
			//the names of the columns in the data table, along with their data types
			data.addColumn('string','Country');
			data.addColumn('number', 'Cases');
			//loop through all of the data gathered from the API to create the data table
			for(let i=0; i<covidData.length; i++){
				if(covidData[i].TotalConfirmed > minRange && covidData[i].TotalConfirmed < maxRange){
					data.addRow(["'" + covidData[i].Country + "'", covidData[i].TotalConfirmed]);
				}
			}
			var options = {
				backgroundColor: '#1f4068', 
				defaultColor: '#202060' ,
				sizeAxis: { minValue: minRange, maxValue: maxRange, minSize: 3, maxSize: 25 },
				displayMode: 'markers',
				colorAxis: {colors: ['#602080', '#b030b0']},
				width: '900px',
				keepAspectRatio: true,
				region: regionVal
			};
		
			var chart = new google.visualization.GeoChart(document.getElementById('rona-map'));
		
			chart.draw(data, options);
			}	
		})
		} catch {
			$('#rona-map').html("<h2>Oh shit. You fucked up :(</h2>")
		};
})