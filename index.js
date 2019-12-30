var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(resquest, response) {
    response.send('<h1>Hello World!</h1>');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});