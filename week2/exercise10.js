let vehicles = ["motorbike", "caravan", "bike", "spaceship", "rocket"];
function advertisement(listOfVehicles) {
  let message = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < listOfVehicles.length -2; i++) {
    message += listOfVehicles[i];
    message += "s, ";
  }
  message += listOfVehicles[(listOfVehicles.length - 2)];
  message += "s and ";
  message += listOfVehicles[(listOfVehicles.length - 1)];
  message += "s.";

  console.log(message)
}
advertisement(vehicles);
