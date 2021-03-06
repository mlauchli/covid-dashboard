let selectedCountry = "united-states";
let caseType = "confirmed";
let countryName = "United States";
let countryCode = "us";
let countrySearch = $("#countrysearch");
let errMsg = "<h2>Oh no! Don't worry, it's you, not us.</h2>";
let change = "";
let urlConfirmed = "https://api.covid19api.com/country/" + selectedCountry + "/status/confirmed/live";
let urlDeaths = "https://api.covid19api.com/country/" + selectedCountry + "/status/deaths/live";
let urlRecovered = "https://api.covid19api.com/country/" + selectedCountry + "/recovered/confirmed/live";
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let urlNews = `http://newsapi.org/v2/top-headlines?country=${countryCode}&q=coronavirus&from=${date}&apiKey=${newsApiKey}`;
let countryData = [{"Country":"Rwanda","Slug":"rwanda","ISO2":"RW"},{"Country":"Tajikistan","Slug":"tajikistan","ISO2":"TJ"},{"Country":"Tanzania, United Republic of","Slug":"tanzania","ISO2":"TZ"},{"Country":"Gibraltar","Slug":"gibraltar","ISO2":"GI"},{"Country":"Iceland","Slug":"iceland","ISO2":"IS"},{"Country":"Israel","Slug":"israel","ISO2":"IL"},{"Country":"Western Sahara","Slug":"western-sahara","ISO2":"EH"},{"Country":"Bahamas","Slug":"bahamas","ISO2":"BS"},{"Country":"China","Slug":"china","ISO2":"CN"},{"Country":"El Salvador","Slug":"el-salvador","ISO2":"SV"},{"Country":"France","Slug":"france","ISO2":"FR"},{"Country":"Seychelles","Slug":"seychelles","ISO2":"SC"},{"Country":"Fiji","Slug":"fiji","ISO2":"FJ"},{"Country":"Gambia","Slug":"gambia","ISO2":"GM"},{"Country":"Guatemala","Slug":"guatemala","ISO2":"GT"},{"Country":"Myanmar","Slug":"myanmar","ISO2":"MM"},{"Country":"Northern Mariana Islands","Slug":"northern-mariana-islands","ISO2":"MP"},{"Country":"Guinea-Bissau","Slug":"guinea-bissau","ISO2":"GW"},{"Country":"Ireland","Slug":"ireland","ISO2":"IE"},{"Country":"Portugal","Slug":"portugal","ISO2":"PT"},{"Country":"Turkey","Slug":"turkey","ISO2":"TR"},{"Country":"ALA Aland Islands","Slug":"ala-aland-islands","ISO2":"AX"},{"Country":"Dominican Republic","Slug":"dominican-republic","ISO2":"DO"},{"Country":"Estonia","Slug":"estonia","ISO2":"EE"},{"Country":"Faroe Islands","Slug":"faroe-islands","ISO2":"FO"},{"Country":"Peru","Slug":"peru","ISO2":"PE"},{"Country":"Angola","Slug":"angola","ISO2":"AO"},{"Country":"Bolivia","Slug":"bolivia","ISO2":"BO"},{"Country":"Comoros","Slug":"comoros","ISO2":"KM"},{"Country":"Cook Islands","Slug":"cook-islands","ISO2":"CK"},{"Country":"French Polynesia","Slug":"french-polynesia","ISO2":"PF"},{"Country":"Tuvalu","Slug":"tuvalu","ISO2":"TV"},{"Country":"Algeria","Slug":"algeria","ISO2":"DZ"},{"Country":"Bosnia and Herzegovina","Slug":"bosnia-and-herzegovina","ISO2":"BA"},{"Country":"Philippines","Slug":"philippines","ISO2":"PH"},{"Country":"Uruguay","Slug":"uruguay","ISO2":"UY"},{"Country":"Andorra","Slug":"andorra","ISO2":"AD"},{"Country":"Greenland","Slug":"greenland","ISO2":"GL"},{"Country":"Mali","Slug":"mali","ISO2":"ML"},{"Country":"Morocco","Slug":"morocco","ISO2":"MA"},{"Country":"Nigeria","Slug":"nigeria","ISO2":"NG"},{"Country":"Sudan","Slug":"sudan","ISO2":"SD"},{"Country":"Guadeloupe","Slug":"guadeloupe","ISO2":"GP"},{"Country":"Guyana","Slug":"guyana","ISO2":"GY"},{"Country":"Niger","Slug":"niger","ISO2":"NE"},{"Country":"Ecuador","Slug":"ecuador","ISO2":"EC"},{"Country":"Pitcairn","Slug":"pitcairn","ISO2":"PN"},{"Country":"Poland","Slug":"poland","ISO2":"PL"},{"Country":"Saint Kitts and Nevis","Slug":"saint-kitts-and-nevis","ISO2":"KN"},{"Country":"South Georgia and the South Sandwich Islands","Slug":"south-georgia-and-the-south-sandwich-islands","ISO2":"GS"},{"Country":"Brunei Darussalam","Slug":"brunei","ISO2":"BN"},{"Country":"Isle of Man","Slug":"isle-of-man","ISO2":"IM"},{"Country":"Lesotho","Slug":"lesotho","ISO2":"LS"},{"Country":"Samoa","Slug":"samoa","ISO2":"WS"},{"Country":"Serbia","Slug":"serbia","ISO2":"RS"},{"Country":"Korea (North)","Slug":"korea-north","ISO2":"KP"},{"Country":"Papua New Guinea","Slug":"papua-new-guinea","ISO2":"PG"},{"Country":"Afghanistan","Slug":"afghanistan","ISO2":"AF"},{"Country":"Greece","Slug":"greece","ISO2":"GR"},{"Country":"Grenada","Slug":"grenada","ISO2":"GD"},{"Country":"Barbados","Slug":"barbados","ISO2":"BB"},{"Country":"Japan","Slug":"japan","ISO2":"JP"},{"Country":"Somalia","Slug":"somalia","ISO2":"SO"},{"Country":"Sri Lanka","Slug":"sri-lanka","ISO2":"LK"},{"Country":"Suriname","Slug":"suriname","ISO2":"SR"},{"Country":"Tokelau","Slug":"tokelau","ISO2":"TK"},{"Country":"Bermuda","Slug":"bermuda","ISO2":"BM"},{"Country":"Kiribati","Slug":"kiribati","ISO2":"KI"},{"Country":"Libya","Slug":"libya","ISO2":"LY"},{"Country":"British Virgin Islands","Slug":"british-virgin-islands","ISO2":"VG"},{"Country":"Saudi Arabia","Slug":"saudi-arabia","ISO2":"SA"},{"Country":"Turkmenistan","Slug":"turkmenistan","ISO2":"TM"},{"Country":"American Samoa","Slug":"american-samoa","ISO2":"AS"},{"Country":"Kazakhstan","Slug":"kazakhstan","ISO2":"KZ"},{"Country":"Benin","Slug":"benin","ISO2":"BJ"},{"Country":"Croatia","Slug":"croatia","ISO2":"HR"},{"Country":"Haiti","Slug":"haiti","ISO2":"HT"},{"Country":"Kyrgyzstan","Slug":"kyrgyzstan","ISO2":"KG"},{"Country":"Mexico","Slug":"mexico","ISO2":"MX"},{"Country":"Nicaragua","Slug":"nicaragua","ISO2":"NI"},{"Country":"Antarctica","Slug":"antarctica","ISO2":"AQ"},{"Country":"Nepal","Slug":"nepal","ISO2":"NP"},{"Country":"Saint-Martin (French part)","Slug":"saint-martin-french-part","ISO2":"MF"},{"Country":"Trinidad and Tobago","Slug":"trinidad-and-tobago","ISO2":"TT"},{"Country":"Netherlands","Slug":"netherlands","ISO2":"NL"},{"Country":"Saint Lucia","Slug":"saint-lucia","ISO2":"LC"},{"Country":"Austria","Slug":"austria","ISO2":"AT"},{"Country":"Finland","Slug":"finland","ISO2":"FI"},{"Country":"Kuwait","Slug":"kuwait","ISO2":"KW"},{"Country":"Liechtenstein","Slug":"liechtenstein","ISO2":"LI"},{"Country":"Maldives","Slug":"maldives","ISO2":"MV"},{"Country":"Central African Republic","Slug":"central-african-republic","ISO2":"CF"},{"Country":"Guam","Slug":"guam","ISO2":"GU"},{"Country":"Belize","Slug":"belize","ISO2":"BZ"},{"Country":"Lao PDR","Slug":"lao-pdr","ISO2":"LA"},{"Country":"Liberia","Slug":"liberia","ISO2":"LR"},{"Country":"Mauritius","Slug":"mauritius","ISO2":"MU"},{"Country":"Mayotte","Slug":"mayotte","ISO2":"YT"},{"Country":"Wallis and Futuna Islands","Slug":"wallis-and-futuna-islands","ISO2":"WF"},{"Country":"Denmark","Slug":"denmark","ISO2":"DK"},{"Country":"Malaysia","Slug":"malaysia","ISO2":"MY"},{"Country":"Paraguay","Slug":"paraguay","ISO2":"PY"},{"Country":"Uganda","Slug":"uganda","ISO2":"UG"},{"Country":"Cape Verde","Slug":"cape-verde","ISO2":"CV"},{"Country":"Indonesia","Slug":"indonesia","ISO2":"ID"},{"Country":"Syrian Arab Republic (Syria)","Slug":"syria","ISO2":"SY"},{"Country":"Belgium","Slug":"belgium","ISO2":"BE"},{"Country":"Bulgaria","Slug":"bulgaria","ISO2":"BG"},{"Country":"Norfolk Island","Slug":"norfolk-island","ISO2":"NF"},{"Country":"Oman","Slug":"oman","ISO2":"OM"},{"Country":"Saint Pierre and Miquelon","Slug":"saint-pierre-and-miquelon","ISO2":"PM"},{"Country":"Chad","Slug":"chad","ISO2":"TD"},{"Country":"Sao Tome and Principe","Slug":"sao-tome-and-principe","ISO2":"ST"},{"Country":"Guernsey","Slug":"guernsey","ISO2":"GG"},{"Country":"Virgin Islands, US","Slug":"virgin-islands","ISO2":"VI"},{"Country":"Jamaica","Slug":"jamaica","ISO2":"JM"},{"Country":"Namibia","Slug":"namibia","ISO2":"NA"},{"Country":"Netherlands Antilles","Slug":"netherlands-antilles","ISO2":"AN"},{"Country":"South Africa","Slug":"south-africa","ISO2":"ZA"},{"Country":"Bouvet Island","Slug":"bouvet-island","ISO2":"BV"},{"Country":"Madagascar","Slug":"madagascar","ISO2":"MG"},{"Country":"Vanuatu","Slug":"vanuatu","ISO2":"VU"},{"Country":"Antigua and Barbuda","Slug":"antigua-and-barbuda","ISO2":"AG"},{"Country":"Slovakia","Slug":"slovakia","ISO2":"SK"},{"Country":"Albania","Slug":"albania","ISO2":"AL"},{"Country":"Australia","Slug":"australia","ISO2":"AU"},{"Country":"Niue","Slug":"niue","ISO2":"NU"},{"Country":"Botswana","Slug":"botswana","ISO2":"BW"},{"Country":"Timor-Leste","Slug":"timor-leste","ISO2":"TL"},{"Country":"Colombia","Slug":"colombia","ISO2":"CO"},{"Country":"Congo (Kinshasa)","Slug":"congo-kinshasa","ISO2":"CD"},{"Country":"Cyprus","Slug":"cyprus","ISO2":"CY"},{"Country":"Turks and Caicos Islands","Slug":"turks-and-caicos-islands","ISO2":"TC"},{"Country":"Burkina Faso","Slug":"burkina-faso","ISO2":"BF"},{"Country":"Lebanon","Slug":"lebanon","ISO2":"LB"},{"Country":"Russian Federation","Slug":"russia","ISO2":"RU"},{"Country":"Réunion","Slug":"réunion","ISO2":"RE"},{"Country":"Svalbard and Jan Mayen Islands","Slug":"svalbard-and-jan-mayen-islands","ISO2":"SJ"},{"Country":"Venezuela (Bolivarian Republic)","Slug":"venezuela","ISO2":"VE"},{"Country":"Christmas Island","Slug":"christmas-island","ISO2":"CX"},{"Country":"Falkland Islands (Malvinas)","Slug":"falkland-islands-malvinas","ISO2":"FK"},{"Country":"Azerbaijan","Slug":"azerbaijan","ISO2":"AZ"},{"Country":"Brazil","Slug":"brazil","ISO2":"BR"},{"Country":"Cameroon","Slug":"cameroon","ISO2":"CM"},{"Country":"Cayman Islands","Slug":"cayman-islands","ISO2":"KY"},{"Country":"India","Slug":"india","ISO2":"IN"},{"Country":"Luxembourg","Slug":"luxembourg","ISO2":"LU"},{"Country":"Marshall Islands","Slug":"marshall-islands","ISO2":"MH"},{"Country":"Nauru","Slug":"nauru","ISO2":"NR"},{"Country":"US Minor Outlying Islands","Slug":"us-minor-outlying-islands","ISO2":"UM"},{"Country":"Korea (South)","Slug":"korea-south","ISO2":"KR"},{"Country":"Equatorial Guinea","Slug":"equatorial-guinea","ISO2":"GQ"},{"Country":"Honduras","Slug":"honduras","ISO2":"HN"},{"Country":"Italy","Slug":"italy","ISO2":"IT"},{"Country":"Republic of Kosovo","Slug":"kosovo","ISO2":"XK"},{"Country":"Belarus","Slug":"belarus","ISO2":"BY"},{"Country":"Puerto Rico","Slug":"puerto-rico","ISO2":"PR"},{"Country":"Qatar","Slug":"qatar","ISO2":"QA"},{"Country":"Romania","Slug":"romania","ISO2":"RO"},{"Country":"Bhutan","Slug":"bhutan","ISO2":"BT"},{"Country":"Lithuania","Slug":"lithuania","ISO2":"LT"},{"Country":"Solomon Islands","Slug":"solomon-islands","ISO2":"SB"},{"Country":"Palestinian Territory","Slug":"palestine","ISO2":"PS"},{"Country":"Singapore","Slug":"singapore","ISO2":"SG"},{"Country":"Malawi","Slug":"malawi","ISO2":"MW"},{"Country":"Saint Helena","Slug":"saint-helena","ISO2":"SH"},{"Country":"Argentina","Slug":"argentina","ISO2":"AR"},{"Country":"Burundi","Slug":"burundi","ISO2":"BI"},{"Country":"Spain","Slug":"spain","ISO2":"ES"},{"Country":"Zimbabwe","Slug":"zimbabwe","ISO2":"ZW"},{"Country":"Aruba","Slug":"aruba","ISO2":"AW"},{"Country":"Macao, SAR China","Slug":"macao-sar-china","ISO2":"MO"},{"Country":"Saint-Barthélemy","Slug":"saint-barthélemy","ISO2":"BL"},{"Country":"Congo (Brazzaville)","Slug":"congo-brazzaville","ISO2":"CG"},{"Country":"Slovenia","Slug":"slovenia","ISO2":"SI"},{"Country":"United Arab Emirates","Slug":"united-arab-emirates","ISO2":"AE"},{"Country":"Anguilla","Slug":"anguilla","ISO2":"AI"},{"Country":"Cuba","Slug":"cuba","ISO2":"CU"},{"Country":"Côte d\'Ivoire","Slug":"cote-divoire","ISO2":"CI"},{"Country":"Hungary","Slug":"hungary","ISO2":"HU"},{"Country":"United States of America","Slug":"united-states","ISO2":"US"},{"Country":"Uzbekistan","Slug":"uzbekistan","ISO2":"UZ"},{"Country":"Canada","Slug":"canada","ISO2":"CA"},{"Country":"Georgia","Slug":"georgia","ISO2":"GE"},{"Country":"Kenya","Slug":"kenya","ISO2":"KE"},{"Country":"Martinique","Slug":"martinique","ISO2":"MQ"},{"Country":"Moldova","Slug":"moldova","ISO2":"MD"},{"Country":"Swaziland","Slug":"swaziland","ISO2":"SZ"},{"Country":"Heard and Mcdonald Islands","Slug":"heard-and-mcdonald-islands","ISO2":"HM"},{"Country":"Norway","Slug":"norway","ISO2":"NO"},{"Country":"South Sudan","Slug":"south-sudan","ISO2":"SS"},{"Country":"Tonga","Slug":"tonga","ISO2":"TO"},{"Country":"Tunisia","Slug":"tunisia","ISO2":"TN"},{"Country":"Macedonia, Republic of","Slug":"macedonia","ISO2":"MK"},{"Country":"Monaco","Slug":"monaco","ISO2":"MC"},{"Country":"Taiwan, Republic of China","Slug":"taiwan","ISO2":"TW"},{"Country":"Ukraine","Slug":"ukraine","ISO2":"UA"},{"Country":"Montenegro","Slug":"montenegro","ISO2":"ME"},{"Country":"Pakistan","Slug":"pakistan","ISO2":"PK"},{"Country":"Palau","Slug":"palau","ISO2":"PW"},{"Country":"British Indian Ocean Territory","Slug":"british-indian-ocean-territory","ISO2":"IO"},{"Country":"Cambodia","Slug":"cambodia","ISO2":"KH"},{"Country":"French Southern Territories","Slug":"french-southern-territories","ISO2":"TF"},{"Country":"Dominica","Slug":"dominica","ISO2":"DM"},{"Country":"Ethiopia","Slug":"ethiopia","ISO2":"ET"},{"Country":"Gabon","Slug":"gabon","ISO2":"GA"},{"Country":"Iran, Islamic Republic of","Slug":"iran","ISO2":"IR"},{"Country":"Mauritania","Slug":"mauritania","ISO2":"MR"},{"Country":"Switzerland","Slug":"switzerland","ISO2":"CH"},{"Country":"Zambia","Slug":"zambia","ISO2":"ZM"},{"Country":"Djibouti","Slug":"djibouti","ISO2":"DJ"},{"Country":"Holy See (Vatican City State)","Slug":"holy-see-vatican-city-state","ISO2":"VA"},{"Country":"Jordan","Slug":"jordan","ISO2":"JO"},{"Country":"Mozambique","Slug":"mozambique","ISO2":"MZ"},{"Country":"Panama","Slug":"panama","ISO2":"PA"},{"Country":"Sweden","Slug":"sweden","ISO2":"SE"},{"Country":"Cocos (Keeling) Islands","Slug":"cocos-keeling-islands","ISO2":"CC"},{"Country":"Ghana","Slug":"ghana","ISO2":"GH"},{"Country":"Latvia","Slug":"latvia","ISO2":"LV"},{"Country":"Micronesia, Federated States of","Slug":"micronesia","ISO2":"FM"},{"Country":"Bangladesh","Slug":"bangladesh","ISO2":"BD"},{"Country":"Egypt","Slug":"egypt","ISO2":"EG"},{"Country":"Saint Vincent and Grenadines","Slug":"saint-vincent-and-the-grenadines","ISO2":"VC"},{"Country":"Togo","Slug":"togo","ISO2":"TG"},{"Country":"Costa Rica","Slug":"costa-rica","ISO2":"CR"},{"Country":"Germany","Slug":"germany","ISO2":"DE"},{"Country":"Viet Nam","Slug":"vietnam","ISO2":"VN"},{"Country":"Yemen","Slug":"yemen","ISO2":"YE"},{"Country":"New Caledonia","Slug":"new-caledonia","ISO2":"NC"},{"Country":"New Zealand","Slug":"new-zealand","ISO2":"NZ"},{"Country":"Armenia","Slug":"armenia","ISO2":"AM"},{"Country":"Czech Republic","Slug":"czech-republic","ISO2":"CZ"},{"Country":"Guinea","Slug":"guinea","ISO2":"GN"},{"Country":"Hong Kong, SAR China","Slug":"hong-kong-sar-china","ISO2":"HK"},{"Country":"Jersey","Slug":"jersey","ISO2":"JE"},{"Country":"Mongolia","Slug":"mongolia","ISO2":"MN"},{"Country":"Senegal","Slug":"senegal","ISO2":"SN"},{"Country":"United Kingdom","Slug":"united-kingdom","ISO2":"GB"},{"Country":"Sierra Leone","Slug":"sierra-leone","ISO2":"SL"},{"Country":"Bahrain","Slug":"bahrain","ISO2":"BH"},{"Country":"Chile","Slug":"chile","ISO2":"CL"},{"Country":"Eritrea","Slug":"eritrea","ISO2":"ER"},{"Country":"Iraq","Slug":"iraq","ISO2":"IQ"},{"Country":"French Guiana","Slug":"french-guiana","ISO2":"GF"},{"Country":"Malta","Slug":"malta","ISO2":"MT"},{"Country":"Montserrat","Slug":"montserrat","ISO2":"MS"},{"Country":"San Marino","Slug":"san-marino","ISO2":"SM"},{"Country":"Thailand","Slug":"thailand","ISO2":"TH"}];

