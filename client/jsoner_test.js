
(function() {

  describe("JSONer", function() {
    it("should exist", function() {
      assert(typeof JSONer !== "undefined", "JSONer exists");
    });

    var jsoner;

    beforeEach(function() {
      jsoner = new JSONer({});
    });


    describe("set/get", function() {
      it("set must have at least one key and one value", function() {
        var err;
        try {
          jsoner.set("key");
        } catch(e) {
          err = e;
        }

        assert(err.toString() === "set must be called with at least one key and a value");
      });

      it("set sets value, get gets value", function() {
        jsoner.set("key", "value");
        assert(jsoner.get("key") === "value", "correct get after set");
      });

      it("get with no keys returns entire object", function() {
        jsoner.set("key", "value");
        assert(jsoner.get().key === "value", "correct get after set");
      });

      it("set/get with 2 keys", function() {
        jsoner.set("two_part", "key", "some value");
        assert(jsoner.get("two_part", "key") === "some value", "set/get with 2 keys");
      });

      it("get of undefined leaf returns undefined", function() {
        assert(typeof jsoner.get("unknown") === "undefined");
        assert(typeof jsoner.get("unknown", "unknown") === "undefined");
      });
    });

    describe("remove", function() {
      it("removes a leaf", function() {
        jsoner.set("first", "second", "third", "value");
        jsoner.remove("first", "second", "third");
        assert(typeof jsoner.get("first", "second", "third") === "undefined");
      });

      it("removes a branch", function() {
        jsoner.set("first", "second", "third", "value");
        jsoner.remove("first", "second");
        assert(typeof jsoner.get("first", "second") === "undefined");
        assert(typeof jsoner.get("first").second === "undefined");
      });
    });
  });
}());


