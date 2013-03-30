# easierObject
easierObject is a micro-library to make operating in arbitrary locations in a Javascript object tree simple.

## Examples
```
// Write an item 3 levels deep in the tree without ever checking whether the
// intermediate nodes exist.
var easyObj = new easierObject({});
easyObj.setItem("root", "left", "leaf", "oooh!");

// Write into a new branch off of the root, this will not destroy the middle
// branch.
easyObj.setItem("root", "right", "leaf", "wee!");

// Go directly to the item you want to get without checking whether root or
// middle exist.  Returns undefined if any nodes do not exist.
var leafValue = easyObj.getItem("root", "left", "leaf");
// leafValue === "oooh!"
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

