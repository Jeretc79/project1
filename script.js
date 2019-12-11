var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';
var TMauthKey = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
var city = "portland";
var newURL2 = baseURL2 + city + '&apikey=' + authKey;

var newURL3 = baseURL3 + TMauthKey + '&city=' + city;
var concertsURL;

var result1 = $("#result1");
var result2 = $("#result2");
var result3 = $("#result3");
var results = [result1, result2, result3];
var imageDiv = $("#image1");
var link1 = $("#link1");
var link2 = $("#link2");
var link3 = $("#link3");
var links = [link1, link2, link3];

$("#submit-btn").on('click', function () {
    var artist = $('#artist-term').val().trim();
    var newURL = baseURL + authKey + '&query=' + artist;
    $.ajax({
        url: newURL,
        method: "GET"
    }).then(function (results) {
        for (var i = 0; i < results.resultsPage.results.artist.length; i++) {
            if (artist === results.resultsPage.results.artist[i].displayName) {
                var songkickArtist = results.resultsPage.results.artist[i].displayName;
                console.log("First function artist: " + songkickArtist);

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
                if (citySearched === songkickCity) {
                    var cityMatch = response.resultsPage.results.event[i];
                    // var showTime = response.resultsPage.results.event[i].start.time;
                    console.log("City Match test: " + cityMatch.location.city);
                    console.log("SK City: " + response.resultsPage.results.event[i].location.city);
                    console.log("SK Venue: " + response.resultsPage.results.event[i].venue.displayName);
                    console.log("Date: " + response.resultsPage.results.event[i].start.date);
                    console.log("Time: " + response.resultsPage.results.event[i].start.time);

                    var concertInfo = $("<div>");
                    var title = $("<h3>");
                    title.html(cityMatch.displayName);
                    title.attr("style", "text-transform: uppercase; font-family: 'Comfortaa', cursive");
                    var date = $("<h4>");
                    date.attr("style", "font-family: 'Comfortaa', cursive");
                    date.html(response.resultsPage.results.event[i].start.date);
                    var showTime = $("<h4>");
                    var time = cityMatch.start.time
                    time = time.split(':');
                    var hours = Number(time[0]);
                    var minutes = Number(time[1]);
                    var timeValue;
                    if (hours > 0 && hours <= 12) {
                        timeValue = "" + hours;
                    } else if (hours > 12) {
                        timeValue = "" + (hours - 12);
                    } else if (hours == 0) {
                        timeValue = "12";
                    }
                    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
                    timeValue += (hours >= 12) ? " PM" : " AM";
                    showTime.attr("style", "font-family: 'Comfortaa', cursive");
                    showTime.html("Doors open: " + timeValue)
                    var location = $("<h4>");
                    location.attr("style", "font-family: 'Comfortaa', cursive");
                    location.html(cityMatch.location.city)
                    var venue = $("<h4>");
                    venue.attr("style", "font-family: 'Comfortaa', cursive");
                    venue.html("Venue: " + cityMatch.venue.displayName);
                    concertInfo.attr("style", "line-height: .75");
                    concertInfo.append(venue, location, date, showTime);
                    result1.html(title);
                    result2.html(concertInfo);
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

                    var image = $("<img>");
                    image.attr("src", data._embedded.events[i].images[0].url);
                    image.attr("style", "padding-top: 5px; padding-bottom: 5px; height: 75px, width: 75px;");
                    var link = $("<a>");
                    link.attr("href", ticketURL);
                    link.attr("target", "_blank");
                    link.text("We Found Tickets Here");
                    link.addClass("link");
                    link.attr("style", "text-transform: uppercase; font-family: 'Comfortaa', cursive");
                    imageDiv.html(image);
                    link2.html(link);
                }
            }
        })
    }
});
