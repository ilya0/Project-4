var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var twitterRoutes = require('./routes/twitter_routes');
var Twit = require('twit');


app.use('/api', twitterRoutes);


app.listen(port, function(){
  console.log('Server listing on port '+port);
});
