/* jslint node: true */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tweetSchema = new Schema({
  tweetname: String,
  password: String,
});


var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
