var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', function(error) {
  if (error) {
    console.log(error);
  }
  console.log('connection to mongoDB successful');
});

var db = mongoose.connection;

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