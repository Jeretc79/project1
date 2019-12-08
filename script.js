var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';

var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
var city = "portland";
var newURL2 = baseURL2 + city + '&apikey=' + authKey;
var concertsURL;

$("#submitBtn").on('click', function () {

    var artist = $('#search-term').val().trim();
    var newURL = baseURL + authKey + '&query=' + artist;

    $.ajax({
        url: newURL,
        method: "GET"
    }).then(function (results) {
        
        console.log(results.resultsPage.results.artist[0].displayName);

        concertsURL = results.resultsPage.results.artist[0].identifier[0].eventsHref + "?apikey=uyyV4zESWwQbeQrI";
        
        giveConcerts();

    })
});

function giveConcerts() {

    $.ajax({
        url: concertsURL,
        method: "GET"
    }).then(function (response) {
        
        console.log(response.resultsPage.results.event[0].location.city);
        console.log(response.resultsPage.results.event[0].venue.displayName);

    })

};

var maptypes = platform.createDefaultLayers();

 // Instantiate and display a map
 var map = new H.Map(document.getElementById("mapdiv"), maptypes.vector.normal.map, {
   center: {lat: 0, lng: 51},
   zoom: 8
 });