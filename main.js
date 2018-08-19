var http = require("http");


// My spotify API
const clientID = "cf1fe2d1c64b47229d696729510290e6";
const clientSecret = "91a6da4e7315444c8cdbf57756d4378f";

// fetch() make an object
fetch('https://api.spotify.com/v1/search?q=michael+jackson&type=album')
    .then(response => {
        return response.json()
    })