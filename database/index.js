var mongoose = require('mongoose');
// other requirements?


mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
// log an error if it exists
db.on('error', console.error.bind(console, 'connection error:'));
// otherwise, do the following
db.once('open', function() {
  console.log('mongoose connected');
  // declare schema
  var repoSchema = mongoose.Schema({
    name: String,
    id: Number
  });
  // compile the schema into a model

});



var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;