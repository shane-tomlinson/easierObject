(function(exports) {
  "use strict";

  function setItem(key, value) {
    if(typeof key === "undefined" || typeof value === "undefined") {
      throw "setItem must be called with a key and value";
    }
    else {
      var args = key.split("."),
          len = args.length,
          obj = this.obj;

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
    var args = key && key.split("."),
        len = args && args.length,
        obj = this.obj;

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

  function removeItem(key) {
    if(typeof key === "undefined") {
      throw "removeItem must be called with a key";
    }
    else {
      var args = key.split("."),
          len = args.length,
          obj = this.obj;

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
    this.obj = obj;
  }

  exports.easierObject.prototype = {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem
  };
}(window || exports));
