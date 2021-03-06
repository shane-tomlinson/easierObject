
(function() {

  describe("easierObject", function() {
    var easyObj;
    beforeEach(function() {
      easyObj = new easierObject({});
    });


    describe('constructor', function () {
      it("should exist", function() {
        assert(typeof easierObject !== "undefined", "easierObject exists");
      });

      it("can be used without passing in an object", function() {
        easyObj = new easierObject();
        var err;
        try {
          var firstItem = easyObj.getItem("first");
        } catch(e) {
          err = e;
        }
        assert(typeof err === "undefined");
      });
    });



    describe("setItem/getItem", function() {
      it("setItem must have at least one key and one value", function() {
        var err;
        try {
          easyObj.setItem("first");
        } catch(e) {
          err = e;
        }

        assert(err.toString() === "setItem must be called with at least one key and a value");
      });

      it("setItem setItems value, getItem getItems value", function() {
        easyObj.setItem("first", "value");
        assert(easyObj.getItem("first") === "value", "correct getItem after setItem");
      });

      it("getItem with no keys gets entire object", function() {
        easyObj.setItem("first", "value");
        var obj =  easyObj.getItem();
        assert(obj.first === "value");
      });

      it("setItem/getItem with 2 keys", function() {
        easyObj.setItem("first", "second", "some value");
        assert(easyObj.getItem("first", "second") === "some value", "setItem/getItem with 2 keys");
      });

      it("getItem of undefined leaf returns undefined", function() {
        assert(typeof easyObj.getItem("unknown") === "undefined");
        assert(typeof easyObj.getItem("unknown", "unknown") === "undefined");
      });
    });

    describe("removeItem", function() {
      it("removeItem without a key - throw exception", function() {
        var err;
        try {
          easyObj.removeItem();
        } catch(e) {
          err = e;
        }

        assert(err.toString() === "removeItem must be called with at least one key");

      });

      it("removeItems an unknown item - does not cause problem", function() {
        var err;
        try {
          easyObj.removeItem("first");
        } catch(e) {
          err = e;
        }

        assert(typeof err === "undefined");
      });

      it("removeItems a leaf", function() {
        easyObj.setItem("first", "second", "third", "value");
        easyObj.removeItem("first", "second", "third");
        assert(typeof easyObj.getItem("first", "second", "third") === "undefined");
      });

      it("removeItems a branch", function() {
        easyObj.setItem("first", "second", "third", "value");
        easyObj.removeItem("first", "second");
        assert(typeof easyObj.getItem("first", "second") === "undefined");
        assert(typeof easyObj.getItem("first").second === "undefined");
      });
    });

    describe('raw', function () {
      it('gets raw data', function () {
        easyObj.setItem("first", "second", "value");
        var raw = easyObj.raw();
        assert(raw.first.second === "value");
      });
    });
  });
}());


