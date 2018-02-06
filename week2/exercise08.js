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
