url = url of api
html_url = for the html page
repos_url = page of urls for hte repo

id = github user id, use this for uniqueness
/contributors = people who contributed, need this for friends


## Mongoose, mongodb object modeling for node.js
#MongoDB schemas
- Everything in mongoose starts with a schema. Each schema maps to a mongoDB collection and defines the shape of the dociments within that collection.

to use the schemas we make, we need to use a model
- pass the schema into the mongoose.model('name', schema);
  > my information




React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.


> Important to make sure the data-type/content-type communication between the communicating devices are the same. Computers can't automatically know what kind of information you are sending
[x] Attach the client to the server
  [x] check if it's connected
[] make calls to the github api

[ ] server calls api and stores it in MongoDB


querystrings = ?xyz (things after the url, usually starts with '?')