var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';
var artist = 'queen';
var newURL = baseURL + authKey + '&query=' + artist;
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
// var newURL2 = baseURL2 + city + '&apikey=' + authKey;


var authKey3 = 'aTm6J9b1v3GF9ZxpISl4sVxEzKNG6hHf';
var baseURL3 = 'https://app.ticketmaster.com/discovery/v2/events?apikey=' 
var city3 = 'portland'
var newURL3 = baseURL3 + authKey3 + '&city=' + city3

console.log(newURL3);

$("#ticket-submit").on('click', function() {
    var artist = $("#artist-term").val().trim();
    var results = $("#results");
    
    

    $.ajax({
        url: newURL3,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i=0; i<response._embedded.events.length; i++) {
            if (artist === response._embedded.events[i].name) {
                var artistResult = response._embedded.events[i].name;
                console.log(artistResult);
                console.log(response._embedded.events[i].url);
            }
        }
    
    })
})


