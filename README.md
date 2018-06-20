# [SocialHackersAcademy](https://www.socialhackersacademy.org/) - JavaScript module

These are the projects and answers for the first 3 weeks of the JavaScript module.
Look at the [SHA JavaScript-Old repo](https://github.com/SocialHackersCodeSchool/JavaScript-Old)
for specifics.

Some of these were in seperate files according to the instructions, but the
answers are so small that I include them in the README files

## Week 1 assignment

Provide the answers to the following:

1. Declare a variable `x` and initialize it with an integer.

2. How do you round the number 7.25, to the nearest whole number?

3. Create a array called `colors` with the strings red, green and blue inside.

4. How can you find the length of the object you just created?

5. Write a program that checks the types of two variables and prints
out `SAME TYPE` if they are the same type.
For example:

    let x = 9;
    let y = 'Hello';

    if () {
      console.log('SAME TYPE');
    }


6. If `x` equals 7, and the only other statement is `x = x % 3`, what
would be the new value of `x`?


**Answers**

1.
  ```js
  let x = 34;
  ```

2.
  ```js
  alert(Math.round(7.25));
  ```

3.
  ```js
  let colors = ["red", "green", "blue"];
  ```

4.
  ```js
  let colors = ["red", "green", "blue"];
  alert(colors.length);
  ```

5.
  ```js
  let x = 10;
  let y = "EcmaScript";

  if (typeof(x) === typeof(y)) {
    console.log("SAME TYPE");
  }
  ```

6.
  ```js
  let x = 7;
  x = x % 3;
  console.log(x);    // 1
  ```



# License and Copyright

Unless explicitly specified all this is copyrighted by Costas Stavrou, the
author of these Github pages and GPL-3 licensed.
