var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var twitterRoutes = require('./routes/twitter_routes');
var Twit = require('twit');
var path = require('path');

// all requests to static files, app looks here
app.use(express.static(path.join(__dirname, 'Frontend')))

app.get('/',function(req,res){
  // combine the path from the root of the server all the into the project directory
  // append 'Frontend/index_init_1.html' to it
  res.sendFile(path.join(__dirname, 'Frontend/index_init_1.html'));
});
app.use('/api', twitterRoutes);


app.listen(port, function(){
  console.log('Server listing on port '+port);
});
