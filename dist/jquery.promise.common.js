'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var $ = _interopDefault(require('jquery'));

var Promise = function Promise(resolver) {
  var deferred = $.Deferred();
  this.promise = deferred.promise();
  resolver(
    function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return deferred.resolve.apply(deferred, args);
  },
    function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return deferred.reject.apply(deferred, args);
  }
  );
};

Promise.prototype.then = function then (success, fail) {
  return this.promise.then(success, fail)
};

Promise.prototype.catch = function catch$1 (fail) {
  return this.promise.fail(fail)
};

Promise.all = function all () {
    var promises = [], len = arguments.length;
    while ( len-- ) promises[ len ] = arguments[ len ];

  return $.when.apply($, promises)
};

Promise.resolve = function resolve () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  return new Promise(function (resolve) { return resolve.apply(void 0, args); })
};

Promise.reject = function reject () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  return new Promise(function () {}, function (reject) { return reject.apply(void 0, args); })
};

module.exports = Promise;
