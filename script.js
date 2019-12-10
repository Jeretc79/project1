var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';
var authKey3 = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
var city = "portland";
var newURL2 = baseURL2 + city + '&apikey=' + authKey;
var newURL3 = baseURL3 + authKey3 + '&city=' + city;
var concertsURL;

$("#submitBtn").on('click', function () {
    var artist = $('#artist-term').val().trim();
    var newURL = baseURL + authKey + '&query=' + artist;

    $.ajax({
        url: newURL,
        method: "GET"
    }).then(function (results) {

        for (var i = 0; i < results.resultsPage.results.artist.length; i++) {
            if (artist === results.resultsPage.results.artist[i].displayName) {
                var skArtist = results.resultsPage.results.artist[i].displayName;
                console.log("First function artist:" + skArtist);
                concertsURL = results.resultsPage.results.artist[i].identifier[0].eventsHref + "?apikey=uyyV4zESWwQbeQrI";
                console.log("Songkick foundation URL: " + concertsURL);
                giveConcerts();
                getTickets();
            }
        }
    });

    function giveConcerts() {

        $.ajax({
            url: concertsURL,
            method: "GET"
        }).then(function (response) {

            console.log("Secondary Results:" + response);
            var citySearched = $("#city-term").val().trim();
            var citiesIndex = response.resultsPage.results.event.length;
            for (var i = 0; i < citiesIndex; i++) {
                var songkickCity = response.resultsPage.results.event[i].location.city
                if (citySearched == songkickCity) {
                    var cityMatch = songkickCity;
                    console.log("City Match test" + cityMatch);
                    console.log("SK City:" + response.resultsPage.results.event[i].location.city);
                    console.log("SK Venue:" + response.resultsPage.results.event[i].venue.displayName);
                }
            }
        })
    };

    function getTickets() {
        var artist = $("#artist-term").val().trim();
        var citySearched = $("#city-term").val().trim();
        var ticketURL = baseURL3 + authKey3 + '&city=' + citySearched;

        $.ajax({
            url: ticketURL,
            method: "GET"
        }).then(function (data) {
            
            console.log(data);
            //console.log(response);
            for (var i = 0; i < data._embedded.events.length; i++) {
                if (artist === data._embedded.events[i].name) {
                    var artistResult = data._embedded.events[i].name;
                    console.log(artistResult);
                    console.log(data._embedded.events[i].url);
                    console.log("tickets ran");
                }
            }
        })
    }
});