var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
// log an error if it exists
db.on('error', console.error.bind(console, 'connection error:'));
// otherwise, do the following once the connection is open
db.once('open', function() {
  console.log('mongoose connected');
});

var repoSchema = mongoose.Schema({
  name: String,
  id: Number
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;


// Is this file only for exporting so that we can make repos in other files?
