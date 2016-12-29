var msg = 'Hello World';
console.log(msg);


var request = require('request');

var options = {
    uri: 'https://api.icount.co.il/api/create_doc_auto.php',
    //method: 'POST',
    //json: {
    //"longUrl": "http://www.google.com/"
    //}
};

request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the shortened url.
    }
});