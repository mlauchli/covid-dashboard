let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let errMsg = "Oh no! The API screwed up here.";
let change = "";
let containerPieChart = $("#piechart");
let containerBarChart = $("#barchart"); 
let urlStateInfo = "https://covid19-server.chrismichael.now.sh/api/v1/CasesInAllUSStates";
let urlNews = `http://newsapi.org/v2/top-headlines?country=us&q=coronavirus&from=${date}&apiKey=${newsApiKey}`;
let statesSettings = {
    "url": urlStateInfo,
    "method": "GET",
    "timeout": 0,
};

//function to update the URL depending on the user input, as well as the main middle graph's title
const updateURL = (statename, date) => {
    urlNews = `http://newsapi.org/v2/top-headlines?q=coronavirus-${statename}&from=${date}&apiKey=${newsApiKey}`;
}

//function to calculate the difference from one number to another and change its styling accordingly.
const compareNumbers = (newnumber) => {
    if(newnumber > 0){
        change = `<span uk-icon='icon: triangle-up' style='color: #EE40A8'>${newnumber}</span>`;        
    } 
    else if(newnumber == 0){
        change = `<span style="color: white">${newnumber}</span>`;
    }
    else if(newnumber < 0){
        change = `<span uk-icon='icon: triangle-down' style='color: #52F141'>${newnumber}</span>`;       
    }
    return change;
 };

 $.ajax(urlStateInfo).done(function (response) {
    let countryData = response.data[0].table[0];
    let stateData = response.data[0].table;
    //for some godforsaken reason unknown to man, the developer decided to add in commas to the number of cases to separate thousands. This strips the commas.

    for(let i = 0; i<stateData.length; i++){
        stateData[i].USAState = stateData[i].USAState.replace(/'/g, "");
        stateData[i].TotalCases = stateData[i].TotalCases.replace(",", "");
        stateData[i].NewCases = stateData[i].Deaths_1M_Pop.replace(",", "");
    }
    console.log(stateData);
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart () {
        drawChartOne();
        drawChartTwo();
    }

    function drawChartOne() {
        let data = new google.visualization.DataTable();
        data.addColumn('string', 'State');
        data.addColumn('number', 'Confirmed Cases');
        for(let i=1; i<10; i++){
            data.addRow(["'" + stateData[i].USAState + "'", Number(stateData[i].TotalCases)]);
            };
        let options = {
            backgroundColor: {fill: 'none'},	
            chartArea:{width:'100%',height:'100%'},
            legend: { alignment: 'center', textStyle: {color: 'white', fontName: 'sans-serif', fontSize: 16 } },
            pieHole: 0.3,
            pieSliceBorderColor: 'none',
            sliceVisibilityThreshold: 0.025,
        };

        var chart = new google.visualization.PieChart(piechart);

        chart.draw(data, options);
    }
    function drawChartTwo() {
        let data = new google.visualization.DataTable();
        data.addColumn('string', 'State');
        data.addColumn('number', 'Deaths Per Million');
        for(let i=1; i<stateData.length; i++){
            data.addRow(["'" + stateData[i].USAState + "'", Number(stateData[i].Deaths_1M_Pop)]);
            console.log(stateData[i].USAState + ", " + Number(stateData[i].Deaths_1M_Pop));
            };
        let options = {
            backgroundColor: {fill: 'none'},
            colors: ['#EE40A8'],
            hAxis: { textStyle: {color: 'white'}},
            legend: 'none',
            vAxis: { textStyle: {color: 'white'}}
        };

        var chart = new google.visualization.ColumnChart(barchart);

        chart.draw(data, options);
    }
    //fill out the cards with the appropriate data. If the API screws up and holds a null value, let the user know it's not my fault.
    if(countryData.TotalCases){
        $("#total-cases").html(`<h1 class="green">${countryData.TotalCases}</h1>`);
    } else {
        $("#total-cases").html(`<h4 class="green">${errMsg}</h4>`);
    }
    if(countryData.NewCases){
        $("#new-cases").html(`<h1 class="pink">${countryData.NewCases}</h1>`);
    } else {
        $("#new-cases").html(`<h4 class="pink">${errMsg}</h4>`);
    }
    if(countryData.TotalDeaths){
        $("#total-deaths").html(`<h1 class="blue">${countryData.TotalDeaths}</h1>`);
    } else {
        $("#total-deaths").html(`<h4 class="blue">${errMsg}</h4>`);
    }
    if(countryData.NewDeaths){
        $("#new-deaths").html(`<h1 class="white">${countryData.NewDeaths}</h1>`);
    } else {
        $("#new-deaths").html(`<h4 class="white">${errMsg}</h4>`);
    }
    if(countryData.ActiveCases){
        $("#active-cases").html(`<h1 class="green">${countryData.ActiveCases}</h1>`);
    } else {
        $("#active-cases").html(`<h4 class="green">${errMsg}</h4>`);
    }
    if(countryData.TotalTests){
        $("#total-tests").html(`<h1 class="pink">${countryData.TotalTests}</h1>`);
    } else {
        $("#total-tests").html(`<h4 class="pink">${errMsg}</h4>`);
    }

    //fancy animation for the cards below
    (function($) {
        $.fn.visible = function(partial) {
            let $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
          return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        };
    })(jQuery);
      
    let win = $(window);
      
    let allMods = $(".state-card");
      
    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible"); 
        } 
    });
      
    win.scroll(function(event) {    
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in"); 
          } 
        }); 
    });
    for(let i=1; i<stateData.length-1; i++){
        $(`
            <div class="uk-card state-card uk-margin-left uk-margin-right uk-margin">
                <div class="uk-card-header">
                    <h4 class="uk-card-title">${stateData[i].USAState}</h4>
                </div>
                <div class="uk-card-body">
                    <div class="state-line white"><img src="assets/icons/total.png">Total Cases: ${stateData[i].TotalCases}</div>
                    <div class="state-line green"><img src="assets/icons/cases.png">Active Cases: ${stateData[i].ActiveCases}</div>
                    <div class="state-line blue"><img src="assets/icons/death.png">Total Deaths: ${stateData[i].TotalDeaths}</div>
                    <div class="state-line pink"><img src="assets/icons/tests.png">Total Tests: ${stateData[i].TotalTests}</div>
                </div>
            </div>
        `).appendTo($("#state-container"));
    }
})

