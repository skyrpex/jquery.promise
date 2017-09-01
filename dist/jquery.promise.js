(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global.jquery = global.jquery || {}, global.jquery.promise = factory(global.jQuery));
}(this, (function ($) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

var Promise = function Promise(resolver) {
  var this$1 = this;

  this.deferred = $.Deferred();
  resolver(
    function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return (ref = this$1.deferred).resolve.apply(ref, args)
      var ref;
  },
    function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return (ref = this$1.deferred).reject.apply(ref, args)
      var ref;
  }
  );
};

Promise.prototype.then = function then (success, fail) {
  return this.deferred.then(success, fail);
};

Promise.prototype.catch = function catch$1 (fail) {
  return this.deferred.fail(fail);
};

Promise.all = function all (ref) {
    var promises = ref.slice(0);

  var deferreds = promises.map(function (promise) {
    var deferred = $.Deferred();
    promise.then(
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
    return deferred;
  });

  return $.when.apply($, deferreds);
};

Promise.resolve = function resolve () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  return new Promise(function (resolve) { return resolve.apply(void 0, args); });
};

Promise.reject = function reject () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  return new Promise(function (resolve, reject) { return reject.apply(void 0, args); });
};

$.Promise = Promise;

return Promise;

})));
