var namespace = typeof window !== "undefined" ? window : typeof exports !== "undefined" ? exports : {};

(function(exports) {
  "use strict";

  function setItem() {
    var args = [].slice.call(arguments, 0),
        value = args.pop(),
        obj = this.obj,
        len = args.length;

    if(!len) {
      throw "setItem must be called with at least one key and a value";
    }
    else {
      for(var index = 0, key, max = len - 1; key = args[index]; ++index) {
        if(index === max) {
          obj[key] = value;
        }
        else {
          obj = obj[key] = obj[key] || {};
        }
      }
    }
  }

  function getItem(key) {
    var args = [].slice.call(arguments, 0),
        obj = this.obj,
        len = args.length;

    if(!len) {
      return this.obj;
    }
    else {
      for(var index = 0, key, max = len - 1; obj && (key = args[index]); ++index) {
        if(index === max) {
          return obj[key];
        }
        else {
          obj = obj[key];
        }
      }
    }
  }

  function removeItem() {
    var args = [].slice.call(arguments, 0),
        obj = this.obj,
        len = args.length;

    if(!len) {
      throw "removeItem must be called with at least one key";
    }
    else {
      for(var index = 0, key, max = len - 1; obj && (key = args[index]); ++index) {
        if(index === max) {
          obj[key] = null;
          delete obj[key];
        }
        else {
          obj = obj[key];
        }
      }
    }
  }

  exports.easierObject = function(obj) {
    this.obj = obj || {};
  }

  exports.easierObject.prototype = {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem
  };
}(namespace));
