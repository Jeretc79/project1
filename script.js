var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
<<<<<<< HEAD
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';
var TMauthKey = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
=======

// var newURL2 = baseURL2 + city + '&apikey=' + authKey;


var authKey3 = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey='
var city3 = 'portland'
var newURL3 = baseURL3 + authKey3 + '&size=200' + '&city=' + city3 

var result1 = $("#result1");
var result2 = $("#result2");
var result3 = $("#result3");
results = [result1, result2, result3];
console.log("eat shit");
//var platform = new H.service.Platform({
   // "apikey": "{7xUebz_AVkJGa5Oay6OiOdDlbAtO1lXJoAKSICHzTp4}",
//"useHTTPS": true
 // });

  $(".uk-form-icon").on('click', function () {
    var artist = $("#artist-term").val().trim();

    $.ajax({
        url: newURL3,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 0; i < response._embedded.events.length; i++) {
            if (artist === response._embedded.events[i].name) {
                var artistResult = response._embedded.events[i].name;
                console.log("matching artist = " + artistResult);

                var ticketURL = response._embedded.events[i].url;
                console.log("tickets url = " + ticketURL);

                for (var j=0; j<results.length; j++) {
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
})

>>>>>>> dafe7bffd52407b85406966db0ce961a55640e67
var city = "portland";
var newURL2 = baseURL2 + city + '&apikey=' + authKey;
var newURL3 = baseURL3 + TMauthKey + '&size=200&city=' + city;
var concertsURL;
$("#submitBtn").on('click', function () {
    var artist = $('#artist-term').val().trim();
    var newURL = baseURL + authKey + '&query=' + artist;
    $.ajax({
        url: newURL,
        method: "GET"
    }).then(function (results) {
<<<<<<< HEAD
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
                        // date.html()

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
=======
        
        console.log(results.resultsPage.results.artist[0].displayName);

        concertsURL = results.resultsPage.results.artist[0].identifier[0].eventsHref + "?apikey=uyyV4zESWwQbeQrI";
        
        giveConcerts();

    })a
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

map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

>>>>>>> dafe7bffd52407b85406966db0ce961a55640e67
