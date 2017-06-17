var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('something here~~~~');
});

var repoSchema = mongoose.Schema({
  // put properties from the callback here
  url: String,
  login: String,
  // avatarUrl: Image,
  htmlUrl: String,
  reposUrl: String,
  id: Number
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;