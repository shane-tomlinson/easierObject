/**
  * This Source Code Form is subject to the terms of the Mozilla Public
  * License, v. 2.0. If a copy of the MPL was not distributed with this file,
  * You can obtain one at http://mozilla.org/MPL/2.0/.
  */

(function(exports, undefined) {
  "use strict";

  function setItem() {
    /*jshint validthis: true*/
    var args = [].slice.call(arguments, 0),
        value = args.pop(),
        obj = this.obj,
        len = args.length;

    if ( ! len)
      throw "setItem must be called with at least one key and a value";

    for (var index = 0, key, max = len - 1; index <= max; ++index) {
      key = args[index];
      if (index === max) {
        obj[key] = value;
      }
      else {
        obj = obj[key] = obj[key] || {};
      }
    }
  }

  function getItem(key) {
    /*jshint validthis: true*/
    var args = [].slice.call(arguments, 0),
        obj = this.obj,
        len = args.length;

    if ( ! len)
      return this.obj;

    for (var index = 0, max = len - 1; obj && (key = args[index]); ++index) {
      if (index === max) {
        return obj[key];
      }
      else {
        obj = obj[key];
      }
    }
  }

  function removeItem() {
    /*jshint validthis: true*/
    var args = [].slice.call(arguments, 0),
        obj = this.obj,
        len = args.length;

    if ( ! len)
      throw "removeItem must be called with at least one key";

    for (var index = 0, key, max = len - 1; obj && (key = args[index]); ++index) {
      if (index === max) {
        obj[key] = null;
        delete obj[key];
      }
      else {
        obj = obj[key];
      }
    }
  }

  exports.easierObject = function(obj) {
    /*jshint validthis: true*/
    this.obj = obj || {};
  };

  exports.easierObject.prototype = {
    constructor: exports.easierObject,
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem
  };
}(typeof process !== 'undefined' && typeof process.title !== 'undefined' && typeof exports !== 'undefined' ? exports : window));