//save the selected state as a variable and update the news settings.
// $(".state-card").click(function(){
//     stateName = this.id;
//     updateURLs(stateName, date);
//     console.log(urlNews);
//     $("#results-container").addClass("uk-hidden");
//     let newsSettings = {
//         "url": urlNews,
//         "method": "GET",
//         "timeout": 0,
//     };

//     //AJAX call to get "Confirmed" status data
//     $.ajax(confirmedSettings).done(function (response) {
//         let confirmedData = response;
//         confirmedData.splice(-1);
//         //AJAX call to get "Deaths" status data
//         $.ajax(deathsSettings).done(function (response) {
//             let deathsData = response;
//             deathsData.splice(-1);
//             //AJAX call to get "Recovered" status data
//             $.ajax(recoveredSettings).done(function (response) {
//                 let recoveredData = response;
//                 recoveredData.splice(-1);
//                 //empty out the div containing the graph to make sure no previous data affects the newly loaded chart.
//                 $("#graph-side").empty();
//                 //load the Google Charts package
//                 google.charts.load('current', {'packages':['corechart']});
//                 //draw the chart on onLoadCallback
//                 google.charts.setOnLoadCallback(drawChart);
//                 //contains all the information needed to draw the chart
//                 function drawChart() {
//                     let data = new google.visualization.DataTable();
//                     //the names of the columns in the data table, along with their data types
//                     data.addColumn('string','Date');
//                     data.addColumn('number', 'Confirmed');
//                     data.addColumn('number', 'Deaths');
//                     data.addColumn('number', 'Recovered');
//                     //loop through all of the data gathered from the API to create the data table
//                     for(let i=0; i<confirmedData.length; i++){
//                         data.addRow(["'" + confirmedData[i].Date + "'", confirmedData[i].Cases, deathsData[i].Cases, recoveredData[i].Cases]);
//                     }
//                     //styling specifications
//                     let options = {
//                         backgroundColor: 'none',
//                         chartArea: { width: '100%', height: '100%' },
//                         colors: ['#EE40A8', '#52F141', 'white'],
//                         curveType: 'function',
//                         hAxis: { title: 'Date', titleTextStyle: { color: 'white' }},
//                         vAxis: { gridlines: { color: '#4088C9' }, minorGridlines: { color: '#4088C9' }, title: 'Number of Cases', titleTextStyle: { color: 'white' } },
//                         lineWidth: 3,
//                         title: 'Coronavirus Cases',
//                         legend: { position: 'bottom' },
//                         animation: { startup: true, easing: 'out', duration: 2500 }
//                     };
//                     //specify where to draw the chart
//                     let chart = new google.visualization.LineChart(document.getElementById('graph-side'));
//                     try {
//                         //draw the chart
//                         chart.draw(data, options);
//                         //empty the table body to ensure that no previous data makes trouble
//                         $("tbody").empty();
//                         //loop through the API data to populate the main numbers table
//                         for(i=confirmedData.length-30; i<confirmedData.length; i++){
//                             let confirmedChange = compareNumbers(confirmedData[i].Cases, confirmedData[i-1].Cases);
//                             let deathsChange = compareNumbers(deathsData[i].Cases, deathsData[i-1].Cases);
//                             let recoveredChange = compareNumbers(recoveredData[i].Cases, recoveredData[i-1].Cases);
//                             $(`<tr style="color: white"><td>${confirmedData[i].Date.slice(0, -10)}</td>
//                                 <td style="text-align: center">${confirmedData[i].Cases}</td>
//                                 <td style="text-align: center">${confirmedChange}</td>
//                                 <td style="text-align: center">${deathsData[i].Cases}</td>
//                                 <td style="text-align: center">${deathsChange}</td>
//                                 <td style="text-align: center">${recoveredData[i].Cases}</td>
//                                 <td style="text-align: center">${recoveredChange}</td></tr>`).appendTo("tbody");
//                             change = "";
//                         };
//                         //AJAX request for news regarding COVID in the selected country
//                         try {
//                             $.ajax(newsSettings).done(function (response) {
//                                 let newsData = response.articles;
//                                 $("#local-news").empty();
//                                 console.log(newsData[1].url);
                                
//                                 for(i=0; i<newsData.length; i++){
//                                     $(`<a href="${newsData[i].url}" target="_blank" style="text-decoration: none;"><div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
//                                         <div class="uk-card-media-left uk-cover-container">
//                                             <img src="${newsData[i].urlToImage}" alt="" uk-cover>
//                                             <canvas width="600" height="400"></canvas>
//                                         </div>
//                                         <div>
//                                             <div class="uk-card-body">
//                                                 <h3 class="uk-card-title" style="color: white">${newsData[i].title}</h3>
//                                                 <p>${newsData[i].description}</p>
//                                             </div>
//                                         </div>
//                                     </div></a>`).appendTo("#local-news");
//                                 }
//                             })
//                         } catch(err) {
//                             $("#local-news").html("Oh no! Looks like the News API doesn't have that country.");
//                         }
//                     } catch(err) {
//                         $("#graph-side").html(errMsg);
//                     }
//                 }
//             })
//         })
//     })

    // $(document).on({
    //     ajaxStart: function() { $body.addClass("loading");    },
    //      ajaxStop: function() { $body.removeClass("loading"); }    
    // });

// });