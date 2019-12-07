var div = null;
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

  window.load = getUserLocation();

  function startUpSearch() {
      
    var queryURL = "https://api.songkick.com/api/3.0/artists/{artist_id}/calendar.json?apikey=R7HLXwHCCzxfPjBA"
  }
  
  
  function createQURL() {
    queryStart = "http://www.songkick.com/developer";
    console.log(queryStart)