//function to update the URL depending on the user input, as well as the main middle graph's title
const updateURLs = (slug, countryname, countrycode) => {
    $("#countryname").html(`<h1>${countryname}</h1>`);
    urlNews = `http://newsapi.org/v2/top-headlines?country=${countrycode}&q=coronavirus&from=${date}&apiKey=${newsApiKey}`;
    if(slug == 'united-states'){
        urlConfirmed = `https://api.covid19api.com/total/dayone/country/${slug}/status/confirmed`;
        urlDeaths =`https://api.covid19api.com/total/dayone/country/${slug}/status/deaths`;
        urlRecovered = `https://api.covid19api.com/total/dayone/country/${slug}/status/recovered`;
    } else {
        urlConfirmed = `https://api.covid19api.com/country/${slug}/status/confirmed/live`;
        urlDeaths = `https://api.covid19api.com/country/${slug}/status/deaths/live`;
        urlRecovered = `https://api.covid19api.com/country/${slug}/status/confirmed/live`;
    }    
}

$body = $("body");
//function to calculate the difference from one number to another and change its styling accordingly.
const compareNumbers = (currentnum, previousnum) => {
    let difference = currentnum - previousnum;
    if(difference > 0){
        change = `<span uk-icon='icon: triangle-up' style='color: #EE40A8'>${difference}</span>`;        
    } 
    else if(difference == 0){
        change = `<span style="color: white">${difference}</span>`;
    }
    else if(difference < 0){
        change = `<span uk-icon='icon: triangle-down' style='color: #52F141'>${difference}</span>`;       
    }
    return change;
 };

