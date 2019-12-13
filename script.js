var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
var baseURL4 = 'https://maps.googleapis.com/maps/api/js?key=';
var authKey = 'uyyV4zESWwQbeQrI';
var TMauthKey = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
var mapAuthKey = 'AIzaSyABv4qZ2Y8dl33hKx95NkqreIx1i6ux4Us';
var city = "Portland, OR, US";
var newURL2 = baseURL2 + city + '&apikey=' + authKey;
var newURL3 = baseURL3 + TMauthKey + '&city=' + city;
var newURL4 = baseURL4 + mapAuthKey + '&callback=initMap';
var concertsURL;
var result1 = $("#result1");
var result2 = $("#result2");
var result3 = $("#result3");
var imageDiv = $("#image1");
var link1 = $("#link1");

$("#submit-btn").on('click', function () {
    var artist = $('#artist-term').val().trim();
    var artist1 = artist.charAt(0).toUpperCase() + artist.substring(1);
    var newURL = baseURL + authKey + '&query=' + artist;
    $.ajax({
        url: newURL,
        method: "GET"
    }).then(function (results) {
        for (var i = 0; i < results.resultsPage.results.artist.length; i++) {
            if (artist1 == results.resultsPage.results.artist[i].displayName) {
                var songkickArtist = results.resultsPage.results.artist[i].displayName;
                concertsURL = results.resultsPage.results.artist[i].identifier[0].eventsHref + "?apikey=uyyV4zESWwQbeQrI";
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
            var citySearched = city;
            var citiesIndex = response.resultsPage.results.event.length;
            for (var i = 0; i < citiesIndex; i++) {
                var songkickCity = response.resultsPage.results.event[i].location.city
                if (citySearched === songkickCity) {
                    var cityMatch = response.resultsPage.results.event[i];
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
        var artist1 = artist.charAt(0).toUpperCase() + artist.substring(1);
        var citySearched = city
        var ticketURL = baseURL3 + TMauthKey + '&size=200&city=' + citySearched;
        $.ajax({
            url: ticketURL,
            method: "GET"
        }).then(function (data) {
            for (var i = 0; i < data._embedded.events.length; i++) {
                if (artist1 == data._embedded.events[i].name) {
                    var artistResult = data._embedded.events[i].name;
                    var image = $("<img>");
                    image.attr("src", data._embedded.events[i].images[0].url);
                    image.attr("style", "padding-top: 5px; padding-bottom: 5px; height: 75px, width: 75px;");
                    var ticketIcon = $("<i>");
                    ticketIcon.addClass("fas fa-ticket-alt");
                    var link = $("<a>");
                    link.attr("href", data._embedded.events[i].url);
                    link.attr("target", "_blank");
                    link.text("We found tickets here ");
                    link.addClass("link");
                    link.attr("style", "text-transform: uppercase; font-family: 'Comfortaa', cursive");
                    link.append(ticketIcon);
                    var phoneIcon = $("<i>");
                    phoneIcon.addClass("fas fa-mobile-alt");
                    var reminder = $("<a>");
                    reminder.attr("href", "Reminder.html");
                    reminder.attr("uk-modal");
                    reminder.attr("target", "_blank")
                    reminder.text("Sign up for a text reminder ")
                    reminder.attr("style", "font-family: 'Comfortaa', cursive");
                    reminder.append(phoneIcon);
                    imageDiv.html(image);
                    link1.html(link);
                    result3.html(reminder);
                }
            }
        })
    }
});

var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};