(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.jquery = global.jquery || {}, global.jquery.promise = factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = 'default' in $ ? $['default'] : $;

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers;

  var Promise = function () {
    function Promise(resolver) {
      babelHelpers.classCallCheck(this, Promise);

      var deferred = $.Deferred();
      this._promise = deferred.promise();
      resolver(function () {
        return deferred.resolve.apply(deferred, arguments);
      }, function () {
        return deferred.reject.apply(deferred, arguments);
      });
    }

    babelHelpers.createClass(Promise, [{
      key: 'then',
      value: function then(success, fail) {
        return this._promise.then(success, fail);
      }
    }, {
      key: 'catch',
      value: function _catch(fail) {
        return this._promise.fail(fail);
      }
    }], [{
      key: 'all',
      value: function all() {
        return $.when.apply($, arguments);
      }
    }, {
      key: 'resolve',
      value: function resolve() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve) {
          return resolve.apply(undefined, args);
        });
      }
    }, {
      key: 'reject',
      value: function reject() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return new Promise(function () {}, function (reject) {
          return reject.apply(undefined, args);
        });
      }
    }]);
    return Promise;
  }();

  return Promise;

}));