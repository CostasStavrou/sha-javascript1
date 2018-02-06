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
