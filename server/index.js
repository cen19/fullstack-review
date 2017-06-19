var express = require('express');
var request = require('request');
var bodyParser = require('body-parser'); 
var token = require('./github.personal-token.js');
var Repo = require('../database/index.js');



var app = express();

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json()); // 400 bad request at the moment
app.use(bodyParser.urlencoded({extended: true}));

app.post('/repos/import', function (req, res) {

  console.log(`============= \n POST REQUEST RECEIVED: \n ${req.body.username} \n=============`);

  var options = {
    url: `https://api.github.com/users/${req.body.username}/repos?access_token=${token}`,
    headers: {
      'User-Agent': 'cen19' // github Requires a user-agent header attached with every request
    }
  };
  request.get(options, function(err, res, body) {
    // on request completion, send the data to mongoose to have it store into mongoDB
    if (err) {
      console.log(err);
    }

    if (body) {
      console.log('body received');
      if (Array.isArray(JSON.parse(body))) {
         // var formatting JSON.parse(body);
        JSON.parse(body).forEach(function(repo, idx) {
          console.log(idx);
          idx = new Repo({
            name: body.name,
            id: body.id
          });
          idx.save(function(err) {
            if (err) {
              console.log(`error message: ${err}`);
            } else {
              console.log(`saved repo #${idx}`);
            }
          });
        });
      } else {
        // the body returned wasn't a proper repo
      }
      
     
    }
  });
  // response back to the client
  res.send(`Hello to client from Express Server \n here is the thing you sent me: \n ${req.body.username}`);


});

app.get('/repos', function (req, res) {
  // next time they load the page, get the data from the database
  Repo.find(function(err, repos) {
    if (err) {
      console.error(err);
    } else {
      console.log(repos);
    }
  });
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

