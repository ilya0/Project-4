/* jslint node: true */
'use strict';

var ctrl = require('../entities/tweets/tweets_controller');

module.exports = function(router) {

  router.route('/')
    .get(ctrl.index)


  router.route('/:id')
    .get(ctrl.show)


  return router;
};
