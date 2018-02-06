var x = [1,2,3];
var y = [1,2,3];
var z = y;
console.log(x == y);  // false
console.log(x === y); // false
console.log(z == y);  // true;
console.log(z == x);  // false;
