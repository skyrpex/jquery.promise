!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],r):(e.jquery=e.jquery||{},e.jquery.promise=r(e.jQuery))}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var r=function(r){var n=e.Deferred();this.promise=n.promise(),r(function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return n.resolve.apply(n,e)},function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return n.reject.apply(n,e)})};return r.prototype.then=function(e,r){return this.promise.then(e,r)},r.prototype.catch=function(e){return this.promise.fail(e)},r.all=function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];return e.when.apply(e,r)},r.resolve=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return new r(function(r){return r.apply(void 0,e)})},r.reject=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return new r(function(){},function(r){return r.apply(void 0,e)})},r});
