var express = require('express');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  // req.on(function(err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('hi to terminal');
  //   }
  // });
  // console.log(`============= \n POST REQUEST: \n ${req.data} \n =============`);
  request('http://www.google.com', function(err, response, body) {
    console.log('error:', err); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage. 
  });
  res.send(`Hello to client from Express Server \n here is your req: \n ${req}`);

});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

