
(function() {

  describe("easierStorage", function() {
    it("should exist", function() {
      assert(typeof easierStorage !== "undefined", "easierStorage exists");
    });

    beforeEach(function() {
      for(var key in localStorage) {
        localStorage.removeItem(key);
      }
    });


    describe("setItem/getItem", function() {
      it("setItem must have at least one key and one value", function() {
        var err;
        try {
          easierStorage.setItem("first");
        } catch(e) {
          err = e;
        }

        assert(err.toString() === "setItem must be called with at least one key and a value");
      });

      it("setItem setItems value, getItem getItems value", function() {
        easierStorage.setItem("first", "value");
        assert(easierStorage.getItem("first") === "value", "correct getItem after setItem");
      });

      it("getItem with no keys throws an exception", function() {
        var err;
        try {
          easierStorage.getItem()
        } catch(e) {
          err = e;
        }
        assert(err);
      });

      it("setItem/getItem with 2 keys", function() {
        easierStorage.setItem("first", "second", "some value");
        assert(easierStorage.getItem("first", "second") === "some value", "setItem/getItem with 2 keys");
      });

      it("getItem of undefined leaf returns undefined", function() {
        assert(typeof easierStorage.getItem("unknown") === "undefined");
        assert(typeof easierStorage.getItem("unknown", "unknown") === "undefined");
      });
    });

    describe("removeItem", function() {
      it("removeItem without a key - throw exception", function() {
        var err;
        try {
          easierStorage.removeItem();
        } catch(e) {
          err = e;
        }

        assert(err.toString() === "removeItem must be called with at least one key");

      });

      it("removeItems an unknown item - does not cause problem", function() {
        var err;
        try {
          easierStorage.removeItem("first");
        } catch(e) {
          err = e;
        }

        assert(typeof err === "undefined");
      });

      it("removeItems a leaf", function() {
        easierStorage.setItem("first", "second", "third", "value");
        easierStorage.removeItem("first", "second", "third");
        assert(typeof easierStorage.getItem("first", "second", "third") === "undefined");
      });

      it("removeItems a branch", function() {
        easierStorage.setItem("first", "second", "third", "value");
        easierStorage.removeItem("first", "second");
        assert(typeof easierStorage.getItem("first", "second") === "undefined");
        assert(typeof easierStorage.getItem("first").second === "undefined");
      });
    });
  });
}());


