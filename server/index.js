var express = require('express');
var request = require('request');
var bodyParser = require('body-parser'); // use body-parse in a refactor

// github api token f3525b0a15a45940d043ed9f44f426204c5773db
var app = express();

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json()); // 400 bad request at the moment
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos/import', function (req, res) {

  console.log(`============= \n POST REQUEST RECEIVED: \n ${req.body.username} \n=============`);

  var options = {
    url: `https://api.github.com/users/${req.body.username}/repos?access_token=f3525b0a15a45940d043ed9f44f426204c5773db`,
    headers: {
      'User-Agent': 'cen19'
      // authorization:
    }
  };
  request.get(options, function(err, res, body) {
    console.log(body);
  });
  res.send(`Hello to client from Express Server \n here is the thing you sent me: \n ${req.body.username}`);

});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

