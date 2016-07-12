var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var responseJSON = process.argv.slice(2)[0];

var response = require(path.resolve(__dirname, responseJSON));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {

    setTimeout(() => {
        res.send(response);
    }, 1000);
})

app.listen(3000, function() {
    console.log('Test server is listening on http://localhost:3000');
});
