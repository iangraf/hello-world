var express = require('express');
var app = express();

//setting middleware
app.use('/', express.static(__dirname + '/dist'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
