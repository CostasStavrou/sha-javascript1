# [SocialHackersAcademy](https://www.socialhackersacademy.org/) - JavaScript module

These are the projects and answers for the first 3 weeks of the JavaScript module.
Look at the [SHA JavaScript-Old repo](https://github.com/SocialHackersCodeSchool/JavaScript-Old)
for specifics.

Some of these were in seperate files according to the instructions, but the
answers are so small that I include them in the README files

## Week 1 assignment

Questions with answers:

1. Declare a variable `x` and initialize it with an integer.

*Answer*

```js
let x = 34;
```


2. How do you round the number 7.25, to the nearest whole number?

*Answer*

```js
alert(Math.round(7.25));
```


3. Create a array called `colors` with the strings red, green and blue inside.

*Answer*

```js
let colors = ["red", "green", "blue"];
```


4. How can you find the length of the object you just created?

*Answer*

```js
let colors = ["red", "green", "blue"];
alert(colors.length);
```


5. Write a program that checks the types of two variables and prints
out `SAME TYPE` if they are the same type.
For example:

    let x = 9;
    let y = 'Hello';

    if () {
      console.log('SAME TYPE');
    }

*Answer*

```js
let x = 10;
let y = "EcmaScript";

if (typeof(x) === typeof(y)) {
  console.log("SAME TYPE");
}
```


6. If `x` equals 7, and the only other statement is `x = x % 3`, what
would be the new value of `x`?

*Answer*

```js
let x = 7;
x = x % 3;
console.log(x);    // 1
```



## Week 2 assignment

Questions with answers:

1. Create a function that takes 3 arguments and returns the sum of the
three arguments.

*Answer*

```js
function sumOfThree(one, two, three) {
  return one + two + three;
}
console.log(sumOfThree(3, 7, 5));
```

2. Create a function named `colorCar` that receives a color, and
prints out, "a red car" for example.

*Answer*

```js
function colorCar(color) {
  console.log("a " + color + " car");
}
colorCar("red");
```

3. Create a function named `vehicleType` that receives a color, and a
code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for
example when called as `vehicleType("blue", 2)`

*Answer*

```js
function vehicleType(color, type) {
  let stringOfType = "";
  switch (type) {
    case 1: stringOfType = "car";
    break;
    case 2: stringOfType = "motorbike";
    break;
    default: stringOfType = "";
  }
  console.log("a " + color + " " + stringOfType);
}
vehicleType("blue", 2);
```

4. Can you write the following without the `if` statement, but with
just as a single line with `console.log(...);`?
```js
if (3 === 3) {
    console.log("true")
} else {
    console.log("false")
}
```

*Answer*

```js
console.log((3 === 3) ? "true": "false");
```

5. Create a function called `vehicle`, like before, but takes
another parameter called age, so that
    * `vehicle("blue", 1, 2)` prints "a blue used car".
    * `vehicle("blue", 1, 1)` prints "a blue new car".

*Answer*

```js
function vehicle(color, type, age) {
  let stringOfType = "", stringOfAge = "";
  switch (type) {
    case 1: stringOfType = "car";
    break;
    case 2: stringOfType = "motorbike";
    break;
    default: stringOfType = "";
  }
  switch (age) {
    case 1: stringOfAge = "new";
    break;
    case 2: stringOfAge = "used";
    break;
    default: stringOfAge = "";
  }
  console.log("a " + color + " " + stringOfAge + " " + stringOfType);
}
vehicle("blue", 2, 1);
```

6. Make a list of vehicles, you can add `"motorbike"`,
`"caravan"`, `"bike"`, or more.

*Answer*

```js
let vehicles = ["motorbike", "caravan", "bike", "spaceship"];
```

7. How do you get the third element from that list?

*Answer*

```js
let vehicles = ["motorbike", "caravan", "bike", "spaceship"];
vehicles[2];
```

8. Change the function `vehicle` to use the list of question 6. So
that `vehicle("green", 3, 1)` prints "a green new caravan".

*Answer*

```js
function vehicle(color, type, age) {
  type--;   // We want to choose type starting from 1, not 0
  let vehicles = ["motorbike", "caravan", "bike", "spaceship"];
  let stringOfType = "", stringOfAge = "";
  if (type < vehicles.length && type >= 0) {
    stringOfType = vehicles[type];
  } else {
    stringOfType = "";
  }

  switch (age) {
    case 1: stringOfAge = "new";
    break;
    case 2: stringOfAge = "used";
    break;
    default: stringOfAge = "";
  }
  console.log("a " + color + " " + stringOfAge + " " + stringOfType);
}
vehicle("green", 3, 1);
```

9. Use the list of vehicles to write an advertisement. So that it
prints something like: `"Amazing Joe's Garage, we service cars,
motorbikes, caravans and bikes."`. (Hint: use a `for` loop.)

*Answer*

```js
let vehicles = ["motorbike", "caravan", "bike", "spaceship"];
function advertisement(listOfVehicles) {
  let message = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < listOfVehicles.length -2; i++) {
    message += listOfVehicles[i];
    message += "s, ";
  }
  message += listOfVehicles[(listOfVehicles.length - 2)];
  message += "s, and ";
  message += listOfVehicles[(listOfVehicles.length - 1)];
  message += "s.";

  console.log(message)
}
advertisement(vehicles);
```

10. What if you add one more vehicle to the list, can you have that
added to the advertisement without changing the code for question 9?

*Answer*

```js
let vehicles = ["motorbike", "caravan", "bike", "spaceship", "rocket"];
function advertisement(listOfVehicles) {
  let message = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < listOfVehicles.length -2; i++) {
    message += listOfVehicles[i];
    message += "s, ";
  }
  message += listOfVehicles[(listOfVehicles.length - 2)];
  message += "s, and ";
  message += listOfVehicles[(listOfVehicles.length - 1)];
  message += "s.";

  console.log(message)
}
advertisement(vehicles);
```

11. Write some code to test two arrays for equality using `==` and `===`.
Test the following:

```js
    var x = [1,2,3];
    var y = [1,2,3];
    var z = y;
```

What do you think will happen with `x == y`, `x === y` and `z == y` and `z == x`? Prove it!

> Don't cheat! Seriously - try it first.

*Answer*

```js
var x = [1,2,3];
var y = [1,2,3];
var z = y;
console.log(x == y);  // false
console.log(x === y); // false
console.log(z == y);  // true;
console.log(z == x);  // false;
```

12. What does the following code return? (And why?)
```js
let bar = 42;
typeof typeof bar;
```

> ‘Coerce' means to try to change - so coercing `var x = '6'` to number means trying to change the type to number temporarily.

*Answer*

```js
let bar = 42;
typeof typeof bar;

/* bar is a number, so typeof bar returns "number".
typeof returns always a string. So typeof typeof bar is
actually typeof (typeof bar), which is typeof "number"
which is "string" */
```

# License and Copyright

Unless explicitly specified all this is copyrighted by Costas Stavrou, the
author of these Github pages and GPL-3 licensed.
