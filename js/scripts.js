let selectedCountry = "united-states";
let caseType = "confirmed";
let countryName = "United States";
let countrySearch = $("#countrysearch");
let errMsg = "<h2>Oh no! The API screwed up. Try again. Otherwise, it probably doesn't have the country.</h2>";
let url = "https://api.covid19api.com/country/" + selectedCountry + "/status/" + caseType + "live";
let countryData = [{"Country":"Rwanda","Slug":"rwanda","ISO2":"RW"},{"Country":"Tajikistan","Slug":"tajikistan","ISO2":"TJ"},{"Country":"Tanzania, United Republic of","Slug":"tanzania","ISO2":"TZ"},{"Country":"Gibraltar","Slug":"gibraltar","ISO2":"GI"},{"Country":"Iceland","Slug":"iceland","ISO2":"IS"},{"Country":"Israel","Slug":"israel","ISO2":"IL"},{"Country":"Western Sahara","Slug":"western-sahara","ISO2":"EH"},{"Country":"Bahamas","Slug":"bahamas","ISO2":"BS"},{"Country":"China","Slug":"china","ISO2":"CN"},{"Country":"El Salvador","Slug":"el-salvador","ISO2":"SV"},{"Country":"France","Slug":"france","ISO2":"FR"},{"Country":"Seychelles","Slug":"seychelles","ISO2":"SC"},{"Country":"Fiji","Slug":"fiji","ISO2":"FJ"},{"Country":"Gambia","Slug":"gambia","ISO2":"GM"},{"Country":"Guatemala","Slug":"guatemala","ISO2":"GT"},{"Country":"Myanmar","Slug":"myanmar","ISO2":"MM"},{"Country":"Northern Mariana Islands","Slug":"northern-mariana-islands","ISO2":"MP"},{"Country":"Guinea-Bissau","Slug":"guinea-bissau","ISO2":"GW"},{"Country":"Ireland","Slug":"ireland","ISO2":"IE"},{"Country":"Portugal","Slug":"portugal","ISO2":"PT"},{"Country":"Turkey","Slug":"turkey","ISO2":"TR"},{"Country":"ALA Aland Islands","Slug":"ala-aland-islands","ISO2":"AX"},{"Country":"Dominican Republic","Slug":"dominican-republic","ISO2":"DO"},{"Country":"Estonia","Slug":"estonia","ISO2":"EE"},{"Country":"Faroe Islands","Slug":"faroe-islands","ISO2":"FO"},{"Country":"Peru","Slug":"peru","ISO2":"PE"},{"Country":"Angola","Slug":"angola","ISO2":"AO"},{"Country":"Bolivia","Slug":"bolivia","ISO2":"BO"},{"Country":"Comoros","Slug":"comoros","ISO2":"KM"},{"Country":"Cook Islands","Slug":"cook-islands","ISO2":"CK"},{"Country":"French Polynesia","Slug":"french-polynesia","ISO2":"PF"},{"Country":"Tuvalu","Slug":"tuvalu","ISO2":"TV"},{"Country":"Algeria","Slug":"algeria","ISO2":"DZ"},{"Country":"Bosnia and Herzegovina","Slug":"bosnia-and-herzegovina","ISO2":"BA"},{"Country":"Philippines","Slug":"philippines","ISO2":"PH"},{"Country":"Uruguay","Slug":"uruguay","ISO2":"UY"},{"Country":"Andorra","Slug":"andorra","ISO2":"AD"},{"Country":"Greenland","Slug":"greenland","ISO2":"GL"},{"Country":"Mali","Slug":"mali","ISO2":"ML"},{"Country":"Morocco","Slug":"morocco","ISO2":"MA"},{"Country":"Nigeria","Slug":"nigeria","ISO2":"NG"},{"Country":"Sudan","Slug":"sudan","ISO2":"SD"},{"Country":"Guadeloupe","Slug":"guadeloupe","ISO2":"GP"},{"Country":"Guyana","Slug":"guyana","ISO2":"GY"},{"Country":"Niger","Slug":"niger","ISO2":"NE"},{"Country":"Ecuador","Slug":"ecuador","ISO2":"EC"},{"Country":"Pitcairn","Slug":"pitcairn","ISO2":"PN"},{"Country":"Poland","Slug":"poland","ISO2":"PL"},{"Country":"Saint Kitts and Nevis","Slug":"saint-kitts-and-nevis","ISO2":"KN"},{"Country":"South Georgia and the South Sandwich Islands","Slug":"south-georgia-and-the-south-sandwich-islands","ISO2":"GS"},{"Country":"Brunei Darussalam","Slug":"brunei","ISO2":"BN"},{"Country":"Isle of Man","Slug":"isle-of-man","ISO2":"IM"},{"Country":"Lesotho","Slug":"lesotho","ISO2":"LS"},{"Country":"Samoa","Slug":"samoa","ISO2":"WS"},{"Country":"Serbia","Slug":"serbia","ISO2":"RS"},{"Country":"Korea (North)","Slug":"korea-north","ISO2":"KP"},{"Country":"Papua New Guinea","Slug":"papua-new-guinea","ISO2":"PG"},{"Country":"Afghanistan","Slug":"afghanistan","ISO2":"AF"},{"Country":"Greece","Slug":"greece","ISO2":"GR"},{"Country":"Grenada","Slug":"grenada","ISO2":"GD"},{"Country":"Barbados","Slug":"barbados","ISO2":"BB"},{"Country":"Japan","Slug":"japan","ISO2":"JP"},{"Country":"Somalia","Slug":"somalia","ISO2":"SO"},{"Country":"Sri Lanka","Slug":"sri-lanka","ISO2":"LK"},{"Country":"Suriname","Slug":"suriname","ISO2":"SR"},{"Country":"Tokelau","Slug":"tokelau","ISO2":"TK"},{"Country":"Bermuda","Slug":"bermuda","ISO2":"BM"},{"Country":"Kiribati","Slug":"kiribati","ISO2":"KI"},{"Country":"Libya","Slug":"libya","ISO2":"LY"},{"Country":"British Virgin Islands","Slug":"british-virgin-islands","ISO2":"VG"},{"Country":"Saudi Arabia","Slug":"saudi-arabia","ISO2":"SA"},{"Country":"Turkmenistan","Slug":"turkmenistan","ISO2":"TM"},{"Country":"American Samoa","Slug":"american-samoa","ISO2":"AS"},{"Country":"Kazakhstan","Slug":"kazakhstan","ISO2":"KZ"},{"Country":"Benin","Slug":"benin","ISO2":"BJ"},{"Country":"Croatia","Slug":"croatia","ISO2":"HR"},{"Country":"Haiti","Slug":"haiti","ISO2":"HT"},{"Country":"Kyrgyzstan","Slug":"kyrgyzstan","ISO2":"KG"},{"Country":"Mexico","Slug":"mexico","ISO2":"MX"},{"Country":"Nicaragua","Slug":"nicaragua","ISO2":"NI"},{"Country":"Antarctica","Slug":"antarctica","ISO2":"AQ"},{"Country":"Nepal","Slug":"nepal","ISO2":"NP"},{"Country":"Saint-Martin (French part)","Slug":"saint-martin-french-part","ISO2":"MF"},{"Country":"Trinidad and Tobago","Slug":"trinidad-and-tobago","ISO2":"TT"},{"Country":"Netherlands","Slug":"netherlands","ISO2":"NL"},{"Country":"Saint Lucia","Slug":"saint-lucia","ISO2":"LC"},{"Country":"Austria","Slug":"austria","ISO2":"AT"},{"Country":"Finland","Slug":"finland","ISO2":"FI"},{"Country":"Kuwait","Slug":"kuwait","ISO2":"KW"},{"Country":"Liechtenstein","Slug":"liechtenstein","ISO2":"LI"},{"Country":"Maldives","Slug":"maldives","ISO2":"MV"},{"Country":"Central African Republic","Slug":"central-african-republic","ISO2":"CF"},{"Country":"Guam","Slug":"guam","ISO2":"GU"},{"Country":"Belize","Slug":"belize","ISO2":"BZ"},{"Country":"Lao PDR","Slug":"lao-pdr","ISO2":"LA"},{"Country":"Liberia","Slug":"liberia","ISO2":"LR"},{"Country":"Mauritius","Slug":"mauritius","ISO2":"MU"},{"Country":"Mayotte","Slug":"mayotte","ISO2":"YT"},{"Country":"Wallis and Futuna Islands","Slug":"wallis-and-futuna-islands","ISO2":"WF"},{"Country":"Denmark","Slug":"denmark","ISO2":"DK"},{"Country":"Malaysia","Slug":"malaysia","ISO2":"MY"},{"Country":"Paraguay","Slug":"paraguay","ISO2":"PY"},{"Country":"Uganda","Slug":"uganda","ISO2":"UG"},{"Country":"Cape Verde","Slug":"cape-verde","ISO2":"CV"},{"Country":"Indonesia","Slug":"indonesia","ISO2":"ID"},{"Country":"Syrian Arab Republic (Syria)","Slug":"syria","ISO2":"SY"},{"Country":"Belgium","Slug":"belgium","ISO2":"BE"},{"Country":"Bulgaria","Slug":"bulgaria","ISO2":"BG"},{"Country":"Norfolk Island","Slug":"norfolk-island","ISO2":"NF"},{"Country":"Oman","Slug":"oman","ISO2":"OM"},{"Country":"Saint Pierre and Miquelon","Slug":"saint-pierre-and-miquelon","ISO2":"PM"},{"Country":"Chad","Slug":"chad","ISO2":"TD"},{"Country":"Sao Tome and Principe","Slug":"sao-tome-and-principe","ISO2":"ST"},{"Country":"Guernsey","Slug":"guernsey","ISO2":"GG"},{"Country":"Virgin Islands, US","Slug":"virgin-islands","ISO2":"VI"},{"Country":"Jamaica","Slug":"jamaica","ISO2":"JM"},{"Country":"Namibia","Slug":"namibia","ISO2":"NA"},{"Country":"Netherlands Antilles","Slug":"netherlands-antilles","ISO2":"AN"},{"Country":"South Africa","Slug":"south-africa","ISO2":"ZA"},{"Country":"Bouvet Island","Slug":"bouvet-island","ISO2":"BV"},{"Country":"Madagascar","Slug":"madagascar","ISO2":"MG"},{"Country":"Vanuatu","Slug":"vanuatu","ISO2":"VU"},{"Country":"Antigua and Barbuda","Slug":"antigua-and-barbuda","ISO2":"AG"},{"Country":"Slovakia","Slug":"slovakia","ISO2":"SK"},{"Country":"Albania","Slug":"albania","ISO2":"AL"},{"Country":"Australia","Slug":"australia","ISO2":"AU"},{"Country":"Niue","Slug":"niue","ISO2":"NU"},{"Country":"Botswana","Slug":"botswana","ISO2":"BW"},{"Country":"Timor-Leste","Slug":"timor-leste","ISO2":"TL"},{"Country":"Colombia","Slug":"colombia","ISO2":"CO"},{"Country":"Congo (Kinshasa)","Slug":"congo-kinshasa","ISO2":"CD"},{"Country":"Cyprus","Slug":"cyprus","ISO2":"CY"},{"Country":"Turks and Caicos Islands","Slug":"turks-and-caicos-islands","ISO2":"TC"},{"Country":"Burkina Faso","Slug":"burkina-faso","ISO2":"BF"},{"Country":"Lebanon","Slug":"lebanon","ISO2":"LB"},{"Country":"Russian Federation","Slug":"russia","ISO2":"RU"},{"Country":"Réunion","Slug":"réunion","ISO2":"RE"},{"Country":"Svalbard and Jan Mayen Islands","Slug":"svalbard-and-jan-mayen-islands","ISO2":"SJ"},{"Country":"Venezuela (Bolivarian Republic)","Slug":"venezuela","ISO2":"VE"},{"Country":"Christmas Island","Slug":"christmas-island","ISO2":"CX"},{"Country":"Falkland Islands (Malvinas)","Slug":"falkland-islands-malvinas","ISO2":"FK"},{"Country":"Azerbaijan","Slug":"azerbaijan","ISO2":"AZ"},{"Country":"Brazil","Slug":"brazil","ISO2":"BR"},{"Country":"Cameroon","Slug":"cameroon","ISO2":"CM"},{"Country":"Cayman Islands","Slug":"cayman-islands","ISO2":"KY"},{"Country":"India","Slug":"india","ISO2":"IN"},{"Country":"Luxembourg","Slug":"luxembourg","ISO2":"LU"},{"Country":"Marshall Islands","Slug":"marshall-islands","ISO2":"MH"},{"Country":"Nauru","Slug":"nauru","ISO2":"NR"},{"Country":"US Minor Outlying Islands","Slug":"us-minor-outlying-islands","ISO2":"UM"},{"Country":"Korea (South)","Slug":"korea-south","ISO2":"KR"},{"Country":"Equatorial Guinea","Slug":"equatorial-guinea","ISO2":"GQ"},{"Country":"Honduras","Slug":"honduras","ISO2":"HN"},{"Country":"Italy","Slug":"italy","ISO2":"IT"},{"Country":"Republic of Kosovo","Slug":"kosovo","ISO2":"XK"},{"Country":"Belarus","Slug":"belarus","ISO2":"BY"},{"Country":"Puerto Rico","Slug":"puerto-rico","ISO2":"PR"},{"Country":"Qatar","Slug":"qatar","ISO2":"QA"},{"Country":"Romania","Slug":"romania","ISO2":"RO"},{"Country":"Bhutan","Slug":"bhutan","ISO2":"BT"},{"Country":"Lithuania","Slug":"lithuania","ISO2":"LT"},{"Country":"Solomon Islands","Slug":"solomon-islands","ISO2":"SB"},{"Country":"Palestinian Territory","Slug":"palestine","ISO2":"PS"},{"Country":"Singapore","Slug":"singapore","ISO2":"SG"},{"Country":"Malawi","Slug":"malawi","ISO2":"MW"},{"Country":"Saint Helena","Slug":"saint-helena","ISO2":"SH"},{"Country":"Argentina","Slug":"argentina","ISO2":"AR"},{"Country":"Burundi","Slug":"burundi","ISO2":"BI"},{"Country":"Spain","Slug":"spain","ISO2":"ES"},{"Country":"Zimbabwe","Slug":"zimbabwe","ISO2":"ZW"},{"Country":"Aruba","Slug":"aruba","ISO2":"AW"},{"Country":"Macao, SAR China","Slug":"macao-sar-china","ISO2":"MO"},{"Country":"Saint-Barthélemy","Slug":"saint-barthélemy","ISO2":"BL"},{"Country":"Congo (Brazzaville)","Slug":"congo-brazzaville","ISO2":"CG"},{"Country":"Slovenia","Slug":"slovenia","ISO2":"SI"},{"Country":"United Arab Emirates","Slug":"united-arab-emirates","ISO2":"AE"},{"Country":"Anguilla","Slug":"anguilla","ISO2":"AI"},{"Country":"Cuba","Slug":"cuba","ISO2":"CU"},{"Country":"Côte d\'Ivoire","Slug":"cote-divoire","ISO2":"CI"},{"Country":"Hungary","Slug":"hungary","ISO2":"HU"},{"Country":"United States of America","Slug":"united-states","ISO2":"US"},{"Country":"Uzbekistan","Slug":"uzbekistan","ISO2":"UZ"},{"Country":"Canada","Slug":"canada","ISO2":"CA"},{"Country":"Georgia","Slug":"georgia","ISO2":"GE"},{"Country":"Kenya","Slug":"kenya","ISO2":"KE"},{"Country":"Martinique","Slug":"martinique","ISO2":"MQ"},{"Country":"Moldova","Slug":"moldova","ISO2":"MD"},{"Country":"Swaziland","Slug":"swaziland","ISO2":"SZ"},{"Country":"Heard and Mcdonald Islands","Slug":"heard-and-mcdonald-islands","ISO2":"HM"},{"Country":"Norway","Slug":"norway","ISO2":"NO"},{"Country":"South Sudan","Slug":"south-sudan","ISO2":"SS"},{"Country":"Tonga","Slug":"tonga","ISO2":"TO"},{"Country":"Tunisia","Slug":"tunisia","ISO2":"TN"},{"Country":"Macedonia, Republic of","Slug":"macedonia","ISO2":"MK"},{"Country":"Monaco","Slug":"monaco","ISO2":"MC"},{"Country":"Taiwan, Republic of China","Slug":"taiwan","ISO2":"TW"},{"Country":"Ukraine","Slug":"ukraine","ISO2":"UA"},{"Country":"Montenegro","Slug":"montenegro","ISO2":"ME"},{"Country":"Pakistan","Slug":"pakistan","ISO2":"PK"},{"Country":"Palau","Slug":"palau","ISO2":"PW"},{"Country":"British Indian Ocean Territory","Slug":"british-indian-ocean-territory","ISO2":"IO"},{"Country":"Cambodia","Slug":"cambodia","ISO2":"KH"},{"Country":"French Southern Territories","Slug":"french-southern-territories","ISO2":"TF"},{"Country":"Dominica","Slug":"dominica","ISO2":"DM"},{"Country":"Ethiopia","Slug":"ethiopia","ISO2":"ET"},{"Country":"Gabon","Slug":"gabon","ISO2":"GA"},{"Country":"Iran, Islamic Republic of","Slug":"iran","ISO2":"IR"},{"Country":"Mauritania","Slug":"mauritania","ISO2":"MR"},{"Country":"Switzerland","Slug":"switzerland","ISO2":"CH"},{"Country":"Zambia","Slug":"zambia","ISO2":"ZM"},{"Country":"Djibouti","Slug":"djibouti","ISO2":"DJ"},{"Country":"Holy See (Vatican City State)","Slug":"holy-see-vatican-city-state","ISO2":"VA"},{"Country":"Jordan","Slug":"jordan","ISO2":"JO"},{"Country":"Mozambique","Slug":"mozambique","ISO2":"MZ"},{"Country":"Panama","Slug":"panama","ISO2":"PA"},{"Country":"Sweden","Slug":"sweden","ISO2":"SE"},{"Country":"Cocos (Keeling) Islands","Slug":"cocos-keeling-islands","ISO2":"CC"},{"Country":"Ghana","Slug":"ghana","ISO2":"GH"},{"Country":"Latvia","Slug":"latvia","ISO2":"LV"},{"Country":"Micronesia, Federated States of","Slug":"micronesia","ISO2":"FM"},{"Country":"Bangladesh","Slug":"bangladesh","ISO2":"BD"},{"Country":"Egypt","Slug":"egypt","ISO2":"EG"},{"Country":"Saint Vincent and Grenadines","Slug":"saint-vincent-and-the-grenadines","ISO2":"VC"},{"Country":"Togo","Slug":"togo","ISO2":"TG"},{"Country":"Costa Rica","Slug":"costa-rica","ISO2":"CR"},{"Country":"Germany","Slug":"germany","ISO2":"DE"},{"Country":"Viet Nam","Slug":"vietnam","ISO2":"VN"},{"Country":"Yemen","Slug":"yemen","ISO2":"YE"},{"Country":"New Caledonia","Slug":"new-caledonia","ISO2":"NC"},{"Country":"New Zealand","Slug":"new-zealand","ISO2":"NZ"},{"Country":"Armenia","Slug":"armenia","ISO2":"AM"},{"Country":"Czech Republic","Slug":"czech-republic","ISO2":"CZ"},{"Country":"Guinea","Slug":"guinea","ISO2":"GN"},{"Country":"Hong Kong, SAR China","Slug":"hong-kong-sar-china","ISO2":"HK"},{"Country":"Jersey","Slug":"jersey","ISO2":"JE"},{"Country":"Mongolia","Slug":"mongolia","ISO2":"MN"},{"Country":"Senegal","Slug":"senegal","ISO2":"SN"},{"Country":"United Kingdom","Slug":"united-kingdom","ISO2":"GB"},{"Country":"Sierra Leone","Slug":"sierra-leone","ISO2":"SL"},{"Country":"Bahrain","Slug":"bahrain","ISO2":"BH"},{"Country":"Chile","Slug":"chile","ISO2":"CL"},{"Country":"Eritrea","Slug":"eritrea","ISO2":"ER"},{"Country":"Iraq","Slug":"iraq","ISO2":"IQ"},{"Country":"French Guiana","Slug":"french-guiana","ISO2":"GF"},{"Country":"Malta","Slug":"malta","ISO2":"MT"},{"Country":"Montserrat","Slug":"montserrat","ISO2":"MS"},{"Country":"San Marino","Slug":"san-marino","ISO2":"SM"},{"Country":"Thailand","Slug":"thailand","ISO2":"TH"}];

