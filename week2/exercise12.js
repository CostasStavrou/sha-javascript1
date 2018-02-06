let bar = 42;
typeof typeof bar;

/* bar is a number, so typeof bar returns "number".
typeof returns always a string. So typeof typeof bar is
actually typeof (typeof bar), which is typeof "number"
which is "string" */
