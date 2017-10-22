// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
}
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
     rover.direction = "W";
     break;
   case "W":
     rover.direction = "S";
     break;
   case "S":
     rover.direction = "E";
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N"
      rover.direction = "E"
      break;
      case :

        break;
    default:

  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}


}
