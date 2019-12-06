var baseURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey=';
var authKey = 'uyyV4zESWwQbeQrI';
var artist = 'queen';
var newURL = baseURL + authKey + '&query=' + artist;
var baseURL2 = 'https://api.songkick.com/api/3.0/search/locations.json?query=';
var newURL2 = baseURL2 + city + '&apikey=' + authKey;


console.log(newURL);