var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';
var TMauthKey = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
var city = "portland";
var newURL2 = baseURL2 + city + '&apikey=' + authKey;

var newURL3 = baseURL3 + TMauthKey + '&city=' + city;
var concertsURL;
var showTime;
var timeConvert = moment(showTime, 'HH:mm:ss').format('hh:mm a');

console.log(moment("13:00", 'HH:mm:ss').format('hh:mm a'));



$("#submitBtn").on('click', function () {


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
                if (citySearched == songkickCity) {
                    var cityMatch = songkickCity;
                    var showTime = response.resultsPage.results.event[i].start.time;

                    console.log("City Match test: " + cityMatch);
                    console.log("SK City: " + response.resultsPage.results.event[i].location.city);
                    console.log("SK Venue: " + response.resultsPage.results.event[i].venue.displayName);
                    console.log("Date: " + response.resultsPage.results.event[i].start.date);
                    console.log("Time: " + response.resultsPage.results.event[i].start.time);


                    console.log("Showtime Test : " + showTime);
                    console.log("Time Conversion : " + timeConvert);
                    for (var j = 0; j < results.length; j++) {
                        var concertInfo = $("<div>");
                        var title = $("<h3>");

                        
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


console.log(results.resultsPage.results.artist[0].displayName);

concertsURL = results.resultsPage.results.artist[0].identifier[0].eventsHref + "?apikey=uyyV4zESWwQbeQrI";

giveConcerts();

    }) a
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


function initialize() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
      center: new google.maps.LatLng(51.372658, 1.354386),
      zoom:16,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(map_canvas, map_options)
  }
  google.maps.event.addDomListener(window, 'load', initialize);