let mapStyles = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ];

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('chart-map'), {
    center: {lat: 39.55, lng: -105.78},
    zoom: 4,
    styles: mapStyles
  });
}
$('head').append(`<script src="https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&callback=initMap" async defer></script>`);

//function to update the URL depending on the user input, as well as the main middle graph's title
const updateURL = (slug, casetype, countryname) => {
    $("#graph-title").html("<h2>" + countryname + " |  Status: " + caseType + "</h2>");
    if(slug == 'united-states'){
        url = `https://api.covid19api.com/total/dayone/country/${slug}/status/${casetype}`;
    } else {
        url = `https://api.covid19api.com/country/${slug}/status/${casetype}/live`;
    }    
}

$body = $("body");

updateURL(selectedCountry, caseType, countryName);

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

let mainGraphSettings = {
  "url": url,
  "method": "GET",
  "timeout": 0,
};

//load the graph and table upon page load so it doesn't look weird all empty and stuff
$.ajax(mainGraphSettings).done(function (response) {
  let mainGraphData = response;
  mainGraphData.splice(-1);
  $("#graph-main").empty();
  $(document).on({
      ajaxStart: function() { $body.addClass("loading");    },
       ajaxStop: function() { $body.removeClass("loading"); }    
  });
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
      let data = new google.visualization.DataTable();
      data.addColumn('string','Date');
      data.addColumn('number', 'Number of Cases');
      for(let i=0; i<mainGraphData.length; i++){
          data.addRow(["'" + mainGraphData[i].Date + "'", mainGraphData[i].Cases]);
      }
      let options = {
          backgroundColor: 'none',
          chartArea: { width: '80%', height: '80%' },
          colors: ['#EE40A8'],
          curveType: 'function',
          hAxis: { title: 'Date', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' } },
          vAxis: { gridlines: { color: '#4088C9' }, minorGridlines: { color: '#4088C9' }, title: 'Number of Cases', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' }, minValue: 0 },
          lineWidth: 4,
          legend: { position: 'bottom' },
          animation: { startup: true, easing: 'out', duration: 2500 }
      };
      let chart = new google.visualization.LineChart(document.getElementById('graph-main'));
      try {
          chart.draw(data, options);
      //populate the Covid Table card with cases from the last 30 days
      $("tbody").empty();
      for(i=mainGraphData.length-30; i<mainGraphData.length; i++){
          $(`<tr style="color: white"><td>${mainGraphData[i].Date.slice(0, -10)}</td><td>${mainGraphData[i].Cases}</td></tr>`).prependTo("tbody");
      };
      newLat = (mainGraphData[1].Lat);
      newLon = (mainGraphData[1].Lon);
  } catch(err) {
      $("#graph-main").html(errMsg);
  }
  }
})

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

//save the selected country as a variable and return the slug.
$(".country-name").click(function(){
    indexHolder = this.id;
    countryName = countryData[indexHolder].Country;
    selectedCountry = countryData[indexHolder].Slug;
    updateURL(selectedCountry, caseType, countryName);
    console.log(url);
    $("#results-container").addClass("uk-hidden");
    let mainGraphSettings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
      };
    $(document).on({
        ajaxStart: function() { $body.addClass("loading");    },
         ajaxStop: function() { $body.removeClass("loading"); }    
    });
    $.ajax(mainGraphSettings).done(function (response) {
        let mainGraphData = response;
        mainGraphData.splice(-1);
        $("#graph-main").empty();
        $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
             ajaxStop: function() { $body.removeClass("loading"); }    
        });
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    
        function drawChart() {
            let data = new google.visualization.DataTable();
            data.addColumn('string','Date');
            data.addColumn('number', 'Number of Cases');
            for(let i=0; i<mainGraphData.length; i++){
                data.addRow(["'" + mainGraphData[i].Date + "'", mainGraphData[i].Cases]);
            }
            let options = {
              backgroundColor: 'none',
              chartArea: { width: '80%', height: '80%' },
              colors: ['#EE40A8'],
              curveType: 'function',
              hAxis: { title: 'Date', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' } },
              vAxis: { gridlines: { color: '#4088C9' }, minorGridlines: { color: '#4088C9' }, title: 'Number of Cases', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' }, minValue: 0 },
              lineWidth: 4,
              legend: { position: 'bottom' },
              animation: { startup: true, easing: 'out', duration: 2500 }
            };
            let chart = new google.visualization.LineChart(document.getElementById('graph-main'));
            try {
                chart.draw(data, options);
            //populate the Covid Table card with cases from the last 30 days
            $("tbody").empty();
            for(i=mainGraphData.length-30; i<mainGraphData.length; i++){
                $(`<tr style="color: white"><td>${mainGraphData[i].Date.slice(0, -10)}</td><td>${mainGraphData[i].Cases}</td></tr>`).prependTo("tbody");
            };
            newLat = (mainGraphData[1].Lat);
            newLon = (mainGraphData[1].Lon);
            let newPos = new google.maps.LatLng(newLat, newLon);
                map.setOptions({
                    center: newPos
                });
        } catch(err) {
            $("#graph-main").html(errMsg);
        }
        }
    })
});

    

