var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  res.send('hello word');
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