updateURLs(selectedCountry, countryName, countryCode);

let confirmedSettings = {
    "url": urlConfirmed,
    "method": "GET",
    "timeout": 0,
};
let deathsSettings = {
    "url": urlDeaths,
    "method": "GET",
    "timeout": 0,
};
let recoveredSettings = {
    "url": urlRecovered,
    "method": "GET",
    "timeout": 0,
};
let newsSettings = {
    "url": urlNews,
    "method": "GET",
    "timeout": 0,
};

$("#countryname").html(`<h2>${countryName}</h2>`)
//loop through CountryData JSON and populate the result list box
for(let i=0; i<countryData.length; i++){
$("#result-list").append(`<li id='${i}' class="country-name" value='${countryData[i].Country}'><p class="name">${countryData[i].Country}</p></li>`);
}

//show the results-container upon searchbox focus
$(document).ready(function(){
    $("#countrysearch").focus(function(){
        $("#results-container").removeClass("uk-hidden");
    });
});

//filter the country list depending on user input
countrySearch.keyup(function () {
    let filter = countrySearch.val().toUpperCase();
    let lis = $("#result-list li");
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName('name')[0].innerHTML;
        if (name.toUpperCase().indexOf(filter) == 0) 
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
});

$.ajax(confirmedSettings).done(function (response) {
    let confirmedData = response;
    confirmedData.splice(-1);
    //AJAX call to get "Deaths" status data
    $.ajax(deathsSettings).done(function (response) {
        let deathsData = response;
        deathsData.splice(-1);
        //AJAX call to get "Recovered" status data
        $.ajax(recoveredSettings).done(function (response) {
            let recoveredData = response;
            recoveredData.splice(-1);
            //empty out the div containing the graph to make sure no previous data affects the newly loaded chart.
            $("#graph-side").empty();
            //load the Google Charts package
            google.charts.load('current', {'packages':['corechart']});
            //draw the chart on onLoadCallback
            google.charts.setOnLoadCallback(drawChart);
            //contains all the information needed to draw the chart
            function drawChart() {
                let data = new google.visualization.DataTable();
                //the names of the columns in the data table, along with their data types
                data.addColumn('string','Date');
                data.addColumn('number', 'Confirmed');
                data.addColumn('number', 'Deaths');
                data.addColumn('number', 'Recovered');
                //loop through all of the data gathered from the API to create the data table
                for(let i=0; i<confirmedData.length; i++){
                    data.addRow(["'" + confirmedData[i].Date + "'", confirmedData[i].Cases, deathsData[i].Cases, recoveredData[i].Cases]);
                }
                //styling specifications
                let options = {
                    backgroundColor: 'none',
                    chartArea: { width: '80%', height: '80%' },
                    colors: ['#EE40A8', '#52F141', 'white'],
                    curveType: 'function',
                    hAxis: { title: 'Date', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' } },
                    vAxis: { gridlines: { color: '#4088C9' }, minorGridlines: { color: '#4088C9' }, title: 'Number of Cases', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' }, minValue: 0 },
                    lineWidth: 4,
                    legend: { position: 'bottom' },
                    animation: { startup: true, easing: 'out', duration: 2500 }
                };
                //specify where to draw the chart
                let chart = new google.visualization.LineChart(document.getElementById('graph-side'));
                try {
                    //draw the chart
                    chart.draw(data, options);
                    //empty the table body to ensure that no previous data makes trouble
                    $("tbody").empty();
                    //loop through the API data to populate the main numbers table
                    for(i=confirmedData.length-30; i<confirmedData.length; i++){
                        let confirmedChange = compareNumbers(confirmedData[i].Cases, confirmedData[i-1].Cases);
                        let deathsChange = compareNumbers(deathsData[i].Cases, deathsData[i-1].Cases);
                        let recoveredChange = compareNumbers(recoveredData[i].Cases, recoveredData[i-1].Cases);
                        $(`<tr style="color: white"><td>${confirmedData[i].Date.slice(0, -10)}</td>
                            <td style="text-align: center">${confirmedData[i].Cases}</td>
                            <td style="text-align: center">${confirmedChange}</td>
                            <td style="text-align: center">${deathsData[i].Cases}</td>
                            <td style="text-align: center">${deathsChange}</td>
                            <td style="text-align: center">${recoveredData[i].Cases}</td>
                            <td style="text-align: center">${recoveredChange}</td></tr>`).prependTo("tbody");
                        change = "";
                    };
                    //AJAX request for news regarding COVID in the selected country
                        $.ajax(newsSettings).done(function (response) {
                            let newsData = response.articles;
                            $("#local-news").empty();
                            console.log(newsData[1].url);
                            
                            for(i=0; i<newsData.length; i++){
                                $(`<a href="${newsData[i].url}" target="_blank" style="text-decoration: none;"><div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                                    <div class="uk-card-media-left uk-cover-container">
                                        <img src="${newsData[i].urlToImage}" alt="" uk-cover>
                                        <canvas width="600" height="400"></canvas>
                                    </div>
                                    <div>
                                        <div class="uk-card-body">
                                            <h3 class="uk-card-title" style="color: white">${newsData[i].title}</h3>
                                            <p>${newsData[i].description}</p>
                                        </div>
                                    </div>
                                </div></a>`).appendTo("#local-news");
                            }
                        })
                        $("#local-news").html("Oh no! Looks like the News API doesn't have that country.");
                    
                } catch(err) {
                    $("#graph-side").html(errMsg);
                    $("#local-news").empty();
                }
            }
        })
    })
})

//save the selected country as a variable and return the slug.
$(".country-name").click(function(){
    indexHolder = this.id;
    countryName = countryData[indexHolder].Country;
    selectedCountry = countryData[indexHolder].Slug;
    countryCode = countryData[indexHolder].ISO2;
    updateURLs(selectedCountry, countryName, countryCode);
    console.log(urlNews);
    $("#results-container").addClass("uk-hidden");
    confirmedSettings = {
        "url": urlConfirmed,
        "method": "GET",
        "timeout": 0,
    };
    deathsSettings = {
        "url": urlDeaths,
        "method": "GET",
        "timeout": 0,
    };
    recoveredSettings = {
        "url": urlRecovered,
        "method": "GET",
        "timeout": 0,
    };
    newsSettings = {
        "url": urlNews,
        "method": "GET",
        "timeout": 0,
    };

    //AJAX call to get "Confirmed" status data
    $.ajax(confirmedSettings).done(function (response) {
        let confirmedData = response;
        confirmedData.splice(-1);
        //AJAX call to get "Deaths" status data
        $.ajax(deathsSettings).done(function (response) {
            let deathsData = response;
            deathsData.splice(-1);
            //AJAX call to get "Recovered" status data
            $.ajax(recoveredSettings).done(function (response) {
                let recoveredData = response;
                recoveredData.splice(-1);
                //empty out the div containing the graph to make sure no previous data affects the newly loaded chart.
                $("#graph-side").empty();
                //load the Google Charts package
                google.charts.load('current', {'packages':['corechart']});
                //draw the chart on onLoadCallback
                google.charts.setOnLoadCallback(drawChart);
                //contains all the information needed to draw the chart
                function drawChart() {
                    let data = new google.visualization.DataTable();
                    //the names of the columns in the data table, along with their data types
                    data.addColumn('string','Date');
                    data.addColumn('number', 'Confirmed');
                    data.addColumn('number', 'Deaths');
                    data.addColumn('number', 'Recovered');
                    //loop through all of the data gathered from the API to create the data table
                    for(let i=0; i<confirmedData.length; i++){
                        data.addRow(["'" + confirmedData[i].Date + "'", confirmedData[i].Cases, deathsData[i].Cases, recoveredData[i].Cases]);
                    }
                    //styling specifications
                    let options = {
                        backgroundColor: 'none',
                        chartArea: { width: '80%', height: '80%' },
                        colors: ['#EE40A8', '#52F141', 'white'],
                        curveType: 'function',
                        hAxis: { title: 'Date', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' } },
                        vAxis: { gridlines: { color: '#4088C9' }, minorGridlines: { color: '#4088C9' }, title: 'Number of Cases', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' }, minValue: 0 },
                        lineWidth: 4,
                        legend: { position: 'bottom' },
                        animation: { startup: true, easing: 'out', duration: 2500 }
                    };
                    //specify where to draw the chart
                    let chart = new google.visualization.LineChart(document.getElementById('graph-side'));
                    try {
                        //draw the chart
                        chart.draw(data, options);
                        //empty the table body to ensure that no previous data makes trouble
                        $("tbody").empty();
                        //loop through the API data to populate the main numbers table
                        for(i=confirmedData.length-30; i<confirmedData.length; i++){
                            let confirmedChange = compareNumbers(confirmedData[i].Cases, confirmedData[i-1].Cases);
                            let deathsChange = compareNumbers(deathsData[i].Cases, deathsData[i-1].Cases);
                            let recoveredChange = compareNumbers(recoveredData[i].Cases, recoveredData[i-1].Cases);
                            $(`<tr style="color: white"><td>${confirmedData[i].Date.slice(0, -10)}</td>
                                <td style="text-align: center">${confirmedData[i].Cases}</td>
                                <td style="text-align: center">${confirmedChange}</td>
                                <td style="text-align: center">${deathsData[i].Cases}</td>
                                <td style="text-align: center">${deathsChange}</td>
                                <td style="text-align: center">${recoveredData[i].Cases}</td>
                                <td style="text-align: center">${recoveredChange}</td></tr>`).prependTo("tbody");
                            change = "";
                        };
                        //AJAX request for news regarding COVID in the selected country
                        $.ajax(newsSettings).done(function (response) {
                            if(response.totalResults == 0) {
                                $("#local-news").empty();
                                $("#local-news").html("<p>Oh no! Looks like the News API doesn't have that country.</p>");
                            } else {
                                let newsData = response.articles;
                                console.log(newsData);
                                $("#local-news").empty();
                                for(i=0; i<newsData.length; i++){
                                    $(`<a href="${newsData[i].url}" target="_blank" style="text-decoration: none;"><div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                                        <div class="uk-card-media-left uk-cover-container">
                                            <img src="${newsData[i].urlToImage}" alt="" uk-cover>
                                            <canvas width="600" height="400"></canvas>
                                        </div>
                                        <div>
                                            <div class="uk-card-body">
                                                <h3 class="uk-card-title" style="color: white">${newsData[i].title}</h3>
                                                <p>${newsData[i].description}</p>
                                            </div>
                                        </div>
                                    </div></a>`).appendTo("#local-news");
                                }
                            }
                        })
                    } catch(err) {
                        $("#graph-side").html(errMsg);
                        $("#local-news").empty();
                    }
                }
            })
        })
    })

    // $(document).on({
    //     ajaxStart: function() { $body.addClass("loading");    },
    //      ajaxStop: function() { $body.removeClass("loading"); }    
    // });

});