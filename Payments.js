var msg = 'Hello World';
console.log(msg);


var request = require('request');
/*
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

*/

var formData = {
    my_field: 'my_value',
    compID: '999',
    user: 'admin',
    pass: 'admin',
    dateissued: '01.01.2017',
    clientname: 'Yossi',
    docType: 'invrec',
    desc: 'This is test transaction ',
    quantity: 1,
    unitprice: 10
};
request.post({ url: 'https://api.icount.co.il/api/create_doc_auto.php', formData: formData }, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});