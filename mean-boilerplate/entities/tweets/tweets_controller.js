/* jslint node: true */
'use strict';

var Tweet = require('./tweets_model');
var jsend = require('../../extras/jsend');


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'LKsPm3hknJ16dRtkmPIFOHAyE',
  consumer_secret: '6Iss4wRsvhrgnnuciZ0C6NPBmOEuuNkTUWZAgAvleVCFHRqsn3',
  access_token_key: '271781845-45nzENYoguXsBAwTy3rghUFKHAxkKpHZDeUhAX41',
  access_token_secret: '8O6cJsBmj5xPwrDklwE5PkMabyQQgcaIX9FGKO6Bosvrb'
});


var controller = {};

controller.twitter = function(req, res, next) {
 client.get('statuses/user_timeline.json?screen_name=realDonaldTrump&count=10  ', function(error, tweets, response) {
   if(error) throw error;
   console.log(tweets);  // The favorites.
   console.log(response);  // Raw response object.
   // console.log(username);
   // res.json(tweets);  // The favorites.
   res.json({tweets: tweets, response: response});  // Raw response object.
 });
};




module.exports = controller;
