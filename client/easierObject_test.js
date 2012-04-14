
(function() {

  describe("easierObject", function() {
    it("should exist", function() {
      assert(typeof easierObject !== "undefined", "easierObject exists");
    });

    var easyObj;
    beforeEach(function() {
      easyObj = new easierObject({});
    });


    describe("setItem/getItem", function() {
      it("setItem must have a key and one value", function() {
        var err;
        try {
          easyObj.setItem("first");
        } catch(e) {
          err = e;
        }

        assert(err.toString() === "setItem must be called with a key and value");
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
        easyObj.setItem("first.second", "some value");
        assert(easyObj.getItem("first.second") === "some value", "setItem/getItem with 2 keys");
        assert(easyObj.getItem("first").second === "some value", "tree structure exists");
      });

      it("getItem of undefined leaf returns undefined", function() {
        assert(typeof easyObj.getItem("unknown") === "undefined");
        assert(typeof easyObj.getItem("unknown.unknown") === "undefined");
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

        assert(err.toString() === "removeItem must be called with a key");

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
        easyObj.setItem("first.second.third", "value");
        easyObj.removeItem("first.second.third");
        assert(typeof easyObj.getItem("first.second.third") === "undefined");
      });

      it("removeItems a branch", function() {
        easyObj.setItem("first.second.third", "value");
        easyObj.removeItem("first.second");
        assert(typeof easyObj.getItem("first.second") === "undefined");
        assert(typeof easyObj.getItem("first").second === "undefined");
      });
    });
  });
}());


