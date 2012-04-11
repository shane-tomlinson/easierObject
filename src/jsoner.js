(function(exports) {
  "use strict";

  function set() {
    var args = [].slice.call(arguments, 0),
        value = args.pop(),
        obj = this.obj,
        len = args.length;

    if(!len) {
      throw "set must be called with at least one key and a value";
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

  function get(key) {
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

  function remove() {
    var args = [].slice.call(arguments, 0),
        obj = this.obj;

    for(var index = 0, key, max = args.length - 1; obj && (key = args[index]); ++index) {
      if(index === max) {
        obj[key] = null;
        delete obj[key];
      }
      else {
        obj = obj[key];
      }
    }
  }

  exports.JSONer = function(obj) {
    this.obj = obj;
  }

  exports.JSONer.prototype = {
    set: set,
    get: get,
    remove: remove
  };
}(window || exports));
