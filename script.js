var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';
var TMauthKey = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
var city = "portland";
var newURL2 = baseURL2 + city + '&apikey=' + authKey;
var newURL3 = baseURL3 + TMauthKey + '&size=200&city=' + city;
var concertsURL;

$("#submit-btn").on('click', function () {
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
            console.log("Secondary response below:")
            console.log(response);
            var citySearched = $("#city-term").val().trim();
            var citiesIndex = response.resultsPage.results.event.length;
            for (var i = 0; i < citiesIndex; i++) {
                var songkickCity = response.resultsPage.results.event[i].location.city
                if (citySearched == songkickCity) {
                    var cityMatch = songkickCity;
                    console.log("City Match test: " + cityMatch);
                    console.log("SK City: " + response.resultsPage.results.event[i].location.city);
                    console.log("SK Venue: " + response.resultsPage.results.event[i].venue.displayName);
                    console.log("Date: " + response.resultsPage.results.event[i].start.date);
                    console.log("Time: " + response.resultsPage.results.event[i].start.time);
                    for (var k = 0; k < results.length; k++) {
                        var concertInfo = $("<div>");
                        var title = $("<h3>");
                        title.html(results.resultsPage.results.artist[i].displayName)
                        var date = $("<h4>");
                        date.html()

                        results[k].append(concertInfo);
                    }
                }
            }
        })
    };

    function getTickets() {
        var artist = $("#artist-term").val().trim();
        var citySearched = $("#city-term").val().trim();
        var ticketURL = baseURL3 + TMauthKey + '&size=200&city=' + citySearched;
        $.ajax({
            url: ticketURL,
            method: "GET"
        }).then(function (data) {
            console.log("TM results below:");
            console.log(data);
            for (var i = 0; i < data._embedded.events.length; i++) {
                if (artist === data._embedded.events[i].name) {
                    var artistResult = data._embedded.events[i].name;
                    console.log("TM artist: " + artistResult);
                    console.log("TM url: " + data._embedded.events[i].url);
                    for (var j = 0; j < results.length; j++) {
                        var link = $("<a>");
                        link.attr("href", ticketURL);
                        link.attr("target", "_blank");
                        link.text("We Found Tickets Here");
                        link.addClass("link");
                        link.attr("style", "font-family: 'Comfortaa', cursive");
                        results[j].append(link);
                    }
                }
            }
        })
    }
});
