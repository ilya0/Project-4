(function() {
  'use strict';

  angular
    .module('myApp.subsection', [])
    .controller('SubsectionController', SubsectionController);

  SubsectionController.$inject = [];

  function SubsectionController() {
    var self = this;
    self.hello = 'Hello World';

    self.getTweet = getTweet;

    function getTweet() {

      $http({
       method: 'GET',
       url: 'http://localhost:3000/api/tweets/twitter?user=realDonaldTrump'
        }).then(function successCallback(response) {

       self.result = response.data;
       console.log(self.result);

       // pick a random tweet from a selection of 100 tweets from that random user

       var pickTweet = self.result.tweets[getRandomInt(0,10)];

       self.tweet = pickTweet.text;

       self.tweeter = pickTweet.user.screen_name;
       // console.log(self.tweet);
       console.log(self.tweeter);

     });


    }
  }
})();
