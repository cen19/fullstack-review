url = url of api
html_url = for the html page
repos_url = page of urls for hte repo
id = github user id, use this for uniqueness
/contributors = people who contributed, need this for friends


## Mongoose, mongodb object modeling for node.js
#MongoDB schemas
- Everything in mongoose starts with a schema. Each schema maps to a mongoDB collection and defines the shape of the documents within that collection.

to use the schemas we make, we need to use a model
- pass the schema into the mongoose.model('name', schema);


> React events are named using camelCase, rather than lowercase.
> With JSX you pass a function as the event handler, rather than a string.
===============================================================================

# First task (client[react-framework] => server[express])
[x] connect client to the express server
[x] ensure the connection works with console.logs
[x] make sure react bindings are used to ensure functional buttons
[x] take note of what kind of data is being passed to the server

> Important to make sure the data-type/content-type communication between the communicating devices are the same. Computers can't automatically know what kind of information you are sending

# Second task (server[express] => GitHub api)

[x] Attach the client to the server
  [x] check if it's connected by requesting

- Can use bodyParser library to help parse the body that was received with the request
[x] ensure the body parser receives the proper data type
[x] make calls to the github api
[x] be sure to include headers-- User Agent
[x] hide authentication code


# Third task (server[express] => mongoose[orm, helps us manage the database])
-- Mongoose is syntactical, figure out the wyas it is being used

[x] Mongoose.connect is connecting to the DB, upon successful connection 
    It deplays a specific message based on error or a connection

[x] Create mongoose schema to help store the incoming repos
   .. start with just one property

> How does the schema get access to the information the API sends back?
 - ? Either require the data sent back in the index of database?
   - ? or require the database where the express server is making the calls?
[] Find a way to get access to the data we just stored in the MongoDB

1. On page loads
.. I need to do a get request to the express server
2. on sending get request
.. express server will get the data from the mongodatabase
.. then send the data back to the cient
3. Client will then push that data into the this.setState(repos)
4. Render the repos(should alreayd be written)

  - Remember mongoose.query helpers 

- Connection to from mongoose to mongo is setup and we can tell because of the console log statement that logs in the -server-terminal


### require file path
  ./some-file-name-here   for same folder