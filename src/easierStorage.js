(function(exports) {
  "use strict";

  function setItem() {
    var args = [].slice.call(arguments, 0),
        rootname = args[0],
        value = args.pop(),
        obj,
        root,
        len = args.length;

    if(!len) {
      throw "setItem must be called with at least one key and a value";
    }
    else {
      root = obj = JSON.parse(localStorage[rootname] || "{}");

      if(len === 1) {
        root = value;
      }
      else {
        for(var index = 1, key, max = len - 1; key = args[index]; ++index) {
          if(index === max) {
            obj[key] = value;
          }
          else {
            obj = obj[key] = obj[key] || {};
          }
        }
      }

      localStorage[rootname] = JSON.stringify(root);
    }
  }

  function getItem(key) {
    var args = [].slice.call(arguments, 0),
        rootname = args[0],
        len = args.length,
        max = len - 1;

    if(len === 0) {
      throw "getItem must be called with at least one key";
    }
    else if(len === 1) {
      var value = localStorage[rootname],
          undef;
      return (typeof value !== "undefined" && value !== null) ? JSON.parse(value) : undef;
    }
    else {
      var obj = JSON.parse(localStorage[rootname] || "{}");

      for(var index = 1, key; obj && (key = args[index]); ++index) {
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
        rootname = args[0],
        len = args.length;

    if(len === 0) {
      throw "removeItem must be called with at least one key";
    }
    else if(len === 1) {
      localStorage.removeItem(rootname);
    }
    else {
      var root = JSON.parse(localStorage[rootname] || "{}"),
          obj = root;

      for(var index = 1, key, max = len - 1; obj && (key = args[index]); ++index) {
        if(index === max) {
          obj[key] = null;
          delete obj[key];
        }
        else {
          obj = obj[key];
        }
      }

      localStorage[rootname] = JSON.stringify(root);
    }

  }

  exports.easierStorage = {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem
  };
}(window || exports));
