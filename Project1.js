/*var div = null;
var markers = [];
var map = null;
var geocoder = null;
let searchTopic = '';

let api_key = "R7HLXwHCCzxfPjBA";
//Main API Endpoint for Soundkick
let api_endPoint = "http://www.songkick.com/developer";
let events = '/events?q='; //endpoint returns artist and their event.
let performers = 'performers.slug=';
var results;
let venues = '/venues/';
let artists = [''];

//window.load = getUserLocation();

function startUpSearch() {

  var queryURL = "https://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey=R7HLXwHCCzxfPjBA"
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(userLocation);
    console.log(response);
    for (i = 1; i < 4; i++) {
      var img = response.events[i].performers[0].image;
      console.log(img);
      var eventDesc = response.events[i].short_title;
      var ticketLink = response.events[i].url;

      $(("#descCard" + i)).text(eventDesc);

      $(("#linkCard" + i)).attr("href", ticketLink);
      //console.log(u);
      console.log("startup finished");
      if (img === "null") {

        $(("#imgCard" + i)).attr("src", "images/logo.png");
        console.log("Null!")
      }

      else {

        $(("#imgCard" + i)).attr("src", img);

      }

      setMap("reveal-",response.events);

    }
}

function getUserLocation(address) {

  if (address === null || address === "" || address === undefined) {
    //get address by ip
    $.ajax({ url: "https://js.api.7xUebz_AVkJGa5Oay6OiOdDlbAtO1lXJoAKSICHzTp4.com/v3/3.1/mapsjs-core.js", method: "GET" }).then(function (resp) {
      userLocation = pruneObjectTree(resp, ["zip", "latitude", "longitude"]);
      console.log("user location finished");
      startUpSearch();
    });
  } else {

    this.geocoder = new mapsjs - service.js();
    this.geocoder.geocode({ "address": address }, function (results, status) {


      function createQURL() {
        queryStart = "http://www.songkick.com/developer";
        console.log(queryStart)
      }

      <script src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>

        {
        }
      }
    