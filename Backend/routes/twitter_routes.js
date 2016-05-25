var express = require('express');
var router = express.Router();
var request = require('request');
var Twit = require('twit');

var T = new Twit({
  consumer_key:         'LKsPm3hknJ16dRtkmPIFOHAyE',
  consumer_secret:      '6Iss4wRsvhrgnnuciZ0C6NPBmOEuuNkTUWZAgAvleVCFHRqsn3',
  access_token:         '271781845-45nzENYoguXsBAwTy3rghUFKHAxkKpHZDeUhAX41',
  access_token_secret:  '8O6cJsBmj5xPwrDklwE5PkMabyQQgcaIX9FGKO6Bosvrb',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})



router.get('/', function(req,res){
  res.json({message:'much connect!'});
});



// api/getsearch to get all the searches for the thing
router.get('/getsearch', function(req,res){

  T.get('search/tweets', { q: '#nowplaying since:2015-05-23', count: 1 }, function(err, data, response) {
  console.log("data is being got *********************************")
  console.log(data);
  res.json({data});
 // response.send(data);h
  });
});




router.get('/posthello', function(req,res){
  T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log("hello world")
  })
});




// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
//   console.log(data)
// });/// this is working, need to subsitute the data search and also find how to put the data in an array

// T.get('search/tweets', { q: '#nowplaying since:2015-05-23', count: 1 }, function(err, data, response) {
//   console.log("data is being got *********************************")
// console.log(data);
// });

// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log("hello world")
// })



router.get('/:query', function(req,res){
  var searchString = "http://api.giphy.com/v1/gifs/search?q="+ req.params.query +"&api_key=dc6zaTOxFJmzC";
  // console.log(searchString);
  request(searchString,function(err,response,body){
    var imageSource = JSON.parse(body).data[0].images.fixed_height.url;
    //res.json(JSON.parse(body));
    res.send('<img src="' +imageSource + '">');
  });
});




module.exports = router;
