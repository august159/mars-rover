// Rover Object Goes Here
// ======================
//Single rover object
var rover ={
  direction: "N" ,
  x:0 ,
  y:0 ,
  travelog:[[0,0]]
}
//Array of rover objects
//var rover = [{  direction: "N" ,  x:0 ,  y:0 ,  travelog:[[0,0]]},{ direction: "N" ,  x:0 ,  y:0 ,  travelog:[[0,0]]}]


//Rover direction changing anti-clockwise ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
 
switch(rover.direction){
  case "N":
     rover.direction= "W"
     console.log ("Rover is facing west")
     break;
  case "W":
     rover.direction="S"
     console.log("Rover is facing South")
     break;
  case "S":
     rover.direction="E"
     console.log("Rover is facing East")
     break;  
  case "E":
     rover.direction="N"
     console.log("Rover is facing North")
     break;  
  default:
     console.log("Invalid direction")
     break;    
    }  
  }
//Rover direction changing Clockwise ======================

function turnRight(rover){
  console.log("turnRight was called!");
   
switch(rover.direction){
  case "N":
     rover.direction= "E"
     console.log ("Rover is facing East")
     break;
  case "E":
     rover.direction="S"
     console.log("Rover is facing South")
     break;
  case "S":
     rover.direction="W"
     console.log("Rover is facing West")
     break;  
  case "W":
     rover.direction="N"
     console.log("Rover is facing North")
     break;
  default:
     console.log("Invalid direction")
     break;      
  }
}

// Rover movement Forward==================================

function moveForward(rover){
  console.log("moveForward was called");

  switch(rover.direction) {
  case "N": 
    var currentY = rover.y--
    console.log("The Rover moves forward")
    break;
  case "S": 
    var currentY = rover.y++
    console.log("The Rover moves down")
    break;  
  case "E": 
    var currentX = rover.x++
    console.log("The Rover moves right")
    break;
  case "W": 
    var currentX = rover.x--
    console.log("The Rover moves left")
    break;
  }
}

// Rover movement backward ==================================

function moveBackward(rover){
  console.log("move backward was called");

  switch(rover.direction) {
  case "N": 
    var currentY = rover.y++
    console.log("The Rover moves backward")
    break;
  case "S": 
    var currentY = rover.y--
    console.log("The Rover moves up")
    break;  
  case "E": 
    var currentX = rover.x--
    console.log("The Rover moves left")
    break;
  case "W": 
    var currentX = rover.x++
    console.log("The Rover moves right")
    break;
  }
}

//Validate position of rover
function validatePosition(rover){
        if(rover.y<0) {
          rover.y++
          console.log("Grid boundary reached, no movement done. Enter a different value");
          return 0;
        }
        if(rover.y>10) {
          rover.y--
          console.log("Grid boundary reached, no movement done. Enter a different value");
          return 0;
        }
        if(rover.x<0) {
          rover.x++
          console.log("Grid boundary reached, no movement done. Enter a different value");
          return 0;
        }
        if(rover.x>10) {
          rover.x--
          console.log("Grid boundary reached, no movement done. Enter a different value");
          return 0;
        }
        return 1;
}

// after entering a string Count Rover steps & displaying it's position

function doMovement(str, rover){
  var movementCounter = 0
  
    for(var i=0;i<str.length; i++) {
      if((str.charAt(i)==="l")||(str.charAt(i)==="f")||(str.charAt(i)==="b")||(str.charAt(i)==="r")){     //Validate str to l, r, f,b
        if (str.charAt(i) ==="l") {
        console.log("-------------------")
        turnLeft(rover)
        }
        if (str.charAt(i) ==="r") {
        console.log("-------------------")
        turnRight(rover)
        }
        if (str.charAt(i) ==="f") {
        console.log("-------------------")
        movementCounter++
        console.log("Movement No."+movementCounter)
        moveForward(rover)
        if(validatePosition(rover)) {
          rover.travelog.push([rover.x,rover.y])     
        }  
        }   
        if (str.charAt(i) ==="b") {
        console.log("-------------------")
        movementCounter++
        console.log("Movement No."+movementCounter)
        moveBackward(rover)
        if(validatePosition(rover)) {
          rover.travelog.push([rover.x,rover.y])    
        }   
        } 
    }
    else {
      console.log("Invalid command. Enter either l, f, r or b");
    }
   }   
    console.log("******Printing positions*********")
    for(var i=0;i<rover.travelog.length;i++) {
      console.log("Position "+i+": "+rover.travelog[i]); 
    }
  }