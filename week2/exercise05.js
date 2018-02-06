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
