# easierStorage
easierStorage makes it easier to work with localStorage by allowing you to read, write or delete into localStorage without checking whether every item in the object chain exists.

## Examples
```
// Write an item 3 levels deep without ever checking whether top or middle
// exist.  calling setItem like this will automatically create any nodes that
// are needed.
easierStorage.setItem("top", "middle", "leaf", "value");

// Go directly to the item you want to get, without checking whether top or
// middle exist. Returns undefined if any nodes do not exist.
var leafValue = easierStorage.getItem("top", "middle", "leaf");
// leafValue === "value"

```
## License:
Mozilla MPL 2.0

## Author
* Shane Tomlinson
* @shane_tomlinson
* shane@shanetomlinson.com
* set117@yahoo.com
* stomlinson@mozilla.com
* http://shanetomlinson.com

