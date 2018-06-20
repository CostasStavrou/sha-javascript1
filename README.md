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



## Week 3 assignment: Custom DOM manipulation challenge :mortar_board:

1. Open a new js file and start by declaring an array that contains 10
strings. These strings should be of book titles you have read (or made
up) and be lowercase without spaces or special characters so that you
can use these later as Id's. (Example: Harry Potter's - The Chamber of
Secrets -> `harry_potter_chamber_secrets`).

2. Create a basic html file called index.html and use it to load the
js file, confirm the console.log() show the array. (This is for debugging
and making sure everything is in order. You can delete the console.log()
later when you're done :))

3. Make a function (or functions) that generate a `ul` with `li` elements
for each book ID in the array using a for loop.

4. Make an object containing information for each book. Each item (object)
in this object should have the book ID you thought up in point 1 as a
key, and it should have at least the following fields: title, language
and author.

5. Now change the function you used to display the book ID's in a list
to take the actual information about the book from the object and display
that. Make sure you choose the right html elements for each piece of info,
for instance, a heading for the title.

6. Beautify your html page with css, add sources and alts to each
of the images.

7. Download book covers for each book, construct a new Object which
has as keys the bookId's again, and as value the path to the image
source (e.g. `{"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}`).
Now loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at
the corresponding `li` element. Remember that Objects are not ordered,
so you cannot guarantee that the first key is the first `li` element.
(_Hint: you could give each `li` item an `id` tag by modifying the
function you made before_)


*Answer*

[DOM manipulations](https://costasstavrou.github.io/sha-javascript1/week3/index.html)


# License and Copyright

Unless explicitly specified all this is copyrighted by Costas Stavrou, the
author of these Github pages and GPL-3 licensed.