//get data type, whether confirmed, deaths, or recovered
const saveCaseType = clicked_case => {
    caseType = clicked_case;
    updateURL(selectedCountry, caseType, countryName);
    console.log(url);
    let mainGraphSettings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
      };
    $.ajax(mainGraphSettings).done(function (response) {
        let mainGraphData = response;
        mainGraphData.splice(-1);
        $("#graph-main").empty();
        $(document).on({
            ajaxStart: function() { $body.addClass("loading");    },
             ajaxStop: function() { $body.removeClass("loading"); }    
        });
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = new google.visualization.DataTable();
            data.addColumn('string','Date');
            data.addColumn('number', 'Number of Cases');
            for(var i=0; i<mainGraphData.length; i++){
                data.addRow(["'" + mainGraphData[i].Date + "'", mainGraphData[i].Cases]);
            }
            let options = {
              backgroundColor: 'none',
              chartArea: { width: '80%', height: '80%' },
              colors: ['#EE40A8'],
              curveType: 'function',
              hAxis: { title: 'Date', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' } },
              vAxis: { gridlines: { color: '#4088C9' }, minorGridlines: { color: '#4088C9' }, title: 'Number of Cases', titleTextStyle: { color: 'white' }, textStyle: { color: 'white' }, minValue: 0 },
              lineWidth: 4,
              legend: { position: 'bottom' },
              animation: { startup: true, easing: 'out', duration: 2500 }
            };
            var chart = new google.visualization.LineChart(document.getElementById('graph-main'));
            try {
                chart.draw(data, options);
            //populate the Covid Table card with cases from the last 30 days
            $("tbody").empty();
            for(i=mainGraphData.length-30; i<mainGraphData.length; i++){
                $(`<tr style="color: white"><td>${mainGraphData[i].Date.slice(0, -10)}</td><td>${mainGraphData[i].Cases}</td></tr>`).prependTo("tbody");
            };
            // let map;
            // function initMap() {
            //   map = new google.maps.Map(document.getElementById('chart-map'), {
            //     center: {lat: -34.397, lng: 150.644},
            //     zoom: 4,
            //     styles: mapStyles
            //   });
            // }
            } catch(err) {
                $("#graph-main").html(errMsg);
            }
        }
    })
}
