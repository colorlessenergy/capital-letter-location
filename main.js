var capitals = function (word) {
var location = [];
for (var i = 0; i < word.split("").length; i++) {
  if (word.split("")[i] === word.split("")[i].toUpperCase()) {
    location.push(i)
  }
}
return location
};
